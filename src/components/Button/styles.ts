import styled from "styled-components";

type Props = {
  colors: {
    colorText: string;
    colorBackground: string;
  };
};

export const Container = styled.button<Props>`
  background: ${(props) => props.colors.colorBackground};
  color: ${(props) => props.colors.colorText};

  width: 10rem;
  height: 3.5rem;

  border-radius: 0.4rem;
  border: 1px solid #bdc3c7;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  cursor: pointer;
  outline: transparent;

  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.8);
  }

  img {
    width: 20px;
    height: 20px;
  }
`;
