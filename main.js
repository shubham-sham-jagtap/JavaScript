let age = [22, 34, 23, 45, 35, 43, 68];
const numberOfPeople = age.length;

for(let i = 0; i <= numberOfPeople; i++) {
    if(age[i] % 2 == 0) {
        console.log(age[i]);
    }
}