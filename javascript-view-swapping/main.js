const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (!event.target.matches('.tab')) {
    return;
  }

  if (event.target.matches('.tab')) {
    $tabElements.forEach(item => {
      if (item === event.target) {
        item.className = 'tab active';
      } else {
        item.className = 'tab';
      }
    });

    const dataView = event.target.getAttribute('data-view');
    $views.forEach(item => {
      if (item.dataset.view !== dataView) {
        item.className = 'view hidden';
      } else {
        item.className = 'view';
      }
    });
  }

});
