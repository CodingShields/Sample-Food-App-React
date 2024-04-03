import { useState, useEffect } from "react";
import { categories } from "../data/data.js";
import Modal from "./Modal";

const modalMessages = [
	"Sorry, we are out of that current selection, please try another",
	"Oops!  the developer ate all the food, please try another selection",
	"Thanks for viewing my project! Interested in working together? Let's chat!",
];
const Category = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [emoji, setEmoji] = useState("");
	const [modalMessage, setModalMessage] = useState(modalMessages[0]);
	const [modalMessageIndex, setModalMessageIndex] = useState(0);
	const [cta, setCta] = useState(false);
	// reset state on component mount
	console.log(modalMessageIndex);
	useEffect(() => {
		setModalMessageIndex(0);
		setModalMessage(modalMessages[0]);
		setIsOpen(false);
		setCta(false);
	}, []);

	const handleModalClick = () => {
		setIsOpen(true);
		setEmoji("🍔");
		setModalMessageIndex(modalMessageIndex + 1);
		setModalMessage(modalMessages[modalMessageIndex]);
		if (modalMessageIndex === 2) {
			setCta(true);
		} else {
			setCta(false);
		}
	};

	const handleModalClose = () => {
		if (modalMessageIndex === 3) {
			setIsOpen(false);
			setModalMessageIndex(0);
		} else {
			setIsOpen(false);
		}
	};

	return (
		<div className='max-w-[1640px] m-auto px-4 py-12'>
			<Modal cta={cta} onClose={handleModalClose} isOpen={isOpen} children={modalMessage} emoji={emoji} />
			<h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
			{/* Categories */}
			<div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
				{categories.map((item, index) => (
					<div
						key={index}
						className='cursor-pointer bg-gray-100 rounded-lg p-4 flex justify-between items-center shadow-md hover:shadow-md hover:shadow-orange-400 ease-in-out duration-300 transition-all hover:scale-110 group '
						onClick={handleModalClick}
					>
						<h2 className='font-bold sm:text-xl'>{item.name}</h2>
						<img src={item.image} alt={item.name} className='w-20 group-hover:animate-bounce transition-all duration-300 ease-in-out' />
					</div>
				))}
			</div>
		</div>
	);
};

export default Category;
