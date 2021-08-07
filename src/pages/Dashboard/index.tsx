import { Header } from "../../components/Header";
import { Aside } from "../../components/Aside";
import { Button } from "../../components/Button";
import hero from "../../assets/images/banner-tennis.svg";
import bagIcon from "../../assets/images/shopping-bag.svg";
import playIcon from "../../assets/images/play.svg";

import { Container, Content, RightSide } from "./styles";

const Zoom = require("react-reveal/Zoom");

export function Dashboard() {
  const buttonAddToCart = {
    title: "Add To Cart",
    icon: bagIcon,
    colors: {
      colorText: "white",
      colorBackground: "black"
    }
  };

  const buttonWatchIntro = {
    title: "Watch intro",
    icon: playIcon
  };

  return (
    <>
      <Header />
      <Container>
        <Aside />
        <Content>
          <section>
            <header>
              <h1>The best looks; Top Comfort</h1>
            </header>
            <h2>Comfy Maxer®</h2>
            <p>
              Our shoes fuse together an insole that cushions every move, laces
              that you’ll never need to tie again, and an odor-fighting copper
              thread lining.
            </p>

            <div className="container-buttons">
              <Button data={buttonAddToCart} />
              <Button data={buttonWatchIntro} />
            </div>
          </section>
          <Zoom>
            <div className="hero">
              <img src={hero} alt="banner" />
            </div>

            <div className="nine-four">94</div>
          </Zoom>
        </Content>
        <RightSide>
          <div className="description">
            <span>manufacturing</span>
            <span>packaging</span>
            <span>team</span>
          </div>

          <div className="social">
            <span>fb</span>
            <span>tw</span>
            <span>in</span>
          </div>
        </RightSide>
      </Container>
    </>
  );
}
