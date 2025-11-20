const deleteButtons = document.querySelectorAll('.delete-btn');

deleteButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const clickedButton = event.target;
    const id = clickedButton.getAttribute('data-id');
    deleteItem(id);
  });
});

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.create-btn');

openModal.addEventListener('click', () => {
  modal.showModal();
})

async function deleteItem(id) {
  console.log(id);
  window.location.href = `/positions/${id}/delete`;
}