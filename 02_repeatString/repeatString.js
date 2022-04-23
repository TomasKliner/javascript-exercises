const repeatString = function (slovo, cislo) {
    if(cislo<0)return "ERROR"
    let retezec = "";
    for (let i = 0; i < cislo; ++i) retezec += slovo;
    return retezec;
};

// Do not edit below this line
module.exports = repeatString;