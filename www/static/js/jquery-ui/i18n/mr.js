(function($) {
    var regions = $.i18n.regions,
        en = $.i18n.defaults,
        standard = en.calendars.standard,
        region = regions["mr"] = $.extend(true, {}, en, {
        name: "mr",
        englishName: "Marathi",
        nativeName: "मराठी",
        language: "mr",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                groupSizes: [3,2]
            },
            currencies: {'':{
                pattern: ["$ -n","$ n"],
                groupSizes: [3,2],
                symbol: "रु"
            }}
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                '/': "-",
                firstDay: 1,
                days: {
                    names: ["रविवार","सोमवार","मंगळवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],
                    namesAbbr: ["रवि.","सोम.","मंगळ.","बुध.","गुरु.","शुक्र.","शनि."],
                    namesShort: ["र","स","म","ब","ग","श","श"]
                },
                months: {
                    names: ["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोव्हेंबर","डिसेंबर",""],
                    namesAbbr: ["जाने.","फेब्रु.","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टें.","ऑक्टो.","नोव्हें.","डिसें.",""]
                },
                AM: ["म.पू.","म.पू.","म.पू."],
                PM: ["म.नं.","म.नं.","म.नं."],
                patterns: {
                    d: "dd-MM-yyyy",
                    D: "dd MMMM yyyy",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    f: "dd MMMM yyyy HH:mm",
                    F: "dd MMMM yyyy HH:mm:ss",
                    M: "dd MMMM",
                    l: "dd-MM-yyyy HH:mm",
                    L: "dd-MM-yyyy HH:mm:ss"
                }
            })
        }
    }, regions["mr"]);
    region.calendar = region.calendars.standard;
    region.numberFormat.currency = region.numberFormat.currencies[''];
})(jQuery);