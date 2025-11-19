document.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-btn')) {
    const id = e.target.getAttribute('data-id');
    deleteItem(id);
  }
});

async function deleteItem(id) {
  console.log(id);
  window.location.href = `/positions/${id}/delete`;
}