// Challenge 1
const greetWorld = () => {
    return 'Hello, World!';
}

console.log(greetWorld());

// Challenge 2
const canIVote = (age) => {
    if (age === 18 || age > 18){
        return true;
    } else {
        return false;
    }
}

console.log(canIVote(19));

// Challenge 3
const agreeOrDisagree = (first, second) => {
    if (first === second) {
        return 'You agree!';
    } else {
        return 'You disagree!';
    }
}

console.log(agreeOrDisagree("yep", "yep"))

// Challenge 4
const lifePhase = (age) => {
    if (age < 0 || age>140){
        return  'Invalid';
    }
}

console.log(lifePhase(0));

// Challenge 5

const lifePhase = (age) => {
    if (age < 0 || age > 140){
        return  'This is not a valid age';
    } else if (age < 4){
        return 'baby';
    } else if (age < 13){
        return 'child';
    } else if (age < 20){
        return 'teen';
    } else if (age < 65){
        return 'adult';
    }  else {
        return 'senior citizen';
    }
}

console.log(lifePhase(13));

// Challenge 6

const finalGrade = (midterm, homework, final) => {
   if ((midterm < 0|| midterm > 100) || (homework < 0 || homework > 100) || (final < 0 || final > 100)){
       return  'You have entered an invalid grade.';
   }
   let averageGrade = (midterm + homework + final) / 3;
   if (averageGrade < 60){
        return 'F';
    } else if (averageGrade < 70){
        return 'D';
    } else if (averageGrade < 80){
        return 'C';
    } else if (averageGrade < 90){
        return 'B'
    } else {
        return 'A';
    }

}

console.log(finalGrade(25, 25, 25));

