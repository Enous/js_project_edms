const form = document.querySelector('form');
currentPath = window.location.pathname;

if (currentPath.includes('/form/')) {
    const id = currentPath.split('/').pop();
    form.action = `/roles/form/${id}/edit`;
} else {
    form.action = '/roles/form/create';
}