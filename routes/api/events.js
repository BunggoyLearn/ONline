document.addEventListener('DOMContentLoaded', () => {
  const createEventForm = document.getElementById('create-event-form');
  if (createEventForm) {
    createEventForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const title = document.getElementById('event-title').value;
      const description = document.getElementById('event-description').value;
      const date = document.getElementById('event-date').value;
      const time = document.getElementById('event-time').value;

      const response = await fetch('/api/events', {
        method: 'POST',
        body: JSON.stringify({ title, description, date, time }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create event');
      }
    });
  }

  document.querySelectorAll('.edit-event-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const id = event.target.getAttribute('data-id');

      const eventElement = event.target.closest('.event');
      const title = eventElement.querySelector('h2').textContent;
      const description = eventElement.querySelector('p:nth-of-type(1)').textContent;
      const date = eventElement.querySelector('p:nth-of-type(2)').textContent.split(' at ')[0];
      const time = eventElement.querySelector('p:nth-of-type(2)').textContent.split(' at ')[1];

      document.getElementById('edit-event-id').value = id;
      document.getElementById('edit-event-title').value = title;
      document.getElementById('edit-event-description').value = description;
      document.getElementById('edit-event-date').value = date;
      document.getElementById('edit-event-time').value = time;

      document.getElementById('update-event-form').style.display = 'block';
      document.getElementById('new-event-form').style.display = 'none';
    });
  });

  const editEventForm = document.getElementById('edit-event-form');
  if (editEventForm) {
    editEventForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const id = document.getElementById('edit-event-id').value;
      const title = document.getElementById('edit-event-title').value;
      const description = document.getElementById('edit-event-description').value;
      const date = document.getElementById('edit-event-date').value;
      const time = document.getElementById('edit-event-time').value;

      const response = await fetch(`/api/events/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description, date, time }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to update event');
      }
    });
  }

  document.querySelectorAll('.delete-event-btn').forEach(button => {
    button.addEventListener('click', async (event) => {
      const id = event.target.getAttribute('data-id');

      const response = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete event');
      }
    });
  });
});
