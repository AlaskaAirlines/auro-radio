/* eslint-disable arrow-parens */
/* eslint-disable newline-after-var */
/* eslint-disable one-var */
/* eslint-disable id-length */
/* eslint-disable sort-vars */
/* eslint-disable no-console */
console.log('Loaded events.js');
const odsHandler = (e) => console.log(`auro ${e.type}: ${e.target.id} ${e.target.checked}`),
 radioHandler = (e) => console.log(`rdo ${e.type}: ${e.target.id} ${e.target.checked}`);

const odsradioes = document.querySelectorAll('auro-radio');
console.log(odsradioes);
odsradioes.forEach(ods => ods.addEventListener('change', odsHandler));
odsradioes.forEach(ods => ods.addEventListener('input', odsHandler));

const defaultradio = document.querySelectorAll('input[type="radio"]');
console.log(defaultradio);
defaultradio.forEach(radio => radio.addEventListener('change', radioHandler));
defaultradio.forEach(radio => radio.addEventListener('input', radioHandler));