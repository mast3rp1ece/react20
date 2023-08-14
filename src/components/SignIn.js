import React, { useState, useEffect } from "react";
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
	const [rememberMe, setRememberMe] = useState(false);

	useEffect(() => {
		const storedRememberMe = localStorage.getItem('rememberMe');
		if (storedRememberMe) {
			setRememberMe(storedRememberMe === 'true');
		}
  
		if (rememberMe) {
			const storedEmail = localStorage.getItem('rememberedEmail');
			if (storedEmail) {
			 setEmail(storedEmail);
			}
  
			const storedPassword = localStorage.getItem('rememberedPassword');
			if (storedPassword) {
			 setPassword(storedPassword);
			}
		}
	 }, [rememberMe]);

	const handleSignIn= (e) => {
		e.preventDefault();

		if (rememberMe) {
			localStorage.setItem('rememberedEmail', email);
			localStorage.setItem('rememberedPassword', password);
		}

		 const storedUserData = localStorage.getItem('userData');
  		if (storedUserData) {
		const userData = JSON.parse(storedUserData);
		if (userData.email && userData.password) {
			if (userData.email === email && userData.password === password) {
			alert(`Welcome, ${userData.firstName}! You're in!`);
			} else {
			alert('Wrong data!');
      	}
    	} else {
      alert('Register first!');
    	}
  		}
	};

	const handleRememberMeChange = (e) => {
		const newValue = e.target.checked;
		setRememberMe(newValue);
		localStorage.setItem('rememberMe', newValue.toString());
  
		if (!newValue) {
			localStorage.removeItem('rememberedEmail');
			localStorage.removeItem('rememberedPassword');
		}
	 };

	const isEmailValid = /^[^\s@]{3,}@[^@]{2,}\.[^@]{2,}$/.test(email);
	const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
	
	

	return (
		<>
			<IconContainer>
				<Icon src={icon} alt="Icon" />
			</IconContainer>
			<Title>Sign in</Title>
			<form action="#" className="in-form" onSubmit={handleSignIn}>
				<SignInput className={isEmailValid ? 'valid' : (email.length === 0) ? '' : 'invalid'} type="email" placeholder="Email Address*" value={email} onChange={(e) => setEmail(e.target.value)} />
				<SignInput className={isPasswordValid ? 'valid' : (password.length === 0) ? '0' : 'invalid'} type="password" placeholder="Password*" value={password} onChange={(e) => setPassword(e.target.value)} />
				<div className="check-container">
					<CheckBox id="check" checked={rememberMe} onChange={handleRememberMeChange} type="checkbox"/>
					<CheckInfo for="check">Remember me</CheckInfo>
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