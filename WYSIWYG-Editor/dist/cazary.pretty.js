"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
}; /*! Cazary (jQuery 1.7+) - JavaScript WYSIWYG editor (https://github.com/shimataro/cazary) */
! function(e) {
    "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" === _typeof(module.exports) ? module.exports = e(require("jquery"), window) : e(jQuery, window)
}(function(e, t, r) {
    var a = t.document,
        n = function() {
            function e() {
                var e = a().toLowerCase(),
                    t = n[e];
                return t !== r ? t : (e = e.split("-")[0], t = n[e], t !== r ? t : {})
            }

            function a() {
                try {
                    var e = t.navigator;
                    return e.browserLanguage || e.language || e.userLanguage
                } catch (e) {
                    return r
                }
            }
            var n = {
                    ja: {
                        Font: "フォント",
                        Size: "サイズ",
                        Bold: "太字",
                        Italic: "斜体",
                        Underline: "下線",
                        "Strike-Through": "打ち消し線",
                        "Remove Format": "書式をクリア",
                        "Foreground Color": "文字色",
                        "Background Color": "背景色",
                        Superscript: "上付き文字",
                        Subscript: "下付き文字",
                        "Justify Left": "左揃え",
                        "Justify Center": "中央揃え",
                        "Justify Right": "右揃え",
                        "Justify Full": "両端揃え",
                        Indent: "字下げ",
                        Outdent: "字下げ解除",
                        "Ordered List": "番号付きリスト",
                        "Unordered List": "箇条書き",
                        "Horizontal Rule": "横線",
                        "Insert Image": "画像挿入",
                        "Insert Link": "リンク挿入",
                        Undo: "元に戻す",
                        Redo: "やり直し",
                        "Show Source": "HTMLソース表示",
                        "Size 1": "サイズ1",
                        "Size 2": "サイズ2",
                        "Size 3": "サイズ3",
                        "Size 4": "サイズ4",
                        "Size 5": "サイズ5",
                        "Size 6": "サイズ6",
                        "Size 7": "サイズ7",
                        "Input image URL": "画像URLを入力してください",
                        "Input link URL or E-mail address": "リンク先URLまたはメールアドレスを入力してください",
                        Preview: "プレビュー",
                        Insert: "挿入",
                        Unlink: "リンク解除"
                    },
                    pl: {
                        Font: "Czcionka",
                        Size: "Rozmiar",
                        Bold: "Pogrubienie",
                        Italic: "Kursywa",
                        Underline: "Podkreślenie",
                        "Strike-Through": "Przekreślenie",
                        "Remove Format": "Usuń formatowanie",
                        "Foreground Color": "Kolor czcionki",
                        "Background Color": "Kolor tła",
                        Superscript: "Indeks górny",
                        Subscript: "Indeks dolny",
                        "Justify Left": "Wyrównanie do lewej",
                        "Justify Center": "Wyrównaj do środka",
                        "Justify Right": "Wyrównaj do prawej",
                        "Justify Full": "Wyjustowanie",
                        Indent: "Zwiększ wcięcie",
                        Outdent: "Zmniejsz wcięcie",
                        "Ordered List": "Numerowanie",
                        "Unordered List": "Punktory",
                        "Horizontal Rule": "Pozioma linia",
                        "Insert Image": "Wstaw obrazek",
                        "Insert Link": "Wstaw link",
                        Undo: "Cofnij",
                        Redo: "Powtórz",
                        "Show Source": "Pokaż źródło",
                        "Size 1": "Rozmiar 1",
                        "Size 2": "Rozmiar 2",
                        "Size 3": "Rozmiar 3",
                        "Size 4": "Rozmiar 4",
                        "Size 5": "Rozmiar 5",
                        "Size 6": "Rozmiar 6",
                        "Size 7": "Rozmiar 7",
                        "Input image URL": "Adres obrazka",
                        "Input link URL or E-mail address": "Wprowadź adres URL lub E-mail",
                        Preview: "Podgląd",
                        Insert: "Wstaw",
                        Unlink: "Usuń link"
                    },
                    "pt-br": {
                        Font: "Fonte",
                        Size: "Tamanho",
                        Bold: "Negrito",
                        Italic: "Itálico",
                        Underline: "Sublinhado",
                        "Strike-Through": "Tachado",
                        "Remove Format": "Remover formatação",
                        "Foreground Color": "Cor da fonte",
                        "Background Color": "Sombreamento",
                        Superscript: "Sobrescrito",
                        Subscript: "Subscrito",
                        "Justify Left": "Alinhar à esquerda",
                        "Justify Center": "Centralizar",
                        "Justify Right": "Alinhar à direita",
                        "Justify Full": "Justificar",
                        Indent: "Aumentar recuo",
                        Outdent: "Diminuir recuo",
                        "Ordered List": "Numeração",
                        "Unordered List": "Marcadores",
                        "Horizontal Rule": "Linha horizontal",
                        "Insert Image": "Inserir imagem",
                        "Insert Link": "Inserir hiperlink",
                        Undo: "Desfazer",
                        Redo: "Refazer",
                        "Show Source": "Mostrar fonte",
                        "Size 1": "Tamanho 1",
                        "Size 2": "Tamanho 2",
                        "Size 3": "Tamanho 3",
                        "Size 4": "Tamanho 4",
                        "Size 5": "Tamanho 5",
                        "Size 6": "Tamanho 6",
                        "Size 7": "Tamanho 7",
                        "Input image URL": "Insira a URL da imagem",
                        "Input link URL or E-mail address": "Insira uma URL ou endereço de e-mail",
                        Preview: "Pré-visualização",
                        Insert: "Inserir",
                        Unlink: "Remover hiperlink"
                    },
                    pt: {
                        Font: "Tipo de letra",
                        Size: "Tamanho",
                        Bold: "Negrito",
                        Italic: "Itálico",
                        Underline: "Sublinhado",
                        "Strike-Through": "Rasurado",
                        "Remove Format": "Remover formatação",
                        "Foreground Color": "Cor do tipo de letra",
                        "Background Color": "Realçar",
                        Superscript: "Sobrescrito",
                        Subscript: "Subscrito",
                        "Justify Left": "Alinhar à esquerda",
                        "Justify Center": "Centrar horizontalmente",
                        "Justify Right": "Alinhar à direita",
                        "Justify Full": "Justificado",
                        Indent: "Aumentar avanço",
                        Outdent: "Diminuir avanço",
                        "Ordered List": "Numeração",
                        "Unordered List": "Marcas",
                        "Horizontal Rule": "Linha horizontal",
                        "Insert Image": "Inserir imagem",
                        "Insert Link": "Inserir hiperligação",
                        Undo: "Anular",
                        Redo: "Refazer",
                        "Show Source": "Mostrar código-fonte",
                        "Size 1": "Tamanho 1",
                        "Size 2": "Tamanho 2",
                        "Size 3": "Tamanho 3",
                        "Size 4": "Tamanho 4",
                        "Size 5": "Tamanho 5",
                        "Size 6": "Tamanho 6",
                        "Size 7": "Tamanho 7",
                        "Input image URL": "Insira a URL da imagem",
                        "Input link URL or E-mail address": "Insira uma URL ou endereço de correio eletrónico",
                        Preview: "Pré-visualização",
                        Insert: "Inserir",
                        Unlink: "Remover hiperligação"
                    }
                },
                i = e();
            return function(e) {
                return i[e] === r ? e : i[e]
            }
        }(),
        i = function() {
            var e = /^[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~](\.?[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~])*@([\w\-]+\.)+(\w+)$/;
            return function(t) {
                return !(t.length > 256) && (!(t.indexOf("@") > 64) && null !== t.match(e))
            }
        }(),
        o = function() {
            var e = /^https?:\/\//;
            return function(t) {
                return null !== t.match(e)
            }
        }(),
        c = function() {
            var t = {
                    NORMAL: 0,
                    ACTIVE: 1,
                    DISABLED: 2
                },
                a = {
                    FONTNAME: "fontname",
                    FONTSIZE: "fontsize",
                    BOLD: "bold",
                    ITALIC: "italic",
                    UNDERLINE: "underline",
                    STRIKETHROUGH: "strikethrough",
                    REMOVEFORMAT: "removeformat",
                    FORECOLOR: "forecolor",
                    BACKCOLOR: "backcolor",
                    HILITECOLOR: "hilitecolor",
                    SUPERSCRIPT: "superscript",
                    SUBSCRIPT: "subscript",
                    JUSTIFYLEFT: "justifyleft",
                    JUSTIFYCENTER: "justifycenter",
                    JUSTIFYRIGHT: "justifyright",
                    JUSTIFYFULL: "justifyfull",
                    INDENT: "indent",
                    OUTDENT: "outdent",
                    ORDEREDLIST: "insertorderedlist",
                    UNORDEREDLIST: "insertunorderedlist",
                    INSERTHORIZONTALRULE: "inserthorizontalrule",
                    INSERTIMAGE: "insertimage",
                    CREATELINK: "createlink",
                    UNLINK: "unlink",
                    UNDO: "undo",
                    REDO: "redo"
                };
            return function(n, i, o) {
                function c(e) {
                    var t = '<!DOCTYPE html><html><head><meta charset="UTF-8" /><style type="text/css">' + o + "</style></head><body></body></html>";
                    y.designMode = "on", m(t), f(e)
                }

                function s(e, t) {
                    e === a.BACKCOLOR && l(a.HILITECOLOR) && (e = a.HILITECOLOR), h(), y.execCommand(e, !1, t)
                }

                function l(e) {
                    try {
                        return y.queryCommandEnabled(e)
                    } catch (e) {
                        return !1
                    }
                }

                function u(e) {
                    return e === r ? d() : void f(e)
                }

                function d() {
                    var e = y.body.innerHTML;
                    return e = e.replace(/(<\/?)p\b/gi, "$1div").replace(/(<\/?)em\b/gi, "$1i").replace(/(<\/?)strong\b/gi, "$1b").replace(/(<\/?)del\b/gi, "$1s")
                }

                function f(e) {
                    y.body.innerHTML = e
                }

                function m(e) {
                    y.open(), y.write(e), y.close()
                }

                function p() {
                    var n = {
                        fontname: null,
                        fontsize: null,
                        forecolor: null,
                        backcolor: null,
                        bold: t.NORMAL,
                        italic: t.NORMAL,
                        underline: t.NORMAL,
                        strikethrough: t.NORMAL,
                        superscript: t.NORMAL,
                        subscript: t.NORMAL,
                        justifyleft: t.NORMAL,
                        justifycenter: t.NORMAL,
                        justifyright: t.NORMAL,
                        justifyfull: t.NORMAL,
                        insertorderedlist: t.NORMAL,
                        insertunorderedlist: t.NORMAL,
                        createlink: t.NORMAL,
                        unlink: t.NORMAL,
                        undo: t.NORMAL,
                        redo: t.NORMAL
                    };
                    "" === R() && (n[a.CREATELINK] = t.DISABLED, n[a.UNLINK] = t.DISABLED), e.each(
                            [a.CREATELINK, a.UNLINK, a.UNDO, a.REDO], function(e, r) {
                        l(r) || (n[r] = t.DISABLED)
                    });
                    for (var i = C(); null !== i;) {
                        if (i.tagName !== r) {
                            var o = i.tagName.toLowerCase();
                            switch (o) {
                                case "a":
                                    i.setAttribute('target', '_blank');
                                    n["target"] = "_blank";
                                    break;
                                case "b":
                                case "strong":
                                    n[a.BOLD] = t.ACTIVE;
                                    break;
                                case "i":
                                case "em":
                                    n[a.ITALIC] = t.ACTIVE;
                                    break;
                                case "u":
                                    n[a.UNDERLINE] = t.ACTIVE;
                                    break;
                                case "s":
                                case "strike":
                                case "del":
                                    n[a.STRIKETHROUGH] = t.ACTIVE;
                                    break;
                                case "sup":
                                    n[a.SUPERSCRIPT] = t.ACTIVE;
                                    break;
                                case "sub":
                                    n[a.SUBSCRIPT] = t.ACTIVE;
                                    break;
                                case "ol":
                                    n[a.ORDEREDLIST] = t.ACTIVE;
                                    break;
                                case "ul":
                                    n[a.UNORDEREDLIST] = t.ACTIVE;
                                    break;
                                case "font":
                                    i.face.length > 0 && null === n[a.FONTNAME] && (n[a.FONTNAME] = i.face), i.size.length > 0 && null === n[a.FONTSIZE] && (n[a.FONTSIZE] = i.size), i.color.length > 0 && null === n[a.FORECOLOR] && (n[a.FORECOLOR] = i.color)
                            }
                        }
                        if (i.align !== r) {
                            var c = i.align.toLowerCase();
                            switch (c) {
                                case "left":
                                    n[a.JUSTIFYLEFT] = t.ACTIVE;
                                    break;
                                case "center":
                                    n[a.JUSTIFYCENTER] = t.ACTIVE;
                                    break;
                                case "right":
                                    n[a.JUSTIFYRIGHT] = t.ACTIVE;
                                    break;
                                case "justify":
                                    n[a.JUSTIFYFULL] = t.ACTIVE
                            }
                        }
                        if (i.style !== r) {
                            var s = i.style;
                            if (s.fontFamily !== r) {
                                var u = s.fontFamily;
                                u.length > 0 && null === n[a.FONTNAME] && (n[a.FONTNAME] = u)
                            }
                            if (s.fontWeight !== r) {
                                var d = s.fontWeight.toLowerCase();
                                switch (d) {
                                    case "bold":
                                    case "bolder":
                                        n[a.BOLD] = t.ACTIVE
                                }
                            }
                            if (s.fontStyle !== r) {
                                var f = s.fontStyle.toLowerCase();
                                switch (f) {
                                    case "italic":
                                    case "oblique":
                                        n[a.ITALIC] = t.ACTIVE
                                }
                            }
                            if (s.textDecoration !== r) {
                                var m = s.textDecoration.toLowerCase();
                                m.indexOf("underline") !== -1 && (n[a.UNDERLINE] = t.ACTIVE), m.indexOf("line-through") !== -1 && (n[a.STRIKETHROUGH] = t.ACTIVE)
                            }
                            if (s.color !== r) {
                                var p = s.color;
                                p.length > 0 && null === n[a.FORECOLOR] && (n[a.FORECOLOR] = p)
                            }
                            if (s.backgroundColor !== r) {
                                var I = s.backgroundColor;
                                I.length > 0 && null === n[a.BACKCOLOR] && (n[a.BACKCOLOR] = I)
                            }
                            if (s.verticalAlign !== r) {
                                var h = s.verticalAlign.toLowerCase();
                                switch (h) {
                                    case "super":
                                        n[a.SUPERSCRIPT] = t.ACTIVE;
                                        break;
                                    case "sub":
                                        n[a.SUBSCRIPT] = t.ACTIVE
                                }
                            }
                            if (s.textAlign !== r) {
                                var g = s.textAlign.toLowerCase();
                                switch (g) {
                                    case "left":
                                        n[a.JUSTIFYLEFT] = t.ACTIVE;
                                        break;
                                    case "center":
                                        n[a.JUSTIFYCENTER] = t.ACTIVE;
                                        break;
                                    case "right":
                                        n[a.JUSTIFYRIGHT] = t.ACTIVE;
                                        break;
                                    case "justify":
                                        n[a.JUSTIFYFULL] = t.ACTIVE
                                }
                            }
                        }
                        i = i.parentNode
                    }
                    return y.selection && (S = y.selection.createRange()), n
                }

                function C() {
                    return g.getSelection ? g.getSelection().anchorNode : y.selection.createRange().parentElement()
                }

                function R() {
                    if (g.getSelection) {
                        var e = g.getSelection();
                        return null === e || 0 === e.rangeCount ? "" : e.getRangeAt(0).toString()
                    }
                    return y.selection.createRange().text
                }

                function I(e, t) {
                    if (g.getSelection) {
                        var r = y.createTextNode(e),
                            n = g.getSelection();
                        n.deleteFromDocument(), n.getRangeAt(0).insertNode(r)
                    } else y.selection.createRange().text = e;
                    t ? s(a.REMOVEFORMAT) : h()
                }

                function h() {
                    g.focus(), null !== S && S.select()
                }
                var g = n.contentWindow,
                    y = g.document;
                n.contentDocument && (y = n.contentDocument);
                var S = null;
                this.STATUS = t, this.COMMAND = a, this.contentWindow = g, this.contentDocument = y, this.getCurrentStatus = p, this.execCommand = s, this.canExecCommand = l, this.value = u, this.getSelectedText = R, this.insertText = I, this.setFocus = h, c(i)
            }
        }();
    return e.fn.extend({
        cazary: function(e) {
            function s(t) {
                "string" == typeof t && (t = p[t] !== r ? p[t] : [t]);
                var a = e("<div />").addClass("cazary-commands-wrapper");
                return e.each(t, function() {
                    var t = e("<ul />").addClass("cazary-commands-list"),
                        i = this.toLowerCase().split(" ");
                    e.each(i, function() {
                        var a = this.toString();
                        if ("|" === a && (a = "separator"), f[a] !== r) {
                            var i = n(f[a]),
                                o = "cazary-command-" + a,
                                c = e("<li />").attr({
                                    unselectable: "on",
                                    title: i
                                }).addClass(o).text(i);
                            t.append(c)
                        }
                    }), a.append(t)
                }), a
            }

            function l() {
                e(".cazary-panel").each(function() {
                    var t = e(this).data("command"),
                        r = ".cazary-command-" + t;
                    e(r).removeClass("cazary-active")
                }).remove()
            }
            var u = {
                    ENTER: 13,
                    ESCAPE: 27
                },
                d = '<div class="cazary"><iframe class="cazary-edit" src="javascript:" style="display:none;"></iframe></div>',
                f = {
                    separator: "",
                    fontname: "Font",
                    fontsize: "Size",
                    bold: "Bold",
                    italic: "Italic",
                    underline: "Underline",
                    strikethrough: "Strike-Through",
                    removeformat: "Remove Format",
                    forecolor: "Foreground Color",
                    backcolor: "Background Color",
                    superscript: "Superscript",
                    subscript: "Subscript",
                    justifyleft: "Justify Left",
                    justifycenter: "Justify Center",
                    justifyright: "Justify Right",
                    justifyfull: "Justify Full",
                    indent: "Indent",
                    outdent: "Outdent",
                    insertorderedlist: "Ordered List",
                    insertunorderedlist: "Unordered List",
                    inserthorizontalrule: "Horizontal Rule",
                    insertimage: "Insert Image",
                    createlink: "Insert Link",
                    unlink: "Unlink",
                    undo: "Undo",
                    redo: "Redo",
                    source: "Show HTML Source"
                },
                m = {
                    1: "Size 1",
                    2: "Size 2",
                    3: "Size 3",
                    4: "Size 4",
                    5: "Size 5",
                    6: "Size 6",
                    7: "Size 7"
                },
                p = {
                    MINIMAL: ["bold italic underline strikethrough removeformat"],
                    STANDARD: ["fontname fontsize", "bold italic underline strikethrough removeformat | forecolor backcolor | superscript subscript", "source"],
                    FULL: ["fontname fontsize", "bold italic underline strikethrough removeformat | forecolor backcolor | superscript subscript", "justifyleft justifycenter justifyright justifyfull | indent outdent | insertorderedlist insertunorderedlist", "inserthorizontalrule insertimage createlink unlink", "undo redo", "source"]
                };
            return e(function(e) {
                    e(a).on("click", function() {
                        l()
                    }).on("keydown", function(e) {
                        e.keyCode === u.ESCAPE && l()
                    })
                }),
                function(f) {
                    return f = e.extend({
                        mode: "rte",
                        style: "body{margin:0px;padding:8px;}p{margin:0px;padding:0px;}",
                        fontnames: ["sans-serif", "serif", "cursive", "fantasy", "monospace", "Arial", "Arial Black", "Comic Sans MS", "Courier New", "Narrow", "Garamond", "Georgia", "Impact", "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana"],
                        colors: [
                            ["#ffffff", "#ffcccc", "#ffcc99", "#ffff99", "#ffffcc", "#99ff99", "#99ffff", "#ccffff", "#ccccff", "#ffccff"],
                            ["#cccccc", "#ff6666", "#ff9966", "#ffff66", "#ffff33", "#66ff99", "#33ffff", "#66ffff", "#9999ff", "#ff99ff"],
                            ["#bbbbbb", "#ff0000", "#ff9900", "#ffcc66", "#ffff00", "#33ff33", "#66cccc", "#33ccff", "#6666cc", "#cc66cc"],
                            ["#999999", "#cc0000", "#ff6600", "#ffcc33", "#ffcc00", "#33cc00", "#00cccc", "#3366ff", "#6633ff", "#cc33cc"],
                            ["#666666", "#990000", "#cc6600", "#cc9933", "#999900", "#009900", "#339999", "#3333ff", "#6600cc", "#993399"],
                            ["#333333", "#660000", "#993300", "#996633", "#666600", "#006600", "#336666", "#000099", "#333399", "#663366"],
                            ["#000000", "#330000", "#663300", "#663333", "#333300", "#003300", "#003333", "#000066", "#330099", "#330033"]
                        ],
                        commands: "STANDARD"
                    }, f), this.each(function() {
                        function p(e, t) {
                            l(), F.execCommand(e, t), E()
                        }

                        function C() {
                            N.hide(), b.css("display", ""), w.removeClass("cazary-disabled"), k.removeClass("cazary-active"), E()
                        }

                        function R() {
                            var e = F.value();
                            N.val(e), b.hide(), N.css("display", ""), w.addClass("cazary-disabled"), k.addClass("cazary-active")
                        }

                        function I() {
                            h() ? C() : R()
                        }

                        function h() {
                            return k.hasClass("cazary-active")
                        }

                        function g(t, r, n) {
                            var i = e(".cazary-panel");
                            if (i.length > 0) {
                                var o = i.data("id"),
                                    c = i.data("command");
                                if (l(), c === t && o === z) return void L()
                            }
                            var s = !1;
                            switch (t) {
                                case F.COMMAND.FONTNAME:
                                    i = y(t, r.fontnames), s = !0;
                                    break;
                                case F.COMMAND.FONTSIZE:
                                    i = S(t), s = !0;
                                    break;
                                case F.COMMAND.FORECOLOR:
                                case F.COMMAND.BACKCOLOR:
                                    i = T(t, r.colors), s = !0;
                                    break;
                                case F.COMMAND.INSERTIMAGE:
                                    i = O(t);
                                    break;
                                case F.COMMAND.CREATELINK:
                                    i = v(t);
                                    break;
                                default:
                                    return null
                            }
                            s && i.on("click", "li", function() {
                                var r = e(this),
                                    a = r.data("param");
                                p(t, a)
                            });
                            var u = n.addClass("cazary-active").offset();
                            return u.top += n.outerHeight(), i.addClass("cazary-panel").addClass("cazary-panel-" + t).data("id", z).data("command", t).css({
                                left: u.left + "px",
                                top: u.top + "px"
                            }).on("click", function() {
                                return !1
                            }).appendTo(e(a.body)).find(":text:first").trigger("focus"), i
                        }

                        function y(t, r) {
                            var a = e("<ul />").addClass("cazary-widget-select");
                            return e.each(r, function() {
                                var t = this.toString(),
                                    r = e("<li />").attr({
                                        unselectable: "on",
                                        title: t
                                    }).css({
                                        "font-family": t
                                    }).data("param", t).text(t);
                                a.append(r)
                            }), e("<div>").append(a)
                        }

                        function S(t) {
                            var r = e("<ul />").addClass("cazary-widget-select");
                            return e.each(m, function(t, a) {
                                var i = n(a),
                                    o = e("<li />").attr({
                                        unselectable: "on",
                                        title: i
                                    }).data("param", t),
                                    c = e("<font />").attr({
                                        size: t
                                    }).text(a);
                                r.append(o.append(c))
                            }), e("<div>").append(r)
                        }

                        function T(t, r) {
                            var a = e("<div>");
                            return e.each(r, function() {
                                var t = e("<ul />").addClass("cazary-widget-select-color");
                                e.each(this, function() {
                                    var r = this.toString(),
                                        a = e("<li />").attr({
                                            unselectable: "on",
                                            title: r
                                        }).css({
                                            "background-color": r
                                        }).data("param", r).text(r);
                                    t.append(a)
                                }), a.append(t)
                            }), a
                        }

                        function O(r) {
                            function a() {
                                var e = c.find(".cazary-widget-insertimage-url"),
                                    t = e.val();
                                return o(t) ? (p(r, t), !1) : (e.trigger("focus"), !1)
                            }

                            function i() {
                                var r = e(this);
                                t.setTimeout(function() {
                                    var e = "url_old",
                                        t = r.val(),
                                        a = r.data(e);
                                    if (t !== a) {
                                        r.data(e, t);
                                        var n = c.find(".cazary-widget-preview");
                                        o(t) ? (n.show(), c.find(".cazary-widget-preview-insertimage").attr("src", t)) : n.hide()
                                    }
                                }, 10)
                            }
                            var c = e("<div>").append(e("<form />").attr("action", "#").append(e("<div />").append(e("<fieldset />").append(e("<legend />").text(n("Input image URL"))).append(e('<input id="insertImage" type="text" />').addClass("cazary-widget-insertimage-url").attr({
                                required: "required",
                                placeholder: n("http://example.com/path/to/image.jpg")
                            }))).append(e('<input titl=\"Insert Image\" type="submit" />').addClass("cazary-widget-submit").val(n("Insert")))).append(e("<fieldset />").addClass("cazary-widget-preview").append(e("<legend />").text(n("Preview"))).append(e("<img />").addClass("cazary-widget-preview-insertimage"))));
                            return c.on("submit", "form", a).on("click", ".cazary-widget-submit", a).on("keydown paste", ".cazary-widget-insertimage-url", i)
                        }

                        function v(r) {
                            function a() {
                                var e = s.find(".cazary-widget-createlink-url"), t = e.val();
                                if (i(t)) {
                                    t = "mailto:" + t;
                                } else if (!o(t)){ 
                                    return e.trigger("focus"), !1;
                                }
                                return p(r, t), !1
                            }

                            function c() {
                                var r = e(this);
                                t.setTimeout(function() {
                                    var e = "url_old",
                                        t = r.val(),
                                        a = r.data(e);
                                    if (t !== a) {
                                        r.data(e, t);
                                        var n = s.find(".cazary-widget-preview");
                                        o(t) ? (n.show(), s.find(".cazary-widget-preview-createlink").attr("src", t)) : n.hide()
                                    }
                                }, 10)
                            }
                            var s = e("<div>").append(e("<form />").attr("action", "#").append(e("<div />").append(e("<fieldset />").append(e("<legend />").text(n("Input link URL or E-mail address"))).append(e('<input id="insertUrl" type="text" />').addClass("cazary-widget-createlink-url").attr({
                                required: "required",
                                placeholder: n("http://example.com/, someone@example.com")
                            }))).append(e('<input titl=\"Insert Link\" type="button" />').addClass("cazary-widget-submit").val(n("Insert")))));
                            return s.on("submit", "form", a).on("click", ".cazary-widget-submit", a).on("keydown paste", ".cazary-widget-createlink-url", c)
                        }

                        function E() {
                            var e = F.getCurrentStatus();
                            for (var t in e) {
                                var r = e[t],
                                    a = M.find(".cazary-command-" + t);
                                if (t !== F.COMMAND.FONTNAME)
                                    if (t !== F.COMMAND.FONTSIZE)
                                        if (t !== F.COMMAND.FORECOLOR && t !== F.COMMAND.BACKCOLOR) r === F.STATUS.ACTIVE ? a.addClass("cazary-active") : a.removeClass("cazary-active"), r === F.STATUS.DISABLED ? a.addClass("cazary-disabled") : a.removeClass("cazary-disabled");
                                        else {
                                            var i = M.find(".cazary-command-" + t),
                                                o = null === r ? "" : r;
                                            i.css("background-color", o)
                                        }
                                else {
                                    var c = r;
                                    null === c ? (r = "", c = a.attr("title")) : c = n(m[c]), a.text(c)
                                } else {
                                    var s = r;
                                    null === s && (r = "", s = a.attr("title")), a.css({
                                        "font-family": r
                                    }).text(s)
                                }
                            }
                        }

                        function L() {
                            h() ? N.trigger("focus") : F.setFocus()
                        }

                        function A() {
                            var t = e(F.contentDocument.body);
                            0 === t.text().length ? t.addClass("empty") : t.removeClass("empty")
                        }
                        var z = parseInt(1e4 * Math.random()),
                            N = e(this),
                            M = e(d).css({
                                width: N.width()
                            });
                        M.prepend(s(f.commands));
                        var b = M.find(".cazary-edit").css({
                                height: N.height()
                            }),
                            k = M.find("ul.cazary-commands-list li.cazary-command-source"),
                            w = M.find("ul.cazary-commands-list li:not(.cazary-command-source)");
                        N.hide().before(M).insertAfter(b).addClass("cazary-source");
                        var U = f.style,
                            D = N.attr("placeholder");
                        D !== r && (D = D.replace("'", "\\'"), U += "body.empty:before{position:fixed;color:#888;content:'" + D + "';}");
                        
                        var F = new c(b.get(0), N.val(), U),
                            x = [F.COMMAND.BOLD, F.COMMAND.ITALIC, F.COMMAND.UNDERLINE, F.COMMAND.STRIKETHROUGH, F.COMMAND.REMOVEFORMAT, F.COMMAND.SUPERSCRIPT, F.COMMAND.SUBSCRIPT, F.COMMAND.JUSTIFYLEFT, F.COMMAND.JUSTIFYCENTER, F.COMMAND.JUSTIFYRIGHT, F.COMMAND.JUSTIFYFULL, F.COMMAND.INDENT, F.COMMAND.OUTDENT, F.COMMAND.ORDEREDLIST, F.COMMAND.UNORDEREDLIST, F.COMMAND.INSERTHORIZONTALRULE, F.COMMAND.UNLINK, F.COMMAND.UNDO, F.COMMAND.REDO],
                            J = [F.COMMAND.FONTNAME, F.COMMAND.FONTSIZE, F.COMMAND.FORECOLOR, F.COMMAND.BACKCOLOR, F.COMMAND.INSERTIMAGE, F.COMMAND.CREATELINK];
                    
                        "html" === f.mode ? R() : C(), N.on("change", function() {
                            var t = e(this).val();
                            F.value(t), A()
                        }), e(F.contentDocument).on("select", function() {
                            E()
                        }).on("mouseup", function() {
                            l(), E()
                        }).on("keydown", function(e) {
                            e.keyCode === u.ESCAPE && l()
                        }).on("keyup paste", function() {
                            t.setTimeout(function() {
                                E(), A()
                            }, 10)
                        }), e(F.contentWindow).on("focus", function() {
                            l(), E()
                        }).on("blur", function() {
                            N.val(F.value())
                        }), M.on("click", "ul.cazary-commands-list li", function(t) {
                            var r = e(this);
                            r.hasClass("cazary-disabled") && (t.stopImmediatePropagation(), L())
                        }), k.on("click", function() {
                            I(), L()
                        }), e.each(x, function() {
                            var e = this.toLowerCase();
                            M.on("click", ".cazary-command-" + e, function() {
                                p(e)
                            })
                        }), e.each(J, function() {
                            var t = this.toLowerCase();
                            M.on("click", ".cazary-command-" + t, function() {
                                var r = e(this);
                                return g(t, f, r), !1
                            })
                        })
                    })
                }
        }(e)
    }), e
});

