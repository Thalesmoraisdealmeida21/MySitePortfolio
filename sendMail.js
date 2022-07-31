function sendMail() {
    fetch('https://api.mailjet.com/v3.1/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('a0d23373922398875c4288f6a02375a3:fe5cb3110e14b78db958a9e1529d75e8')
        },
        // body: '{\n\t\t"Messages":[\n\t\t\t\t{\n\t\t\t\t\t\t"From": {\n\t\t\t\t\t\t\t\t"Email": "contato@thalesmorais.dev",\n\t\t\t\t\t\t\t\t"Name": "Me"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t"To": [\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t"Email": "dalma2105@uorak.com",\n\t\t\t\t\t\t\t\t\t\t"Name": "You"\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t],\n\t\t\t\t\t\t"Subject": "My first Mailjet Email!",\n\t\t\t\t\t\t"TextPart": "Greetings from Mailjet!",\n\t\t\t\t\t\t"HTMLPart": "<h3>Dear passenger 1, welcome to <a href=\\"https://www.mailjet.com/\\">Mailjet</a>!</h3><br />May the delivery force be with you!"\n\t\t\t\t}\n\t\t]\n\t}',
        body: JSON.stringify({
            'Messages': [
                {
                    'From': {
                        'Email': 'contato@thalesmorais.dev',
                        'Name': 'Me'
                    },
                    'To': [
                        {
                            'Email': 'thales.morais21@gmail.com',
                            'Name': 'You'
                        }
                    ],
                    'Subject': 'My first Mailjet Email!',
                    'TextPart': 'Greetings from Mailjet!',
                    'HTMLPart': '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!'
                }
            ]
        })
    }).then(function (ret) {
        console.log(ret.data)

        alert("Contato enviado com sucesso")
    });


}