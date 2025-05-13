import Link from "next/link";

export default function Logo({
	src,
	width,
}: {
	src: string; // "../public/images/logo-cutted.png"
	width: string;
}) {
	return (
		<div className="logo">
			<Link href="/">
				<img
					className={width}
					data-srcset={`${src} 1x, ${src} 2x`}
					data-src={src}
					alt="EldarCars"
					data-size="auto"
					srcSet={`${src} 1x, ${src} 2x`}
					src={src}
				/>
			</Link>
		</div>
	);
}
