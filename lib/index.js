"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculatePaginationInfo = calculatePaginationInfo;

/**
 * 用于计算页码信息的帮助函数
 */
function calculatePaginationInfo() {
    var totalRecords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var currentPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var semiBandWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;

    if (totalRecords == 0) {
        return {
            totalRecords: 0, totalPages: 0, current: 1, pageSize: pageSize, semiBandWidth: semiBandWidth,
            firstPage: 0, lastPage: 0, previous: 0, next: 0, firstDigit: 0, lastDigit: 0,
            arraySize: 0, array: [], shouldDisply: false
        };
    }

    var totalPages = Math.ceil(totalRecords / pageSize);
    var firstPage = 1;
    var lastPage = totalPages;

    currentPage = currentPage < firstPage ? firstPage : currentPage;
    currentPage = currentPage > lastPage ? lastPage : currentPage;

    var previousPage = currentPage - 1;
    var nextPage = currentPage + 1;
    previousPage = previousPage > 0 ? previousPage : 1;
    nextPage = nextPage > totalPages ? totalPages : nextPage;

    var firstDigit = currentPage - semiBandWidth;
    firstDigit = firstDigit > 0 ? firstDigit : 1;
    var lastDigit = currentPage + semiBandWidth;
    lastDigit = lastDigit > lastPage ? lastPage : lastDigit;

    var arraySize = lastDigit - firstDigit + 1;
    var array = [];
    for (var i = 0; i < arraySize; i++) {
        var page = i + firstDigit;
        array.push(page);
    }
    var shouldDisply = true;
    if (array.length == 0) {
        shouldDisply = false;
    }

    return {
        totalRecords: totalRecords,
        totalPages: totalPages,
        current: currentPage,
        pageSize: pageSize,
        semiBandWidth: semiBandWidth,
        firstPage: 1,
        lastPage: lastPage,
        previous: previousPage,
        next: nextPage,
        firstDigit: firstDigit,
        lastDigit: lastDigit,
        arraySize: arraySize,
        array: array,
        shouldDisply: shouldDisply
    };
};

exports.default = calculatePaginationInfo;