import SnippetEditor from '@/components/SnippetEditor'
import { prisma } from '@/lib/prisma';
import React from 'react'

const EditSnippetPage = async ({ params }: { params: Promise<{snippetId: string}>}) => {
    const snippetId = (await params).snippetId;

    const codeData = await prisma.snippet.findUnique({
        where: {
            id: Number(snippetId)
        }
    })

    if (!codeData) {
        return <div className='flex justify-center items-center h-screen'>Snippet not found</div>
    }
  return (
    <div>
        <SnippetEditor snippet={codeData} />
    </div>
  )
}

export default EditSnippetPage