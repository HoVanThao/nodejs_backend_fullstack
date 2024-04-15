const connection = require('../config/database')

const getHomepage = (req, res) => {
    //process data
    //call model

    let users = [];
    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            users = results;
            console.log(">>> results home page = ", results);
            console.log(">>> check users ", users);
            res.send(JSON.stringify(users));
        }
    );

}

const getABC = (req, res) => {
    res.send('check abc')
}

const getHoVanThao = (req, res) => {
    // res.send('<h1> Ho Van Thao </h1>')
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, getHoVanThao
}