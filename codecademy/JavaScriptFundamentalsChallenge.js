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

// Challenge 7

const reportingForDuty = (rank, lastName) =>{
    return `${rank} ${lastName} reporting for duty!`;
}

console.log(reportingForDuty('Elzodxon', 'Elzodxon'));

// Challenge 8
const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 6 + 1);
    let die2 = Math.floor(Math.random() * 6 + 1)
    return die1 + die2;
}

// Challenge 9

const calculateWeight = (earthWeight, planet) => {
    switch (planet){
        case 'Mercury':
            return earthWeight * 0.378;
        case 'Venus':
            return earthWeight * 0.907;
        case 'Mars':
            return earthWeight* 0.377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * 0.916;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }
}

calculateWeight(30, 'Mercury');

// Challenge 10

const truthyOrFalsy = (value) => {

    if (value) {
        return true;
    } else {
        return false;
    }

    // value ?true:false;

}

// Challenge 11

const numImaginaryFriends = (friends) => {
    return Math.round(friends * 0.33);
}

// Challenge 12

const sillySentence = (adj, verb, noun) => {
    return `I am so ${adj} because I ${verb} coding! Time to write some more awesome ${noun}!`;
}

// Challenge 13

const howOld = (age, year) => {
    let currentDate = new Date();
    let thisYear =  currentDate.getFullYear();

    const yearDifference = year - thisYear
    const newAge = age + yearDifference
    if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
}

console.log(howOld(20, 2001));

// Challenge 14

const whatRelation = (percentSharedDNA) => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    } else if (percentSharedDNA > 34) {
        return 'You are likely parent and child or full siblings.'
    } else  if (percentSharedDNA > 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    } else if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.'
    } else if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.'
    } else if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins'
    } else {
        return 'You are likely not related.'
    }
}

console.log(whatRelation(34))
console.log(whatRelation(3))

// Challenge 15

const tipCalculator = (quality, total) => {

    switch (quality){
        case 'bad':
            return total * 0.05;
        case 'ok':
            return total * 0.15;
        case 'good':
            return total * 0.2;
        case 'excellent':
            return total * 0.3;
        default:
            return total * 0.18;
    }
}
console.log(tipCalculator('good', 100))

// Challenge 16

const toEmoticon = (emotion) => {
    switch (emotion){
        case 'shrug':
            return '|_{"}_|';
        case 'smiley face':
            return ':)';
        case 'frowny face':
            return ':(';
        case 'winky face':
            return ';)';
        case 'heart':
            return '<3';
        default:
            return '|_(* ~ *)_|';
    }
}
console.log(toEmoticon("whatever"))
