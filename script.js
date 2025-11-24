// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

const unchecked = "./images/unchecked.png";
const checked = "./images/checked.png";
const questions = document.getElementsByClassName("choice-grid");

const question1 = questions[0].children;
var oneChoice = null;
const question2 = questions[1].children;
var twoChoice = null;
const question3 = questions[2].children;
var threeChoice = null;



function choiceClick(qGrid, item) {
    /* if there's a click on one of the elements in a choice-grid, 
    then first detects if there's another one checked, then formats*/ 
    var qNum = qGrid[0].dataset.questionId;
    //console.log(qGrid);
    //console.log(qGrid[0].dataset,item.dataset);

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
            item.id = "";
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

function fadeRest(qGrid, item) {
    for (i=0; i < qGrid.length; i++) {
        if (qGrid[i] != item) {
            qGrid[i].id = "fade";
            //console.log(qGrid[i]);
            //console.log(item);
        }
    }
}

// Main
for (i=0;i < 9; i++) {
    question1[i].addEventListener("click", (e) => {choiceClick(question1, e.currentTarget)});
    question2[i].addEventListener("click", (e) => {choiceClick(question2, e.currentTarget)});
    question3[i].addEventListener("click", (e) => {choiceClick(question3, e.currentTarget)});
}
