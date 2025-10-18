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
    var ancs = document.querySelectorAll(".em-decrypt");
    for (k in ancs) {
        ancs[k].innerText = emDecrypt(emCode);
        ancs[k].classList.remove("em-decrypt");
    }
}
);