/**
 * Here we are trying to format timestamps which taken from objects that we receive from socket stream.
 * These are helper functions which ae used in other helper functions.
 * In both cases "formatter" parameter is a function which formats timestamp into readable time
 * */

export const getFirstElementDataTimeFormatted = (array, formatter) => {
  return formatter(array[0].t)
}

export const getLastElementDataTimeFormatted = (array, formatter) => {
  return formatter(array[array.length-1].t)
}


