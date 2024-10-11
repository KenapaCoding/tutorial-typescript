"use strict";
function processData(data, callback) {
    data.forEach(callback);
}
function logItem(item) {
    console.log(item * 2);
}
processData([1, 2, 3, 4, 5], (item) => {
    console.log(item * 2);
});
