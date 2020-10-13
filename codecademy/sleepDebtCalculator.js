const getSleepHours = day => {

    switch (day){
        case 'Monday':
            return 5;
        case 'Tuesday':
            return 6;
        case 'Wednesday':
            return 5;
        case 'Thursday':
            return 4;
        case 'Friday':
            return 9;
        case 'Saturday':
            return 8;
        case 'Sunday':
            return 6;
        default:
            return 'Try again';
    }
}

const getActualSleepHours = () =>{
    return  getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') +
        getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') +
        getSleepHours('Sunday');
}
console.log(getActualSleepHours());
const getIdealSleepHours = () => {
    let idealHours = 7;
    return idealHours * 7;
}

const calculatSleepDebt = () =>{
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours){
        console.log(`You got the perfect amount of sleep.`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than needed.');
    } else {
        console.log('You should get some rest!');
    }
}

calculatSleepDebt();
