function logCookies() {
    if (document.cookie == "")
        return;
    var cookieArray = document.cookie.split(/\s*;\s*/);
    var cookieObj = {};
    var parts;
    for (var i = 0 ; i < cookieArray.length; i++) {
        parts = cookieArray[i].split("=");
        cookieObj[parts[0]]=parts[1];
    }
    Object.keys(cookieObj).sort().forEach(function (key) {
        console.log(key + "=" + cookieObj[key]);
    });
}

function deleteCookie(name) {
    var domain = window.location.host;
    document.cookie=name+"=; expires=Fri, 3 Aug 2001 20:47:11 UTC; path=/";
    /*
        I've seen some cookies e.g. on politiken.dk that require both domain
        and .domain to be deleted too
    */
    document.cookie=name+"=;domain=" + domain +
        ";expires=Fri, 3 Aug 2001 20:47:11 UTC; path=/";
    document.cookie=name+"=;domain=." + domain +
        ";expires=Fri, 3 Aug 2001 20:47:11 UTC; path=/";
}

function deleteAllCookies() {
    var cookieArray = document.cookie.split(/\s*;\s*/);
    var parts;
    for (var i = 0 ; i < cookieArray.length; i++) {
        parts = cookieArray[i].split("=");
        console.log("erasing", parts[0]);
        deleteCookie(parts[0]);
    }
}

deleteAllCookies();
