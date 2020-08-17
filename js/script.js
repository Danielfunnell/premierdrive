const questDiv= document.getElementById("question-container");

document.getElementById("btn-start").addEventListener("click", buildQuiz);

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


function buildQuiz() {
    for(i = 0; i < questions.length; i++) {
    questDiv.innerHTML += `<h4> ${questions[i].question} </h4>`;

    let answers = questions[i].choices;
     for(j = 0; j < answers.length; j++) {
          console.log(answers[j]);
          questDiv.innerHTML += ` <label><input type="radio">${answers[j]}</label>`;
     }
}
};






