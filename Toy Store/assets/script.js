const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const btn = document.querySelectorAll('.buy-now');

btn.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    updateFavoriteCounter();
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('flex');
  modal.classList.add('hidden');
})


const Contacts = document.querySelectorAll('.Contacts');

Contacts.forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    modalContact.classList.remove('hidden');
    modalContact.classList.add('flex');  
    
  })
});


const modalContact = document.querySelector('.modal-contact');

modalContact.addEventListener('click', () => {
  modalContact.classList.add('hidden');
  modalContact.classList.remove('flex');
});

// Сразу скажу нету тут ИИ это БАЗА ! :)

