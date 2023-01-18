const moment = require("moment");
const _ = require("lodash");
exports.getPurePayload = async (body) => {
    let payload = {};
    Object.keys(body).map(key => {
        if(body[key].date && !_.isEmpty(body[key].item)){
            payload[key] = moment.unix(body[key].item / 1000).format("YYYY/MM/DD");
            console.log(payload[key]);
        } else {
            payload[key] = body[key].item || null
        }
    })
    return payload;
};