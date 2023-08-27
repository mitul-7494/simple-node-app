const express = require("express");
const cont = require("./controll");

const router = express.Router();

router
    .get('/form',cont.form)
    .post('/',cont.postdata)
    .get('/users',cont.getdata)
    .get('/',cont.red);

exports.router = router;

const baserouter = express.Router();

baserouter
    .get('/',cont.red)
    .post('/',cont.red);

exports.baserouter = baserouter;