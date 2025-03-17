import { useEffect } from "react";

const GTranslate = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Définir la configuration AVANT de charger le script
      window.gtranslateSettings = {
        default_language: "en",
        languages: ["en", "fr", "it", "es", "sw"], // Swahili ajouté
        wrapper_selector: ".gtranslate_wrapper",
        flag_size: 24,
        alt_flags: { en: "usa" },
      };

      // Vérifier si le script est déjà présent pour éviter les doublons
      if (!document.querySelector('script[src="https://cdn.gtranslate.net/widgets/latest/popup.js"]')) {
        const script = document.createElement("script");
        script.src = "https://cdn.gtranslate.net/widgets/latest/popup.js";
        script.defer = true;
        script.onload = () => console.log("GTranslate chargé avec succès !");
        document.body.appendChild(script);
      }
    }
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default GTranslate;