/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr - Travel' });
};

module.exports = {
    travel
};  