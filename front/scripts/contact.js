(function (){
     const form = document.getElementById('form');

     form.addEventListener('submit', (evento) => {
        if(!form.checkValidity()){
            evento.preventDefault()
            evento.stopPropagation()
        } else alert('Formulario enviado')
     })
})()
