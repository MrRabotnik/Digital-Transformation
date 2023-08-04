let ans1 = document.getElementById("ans1")
let ans2 = document.getElementById("ans2")
let ans3 = document.getElementById("ans3")
let ans4 = document.getElementById("ans4")
let ans5 = document.getElementById("ans5")

let previous = document.getElementById("previous")
let next = document.getElementById("next")

let score = 0

let questionNumber = 0

let questionContainer = document.getElementById("questionContainer")

let chooseWrong = document.getElementById("chooseTheAnswer")

let questions = [
    {
        "question": "What are the goals of youth work?",
        "answers": [
            "To develop their ability to manage personal andsocial relationships",
            "To offer worthwhile and challanging new experiences",
            "To provide learnng opportunities to enable young people to gain knowledge and develop new skills",
            "To build young people's capacity to consider risks and consequences and make informed decisions and take responsibilities",
            "All answers are correct "
        ],
        "correct": 5,

    },
    {
        "question": "Can you mention NGO's classification? </br> 1) Orientation </br> 2) Level of operation </br> 3) Disorentation </br> 4) Conflict of public interest </br>  ",
        "answers": [
            "1, 3",
            "2, 4",
            "1, 2",
            "3, 1"
        ],
        "correct": 3
    },
    {
        "question": "What kind of challanges do you know about digital platforms?",
        "answers": [
            "Security & Privacy",
            "Regulation & Complience",
            "Engagement & Retention",
            "Operation & Action"
        ],
        "correct": 4,
        "choose": "wrong"

    },
    {
        "question": "What types of digital platforms can be used for digital transformaton of youth organizations?",
        "answers": [
            "Enviromental",
            "Checking your grammar",
            "CRM - customer relationship management",
            "Material resources"
        ],
        "correct": 2
    },
    {
        "question": "What is the biggest drawback of youth online inclusion?",
        "answers": [
            "Unavailability of internet connection",
            "Lack of public support",
            "Lack of desire",
            "There is no right answer"
        ],
        "correct": 1
    },
    {
        "question": "Question 6",
        "answers": [
            "Answer 1", "Answer 2", "Answer 3", "Answer 4"
        ]
    },
    {
        "question": "Question 7",
        "answers": [
            "Answer 1", "Answer 2", "Answer 3", "Answer 4"
        ]
    },
    {
        "question": "What do you think is the best solution in the online inclustion of youth peopel?</br> 1)Organizing regional youth forums</br> 2) Engaging youth people through youth employment opportunities </br> 3) Forming a coalition of talented young leaders active in the digital space </br> 4) There is no right answer",
        "answers": [
            "3, 1", "1, 2, 3", "1, 4", "2, 4"
        ],
        "correct": 2
    },
    {
        "question": "Question 9",
        "answers": [
            "Answer 1", "Answer 2", "Answer 3", "Answer 4"
        ]
    },
    {
        "question": "Question 10",
        "answers": [
            "Answer 1", "Answer 2", "Answer 3", "Answer 4"
        ]
    },
]

function changeQuestion() {
    let theQuestion = questions[questionNumber].question
    questionContainer.innerHTML = theQuestion

    let answer1 = questions[questionNumber].answers[0]
    let answer2 = questions[questionNumber].answers[1]
    let answer3 = questions[questionNumber].answers[2]
    let answer4 = questions[questionNumber].answers[3]
    let answer5 = questions[questionNumber].answers[4]

    if(questions[questionNumber].choose === "wrong"){
        chooseWrong.innerHTML = "Choose the wrong answer!!!"
    }else{
        chooseWrong.innerHTML = "Choose the correct answer!!!"
    }

    ans1.innerHTML = answer1
    ans2.innerHTML = answer2
    ans3.innerHTML = answer3
    ans4.innerHTML = answer4

    if (answer5) {
        ans5.innerHTML = answer5
        ans5.style.visibility = "visible"
    } else {
        ans5.style.visibility = "hidden"
    }
}

function selectAnswer(num) {
    ans1.style.backgroundColor = "transparent"
    ans2.style.backgroundColor = "transparent"
    ans3.style.backgroundColor = "transparent"
    ans4.style.backgroundColor = "transparent"
    ans5.style.backgroundColor = "transparent"
    if (num === 1) {
        ans1.style.backgroundColor = "orange"
    } else if (num === 2) {
        ans2.style.backgroundColor = "orange"
    } else if (num === 3) {
        ans3.style.backgroundColor = "orange"
    } else if (num === 4) {
        ans4.style.backgroundColor = "orange"
    } else if (num === 5) {
        ans5.style.backgroundColor = "orange"
    }

    let correctAnswer = questions[questionNumber].correct
    setTimeout(() => {
        if (num === correctAnswer) {
            document.getElementById(`ans${num}`).style.backgroundColor = "green"
            score++
        } else {
            document.getElementById(`ans${num}`).style.backgroundColor = "red"
            document.getElementById(`ans${correctAnswer}`).style.backgroundColor = "green"
        }

        return () => {
            ans1.style.backgroundColor = "transparent"
            ans2.style.backgroundColor = "transparent"
            ans3.style.backgroundColor = "transparent"
            ans4.style.backgroundColor = "transparent"
            ans5.style.backgroundColor = "transparent"
        }
    }, 1500)
}

function previousQuestion() {
    if (questionNumber !== 0) {
        questionNumber--
        changeQuestion()
    }
    ans1.style.backgroundColor = "transparent"
    ans2.style.backgroundColor = "transparent"
    ans3.style.backgroundColor = "transparent"
    ans4.style.backgroundColor = "transparent"
    ans5.style.backgroundColor = "transparent"
}

function nextQuestion() {
    if (questionNumber !== questions.length - 1) {
        questionNumber++
        changeQuestion()
    } else {
        alert(`Your Score is ${score}/10`)
    }
    ans1.style.backgroundColor = "transparent"
    ans2.style.backgroundColor = "transparent"
    ans3.style.backgroundColor = "transparent"
    ans4.style.backgroundColor = "transparent"
    ans5.style.backgroundColor = "transparent"
}
function onHover(e) {
    console.log(e)
}

changeQuestion()

ans1.addEventListener("click", () => { selectAnswer(1) })
ans2.addEventListener("click", () => { selectAnswer(2) })
ans3.addEventListener("click", () => { selectAnswer(3) })
ans4.addEventListener("click", () => { selectAnswer(4) })
ans5.addEventListener("click", () => { selectAnswer(5) })
ans1.addEventListener("mouseover", (e) => { onHover(e) })
ans2.addEventListener("mouseover", (e) => { onHover(e) })
ans3.addEventListener("mouseover", (e) => { onHover(e) })
ans4.addEventListener("mouseover", (e) => { onHover(e) })
ans5.addEventListener("mouseover", (e) => { onHover(e) })
previous.addEventListener("click", previousQuestion)
next.addEventListener("click", nextQuestion)