"use client"
import { Editor } from '@monaco-editor/react'
import type { Snippet } from '@prisma/client'
import { useState } from 'react'
import { Button } from './ui/button'
import { saveSnippets } from '@/actions'

const SnippetEditor = ({snippet}: {snippet: Snippet}) => {
    const [code, setCode] = useState<string>(snippet.code)

    const saveSnippetAction = saveSnippets.bind(null, snippet.id, code)

    const handleEditorChange = (value: string = "") => {
        setCode(value)
    }


  return (
    <div className='flex flex-col gap-8'>
        <form action={saveSnippetAction} className='flex gap-4 items-center justify-between'>
        <h1 className='font-bold text-2xl'>Code editor:</h1>
        <Button type='submit' className='cursor-pointer'>Save</Button>
        </form>
        <div className='rounded-xl bg-gray-300 p-4'>
        <Editor height="40vh" 
        theme='vs-dark'
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={handleEditorChange}/>
        </div>
        
    </div>
  )
}

export default SnippetEditor