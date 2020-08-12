function i18n() {
  var langsettings;
  var translations = [];
  var localLang = navigator.language;
  switch (localLang.substr(0, 2)) {
    case 'en':
      jQuery.getJSON("https://log.flubio.de/api/github/pages/i18n/english.json", function (data) {
        langsettings = data.langSettings;
        data.i18n.forEach(element => {
          translations.push(element);
        });
        console.log(langsettings);
        console.log(translations);
        translations.forEach(element => {
          document.getElementById(element.key).innerHTML = element.translation;
        });
      });
      break;
    case 'de':
      jQuery.getJSON("https://log.flubio.de/api/github/pages/i18n/german.json", function (data) {
        langsettings = data.langSettings;
        data.i18n.forEach(element => {
          translations.push(element);
        });
        console.log(langsettings);
        console.log(translations);
        translations.forEach(element => {
          document.getElementById(element.key).innerHTML = element.translation;
        });
      });
      break;
    default:
      jQuery.getJSON("https://log.flubio.de/api/github/pages/i18n/english.json", function (data) {
        langsettings = data.langSettings;
        data.i18n.forEach(element => {
          translations.push(element);
        });
        console.log(langsettings);
        console.log(translations);
        translations.forEach(element => {
          document.getElementById(element.key).innerHTML = element.translation;
        });
      });
      break;
  }
}