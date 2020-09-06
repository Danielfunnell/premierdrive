const previous = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn")
next.addEventListener("click", nextForm);
let tab = document.getElementsByClassName("tab");
let currentTab = 0;



showTab(currentTab);




function showTab(currentTab) {
    

    tab[currentTab].style.display = "block";

    if(currentTab == 0) {
        previous.style.display = "none" 
    
    } else {
        previous.style.display = "inline-block"
    }
     if (currentTab == (tab.length -1)) {
        next.innerHTML = "Submit";
        next.removeEventListener("click", nextForm);
        next.addEventListener("click", changeSubmit)
        function changeSubmit() {
            next.type = "submit";
        }
      } else {
        next.innerHTML = "Next";
        
    }

}

function nextForm () {
    let lastForm = tab[currentTab]

    currentTab++;
    console.log(currentTab)
    showTab(currentTab);
    lastForm.style.display = "none"
    console.log(lastForm)
}



