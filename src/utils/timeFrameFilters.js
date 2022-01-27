/**
 * Function which receives an array with chart data and return a reduced one with the given parameters
 *
 * @param sortedDataArray {Object[]} - an array sorted by time
 * @param timeFrame {number[]} - The beggining and ending Time in timestamp
 * @param period {number} - Time in timestamp
 * */
export const simpleTimeFilter = (sortedDataArray, timeFrame, period) => {
  let reducedData = []
  let [min, max] = timeFrame
  for (let i = 0; i < sortedDataArray.length; i++) {
    const {t} = sortedDataArray[i]

    //if number is into timeframe continue checking
    if(isNumberBetween(t, min, max)) {
      //if we don't have any element added yet, add it
      if(reducedData.length === 0) {
        reducedData.push(sortedDataArray[i])
      } else { //check if time is necessary to be added depending on period
        const lastDataTime = reducedData[reducedData.length-1]["t"]
        const notAllowedUtil = lastDataTime + period

        //if time is not in period add it to series
        if(!isNumberBetween(t, lastDataTime, notAllowedUtil)) {
          reducedData.push(sortedDataArray[i])
        }
      }
    }
  }

  // console.log(reducedData)
  return reducedData
}


const isNumberBetween = (numberToCheck, min, max) => numberToCheck >= min && numberToCheck <= max
