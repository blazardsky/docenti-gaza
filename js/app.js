

import firmatari from './firmatari.json';

document.querySelector('#firmatari > ul').innerHTML = getProfessori();
document.querySelector('#firmatari > p').innerHTML = `Siamo più di ${firmatari.length-2}!`;

function getProfessori() {
    let data = '';
    firmatari.map(f => data += `<li><strong>${f.nome}</strong>${f.istituto != '' ? ' – ' + f.istituto : ''}</li>`)
    return data;
}



// sotto non fa (CORS)

// import Papa from 'papaparse';

// window.googleDocCallback = function () { return true; }; //https://stackoverflow.com/questions/28546969/cors-authorization-on-google-sheets-api-requests

// const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQqFa_IiGFNKobjHjT2TN5GWdXubtiy_bqhCiShInRIiHqr2n-Eb6o6N9Nqq5NVg0Iyog0BHgvQGNmC/pub?output=csv&callback=googleDocCallback&version=v4";

  // Papa.parse(CSV_URL, {
  //   download: true,
  //   complete: function(results) {
  //     let professori = results.data.slice(1);

  //     console.log(JSON.stringify(formatProfData(professori)))
  //     // firmatari.querySelector('p').innerHTML = `Siamo più di ${professori.length-2}!`;
  //     // firmatari.querySelector('ul').innerHTML = formatProfData(professori);

  //   }
  // });


// function formatProfData(data){
//   let prof = []
//   data.map(
//     p => p[5] === 'Nome e cognome + Denominazione scuola'
//       ? prof.push({nome: p[1], istituto: p[4]})
//       : prof.push({nome: p[1], istituto: ''})
//       // ? prof += `<li><strong>${p[1]}</strong> – ${p[4]}</li>`
//       // : prof += `<li><strong>${p[1]}</strong></li>`
//   )
//   return prof
// }
