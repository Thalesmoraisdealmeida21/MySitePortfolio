
async function sendMail() {
  const nome = document.getElementById('name').value
  const email = document.getElementById('email').value
  const assunto = document.getElementById('subject').value


  document.getElementById('inputsForm').style.display = 'none'
  document.getElementById('spinnerLoader').style.display = 'flex'
  document.getElementById('spanText').style.display = 'block'


  const data = {
    'subject': assunto,
    'text': 'Contato',
    'html': `
      <h1>Nome: </h1> ${nome} <br />
      <h1>Email: </h1> ${email} <br />
      <h1>assunto: </h1> ${assunto} 
    `,
    'from': 'Contato 👻 <contato@thalesmorais.dev>'
  }

  const respon = await fetch('https://mail-app-wqj8.onrender.com/sendmail/thales.morais21@gmail.com', {
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  console.log(JSON.stringify(data))

  if(respon.body.status = 'ok') {
    document.getElementById('check').style.display = 'block'
    document.getElementById('spinnerLoader').style.display = 'none'
    document.getElementById('spanText').innerHTML = "Contato recebido com sucesso"
  }
}
