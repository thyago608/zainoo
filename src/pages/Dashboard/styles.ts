import styled from "styled-components";
import img from "../../assets/images/banner-tennis.svg";

export const Container = styled.main`
  max-width: 1240px;
  height: 100vh;

  margin: 0 auto;

  display: flex;
`;

export const Content = styled.div`
  width: 1080px;

  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 600px;
  background-position: center bottom;

  position: relative;

  > section {
    margin-top: 7rem;
    max-width: 525px;
    height: 320px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;

    position: relative;
    z-index: 99999;

    h1 {
      color: #95a5a6;
      font: 300 1rem "Poppins";
    }

    h2 {
      font: 200 2.4rem "Poppins";
    }

    p {
      font: 200 1rem "Poppins";
      color: #95a5a6;
      max-width: 430px;
    }

    .container-buttons {
      margin-top: 2.5rem;
      max-width: 380px;

      display: flex;

      button + button {
        margin-left: 1.5rem;
      }
    }
  }

  .nine-four {
    font: 700 17rem "Poppins";

    position: absolute;
    top: 60px;
    left: 425px;
    background-image: linear-gradient(#ffe6e6, #ffffff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    letter-spacing: 10px;
  }

  @media (min-width: 300px) and (max-width: 900px) {
    & {
      background-image: none;
    }

    > section {
      align-items: center;

      width: 25rem;
      margin: 4rem auto;
    }
  }

  @media (max-width: 1300px) {
    .nine-four {
      display: none;
    }

    &::before,
    &::after {
      display: none;
    }
  }

  &::after {
    content: "";
    height: 100vh;

    border-right: 1px solid rgba(100, 100, 100, 0.1);

    position: absolute;
    top: 0;
    left: 182px;
  }

  &::before {
    content: "";
    width: 220px;
    height: 100vh;

    border-left: 1px solid rgba(100, 100, 100, 0.1);
    border-right: 1px solid rgba(100, 100, 100, 0.1);

    position: absolute;
    top: 0;
    left: 390px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  .social {
    width: 200px;
    transform: rotate(-90deg);
    transform-origin: bottom left;

    position: absolute;
    bottom: 0;
    left: 28px;
    display: flex;
    justify-content: space-around;
  }

  .description {
    width: 300px;

    transform: rotate(-90deg);
    transform-origin: top left;

    position: absolute;
    top: 350px;
    left: 0px;

    display: flex;
    justify-content: space-around;
  }

  .description,
  .social {
    font: 700 0.8rem "Poppins";
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
