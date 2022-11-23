const i18n = require('i18n');

module.exports = function (sequelize, DataTypes) {
    const Role = sequelize.define('roles', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        role_name_ar: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role_name_en: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});

    // Role.prototype.toJSON = function () {
    //     let values = this.get();
    //     values['role_name'] = (i18n.getLocale() === 'en') ? values['role_name_en'] : values['role_name_ar'];
    //
    //     delete values.role_name_en;
    //     delete values.role_name_ar;
    //     delete values.created_at;
    //     delete values.updated_at;
    //
    //     return values;
    // };

    Role.associate = function (models) {
    };


    return Role;
};
