"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"]
    .get(url)
    .then(function (response) {
    var _a = response.data, id = _a.id, title = _a.title, completed = _a.completed;
    logTodo(id, title, completed);
})["catch"](function (err) { return console.log(err); });
function logTodo(id, title, finished) {
    console.log(id + " " + title + " " + finished);
}
