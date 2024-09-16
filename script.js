//Animação de scroll
const observar = new IntersectionObserver((visual) =>{
    visual.forEach ((obser) =>{
        if(obser.isIntersecting){
            obser.target.classList.add('animacao')
        }
        else{
            obser.target.classList.remove('animacao')
        }
    })
})

let cards = document.querySelectorAll('.hidden');
cards.forEach((element) => observar.observe(element))