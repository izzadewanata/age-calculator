const submitEl = document.getElementById('button')
const inputEl = document.getElementById('calendar')
const resultEl = document.getElementById('result')

submitEl.addEventListener("click", calculateAge)

function calculateAge() {
    const inputValue = inputEl.value

    if(inputValue === '') {
        alert("Please enter Date of Birth")
    } else {
        const result = getAge(inputValue)
        resultEl.innerText = `Your Age is ${result} ${result > 1 ? "years" : "year"} old`
    }
}

function getAge(inputValue) {
    const currentDate = new Date()
    const inputDate = new Date(inputValue)
    let calculateAge = currentDate.getFullYear() - inputDate.getFullYear()
    const calculateMonth = currentDate.getMonth() - inputDate.getMonth()

    if(
        calculateMonth < 0 || 
        calculateMonth === 0 && currentDate.getDate() < inputDate.getDate()
    ) {
        calculateAge--
    }
    return calculateAge
}

