import { Container, Navigation, Box } from "./styles";

export function Aside() {
  return (
    <Container>
      <Navigation>
        <ul>
          <li>
            <a>Shoes</a>
          </li>
          <li>
            <a>Bags</a>
          </li>
          <li className="new">
            <a>Accessories</a>
          </li>
          <li>
            <a>Suport</a>
          </li>
        </ul>
      </Navigation>
      <Box>
        <h1>
          <span className="colorize">Extra Care</span>
          <span>Foot Tech</span>
        </h1>

        <span className="more">learn more</span>

        <span className="scrolldown">Scroll down</span>
      </Box>
    </Container>
  );
}
