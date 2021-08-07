import styled from "styled-components";

export const Container = styled.main`
  max-width: 1240px;
  margin: 0 auto;

  display: flex;
  position: relative;
`;

export const Content = styled.div`
  width: 1080px;
  position: relative;

  > section {
    max-width: 525px;
    height: 320px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 1rem;

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

  .hero {
    height: 500px;

    position: absolute;
    bottom: 0;
    left: 100px;
    z-index: -1;

    @media (max-width: 900px) {
      display: none;
    }
  }

  @media (min-width: 400px) and (max-width: 900px) {
    > section {
      align-items: center;

      width: 400px;
      margin: 4rem auto;
    }
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
    top: 300px;
    left: 0px;

    display: flex;
    justify-content: space-around;
  }

  .description,
  .social {
    font: 700 0.8rem "Poppins";
  }
`;
