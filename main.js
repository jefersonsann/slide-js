class Slide {
  constructor(id) {
    this.ativo = 0;

    this.init(id);
  }

  trocaSlide(index) {
    this.ativo = index;

    if (this.ativo >= this.slide.children.length) {
      this.ativo = 0;
    }

    this.slide.scrollLeft = this.ativo * this.slide.clientWidth;
    this.atualizaMiniaturas();
  }

  atualizaMiniaturas() {
    this.miniaturas.forEach((miniatura, index) => {
      miniatura.classList.remove("ativo");

      if (index === this.ativo) {
        miniatura.classList.add("ativo");
      }
    });
  }

  pausarSlide() {
    clearInterval(this.interval);
  }

  init(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.miniaturas = document.querySelectorAll(".banner_miniatura");
    this.miniaturas.forEach((miniatura, index) => {
      miniatura.addEventListener("click", () => {
        this.trocaSlide(index);
      });
    });
    this.interval = setInterval(() => {
      const index = this.ativo + 1;
      this.trocaSlide(index);
    }, 5000);
    this.trocaSlide(this.ativo);
  }
}

new Slide("banner");
