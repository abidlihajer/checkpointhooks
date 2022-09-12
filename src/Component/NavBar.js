import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function NavBar({ setsearchTitle, setsearchRate }) {
  const ratingChanged = (newRating) => {
    setsearchRate(newRating);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MOVIES</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">WatchMovie</Nav.Link>
          
        </Nav>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setsearchTitle(e.target.value)}
          />
          <Button variant="outline-secondary">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}
export default NavBar;
