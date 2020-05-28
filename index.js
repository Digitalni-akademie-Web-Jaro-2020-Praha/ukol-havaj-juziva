let osoba1 = {
  jmeno: 'Alena',
  uspory: 333000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 8000
};

const dovolena = () => {
  if (osoba1.uspory + osoba2.uspory >= 100000) {
    console.log('Holky, máte už naspořeno alespoň 100 000 Kč, můžete vyrazit na dovolenou!');
    if (osoba1.uspory >= 50000) {
      console.log(`Aleno, máš naspořeno min. 50 000 Kč, konkrétně ${osoba1.uspory} Kč.`);
    } else {
      console.log(`Aleno, tobě do 50 000 Kč chybí ještě ${50000 - osoba1.uspory} Kč.`);
    } if (osoba2.uspory >= 50000) {
      console.log(`Karolíno, máš naspořeno min. 50 000 Kč, konkrétně ${osoba2.uspory} Kč.`);
    } else {
      console.log(`Karolíno, tobě do 50 000 Kč chybí ještě ${50000 - osoba2.uspory} Kč.`)
    }
  } else {
    console.log('Holky, zatím nemáte dohromady naspořeno ani 100 000 Kč. Ještě trochu musíte zamakat!')
    console.log(`Ještě vám chybí min. ${100000 - (osoba1.uspory + osoba2.uspory)} Kč.`)

    if (osoba1.uspory < 50000) {
      console.log(`Aleno, tobě do 50 000 Kč ještě chybí ${50000 - osoba1.uspory} Kč.`)
    } if (osoba2.uspory < 50000) {
      console.log(`Karolíno, tobě do 50 000 Kč ještě chybí ${50000 - osoba2.uspory} Kč.`)
    }

  }
}

dovolena();