'use client'

import { Button } from '../ui/button'
import { Toggle } from '../ui/toggle'

import { Globe, Lightbulb, Paperclip, Send } from 'lucide-react'
import { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Textarea } from '../ui/textarea'

export const AIChatInput = () => {
	const [input, setInput] = useState<string>('')

	const handleInputChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
	): void => {
		setInput(e.target.value)
	}

	const handleSubmit = () => {
		console.log('Submitted:', { input })
		setInput('')
	}

	return (
		<Card className='w-full rounded-card max-w-2xl'>
			<CardContent>
				<div className='w-full'>
					<Textarea
						placeholder='Ask me anything...'
						value={input}
						onChange={handleInputChange}
						className='grow border-none ring-0 outline-none shadow-none focus:border-none focus:ring-0 focus:outline-none focus:shadow-none hover:border-none hover:ring-0 hover:outline-none hover:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none bg-transparent'
					/>
				</div>

				<div className='w-full flex items-center justify-between gap-2 '>
					<div className='flex items-center justify-center gap-2'>
						<Button variant={'ghost'} size={'icon'} className='rounded-md'>
							<Paperclip />
						</Button>
						<Toggle className='h-9 w-9'>
							<Lightbulb className='size-4 shrink-0' />
						</Toggle>
						<Toggle className='font-normal flex gap-1.5 items-center text-sm'>
							<Globe className='size-4 shrink-0' />{' '}
							<span className='max-sm:hidden'>Search</span>
						</Toggle>
					</div>
					<div className='flex items-center justify-center gap-1'>
						<Button
							onClick={handleSubmit}
							size={'icon'}
							className='rounded-md'
							variant={'default'}
						>
							<Send />
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
