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

export const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	
	

	const handleSignIn= (e) => {
		e.preventDefault();
	}


	const isEmailValid = /^[^\s@]{3,}@[^@]{2,}\.[^@]{2,}$/.test(email);
	const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
	
	

	return (
		<>
			<IconContainer>
				<Icon src={icon} alt="Icon" />
			</IconContainer>
			<Title>Sign in</Title>
			<form action="#" className="in-form" onSubmit={handleSignIn}>
				<SignInput className={isEmailValid ? 'valid' : 'invalid'} type="email" placeholder="Email Address*" value={email} onChange={(e) => setEmail(e.target.value)} />
				<SignInput className={isPasswordValid ? 'valid' : 'invalid'} type="password" placeholder="Password*" value={password} onChange={(e) => setPassword(e.target.value)} />
				<div className="check-container">
					<CheckBox type="checkbox"/>
					<CheckInfo>Remember me</CheckInfo>
				</div>
				<SignButt>SIGN IN</SignButt>
				<HelpContainer className="help-links">
					<HelpSign to="" >Forgot password?</HelpSign>
					<HelpSign to="/signup" >Don`t have an account? Sign Up</HelpSign>
				</HelpContainer>
			</form>
			<Copyright>Copyright © Your Website 2023</Copyright>
		</>
	)
}