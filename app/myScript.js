function addSpacesAfterEachThirdCharacter(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function getLogo(isOrchestra = false) {
    return isOrchestra
        ? '<a style="text-decoration:none;" href="https://www.morosystems.cz/"><img src="https://i.ibb.co/XDqf2ch/Orchestra-logo-grad-h-color.png" width="238" alt="Orchestra Morosystems" /></a>'
        : '<a style="text-decoration:none;" href="https://orchestra.morosystems.cz"><img src="https://www.morosystems.cz/email/morosystems-logo-email-signature-1.png" width="238" alt="Morosystems" /></a>';
}

function getWebsite(isOrchestra = false) {
    return isOrchestra
        ? '<a style="color: #424242 !important;font-weight: 800;" href="https://orchestra.morosystems.cz"><span style="color: #424242;">orchestra.morosystems.cz</span></a>'
        : '<a style="color: #424242 !important;font-weight: 800;" href="https://www.morosystems.cz"><span style="color: #424242;">www.morosystems.cz</span></a>';
}

function getFacebookLink(isOrchestra = false) {
    return isOrchestra ? "" : ('<a href="https://www.facebook.com/MoroSystems">' +
      '<img src="https://www.morosystems.cz/email/facebook-logo-dark.png" alt="Facebook" width="24px" />' +
      '</a>') ;
}

function getLinkedInLink(isOrchestra = false) {
    return (isOrchestra ? '<a href="https://www.linkedin.com/company/morosystems">' : '<a href="https://www.linkedin.com/company/morosystems-orchestra/">') +
      '<img src="https://www.morosystems.cz/email/linkedin-logo-dark.png" alt="LinkedIn" width="24px" />' +
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
    var company = $(".company.active").contents()[2].textContent.trim();
    let isOrchestra = company === "Orchestra";

    saveToLocalStorage(name, pos, predvolba, tel, email, skype, type, company);

    var source =
        '<div style="font-family: Arial;font-size:10pt;color: #424242;">' +
      '   <br />' +
        '   <b style="font-weight: 600">' + name + '</b><br /> ' + pos + '' +
        '   <br />' +
        '   <br />' +
      '<div style="margin-top: 0px;color:#424242;"></div>' +
        '   <a style="text-decoration:none;color: #424242 !important;" href="mailto:' + email + '@morosystems.cz"><span style="color: #424242">' + email + '@morosystems.cz</span></a>' +
        '   <br />' +
        (tel ? (predvolba + ' ' + addSpacesAfterEachThirdCharacter(tel)) : '') +
        (skype ? (', <b>Skype</b>: ' + skype + '') : '') +
      '<br />' +
      '   <div style="margin-top: 10px;color:#424242;">' + getWebsite(isOrchestra) + '</div>' +
        '<br />' +
        getFacebookLink(isOrchestra) +
        (isOrchestra ? "" : '<span style="margin-left: 5px"></span>')  +
        getLinkedInLink() +
        '<br />' +
        '<br />' +
        getLogo(isOrchestra) +
        '</div>';

    $("#signature").html(source);
    $("#source").val(source);
}


function saveToLocalStorage(name, pos, predvolba, tel, email, skype, type, company) {
    // console.log("saveToLocalStorage", supports_html5_storage() ? true : false, name, pos, predvolba, tel, email, skype, lokace, type);
    if (supports_html5_storage()) {
        localStorage.setItem("tempData", JSON.stringify({
            name: name,
            pos: pos,
            predvolba: predvolba,
            tel: tel,
            email: email,
            skype: skype,
            type: type,
            company: company
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

            if (data.type) {
                $(".signType").removeClass("active");
                if(data.type === "Gmail"){
                    $(".signType:nth-child(1)").addClass("active");
                }else if(data.type === "Ostatní"){
                    $(".signType:nth-child(2)").addClass("active");
                }else{
                    $(".signType:nth-child(2)").addClass("active");
                }
            }

            if (data.company) {
                $(".company").removeClass("active");
                if(data.company === "Morosystems"){
                    $(".company:nth-child(1)").addClass("active");
                }else if(data.company === "Orchestra"){
                    $(".company:nth-child(2)").addClass("active");
                }else{
                    $(".company:nth-child(2)").addClass("active");
                }
            }

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

    $(".company").on("click", function () {
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
