var form = document.querySelector('form');
var btn = document.querySelector('.btn_enviar');
var input = document.querySelector('input');
var tabela = document.querySelector('.tabela');

var tit=document.createElement('tr')
tit.innerHTML='Nomes Feios'

tabela.appendChild(tit)



function criabarra() {
    var barra=document.createElement('div')
    barra.classList.add('barra_carregamento')
    document.body.appendChild(barra)

    return barra

    
}







form.addEventListener('submit', function (e) {
    e.preventDefault()


})

btn.addEventListener('click', function () {
    var barra=criabarra()
    btn.disabled=true
    var inter;
    var n = 0
    var entrada=input.value
    input.value=''
    

    inter = setInterval(function () {
        var novadiv = document.createElement('div');
        novadiv.classList.add('divc')
        barra.appendChild(novadiv)
        n++
        if (n == 10) {
            clearInterval(inter)

        }
    }, 1000)

    setTimeout(()=>{if (n == 10) {
        barra.remove()
        console.log(input.value)
        var novatr = document.createElement('tr')
        novatr.innerHTML = entrada
        tabela.appendChild(novatr)
        btn.disabled=false



    }},10001)

    

    


})


