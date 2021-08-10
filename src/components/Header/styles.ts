import styled from "styled-components";

export const Container = styled.header`
  max-width: 1340px;
  height: 5rem;

  margin: 0 auto;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  .wrapper {
    height: 100%;
    padding: 0 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 1280px) {
      .container-image {
        padding-left: 2.7rem;
      }
    }
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
