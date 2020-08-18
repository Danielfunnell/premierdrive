const questDiv= document.getElementById("question-container");
const resultsContainer = document.getElementById("results");
let score = 0;

document.getElementById("btn-start").addEventListener("click", startOne);
document.getElementById("submit").addEventListener("click", getResults);

let questions = [
    {
        question: "How many hours have you had?",
        choices: ["0-15 hours", "15-30", "30-above"]

    },
    {
        question: "Are you a quick learner?",
        choices: ["No", "Not sure", "Yes"]


    }
];


// questions.forEach(function(questions, index, array) {
//     questDiv.innerHTML += `<h4> ${index+1}. ${questions.question} </h4> <label><input type="radio">${questions.choices}</label>`;

//  });


function startOne() {
    //for(i = 0; i < questions.length; i++) {
    //let quest = questions[i].question
        
          questDiv.innerHTML += `<h4> ${questions[0].question} </h4>`;
          let answers = questions[0].choices;
          questDiv.innerHTML += ` <label><input type="radio" name="answer-btn" id="beginner" value="start">${answers[0]}</label>`;
          questDiv.innerHTML += ` <label><input type="radio" name="answer-btn" id="intermediate" value="middle">${answers[1]}</label>`;
          questDiv.innerHTML += ` <label><input type="radio" name="answer-btn" id="advance" value="end">${answers[2]}</label>`;
        
};


 function getResults() {
   document.getElementsByName("answer-btn")
    .forEach(radio => {
            if ((radio.checked) && (radio.value == "start")) {
            console.log(radio.value) 
            score = score +1;  
            } else if ((radio.checked) && (radio.value == "middle")) {
            score = score +2;
            } else if ((radio.checked) && (radio.value == "end")) {
                score = score +3;
            }
        });

   
    

};



