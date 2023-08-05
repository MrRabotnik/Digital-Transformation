let ans1 = document.getElementById("ans1")
let ans2 = document.getElementById("ans2")
let ans3 = document.getElementById("ans3")
let ans4 = document.getElementById("ans4")
let ans5 = document.getElementById("ans5")

let questionNumberContainer = document.getElementById("questionNumber")

let popUp = document.getElementById("popUp")
let closePopUp = document.getElementById("closePopUp")
let scoreContainer = document.getElementById("scoreContainer")

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
        "question": "Can you mention NGO's classification? </br><p style='font-size: 2.3vw'>1) Orientation </br> 2) Level of operation </br> 3) Disorentation </br> 4) Conflict of public interest </br></p>  ",
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
        "question": "What is not included in the digitization of society?",
        "answers": [
            "To understand how digitalisation is shaping the societies, including its impact on youth work and on young people",
            "To be able to take young people's digital cultures into account in youth work practices",
            "To be able to encourage young people to shape the process of digitalisation themselves",
            "To know how young people communicate in digital environments and to adjust digital youth work activities to that"
        ],
        "correct": 4,
        "choose": "wrong"
    },
    {
        "question": "Match the country with its app</br><p style='font-size: 2.3vw'> 1) Pol &nbsp;&nbsp;&nbsp; a) They work on adding social and digital platforms</br> 2) Tur &nbsp;&nbsp;&nbsp; b) Create new cultures and customs with local food </br>3) Azer &nbsp;&nbsp;&nbsp;c) Youth has oppurtunities to apply for events in minutes</br> 4) Uk &nbsp;&nbsp;&nbsp;d) helps to search for special events, universities, jobs</p>",
        "answers": [
            "1-a, 2-d, 3-b, 4-c",
            "1-c, 2-b, 3-a, 4-d",
            "1-d, 2-a, 3-c, 4-b",
            "1-b, 2-c, 3-d, 4-a"
        ],
        "correct": 3
    },
    {
        "question": "What do you think is the best solution in the online inclustion of youth peopel?</br><p style='font-size: 2.3vw'> 1)Organizing regional youth forums</br> 2) Engaging youth people through youth employment opportunities </br> 3) Forming a coalition of talented young leaders active in the digital space </br> 4) There is no right answer</p>",
        "answers": [
            "3, 1", "1, 2, 3", "1, 4", "2, 4"
        ],
        "correct": 2
    },
    {
        "question": "Here are some facts",
        "answers": [
            "Working remotely and communicating through various virtual platforms facilitated to create diverse and flexible environment",
            "Digital transformation increased effieciency of project delivery by accelerating its timeline, managing tasks productively",
            "Digital transformation increased effieciency of project implementation, but it has also increased costs",
            "With the help of the new technologies it became easier to manage tasks and track the progress, as well as collaborate and communicate with stakeholders"
        ],
        "correct": 3,
        "choose": "wrong"
    },
    {
        "question": "Match the apps with their description </br><p style='font-size: 2.3vw'> 1) Video conferencing &nbsp;&nbsp;&nbsp; a) Microsoft Teams</br> 2) Collaboration software &nbsp;&nbsp;&nbsp; b) Zoom, Skype </br> 3) Instant messaging &nbsp;&nbsp;&nbsp; c) Google docs </br> 4) Shared spreadsheets &nbsp;&nbsp;&nbsp; d) Telegram</p>",
        "answers": [
            "1-b, 2-d, 3-a, 4-c",
            "1-b, 2-a, 3-d, 4-c",
            "1-a, 2-b, 3-c, 4-d",
            "1-b, 2-c, 3-d, 4-a"
        ],
        "correct": 2
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

    if (questions[questionNumber].choose === "wrong") {
        chooseWrong.innerHTML = "Choose the wrong answer!!!"
    } else {
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
        questionNumberContainer.innerHTML = `${questionNumber + 1}/${questions.length}`
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
        questionNumberContainer.innerHTML = `${questionNumber + 1}/${questions.length}`
        changeQuestion()
    } else {
        popUp.style.visibility = "visible"
        scoreContainer.innerHTML = `Your Score is ${score}/10`
    }
    ans1.style.backgroundColor = "transparent"
    ans2.style.backgroundColor = "transparent"
    ans3.style.backgroundColor = "transparent"
    ans4.style.backgroundColor = "transparent"
    ans5.style.backgroundColor = "transparent"
}

function closePopUpfn() {
    popUp.style.visibility = "hidden"
}

changeQuestion()

ans1.addEventListener("click", () => { selectAnswer(1) })
ans2.addEventListener("click", () => { selectAnswer(2) })
ans3.addEventListener("click", () => { selectAnswer(3) })
ans4.addEventListener("click", () => { selectAnswer(4) })
ans5.addEventListener("click", () => { selectAnswer(5) })

closePopUp.addEventListener("click", closePopUpfn)

previous.addEventListener("click", previousQuestion)
next.addEventListener("click", nextQuestion)