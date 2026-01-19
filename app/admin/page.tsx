"use client";

import { useTransition, useState, useEffect } from "react";
import { createProject, deleteProject, getProjects } from "../actions";
import Image from "next/image";

export default function AdminPage() {
    const [isPending, startTransition] = useTransition();
    interface Project {
        id: number;
        title: string;
        description: string;
        category: string;
        techStack: string;
        imageUrl: string | null;
    }
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        getProjects().then(setProjects);
    }, []);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        startTransition(async () => {
            const result = await createProject(formData);
            if (result.success) {
                const updated = await getProjects();
                setProjects(updated);
                (event.target as HTMLFormElement).reset();
                alert(result.message);
            } else {
                alert(result.message);
            }
        });
    }

    async function handleDelete(id: number) {
        if (!confirm("Are you sure?")) return;
        startTransition(async () => {
            const result = await deleteProject(id);
            if (result.success) {
                const updated = await getProjects();
                setProjects(updated);
            } else {
                alert(result.message);
            }
        });
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8 font-sans text-gray-800">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">Portfolio CMS Admin</h1>

                {/* ADD FORM */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Title</label>
                            <input name="title" required className="w-full p-2 border rounded" placeholder="Project Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <textarea name="description" required className="w-full p-2 border rounded" placeholder="Short description..." />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Category</label>
                                <input name="category" required className="w-full p-2 border rounded" placeholder="e.g. Web App" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Tech Stack</label>
                                <input name="techStack" required className="w-full p-2 border rounded" placeholder="React, Node, etc." />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Image URL</label>
                            <input type="url" name="imageUrl" required className="w-full p-2 border rounded" placeholder="https://example.com/image.png" />
                        </div>
                        <button
                            disabled={isPending}
                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
                        >
                            {isPending ? "Saving..." : "Create Project"}
                        </button>
                    </form>
                </div>

                {/* LIST */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Existing Projects</h2>
                    <div className="space-y-4">
                        {projects.map((p) => (
                            <div key={p.id} className="flex items-start gap-4 p-4 border rounded hover:bg-gray-50">
                                {p.imageUrl && (
                                    <div className="relative w-24 h-24 rounded bg-gray-200 overflow-hidden">
                                        <Image src={p.imageUrl} alt={p.title} fill className="object-cover" />
                                    </div>
                                )}
                                <div className="flex-1">
                                    <h3 className="font-bold">{p.title}</h3>
                                    <p className="text-sm text-gray-500 mb-2">{p.category} | {p.techStack}</p>
                                    <p className="text-gray-700 text-sm">{p.description}</p>
                                </div>
                                <button
                                    onClick={() => handleDelete(p.id)}
                                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                        {projects.length === 0 && <p className="text-gray-500">No projects found.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
