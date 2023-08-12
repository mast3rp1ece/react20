import styled from "styled-components";

export const Button = styled.button `
padding: 20px 0;
width: 100px;
height: 100px;
background: linear-gradient( darkblue, blue);
border-radius: 50%;
border: 0;
cursor: pointer;
transition: all ease 1s;
&:hover {
	background: transparent;
	transform: scale(1.2);
}
`