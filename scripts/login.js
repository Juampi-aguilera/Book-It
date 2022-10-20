//variables
const titulo = document.querySelector("h1");
const form = document.querySelector(".login-form");
const loginBtn = document.querySelector(".login-btn");
const toggleBtn = document.querySelector(".login-link");

const cambiarARegister = () =>{
    if(titulo.textContent=="Login"){
        titulo.textContent="Register";
        loginBtn.textContent="Register";
        toggleBtn.textContent="Login";
    }else{
        titulo.textContent="Login";
        loginBtn.textContent="Login";
        toggleBtn.textContent="Register";
    }
}

toggleBtn.addEventListener("click", ()=>{
    cambiarARegister();
})

