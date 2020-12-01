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

    if (checkFillingForm([email, psw, pswConf])) {
        if (mailValidator(email) && passwordValidator(psw, pswConf)) {
            console.log("Everything works and valid. Now we can proceed to registration.")
            const request = {
                email: document.getElementById(email).value,
                password: document.getElementById(psw).value,
                sex: document.querySelectorAll("input[type='radio'][name='sex']:checked")[0].value,
                age: document.getElementById("age").value
            };
            console.log(request);
        } else {
            console.log("Forms are not valid")
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

    console.log("Run CheckFillingForm Function");
    return isFilled;

}

function mailValidator(email) {
    console.log("Run mailValidator Function");

    let nameEmail = document.getElementById(email).value;
    let re = new RegExp('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])')

    return re.test(nameEmail);
}

function passwordValidator(psw, pswConf) {

    console.log("Run passwordValidator Function");

    let valid = true;

    let password = document.getElementById(psw).value;
    let password_repeat = document.getElementById(pswConf).value

    if (password !== password_repeat) {
        valid = false;
    }

    return valid;
}
