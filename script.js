const navBtn = document.querySelector('#toggle');
const navPane = document.querySelector('.nav_pane');

navBtn.addEventListener('click', (e) => {
  const state = e.target.attributes['data-toggle'].value;
  if (state === 'is-open') {
    closeNav();
    e.target.attributes['data-toggle'].value = 'is-closed';
  } else {
    openNav();
    e.target.attributes['data-toggle'].value = 'is-open';
  }
});

function openNav() {
  navPane.style.display = 'inline-block';
}

function closeNav() {
  navPane.style.display = 'none';
}
