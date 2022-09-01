import React from 'react'
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { getFirestore } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from 'react-bootstrap/Form';
import "../App.css"
import { firebaseConfig } from "../firebase";
import { collection,addDoc } from "firebase/firestore"; 
import { Link } from "react-router-dom"

const Upload = () => {

  const [edi,setEdi] = useState("");
  const [lead,setLead] = useState("");
  const [document,setDocument] = useState("");

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const docref = collection(db,"userdata")


  const uploadData = async () => {

    if(!edi || !lead || !document){
      return alert("please enter all the fields")
    }
    await addDoc(docref,{doctype:document, groupid:edi, grouplead:lead}
     )

     await setEdi("");
     await setLead("");
     await setDocument("");
     
     await alert("Document Uploaded Successfully!")
  
     if (imageUpload == null) {
       return;
     }
     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
     uploadBytes(imageRef, imageUpload).then((snapshot) => {
       getDownloadURL(snapshot.ref).then((url) => {
         setImageList((prev) => [...prev, url]);
       });
     });
 }
 

  useEffect(() => {
    const imageListRef = ref(storage, "images/");
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  
  
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
              <NavDropdown.Item target="_blank" href="./documents/papersMerged.pdf">
                Implementation & Survey Papers
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="./documents/certificates.pdf">
                Certificates
              </NavDropdown.Item>
              
              
            </NavDropdown>

        

   
 

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className='formdivv'>
    <Form >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>EDI Group ID</Form.Label>
      <Form.Control required value={edi} onChange={(e) => setEdi(e.target.value)} type="text" placeholder="Enter your EDI Group No." />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Group Lead</Form.Label>
      <Form.Control required value={lead} onChange={(e) => setLead(e.target.value)} type="text" placeholder="Enter your Name" />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Document</Form.Label>
      <Form.Control required value={document} onChange={(e) => setDocument(e.target.value)} type="text" placeholder="Enter the Name of Document Ex.Project Report" />
    </Form.Group>

    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      
      
    </div>

<Button variant="danger" onClick={uploadData}>Upload Document</Button>

  </Form>
  
  </div>
  </>
  )
}

export default Upload


