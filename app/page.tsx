import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col items-center row-start-2 gap-8 sm:items-start'>
				<h1 className='text-5xl font-medium tracking-tighter text-transparent bg-gradient-to-b from-gray-100 to-gray-400 bg-clip-text'>Next.JS + Firebase + PayHere</h1>
				<div className='flex flex-col items-center justify-center w-full'>
					<ol className='flex flex-col gap-2 list-decimal'>
						<li>
							<Link href={'/auth'}>User Authetication</Link>
						</li>
						<li>
							<Link href={'/db'}>Firestore and Storage</Link>
						</li>
						<li>
							<Link href={'/checkout'}>PayHere Checkout</Link>
						</li>
						<li>
							<Link href={'/admin'}>Administration Dashboard</Link>
						</li>
					</ol>
				</div>
			</main>
			<footer className='flex flex-wrap items-center justify-center row-start-3 gap-6'>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					<Image aria-hidden src='https://nextjs.org/icons/file.svg' alt='File icon' width={16} height={16} />
					Learn
				</a>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					<Image aria-hidden src='https://nextjs.org/icons/window.svg' alt='Window icon' width={16} height={16} />
					Examples
				</a>
				<a
					className='flex items-center gap-2 hover:underline hover:underline-offset-4'
					href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					<Image aria-hidden src='https://nextjs.org/icons/globe.svg' alt='Globe icon' width={16} height={16} />
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	);
}
