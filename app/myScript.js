function addSpacesAfterEachThirdCharacter(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function getAnimatedGif() {
        return '<img src="https://www.morosystems.cz/email/Signature_minifided.gif" alt="Slavíme 15 let" />';
}

function getFacebookLink() {
    return '<a href="https://www.facebook.com/MoroSystems">' +
      '<img src="https://www.morosystems.cz/email/facebook-icon.png" alt="Facebook" width="24px" />' +
      '</a>'
}

function getLinkedInLink() {
    return '<a href="https://www.linkedin.com/company/morosystems">' +
      '<img src="https://www.morosystems.cz/email/linkedin-icon.png" alt="LinkedIn" width="24px" />' +
      '</a>'
}

function refreshSignature() {
    var name = $("#name").val();
    var pos = $("#pos").val();
    var predvolba = $("#predvolba .val").html();
    var tel = $("#tel").val();
    var email = $("#email").val();
    var skype = $("#skype").val();
    var type = $(".signType.active").contents()[2].textContent.trim();

    saveToLocalStorage(name, pos, predvolba, tel, email, skype, type);

    var source =
        '<div style="font-family: Arial;font-size:10pt;color: #424242;">' +
      '   <br />' +
        '   <b style="font-weight: 600">' + name + '</b><br /> ' + pos + '' +
        '   <br />' +
      '<div style="margin-top: 5px"></div>' +
        '   <span style="color:#424242;"><a style="color: #424242 !important; text-decoration:underline;" href="mailto:' + email + '@morosystems.cz"><span style="color: #424242">' + email + '@morosystems.cz</span></a></span>' +
        '   <br />' +
        (tel ? (predvolba + ' ' + addSpacesAfterEachThirdCharacter(tel)) : '') +
        (skype ? (', <b>Skype</b>: ' + skype + '') : '') +
      '<div style="margin-top: 10px"></div>' +
      '   <span style="color:#424242;"><a style="color: #424242 !important; text-decoration:underline;font-weight: 800;" href="https://www.morosystems.cz"><span style="color: #424242;">www.morosystems.cz</span></a></span>' +
      '<div style="margin-top: 10px"></div>' +
      ' <a href="https://blog.morosystems.cz/2021-11/zivot-v-morosystems/v-morosystems-slavime-15-let-zacinali-jsme-jako-parta-kamaradu-dnes-je-nas-130/?utm_source=signature&utm_medium=email&utm_campaign=moro15">' +
        getAnimatedGif() +
         '</a>' +
        '<br />' +
        '<br />' +
        '<span style="margin-right: 4px; line-height: 26px; vertical-align: text-top; color: #787878;">Sledujte nás</span> ' +
        getLinkedInLink() +
        '<span style="margin-left: 5px"></span>' +
        getFacebookLink() +
        '</div>';

    $("#signature").html(source);
    $("#source").val(source);
}


function saveToLocalStorage(name, pos, predvolba, tel, email, skype, type) {
    // console.log("saveToLocalStorage", supports_html5_storage() ? true : false, name, pos, predvolba, tel, email, skype, lokace, type);
    if (supports_html5_storage()) {
        localStorage.setItem("tempData", JSON.stringify({
            name: name,
            pos: pos,
            predvolba: predvolba,
            tel: tel,
            email: email,
            skype: skype,
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
