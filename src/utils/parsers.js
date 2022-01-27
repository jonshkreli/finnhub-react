import {getFirstElementDataTimeFormatted, getLastElementDataTimeFormatted} from "./getters";
import {date_and_time_formatter} from "./formatters";

//just a small view. Can also be moved as a total React element
export const xAxisLabelString = (dataArray) => {
    return getFirstElementDataTimeFormatted(dataArray, date_and_time_formatter) + " - " + getLastElementDataTimeFormatted(dataArray, date_and_time_formatter)
}
