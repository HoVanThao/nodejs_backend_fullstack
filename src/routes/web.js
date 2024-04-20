const express = require('express')
const { getHomepage, postCreateUser, getCreatePage } = require('../controllers/homeController')
const router = express.Router()

//route.Method('/route', handler)


// thay vi sử lý như thế này thì ta sử lý như dưới router.get('/', getHomepage) thì sẽ ổn vì đã chuyển đoan sữ lý sang controller
// router.get('/abc', (req, res) => {
//     res.send('check abc')
// })
router.get('/', getHomepage)

router.get('/create', getCreatePage)

router.post('/create-user', postCreateUser)

module.exports = router //export default
