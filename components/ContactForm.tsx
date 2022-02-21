import { NextPage } from 'next';
import { SyntheticEvent, useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: NextPage = () => {
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		const res = await fetch('/api/ses', {
			body: JSON.stringify({
				email: 'ckasidis@icloud.com',
				fullname: 'Kasidis Chantharojwong',
				subject: 'Hello',
				message: 'Just a test mail',
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});

		const { error } = await res.json();
		if (error) {
			console.log(error);
			return;
		}
	};

	return (
		<form className="grid w-3/4 max-w-3xl" onSubmit={handleSubmit}>
			<label htmlFor="fullname" className="text-gray-500 mt-5 mb-2">
				Full name<span className="text-red-500">*</span>
			</label>
			<input
				className="bg-gray-800 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-50 text-gray-50"
				type="text"
				name="fullname"
				value={fullname}
				onChange={(e) => {
					setFullname(e.target.value);
				}}
			/>

			<label htmlFor="email" className="text-gray-500 mt-5 mb-2">
				E-mail<span className="text-red-500">*</span>
			</label>
			<input
				className="bg-gray-800 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-50 text-gray-50"
				type="email"
				name="email"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>

			<label htmlFor="subject" className="text-gray-500 mt-5 mb-2">
				Subject<span className="text-red-500">*</span>
			</label>
			<input
				className="bg-gray-800 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-50 text-gray-50"
				type="text"
				name="subject"
				value={subject}
				onChange={(e) => {
					setSubject(e.target.value);
				}}
			/>

			<label htmlFor="message" className="text-gray-500 mt-5 mb-2">
				Message<span className="text-red-500">*</span>
			</label>
			<textarea
				className="bg-gray-800 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-50 text-gray-50"
				name="message"
				value={message}
				onChange={(e) => {
					setMessage(e.target.value);
				}}
			></textarea>
			<motion.button
				type="submit"
				className="bg-gray-50 hover:bg-gray-600 w-40 px-10 py-3 mt-10 rounded-full hover:text-gray-50 text-lg text-center font-bold"
				whileHover={{ scale: 1.1 }}
			>
				Send
			</motion.button>
		</form>
	);
};

export default ContactForm;