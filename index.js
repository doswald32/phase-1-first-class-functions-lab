const returnFirstTwoDrivers = function(array) {
    let newArray = array.slice(0, 2);
    return newArray;
}

const returnLastTwoDrivers = function (array) {
    let newArray = array.slice(-2);
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    const fareQuintupler = multiplier => fare * multiplier;
    return fareQuintupler;
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, drivers) {
    let newArray = drivers(arrayOfDrivers);
    return newArray;
}