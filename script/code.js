document.querySelector(`#currentYear`).innerHTML = new Date().getUTCFullYear()





let btnSubmit = document.querySelector(`[btn-Submit]`)
function submit() {
    if (submit) {
        alert(`
            Thank you for your submission.
            We will be in touch.`
        )
        location.reload()
    }
}
btnSubmit.addEventListener(`click`, submit)