const express = require('express')
const { getHomepage, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeteleUser, postHandleRemoveUser } = require('../controllers/homeController')
const router = express.Router()

//route.Method('/route', handler)


// thay vi sử lý như thế này thì ta sử lý như dưới router.get('/', getHomepage) thì sẽ ổn vì đã chuyển đoan sữ lý sang controller
// router.get('/abc', (req, res) => {
//     res.send('check abc')
// })
router.get('/', getHomepage)

router.get('/create', getCreatePage)

router.get('/update/:id', getUpdatePage)

router.post('/create-user', postCreateUser)

router.post('/update-user', postUpdateUser)

router.post('/delete-user/:id', postDeteleUser)

router.post('/delete-user', postHandleRemoveUser)

module.exports = router //export default
