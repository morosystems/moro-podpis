<?php
?>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="preloader/lib/ngprogress.css" />
    <script src="preloader/lib/preloadjs-0.4.1.min.js"></script>
    <script src="preloader/lib/ngprogress.js"></script>
    <script src="preloadConfig.js"></script>

    <title>MoroPodpis</title>
    <style type="text/css" rel="stylesheet">
        .radek {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <script src="preloader/loader.js"></script>

    <div style="margin: 10px;display: none;" id="mainDiv">
        <div style="width: 500px; float: left;" class="panel panel-default">
            <div class="panel-body">
                <input type="text" class="form-control radek inputElem" id="name" placeholder="Jméno">
                <input type="text" class="form-control radek inputElem" id="pos" placeholder="Pozice">

                <div class="input-group radek">
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
                                aria-expanded="false" id="predvolba"><span class="val">+420</span> <span
                                class="caret"></span></button>
                        <ul class="dropdown-menu" role="menu">
                            <li class="vyber cz"><a href="#">+420</a></li>
                            <li class="vyber sk"><a href="#">+421</a></li>
                        </ul>
                    </div>
                    <!-- /btn-group -->
                    <input type="text" class="form-control inputElem" placeholder="Telefon" id="tel">
                </div>
                <div class="input-group radek">
                    <input type="text" class="form-control inputElem" placeholder="Email" id="email">
                    <span class="input-group-addon">@morosystems.cz</span>
                </div>
                <input type="text" class="form-control radek inputElem" placeholder="Skype" id="skype">
                <div class="btn-group radek" data-toggle="buttons">
                    <label class="btn btn-primary locationType active">
                        <input type="radio" autocomplete="off" checked> Brno
                    </label>
                    <label class="btn btn-primary locationType">
                        <input type="radio" autocomplete="off"> Praha
                    </label>
                    <label class="btn btn-primary locationType">
                        <input type="radio" autocomplete="off"> Bratislava
                    </label>
                    <label class="btn btn-primary locationType">
                        <input type="radio" autocomplete="off"> Hradec
                    </label>
<!--                    <label class="btn btn-primary locationType">-->
<!--                        <input type="radio" autocomplete="off"> Popůvky-->
<!--                    </label>-->
                    <label class="btn btn-primary locationType">
                        <input type="radio" autocomplete="off"> Francouzská
                    </label>
                </div>
                <div class="btn-group radek" data-toggle="buttons">
                    <label class="btn btn-primary signType active">
                        <input type="radio" autocomplete="off" checked> Gmail
                    </label>
                    <label class="btn btn-primary signType">
                        <input type="radio" autocomplete="off"> Ostatní
                    </label>
                </div>
            </div>
        </div>
        <div style="width: 600px; float: left; margin-left: 10px;" class="panel panel-default">
            <div class="panel-body">
                <textarea id="source" style="width: 100%; height: 150px;"></textarea>

                <div id="signature"></div>
            </div>
        </div>
    </div>
</body>
</html>

