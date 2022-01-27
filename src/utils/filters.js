import {simpleTimeFilter} from "./timeFrameFilters";

/**
 * Function which sorts the incoming data by time and also keep only some results because there are several
 * duplicated results. It returns the actual array of data merged with the new array of data which is sorted and don't
 * have more than one result for a period of time (determined by period)
 * */
export const intelligentSortingAndFiltering = ({currentDataArray, newPayloadArray, timeFrame, period}) => {
    // console.log(currentDataArray, newPayloadArray)
    if(currentDataArray[0]) {
        newPayloadArray = newPayloadArray.filter(a => a.t > currentDataArray[0].t)
    }
    newPayloadArray = newPayloadArray.sort((a, b) => a.t > b.t)
    newPayloadArray = simpleTimeFilter([...currentDataArray, ...newPayloadArray], timeFrame, period)
    return newPayloadArray
}
