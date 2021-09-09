Descrizione:
// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus:
// * Creare il navigatore in basso con i pallini bianchi (blu se corrispondente all'immagine attualmente visualizzata)
// * Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

Vue.config.devtools = true;
const app = new Vue(
    {
        el: "#root",
        data: {
            counterPhotos: 0,
            photos: [
                'img/image1.jpg',
                'img/image2.jpg',
                'img/image3.jpg',
                'img/image4.jpg'
            ],
            clock: null
        },
        methods: {
            previousPhoto() {
                this.counterPhotos -= 1;
                if (this.counterPhotos < 0) {
                    this.counterPhotos = (this.photos.length - 1);
                }
            },
            nextPhoto() {
                this.counterPhotos += 1;
                if (this.counterPhotos == (this.photos.length)) {
                    this.counterPhotos = 0;
                }
            },
            timer() {
                this.clock = setInterval(this.nextPhoto, 3000)
            },
        },
        mounted() {
            this.timer()
        }
    }
)