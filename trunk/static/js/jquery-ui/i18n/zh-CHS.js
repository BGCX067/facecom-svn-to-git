(function($) {
    var regions = $.i18n.regions,
        en = $.i18n.defaults,
        standard = en.calendars.standard,
        region = regions["zh-CHS"] = $.extend(true, {}, en, {
        name: "zh-CHS",
        englishName: "Chinese (Simplified) Legacy",
        nativeName: "中文(简体) 旧版",
        language: "zh-CHS",
        numberFormat: {
            percent: {
                pattern: ["-n%","n%"]
            },
            currencies: {'':{
                pattern: ["$-n","$n"],
                symbol: "¥"
            }}
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                days: {
                    names: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
                    namesAbbr: ["周日","周一","周二","周三","周四","周五","周六"],
                    namesShort: ["日","一","二","三","四","五","六"]
                },
                months: {
                    names: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],
                    namesAbbr: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]
                },
                AM: ["上午","上午","上午"],
                PM: ["下午","下午","下午"],
                eras: [{"name":"公元","start":null,"offset":0}],
                patterns: {
                    d: "yyyy/M/d",
                    D: "yyyy'年'M'月'd'日'",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "yyyy'年'M'月'd'日' H:mm",
                    F: "yyyy'年'M'月'd'日' H:mm:ss",
                    M: "M'月'd'日'",
                    Y: "yyyy'年'M'月'",
                    l: "yyyy/M/d H:mm",
                    L: "yyyy/M/d H:mm:ss"
                }
            })
        }
    }, regions["zh-CHS"]);
    region.calendar = region.calendars.standard;
    region.numberFormat.currency = region.numberFormat.currencies[''];
})(jQuery);