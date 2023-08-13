import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h2 `
color: white;
text-align: center;
font-size: 22px;
margin-top: 10px;
`
export const Icon = styled.img `
width: 20px;
height: 20px;
margin-bottom: 4px;
`


export const IconContainer = styled.div `
width: 35px;
height: 35px;
margin: 20px auto;
background: rgb(255, 50, 100);
border-radius: 50%;
display: flex;
margin-bottom: 0;
justify-content: center;
align-items: center;
`
export const SignInput = styled.input `
width: 100%;
background: transparent;
padding: 12px 5px;
color: #fff;
margin: 0 0 20px 0;
border-radius: 3px;
box-sizing: border-box;
border: 1px solid grey;
&:focus {
	outline:0;
	border: 1px solid ${(props) => props.className === 'valid' ? 'green' : props.className === 'invalid' ? 'red' : 'gray'};
}
`
export const CheckBox = styled.input `
margin: 0;
width: 15px;
height: 15px;
`
export const CheckInfo = styled.span `
color: rgb(220, 220, 220);
font-weight: 400;
margin-left: 10px;
font-size: 14px;
max-width: ${(props) => props.var === 'receiveinfo' ? '250px' : 'auto'}
`
export const SignButt = styled.button `
width: 100%;
padding: 5px 0;
font-weight: 600;
border-radius: 3px;
border: 0;
box-shadow: 2px 2px 5px black;
background: rgb(50, 200, 255);
transition: all ease .2s;
cursor: pointer;
&:hover {
	background: grey;
	color: #fff;
}
margin-bottom: 15px;
`
export const HelpSign = styled(Link) `
font-size: 12px;
color: rgb(50, 200, 255);
opacity: 0.8;
text-decoration: none;
&:hover {
	text-decoration: underline;
}
`
export const HelpContainer = styled.div `
	display: flex;
	justify-content: ${(props) => props.var === 'helpend' ? 'end': 'space-between'};
`

export const Copyright = styled.p `
text-align: center;
margin-top:50px;
color: grey;
font-size: 12px;
`