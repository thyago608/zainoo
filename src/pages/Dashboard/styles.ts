import styled from "styled-components";
import img from '../../assets/images/banner-tennis.svg';

export const Container = styled.main`
  max-width: 1420px;
  margin: 0 auto;

  display: flex;
`;

export const Content = styled.div`
    width: 1080px;    
    position: relative;

    > section{
      max-width: 525px;
      height: 320px;
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 1rem;

      h1{
        color: #95a5a6;
        font: 300 1rem 'Poppins';
      }

      h2{
        font: 200 2.4rem 'Poppins';
      }

      p{
        font: 200 1rem 'Poppins';
        color: #95a5a6;
        max-width: 430px;
      }

      .container-buttons{
        margin-top: 2.5rem;
        max-width: 380px;

        display: flex;

        button + button{
            margin-left: 1.5rem;
        }
      }
    }

    .hero{
      height: 500px;
      
      position: absolute;
      bottom: 0;
      left: 100px;
      z-index: -1;
      transition: opacity 0.11s ease;

      @media(max-width: 750px){
        opacity: 0;
      }
  }
`;
