(function($) {
    var regions = $.i18n.regions,
        en = $.i18n.defaults,
        standard = en.calendars.standard,
        region = regions["lv-LV"] = $.extend(true, {}, en, {
        name: "lv-LV",
        englishName: "Latvian (Latvia)",
        nativeName: "latviešu (Latvija)",
        language: "lv",
        numberFormat: {
            ',': " ",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': " ",
                '.': ","
            },
            currencies: {'':{
                pattern: ["-$ n","$ n"],
                ',': " ",
                '.': ",",
                symbol: "Ls"
            }}
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                '/': ".",
                firstDay: 1,
                days: {
                    names: ["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"],
                    namesAbbr: ["sv","pr","ot","tr","ce","pk","se"],
                    namesShort: ["sv","pr","ot","tr","ce","pk","se"]
                },
                months: {
                    names: ["janvāris","februāris","marts","aprīlis","maijs","jūnijs","jūlijs","augusts","septembris","oktobris","novembris","decembris",""],
                    namesAbbr: ["jan","feb","mar","apr","mai","jūn","jūl","aug","sep","okt","nov","dec",""]
                },
                monthsGenitive: {
                    names: ["janvārī","februārī","martā","aprīlī","maijā","jūnijā","jūlijā","augustā","septembrī","oktobrī","novembrī","decembrī",""],
                    namesAbbr: ["jan","feb","mar","apr","mai","jūn","jūl","aug","sep","okt","nov","dec",""]
                },
                AM: null,
                PM: null,
                patterns: {
                    d: "yyyy.MM.dd.",
                    D: "dddd, yyyy'. gada 'd. MMMM",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "dddd, yyyy'. gada 'd. MMMM H:mm",
                    F: "dddd, yyyy'. gada 'd. MMMM H:mm:ss",
                    M: "d. MMMM",
                    Y: "yyyy. MMMM",
                    l: "yyyy.MM.dd. H:mm",
                    L: "yyyy.MM.dd. H:mm:ss"
                }
            })
        }
    }, regions["lv-LV"]);
    region.calendar = region.calendars.standard;
    region.numberFormat.currency = region.numberFormat.currencies[''];
})(jQuery);