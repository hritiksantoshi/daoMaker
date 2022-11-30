import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavMenu.css"
function NavMenu() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
          <img src="https://assets.website-files.com/5e997428d0f2eb13a90aec8c/628e30c1a44e796f3c03e4d1_LOGO_1.svg" loading="lazy" alt=""/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='link'>
            <div class="nav-bar-text">Aragon App</div>
            <div class="badge-nav-bar">New</div>
          </Nav.Link>
            <Nav.Link href="#features" className='link'>
             <div class="nav-bar-text">Aragon Client</div>
             <div class="badge-nav-bar blue">Classic</div></Nav.Link>
            <Nav.Link href="#pricing"> <div class="nav-bar-text">DAO Experts</div></Nav.Link>

            <Nav.Link href="#pricing"> <div class="nav-bar-text">Developers</div></Nav.Link>

            <Nav.Link href="#pricing"> <div class="nav-bar-text">Community</div></Nav.Link>

            <Nav.Link href="#pricing"> <div class="nav-bar-text">About</div></Nav.Link>

            <Nav.Link href="#pricing"> <div class="nav-bar-text">Resources</div></Nav.Link>
    
          </Nav>

          <div className="get-started-module">
          <a data-custom-event="daoCreation_navbarButton_clicked" data-w-id="eabbf8d6-7aee-70fa-f278-3f77f9a75c70" href="https://client.aragon.org/#/" target="_blank" className ="button-primary-v2 w-button">Create your DAO</a>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavMenu;