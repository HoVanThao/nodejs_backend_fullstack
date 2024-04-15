const getHomepage = (req, res) => {
    //process data
    //call model
    res.send('Hello World! vs nodemon!')
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