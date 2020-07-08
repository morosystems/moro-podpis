window.preloadedFiles = [
    "./app/jquery/jquery-1.11.2.min.js",
    "./app/bootstrap/css/bootstrap.min.css",
    "./app/bootstrap/js/bootstrap.min.js",
    "./app/myScript.js?v=" + (new Date().getTime())
];

window.preloadOnComplete = function () {
    init();
};
