import Link from "next/link";
import MainHeader from "@/components/header";
import styles from "@/styles/Home.module.css";

const Hero = (props) => {

  return (
    <div class="main-cover"
   
    style={{backgroundImage: `url(https://eliezerspace.org/elikyafoods-adminspace/Views/Uploads/${props.cover})`}}
     >
   
      <MainHeader email={props.email_pr} phone={props.phone_pr}/>
      <div class="hero-sub-container">
        <div class="hero-sub-container-left slide-in-elliptic-top-fwd">
          <h2 class="site-intro pt-3" style={{fontWeight:'800'}}> 
            {props.titreprojet}
          
          </h2>
          <p className="mt-3">
           
            {props.moreAbout}
          </p>          
           
        </div>
        <div className="hero-sub-container-right">
          {/* <div class="circle_container slide-in-elliptic-top-fwd"
            style={{backgroundImage:'url(sites_images/27.png)'}}
            >
          </div> */}

        </div>
      </div> 
    </div>

  );
};
export default Hero;



    