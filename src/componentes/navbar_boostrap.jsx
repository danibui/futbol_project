import '../../src/App.css'; // Asegúrate de que la ruta sea correcta
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function AlignmentExample() {
  return (
    <>
      <Nav className="navbar-custom justify-content-center" activeKey="/home">
        <div className="container-fluid">
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
      <p className="text-center mt-4 mb-4"></p>
      <Nav className="navbar-custom justify-content-end" activeKey="/home">
        <div className="container-fluid">
          <Nav.Item>
            <Nav.Link href="/home">HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">NEWS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">TEAM</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">SOCCER</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">PAGES</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">SHOP</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">PURCHASE</Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
}

export default AlignmentExample;
