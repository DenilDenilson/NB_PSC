const contenedorIcons = document.querySelectorAll('.contenedor_icon');
const messageAlert = document.querySelector('.message_alert');
const submitButton = document.querySelector('#submit_button');
const inputEmail = document.querySelector('#input_email');

contenedorIcons.forEach(contenedorIcon => {
        contenedorIcon.addEventListener('mouseover', () => {
            let icon = contenedorIcon.firstElementChild;
            icon.classList.remove('fill-[#4E61F2]');
            icon.classList.add('fill-[#FFFFFF]');
        });
        contenedorIcon.addEventListener('mouseout', () => {
            let icon = contenedorIcon.firstElementChild;
            icon.classList.remove('fill-[#FFFFFF]');
            icon.classList.add('fill-[#4E61F2]');
        });
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(inputEmail.value))
    {
        messageAlert.classList.remove('invisible');
        messageAlert.classList.add('visible');
    }
});