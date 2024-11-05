const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

if (!open || !close || !container) {
  console.error('Required elements not found');
} else {
  const toggleNav = (action) => {
    try {
      if (action === 'open') {
        container.classList.add('show-nav');
      } else {
        container.classList.remove('show-nav');
      }
    } catch (error) {
      console.error('Error toggling navigation:', error);
    }
  };

  open.addEventListener('click', () => toggleNav('open'));
  close.addEventListener('click', () => toggleNav('close'));
}