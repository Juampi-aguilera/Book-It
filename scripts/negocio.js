const loginBtn = document.querySelector("#confirm-btn");

const confirmacion=()=>{
  Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  )
  Toastify({
    text: "Producto añadido al carrito!",
    duration: 2000,
    gravity: "top",
    position: "right",
    style: {
      background: "#EFDFBF",
      margin:"60px",
      color:"#1A3C40",
      border: "2px solid #1A3C40",
      cursor:"default"
    },
  }).showToast();
}

loginBtn.addEventListener("click",()=>{
    confirmacion()
})