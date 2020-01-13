for (var i = 0; i <= 100; i++) {
    if ( i % 3 === 0 && i % 5 === 0 ) {
        document.write('Thirty five <br/>');
    } else if (i%3 === 0) {
        document.write("Three <br/>");
    } else if (i%5 === 0){
        document.write("Five <br/>")
    } else{
        document.write(i + '<br/>');
    }
}