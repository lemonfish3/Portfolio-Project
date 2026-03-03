import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Nav defaultActiveKey="#home">
      <Nav.Item>
        <Nav.Link href="#home">Joy Yang</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#image_api">Image API</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;