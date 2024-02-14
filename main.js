function check_pass(password){
    //return a message if the password is not valid
    if (password.length<10)return "le mot de passe doit avoir une longueur de minimum 10 caractères";
    if (!/\d/.test(password))return "le mot de passe doit avoir au moins un chiffre";
    if (!/[A-Z]/.test(password))return "le mot de passe doit avoir au moins une majuscule";
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password))return "le mot de passe doit avoir au moins un caractère spécial";
    //return false if password valid
    return false;
}

function submit_signup(){
    //get the values
    const nom = document.querySelector("#nom").value;
    const prenom = document.querySelector("#prenom").value;
    const password = document.querySelector("#password").value;

    //check the password
    const is_not_valid = check_pass(password)
    if (is_not_valid)alert(is_not_valid);
    else {
        document.querySelector("#message").textContent = "Bienvenue "+prenom+" "+nom;
        setInterval(function (){
            location.href = "https://2023.webdev-cf2m.be/Gregory/FTP_HOME/";
        }, 2000)
    }
}

function toogle_password(){
    const password_field = document.querySelector("#password");
    const hide_button = document.querySelector("#show-hide");
    password_field.type = password_field.type==="password" ? "text" : "password";
    hide_button.textContent = hide_button.textContent==="afficher" ? "cacher" : "afficher";
}

function check_age(){
    age = document.querySelector("#age").value;
    if (Number(age)>=20)location.href = "./signup.html";
    else alert("vous n'avez pas l'âge requis");
}