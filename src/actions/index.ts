'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function saveSnippets(id: number, code: string) {
    await prisma.snippet.update({
        where: {
            id: id
        },
        data: {
            code: code
        }
    });

    redirect(`/snippet/${id}`);
}

export const deleteSnippet = async (id: number) => {
    await prisma.snippet.delete({
        where: {
            id: id
        }
    })
    revalidatePath('/'); //On demand revalidating the cache
    redirect('/');
}


export async function createSnippet(prevState: { message: string},formData: FormData) {
    const title = formData.get('title');
    const code = formData.get('code');

    // adding the error handling here
    if(typeof title !== 'string' || title.length < 2) {
        return {message: 'Title is required and should be at least 2 characters long!'}
    }

    if(typeof code !== 'string' || code.length < 2) {
        return {message: 'Code is required and should be at least 2 characters long!'}
    }

    const recievedSnippet = await prisma.snippet.create({
        data: {
            title,
            code,
        }
    })

    console.log("The data is: ", recievedSnippet);
    revalidatePath('/'); //On demand revalidating the cache
    redirect('/')
}
