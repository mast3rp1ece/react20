import React from "react";
import { SignLinks } from "./styled/HeaderButtons";
import './header.css';

export const Header = () => {
	return (
		<div class="header_container">
			<nav className="header">
					<SignLinks var='outline' to="/signin">Sign in</SignLinks>
					<SignLinks to="/signup">Sign up</SignLinks>
			</nav>
		</div>
	)
}

