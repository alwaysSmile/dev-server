//************
// //supervisor и отладчик debugger
// //http://127.0.0.1:1337/echo?message=Hello -> Hello
//
// //supervisor - модуль, который отслеживает все файлы директории
// //и, как только что-то меняется - перезапускает node.js
// //Мы находимся в папке server-supervisor, чтобы установить supervisor на текущий проект, нужно:
// //1. перейти в cmd (cd WebstormProjects затем cd dev-server)
// //2. npm i -g supervisor
// //3. теперь вместо node server.js пишем supervisor server.js
// // (теперь при каждом изменении файла в cmd будет фиксироваться изменения)
// //! Чтобы запустить в Webstorm:
// //1. Открыть 'Edit Configurations'
// //2. Выбрать путь в node interpreter:
// // а) Нажать Add...
// // б) C:\Users\asus\AppData\Roaming\npm\supervisor.cmd
//
// var http = require('http');
// var url = require('url');
//
// var server = http.createServer();
//
// server.on('request', function (req, res) {
//     var urlParsed = url.parse(req.url, true);
//     debugger;//встроенный отладчик, который вызывается командой node debug server.js, он останавливает скрипт
//     //Шаг 1. После остановки нужно написать в cmd - cont - это продолжит скрипт
//
//     if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message) {
//         res.end(urlParsed.query.message);
//         return;
//     }
//
//     res.statusCode = 404;
//     res.end('Page no found')
// });
//
// server.listen(1337, '127.0.0.1');
// console.log('Server is running');
//
// //Шаг 2. Теперь в браузере введём http://127.0.0.1:1337/, после этого
// //происходит событие 'request' и запускается обработчик
// //выполнение остановилось на команде debugger;
// //Шаг 3. далее переходим в режим выполнения команд - repl
// //и для примера выясняем, что такое urlParsed,
// //также, к примеру запустить что-то: res.end("sdfds") -> в браузере sdfds
//************
//************
//Отладка под браузером Chrome
//для этого нужно установить утилиту node инспектор
//npm i -g node-inspector
//Шаг 1. node-inspector - это web-server, к которому можно подсоединиться
//я буду пересылать команды web-server-у, а node-inspector будет транслировать node,
//которая слушает протокол отладки(используя язык отладки v8)
var http = require('http');
var url = require('url');

var server = http.createServer();

server.on('request', function (req, res) {
    var urlParsed = url.parse(req.url, true);
    debugger;//встроенный отладчик, который вызывается командой node debug server.js, он останавливает скрипт
    //Шаг 1. После остановки нужно написать в cmd - cont - это продолжит скрипт

    if (req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message) {
        res.end(urlParsed.query.message);
        return;
    }

    res.statusCode = 404;
    res.end('Page no found')
});

server.listen(1337, '127.0.0.1');
console.log('Server is running');
//************

