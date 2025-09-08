import {
	faFacebook,
	faInstagram,
	faTwitter,
	faWhatsapp,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { Context } from "../ContextProvider";

export default function Menu() {
	const { open, toggle } = useContext(Context);

	useEffect(() => {
		document.body.classList.add("relative");
		// document.body.classList.add("overflow-hidden");
	}, [open]);

	return (
		<nav
			className={`absolute top-0 left-0 w-full z-10
      transition-transform ease-in-out transform duration-500
      ${open ? "translate-y-0 translate-x-0" : "lg:-translate-y-full lg:translate-x-0 translate-x-full"}
      bg-gray-900`}
		>
			<div className="container mx-auto relative min-h-screen">
				<ul className="absolute top-1/2 lg:left-0 lg:translate-x-0 left-1/2 space-y-3 -translate-x-1/2 text-2xl">
					<li>
						<Link href="/" onClick={toggle}>
							Alle auto's
						</Link>
					</li>
					<li>
						<Link href="/wat-betreft" onClick={toggle}>
							Wat betreft
						</Link>
					</li>
				</ul>
				<ul className="absolute lg:left-0 lg:translate-x-0 left-1/2 -translate-x-1/2 bottom-4 flex space-x-4">
					<li>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.facebook.com/p/EldarCars-100066721603221/"
							aria-label="Facebook"
						>
							<FontAwesomeIcon icon={faFacebook} aria-hidden />
						</a>
					</li>
					{/* <li>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="#"
							aria-label="Twitter"
						>
							<FontAwesomeIcon icon={faTwitter} aria-hidden />
						</a>
					</li>
					<li>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="#"
							aria-label="Youtube"
						>
							<FontAwesomeIcon icon={faYoutube} aria-hidden />
						</a>
					</li> */}
					<li>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.instagram.com/eldar_cars/"
							aria-label="Instagram"
						>
							<FontAwesomeIcon icon={faInstagram} aria-hidden />
						</a>
					</li>
					{/* <li>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://wa.me/#?text=Hi"
							aria-label="Whatsapp"
						>
							<FontAwesomeIcon icon={faWhatsapp} aria-hidden />
						</a>
					</li> */}
				</ul>
			</div>
		</nav>
	);
}
