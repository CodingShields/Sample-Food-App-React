import React from "react";

const Hero = () => {
	return (
		<div className='max-w-[1640px] mx-auto p-4'>
			<div className='max-h-[500px] relative'>
				{/* Overlay */}
				<div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
					<h1 className='px-4 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-thin'>
						The Art of{" "}
						<span className='text-orange-500 italic px-4 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-yellowTail font-thin	tracking-wider	'>
							Gourmet
						</span>
					</h1>
					<h1 className='px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin pt-4 indent-5 italic'> Where Every Bite ...</h1>
					<h1 className='px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin'>
						is a{" "}
						<span className='text-orange-500 italic px-4 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-yellowTail font-thin	tracking-wider 	'>
							Masterpiece
						</span>
					</h1>
				</div>
				<img
					className='w-full max-h-[500px] object-cover'
					src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					alt='/'
				/>
			</div>
		</div>
	);
};

export default Hero;
