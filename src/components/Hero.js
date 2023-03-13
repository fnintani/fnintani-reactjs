import "../styling/style.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Hero() {
  return (
   <Container fluid className="bg-photo d-flex flex-column text-light text-center justify-content-center" id="hero">
      <Row className="justify-content-center mb-3">
        <Col md="auto">
        	<p className="hero-title-small">"The sky is honestly the limit, so I'm excited to see what the future holds."</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="auto">
        	<h2  className="hero-title-big">Sky Castle Community</h2>
        </Col>
      </Row>
       <Row className="justify-content-center">
        <Col md="auto">
        	<Button variant="light"  size="sm" className="mt-3 btn">Register</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;