const questDiv= document.getElementById("question-container");
const resultsContainer = document.getElementById("results");

let score = 0;

//document.getElementById("btn-start").addEventListener("click", start);
document.getElementById("next").addEventListener("click", nextQuest);
document.getElementById("submit").addEventListener("click", getResults);

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
        choiceB:  "Not sure", 
        choiceC: "Yes"
     },
     {
        question: "Test",
        choiceA: "No",
        choiceB:  "Not sure", 
        choiceC: "Yes"
    }
];

let lastQuestionIndex = questions.length -1; 
let runningQuestionIndex = 0;
// 

//  });

// function start(){
        
// }

renderQuestion()


function renderQuestion() {
    //for(i = 0; i < questions.length; i++) {
    //let quest = questions[i].question

    // questions.forEach(function(questions, index) {
    //          questDiv.innerHTML += `<h4> ${index} ${questions.question} </h4> <label><input type="radio">${questions.choices}</label>`
    
        
    // })


            // questDiv.innerHTML += `<h4> ${questions[0].question} </h4>`;
            // questDiv.innerHTML += ` <label><input type="radio" name="answer-btn" id="beginner" value="start">${questions[0].choices[0]}</label>`;
            // questDiv.innerHTML += ` <label><input type="radio" name="answer-btn" id="intermediate" value="middle">${questions[0].choices[1]}</label>`;
            // questDiv.innerHTML += ` <label><input type="radio" name="answer-btn" id="advance" value="end">${questions[0].choices[2]}</label>`;
        let q = questions[runningQuestionIndex];
        questDiv.innerHTML += `<h4> ${q.question} </h4>`;
        questDiv.innerHTML += `<label><input type="radio" name="answer-btn" id="A" value="start">${q.choiceA}</label>`
        questDiv.innerHTML += `<label><input type="radio" name="answer-btn" id="B" value="middle">${q.choiceB}</label>`
        questDiv.innerHTML += `<label><input type="radio" name="answer-btn" id="C" value="end">${q.choiceC}</label>`
         
};



// runningQuestionIndex++;
// renderQuestion();


function nextQuest(){
    if (runningQuestionIndex === lastQuestionIndex) {
        console.log("end quiz")
        getScore();
    } else
        runningQuestionIndex++;
        renderQuestion();
}    




 function getResults() {
   document.getElementsByName("answer-btn")
    .forEach(radio => {
            if ((radio.checked) && (radio.value == "start")) {
            score = score +1;  
            nextQuest()
            } else if ((radio.checked) && (radio.value == "middle")) {
            score = score +2;
            nextQuest()
            } else if ((radio.checked) && (radio.value == "end")) {
                score = score +3;
                nextQuest()
                console.log(score)
            }
        });
};


    function getScore () {
        if(score <= 3) {
            console.log("your a beginner")
        } else if (score <= 6) {
            console.log("your an intermediate")
        } else if (score > 6) {
            console.log("Your advanced")
        }
    }
