import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigationbar(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data_about_link=props.activity;
  let home_activity;
  let blog_activity;
  let contact_activity;

  if(data_about_link=="home"){
    home_activity="active";
  }


  return (
    
    <>
    
            <ul>
              <li className={contact_activity}><a href="/">Home</a></li>
              <li>
              <NavDropdown
              id="nav-dropdown-dark-example"
              title="About us"
              menuVariant="dedfaut"
            >
               <li><a href="/#avantages"  style={{color:'#1B1B1B',fontSize:'16px',fontWeight:'200'}}>What we do</a></li>
               <li><a href="/#mission" style={{color:'#1B1B1B',fontSize:'16px',fontWeight:'200'}} >About us</a></li>
               <li><a href="/#soustainability" style={{color:'#1B1B1B',fontSize:'16px',fontWeight:'200'}} >Soustainability</a></li> 
              
            </NavDropdown>
                
              </li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact us</a></li>
              <li>                
              </li>
            </ul>
            
          
    </>
  );
}


export default Navigationbar;