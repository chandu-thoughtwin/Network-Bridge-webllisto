import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import "./header.scss";
function Header({ setConnectWallet, connectWallet }: any) {
  return (
    <>
      <Navbar className="nav mb-3" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Network Bridge</Navbar.Brand>
          <Button
            className="rounded-pill "
            onClick={() => setConnectWallet(!connectWallet)}
            variant="primary"
          >
            Connect
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
