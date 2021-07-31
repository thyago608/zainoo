import { Container, Navigation } from "./styles";

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
          <li>
            <a>Accessories</a>
          </li>
          <li>
            <a>Suport</a>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
}
