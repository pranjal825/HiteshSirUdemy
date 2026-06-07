/*
1. Write a 'for' loop that loops through the array'["green tea", "Blacck tea", "Chai", "oolong tea"]' and stops the loop when it finds '"chai"'.
Store all teas before '"chai"' in a new array named 'selectedTeas'.*/

let arr= ["green tea", "Blacck tea", "Chai", "oolong tea"];
let selectedTeas= [];
for(let i=0; i<arr.length; i++){
    //console.log(arr[i])
    if(arr[i]=="Chai"){
        console.log("i=Chai find",selectedTeas);
        break
    }
        selectedTeas.push(arr[i]);
}

