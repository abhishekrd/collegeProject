import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
    <Navbar bg="light" expand="lg" id="navbaaar">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link className="navlink" target="_top" href="/">Home</Nav.Link>
            <Nav.Link className="navlink" target="_blank" href="./documents/PROJECT_MANUAL.pdf">Guidelines</Nav.Link>

            <NavDropdown
              title="Past Year Projects"
              className="animate slideIn"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item 
              target="_blank"
              href="./documents/19-20_Final_Topic _Selected_for Project.pdf">
                AY - 2019-20
              </NavDropdown.Item>
              
              <NavDropdown.Item 
              target="_blank"
              href="./documents/20-2021.pdf">
                AY - 2020-21
              </NavDropdown.Item>

              <NavDropdown.Item
                target="_blank"
                href="./documents/ProjectListWihTitle_2021_22_Updated (2).pdf"
              >
                AY - 2021-22
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Sem-1-Task"
              className="animate slideIn"
              id="basic-nav-dropdown"
            >
              
              <NavDropdown.Item target="_blank" href="./documents/Stage-1_Guidelines.pdf">STAGE - I</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Sem-2-Task"
              className="animate slideIn"
              id="basic-nav-dropdown"
            >
              
              <NavDropdown.Item target="_blank" href="./documents/Stage-2_Guidelines.pdf">STAGE-2</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown
              title="Paper Publication Details"
              className="animate slideIn"
              id="basic-nav-dropdown"
            >
              
              <NavDropdown.Item target="_blank" href="./documents/Conference.pdf">
                LATEST CONFERENCES
              </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown
              title="Project outcomes"
              className="animate slideIn"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item target="_blank" href="./documents/Implementation Paper - Shreyash.pdf">
                Implementation Paper
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="./documents/IJSRET_V8_issue1_182 - Shreyash.pdf">
                Survey Paper
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="./documents/V8I2_263_Author2 - Shreyash.pdf">
                Certificate
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="./documents/Group 12 Published paper - Tushar Pangare.pdf">
                Published Paper
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="./documents/Real Time Object Measurement Using Image Processing - Yash Basutkar.pdf">
                Survey Paper-2
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="./documents/8738 - Karishma Katkar.pdf">
                Survey Paper-3
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="./documents/PID_29_Certificate - Mayur Patil.pdf">
                Certificate-2
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="./documents/118-121, Tesma0701,IJEAST - SANKET TAKALE.pdf">
                Survey Paper-4
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="./documents/CamScanner 07-06-2022 12.20.59 - Karishma Katkar.pdf">
                Certificate-3
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="./documents/MSEA - Yash Basutkar.pdf">
                Publication
              </NavDropdown.Item>
              
              
            </NavDropdown>

            <Nav.Link className="navlink">Guides</Nav.Link>

   
   <Link to="/upload"> <Button variant="danger" type="submit" id="uploadbtn">
      Upload
    </Button>
    </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<div className='home-div'>
<p> All Project Documents at One Place </p>
</div>
</>
  );
};

export default Navigation;