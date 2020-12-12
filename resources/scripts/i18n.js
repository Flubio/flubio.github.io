function i18n() {
  let langsettings;
  let translations = [];
  let localLang = navigator.language;
  let shortLang = localLang.substr(0, 2);

  let longLangs = new Map()
    .set("en", "english")
    .set("de", "german");

  let fullLang = longLangs.get(shortLang) || "english";

  jQuery.getJSON(`https://log.flubio.de/api/github/pages/i18n/${fullLang}.json`, function (data) {
    langsettings = data.langSettings;
    document.getElementById('lang').innerHTML = 'Language: ' + langsettings.fullName + '| Cuntrycode: ' + langsettings.countrycode + '| LangID: ' + langsettings.id;
    data.i18n.forEach(element => {
      translations.push(element);
    });
    translations.forEach(element => {
      document.getElementById(element.key).innerHTML = element.translation;
    });
  });
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