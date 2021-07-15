/**
 * 日期格式化
 * @param {any} fmt
 */
Date.prototype.Format = function(fmt) { //author: meizz   
    var o = {
        "M+": this.getMonth() + 1, //月份   
        "d+": this.getDate(), //日   
        "h+": this.getHours(), //小时   
        "m+": this.getMinutes(), //分   
        "s+": this.getSeconds(), //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds() //毫秒   
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

$.extend({
    getApiUrl: function(url) {
        if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0 ||
            url.indexOf("HTTP://") == 0 || url.indexOf("HTTPS://") == 0) {
            return url;
        }
        var host = location.host.toLowerCase();

        var baseUrl = "//tapi.xiaobinbike.cn";
        if (host == "localhost" || host.indexOf("127.0.") == 0 || host.indexOf("192.168.") == 0) {
            baseUrl = "//192.168.1.230:8090";
            // baseUrl = "//localhost:7667";
            // baseUrl = "//api.xiaobinbike.cn";
        } else if (host == "tadmin.xiaobinbike.cn") {
            baseUrl = "//tapi.xiaobinbike.cn";
        } else if (host == "tadmin.xiaobinbike.com") {
            baseUrl = "//tapi.xiaobinbike.com";
        } else if (host == "admin.xiaobinbike.cn") {
            baseUrl = "//api.xiaobinbike.cn";
        } else if (host == "admin.xiaobinbike.com") {
            baseUrl = "//api.xiaobinbike.com";
        } else if (host == "admin.xiaojinbike.com") {
            baseUrl = "//api.xiaojinbike.com";
        }

        if (baseUrl == "") return url;
        baseUrl = location.protocol + baseUrl;
        if (url.indexOf('/') == 0) return baseUrl + url;
        else return baseUrl + "/" + url;
    }
});

(function(factory) {
    /*!
     * jQuery Cookie Plugin v1.4.1
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2006, 2014 Klaus Hartl
     * Released under the MIT license
     */
    if (typeof define === 'function' && define.amd) {
        // AMD (Register as an anonymous module)
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function(key, value, options) {

        // Write

        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {},
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling $.cookie().
            cookies = document.cookie ? document.cookie.split('; ') : [],
            i = 0,
            l = cookies.length;

        for (; i < l; i++) {
            var parts = cookies[i].split('='),
                name = decode(parts.shift()),
                cookie = parts.join('=');

            if (key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function(key, options) {
        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };
}));



$.extend({

    validator: function(value, param) {
        var reg = /^[a-zA-Z]+$/;
        var reg2 = /^[a-zA-Z]+[a-zA-Z0-9]+$/;
        var reg3 = /^[a-zA-Z]+[_\.\-]+[a-zA-Z0-9]+$/;
        var reg4 = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        var mobilereg = /^[1][3-9][0-9]{9}$/;
        return reg.test(value) || reg2.test(value) || reg3.test(value) || reg4.test(value) || mobilereg.test(value);
    },

    stringToHex: function(str) {
        var val = "";
        try {
            for (var i = 0; i < str.length; i++) {
                var s = str.charCodeAt(i).toString(16);
                while (s.length < 4) s = '0' + s;
                val = val + s;
            }
        } catch (ex) {}

        return val;
    },
    hexToString: function(str) {
        var val = "";
        try {
            if (str.length >= 4 && str.length % 4 == 0) {
                var i = 0;
                while (i < str.length) {
                    var s = str.substring(i, i + 4);
                    var j = 0;
                    while (s.length > 1 && s.substring(0, 1) == '0') s = s.substring(1);
                    var c = parseInt(s, 16);
                    val = val + String.fromCharCode(c);
                    i += 4;
                }
            }
        } catch (ex) {}

        return val;
    },
    getUrlObj: function(url) {
        var obj = {};
        url = url || window.location.search;
        var i = url.indexOf('?');
        if (i >= 0) {
            url = url.substring(i + 1);
            var arr = url.split('&');
            for (var i = 0; i < arr.length; i++) {
                var av = arr[i].split('=');
                obj[av[0]] = av.length < 2 ? '' : av[1];
            }
        }

        return obj;
    },
    getUrlParam: function(name, url) {
        var obj = $.getUrlObj(url);
        for (var n in obj) {
            if (n == name) {
                return obj[n];
            }
        }
        return '';
    },
    setUrlParam: function(obj, url) {
        url = url || window.location.href;
        var s = url;
        var i = url.indexOf('?');
        if (i > 0) s = url.substring(0, i);
        if (obj) {
            var p = '';
            for (var n in obj) {
                var v = obj[n];
                if (v) p = p.concat('&', n, '=', v);
            }
            if (p.length > 0) {
                p = p.substring(1);
                s = s.concat('?', p);
            }
        }
        return s;
    },
    htmlEncode: function(html) {
        var temp = document.createElement("div");
        if (temp.textContent != null) {
            temp.textContent = html;
        } else {
            temp.innerText = html;
        }
        var output = temp.innerHTML;
        temp = null;
        return output;
    },
    getFormData: function(form) {
        if (typeof(form) == 'string') {
            if (form.indexOf('#') != 0) form = '#' + form;
        }
        var arr = $(form).serializeArray();
        var data = {};
        $.each(arr, function() {
            data[this.name] = this.value;
        });

        return data;
    },
    findArray: function(arr, name, value) {
        if ($.isArray(arr) && name) {
            for (var i = 0; i < arr.length; i++) {
                var m = arr[i];
                if (m[name] == value) {
                    return { index: i, data: m };
                }
            }
        }
        return null;
    },
    queryArray: function(arr, name, value) {
        var list = [];
        if ($.isArray(arr) && name) {
            for (var i = 0; i < arr.length; i++) {
                var m = arr[i];
                if (m[name] == value) {
                    list.push({ index: i, data: m });
                }
            }
        }
        return list;
    },
    existArray: function(arr, name, value) {
        if ($.isArray(arr)) {
            if (typeof(value) == 'undefined') {
                for (var i = 0; i < arr.length; i++) {
                    var m = arr[i];
                    if (m == name) {
                        return true;
                    }
                }
            } else {
                for (var i = 0; i < arr.length; i++) {
                    var m = arr[i];
                    if (m[name] == value) {
                        return true;
                    }
                }
            }
        }
        return false;
    },
    copyArray: function(arr) {
        var result = [];
        if ($.isArray(arr)) {
            for (var i = 0; i < arr.length; i++) {
                var m = arr[i];
                if (typeof(m) == 'object') {
                    var _m = {};
                    for (var name in m) {
                        _m[name] = m[name];
                    }
                    result.push(_m);
                } else {
                    result.push(m);
                }
            }
        }

        return result;
    },
    numFormat: function(value, n, m) {
        if (typeof(value) != 'number') value = parseFloat(value);
        if (typeof(n) != 'number') n = parseInt(n);
        var s = value.toFixed(n).toString();
        var arr = s.split('.');
        if (arr.length == 2) {
            var ps = arr[1];
            while (ps.length > 0 && ps.endsWith('0')) {
                ps = ps.substring(0, ps.length - 1);
            }
            if (ps.length == 0) arr.splice(1, 1);
            else arr[1] = ps;
        }

        if (typeof(m) == "number" && m > 0 && arr.length == 2) {
            var i = m - arr[0].length;
            if (i == 0) {
                arr.splice(1, 1);
            } else if (i > 0 && arr[1].length > i) {
                arr[1] = arr[1].substring(0, i);
            }
        }

        arr[0] = arr[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        s = arr.join('.');
        return s;
    },
    isMobile: function() {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            return true;
        } else {
            return false;
        }
    },
    isIpadOrIpod: function() {
        var ua = navigator.userAgent.toLowerCase();
        if (/ipad/i.test(ua)) {
            return true;
        } else {
            return false;
        }
    },
    isNotLogin: function(data) {
        if (typeof(data) == "object" && data.status == 401) {
            if (location.pathname != '/login.html') {
                window.location.href = '/login.html?r=' + Math.random();
                return true;
            }
        }

        return false;
    },

    checkPhone(phone) {
        if (!(/^1(3|4|5|7|8|9)\d{9}$/.test(phone))) {
            $.showDataMsg("手机号码有误，请重填！", '');
            return false;
        } else {
            return true;
        }
    },
    showDataMsg: function(msg, data, type = 'error') {
        var showmsg = msg || '请求失败！';
        if (data && data.msg) {
            showmsg = data.msg;
        }
        $.messager.alert('提示', showmsg, type, function() {
            $.isNotLogin(data);
        });
    },
    thousands: function(num) {
        if (num) {
            var str = num.toString()
            var reg = str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
            return str.replace(reg, '$1,')
        } else {
            return num
        }
    },
    getPrivate: function(url, data, callback, async, cache, state, errorcall) {
        var d = data,
            call = callback;
        if (typeof(d) == 'function') {
            d = {};
            call = data;
        }
        var isasync = true;
        if (typeof(async) == 'boolean') isasync = async;
        var iscache = false;
        if (typeof(cache) == 'boolean') iscache = cache;
        $.ajax({
            type: 'GET',
            url: url,
            global: false,
            async: isasync,
            cache: iscache,
            data: d,
            success: function(dd) {
                $.isNotLogin(dd);
                if (typeof(call) == 'function') {
                    try {
                        if (state && typeof(state) != 'function') call(dd, state);
                        else call(dd);
                    } catch (e) { console.error(e.message); }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (typeof(errorcall) == 'function') {
                    try { errorcall(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                } else if (typeof(state) == 'function') {
                    try { state(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                }
            }
        });
    },
    getPublic: function(url, data, callback, async, cache, state, errorcall) {
        var d = data,
            call = callback;
        if (typeof(d) == 'function') {
            d = {};
            call = data;
        }
        var isasync = true;
        if (typeof(async) == 'boolean') isasync = async;
        var iscache = false;
        if (typeof(cache) == 'boolean') iscache = cache;
        $.ajax({
            type: 'GET',
            url: url,
            global: true,
            async: isasync,
            cache: iscache,
            data: d,
            success: function(dd) {
                $.isNotLogin(dd);
                if (typeof(call) == 'function') {
                    try {
                        if (state && typeof(state) != 'function') call(dd, state);
                        else call(dd);
                    } catch (e) { console.error(e.message); }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (typeof(errorcall) == 'function') {
                    try { errorcall(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                } else if (typeof(state) == 'function') {
                    try { state(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                }
            }
        });
    },
    postPrivate: function(url, data, callback, async, cache, state, errorcall) {
        var d = data,
            call = callback;
        if (typeof(d) == 'function') {
            d = {};
            call = data;
        }
        var isasync = true;
        if (typeof(async) == 'boolean') isasync = async;
        var iscache = false;
        if (typeof(cache) == 'boolean') iscache = cache;
        $.ajax({
            type: 'post',
            url: url,
            global: false,
            async: isasync,
            cache: iscache,
            data: d,
            success: function(dd) {
                $.isNotLogin(dd);
                if (typeof(call) == 'function') {
                    try {
                        if (state && typeof(state) != 'function') call(dd, state);
                        else call(dd);
                    } catch (e) { console.error(e.message); }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (typeof(errorcall) == 'function') {
                    try { errorcall(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                } else if (typeof(state) == 'function') {
                    try { state(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                }
            }
        });
    },
    postPublic: function(url, data, callback, async, cache, state, errorcall) {
        var d = data,
            call = callback;
        if (typeof(d) == 'function') {
            d = {};
            call = data;
        }
        var isasync = true;
        if (typeof(async) == 'boolean') isasync = async;
        var iscache = false;
        if (typeof(cache) == 'boolean') iscache = cache;
        $.ajax({
            type: 'post',
            url: url,
            global: true,
            async: isasync,
            cache: iscache,
            data: d,
            success: function(dd) {
                $.isNotLogin(dd);
                if (typeof(call) == 'function') {
                    try {
                        if (state && typeof(state) != 'function') call(dd, state);
                        else call(dd);
                    } catch (e) { console.error(e.message); }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (typeof(errorcall) == 'function') {
                    try { errorcall(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                } else if (typeof(state) == 'function') {
                    try { state(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                }
            }
        });
    },

    datagridConfig: {
        loadMsg: '',
        pageSize: 20,
        pageList: [10, 15, 20, 25, 30, 35, 40, 50, 100],
        onBeforeLoad: function(param) {
            param.page_size = param.rows;
            param.page_index = param.page;
            delete param.rows;
            delete param.page;
            if (param.sort && param.order) {
                var orderarr = param.sort.split(',');
                var sortarr = param.order.split(',');
                if (orderarr.length == sortarr.length) {
                    var orderby = '';
                    for (var i = 0; i < orderarr.length; i++) {
                        var s1 = orderarr[i].trim();
                        var s2 = sortarr[i].trim();
                        if (s1 && s2) orderby = orderby.concat(s1, ' ', s2, ',')
                    }
                    if (orderby.length > 0) orderby = orderby.substring(0, orderby.length - 1);
                    param.orderby = orderby;
                }
                delete param.sort;
                delete param.order;
            }
        },
        loadFilter: function(data) {
            if (data && $.isArray(data.data)) return { total: data.data.length, rows: data.data };
            if (data && $.isArray(data.rows)) return data;

            if (data.status != 0) {
                if (!$.isNotLogin(data)) {
                    $.showDataMsg("获取数据失败！", data);
                }
            }

            var pagedata = { total: 0, rows: [] };
            if (data.data) {
                pagedata.total = data.data.total_count;
                if (data.data.data) pagedata.rows = data.data.data;
                if (data.data.footer) {
                    pagedata.footer = data.data.footer;
                }
            }

            return pagedata;
        },
        onLoadSuccess: function(data) {
            $(this).datagrid('resize');
        },
    },

    getApiPrivate: function(url, data, callback, async, state, errorcall) {
        var d = data,
            call = callback;
        if (typeof(d) == 'function') {
            d = {};
            call = data;
        }
        var isasync = true;
        if (typeof(async) == 'boolean') isasync = async;
        var apiurl = $.getApiUrl(url);
        $.ajax({
            type: 'GET',
            url: apiurl,
            global: false,
            xhrFields: { withCredentials: true },
            crossDomain: true,
            async: isasync,
            cache: false,
            data: d,
            success: function(dd) {
                $.isNotLogin(dd);
                if (typeof(call) == 'function') {
                    try {
                        if (state && typeof(state) != 'function') call(dd, state);
                        else call(dd);
                    } catch (e) { console.error(e.message); }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (typeof(errorcall) == 'function') {
                    try { errorcall(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                } else if (typeof(state) == 'function') {
                    try { state(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                }
            }
        });
    },
    getApiPublic: function(url, data, callback, async, state, errorcall) {
        var d = data,
            call = callback;
        if (typeof(d) == 'function') {
            d = {};
            call = data;
        }
        var isasync = true;
        if (typeof(async) == 'boolean') isasync = async;
        var apiurl = $.getApiUrl(url);
        $.ajax({
            type: 'GET',
            url: apiurl,
            global: true,
            xhrFields: { withCredentials: true },
            crossDomain: true,
            async: isasync,
            cache: false,
            data: d,
            success: function(dd) {
                $.isNotLogin(dd);
                if (typeof(call) == 'function') {
                    try {
                        if (state && typeof(state) != 'function') call(dd, state);
                        else call(dd);
                    } catch (e) { console.error(e.message); }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (typeof(errorcall) == 'function') {
                    try { errorcall(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                } else if (typeof(state) == 'function') {
                    try { state(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                }
            }
        });
    },
    postApiPrivate: function(url, data, callback, async, state, errorcall) {
        var d = data,
            call = callback;
        if (typeof(d) == 'function') {
            d = {};
            call = data;
        }
        var isasync = true;
        if (typeof(async) == 'boolean') isasync = async;
        var apiurl = $.getApiUrl(url);
        $.ajax({
            type: 'post',
            url: apiurl,
            global: false,
            xhrFields: { withCredentials: true },
            crossDomain: true,
            async: isasync,
            cache: false,
            data: d,
            success: function(dd) {
                $.isNotLogin(dd);
                if (typeof(call) == 'function') {
                    try {
                        if (state && typeof(state) != 'function') call(dd, state);
                        else call(dd);
                    } catch (e) { console.error(e.message); }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (typeof(errorcall) == 'function') {
                    try { errorcall(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                } else if (typeof(state) == 'function') {
                    try { state(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                }
            }
        });
    },
    postApiPublic: function(url, data, callback, async, state, errorcall) {
        var d = data,
            call = callback;
        if (typeof(d) == 'function') {
            d = {};
            call = data;
        }
        var isasync = true;
        if (typeof(async) == 'boolean') isasync = async;
        var apiurl = $.getApiUrl(url);
        $.ajax({
            type: 'post',
            url: apiurl,
            global: true,
            xhrFields: { withCredentials: true },
            crossDomain: true,
            async: isasync,
            cache: false,
            data: d,
            success: function(dd) {
                $.isNotLogin(dd);
                if (typeof(call) == 'function') {
                    try {
                        if (state && typeof(state) != 'function') call(dd, state);
                        else call(dd);
                    } catch (e) { console.error(e.message); }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (typeof(errorcall) == 'function') {
                    try { errorcall(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                } else if (typeof(state) == 'function') {
                    try { state(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                }
            }
        });
    },

    uploadApiPrivate: function(url, formData, callback, async, state, errorcall) {
        var isasync = true;
        if (typeof(async) == 'boolean') isasync = async;
        var apiurl = $.getApiUrl(url);
        $.ajax({
            type: 'post',
            url: apiurl,
            global: false,
            xhrFields: { withCredentials: true },
            crossDomain: true,
            async: isasync,
            cache: false,
            processData: false,
            contentType: false,
            data: formData,
            success: function(dd) {
                $.isNotLogin(dd);
                if (typeof(callback) == 'function') {
                    try {
                        if (state && typeof(state) != 'function') callback(dd, state);
                        else callback(dd);
                    } catch (e) { console.error(e.message); }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (typeof(errorcall) == 'function') {
                    try { errorcall(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                } else if (typeof(state) == 'function') {
                    try { state(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                }
            }
        });
    },
    uploadApiPublic: function(url, formData, callback, async, state, errorcall) {
        var isasync = true;
        if (typeof(async) == 'boolean') isasync = async;
        var apiurl = $.getApiUrl(url);
        $.ajax({
            type: 'post',
            url: apiurl,
            global: true,
            xhrFields: { withCredentials: true },
            crossDomain: true,
            async: isasync,
            cache: false,
            processData: false,
            contentType: false,
            data: formData,
            success: function(dd) {
                $.isNotLogin(dd);
                if (typeof(callback) == 'function') {
                    try {
                        if (state && typeof(state) != 'function') callback(dd, state);
                        else callback(dd);
                    } catch (e) { console.error(e.message); }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (typeof(errorcall) == 'function') {
                    try { errorcall(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                } else if (typeof(state) == 'function') {
                    try { state(jqXHR, textStatus, errorThrown); } catch (e) { console.error(e.message); }
                }
            }
        });
    },
});