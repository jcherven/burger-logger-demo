var orm = require("../config/orm");

var queryBurger = {
    selectAll: function (callBack){
        orm.selectAll("burgers", function(res){
            callBack(res);
        });
    },
    insertOne: function(tableInput, colInput, valInput, callBack){
        orm.insertOne(tableInput, colInput, valInput, function(res){
            callBack(res);
        });
    }
};

module.exports = queryBurger;