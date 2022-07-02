/*
function sendTo(txt){
    document.getElementById('mail_form').action = txt;
}*/

function sendTo(txt){
    document.getElementById('mail_form').setAttribute('action', txt);
}