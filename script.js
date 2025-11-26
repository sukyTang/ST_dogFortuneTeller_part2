// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since.
// "constants.js" has been included before "script.js" in index.html.

const unchecked = "./images/unchecked.png";
const checked = "./images/checked.png";
const questions = document.getElementsByClassName("choice-grid");

const question1 = questions[0].children;
const question2 = questions[1].children;
const question3 = questions[2].children;

var oneChoice = null;
var twoChoice = null;
var threeChoice = null;


function choiceClick(qGrid, item) {
    /* if there's a click on one of the elements in a choice-grid, 
    then first detects if there's another one checked, then formats*/ 
    var qNum = qGrid[0].dataset.questionId;
    //console.log(oneChoice,twoChoice,threeChoice);
    //console.log(qGrid[0].dataset,item.dataset);
    var yourResult = result();
    

    // my removeEventListeners are not working so I'll just put this here
    if(yourResult != null) {
        return yourResult;
    }

    const checkbox = item.querySelector(".checkbox");
    checkbox.src = chooseQ(qNum, item);

    if (retNum(qNum)) {
        for (i=0; i < qGrid.length; i++) {
        if (qGrid[i] != item) {
            qGrid[i].id = "fade";
        }
        }
    } else {
        for (i=0; i < qGrid.length; i++) {
            qGrid[i].id = "";
        }
    }

    if(yourResult != null) {
        console.log("results");
    }

    // getting rid of eventlisteners, but it's not working
    for (i=0;i < 9; i++) {
            question1[i].removeEventListener("click", (e) => {choiceClick(question1, e.currentTarget)});
            question2[i].removeEventListener("click", (e) => {choiceClick(question2, e.currentTarget)});
            question3[i].removeEventListener("click", (e) => {choiceClick(question3, e.currentTarget)});
    }
}

function retNum(num) {
    if (num == "one") {
        return oneChoice
    } else if (num == "two") {
        return twoChoice
    } else {
        return threeChoice
    }
}

function chooseQ(num, item) {
    if (num == "one") {
        if (oneChoice == null || oneChoice != item) {
            if (oneChoice) {
                oneChoice.id = "";
                oneChoice.querySelector(".checkbox").src = unchecked;
            }
            oneChoice = item;
            item.id = "checked";
            return checked
        } else {
            oneChoice = null;
            item.id = "";
            return unchecked
        }
    }
    else if (num == "two") {
        if (twoChoice == null || twoChoice != item) {
            if (twoChoice) {
                twoChoice.querySelector(".checkbox").src = unchecked;
            }
            twoChoice = item;
            item.id = "checked";
            return checked
        } else {
            twoChoice = null
            return unchecked
        }
    } else {
        if (threeChoice == null || threeChoice != item) {
            if (threeChoice) {
                threeChoice.querySelector(".checkbox").src = unchecked;
            }
            threeChoice = item;
            item.id = "checked";
            return checked
        } else {
            threeChoice = null
            return unchecked
        }
    }
}

function result() {
    if (oneChoice && twoChoice && threeChoice) {
        var result = Math.round(idSum(oneChoice.dataset.choiceId, twoChoice.dataset.choiceId, threeChoice.dataset.choiceId));
        return result
    }
    return null
}

function idSum(idOne, idTwo, idThree) {
    return (RESULTS_MAP[idOne].id + RESULTS_MAP[idTwo].id + RESULTS_MAP[idThree].id)/3
}

function giveResult(id) {
    for (key in RESULTS_MAP) {
            if (RESULTS_MAP[key].id == id) {
                console.log(RESULTS_MAP[key]);
            }
        }
}

// Main
for (i=0;i < 9; i++) {
    question1[i].addEventListener("click", (e) => {choiceClick(question1, e.currentTarget)});
    question2[i].addEventListener("click", (e) => {choiceClick(question2, e.currentTarget)});
    question3[i].addEventListener("click", (e) => {choiceClick(question3, e.currentTarget)});
}