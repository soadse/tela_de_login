let eMail = document.getElementById('eMail')
let senha = document.getElementById('senha')
let btnEntrar = document.getElementById('btnEntrar')
let btnCadastrar = document.getElementById('btnCadastrar')
let btnRedefinir = document.getElementById('btnRedefinir')
let containerBtnCadastrar = document.getElementById('containerBtnCadastrar')
let popover = document.getElementById('popover')
let msgPopover = document.getElementById('msgPopover')
let fecharPopover = document.getElementById('fecharPopover')
let mostrarSenha = document.getElementById('mostrarSenha')
let click = 0;

mostrarSenha.addEventListener('click', () => {
    click++
    if(click === 1) {
        senha.type = 'text'
        mostrarSenha.src = 'img/open.png'
    } else if(click === 2) {
        senha.type = 'password'
        mostrarSenha.src = 'img/closed.png'
        click = 0
    }
})

popover.addEventListener('click', () => {
    popover.style.display = 'none'
})


btnCadastrar.addEventListener('click', () => {
    window.open('pags/cadastro.html', '_self')
})

btnRedefinir.addEventListener('click', () => {
    window.open('pags/redefSenha.html', '_self')
})

btnEntrar.addEventListener('click', () => {
    if (eMail.value === '' || senha.value === '') {
        popover.style.display = 'flex'
        msgPopover.innerHTML = 'Campos vazios!'
    } else if(eMail.value !== localStorage.getItem('eMail')){
        popover.style.display = 'flex'
        msgPopover.innerHTML = 'Usuário não cadastrado!'
    } else if (senha.value === localStorage.getItem('senha')) {
        popover.style.display = 'flex'
        msgPopover.innerHTML = 'Senha Incorreta!'
    } else {
        if(eMail.value !== localStorage.getItem('eMail') || senha.value !== localStorage.getItem('senha')){
            popover.style.display = 'flex'
            msgPopover.innerHTML = 'E-mail ou senha inválidos!'
        } else {
            window.open('pags/pagInicial.html', '_self')
        }
    }
});


function verificar() {
    if(!localStorage.getItem('nome')){
        btnRedefinir.style.display = 'none'
        containerBtnCadastrar.style.display = 'block'
    } else {
        btnRedefinir.style.display = 'block'
        containerBtnCadastrar.style.display = 'none'
    }
}
document.addEventListener('DOMContentLoaded', () => {
    verificar()
})

