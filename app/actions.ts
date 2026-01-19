'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


export async function getProjects() {
    return await prisma.project.findMany({
        orderBy: { createdAt: 'desc' },
    });
}

export async function createProject(formData: FormData) {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;
    const techStack = formData.get('techStack') as string;
    const imageUrl = formData.get('imageUrl') as string;

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
}

export async function deleteProject(id: number) {
    // Optional: Delete image file as well if needed
    await prisma.project.delete({
        where: { id },
    });

    revalidatePath('/');
    revalidatePath('/admin');
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
