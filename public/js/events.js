document.addEventListener('DOMContentLoaded', () => {
  const createEventForm = document.getElementById('create-event-form');
  if (createEventForm) {
    createEventForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const title = document.getElementById('event-title').value;
      const description = document.getElementById('event-description').value;
      const date = document.getElementById('event-date').value;
      const time = document.getElementById('event-time').value;

      // Simple Client-Side Validation Example
      if (!title || !description || !date || !time) {
        alert('Please fill in all fields.');
        return;
      }

      const response = await fetch('/api/events', {
        method: 'POST',
        body: JSON.stringify({ title, description, date, time }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // Dynamically add the new event to the UI
        addEventToUI({ title, description, date, time });
      } else {
        const errorData = await response.json();
        alert(`Failed to create event: ${errorData.message}`);
      }
    });
  }

  async function editFormHandler(event) {
    event.preventDefault();

    const id = document.getElementById('upcoming-event-id').value;
    const title = document.getElementById('upcoming-event-title').value;
    const description = document.getElementById('upcoming-event-description').value;
    const date = document.getElementById('upcoming-event-date').value;
    const time = document.getElementById('upcoming-event-time').value;

    const response = await fetch(`/api/events/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, description, date, time }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Update the event in the UI dynamically
      updateEventInUI({ id, title, description, date, time });
    } else {
      const errorData = await response.json();
      alert(`Failed to update event: ${errorData.message}`);
    }
  };

  document
    .getElementById('edit')
    .addEventListener('click', editFormHandler);

  document.querySelectorAll('.delete-event-btn').forEach(button => {
    button.addEventListener('click', async (event) => {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the event from the UI dynamically
        removeEventFromUI(id);
      } else {
        alert('Failed to delete event');
      }
    });
  });
});

function addEventToUI(event) {
  const eventList = document.getElementById('events-list');
  const eventElement = document.createElement('div');
  eventElement.innerHTML = `
    <div class="event">
      <h2>${event.title}</h2>
      <p>${event.description}</p>
      <p>${event.date} at ${event.time}</p>
      <button class="edit-event-btn" data-id="${event.id}">Edit</button>
      <button class="delete-event-btn" data-id="${event.id}">Delete</button>
    </div>
  `;
  eventList.appendChild(eventElement);
}

function updateEventInUI(event) {
  const eventElement = document.querySelector(`.event[data-id="${event.id}"]`);
  eventElement.querySelector('h2').textContent = event.title;
  eventElement.querySelector('p:nth-of-type(1)').textContent = event.description;
  eventElement.querySelector('p:nth-of-type(2)').textContent = `${event.date} at ${event.time}`;
}

function removeEventFromUI(id) {
  const eventElement = document.querySelector(`.event[data-id="${id}"]`);
  eventElement.remove();
}

/*********************************************** NodeMailer Section *********************************************/



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
  xhr.onload = function () {

    console.log(xhr.responseText);

    if (xhr.responseText == 'success') {

      alert('Email sent!');

    } else {

      alert('Could not send email!')

    }

  }

  xhr.send(JSON.stringify(formData));

});
//update for Bung

