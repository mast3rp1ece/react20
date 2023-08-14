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

	const handleSignIn= (e) => {
		e.preventDefault();

		if (firstName && lastName && email && password) {

		
		const userData = {
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
		};
		localStorage.setItem('userData', JSON.stringify(userData));
		alert('Registration successful!');
		} else {
			alert('Please fill all fields!');
		}
	}
	
	const isEmailValid = /^[^\s@]{3,}@[^@]{2,}\.[^@]{2,}$/.test(email);
	const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
	const isFirstNameValid = /^[A-Za-z]{3,}$/.test(firstName);
	const isLastNameValid = /^[A-Za-z]{3,}$/.test(lastName);

	const userData = {
		email: email,
		password: password,
	}
	localStorage.setItem('userData', JSON.stringify(userData));

	return (
		<>
			<IconContainer>
				<Icon src={icon} alt="Icon" />
			</IconContainer>
			<Title>Sign up</Title>
			<form action="#" className="in-form" onSubmit={handleSignIn}>
				<div class="name-container">
					<SignInput className={isFirstNameValid ? 'valid' : (firstName.length === 0) ? '' : 'invalid'} type="text" placeholder="First Name*" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
					<SignInput className={isLastNameValid ? 'valid' : (lastName.length === 0) ? '' : 'invalid'} type="text" placeholder="Last Name*" value={lastName} onChange={(e) => setLastName(e.target.value)} />
				</div>
				<SignInput className={isEmailValid ? 'valid' : (email.length === 0) ? '' : 'invalid'} type="email" placeholder="Email Address*" value={email} onChange={(e) => setEmail(e.target.value)} />
				<SignInput className={isPasswordValid ? 'valid' : (password.length === 0) ? '0' : 'invalid'} type="password" placeholder="Password*" value={password} onChange={(e) => setPassword(e.target.value)} />
				<div className="check-container">
					<CheckBox id="check" type="checkbox"/>
					<CheckInfo for ="check" var='receiveinfo'>I want to receive inspiration, marketing promotions and updates via email</CheckInfo>
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