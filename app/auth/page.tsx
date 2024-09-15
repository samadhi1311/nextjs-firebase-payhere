'use client';

import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const FormSchema = z.object({
	email: z.string().email({ message: 'Invalid email address.' }),
	password: z.string().min(8, { message: 'Minimum of 8 characters are required.' }),
});

export default function InputForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: '',
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: 'You submitted the following values:',
			description: (
				<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
					<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
		console.log(data);
	}

	return (
		<main className='flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
			<Card className='mx-auto w-full max-w-[400px]'>
				<CardHeader>
					<CardTitle className='text-2xl'>Login</CardTitle>
					<CardDescription>Enter your email below to login to your account</CardDescription>
				</CardHeader>
				<CardContent>
					<div className='grid'>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
								<Label htmlFor='email'>Email</Label>
								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input placeholder='email' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className='grid gap-2'>
									<div className='flex items-center'>
										<Label htmlFor='password'>Password</Label>
										<Link href='#' className='ml-auto inline-block text-sm underline'>
											Forgot your password?
										</Link>
									</div>
									<FormField
										control={form.control}
										name='password'
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input placeholder='password' {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<Button type='submit' className='w-full'>
									Login
								</Button>
								<Button variant='outline' className='w-full'>
									Login with Google
								</Button>
								<div className='mt-4 text-center text-sm'>
									Don&apos;t have an account?{' '}
									<Link href='#' className='underline'>
										Sign up
									</Link>
								</div>
							</form>
						</Form>
					</div>
				</CardContent>
			</Card>
		</main>
	);
}
