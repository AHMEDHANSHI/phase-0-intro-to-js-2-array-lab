// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const myCatsArray = [...cats, name];
    return myCatsArray;
}

function prependCat(name){
    const myCatsArray = [name, ...cats];
    return myCatsArray;
}

function removeLastCat(){
    const newCatsArray = cats.slice(0, -1);
    return newCatsArray;
}

function removeFirstCat(){
    const newCatsArray = cats.slice(1);
    return newCatsArray;
}