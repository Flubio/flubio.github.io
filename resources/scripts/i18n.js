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
        translations.forEach(element => {
          document.getElementById(element.key).innerHTML = element.translation;
        });
      });
      break;
  }
}


function getCookie(name) {
  var nameEQ = name + "=";
  //alert(document.cookie);
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(nameEQ) != -1) return c.substring(nameEQ.length, c.length);
  }
  return null;
} 