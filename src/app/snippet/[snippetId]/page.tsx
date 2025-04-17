import { deleteSnippet } from '@/actions';
import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import React from 'react'

const SnippetView = async ({ params }: { params: Promise<{ snippetId: string }> }) => {
    const snippetId = (await params).snippetId;

    const finalData = await prisma.snippet.findUnique({
        where: {
            id: Number(snippetId)
        }
    })

    if (!finalData) {
        return <div className='flex justify-center items-center h-screen'>Snippet not found</div>
    }

    console.log(finalData);

    const deleteSnippetHandler = deleteSnippet.bind(null, finalData.id);

    return (
        <div className='flex flex-col gap-4 p-4'>
            <h1 className='font-bold text-md text-gray-600 font-mono'>Code Snippet #{finalData.id}</h1>
            <div className='flex justify-between'>
                <div>
                    <h1 className='font-bold text-2xl'>{finalData.title}</h1>
                </div>
                <div className='flex justify-end gap-2'>
                    <Link href={`/snippet/${snippetId}/edit`}>
                        <Button className='cursor-pointer'>Edit</Button>
                    </Link>

                    <form action={deleteSnippetHandler}>
                        <Button type='submit' className='cursor-pointer' variant='destructive'>Delete</Button>
                    </form>
                </div>
            </div>

            <pre className='bg-gray-200 p-8 rounded-lg font-mono text-sm'>
                {finalData.code}
            </pre>
        </div>
    )
}

export default SnippetView