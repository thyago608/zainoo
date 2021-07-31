import styled from "styled-components";

export const Container = styled.header`
  max-width: 1420px;
  height: 5rem;

  margin: 0 auto;

  .wrapper {
    height: 100%;
    padding: 0 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
  }

  a {
    display: block;
    margin: 0 1rem;

    svg {
      font-size: 1.1rem;
    }
  }
`;
