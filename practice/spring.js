// spring javascript library
// springuper@gmail.com
// http://www.shangchun.net
// version:0.0.1    date:2011.3.22

// 全局命名空间只保留一个变量
var Spring = window.Spring || {};

(function(){
    // 正则
    Spring.REG = {
        ID:/^#\S+$/,
        CLASS:/^\.\S+$/,
        TAG:/^([a-z]+|h[1-6])$/i
    };

    // Language
    (function() {
        var OP = Object.prototype,
            ARRAY_TOSTRING = '[object Array]',
            FUNCTION_TOSTRING = '[object Function]',
            OBJECT_TOSTRING = '[object Object]',
            MASK = '___SPRING___',
            uid = 1,

            L = {
                /**
                 * @description 转换array-like对象为true array
                 * @param {Object} a
                 * @return {Array}
                 */
                arrailize: function(a) {
                    var arr = [];
                    try {
                        // 仅对arguments等有效，对nodeList在IE下有问题
                        arr = Array.prototype.slice.call(a, 0); 
                    } catch (ex) {
                        for (var i = 0, len = a.length; i < len; ++i) { arr.push(a[i]); }
                    }
                    return arr;
                },
                /**
                 * @description 批处理 
                 * @param {Array|Array-like} a
                 * @param {Function} method 
                 */
                batch: function(a, method) {
                    if (a.item || a.length) {
                        // NodeList or array
                        for (var i = 0, len = a.length; i < len; ++i) { method(a[i]); }
                    }
                },
                /**
                 * @description 判断是否为数组 
                 * @param {Object} o
                 * @return {Boolean} 
                 */
                isArray: function(o) {
                    return OP.toString.apply(o) === ARRAY_TOSTRING;
                },
                /**
                 * @description 判断是否为函数
                 * @param {Object} o
                 * @return {Boolean}
                 */
                isFunction: function(o) {
                    return OP.toString.apply(o) === FUNCTION_TOSTRING;
                },
                /**
                 * @description 判断是否为对象
                 * @param {Object} o
                 * @return {Boolean}
                 */
                isObject: function(o) {
                    return OP.toString.apply(o) === OBJECT_TOSTRING;
                },
                /**
                 * @description 判断是否为空
                 * ex: null, undefined, 0, Nan, '', [], {}
                 * @param {Object} o
                 * @return {Boolean}
                 */
                isEmpty: function(o) {
                    if (!o) return true;
                    if (this.isArray(o)) {
                        return !o.length;
                    }
                    if (this.isObject(o)) {
                        for (var p in o) {
                            if (o.hasOwnProperty(p)) return false;
                        }
                        return true;
                    }
                    return false;
                },
                /**
                 * @description 返回当前时间
                 * @return {Integer} 
                 */
                now: function() {
                    return (new Date()).getTime();
                },
                /**
                 * @description 计时
                 * @return {Object} 
                 */
                timing: function() {
                    var ts = this.now();
                    
                    return {
                        // 时间段
                        span:function() {
                            var span = L.now() - ts;
                            ts += span;
                            return span;
                        }
                    };
                },
                /**
                 * @description 生成全局唯一id
                 * @return {String}
                 */
                guid: function() {
                    return MASK + uid++;
                }
            };

        Spring.Lang = L;
    })();

    // User agent
    (function() {
        var UA = {

        };

        Spring.UA = UA;
    })();

    // Util
    (function() {
        var caceh = {},
            expando = 'data-' + L.now(),
            
            Data = {
                get: function(elem) {
                    var id = elem[expando];
                    if (!id) {
                        id = elem[expando] = L.guid();
                        cache[id] = {};
                    }
                    return cache[id];
                },
                remove: function(elem) {
                    var id = elem[expando];
                    if (!id) return;

                    delete cache[id];
                    try {
                        delete elem[expando];
                    } catch(e) {
                        if (elem.removeAttribute) {
                            elem.removeAttribute(expando);
                        }
                    }
                }
            },
            
            Util = {
                decodeJSON: function(str) {
                    try {
                        return eval('(' + str + ')');
                    } catch(e) {
                        return null;
                    }
                },
                decodeAttr: function(el, attr) {
                    var val = el && el.getAttribute('data' + attr);
                    return decodeJSON(val);
                }
            };

        Spring.Data= Data;
        Spring.Util = Util;
    })();



    // Dom
    (function() {
        var REG = Spring.REG,
            L = Spring.Lang,

            D = {
                /** 
                 * @description 根据选择器获取元素
                 * @param {String|Array|HTMLElement|NodeList} str 
                 * @return {HTMLElement|Array}
                 */
                $:function(str) {
                    if (!str) return document;

                    var arr = str.split(/\s+/);
                    var count = 1, can = [];
                    can.push(document);
                    for (var i = 0, len = arr.length; i < len; ++i) {
                        var r = arr[i];
                        var num = 0, root = null, els = [];
                        for (var j = 0; j < count; ++j) {
                            // 弹出父级元素，并根据条件添加子元素
                            root = can.shift(); 
                            if (REG.ID.test(r)) {
                                el = D.get(r.substr(1));
                                if (el) {
                                    can.push(el);
                                    num += 1;
                                }
                            } else if (REG.CLASS.test(r)) {
                                // class
                                els = D.getElementsByClassName(r.substr(1), '*', root);
                                can = can.concat(L.arrailize(els));
                                num += els.length;
                            } else if (REG.TAG.test(r)) {
                                // tag
                                els = root.getElementsByTagName(r);
                                can = can.concat(L.arrailize(els));
                                num += els.length;
                            }
                        }
                        count = num;
                    }
                    return can.length === 1 ? can[0] : can;
                },
                /** 
                 * @description 根据id获取元素
                 * @param {String|HTMLElement|Array} id
                 * @return {HTMLElement|Array}
                 */
                get:function(id) {
                    var i, len;

                    if (id.nodeType || id.item) {
                        // node or NodeList
                        return id;
                    }
                    if (typeof id === 'string') {
                        var el = document.getElementById(id);
                        if (el && el.id && el.id === id) {
                            return el;
                        } else if (el && document.all) {
                            // 处理IE下name与id相同时的bug
                            el = null;
                            var nodes = document.all(id);
                            for (i = 0, len = nodes.length; i < len; ++i) {
                                var n = nodes[i];
                                if (n.id && n.id === id) {
                                    return n;
                                }
                            }
                        }
                    }
                    if ('length' in id) {
                        var can = [];
                        for (i = 0, len = id.length; i < len; ++i) {
                            can.push(D.get(id[i]));
                        }
                        return can;
                    }
                    return null;
                },
                /** 
                 * @description 根据className获取元素
                 * @param {String|Regex} className
                 * @param {String} tag
                 * @param {String|HTMLElement} root
                 * @return {Array}
                 */
                getElementsByClassName:function(className, tag, root) {
                    tag = tag || '*';
                    root = root ? D.get(root) : document;
                    var re = [];
                    var els = root.getElementsByTagName(tag);
                    for (var i = 0, len = els.length; i < len; ++i) {
                        var el = els[i];
                        if (className.test) {
                            // regex
                            if (className.test(el.className)) {
                                re.push(el);
                            } 
                        } else if (el.className.indexOf(className) !== -1) {
                            re.push(el); 
                        }
                    }
                    return re;
                },
                getElementsByAttribute:function(attr, tag, root) {
                    // TODO
                },
                getElementsByType:function(attr, tag, root) {
                    // TODO
                },
                getElementsByValue:function(attr, tag, root){
                    // TODO
                }
            };

        Spring.DOM = D;
        window.$ = D.$;
    })();

    // Event
    (function() {
        var L = Spring.Lang,
            D = Spring.DOM,
            Data = Srping.Data,

            E = {
                /** 
                 * @description 注册事件 
                 * @param {String|HTMLElement} el
                 * @param {String} type
                 * @param {Function} handler
                 * @return {Boolean} 
                 */
                listen: function(el, type, handler, capture) {
                    if (L.isArray(el)) {
                        L.batch(el, function(e) { E.listen(e, type, handler, capture); });
                        return true;
                    }
                    if (document.addEventListener) {
                        el.addEventListener(type, handler, capture);
                        return true;
                    } else if (document.attachEvent()) {
                        // 处理IE下handler中this指向bug
                        el.attachEvent('on' + type, function(){ handler.call(el); });
                        return true;
                    } else {
                        el['on' + type] = handler;
                        return true;
                    }
                    return false;
                },
                fixEvent: function(e) {
                    if (!e || !e.stopPropagation) {
                        var old = e || window.event;
                        e = {};
                        for (var prop in old) {
                            e[prop] = old[prop];
                        }

                        if (!e.target) {
                            e.target = e.srcElement || document;
                        }

                        e.relatedTarget = e.fromElement === e.target ?
                            e.toElement :
                            e.fromElement;

                        e.preventDefault = function() {
                            e.returnValue = false;
                            e.isDefaultPrevented = returnTrue;
                        };
                        e.isDefaultPrevented = returnFalse;

                        e.stopPropagation = function() {
                            e.cancelBubble = true;
                            e.isPropagationStopped = returnTrue;
                        };
                        e.isPropagationStopped = returnFalse;

                        e.stopImmediatePropagation = function() {
                            e.isImmediatePropagationStopped = returnTrue;
                            e.stopPropagation();
                        }
                        e.isImmediatePropagationStopped = returnFalse;

                        if (e.clientX != null) {
                            var doc = document.documentElement, body = document.body;
                            e.pageX = e.clientX +
                                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                                (doc && doc.clientLeft || body && body.clientLeft || 0);
                            e.pageY = e.clientY +
                                (doc && doc.scrollTop || body && body.scrollTop || 0) -
                                (doc && doc.clientTop || body && body.clientTop || 0);
                        }

                        e.which = e.charCode || e.keyCode;

                        if (e.button != null) {
                            e.button = (e.button & 1 ? 0:
                                (e.button & 4 ? 1 :
                                    (e.button & 2 ? 2 : 0)));
                        }
                    }

                    return e;

                    function returnTrue() { return true; }
                    function returnFalse() { return false; }
                },
                addListener: function(el, type, fn) {
                    var data = Data.get(el),
                        handlers;

                    if (!data.handler) {
                        data.handler = function(e) {
                            e = E.fixEvent(e);

                            var handlers = Data.get(el).events[e.type];
                            for (var i = 0, len = handlers.length; i < len; i++) {
                                handlers[i].call(el, e);
                                if (e.isImmediatePropagationStopped()) break;
                            }
                        };
                    }

                    if (!data.events) {
                        data.events = {};
                    }

                    handlers = data.events[type];

                    if (!handlers) {
                        handlers = data.events[type] = [];

                        if (document.addEventListener) {
                            el.addEventListener(type, data.handler, false);
                        } else if (document.attachEvent) {
                            el.attachEvent('on' + type, data.handler);
                        }
                    }

                    if (!fn.guid) {
                        fn.guid = L.guid();
                    }

                    handlers.push(fn);
                },
                removeListener: function(el, type, fn) {
                    var data = Data.get(el),
                        handlers;

                    if (!data.events) return;

                    if (!type) {
                        for (type in data.events) {
                            E.cleanUpListeners(el, type)
                        }
                        return;
                    }

                    handlers = data.events[type];
                    if (!handlers) return;

                    if (fn && fn.guid) {
                        for (var i = 0, len = handlers.length; i < len; i++) {
                            if (handlers[i].guid == fn.guid) {
                                handlers.splice(i--, 1);
                            }
                        }
                    }

                    cleanUpListeners(elem, type);
                },
                triggerListeners: function(el, typ)
                proxy: function(context, fn) {
                    if (!fn.guid) {
                        fn.guid = L.guid();
                    }
                    var ret = function() {
                        return fn.apply(context, arguments);
                    };
                    ret.guid = fn.guid;

                    return ret;
                },
                cleanUpListeners: function(el, type) {
                    var data = Data.get(el);

                    if (data.events[type].length === 0) {
                        delete data.events[type];

                        if (document.removeListener) {
                            el.removeListener(type, data.handler, false);
                        } else if (document.detachEvent) {
                            el.detachEvent('on' + type, data.handler); 
                        }
                    }

                    if (L.isEmpty(data.events)) {
                        delete data.events;
                        delete data.handler;
                    }

                    if (L.isEmpty(data)) {
                        Data.remove(el);
                    }
                }
            };

        Spring.Event = E;
    })();
})();
