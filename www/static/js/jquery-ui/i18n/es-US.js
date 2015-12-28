(function($) {
    var regions = $.i18n.regions,
        en = $.i18n.defaults,
        standard = en.calendars.standard,
        region = regions["es-US"] = $.extend(true, {}, en, {
        name: "es-US",
        englishName: "Spanish (United States)",
        nativeName: "Español (Estados Unidos)",
        language: "es",
        numberFormat: {
            groupSizes: [3,0],
            percent: {
                groupSizes: [3,0]
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                days: {
                    names: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
                    namesAbbr: ["dom","lun","mar","mié","jue","vie","sáb"],
                    namesShort: ["do","lu","ma","mi","ju","vi","sa"]
                },
                months: {
                    names: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],
                    namesAbbr: ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""]
                },
                eras: [{"name":"d.C.","start":null,"offset":0}],
                patterns: {
                    M: "dd' de 'MMMM",
                    Y: "MMMM' de 'yyyy"
                }
            })
        }
    }, regions["es-US"]);
    region.calendar = region.calendars.standard;
    region.numberFormat.currency = region.numberFormat.currencies[''];
})(jQuery);