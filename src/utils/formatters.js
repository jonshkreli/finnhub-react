export const timeFormat = (dateTime) => {
    const date = new Date(dateTime);
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

export const dateFormat = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleDateString();
}

export const date_and_time_formatter= (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleString ();
}
