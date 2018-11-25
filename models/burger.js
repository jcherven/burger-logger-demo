var orm = require("../config/orm");

var queryBurger = {
    selectAll: function (callBack){
        orm.selectAll("burgers", function(res){
            callBack(res);
        });
    },
    insertNew: function(colInput, valInput, callBack) {
        orm.insertNew("burgers", colInput, valInput, function(res) {
            callBack(res);
        });
    },
    updateOne: function(colInput, valInput, recordId, callBack){
        orm.insertNew("burgers", colInput, valInput, recordId, function(res){
            callBack(res);
        });
    }
};

module.exports = queryBurger;