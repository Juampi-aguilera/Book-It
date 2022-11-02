//variables
const titulo = document.querySelector("h1");
const form = document.querySelector(".login-form");
const loginBtn = document.querySelector(".login-btn");
const toggleBtn = document.querySelector(".login-link");

const toggleLogin = () =>{
    if(titulo.textContent=="Login"){
        titulo.textContent="Register";
        loginBtn.value="Register";
        toggleBtn.textContent="Login";
        loginBtn.removeAttribute("name");
        loginBtn.setAttribute("name","register")
    }else{
        titulo.textContent="Login";
        loginBtn.value="Login";
        toggleBtn.textContent="Register";
        loginBtn.removeAttribute("name");
        loginBtn.setAttribute("name","login")
    }
}

toggleBtn.addEventListener("click", ()=>{
    toggleLogin();
})

