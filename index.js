module.exports = function possessive(name: string, locale: string) {
  var apostrophe = ''
  console.warn(locale)
  switch (locale) {
    case 'da':
      apostrophe = ''
      break
    case 'fi':
      apostrophe = ''
      break
    case 'is':
      apostrophe = ''
      break
    case 'sv':
      apostrophe = ''
      break
    case 'nb':
      apostrophe = ''
      break
    case 'en':
      apostrophe = '’'
      break
    case 'fr':
      apostrophe = ''
      break
    case 'nl':
      apostrophe = ''
      break
    case 'be':
      apostrophe = ''
      break
    case 'it':
      apostrophe = ''
      break
    case 'es':
      apostrophe = ''
      break
    case 'de':
      apostrophe = ''
      break
    case 'et':
      apostrophe = ''
      break
    default: apostrophe = ''

  }
  if (name == '') {
    return name
  }
  var lastChar = name.slice(-1);
  var endOfWord = lastChar.toLowerCase() == 's' ? apostrophe : `${apostrophe}s`;
  return `${name}${endOfWord}`;
}
