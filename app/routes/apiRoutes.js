const friends = require('../data/friends');
const survey = require('../public/js/surveyController');

module.exports = app => {
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
        const parsedData = JSON.stringify({
            id: parseInt(req.body.id),
            name: req.body.name,
            img: req.body.img,
            factors: {
                neuroticism: parseInt(req.body.factors.neuroticism),
                extraversion: parseInt(req.body.factors.extraversion),
                openness: parseInt(req.body.factors.openness),
                agreeableness: parseInt(req.body.factors.agreeableness),
                conscientiousness: parseInt(req.body.factors.conscientiousness)
            } 
        });

        const unparsedData = JSON.parse(parsedData);
        console.log('data', unparsedData);
        friends.push(unparsedData);
        res.status(201).end();
    });

    app.get('/api/survey', (req, res) => {
        let questions = survey.shuffle(survey.randomQuestions());
        res.json(questions);
    });
};