let osoba1 = {
  jmeno: 'Alena',
  uspory: 33000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 288000
};

const enoughBoth = 100000;
const enoughOne = 50000;

const dovolena = (cestovatel1, cestovatel2) => {
  const funds1 = cestovatel1.uspory;
  const funds2 = cestovatel2.uspory;
  if (funds1 + funds2 >= enoughBoth) {
    console.log(`Holky, máte už naspořeno alespoň ${enoughBoth} Kč, můžete vyrazit na dovolenou!`);
    if (funds1 >= enoughOne) {
      console.log(`Aleno, máš naspořeno min. ${enoughOne} Kč, konkrétně ${funds1} Kč.`);
    } else {
      console.log(`Aleno, tobě do ${enoughOne} Kč chybí ještě ${enoughOne - funds1} Kč.`);
    } if (funds2 >= enoughOne) {
      console.log(`Karolíno, máš naspořeno min. ${enoughOne} Kč, konkrétně ${funds2} Kč.`);
    } else {
      console.log(`Karolíno, tobě do ${enoughOne} Kč chybí ještě ${enoughOne - funds2} Kč.`)
    }
  } else {
    console.log(`Holky, zatím nemáte dohromady naspořeno ani ${enoughBoth} Kč. Ještě trochu musíte zamakat!`)
    console.log(`Ještě vám chybí min. ${enoughBoth - (funds1 + funds2)} Kč.`)

    if (funds1 < enoughOne) {
      console.log(`Aleno, tobě do ${enoughOne} Kč ještě chybí ${enoughOne - funds1} Kč.`)
    } if (funds2 < enoughOne) {
      console.log(`Karolíno, tobě do ${enoughOne} Kč ještě chybí ${enoughOne - funds2} Kč.`)
    }

  }
}

dovolena(osoba1, osoba2);