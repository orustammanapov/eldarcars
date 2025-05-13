import { useContext } from "react";
import { Context } from "../ContextProvider";

export default function Burger() {
	const { open, toggle } = useContext(Context);

	return (
		<div
			onClick={toggle}
			className="w-6 cursor-pointer flex flex-col justify-between"
		>
			<span
				className={`block h-[2px] my-[3px] bg-gray-100 transition-transform duration-300 ease-in-out ${
					open ? "transform rotate-45 translate-y-2" : ""
				}`}
			></span>
			<span
				className={`block h-[2px] my-[3px] bg-gray-100 transition-opacity duration-300 ease-in-out ${
					open ? "opacity-0" : ""
				}`}
			></span>
			<span
				className={`block h-[2px] my-[3px] bg-gray-100 transition-transform duration-300 ease-in-out ${
					open ? "transform -rotate-45 -translate-y-2" : ""
				}`}
			></span>
		</div>
	);
}
