window.preloadedFiles = [
    "./app/jquery/jquery-1.11.2.min.js",
    "./app/bootstrap/css/bootstrap.min.css",
    "./app/bootstrap/js/bootstrap.min.js",
    "./app/myScript.js?v=1.2.1"
];

window.preloadOnComplete = function(){
    init();
};
