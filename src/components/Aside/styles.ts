import styled from "styled-components";

export const Container = styled.aside`
  max-width: 200px;
  padding: 5rem 1rem 0;

  display: flex;
  flex-direction: column;

  border-right: 1px solid var(--gray-light);

  @media (max-width: 900px) {
    display: none;
  }
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
    }

    li.new::after {
      content: "New";
      position: absolute;
      top: 5px;
      right: 10px;

      border-radius: 1rem;
      background: var(--gray-light);
      color: gray;
      font-size: 0.75rem;
      padding: 0.2rem 0.4rem;

      @media (max-width: 1000px) {
        opacity: 0;
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
    position: relative;
    margin-right: 1rem;
    text-align: right;

    &::before {
      content: "";
      width: 3rem;
      height: 1px;
      background: black;

      position: absolute;
      top: 10px;
      left: 0;
    }

    @media (max-width: 900px) {
      & {
        text-align: left;
      }

      &::before {
        display: none;
      }
    }
  }

  .scrolldown {
    font-weight: 400;
    font-size: 0.7rem;
  }
`;
/* span {

      } */
