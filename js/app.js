// DARK BUTTON

document.querySelector('.button__dark').addEventListener('click', _ => {
    const button = document.querySelector('.button__dark')
    if(button.classList.contains('active')){
        document.documentElement.style.setProperty('--color-black', "#17181C");
        document.documentElement.style.setProperty('--color-apple', "#FAFAFA");
        document.documentElement.style.setProperty('--color-orange', "#F2541A");
        document.documentElement.style.setProperty('--color-white-back', "#FAFAFA40");
        document.documentElement.style.setProperty('--color-black-back', "#17181C40");

        button.querySelector('.button__dark__text').innerHTML = ''
        button.querySelector('.button__dark__text').innerHTML = 'light'
    }else{
        document.documentElement.style.setProperty('--color-black', "#EEEEEE");
        document.documentElement.style.setProperty('--color-apple', "#17181C");
        document.documentElement.style.setProperty('--color-orange', "#5059F5");
        document.documentElement.style.setProperty('--color-white-back', "#17181C40");
        document.documentElement.style.setProperty('--color-black-back', "#FAFAFA40");

        button.querySelector('.button__dark__text').innerHTML = ''
        button.querySelector('.button__dark__text').innerHTML = 'black'
    }
    button.classList.toggle('active')
})
if(document.querySelector('.services')){
    document.querySelector('.services').addEventListener('click', _ =>{
        _.preventDefault()
        const pop = document.querySelector('.services__pop')
        pop.classList.toggle('active')
        document.querySelector('.services__pop__button__close').addEventListener('click', _ =>{
            gsap.fromTo(".slide", {
                y: 0 + "%", 
                opacity: 1,
            }, {
                y: 100 + "%", 
                opacity: 0,
                stagger: -0.1,
                duration: .7,
                ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                onComplete: function(){
                    pop.classList.remove('active')
                }
            });
            gsap.to('.sombritude', {
                opacity: 0,
                duration: .7,
                ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
            })
        })
        document.querySelector('.sombritude').addEventListener('click', _ =>{
            gsap.fromTo(".slide", {
                y: 0 + "%", 
                opacity: 1,
            }, {
                y: 100 + "%", 
                opacity: 0,
                stagger: -0.1,
                duration: .7,
                ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                onComplete: function(){
                    pop.classList.remove('active')
                }
            });
            gsap.to('.sombritude', {
                opacity: 0,
                duration: .7,
                ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
            })
        })
        if(pop.classList.contains('active')){
            gsap.fromTo(".slide", {
                y: 100 + "%", 
                opacity: 0,
            }, {
                y: 0 + "%", 
                opacity: 1,
                stagger: 0.1,
                duration: .7,
                ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1")
            });
            gsap.to('.sombritude', {
                opacity: .5,
                duration: .7,
                ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
            })
        }else{
        }
    })
}

