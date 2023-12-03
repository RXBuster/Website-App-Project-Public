//Below is the auto complete list of products to search for, update this over time
let availableKeywords = [
    'Cars',
    'Honda',
    'Toyota',
    'Games',
    'Pokemon',
    'Films',
    'Game Codes',
    'Lamps'
];

const resultsBox = document.querySelector(".result-box")
const inputBox = document.getElementById("input-box")

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result)
    }
}



function selectInput(list){
    inputBox.value = list.innerHTML;
}

const resultsBoxTwo = document.querySelector(".result-box-two")
const inputBoxTwo = document.getElementById("input-box-two")

inputBoxTwo.onkeyup = function() {
    let result = [];
    let input = inputBoxTwo.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result)
    }
}



function selectInputTwo(list){
    inputBoxTwo.value = list.innerHTML;
}

function searchFunction(event) {
    event.preventDefault(); // Prevents the form from submitting

    const searchTerm = document.getElementById('searchInput').value;

    if (searchTerm.trim() !== '') {
        alert('Searched for: ' + searchTerm);
    } else {
        alert('Please enter a search term.');
    }
}

