import { useEffect } from "react";



const GTranslate = () => {
  useEffect(() => {
    if (!window.gtranslateSettings) {
      window.gtranslateSettings = {
        default_language: "en",
        languages: ["en", "fr", "it", "es", "sw"],
        wrapper_selector: ".gtranslate_wrapper",
        switcher_vertical_position: "top",
        float_switcher_open_direction: "bottom",
        alt_flags: { en: "usa" },
      };
    }

    if (!document.getElementById("gtranslate-script")) {
      const script = document.createElement("script");
      script.id = "gtranslate-script";
      script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default GTranslate;

