<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/layout.css">
    <style>
        body {
            margin: 1rem auto;
            padding: 2rem;
            font-family: "Poppins";
        }

        h1.title {
            font-size: 14rem;
            line-height: 1.1;
            margin-top: 6rem;
            color: white;
            text-transform: uppercase;
            margin-left: -10rem;
            text-shadow: 0 0 8px #666;
            font-weight: 900;
        }

        h2 {
            font-size: 2.5rem;
        }

        h3 {
            font-size: 2rem;
        }

        input[type="color"] {
            width: 100%;
            height: 120px;
            padding: 0;
            border: 2px solid black;
            background: transparent;
            margin: 0;
            border-radius: 17px;
            cursor: pointer;
        }

        .color-box, .gradient-box {
            width: 100%;
            height: 120px;
        }

        .n-wrapper {
            padding: 0.2rem;
        }

        .n-card {
            margin: 0.5rem;
            margin-left: -0.2rem;
            background: white;
        }

        .n-card:hover {
            box-shadow: 0 0 10px #ccc;
        }

        .n-card-body h3 {
            text-align: center;
            font-size: 1.2rem;
        }

        .n-card-body p {
            display: flex;
            justify-content: space-between;
        }

        div.contrast-text p, div.contrasting-text p {
            text-align: center;
            font-size: 1.4rem;
            font-weight: bold;
        }

        .contrast-text, .contrasting-text {
            margin-bottom: 1rem;
            border-color: black;
        }
    </style>
</head>

