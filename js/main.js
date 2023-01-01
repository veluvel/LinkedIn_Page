// login
const users = []
// console.log(users)

// const form = document.getElementById("form")
const names = document.getElementById("logname");
const password = document.getElementById("logpwd");
const divs = document.getElementById("shows");
const create = document.getElementById("create")

function veriFication(){
	const currentObject = users.find(e=>e.name ===names.value);

	if(currentObject != undefined){
		if(names.value===currentObject.name && password.value ===currentObject.password)
		{
			divs.innerHTML = "login successfully";
			document.getElementById("Lform").reset();
		}
	}
	else{
		divs.innerHTML="Create Your New Account"
		
	}
}

// signup
const newUser ={id:''};
const signName = document.getElementById("Sname");
const signEmail = document.getElementById("Semail");
const signPwd = document.getElementById("Spwd");
const signrePwd = document.getElementById("Srepwd");

function signVerify(){
	newUser.name = signName.value;
	newUser.email = signEmail.value;
	newUser.password = signPwd.value;
	console.log(newUser);
	users.push(newUser);
	console.log(users);
	document.getElementById("Sform").reset()

}
