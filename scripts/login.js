//variables
const titulo = document.getElementsByTagName("h1");
const form = document.getElementsByClassName("login-form");
const toggleBtn = document.getElementsByClassName("login-link") 

const cambiarARegister = () =>{
    titulo.innerHTML("Register");
}

toggleBtn.addEventListener("click", ()=>{
    cambiarARegister();
})