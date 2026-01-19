'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


export async function getProjects() {
    try {
        return await prisma.project.findMany({
            orderBy: { createdAt: 'desc' },
        });
    } catch (error) {
        console.error("Failed to fetch projects:", error);
        return [];
    }
}

export async function createProject(formData: FormData) {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;
    const techStack = formData.get('techStack') as string;
    const imageUrl = formData.get('imageUrl') as string;

    if (!title || !description || !category || !techStack || !imageUrl) {
        return { success: false, message: "All fields are required" };
    }

    try {
        await prisma.project.create({
            data: {
                title,
                description,
                category,
                techStack,
                imageUrl,
            },
        });

        revalidatePath('/');
        revalidatePath('/admin');
        return { success: true, message: "Project created successfully" };
    } catch (error) {
        console.error("Failed to create project:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        return { success: false, message: "Failed to create project: " + errorMessage };
    }
}

export async function deleteProject(id: number) {
    try {
        await prisma.project.delete({
            where: { id },
        });

        revalidatePath('/');
        revalidatePath('/admin');
        return { success: true, message: "Project deleted successfully" };
    } catch (error) {
        console.error("Failed to delete project:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        return { success: false, message: "Failed to delete project: " + errorMessage };
    }
}

export async function login(prevState: unknown, formData: FormData) {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    console.log("Login attempt:", username); // Debug log

    if (username === 'stuckwyu' && password === '@portfoliowahyu28') {
        const cookieStore = await cookies();
        cookieStore.set('admin_session', 'true', {
            httpOnly: true,
            secure: false, // Forcing false for development debugging
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        });
        redirect('/admin');
    } else {
        return { error: 'Invalid credentials' };
    }
}

export async function logout() {
    (await cookies()).delete('admin_session');
    redirect('/login');
}
