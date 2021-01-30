class Carousel {
  constructor(images) {
    this.images = images;
    this.currentIndex = 0;
    this.goLeft = this.goLeft.bind(this);
    this.goRight = this.goRight.bind(this);
    this.renderArrow = this.renderArrow.bind(this);
    this.renderCarousel = this.renderCarousel.bind(this);
    this.renderImages = this.renderImages.bind(this);
    this.carouselImages = null;

  }

  goLeft() {
    const oldIndex = this.currentIndex;
    this.currentIndex = oldIndex === 0 ? this.images.length - 1 : oldIndex - 1;
    this.carouselImages.forEach(item => {
      item.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    });
  }

  goRight() {
    const oldIndex = this.currentIndex;
    this.currentIndex = oldIndex === this.images.length - 1 ? 0 : oldIndex + 1;
    this.carouselImages.forEach(item => {
      item.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    });
  }

  renderArrow(iconClass, side, onClickFunction) {
    const button = document.createElement('button');
    const icon = document.createElement('i');
    icon.className = `icon ${iconClass}`;
    button.appendChild(icon);
    button.setAttribute('id', side);
    button.addEventListener('click', onClickFunction);
    return button;
  }

  renderImages(container, images) {
    images.forEach(imageLink => {
      const img = document.createElement('img');
      img.setAttribute('src', imageLink);
      img.className = 'carousel-image';
      container.appendChild(img);
    });
  }

  renderCarousel() {
    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'carousel-container';

    this.renderImages(carouselContainer, this.images);

    const leftArrow = this.renderArrow('fas fa-2x fa-chevron-left', 'left-arrow', this.goLeft);
    const rightArrow = this.renderArrow('fas fa-2x fa-chevron-right', 'right-arrow', this.goRight);
    carouselContainer.append(leftArrow, rightArrow);

    document.querySelector('body').appendChild(carouselContainer);
    const carouselImages = document.querySelectorAll('.carousel-image');
    this.carouselImages = carouselImages;
  }
}

const pictures = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
const PokemonCarousel = new Carousel(pictures);
PokemonCarousel.renderCarousel();
