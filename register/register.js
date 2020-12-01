function checkAcceptanceTerms() {

    if (document.getElementById("term").checked) {
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("submit").disabled = true;
    }
}

function register(event) {


    event.preventDefault();

    const email = 'email';
    const psw = 'psw';
    const pswConf = 'pswConf';

    if (checkFillingForm(email, psw, pswConf)) {
        if (mailValidator(email) && passwordValidator(psw, pswfConf)) {
            console.log("Wszystko gra, można rejestrować")
            const request = {
                email: document.getElementById(email).value,
                password: document.getElementById(psw).value,
                sex: document.querySelectorAll("input[type='radio'][name='sex']:checked")[0].value,
                age: document.getElementById("age").value

            };
            console.log(request);
        } else {
            console.log("Check your filling.")
        }
    } else {
        console.log("No every Form is filling.")

    }
}

function checkFillingForm(selectors) {

    let isFilled = true;

    selectors.forEach(selector => {
        const element = document.getElementById(selector);
        const clashMsg = document.getElementById(selector + "Clash");

        clashMsg.innerText = '';

        if (!element.value) {
            clashMsg.innerText = "The field is required!";
            isFilled = false;
        }
    });

    console.log("Inside the CheckFillingForm Function");
    return isFilled;

}


function mailValidator() {
    console.log("Inside the mailValidator Function");
    return true;

}

function passwordValidator(psw, pswConf) {
    console.log("Inside the passwordValidator Function");
    return true;

}
