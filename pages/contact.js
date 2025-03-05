import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/baniere";
import Script from "next/script";
import Footer from "../components/footer";
import MainHeader from "../components/header";

import * as Iconsfi from "react-icons/fi";
import * as Iconsfa from "react-icons/fa6";
import * as Iconsfc from "react-icons/fc";
import * as Iconsfb from "react-icons/tb";
import * as Iconsgr from "react-icons/gr";
import * as Iconstfi from "react-icons/tfi";
import * as Iconsci from "react-icons/ci";
import { IoWaterOutline } from "react-icons/io5";
import { MdSolarPower } from "react-icons/md";


import React, { useState } from 'react';

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
//const response = await fetch('https://eliezerspace.org/fetchData/api.php?fetchdata=home');
const response = await fetch('http://localhost/ELIKYAFOOSFRONT/FetchDAta/api.php?fetchdata=home');
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
const commitments = sitecontent[6];
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
commitments,
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

export default function soustainability({
banner,
sectionavantagetitle_datas,
allavantages,
sectionmission_datas,
allmissions,
sectionsustainability_datas,
commitments,
sectionteam,
allteam,
configs,
}) {
// Utilisez les données ici // const [nom, setNom] = useState('');
const [email, setEmail] = useState('');
const [telephone, setTelephone] = useState('');
const [subject, setSubject] = useState('');
const [message, setMessage] = useState('');
const [apiResponse, setApiResponse] = useState('');
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [showAlert, setShowAlert] = useState(false); // Nouvel état pour contrôler l'affichage de l'alerte






const handleSubmit = async (e) => {
e.preventDefault();
setIsLoading(true);

// Création d'un FormData pour inclure le fichier
const formData = new FormData();
// formData.append('nom', nom);
formData.append('email', email);
formData.append('telephone', telephone);
formData.append('subject', subject);
formData.append('message', message);
// Envoi de la requête à l'API
try {
const response = await fetch('http://localhost/ELIKYAFOOSFRONT/FetchDAta/api.php?proposal=1', {
method: 'POST',
body: formData,
});

if (!response.ok) {
throw new Error(`Echec d'envoi, Rassurez-vous d'avoir accès à internet`);
}

const contentType = response.headers.get('content-type');
if (!contentType || !contentType.includes('application/json')) {
throw new Error('La réponse n\'est pas au format JSON.');
}

const result = await response.json();
console.log('Réponse de l\'API:', result); // Vérifiez ici
setApiResponse(result.message);
console.log('apiResponse:', apiResponse); // Vérifiez ici
} catch (error) {
setError(error.message);
} finally {
setIsLoading(false);
}
};
return (
<>

  <Head>

    <title>Elikya foods</title>
    <meta name="description"
      content="Elikya food is a agrigultural company based in kinshasa, Democratic Replublic of Congo, that aims to redefine the agricultural landscape in the region" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="favicon.ico" />

  </Head>
  <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
    <div className="preloader"></div>
    <main className={styles.main}>

      <div className="heroMaicontainer2">
        <div className="heroMaicontainer">
          <div className="main-cover2" style={{backgroundImage:'url(sites_images/f.webp)'}}>
            <MainHeader phone={configs.telephone1} 
      email={configs.email} activepage="contact"  />
            <div className="hero-sub-container2">

            </div>
          </div>
        </div>
      </div>
      <div className="contact_container row">
        <div className="col-lg-12 ">
          <div className="contacts">
            <div className="Partnership_form particulartext ">
              <h3>
             Connect with us
              </h3>
              <h4 className="mb-4">
                <span className="mt-4"> We Redifine the agricultural landscape in RDC</span>
              </h4>
              <div className="form">
                <form method="post" role="form" className="Partenershipfom" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="mb-3 col-sm-6 col-lg-6">
                      <label for="email" className="form-label label">Your email</label>
                      <input type="email" name="email" className=" form-control email" id="email"
                        placeholder="Your mail adress" value={email} onChange={(e)=> setEmail(e.target.value)}
                      required/>
                    </div>
                    <div className="mb-3 col-sm-6 col-lg-6">
                      <label for="telephone" className="form-label label">Your phone number</label>
                      <input type="text" name="telephone" className="form-control telephone" id="telephone"
                        placeholder="Your phone number" value={telephone} onChange={(e)=> setTelephone(e.target.value)}
                      required/>
                    </div>
                  </div>
                  <div className="mb-3 col-sm-12 col-lg-12">
                    <label for="subject" className="form-label label">subject</label>
                    <input type="text" name="subject" className="form-control subject" id="subject"
                      placeholder="Your subject" value={subject} onChange={(e)=> setSubject(e.target.value)} required/>
                  </div>

                  <div className="mb-3">
                    <label for="message" className="form-label label">Your Messsage</label>
                    <textarea className="form-control" name="message" id="message" placeholder="Message" rows="5"
                      value={message} onChange={(e)=> setMessage(e.target.value)} required></textarea>
                  </div>
                  {error && <div className="alert alert-info mb-3" >{error}</div>}
                  {/* Afficher la notification de succès */}
                  {apiResponse && (
                  <div className="alert alert-info mb-3" role="alert">
                    {apiResponse}
                  </div>
                  )}

                  <button type="submit" name="sendmail" className="btn btn-success" disabled={isLoading}>
                    {isLoading ? 'whait a moment ... ' : 'Send your Message'}</button>

                </form>
              </div>
            </div>
            <div className="soustainability_peech ">
              <h3 className="">
                Contacts
              </h3>
              <h4 className="mb-4">
                <span className="span_h4 mt-4" style={{fontWeight:"100"}}>Together, we ensure that more high-quality food is available to meet market demand</span>
              </h4>
             
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5281795.683629021!2d15.620835929077915!3d-3.1315877021165544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066a8b%3A0x168b7e4e1f52378d!2sKinshasa!5e0!3m2!1sfr!2scd!4v1741177172511!5m2!1sfr!2scd" width="100%" height="380" style={{border:'0',borderRadius:'6px',marginTop:'50px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              {/* {commitments.slice(0, 4).map((e) => {
              const titre = e.titre_commitment;
              const titreenminuscule = titre.toLowerCase();

              const MyIcone = () =>{
              if (titreenminuscule.includes(('organic'))) {
              return (
              <Iconsfa.FaSeedling />
              );
              }
              else if (titreenminuscule.includes(('water'))) {
              return (
              <IoWaterOutline />
              );
              }
              else if (titreenminuscule.includes(('wast'))) {
              return (
              <Iconsfa.FaRecycle />
              );
              }
              else if (titreenminuscule.includes(('energy'))) {
              return (
              <MdSolarPower />
              );
              }

              }

              return (
              <div className="cardSoutainability">
                <div className="img">
                  <MyIcone />
                </div>
                <div className="containt_soustain">
                  <h6>
                    {titre}
                  </h6>
                  <span className="">
                    {e.description_commitement}
                  </span>
                </div>
              </div>
              );
              })} */}


            </div>
          </div>
        </div>
      </div>


    </main>
    <Footer phone1={configs.telephone1} phone2={configs.telephone2} adresse={configs.adressephysique}
      facebook={configs.facebook} twitter={configs.twitter} linkendin={configs.linkedin} email={configs.email}
      about_us={banner.descriptionduprogramme} />
  </div>
</>
);
}