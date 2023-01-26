/*let myArray = ;
function smth (myArray) {
    console.log(myArray);
    smth = function () {
        let Array = isNaN(myArray);
    }
}
smth(myArray);
smth (); */

let myArray = ["100 ირემი", "201 ლარი", 
"624 დოლარი", "109 ციყვი", 
"33 ნაბიჯი", "62 ავტომობილი"];
function stringToNumber (anyArray) {
  for( let i = 0; i<anyArray.length; i++) { 
    anyArray[i]= parseInt(anyArray[i]);
    document.write (anyArray[i]  + "</br>");
  }

   
}

stringToNumber(myArray);
