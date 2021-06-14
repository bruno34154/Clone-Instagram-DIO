
const $html = document.querySelector('html')
const $checkboox = document.querySelector('#switch')

$checkboox.addEventListener('change', function(){
	$html.classList.toggle('dark-mode')
})

function validar(){
	var user = document.getElementById('input');
	var password = document.getElementById('password');

	if(user.value == "" & password.value != ""){
		alert("usuario não informado!");
		user.style.backgroundColor = "red";
		return;
	}
	if(user.value != "" & password.value == ""){
		alert("senha não informados!");
		password.style.backgroundColor = "red";
		return;

	}
	if (user.value == "" & password.value == "") {
		alert("usuario e senha não informados!");
		user.style.backgroundColor = "red";
		password.style.backgroundColor = "red";
		return;

	}
	if(user.value != "" & password.value != ""){
		window.open("https://www.instagram.com/");
	}

}

