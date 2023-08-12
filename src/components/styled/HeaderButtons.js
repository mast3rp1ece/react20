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
transition: all ease .2s;
border: ${(props) => props.var === 'outline' ? '1px solid rgb(255, 50, 100)' : 'none'};
&:hover {
	background: ${(props) => props.var === 'outline' ? 'rgb(255, 50, 100)' : 'grey'};
	color: #fff;
}
background: ${(props) => props.var === 'outline' ? 'transparent' : 'rgb(255, 50, 100)'};
`