const questions = [
    {
        question: "What is the greatest Anime/Manga of all time ?",
        optionA: "One Piece",
        optionB: " ",
        optionC: " ",
        optionD: " ",
        correctOption: "optionA"
    },

    {
        question: "How many countries are there in Africa ?",
        optionA: "68",
        optionB: "54",
        optionC: "67",
        optionD: "53",
        correctOption: "optionB"
    },

    {
        question: "When did world war 2 end ?",
        optionA: "2005",
        optionB: "1994",
        optionC: "1941",
        optionD: "1945",
        correctOption: "optionD"
    },

    {
        question: "Who of the following was not on Raphael's 'School of Athens' painting ?",
        optionA: "Plato",
        optionB: "Aristotle",
        optionC: "Socrates",
        optionD: "Pythegoras",
        correctOption: "optionC"
    },

    {
        question: "Who is considered to be the father of communism ?",
        optionA: "Adolf Hittler",
        optionB: "Kim Jong Un",
        optionC: "Joseph Stalin",
        optionD: "Karl Marx",
        correctOption: "optionD"
    },

    {
        question: "What is the approximate population number of South Africa ?",
        optionA: "60 Million",
        optionB: "20 Million",
        optionC: "8 Billion",
        optionD: "30 Million",
        correctOption: "optionA"
    },

    {
        question: "The law of demand states that if the price is high then the quantity demanded is... ?",
        optionA: "high",
        optionB: "dead",
        optionC: "low",
        optionD: "quantitative",
        correctOption: "optionC"
    },


    {
        question: "What's the area of a rectangle ?",
        optionA: "length-breadth",
        optionB: "2length+2breadth",
        optionC: "Monkey D. Luffy",
        optionD: "length x breadth",
        correctOption: "optionD"
    },

    {
        question: `Who discovered gravity ?`,
        optionA: "Albert Einstein",
        optionB: "Bill Gates",
        optionC: "Galileo Galilei",
        optionD: "Isaac Newton",
        correctOption: "optionD"
    },

    {
        question: "Which religion follows the Quran ?",
        optionA: "Hinduism",
        optionB: "Buddhism",
        optionC: "Islam",
        optionD: "GODA",
        correctOption: "optionC"
    },

    {
        question: "What Pslam starts like this:'I lift up my eyes to the mountains—where does my help come from?'",
        optionA: "Pslam 23",
        optionB: "Pslam 121",
        optionC: "Pslam 138",
        optionD: "Pslam 1",
        correctOption: "optionB"
    },


    {
        question: "What is the national flower of South Africa ?",
        optionA: "Jacaranda",
        optionB: "King Protea",
        optionC: "Sunflower",
        optionD: "Delphinium",
        correctOption: "optionB"
    },

    {
        question: "How many years did mandela serve in prison ?",
        optionA: "68",
        optionB: "67",
        optionC: "69",
        optionD: "27",
        correctOption: "optionD"
    },

    {
        question: "Where was the European Anthem adapted from ?",
        optionA: "Beethoven's 9th symphony",
        optionB: "Mozart's requiem",
        optionC: "Camila Cabello's Havana",
        optionD: "Joseph Haydn's Emperor's hym",
        correctOption: "optionA"
    },

    {
        question: "Who has won the most Ballon d'Ors ?",
        optionA: "Cristiano Ronaldo",
        optionB: " Michel Platini",
        optionC: "Lionel Messi",
        optionD: "Kylian Mbappé",
        correctOption: "optionC"
    },

    {
        question: "How many real numbers are there between 1 and 5 ?",
        optionA: "6",
        optionB: "3",
        optionC: "0",
        optionD: "Infinite",
        correctOption: "optionD"
    },

    {
        question: "Which artist has won the most Grammys  ?",
        optionA: `"Kendrick just opened his mouth, someone go hand him a grammy right now" `,
        optionB: "Kanye West",
        optionC: "Beyoncé",
        optionD: "Taylor Swift",
        correctOption: "optionC"
    },

    {
        question: "What is the biggest country in the world ?",
        optionA: "Africa",
        optionB: "United states of America",
        optionC: "China",
        optionD: "Russia",
        correctOption: "optionD"
    },

    {
        question: "What is the biggest planet in our solar system ?",
        optionA: "Saturn",
        optionB: "Jupiter",
        optionC: "Uranus",
        optionD: "Neptune",
        correctOption: "optionB"
    },
    {
        question: "What mythology is Thor from ?",
        optionA: "Norse mythology",
        optionB: "Roman mythology",
        optionC: "Greek mythology",
        optionD: "Chinese mythology",
        correctOption: "optionA"
    },



]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 19) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 19) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 5) {
        remark = "Dumbass!!"
        remarkColor = "red"
    }
    else if (playerScore >= 5 && playerScore <10 ) {
        remark = "You failed, you did decent though ."
        remarkColor = "orange"
    }
    else if (playerScore >= 10 && playerScore <16) {
        remark = "You pass, congradulations."
        remarkColor = "green"
    }

    else if (playerScore >= 16) {
        remark = "Distinction! congradulations! you're very well informed ."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 20) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}