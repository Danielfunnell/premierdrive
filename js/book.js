
// targets next and previous buttons
const previous = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");
const errorDiv = document.querySelector(".form__error");
const recap = document.querySelector(".recaptcha")
console.log(recap)

// click events added to next and previous buttons
previous.addEventListener("click", prevForm);
next.addEventListener("click", handleform);


// tragets tab divs
let tab = document.getElementsByClassName("tab");
let currentTab = 0;

// form validation
function handleform() {

    let tab = document.getElementsByClassName("tab");
    let input, i
    let messages = []
    
    input = tab[currentTab].getElementsByTagName("input");
    
   
    // loops through input fields to check content and returns false if content is empty otherwise moves to next form.
   for(i=0; i < input.length; i++) {
       //checks if required fields are filled in 
        if(!input[i].checkValidity()) {
          input[i].style.border = 'solid 1px #d20804'
          errorDiv.innerText = '*Please fill out all required form details'
        return false
       
          
        // if on last tab and input fields are valid changes next button to type submit
        } if (currentTab == tab.length-1) {
            next.type = "submit"
        }
    }

    nextForm()
}

//displays current form
showTab(currentTab);


function showTab(currentTab) {
    
    tab[currentTab].style.display = "block";

    if(currentTab == 0) {
        previous.style.display = "none"
        recap.style.display= "none" 
    } else {
        previous.style.display = "inline-block"
        recap.style.display= "none"
    } if  (currentTab == tab.length-1) {
        next.innerHTML = "Submit";
        recap.style.display= "block"
    } else {
        next.innerHTML = "Next";
    }
}

// handles next button
function nextForm () {
  let lastForm = tab[currentTab]

        currentTab++;
        showTab(currentTab);
        lastForm.style.display = "none";
}

//handles previous button
function prevForm () {

    let lastForm = tab[currentTab];
    lastForm.style.display = "none";
    currentTab--;
    showTab(currentTab);
}




