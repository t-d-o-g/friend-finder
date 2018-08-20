const path = require('path');
const surveyQuestions = require('../data/surveyQuestions');

getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
}

randomizedQuestions = () => {
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
shuffleQuestions = (questions) => {
    let currentIndex = questions.length, tempVal, randIndex;
    
    // while there remains elements to shuffle
    while (0 !== currentIndex) {

        // Pick a remaining element
        randIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element
        tempVal = questions[currentIndex];
        questions[currentIndex] = questions[randIndex];
        questions[randIndex] = tempVal;
    }

    return questions;
}

module.exports = app => {
    app.get('/survey', (req, res) => {
        let questions = shuffleQuestions(randomizedQuestions());
        console.log(questions);

        res.sendFile(path.join(__dirname, '../public/html/survey.html'));
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/html/home.html'));
    });
};
