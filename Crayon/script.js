const calendrierDuCrayon = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
  };
  
  function drawMyPen(mois) {
    const calendrier = calendrierDuCrayon[mois];

    if (calendrier === undefined) {
        return `Ce mois-ci: "${mois}", n'est pas valide. Essaie avec un autre.\n`
        ;
      }
  
    let pen = "";
    pen += " /\\ \n";
    pen += "/__\\ \n";
    for (let i = 0; i < calendrier; i++) {
        pen += "|||| \n";
      }

    let gomme = "";
    if (calendrier <= 4) {
      gomme += "|__| \n";
      gomme += "|__| \n";
    } else {
      gomme += "|__| \n";
      gomme += "|  | \n";
      gomme += "|__| \n";
    }
  
    return pen + gomme;
  }
  
  console.log(drawMyPen("decembre"));
  console.log(drawMyPen("Hola"));
  console.log(drawMyPen("mars"));
  console.log(drawMyPen("juin"));
  console.log(drawMyPen("mai"));
  console.log(drawMyPen("avril"));
  