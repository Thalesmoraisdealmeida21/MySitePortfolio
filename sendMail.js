
async function sendMail() {
  const data = JSON.stringify({
    "FromEmail": "thales.morais21@gmail.com",
    "FromName": "Your Mailjet Pilot",
    "Recipients": [
      {
        "Email": "thales.morais21@gmail.com",
        "Name": "Thales Morais"
      }
    ],
    "Subject": "Your email flight plan!",
    "Text-part": "Dear passenger, welcome to Mailjet! May the delivery force be with you!",
    "Html-part": "<h3>Dear passenger, welcome to Mailjet!</h3><br />May the delivery force be with you!"
  });
  
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", "https://api.mailjet.com/v3/send");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Basic YTBkMjMzNzM5MjIzOTg4NzVjNDI4OGY2YTAyMzc1YTM6NDU1ZGUyMDYwMDk5Y2JiZjZkOTIxM2JlYjVlNzZjNDc=");
  
  const response = xhr.send(data);

  console.log(response)
}
