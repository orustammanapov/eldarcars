import Link from "next/link";

export default function Contact({ color = "text-gray-400", address = false }) {
	return (
		<ul
			className={`flex flex-col lg:flex-row sm:space-y-0 lg:space-x-4 space-x-0 ${color}`}
		>
			<li>
				<Link href="tel:+320492/403404">+32 (0) 492/403 404</Link>
			</li>
			<li>
				<Link href="mailto:eldarcars@gmail.com">eldarcars@gmail.com</Link>
			</li>
			{address && <li>Gentseweg 136, 8792 Waregem, Belgium</li>}
		</ul>
	);
}
