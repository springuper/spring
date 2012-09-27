<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
<title>Custom Event</title>
</head>
<body class="yui3-skin-sam">
<h1>Custom Event</h1>

<script src="http://yui.yahooapis.com/3.6.0/build/yui/yui-min.js"></script>
<script>
var Y = YUI({ filter: 'RAW' });
Y.use('console', 'event-custom', function() {
    new Y.Console().render();

    // 简单自定义事件
    var eatEvent = new Y.CustomEvent('eat');
    var onHandle = eatEvent.on(function() {
        Y.log('before eating');
    });
    var onHandle2 = eatEvent.on(function() {
        Y.log('before eating, too');
    });
    var afterHandle = eatEvent.after(function() {
        Y.log('after eating');
    }); 

    // output: "before eating", "before eating, too", "after eating"
    eatEvent.fire();

    onHandle2.detach();
    // output: "before eating", "after eating"
    eatEvent.fire();

    // 只触发一次的事件
    var dieEvent = new Y.CustomEvent('die', {
        fireOnce: true
    });
    var onDieHandle = dieEvent.on(function() {
        Y.log('before death');
    });

    // output: "before death"
    dieEvent.fire();
    // nothing happened
    dieEvent.fire();

    // 只触发一次的事件，被立即执行
    var onDieHandle2 = dieEvent.on(function() {
        Y.log('before death, too');
    });

    // 复杂自定义事件
    var driveEvent = new Y.CustomEvent('drive', {
        emitFacade: true,
        host: {
            _yuievt: {},
            _monitor: function() {}    
        },
        defaultFn: function() {
            Y.log('execute defaultFn');
        },
        preventedFn: function() {
            Y.log('execute preventedFn');
        },
        stoppedFn: function() {
            Y.log('execute stoppedFn');
        }
    });
    driveEvent.on(function(e) {
        e.stopImmediatePropagation();
    });
    driveEvent.on(function(e) {
        e.preventDefault();
    });
    driveEvent.after(function(e) {
        Y.log('after driving');
    }); 

    driveEvent.fire();

    var cryEvent = new Y.CustomEvent('cry', {
        broadcast: 2  // global broadcast
    });
    cryEvent.on(function() {
        Y.log('before cry');
    });
    Y.on('cry', function() {
        Y.log('YUI instance broadcast');
    });
    Y.Global.on('cry', function() {
        Y.log('YUI global broadcast');
    });

    // output: "before death"
    cryEvent.fire();
});
</script>
</body>
</html>
