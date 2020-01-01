const HOSTNAME = "localhost";
const PROTO = "https";
const BASE_URL = PROTO + "://" + HOSTNAME + ":443/api";
const CATEGORIES_URL = BASE_URL + '/categories';
const ORDER_URL = BASE_URL + "/orders";
const CHAT_URL = "wss://" + HOSTNAME + ":443/chat";

export default {BASE_URL, CATEGORIES_URL, ORDER_URL, CHAT_URL};
