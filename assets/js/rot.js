function emDecrypt(s) {
    var n = 0;
    var r = "";
    for (var i = 0; i < s.length; i++) {
        n = s.charCodeAt(i);
        if (n >= 8364) {
            n = 128;
        }
        r += String.fromCharCode(n - 1);
    }
    return r;
}

function linkToEm(s) {
    location.href = emDecrypt(s);
}

$(document).ready(() => {
    $(".em-decrypt").each(function() {
        $(this).text(emDecrypt(emCode));
        $(this).removeClass("em-decrypt");
    });
});