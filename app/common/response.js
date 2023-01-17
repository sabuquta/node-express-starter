
exports.success = (res, obj = null, message) => {
        res.status(200).send({
            data : obj,
            status : true,
            message : message
        });
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
