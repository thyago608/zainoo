import { Header } from "../../components/Header";
import { Aside } from "../../components/Aside";
import { Button } from "../../components/Button";
import { Container, Content } from "./styles";

export function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Aside />
        <Content></Content>
      </Container>
    </>
  );
}
