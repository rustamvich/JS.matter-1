"use script";

// Brinchi masala

const menu ={
    width: 150,
    height: 200,
    title: "Object menu"
}

const newFunction = function(obj){
    for (let key in obj){
        if(typeof obj[key] === 'number'){
            obj[key] *= 3;
        }
    }
    return obj;
}

console.log(newFunction(menu));

// Ikkinchi masala

function remove(array, index){
    return array.slice(0, index).concat(array.slice(index+1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));