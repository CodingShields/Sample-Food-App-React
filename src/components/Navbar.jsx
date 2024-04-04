import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [delivery, setDelivery] = useState("Delivery");

	console.log(delivery);

	return (
		<div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
			{/* Left side */}
			<div className='flex items-center '>
				<div className='inline-flex items-center group'>
					<div
						onClick={() => setNav(!nav)}
						className='cursor-pointer group-hover:scale-115 group-hover:bg-black group-hover:p-2 group-hover:rounded-full transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:shadow-black'
					>
						<AiOutlineMenu className='group-hover:scale-125 group-hover:text-white transition-all duration-300 ease-in-out' size={30} />
					</div>
					<h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 group-hover:text-orange-500 transition-all duration-300 ease-in-out'>
						Gourmet <span className='font-bold'>Masterpiece</span>
					</h1>
				</div>

				<div className='ml-4 hidden lg:flex items-center bg-orange-500 rounded-full p-2 text-[16px] shadow-md hover:shadow-2xl hover:shadow-black transition-all ease-in-out duration-300 '>
					<p
						onClick={() => setDelivery("Delivery")}
						className={
							delivery === "Delivery"
								? "bg-black text-white rounded-full p-2 transition-all duration-500 ease-in-out cursor-pointer w-16 text-center"
								: "text-black rounded-full p-2 transition-all duration-500 ease-in-out cursor-pointer w-16 text-center"
						}
					>
						Delivery
					</p>
					<p
						onClick={() => setDelivery("Pickup")}
						className={
							delivery === "Pickup"
								? "bg-black text-white rounded-full p-2 transition-all duration-500 ease-in-out cursor-pointer w-16 text-center"
								: "text-black rounded-full p-2 transition-all duration-500 ease-in-out cursor-pointer w-16 text-center"
						}
					>
						Pickup
					</p>
				</div>
			</div>

			{/* Search Input */}
			<div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
				<AiOutlineSearch size={25} />
				<input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search foods' />
			</div>
			{/* Cart button */}
			<button className='bg-black text-white hidden md:flex items-center p-4 rounded-full hover:bg-orange-500 transition-all duration-300 ease-in-out hover:shadow-black shadow-2xl'>
				<BsFillCartFill size={24} className='mr-2 text-md' /> Cart
			</button>

			{/* Mobile Menu */}
			{/* Overlay */}
			{nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ""}

			{/* Side drawer menu */}
			<div
				className={
					nav
						? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
						: "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
				}
			>
				<AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 hover:cursor-pointer' />
				<h2 className='text-3xl p-4 '>
					Gourmet <span className='font-bold'>Masterpiece</span>
				</h2>
				<nav>
					<ul className='flex flex-col p-4 text-gray-800 space-y-8'>
						<li className='text-xl p-2 inline-flex h-fit w-fit items-center hover:rounded-2xl hover:underline hover:cursor-pointer hover:text-white hover:bg-orange-500 hover:scale-125 hover:translate-x-4 transition-all duration-300 ease-in-out'>
							<TbTruckDelivery size={25} className='mr-4 ' /> Orders
						</li>
						<li className='text-xl p-2 inline-flex h-fit w-fit items-center hover:rounded-2xl hover:underline hover:cursor-pointer hover:text-white hover:bg-orange-500 hover:scale-125 hover:translate-x-4 transition-all duration-300 ease-in-out'>
							<MdFavorite size={25} className='mr-4' /> Favorites
						</li>
						<li className='text-xl p-2 inline-flex h-fit w-fit items-center hover:rounded-2xl hover:underline hover:cursor-pointer hover:text-white hover:bg-orange-500 hover:scale-125 hover:translate-x-4 transition-all duration-300 ease-in-out'>
							<FaWallet size={25} className='mr-4' /> Wallet
						</li>
						<li className='text-xl p-2 inline-flex h-fit w-fit items-center hover:rounded-2xl hover:underline hover:cursor-pointer hover:text-white hover:bg-orange-500 hover:scale-125 hover:translate-x-4 transition-all duration-300 ease-in-out'>
							<MdHelp size={25} className='mr-4' /> Help
						</li>
						<li className='text-xl p-2 inline-flex h-fit w-fit items-center hover:rounded-2xl hover:underline hover:cursor-pointer hover:text-white hover:bg-orange-500 hover:scale-125 hover:translate-x-4 transition-all duration-300 ease-in-out'>
							<AiFillTag size={25} className='mr-4' /> Promotions
						</li>
						<li className='text-xl p-2 inline-flex h-fit w-fit items-center hover:rounded-2xl hover:underline hover:cursor-pointer hover:text-white hover:bg-orange-500 hover:scale-125 hover:translate-x-4 transition-all duration-300 ease-in-out'>
							<BsFillSaveFill size={25} className='mr-4' /> Best Ones
						</li>
						<li className='text-xl p-2 inline-flex h-fit w-fit items-center hover:rounded-2xl hover:underline hover:cursor-pointer hover:text-white hover:bg-orange-500 hover:scale-125 hover:translate-x-4 transition-all duration-300 ease-in-out'>
							<FaUserFriends size={25} className='mr-4' /> Invite Friends
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
