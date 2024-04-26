const form = document.querySelector(".form")
console.log(form)
const submitButton = document.querySelector("#submit-btn")

submitButton.addEventListener("click",()=>{
    form.submit()
})