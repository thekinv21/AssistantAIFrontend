import { AIChatInput } from '@/components/ui/AIChatInput'

export default function Home() {
	return (
		<div className='flex flex-col h-screen w-full items-center justify-center gap-12'>
			<h1 className='text-3xl'>Welcome to Assistant AI</h1>
			<AIChatInput />
		</div>
	)
}
