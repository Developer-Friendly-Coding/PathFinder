import "./StyledHeader.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
function Header() {
  return (
    <header className="headerer">
      <h1>PathFinder</h1>

      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="지점" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">초량점</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">부산대점</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                스페이스메이커점
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#home">회사소개</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