<body class="wrapper">

    <h2>Color Operations</h2>

    <h3>Calculate Contrast</h3>

    <div class="n-flex n-flex-aw-1234">
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="contrast-text n-round-x4 n-border-x2"><p>Hello, Bob!</p></div>
                <div class="gradient-box n-round-x5 n-border-x2 contrast"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex-one"></p>
                    <p class="hex-two"></p>
                    <p class="contrast-val"></p>
                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="contrast-text n-round-x4 n-border-x2"><p>Hello, Bob!</p></div>
                <div class="gradient-box n-round-x5 n-border-x2 contrast">
                </div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex-one"></p>
                    <p class="hex-two"></p>
                    <p class="contrast-val"></p>
                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="contrast-text n-round-x4 n-border-x2"><p>Hello, Bob!</p></div>
                <div class="gradient-box n-round-x5 n-border-x2 contrast">
                </div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex-one"></p>
                    <p class="hex-two"></p>
                    <p class="contrast-val"></p>
                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="contrast-text n-round-x4 n-border-x2"><p>Hello, Bob!</p></div>
                <div class="gradient-box n-round-x5 n-border-x2 contrast">
                </div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex-one"></p>
                    <p class="hex-two"></p>
                    <p class="contrast-val"></p>
                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="contrast-text n-round-x4 n-border-x2"><p>Hello, Bob!</p></div>
                <div class="gradient-box n-round-x5 n-border-x2 contrast">
                </div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex-one"></p>
                    <p class="hex-two"></p>
                    <p class="contrast-val"></p>
                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="contrast-text n-round-x4 n-border-x2"><p>Hello, Bob!</p></div>
                <div class="gradient-box n-round-x5 n-border-x2 contrast">
                </div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex-one"></p>
                    <p class="hex-two"></p>
                    <p class="contrast-val"></p>
                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="contrast-text n-round-x4 n-border-x2"><p>Hello, Bob!</p></div>
                <div class="gradient-box n-round-x5 n-border-x2 contrast">
                </div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex-one"></p>
                    <p class="hex-two"></p>
                    <p class="contrast-val"></p>
                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="contrast-text n-round-x4 n-border-x2"><p>Hello, Bob!</p></div>
                <div class="gradient-box n-round-x5 n-border-x2 contrast">
                </div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex-one"></p>
                    <p class="hex-two"></p>
                    <p class="contrast-val"></p>
                </div>
            </div>
        </div>
    </div>

    <h3>Contrasting Colors</h3>

    <div class="n-flex n-flex-aw-1234">
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="contrasting-text n-round-x4 n-border-x2"><p>Hello, Bob!</p></div>
                <div class="gradient-box n-round-x5 n-border-x2 contrasting-color"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex-one"></p>
                    <p class="hex-two"></p>
                    <p class="contrast-val"></p>
                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="contrasting-text n-round-x4 n-border-x2"><p>Hello, Bob!</p></div>
                <div class="gradient-box n-round-x5 n-border-x2 contrasting-color"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex-one"></p>
                    <p class="hex-two"></p>
                    <p class="contrast-val"></p>
                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="contrasting-text n-round-x4 n-border-x2"><p>Hello, Bob!</p></div>
                <div class="gradient-box n-round-x5 n-border-x2 contrasting-color"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex-one"></p>
                    <p class="hex-two"></p>
                    <p class="contrast-val"></p>
                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="contrasting-text n-round-x4 n-border-x2"><p>Hello, Bob!</p></div>
                <div class="gradient-box n-round-x5 n-border-x2 contrasting-color"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex-one"></p>
                    <p class="hex-two"></p>
                    <p class="contrast-val"></p>
                </div>
            </div>
        </div>
    </div>

    <h2>Generate Random Colors</h2>

    <h3>Random Hex Colors</h3>

    <div class="n-flex n-flex-aw-1234">
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-hex"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-hex"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-hex"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-hex"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-hex"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-hex"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-hex"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-hex"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
    </div>

    <h3>Random Pastel Colors</h3>

    <div class="n-flex n-flex-aw-1234">
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-pastel"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-pastel"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-pastel"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-pastel"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-pastel"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-pastel"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-pastel"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-pastel"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
    </div>

    <h3>Random Preferred Colors</h3>

    <div class="n-flex n-flex-aw-1234">
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-prefer"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-prefer"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-prefer"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-prefer"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-prefer"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-prefer"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-prefer"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-prefer"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-prefer"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-prefer"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-prefer"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 random-prefer"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
    </div>


    <h2>Generate Color Palette</h2>

    <h3>Set Original Color</h3>

    <div class="n-flex n-flex-aw-1234">
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <input class="color-box n-round-x5 n-border-x2 color-input" type="color">
                <div class="n-card-body">
                    <h3 class="operation">Input Color</h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>
                </div>
            </div>
        </div>
    </div>

    <!-- <input id="color-input" type="color"> -->

    <h3>Adjust Brightness</h3>

    <div class="n-flex n-flex-aw-1234">
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-brightness"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-brightness"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-brightness"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-brightness"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-brightness"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-brightness"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-brightness"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-brightness"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-brightness"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-brightness"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-brightness"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
    </div>

    <h3>Adjust Saturation</h3>

    <div class="n-flex n-flex-aw-1234">
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-saturation"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-saturation"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-saturation"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-saturation"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-saturation"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-saturation"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-saturation"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-saturation"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-saturation"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-saturation"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 adjust-saturation"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>

    </div>

    <h3>Hue Rotation</h3>

    <div class="n-flex n-flex-aw-1234">
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 rotate-hue"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 rotate-hue"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 rotate-hue"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>
                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 rotate-hue"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 rotate-hue"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 rotate-hue"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 rotate-hue"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 rotate-hue"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 rotate-hue"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 rotate-hue"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 rotate-hue"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>

    </div>

    <h3>Complementary Color</h3>

    <div class="n-flex n-flex-aw-1234">
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 complementary"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
    </div>

    <h3>Inverse Color</h3>

    <div class="n-flex n-flex-aw-1234">
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 inverse"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
    </div>

    <h3>Monochromatic Colors</h3>

    <div class="n-flex n-flex-aw-1234">
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 monochromatic"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 monochromatic"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 monochromatic"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 monochromatic"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 monochromatic"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>

    </div>

    <h3>Analogous Colors</h3>

    <div class="n-flex n-flex-aw-1234">
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 analogous"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 analogous"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
    </div>

    <h3>Triad Colors</h3>

    <div class="n-flex n-flex-aw-1234">
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 triad"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 triad"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
    </div>

    <h3>Square Colors</h3>

    <div class="n-flex n-flex-aw-1234">
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 square"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 square"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 square"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
    </div>

    <h3>Rectangle Colors</h3>

    <div class="n-flex n-flex-aw-1234">
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 rectangle"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper"> 
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 rectangle"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
        <div class="n-wrapper">
            <div class="n-card n-bshadow n-round-x5 n-oxsw-75">
                <div class="color-box n-round-x5 n-border-x2 rectangle"></div>
                <div class="n-card-body">
                    <h3 class="operation"></h3>
                    <p class="hex"></p>
                    <p class="rgb"></p>
                    <p class="hsl"></p>

                </div>
            </div>
        </div>
    </div>

    <h3></h3>
    <script src="colorful.js"></script>
    <script>

        // let pastelColors = [];

        // while(pastelColors.length < 10) {
        //     pastelColors.push(Colorful.getRandomPastelColor());

        //     console.log(pastelColors);
        // }

        // let gradientString = `linear-gradient(30deg, `;

        // for(pastelColor of pastelColors) {
        //     gradientString += `${pastelColor}33, `;
        // }

        // gradientString += ` ${pastelColors[0]}33)`;

        // document.body.style.background = gradientString;

        let colorHex = Colorful.getRandomHexColor();

        colorHex = '#FF0';

        let color = new Colorful(colorHex);
        const colorInputElem = document.querySelector('.color-input');
        colorInputElem.value = colorHex;

        updateCardColorText(colorInputElem, colorHex);

        colorInputElem.addEventListener('change', function(event) {
            const newHexColor = event.target.value;
            updateColorAndPalette(newHexColor);
        });

        updateColorAndPalette(color.hex);

        function updateColorAndPalette(newHex) {

            color.hex = newHex;

            console.log(color.r);

            let complBox = document.querySelector(".complementary");
            let inverseElem = document.querySelector(".inverse");
            let analogousElems = document.querySelectorAll(".analogous");
            let triadElems = document.querySelectorAll(".triad");
            let squareElems = document.querySelectorAll(".square");
            let rectangleElems = document.querySelectorAll(".rectangle");
            let monochromaticElems = document.querySelectorAll(".monochromatic");
            let adjustBrightness = document.querySelectorAll(".adjust-brightness");
            let adjustSaturation = document.querySelectorAll(".adjust-saturation");
            let hueRotation = document.querySelectorAll(".rotate-hue");

            let randomHexElems = document.querySelectorAll(".random-hex");
            let randomPastelElems = document.querySelectorAll(".random-pastel");
            let randomPreferElems = document.querySelectorAll(".random-prefer");

            let contrastElems = document.querySelectorAll(".contrast");
            let contrastTextElems = document.querySelectorAll(".contrast-text");

            let contrastingColorElems = document.querySelectorAll(".contrasting-color");
            let contrastingTextElems = document.querySelectorAll(".contrasting-text");

            let colorHex = color.complementary;
            complBox.style.background = colorHex;
            complBox.nextElementSibling.querySelector("h3").innerText = `Complementary`;

            updateCardColorText(complBox, colorHex);

            colorHex = color.inverse;
            inverseElem.style.background = colorHex;
            inverseElem.nextElementSibling.querySelector("h3").innerText = `Inverse`;
            updateCardColorText(inverseElem, colorHex);

            let idx = 0;

            for (let i = -100; i <= 100; i += 20) {
                let colorHex = color.adjustBrightness(i);
                adjustBrightness[idx].style.background = colorHex;
                adjustBrightness[idx].nextElementSibling.querySelector("h3").innerText = `Brightness (${i}%)`;
                updateCardColorText(adjustBrightness[idx], colorHex);

                idx += 1;
            }

            idx = 0;
            for (let i = -100; i <= 100; i += 20) {
                let colorHex = color.adjustSaturation(i);
                adjustSaturation[idx].style.background = colorHex;

                adjustSaturation[idx].nextElementSibling.querySelector("h3").innerText = `Saturation (${i}%)`;
                updateCardColorText(adjustSaturation[idx], colorHex);

                idx += 1;
            }

            idx = 0;
            for (let i = 30; i < 360; i += 30) {
                let colorHex = color.rotateHue(i);
                hueRotation[idx].style.background = colorHex;

                hueRotation[idx].nextElementSibling.querySelector("h3").innerText = `Rotation (${i}deg)`;
                updateCardColorText(hueRotation[idx], colorHex);


                idx += 1;
            }

            idx = 0;

            let analogousColors = color.analogous;
            for (analog of analogousElems) {
                let colorHex = analogousColors[idx];
                analog.style.background = colorHex;

                analog.nextElementSibling.querySelector("h3").innerText = `Analogous (${idx + 1})`;
                updateCardColorText(analog, colorHex);

                idx += 1;
            }

            idx = 0;

            for (randomHexElem of randomHexElems) {
                let colorHex = Colorful.getRandomHexColor();
                randomHexElem.style.background = colorHex;

                randomHexElem.nextElementSibling.querySelector("h3").innerText = `Random Hex (${idx + 1})`;
                updateCardColorText(randomHexElem, colorHex);

                idx += 1;
            }

            idx = 0;

            for (randomPastelElem of randomPastelElems) {
                let colorHex = Colorful.getRandomPastelColor();
                randomPastelElem.style.background = colorHex;

                randomPastelElem.nextElementSibling.querySelector("h3").innerText = `Random Hex (${idx + 1})`;
                updateCardColorText(randomPastelElem, colorHex);

                idx += 1;
            }

            idx = 0;

            for (randomPreferElem of randomPreferElems) {

                let colorHex;

                if(idx < 4) {
                    colorHex = Colorful.getRandomPreferredColor('reddish');
                }

                if(idx >= 4 && idx < 8) {
                    colorHex = Colorful.getRandomPreferredColor('greenish');
                }

                if(idx >= 8 && idx < 12) {
                    colorHex = Colorful.getRandomPreferredColor('bluish');
                }

                randomPreferElem.style.background = colorHex;

                randomPreferElem.nextElementSibling.querySelector("h3").innerText = `Preferred (${idx + 1})`;
                updateCardColorText(randomPreferElem, colorHex);

                idx += 1;
            }

            idx = 0;
            let triadColors = color.triad;
            for (triad of triadElems) {
                let colorHex = triadColors[idx];
                triad.style.background = colorHex;

                triad.nextElementSibling.querySelector("h3").innerText = `Square (${idx + 1})`;
                updateCardColorText(triad, colorHex);

                idx += 1;
            }

            idx = 0;

            let contrastColors = ['#000000', '#FFFFFF', color.complementary, color.inverse, ...color.triad, ...color.splitComplementary];
            let contrastColorsTitle = ['Black', 'White', 'Complementary', 'Inverse', 'Triad (1)', 'Triad (2)', 'Analogous (1)', 'Analogous(2)'];

            for (contrastElem of contrastElems) {
                let colorHex = contrastColors[idx];
                contrastElem.style.background = `linear-gradient(90deg, ${color.hex} 50%, ${contrastColors[idx]} 50%)`;

                contrastTextElems[idx].style.background = color.hex;
                contrastTextElems[idx].style.color = contrastColors[idx];

                contrastElem.nextElementSibling.querySelector("h3").innerText = contrastColorsTitle[idx];
                updateCardGradientText(contrastElem, [color.hex, colorHex]);

                idx += 1;
            }

            idx = 0;

            for (contrastElem of contrastingColorElems) {

                let colorHex = color.getContrastingColor(4.52);

                contrastElem.style.background = `linear-gradient(90deg, ${color.hex} 50%, ${colorHex} 50%)`;

                contrastingTextElems[idx].style.background = color.hex;
                contrastingTextElems[idx].style.color = colorHex;

                contrastElem.nextElementSibling.querySelector("h3").innerText = `Contrasting Color ${idx+1}`;

                updateCardGradientText(contrastElem, [color.hex, colorHex]);

                idx += 1;
            }

            idx = 0;
            let squareColors = color.square;
            for (square of squareElems) {
                let colorHex = squareColors[idx];
                square.style.background = colorHex;

                square.nextElementSibling.querySelector("h3").innerText = `Square (${idx + 1})`;
                updateCardColorText(square, colorHex);

                idx += 1;
            }

            idx = 0;
            let rectangleColors = color.rectangle;
            for (rectangle of rectangleElems) {
                let colorHex = rectangleColors[idx];
                rectangle.style.background = colorHex;

                rectangle.nextElementSibling.querySelector("h3").innerText = `Rectangle (${idx + 1})`;
                updateCardColorText(rectangle, colorHex);

                idx += 1;
            }

            idx = 0;
            let monochromaticColors = color.monochromatic;
            for (monochromatic of monochromaticElems) {
                let colorHex = monochromaticColors[idx];
                monochromatic.style.background = colorHex;

                monochromatic.nextElementSibling.querySelector("h3").innerText = `Monochromatic (${idx + 1})`;
                updateCardColorText(monochromatic, colorHex);

                idx += 1;
            }
        }


        function updateCardColorText(element, colorHex) {

            let hexP = element.nextElementSibling.querySelector(".hex");
            let rgbP = element.nextElementSibling.querySelector(".rgb");
            let hslP = element.nextElementSibling.querySelector(".hsl");

            let color = new Colorful(colorHex);

            hexP.innerHTML = `<span class="bg-black tc-white s-lr-pad-x2">HEX</span> <span>${color.hex}</span>`;
            rgbP.innerHTML = `<span class="bg-black tc-white s-lr-pad-x2">RGB</span> <span>rgb(${color.rgb})</span>`;
            hslP.innerHTML = `<span class="bg-black tc-white s-lr-pad-x2">HSL</span> <span>hsl(${color.hsl})</span>`;

        }

        function updateCardGradientText(element, colorHexes) {

            let hexOne = element.nextElementSibling.querySelector(".hex-one");
            let hexTwo = element.nextElementSibling.querySelector(".hex-two");
            let contrastVal = element.nextElementSibling.querySelector(".contrast-val");

            hexOne.innerHTML = `<span class="bg-black tc-white s-lr-pad-x2">HEX #1</span> <span>${colorHexes[0]}</span>`;
            hexTwo.innerHTML = `<span class="bg-black tc-white s-lr-pad-x2">HEX #2</span> <span>${colorHexes[1]}</span>`;
            contrastVal.innerHTML = `<span class="bg-black tc-white s-lr-pad-x2">Contrast</span> <span>${color.getContrast(colorHexes[1])}</span>`;

        }
    </script>
</body>

</html>