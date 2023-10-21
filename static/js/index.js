const Password = document.getElementById("login-pass");
const Icon = document.getElementsByClassName("login-hideShow")[0];

const showHidePass = () => {
	if (Password.type === "password") {
		Password.type = "text";
		Icon.classList.replace("uil-eye-slash", "uil-eye");
	} else {
		Password.type = "password";
		Icon.classList.replace("uil-eye", "uil-eye-slash");
	}
};

const handleLogin = () => {
	const phone = document.getElementById("login-phone").value;
	const pass = document.getElementById("login-pass").value;
	const User = {
		username: phone,
		password: pass,
	};
	console.log(User);
	localStorage.setItem('users', phone)

	phone === "" || pass === "" ? 
	alert("Please Enter Username or Password") : ""
	
};
