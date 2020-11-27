function checksAcceptance(){

    if(document.getElementById("term").checked) {
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("submit").disabled = true;
    }



}