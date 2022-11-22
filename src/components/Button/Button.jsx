import styled from "styled-components";

const StandartButton = styled.button`
	min-width: 30px;
	min-height: 30px;
	font-size: 20px;
	font-weight: bold;
`;

const Button = ({ content, ...props }) => {
	return <StandartButton {...props}>{content}</StandartButton>;
};

export default Button;
