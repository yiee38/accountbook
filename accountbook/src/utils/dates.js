export const dateConverter = (date) => {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
}

export const handleNewDate = (newValue) => {
    return dateConverter(newValue);
}