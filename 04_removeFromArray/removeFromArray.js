const removeFromArray = function (arr, ...other_args) {
    for (let j = 0; j < other_args.length; j++) {
        for (var i = 0; i < arr.length; i++) {

            if (arr[i] === other_args[j]) { //=== removes onlz same value and type of value as

                arr.splice(i, 1);
            }

        }
    }
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;