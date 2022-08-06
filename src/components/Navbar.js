import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
              <NavDropdown.Item href="#action/3.1">
                GROUP FORMATION DETAILS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                SYNOPSIS PRESENTATION
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                SUBMISSION OF PROJECT ABSTRACT
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                PROJECT REVIEW - 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                PROJECT REVIEW - 2
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="./documents/Stage-1_Guidelines.pdf">STAGE - I</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Sem-2-Task"
              className="animate slideIn"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                SURVEY PAPER PUBCLICATION
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                MODULE DEVELOPMENT
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                PROJECT REVIEW-3
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                PROJECT REVIEW-4
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                IMPLEMENTATION PAPER PUBLICATION
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="./documents/Stage-2_Guidelines.pdf">STAGE-2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Document Formats"
              className="animate slideIn"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                GROUP FORMATION
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">SYNPOSIS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">ABSTRACT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                SPONSORSHIP LETTER
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                STAGE-I REPORT
              </NavDropdown.Item>
              <NavDropdown.Item 
              target="_blank"
              href="./documents/Project_Report_Format_2021_22 (1).doc">
                STAGE-2 REPORT
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Paper Publication Details"
              className="animate slideIn"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                LIST OF UGC-CARE Journals
              </NavDropdown.Item>
              <NavDropdown.Item href="./documents/Conference.pdf">
                LATEST CONFERENCES
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                UPLOAD PULISHED PAPERS
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="navlink">Guides</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
