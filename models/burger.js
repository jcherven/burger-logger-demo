const orm = require("../config/orm");

const queryBurger = {
    selectAll: function(callBackFn){
        orm.selectAll("burgers", function(response){
            callBackFn(response);
        });
    },
    insertNew: function(colInput, valInput, callBackFn) {
        orm.insertNew("burgers", colInput, valInput, function(response){
            callBackFn(response);
        });
    },
    updateOne: function(colInput, valInput, recordId, callBackFn){
        orm.insertNew("burgers", colInput, valInput, recordId, function(response){
            callBackFn(response);
        });
    }
};

module.exports = queryBurger;