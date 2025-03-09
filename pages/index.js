
import { useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "../components/baniere";
import Script from "next/script";
import Footer from "../components/footer";

import AvantagesCard from '../components/cardadvantagecompetitive';
import Missioncard from '../components/cardmission';
import * as Iconsfi from "react-icons/fi";
import * as Iconsfa from "react-icons/fa6";
import * as Iconsfc from "react-icons/fc";
import * as Iconsfb from "react-icons/tb";
import * as Iconsgr from "react-icons/gr";
import * as Iconstfi from "react-icons/tfi";
import * as Iconsci from "react-icons/ci"; 
import {motion} from 'framer-motion';

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});



export async function getServerSideProps() {
  try {
    const response = await fetch('https://eliezerspace.org/fetchData/api.php?fetchdata=home');
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP ! status: ${response.status}`);
    }
    const sitecontent = await response.json();
    const homedatas = sitecontent[0];
    const banner = homedatas[0];
    const sectionavantagetitle = sitecontent[1];
    const sectionavantagetitle_datas = sectionavantagetitle[0];
    const allavantages = sitecontent[2];
    const sectionmission = sitecontent[3];
    const sectionmission_datas = sectionmission[0];
    const allmissions = sitecontent[4];
    const sectionsustainability = sitecontent[5];
    const sectionsustainability_datas = sectionsustainability[0];
    // const onecommitment = sitecontent[6][4];
    const sectionteam = sitecontent[7][0];
    const allteam = sitecontent[8];
    const configs = sitecontent[9][0];

    return {
      props: {
        banner,
        sectionavantagetitle_datas,
        allavantages,
        sectionmission_datas,
        allmissions,
        sectionsustainability_datas,
        sectionteam,
        allteam,
        configs,
      },
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    return {
      props: {}, // Retourner des valeurs par défaut si erreur
    };
  }
}

export default function Home({
  banner,
  sectionavantagetitle_datas,
  allavantages,
  sectionmission_datas,
  allmissions,
  sectionsustainability_datas,
  sectionteam,
  allteam,
  configs,
  sitecontent
}) {  
  return (
<>
  <Head>    
    <title>Elikya foods</title>
    <meta name="description" content={banner.soustitre} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:image" content={`url(https://eliezerspace.org/elikyafoods-adminspace/Views/Uploads/${banner.cover})`}></meta>
    <link rel="icon" href="favicon.ico" />
  </Head>
  <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
    <div className="preloader"></div> 
    <main className={styles.main}>
    <div className="div_transition" style={{backgroundImage: 'url(/sites_images/cover2.jpg)'}}></div>
      <Hero 
      titreprojet={banner.soustitre}
      moreAbout={banner.descriptionduprogramme} 
      cover= {banner.immagedecouverture}
      phone_pr={configs.telephone1} 
      email_pr={configs.email}
      activepage="home"  
      />      
      <section id="avantages">  
        <div className="avantages">

        <div className="avantages-left" style={{backgroundImage:'url(sites_images/bg2.png)'}}>
          <div className="opacity-couverture">
        </div>          
        </div>
        <div className="avantages-right">
          
          <h2 className="light light-title">{sectionavantagetitle_datas.titre_avantagecompetitive}</h2>
          <p className="font-size-17">
            <span className="particulartext">
            {sectionavantagetitle_datas.sous_titre_avantagecompetitive}
            </span>
            </p>
          
          <div className="row g-0 container_chus">      

          {allavantages.slice(0, 4).map((e) => {     
            return (
              <AvantagesCard
              icone={e.icone}
              titre={e.titre_avantage_comp}
              descriptif={e.descirp_avantage_comp}
              />
            );              
          })} 

          </div>
        </div>
        </div>
      </section>
      <section id="soustainability"> 

<div className='durabilite'>
<div className='maincontain'>
<h3 className="whychooseus-heading light-title">

 {sectionsustainability_datas.titre}
</h3>
<p className="sm-light-text">      
{sectionsustainability_datas.soustitre}
</p>

</div>
<div className='canvas'>
 <div className='canvas1'></div> 
 <div className='canvas2'></div>
 <div className='canvas3'>
   <img src="sites_images/im4.jpg"/> 
 </div> 
</div>
</div>
</section>
      <section id="mission">      
        <div className="mission">
      <div className="mission-z1">
        {/* <h2 className="dark-title">{sectionmission_datas.titre}</h2>
        <p className="font-size-17">{sectionmission_datas.description}
        </p> */}
        <div>

          <div className="content">
            <div className="">
              <div className="row g-0 container_chus">


     
            {allmissions.slice(0, 4).map((e) => {     
            return (
              <Missioncard
                icone={e.icone_inc}
                titre={e.titre_objectif}
                descriptif={e.description}
              />
                );              
              })} 

              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="mission-z2" style={{backgroundImage:'url(/sites_images/27.png)'}}>
      </div>
        </div>
      </section> 

    </main>
    <Footer
      phone1={configs.telephone1} 
      phone2={configs.telephone2} 
      adresse={configs.adressephysique}
      facebook={configs.facebook}
      twitter={configs.twitter}
      linkendin={configs.linkedin}
      email={configs.email}  
      about_us= {banner.descriptionduprogramme}
    />
  </div>
</>
);

}






