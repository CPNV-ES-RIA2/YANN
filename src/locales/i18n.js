import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "EN",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      EN: {
        translation: {
          home: {
            maxLabels: "Maximum number of labels",
            minConfidence: "Minimum percentage of confidence",
            analyze: "Analyze",
          },
          dragger: {
            uploadText: "Click or drag image to this area to upload",
            uploadHint: "Support for a single upload.",
          },
          results: {
            label: "Label",
            value: "Value",
          },
        },
      },
      FR: {
        translation: {
          home: {
            maxLabels: "Nombre maximal de labels",
            minConfidence: "Pourcentage minimal de confiance",
            analyze: "Analyser",
          },
          dragger: {
            uploadText:
              "Cliquez sur l'image ou faites-la glisser dans cette zone pour la télécharger",
            uploadHint: "Prise en charge d'un téléchargement unique.",
          },
          results: {
            label: "Label",
            value: "Valeur",
          },
        },
      },
      DE: {
        translation: {
          home: {
            maxLabels: "Maximale Anzahl von Etiketten",
            minConfidence: "Mindestprozentsatz des Vertrauens",
            analyze: "Analysieren Sie",
          },
          dragger: {
            uploadText:
              "Klicken oder ziehen Sie das Bild zum Hochladen in diesen Bereich",
            uploadHint: "Unterstützung für einen einzigen Upload.",
          },
          results: {
            label: "Etikett",
            value: "Wert",
          },
        },
      },
    },
  });

export default i18n;
