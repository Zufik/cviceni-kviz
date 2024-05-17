const questionEl = document.querySelector (".question")
const question = "Who was the first president of USA?"

questionEl.textContent = (question)

const userAnswer =(prompt(question))
const answerEL= document.querySelector (".answer__text")
const elAnswer = document.querySelector (".answer")

answerEL.textContent = userAnswer

if (userAnswer === "Washington"){
    elAnswer.classList.add ("answer--correct")
} else {
    elAnswer.classList.add ("answer--wrong")
}





