const friends = require('../data/friends');

module.exports = app => {
    app.get('/api/friends', (req, res) => {
        res.json('get friends');
    });

    app.post('/api/friends', (req, res) => {
        res.json('post post');
    });
};