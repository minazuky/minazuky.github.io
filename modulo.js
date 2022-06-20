const scriptURL = 'https://script.google.com/macros/s/AKfycbyX8meGDwIvNF0dptDHCSeB3JeduT8oJcUMDlDsmZxTBJJ3NCzZSP0Izi-JDSVH4Hbp/exec'
const form = document.forms['submit-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
