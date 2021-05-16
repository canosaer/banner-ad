class DarkMoonAd {
    constructor() {

        this.animate()
    }

    animate = () => {

        console.log(`hi`)

        let frame1 = {
            container: document.querySelector('.frame1'),
        } 
        let frame2 = {
            container: document.querySelector('.frame2'),
            text: document.querySelector('.frame2__text'),
        }
        let frame3 = {
            container: document.querySelector('.frame3'),
            yearsRow: document.querySelector(`.frame3__years-row`),
            number: document.querySelector('.frame3__number'),
            text: document.querySelector('.frame3__text'),
        }
        let frame4 = {
            container: document.querySelector('.frame4'),
            ratingRow: document.querySelector('.frame4__rating-row'),
            star: document.querySelector('.frame4__star'),
            rating: document.querySelector('.frame4__rating'),
            text: document.querySelector('.frame4__text'),
        }
        let frame5 = {
            container: document.querySelector('.frame5'),
            backers: document.querySelector('.frame5__backers'),
            text: document.querySelector('.frame5__text'),
        }
        let frame6 = {
            container: document.querySelector('.frame6'),
            logo: document.querySelector('.frame6__logo'),
            text: document.querySelector('.frame6__text'),
        }
        let frame7 = {
            container: document.querySelector('.frame7'),
            logo: document.querySelector('.frame7__logo'),
            text: document.querySelector('.frame7__text'),
            priceRow: document.querySelector('.frame7__price-row'),
            dollarSign: document.querySelector('.frame7__dollar-sign'),
            price: document.querySelector('.frame7__price'),
            detail: document.querySelector('.frame7__detail'),
            button: document.querySelector('.frame7__button')
        }

        let tl = gsap.timeline()

        tl.to(
            frame2.container, {
                borderRadius: '0rem',
                width: '240px',
                height: '240px',
                duration: 1.5,
                ease: 'power2.inOut',
                onComplete: function(){
                    frame2.container.style.borderRadius = '0rem'
                    frame2.container.style.width = '100%'
                    frame2.container.style.height = '100%'
                    frame2.text.style.opacity = '1'
                },
            }
        )

        // tl.to(logoIMG, {y: 150, x: 300, duration: 1, ease: "power2.in"});
        // tl.to(logoIMG, {y: 0, x: 600, duration: 1, ease: "power2.out"});
        // tl.to(logoIMG, {opacity: 0, duration: 1});

    }


}

new DarkMoonAd()