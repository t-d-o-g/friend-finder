const surveyQuestions = require('../../data/surveyQuestions');

getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
}

randomQuestions = () => {
    let questions = [];
    
    for (key in surveyQuestions) {
        questions.push({
            "factor": key,
            "key": "positive",
            "question": surveyQuestions[key].positive[getRandomInt(5)]
        });
        questions.push({
            "factor": key,
            "key": "negative",
            "question": surveyQuestions[key].negative[getRandomInt(5)]
        });
    }

    return questions;
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
shuffle = arr => {
    let currentIndex = arr.length, tempVal, randIndex;
    
    // while there remains elements to shuffle
    while (0 !== currentIndex) {

        // Pick a remaining element
        randIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element
        tempVal = arr[currentIndex];
        arr[currentIndex] = arr[randIndex];
        arr[randIndex] = tempVal;
    }

    return arr;
}

module.exports = {
    randomQuestions,
    shuffle
}