const iptuser = document.querySelector('.iptuser');
const lbluser = document.querySelector('.lbluser');

const lblpassword = document.querySelector('.lblpassword');
const iptpassword = document.querySelector('.iptpassword');


window.onload = focarUser;
iptuser.focus()

iptuser.addEventListener('focus', focarUser);


function focarUser(){
    lbluser.style.cssText = 'font-size:11px; color:#81259D; margin-bottom: 5px';
    iptuser.style.height = '20px';
}

iptuser.addEventListener('focusout', desfocarUser);

function desfocarUser(){
    if (iptuser.value == ''){
        lbluser.style.cssText = 'font-size: 16px; color: red; width = 0px';
        iptuser.style.height = '0px';
    } else{
    }
}

iptpassword.addEventListener('focus', focarPassword);

function focarPassword(){
        lblpassword.style.cssText = 'font-size:11px; color:#81259D; margin-bottom: 5px';
        iptpassword.style.height = '20px';
}

iptpassword.addEventListener('focusout', desfocarPassword);

function desfocarPassword(){
    if (iptpassword.value == ''){
        lblpassword.style.cssText = 'font-size: 16px; color: red;';
        iptpassword.style.height = '0px';
    } else{
    }
}

var cpf = document.getElementById('cpf')
var password = document.getElementById('password')
var btnsubmit = document.getElementById('btnsubmit')

cpf.addEventListener('input', verifyUser);

function verifyUser(){
    if(cpf.value.length < 11 || password.value.length < 8){
    btnsubmit.disabled = true;
    btnsubmit.style.cssText = 'border: 1px solid #ccd1d1; color: #ccd1d1; font-size: 12px;'
  } else {
    btnsubmit.disabled = false;
    btnsubmit.style.cssText = 'border: 1px solid #81259D; color:#81259D; height: 11vh;'
    btnsubmit.addEventListener('mouseover', function (event){
        event.target.style.cssText = 'background-color: #81259D; color: white; cursor:pointer; height: 11vh; border: 1px solid #81259D;';
    });
    btnsubmit.addEventListener('mouseout', function (event){
        event.target.style.cssText = 'background-color: white; color:#81259D; height: 11vh; border: 1px solid #81259D;';
    });
    btnsubmit.addEventListener('click', formsubmited);
  }
}

password.addEventListener('input', verifyPassword)

function verifyPassword(){
    if(cpf.value.length < 11 || password.value.length < 8){
    btnsubmit.disabled = true;
    btnsubmit.style.cssText = 'border: 1px solid #ccd1d1; color: #ccd1d1; font-size: 12px;'
  } else {
    btnsubmit.disabled = false;
    btnsubmit.style.cssText = 'border: 1px solid #81259D; color:#81259D; height: 11vh;'
    btnsubmit.addEventListener('mouseover', function (event){
        event.target.style.cssText = 'background-color: #81259D; color: white; cursor:pointer; height: 11vh; border: 1px solid #81259D;';
    });
    btnsubmit.addEventListener('mouseout', function (event){
        event.target.style.cssText = 'background-color: white; color:#81259D; height: 11vh; border: 1px solid #81259D;';
    });
    btnsubmit.addEventListener('click', formsubmited);
  }
}


function formsubmited(){
    alert('Logado!')
}

const validcpf = document.getElementById("cpf");


function validarCPF(e) {
  if (e.key !== "Backspace" && e.key !== "Delete") {
    var cpf = validcpf.value.match(/\w/g) ?? "";
    if (cpf.length >= 3) cpf.splice(3, 0, ".");
    if (cpf.length >= 7) cpf.splice(7, 0, ".");
    if (cpf.length >= 11) cpf.splice(11, 0, "-");
    validcpf.value = cpf.join("");
  }
}

validcpf.addEventListener("keyup", validarCPF);

