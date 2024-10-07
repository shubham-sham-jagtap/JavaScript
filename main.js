let personeName = ["Shubham", "Sakshi", "Aditya", "Om", "Vivek"];
let personeGender = ["male", "female", "male", "male", "male"];
let numberOfPersones = personeName.length;

for (let i = 0; i < numberOfPersones; i++) {
    if(personeGender[i] == "male") {
        console.log(personeName[i] + " is male");
    } else {
        console.log(personeName[i] + " is female");
    }
}