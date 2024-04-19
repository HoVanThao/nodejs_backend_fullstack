const connection = require('../config/database')

const getHomepage = (req, res) => {
    // //process data
    // //call model

    // let users = [];
    // connection.query(
    //     'SELECT * FROM Users u',
    //     function (err, results, fields) {
    //         users = results;
    //         console.log(">>> results home page = ", results);
    //         console.log(">>> check users ", users);
    //         res.send(JSON.stringify(users));
    //     }
    // );

    return res.render('home.ejs');

}

const getABC = (req, res) => {
    res.send('check abc')
}

const getHoVanThao = (req, res) => {
    // res.send('<h1> Ho Van Thao </h1>')
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {

    connection.query(
        `INSERT INTO Users(email, name, city) VALUES (?, ?, ?)`,
        [req.body.email, req.body.name, req.body.city],
        function (err, results) {
            console.log(results);
            res.send('them moi thanh cong')
        }

    );

    res.send('tao moi thanh cong')
}

module.exports = {
    getHomepage, getABC, getHoVanThao, postCreateUser
}