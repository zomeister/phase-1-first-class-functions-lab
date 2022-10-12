
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
    return function (fare) {
        return fareMultiplier * fare;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);



function selectDifferentDrivers(arrayOfDrivers, selection) {
    return selection(arrayOfDrivers);
}
