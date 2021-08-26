let linkTo = [...document.querySelectorAll('a.side__bar__projet__item__link')]
if(document.querySelector(".single__next__projet a")){
    linkTo.push(document.querySelector(".single__next__projet a"))
}

if(document.querySelector('.footer__single__top')){
    document.addEventListener('wheel', _ => {
        var text = document.querySelector('.footer__single__top__text')
        var arrow = document.querySelector('.footer__single__top__arrow')
        var container = document.querySelector('.footer__single__top')
        if(document.documentElement.scrollTop > 100){
            text.innerText = ''
            text.innerText = 'Back to top'
            gsap.to(arrow, {
                rotation: 180,
                duration: 0.2,
                ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
            })
            container.addEventListener('click', _ =>{
                gsap.to(document.documentElement, {
                    scrollTop: 0,
                    duration: 1.5,
                    ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                    onComplete: function(){
                        text.innerText = ''
                        text.innerText = 'Scroll down'
                        gsap.to(arrow, {
                            rotation: 0,
                            duration: 0.2,
                            ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                        })
                    }
                })
            })
        }else{
            text.innerText = ''
            text.innerText = 'Scroll down'
            gsap.to(arrow, {
                rotation: 0,
                duration: 0.2,
                ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
            })
            container.addEventListener('click', _ =>{
                gsap.to(document.documentElement, {
                    scrollTop: 1000,
                    duration: 1.5,
                    ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                    onComplete: function(){
                        text.innerText = ''
                        text.innerText = 'Scroll down'
                        gsap.to(arrow, {
                            rotation: 0,
                            duration: 0.2,
                            ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                        })
                    }
                })
            })
        }
    })
}
linkTo.forEach( e =>{
    e.addEventListener('click', link =>{
        link.preventDefault()
        AJAXprocces(link)
    })
})
const AJAXprocces = (link) =>{
  
    content = document.getElementById("a-j")
    let oldContent = content.children[0];
    let nextLink
    if(link.target.classList[0] === 'next__projet'){
        nextLink = link.target.href
    }else{
        nextLink = link.target.parentNode.parentNode.href
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', nextLink, true);
    xhr.onload = e => {
        var doc = new DOMParser().parseFromString(xhr.responseText, "text/html");
        var newContent = doc.getElementById("a-j").children[0];
        document.title = doc.title;
        window.history.replaceState("", doc.title, nextLink);
        linkTo.push(newContent.querySelector(".single__next__projet a"));
        if(newContent.querySelector(".single__next__projet a")){
            newContent.querySelector(".single__next__projet a").addEventListener('click', _ =>{
                _.preventDefault()
                AJAXprocces(_)
            })
        }
        if(newContent.querySelector(".header__single__back__link")){
            newContent.querySelector(".header__single__back__link").addEventListener('click', _ =>{
                console.log("click du back");
                _.preventDefault()
                AJAXproccesToHome(_)
            })
        }

            document.addEventListener('wheel', _ => {
                var text = document.querySelector('.footer__single__top__text')
                var arrow = document.querySelector('.footer__single__top__arrow')
                var container = document.querySelector('.footer__single__top')
                if(document.documentElement.scrollTop > 100){
                    text.innerText = ''
                    text.innerText = 'Back to top'
                    gsap.to(arrow, {
                        rotation: 180,
                        duration: 0.2,
                        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                    })
                    container.addEventListener('click', _ =>{
                        gsap.to(document.documentElement, {
                            scrollTop: 0,
                            duration: 1.5,
                            ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                            onComplete: function(){
                                text.innerText = ''
                                text.innerText = 'Scroll down'
                                gsap.to(arrow, {
                                    rotation: 0,
                                    duration: 0.2,
                                    ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                                })
                            }
                        })
                    })
                }else{
                    text.innerText = ''
                    text.innerText = 'Scroll down'
                    gsap.to(arrow, {
                        rotation: 0,
                        duration: 0.2,
                        ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                    })
                }
            })
        
        gsap.to(oldContent, {
            opacity: 0,
            duration: 0.7,
            ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
            onComplete: function(){
                oldContent.remove()
                content.appendChild(newContent)
                gsap.to(document.querySelector('.content'), {
                    opacity: 0,
                    duration: 0,
                })
                seperateLetter(document.querySelector('.single__loader__title'))
                seperateLetter(document.querySelector('.single__loader__role'))
                seperateLetter(document.querySelector('.single__hero__title'))
                var tl = gsap.timeline();
                tl.to(document.querySelector('#gl'), {
                    opacity: 0,
                    duration: 0.4,
                    ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                })
                tl.fromTo(document.querySelector('.single__loader'), {
                    x: "101%",
                }, {
                    x: "0%",
                    duration: 0.7,
                    ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                },"-=.4")
                tl.fromTo(document.querySelector('.single__line'), {
                    scaleX: "0%",
                }, {
                    scaleX: "100%",
                    duration: 0.7,
                    ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                })
                tl.fromTo(document.querySelector('.single__line2'), {
                    scaleX: "0%",
                }, {
                    scaleX: "100%",
                    duration: 0.7,
                    ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                }, "-=.7")
                let textSlide  = [...document.querySelectorAll('.textSlide')]
                tl.fromTo(textSlide, {
                    x: "110%",
                    y: "0%",
                }, {
                    x: "0%",
                    y: "0%",
                    duration: .7,
                    stagger: .03,
                    ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                }, "-=1");
                tl.fromTo(textSlide, {
                    x: "0%",
                    y: "0%",
                }, {
                    x: "-101%",
                    y: "0%",
                    duration: 1,
                    stagger: .03,
                    ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                }, "-=1");
                tl.to(document.querySelector('.single__line'), {
                    transformOrigin: "left bottom",
                    scaleX: "0%",
                    duration: 1,
                    ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                }, "-=.7")
                tl.to(document.querySelector('.single__line2'), {
                    transformOrigin: "left bottom",
                    scaleX: "0%",
                    duration: 1,
                    ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                }, "-=.7")
                tl.to(document.querySelector('.single__loader'), {
                    x: "-101%",
                    duration: 1,
                    ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                }, "-=1.4s")
                tl.to(document.querySelector('.content'), {
                    opacity: 1,
                    duration: 1,
                    ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                }, "-=1")
                let textSlidee  = [...document.querySelectorAll('.single__hero__title .textSlide')]
                tl.fromTo(textSlidee, {
                    x: "101%",
                    y: "0%",
                },{
                    x: "0%",
                    y: "0%",
                    duration: .7,
                    stagger: .03,
                    ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                }, "-=1");
            }
        })
    };
    xhr.send(null);
}

const seperateLetter = (elmnt) =>{
    let textString = elmnt.innerText
    elmnt.innerText = '';
    textString.split("");
    var i = 0, length = textString.length;
    for (i; i < length; i++) {
        if(textString[i] === ' '){
            elmnt.innerHTML += "<div><div class='textSlide enter space'>" + textString[i] + "</div></div>";
        }else{
            elmnt.innerHTML += "<div><div class='textSlide enter'>" + textString[i] + "</div></div>";
        }
    }
}

// const animLetterIn = (elmnt, time, delay) =>{
//     let textSlide  = [...document.querySelectorAll('.textSlide')]
//     gsap.fromTo(textSlide, {
//         y: "-110%",
//         delay: delay,
//     }, {
//         y: "0%",
//         duration: time,
//         stagger: .1,
//         ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
//     });
// }

const AJAXproccesToHome = (link) =>{
    content = document.getElementById("a-j")
    let oldContent = content.children[0];
    let nextLink  
    nextLink = link.target.parentNode.parentNode.href
    var xhr = new XMLHttpRequest();
    xhr.open('GET', nextLink, true);
    xhr.onload = e => {
        var doc = new DOMParser().parseFromString(xhr.responseText, "text/html");
        var newContent = doc.getElementById("a-j").children[0];
        document.title = doc.title;
        window.history.replaceState("", doc.title, nextLink);
        gsap.to(oldContent, {
            opacity: 0,
            duration: 0.7,
            ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
            onComplete: function(){
                oldContent.remove()
                content.appendChild(newContent)
                // gsap.to(document.querySelector('.content'), {
                //     opacity: 1,
                //     duration: 0,
                // })
                // gsap.to(document.querySelector('#gl'), {
                //     opacity: 1,
                //     duration: 0.4,
                //     ease: CustomEase.create("custom", "M0,0,C0.5,0,0,1,1,1"),
                // })
            }
        })
    };
    xhr.send(null);
}