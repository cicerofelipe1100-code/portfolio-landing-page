/* Integração com Whatsapp para enviar mensagem */
function enviarWhats(event){
    event.preventDefault()

     const nome = document.getElementById('nome').value;
     const mensagem = document.getElementById('mensagem').value;
     const telefone  ='558892335052';

      const texto = `Olá, me chamo ${nome}, ${mensagem}`
      const msgFormatada = encodeURIComponent(texto)

     const url = `https://wa.me/${telefone}?text=${msgFormatada}`

     window.open(url, '_blank')
}

/* JS - Modp Dark */

let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click',() =>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})


/* JS - Menu */

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/images/icons8-cardápio-24.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/images/icons8-letra-x-24.png";

    }
}