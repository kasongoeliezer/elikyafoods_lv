import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navigationbar from './navigationbar';
import { FaAlignRight } from "react-icons/fa6"
import GTranslate from "@/components/Gtranslate"; 

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <Button   variant="default" style={{backgroundColor:'none'}} onClick={handleShow}>
         <FaAlignRight style={{color:'#00000F',fontSize:'40px'}} />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="Momnavbar_def">
          <nav className="navmenu">
          <Navigationbar/>     
          </nav>    
        </div> 
            
        </Offcanvas.Body>
        
      </Offcanvas>
    </>
  );
}


export default Sidebar;


