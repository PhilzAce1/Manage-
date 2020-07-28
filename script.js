const navBtn = document.querySelector('#toggle');
const navPane = document.querySelector('.nav_pane');

navBtn.addEventListener(
  'click',
  (e) => {
    const state = e.currentTarget.attributes['data-toggle'].value;
    if (state === 'is-open') {
      closeNav();
      e.currentTarget.attributes['data-toggle'].value = 'is-closed';
    } else {
      openNav();
      e.currentTarget.attributes['data-toggle'].value = 'is-open';
    }
  },
  true
);

function openNav() {
  navPane.style.display = 'inline-block';
}

function closeNav() {
  navPane.style.display = 'none';
}
