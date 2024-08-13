/* const express = require('express');
const router = require('express').Router();
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

  }

  let xhr = new XMLHttpRequest();

  xhr.open('POST', '/events');
  xhr.setRequestHeader('content-type', 'application/jason');
  xhr.onload = function() {

    console.log(xhr.responseText);

    if( xhr.responseText == 'success') {

      alert('Email sent!');

    } else {

      alert('Something went wrong!')

    }

  }
  
  xhr.send(JSON.stringify(formData));

});


module.exports = router; */