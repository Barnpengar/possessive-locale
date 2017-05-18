module.exports = function possessive(name: string, locale: string) {
  var apostrophe
  switch (locale) {
    case 'da':
      apostrophe = ''
    case 'fi':
      apostrophe = ''
    case 'is':
      apostrophe = ''
    case 'sv':
      apostrophe = ''
    case 'nb':
      apostrophe = ''
    case 'en':
      apostrophe = '’'
    case 'fr':
      apostrophe = ''
    case 'nl':
      apostrophe = ''
    case 'be':
      apostrophe = ''
    case 'it':
      apostrophe = ''
    case 'es':
      apostrophe = ''
    case 'de':
      apostrophe = ''
    case 'et':
      apostrophe = ''
    default: ''

  }
  if(name == '') {
    return name;
  }
  var lastChar = name.slice(-1);
  var endOfWord = lastChar.toLowerCase() == 's' ? apostrophe : `${apostrophe}s`;
  return `${name}${endOfWord}`;
}
