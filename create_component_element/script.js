class StartRater extends HTMLElement {
    constructor() {
        super();
        this.build();
    };

    build() { // <= aqui eu coloco meus elementos criados 
        const shadow = this.attachShadow({ mode: 'open' }); //<= modo open mostra que posso fazer alterações futuras

        shadow.appendChild(this.style()); // <= injetando styles no meu componente

        const rater = this.createRater(); //<= div
        this.stars = this.createStars(); // <= span
        this.stars.forEach(stars => rater.appendChild(stars)); // <= pegando meu span e colocando dentro da minha div

        this.resetRating();

        shadow.appendChild(rater); // <= meu componente é uma div com um span que tem uma estrela dentro
    };

    createRater() { // <= criando a minha tag, no caso a div principal
        const rater = document.createElement('div');
        rater.classList.add('star-rater'); // <= class que vai dentro da minha div
        rater.addEventListener('mouseout', this.resetRating.bind(this))
        return rater;
    };

    createStars() { //<= elemento individual aqui no caso estou criando uma estrela
        const createStar = (_, id) => {
            const star = document.createElement('span');
            star.classList.add('star');
            star.setAttribute('data-value', Number(id) + 1); //<= criando um novo atributo na minha tag
            star.innerHTML = '&#9733;'//<= inserindo o que eu preciso dentro da tag / meu conteudo da tag

            star.addEventListener('click', this.setRating.bind(this));
            star.addEventListener('mouseover', this.ratingHover.bind(this));
            return star;
        };

        return Array.from({ length: 5 }, createStar); // <= retorno um array que sera transformado em elemento na minha build
    };

    resetRating() {
        this.correntRatingValue = this.getAttribute('data-rating') || 0;
        this.hightLightRating();
    };

    setRating(event) {
        this.setAttribute('data-rating', event.currentTarget.getAttribute('data-value'));
    };

    ratingHover(event) {
        this.correntRatingValue = event.currentTarget.getAttribute('data-value');
        this.hightLightRating();
    };

    hightLightRating() {
        this.stars.forEach(star => {
            star.style.color =
                this.correntRatingValue >= star.getAttribute('data-value')
                    ? 'yellow'
                    : 'gray'
        });
    };

    style() { // <= estilizacao da minha tag
        const style = document.createElement('style');
        style.textContent = `
            .star {
                font-size: 5rem;
                cursor: pointer;
                color: gray;
            }
        `
        return style;
    }; // aqui eu faco o css padrao, do component criado acima do style utilizando a class adicionada no elemento
};

customElements.define('star-rater', StartRater);