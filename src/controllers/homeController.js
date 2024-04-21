const connection = require('../config/database')
const { getAllUsers, updateUserById, getUserById, deleteUserById, createUsers } = require('../services/CRUDservices')

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    console.log('>>> check result: ', results);
    return res.render('home.ejs', { listUsers: results });

}

const getUpdatePage = async (req, res) => {

    let user = await getUserById(req.params.id);

    return res.render('edit.ejs', { userEdit: user });

}


const postCreateUser = async (req, res) => {

    await createUsers(req.body.email, req.body.name, req.body.city);
    res.redirect('/')
}

const postUpdateUser = async (req, res) => {


    await updateUserById(req.body.email, req.body.name, req.body.city, req.body.userId);

    console.log('>>> check result: ', req.body.userId, req.body.email, req.body.name, req.body.city);
    res.redirect('/');
}

const postDeteleUser = async (req, res) => {
    let user = await getUserById(req.params.id);
    res.render('detele.ejs', { userEdit: user });
}

const getCreatePage = (req, res) => {
    return res.render('create.ejs')

}

const postHandleRemoveUser = async (req, res) => {

    await deleteUserById(req.body.userId);
    res.redirect('/')
}

module.exports = {
    getHomepage, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeteleUser, postHandleRemoveUser
}