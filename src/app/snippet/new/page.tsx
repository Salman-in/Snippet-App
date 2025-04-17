import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'

const CreateSnippetPage = () => {
    async function createSnippet(formData: FormData) {
        'use server' 
        const title = formData.get('title') as string;
        const code = formData.get('code') as string;

        const recievedSnippet = await prisma.snippet.create({
            data: {
                title,
                code,
            }
        }) 

        console.log("The data is: ", recievedSnippet);
        redirect('/')

    }
    
    return (
        <form action={createSnippet}>
             <div className='gap-5 flex flex-col'>
            <div className='flex flex-col gap-1.5'>
                <Label>Title:</Label>
                <Input type='text' name='title' id='title' />
            </div>
            <div className='flex flex-col gap-1.5'>
                <Label className='items-start'>Code:</Label>
                <Textarea  name='code' id='code'/>
            </div>
            <Button type='submit' className="cursor-pointer p-6">Create</Button>
        </div>
        </form>
       
    )
}

export default CreateSnippetPage