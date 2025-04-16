import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const CreateSnippetPage = () => {
    return (
        <form>
             <div className='gap-5 flex flex-col'>
            <div className='flex flex-col gap-1.5'>
                <Label>Title:</Label>
                <Input type='text' name='title' id='title' />
            </div>
            <div className='flex flex-col gap-1.5'>
                <Label className='items-start'>Code:</Label>
                <Textarea />
            </div>
            <Button type='submit' className="cursor-pointer p-6">Create</Button>
        </div>
        </form>
       
    )
}

export default CreateSnippetPage