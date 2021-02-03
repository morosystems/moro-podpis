function getAddress(lokace) {
    if (lokace === "Brno") {
        return 'MoroSystems, Smetanova 1022/19, 602 00 Brno <br />';
    } else if (lokace === "Praha") {
        return 'MoroSystems, Thámova 166/18a, 186 00 Praha 8 - Karlín <br />';
    } else if (lokace === "Bratislava") {
        return 'MoroSystems, Hraničná 18, 821 05 Bratislava  <br />';
    } else if (lokace === "Hradec") {
        return 'MoroSystems,  Vančurovo náměstí 1293/9B, 500 02 Hradec Králové <br />';
        // } else if (lokace === "Popůvky") {
        //     return 'MoroSystems, Nová 147/14, 664 41 Popůvky <br />';
    } else if (lokace === "Francouzská") {
        return 'MoroSystems, Francouzská 421/87, 602 00 Brno <br />';
    }
    return "co tu?";
}


function getObrazek(type) {
    if(type === "Gmail"){
        return "<div style='font-size: 22px;font-family: Arial;font-weight: bold;'><span style='color: #FDBE25;'>MORO</span><span>SYSTEMS</span></div>";
    }else{
        return "<img src='data:image/png;base64,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'/>";
    }
}

function refreshSignature() {
    var name = $("#name").val();
    var pos = $("#pos").val();
    var predvolba = $("#predvolba .val").html();
    var tel = $("#tel").val();
    var email = $("#email").val();
    var skype = $("#skype").val();
    var lokace = $(".locationType.active").contents()[2].textContent.trim();
    var type = $(".signType.active").contents()[2].textContent.trim();
//        var obrazek = $("#obrazek").val();

//        console.log(name, pos, predvolba, tel, email, skype,  lokace);
    saveToLocalStorage(name, pos, predvolba, tel, email, skype, lokace, type);




    var source =
        '<div style="font-family:Arial;font-size:10pt;">' +
        //                (type === "Outlook" || type === "Thunderbird" ? '<span style="color: #E6AE23;">____</span><br /><br />' : '') +
        '   <span style="color: #FDBE25;">____</span><br /><br />' +
        '   <b style="text-transform: uppercase;">' + name + '</b>, ' + pos + '' +
        '   <br />' +
        (tel ? ('<b>Tel</b>: ' + predvolba + ' ' + tel + ', ') : '') +
        '   <b>E-mail</b>: <span style="color:#FDBE25;"><a style="color: #FDBE25 !important; text-decoration:underline;" href="mailto:' + email + '@morosystems.cz"><span style="color: #FDBE25">' + email + '@morosystems.cz</span></a></span>' +
        (skype ? (', <b>Skype</b>: ' + skype + '') : '') +
        '   <br />' +
        '   <br />' +
        getObrazek(type) +
        ((type === "Ostatní") ? '<br />' :  '') +
        ((type === "Ostatní") ? '<br />' :  '') +
        getAddress(lokace) +
        '   <span style="color:#FDBE25;"><a style="color: #FDBE25 !important; text-decoration:underline;" href = "https://morosystems.cz"><span style="color: #FDBE25;">https://morosystems.cz</span></a></span> | ' +
        '   <span style="color:#FDBE25;"><a style="color: #FDBE25 !important; text-decoration:underline;" href = "https://protymy.morosystems.cz"><span style="color: #FDBE25;">https://protymy.morosystems.cz</span></a></span><br /> ' +
        '   <br />' +
        '   Jsme Atlassian Experti!<br />' +
        '   <p>&nbsp;</p>' +
        '</div>';

    $("#signature").html(source);
    $("#source").val(source);
}


function saveToLocalStorage(name, pos, predvolba, tel, email, skype, lokace, type) {
    // console.log("saveToLocalStorage", supports_html5_storage() ? true : false, name, pos, predvolba, tel, email, skype, lokace, type);
    if (supports_html5_storage()) {
        localStorage.setItem("tempData", JSON.stringify({
            name: name,
            pos: pos,
            predvolba: predvolba,
            tel: tel,
            email: email,
            skype: skype,
            lokace: lokace,
            type: type
        }));
    }
}

function loadFromLocalStorage(){
    if (supports_html5_storage()) {
        var data = localStorage.getItem("tempData");
        if(data){
            data = JSON.parse(data);
            $("#name").val(data.name);
            $("#pos").val(data.pos);
            $("#tel").val(data.tel);
            $("#email").val(data.email);
            $("#skype").val(data.skype);
            $("#predvolba .val").html(data.predvolba);

            if(data.lokace){
                $(".locationType").removeClass("active");
                if(data.lokace === "Brno"){
                    $(".locationType:nth-child(1)").addClass("active");
                }else if(data.lokace === "Praha"){
                    $(".locationType:nth-child(2)").addClass("active");
                }else if(data.lokace === "Bratislava"){
                    $(".locationType:nth-child(3)").addClass("active");
                }else if(data.lokace === "Hradec"){
                    $(".locationType:nth-child(4)").addClass("active");
                    // }else if(data.lokace === "Popůvky"){
                    //     $(".locationType:nth-child(5)").addClass("active");
                } else if (data.lokace === "Francouzská") {
                    $(".locationType:nth-child(5)").addClass("active");
                }
            }

            if(data.type){
                $(".signType").removeClass("active");
                if(data.type === "Gmail"){
                    $(".signType:nth-child(1)").addClass("active");
                }else if(data.type === "Ostatní"){
                    $(".signType:nth-child(2)").addClass("active");
                }else{
                    $(".signType:nth-child(2)").addClass("active");
                }
            }

//                var lokace = $(".locationType.active").contents()[2].textContent.trim();
        }
//        console.log("loadFromLocalStorage", data);
    }
}


function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}


//$(document).ready(function () {
function init() {
    $(".inputElem").on("keyup", function () {
        setTimeout(refreshSignature, 0);
    });

    $(".signType").on("click", function () {
        setTimeout(refreshSignature, 0);
    });

    $(".locationType").on("click", function () {
        setTimeout(refreshSignature, 0);
    });

    $(".vyber").click("change", function () {
        $("#predvolba .val").html($(this).find("a").html());
        setTimeout(refreshSignature, 0);
    });

    loadFromLocalStorage();

    setTimeout(refreshSignature, 0);

    $("#version").html(document.lastModified);
    $("#mainDiv").show();
}
//})
