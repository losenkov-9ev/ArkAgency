export class TopParallax {
  constructor(element) {
    this.element = element;
    this.img = element.querySelector('img');
    this.init();
  }

  init() {
    this.element.addEventListener('mousemove', (e) => this.handleMouseMove(e));
  }

  handleMouseMove(event) {
    const rect = this.element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 20; // Коэффициент для настройки степени параллакса
    const moveY = (y / rect.height - 0.5) * 20; // Коэффициент для настройки степени параллакса

    this.img.style.transform = `translate(${moveX - 15}px, ${moveY}px)`;
  }
}
