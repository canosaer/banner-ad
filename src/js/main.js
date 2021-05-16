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
            dark: document.querySelector('.frame2__dark'),
            moon: document.querySelector('.frame2__moon'),
        }
        let frame3 = {
            container: document.querySelector('.frame3'),
            yearsRow: document.querySelector(`.frame3__years-row`),
            number: document.querySelector('.frame3__number'),
            text: document.querySelector('.frame3__text'),
            animatedNumber: 0,
        }
        let frame4 = {
            container: document.querySelector('.frame4'),
            ratingRow: document.querySelector('.frame4__rating-row'),
            star: document.querySelector('.frame4__star'),
            rating: document.querySelector('.frame4__rating'),
            text: document.querySelector('.frame4__text'),
            animatedNumber: 0,
        }
        let frame5 = {
            container: document.querySelector('.frame5'),
            backers: document.querySelector('.frame5__backers'),
            text: document.querySelector('.frame5__text'),
            animatedNumber: 0,
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
                width: '300px',
                height: '300px',
                duration: 1,
                ease: 'power2.inOut',
                onComplete: function(){
                    frame2.container.style.borderRadius = '0rem'
                    frame2.container.style.width = '100%'
                    frame2.container.style.height = '100%'
                }
            }
        )
        tl.from(
            frame2.dark, {
                duration: 1,
                ease: 'power2.inOut',
                opacity: 0,
                marginTop: `auto`
            }
        )
        tl.from(
            frame2.moon, {
                duration: 1,
                ease: 'power2.inOut',
                opacity: 0,
                marginTop: 'auto',
            }
        )
        tl.to(
            [frame2.dark, frame2.moon], {
                duration: 1,
                ease: 'power2.inOut',
                opacity: 0,
                onComplete: function(){
                    frame2.container.style.borderRadius = '999rem'
                    frame2.container.style.width = '300px'
                    frame2.container.style.height = '300px'
                },
            }
        )
        tl.to(
            frame2.container, {
                width: '0px',
                height: '0px',
                duration: 1,
                ease: 'power2.inOut',
                onComplete: function(){
                    frame1.container.style.display = 'none'
                    frame2.container.style.display = 'none'
                    frame3.container.style.display = 'grid'
                }
            }
        )
        tl.from(
            [frame3.yearsRow, frame3.text], {
                duration: 1,
                ease: 'power2.inOut',
                opacity: 0,
                marginTop: 'auto'
            }
        )
        tl.to(
            frame3, {
                duration: 3,
                ease: 'expo.inOut',
                animatedNumber: 12,
                roundProps: 'animatedNumber',
                onUpdate: function() {
                    frame3.number.textContent = frame3.animatedNumber
                }
            }, '-=2'
        )
        tl.to(
            [frame3.yearsRow, frame3.text], {
                duration: 1,
                ease: 'power2.inOut',
                opacity: 0,
                onComplete: function(){
                    frame3.container.style.display = 'none'
                    frame4.container.style.display = 'grid'
                },
            }
        )
        tl.from(
            [frame4.ratingRow, frame4.text], {
                duration: 1,
                ease: 'power2.inOut',
                opacity: 0,
                marginTop: 'auto'
            }
        )
        tl.to(
            frame4, {
                duration: 3,
                ease: 'expo.inOut',
                animatedNumber: 5,
                roundProps: 'animatedNumber',
                onUpdate: function() {
                    frame4.rating.textContent = frame4.animatedNumber
                },
            }, '-=2'
        )
        tl.to(
            [frame4.ratingRow, frame4.text], {
                duration: 1,
                ease: 'power2.inOut',
                opacity: 0,
                onComplete: function(){
                    frame4.container.style.display = 'none'
                    frame5.container.style.display = 'grid'
                },
            }
        )
        tl.from(
            [frame5.backers, frame5.text], {
                duration: 1,
                ease: 'power2.inOut',
                opacity: 0,
                marginTop: 'auto'
            }
        )
        tl.to(
            frame5, {
                duration: 2,
                ease: 'expo.inOut',
                animatedNumber: 7721,
                roundProps: 'animatedNumber',
                onUpdate: function() {
                    frame5.backers.textContent = frame5.animatedNumber
                },
            }, '-=2'
        )
        tl.to(
            [frame5.backers, frame5.text], {
                duration: 1,
                ease: 'power2.inOut',
                opacity: 0,
                onComplete: function(){
                    frame5.container.style.display = 'none'
                    frame6.container.style.display = 'grid'
                },
            }
        )

        //expand container - display logo oncomplete, then move up the text
        

        
        

        // tl.to(logoIMG, {y: 150, x: 300, duration: 1, ease: "power2.in"});
        // tl.to(logoIMG, {y: 0, x: 600, duration: 1, ease: "power2.out"});
        // tl.to(logoIMG, {opacity: 0, duration: 1});

    }


}

new DarkMoonAd()