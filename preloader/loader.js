NProgress.start();

var preload = new createjs.LoadQueue();
preload.addEventListener("complete", handleFileComplete);
preload.addEventListener("progress", handleProgress);

for(var i = 0; i < window.preloadedFiles.length; i++){
    preload.loadFile(window.preloadedFiles[i], false);
}

delete window.preloadedFiles;
preload.load();

function handleFileComplete() {
    NProgress.done();
    var callback = window.preloadOnComplete;
    delete window.preloadOnComplete;
    callback();
}

function handleProgress(event) {
    NProgress.set(event.progress);
}


