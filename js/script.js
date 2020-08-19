const questDiv= document.getElementById("question-container");
const resultsContainer = document.getElementById("results");


let score = [];
let occurances = {};
let curNumber;
let maxNumber = score[0];

//document.getElementById("btn-start").addEventListener("click", start);
document.getElementById("next").addEventListener("click", nextQuest);
let submit = document.getElementById("submit").addEventListener("click", getResults);

let questions = [
    {
        question: "How many hours have you had?",
        choiceA: "0-15 hours", 
        choiceB: "15-30",
        choiceC: "30-above"
    },
    {
        question: "Are you a quick learner?",
        choiceA: "No",
        choiceB: "Not sure", 
        choiceC: "Yes"
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
        choiceB: "Maybe",
        choiceC: "Yes"
    }
];

let lastQuestionIndex = questions.length -1; 
let runningQuestionIndex = 0;


renderQuestion()


function renderQuestion() {
   
        let q = questions[runningQuestionIndex];
        questDiv.innerHTML += `<h4> ${q.question} </h4>`;
        questDiv.innerHTML += `<label><input type="radio" name="answer-btn" id="A" value="start">${q.choiceA}</label></br>`
        questDiv.innerHTML += `<label><input type="radio" name="answer-btn" id="B" value="middle">${q.choiceB}</label><br>`
        questDiv.innerHTML += `<label><input type="radio" name="answer-btn" id="C" value="end">${q.choiceC}</label><br>`
         
};




function nextQuest(){
    if (runningQuestionIndex === lastQuestionIndex-1) {
        
        document.querySelector('#submit').textContent = 'Finish';
        console.log("end quiz")
        
    } if (runningQuestionIndex === lastQuestionIndex) {
        document.getElementById("question-container").style.display='none';
        document.getElementById("submit").style.display='none'
        getScore();
    }
    else {
        runningQuestionIndex++;
        renderQuestion();
    }
}    




 function getResults() {
   document.getElementsByName("answer-btn")
    .forEach(radio => {
            if ((radio.checked) && (radio.value === "start")) {
                score.push(radio.value); 
                nextQuest()
            } else if ((radio.checked) && (radio.value === "middle")) {
                score.push(radio.value);
                nextQuest()
            } else if ((radio.checked) && (radio.value === "end")) {
                score.push(radio.value);
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



function getScore() {
for(let i = 0; i < score.length; i++) {
    curNumber = score[i];

    if(occurances[curNumber] !== undefined) {
        occurances[curNumber]++;
    } else {
        occurances[curNumber] = 1;
    }
    if(occurances[curNumber] > occurances[maxNumber]) {
        maxNumber = curNumber;
    }
}
    console.log(curNumber);
    console.log(maxNumber);
    displayResult();
};


function displayResult() {
    if (curNumber == "start") {
        resultsContainer.innerHTML =`<h4> You are a beginner. We recommend our 40 hour beginner course </h4>`;
        console.log("you are a beginner");
    } if (curNumber == "middle") {
        resultsContainer.innerHTML =`<h4> You are a intermediate. We recommend our 20 hour course </h4>`;
        console.log("you are intermediate");
    }
    else if (curNumber == "end") {
        resultsContainer.innerHTML =`<h4> You are advanced. We recommend our 10 hour course </h4>`;
        console.log("you are advanced");
    } 
}

