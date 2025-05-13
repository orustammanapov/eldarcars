import { useEffect, useState } from "react";

export default function Top() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => setVisible(window.scrollY > 200);
		// Add scroll event listener
		window.addEventListener("scroll", toggleVisibility);
		// Clean up the event listener on component unmount
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	// <FontAwesomeIcon icon={faAngleUp} aria-hidden />
	return (
		visible && (
			<button
				onClick={scrollToTop}
				className={`fixed bottom-4 right-4 
        bg-red-900 hover:bg-red-800 text-white
        flex items-center justify-center w-12 h-12 rounded-full shadow-lg
        font-bold text-2xl
        transition-opacity duration-300`}
				aria-label="Back to Top"
			>
				↑
			</button>
		)
	);
}
