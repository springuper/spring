/*1340588471,169776067*/

if (window.CavalryLogger) {
	CavalryLogger.start_js(["xGQmO"]);
}

window.__DEV__ = window.__DEV__ || 0;

if (!JSON.stringify.__fb) JSON.stringify = function(a) {
	function b() {
		var c = a.apply(this, arguments);
		if (!c) return c;
		return c.replace(/[%\u2028\u2029]/g, function(d) {
			var e = d.charCodeAt(0).toString(16);
			return '\\u0000'.substring(0, 6 - e.length) + e;
		});
	}
	b.__fb = true;
	return b;
} (JSON.stringify);

function bagofholding() {}
function bagof(a) {
	return function() {
		return a;
	};
}
Array.prototype.reduce = null;
Array.prototype.reduceRight = null;
document.documentElement.className = document.documentElement.className.replace('no_js', '');
(function(a) {
	if (a.require) return;
	var b = {},
	c = {},
	d = {},
	e = 0,
	f = 1,
	g = 2,
	h = Object.prototype.hasOwnProperty;
	function i(t) {
		var u = b[t],
		v,
		w,
		x;
		if (!b[t]) {
			x = 'Requiring unknown module "' + t + '"';
			throw new Error(x);
		}
		if (u.waiting && u.special & g) l();
		if (u.waiting) {
			x = 'Requiring module "' + t + '" with unresolved dependencies';
			throw new Error(x);
		}
		if (!u.exports) {
			var y = u.exports = {},
			z = u.factory;
			if (typeof z === 'string') {
				var aa = '(' + z + ')';
				z = (eval)(aa);
			}
			if (Object.prototype.toString.call(z) === '[object Function]') {
				var ba = [],
				ca = u.dependencies,
				da = ca.length;
				if (u.special & g) da = Math.min(da, z.length);
				for (w = 0; w < da; w++) {
					v = ca[w];
					ba.push(v === 'module' ? u: (v === 'exports' ? y: i(v)));
				}
				var ea = z.apply(u.context || a, ba);
				if (ea) u.exports = ea;
			} else u.exports = z;
		}
		if (u.refcount-- === 1) delete b[t];
		return u.exports;
	}
	function j(t, u, v, w, x, y) {
		if (u === undefined) {
			u = [];
			v = t;
			t = n();
		} else if (v === undefined) {
			v = u;
			u = t;
			t = n();
		}
		var z = b[t];
		if (z) {
			if (y) z.refcount += y;
			return;
		} else if (!u && ! v && y) {
			d[t] = (d[t] || 0) + y;
			return;
		} else {
			z = {
				id: t
			};
			z.refcount = (d[t] || 0) + (y || 0);
			delete d[t];
		}
		z.factory = v;
		z.dependencies = u;
		z.context = x;
		z.special = w;
		b[t] = z;
		o(t);
	}
	function k(t, u, v) {
		j(t, u, undefined, f, v, 1);
	}
	function l() {
		var t = {},
		u;
		for (u in c) if (h.call(c, u)) if (b[u] && ! t[u] && b[u].special & g) m({},
		u, t);
	}
	function m(t, u, v) {
		v[u] = 1;
		var w = c[u],
		x;
		if (!w) return;
		t[u] = 1;
		for (x in w) if (h.call(w, x)) {
			if (!b[x].special & g) continue;
			if (t[x]) {
				delete w[x];
				b[x].waiting--;
				if (!b[x].waiting) p(x);
			} else m(t, x, v);
		}
		t[u] = 0;
	}
	function n() {
		return '__mod__' + e++;
	}
	function o(t) {
		var u = b[t],
		v = 0;
		for (var w = 0; w < u.dependencies.length; w++) {
			var x = u.dependencies[w];
			if (!b[x] || b[x].waiting) {
				c[x] || (c[x] = {});
				if (!c[x][t]) v++;
				c[x][t] = 1;
			}
		}
		u.waiting = v;
		if (!v) p(t);
	}
	function p(t) {
		var u = b[t];
		if (u.special & f) i(t);
		var v = c[t];
		if (v) {
			delete c[t];
			for (var w in v) if (h.call(v, w)) if (!--b[w].waiting) p(w);
		}
	}
	function q(t, u) {
		b[t] = {
			id: t
		};
		b[t].exports = u;
	}
	q('module', 0);
	q('exports', 0);
	q('define', j);
	q('global', a);
	q('require', i);
	q('requireDynamic', i);
	q('requireLazy', k);
	j.amd = {};
	a.define = j;
	a.require = i;
	a.requireDynamic = i;
	a.requireLazy = k;
	i.__debug = {
		modules: b,
		deps: c
	};
	var r = false,
	s = function(t, u, v, w) {
		j(t, u, v, w || g);
		if (b[t].waiting && ! r) r = setTimeout(function() {
			l();
			r = false;
		},
		9);
	};
	a.__d = function(t, u, v, w) {
		u = ['global', 'require', 'requireDynamic', 'requireLazy', 'module', 'exports'].concat(u);
		s(t, u, v, w);
	};
	a.__e = a.__d;
})(this);
__d("copyProperties", [], function(a, b, c, d, e, f) {
	function g(h, i, j, k, l, m, n) {
		h = h || {};
		var o = [i, j, k, l, m],
		p = 0,
		q;
		while (o[p]) {
			q = o[p++];
			for (var r in q) h[r] = q[r];
			if (q.hasOwnProperty && q.hasOwnProperty('toString') && (typeof q.toString != 'undefined') && (h.toString !== q.toString)) h.toString = q.toString;
		}
		return h;
	}
	e.exports = g;
});
__d("Env", ["copyProperties"], function(a, b, c, d, e, f) {
	var g = b('copyProperties'),
	h = {
		start: Date.now()
	};
	if (a.Env) {
		g(h, a.Env);
		a.Env = undefined;
	}
	e.exports = h;
});
__d("ErrorUtils", ["Env"], function(a, b, c, d, e, f) {
	var g = b('Env'),
	h = [],
	i = [],
	j = 10,
	k = window.chrome && 'type' in new Error();
	function l(q) {
		if (!q) {
			return {};
		} else if (q._originalError) return q;
		var r = {
			line: q.lineNumber || q.line,
			message: q.message,
			name: q.name,
			script: q.fileName || q.sourceURL || q.script,
			stack: q.stackTrace || q.stack
		};
		r._originalError = q;
		if (k && /(\w{3,5}:\/\/[^:]+):(\d+)/.test(q.stack)) {
			r.script = RegExp.$1;
			r.line = parseInt(RegExp.$2, 10);
		}
		for (var s in r)(r[s] == null && delete r[s]);
		return r;
	}
	function m(q, r) {
		q = l(q); ! r;
		if (i.length < j) i.push(q);
		for (var s = 0; s < h.length; s++) try {
			h[s](q);
		} catch(t) {}
	}
	function n(q, r, s, t) {
		if (g.nocatch || (/nocatch/).test(location.search)) return q.apply(r, s || []);
		try {
			return q.apply(r, s || []);
		} catch(u) {
			var v = l(u);
			if (t) t(v);
			v.callee = q.toString().substring(0, 100);
			if (s) v.args = String(s).substring(0, 100);
			m(v);
		}
	}
	function o(q, r, s) {
		m({
			message: q,
			script: r,
			line: s
		},
		true);
	}
	window.onerror = o;
	function p(q, r) {
		h.push(q);
		if (!r) i.forEach(q);
	}
	e.exports = {
		history: i,
		onerror: o,
		reportError: m,
		normalizeError: l,
		applyWithGuard: n,
		addListener: p
	};
});
__d("hasArrayNature", [], function(a, b, c, d, e, f) {
	function g(h) {
		return ( !! h && (typeof h == 'object' || typeof h == 'function') && ('length' in h) && ! ('setInterval' in h) && (Object.prototype.toString.call(h) === "[object Array]" || ('callee' in h) || ('item' in h)));
	}
	e.exports = g;
});
__d("createArrayFrom", ["hasArrayNature"], function(a, b, c, d, e, f) {
	var g = b('hasArrayNature');
	function h(i) {
		if (!g(i)) return [i];
		if (i.item) {
			var j = i.length,
			k = new Array(j);
			while (j--) k[j] = i[j];
			return k;
		}
		return Array.prototype.slice.call(i);
	}
	e.exports = h;
});
__d("Arbiter", ["ErrorUtils", "copyProperties", "createArrayFrom", "hasArrayNature"], function(a, b, c, d, e, f) {
	var g = b('ErrorUtils'),
	h = b('copyProperties'),
	i = b('createArrayFrom'),
	j = b('hasArrayNature');
	if (!window.async_callback) window.async_callback = function(m, n) {
		return m;
	};
	function k() {
		h(this, {
			_listeners: [],
			_events: {},
			_callbacks: {},
			_last_id: 1,
			_listen: {},
			_index: {}
		});
		h(this, k);
	}
	h(k, {
		SUBSCRIBE_NEW: 'new',
		SUBSCRIBE_ALL: 'all',
		BEHAVIOR_EVENT: 'event',
		BEHAVIOR_PERSISTENT: 'persistent',
		BEHAVIOR_STATE: 'state',
		LIVEMESSAGE: 'livemessage',
		BOOTLOAD: 'bootload',
		FUNCTION_EXTENSION: 'function_ext',
		subscribe: function(m, n, o) {
			m = i(m);
			var p = m.some(function(x) {
				return ! x || typeof(x) != 'string';
			});
			if (p) return null;
			o = o || k.SUBSCRIBE_ALL;
			var q = k._getInstance(this);
			q._listeners.push({
				callback: n,
				types: m
			});
			var r = q._listeners.length - 1;
			for (var s = 0; s < m.length; s++) {
				var t = m[s];
				if (!q._index[t]) q._index[t] = [];
				q._index[t].push(r);
				if (o == k.SUBSCRIBE_ALL) if (t in q._events) for (var u = 0; u < q._events[t].length; u++) {
					var v = q._events[t][u],
					w = g.applyWithGuard(n, null, [t, v]);
					if (w === false) {
						q._events[t].splice(u, 1);
						u--;
					}
				}
			}
			return new l(q, r);
		},
		unsubscribe: function(m) {
			m.unsubscribe();
		},
		inform: function(m, n, o) {
			var p = j(m);
			m = i(m);
			var q = k._getInstance(this),
			r = {};
			o = o || k.BEHAVIOR_EVENT;
			for (var s = 0; s < m.length; s++) {
				var t = m[s],
				u = null;
				if (o == k.BEHAVIOR_PERSISTENT) {
					u = q._events.length;
					if (! (t in q._events)) q._events[t] = [];
					q._events[t].push(n);
					q._events[t]._stateful = false;
				} else if (o == k.BEHAVIOR_STATE) {
					u = 0;
					q._events[t] = [n];
					q._events[t]._stateful = true;
				} else if (t in q._events) q._events[t]._stateful = false;
				a.ArbiterMonitor && a.ArbiterMonitor.record('event', t, n, q);
				var v;
				if (q._index[t]) {
					var w = i(q._index[t]);
					for (var x = 0; x < w.length; x++) {
						var y = q._listeners[w[x]];
						if (y) {
							v = g.applyWithGuard(y.callback, null, [t, n]);
							if (v === false) {
								if (u !== null) q._events[t].splice(u, 1);
								break;
							}
						}
					}
				}
				q._updateCallbacks(t, n);
				a.ArbiterMonitor && a.ArbiterMonitor.record('done', t, n, q);
				r[t] = v;
			}
			return p ? r: r[m[0]];
		},
		query: function(m) {
			var n = k._getInstance(this);
			if (! (m in n._events)) return null;
			if (n._events[m].length) return n._events[m][0];
			return null;
		},
		_instance: null,
		_getInstance: function(m) {
			if (m instanceof k) return m;
			if (!k._instance) k._instance = new k();
			return k._instance;
		},
		registerCallback: function(m, n) {
			var o, p = 0,
			q = k._getInstance(this),
			r = false;
			if (typeof m == 'function') {
				o = q._last_id;
				q._last_id++;
				r = true;
			} else {
				if (!q._callbacks[m]) return null;
				o = m;
			}
			if (j(n)) {
				var s = {};
				for (var t = 0; t < n.length; t++) s[n[t]] = 1;
				n = s;
			}
			for (var u in n) {
				try {
					if (q.query(u)) continue;
				} catch(v) {}
				p += n[u];
				if (q._listen[u] === undefined) q._listen[u] = {};
				q._listen[u][o] = (q._listen[u][o] || 0) + n[u];
			}
			if (p === 0 && r) {
				g.applyWithGuard(m);
				return null;
			}
			if (!r) {
				q._callbacks[o].depnum += p;
			} else q._callbacks[o] = {
				callback: window.async_callback(m, 'arbiter'),
				depnum: p
			};
			return o;
		},
		_updateCallbacks: function(m, n) {
			if (n === null || ! this._listen[m]) return;
			for (var o in this._listen[m]) {
				this._listen[m][o]--;
				if (this._listen[m][o] <= 0) delete this._listen[m][o];
				this._callbacks[o].depnum--;
				if (this._callbacks[o].depnum <= 0) {
					var p = this._callbacks[o].callback;
					delete this._callbacks[o];
					g.applyWithGuard(p);
				}
			}
		}
	});
	function l(m, n) {
		this._instance = m;
		this._id = n;
	}
	h(l.prototype, {
		unsubscribe: function() {
			var m = this._instance._listeners,
			n = m[this._id];
			if (!n) return;
			for (var o = 0; o < n.types.length; o++) {
				var p = n.types[o],
				q = this._instance._index[p];
				if (q) for (var r = 0; r < q.length; r++) if (q[r] == this._id) {
					q.splice(r, 1);
					if (q.length === 0) delete q[p];
					break;
				}
			}
			delete m[this._id];
		}
	});
	e.exports = k;
});
__d("ArbiterMixin", ["Arbiter"], function(a, b, c, d, e, f) {
	var g = b('Arbiter'),
	h = {
		_getArbiterInstance: function() {
			return this._arbiter || (this._arbiter = new g());
		},
		inform: function(i, j, k) {
			return this._getArbiterInstance().inform(i, j, k);
		},
		subscribe: function(i, j, k) {
			return this._getArbiterInstance().subscribe(i, j, k);
		},
		unsubscribe: function(i) {
			this._getArbiterInstance().unsubscribe(i);
		},
		registerCallback: function(i, j) {
			this._getArbiterInstance().registerCallback(i, j);
		}
	};
	e.exports = h;
});
__d("legacy:ArbiterMixin", ["ArbiterMixin"], function(a, b, c, d) {
	a.ArbiterMixin = b('ArbiterMixin');
},
3);
__d("function-extensions", ["createArrayFrom"], function(a, b, c, d, e, f) {
	var g = b('createArrayFrom');
	Function.prototype.curry = function() {
		var h = g(arguments);
		return this.bind.apply(this, [null].concat(h));
	};
	Function.prototype.shield = function(h) {
		if (typeof this != 'function') throw new TypeError();
		var i = this.bind.apply(this, g(arguments));
		return function() {
			return i();
		};
	};
	Function.prototype.defer = function(h, i) {
		if (typeof this != 'function') throw new TypeError();
		h = h || 0;
		return setTimeout(this, h, i);
	};
},
3);
__d("isEmpty", [], function(a, b, c, d, e, f) {
	function g(h) {
		if (h instanceof Array) {
			return h.length === 0;
		} else if (h instanceof Object) {
			for (var i in h) return false;
			return true;
		} else return ! h;
	}
	e.exports = g;
});
__d("CSSLoader", ["isEmpty"], function(a, b, c, d, e, f) {
	var g = b('isEmpty'),
	h = 20,
	i = 5000,
	j,
	k,
	l = {},
	m = [],
	n,
	o = {};
	function p(u) {
		var v = Array.prototype.slice(arguments, 1);
		for (var w = 0; w < u.length; w++) u[w].apply(null, v);
	}
	function q(u) {
		if (k) return;
		k = true;
		var v = document.createElement('link');
		v.onload = function() {
			j = true;
			v.parentNode.removeChild(v);
		};
		v.rel = 'stylesheet';
		v.href = 'data:text/css;base64,';
		u.appendChild(v);
	}
	function r() {
		var u, v = [],
		w = [];
		if (Date.now() >= n) {
			for (u in o) {
				w.push(o[u].signal);
				v.push(o[u].error);
			}
			o = {};
		} else for (u in o) {
			var x = o[u].signal,
			y = window.getComputedStyle ? getComputedStyle(x, null) : x.currentStyle;
			if (y && parseInt(y.height, 10) > 1) {
				v.push(o[u].load);
				w.push(x);
				delete o[u];
			}
		}
		for (var z = 0; z < w.length; z++) w[z].parentNode.removeChild(w[z]);
		if (!g(v)) {
			p(v);
			n = Date.now() + i;
		}
		return g(o);
	}
	function s(u, v, w, x) {
		var y = document.createElement('meta');
		y.id = 'bootloader_' + u.replace(/[^a-z0-9]/ig, '_');
		v.appendChild(y);
		var z = ! g(o);
		n = Date.now() + i;
		o[u] = {
			signal: y,
			load: w,
			error: x
		};
		if (!z) var aa = setInterval(function ba() {
			if (r()) clearInterval(aa);
		},
		h, false);
	}
	var t = {
		loadStyleSheet: function(u, v, w, x, y) {
			if (l[u]) throw new Error('CSS component ' + u + ' has already been requested.');
			if (document.createStyleSheet) {
				var z;
				for (var aa = 0; aa < m.length; aa++) if (m[aa].imports.length < 31) {
					z = aa;
					break;
				}
				if (z === undefined) {
					m.push(document.createStyleSheet());
					z = m.length - 1;
				}
				m[z].addImport(v);
				l[u] = {
					styleSheet: m[z],
					uri: v
				};
				s(u, w, x, y);
				return;
			}
			var ba = document.createElement('link');
			ba.rel = 'stylesheet';
			ba.type = 'text/css';
			ba.href = v;
			l[u] = {
				link: ba
			};
			if (j) {
				ba.onload = function() {
					ba.onload = ba.onerror = null;
					x();
				};
				ba.onerror = function() {
					ba.onload = ba.onerror = null;
					y();
				};
			} else {
				s(u, w, x, y);
				if (j === undefined) q(w);
			}
			w.appendChild(ba);
		},
		registerLoadedStyleSheet: function(u, v) {
			if (l[u]) throw new Error('CSS component ' + u + ' has already been requested.');
			l[u] = {
				link: v
			};
		},
		unloadStyleSheet: function(u) {
			if (!u in l) return;
			var v = l[u],
			w = v.link;
			if (w) {
				w.onload = w.onerror = null;
				w.parentNode.removeChild(w);
			} else {
				var x = v.styleSheet;
				for (var y = 0; y < x.imports.length; y++) if (x.imports[y].href == v.uri) {
					x.removeImport(y);
					break;
				}
			}
			delete o[u];
			delete l[u];
		}
	};
	e.exports = t;
});
__d("Bootloader", ["function-extensions", "Arbiter", "CSSLoader", "Env", "createArrayFrom", "isEmpty"], function(a, b, c, d, e, f) {
	b('function-extensions');
	var g = b('Arbiter'),
	h = b('CSSLoader'),
	i = b('Env'),
	j = b('createArrayFrom'),
	k = b('isEmpty'),
	l = {},
	m = {},
	n = {},
	o = null,
	p = {},
	q = {},
	r = false,
	s = [];
	function t(x, y, z, aa) {
		var ba = w.done.curry([z], x == 'css');
		if (x == 'js') {
			var ca = document.createElement('script');
			ca.src = y;
			ca.async = true;
			var da = p[z];
			if (da && da.crossOrigin && i.crossorigin_attribute) ca.crossOrigin = 'anonymous';
			ca.onload = ca.onerror = ba;
			ca.onreadystatechange = function() {
				if (this.readyState in {
					loaded: 1,
					complete: 1
				}) ba();
			};
			aa.appendChild(ca);
		} else if (x == 'css') h.loadStyleSheet(z, y, aa, ba, function() {
			ba();
		});
	}
	function u(x) {
		if (!p[x]) return;
		if (p[x].type == 'css') {
			h.unloadStyleSheet(x);
			delete l[x];
			g.inform(g.BOOTLOAD + '/' + x, null, g.BEHAVIOR_STATE);
		}
	}
	function v(x, y) {
		if (!r) {
			s.push([x, y]);
			return;
		}
		x = j(x);
		var z = [];
		for (var aa = 0; aa < x.length; ++aa) {
			if (!x[aa]) continue;
			var ba = n[x[aa]];
			if (ba) {
				var ca = ba.resources;
				for (var da = 0; da < ca.length; ++da) z.push(ca[da]);
			}
		}
		w.loadResources(z, y);
	}
	var w = {
		configurePage: function(x) {
			var y = {},
			z = w.resolveResources(x),
			aa;
			for (aa = 0; aa < z.length; aa++) {
				y[z[aa].src] = z[aa];
				w.requested(z[aa].name);
			}
			var ba = document.getElementsByTagName('link');
			for (aa = 0; aa < ba.length; ++aa) {
				if (ba[aa].rel != 'stylesheet') continue;
				for (var ca in y) if (ba[aa].href.indexOf(ca) !== - 1) {
					var da = y[ca].name;
					if (y[ca].permanent) m[da] = true;
					delete y[ca];
					h.registerLoadedStyleSheet(da, ba[aa]);
					w.done([da], true);
					break;
				}
			}
		},
		loadComponents: function(x, y) {
			x = j(x);
			var z = [],
			aa = [];
			for (var ba = 0; ba < x.length; ba++) {
				var ca = n[x[ba]];
				if (ca && ! ca.module) continue;
				var da = 'legacy:' + x[ba];
				if (n[da]) {
					x[ba] = da;
					z.push(da);
				} else if (ca && ca.module) {
					z.push(x[ba]);
					if (!ca.runWhenReady) aa.push(x[ba]);
				}
			}
			v(x, z.length ? d.curry(z, y) : y);
		},
		loadModules: function(x, y) {
			var z = [],
			aa = [];
			for (var ba = 0; ba < x.length; ba++) {
				var ca = n[x[ba]];
				if (!ca || ca.module) z.push(x[ba]);
			}
			v(x, d.curry(z, y));
		},
		loadResources: function(x, y, z, aa) {
			var ba;
			x = w.resolveResources(j(x));
			if (z) {
				var ca = {};
				for (ba = 0; ba < x.length; ++ba) ca[x[ba].name] = true;
				for (var da in l) if (! (da in m) && ! (da in ca) && ! (da in q)) u(da);
				q = {};
			}
			var ea = [],
			fa = [];
			for (ba = 0; ba < x.length; ++ba) {
				var ga = x[ba];
				if (ga.permanent) m[ga.name] = true;
				var ha = g.BOOTLOAD + '/' + ga.name;
				if (g.query(ha) !== null) continue;
				if (!ga.nonblocking) fa.push(ha);
				if (!l[ga.name]) {
					w.requested(ga.name);
					ea.push(ga);
					window.CavalryLogger && window.CavalryLogger.getInstance().measureResources(ga, aa);
				}
			}
			if (y) y = g.registerCallback(y, fa);
			var ia = document.documentMode || + (/MSIE.(\d+)/.exec(navigator.userAgent) || [])[1],
			ja = w.getHardpoint(),
			ka = ia ? ja: document.createDocumentFragment();
			for (ba = 0; ba < ea.length; ++ba) t(ea[ba].type, ea[ba].src, ea[ba].name, ka);
			if (ja !== ka) ja.appendChild(ka);
			return y;
		},
		requestResource: function(x, y, z) {
			var aa = w.getHardpoint();
			t(x, y, z, aa);
		},
		done: function(x, y) {
			w.requested(x);
			if (!y) {
				var z = {
					sender: this
				};
				g.inform(g.BOOTLOAD, z, g.BEHAVIOR_EVENT);
			}
			for (var aa = 0; aa < x.length; ++aa) {
				var ba = x[aa];
				g.inform(g.BOOTLOAD + '/' + ba, true, g.BEHAVIOR_STATE);
			}
		},
		requested: function(x) {
			x = j(x);
			for (var y = 0; y < x.length; ++y) l[x[y]] = true;
		},
		enableBootload: function(x) {
			for (var y in x) if (!n[y]) n[y] = x[y];
			if (!r) {
				r = true;
				for (var z = 0; z < s.length; z++) v.apply(null, s[z]);
				s = [];
			}
		},
		getHardpoint: function() {
			if (!o) {
				var x = document.getElementsByTagName('head');
				o = x.length && x[0] || document.body;
			}
			return o;
		},
		setResourceMap: function(x) {
			if (!x) return;
			for (var y in x) {
				if (!x[y].name) x[y].name = y;
				p[y] = x[y];
			}
		},
		resolveResources: function(x) {
			if (!x) return [];
			var y = [];
			for (var z = 0; z < x.length; ++z) if (typeof x[z] == 'string') {
				if (x[z] in p) y.push(p[x[z]]);
			} else y.push(x[z]);
			return y;
		},
		loadEarlyResources: function(x) {
			var y;
			w.setResourceMap(x);
			var z = [];
			for (y in x) z.push(p[y]);
			w.loadResources(z);
			for (y in x) {
				var aa = p[y];
				if (!aa.permanent) q[aa.name] = aa;
			}
		},
		isDisplayJS: function(x) {
			if (typeof x == 'string') x = p[x];
			return x.displayjs;
		}
	};
	e.exports = w;
});
__d("ge", [], function(a, b, c, d, e, f) {
	function g(h) {
		return typeof h == 'string' ? document.getElementById(h) : h;
	}
	e.exports = g;
});
__d("$", ["ge"], function(a, b, c, d, e, f) {
	var g = b('ge');
	function h(i) {
		var j = g(i);
		return j;
	}
	e.exports = h;
});
__d("CSS", ["$"], function(a, b, c, d, e, f) {
	var g = b('$'),
	h = 'hidden_elem',
	i = {
		setClass: function(j, k) {
			g(j).className = k || '';
			return j;
		},
		hasClass: function(j, k) {
			j = g(j);
			return (' ' + j.className + ' ').indexOf(' ' + k + ' ') > - 1;
		},
		addClass: function(j, k) {
			j = g(j);
			if (k && ! i.hasClass(j, k)) j.className = j.className + ' ' + k;
			return j;
		},
		removeClass: function(j, k) {
			j = g(j);
			if (i.hasClass(j, k)) j.className = j.className.replace(new RegExp('(^|\\s)' + k + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
			return j;
		},
		conditionClass: function(j, k, l) {
			return (l ? i.addClass: i.removeClass)(j, k);
		},
		toggleClass: function(j, k) {
			return i.conditionClass(j, k, ! i.hasClass(j, k));
		},
		shown: function(j) {
			return ! i.hasClass(j, h);
		},
		hide: function(j) {
			return i.addClass(j, h);
		},
		show: function(j) {
			return i.removeClass(j, h);
		},
		toggle: function(j) {
			return i.toggleClass(j, h);
		},
		conditionShow: function(j, k) {
			return i.conditionClass(j, h, ! k);
		}
	};
	e.exports = i;
});
__d("BlueBarController", ["Bootloader", "CSS"], function(a, b, c, d, e, f) {
	var g = b('Bootloader'),
	h = b('CSS');
	f.init = function(i) {
		if ('getBoundingClientRect' in i) {
			var j = function() {
				var k = i.getBoundingClientRect(),
				l = Math.round(k.top) - document.documentElement.clientTop;
				h.conditionClass(i.firstChild, 'fixed_elem', l <= 0);
			};
			j();
			g.loadModules(['event-extensions'], function() {
				Event.listen(window, 'scroll', j);
			});
		}
	};
});
__d("legacy:css-core", ["CSS"], function(a, b, c, d) {
	a.CSS = b('CSS');
},
3);
__d("legacy:dom-core", ["$", "ge"], function(a, b, c, d) {
	a.$ = b('$');
	a.ge = b('ge');
},
3);
__d("Parent", ["CSS"], function(a, b, c, d, e, f) {
	var g = b('CSS'),
	h = {
		byTag: function(i, j) {
			j = j.toUpperCase();
			while (i && i.nodeName != j) i = i.parentNode;
			return i;
		},
		byClass: function(i, j) {
			while (i && ! g.hasClass(i, j)) i = i.parentNode;
			return i;
		},
		byAttribute: function(i, j) {
			while (i && (!i.getAttribute || ! i.getAttribute(j))) i = i.parentNode;
			return i;
		}
	};
	e.exports = h;
});
__d("legacy:parent", ["Parent"], function(a, b, c, d) {
	a.Parent = b('Parent');
},
3);
__d("legacy:arbiter", ["Arbiter"], function(a, b, c, d) {
	a.Arbiter = b('Arbiter');
},
3);
__d("event-form-bubbling", [], function(a, b, c, d, e, f) {
	a.Event = a.Event || function() {};
	Event.__inlineSubmit = function(g, event) {
		var h = Event.__getHandler && Event.__getHandler(g, 'submit');
		return h ? null: Event.__bubbleSubmit(g, event);
	};
	Event.__bubbleSubmit = function(g, event) {
		if (document.documentElement.attachEvent) {
			var h;
			while (h !== false && (g = g.parentNode)) h = g.onsubmit ? g.onsubmit(event) : Event.__fire && Event.__fire(g, 'submit', event);
			return h;
		}
	};
},
3);
__d("OnloadEvent", [], function(a, b, c, d, e, f) {
	var g = {
		ONLOAD: 'onload/onload',
		ONLOAD_CALLBACK: 'onload/onload_callback',
		ONLOAD_DOMCONTENT: 'onload/dom_content_ready',
		ONLOAD_DOMCONTENT_CALLBACK: 'onload/domcontent_callback',
		ONBEFOREUNLOAD: 'onload/beforeunload',
		ONUNLOAD: 'onload/unload'
	};
	e.exports = g;
});
__d("Run", ["Arbiter", "OnloadEvent"], function(a, b, c, d, e, f) {
	var g = b('Arbiter'),
	h = b('OnloadEvent'),
	i = g.BEHAVIOR_STATE;
	function j(x) {
		var y = a.CavalryLogger;
		y && y.getInstance().setTimeStamp(x);
	}
	function k() {
		return ! window.loading_page_chrome;
	}
	function l(x) {
		var y = a.OnloadHooks;
		if (window.loaded && y) {
			y.runHook(x, 'onlateloadhooks');
		} else q('onloadhooks', x);
	}
	function m(x) {
		var y = a.OnloadHooks;
		if (window.afterloaded && y) {
			setTimeout(function() {
				y.runHook(x, 'onlateafterloadhooks');
			},
			0);
		} else q('onafterloadhooks', x);
	}
	function n(x, y) {
		if (y === undefined) y = k();
		y ? q('onbeforeleavehooks', x) : q('onbeforeunloadhooks', x);
	}
	function o(x) {
		if (!window.onunload) window.onunload = function() {
			g.inform(h.ONUNLOAD, true, i);
		};
		q('onunloadhooks', x);
	}
	function p(x) {
		q('onleavehooks', x);
	}
	function q(x, y) {
		window[x] = (window[x] || []).concat(y);
	}
	function r(x) {
		window[x] = [];
	}
	function s() {
		g.inform(h.ONLOAD_DOMCONTENT, true, i);
	}
	a._domcontentready = s;
	function t() {
		var x = document,
		y = window;
		if (x.addEventListener) {
			var z = /AppleWebKit.(\d+)/.exec(navigator.userAgent);
			if (z && z[1] < 525) {
				var aa = setInterval(function() {
					if (/loaded|complete/.test(x.readyState)) {
						s();
						clearInterval(aa);
					}
				},
				10);
			} else x.addEventListener("DOMContentLoaded", s, true);
		} else {
			var ba = 'javascript:void(0)';
			if (y.location.protocol == 'https:') ba = '//:';
			x.write('<script onreadystatechange="if (this.readyState==\'complete\') {' + 'this.parentNode.removeChild(this);_domcontentready();}" ' + 'defer="defer" src="' + ba + '"><\/script\>');
		}
		var ca = y.onload;
		y.onload = function() {
			j('t_layout');
			ca && ca();
			g.inform(h.ONLOAD, true, i);
		};
		y.onbeforeunload = function() {
			var da = {};
			g.inform(h.ONBEFOREUNLOAD, da, i);
			if (!da.warn) g.inform('onload/exit', true);
			return da.warn;
		};
	}
	var u = g.registerCallback(function() {
		j('t_onload');
		g.inform(h.ONLOAD_CALLBACK, true, i);
	},
	[h.ONLOAD]),
	v = g.registerCallback(function() {
		j('t_domcontent');
		g.inform(h.ONLOAD_DOMCONTENT_CALLBACK, true, i);
	},
	[h.ONLOAD_DOMCONTENT]);
	t();
	var w = {
		onLoad: l,
		onAfterLoad: m,
		onLeave: p,
		onBeforeUnload: n,
		onUnload: o,
		__domContentCallback: v,
		__onloadCallback: u,
		__removeHook: r
	};
	e.exports = w;
});
__d("legacy:onload", ["Run", "OnloadEvent"], function(a, b, c, d) {
	var e = b('Run');
	a.OnloadEvent = b('OnloadEvent');
	a.onloadRegister_DEPRECATED = e.onLoad;
	a.onloadRegister = function() {
		return e.onLoad.apply(this, arguments);
	};
	a.onafterloadRegister_DEPRECATED = e.onAfterLoad;
	a.onafterloadRegister = function() {
		return e.onAfterLoad.apply(this, arguments);
	};
	a.onleaveRegister = e.onLeave;
	a.onbeforeunloadRegister = e.onBeforeUnload;
	a.onunloadRegister = e.onUnload;
},
3);
__d("wait_for_load", ["Bootloader", "Run"], function(a, b, c, d, e, f) {
	var g = b('Bootloader'),
	h = b('Run');
	function i(l, m) {
		return window.loaded && m.call(l);
	}
	function j(l, m, n) {
		g.loadComponents.call(g, m, n.bind(l));
		return false;
	}
	function k(l, m, n) {
		n = n.bind(l, m);
		if (window.loaded) return n();
		switch ((m || event).type) {
		case 'load':
		case 'focus':
			h.onAfterLoad(n);
			return;
		case 'click':
			var o = l.style,
			p = document.body.style;
			o.cursor = p.cursor = 'progress';
			h.onAfterLoad(function() {
				o.cursor = p.cursor = '';
				if (l.tagName.toLowerCase() == 'a') {
					if (false !== n() && l.href) window.location.href = l.href;
				} else if (l.click) l.click();
			});
			break;
		}
		return false;
	}
	a.run_if_loaded = i;
	a.run_with = j;
	a.wait_for_load = k;
},
3);
__d("Intl", [], function(a, b, c, d, e, f) {
	function g(i) {
		if (typeof i != 'string') return false;
		return i.match(new RegExp(g.punct_char_class + '[' + ')"' + "'" + '\u00BB' + '\u0F3B' + '\u0F3D' + '\u2019' + '\u201D' + '\u203A' + '\u3009' + '\u300B' + '\u300D' + '\u300F' + '\u3011' + '\u3015' + '\u3017' + '\u3019' + '\u301B' + '\u301E' + '\u301F' + '\uFD3F' + '\uFF07' + '\uFF09' + '\uFF3D' + '\s' + ']*$'));
	}
	g.punct_char_class = '[' + '.!?' + '\u3002' + '\uFF01' + '\uFF1F' + '\u0964' + '\u2026' + '\u0EAF' + '\u1801' + '\u0E2F' + '\uFF0E' + ']';
	function h(i) {
		var j = window.intl_locale_rewrites;
		if (j) {
			var k = [],
			l = [];
			for (var m in j.patterns) {
				var n = j.patterns[m];
				for (var o in j.meta) {
					var p = new RegExp(o.slice(1, - 1), 'g'),
					q = j.meta[o];
					m = m.replace(p, q);
					n = n.replace(p, q);
				}
				k.push(m);
				l.push(n);
			}
			for (var r = 0; r < k.length; r++) {
				var s = new RegExp(k[r].slice(1, - 1), 'g');
				if (l[r] == 'javascript') {
					i.replace(s, function(t) {
						return t.slice(1).toLowerCase();
					});
				} else i = i.replace(s, l[r]);
			}
		}
		return i.replace(/\x01/g, '');
	}
	e.exports = {
		endsInPunct: g,
		phonologicalRules: h
	};
});
__d("tx", ["Intl"], function(a, b, c, d, e, f) {
	var g = b('Intl');
	function h(j, k) {
		if (!k) return j;
		var l = '\\{([^}]+)\\}(' + g.endsInPunct.punct_char_class + '*)',
		m = new RegExp(l, 'g'),
		n = [],
		o = j.replace(m, function(r, s, t) {
			var u = k[s];
			if (u && typeof u === 'object') {
				n.push(u);
				return '\x17' + t;
			}
			return u + (g.endsInPunct(u) ? '': t);
		}).split('\x17').map(g.phonologicalRules);
		if (o.length === 1) return o[0];
		var p = [o[0]];
		for (var q = 0; q < n.length; q++) p.push(n[q], o[q + 1]);
		return p;
	}
	function i(j, k) {
		if (typeof _string_table == 'undefined') return;
		j = _string_table[j];
		return h(j, k);
	}
	i._ = h;
	e.exports = i;
});
__d("legacy:intl-core", ["tx"], function(a, b, c, d) {
	var e = b('tx');
	a.tx = e;
	a._tx = e._;
},
3);
__d("array-extensions", [], function(a, b, c, d, e, f) {
	Array.prototype.contains = function(g) {
		return this.indexOf(g) != - 1;
	};
	Array.prototype.remove = function(g) {
		var h = this.indexOf(g);
		if (h != - 1) this.splice(h, 1);
	};
},
3);
__d("JSCC", ["isEmpty"], function(a, b, c, d, e, f) {
	var g = b('isEmpty'),
	h = {},
	i = {};
	function j(m) {
		var n, o = false;
		return function() {
			if (!o) {
				n = m();
				o = true;
			}
			return n;
		};
	}
	function k(m, n) {
		if (g(m)) return;
		for (var o in m) {
			h[o] = j(m[o]);
			if (n) {
				if (!i[n]) i[n] = [];
				i[n].push(o);
			}
		}
	}
	var l = {
		get: function(m) {
			if (!h[m]) throw new Error('JSCC entry is missing');
			return h[m]();
		},
		init: function(m) {
			k(m);
		},
		initForPagelet: function(m, n) {
			k(n, m);
		},
		clearForPagelet: function(m) {
			if (i[m]) {
				for (var n = 0; n < i[m].length; n++) {
					var o = i[m][n];
					delete h[o];
				}
				delete i[m];
			}
		}
	};
	e.exports = l;
});
__d("ServerJS", ["function-extensions", "ErrorUtils", "copyProperties"], function(a, b, c, d, e, f) {
	b('function-extensions');
	var g = b('ErrorUtils'),
	h = b('copyProperties');
	function i() {
		this._moduleMap = {};
		this._relativeTo = null;
	}
	h(i.prototype, {
		handle: function(n) {
			g.applyWithGuard(function(o) {
				if (o.__guard) throw new Error('ServerJS.handle called on data that has already been handled');
				o.__guard = true;
				k(o.define || [], this._handleDefine, this);
				k(o.markup || [], this._handleMarkup, this);
				k(o.elements || [], this._handleElement, this);
				k(o.instances || [], this._handleInstance, this);
				k(o.require || [], this._handleRequire, this);
			},
			this, [].concat(n));
		},
		handlePartial: function(n) { (n.instances || []).forEach(l.curry(this._moduleMap, 3));
			(n.markup || []).forEach(l.curry(this._moduleMap, 2));
			this.handle(n);
		},
		cleanup: function() {
			var n = [];
			for (var o in this._moduleMap) n.push(o);
			d.call(null, n, m);
			this._moduleMap = {};
		},
		setRelativeTo: function(n) {
			this._relativeTo = n;
			return this;
		},
		_handleDefine: function(n, o, p) {
			define(n, o, function() {
				this._replaceTransportMarkers(p);
				return p;
			}.bind(this));
		},
		_handleRequire: function(n, o, p, q) {
			var r = [n].concat(p || []);
			d(r, function(s) {
				q && this._replaceTransportMarkers(q);
				if (o) {
					if (!s[o]) throw new TypeError('Module ' + n + ' has no method ' + o);
					s[o].apply(s, q || []);
				}
			}.bind(this));
		},
		_handleInstance: function(n, o, p, q) {
			var r = null;
			if (o) r = function(s) {
				this._replaceTransportMarkers(p);
				var t = Object.create(s.prototype);
				s.apply(t, p);
				return t;
			}.bind(this);
			define(n, o, r, 0, null, q);
		},
		_handleMarkup: function(n, o, p) {
			define(n, ['HTML'], function(q) {
				return q.replaceJSONWrapper(o).getRootNode();
			},
			0, null, p);
		},
		_handleElement: function(n, o, p, q) {
			var r = q ? [q] : [];
			define(n, r, function(s) {
				var t = j(o, s);
				return t;
			},
			0, null, p);
		},
		_replaceTransportMarkers: function(n, o) {
			var p = (typeof o !== 'undefined') ? n[o] : n,
			q;
			if (Array.isArray(p)) {
				for (q = 0; q < p.length; q++) this._replaceTransportMarkers(p, q);
			} else if (p && typeof p == 'object') if (p.__m) {
				n[o] = b(p.__m);
			} else if (p.__e) {
				n[o] = j(p.__e);
			} else if (p.__rel) {
				n[o] = this._relativeTo;
			} else for (var r in p) this._replaceTransportMarkers(p, r);
		}
	});
	function j(n, o) {
		var p, q, r;
		if (o) {
			if (o.id == n) {
				p = o;
			} else if (o.getElementsByTagName) {
				q = o.getElementsByTagName('*');
				for (r = 0; r < q.length; r++) if (q[r].id == n) {
					p = q[r];
					break;
				}
			} else {
				q = o.childNodes;
				for (r = 0; r < q.length; r++) {
					p = j(n, q[r]);
					if (p) break;
				}
			}
		} else p = document.getElementById(n);
		return p;
	}
	function k(n, o, p) {
		for (var q = 0; q < n.length; q++) o.apply(p, [].concat(n[q]));
	}
	function l(n, o, p) {
		var q = p[0];
		if (! (q in n)) p[o] = (p[o] || 0) + 1;
		n[q] = true;
	}
	function m() {
		return {};
	}
	e.exports = i;
});
__d("invokeCallbacks", ["ErrorUtils"], function(a, b, c, d, e, f) {
	var g = b('ErrorUtils');
	function h(i, j) {
		if (i) for (var k = 0; k < i.length; k++) g.applyWithGuard(new Function(i[k]), j);
	}
	e.exports = h;
});
__d("BigPipe", ["Arbiter", "Bootloader", "Env", "JSCC", "OnloadEvent", "Run", "ServerJS", "$", "copyProperties", "ge", "hasArrayNature", "invokeCallbacks"], function(a, b, c, d, e, f) {
	var g = b('Arbiter'),
	h = b('Bootloader'),
	i = b('Env'),
	j = b('JSCC'),
	k = b('OnloadEvent'),
	l = b('Run'),
	m = b('ServerJS'),
	n = b('$'),
	o = b('copyProperties'),
	p = b('ge'),
	q = b('hasArrayNature'),
	r = b('invokeCallbacks'),
	s = document.documentMode || + (/MSIE.(\d+)/.exec(navigator.userAgent) || [])[1],
	t = g.BEHAVIOR_STATE,
	u = g.BEHAVIOR_PERSISTENT;
	function v(aa) {
		return (!aa || q(aa) && aa.length === 0) ? {}: aa;
	}
	function w(aa) {
		if (!aa || typeof aa === 'string') return aa;
		if (aa.container_id) {
			var ba = n(aa.container_id);
			aa = x(ba) || '';
			ba.parentNode.removeChild(ba);
			return aa;
		}
		return null;
	}
	function x(aa) {
		if (!aa.firstChild) {
			h.loadModules(['ErrorSignal'], function(ca) {
				ca.sendErrorSignal('bigpipe', 'Pagelet markup container is empty.');
			});
			return null;
		}
		if (aa.firstChild.nodeType !== 8) return null;
		var ba = aa.firstChild.nodeValue;
		ba = ba.substring(1, ba.length - 1);
		return ba.replace(/\\([\s\S]|$)/g, '$1');
	}
	function y(aa, ba) {
		var ca = document.createElement('div'),
		da = s < 7;
		if (da) aa.appendChild(ca);
		ca.innerHTML = ba;
		var ea = document.createDocumentFragment();
		while (ca.firstChild) ea.appendChild(ca.firstChild);
		aa.appendChild(ea);
		if (da) aa.removeChild(ca);
	}
	function z(aa) {
		o(this, {
			arbiter: g,
			rootNodeID: 'content',
			lid: 0,
			isAjax: false,
			domContentCallback: l.__domcontentCallback,
			onloadCallback: l.__onloadCallback,
			domContentEvt: k.ONLOAD_DOMCONTENT_CALLBACK,
			onloadEvt: k.ONLOAD_CALLBACK,
			forceFinish: false,
			jsEarlier: false,
			_phaseDoneCallbacks: [],
			_currentPhase: 0,
			_lastPhase: - 1
		});
		o(this, aa);
		z._current_instance = this;
		this._serverJS = new m();
		g.inform('BigPipe/init', {
			lid: this.lid,
			arbiter: this.arbiter
		},
		u);
		this.arbiter.registerCallback(this._serverJS.cleanup.bind(this._serverJS), ['pagelet_displayed_all']);
		this.arbiter.registerCallback(this.domContentCallback, ['pagelet_displayed_all']);
		this._informEventExternal('phase_begin', {
			phase: 0
		});
		this.arbiter.inform('phase_begin_0', true, t);
		this.onloadCallback = this.arbiter.registerCallback(this.onloadCallback, ['pagelet_displayed_all']);
	}
	o(z.prototype, {
		_displayPageletHandler: function(aa) {
			if (this.displayCallback) {
				this.displayCallback(this._displayPagelet.bind(this, aa));
			} else this._displayPagelet(aa);
		},
		_displayPagelet: function(aa) {
			this._informPageletEvent('display_start', aa.id);
			aa.content = v(aa.content);
			var ba = true,
			ca = function() {
				this._informPageletEvent('display', aa.id);
				this.arbiter.inform(aa.id + '_displayed', true, t);
			}.bind(this);
			for (var da in aa.content) {
				var ea = aa.content[da];
				if (aa.append) da = this._getAppendTargetID(aa);
				var fa = p(da);
				if (fa) {
					ea = w(ea);
					if (ea) if (!aa.append && aa.has_inline_js) {
						if (a.DOM && a.HTML) {
							DOM.setContent(fa, HTML(ea));
						} else {
							ba = false;
							h.loadModules(['DOM', 'HTML'], function(ha, ia) {
								ha.setContent(fa, ia(ea));
								ca();
							});
						}
					} else if (aa.append || s < 8) {
						if (!aa.append) while (fa.firstChild) fa.removeChild(fa.firstChild);
						y(fa, ea);
					} else fa.innerHTML = ea;
					var ga = fa.getAttribute('data-referrer');
					if (!ga) fa.setAttribute('data-referrer', da);
				}
			}
			if (ba) ca();
			if (aa.cache_hit && i.pc_debug == 1) n(aa.id).style.border = "1px red solid";
		},
		_getAppendTargetID: function(aa) {
			if (!aa.append) return null;
			return (aa.append === 'bigpipe_root') ? this.rootNodeID: aa.append;
		},
		_downloadJsForPagelet: function(aa) {
			this._informPageletEvent('jsstart', aa.id);
			h.loadResources(aa.js || [], function() {
				this._informPageletEvent('jsdone', aa.id);
				aa.requires = aa.requires || [];
				if (!this.isAjax || aa.phase >= 1) aa.requires.push('uipage_onload');
				var ba = function() {
					this._isRelevantPagelet(aa) && r(aa.onload);
					this._informPageletEvent('onload', aa.id);
					this.arbiter.inform('pagelet_onload', true, g.BEHAVIOR_EVENT);
					aa.provides && this.arbiter.inform(aa.provides, true, t);
				}.bind(this),
				ca = function() {
					this._isRelevantPagelet(aa) && r(aa.onafterload);
				}.bind(this);
				this.arbiter.registerCallback(ba, aa.requires);
				this.arbiter.registerCallback(ca, [this.onloadEvt]);
			}.bind(this), false, aa.id);
		},
		_downloadCssAndDisplayPagelet: function(aa) {
			this._informPageletEvent('css', aa.id);
			h.loadResources(aa.css || [], function() {
				var ba = aa.display_dependency || [],
				ca = [];
				for (var da = 0; da < ba.length; da++) ca.push(ba[da] + '_displayed');
				this.arbiter.registerCallback(this._displayPageletHandler.bind(this, aa), ca);
			}.bind(this), false, aa.id);
			this._informPageletEvent('css_end', aa.id);
		},
		_downloadAndScheduleDisplayJS: function(aa) {
			var ba = aa.js || [],
			ca = [];
			for (var da = 0; da < ba.length; da++) if (h.isDisplayJS(ba[da])) ca.push(ba[da]);
			h.loadResources(ca, function() {
				if (aa.ondisplay && aa.ondisplay.length) this.arbiter.registerCallback(function() {
					r(aa.ondisplay);
				},
				[aa.id + '_displayed']);
			}.bind(this));
		},
		onPageletArrive: function(aa) {
			this._informPageletEvent('arrive', aa.id, aa.phase);
			var ba = aa.phase;
			if (!this._phaseDoneCallbacks[ba]) this._phaseDoneCallbacks[ba] = this.arbiter.registerCallback(this._onPhaseDone.bind(this), ['phase_complete_' + ba]);
			this.arbiter.registerCallback(this._phaseDoneCallbacks[ba], [aa.id + '_displayed']);
			if (aa.cacheable) {
				if (aa.cache_hit) {
					this._processPagelet(PageletCache.loadFromCache(aa));
				} else {
					PageletCache.write(aa);
					this._processPagelet(aa);
				}
			} else this._processPagelet(aa);
			this._informPageletEvent('arrive_end', aa.id);
		},
		_processPagelet: function(aa) {
			var ba = aa.phase,
			ca = this._getAppendTargetID(aa) || aa.id;
			z.pageletIDs[ca] = ca;
			if (aa.the_end) this._lastPhase = aa.phase;
			if (aa.tti_phase !== undefined) this._ttiPhase = aa.tti_phase;
			if (aa.is_second_to_last_phase) this._secondToLastPhase = aa.phase;
			if (aa.jscc_map) {
				var da = (eval)(aa.jscc_map);
				j.initForPagelet(ca, da);
			}
			h.setResourceMap(aa.resource_map);
			h.enableBootload(v(aa.bootloadable));
			var ea = 'phase_begin_' + ba;
			this.arbiter.registerCallback(this._downloadCssAndDisplayPagelet.bind(this, aa), [ea]);
			this.arbiter.registerCallback(this._downloadAndScheduleDisplayJS.bind(this, aa), [ea]);
			var fa = [aa.id + '_displayed'];
			if (!this.jsNonBlock) if (this.jsEarlier) {
				fa.push('start_to_download_js');
			} else fa.push(this.domContentEvt);
			if (aa.jsmods) this.arbiter.registerCallback(this._serverJS.handlePartial.bind(this._serverJS, aa.jsmods), [aa.id + '_displayed']);
			this.arbiter.registerCallback(this.onloadCallback, ['pagelet_onload']);
			this.arbiter.registerCallback(this._downloadJsForPagelet.bind(this, aa), fa);
			aa.is_last && this.arbiter.inform('phase_complete_' + ba, true, t);
		},
		_onPhaseDone: function() {
			if (this._currentPhase === this._ttiPhase) this._informEventExternal('tti_bigpipe', {
				phase: this._ttiPhase
			});
			var aa = this._currentPhase + 1,
			ba = (function(ca) {
				if (this.jsEarlier && ca) this.arbiter.inform('start_to_download_js', true, t);
				this._informEventExternal('phase_begin', {
					phase: aa
				});
				this.arbiter.inform('phase_begin_' + aa, true, t);
			}).bind(this, this._currentPhase === this._secondToLastPhase);
			if (this._currentPhase === this._lastPhase && this._isRelevant()) this.arbiter.inform('pagelet_displayed_all', true, t);
			this._currentPhase++;
			if (s) {
				setTimeout(ba, 20);
			} else ba();
		},
		_isRelevant: function() {
			return this == z._current_instance || this.jsNonBlock || this.forceFinish;
		},
		_isRelevantPagelet: function(aa) {
			if (!this._isRelevant()) return false;
			var ba = this._getAppendTargetID(aa) || aa.id;
			return z.pageletIDs.hasOwnProperty(ba);
		},
		_informEventExternal: function(aa, ba) {
			ba = ba || {};
			ba.ts = Date.now();
			ba.lid = this.lid;
			this.arbiter.inform(aa, ba, u);
		},
		_informPageletEvent: function(aa, ba, ca) {
			var da = {
				event: aa,
				id: ba
			};
			if (ca) da.phase = ca;
			this._informEventExternal('pagelet_event', da);
		}
	});
	z.pageletIDs = {};
	e.exports = z;
});
__d("legacy:bootloader", ["Bootloader"], function(a, b, c, d) {
	a.Bootloader = b('Bootloader');
},
3);
__d("Class", ["function-extensions", "Arbiter", "copyProperties", "createArrayFrom"], function(a, b, c, d, e, f) {
	b('function-extensions');
	var g = b('Arbiter'),
	h = b('copyProperties'),
	i = b('createArrayFrom'),
	j = {},
	k = null,
	l = {
		extend: function(t, u) {
			if (!k) k = g.subscribe(g.BOOTLOAD, n);
			if (typeof u == 'string') {
				m(t, u);
			} else o(t, u);
		}
	};
	function m(t, u) {
		t.__class_extending = true;
		var v = g.registerCallback(o.curry(t, u), [g.FUNCTION_EXTENSION + '/' + u, g.BOOTLOAD]);
		if (v !== null) j[u] = true;
	}
	function n() {
		for (var t in j) if ( !! a[t]) {
			delete j[t];
			if (!a[t].__class_extending) {
				g.inform(g.FUNCTION_EXTENSION + '/' + t, true, g.BEHAVIOR_STATE);
			} else a[t].__class_name = t;
		}
	}
	function o(t, u) {
		delete t.__class_extending;
		u = typeof u == 'string' ? a[u] : u;
		var v = p(u, 0),
		w = p(t, v.prototype.__level + 1);
		w.parent = v;
		if ( !! t.__class_name) g.inform(g.FUNCTION_EXTENSION + '/' + t.__class_name, true, g.BEHAVIOR_STATE);
	}
	function p(t, u) {
		if (t._metaprototype) return t._metaprototype;
		var v = new Function();
		v.construct = q;
		v.prototype.construct = s(t, u, true);
		v.prototype.__level = u;
		v.base = t;
		t.prototype.parent = v;
		t._metaprototype = v;
		return v;
	}
	function q(t) {
		r(t.parent);
		var u = [],
		v = t;
		while (v.parent) {
			var w = new v.parent();
			u.push(w);
			w.__instance = t;
			v = v.parent;
		}
		t.parent = u[1];
		u.reverse();
		u.pop();
		t.__parents = u;
		t.__instance = t;
		return t.parent.construct.apply(t.parent, arguments);
	}
	function r(t) {
		if (t.initialized) return;
		var u = t.base.prototype;
		if (t.parent) {
			r(t.parent);
			var v = t.parent.prototype;
			for (var w in v) if (w != '__level' && w != 'construct' && u[w] === undefined) u[w] = t.prototype[w] = v[w];
		}
		t.initialized = true;
		var x = t.prototype.__level;
		for (var w in u) if (w != 'parent') u[w] = t.prototype[w] = s(u[w], x);
	}
	function s(t, u, v) {
		if (typeof t != 'function' || t.__prototyped) return t;
		var w = function() {
			var x = this.__instance;
			if (x) {
				var y = x.parent;
				x.parent = u ? x.__parents[u - 1] : null;
				var z = arguments;
				if (v) {
					z = [];
					for (var aa = 1; aa < arguments.length; aa++) z.push(arguments[aa]);
				}
				var ba = t.apply(x, z);
				x.parent = y;
				return ba;
			} else return t.apply(this, arguments);
		};
		w.__prototyped = true;
		return w;
	}
	e.exports = l;
});
__d("legacy:Class", ["Class"], function(a, b, c, d) {
	a.Class = b('Class');
},
3);
__d("legacy:constructor-cache", ["JSCC"], function(a, b, c, d) {
	a.JSCC = b('JSCC');
},
3);
__d("goURI", [], function(a, b, c, d, e, f) {
	function g(h, i) {
		h = h.toString();
		if (!i && a.PageTransitions && PageTransitions.isInitialized()) {
			PageTransitions.go(h);
		} else if (window.location.href == h) {
			window.location.reload();
		} else window.location.href = h;
	}
	e.exports = g;
});
__d("legacy:goURI", ["goURI"], function(a, b, c, d) {
	a.goURI = b('goURI');
},
3);
__d("InitialJSLoader", ["Arbiter", "Bootloader", "OnloadEvent"], function(a, b, c, d, e, f) {
	var g = b('Arbiter'),
	h = b('Bootloader'),
	i = b('OnloadEvent'),
	j = {
		INITIAL_JS_READY: 'BOOTLOAD/JSREADY',
		loadOnDOMContentReady: function(k, l) {
			g.subscribe(i.ONLOAD_DOMCONTENT_CALLBACK, function() {
				function m() {
					h.loadResources(k, function() {
						g.inform(j.INITIAL_JS_READY, true, g.BEHAVIOR_STATE);
					});
				}
				if (l) {
					setTimeout(m, l);
				} else m();
			});
		}
	};
	e.exports = j;
});
__d("lowerDomain", [], function(a, b, c, d, e, f) {
	if (document.domain.toLowerCase().match(/(^|\.)facebook\..*/)) document.domain = window.location.hostname.replace(/^.*(facebook\..*)$/i, '$1');
});
__d("legacy:object-core-utils", ["isEmpty", "copyProperties"], function(a, b, c, d) {
	a.is_empty = b('isEmpty');
	a.copy_properties = b('copyProperties');
	function e(f, g) {
		return copy_properties(window[f] || (window[f] = {}), g);
	}
	a.add_properties = e;
},
3);
__d("PlaceholderListener", ["Arbiter", "CSS", "Parent"], function(a, b, c, d, e, f) {
	var g = b('Arbiter'),
	h = b('CSS'),
	i = b('Parent'),
	j = document.documentElement,
	k = function(l) {
		l = l || window.event;
		var m = l.target || l.srcElement,
		n = m.getAttribute('placeholder');
		if (n) {
			var o = i.byClass(m, 'focus_target');
			if ('focus' == l.type || 'focusin' == l.type) {
				var p = m.value.replace(/\r\n/g, '\n'),
				q = n.replace(/\r\n/g, '\n');
				if (p == q && h.hasClass(m, 'DOMControl_placeholder')) {
					m.value = '';
					h.removeClass(m, 'DOMControl_placeholder');
				}
				if (o) {
					h.addClass(o, 'child_is_active');
					h.addClass(o, 'child_is_focused');
					h.addClass(o, 'child_was_focused');
					g.inform('reflow');
				}
			} else {
				if (m.value === '') {
					h.addClass(m, 'DOMControl_placeholder');
					m.value = n;
					o && h.removeClass(o, 'child_is_active');
					m.style.direction = '';
				}
				o && h.removeClass(o, 'child_is_focused');
			}
		}
	};
	if (j.addEventListener) {
		j.addEventListener('focus', k, true);
		j.addEventListener('blur', k, true);
	} else {
		j.attachEvent('onfocusin', k);
		j.attachEvent('onfocusout', k);
	}
});
__d("isInIframe", [], function(a, b, c, d, e, f) {
	function g() {
		return window != window.top;
	}
	e.exports = g;
});
__d("EagleEye", ["Arbiter", "Bootloader", "Env", "OnloadEvent", "isInIframe"], function(a, b, c, d, e, f) {
	var g = b('Arbiter'),
	h = b('Bootloader'),
	i = b('Env'),
	j = b('OnloadEvent'),
	k = b('isInIframe'),
	l = i.eagleEyeConfig || {},
	m = '_e_',
	n = (window.name || '').toString();
	if (n.length == 7 && n.substr(0, 3) == m) {
		n = n.substr(3);
	} else {
		n = l.seed;
		if (!k()) window.name = m + n;
	}
	var o = (window.location.protocol == 'https:' && document.cookie.match(/\bcsm=1/)) ? '; secure': '',
	p = m + n + '_',
	q = new Date(Date.now() + 604800000).toGMTString(),
	r = window.location.hostname.replace(/^.*(facebook\..*)$/i, '$1'),
	s = '; expires=' + q + ';path=/; domain=' + r + o,
	t = 0,
	u,
	v = l.sessionStorage && a.sessionStorage,
	w = document.cookie.length,
	x = false,
	y = Date.now();
	function z(ea) {
		var fa = 2166136261;
		for (var ga = 0, ha = ea.length; ga < ha; ++ga) fa = (fa ^ ea.charCodeAt(ga)) * 16777619;
		fa += fa << 13;
		fa ^= fa >> 7;
		fa += fa << 3;
		fa ^= fa >> 17;
		fa += fa << 5;
		return (fa | 0) + 2147483648;
	}
	function aa(ea) {
		return p + (t++) + '=' + encodeURIComponent(ea) + s;
	}
	function ba() {
		var ea = [],
		fa = false, // beacon请求是否正在发送中
		ga = 0, // 发送失败的时间戳
		ha = 0; // 发送失败次数
		this.isEmpty = function() {
			return ! ea.length;
		};
		this.enqueue = function(ia, ja) {
			if (ja) {
				ea.unshift(ia);
			} else ea.push(ia);
		};
		this.dequeue = function() {
			ea.shift();
		};
		this.peek = function() {
			return ea[0];
		};
        // ia代表是否强制发送beacon请求
		this.clear = function(ia) {
            // TEST CODE begin
            var firstLog = JSON.stringify(ea[0], null, 4);
            console.log('firstLog');
            console.log(firstLog);
            // TEST CODE end
			w = Math.min(w, document.cookie.length);
			if (!x && (new Date() - y > 60000)) x = true;
            // ia为false时，查找cookie中有无_e_子字符串
			var ja = ! ia && (document.cookie.search(m) >= 0),
			ka = !! i.cookie_header_limit,
            // cookie条目限制
			la = i.cookie_count_limit || 19,
            // cookie长度限制
			ma = i.cookie_header_limit || 3950,
            // 发送beacon请求的cookie条目阈值
			na = la - 5,
            // 发送beacon请求的cookie长度阈值
			oa = ma - 1000;
            // 将所有记录写入cookie
			while (!this.isEmpty()) {
				var pa = aa(this.peek());
                // 超出cookie长度限制，删除首个记录
				if (ka && (pa.length > ma || (x && pa.length + w > ma))) {
					this.dequeue();
					continue;
				}
                // 算入首个记录时，cookie超出长度或条目限制，跳出
				if ((ja || ka) && ((document.cookie.length + pa.length > ma) || (document.cookie.split(';').length > la))) break;
                // 将首个记录写入cookie，对应的key为"s"
				document.cookie = pa;
				ja = true;
				this.dequeue();
			}
			var qa = Date.now();
            // 当cookie达到一定阈值时，发送beacon请求
			if (ia || // 强制发送
                    ! fa && // 没有正在发送请求
                    ja && // 需要发送
                    ((ha > 0) && (Math.min(10 * Math.pow(2, ha - 1), 60000) + ga < qa)) && // 有发送失败的请求，且上次失败时间不是太近
                    g.query(j.ONLOAD) && // 页面已经onload
                    (!this.isEmpty() || (document.cookie.length > oa) || (document.cookie.split(';').length > na)) // 日志队列非空，或cookie长度、条目达到阈值
            ) {
				var ra = new Image(),
				sa = this,
				ta = i.tracking_domain || '';
				fa = true;
				ra.onload = function wa() {
					fa = false;
					ha = 0;
					sa.clear();
				};
				ra.onerror = ra.onabort = function wa() {
					fa = false;
                    // 记录错误时间戳
					ga = Date.now();
                    // 记录错误次数
					ha++;
				};
				var ua = i.fb_isb ? '&fb_isb=' + i.fb_isb: '',
				va = '&__user=' + i.user;
                // beacon地址
				ra.src = ta + '/ajax/nectar.php?asyncSignal=' + (Math.floor(Math.random() * 10000) + 1) + ua + va + '&' + (!ia ? '': 's=') + qa;
			}
		};
	}
	u = new ba();
	if (v) {
		var ca = function() {
			var ea = 0,
			fa = ea;
			function ga() {
				var ja = sessionStorage.getItem('_e_ids');
				if (ja) {
					var ka = (ja + '').split(';');
					if (ka.length == 2) {
						ea = parseInt(ka[0], 10);
						fa = parseInt(ka[1], 10);
					}
				}
			}
			function ha() {
				var ja = ea + ';' + fa;
				sessionStorage.setItem('_e_ids', ja);
			}
			function ia(ja) {
				return '_e_' + ((ja !== undefined) ? ja: ea++);
			}
			this.isEmpty = function() {
				return fa === ea;
			};
			this.enqueue = function(ja, ka) {
				var la = ka ? ia(--fa) : ia();
				sessionStorage.setItem(la, ja);
				ha();
			};
			this.dequeue = function() {
				this.isEmpty();
				sessionStorage.removeItem(ia(fa));
				fa++;
				ha();
			};
			this.peek = function() {
				var ja = sessionStorage.getItem(ia(fa));
				return ja ? (ja + '') : ja;
			};
			this.clear = u.clear;
			ga();
		};
		u = new ca();
	}
	var da = {
		log: function(ea, fa, ga) {
			if (i.no_cookies) return;
			var ha = [n, Date.now(), ea].concat(fa);
			ha.push(ha.length);
			function ia() {
				var ja = JSON.stringify(ha);
				try {
					u.enqueue(ja, !! ga);
					u.clear( !! ga);
				} catch(ka) {
					if (v && (ka.code === 1000)) {
						u = new ba();
						v = false;
						ia();
					}
				}
			}
			ia();
		},
		createLogger: function(ea, fa) {
			fa = (fa === undefined) ? 1: fa;
			var ga = function(ha, ia) {
				if (ga.enabled) da.log(ea, ha, ia);
			};
			ga.enabled = false;
			ga._key = (i.user || Math.random()) + ea;
			ga.enabled = (z(ga._key) % 65535 / 65535) <= fa;
			return ga;
		},
		getSessionID: function() {
			return n;
		},
		hash: function(ea) {
			return z(ea);
		}
	};
	a.EagleEye = e.exports = da;
},
3);
__d("ClickRefUtils", [], function(a, b, c, d, e, f) {
	var g = {
        // 获取内部参考节点id
		get_intern_ref: function(h) {
			if ( !! h) {
				var i = {
					profile_minifeed: 1,
					gb_content_and_toolbar: 1,
					gb_muffin_area: 1,
					ego: 1,
					bookmarks_menu: 1,
					jewelBoxNotif: 1,
					jewelNotif: 1,
					BeeperBox: 1,
					navSearch: 1
				};
                // 沿dom树向上查找
				for (var j = h; j && j != document.body; j = j.parentNode) {
					if (!j.id || typeof j.id !== 'string') continue;
					if (j.id.substr(0, 8) == 'pagelet_') return j.id.substr(8);
					if (j.id.substr(0, 8) == 'box_app_') return j.id;
					if (i[j.id]) return j.id;
				}
			}
			return '-';
		},
        // 获取超文本参考地址
		get_href: function(h) {
			return (h.getAttribute && (h.getAttribute('ajaxify') || h.getAttribute('data-endpoint')) || h.action || h.href || h.name || null);
		},
        // 是否报告
		should_report: function(h, i) {
			if (i == 'FORCE') return true;
			if (i == 'INDIRECT') return false;
			return h && (g.get_href(h) || (h.getAttribute && h.getAttribute('data-ft')));
		}
	};
	e.exports = g;
});
__d("collectDataAttributes", ["ge"], function(a, b, c, d, e, f) {
	var g = b('ge');
	function h(i, j) {
		var k = {},
		l = {},
		m = j.length,
		n, o;
		for (n = 0; n < m; ++n) {
			k[j[n]] = {};
			l[j[n]] = 'data-' + j[n];
		}
		var p = {
			tn: '',
			"tn-debug": ','
		};
		while (i) {
			if (i.getAttribute) for (n = 0; n < m; ++n) {
				var q = i.getAttribute(l[j[n]]);
				if (q) {
					var r = JSON.parse(q);
					for (var s in r) if (p[s] !== undefined) {
                        // p中的属性用数组记录
						if (k[j[n]][s] === undefined) k[j[n]][s] = [];
						k[j[n]][s].push(r[s]);
					} else if (k[j[n]][s] === undefined) k[j[n]][s] = r[s];
				}
			}
            // 继续收集上层节点属性信息
			if (i.getAttribute && (o = i.getAttribute('data-ownerid'))) {
				i = g(o);
			} else i = i.parentNode;
		}
        // 合并p中属性数组
		for (var t in k) for (var u in p) if (k[t][u] !== undefined) k[t][u] = k[t][u].join(p[u]);
		return k;
	}
	e.exports = h;
});
__d("setUECookie", ["Env"], function(a, b, c, d, e, f) {
	var g = b('Env');
	function h(i) {
		if (!g.no_cookies) {
			var j = 0;
			if (a.afterloaded) {
				j = 2;
			} else if (a.loaded) j = 1;
			document.cookie = "act=" + encodeURIComponent(i + ":" + j) + "; path=/; domain=" + window.location.hostname.replace(/^.*(\.facebook\..*)$/i, '$1');
		}
	}
	e.exports = h;
});
__d("ClickRef", ["Arbiter", "EagleEye", "ClickRefUtils", "collectDataAttributes", "copyProperties", "ge", "setUECookie", "$"], function(a, b, c, d, e, f) {
	var g = b('Arbiter'),
	h = b('EagleEye'),
	i = b('ClickRefUtils'),
	j = b('collectDataAttributes'),
	k = b('copyProperties'),
	l = b('ge'),
	m = b('setUECookie'),
	n = b('$');
    // 计算鼠标位置
	function o(q) {
		if (!l('content')) return [0, 0, 0, 0];
		var r = n('content'),
		s = a.Vector2 ? a.Vector2.getEventPosition(q) : {
			x: 0,
			y: 0
		};
		return [s.x, s.y, r.offsetLeft, r.clientWidth];
	}
    // 生成log信息
	function p(q, r, event, s) {
		var t = (!a.ArbiterMonitor) ? 'r': 'a',
            u = [0, 0, 0, 0],
            v,
            w,
            x;
		if ( !! event) {
            // 记录鼠标位置及功能键
			v = event.type;
			if (v == 'click' && l('content')) u = o(event);
			var y = 0;
			event.ctrlKey && (y += 1);
			event.shiftKey && (y += 2);
			event.altKey && (y += 4);
			event.metaKey && (y += 8);
			if (y) v += y;
		}
		if ( !! r) w = i.get_href(r);
		var z = [];
		if (a.ArbiterMonitor) {
			x = a.ArbiterMonitor.getInternRef(r);
			z = a.ArbiterMonitor.getActFields();
		}
		var aa = j( !! event ? (event.target || event.srcElement) : r, ['ft', 'gt']);
		k(aa.ft, s.ft || {});
		k(aa.gt, s.gt || {});
		if (aa.gt.ua_id) q.set_ua_id(aa.gt.ua_id);
		if (typeof(aa.ft.ei) === 'string') delete aa.ft.ei;
		var ba = [
                q._ue_ts, // 时间戳
                q._ue_count, // 事件次序
                w || '-', // 链接地址 get_href
                q._context, // 上下文，一般为自定义事件名称，例如a、form等
                v || '-', // 事件类型+功能键
                x || i.get_intern_ref(r), // 内部参考节点id
                t, // 是否采用ArbiterMonitor
                a.URI ? a.URI.getRequestURI(true, true).getUnqualifiedURI().toString() : location.pathname + location.search + location.hash, // url
                aa // 属性信息
            ].
            concat(u). // 点击位置
            concat(z); // 未知，a.ArbiterMonitor.getActFields()
 
		return ba;
	}
	g.subscribe("UserAction/new", function(q, r) {
		if (i.should_report(r.node, r.mode)) {
			var s = p(r.ua, r.node, r.event, r.extra_data);
            // TEST CODE begin
            var firstLog = JSON.stringify(s, null, 4);
            console.log('s');
            console.log(firstLog);
            // TEST CODE end
			m(r.ua.ue);
			h.log('act', s);
		}
	});
});
__d("trackReferrer", ["Parent"], function(a, b, c, d, e, f) {
	var g = b('Parent');
	function h(i, j) {
		i = g.byAttribute(i, 'data-referrer');
		if (i) {
			var k = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/.exec(j)[1] || '';
			if (!k) return;
			var l = k + '|' + i.getAttribute('data-referrer'),
			m = new Date();
			m.setTime(Date.now() + 1000);
			document.cookie = "x-src=" + encodeURIComponent(l) + "; " + "expires=" + m.toGMTString() + ";path=/; domain=" + window.location.hostname.replace(/^.*(\.facebook\..*)$/i, '$1');
		}
		return i;
	}
	e.exports = h;
});
__d("debounce", [], function(a, b, c, d, e, f) {
	function g(h, i, j, k, l) {
		i = (i != null) ? i: 100;
		var m, n;
		function o() {
			var p = arguments; ! l && o.reset();
			if (!l || ! m || (n + i < Date.now())) {
				m = setTimeout(function() {
					m = null;
					h.apply(this, p);
				}.bind(j || this), i, ! k);
				n = Date.now();
			}
		}
		o.reset = function() {
			m && clearTimeout(m);
			m = null;
		};
		return o;
	}
	e.exports = g;
});
__d("userAction", ["Arbiter", "EagleEye", "copyProperties", "debounce"], function(a, b, c, d, e, f) {
	var g = b('Arbiter'),
	h = b('EagleEye'),
	i = b('copyProperties'),
	j = b('debounce');
    // 用户行为类
    // t:时间戳, u:事件计数, v:行为上下文
	function k(t, u, v) {
		var w = t + '/' + u;
		i(this, {
			ue: w,
			_ua_id: null,
			_ts: t,
			_ns: null,
			_start_ts: t,
			_prev_event: 's',
			_ue_ts: t,
			_ue_count: u,
			_context: v,
			_data_version: 1,
			_event_version: 2,
			_info_version: 1
		});
		this._log('uan', [1, w]);
		this._report = j(function x() {
			var y = [this._info_version, this.ue, this._ns, this._ua_id];
			this._log('uai', y);
		},
		100, this);
	}
	var l = [],
	m = {},
	n = {};
	i(k.prototype, {
		_log: function(t, u) {
			var v = m[t] !== undefined ? m[t] : true,
			w = n[t],
			x = w ? w[this._ns] : {},
			y = x ? x[this._ua_id] : undefined;
			if (y !== undefined ? y: v) h.log(t, u);
		},
		coalesce_ua_id: function(t) {
			if (this._ua_id === null) this.set_ua_id(t);
			return this;
		},
		set_ua_id: function(t) {
			this._ua_id = t;
			this._report();
			return this;
		},
		coalesce_namespace: function(t) {
			if (this._ns === null) this.set_namespace(t);
			return this;
		},
		set_namespace: function(t) {
			this._ns = t;
			this._report();
			return this;
		},
		add_event: function(t, u) {
			u = u || 0;
			var v = (Date.now() - u),
			w = v - this._ts,
			x = v - this._ue_ts,
			y = [this._event_version, this.ue, this._ns, this._ua_id, this._prev_event, t, w, x];
			if (!this._ua_id) return;
			this._log('uae', y);
			this._ts = v;
			this._prev_event = t;
			return this;
		},
		add_data: function(t) {
			var u = [this._data_version, this.ue, t];
			this._log('uad', u);
			return this;
		}
	});
	var o = 0,
	p = 0,
	q = null,
	r = null;
    /// 记录用户行为
	function s(t, u, event, v, w) {
		var x = Date.now(),
		y = x + '/' + o; // 时间戳/事件次序
		w = w || {};
		if (!u && event) u = event.getTarget();
		var z = 50;
		if (u && q) if (x - p < z && u == q && v != "FORCE") return l[l.length - 1];
		if (!window.addEventListener && document.createEventObject) event = document.createEventObject(event);
		q = u;
		r = event;
		var aa = new k(x, o, t);
		l.push(aa);
		while (l.length > 10) l.shift();
		g.inform("UserAction/new", {
			ua: aa,
			node: u,
			mode: v,
			event: event,
			extra_data: w
		});
		p = x;
		o++;
		return aa;
	}
	s.setUATypeConfig = function(t) {
		i(m, t);
	};
	s.setCustomSampleConfig = function(t) {
		i(n, t);
	};
	e.exports = s;
});
__d("Primer", ["ClickRef", "Bootloader", "CSS", "Parent", "trackReferrer", "userAction"], function(a, b, c, d, e, f) {
	b('ClickRef');
	var g = b('Bootloader'),
        h = b('CSS'),
        i = b('Parent'),
        j = b('trackReferrer'),
        k = b('userAction'),
        l = null,
        m = /async(?:-post)?|dialog(?:-pipe|-post)?|theater|toggle/,
        n = document.documentElement;
	function o(r, s) {
		r = i.byAttribute(r, s);
		if (!r) return;
		do {
			var t = r.getAttribute(s);
			JSON.parse(t).forEach(function(u) {
				var v = r;
				g.loadModules.call(g, [u[0]], function(w) {
					w[u[1]](v);
				});
			});
		} while (r = i.byAttribute(r.parentNode, s));
		return false;
	}
    /// 监听html节点内anchor节点的点击事件
	n.onclick = function(r) {
		r = r || window.event;
		l = r.target || r.srcElement;
		var s = o(l, 'data-onclick'),
            // 必须是anchor节点
            t = i.byTag(l, 'A');
		if (!t) return s;
		var u = t.getAttribute('ajaxify'),
            v = t.href,
            w = u || v;
		if (w) {
            /// 调用UserAction记录类
			var x = k('a', t, r).coalesce_namespace('primer');
			if (a.ArbiterMonitor) a.ArbiterMonitor.initUA(x, [t]);
		}
		if (u && v && ! (/#$/).test(v)) {
			var y = r.which && r.which === 2,
			z = r.altKey || r.ctrlKey || r.metaKey || r.shiftKey;
			if (y || z) return;
		}
		j(t, w);
		var aa = t.rel && t.rel.match(m);
		aa = aa && aa[0];
		switch (aa) {
		case 'dialog':
		case 'dialog-post':
			g.loadModules(['AsyncDialog'], function(ba) {
				ba.bootstrap(w, t, aa);
			});
			break;
		case 'dialog-pipe':
			g.loadModules(['Dialog', 'AjaxPipeRequest'], function(ba) {
				ba.bootstrap(w, null, false, null, null, t);
			});
			break;
		case 'async':
		case 'async-post':
			g.loadModules(['AsyncRequest'], function(ba) {
				ba.bootstrap(w, t);
			});
			break;
		case 'theater':
			g.loadModules(['PhotoSnowlift'], function(ba) {
				ba.bootstrap(w, t);
			});
			break;
		case 'toggle':
			h.toggleClass(t.parentNode, 'openToggler');
			g.loadModules(['Toggler'], function(ba) {
				ba.bootstrap(t);
			});
			break;
		default:
			return s;
		}
		return false;
	};
    /// 监听form节点的提交事件，IE下无效，因为IE下submit事件不会冒泡
	n.onsubmit = function(r) {
		r = r || window.event;
		var s = r.target || r.srcElement;
		if (s && s.nodeName == 'FORM' && s.getAttribute('rel') == 'async') {
			var t = k('f', s, r).coalesce_namespace('primer');
			if (a.ArbiterMonitor) a.ArbiterMonitor.initUA(t, [s]);
			var u = l;
			g.loadModules(['Form'], function(v) {
				v.bootstrap(s, u);
			});
			return false;
		}
	};
	var p = null;
	function q(r) {
		r = r || window.event;
		p = r.target || r.srcElement;
		o(p, 'data-on' + r.type);
        // 必须有data-hover属性
		var s = i.byAttribute(p, 'data-hover');
		if (!s) return;
		switch (s.getAttribute('data-hover')) {
		case 'tooltip':
			g.loadModules(['Tooltip'], function(t) {
				t.process(s, p);
			});
			break;
		}
	}
	n.onmouseover = q;
	if (n.addEventListener) {
        // 注册在capture过程
		n.addEventListener('focus', q, true);
	} else n.attachEvent('onfocusin', q);
});
__d("QuicklingPrelude", [], function(a, b, c, d, e, f) {
	var g = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/,
	h = '';
	window.location.href.replace(g, function(i, j, k, l) {
		var m, n, o;
		m = n = j + (k ? '?' + k: '');
		if (l) {
			l = l.replace(/^(!|%21)/, '');
			o = l.charAt(0);
			if (o == '/' || o == '\\') m = l.replace(/^[\\\/]+/, '/');
		}
		if (m != n) {
			if (window._script_path) document.cookie = "rdir=" + window._script_path + "; path=/; domain=" + window.location.hostname.replace(/^.*(\.facebook\..*)$/i, '$1');
			window.location.replace(h + m);
		}
	});
});
__d("SubmitOnEnterListener", ["Bootloader", "CSS"], function(a, b, c, d, e, f) {
	var g = b('Bootloader'),
	h = b('CSS');
	document.documentElement.onkeydown = function(i) {
		i = i || window.event;
		var j = i.target || i.srcElement,
		k = i.keyCode == 13 && ! i.altKey && ! i.ctrlKey && ! i.metaKey && ! i.shiftKey && h.hasClass(j, 'enter_submit');
		if (k) {
			g.loadModules(['DOM', 'Input', 'trackReferrer', 'Form'], function(l, m, n, o) {
				if (!m.isEmpty(j)) {
					var p = j.form,
					q = l.scry(p, '.enter_submit_target')[0] || l.scry(p, '[type="submit"]')[0];
					if (q) {
						var r = o.getAttribute(p, 'ajaxify') || o.getAttribute(p, 'action');
						if (r) n(p, r);
						q.click();
					}
				}
			});
			return false;
		}
	};
});
__d("CommentPrelude", ["CSS", "Parent", "userAction"], function(a, b, c, d, e, f) {
	var g = b('CSS'),
	h = b('Parent'),
	i = b('userAction');
	function j(n, o) {
		i('ufi', n, null, 'FORCE');
		return k(n, o);
	}
	function k(n, o) {
		var p = h.byTag(n, 'form');
		l(p);
		var q = g.removeClass.curry(p, 'hidden_add_comment');
		if (window.ScrollAwareDOM) {
			window.ScrollAwareDOM.monitor(p, q);
		} else q();
		if (o !== false)(p.add_comment_text_text || p.add_comment_text).focus();
		return false;
	}
	function l(n) {
		var o = g.removeClass.curry(n, 'collapsed_comments');
		if (window.ScrollAwareDOM) {
			window.ScrollAwareDOM.monitor(n, o);
		} else o();
	}
	var m = {
		click: j,
		expand: k,
		uncollapse: l
	};
	e.exports = m;
});
__d("legacy:ufi-comment-prelude-js", ["CommentPrelude"], function(a, b, c, d) {
	var e = b('CommentPrelude');
	a.fc_click = e.click;
	a.fc_expand = e.expand;
},
3);
require('Primer');
