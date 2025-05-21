import Link from "next/link";
import { pb } from "./pocketbase";

const currency = new Intl.NumberFormat("nl-NL", {
	style: "currency",
	currency: "EUR",
});

export default async function Home() {
	const carsData = await pb.collection("cars").getFullList({
		sort: "-created", // Optional: sort by creation time or any field
		expand: "status",
	});

	const banner = {
		available: "",
		reserved: "bg-yellow-500",
		sold: "bg-red-600",
	};

	const cars = carsData.map((car) => ({
		title: car.title,
		price: currency.format(car.priceAmount),
		image: `http://localhost:8090/api/files/cars/${car.id}/${car.images[0]}`,
		slug: car.slug,
		status: car.expand.status.value,
	}));

	return (
		<section className="grid xl:grid-cols-3 md:grid-cols-2 gap-4">
			{/* https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key */}
			{cars.map((car) => (
				<article
					key={car.slug}
					className="relative bg-gray-900 rounded-md overflow-hidden"
				>
					{/* Status Ribbon */}
					{car.status !== "available" && (
						<div
							className={`absolute top-8 -right-12 w-48 transform rotate-45 text-white text-center py-1 shadow-lg z-10
              ${banner[car.status]}`}
						>
							{car.status.toUpperCase()}
						</div>
					)}

					{/* Overlay */}
					{car.status !== "available" && (
						<div className="absolute inset-0 bg-black bg-opacity-60 z-8" />
					)}

					<Link
						href={`/cars/${car.slug}`}
						className="flex flex-col font-medium text-gray-300 hover:text-gray-200"
					>
						<figure>
							<img
								src={car.image}
								alt={car.title}
								className="w-full object-cover"
							/>
							<figcaption className="flex justify-between p-4">
								<span className="text-left">{car.price}</span>
								<span className="text-right">{car.title}</span>
							</figcaption>
						</figure>
					</Link>
				</article>
			))}
		</section>
	);
}
