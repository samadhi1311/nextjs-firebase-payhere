import md5 from 'md5';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function Checkout() {
	const merchantSecret = 'MzYzNzk0NjQ0Nzc3ODY3Njg5MDQxNjY1NDUyOTIxNDIyNjUyMDEw';
	const merchantId = '1228232';
	const orderId = '12345';
	const amount: number = 1000;
	const hashedSecret = md5(merchantSecret).toString().toUpperCase();
	const amountFormatted = parseFloat(amount.toString()).toLocaleString('en-us', { minimumFractionDigits: 2 }).replaceAll(',', '');
	const currency = 'LKR';
	const hash = md5(merchantId + orderId + amountFormatted + currency + hashedSecret)
		.toString()
		.toUpperCase();

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<Card>
				<CardHeader>
					<h1 className='text-2xl'>Checkout</h1>
				</CardHeader>
				<CardContent>
					<form method='post' action='https://sandbox.payhere.lk/pay/checkout' className='w-full md:w-[500px] flex flex-col gap-2'>
						<Input type='hidden' name='merchant_id' defaultValue={'1228232'} />
						<Input type='hidden' name='return_url' defaultValue='http://sample.com/return' />
						<Input type='hidden' name='cancel_url' defaultValue='http://sample.com/cancel' />
						<Input type='hidden' name='notify_url' defaultValue='http://sample.com/notify' />
						<br />
						<br />
						Item Details
						<br />
						<Input type='text' name='order_id' defaultValue={orderId} />
						<Input type='text' name='items' defaultValue='Door bell wireless' />
						<Input type='text' name='currency' defaultValue={currency} />
						<Input type='text' name='amount' defaultValue={amountFormatted} />
						<br />
						<br />
						Customer Details
						<br />
						<Input type='text' name='first_name' defaultValue='Saman' />
						<Input type='text' name='last_name' defaultValue='Perera' />
						<Input type='text' name='email' defaultValue='samanp@gmail.com' />
						<Input type='text' name='phone' defaultValue='0771234567' />
						<Input type='text' name='address' defaultValue='No.1, Galle Road' />
						<Input type='text' name='city' defaultValue='Colombo' />
						<Input type='hidden' name='country' defaultValue='Sri Lanka' />
						<Input type='hidden' name='hash' defaultValue={hash} />
						<Button type='submit'>Buy Now</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
