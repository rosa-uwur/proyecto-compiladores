ace.define("ace/mode/Eevee_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
    "use strict";
    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    var EeveeHighlightRules = function () {
        var keywords = "roca|agua|acero|fuego|bicho|onix|onyx|combee|objects|" +
            "slow|king|pikachu|pika|chispa|klink|klang|entei|master|" +
            "poke|super|ultra|movimiento|grunido|mordisco|ditto|ecl|eclosion|eclosión|contraataque|" +
            "slow|king|antidoto|veneno";
        var builtinConstants = ("true|false|null");
        var builtinFunctions = ("count|min|max|avg|sum|rank|now|coalesce|main");
        var keywordMapper = this.createKeywordMapper({
            "support.function": builtinFunctions,
            "keyword": keywords,
            "constant.language": builtinConstants
        }, "identifier", true);
        this.$rules = {
            "start": [
                {
                    token: "comment",
                    regex: "\\$\\$.*$"
                },
                {
                    token: "string", // " string
                    regex: '".*?"'
                },
                {
                    token: "string", // ' string
                    regex: "'.*?'"
                },
                {
                    token: "constant.numeric", // float
                    regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
                },
                {
                    token: keywordMapper,
                    regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                },
                {
                    token: "keyword.operator",
                    regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
                },
                {
                    token: "paren.lparen",
                    regex: "[\\(\\[{]"
                },
                {
                    token: "paren.rparen",
                    regex: "[\\)\\]}]"
                },
                {
                    token: "keyword.operator",
                    regex: ";"
                },
                {
                    token: "text",
                    regex: "\\s+"
                }
                
            ]
        };
    };
    oop.inherits(EeveeHighlightRules, TextHighlightRules);
    exports.EeveeHighlightRules = EeveeHighlightRules;

});

ace.define("ace/mode/Eevee", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/Eevee_highlight_rules"], function (require, exports, module) {
    "use strict";
    var oop = require("../lib/oop");
    var TextMode = require("./text").Mode;
    var EeveeHighlightRules = require("./Eevee_highlight_rules").EeveeHighlightRules;
    var Mode = function () {
        this.HighlightRules = EeveeHighlightRules;
        this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function () {
        this.lineCommentStart = "*";
        this.$id = "ace/mode/Eevee";
    }).call(Mode.prototype);
    exports.Mode = Mode;

}); (function () {
    ace.require(["ace/mode/Eevee"], function (m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();
