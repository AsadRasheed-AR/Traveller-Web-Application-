// Funtions for opening and closing of modals for response , errors and result

function openResultModal() {
  document.getElementById('id02').style.display = 'block';
  return 'Modal Opened'
}

function closeResultModal() {
  document.getElementById('id02').style.display = 'none'
}

function openErrorModal(heading, imglink, msg) {
  document.getElementById('response_heading').innerText = heading;
  document.getElementById('response').innerHTML = `<div id="respnse" class="w3-container" id="dynamicData">
    <img src="${imglink}" alt="" id="weatherImg" style="background-color: white;">
    <h3 style="text-align: center; font-family: 'Roboto Condensed', sans-serif;font-size: 20px;font-weight: bold;">
        ${msg}</h3>
  </div>`
  document.getElementById('id03').style.display = 'block';
}

function closeResponseModal() {
  document.getElementById('id03').style.display = 'none'
}


export { openResultModal, closeResultModal , openErrorModal , closeResponseModal}