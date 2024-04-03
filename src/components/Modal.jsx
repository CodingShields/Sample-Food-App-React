import { useEffect, useState } from "react";

const Modal = ({ isOpen, children, emoji, onClose, cta }) => {
	const [copied, setCopied] = useState(false);
	console.log(copied);
	if (!isOpen) return null;

	const handleCopyToClipboard = () => {
		const email = "sweshields@gmail.com";
		navigator.clipboard
			.writeText(email)
			.then(() => {
				setCopied(true);
				// setTimeout(() => {
				// 	setCopied(false);
				// }, 10000);
			})
			.catch((error) => console.error("Unable to copy to clipboard: ", error));
	};

	return (
		<div className=' fixed h-screen w-screen top-0 left-0 bg-black bg-opacity-50 animate-fadeIn duration-300 ease-in-out transition-all z-20'>
			<div className='w-full h-full flex flex-col justify-center items-center'>
				<div className='w-fit h-fit bg-gray-200 px-8 py-6 rounded-xl shadow-2xl shadow-orange-500'>
					<div onClick={onClose} className='flex items-center justify-start w-full h-fit m-0 p-0'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='w-10 h-10 cursor-pointer hover:bg-black hover:text-white rounded-full p-1 hover:scale-110 duration-300 transition-all ease-in-out animate-bounce hover:animate-none'
						>
							<path stroke-linecap='round' stroke-linejoin='round' d='M6 18 18 6M6 6l12 12' />
						</svg>
					</div>
					<div className='flex flex-row items-center justify-center w-full h-full pb-6'>
						{!copied ? (
							<h1 className='text-3xl text-black'>{children}</h1>
						) : (
							<h1 className='text-3xl text-black'> My email address is copied to your clipboard. I am looking forward to chatting with you!</h1>
						)}
						{cta ? "" : <h1 className='animate-bounce text-4xl px-4'>{emoji}</h1>}
						{cta && (
							<div>
								{!copied ? (
									<button
										onClick={handleCopyToClipboard}
										className='animate-fadeIn mx-2 bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-600 duration-300 transition-all ease-in-out hover:shadow-black hover:shadow-2xl'
									>
										Let's Chat
									</button>
								) : null}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
