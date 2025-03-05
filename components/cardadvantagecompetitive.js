import Link from "next/link";
import MainHeader from "@/components/header";
import styles from "@/styles/Home.module.css";
import * as Iconsfa from "react-icons/fa6";
import * as Iconsfi from "react-icons/fi";
import * as Iconsfb from "react-icons/tb";
import * as Iconsfc from "react-icons/fc";
import * as Iconsgr from "react-icons/gr";

import * as Iconstfi from "react-icons/tfi";

const AvantagesCard = (pros) => {

    if(pros.icone=="FaArrowTrendUp"){
        return (
            <div className="col-lg-4 col-6 col-md-6 container_gradient_varient1">
            <div className="whychooseus-item">    
              <div className="whychooseus-item-icon">                          
              <Iconsfa.FaArrowTrendUp style={{fontSize:'50px'}} />
              </div>
              <div className="whychooseus-item-content"> 
                <h3 className="whychooseus-heading light-title">{pros.titre}</h3> 
                <span className="sm-light-text">                     
                  {pros.descriptif} 
                </span>                          
              </div>
            </div>
          </div>
        );
      }
      else if(pros.icone=="GrDeliver"){
        return (
            <div className="col-lg-4 col-6 col-md-6 container_gradient_varient3">
            <div className="whychooseus-item">    
              <div className="whychooseus-item-icon">                          
              <Iconsgr.GrDeliver style={{fontSize:'50px'}} />              </div>
              <div className="whychooseus-item-content">
              <h3 className="whychooseus-heading light-title">{pros.titre}</h3> 
                <span className="sm-light-text">                     
                  {pros.descriptif} 
                </span>                    
              </div>
            </div>
          </div>
        );
      }
      else if(pros.icone=="FiFilter"){
        return (
            <div className="col-lg-4 col-6 col-md-6 container_gradient_varient2">
            <div className="whychooseus-item">    
              <div className="whychooseus-item-icon">                          
              <Iconsfi.FiFilter style={{fontSize:'50px'}} />
              </div>
              <div className="whychooseus-item-content">
              <h3 className="whychooseus-heading light-title">{pros.titre}</h3> 
                <span className="sm-light-text">                     
                  {pros.descriptif} 
                </span>                    
              </div>
            </div>
          </div>
        );
      }
      


};
export default AvantagesCard;