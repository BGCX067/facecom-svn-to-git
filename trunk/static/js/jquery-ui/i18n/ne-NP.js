(function($) {
    var regions = $.i18n.regions,
        en = $.i18n.defaults,
        standard = en.calendars.standard,
        region = regions["ne-NP"] = $.extend(true, {}, en, {
        name: "ne-NP",
        englishName: "Nepali (Nepal)",
        nativeName: "नेपाली (नेपाल)",
        language: "ne",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,2]
            },
            currencies: {'':{
                pattern: ["-$n","$n"],
                symbol: "रु"
            }}
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                days: {
                    names: ["आइतवार","सोमवार","मङ्गलवार","बुधवार","बिहीवार","शुक्रवार","शनिवार"],
                    namesAbbr: ["आइत","सोम","मङ्गल","बुध","बिही","शुक्र","शनि"],
                    namesShort: ["आ","सो","म","बु","बि","शु","श"]
                },
                months: {
                    names: ["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जून","जुलाई","अगस्त","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर",""],
                    namesAbbr: ["जन","फेब","मार्च","अप्रिल","मे","जून","जुलाई","अग","सेप्ट","अक्ट","नोभ","डिस",""]
                },
                AM: ["विहानी","विहानी","विहानी"],
                PM: ["बेलुकी","बेलुकी","बेलुकी"],
                eras: [{"name":"a.d.","start":null,"offset":0}],
                patterns: {
                    Y: "MMMM,yyyy"
                }
            })
        }
    }, regions["ne-NP"]);
    region.calendar = region.calendars.standard;
    region.numberFormat.currency = region.numberFormat.currencies[''];
})(jQuery);