import {intelligentSortingAndFiltering} from "../utils/filters";
import {chartActionTypes} from "./types";

const initState = {}

const chartReducer = (state = initState, action) => {
    switch (action.type) {
        case chartActionTypes.ADD_DATA:

            const {data, indicesToFetch, timeFrame, period} = action.payload
            // console.log(state, action.payload)

            const stateToUpdate = {}

            for (const key of indicesToFetch) { //[AAPl, BINANCE:BTCUSDT]
                if (data) {
                    const thisIndicesData = data.filter(({s}) => s === key)

                    /*
                    * By using intelligentSortingAndFiltering we make proper arrays of data
                    * Array from stream comes with repeated timestamps and timestamps from the past so we need to have
                    * more organised array
                    * */
                    stateToUpdate[key] = {
                        data: intelligentSortingAndFiltering({
                            currentDataArray: state[key]?.data || [],
                            newPayloadArray: thisIndicesData,
                            timeFrame,
                            period
                        })
                    }
                }
            }

            return {
                ...state,
                ...stateToUpdate
            }
        default:
            return state
    }
}

export default chartReducer;
