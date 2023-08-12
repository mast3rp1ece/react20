import React, { useState } from "react";
import { Title } from "./styled/SignInStyled";
import icon from '../img/padlock.png';
import { Icon } from "./styled/SignInStyled";
import { IconContainer } from "./styled/SignInStyled";
import { SignInput } from "./styled/SignInStyled";
import { CheckBox } from "./styled/SignInStyled";
import { CheckInfo } from "./styled/SignInStyled";
import './signin.css';
import { SignButt } from "./styled/SignInStyled";
import { HelpSign } from "./styled/SignInStyled";
import { Copyright } from "./styled/SignInStyled";
import { HelpContainer } from "./styled/SignInStyled";


export const SignUp = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignIn= () => {

	}
	
	return (
		<>
			<IconContainer>
				<Icon src={icon} alt="Icon" />
			</IconContainer>
			<Title>Sign up</Title>
			<form className="in-form">
				<div class="name-container">
					<SignInput type="text" placeholder="First Name*" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
					<SignInput type="text" placeholder="Last Name*" value={lastName} onChange={(e) => setLastName(e.target.value)} />
				</div>
				<SignInput type="email" placeholder="Email Address*" value={email} onChange={(e) => setEmail(e.target.value)} />
				<SignInput type="password" placeholder="Password*" value={password} onChange={(e) => setPassword(e.target.value)} />
				<div className="check-container">
					<CheckBox type="checkbox"/>
					<CheckInfo>I want to receive inspiration, marketing promotions and updates via email</CheckInfo>
				</div>
				<SignButt>SIGN UP</SignButt>
				<HelpContainer var='helpend' className="help-links">
					<HelpSign to="/signin" >Already have an account? Sign In</HelpSign>
				</HelpContainer>
			</form>
			<Copyright>Copyright © Your Website 2023</Copyright>
		</>
	)
}