const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('home.ejs');

}

const postCreateUser = async (req, res) => {

    // connection.query(
    //     `INSERT INTO Users(email, name, city) VALUES (?, ?, ?)`,
    //     [req.body.email, req.body.name, req.body.city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('them moi thanh cong')
    //     }
    // )

    let [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city) VALUES (?, ?, ?)`, [req.body.email, req.body.name, req.body.city]
    )
    console.log('>>> check result: ', results);
    res.send('them moi thanh cong')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

// const getABC = (req, res) => {
//     res.send('check abc')
// }

// const getHoVanThao = (req, res) => {
//     res.render('sample.ejs')
// }

module.exports = {
    getHomepage, postCreateUser, getCreatePage
}