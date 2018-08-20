const friends = require('../data/friends');
const survey = require('../public/js/survey');

module.exports = app => {
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
        res.json('post post');
    });

    app.get('/api/survey', (req, res) => {
        let questions = survey.shuffle(survey.randomQuestions());
        res.json(questions);
    });
};