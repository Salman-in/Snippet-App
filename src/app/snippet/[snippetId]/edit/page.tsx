import SnippetEditor from '@/components/SnippetEditor'
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import React from 'react'

const EditSnippetPage = async ({ params }: { params: Promise<{snippetId: string}>}) => {
    const snippetId = (await params).snippetId;

    const codeData = await prisma.snippet.findUnique({
        where: {
            id: Number(snippetId)
        }
    })

    if (!codeData) {
        return notFound();
    }
  return (
    <div>
        <SnippetEditor snippet={codeData} />
    </div>
  )
}

export default EditSnippetPage