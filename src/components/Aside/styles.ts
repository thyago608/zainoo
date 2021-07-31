import styled from "styled-components";

export const Container = styled.aside`
  max-width: 250px;
  height: calc(100vh - 5rem);
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
`;

export const Navigation = styled.nav`
  flex: 1;

  ul {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    li.new {
      position: relative;

      span {
        border-radius: 1rem;
        background: var(--gray-light);
        color: gray;
        font-size: 0.75rem;
        padding: 0.2rem 0.4rem;

        position: absolute;
        top: 10px;
        right: 20px;
        z-index: -1;
      }
    }

    a {
      display: block;
      font-family: "Poppins";
      font-weight: 300;
      padding: 0.5rem;

      color: var(--gray);
      cursor: pointer;

      transition: filter 0.2s ease;

      &:hover {
        filter: brightness(0.2);
      }
    }
  }
`;

export const Box = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-size: 1.5rem;
    font-weight: 200;

    display: flex;

    span {
      width: 30%;
      line-height: 1.7rem;

      &.colorize {
        font-weight: 400;
        color: white;
        background: var(--black);
        margin-right: 2px;
      }
    }
  }

  > span {
    display: block;
  }

  .more {
    font-weight: 400;
    font-size: 0.8rem;
    text-align: right;
    position: relative;
    margin-right: 1rem;

    &::before {
      content: "";
      width: 3rem;
      height: 1px;
      background: black;

      position: absolute;
      top: 10px;
      left: 0;
    }
  }

  .scrolldown {
    font-weight: 400;
    font-size: 0.7rem;
  }
`;
