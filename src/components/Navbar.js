import "../styling/style.css";
import Logo from "../images/logoipsum-295.svg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
	return (
		<>
			<Navbar bg="dark" variant="dark" expand="md">
				<Container>
					<Navbar.Brand href="#home">
						<img
							alt=""
							src={Logo}
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{" "}
						<span className="ms-2">Sky Castle</span>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto ">
							<Nav.Link href="#home" className="menu">Home</Nav.Link>
							<Nav.Link href="#link" className="menu">Link</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Navigation;
