
//main functions which open the socket connection and send data to reducer
import {chartActionTypes} from "../reducers/types";

const finnhub_token = process.env.REACT_APP_FINNHUB_TOKEN

export const getStocks = async (dispatch, {indicesToFetch, timeFrame, period}) => {
    const socket = new WebSocket(`wss://ws.finnhub.io?token=${finnhub_token}`);

// Connection opened -> Subscribe
    socket.addEventListener('open', function (event) {
        for (const key of indicesToFetch) {
            socket.send(JSON.stringify({'type': 'subscribe', 'symbol': key}))
        }
    });

// Listen for messages
    socket.addEventListener('message', function (event) {
        // console.log('Message from server ', event.data);
        let parsedResponse = {indicesToFetch, timeFrame, period};
        try {
            parsedResponse = {...JSON.parse(event.data), ...parsedResponse};
            // console.log(parsedResponse)
        } catch (e) {
            console.error("Could not parse data")
        }
        dispatch({type: chartActionTypes.ADD_DATA, payload: parsedResponse})
    });

// Unsubscribe future usage
    const unsubscribe = symbol => {
        socket.send(JSON.stringify({'type': 'unsubscribe', 'symbol': symbol}))
    };

}


