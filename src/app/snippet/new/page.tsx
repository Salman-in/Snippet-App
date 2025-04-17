"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { useActionState } from 'react'
import * as actions from '@/actions'

const CreateSnippetPage = () => {
    // xyzNewaction - means the changed new action state will be stored here
    // recievedDatafromServerAction - means the error messages received from the server will be stored here

    const [recievedDatafromServerAction, xyzNewaction] = useActionState(actions.createSnippet,{ message: ""})
    
    return (
        <form action={xyzNewaction}>
             <div className='gap-5 flex flex-col'>
            <div className='flex flex-col gap-1.5'>
                <Label>Title:</Label>
                <Input type='text' name='title' id='title' />
            </div>
            <div className='flex flex-col gap-1.5'>
                <Label className='items-start'>Code:</Label>
                <Textarea  name='code' id='code'/>
            </div>
            {
            recievedDatafromServerAction.message && 
            <div className="flex items-center p-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert">
            <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <div className="font-medium">{recievedDatafromServerAction.message}
            </div>
          </div>
          </div>
          } 
           
            <Button type='submit' className="cursor-pointer p-6">Create</Button>
        </div>
        </form>
       
    )
}

export default CreateSnippetPage