const SET_ITEM = 'SET_ITEM';
const GET_ITEM = 'GET_ITEM';

function setItem(item) {
    return {
        type: SET_ITEM,
        item,
    }
}

function getItem() {
    return {
        type: GET_ITEM,
    }
}