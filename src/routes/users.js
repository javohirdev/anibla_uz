const express = require('express');

const { getUser ,
        getUsers ,
        deleteUser
    } = require('../controllers/users');
const router = express.Router();

router
    .route('/')
    .get(getUsers);

router
    .route('/:id')
    .get(getUser)
    .delete(deleteUser);

module.exports = router;