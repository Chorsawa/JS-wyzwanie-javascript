//zadanie 1

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

const array = [john, pete, mary];

let arrayOfNames = [];
for (var i = 0; i < array.length; i++){
    if(array[i].name !== null){
        arrayOfNames.push(array[i].name);
    }
}

console.log(arrayOfNames);

function newDiv(){
    newDiv = document.createElement('div');
    newDiv.innerHTML = arrayOfNames;
    my_div = document.getElementById('org_div1');
    document.body.insertBefore(newDiv, my_div);
}

newDiv(arrayOfNames);

//zadanie 2

text1 = "tralala";
text2 = "lalala";
text3 = "i lala";

const arrayOfParagraphs = [text1, text2, text3];

function newElements(){
    newDiv = document.createElement('div');
    newDiv.innerHTML = `<p>${text1}</p><p>${text2}</p><p>${text3}</p>`;
    my_div = document.getElementById('org_div2');
    document.body.insertBefore(newDiv, my_div);
}

newElements(arrayOfParagraphs);