"use strict";
let animalTypes = ['dog', 'cat', 'mouse', 'ant', 'fish'];
let animals = [{ id: 0, name: '', age: 0, type: '' }];
// -------------------------- Random Age -----------------------
// Start - End = number between StartAge - EndAge
function randomNumberFromTo(start, end) {
    if (start >= end)
        throw new Error("The Start number Bigger than End Number");
    else if (start < 0 || start == null)
        throw new Error("The Start number must to be Bigger that 0");
    const randomAge = Math.round(Math.random() * (end - start)) + start; //-2 + 4
    return randomAge;
}
// -------------------------- Random Name -----------------------
// Start = From the Start Word  until Random 3 - 5 letter
function randomNameFromTo(from) {
    let randomName = '';
    let randomRound = Math.ceil(Math.random() * ((5 - 2)) + 2);
    if (from < 0 || from == null)
        throw new Error("The Start number must to be Bigger that 0 ");
    if (from >= randomRound)
        throw new Error("the From number must to be lower than" + randomRound);
    for (let i = from; i < randomRound; i++) {
        let randomLetter = String.fromCharCode((Math.random() * (25) + 97));
        randomName += randomLetter;
    }
    return randomName;
}
// -------------------------- Make new Array -----------------------
function returnAnimalArrayUpdate(arr, howMatchAnimals) {
    for (let i = 0; i < howMatchAnimals; i++) {
        arr[i] = { id: i, name: randomNameFromTo(0), age: 0, type: animalTypes[i] };
        if (arr[i].type === "fish")
            arr[i].age = randomNumberFromTo(2, 5);
        if (arr[i].type === "dog")
            arr[i].age = randomNumberFromTo(8, 16);
        if (arr[i].type === "mouse")
            arr[i].age = randomNumberFromTo(1, 3);
        if (arr[i].type === "ant")
            arr[i].age = randomNumberFromTo(1, 2);
        if (arr[i].type === "cat")
            arr[i].age = randomNumberFromTo(12, 18);
    }
    return arr;
}
// -------------------------- filter by type  -----------------------
function filterByAnimalType(arr, animalType) {
    let newArr = [{ id: 0, name: '', age: 0, type: '' }];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type === animalType) {
            newArr[index] = arr[i];
            index++;
        }
    }
    return newArr;
}
// -------------------------- Update Animal  -----------------------
function updateAnimals(id, arr, newAnimal) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            if (arr[i].id !== newAnimal.id)
                throw new Error("the Id must to be the same on the arr");
            else {
                arr[i] = newAnimal;
            }
        }
    }
    return arr;
}
// -------------------------- delete by Id  -----------------------
function deleteByID(id, arr) {
    if (id < 0 || id >= arr.length || null || undefined)
        throw new Error("the id must to be bigger than 0 and lower than " + arr.length);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            return arr.splice(i, 1);
        }
    }
}
// -------------------------- delete by Type  -----------------------
function deleteByType(type, arr) {
    let index = 0;
    let newArr = [{}];
    arr.forEach((animal) => {
        if (animal.type !== type) {
            newArr[index] = animal;
            index++;
        }
    });
    return newArr;
}
const newAnimal = { id: 1, name: "Doggi", age: 15, type: "dog" };
try {
    returnAnimalArrayUpdate(animals, animalTypes.length);
    //updateAnimals(1, animals, newAnimal)
    //console.log(deleteByID(3, animals));
    //console.log(  filterByAnimalType(animals, "dog"));
    //console.log(deleteByType("dog", animals));
}
catch (e) {
    console.error(e);
}
console.log(animals);
