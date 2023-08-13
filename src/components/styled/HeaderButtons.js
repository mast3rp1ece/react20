import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignLinks = styled(Link) `
text-decoration: none;
color: ${(props) => props.var === 'outline' ? 'rgb(255, 50, 100)' : '#fff'};
max-width: 150px;
width: 100%;
text-align: center;
padding: 7px 0;
border-radius: 5px;
box-shadow: 3px 3px 20px black;
transition: all ease .2s;
border: ${(props) => props.var === 'outline' ? '1px solid rgb(255, 50, 100)' : 'none'};
&:hover {
	background: ${(props) => props.var === 'outline' ? 'rgb(255, 50, 100)' : 'grey'};
	color: #fff;
}
background: ${(props) => props.var === 'outline' ? 'transparent' : 'rgb(255, 50, 100)'};
&:active {
	transform: translateY(3px) scale(0.98);
}
`