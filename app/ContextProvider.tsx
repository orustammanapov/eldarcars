import React, { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

export const Provider = ({ children }) => {
	const [open, setOpen] = useState(false);
	const toggle = () => setOpen((prev) => !prev);

	useEffect(() => {
		document.body.className = open ? "overflow-hidden" : "";

		return () => {
			document.body.className = "";
		};
	}, [open]);

	return (
		<Context.Provider value={{ open, toggle }}>{children}</Context.Provider>
	);
};
