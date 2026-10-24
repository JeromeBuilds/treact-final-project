function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}
function openMenu() {
  document.body.classList.add("menu--open");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

document.querySelectorAll('a[href="#pricing"]').forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});
