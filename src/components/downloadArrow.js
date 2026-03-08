export function initDownloadArrow() {
  const arrow = document.getElementById('downloadArrow');

  const container = document.querySelector('.js-licenses-container');
  if (!container) return;

  container.addEventListener('click', e => {
    const { target } = e;

    if (window.innerWidth < 1023) return;

    if (target.closest('.js-download-btn')) {
      setTimeout(() => {
        arrow.classList.add('shown');
      }, 1500);
    }
  });
}
