
fetch('./js/vendor/firmatari.json', {
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
}).then((res) => res.json()).then(json => {
  document.querySelector('#firmatari > ol#firme').innerHTML = getProfessori(json);
  document.querySelector('#firmatari > p').innerHTML = `Siamo più di ${json.length-2}!`;
})

function getProfessori(firmatari) {
    let data = '';
    firmatari.map(f => data += `<li><strong>${f.nome}</strong>${f.istituto != '' ? ' – ' + f.istituto : ''}</li>`)
    return data;
}
