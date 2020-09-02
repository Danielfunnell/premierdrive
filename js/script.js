const questDiv= document.getElementById("question-container");
const questionBox= document.querySelector(".question-box")
const resultsContainer = document.getElementById("results");

let formOne = document.getElementById("form").addEventListener("submit", handleform)

function handleform(event) {
    event.preventDefault();
    form.parentNode.removeChild(form);
    renderQuestion();
}

const next= document.querySelector(".next-button");
const submit = document.getElementById("submit").addEventListener("click", getResults);
const bullets= [...document.querySelectorAll(".question-box__bullet")];





let questions = [
    {
        question: "How many hours have you has previously with  a driving instructor?",
        choiceA: "0-15 hours", 
        choiceB: "15-30",
        choiceC: "30-above"
    },
    {
        question: "When was the last time you have drove consistently?",
        choiceA: "Over 1 year ago",
        choiceB: "3-12 months ago", 
        choiceC: "Under 1 month ago"
     },
     {
        question: "Have you done a practical test before",
        choiceA: "No",
        choiceB: "Over a year ago", 
        choiceC: "Yes"
    },
    {
        question: "Do you have your own car to practice in as well?",
        choiceA: "No",
        choiceB: "Occasionally",
        choiceC: "Yes"
    }
];

let score = 0
let maxSteps = questions.length;
let currentStep = 1;
let lastQuestionIndex = questions.length -1; 
let runningQuestionIndex = 0;
const questOne = questions[1];


quizStart();
    
function quizStart (event) {
    //  event.preventDefault()
   
    next.style.display='none';
    questionBox.style.display = 'none'
    
}
//renderQuestion();


function renderQuestion() {
        
        questionBox.style.display = 'block';
        next.style.display ='block';

        let q = questions[runningQuestionIndex];
        questDiv.innerHTML += `<h4 class="question-box__question"> ${q.question} </h4>`;
        questDiv.innerHTML += `<label><input class="input-btn" type="radio" name="answer-btn" id="A" value="start">${q.choiceA}</label></br>`
        questDiv.innerHTML += `<label><input class="input-btn" type="radio" name="answer-btn" id="B" value="middle">${q.choiceB}</label><br>`
        questDiv.innerHTML += `<label><input class="input-btn" type="radio" name="answer-btn" id="C" value="end">${q.choiceC}</label><br>`        
        
};




function nextQuest(){
    if (runningQuestionIndex === lastQuestionIndex-1) {
        
        document.querySelector('#submit').textContent = 'Finish';
        console.log("end quiz")
        
    } if (runningQuestionIndex === lastQuestionIndex) {
        document.getElementById("question-container").style.display='none';
        document.getElementById("submit").style.display='none'
        displayResult();
        bullets[bullets.length-1].classList.add("last");
        console.log(bullets[bullets.length-1])
        
    }
    else {
        questDiv.innerHTML=""
        runningQuestionIndex++;
        currentStep++
        renderQuestion();
        bullets[currentStep -2].classList.add("completed");
    }
}    




 function getResults() {
   document.getElementsByName("answer-btn")
    .forEach(radio => {
           
        
            if ((radio.checked) && (radio.value === "start")) {
                score = score -1; 
                console.log(score)
                nextQuest()
            } else if ((radio.checked) && (radio.value === "middle")) {
                score ++
                console.log(score)
                nextQuest()
            } else if ((radio.checked) && (radio.value === "end")) {
                score = score +1
                nextQuest()
                console.log(score)
                
            }

            
        });

        
};



    // function getScore () {
    //     if(score <= 3) {
    //         console.log("your a beginner")
    //     } else if (score <= 6) {
    //         console.log("your an intermediate")
    //     } else if (score > 6) {
    //         console.log("Your advanced")
    //     }
    // }



// function getScore() {
// for(let i = 0; i < score.length; i++) {
//     curNumber = score[i];

//     if(occurances[curNumber] !== undefined) {
//         occurances[curNumber]++;
//     } else {
//         occurances[curNumber] = 1;
//     }
//     if(occurances[curNumber] > occurances[maxNumber]) {
//         maxNumber = curNumber;
//     }
// }


//     displayResult();
// };




function displayResult() {

    if (score < 0) {
        resultsContainer.innerHTML =`<h4> You are a beginner. We recommend our 40 hour beginner course </h4>`;
        console.log("you are a beginner");
    }else if ((score >= 0) && (score <= 3)) {
        resultsContainer.innerHTML =`<h4> You are a intermediate. We recommend our 20 hour course </h4>`;
        console.log("you are intermediate");
    }
    else if (score >= 4) {
        resultsContainer.innerHTML =`<h4> You are advanced. We recommend our 10 hour course </h4>`;
        console.log("you are advanced");
    } 
}

