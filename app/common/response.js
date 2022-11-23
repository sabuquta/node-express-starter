
exports.success = (res, obj = null) => {
    if (obj) {
        res.status(200).send({
            data : obj,
            status : true,
        });
    } else {
        res.status(200).send();
    }
};

exports.error = (res, error, req = {}) => {
    if(error.status){
        res.status(error.status).send({
            code: error.code,
            message: error.message,
            status : false,
            data : {}
        })
    }else {
        res.status(500).send({
            message: error.message,
            status : false,
            data : {}
        })
    }

};
