// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since.
// "constants.js" has been included before "script.js" in index.html.

const unchecked = "./images/unchecked.png";
const checked = "./images/checked.png";

const questions = document.getElementsByClassName("choice-grid");
const reset = document.getElementById("restart");
const resTitle = document.getElementById("title");
const resContent = document.getElementById("content");

const question1 = questions[0].children;
const question2 = questions[1].children;
const question3 = questions[2].children;

var oneChoice = null;
var twoChoice = null;
var threeChoice = null;


function choiceClick() {
    /* if there's a click on one of the elements in a choice-grid, 
    then first detects if there's another one checked, then formats*/ 
    var qNum = this.dataset.questionId;
    var grid = this.parentNode.children;

    //console.log(oneChoice,twoChoice,threeChoice);
    //console.log(qGrid[0].dataset,item.dataset);
    const checkbox = this.querySelector(".checkbox");
    checkbox.src = chooseQ(qNum, this);

    if (retNum(qNum)) {
        for (i=0; i < grid.length; i++) {
            
        if (grid[i] != this) {
            grid[i].id = "fade";
        }
        }
    } else {
        for (i=0; i < grid.length; i++) {
            grid[i].id = "";
        }
    }

    if(result() != null) {
        var myResult = giveResult(result());
        //console.log(myResult['title']);
        

        resTitle.innerText = myResult['title'];
        resContent.innerText = myResult['contents'];
        reset.innerText = "reset";

        for (i=0;i < 9; i++) {
            question1[i].removeEventListener("click", choiceClick);
            question2[i].removeEventListener("click", choiceClick);
            question3[i].removeEventListener("click", choiceClick);
        }
    }

    return
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
                // console.log(RESULTS_MAP[key]);
                return RESULTS_MAP[key]
            }
        }
}

// Main

window.onload = function() {
    for (i=0;i < 9; i++) {
    question1[i].addEventListener("click", choiceClick);
    question2[i].addEventListener("click", choiceClick);
    question3[i].addEventListener("click", choiceClick);
    }

    reset.addEventListener("click", () => {window.scrollTo(0,0);window.location.reload();})
}