if(document.querySelector('.button__dispo')){
    document.querySelector('.button__dispo').addEventListener('click', _ =>{
        _.preventDefault()
        const contact_pop = document.querySelector('.contact__pop')
        contact_pop.classList.toggle('active')
        document.querySelector('.contact__pop__button__close').addEventListener('click', _ =>{
            gsap.fromTo(".slide", {
                y: 0 + "%", 
                opacity: 1,
            }, {
                y: 100 + "%", 
                opacity: 0,
                stagger: -0.1,
                duration: .7,
                ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                onComplete: function(){
                    contact_pop.classList.remove('active')
                }
            });
            gsap.to('.sombritudee', {
                opacity: 0,
                duration: .7,
                ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
            })
        })
        document.querySelector('.sombritudee').addEventListener('click', _ =>{
            gsap.fromTo(".slide", {
                y: 0 + "%", 
                opacity: 1,
            }, {
                y: 100 + "%", 
                opacity: 0,
                stagger: -0.1,
                duration: .7,
                ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                onComplete: function(){
                    contact_pop.classList.remove('active')
                }
            });
            gsap.to('.sombritudee', {
                opacity: 0,
                duration: .7,
                ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
            })
        })
    
    
        if(contact_pop.classList.contains('active')){
            gsap.fromTo(".slide", {
                y: 100 + "%", 
                opacity: 0,
            }, {
                y: 0 + "%", 
                opacity: 1,
                stagger: 0.1,
                duration: .7,
                ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1")
            });
            gsap.to('.sombritudee', {
                opacity: .5,
                duration: .7,
                ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
            })
        }else{
            
        }
    })

document.querySelector('.abc').addEventListener('click', _ =>{
    document.querySelector('.abc').classList.add('active')
    document.querySelector('.cube').classList.remove('active')
    document.querySelector('.side__bar__projet').classList.add('active')
    document.querySelector('.abc').innerHTML = ''
    document.querySelector('.abc').innerHTML = `
    <svg class="abc-stroke" width="40" height="16">
  		<use xlink:href="#abc-stroke" x="0" y="0" width="40" height="16"/>
	</svg>
    `
    document.querySelector('.cube').innerHTML = ''
    document.querySelector('.cube').innerHTML = `
    <svg class="cube-stroke" width="32" height="32">
  		<use xlink:href="#cube-stroke" x="0" y="0" width="32" height="32"/>
	</svg>
    `
    var tl = gsap.timeline();
    tl.to(document.querySelector('.side__bar__line'), {
        scaleX: 0,
        duration: .7,
        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
    })
    tl.to(document.querySelector('.side__bar__line__2'), {
        scaleX: 0,
        duration: .7,
        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
    }, "-=.7")
    tl.to(document.querySelector('.side__bar__about'), {
        y: 0,
        opacity: 0,
        duration: .7,
        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
    }, "-=.7")
    tl.to(document.querySelector('.side__bar__projet'), {
        y: 0,
        opacity: 1,
        duration: .7,
        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
        onComplete:  function(){
            document.querySelector('.side__bar__about').classList.remove('active')
        }
    }, "-=.7")
    tl.to(document.querySelectorAll('.side__bar__projet__item'), {
        y: 0,
        opacity: 1,
        stagger: -0.1,
        duration: .7,
        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
    }, "-=.7")
})

document.querySelector('.cube').addEventListener('click', _ =>{
    document.querySelector('.abc').classList.remove('active')
    document.querySelector('.cube').classList.add('active')
    document.querySelector('.abc').innerHTML = ''
    document.querySelector('.abc').innerHTML = `
    <svg class="abc" width="40" height="16">
  		<use xlink:href="#abc" x="0" y="0" width="40" height="16"/>
	</svg>
    `
    document.querySelector('.cube').innerHTML = ''
    document.querySelector('.cube').innerHTML = `
    <svg class="cube" width="32" height="32">
  		<use xlink:href="#cube" x="0" y="0" width="32" height="32"/>
	</svg>
    `
    document.querySelector('.side__bar__about').classList.add('active')
    var tl = gsap.timeline();
    tl.to(document.querySelectorAll('.side__bar__projet__item'), {
        y: -401 + "%",
        opacity: 1,
        stagger: 0.1,
        duration: .7,
        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
    })
    tl.to(document.querySelector('.side__bar__projet'), {
        y: -101 + "%",
        opacity: 0,
        duration: .7,
        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
        onComplete:  function(){
            document.querySelector('.side__bar__projet').classList.remove('active')
           
        }
    }, "-=.8")
    tl.to(document.querySelector('.side__bar__line'), {
        scaleX: 1,
        duration: .7,
        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
    }, "-=.7")
    tl.to(document.querySelector('.side__bar__line__2'), {
        scaleX: 1,
        duration: .7,
        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
    }, "-=.7")
    tl.to(document.querySelector('.side__bar__about'), {
        y: 0,
        opacity: 1,
        duration: .7,
        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
    }, "-=.7")
    
    
})
}



