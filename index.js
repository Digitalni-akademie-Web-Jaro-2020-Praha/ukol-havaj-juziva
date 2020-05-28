let osoba1 = {
  jmeno: 'Alena',
  uspory: 43000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 38000
};

const dovolena = () => {
  if (osoba1.uspory + osoba2.uspory >= 100000) {
    console.log('Holky, muzete vyrazit na dovolenou!');
    if (osoba1.uspory >= 50000) {
      console.log('Aleno, mas nasporeno dost')
    } else {
      console.log(`Aleno, chybi ti jeste ${50000 - osoba1.uspory}`)
    } if (osoba2.uspory >= 50000) {
      console.log('Karolino, mas nasporeno dost')
    } else {
      console.log(`Karolino, chybi ti jeste ${50000 - osoba2.uspory}`)
    }
  } else {
    console.log('Jeste trochu musite zamakat.')
    console.log(`Jeste vam chybi ${100000 - (osoba1.uspory + osoba2.uspory)}.`)

    if (osoba1.uspory < 50000) {
      console.log(`Aleno, do 50 000 ti jeste chybi ${50000 - osoba1.uspory}`)
    } if (osoba2.uspory < 50000) {
      console.log(`Karolino, do 50 000 ti jeste chybi ${50000 - osoba2.uspory}`)
    }
  }
}