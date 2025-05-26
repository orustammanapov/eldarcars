import Link from "next/link";
import { pb } from "./pocketbase";

const currency = new Intl.NumberFormat("nl-NL", {
	style: "currency",
	currency: "EUR",
});

export default async function Home() {
	const data = await pb.collection("cars").getFullList({
		sort: "-created", // Optional: sort by creation time or any field
		expand: "status",
	});

	const banner = {
		available: "",
		reserved: "bg-yellow-500",
		sold: "bg-red-600",
	};

	const cars = data.map((item) => ({
		title: item.title,
		price: currency.format(item.priceAmount),
		image: `${process.env.NEXT_PUBLIC_API_URL}/api/files/cars/${item.id}/${item.images[0]}`,
		slug: item.slug,
		status: item.expand.status.value,
	}));

	return (
		<section className="grid xl:grid-cols-3 md:grid-cols-2 gap-4">
			{/* https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key */}
			{cars.map(({ image, title, price, slug, status }) => (
				<article
					key={slug}
					className="relative bg-gray-900 rounded-md overflow-hidden"
				>
					{/* Status Ribbon */}
					{status !== "available" && (
						<div
							className={`absolute top-8 -right-12 w-48 transform rotate-45 text-white text-center py-1 shadow-lg z-10
              ${banner[status]}`}
						>
							{status.toUpperCase()}
						</div>
					)}

					{/* Overlay */}
					{status !== "available" && (
						<div className="absolute inset-0 bg-black bg-opacity-60 z-8" />
					)}

					<Link
						href={`/cars/${slug}`}
						className="flex flex-col font-medium text-gray-300 hover:text-gray-200"
					>
						<figure>
							<img src={image} alt={title} className="w-full object-cover" />
							<figcaption className="flex justify-between p-4">
								<span className="text-left">{price}</span>
								<span className="text-right">{title}</span>
							</figcaption>
						</figure>
					</Link>
				</article>
			))}
		</section>
	);
}
