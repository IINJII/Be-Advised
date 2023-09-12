let diceCont = document.querySelector('.dice-container');
let advice = document.querySelector('.advice');
let adviceNo = document.querySelector('.advice-no');
let dice = document.querySelector('#dice');


// Typed JS
let ad;


// Fetching API
let callAPI = () => {
    let a =   fetch("	https://api.adviceslip.com/advice");
    a.then((res) => {
        return res.json();
    })
    .then((res) => {
        return res;
    })
}

callAPI();

diceCont.addEventListener('click', async () => {
    let a = fetch("https://api.adviceslip.com/advice");
    a.then((res) => {
        return res.json();
    })
    .then((res) => {
        var typed = new Typed('#element', {
            strings: [res.slip.advice],
            typeSpeed: 20,
        });
        adviceNo.innerText = `Advice unit - ${res.slip.id}`;
    })
})