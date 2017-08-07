
calculate pagination infomation according to  total records ,pagesize, and current page number

the core function :
```JavaScript
function calculatePaginationInfo(totalRecords=10,pageSize=10,currentPage=1,semiBandWidth=5)
```

return a object:
```JSON
{
    totalRecords,
    totalPages,
    current:currentPage,
    pageSize,
    semiBandWidth,
    firstPage:1,
    lastPage:lastPage,
    previous:previousPage,
    next:nextPage,
    firstDigit,
    lastDigit,
    arraySize, 
    array,          // array of page number : [firstDigit,LastDigit]
    shouldDisply,   // should dispaly pagination ( when the length of array is less than 2 )
}
```