//variables
const titulo = document.querySelector("h1");
const form = document.querySelector(".login-form");
const loginBtn = document.querySelector(".login-btn");
const toggleBtn = document.querySelector(".login-link");
const dataRegister = document.querySelector("#data-form")

// funcion para cambiar entre register y login 
const toggleLogin = () =>{
    if(titulo.textContent=="Login"){
        titulo.textContent="Register";
        loginBtn.value="Register";
        toggleBtn.textContent="Login";
        loginBtn.removeAttribute("name");
        loginBtn.setAttribute("name","register")
        dataRegister.innerHTML+=`
                    <div class="control-group">
						<input name="user_name" type="text" class="login-field" value="" placeholder="nombre de usuario" id="login-user" required>
						<label class="login-field-icon fui-lock" for="login-user"></label>
					</div>
                    <div class="control-group">
						<input name="user_lastname" type="text" class="login-field" value="" placeholder="apellido" id="login-lastname" required>
						<label class="login-field-icon fui-lock" for="login-lastname"></label>
					</div>`;
    }else{
        titulo.textContent="Login";
        loginBtn.value="Login";
        toggleBtn.textContent="Register";
        loginBtn.removeAttribute("name");
        loginBtn.setAttribute("name","login");
        loginBtn.addEventListener("click",()=>{
            Swal.fire(
                'Felicitaciones!',
                'Te registraste correctamente',
                'success'
            );
            location.href="../index.html"
        })
        dataRegister.innerHTML=`
                <div class="control-group">
                    <input name="user_mail" type="email" class="login-field" value="" placeholder="email" id="login-mail" required>
                    <label class="login-field-icon fui-user" for="login-mail"></label>
                </div>		
                <div class="control-group">
                    <input name="user_password" type="password" class="login-field" value="" placeholder="contraseña" id="login-pass" required>
                    <label class="login-field-icon fui-lock" for="login-pass"></label>
                </div>`
    }
}

toggleBtn.addEventListener("click", ()=>{
    toggleLogin();
})

if(titulo.textContent=="Login"){
    loginBtn.addEventListener("click",(e)=>{
        e.preventDefault()
        Swal.fire({
            icon: 'success',
            title: 'Felicitaciones!',
            text:'Te logueaste correctamente',
            showConfirmButton: false,
            timer: 1300
        })
        setTimeout(()=>{
            this.SubmitEvent
            location.href="../index.html";
        },1500)
    })    
}else{
    loginBtn.addEventListener("click",()=>{
        e.preventDefault()
        Swal.fire({
            icon: 'success',
            title: 'Felicitaciones!',
            text:'Te registraste correctamente',
            showConfirmButton: false,
            timer: 1300
        })
        setTimeout(()=>{
            this.SubmitEvent
            location.href="../index.html";
        },1500)
    })
}
