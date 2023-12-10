import Papa from 'papaparse';

const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQqFa_IiGFNKobjHjT2TN5GWdXubtiy_bqhCiShInRIiHqr2n-Eb6o6N9Nqq5NVg0Iyog0BHgvQGNmC/pub?output=csv";


const firmatari = document.querySelector('#firmatari');

Papa.parse(CSV_URL, {
	download: true,
	complete: function(results) {
		let professori = results.data.slice(1);

    firmatari.querySelector('p').innerHTML = `Siamo più di ${professori.length-2}!`;
    firmatari.querySelector('ul').innerHTML = formatProfData(professori);

	}
});


function formatProfData(data){
  let prof = ''
  data.map(
    p => p[5] === 'Nome e cognome + Denominazione scuola'
      ? prof += `<li><strong>${p[1]}</strong> – ${p[4]}</li>`
      : prof += `<li><strong>${p[1]}</strong></li>`
  )
  return prof
}