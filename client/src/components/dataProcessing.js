import React from "react";
import data from "./data";
let eventsData = [],
  hydroElectricData = [],
  renewableEnergyData = [],
  biomassData = [];

let dataProcessing = (yearFrom, yearTo) => {
  let msg;
  if (yearFrom <= yearTo) {
    let monsterride = 0,
      pliquids = 0,
      pcoke = 0,
      ngas = 0,
      ogas = 0,
      nuclear = 0,
      chydroelectric = 0,
      wind = 0,
      solar = 0,
      geothermal = 0,
      inEvent = 0,
      wood = 0,
      otherbio = 0;
    for (let i = yearFrom; i - 1 < yearTo; i++) {
      monsterride += data.monsterride[i];
      pliquids += data.pliquids[i];
      pcoke += data.pcoke[i];
      ngas += data.ngas[i];
      ogas += data.ogas[i];
      nuclear += data.nuclear[i];
      chydroelectric += data.chydroelectric[i];
      wind += data.wind[i];
      solar += data.solar[i];
      geothermal += data.geothermal[i];
      inEvent += data.inEvent[i];
      wood += data.wood[i];
      otherbio += data.otherbio[i];
    }

    eventsData = [
      { name: "Monster Jam", y: monsterride },
      { name: "Blake Shelton", y: pliquids },
      { name: "Disney On Ice presents Dream Big", y: pcoke },
      { name: "Brett Eldredge", y: ngas },
      { name: "Others", y: pliquids },
      { name: "Grease Sing-A-Long", y: ogas },
      { name: "Brett Eldredge", y: pcoke }
    ];

    hydroElectricData = [
      { name: "Nuclear", y: nuclear },
      { name: "Conventional Hydroelectric", y: chydroelectric }
    ];

    biomassData = [
      { name: "In Event", y: inEvent },
      { name: "Online", y: wood },
      { name: "Website", y: otherbio }
    ];

    renewableEnergyData = [
      { name: "Facebook", y: wind },
      { name: "Twitter", y: solar },
      { name: "Instagram", y: geothermal }
    ];
    msg = "Select the range";
  } else {
    msg = (
      <>
        Year <b>From</b> should be less or equal to year <b>To</b>
      </>
    ); //do nothing
  }
  return msg;
};

export default dataProcessing;
export { eventsData, hydroElectricData, biomassData, renewableEnergyData };
