let age = [22, 34, 23, 45, 35, 43, 68];
const numberOfPeople = age.length;
let maxNumber = age[0];
for(let i = 0; i <= numberOfPeople; i++) {
    if(age[i] >= maxNumber ) {
        maxNumber = age[i];
    }
}
console.log(maxNumber);