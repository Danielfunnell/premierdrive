const questDiv= document.getElementById("question-container");
const resultsContainer = document.getElementById("results");
let formOne = document.getElementById("form").addEventListener("submit", handleform)

function handleform(event) {
    event.preventDefault();
    form.parentNode.removeChild(form);
    renderQuestionOne();
}

const next= document.querySelector(".next-button");
const submitTwo= document.getElementById("submitTwo").addEventListener("click", getResults)
const submit = document.getElementById("submit").addEventListener("click", getResultsOne);

let score = 0

let occurances = {};
let curNumber;
// let maxNumber = score[0];


//document.getElementById("btn-start").addEventListener("click", start);
//document.getElementById("next").addEventListener("click", nextQuest);
// form.addEventListener("click", renderQuestion);



let questions = [
    {
        question: "How many hours have you had?",
        choiceA: "0-15 hours", 
        choiceB: "15-30",
        choiceC: "30-above",
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
        choiceB: "Occasionally",
        choiceC: "Yes"
    }
];

console.log(questions)

let lastQuestionIndex = questions.length -1; 

let runningQuestionIndex = 1;




quizStart();
    
function quizStart (event) {
    
    next.style.display='none';

}

function renderQuestionOne() {

    next.style.display='block';
    let q1 = questions[0]

    questDiv.innerHTML += `<h4 class="question-box__question my-0 font-weight-normal"> ${q1.question} </h4>`;
    questDiv.innerHTML += `<label><input type="radio" name="q1-btn" value="a">${q1.choiceA}</label></br>`
    questDiv.innerHTML += `<label><input type="radio" name="q1-btn" value="b">${q1.choiceB}</label><br>`
    questDiv.innerHTML += `<label><input type="radio" name="q1-btn" value="c">${q1.choiceC}</label><br>`
    
    getResultsOne()
    

}

function getResultsOne() {
    document.getElementsByName("q1-btn")
     .forEach(radio => {
            
        if ((radio.checked) && (radio.value === "a")) {
            console.log(radio.value)
            score = score+0; 
            console.log(score)
            renderQuestion()
          
        } else if ((radio.checked) && (radio.value === "b")) {
            score = score +15;
            renderQuestion()
           
        } else if ((radio.checked) && (radio.value === "c")) {
            score = score +30;
            renderQuestion()
           
        }

        
             
}); 


function renderQuestion() {
        
       
        next.style.display='block';
        
   
        let q = questions[runningQuestionIndex];
        questDiv.innerHTML += `<h4 class="question-box__question my-0 font-weight-normal"> ${q.question} </h4>`;
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
        displayResult();
    }
    else {
        questDiv.innerHTML=""
        runningQuestionIndex++;
        renderQuestion();
        
    }
}    




 function getResults() {
   document.getElementsByName("answer-btn")
    .forEach(radio => {
           
        
            if ((radio.checked) && (radio.value === "start")) {
                score = score -1; 
              
                nextQuest()
            } else if ((radio.checked) && (radio.value === "middle")) {
                score ++
               
                nextQuest()
            } else if ((radio.checked) && (radio.value === "end")) {
                score = score +1
                nextQuest()
               
                
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
};

