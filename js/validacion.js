const alertSuccess = document.getElementById("alert-success")
const alertDanger = document.getElementById("alert-danger")
const closeBtns = document.querySelectorAll('.btn-close')

function showAlertSuccess() {
  alertSuccess.classList.add("show");
  alertDanger.classList.remove("show");
}

function showAlertError() {
  alertDanger.classList.add("show");
  alertSuccess.classList.remove("show");
}

const btn = document.getElementById('regBtn')

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email = document.getElementById('email')
const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')
const terminos = document.getElementById('terminos')

btn.addEventListener('click', () => {
  if (!nombre.value || !apellido.value || !email.value || !password1.value || !password2.value) {
    showAlertError()
    return
  }

  if (password1.value.length < 6) {
    showAlertError()
    return
  }

  if (password1.value !== password2.value) {
    showAlertError()
    return
  }

  if (!terminos.checked) {
    showAlertError()
    return
  }

  showAlertSuccess()
})


closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (alertDanger.classList.contains('show')) {
      alertDanger.classList.remove('show')
    } else {
      alertSuccess.classList.remove('show')
    }
  })
})