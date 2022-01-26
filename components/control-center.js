// control center
AFRAME.registerComponent("control-center", {
    schema: {},
    init: function () {
        // scene objects - SCREEN TEXT
        const screenPrinterText1 = document.getElementById("js--screen-text-printer-1");
        const screenPrinterText2 = document.getElementById("js--screen-text-printer-2");
        const screenControlCenterText = document.getElementById("js--screen-text-control-center");
        const bigMonitorText = document.getElementById("js--big-monitor-text");
        // scene objects - DESK TEXT
        const deskPrintersText = document.getElementById("js--desk-printers-text");
        const deskControlCenterText = document.getElementById("js--desk-control-center-text");
        // scene objects - BUTTONS
        const buttonPrinter1 = document.getElementById("js--desk-printers-button-1");
        const buttonPrinter2 = document.getElementById("js--desk-printers-button-2");
        const buttonControlCenter = document.getElementById("js--desk-control-center-button");
        // scene objects - PRINTER TEXT
        const printerText1 = document.getElementById("js--printer-text-1");
        const printerText2 = document.getElementById("js--printer-text-2");

        // vars
        let printersOn = []; // array met printers die aan zijn
        let controlCenterOn = false; // true als de control center aan is
        let percentageOperational = 0; // percentage van printers die aan zijn

        // zet een printer aan bij klik op 1 vd control center knoppen
        const turnPrinterOn = (el) => {
            if (el === buttonPrinter1) {
                printerText1.setAttribute("text", { value: "STAAT AAN" });
                printerText1.setAttribute("text", { color: "#1fff31" });
            } else if (el === buttonPrinter2) {
                printerText2.setAttribute("text", { value: "STAAT AAN" });
                printerText2.setAttribute("text", { color: "#1fff31" });
            }
        };

        // deze functie wordt aangeroepen als je op 1 vd desk knoppen drukt
        // parameters: de knop, bijbehorende text, en text value
        const turnOn = (elBtn, elTxt, txt) => {
            // als controlcenter uit staat kan je de printers niet aan zetten
            if (controlCenterOn || elBtn === buttonControlCenter) {
                controlCenterOn = true;

                // zorgt dat alleen de control center button de andere knoppen van kleur kan veranderen
                if (elBtn === buttonControlCenter) {
                    // on startup boot up screens
                    screenPrinterText1.setAttribute("visible", true);
                    screenPrinterText2.setAttribute("visible", true);
                    buttonPrinter1.setAttribute("color", "red");
                    buttonPrinter2.setAttribute("color", "red");
                    deskPrintersText.setAttribute("text", { color: "red" });
                    bigMonitorText.setAttribute("visible", true);
                }

                // verandert kleur van tekst en button en animeert de knop
                deskControlCenterText.setAttribute("text", { color: "green" });
                elBtn.setAttribute("color", "green");
                elBtn.setAttribute("height", "0.4");
                setTimeout(() => {
                    elBtn.setAttribute("height", "1");
                }, 250);
                elTxt.setAttribute("text", { value: txt });
                elTxt.setAttribute("text", { color: "green" });

                // als een printer knop wordt ingedrukt, voeg printer toe aan printers die aan staan array
                if (elBtn === buttonPrinter1 || elBtn === buttonPrinter2) {
                    printersOn.push(elBtn);
                    turnPrinterOn(elBtn);
                }

                // als er 1 printer aan staat, voeg percentage van 50 toe aan operationeel percentage
                if ([...new Set(printersOn)].length === 1 && percentageOperational < 50) {
                    percentageOperational += 50;
                    bigMonitorText.setAttribute("text", {
                        value: `${percentageOperational}% OPERATIONEEL`,
                    });
                }

                if ([...new Set(printersOn)].length === 2) {
                    // als er 2 printers aan staan, verander desk text kleur
                    // info: new Set geeft unieke waardes terug van een array, voorkomt 2x dezelfde knop drukken
                    // info: ... is spread operator, maakt van een array een nieuwe array + wat er binnen komt
                    deskPrintersText.setAttribute("text", { color: "green" });
                    if (percentageOperational < 100) {
                        percentageOperational += 50;
                        bigMonitorText.setAttribute("text", {
                            value: `${percentageOperational}% OPERATIONEEL`,
                        });
                        bigMonitorText.setAttribute("text", { color: "green" });
                    }
                }
            }
        };

        // desk buttons event listeners
        buttonPrinter1.addEventListener("click", () => {
            turnOn(buttonPrinter1, screenPrinterText1, "PRINTER 1: AAN");
        });

        buttonPrinter2.addEventListener("click", () => {
            turnOn(buttonPrinter2, screenPrinterText2, "PRINTER 2: AAN");
        });

        buttonControlCenter.addEventListener("click", () => {
            turnOn(buttonControlCenter, screenControlCenterText, "CONTROL CENTER: AAN");
        });
    },
});
