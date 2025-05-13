"use client";

import { useState } from "react";

export default function Slider({ images }) {

	// State for tracking the active image index
	const [active, setActive] = useState(0);

	// Navigate to the previous image
	const prevImage = () => {
		setActive((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1,
		);
	};

	// Navigate to the next image
	const nextImage = () => {
		setActive((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1,
		);
	};

	/**
	 * ==================
	 * Common Image Sizes
	 * ==================
	 *
	 * Full-width Hero Images:  1920x1080, 1600x900
	 * Large Content Images:    1200x800, 1024x768
	 * Medium Content Images:   800x600, 768x512
	 * Small Content Images:    640x480, 600x400
	 * Thumbnails:              150x150, 100x100
	 * Square Gallery Images:   800x800, 400x400
	 * Profile Images:          300x300, 150x150
	 *
	 * ------------------
	 *
	 * Main Product Image (Hero): 1000x1000, 1200x1200
	 * Medium Product Display:    800x800, 600x600
	 * Thumbnail:                 150x150, 200x20
	 * Zoomed Image:              2000x2000, 1600x1600
	 * Grid/List View:            400x400, 500x500
	 *
	 * ------------------
	 *
	 * Main Carousel Image:               1200x800, 1000x667
	 * Large Product Image:               800x800, 600x600
	 * Medium Carousel Thumbnails:        400x400, 300x300
	 * Small Carousel Thumbnails:         150x150, 100x100
	 * Full-width Carousel (Hero Slider): 1920x600, 1600x500
	 */

	return (
		<div className="flex flex-col space-y-2 items-center w-full">
			{/* Main Image */}
			<img
				src={images[active]}
				alt={`Product Image ${active + 1}`}
				className="w-full rounded-lg shadow-md object-cover"
			/>

			<div className="relative w-full">
				{/* Thumbnails */}
				<section className="flex space-x-2 overflow-hidden">
					{images.map((image, index) => (
						<button
							className="flex-none"
							key={index}
							onClick={() => setActive(index)}
						>
							<img
								src={image}
								alt={`Thumbnail ${index + 1}`}
								style={{ transform: `translateX(-${active * 184}px)` }}
								className={`w-44 h-32 rounded-md object-cover cursor-pointer border-2 transition 
                  ${active === index ? "border-blue-500" : "border-transparent"}
                `}
							/>
						</button>
					))}
				</section>

				{/* Slider Controls */}
				<button
					onClick={prevImage}
					className={`absolute top-1/2 left-0 
            transform -translate-x-1/2 -translate-y-1/2
            flex items-center justify-center w-12 h-12 rounded-full shadow-lg
            bg-red-900 hover:bg-red-800 text-white 
            transition-opacity duration-300`}
				>
					<span className="-mt-1 -ml-[2px] font-bold text-3xl">‹</span>
				</button>
				<button
					onClick={nextImage}
					className={`absolute top-1/2 right-0 
            transform translate-x-1/2 -translate-y-1/2 
            flex items-center justify-center w-12 h-12 rounded-full shadow-lg
            bg-red-900 hover:bg-red-800 text-white 
            transition-opacity duration-300`}
				>
					<span className="-mt-1 -mr-[2px] font-bold text-3xl">›</span>
				</button>
			</div>
		</div>
	);
}
