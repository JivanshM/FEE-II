function emailSend(){

var userName = document.getElementById('name').value;
var phone = document.getElementById('phone').value;
var email = document.getElementById('email').value;

var messageBody = "Name " + userName +
"<br/> Phone " + phone +
"<br/> Email " + email;
Email.send({
Host : "smtp.elasticemail.com",
Username : "jivansh34@gmail.com",
Password : "457FD8119FFF299EA6DDA0B99DD3A4B771C1",
To : 'jivansh.midha99@gmail.com',
From : "jivansh34@gmail.com",
Subject : "This is the subject",
Body : messageBody
}).then(
message => {
  if(message=='OK'){
      swal("Secussful", "You clicked the button!", "success");
  }
  else{
      swal("Error", "You clicked the button!", "error");
  }
}
);
}   