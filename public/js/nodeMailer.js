const Form = document.querySelector('#create-event-form');
let eventTitle = document.getElementById('event-title');
let email = document.getElementById('to');
let eventDate = document.getElementById('event-date');
let eventTime = document.getElementById('event-time');





Form.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {

    name: eventTitle.value,
    email: email.value,
    subject: eventTitle.value,
    date: eventDate.value,
    time: eventTime.value

  }

  let xhr = new XMLHttpRequest();

  xhr.open('POST', '/events');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function() {

    console.log(xhr.responseText);

    if( xhr.responseText == 'success') {

      alert('Email sent!');

    } else {

      alert('Could not send email!')

    }

  }
  
  xhr.send(JSON.stringify(formData));

});