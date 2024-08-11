// get input element
let filterInput = document.getElementById('filterInput');

// Add event listener
filterInput.addEventListener('keyup',filterNames)

// Function 
function filterNames(){

// Get Value Of Input
let filterValue = document.getElementById('filterInput').value.toUpperCase();

// Get Names UL
let names = document.getElementById("names")

// Get items li
let li = names.querySelectorAll('li.collection-item');

// Loop On ul Li
for(let i = 0; i<=li.length;i++){

let a = li[i].getElementsByTagName('a')[0];

// if matches
if(a.innerHTML.toLocaleUpperCase().indexOf(filterValue)>-1){

li[i].style.display = '';

}
else{
li[i].style.display = 'none'
}

}
}