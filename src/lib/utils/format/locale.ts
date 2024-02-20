export const locale = navigator.language;

const Locale = {
  en: {
    defaultCurrency: "USD",
    dateFormat: "MMMM D, YYYY",
    dateTimeFormat: "MMMM D, YYYY h:mm",
  },
  pt: {
    defaultCurrency: "BRL",
    dateFormat: "D MMMM YYYY",
    dateTimeFormat: "D MMMM YYYY h:mm",
  },
  gn: {
    defaultCurrency: "PYG",
    dateFormat: "D MMMM YYYY",
    dateTimeFormat: "D MMMM YYYY h:mm",
  },
  ar: {
    defaultCurrency: "ARS",
    dateFormat: "D MMMM YYYY",
    dateTimeFormat: "D MMMM YYYY h:mm",
  },
};

export const getLocale = (value = locale) => {
  switch (value) {
    case "en":
      return Locale["en"];
    case "pt":
      return Locale["pt"];
    case "gn":
      return Locale["gn"];
    case "ar":
      return Locale["ar"];
    default:
      return Locale["en"];
  }
};



