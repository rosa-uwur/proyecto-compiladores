ace.define("ace/mode/gta_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
    "use strict";
    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    var gtaHighlightRules = function () {
        var keywords = "chop|trucos|asaltos|armas|policia|mismo|michael|lester|trevor|franklin|encendido|apagado|santos|emboscada|lugar|big|andreas|san|trafico|modo|robo|peligro|buscar|nivel|negocio|ilegal|traficante|vuelo|avion|vender|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|flex-end|flex-start|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom";
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
                    regex: "\\/\\/.*"
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
                    regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|=|#"
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
    oop.inherits(gtaHighlightRules, TextHighlightRules);
    exports.gtaHighlightRules = gtaHighlightRules;

});

ace.define("ace/mode/gta", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/gta_highlight_rules"], function (require, exports, module) {
    "use strict";
    var oop = require("../lib/oop");
    var TextMode = require("./text").Mode;
    var gtaHighlightRules = require("./gta_highlight_rules").gtaHighlightRules;
    var Mode = function () {
        this.HighlightRules = gtaHighlightRules;
        this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    (function () {
        this.lineCommentStart = "*";
        this.$id = "ace/mode/gta";
    }).call(Mode.prototype);
    exports.Mode = Mode;

}); (function () {
    ace.require(["ace/mode/gta"], function (m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();
