(function () {
    console.log("Hello WebPack");
    if (process.env.NODE_ENV === 'production') {
        console.log('Production log');
    }
    if (process.env.NODE_ENV === 'development') {
        console.log('Looks like we are in development mode!');
    }
})();