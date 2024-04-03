import React, { useState, useEffect } from "react";
import { data } from "../data/data.js";
import Modal from "./Modal";

const modalMessages = [
	"Sorry, we are out of that current selection, please try another",
	"Oops!  the developer ate all the food, please try another selection",
	"Thanks for viewing my project! Interested in working together? Let's chat!",
];

const Food = () => {
	const [foods, setFoods] = useState(data);
	const [activeFood, setActiveFood] = useState("all");
	const [activePrice, setActivePrice] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [emoji, setEmoji] = useState("");
	const [modalMessage, setModalMessage] = useState(modalMessages[0]);
	const [modalMessageIndex, setModalMessageIndex] = useState(0);
	const [cta, setCta] = useState(false);
	//reset filters and state on component mount
	useEffect(() => {
		console.log("Food component mounted");
		setActiveFood("all");
		setActivePrice("");
		setIsOpen(false);
		setEmoji("");
		setModalMessage("");
		setModalMessageIndex(0);
		setModalMessage(modalMessages[0]);
		setIsOpen(false);
		setCta(false);
	}, []);

	//   Filter Type burgers/pizza/etc
	const filterType = (category) => {
		setFoods(
			data.filter((item) => {
				return item.category === category;
			})
		);
		setActiveFood(category);
	};

	//   Filter by price
	const filterPrice = (price) => {
		if (price === "") {
			setFoods(data);
			setActivePrice("");
			return;
		}
		setFoods(
			data.filter((item) => {
				return item.price === price;
			})
		);
		setActivePrice(price);
	};

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	const handleModalClose = () => {
		if (modalMessageIndex === 3) {
			setIsOpen(false);
			setModalMessageIndex(0);
		} else {
			setIsOpen(false);
		}
	};

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

	return (
		<div className='max-w-[1640px] m-auto px-4 py-12'>
			<Modal cta={cta} onClose={handleModalClose} isOpen={isOpen} children={modalMessage} emoji={emoji} />
			<h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

			{/* Filter Row */}
			<div className='flex flex-col lg:flex-row justify-between'>
				{/* Fliter Type */}
				<div>
					<p className='font-bold text-gray-700'>Filter Type</p>
					<div className='flex justfiy-between flex-wrap space-x-4'>
						<button
							onClick={() => setFoods(data)}
							className={classNames(
								"m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl hover:scale-125 duration-300 transition-all ease-in-out",
								activeFood === "all" ? "bg-orange-600 text-white" : ""
							)}
						>
							All
						</button>
						<button
							onClick={() => filterType("burger")}
							className={classNames(
								"m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl hover:scale-125 duration-300 transition-all ease-in-out",
								activeFood === "burger" ? "bg-orange-600 text-white" : ""
							)}
						>
							Burgers
						</button>
						<button
							onClick={() => filterType("pizza")}
							className={classNames(
								"m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl hover:scale-125 duration-300 transition-all ease-in-out",
								activeFood === "pizza" ? "bg-orange-600 text-white" : ""
							)}
						>
							Pizza
						</button>
						<button
							onClick={() => filterType("salad")}
							className={classNames(
								"m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl hover:scale-125 duration-300 transition-all ease-in-out",
								activeFood === "salad" ? "bg-orange-600 text-white" : ""
							)}
						>
							Salads
						</button>
						<button
							onClick={() => filterType("chicken")}
							className={classNames(
								"m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl hover:scale-125 duration-300 transition-all ease-in-out",
								activeFood === "chicken" ? "bg-orange-600 text-white" : ""
							)}
						>
							Chicken
						</button>
					</div>
				</div>

				{/* Filter Price */}
				<div>
					<p className='font-bold text-gray-700 text-center'>Filter Price</p>
					<div className='flex justify-between max-w-[390px] w-full '>
						<button
							onClick={() => filterPrice("")}
							className={classNames(
								"m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl hover:scale-125 duration-300 transition-all ease-in-out",
								activePrice === "" ? "bg-orange-600 text-white" : ""
							)}
						>
							All
						</button>
						<button
							onClick={() => filterPrice("$")}
							className={classNames(
								"m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl hover:scale-125 duration-300 transition-all ease-in-out",
								activePrice === "$" ? "bg-orange-600 text-white" : ""
							)}
						>
							$
						</button>
						<button
							onClick={() => filterPrice("$$")}
							className={classNames(
								"m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl hover:scale-125 duration-300 transition-all ease-in-out",
								activePrice === "$$" ? "bg-orange-600 text-white" : ""
							)}
						>
							$$
						</button>
						<button
							onClick={() => filterPrice("$$$")}
							className={classNames(
								"m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl hover:scale-125 duration-300 transition-all ease-in-out",
								activePrice === "$$$" ? "bg-orange-600 text-white" : ""
							)}
						>
							$$$
						</button>
						<button
							onClick={() => filterPrice("$$$$")}
							className={classNames(
								"m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl hover:scale-125 duration-300 transition-all ease-in-out",
								activePrice === "$$$$" ? "bg-orange-600 text-white" : ""
							)}
						>
							$$$$
						</button>
					</div>
				</div>
			</div>

			{/* Display foods */}
			<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
				{foods.map((item, index) => (
					<div id='foods' key={index} onClick={handleModalClick} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
						<img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg cursor-pointer' />
						<div className='flex justify-between px-2 py-4'>
							<p className='font-bold'>{item.name}</p>
							<p>
								<span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Food;
