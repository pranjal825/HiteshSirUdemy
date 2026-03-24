/* 
1 Declare an array named 'teaflavours' that contains the strings "green tea", "black tea", and "oolomg tea".

Access the first element of the array and store it in a variable named 'firsttea'.*/

let teaflavours =["green tea", "black tea", "oolong tea"]

const firstTea = teaflavours[2];

//console.log(firstTea);

/* 2 
Declare an array named 'cities' containing "London","Tokyo", "Paris", and "New York". 

Acces the third element in the array and store it in a variable named 'favoriteCity'.*/

let cities =["London", "Tokyo","Paris","New York"];

 const favoriteCity = cities[3];

 //console.log(favoriteCity);

 /*3 you have an array named 'teaTypes containing "herbal tea","white tea", and "masala chai".

 Change the second element of the array to "jasmine tea"*/
 let teaTypes = ["herbal tea","white tea", "masala chai"]
// change second element
teaTypes[1] = "jasmine tea";

//console.log(teaTypes);

/*4 declare an array named "CitiesVisited" containing "Gurgaon" and "Mohali".

Add "Banglore" to the array using the 'push' method. */

//let citiesVisited = ["Gurgaon","mohali"];
//citiesVisited[1] = "Banglore";
//console.log(citiesVisited);

//let citiesVisited = ["Gurgaon","mohali"];
//citiesVisited[citiesVisited.length - 1] = "Banglore";
//console.log(citiesVisited);
// Another way
//console.log(citiesVisited.length);
// another way

/*let citiesVisited = ["Gurgaon","mohali"];
citiesVisited.push("Banglore");
console.log(citiesVisited);*/
/*
let citiesVisited = ["Mumbai","Sydney"];
citiesVisited.push("Bangalore");

console.log(citiesVisited);*/

/* 5 you have an array named 'teaOrders' with "Chai","iced tea","earl grey".
remove the last element of the array using the pop method and store it in a variable named 'lastOrder'.
*/
//let teaOrders = ["Chai","iced tea","matcha","earl"];
//teaOrders.pop();
//console.log(teaOrders);
// pop automatically removes the last element.
/*let teaOrders = ["Chai","iced tea","matcha","earl grey"];
const lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder);*/

/* 6
you have an array named 'popularTeas' containing "greentea","oolong tea", and "chai"
Create a soft copy of this array named 'softCopyTeas'*/

/*let popularTeas = ["greentea","oolongtea","chai"]
let softcopyTeas = popularTeas;
console.log(softcopyTeas);*/

/*let popularTeas = ["greentea","oolongtea","chai"]
let softcopyTeas = popularTeas;
popularTeas.pop();
console.log(softcopyTeas);
console.log(popularTeas);*/

/*7 
You have an array named 'topCities' containing "Berlin","Singapore" and "NewYork".
Create a hard copy of this array named 'hardcopyCities'.*/

let topCities = ["Berlin","Singapore","NewYork"];
//let hardCopyCities = [...topCities];
let hardCopyCities = topCities.slice();
topCities.pop();
//console.log(hardCopyCities);

/*8
you have two arrays: 'EuropeanCities' containing "Paris","Rome" and 'asianCities' containing "Tokyo" and "Bangkok".
Merge these two arrays into a new array named 'worldCities'.*/

/*let europeanCities = ["Paris","Rome"];
let asianCities = ["Tokyo","Bangkok"];
let worldcities =europeanCities.concat(asianCities)
console.log(worldcities);*/

/*9
 you have an array named 'teamenu' containg "masalachai","oolong tea","green tea", and "earl grey"/
 find the length of the array and store it in a variable named 'menulength'.*/

//  let teamenu = ["masala chai","oolong tea","green tea","earl grey"];
//  let menuLength = teamenu.Length;
//  console.log("length is:" menuLength); 

 /*let teamenu = ["masala chai","oolong tea","green tea","earl grey"];

let menulength = teamenu.length;

console.log("Length is:", menulength);
 console.log(teamenu);*/

 /* 10
  you have an array named 'cityBucketList' containing "Kyoto","London","Cape Town" and "Vancouver"

  check if "London" is in the array and store the result in a variable named 'isLondonList'.
*/

let cityBucketList = ["Kyoto","London","Cape Town","Vancouver"];
let isLondonInList = cityBucketList.includes("Kanpur");
console.log(isLondonInList);
//includes plays the role of Boolean.