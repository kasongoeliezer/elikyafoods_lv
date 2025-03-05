import Link from "next/link";
import MainHeader from "@/components/header";
import styles from "@/styles/Home.module.css";
import * as Iconsfa from "react-icons/fa6";
import * as Iconsfi from "react-icons/fi";
import * as Iconsfb from "react-icons/tb";
import * as Iconsfc from "react-icons/fc";
import * as Iconsgr from "react-icons/gr";
import * as Iconsci from "react-icons/ci";
import * as Iconstfi from "react-icons/tfi";

const Missioncard = (pros) => {

if(pros.icone=="TfiStatsUp"){
return (
<div className="bloc_ombres col-lg-4 col-6 col-md-6">
  <div className="whychooseus-item">
    <div className="whychooseus-item-icon">
      <Iconstfi.TfiStatsUp style={{fontSize:'38px',color:'#00000F'}} />
    </div>
    <div className="whychooseus-item-content">
      <h3 className="whychooseus-heading dark-title">{pros.titre}</h3>
      <span className="sm-dark-text">      
      {pros.descriptif}
      </span>
    </div>
  </div>
</div>
);
}
else if(pros.icone=="CiStar"){
return (
<div className="bloc_ombres col-lg-4 col-6 col-md-6 ">
<div className="whychooseus-item">
    <div className=" whychooseus-item-icon">
      <Iconsci.CiStar style={{fontSize:'38px',color:'#00000F'}} />
    </div>
    <div className="whychooseus-item-content">
      <h3 className="whychooseus-heading dark-title">{pros.titre}</h3>
      <span className="sm-dark-text">      
      {pros.descriptif}
      </span>
    </div>
  </div>
</div>
);
}
else if(pros.icone=="GrDeliver"){
return (
<div className="bloc_ombres col-lg-4 col-6 col-md-6">
<div className="whychooseus-item">
    <div className="whychooseus-item-icon">
      <Iconsgr.GrDeliver style={{fontSize:'38px',color:'#00000F'}} />
    </div>
    <div className="whychooseus-item-content">
      <h3 className="whychooseus-heading dark-title">{pros.titre}</h3>
      <span className="sm-dark-text">      
      {pros.descriptif}
      </span>
    </div>
  </div>
</div>
);
}


};
export default Missioncard;