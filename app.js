const handleClick = function(event) {
    event.preventDefault();
    const id = event.target.parentElement.id;
    const faq = document.getElementById(id);
    const open = faq.getAttribute("data-open");

    if(open === "false") {
        handleOpen(faq)
        handleCloseRemaining(faq)
    } else {
        handleClose(faq)
    }

}

const handleOpen = (faq) => {
    faq.setAttribute("data-open", "true");
    const faqQuestion = faq.firstElementChild;
    const arrow = faqQuestion.nextSibling;
    const answer = faq.nextElementSibling;
    faqQuestion.classList.add('faq__question__selected');
    arrow.classList.add('rotate');
    answer.classList.add('d-block');
}

const handleClose = (faq) => {
    faq.setAttribute("data-open", "false");
    const faqQuestion = faq.firstElementChild;
    const arrow = faqQuestion.nextSibling;
    const answer = faq.nextElementSibling;
    faqQuestion.classList.remove('faq__question__selected');
    arrow.classList.remove('rotate');
    answer.classList.remove('d-block');
}

const handleCloseRemaining = (faq) => {
    const faq1 = document.getElementById('faq1');
    const faq2 = document.getElementById('faq2');
    const faq3 = document.getElementById('faq3');
    const faq4 = document.getElementById('faq4');
    const faq5 = document.getElementById('faq5');
    if(faq.innerHTML != faq1.innerHTML) {
        handleClose(faq1);
    }
    if(faq.innerHTML != faq2.innerHTML) {
        handleClose(faq2);
    }
    if(faq.innerHTML != faq3.innerHTML) {
        handleClose(faq3);
    }
    if(faq.innerHTML != faq4.innerHTML) {
        handleClose(faq4);
    }
    if(faq.innerHTML != faq5.innerHTML) {
        handleClose(faq5);
    }
}