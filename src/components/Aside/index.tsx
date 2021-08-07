import { Container, Navigation, Box } from "./styles";

export function Aside() {
  return (
    <Container>
      <Navigation>
        <ul>
          <li>
            <a href="http://github.com/thyago608">Shoes</a>
          </li>
          <li>
            <a href="http://github.com/thyago608">Bags</a>
          </li>
          <li className="new">
            <a href="http://github.com/thyago608">Accessories</a>
          </li>
          <li>
            <a href="http://github.com/thyago608">Suport</a>
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
