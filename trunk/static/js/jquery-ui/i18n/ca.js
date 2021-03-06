(function($) {
    var regions = $.i18n.regions,
        en = $.i18n.defaults,
        standard = en.calendars.standard,
        region = regions["ca"] = $.extend(true, {}, en, {
        name: "ca",
        englishName: "Catalan",
        nativeName: "català",
        language: "ca",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                ',': ".",
                '.': ","
            },
            currencies: {'':{
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "€"
            }}
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                firstDay: 1,
                days: {
                    names: ["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],
                    namesAbbr: ["dg.","dl.","dt.","dc.","dj.","dv.","ds."],
                    namesShort: ["dg","dl","dt","dc","dj","dv","ds"]
                },
                months: {
                    names: ["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre",""],
                    namesAbbr: ["gen","feb","març","abr","maig","juny","jul","ag","set","oct","nov","des",""]
                },
                AM: null,
                PM: null,
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, d' / 'MMMM' / 'yyyy",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    f: "dddd, d' / 'MMMM' / 'yyyy HH:mm",
                    F: "dddd, d' / 'MMMM' / 'yyyy HH:mm:ss",
                    M: "dd MMMM",
                    Y: "MMMM' / 'yyyy",
                    l: "dd/MM/yyyy HH:mm",
                    L: "dd/MM/yyyy HH:mm:ss"
                }
            })
        }
    }, regions["ca"]);
    region.calendar = region.calendars.standard;
    region.numberFormat.currency = region.numberFormat.currencies[''];
})(jQuery);