import React, { useContext } from "react"
import { MenuContext } from "./Menu"

export default function MenuDropdown({ children }) {
	const { open } = useContext(MenuContext);

	return (
		<div className="menu-dropdown">
           {open && children}
       </div>
	)
}
