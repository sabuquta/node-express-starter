const moment = require('moment');
const ROLES = require('../common/constants').ROLES;

module.exports = function (sequelize, DataTypes) {
    let User = exports.userSchema = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        full_name: {
            type: DataTypes.STRING
        },
        mobile: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        image: DataTypes.STRING,
        blocked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        gender: DataTypes.INTEGER,
        date_of_birth: DataTypes.DATEONLY,
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        latitude: {
            type: DataTypes.DECIMAL(18, 12)
        },
        longitude: {
            type: DataTypes.DECIMAL(18, 12)
        }
    }, {
        paranoid: true,
        deletedAt: 'deleted_at'
    });

    User.prototype.toJSON = function () {
        let values = this.get();
        delete values.password;
        return values;
    };
    //
    // User.prototype.toPublicJSON = function () {
    //     let values = this.get();
    //
    //     if (values['s3_id']) {
    //         let url = process.env.S3_DOMAIN + process.env.S3_USERS_FOLDER + values['s3_id'] + '-thumb1.jpeg'
    //         values['image_url'] = url
    //     } else {
    //         values['image_url'] = null
    //     }
    //
    //     return {
    //         user_id: values.user_id,
    //         full_name: values.full_name,
    //         image_url: values.image_url,
    //     };
    // };


    User.associate = function (models) {
        User.belongsTo(models.roles, {foreignKey: 'role_id', allowNull: false});
        // User.belongsTo(models.countries, {foreignKey: 'country_id', allowNull: false});
        // User.hasOne(models.billing_details, {foreignKey: 'user_id', allowNull: false, as: 'billing_details'});
    };

    return User;
};
