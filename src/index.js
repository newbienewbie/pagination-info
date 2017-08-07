
/**
 * 用于计算页码信息的帮助函数
 */
export function calculatePaginationInfo(totalRecords=10,pageSize=10,currentPage=1,semiBandWidth=5){
    if(totalRecords==0){
        return {
            totalRecords:0, totalPages:0, current:1, pageSize, semiBandWidth, 
            firstPage:0, lastPage:0, previous:0, next:0, firstDigit:0, lastDigit:0, 
            arraySize:0, array:[], shouldDisplay:false,
        };
    }

    let totalPages=Math.ceil(totalRecords/pageSize);
    let firstPage=1;
    let lastPage=totalPages;

    currentPage= currentPage<firstPage ? firstPage : currentPage;
    currentPage= currentPage>lastPage  ? lastPage  : currentPage;

    let previousPage=currentPage-1;
    let nextPage=currentPage+1;
    previousPage=previousPage>0?previousPage:1;
    nextPage=nextPage>totalPages?totalPages:nextPage;

    let firstDigit=currentPage-semiBandWidth;
    firstDigit=firstDigit>0?firstDigit:1;
    let lastDigit=currentPage+semiBandWidth; 
    lastDigit=lastDigit>lastPage?lastPage:lastDigit;

    const arraySize=lastDigit-firstDigit+1;
    let array=[];
    for(let i=0;i<arraySize;i++){
        const page=i+firstDigit ;
        array.push(page);
    }
    let shouldDisplay=true;
    if(array.length<2){
        shouldDisplay=false;
    }

    return {
        totalRecords,
        totalPages,
        current:currentPage,
        pageSize,
        semiBandWidth,
        firstPage:1,
        lastPage:lastPage,
        previous:previousPage,
        next:nextPage,
        firstDigit:firstDigit,
        lastDigit:lastDigit,
        arraySize,
        array,
        shouldDisplay,
    };
};


export default calculatePaginationInfo;