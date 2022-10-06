let input = document.getElementById("input");
let button = document.getElementById("submit");
let codeImg = document.getElementById("img");


button.addEventListener("click", () => {

    let codeValue = input.value;
    codeImg.src = 'https://api.qrserver.com/v1/create-qr-code/?data=${codeValue}&size=[200]x[200]';

    codeImg.style.display = 'inline';
    codeImg.classList.add('visibleImg');

    button.innerText = "Generating QR code...";

    codeImg.addEventListener('load', () => {
        button.innerText = "Generate QR code";
    })


})