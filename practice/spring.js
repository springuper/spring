// spring javascript library
// springuper@gmail.com
// http://www.shangchun.net
// version:0.0.1    date:2011.3.22

// 全局命名空间只保留一个变量
var Sp = window.Sp || {};

(function(){
    // 正则
    Sp.REG = {
        ID:/^#\S+$/,
        CLASS:/^\.\S+$/,
        TAG:/^[a-z]+$/i
    };

    // Language
    (function(){
        OP = Object.prototype,
        ARRAY_TOSTRING = '[object Array]',
        FUNCTION_TOSTRING = '[object Function]',
        OBJECT_TOSTRING = '[object Object]',

        Sp.L = {
            /**
             * @description 转换array-like对象为true array
             * @param object a
             * @return array
             */
            arrailize:function(a){
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
             * @param array|array-like a
             * @param function method 
             */
            batch:function(a, method){
                if (a.item || a.length) {
                    // NodeList or array
                    for (var i = 0, len = a.length; i < len; ++i) { method(a[i]); }
                }
            },
            /**
             * @description 判断是否为数组 
             * @param any el
             * @return bool 
             */
            isArray:function(el){
                return OP.toString.apply(el) === ARRAY_TOSTRING;
            }
        };
    })();

    // User agent
    (function(){
        Sp.UA = {

        };
    })();

    // Dom
    (function(){
        Sp.D = {
            /** 
             * @description 根据选择器获取元素
             * @param string|array|htmlelement|nodeList str 
             * @return htmlelement|array
             */
            $:function(str){
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
                        if (Sp.REG.ID.test(r)) {
                            el = Sp.D.get(r.substr(1));
                            if (el) {
                                can.push(el);
                                num += 1;
                            }
                        } else if (Sp.REG.CLASS.test(r)) {
                            // class
                            els = Sp.D.getElementsByClassName(r.substr(1), '*', root);
                            can = can.concat(Sp.L.arrailize(els));
                            num += els.length;
                        } else if (Sp.REG.TAG.test(r)) {
                            // tag
                            els = root.getElementsByTagName(r);
                            can = can.concat(Sp.L.arrailize(els));
                            num += els.length;
                        }
                    }
                    count = num;
                }
                return can.length === 1 ? can[0] : can;
            },
            /** 
             * @description 根据id获取元素
             * @param string|htmlelement|array id
             * @return htmlelement|array
             */
            get:function(id){
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
                        can.push(SP.D.get(id[i]));
                    }
                    return can;
                }
                return null;
            },
            /** 
             * @description 根据className获取元素
             * @param string|regex className
             * @param string tag
             * @param string|htmlelement root
             * @return array
             */
            getElementsByClassName:function(className, tag, root){
                tag = tag || '*';
                root = root ? Sp.D.get(root) : document;
                var re = [];
                var els = root.getElementsByTagName(tag);
                for (var i = 0, len = els.length; i < len; ++i) {
                    var el = els[i];
                    if (className.test) {
                        // regex
                       if (className.test(el.className)) {
                        re.push(el);
                       } 
                    }
                    else if (el.className.indexOf(className) !== -1) {
                        re.push(el); 
                    }
                }
                return re;
            },
            getElementsByAttribute:function(attr, tag, root){
                // todo
            },
            getElementsByType:function(attr, tag, root){
                // todo
            },
            getElementsByValue:function(attr, tag, root){
                // todo
            }
        };
    })();

    // Event
    (function(){
        Sp.E = {
            /** 
             * @description 注册事件 
             * @param string|htmlelement el
             * @param string type
             * @param function handler
             * @return boolean 
             */
            listen:function(el, type, handler, capture){
                if (Sp.L.isArray(el)) {
                    Sp.L.batch(el, function(e){ Sp.E.listen(e, type, handler, capture); });
                    return true;
                }
                if (document.addEventListener) {
                    console.log(el);
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
            }
        }
    })();
})();

