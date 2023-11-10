import { Navbar, Container, Nav } from 'react-bootstrap'


//npm run dev

function Header() {

  return (
    <>
      <Navbar bg='light' expand='lg' fixed="top">
        <Container>
          <Navbar.Brand href="/">Título</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="/home">Página inicial</Nav.Link>
              <Nav.Link href="/produtos">Produtos</Nav.Link>
              <Nav.Link href="/servicos">Serviços</Nav.Link>
              <Nav.Link href="/clientes">Clientes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
