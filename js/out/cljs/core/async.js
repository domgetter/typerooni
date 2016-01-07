// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22463 = [];
var len__20793__auto___22469 = arguments.length;
var i__20794__auto___22470 = (0);
while(true){
if((i__20794__auto___22470 < len__20793__auto___22469)){
args22463.push((arguments[i__20794__auto___22470]));

var G__22471 = (i__20794__auto___22470 + (1));
i__20794__auto___22470 = G__22471;
continue;
} else {
}
break;
}

var G__22465 = args22463.length;
switch (G__22465) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22463.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22466 = (function (f,blockable,meta22467){
this.f = f;
this.blockable = blockable;
this.meta22467 = meta22467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22468,meta22467__$1){
var self__ = this;
var _22468__$1 = this;
return (new cljs.core.async.t_cljs$core$async22466(self__.f,self__.blockable,meta22467__$1));
});

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22468){
var self__ = this;
var _22468__$1 = this;
return self__.meta22467;
});

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22466.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22467","meta22467",-2006042641,null)], null);
});

cljs.core.async.t_cljs$core$async22466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22466";

cljs.core.async.t_cljs$core$async22466.cljs$lang$ctorPrWriter = (function (this__20333__auto__,writer__20334__auto__,opt__20335__auto__){
return cljs.core._write.call(null,writer__20334__auto__,"cljs.core.async/t_cljs$core$async22466");
});

cljs.core.async.__GT_t_cljs$core$async22466 = (function cljs$core$async$__GT_t_cljs$core$async22466(f__$1,blockable__$1,meta22467){
return (new cljs.core.async.t_cljs$core$async22466(f__$1,blockable__$1,meta22467));
});

}

return (new cljs.core.async.t_cljs$core$async22466(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22475 = [];
var len__20793__auto___22478 = arguments.length;
var i__20794__auto___22479 = (0);
while(true){
if((i__20794__auto___22479 < len__20793__auto___22478)){
args22475.push((arguments[i__20794__auto___22479]));

var G__22480 = (i__20794__auto___22479 + (1));
i__20794__auto___22479 = G__22480;
continue;
} else {
}
break;
}

var G__22477 = args22475.length;
switch (G__22477) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22475.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args22482 = [];
var len__20793__auto___22485 = arguments.length;
var i__20794__auto___22486 = (0);
while(true){
if((i__20794__auto___22486 < len__20793__auto___22485)){
args22482.push((arguments[i__20794__auto___22486]));

var G__22487 = (i__20794__auto___22486 + (1));
i__20794__auto___22486 = G__22487;
continue;
} else {
}
break;
}

var G__22484 = args22482.length;
switch (G__22484) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22482.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22489 = [];
var len__20793__auto___22492 = arguments.length;
var i__20794__auto___22493 = (0);
while(true){
if((i__20794__auto___22493 < len__20793__auto___22492)){
args22489.push((arguments[i__20794__auto___22493]));

var G__22494 = (i__20794__auto___22493 + (1));
i__20794__auto___22493 = G__22494;
continue;
} else {
}
break;
}

var G__22491 = args22489.length;
switch (G__22491) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22489.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22496 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22496);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22496,ret){
return (function (){
return fn1.call(null,val_22496);
});})(val_22496,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22497 = [];
var len__20793__auto___22500 = arguments.length;
var i__20794__auto___22501 = (0);
while(true){
if((i__20794__auto___22501 < len__20793__auto___22500)){
args22497.push((arguments[i__20794__auto___22501]));

var G__22502 = (i__20794__auto___22501 + (1));
i__20794__auto___22501 = G__22502;
continue;
} else {
}
break;
}

var G__22499 = args22497.length;
switch (G__22499) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22497.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__20638__auto___22504 = n;
var x_22505 = (0);
while(true){
if((x_22505 < n__20638__auto___22504)){
(a[x_22505] = (0));

var G__22506 = (x_22505 + (1));
x_22505 = G__22506;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22507 = (i + (1));
i = G__22507;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22511 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22511 = (function (alt_flag,flag,meta22512){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22512 = meta22512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22513,meta22512__$1){
var self__ = this;
var _22513__$1 = this;
return (new cljs.core.async.t_cljs$core$async22511(self__.alt_flag,self__.flag,meta22512__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22513){
var self__ = this;
var _22513__$1 = this;
return self__.meta22512;
});})(flag))
;

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22511.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22512","meta22512",-1335804317,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22511.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22511";

cljs.core.async.t_cljs$core$async22511.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20333__auto__,writer__20334__auto__,opt__20335__auto__){
return cljs.core._write.call(null,writer__20334__auto__,"cljs.core.async/t_cljs$core$async22511");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22511 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22511(alt_flag__$1,flag__$1,meta22512){
return (new cljs.core.async.t_cljs$core$async22511(alt_flag__$1,flag__$1,meta22512));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22511(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22517 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22517 = (function (alt_handler,flag,cb,meta22518){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22518 = meta22518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22519,meta22518__$1){
var self__ = this;
var _22519__$1 = this;
return (new cljs.core.async.t_cljs$core$async22517(self__.alt_handler,self__.flag,self__.cb,meta22518__$1));
});

cljs.core.async.t_cljs$core$async22517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22519){
var self__ = this;
var _22519__$1 = this;
return self__.meta22518;
});

cljs.core.async.t_cljs$core$async22517.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22517.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22518","meta22518",-783613335,null)], null);
});

cljs.core.async.t_cljs$core$async22517.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22517";

cljs.core.async.t_cljs$core$async22517.cljs$lang$ctorPrWriter = (function (this__20333__auto__,writer__20334__auto__,opt__20335__auto__){
return cljs.core._write.call(null,writer__20334__auto__,"cljs.core.async/t_cljs$core$async22517");
});

cljs.core.async.__GT_t_cljs$core$async22517 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22517(alt_handler__$1,flag__$1,cb__$1,meta22518){
return (new cljs.core.async.t_cljs$core$async22517(alt_handler__$1,flag__$1,cb__$1,meta22518));
});

}

return (new cljs.core.async.t_cljs$core$async22517(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22520_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22520_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22521_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22521_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19735__auto__ = wport;
if(cljs.core.truth_(or__19735__auto__)){
return or__19735__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22522 = (i + (1));
i = G__22522;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19735__auto__ = ret;
if(cljs.core.truth_(or__19735__auto__)){
return or__19735__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__19723__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19723__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19723__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__20800__auto__ = [];
var len__20793__auto___22528 = arguments.length;
var i__20794__auto___22529 = (0);
while(true){
if((i__20794__auto___22529 < len__20793__auto___22528)){
args__20800__auto__.push((arguments[i__20794__auto___22529]));

var G__22530 = (i__20794__auto___22529 + (1));
i__20794__auto___22529 = G__22530;
continue;
} else {
}
break;
}

var argseq__20801__auto__ = ((((1) < args__20800__auto__.length))?(new cljs.core.IndexedSeq(args__20800__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20801__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22525){
var map__22526 = p__22525;
var map__22526__$1 = ((((!((map__22526 == null)))?((((map__22526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22526):map__22526);
var opts = map__22526__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22523){
var G__22524 = cljs.core.first.call(null,seq22523);
var seq22523__$1 = cljs.core.next.call(null,seq22523);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22524,seq22523__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22531 = [];
var len__20793__auto___22581 = arguments.length;
var i__20794__auto___22582 = (0);
while(true){
if((i__20794__auto___22582 < len__20793__auto___22581)){
args22531.push((arguments[i__20794__auto___22582]));

var G__22583 = (i__20794__auto___22582 + (1));
i__20794__auto___22582 = G__22583;
continue;
} else {
}
break;
}

var G__22533 = args22531.length;
switch (G__22533) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22531.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22418__auto___22585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto___22585){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto___22585){
return (function (state_22557){
var state_val_22558 = (state_22557[(1)]);
if((state_val_22558 === (7))){
var inst_22553 = (state_22557[(2)]);
var state_22557__$1 = state_22557;
var statearr_22559_22586 = state_22557__$1;
(statearr_22559_22586[(2)] = inst_22553);

(statearr_22559_22586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (1))){
var state_22557__$1 = state_22557;
var statearr_22560_22587 = state_22557__$1;
(statearr_22560_22587[(2)] = null);

(statearr_22560_22587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (4))){
var inst_22536 = (state_22557[(7)]);
var inst_22536__$1 = (state_22557[(2)]);
var inst_22537 = (inst_22536__$1 == null);
var state_22557__$1 = (function (){var statearr_22561 = state_22557;
(statearr_22561[(7)] = inst_22536__$1);

return statearr_22561;
})();
if(cljs.core.truth_(inst_22537)){
var statearr_22562_22588 = state_22557__$1;
(statearr_22562_22588[(1)] = (5));

} else {
var statearr_22563_22589 = state_22557__$1;
(statearr_22563_22589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (13))){
var state_22557__$1 = state_22557;
var statearr_22564_22590 = state_22557__$1;
(statearr_22564_22590[(2)] = null);

(statearr_22564_22590[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (6))){
var inst_22536 = (state_22557[(7)]);
var state_22557__$1 = state_22557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22557__$1,(11),to,inst_22536);
} else {
if((state_val_22558 === (3))){
var inst_22555 = (state_22557[(2)]);
var state_22557__$1 = state_22557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22557__$1,inst_22555);
} else {
if((state_val_22558 === (12))){
var state_22557__$1 = state_22557;
var statearr_22565_22591 = state_22557__$1;
(statearr_22565_22591[(2)] = null);

(statearr_22565_22591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (2))){
var state_22557__$1 = state_22557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22557__$1,(4),from);
} else {
if((state_val_22558 === (11))){
var inst_22546 = (state_22557[(2)]);
var state_22557__$1 = state_22557;
if(cljs.core.truth_(inst_22546)){
var statearr_22566_22592 = state_22557__$1;
(statearr_22566_22592[(1)] = (12));

} else {
var statearr_22567_22593 = state_22557__$1;
(statearr_22567_22593[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (9))){
var state_22557__$1 = state_22557;
var statearr_22568_22594 = state_22557__$1;
(statearr_22568_22594[(2)] = null);

(statearr_22568_22594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (5))){
var state_22557__$1 = state_22557;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22569_22595 = state_22557__$1;
(statearr_22569_22595[(1)] = (8));

} else {
var statearr_22570_22596 = state_22557__$1;
(statearr_22570_22596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (14))){
var inst_22551 = (state_22557[(2)]);
var state_22557__$1 = state_22557;
var statearr_22571_22597 = state_22557__$1;
(statearr_22571_22597[(2)] = inst_22551);

(statearr_22571_22597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (10))){
var inst_22543 = (state_22557[(2)]);
var state_22557__$1 = state_22557;
var statearr_22572_22598 = state_22557__$1;
(statearr_22572_22598[(2)] = inst_22543);

(statearr_22572_22598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22558 === (8))){
var inst_22540 = cljs.core.async.close_BANG_.call(null,to);
var state_22557__$1 = state_22557;
var statearr_22573_22599 = state_22557__$1;
(statearr_22573_22599[(2)] = inst_22540);

(statearr_22573_22599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22418__auto___22585))
;
return ((function (switch__22306__auto__,c__22418__auto___22585){
return (function() {
var cljs$core$async$state_machine__22307__auto__ = null;
var cljs$core$async$state_machine__22307__auto____0 = (function (){
var statearr_22577 = [null,null,null,null,null,null,null,null];
(statearr_22577[(0)] = cljs$core$async$state_machine__22307__auto__);

(statearr_22577[(1)] = (1));

return statearr_22577;
});
var cljs$core$async$state_machine__22307__auto____1 = (function (state_22557){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_22557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e22578){if((e22578 instanceof Object)){
var ex__22310__auto__ = e22578;
var statearr_22579_22600 = state_22557;
(statearr_22579_22600[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22601 = state_22557;
state_22557 = G__22601;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$state_machine__22307__auto__ = function(state_22557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22307__auto____1.call(this,state_22557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22307__auto____0;
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22307__auto____1;
return cljs$core$async$state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto___22585))
})();
var state__22420__auto__ = (function (){var statearr_22580 = f__22419__auto__.call(null);
(statearr_22580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___22585);

return statearr_22580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto___22585))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22785){
var vec__22786 = p__22785;
var v = cljs.core.nth.call(null,vec__22786,(0),null);
var p = cljs.core.nth.call(null,vec__22786,(1),null);
var job = vec__22786;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22418__auto___22968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto___22968,res,vec__22786,v,p,job,jobs,results){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto___22968,res,vec__22786,v,p,job,jobs,results){
return (function (state_22791){
var state_val_22792 = (state_22791[(1)]);
if((state_val_22792 === (1))){
var state_22791__$1 = state_22791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22791__$1,(2),res,v);
} else {
if((state_val_22792 === (2))){
var inst_22788 = (state_22791[(2)]);
var inst_22789 = cljs.core.async.close_BANG_.call(null,res);
var state_22791__$1 = (function (){var statearr_22793 = state_22791;
(statearr_22793[(7)] = inst_22788);

return statearr_22793;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22791__$1,inst_22789);
} else {
return null;
}
}
});})(c__22418__auto___22968,res,vec__22786,v,p,job,jobs,results))
;
return ((function (switch__22306__auto__,c__22418__auto___22968,res,vec__22786,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____0 = (function (){
var statearr_22797 = [null,null,null,null,null,null,null,null];
(statearr_22797[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__);

(statearr_22797[(1)] = (1));

return statearr_22797;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____1 = (function (state_22791){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_22791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e22798){if((e22798 instanceof Object)){
var ex__22310__auto__ = e22798;
var statearr_22799_22969 = state_22791;
(statearr_22799_22969[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22970 = state_22791;
state_22791 = G__22970;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__ = function(state_22791){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____1.call(this,state_22791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto___22968,res,vec__22786,v,p,job,jobs,results))
})();
var state__22420__auto__ = (function (){var statearr_22800 = f__22419__auto__.call(null);
(statearr_22800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___22968);

return statearr_22800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto___22968,res,vec__22786,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22801){
var vec__22802 = p__22801;
var v = cljs.core.nth.call(null,vec__22802,(0),null);
var p = cljs.core.nth.call(null,vec__22802,(1),null);
var job = vec__22802;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__20638__auto___22971 = n;
var __22972 = (0);
while(true){
if((__22972 < n__20638__auto___22971)){
var G__22803_22973 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22803_22973) {
case "compute":
var c__22418__auto___22975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22972,c__22418__auto___22975,G__22803_22973,n__20638__auto___22971,jobs,results,process,async){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (__22972,c__22418__auto___22975,G__22803_22973,n__20638__auto___22971,jobs,results,process,async){
return (function (state_22816){
var state_val_22817 = (state_22816[(1)]);
if((state_val_22817 === (1))){
var state_22816__$1 = state_22816;
var statearr_22818_22976 = state_22816__$1;
(statearr_22818_22976[(2)] = null);

(statearr_22818_22976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22817 === (2))){
var state_22816__$1 = state_22816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22816__$1,(4),jobs);
} else {
if((state_val_22817 === (3))){
var inst_22814 = (state_22816[(2)]);
var state_22816__$1 = state_22816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22816__$1,inst_22814);
} else {
if((state_val_22817 === (4))){
var inst_22806 = (state_22816[(2)]);
var inst_22807 = process.call(null,inst_22806);
var state_22816__$1 = state_22816;
if(cljs.core.truth_(inst_22807)){
var statearr_22819_22977 = state_22816__$1;
(statearr_22819_22977[(1)] = (5));

} else {
var statearr_22820_22978 = state_22816__$1;
(statearr_22820_22978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22817 === (5))){
var state_22816__$1 = state_22816;
var statearr_22821_22979 = state_22816__$1;
(statearr_22821_22979[(2)] = null);

(statearr_22821_22979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22817 === (6))){
var state_22816__$1 = state_22816;
var statearr_22822_22980 = state_22816__$1;
(statearr_22822_22980[(2)] = null);

(statearr_22822_22980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22817 === (7))){
var inst_22812 = (state_22816[(2)]);
var state_22816__$1 = state_22816;
var statearr_22823_22981 = state_22816__$1;
(statearr_22823_22981[(2)] = inst_22812);

(statearr_22823_22981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__22972,c__22418__auto___22975,G__22803_22973,n__20638__auto___22971,jobs,results,process,async))
;
return ((function (__22972,switch__22306__auto__,c__22418__auto___22975,G__22803_22973,n__20638__auto___22971,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____0 = (function (){
var statearr_22827 = [null,null,null,null,null,null,null];
(statearr_22827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__);

(statearr_22827[(1)] = (1));

return statearr_22827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____1 = (function (state_22816){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_22816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e22828){if((e22828 instanceof Object)){
var ex__22310__auto__ = e22828;
var statearr_22829_22982 = state_22816;
(statearr_22829_22982[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22983 = state_22816;
state_22816 = G__22983;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__ = function(state_22816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____1.call(this,state_22816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__;
})()
;})(__22972,switch__22306__auto__,c__22418__auto___22975,G__22803_22973,n__20638__auto___22971,jobs,results,process,async))
})();
var state__22420__auto__ = (function (){var statearr_22830 = f__22419__auto__.call(null);
(statearr_22830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___22975);

return statearr_22830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(__22972,c__22418__auto___22975,G__22803_22973,n__20638__auto___22971,jobs,results,process,async))
);


break;
case "async":
var c__22418__auto___22984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22972,c__22418__auto___22984,G__22803_22973,n__20638__auto___22971,jobs,results,process,async){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (__22972,c__22418__auto___22984,G__22803_22973,n__20638__auto___22971,jobs,results,process,async){
return (function (state_22843){
var state_val_22844 = (state_22843[(1)]);
if((state_val_22844 === (1))){
var state_22843__$1 = state_22843;
var statearr_22845_22985 = state_22843__$1;
(statearr_22845_22985[(2)] = null);

(statearr_22845_22985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22844 === (2))){
var state_22843__$1 = state_22843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22843__$1,(4),jobs);
} else {
if((state_val_22844 === (3))){
var inst_22841 = (state_22843[(2)]);
var state_22843__$1 = state_22843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22843__$1,inst_22841);
} else {
if((state_val_22844 === (4))){
var inst_22833 = (state_22843[(2)]);
var inst_22834 = async.call(null,inst_22833);
var state_22843__$1 = state_22843;
if(cljs.core.truth_(inst_22834)){
var statearr_22846_22986 = state_22843__$1;
(statearr_22846_22986[(1)] = (5));

} else {
var statearr_22847_22987 = state_22843__$1;
(statearr_22847_22987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22844 === (5))){
var state_22843__$1 = state_22843;
var statearr_22848_22988 = state_22843__$1;
(statearr_22848_22988[(2)] = null);

(statearr_22848_22988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22844 === (6))){
var state_22843__$1 = state_22843;
var statearr_22849_22989 = state_22843__$1;
(statearr_22849_22989[(2)] = null);

(statearr_22849_22989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22844 === (7))){
var inst_22839 = (state_22843[(2)]);
var state_22843__$1 = state_22843;
var statearr_22850_22990 = state_22843__$1;
(statearr_22850_22990[(2)] = inst_22839);

(statearr_22850_22990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__22972,c__22418__auto___22984,G__22803_22973,n__20638__auto___22971,jobs,results,process,async))
;
return ((function (__22972,switch__22306__auto__,c__22418__auto___22984,G__22803_22973,n__20638__auto___22971,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____0 = (function (){
var statearr_22854 = [null,null,null,null,null,null,null];
(statearr_22854[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__);

(statearr_22854[(1)] = (1));

return statearr_22854;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____1 = (function (state_22843){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_22843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e22855){if((e22855 instanceof Object)){
var ex__22310__auto__ = e22855;
var statearr_22856_22991 = state_22843;
(statearr_22856_22991[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22992 = state_22843;
state_22843 = G__22992;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__ = function(state_22843){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____1.call(this,state_22843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__;
})()
;})(__22972,switch__22306__auto__,c__22418__auto___22984,G__22803_22973,n__20638__auto___22971,jobs,results,process,async))
})();
var state__22420__auto__ = (function (){var statearr_22857 = f__22419__auto__.call(null);
(statearr_22857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___22984);

return statearr_22857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(__22972,c__22418__auto___22984,G__22803_22973,n__20638__auto___22971,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22993 = (__22972 + (1));
__22972 = G__22993;
continue;
} else {
}
break;
}

var c__22418__auto___22994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto___22994,jobs,results,process,async){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto___22994,jobs,results,process,async){
return (function (state_22879){
var state_val_22880 = (state_22879[(1)]);
if((state_val_22880 === (1))){
var state_22879__$1 = state_22879;
var statearr_22881_22995 = state_22879__$1;
(statearr_22881_22995[(2)] = null);

(statearr_22881_22995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (2))){
var state_22879__$1 = state_22879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22879__$1,(4),from);
} else {
if((state_val_22880 === (3))){
var inst_22877 = (state_22879[(2)]);
var state_22879__$1 = state_22879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22879__$1,inst_22877);
} else {
if((state_val_22880 === (4))){
var inst_22860 = (state_22879[(7)]);
var inst_22860__$1 = (state_22879[(2)]);
var inst_22861 = (inst_22860__$1 == null);
var state_22879__$1 = (function (){var statearr_22882 = state_22879;
(statearr_22882[(7)] = inst_22860__$1);

return statearr_22882;
})();
if(cljs.core.truth_(inst_22861)){
var statearr_22883_22996 = state_22879__$1;
(statearr_22883_22996[(1)] = (5));

} else {
var statearr_22884_22997 = state_22879__$1;
(statearr_22884_22997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (5))){
var inst_22863 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22879__$1 = state_22879;
var statearr_22885_22998 = state_22879__$1;
(statearr_22885_22998[(2)] = inst_22863);

(statearr_22885_22998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (6))){
var inst_22865 = (state_22879[(8)]);
var inst_22860 = (state_22879[(7)]);
var inst_22865__$1 = cljs.core.async.chan.call(null,(1));
var inst_22866 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22867 = [inst_22860,inst_22865__$1];
var inst_22868 = (new cljs.core.PersistentVector(null,2,(5),inst_22866,inst_22867,null));
var state_22879__$1 = (function (){var statearr_22886 = state_22879;
(statearr_22886[(8)] = inst_22865__$1);

return statearr_22886;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22879__$1,(8),jobs,inst_22868);
} else {
if((state_val_22880 === (7))){
var inst_22875 = (state_22879[(2)]);
var state_22879__$1 = state_22879;
var statearr_22887_22999 = state_22879__$1;
(statearr_22887_22999[(2)] = inst_22875);

(statearr_22887_22999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22880 === (8))){
var inst_22865 = (state_22879[(8)]);
var inst_22870 = (state_22879[(2)]);
var state_22879__$1 = (function (){var statearr_22888 = state_22879;
(statearr_22888[(9)] = inst_22870);

return statearr_22888;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22879__$1,(9),results,inst_22865);
} else {
if((state_val_22880 === (9))){
var inst_22872 = (state_22879[(2)]);
var state_22879__$1 = (function (){var statearr_22889 = state_22879;
(statearr_22889[(10)] = inst_22872);

return statearr_22889;
})();
var statearr_22890_23000 = state_22879__$1;
(statearr_22890_23000[(2)] = null);

(statearr_22890_23000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__22418__auto___22994,jobs,results,process,async))
;
return ((function (switch__22306__auto__,c__22418__auto___22994,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____0 = (function (){
var statearr_22894 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22894[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__);

(statearr_22894[(1)] = (1));

return statearr_22894;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____1 = (function (state_22879){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_22879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e22895){if((e22895 instanceof Object)){
var ex__22310__auto__ = e22895;
var statearr_22896_23001 = state_22879;
(statearr_22896_23001[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23002 = state_22879;
state_22879 = G__23002;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__ = function(state_22879){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____1.call(this,state_22879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto___22994,jobs,results,process,async))
})();
var state__22420__auto__ = (function (){var statearr_22897 = f__22419__auto__.call(null);
(statearr_22897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___22994);

return statearr_22897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto___22994,jobs,results,process,async))
);


var c__22418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto__,jobs,results,process,async){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto__,jobs,results,process,async){
return (function (state_22935){
var state_val_22936 = (state_22935[(1)]);
if((state_val_22936 === (7))){
var inst_22931 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
var statearr_22937_23003 = state_22935__$1;
(statearr_22937_23003[(2)] = inst_22931);

(statearr_22937_23003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (20))){
var state_22935__$1 = state_22935;
var statearr_22938_23004 = state_22935__$1;
(statearr_22938_23004[(2)] = null);

(statearr_22938_23004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (1))){
var state_22935__$1 = state_22935;
var statearr_22939_23005 = state_22935__$1;
(statearr_22939_23005[(2)] = null);

(statearr_22939_23005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (4))){
var inst_22900 = (state_22935[(7)]);
var inst_22900__$1 = (state_22935[(2)]);
var inst_22901 = (inst_22900__$1 == null);
var state_22935__$1 = (function (){var statearr_22940 = state_22935;
(statearr_22940[(7)] = inst_22900__$1);

return statearr_22940;
})();
if(cljs.core.truth_(inst_22901)){
var statearr_22941_23006 = state_22935__$1;
(statearr_22941_23006[(1)] = (5));

} else {
var statearr_22942_23007 = state_22935__$1;
(statearr_22942_23007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (15))){
var inst_22913 = (state_22935[(8)]);
var state_22935__$1 = state_22935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22935__$1,(18),to,inst_22913);
} else {
if((state_val_22936 === (21))){
var inst_22926 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
var statearr_22943_23008 = state_22935__$1;
(statearr_22943_23008[(2)] = inst_22926);

(statearr_22943_23008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (13))){
var inst_22928 = (state_22935[(2)]);
var state_22935__$1 = (function (){var statearr_22944 = state_22935;
(statearr_22944[(9)] = inst_22928);

return statearr_22944;
})();
var statearr_22945_23009 = state_22935__$1;
(statearr_22945_23009[(2)] = null);

(statearr_22945_23009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (6))){
var inst_22900 = (state_22935[(7)]);
var state_22935__$1 = state_22935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22935__$1,(11),inst_22900);
} else {
if((state_val_22936 === (17))){
var inst_22921 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
if(cljs.core.truth_(inst_22921)){
var statearr_22946_23010 = state_22935__$1;
(statearr_22946_23010[(1)] = (19));

} else {
var statearr_22947_23011 = state_22935__$1;
(statearr_22947_23011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (3))){
var inst_22933 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22935__$1,inst_22933);
} else {
if((state_val_22936 === (12))){
var inst_22910 = (state_22935[(10)]);
var state_22935__$1 = state_22935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22935__$1,(14),inst_22910);
} else {
if((state_val_22936 === (2))){
var state_22935__$1 = state_22935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22935__$1,(4),results);
} else {
if((state_val_22936 === (19))){
var state_22935__$1 = state_22935;
var statearr_22948_23012 = state_22935__$1;
(statearr_22948_23012[(2)] = null);

(statearr_22948_23012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (11))){
var inst_22910 = (state_22935[(2)]);
var state_22935__$1 = (function (){var statearr_22949 = state_22935;
(statearr_22949[(10)] = inst_22910);

return statearr_22949;
})();
var statearr_22950_23013 = state_22935__$1;
(statearr_22950_23013[(2)] = null);

(statearr_22950_23013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (9))){
var state_22935__$1 = state_22935;
var statearr_22951_23014 = state_22935__$1;
(statearr_22951_23014[(2)] = null);

(statearr_22951_23014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (5))){
var state_22935__$1 = state_22935;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22952_23015 = state_22935__$1;
(statearr_22952_23015[(1)] = (8));

} else {
var statearr_22953_23016 = state_22935__$1;
(statearr_22953_23016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (14))){
var inst_22915 = (state_22935[(11)]);
var inst_22913 = (state_22935[(8)]);
var inst_22913__$1 = (state_22935[(2)]);
var inst_22914 = (inst_22913__$1 == null);
var inst_22915__$1 = cljs.core.not.call(null,inst_22914);
var state_22935__$1 = (function (){var statearr_22954 = state_22935;
(statearr_22954[(11)] = inst_22915__$1);

(statearr_22954[(8)] = inst_22913__$1);

return statearr_22954;
})();
if(inst_22915__$1){
var statearr_22955_23017 = state_22935__$1;
(statearr_22955_23017[(1)] = (15));

} else {
var statearr_22956_23018 = state_22935__$1;
(statearr_22956_23018[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (16))){
var inst_22915 = (state_22935[(11)]);
var state_22935__$1 = state_22935;
var statearr_22957_23019 = state_22935__$1;
(statearr_22957_23019[(2)] = inst_22915);

(statearr_22957_23019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (10))){
var inst_22907 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
var statearr_22958_23020 = state_22935__$1;
(statearr_22958_23020[(2)] = inst_22907);

(statearr_22958_23020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (18))){
var inst_22918 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
var statearr_22959_23021 = state_22935__$1;
(statearr_22959_23021[(2)] = inst_22918);

(statearr_22959_23021[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (8))){
var inst_22904 = cljs.core.async.close_BANG_.call(null,to);
var state_22935__$1 = state_22935;
var statearr_22960_23022 = state_22935__$1;
(statearr_22960_23022[(2)] = inst_22904);

(statearr_22960_23022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22418__auto__,jobs,results,process,async))
;
return ((function (switch__22306__auto__,c__22418__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____0 = (function (){
var statearr_22964 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22964[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__);

(statearr_22964[(1)] = (1));

return statearr_22964;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____1 = (function (state_22935){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_22935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e22965){if((e22965 instanceof Object)){
var ex__22310__auto__ = e22965;
var statearr_22966_23023 = state_22935;
(statearr_22966_23023[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23024 = state_22935;
state_22935 = G__23024;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__ = function(state_22935){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____1.call(this,state_22935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22307__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto__,jobs,results,process,async))
})();
var state__22420__auto__ = (function (){var statearr_22967 = f__22419__auto__.call(null);
(statearr_22967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto__);

return statearr_22967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto__,jobs,results,process,async))
);

return c__22418__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args23025 = [];
var len__20793__auto___23028 = arguments.length;
var i__20794__auto___23029 = (0);
while(true){
if((i__20794__auto___23029 < len__20793__auto___23028)){
args23025.push((arguments[i__20794__auto___23029]));

var G__23030 = (i__20794__auto___23029 + (1));
i__20794__auto___23029 = G__23030;
continue;
} else {
}
break;
}

var G__23027 = args23025.length;
switch (G__23027) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23025.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args23032 = [];
var len__20793__auto___23035 = arguments.length;
var i__20794__auto___23036 = (0);
while(true){
if((i__20794__auto___23036 < len__20793__auto___23035)){
args23032.push((arguments[i__20794__auto___23036]));

var G__23037 = (i__20794__auto___23036 + (1));
i__20794__auto___23036 = G__23037;
continue;
} else {
}
break;
}

var G__23034 = args23032.length;
switch (G__23034) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23032.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args23039 = [];
var len__20793__auto___23092 = arguments.length;
var i__20794__auto___23093 = (0);
while(true){
if((i__20794__auto___23093 < len__20793__auto___23092)){
args23039.push((arguments[i__20794__auto___23093]));

var G__23094 = (i__20794__auto___23093 + (1));
i__20794__auto___23093 = G__23094;
continue;
} else {
}
break;
}

var G__23041 = args23039.length;
switch (G__23041) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23039.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22418__auto___23096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto___23096,tc,fc){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto___23096,tc,fc){
return (function (state_23067){
var state_val_23068 = (state_23067[(1)]);
if((state_val_23068 === (7))){
var inst_23063 = (state_23067[(2)]);
var state_23067__$1 = state_23067;
var statearr_23069_23097 = state_23067__$1;
(statearr_23069_23097[(2)] = inst_23063);

(statearr_23069_23097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (1))){
var state_23067__$1 = state_23067;
var statearr_23070_23098 = state_23067__$1;
(statearr_23070_23098[(2)] = null);

(statearr_23070_23098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (4))){
var inst_23044 = (state_23067[(7)]);
var inst_23044__$1 = (state_23067[(2)]);
var inst_23045 = (inst_23044__$1 == null);
var state_23067__$1 = (function (){var statearr_23071 = state_23067;
(statearr_23071[(7)] = inst_23044__$1);

return statearr_23071;
})();
if(cljs.core.truth_(inst_23045)){
var statearr_23072_23099 = state_23067__$1;
(statearr_23072_23099[(1)] = (5));

} else {
var statearr_23073_23100 = state_23067__$1;
(statearr_23073_23100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (13))){
var state_23067__$1 = state_23067;
var statearr_23074_23101 = state_23067__$1;
(statearr_23074_23101[(2)] = null);

(statearr_23074_23101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (6))){
var inst_23044 = (state_23067[(7)]);
var inst_23050 = p.call(null,inst_23044);
var state_23067__$1 = state_23067;
if(cljs.core.truth_(inst_23050)){
var statearr_23075_23102 = state_23067__$1;
(statearr_23075_23102[(1)] = (9));

} else {
var statearr_23076_23103 = state_23067__$1;
(statearr_23076_23103[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (3))){
var inst_23065 = (state_23067[(2)]);
var state_23067__$1 = state_23067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23067__$1,inst_23065);
} else {
if((state_val_23068 === (12))){
var state_23067__$1 = state_23067;
var statearr_23077_23104 = state_23067__$1;
(statearr_23077_23104[(2)] = null);

(statearr_23077_23104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (2))){
var state_23067__$1 = state_23067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23067__$1,(4),ch);
} else {
if((state_val_23068 === (11))){
var inst_23044 = (state_23067[(7)]);
var inst_23054 = (state_23067[(2)]);
var state_23067__$1 = state_23067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23067__$1,(8),inst_23054,inst_23044);
} else {
if((state_val_23068 === (9))){
var state_23067__$1 = state_23067;
var statearr_23078_23105 = state_23067__$1;
(statearr_23078_23105[(2)] = tc);

(statearr_23078_23105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (5))){
var inst_23047 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23048 = cljs.core.async.close_BANG_.call(null,fc);
var state_23067__$1 = (function (){var statearr_23079 = state_23067;
(statearr_23079[(8)] = inst_23047);

return statearr_23079;
})();
var statearr_23080_23106 = state_23067__$1;
(statearr_23080_23106[(2)] = inst_23048);

(statearr_23080_23106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (14))){
var inst_23061 = (state_23067[(2)]);
var state_23067__$1 = state_23067;
var statearr_23081_23107 = state_23067__$1;
(statearr_23081_23107[(2)] = inst_23061);

(statearr_23081_23107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (10))){
var state_23067__$1 = state_23067;
var statearr_23082_23108 = state_23067__$1;
(statearr_23082_23108[(2)] = fc);

(statearr_23082_23108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23068 === (8))){
var inst_23056 = (state_23067[(2)]);
var state_23067__$1 = state_23067;
if(cljs.core.truth_(inst_23056)){
var statearr_23083_23109 = state_23067__$1;
(statearr_23083_23109[(1)] = (12));

} else {
var statearr_23084_23110 = state_23067__$1;
(statearr_23084_23110[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22418__auto___23096,tc,fc))
;
return ((function (switch__22306__auto__,c__22418__auto___23096,tc,fc){
return (function() {
var cljs$core$async$state_machine__22307__auto__ = null;
var cljs$core$async$state_machine__22307__auto____0 = (function (){
var statearr_23088 = [null,null,null,null,null,null,null,null,null];
(statearr_23088[(0)] = cljs$core$async$state_machine__22307__auto__);

(statearr_23088[(1)] = (1));

return statearr_23088;
});
var cljs$core$async$state_machine__22307__auto____1 = (function (state_23067){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_23067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e23089){if((e23089 instanceof Object)){
var ex__22310__auto__ = e23089;
var statearr_23090_23111 = state_23067;
(statearr_23090_23111[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23112 = state_23067;
state_23067 = G__23112;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$state_machine__22307__auto__ = function(state_23067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22307__auto____1.call(this,state_23067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22307__auto____0;
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22307__auto____1;
return cljs$core$async$state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto___23096,tc,fc))
})();
var state__22420__auto__ = (function (){var statearr_23091 = f__22419__auto__.call(null);
(statearr_23091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___23096);

return statearr_23091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto___23096,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto__){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto__){
return (function (state_23176){
var state_val_23177 = (state_23176[(1)]);
if((state_val_23177 === (7))){
var inst_23172 = (state_23176[(2)]);
var state_23176__$1 = state_23176;
var statearr_23178_23199 = state_23176__$1;
(statearr_23178_23199[(2)] = inst_23172);

(statearr_23178_23199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23177 === (1))){
var inst_23156 = init;
var state_23176__$1 = (function (){var statearr_23179 = state_23176;
(statearr_23179[(7)] = inst_23156);

return statearr_23179;
})();
var statearr_23180_23200 = state_23176__$1;
(statearr_23180_23200[(2)] = null);

(statearr_23180_23200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23177 === (4))){
var inst_23159 = (state_23176[(8)]);
var inst_23159__$1 = (state_23176[(2)]);
var inst_23160 = (inst_23159__$1 == null);
var state_23176__$1 = (function (){var statearr_23181 = state_23176;
(statearr_23181[(8)] = inst_23159__$1);

return statearr_23181;
})();
if(cljs.core.truth_(inst_23160)){
var statearr_23182_23201 = state_23176__$1;
(statearr_23182_23201[(1)] = (5));

} else {
var statearr_23183_23202 = state_23176__$1;
(statearr_23183_23202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23177 === (6))){
var inst_23159 = (state_23176[(8)]);
var inst_23156 = (state_23176[(7)]);
var inst_23163 = (state_23176[(9)]);
var inst_23163__$1 = f.call(null,inst_23156,inst_23159);
var inst_23164 = cljs.core.reduced_QMARK_.call(null,inst_23163__$1);
var state_23176__$1 = (function (){var statearr_23184 = state_23176;
(statearr_23184[(9)] = inst_23163__$1);

return statearr_23184;
})();
if(inst_23164){
var statearr_23185_23203 = state_23176__$1;
(statearr_23185_23203[(1)] = (8));

} else {
var statearr_23186_23204 = state_23176__$1;
(statearr_23186_23204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23177 === (3))){
var inst_23174 = (state_23176[(2)]);
var state_23176__$1 = state_23176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23176__$1,inst_23174);
} else {
if((state_val_23177 === (2))){
var state_23176__$1 = state_23176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23176__$1,(4),ch);
} else {
if((state_val_23177 === (9))){
var inst_23163 = (state_23176[(9)]);
var inst_23156 = inst_23163;
var state_23176__$1 = (function (){var statearr_23187 = state_23176;
(statearr_23187[(7)] = inst_23156);

return statearr_23187;
})();
var statearr_23188_23205 = state_23176__$1;
(statearr_23188_23205[(2)] = null);

(statearr_23188_23205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23177 === (5))){
var inst_23156 = (state_23176[(7)]);
var state_23176__$1 = state_23176;
var statearr_23189_23206 = state_23176__$1;
(statearr_23189_23206[(2)] = inst_23156);

(statearr_23189_23206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23177 === (10))){
var inst_23170 = (state_23176[(2)]);
var state_23176__$1 = state_23176;
var statearr_23190_23207 = state_23176__$1;
(statearr_23190_23207[(2)] = inst_23170);

(statearr_23190_23207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23177 === (8))){
var inst_23163 = (state_23176[(9)]);
var inst_23166 = cljs.core.deref.call(null,inst_23163);
var state_23176__$1 = state_23176;
var statearr_23191_23208 = state_23176__$1;
(statearr_23191_23208[(2)] = inst_23166);

(statearr_23191_23208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__22418__auto__))
;
return ((function (switch__22306__auto__,c__22418__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22307__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22307__auto____0 = (function (){
var statearr_23195 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23195[(0)] = cljs$core$async$reduce_$_state_machine__22307__auto__);

(statearr_23195[(1)] = (1));

return statearr_23195;
});
var cljs$core$async$reduce_$_state_machine__22307__auto____1 = (function (state_23176){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_23176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e23196){if((e23196 instanceof Object)){
var ex__22310__auto__ = e23196;
var statearr_23197_23209 = state_23176;
(statearr_23197_23209[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23210 = state_23176;
state_23176 = G__23210;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22307__auto__ = function(state_23176){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22307__auto____1.call(this,state_23176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22307__auto____0;
cljs$core$async$reduce_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22307__auto____1;
return cljs$core$async$reduce_$_state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto__))
})();
var state__22420__auto__ = (function (){var statearr_23198 = f__22419__auto__.call(null);
(statearr_23198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto__);

return statearr_23198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto__))
);

return c__22418__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23211 = [];
var len__20793__auto___23263 = arguments.length;
var i__20794__auto___23264 = (0);
while(true){
if((i__20794__auto___23264 < len__20793__auto___23263)){
args23211.push((arguments[i__20794__auto___23264]));

var G__23265 = (i__20794__auto___23264 + (1));
i__20794__auto___23264 = G__23265;
continue;
} else {
}
break;
}

var G__23213 = args23211.length;
switch (G__23213) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23211.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto__){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto__){
return (function (state_23238){
var state_val_23239 = (state_23238[(1)]);
if((state_val_23239 === (7))){
var inst_23220 = (state_23238[(2)]);
var state_23238__$1 = state_23238;
var statearr_23240_23267 = state_23238__$1;
(statearr_23240_23267[(2)] = inst_23220);

(statearr_23240_23267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23239 === (1))){
var inst_23214 = cljs.core.seq.call(null,coll);
var inst_23215 = inst_23214;
var state_23238__$1 = (function (){var statearr_23241 = state_23238;
(statearr_23241[(7)] = inst_23215);

return statearr_23241;
})();
var statearr_23242_23268 = state_23238__$1;
(statearr_23242_23268[(2)] = null);

(statearr_23242_23268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23239 === (4))){
var inst_23215 = (state_23238[(7)]);
var inst_23218 = cljs.core.first.call(null,inst_23215);
var state_23238__$1 = state_23238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23238__$1,(7),ch,inst_23218);
} else {
if((state_val_23239 === (13))){
var inst_23232 = (state_23238[(2)]);
var state_23238__$1 = state_23238;
var statearr_23243_23269 = state_23238__$1;
(statearr_23243_23269[(2)] = inst_23232);

(statearr_23243_23269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23239 === (6))){
var inst_23223 = (state_23238[(2)]);
var state_23238__$1 = state_23238;
if(cljs.core.truth_(inst_23223)){
var statearr_23244_23270 = state_23238__$1;
(statearr_23244_23270[(1)] = (8));

} else {
var statearr_23245_23271 = state_23238__$1;
(statearr_23245_23271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23239 === (3))){
var inst_23236 = (state_23238[(2)]);
var state_23238__$1 = state_23238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23238__$1,inst_23236);
} else {
if((state_val_23239 === (12))){
var state_23238__$1 = state_23238;
var statearr_23246_23272 = state_23238__$1;
(statearr_23246_23272[(2)] = null);

(statearr_23246_23272[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23239 === (2))){
var inst_23215 = (state_23238[(7)]);
var state_23238__$1 = state_23238;
if(cljs.core.truth_(inst_23215)){
var statearr_23247_23273 = state_23238__$1;
(statearr_23247_23273[(1)] = (4));

} else {
var statearr_23248_23274 = state_23238__$1;
(statearr_23248_23274[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23239 === (11))){
var inst_23229 = cljs.core.async.close_BANG_.call(null,ch);
var state_23238__$1 = state_23238;
var statearr_23249_23275 = state_23238__$1;
(statearr_23249_23275[(2)] = inst_23229);

(statearr_23249_23275[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23239 === (9))){
var state_23238__$1 = state_23238;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23250_23276 = state_23238__$1;
(statearr_23250_23276[(1)] = (11));

} else {
var statearr_23251_23277 = state_23238__$1;
(statearr_23251_23277[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23239 === (5))){
var inst_23215 = (state_23238[(7)]);
var state_23238__$1 = state_23238;
var statearr_23252_23278 = state_23238__$1;
(statearr_23252_23278[(2)] = inst_23215);

(statearr_23252_23278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23239 === (10))){
var inst_23234 = (state_23238[(2)]);
var state_23238__$1 = state_23238;
var statearr_23253_23279 = state_23238__$1;
(statearr_23253_23279[(2)] = inst_23234);

(statearr_23253_23279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23239 === (8))){
var inst_23215 = (state_23238[(7)]);
var inst_23225 = cljs.core.next.call(null,inst_23215);
var inst_23215__$1 = inst_23225;
var state_23238__$1 = (function (){var statearr_23254 = state_23238;
(statearr_23254[(7)] = inst_23215__$1);

return statearr_23254;
})();
var statearr_23255_23280 = state_23238__$1;
(statearr_23255_23280[(2)] = null);

(statearr_23255_23280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22418__auto__))
;
return ((function (switch__22306__auto__,c__22418__auto__){
return (function() {
var cljs$core$async$state_machine__22307__auto__ = null;
var cljs$core$async$state_machine__22307__auto____0 = (function (){
var statearr_23259 = [null,null,null,null,null,null,null,null];
(statearr_23259[(0)] = cljs$core$async$state_machine__22307__auto__);

(statearr_23259[(1)] = (1));

return statearr_23259;
});
var cljs$core$async$state_machine__22307__auto____1 = (function (state_23238){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_23238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e23260){if((e23260 instanceof Object)){
var ex__22310__auto__ = e23260;
var statearr_23261_23281 = state_23238;
(statearr_23261_23281[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23282 = state_23238;
state_23238 = G__23282;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$state_machine__22307__auto__ = function(state_23238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22307__auto____1.call(this,state_23238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22307__auto____0;
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22307__auto____1;
return cljs$core$async$state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto__))
})();
var state__22420__auto__ = (function (){var statearr_23262 = f__22419__auto__.call(null);
(statearr_23262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto__);

return statearr_23262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto__))
);

return c__22418__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20390__auto__ = (((_ == null))?null:_);
var m__20391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20390__auto__)]);
if(!((m__20391__auto__ == null))){
return m__20391__auto__.call(null,_);
} else {
var m__20391__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20391__auto____$1 == null))){
return m__20391__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20390__auto__ = (((m == null))?null:m);
var m__20391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20390__auto__)]);
if(!((m__20391__auto__ == null))){
return m__20391__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20391__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20391__auto____$1 == null))){
return m__20391__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20390__auto__ = (((m == null))?null:m);
var m__20391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20390__auto__)]);
if(!((m__20391__auto__ == null))){
return m__20391__auto__.call(null,m,ch);
} else {
var m__20391__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20391__auto____$1 == null))){
return m__20391__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20390__auto__ = (((m == null))?null:m);
var m__20391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20390__auto__)]);
if(!((m__20391__auto__ == null))){
return m__20391__auto__.call(null,m);
} else {
var m__20391__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20391__auto____$1 == null))){
return m__20391__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23504 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23504 = (function (mult,ch,cs,meta23505){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23505 = meta23505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23506,meta23505__$1){
var self__ = this;
var _23506__$1 = this;
return (new cljs.core.async.t_cljs$core$async23504(self__.mult,self__.ch,self__.cs,meta23505__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23506){
var self__ = this;
var _23506__$1 = this;
return self__.meta23505;
});})(cs))
;

cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23504.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23505","meta23505",-2138024241,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23504.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23504";

cljs.core.async.t_cljs$core$async23504.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20333__auto__,writer__20334__auto__,opt__20335__auto__){
return cljs.core._write.call(null,writer__20334__auto__,"cljs.core.async/t_cljs$core$async23504");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23504 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23504(mult__$1,ch__$1,cs__$1,meta23505){
return (new cljs.core.async.t_cljs$core$async23504(mult__$1,ch__$1,cs__$1,meta23505));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23504(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22418__auto___23725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto___23725,cs,m,dchan,dctr,done){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto___23725,cs,m,dchan,dctr,done){
return (function (state_23637){
var state_val_23638 = (state_23637[(1)]);
if((state_val_23638 === (7))){
var inst_23633 = (state_23637[(2)]);
var state_23637__$1 = state_23637;
var statearr_23639_23726 = state_23637__$1;
(statearr_23639_23726[(2)] = inst_23633);

(statearr_23639_23726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (20))){
var inst_23538 = (state_23637[(7)]);
var inst_23548 = cljs.core.first.call(null,inst_23538);
var inst_23549 = cljs.core.nth.call(null,inst_23548,(0),null);
var inst_23550 = cljs.core.nth.call(null,inst_23548,(1),null);
var state_23637__$1 = (function (){var statearr_23640 = state_23637;
(statearr_23640[(8)] = inst_23549);

return statearr_23640;
})();
if(cljs.core.truth_(inst_23550)){
var statearr_23641_23727 = state_23637__$1;
(statearr_23641_23727[(1)] = (22));

} else {
var statearr_23642_23728 = state_23637__$1;
(statearr_23642_23728[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (27))){
var inst_23580 = (state_23637[(9)]);
var inst_23578 = (state_23637[(10)]);
var inst_23509 = (state_23637[(11)]);
var inst_23585 = (state_23637[(12)]);
var inst_23585__$1 = cljs.core._nth.call(null,inst_23578,inst_23580);
var inst_23586 = cljs.core.async.put_BANG_.call(null,inst_23585__$1,inst_23509,done);
var state_23637__$1 = (function (){var statearr_23643 = state_23637;
(statearr_23643[(12)] = inst_23585__$1);

return statearr_23643;
})();
if(cljs.core.truth_(inst_23586)){
var statearr_23644_23729 = state_23637__$1;
(statearr_23644_23729[(1)] = (30));

} else {
var statearr_23645_23730 = state_23637__$1;
(statearr_23645_23730[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (1))){
var state_23637__$1 = state_23637;
var statearr_23646_23731 = state_23637__$1;
(statearr_23646_23731[(2)] = null);

(statearr_23646_23731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (24))){
var inst_23538 = (state_23637[(7)]);
var inst_23555 = (state_23637[(2)]);
var inst_23556 = cljs.core.next.call(null,inst_23538);
var inst_23518 = inst_23556;
var inst_23519 = null;
var inst_23520 = (0);
var inst_23521 = (0);
var state_23637__$1 = (function (){var statearr_23647 = state_23637;
(statearr_23647[(13)] = inst_23520);

(statearr_23647[(14)] = inst_23518);

(statearr_23647[(15)] = inst_23555);

(statearr_23647[(16)] = inst_23519);

(statearr_23647[(17)] = inst_23521);

return statearr_23647;
})();
var statearr_23648_23732 = state_23637__$1;
(statearr_23648_23732[(2)] = null);

(statearr_23648_23732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (39))){
var state_23637__$1 = state_23637;
var statearr_23652_23733 = state_23637__$1;
(statearr_23652_23733[(2)] = null);

(statearr_23652_23733[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (4))){
var inst_23509 = (state_23637[(11)]);
var inst_23509__$1 = (state_23637[(2)]);
var inst_23510 = (inst_23509__$1 == null);
var state_23637__$1 = (function (){var statearr_23653 = state_23637;
(statearr_23653[(11)] = inst_23509__$1);

return statearr_23653;
})();
if(cljs.core.truth_(inst_23510)){
var statearr_23654_23734 = state_23637__$1;
(statearr_23654_23734[(1)] = (5));

} else {
var statearr_23655_23735 = state_23637__$1;
(statearr_23655_23735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (15))){
var inst_23520 = (state_23637[(13)]);
var inst_23518 = (state_23637[(14)]);
var inst_23519 = (state_23637[(16)]);
var inst_23521 = (state_23637[(17)]);
var inst_23534 = (state_23637[(2)]);
var inst_23535 = (inst_23521 + (1));
var tmp23649 = inst_23520;
var tmp23650 = inst_23518;
var tmp23651 = inst_23519;
var inst_23518__$1 = tmp23650;
var inst_23519__$1 = tmp23651;
var inst_23520__$1 = tmp23649;
var inst_23521__$1 = inst_23535;
var state_23637__$1 = (function (){var statearr_23656 = state_23637;
(statearr_23656[(13)] = inst_23520__$1);

(statearr_23656[(14)] = inst_23518__$1);

(statearr_23656[(16)] = inst_23519__$1);

(statearr_23656[(17)] = inst_23521__$1);

(statearr_23656[(18)] = inst_23534);

return statearr_23656;
})();
var statearr_23657_23736 = state_23637__$1;
(statearr_23657_23736[(2)] = null);

(statearr_23657_23736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (21))){
var inst_23559 = (state_23637[(2)]);
var state_23637__$1 = state_23637;
var statearr_23661_23737 = state_23637__$1;
(statearr_23661_23737[(2)] = inst_23559);

(statearr_23661_23737[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (31))){
var inst_23585 = (state_23637[(12)]);
var inst_23589 = done.call(null,null);
var inst_23590 = cljs.core.async.untap_STAR_.call(null,m,inst_23585);
var state_23637__$1 = (function (){var statearr_23662 = state_23637;
(statearr_23662[(19)] = inst_23589);

return statearr_23662;
})();
var statearr_23663_23738 = state_23637__$1;
(statearr_23663_23738[(2)] = inst_23590);

(statearr_23663_23738[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (32))){
var inst_23580 = (state_23637[(9)]);
var inst_23578 = (state_23637[(10)]);
var inst_23579 = (state_23637[(20)]);
var inst_23577 = (state_23637[(21)]);
var inst_23592 = (state_23637[(2)]);
var inst_23593 = (inst_23580 + (1));
var tmp23658 = inst_23578;
var tmp23659 = inst_23579;
var tmp23660 = inst_23577;
var inst_23577__$1 = tmp23660;
var inst_23578__$1 = tmp23658;
var inst_23579__$1 = tmp23659;
var inst_23580__$1 = inst_23593;
var state_23637__$1 = (function (){var statearr_23664 = state_23637;
(statearr_23664[(9)] = inst_23580__$1);

(statearr_23664[(10)] = inst_23578__$1);

(statearr_23664[(20)] = inst_23579__$1);

(statearr_23664[(22)] = inst_23592);

(statearr_23664[(21)] = inst_23577__$1);

return statearr_23664;
})();
var statearr_23665_23739 = state_23637__$1;
(statearr_23665_23739[(2)] = null);

(statearr_23665_23739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (40))){
var inst_23605 = (state_23637[(23)]);
var inst_23609 = done.call(null,null);
var inst_23610 = cljs.core.async.untap_STAR_.call(null,m,inst_23605);
var state_23637__$1 = (function (){var statearr_23666 = state_23637;
(statearr_23666[(24)] = inst_23609);

return statearr_23666;
})();
var statearr_23667_23740 = state_23637__$1;
(statearr_23667_23740[(2)] = inst_23610);

(statearr_23667_23740[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (33))){
var inst_23596 = (state_23637[(25)]);
var inst_23598 = cljs.core.chunked_seq_QMARK_.call(null,inst_23596);
var state_23637__$1 = state_23637;
if(inst_23598){
var statearr_23668_23741 = state_23637__$1;
(statearr_23668_23741[(1)] = (36));

} else {
var statearr_23669_23742 = state_23637__$1;
(statearr_23669_23742[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (13))){
var inst_23528 = (state_23637[(26)]);
var inst_23531 = cljs.core.async.close_BANG_.call(null,inst_23528);
var state_23637__$1 = state_23637;
var statearr_23670_23743 = state_23637__$1;
(statearr_23670_23743[(2)] = inst_23531);

(statearr_23670_23743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (22))){
var inst_23549 = (state_23637[(8)]);
var inst_23552 = cljs.core.async.close_BANG_.call(null,inst_23549);
var state_23637__$1 = state_23637;
var statearr_23671_23744 = state_23637__$1;
(statearr_23671_23744[(2)] = inst_23552);

(statearr_23671_23744[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (36))){
var inst_23596 = (state_23637[(25)]);
var inst_23600 = cljs.core.chunk_first.call(null,inst_23596);
var inst_23601 = cljs.core.chunk_rest.call(null,inst_23596);
var inst_23602 = cljs.core.count.call(null,inst_23600);
var inst_23577 = inst_23601;
var inst_23578 = inst_23600;
var inst_23579 = inst_23602;
var inst_23580 = (0);
var state_23637__$1 = (function (){var statearr_23672 = state_23637;
(statearr_23672[(9)] = inst_23580);

(statearr_23672[(10)] = inst_23578);

(statearr_23672[(20)] = inst_23579);

(statearr_23672[(21)] = inst_23577);

return statearr_23672;
})();
var statearr_23673_23745 = state_23637__$1;
(statearr_23673_23745[(2)] = null);

(statearr_23673_23745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (41))){
var inst_23596 = (state_23637[(25)]);
var inst_23612 = (state_23637[(2)]);
var inst_23613 = cljs.core.next.call(null,inst_23596);
var inst_23577 = inst_23613;
var inst_23578 = null;
var inst_23579 = (0);
var inst_23580 = (0);
var state_23637__$1 = (function (){var statearr_23674 = state_23637;
(statearr_23674[(9)] = inst_23580);

(statearr_23674[(10)] = inst_23578);

(statearr_23674[(20)] = inst_23579);

(statearr_23674[(21)] = inst_23577);

(statearr_23674[(27)] = inst_23612);

return statearr_23674;
})();
var statearr_23675_23746 = state_23637__$1;
(statearr_23675_23746[(2)] = null);

(statearr_23675_23746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (43))){
var state_23637__$1 = state_23637;
var statearr_23676_23747 = state_23637__$1;
(statearr_23676_23747[(2)] = null);

(statearr_23676_23747[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (29))){
var inst_23621 = (state_23637[(2)]);
var state_23637__$1 = state_23637;
var statearr_23677_23748 = state_23637__$1;
(statearr_23677_23748[(2)] = inst_23621);

(statearr_23677_23748[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (44))){
var inst_23630 = (state_23637[(2)]);
var state_23637__$1 = (function (){var statearr_23678 = state_23637;
(statearr_23678[(28)] = inst_23630);

return statearr_23678;
})();
var statearr_23679_23749 = state_23637__$1;
(statearr_23679_23749[(2)] = null);

(statearr_23679_23749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (6))){
var inst_23569 = (state_23637[(29)]);
var inst_23568 = cljs.core.deref.call(null,cs);
var inst_23569__$1 = cljs.core.keys.call(null,inst_23568);
var inst_23570 = cljs.core.count.call(null,inst_23569__$1);
var inst_23571 = cljs.core.reset_BANG_.call(null,dctr,inst_23570);
var inst_23576 = cljs.core.seq.call(null,inst_23569__$1);
var inst_23577 = inst_23576;
var inst_23578 = null;
var inst_23579 = (0);
var inst_23580 = (0);
var state_23637__$1 = (function (){var statearr_23680 = state_23637;
(statearr_23680[(30)] = inst_23571);

(statearr_23680[(9)] = inst_23580);

(statearr_23680[(10)] = inst_23578);

(statearr_23680[(20)] = inst_23579);

(statearr_23680[(29)] = inst_23569__$1);

(statearr_23680[(21)] = inst_23577);

return statearr_23680;
})();
var statearr_23681_23750 = state_23637__$1;
(statearr_23681_23750[(2)] = null);

(statearr_23681_23750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (28))){
var inst_23577 = (state_23637[(21)]);
var inst_23596 = (state_23637[(25)]);
var inst_23596__$1 = cljs.core.seq.call(null,inst_23577);
var state_23637__$1 = (function (){var statearr_23682 = state_23637;
(statearr_23682[(25)] = inst_23596__$1);

return statearr_23682;
})();
if(inst_23596__$1){
var statearr_23683_23751 = state_23637__$1;
(statearr_23683_23751[(1)] = (33));

} else {
var statearr_23684_23752 = state_23637__$1;
(statearr_23684_23752[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (25))){
var inst_23580 = (state_23637[(9)]);
var inst_23579 = (state_23637[(20)]);
var inst_23582 = (inst_23580 < inst_23579);
var inst_23583 = inst_23582;
var state_23637__$1 = state_23637;
if(cljs.core.truth_(inst_23583)){
var statearr_23685_23753 = state_23637__$1;
(statearr_23685_23753[(1)] = (27));

} else {
var statearr_23686_23754 = state_23637__$1;
(statearr_23686_23754[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (34))){
var state_23637__$1 = state_23637;
var statearr_23687_23755 = state_23637__$1;
(statearr_23687_23755[(2)] = null);

(statearr_23687_23755[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (17))){
var state_23637__$1 = state_23637;
var statearr_23688_23756 = state_23637__$1;
(statearr_23688_23756[(2)] = null);

(statearr_23688_23756[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (3))){
var inst_23635 = (state_23637[(2)]);
var state_23637__$1 = state_23637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23637__$1,inst_23635);
} else {
if((state_val_23638 === (12))){
var inst_23564 = (state_23637[(2)]);
var state_23637__$1 = state_23637;
var statearr_23689_23757 = state_23637__$1;
(statearr_23689_23757[(2)] = inst_23564);

(statearr_23689_23757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (2))){
var state_23637__$1 = state_23637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23637__$1,(4),ch);
} else {
if((state_val_23638 === (23))){
var state_23637__$1 = state_23637;
var statearr_23690_23758 = state_23637__$1;
(statearr_23690_23758[(2)] = null);

(statearr_23690_23758[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (35))){
var inst_23619 = (state_23637[(2)]);
var state_23637__$1 = state_23637;
var statearr_23691_23759 = state_23637__$1;
(statearr_23691_23759[(2)] = inst_23619);

(statearr_23691_23759[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (19))){
var inst_23538 = (state_23637[(7)]);
var inst_23542 = cljs.core.chunk_first.call(null,inst_23538);
var inst_23543 = cljs.core.chunk_rest.call(null,inst_23538);
var inst_23544 = cljs.core.count.call(null,inst_23542);
var inst_23518 = inst_23543;
var inst_23519 = inst_23542;
var inst_23520 = inst_23544;
var inst_23521 = (0);
var state_23637__$1 = (function (){var statearr_23692 = state_23637;
(statearr_23692[(13)] = inst_23520);

(statearr_23692[(14)] = inst_23518);

(statearr_23692[(16)] = inst_23519);

(statearr_23692[(17)] = inst_23521);

return statearr_23692;
})();
var statearr_23693_23760 = state_23637__$1;
(statearr_23693_23760[(2)] = null);

(statearr_23693_23760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (11))){
var inst_23538 = (state_23637[(7)]);
var inst_23518 = (state_23637[(14)]);
var inst_23538__$1 = cljs.core.seq.call(null,inst_23518);
var state_23637__$1 = (function (){var statearr_23694 = state_23637;
(statearr_23694[(7)] = inst_23538__$1);

return statearr_23694;
})();
if(inst_23538__$1){
var statearr_23695_23761 = state_23637__$1;
(statearr_23695_23761[(1)] = (16));

} else {
var statearr_23696_23762 = state_23637__$1;
(statearr_23696_23762[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (9))){
var inst_23566 = (state_23637[(2)]);
var state_23637__$1 = state_23637;
var statearr_23697_23763 = state_23637__$1;
(statearr_23697_23763[(2)] = inst_23566);

(statearr_23697_23763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (5))){
var inst_23516 = cljs.core.deref.call(null,cs);
var inst_23517 = cljs.core.seq.call(null,inst_23516);
var inst_23518 = inst_23517;
var inst_23519 = null;
var inst_23520 = (0);
var inst_23521 = (0);
var state_23637__$1 = (function (){var statearr_23698 = state_23637;
(statearr_23698[(13)] = inst_23520);

(statearr_23698[(14)] = inst_23518);

(statearr_23698[(16)] = inst_23519);

(statearr_23698[(17)] = inst_23521);

return statearr_23698;
})();
var statearr_23699_23764 = state_23637__$1;
(statearr_23699_23764[(2)] = null);

(statearr_23699_23764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (14))){
var state_23637__$1 = state_23637;
var statearr_23700_23765 = state_23637__$1;
(statearr_23700_23765[(2)] = null);

(statearr_23700_23765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (45))){
var inst_23627 = (state_23637[(2)]);
var state_23637__$1 = state_23637;
var statearr_23701_23766 = state_23637__$1;
(statearr_23701_23766[(2)] = inst_23627);

(statearr_23701_23766[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (26))){
var inst_23569 = (state_23637[(29)]);
var inst_23623 = (state_23637[(2)]);
var inst_23624 = cljs.core.seq.call(null,inst_23569);
var state_23637__$1 = (function (){var statearr_23702 = state_23637;
(statearr_23702[(31)] = inst_23623);

return statearr_23702;
})();
if(inst_23624){
var statearr_23703_23767 = state_23637__$1;
(statearr_23703_23767[(1)] = (42));

} else {
var statearr_23704_23768 = state_23637__$1;
(statearr_23704_23768[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (16))){
var inst_23538 = (state_23637[(7)]);
var inst_23540 = cljs.core.chunked_seq_QMARK_.call(null,inst_23538);
var state_23637__$1 = state_23637;
if(inst_23540){
var statearr_23705_23769 = state_23637__$1;
(statearr_23705_23769[(1)] = (19));

} else {
var statearr_23706_23770 = state_23637__$1;
(statearr_23706_23770[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (38))){
var inst_23616 = (state_23637[(2)]);
var state_23637__$1 = state_23637;
var statearr_23707_23771 = state_23637__$1;
(statearr_23707_23771[(2)] = inst_23616);

(statearr_23707_23771[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (30))){
var state_23637__$1 = state_23637;
var statearr_23708_23772 = state_23637__$1;
(statearr_23708_23772[(2)] = null);

(statearr_23708_23772[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (10))){
var inst_23519 = (state_23637[(16)]);
var inst_23521 = (state_23637[(17)]);
var inst_23527 = cljs.core._nth.call(null,inst_23519,inst_23521);
var inst_23528 = cljs.core.nth.call(null,inst_23527,(0),null);
var inst_23529 = cljs.core.nth.call(null,inst_23527,(1),null);
var state_23637__$1 = (function (){var statearr_23709 = state_23637;
(statearr_23709[(26)] = inst_23528);

return statearr_23709;
})();
if(cljs.core.truth_(inst_23529)){
var statearr_23710_23773 = state_23637__$1;
(statearr_23710_23773[(1)] = (13));

} else {
var statearr_23711_23774 = state_23637__$1;
(statearr_23711_23774[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (18))){
var inst_23562 = (state_23637[(2)]);
var state_23637__$1 = state_23637;
var statearr_23712_23775 = state_23637__$1;
(statearr_23712_23775[(2)] = inst_23562);

(statearr_23712_23775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (42))){
var state_23637__$1 = state_23637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23637__$1,(45),dchan);
} else {
if((state_val_23638 === (37))){
var inst_23509 = (state_23637[(11)]);
var inst_23605 = (state_23637[(23)]);
var inst_23596 = (state_23637[(25)]);
var inst_23605__$1 = cljs.core.first.call(null,inst_23596);
var inst_23606 = cljs.core.async.put_BANG_.call(null,inst_23605__$1,inst_23509,done);
var state_23637__$1 = (function (){var statearr_23713 = state_23637;
(statearr_23713[(23)] = inst_23605__$1);

return statearr_23713;
})();
if(cljs.core.truth_(inst_23606)){
var statearr_23714_23776 = state_23637__$1;
(statearr_23714_23776[(1)] = (39));

} else {
var statearr_23715_23777 = state_23637__$1;
(statearr_23715_23777[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (8))){
var inst_23520 = (state_23637[(13)]);
var inst_23521 = (state_23637[(17)]);
var inst_23523 = (inst_23521 < inst_23520);
var inst_23524 = inst_23523;
var state_23637__$1 = state_23637;
if(cljs.core.truth_(inst_23524)){
var statearr_23716_23778 = state_23637__$1;
(statearr_23716_23778[(1)] = (10));

} else {
var statearr_23717_23779 = state_23637__$1;
(statearr_23717_23779[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22418__auto___23725,cs,m,dchan,dctr,done))
;
return ((function (switch__22306__auto__,c__22418__auto___23725,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22307__auto__ = null;
var cljs$core$async$mult_$_state_machine__22307__auto____0 = (function (){
var statearr_23721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23721[(0)] = cljs$core$async$mult_$_state_machine__22307__auto__);

(statearr_23721[(1)] = (1));

return statearr_23721;
});
var cljs$core$async$mult_$_state_machine__22307__auto____1 = (function (state_23637){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_23637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e23722){if((e23722 instanceof Object)){
var ex__22310__auto__ = e23722;
var statearr_23723_23780 = state_23637;
(statearr_23723_23780[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23781 = state_23637;
state_23637 = G__23781;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22307__auto__ = function(state_23637){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22307__auto____1.call(this,state_23637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22307__auto____0;
cljs$core$async$mult_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22307__auto____1;
return cljs$core$async$mult_$_state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto___23725,cs,m,dchan,dctr,done))
})();
var state__22420__auto__ = (function (){var statearr_23724 = f__22419__auto__.call(null);
(statearr_23724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___23725);

return statearr_23724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto___23725,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23782 = [];
var len__20793__auto___23785 = arguments.length;
var i__20794__auto___23786 = (0);
while(true){
if((i__20794__auto___23786 < len__20793__auto___23785)){
args23782.push((arguments[i__20794__auto___23786]));

var G__23787 = (i__20794__auto___23786 + (1));
i__20794__auto___23786 = G__23787;
continue;
} else {
}
break;
}

var G__23784 = args23782.length;
switch (G__23784) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23782.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20390__auto__ = (((m == null))?null:m);
var m__20391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20390__auto__)]);
if(!((m__20391__auto__ == null))){
return m__20391__auto__.call(null,m,ch);
} else {
var m__20391__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20391__auto____$1 == null))){
return m__20391__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20390__auto__ = (((m == null))?null:m);
var m__20391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20390__auto__)]);
if(!((m__20391__auto__ == null))){
return m__20391__auto__.call(null,m,ch);
} else {
var m__20391__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20391__auto____$1 == null))){
return m__20391__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20390__auto__ = (((m == null))?null:m);
var m__20391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20390__auto__)]);
if(!((m__20391__auto__ == null))){
return m__20391__auto__.call(null,m);
} else {
var m__20391__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20391__auto____$1 == null))){
return m__20391__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20390__auto__ = (((m == null))?null:m);
var m__20391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20390__auto__)]);
if(!((m__20391__auto__ == null))){
return m__20391__auto__.call(null,m,state_map);
} else {
var m__20391__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20391__auto____$1 == null))){
return m__20391__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20390__auto__ = (((m == null))?null:m);
var m__20391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20390__auto__)]);
if(!((m__20391__auto__ == null))){
return m__20391__auto__.call(null,m,mode);
} else {
var m__20391__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20391__auto____$1 == null))){
return m__20391__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20800__auto__ = [];
var len__20793__auto___23799 = arguments.length;
var i__20794__auto___23800 = (0);
while(true){
if((i__20794__auto___23800 < len__20793__auto___23799)){
args__20800__auto__.push((arguments[i__20794__auto___23800]));

var G__23801 = (i__20794__auto___23800 + (1));
i__20794__auto___23800 = G__23801;
continue;
} else {
}
break;
}

var argseq__20801__auto__ = ((((3) < args__20800__auto__.length))?(new cljs.core.IndexedSeq(args__20800__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20801__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23793){
var map__23794 = p__23793;
var map__23794__$1 = ((((!((map__23794 == null)))?((((map__23794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23794):map__23794);
var opts = map__23794__$1;
var statearr_23796_23802 = state;
(statearr_23796_23802[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23794,map__23794__$1,opts){
return (function (val){
var statearr_23797_23803 = state;
(statearr_23797_23803[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23794,map__23794__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23798_23804 = state;
(statearr_23798_23804[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23789){
var G__23790 = cljs.core.first.call(null,seq23789);
var seq23789__$1 = cljs.core.next.call(null,seq23789);
var G__23791 = cljs.core.first.call(null,seq23789__$1);
var seq23789__$2 = cljs.core.next.call(null,seq23789__$1);
var G__23792 = cljs.core.first.call(null,seq23789__$2);
var seq23789__$3 = cljs.core.next.call(null,seq23789__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23790,G__23791,G__23792,seq23789__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23968 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23968 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23969){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23969 = meta23969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23970,meta23969__$1){
var self__ = this;
var _23970__$1 = this;
return (new cljs.core.async.t_cljs$core$async23968(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23969__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23968.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23970){
var self__ = this;
var _23970__$1 = this;
return self__.meta23969;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23968.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23968.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23968.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23968.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23968.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23968.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23968.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23968.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23968.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23969","meta23969",729895766,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23968";

cljs.core.async.t_cljs$core$async23968.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20333__auto__,writer__20334__auto__,opt__20335__auto__){
return cljs.core._write.call(null,writer__20334__auto__,"cljs.core.async/t_cljs$core$async23968");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23968 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23968(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23969){
return (new cljs.core.async.t_cljs$core$async23968(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23969));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23968(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22418__auto___24131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto___24131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto___24131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24068){
var state_val_24069 = (state_24068[(1)]);
if((state_val_24069 === (7))){
var inst_23986 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24070_24132 = state_24068__$1;
(statearr_24070_24132[(2)] = inst_23986);

(statearr_24070_24132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (20))){
var inst_23998 = (state_24068[(7)]);
var state_24068__$1 = state_24068;
var statearr_24071_24133 = state_24068__$1;
(statearr_24071_24133[(2)] = inst_23998);

(statearr_24071_24133[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (27))){
var state_24068__$1 = state_24068;
var statearr_24072_24134 = state_24068__$1;
(statearr_24072_24134[(2)] = null);

(statearr_24072_24134[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (1))){
var inst_23974 = (state_24068[(8)]);
var inst_23974__$1 = calc_state.call(null);
var inst_23976 = (inst_23974__$1 == null);
var inst_23977 = cljs.core.not.call(null,inst_23976);
var state_24068__$1 = (function (){var statearr_24073 = state_24068;
(statearr_24073[(8)] = inst_23974__$1);

return statearr_24073;
})();
if(inst_23977){
var statearr_24074_24135 = state_24068__$1;
(statearr_24074_24135[(1)] = (2));

} else {
var statearr_24075_24136 = state_24068__$1;
(statearr_24075_24136[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (24))){
var inst_24021 = (state_24068[(9)]);
var inst_24028 = (state_24068[(10)]);
var inst_24042 = (state_24068[(11)]);
var inst_24042__$1 = inst_24021.call(null,inst_24028);
var state_24068__$1 = (function (){var statearr_24076 = state_24068;
(statearr_24076[(11)] = inst_24042__$1);

return statearr_24076;
})();
if(cljs.core.truth_(inst_24042__$1)){
var statearr_24077_24137 = state_24068__$1;
(statearr_24077_24137[(1)] = (29));

} else {
var statearr_24078_24138 = state_24068__$1;
(statearr_24078_24138[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (4))){
var inst_23989 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
if(cljs.core.truth_(inst_23989)){
var statearr_24079_24139 = state_24068__$1;
(statearr_24079_24139[(1)] = (8));

} else {
var statearr_24080_24140 = state_24068__$1;
(statearr_24080_24140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (15))){
var inst_24015 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
if(cljs.core.truth_(inst_24015)){
var statearr_24081_24141 = state_24068__$1;
(statearr_24081_24141[(1)] = (19));

} else {
var statearr_24082_24142 = state_24068__$1;
(statearr_24082_24142[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (21))){
var inst_24020 = (state_24068[(12)]);
var inst_24020__$1 = (state_24068[(2)]);
var inst_24021 = cljs.core.get.call(null,inst_24020__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24022 = cljs.core.get.call(null,inst_24020__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24023 = cljs.core.get.call(null,inst_24020__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24068__$1 = (function (){var statearr_24083 = state_24068;
(statearr_24083[(9)] = inst_24021);

(statearr_24083[(13)] = inst_24022);

(statearr_24083[(12)] = inst_24020__$1);

return statearr_24083;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24068__$1,(22),inst_24023);
} else {
if((state_val_24069 === (31))){
var inst_24050 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
if(cljs.core.truth_(inst_24050)){
var statearr_24084_24143 = state_24068__$1;
(statearr_24084_24143[(1)] = (32));

} else {
var statearr_24085_24144 = state_24068__$1;
(statearr_24085_24144[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (32))){
var inst_24027 = (state_24068[(14)]);
var state_24068__$1 = state_24068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24068__$1,(35),out,inst_24027);
} else {
if((state_val_24069 === (33))){
var inst_24020 = (state_24068[(12)]);
var inst_23998 = inst_24020;
var state_24068__$1 = (function (){var statearr_24086 = state_24068;
(statearr_24086[(7)] = inst_23998);

return statearr_24086;
})();
var statearr_24087_24145 = state_24068__$1;
(statearr_24087_24145[(2)] = null);

(statearr_24087_24145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (13))){
var inst_23998 = (state_24068[(7)]);
var inst_24005 = inst_23998.cljs$lang$protocol_mask$partition0$;
var inst_24006 = (inst_24005 & (64));
var inst_24007 = inst_23998.cljs$core$ISeq$;
var inst_24008 = (inst_24006) || (inst_24007);
var state_24068__$1 = state_24068;
if(cljs.core.truth_(inst_24008)){
var statearr_24088_24146 = state_24068__$1;
(statearr_24088_24146[(1)] = (16));

} else {
var statearr_24089_24147 = state_24068__$1;
(statearr_24089_24147[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (22))){
var inst_24027 = (state_24068[(14)]);
var inst_24028 = (state_24068[(10)]);
var inst_24026 = (state_24068[(2)]);
var inst_24027__$1 = cljs.core.nth.call(null,inst_24026,(0),null);
var inst_24028__$1 = cljs.core.nth.call(null,inst_24026,(1),null);
var inst_24029 = (inst_24027__$1 == null);
var inst_24030 = cljs.core._EQ_.call(null,inst_24028__$1,change);
var inst_24031 = (inst_24029) || (inst_24030);
var state_24068__$1 = (function (){var statearr_24090 = state_24068;
(statearr_24090[(14)] = inst_24027__$1);

(statearr_24090[(10)] = inst_24028__$1);

return statearr_24090;
})();
if(cljs.core.truth_(inst_24031)){
var statearr_24091_24148 = state_24068__$1;
(statearr_24091_24148[(1)] = (23));

} else {
var statearr_24092_24149 = state_24068__$1;
(statearr_24092_24149[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (36))){
var inst_24020 = (state_24068[(12)]);
var inst_23998 = inst_24020;
var state_24068__$1 = (function (){var statearr_24093 = state_24068;
(statearr_24093[(7)] = inst_23998);

return statearr_24093;
})();
var statearr_24094_24150 = state_24068__$1;
(statearr_24094_24150[(2)] = null);

(statearr_24094_24150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (29))){
var inst_24042 = (state_24068[(11)]);
var state_24068__$1 = state_24068;
var statearr_24095_24151 = state_24068__$1;
(statearr_24095_24151[(2)] = inst_24042);

(statearr_24095_24151[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (6))){
var state_24068__$1 = state_24068;
var statearr_24096_24152 = state_24068__$1;
(statearr_24096_24152[(2)] = false);

(statearr_24096_24152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (28))){
var inst_24038 = (state_24068[(2)]);
var inst_24039 = calc_state.call(null);
var inst_23998 = inst_24039;
var state_24068__$1 = (function (){var statearr_24097 = state_24068;
(statearr_24097[(7)] = inst_23998);

(statearr_24097[(15)] = inst_24038);

return statearr_24097;
})();
var statearr_24098_24153 = state_24068__$1;
(statearr_24098_24153[(2)] = null);

(statearr_24098_24153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (25))){
var inst_24064 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24099_24154 = state_24068__$1;
(statearr_24099_24154[(2)] = inst_24064);

(statearr_24099_24154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (34))){
var inst_24062 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24100_24155 = state_24068__$1;
(statearr_24100_24155[(2)] = inst_24062);

(statearr_24100_24155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (17))){
var state_24068__$1 = state_24068;
var statearr_24101_24156 = state_24068__$1;
(statearr_24101_24156[(2)] = false);

(statearr_24101_24156[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (3))){
var state_24068__$1 = state_24068;
var statearr_24102_24157 = state_24068__$1;
(statearr_24102_24157[(2)] = false);

(statearr_24102_24157[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (12))){
var inst_24066 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24068__$1,inst_24066);
} else {
if((state_val_24069 === (2))){
var inst_23974 = (state_24068[(8)]);
var inst_23979 = inst_23974.cljs$lang$protocol_mask$partition0$;
var inst_23980 = (inst_23979 & (64));
var inst_23981 = inst_23974.cljs$core$ISeq$;
var inst_23982 = (inst_23980) || (inst_23981);
var state_24068__$1 = state_24068;
if(cljs.core.truth_(inst_23982)){
var statearr_24103_24158 = state_24068__$1;
(statearr_24103_24158[(1)] = (5));

} else {
var statearr_24104_24159 = state_24068__$1;
(statearr_24104_24159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (23))){
var inst_24027 = (state_24068[(14)]);
var inst_24033 = (inst_24027 == null);
var state_24068__$1 = state_24068;
if(cljs.core.truth_(inst_24033)){
var statearr_24105_24160 = state_24068__$1;
(statearr_24105_24160[(1)] = (26));

} else {
var statearr_24106_24161 = state_24068__$1;
(statearr_24106_24161[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (35))){
var inst_24053 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
if(cljs.core.truth_(inst_24053)){
var statearr_24107_24162 = state_24068__$1;
(statearr_24107_24162[(1)] = (36));

} else {
var statearr_24108_24163 = state_24068__$1;
(statearr_24108_24163[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (19))){
var inst_23998 = (state_24068[(7)]);
var inst_24017 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23998);
var state_24068__$1 = state_24068;
var statearr_24109_24164 = state_24068__$1;
(statearr_24109_24164[(2)] = inst_24017);

(statearr_24109_24164[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (11))){
var inst_23998 = (state_24068[(7)]);
var inst_24002 = (inst_23998 == null);
var inst_24003 = cljs.core.not.call(null,inst_24002);
var state_24068__$1 = state_24068;
if(inst_24003){
var statearr_24110_24165 = state_24068__$1;
(statearr_24110_24165[(1)] = (13));

} else {
var statearr_24111_24166 = state_24068__$1;
(statearr_24111_24166[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (9))){
var inst_23974 = (state_24068[(8)]);
var state_24068__$1 = state_24068;
var statearr_24112_24167 = state_24068__$1;
(statearr_24112_24167[(2)] = inst_23974);

(statearr_24112_24167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (5))){
var state_24068__$1 = state_24068;
var statearr_24113_24168 = state_24068__$1;
(statearr_24113_24168[(2)] = true);

(statearr_24113_24168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (14))){
var state_24068__$1 = state_24068;
var statearr_24114_24169 = state_24068__$1;
(statearr_24114_24169[(2)] = false);

(statearr_24114_24169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (26))){
var inst_24028 = (state_24068[(10)]);
var inst_24035 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24028);
var state_24068__$1 = state_24068;
var statearr_24115_24170 = state_24068__$1;
(statearr_24115_24170[(2)] = inst_24035);

(statearr_24115_24170[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (16))){
var state_24068__$1 = state_24068;
var statearr_24116_24171 = state_24068__$1;
(statearr_24116_24171[(2)] = true);

(statearr_24116_24171[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (38))){
var inst_24058 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24117_24172 = state_24068__$1;
(statearr_24117_24172[(2)] = inst_24058);

(statearr_24117_24172[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (30))){
var inst_24021 = (state_24068[(9)]);
var inst_24028 = (state_24068[(10)]);
var inst_24022 = (state_24068[(13)]);
var inst_24045 = cljs.core.empty_QMARK_.call(null,inst_24021);
var inst_24046 = inst_24022.call(null,inst_24028);
var inst_24047 = cljs.core.not.call(null,inst_24046);
var inst_24048 = (inst_24045) && (inst_24047);
var state_24068__$1 = state_24068;
var statearr_24118_24173 = state_24068__$1;
(statearr_24118_24173[(2)] = inst_24048);

(statearr_24118_24173[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (10))){
var inst_23974 = (state_24068[(8)]);
var inst_23994 = (state_24068[(2)]);
var inst_23995 = cljs.core.get.call(null,inst_23994,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23996 = cljs.core.get.call(null,inst_23994,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23997 = cljs.core.get.call(null,inst_23994,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23998 = inst_23974;
var state_24068__$1 = (function (){var statearr_24119 = state_24068;
(statearr_24119[(7)] = inst_23998);

(statearr_24119[(16)] = inst_23997);

(statearr_24119[(17)] = inst_23996);

(statearr_24119[(18)] = inst_23995);

return statearr_24119;
})();
var statearr_24120_24174 = state_24068__$1;
(statearr_24120_24174[(2)] = null);

(statearr_24120_24174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (18))){
var inst_24012 = (state_24068[(2)]);
var state_24068__$1 = state_24068;
var statearr_24121_24175 = state_24068__$1;
(statearr_24121_24175[(2)] = inst_24012);

(statearr_24121_24175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (37))){
var state_24068__$1 = state_24068;
var statearr_24122_24176 = state_24068__$1;
(statearr_24122_24176[(2)] = null);

(statearr_24122_24176[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24069 === (8))){
var inst_23974 = (state_24068[(8)]);
var inst_23991 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23974);
var state_24068__$1 = state_24068;
var statearr_24123_24177 = state_24068__$1;
(statearr_24123_24177[(2)] = inst_23991);

(statearr_24123_24177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22418__auto___24131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22306__auto__,c__22418__auto___24131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22307__auto__ = null;
var cljs$core$async$mix_$_state_machine__22307__auto____0 = (function (){
var statearr_24127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24127[(0)] = cljs$core$async$mix_$_state_machine__22307__auto__);

(statearr_24127[(1)] = (1));

return statearr_24127;
});
var cljs$core$async$mix_$_state_machine__22307__auto____1 = (function (state_24068){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_24068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e24128){if((e24128 instanceof Object)){
var ex__22310__auto__ = e24128;
var statearr_24129_24178 = state_24068;
(statearr_24129_24178[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24179 = state_24068;
state_24068 = G__24179;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22307__auto__ = function(state_24068){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22307__auto____1.call(this,state_24068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22307__auto____0;
cljs$core$async$mix_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22307__auto____1;
return cljs$core$async$mix_$_state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto___24131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22420__auto__ = (function (){var statearr_24130 = f__22419__auto__.call(null);
(statearr_24130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___24131);

return statearr_24130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto___24131,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20390__auto__ = (((p == null))?null:p);
var m__20391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20390__auto__)]);
if(!((m__20391__auto__ == null))){
return m__20391__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20391__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20391__auto____$1 == null))){
return m__20391__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20390__auto__ = (((p == null))?null:p);
var m__20391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20390__auto__)]);
if(!((m__20391__auto__ == null))){
return m__20391__auto__.call(null,p,v,ch);
} else {
var m__20391__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20391__auto____$1 == null))){
return m__20391__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24180 = [];
var len__20793__auto___24183 = arguments.length;
var i__20794__auto___24184 = (0);
while(true){
if((i__20794__auto___24184 < len__20793__auto___24183)){
args24180.push((arguments[i__20794__auto___24184]));

var G__24185 = (i__20794__auto___24184 + (1));
i__20794__auto___24184 = G__24185;
continue;
} else {
}
break;
}

var G__24182 = args24180.length;
switch (G__24182) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24180.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20390__auto__ = (((p == null))?null:p);
var m__20391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20390__auto__)]);
if(!((m__20391__auto__ == null))){
return m__20391__auto__.call(null,p);
} else {
var m__20391__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20391__auto____$1 == null))){
return m__20391__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20390__auto__ = (((p == null))?null:p);
var m__20391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20390__auto__)]);
if(!((m__20391__auto__ == null))){
return m__20391__auto__.call(null,p,v);
} else {
var m__20391__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20391__auto____$1 == null))){
return m__20391__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args24188 = [];
var len__20793__auto___24313 = arguments.length;
var i__20794__auto___24314 = (0);
while(true){
if((i__20794__auto___24314 < len__20793__auto___24313)){
args24188.push((arguments[i__20794__auto___24314]));

var G__24315 = (i__20794__auto___24314 + (1));
i__20794__auto___24314 = G__24315;
continue;
} else {
}
break;
}

var G__24190 = args24188.length;
switch (G__24190) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24188.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19735__auto__)){
return or__19735__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19735__auto__,mults){
return (function (p1__24187_SHARP_){
if(cljs.core.truth_(p1__24187_SHARP_.call(null,topic))){
return p1__24187_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24187_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19735__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24191 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24192){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24192 = meta24192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24193,meta24192__$1){
var self__ = this;
var _24193__$1 = this;
return (new cljs.core.async.t_cljs$core$async24191(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24192__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24193){
var self__ = this;
var _24193__$1 = this;
return self__.meta24192;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24191.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24191.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24191.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24191.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24191.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24191.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24191.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24192","meta24192",-269604552,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24191";

cljs.core.async.t_cljs$core$async24191.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20333__auto__,writer__20334__auto__,opt__20335__auto__){
return cljs.core._write.call(null,writer__20334__auto__,"cljs.core.async/t_cljs$core$async24191");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24191 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24191(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24192){
return (new cljs.core.async.t_cljs$core$async24191(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24192));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24191(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22418__auto___24317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto___24317,mults,ensure_mult,p){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto___24317,mults,ensure_mult,p){
return (function (state_24265){
var state_val_24266 = (state_24265[(1)]);
if((state_val_24266 === (7))){
var inst_24261 = (state_24265[(2)]);
var state_24265__$1 = state_24265;
var statearr_24267_24318 = state_24265__$1;
(statearr_24267_24318[(2)] = inst_24261);

(statearr_24267_24318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (20))){
var state_24265__$1 = state_24265;
var statearr_24268_24319 = state_24265__$1;
(statearr_24268_24319[(2)] = null);

(statearr_24268_24319[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (1))){
var state_24265__$1 = state_24265;
var statearr_24269_24320 = state_24265__$1;
(statearr_24269_24320[(2)] = null);

(statearr_24269_24320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (24))){
var inst_24244 = (state_24265[(7)]);
var inst_24253 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24244);
var state_24265__$1 = state_24265;
var statearr_24270_24321 = state_24265__$1;
(statearr_24270_24321[(2)] = inst_24253);

(statearr_24270_24321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (4))){
var inst_24196 = (state_24265[(8)]);
var inst_24196__$1 = (state_24265[(2)]);
var inst_24197 = (inst_24196__$1 == null);
var state_24265__$1 = (function (){var statearr_24271 = state_24265;
(statearr_24271[(8)] = inst_24196__$1);

return statearr_24271;
})();
if(cljs.core.truth_(inst_24197)){
var statearr_24272_24322 = state_24265__$1;
(statearr_24272_24322[(1)] = (5));

} else {
var statearr_24273_24323 = state_24265__$1;
(statearr_24273_24323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (15))){
var inst_24238 = (state_24265[(2)]);
var state_24265__$1 = state_24265;
var statearr_24274_24324 = state_24265__$1;
(statearr_24274_24324[(2)] = inst_24238);

(statearr_24274_24324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (21))){
var inst_24258 = (state_24265[(2)]);
var state_24265__$1 = (function (){var statearr_24275 = state_24265;
(statearr_24275[(9)] = inst_24258);

return statearr_24275;
})();
var statearr_24276_24325 = state_24265__$1;
(statearr_24276_24325[(2)] = null);

(statearr_24276_24325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (13))){
var inst_24220 = (state_24265[(10)]);
var inst_24222 = cljs.core.chunked_seq_QMARK_.call(null,inst_24220);
var state_24265__$1 = state_24265;
if(inst_24222){
var statearr_24277_24326 = state_24265__$1;
(statearr_24277_24326[(1)] = (16));

} else {
var statearr_24278_24327 = state_24265__$1;
(statearr_24278_24327[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (22))){
var inst_24250 = (state_24265[(2)]);
var state_24265__$1 = state_24265;
if(cljs.core.truth_(inst_24250)){
var statearr_24279_24328 = state_24265__$1;
(statearr_24279_24328[(1)] = (23));

} else {
var statearr_24280_24329 = state_24265__$1;
(statearr_24280_24329[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (6))){
var inst_24196 = (state_24265[(8)]);
var inst_24244 = (state_24265[(7)]);
var inst_24246 = (state_24265[(11)]);
var inst_24244__$1 = topic_fn.call(null,inst_24196);
var inst_24245 = cljs.core.deref.call(null,mults);
var inst_24246__$1 = cljs.core.get.call(null,inst_24245,inst_24244__$1);
var state_24265__$1 = (function (){var statearr_24281 = state_24265;
(statearr_24281[(7)] = inst_24244__$1);

(statearr_24281[(11)] = inst_24246__$1);

return statearr_24281;
})();
if(cljs.core.truth_(inst_24246__$1)){
var statearr_24282_24330 = state_24265__$1;
(statearr_24282_24330[(1)] = (19));

} else {
var statearr_24283_24331 = state_24265__$1;
(statearr_24283_24331[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (25))){
var inst_24255 = (state_24265[(2)]);
var state_24265__$1 = state_24265;
var statearr_24284_24332 = state_24265__$1;
(statearr_24284_24332[(2)] = inst_24255);

(statearr_24284_24332[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (17))){
var inst_24220 = (state_24265[(10)]);
var inst_24229 = cljs.core.first.call(null,inst_24220);
var inst_24230 = cljs.core.async.muxch_STAR_.call(null,inst_24229);
var inst_24231 = cljs.core.async.close_BANG_.call(null,inst_24230);
var inst_24232 = cljs.core.next.call(null,inst_24220);
var inst_24206 = inst_24232;
var inst_24207 = null;
var inst_24208 = (0);
var inst_24209 = (0);
var state_24265__$1 = (function (){var statearr_24285 = state_24265;
(statearr_24285[(12)] = inst_24206);

(statearr_24285[(13)] = inst_24209);

(statearr_24285[(14)] = inst_24208);

(statearr_24285[(15)] = inst_24207);

(statearr_24285[(16)] = inst_24231);

return statearr_24285;
})();
var statearr_24286_24333 = state_24265__$1;
(statearr_24286_24333[(2)] = null);

(statearr_24286_24333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (3))){
var inst_24263 = (state_24265[(2)]);
var state_24265__$1 = state_24265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24265__$1,inst_24263);
} else {
if((state_val_24266 === (12))){
var inst_24240 = (state_24265[(2)]);
var state_24265__$1 = state_24265;
var statearr_24287_24334 = state_24265__$1;
(statearr_24287_24334[(2)] = inst_24240);

(statearr_24287_24334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (2))){
var state_24265__$1 = state_24265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24265__$1,(4),ch);
} else {
if((state_val_24266 === (23))){
var state_24265__$1 = state_24265;
var statearr_24288_24335 = state_24265__$1;
(statearr_24288_24335[(2)] = null);

(statearr_24288_24335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (19))){
var inst_24196 = (state_24265[(8)]);
var inst_24246 = (state_24265[(11)]);
var inst_24248 = cljs.core.async.muxch_STAR_.call(null,inst_24246);
var state_24265__$1 = state_24265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24265__$1,(22),inst_24248,inst_24196);
} else {
if((state_val_24266 === (11))){
var inst_24206 = (state_24265[(12)]);
var inst_24220 = (state_24265[(10)]);
var inst_24220__$1 = cljs.core.seq.call(null,inst_24206);
var state_24265__$1 = (function (){var statearr_24289 = state_24265;
(statearr_24289[(10)] = inst_24220__$1);

return statearr_24289;
})();
if(inst_24220__$1){
var statearr_24290_24336 = state_24265__$1;
(statearr_24290_24336[(1)] = (13));

} else {
var statearr_24291_24337 = state_24265__$1;
(statearr_24291_24337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (9))){
var inst_24242 = (state_24265[(2)]);
var state_24265__$1 = state_24265;
var statearr_24292_24338 = state_24265__$1;
(statearr_24292_24338[(2)] = inst_24242);

(statearr_24292_24338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (5))){
var inst_24203 = cljs.core.deref.call(null,mults);
var inst_24204 = cljs.core.vals.call(null,inst_24203);
var inst_24205 = cljs.core.seq.call(null,inst_24204);
var inst_24206 = inst_24205;
var inst_24207 = null;
var inst_24208 = (0);
var inst_24209 = (0);
var state_24265__$1 = (function (){var statearr_24293 = state_24265;
(statearr_24293[(12)] = inst_24206);

(statearr_24293[(13)] = inst_24209);

(statearr_24293[(14)] = inst_24208);

(statearr_24293[(15)] = inst_24207);

return statearr_24293;
})();
var statearr_24294_24339 = state_24265__$1;
(statearr_24294_24339[(2)] = null);

(statearr_24294_24339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (14))){
var state_24265__$1 = state_24265;
var statearr_24298_24340 = state_24265__$1;
(statearr_24298_24340[(2)] = null);

(statearr_24298_24340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (16))){
var inst_24220 = (state_24265[(10)]);
var inst_24224 = cljs.core.chunk_first.call(null,inst_24220);
var inst_24225 = cljs.core.chunk_rest.call(null,inst_24220);
var inst_24226 = cljs.core.count.call(null,inst_24224);
var inst_24206 = inst_24225;
var inst_24207 = inst_24224;
var inst_24208 = inst_24226;
var inst_24209 = (0);
var state_24265__$1 = (function (){var statearr_24299 = state_24265;
(statearr_24299[(12)] = inst_24206);

(statearr_24299[(13)] = inst_24209);

(statearr_24299[(14)] = inst_24208);

(statearr_24299[(15)] = inst_24207);

return statearr_24299;
})();
var statearr_24300_24341 = state_24265__$1;
(statearr_24300_24341[(2)] = null);

(statearr_24300_24341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (10))){
var inst_24206 = (state_24265[(12)]);
var inst_24209 = (state_24265[(13)]);
var inst_24208 = (state_24265[(14)]);
var inst_24207 = (state_24265[(15)]);
var inst_24214 = cljs.core._nth.call(null,inst_24207,inst_24209);
var inst_24215 = cljs.core.async.muxch_STAR_.call(null,inst_24214);
var inst_24216 = cljs.core.async.close_BANG_.call(null,inst_24215);
var inst_24217 = (inst_24209 + (1));
var tmp24295 = inst_24206;
var tmp24296 = inst_24208;
var tmp24297 = inst_24207;
var inst_24206__$1 = tmp24295;
var inst_24207__$1 = tmp24297;
var inst_24208__$1 = tmp24296;
var inst_24209__$1 = inst_24217;
var state_24265__$1 = (function (){var statearr_24301 = state_24265;
(statearr_24301[(17)] = inst_24216);

(statearr_24301[(12)] = inst_24206__$1);

(statearr_24301[(13)] = inst_24209__$1);

(statearr_24301[(14)] = inst_24208__$1);

(statearr_24301[(15)] = inst_24207__$1);

return statearr_24301;
})();
var statearr_24302_24342 = state_24265__$1;
(statearr_24302_24342[(2)] = null);

(statearr_24302_24342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (18))){
var inst_24235 = (state_24265[(2)]);
var state_24265__$1 = state_24265;
var statearr_24303_24343 = state_24265__$1;
(statearr_24303_24343[(2)] = inst_24235);

(statearr_24303_24343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (8))){
var inst_24209 = (state_24265[(13)]);
var inst_24208 = (state_24265[(14)]);
var inst_24211 = (inst_24209 < inst_24208);
var inst_24212 = inst_24211;
var state_24265__$1 = state_24265;
if(cljs.core.truth_(inst_24212)){
var statearr_24304_24344 = state_24265__$1;
(statearr_24304_24344[(1)] = (10));

} else {
var statearr_24305_24345 = state_24265__$1;
(statearr_24305_24345[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22418__auto___24317,mults,ensure_mult,p))
;
return ((function (switch__22306__auto__,c__22418__auto___24317,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22307__auto__ = null;
var cljs$core$async$state_machine__22307__auto____0 = (function (){
var statearr_24309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24309[(0)] = cljs$core$async$state_machine__22307__auto__);

(statearr_24309[(1)] = (1));

return statearr_24309;
});
var cljs$core$async$state_machine__22307__auto____1 = (function (state_24265){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_24265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e24310){if((e24310 instanceof Object)){
var ex__22310__auto__ = e24310;
var statearr_24311_24346 = state_24265;
(statearr_24311_24346[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24347 = state_24265;
state_24265 = G__24347;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$state_machine__22307__auto__ = function(state_24265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22307__auto____1.call(this,state_24265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22307__auto____0;
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22307__auto____1;
return cljs$core$async$state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto___24317,mults,ensure_mult,p))
})();
var state__22420__auto__ = (function (){var statearr_24312 = f__22419__auto__.call(null);
(statearr_24312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___24317);

return statearr_24312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto___24317,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24348 = [];
var len__20793__auto___24351 = arguments.length;
var i__20794__auto___24352 = (0);
while(true){
if((i__20794__auto___24352 < len__20793__auto___24351)){
args24348.push((arguments[i__20794__auto___24352]));

var G__24353 = (i__20794__auto___24352 + (1));
i__20794__auto___24352 = G__24353;
continue;
} else {
}
break;
}

var G__24350 = args24348.length;
switch (G__24350) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24348.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24355 = [];
var len__20793__auto___24358 = arguments.length;
var i__20794__auto___24359 = (0);
while(true){
if((i__20794__auto___24359 < len__20793__auto___24358)){
args24355.push((arguments[i__20794__auto___24359]));

var G__24360 = (i__20794__auto___24359 + (1));
i__20794__auto___24359 = G__24360;
continue;
} else {
}
break;
}

var G__24357 = args24355.length;
switch (G__24357) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24355.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24362 = [];
var len__20793__auto___24433 = arguments.length;
var i__20794__auto___24434 = (0);
while(true){
if((i__20794__auto___24434 < len__20793__auto___24433)){
args24362.push((arguments[i__20794__auto___24434]));

var G__24435 = (i__20794__auto___24434 + (1));
i__20794__auto___24434 = G__24435;
continue;
} else {
}
break;
}

var G__24364 = args24362.length;
switch (G__24364) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24362.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22418__auto___24437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto___24437,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto___24437,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24403){
var state_val_24404 = (state_24403[(1)]);
if((state_val_24404 === (7))){
var state_24403__$1 = state_24403;
var statearr_24405_24438 = state_24403__$1;
(statearr_24405_24438[(2)] = null);

(statearr_24405_24438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24404 === (1))){
var state_24403__$1 = state_24403;
var statearr_24406_24439 = state_24403__$1;
(statearr_24406_24439[(2)] = null);

(statearr_24406_24439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24404 === (4))){
var inst_24367 = (state_24403[(7)]);
var inst_24369 = (inst_24367 < cnt);
var state_24403__$1 = state_24403;
if(cljs.core.truth_(inst_24369)){
var statearr_24407_24440 = state_24403__$1;
(statearr_24407_24440[(1)] = (6));

} else {
var statearr_24408_24441 = state_24403__$1;
(statearr_24408_24441[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24404 === (15))){
var inst_24399 = (state_24403[(2)]);
var state_24403__$1 = state_24403;
var statearr_24409_24442 = state_24403__$1;
(statearr_24409_24442[(2)] = inst_24399);

(statearr_24409_24442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24404 === (13))){
var inst_24392 = cljs.core.async.close_BANG_.call(null,out);
var state_24403__$1 = state_24403;
var statearr_24410_24443 = state_24403__$1;
(statearr_24410_24443[(2)] = inst_24392);

(statearr_24410_24443[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24404 === (6))){
var state_24403__$1 = state_24403;
var statearr_24411_24444 = state_24403__$1;
(statearr_24411_24444[(2)] = null);

(statearr_24411_24444[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24404 === (3))){
var inst_24401 = (state_24403[(2)]);
var state_24403__$1 = state_24403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24403__$1,inst_24401);
} else {
if((state_val_24404 === (12))){
var inst_24389 = (state_24403[(8)]);
var inst_24389__$1 = (state_24403[(2)]);
var inst_24390 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24389__$1);
var state_24403__$1 = (function (){var statearr_24412 = state_24403;
(statearr_24412[(8)] = inst_24389__$1);

return statearr_24412;
})();
if(cljs.core.truth_(inst_24390)){
var statearr_24413_24445 = state_24403__$1;
(statearr_24413_24445[(1)] = (13));

} else {
var statearr_24414_24446 = state_24403__$1;
(statearr_24414_24446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24404 === (2))){
var inst_24366 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24367 = (0);
var state_24403__$1 = (function (){var statearr_24415 = state_24403;
(statearr_24415[(7)] = inst_24367);

(statearr_24415[(9)] = inst_24366);

return statearr_24415;
})();
var statearr_24416_24447 = state_24403__$1;
(statearr_24416_24447[(2)] = null);

(statearr_24416_24447[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24404 === (11))){
var inst_24367 = (state_24403[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24403,(10),Object,null,(9));
var inst_24376 = chs__$1.call(null,inst_24367);
var inst_24377 = done.call(null,inst_24367);
var inst_24378 = cljs.core.async.take_BANG_.call(null,inst_24376,inst_24377);
var state_24403__$1 = state_24403;
var statearr_24417_24448 = state_24403__$1;
(statearr_24417_24448[(2)] = inst_24378);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24403__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24404 === (9))){
var inst_24367 = (state_24403[(7)]);
var inst_24380 = (state_24403[(2)]);
var inst_24381 = (inst_24367 + (1));
var inst_24367__$1 = inst_24381;
var state_24403__$1 = (function (){var statearr_24418 = state_24403;
(statearr_24418[(10)] = inst_24380);

(statearr_24418[(7)] = inst_24367__$1);

return statearr_24418;
})();
var statearr_24419_24449 = state_24403__$1;
(statearr_24419_24449[(2)] = null);

(statearr_24419_24449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24404 === (5))){
var inst_24387 = (state_24403[(2)]);
var state_24403__$1 = (function (){var statearr_24420 = state_24403;
(statearr_24420[(11)] = inst_24387);

return statearr_24420;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24403__$1,(12),dchan);
} else {
if((state_val_24404 === (14))){
var inst_24389 = (state_24403[(8)]);
var inst_24394 = cljs.core.apply.call(null,f,inst_24389);
var state_24403__$1 = state_24403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24403__$1,(16),out,inst_24394);
} else {
if((state_val_24404 === (16))){
var inst_24396 = (state_24403[(2)]);
var state_24403__$1 = (function (){var statearr_24421 = state_24403;
(statearr_24421[(12)] = inst_24396);

return statearr_24421;
})();
var statearr_24422_24450 = state_24403__$1;
(statearr_24422_24450[(2)] = null);

(statearr_24422_24450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24404 === (10))){
var inst_24371 = (state_24403[(2)]);
var inst_24372 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24403__$1 = (function (){var statearr_24423 = state_24403;
(statearr_24423[(13)] = inst_24371);

return statearr_24423;
})();
var statearr_24424_24451 = state_24403__$1;
(statearr_24424_24451[(2)] = inst_24372);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24403__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24404 === (8))){
var inst_24385 = (state_24403[(2)]);
var state_24403__$1 = state_24403;
var statearr_24425_24452 = state_24403__$1;
(statearr_24425_24452[(2)] = inst_24385);

(statearr_24425_24452[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22418__auto___24437,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22306__auto__,c__22418__auto___24437,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22307__auto__ = null;
var cljs$core$async$state_machine__22307__auto____0 = (function (){
var statearr_24429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24429[(0)] = cljs$core$async$state_machine__22307__auto__);

(statearr_24429[(1)] = (1));

return statearr_24429;
});
var cljs$core$async$state_machine__22307__auto____1 = (function (state_24403){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_24403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e24430){if((e24430 instanceof Object)){
var ex__22310__auto__ = e24430;
var statearr_24431_24453 = state_24403;
(statearr_24431_24453[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24454 = state_24403;
state_24403 = G__24454;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$state_machine__22307__auto__ = function(state_24403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22307__auto____1.call(this,state_24403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22307__auto____0;
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22307__auto____1;
return cljs$core$async$state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto___24437,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22420__auto__ = (function (){var statearr_24432 = f__22419__auto__.call(null);
(statearr_24432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___24437);

return statearr_24432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto___24437,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24456 = [];
var len__20793__auto___24512 = arguments.length;
var i__20794__auto___24513 = (0);
while(true){
if((i__20794__auto___24513 < len__20793__auto___24512)){
args24456.push((arguments[i__20794__auto___24513]));

var G__24514 = (i__20794__auto___24513 + (1));
i__20794__auto___24513 = G__24514;
continue;
} else {
}
break;
}

var G__24458 = args24456.length;
switch (G__24458) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24456.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22418__auto___24516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto___24516,out){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto___24516,out){
return (function (state_24488){
var state_val_24489 = (state_24488[(1)]);
if((state_val_24489 === (7))){
var inst_24468 = (state_24488[(7)]);
var inst_24467 = (state_24488[(8)]);
var inst_24467__$1 = (state_24488[(2)]);
var inst_24468__$1 = cljs.core.nth.call(null,inst_24467__$1,(0),null);
var inst_24469 = cljs.core.nth.call(null,inst_24467__$1,(1),null);
var inst_24470 = (inst_24468__$1 == null);
var state_24488__$1 = (function (){var statearr_24490 = state_24488;
(statearr_24490[(9)] = inst_24469);

(statearr_24490[(7)] = inst_24468__$1);

(statearr_24490[(8)] = inst_24467__$1);

return statearr_24490;
})();
if(cljs.core.truth_(inst_24470)){
var statearr_24491_24517 = state_24488__$1;
(statearr_24491_24517[(1)] = (8));

} else {
var statearr_24492_24518 = state_24488__$1;
(statearr_24492_24518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24489 === (1))){
var inst_24459 = cljs.core.vec.call(null,chs);
var inst_24460 = inst_24459;
var state_24488__$1 = (function (){var statearr_24493 = state_24488;
(statearr_24493[(10)] = inst_24460);

return statearr_24493;
})();
var statearr_24494_24519 = state_24488__$1;
(statearr_24494_24519[(2)] = null);

(statearr_24494_24519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24489 === (4))){
var inst_24460 = (state_24488[(10)]);
var state_24488__$1 = state_24488;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24488__$1,(7),inst_24460);
} else {
if((state_val_24489 === (6))){
var inst_24484 = (state_24488[(2)]);
var state_24488__$1 = state_24488;
var statearr_24495_24520 = state_24488__$1;
(statearr_24495_24520[(2)] = inst_24484);

(statearr_24495_24520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24489 === (3))){
var inst_24486 = (state_24488[(2)]);
var state_24488__$1 = state_24488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24488__$1,inst_24486);
} else {
if((state_val_24489 === (2))){
var inst_24460 = (state_24488[(10)]);
var inst_24462 = cljs.core.count.call(null,inst_24460);
var inst_24463 = (inst_24462 > (0));
var state_24488__$1 = state_24488;
if(cljs.core.truth_(inst_24463)){
var statearr_24497_24521 = state_24488__$1;
(statearr_24497_24521[(1)] = (4));

} else {
var statearr_24498_24522 = state_24488__$1;
(statearr_24498_24522[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24489 === (11))){
var inst_24460 = (state_24488[(10)]);
var inst_24477 = (state_24488[(2)]);
var tmp24496 = inst_24460;
var inst_24460__$1 = tmp24496;
var state_24488__$1 = (function (){var statearr_24499 = state_24488;
(statearr_24499[(11)] = inst_24477);

(statearr_24499[(10)] = inst_24460__$1);

return statearr_24499;
})();
var statearr_24500_24523 = state_24488__$1;
(statearr_24500_24523[(2)] = null);

(statearr_24500_24523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24489 === (9))){
var inst_24468 = (state_24488[(7)]);
var state_24488__$1 = state_24488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24488__$1,(11),out,inst_24468);
} else {
if((state_val_24489 === (5))){
var inst_24482 = cljs.core.async.close_BANG_.call(null,out);
var state_24488__$1 = state_24488;
var statearr_24501_24524 = state_24488__$1;
(statearr_24501_24524[(2)] = inst_24482);

(statearr_24501_24524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24489 === (10))){
var inst_24480 = (state_24488[(2)]);
var state_24488__$1 = state_24488;
var statearr_24502_24525 = state_24488__$1;
(statearr_24502_24525[(2)] = inst_24480);

(statearr_24502_24525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24489 === (8))){
var inst_24469 = (state_24488[(9)]);
var inst_24468 = (state_24488[(7)]);
var inst_24467 = (state_24488[(8)]);
var inst_24460 = (state_24488[(10)]);
var inst_24472 = (function (){var cs = inst_24460;
var vec__24465 = inst_24467;
var v = inst_24468;
var c = inst_24469;
return ((function (cs,vec__24465,v,c,inst_24469,inst_24468,inst_24467,inst_24460,state_val_24489,c__22418__auto___24516,out){
return (function (p1__24455_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24455_SHARP_);
});
;})(cs,vec__24465,v,c,inst_24469,inst_24468,inst_24467,inst_24460,state_val_24489,c__22418__auto___24516,out))
})();
var inst_24473 = cljs.core.filterv.call(null,inst_24472,inst_24460);
var inst_24460__$1 = inst_24473;
var state_24488__$1 = (function (){var statearr_24503 = state_24488;
(statearr_24503[(10)] = inst_24460__$1);

return statearr_24503;
})();
var statearr_24504_24526 = state_24488__$1;
(statearr_24504_24526[(2)] = null);

(statearr_24504_24526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22418__auto___24516,out))
;
return ((function (switch__22306__auto__,c__22418__auto___24516,out){
return (function() {
var cljs$core$async$state_machine__22307__auto__ = null;
var cljs$core$async$state_machine__22307__auto____0 = (function (){
var statearr_24508 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24508[(0)] = cljs$core$async$state_machine__22307__auto__);

(statearr_24508[(1)] = (1));

return statearr_24508;
});
var cljs$core$async$state_machine__22307__auto____1 = (function (state_24488){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_24488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e24509){if((e24509 instanceof Object)){
var ex__22310__auto__ = e24509;
var statearr_24510_24527 = state_24488;
(statearr_24510_24527[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24528 = state_24488;
state_24488 = G__24528;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$state_machine__22307__auto__ = function(state_24488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22307__auto____1.call(this,state_24488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22307__auto____0;
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22307__auto____1;
return cljs$core$async$state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto___24516,out))
})();
var state__22420__auto__ = (function (){var statearr_24511 = f__22419__auto__.call(null);
(statearr_24511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___24516);

return statearr_24511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto___24516,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24529 = [];
var len__20793__auto___24578 = arguments.length;
var i__20794__auto___24579 = (0);
while(true){
if((i__20794__auto___24579 < len__20793__auto___24578)){
args24529.push((arguments[i__20794__auto___24579]));

var G__24580 = (i__20794__auto___24579 + (1));
i__20794__auto___24579 = G__24580;
continue;
} else {
}
break;
}

var G__24531 = args24529.length;
switch (G__24531) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24529.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22418__auto___24582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto___24582,out){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto___24582,out){
return (function (state_24555){
var state_val_24556 = (state_24555[(1)]);
if((state_val_24556 === (7))){
var inst_24537 = (state_24555[(7)]);
var inst_24537__$1 = (state_24555[(2)]);
var inst_24538 = (inst_24537__$1 == null);
var inst_24539 = cljs.core.not.call(null,inst_24538);
var state_24555__$1 = (function (){var statearr_24557 = state_24555;
(statearr_24557[(7)] = inst_24537__$1);

return statearr_24557;
})();
if(inst_24539){
var statearr_24558_24583 = state_24555__$1;
(statearr_24558_24583[(1)] = (8));

} else {
var statearr_24559_24584 = state_24555__$1;
(statearr_24559_24584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24556 === (1))){
var inst_24532 = (0);
var state_24555__$1 = (function (){var statearr_24560 = state_24555;
(statearr_24560[(8)] = inst_24532);

return statearr_24560;
})();
var statearr_24561_24585 = state_24555__$1;
(statearr_24561_24585[(2)] = null);

(statearr_24561_24585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24556 === (4))){
var state_24555__$1 = state_24555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24555__$1,(7),ch);
} else {
if((state_val_24556 === (6))){
var inst_24550 = (state_24555[(2)]);
var state_24555__$1 = state_24555;
var statearr_24562_24586 = state_24555__$1;
(statearr_24562_24586[(2)] = inst_24550);

(statearr_24562_24586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24556 === (3))){
var inst_24552 = (state_24555[(2)]);
var inst_24553 = cljs.core.async.close_BANG_.call(null,out);
var state_24555__$1 = (function (){var statearr_24563 = state_24555;
(statearr_24563[(9)] = inst_24552);

return statearr_24563;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24555__$1,inst_24553);
} else {
if((state_val_24556 === (2))){
var inst_24532 = (state_24555[(8)]);
var inst_24534 = (inst_24532 < n);
var state_24555__$1 = state_24555;
if(cljs.core.truth_(inst_24534)){
var statearr_24564_24587 = state_24555__$1;
(statearr_24564_24587[(1)] = (4));

} else {
var statearr_24565_24588 = state_24555__$1;
(statearr_24565_24588[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24556 === (11))){
var inst_24532 = (state_24555[(8)]);
var inst_24542 = (state_24555[(2)]);
var inst_24543 = (inst_24532 + (1));
var inst_24532__$1 = inst_24543;
var state_24555__$1 = (function (){var statearr_24566 = state_24555;
(statearr_24566[(8)] = inst_24532__$1);

(statearr_24566[(10)] = inst_24542);

return statearr_24566;
})();
var statearr_24567_24589 = state_24555__$1;
(statearr_24567_24589[(2)] = null);

(statearr_24567_24589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24556 === (9))){
var state_24555__$1 = state_24555;
var statearr_24568_24590 = state_24555__$1;
(statearr_24568_24590[(2)] = null);

(statearr_24568_24590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24556 === (5))){
var state_24555__$1 = state_24555;
var statearr_24569_24591 = state_24555__$1;
(statearr_24569_24591[(2)] = null);

(statearr_24569_24591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24556 === (10))){
var inst_24547 = (state_24555[(2)]);
var state_24555__$1 = state_24555;
var statearr_24570_24592 = state_24555__$1;
(statearr_24570_24592[(2)] = inst_24547);

(statearr_24570_24592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24556 === (8))){
var inst_24537 = (state_24555[(7)]);
var state_24555__$1 = state_24555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24555__$1,(11),out,inst_24537);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22418__auto___24582,out))
;
return ((function (switch__22306__auto__,c__22418__auto___24582,out){
return (function() {
var cljs$core$async$state_machine__22307__auto__ = null;
var cljs$core$async$state_machine__22307__auto____0 = (function (){
var statearr_24574 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24574[(0)] = cljs$core$async$state_machine__22307__auto__);

(statearr_24574[(1)] = (1));

return statearr_24574;
});
var cljs$core$async$state_machine__22307__auto____1 = (function (state_24555){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_24555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e24575){if((e24575 instanceof Object)){
var ex__22310__auto__ = e24575;
var statearr_24576_24593 = state_24555;
(statearr_24576_24593[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24594 = state_24555;
state_24555 = G__24594;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$state_machine__22307__auto__ = function(state_24555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22307__auto____1.call(this,state_24555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22307__auto____0;
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22307__auto____1;
return cljs$core$async$state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto___24582,out))
})();
var state__22420__auto__ = (function (){var statearr_24577 = f__22419__auto__.call(null);
(statearr_24577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___24582);

return statearr_24577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto___24582,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24602 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24602 = (function (map_LT_,f,ch,meta24603){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24603 = meta24603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24604,meta24603__$1){
var self__ = this;
var _24604__$1 = this;
return (new cljs.core.async.t_cljs$core$async24602(self__.map_LT_,self__.f,self__.ch,meta24603__$1));
});

cljs.core.async.t_cljs$core$async24602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24604){
var self__ = this;
var _24604__$1 = this;
return self__.meta24603;
});

cljs.core.async.t_cljs$core$async24602.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24602.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24602.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24602.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24602.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24605 = (function (map_LT_,f,ch,meta24603,_,fn1,meta24606){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24603 = meta24603;
this._ = _;
this.fn1 = fn1;
this.meta24606 = meta24606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24607,meta24606__$1){
var self__ = this;
var _24607__$1 = this;
return (new cljs.core.async.t_cljs$core$async24605(self__.map_LT_,self__.f,self__.ch,self__.meta24603,self__._,self__.fn1,meta24606__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24607){
var self__ = this;
var _24607__$1 = this;
return self__.meta24606;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24605.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24605.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24595_SHARP_){
return f1.call(null,(((p1__24595_SHARP_ == null))?null:self__.f.call(null,p1__24595_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24605.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24603","meta24603",-1940379932,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24602","cljs.core.async/t_cljs$core$async24602",1319356561,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24606","meta24606",39904217,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24605";

cljs.core.async.t_cljs$core$async24605.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20333__auto__,writer__20334__auto__,opt__20335__auto__){
return cljs.core._write.call(null,writer__20334__auto__,"cljs.core.async/t_cljs$core$async24605");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24605 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24605(map_LT___$1,f__$1,ch__$1,meta24603__$1,___$2,fn1__$1,meta24606){
return (new cljs.core.async.t_cljs$core$async24605(map_LT___$1,f__$1,ch__$1,meta24603__$1,___$2,fn1__$1,meta24606));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24605(self__.map_LT_,self__.f,self__.ch,self__.meta24603,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19723__auto__ = ret;
if(cljs.core.truth_(and__19723__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19723__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24602.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24602.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24603","meta24603",-1940379932,null)], null);
});

cljs.core.async.t_cljs$core$async24602.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24602";

cljs.core.async.t_cljs$core$async24602.cljs$lang$ctorPrWriter = (function (this__20333__auto__,writer__20334__auto__,opt__20335__auto__){
return cljs.core._write.call(null,writer__20334__auto__,"cljs.core.async/t_cljs$core$async24602");
});

cljs.core.async.__GT_t_cljs$core$async24602 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24602(map_LT___$1,f__$1,ch__$1,meta24603){
return (new cljs.core.async.t_cljs$core$async24602(map_LT___$1,f__$1,ch__$1,meta24603));
});

}

return (new cljs.core.async.t_cljs$core$async24602(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24611 = (function (map_GT_,f,ch,meta24612){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24612 = meta24612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24613,meta24612__$1){
var self__ = this;
var _24613__$1 = this;
return (new cljs.core.async.t_cljs$core$async24611(self__.map_GT_,self__.f,self__.ch,meta24612__$1));
});

cljs.core.async.t_cljs$core$async24611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24613){
var self__ = this;
var _24613__$1 = this;
return self__.meta24612;
});

cljs.core.async.t_cljs$core$async24611.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24611.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24611.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24612","meta24612",2054623079,null)], null);
});

cljs.core.async.t_cljs$core$async24611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24611";

cljs.core.async.t_cljs$core$async24611.cljs$lang$ctorPrWriter = (function (this__20333__auto__,writer__20334__auto__,opt__20335__auto__){
return cljs.core._write.call(null,writer__20334__auto__,"cljs.core.async/t_cljs$core$async24611");
});

cljs.core.async.__GT_t_cljs$core$async24611 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24611(map_GT___$1,f__$1,ch__$1,meta24612){
return (new cljs.core.async.t_cljs$core$async24611(map_GT___$1,f__$1,ch__$1,meta24612));
});

}

return (new cljs.core.async.t_cljs$core$async24611(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24617 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24617 = (function (filter_GT_,p,ch,meta24618){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24618 = meta24618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24619,meta24618__$1){
var self__ = this;
var _24619__$1 = this;
return (new cljs.core.async.t_cljs$core$async24617(self__.filter_GT_,self__.p,self__.ch,meta24618__$1));
});

cljs.core.async.t_cljs$core$async24617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24619){
var self__ = this;
var _24619__$1 = this;
return self__.meta24618;
});

cljs.core.async.t_cljs$core$async24617.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24617.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24617.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24617.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24617.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24617.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24617.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24618","meta24618",-896883535,null)], null);
});

cljs.core.async.t_cljs$core$async24617.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24617";

cljs.core.async.t_cljs$core$async24617.cljs$lang$ctorPrWriter = (function (this__20333__auto__,writer__20334__auto__,opt__20335__auto__){
return cljs.core._write.call(null,writer__20334__auto__,"cljs.core.async/t_cljs$core$async24617");
});

cljs.core.async.__GT_t_cljs$core$async24617 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24617(filter_GT___$1,p__$1,ch__$1,meta24618){
return (new cljs.core.async.t_cljs$core$async24617(filter_GT___$1,p__$1,ch__$1,meta24618));
});

}

return (new cljs.core.async.t_cljs$core$async24617(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24620 = [];
var len__20793__auto___24664 = arguments.length;
var i__20794__auto___24665 = (0);
while(true){
if((i__20794__auto___24665 < len__20793__auto___24664)){
args24620.push((arguments[i__20794__auto___24665]));

var G__24666 = (i__20794__auto___24665 + (1));
i__20794__auto___24665 = G__24666;
continue;
} else {
}
break;
}

var G__24622 = args24620.length;
switch (G__24622) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24620.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22418__auto___24668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto___24668,out){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto___24668,out){
return (function (state_24643){
var state_val_24644 = (state_24643[(1)]);
if((state_val_24644 === (7))){
var inst_24639 = (state_24643[(2)]);
var state_24643__$1 = state_24643;
var statearr_24645_24669 = state_24643__$1;
(statearr_24645_24669[(2)] = inst_24639);

(statearr_24645_24669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24644 === (1))){
var state_24643__$1 = state_24643;
var statearr_24646_24670 = state_24643__$1;
(statearr_24646_24670[(2)] = null);

(statearr_24646_24670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24644 === (4))){
var inst_24625 = (state_24643[(7)]);
var inst_24625__$1 = (state_24643[(2)]);
var inst_24626 = (inst_24625__$1 == null);
var state_24643__$1 = (function (){var statearr_24647 = state_24643;
(statearr_24647[(7)] = inst_24625__$1);

return statearr_24647;
})();
if(cljs.core.truth_(inst_24626)){
var statearr_24648_24671 = state_24643__$1;
(statearr_24648_24671[(1)] = (5));

} else {
var statearr_24649_24672 = state_24643__$1;
(statearr_24649_24672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24644 === (6))){
var inst_24625 = (state_24643[(7)]);
var inst_24630 = p.call(null,inst_24625);
var state_24643__$1 = state_24643;
if(cljs.core.truth_(inst_24630)){
var statearr_24650_24673 = state_24643__$1;
(statearr_24650_24673[(1)] = (8));

} else {
var statearr_24651_24674 = state_24643__$1;
(statearr_24651_24674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24644 === (3))){
var inst_24641 = (state_24643[(2)]);
var state_24643__$1 = state_24643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24643__$1,inst_24641);
} else {
if((state_val_24644 === (2))){
var state_24643__$1 = state_24643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24643__$1,(4),ch);
} else {
if((state_val_24644 === (11))){
var inst_24633 = (state_24643[(2)]);
var state_24643__$1 = state_24643;
var statearr_24652_24675 = state_24643__$1;
(statearr_24652_24675[(2)] = inst_24633);

(statearr_24652_24675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24644 === (9))){
var state_24643__$1 = state_24643;
var statearr_24653_24676 = state_24643__$1;
(statearr_24653_24676[(2)] = null);

(statearr_24653_24676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24644 === (5))){
var inst_24628 = cljs.core.async.close_BANG_.call(null,out);
var state_24643__$1 = state_24643;
var statearr_24654_24677 = state_24643__$1;
(statearr_24654_24677[(2)] = inst_24628);

(statearr_24654_24677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24644 === (10))){
var inst_24636 = (state_24643[(2)]);
var state_24643__$1 = (function (){var statearr_24655 = state_24643;
(statearr_24655[(8)] = inst_24636);

return statearr_24655;
})();
var statearr_24656_24678 = state_24643__$1;
(statearr_24656_24678[(2)] = null);

(statearr_24656_24678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24644 === (8))){
var inst_24625 = (state_24643[(7)]);
var state_24643__$1 = state_24643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24643__$1,(11),out,inst_24625);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22418__auto___24668,out))
;
return ((function (switch__22306__auto__,c__22418__auto___24668,out){
return (function() {
var cljs$core$async$state_machine__22307__auto__ = null;
var cljs$core$async$state_machine__22307__auto____0 = (function (){
var statearr_24660 = [null,null,null,null,null,null,null,null,null];
(statearr_24660[(0)] = cljs$core$async$state_machine__22307__auto__);

(statearr_24660[(1)] = (1));

return statearr_24660;
});
var cljs$core$async$state_machine__22307__auto____1 = (function (state_24643){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_24643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e24661){if((e24661 instanceof Object)){
var ex__22310__auto__ = e24661;
var statearr_24662_24679 = state_24643;
(statearr_24662_24679[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24680 = state_24643;
state_24643 = G__24680;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$state_machine__22307__auto__ = function(state_24643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22307__auto____1.call(this,state_24643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22307__auto____0;
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22307__auto____1;
return cljs$core$async$state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto___24668,out))
})();
var state__22420__auto__ = (function (){var statearr_24663 = f__22419__auto__.call(null);
(statearr_24663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___24668);

return statearr_24663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto___24668,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24681 = [];
var len__20793__auto___24684 = arguments.length;
var i__20794__auto___24685 = (0);
while(true){
if((i__20794__auto___24685 < len__20793__auto___24684)){
args24681.push((arguments[i__20794__auto___24685]));

var G__24686 = (i__20794__auto___24685 + (1));
i__20794__auto___24685 = G__24686;
continue;
} else {
}
break;
}

var G__24683 = args24681.length;
switch (G__24683) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24681.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto__){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto__){
return (function (state_24853){
var state_val_24854 = (state_24853[(1)]);
if((state_val_24854 === (7))){
var inst_24849 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24855_24896 = state_24853__$1;
(statearr_24855_24896[(2)] = inst_24849);

(statearr_24855_24896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (20))){
var inst_24819 = (state_24853[(7)]);
var inst_24830 = (state_24853[(2)]);
var inst_24831 = cljs.core.next.call(null,inst_24819);
var inst_24805 = inst_24831;
var inst_24806 = null;
var inst_24807 = (0);
var inst_24808 = (0);
var state_24853__$1 = (function (){var statearr_24856 = state_24853;
(statearr_24856[(8)] = inst_24805);

(statearr_24856[(9)] = inst_24806);

(statearr_24856[(10)] = inst_24808);

(statearr_24856[(11)] = inst_24807);

(statearr_24856[(12)] = inst_24830);

return statearr_24856;
})();
var statearr_24857_24897 = state_24853__$1;
(statearr_24857_24897[(2)] = null);

(statearr_24857_24897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (1))){
var state_24853__$1 = state_24853;
var statearr_24858_24898 = state_24853__$1;
(statearr_24858_24898[(2)] = null);

(statearr_24858_24898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (4))){
var inst_24794 = (state_24853[(13)]);
var inst_24794__$1 = (state_24853[(2)]);
var inst_24795 = (inst_24794__$1 == null);
var state_24853__$1 = (function (){var statearr_24859 = state_24853;
(statearr_24859[(13)] = inst_24794__$1);

return statearr_24859;
})();
if(cljs.core.truth_(inst_24795)){
var statearr_24860_24899 = state_24853__$1;
(statearr_24860_24899[(1)] = (5));

} else {
var statearr_24861_24900 = state_24853__$1;
(statearr_24861_24900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (15))){
var state_24853__$1 = state_24853;
var statearr_24865_24901 = state_24853__$1;
(statearr_24865_24901[(2)] = null);

(statearr_24865_24901[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (21))){
var state_24853__$1 = state_24853;
var statearr_24866_24902 = state_24853__$1;
(statearr_24866_24902[(2)] = null);

(statearr_24866_24902[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (13))){
var inst_24805 = (state_24853[(8)]);
var inst_24806 = (state_24853[(9)]);
var inst_24808 = (state_24853[(10)]);
var inst_24807 = (state_24853[(11)]);
var inst_24815 = (state_24853[(2)]);
var inst_24816 = (inst_24808 + (1));
var tmp24862 = inst_24805;
var tmp24863 = inst_24806;
var tmp24864 = inst_24807;
var inst_24805__$1 = tmp24862;
var inst_24806__$1 = tmp24863;
var inst_24807__$1 = tmp24864;
var inst_24808__$1 = inst_24816;
var state_24853__$1 = (function (){var statearr_24867 = state_24853;
(statearr_24867[(14)] = inst_24815);

(statearr_24867[(8)] = inst_24805__$1);

(statearr_24867[(9)] = inst_24806__$1);

(statearr_24867[(10)] = inst_24808__$1);

(statearr_24867[(11)] = inst_24807__$1);

return statearr_24867;
})();
var statearr_24868_24903 = state_24853__$1;
(statearr_24868_24903[(2)] = null);

(statearr_24868_24903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (22))){
var state_24853__$1 = state_24853;
var statearr_24869_24904 = state_24853__$1;
(statearr_24869_24904[(2)] = null);

(statearr_24869_24904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (6))){
var inst_24794 = (state_24853[(13)]);
var inst_24803 = f.call(null,inst_24794);
var inst_24804 = cljs.core.seq.call(null,inst_24803);
var inst_24805 = inst_24804;
var inst_24806 = null;
var inst_24807 = (0);
var inst_24808 = (0);
var state_24853__$1 = (function (){var statearr_24870 = state_24853;
(statearr_24870[(8)] = inst_24805);

(statearr_24870[(9)] = inst_24806);

(statearr_24870[(10)] = inst_24808);

(statearr_24870[(11)] = inst_24807);

return statearr_24870;
})();
var statearr_24871_24905 = state_24853__$1;
(statearr_24871_24905[(2)] = null);

(statearr_24871_24905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (17))){
var inst_24819 = (state_24853[(7)]);
var inst_24823 = cljs.core.chunk_first.call(null,inst_24819);
var inst_24824 = cljs.core.chunk_rest.call(null,inst_24819);
var inst_24825 = cljs.core.count.call(null,inst_24823);
var inst_24805 = inst_24824;
var inst_24806 = inst_24823;
var inst_24807 = inst_24825;
var inst_24808 = (0);
var state_24853__$1 = (function (){var statearr_24872 = state_24853;
(statearr_24872[(8)] = inst_24805);

(statearr_24872[(9)] = inst_24806);

(statearr_24872[(10)] = inst_24808);

(statearr_24872[(11)] = inst_24807);

return statearr_24872;
})();
var statearr_24873_24906 = state_24853__$1;
(statearr_24873_24906[(2)] = null);

(statearr_24873_24906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (3))){
var inst_24851 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24853__$1,inst_24851);
} else {
if((state_val_24854 === (12))){
var inst_24839 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24874_24907 = state_24853__$1;
(statearr_24874_24907[(2)] = inst_24839);

(statearr_24874_24907[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (2))){
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24853__$1,(4),in$);
} else {
if((state_val_24854 === (23))){
var inst_24847 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24875_24908 = state_24853__$1;
(statearr_24875_24908[(2)] = inst_24847);

(statearr_24875_24908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (19))){
var inst_24834 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24876_24909 = state_24853__$1;
(statearr_24876_24909[(2)] = inst_24834);

(statearr_24876_24909[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (11))){
var inst_24819 = (state_24853[(7)]);
var inst_24805 = (state_24853[(8)]);
var inst_24819__$1 = cljs.core.seq.call(null,inst_24805);
var state_24853__$1 = (function (){var statearr_24877 = state_24853;
(statearr_24877[(7)] = inst_24819__$1);

return statearr_24877;
})();
if(inst_24819__$1){
var statearr_24878_24910 = state_24853__$1;
(statearr_24878_24910[(1)] = (14));

} else {
var statearr_24879_24911 = state_24853__$1;
(statearr_24879_24911[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (9))){
var inst_24841 = (state_24853[(2)]);
var inst_24842 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24853__$1 = (function (){var statearr_24880 = state_24853;
(statearr_24880[(15)] = inst_24841);

return statearr_24880;
})();
if(cljs.core.truth_(inst_24842)){
var statearr_24881_24912 = state_24853__$1;
(statearr_24881_24912[(1)] = (21));

} else {
var statearr_24882_24913 = state_24853__$1;
(statearr_24882_24913[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (5))){
var inst_24797 = cljs.core.async.close_BANG_.call(null,out);
var state_24853__$1 = state_24853;
var statearr_24883_24914 = state_24853__$1;
(statearr_24883_24914[(2)] = inst_24797);

(statearr_24883_24914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (14))){
var inst_24819 = (state_24853[(7)]);
var inst_24821 = cljs.core.chunked_seq_QMARK_.call(null,inst_24819);
var state_24853__$1 = state_24853;
if(inst_24821){
var statearr_24884_24915 = state_24853__$1;
(statearr_24884_24915[(1)] = (17));

} else {
var statearr_24885_24916 = state_24853__$1;
(statearr_24885_24916[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (16))){
var inst_24837 = (state_24853[(2)]);
var state_24853__$1 = state_24853;
var statearr_24886_24917 = state_24853__$1;
(statearr_24886_24917[(2)] = inst_24837);

(statearr_24886_24917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24854 === (10))){
var inst_24806 = (state_24853[(9)]);
var inst_24808 = (state_24853[(10)]);
var inst_24813 = cljs.core._nth.call(null,inst_24806,inst_24808);
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24853__$1,(13),out,inst_24813);
} else {
if((state_val_24854 === (18))){
var inst_24819 = (state_24853[(7)]);
var inst_24828 = cljs.core.first.call(null,inst_24819);
var state_24853__$1 = state_24853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24853__$1,(20),out,inst_24828);
} else {
if((state_val_24854 === (8))){
var inst_24808 = (state_24853[(10)]);
var inst_24807 = (state_24853[(11)]);
var inst_24810 = (inst_24808 < inst_24807);
var inst_24811 = inst_24810;
var state_24853__$1 = state_24853;
if(cljs.core.truth_(inst_24811)){
var statearr_24887_24918 = state_24853__$1;
(statearr_24887_24918[(1)] = (10));

} else {
var statearr_24888_24919 = state_24853__$1;
(statearr_24888_24919[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22418__auto__))
;
return ((function (switch__22306__auto__,c__22418__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22307__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22307__auto____0 = (function (){
var statearr_24892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24892[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22307__auto__);

(statearr_24892[(1)] = (1));

return statearr_24892;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22307__auto____1 = (function (state_24853){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_24853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e24893){if((e24893 instanceof Object)){
var ex__22310__auto__ = e24893;
var statearr_24894_24920 = state_24853;
(statearr_24894_24920[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24921 = state_24853;
state_24853 = G__24921;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22307__auto__ = function(state_24853){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22307__auto____1.call(this,state_24853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22307__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22307__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto__))
})();
var state__22420__auto__ = (function (){var statearr_24895 = f__22419__auto__.call(null);
(statearr_24895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto__);

return statearr_24895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto__))
);

return c__22418__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24922 = [];
var len__20793__auto___24925 = arguments.length;
var i__20794__auto___24926 = (0);
while(true){
if((i__20794__auto___24926 < len__20793__auto___24925)){
args24922.push((arguments[i__20794__auto___24926]));

var G__24927 = (i__20794__auto___24926 + (1));
i__20794__auto___24926 = G__24927;
continue;
} else {
}
break;
}

var G__24924 = args24922.length;
switch (G__24924) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24922.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24929 = [];
var len__20793__auto___24932 = arguments.length;
var i__20794__auto___24933 = (0);
while(true){
if((i__20794__auto___24933 < len__20793__auto___24932)){
args24929.push((arguments[i__20794__auto___24933]));

var G__24934 = (i__20794__auto___24933 + (1));
i__20794__auto___24933 = G__24934;
continue;
} else {
}
break;
}

var G__24931 = args24929.length;
switch (G__24931) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24929.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24936 = [];
var len__20793__auto___24987 = arguments.length;
var i__20794__auto___24988 = (0);
while(true){
if((i__20794__auto___24988 < len__20793__auto___24987)){
args24936.push((arguments[i__20794__auto___24988]));

var G__24989 = (i__20794__auto___24988 + (1));
i__20794__auto___24988 = G__24989;
continue;
} else {
}
break;
}

var G__24938 = args24936.length;
switch (G__24938) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24936.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22418__auto___24991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto___24991,out){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto___24991,out){
return (function (state_24962){
var state_val_24963 = (state_24962[(1)]);
if((state_val_24963 === (7))){
var inst_24957 = (state_24962[(2)]);
var state_24962__$1 = state_24962;
var statearr_24964_24992 = state_24962__$1;
(statearr_24964_24992[(2)] = inst_24957);

(statearr_24964_24992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (1))){
var inst_24939 = null;
var state_24962__$1 = (function (){var statearr_24965 = state_24962;
(statearr_24965[(7)] = inst_24939);

return statearr_24965;
})();
var statearr_24966_24993 = state_24962__$1;
(statearr_24966_24993[(2)] = null);

(statearr_24966_24993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (4))){
var inst_24942 = (state_24962[(8)]);
var inst_24942__$1 = (state_24962[(2)]);
var inst_24943 = (inst_24942__$1 == null);
var inst_24944 = cljs.core.not.call(null,inst_24943);
var state_24962__$1 = (function (){var statearr_24967 = state_24962;
(statearr_24967[(8)] = inst_24942__$1);

return statearr_24967;
})();
if(inst_24944){
var statearr_24968_24994 = state_24962__$1;
(statearr_24968_24994[(1)] = (5));

} else {
var statearr_24969_24995 = state_24962__$1;
(statearr_24969_24995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (6))){
var state_24962__$1 = state_24962;
var statearr_24970_24996 = state_24962__$1;
(statearr_24970_24996[(2)] = null);

(statearr_24970_24996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (3))){
var inst_24959 = (state_24962[(2)]);
var inst_24960 = cljs.core.async.close_BANG_.call(null,out);
var state_24962__$1 = (function (){var statearr_24971 = state_24962;
(statearr_24971[(9)] = inst_24959);

return statearr_24971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24962__$1,inst_24960);
} else {
if((state_val_24963 === (2))){
var state_24962__$1 = state_24962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24962__$1,(4),ch);
} else {
if((state_val_24963 === (11))){
var inst_24942 = (state_24962[(8)]);
var inst_24951 = (state_24962[(2)]);
var inst_24939 = inst_24942;
var state_24962__$1 = (function (){var statearr_24972 = state_24962;
(statearr_24972[(7)] = inst_24939);

(statearr_24972[(10)] = inst_24951);

return statearr_24972;
})();
var statearr_24973_24997 = state_24962__$1;
(statearr_24973_24997[(2)] = null);

(statearr_24973_24997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (9))){
var inst_24942 = (state_24962[(8)]);
var state_24962__$1 = state_24962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24962__$1,(11),out,inst_24942);
} else {
if((state_val_24963 === (5))){
var inst_24939 = (state_24962[(7)]);
var inst_24942 = (state_24962[(8)]);
var inst_24946 = cljs.core._EQ_.call(null,inst_24942,inst_24939);
var state_24962__$1 = state_24962;
if(inst_24946){
var statearr_24975_24998 = state_24962__$1;
(statearr_24975_24998[(1)] = (8));

} else {
var statearr_24976_24999 = state_24962__$1;
(statearr_24976_24999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (10))){
var inst_24954 = (state_24962[(2)]);
var state_24962__$1 = state_24962;
var statearr_24977_25000 = state_24962__$1;
(statearr_24977_25000[(2)] = inst_24954);

(statearr_24977_25000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24963 === (8))){
var inst_24939 = (state_24962[(7)]);
var tmp24974 = inst_24939;
var inst_24939__$1 = tmp24974;
var state_24962__$1 = (function (){var statearr_24978 = state_24962;
(statearr_24978[(7)] = inst_24939__$1);

return statearr_24978;
})();
var statearr_24979_25001 = state_24962__$1;
(statearr_24979_25001[(2)] = null);

(statearr_24979_25001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22418__auto___24991,out))
;
return ((function (switch__22306__auto__,c__22418__auto___24991,out){
return (function() {
var cljs$core$async$state_machine__22307__auto__ = null;
var cljs$core$async$state_machine__22307__auto____0 = (function (){
var statearr_24983 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24983[(0)] = cljs$core$async$state_machine__22307__auto__);

(statearr_24983[(1)] = (1));

return statearr_24983;
});
var cljs$core$async$state_machine__22307__auto____1 = (function (state_24962){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_24962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e24984){if((e24984 instanceof Object)){
var ex__22310__auto__ = e24984;
var statearr_24985_25002 = state_24962;
(statearr_24985_25002[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25003 = state_24962;
state_24962 = G__25003;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$state_machine__22307__auto__ = function(state_24962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22307__auto____1.call(this,state_24962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22307__auto____0;
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22307__auto____1;
return cljs$core$async$state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto___24991,out))
})();
var state__22420__auto__ = (function (){var statearr_24986 = f__22419__auto__.call(null);
(statearr_24986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___24991);

return statearr_24986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto___24991,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25004 = [];
var len__20793__auto___25074 = arguments.length;
var i__20794__auto___25075 = (0);
while(true){
if((i__20794__auto___25075 < len__20793__auto___25074)){
args25004.push((arguments[i__20794__auto___25075]));

var G__25076 = (i__20794__auto___25075 + (1));
i__20794__auto___25075 = G__25076;
continue;
} else {
}
break;
}

var G__25006 = args25004.length;
switch (G__25006) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25004.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22418__auto___25078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto___25078,out){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto___25078,out){
return (function (state_25044){
var state_val_25045 = (state_25044[(1)]);
if((state_val_25045 === (7))){
var inst_25040 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
var statearr_25046_25079 = state_25044__$1;
(statearr_25046_25079[(2)] = inst_25040);

(statearr_25046_25079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (1))){
var inst_25007 = (new Array(n));
var inst_25008 = inst_25007;
var inst_25009 = (0);
var state_25044__$1 = (function (){var statearr_25047 = state_25044;
(statearr_25047[(7)] = inst_25008);

(statearr_25047[(8)] = inst_25009);

return statearr_25047;
})();
var statearr_25048_25080 = state_25044__$1;
(statearr_25048_25080[(2)] = null);

(statearr_25048_25080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (4))){
var inst_25012 = (state_25044[(9)]);
var inst_25012__$1 = (state_25044[(2)]);
var inst_25013 = (inst_25012__$1 == null);
var inst_25014 = cljs.core.not.call(null,inst_25013);
var state_25044__$1 = (function (){var statearr_25049 = state_25044;
(statearr_25049[(9)] = inst_25012__$1);

return statearr_25049;
})();
if(inst_25014){
var statearr_25050_25081 = state_25044__$1;
(statearr_25050_25081[(1)] = (5));

} else {
var statearr_25051_25082 = state_25044__$1;
(statearr_25051_25082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (15))){
var inst_25034 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
var statearr_25052_25083 = state_25044__$1;
(statearr_25052_25083[(2)] = inst_25034);

(statearr_25052_25083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (13))){
var state_25044__$1 = state_25044;
var statearr_25053_25084 = state_25044__$1;
(statearr_25053_25084[(2)] = null);

(statearr_25053_25084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (6))){
var inst_25009 = (state_25044[(8)]);
var inst_25030 = (inst_25009 > (0));
var state_25044__$1 = state_25044;
if(cljs.core.truth_(inst_25030)){
var statearr_25054_25085 = state_25044__$1;
(statearr_25054_25085[(1)] = (12));

} else {
var statearr_25055_25086 = state_25044__$1;
(statearr_25055_25086[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (3))){
var inst_25042 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25044__$1,inst_25042);
} else {
if((state_val_25045 === (12))){
var inst_25008 = (state_25044[(7)]);
var inst_25032 = cljs.core.vec.call(null,inst_25008);
var state_25044__$1 = state_25044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25044__$1,(15),out,inst_25032);
} else {
if((state_val_25045 === (2))){
var state_25044__$1 = state_25044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25044__$1,(4),ch);
} else {
if((state_val_25045 === (11))){
var inst_25024 = (state_25044[(2)]);
var inst_25025 = (new Array(n));
var inst_25008 = inst_25025;
var inst_25009 = (0);
var state_25044__$1 = (function (){var statearr_25056 = state_25044;
(statearr_25056[(10)] = inst_25024);

(statearr_25056[(7)] = inst_25008);

(statearr_25056[(8)] = inst_25009);

return statearr_25056;
})();
var statearr_25057_25087 = state_25044__$1;
(statearr_25057_25087[(2)] = null);

(statearr_25057_25087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (9))){
var inst_25008 = (state_25044[(7)]);
var inst_25022 = cljs.core.vec.call(null,inst_25008);
var state_25044__$1 = state_25044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25044__$1,(11),out,inst_25022);
} else {
if((state_val_25045 === (5))){
var inst_25008 = (state_25044[(7)]);
var inst_25017 = (state_25044[(11)]);
var inst_25009 = (state_25044[(8)]);
var inst_25012 = (state_25044[(9)]);
var inst_25016 = (inst_25008[inst_25009] = inst_25012);
var inst_25017__$1 = (inst_25009 + (1));
var inst_25018 = (inst_25017__$1 < n);
var state_25044__$1 = (function (){var statearr_25058 = state_25044;
(statearr_25058[(12)] = inst_25016);

(statearr_25058[(11)] = inst_25017__$1);

return statearr_25058;
})();
if(cljs.core.truth_(inst_25018)){
var statearr_25059_25088 = state_25044__$1;
(statearr_25059_25088[(1)] = (8));

} else {
var statearr_25060_25089 = state_25044__$1;
(statearr_25060_25089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (14))){
var inst_25037 = (state_25044[(2)]);
var inst_25038 = cljs.core.async.close_BANG_.call(null,out);
var state_25044__$1 = (function (){var statearr_25062 = state_25044;
(statearr_25062[(13)] = inst_25037);

return statearr_25062;
})();
var statearr_25063_25090 = state_25044__$1;
(statearr_25063_25090[(2)] = inst_25038);

(statearr_25063_25090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (10))){
var inst_25028 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
var statearr_25064_25091 = state_25044__$1;
(statearr_25064_25091[(2)] = inst_25028);

(statearr_25064_25091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (8))){
var inst_25008 = (state_25044[(7)]);
var inst_25017 = (state_25044[(11)]);
var tmp25061 = inst_25008;
var inst_25008__$1 = tmp25061;
var inst_25009 = inst_25017;
var state_25044__$1 = (function (){var statearr_25065 = state_25044;
(statearr_25065[(7)] = inst_25008__$1);

(statearr_25065[(8)] = inst_25009);

return statearr_25065;
})();
var statearr_25066_25092 = state_25044__$1;
(statearr_25066_25092[(2)] = null);

(statearr_25066_25092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22418__auto___25078,out))
;
return ((function (switch__22306__auto__,c__22418__auto___25078,out){
return (function() {
var cljs$core$async$state_machine__22307__auto__ = null;
var cljs$core$async$state_machine__22307__auto____0 = (function (){
var statearr_25070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25070[(0)] = cljs$core$async$state_machine__22307__auto__);

(statearr_25070[(1)] = (1));

return statearr_25070;
});
var cljs$core$async$state_machine__22307__auto____1 = (function (state_25044){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_25044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e25071){if((e25071 instanceof Object)){
var ex__22310__auto__ = e25071;
var statearr_25072_25093 = state_25044;
(statearr_25072_25093[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25094 = state_25044;
state_25044 = G__25094;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$state_machine__22307__auto__ = function(state_25044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22307__auto____1.call(this,state_25044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22307__auto____0;
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22307__auto____1;
return cljs$core$async$state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto___25078,out))
})();
var state__22420__auto__ = (function (){var statearr_25073 = f__22419__auto__.call(null);
(statearr_25073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___25078);

return statearr_25073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto___25078,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25095 = [];
var len__20793__auto___25169 = arguments.length;
var i__20794__auto___25170 = (0);
while(true){
if((i__20794__auto___25170 < len__20793__auto___25169)){
args25095.push((arguments[i__20794__auto___25170]));

var G__25171 = (i__20794__auto___25170 + (1));
i__20794__auto___25170 = G__25171;
continue;
} else {
}
break;
}

var G__25097 = args25095.length;
switch (G__25097) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25095.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22418__auto___25173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto___25173,out){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto___25173,out){
return (function (state_25139){
var state_val_25140 = (state_25139[(1)]);
if((state_val_25140 === (7))){
var inst_25135 = (state_25139[(2)]);
var state_25139__$1 = state_25139;
var statearr_25141_25174 = state_25139__$1;
(statearr_25141_25174[(2)] = inst_25135);

(statearr_25141_25174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (1))){
var inst_25098 = [];
var inst_25099 = inst_25098;
var inst_25100 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25139__$1 = (function (){var statearr_25142 = state_25139;
(statearr_25142[(7)] = inst_25100);

(statearr_25142[(8)] = inst_25099);

return statearr_25142;
})();
var statearr_25143_25175 = state_25139__$1;
(statearr_25143_25175[(2)] = null);

(statearr_25143_25175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (4))){
var inst_25103 = (state_25139[(9)]);
var inst_25103__$1 = (state_25139[(2)]);
var inst_25104 = (inst_25103__$1 == null);
var inst_25105 = cljs.core.not.call(null,inst_25104);
var state_25139__$1 = (function (){var statearr_25144 = state_25139;
(statearr_25144[(9)] = inst_25103__$1);

return statearr_25144;
})();
if(inst_25105){
var statearr_25145_25176 = state_25139__$1;
(statearr_25145_25176[(1)] = (5));

} else {
var statearr_25146_25177 = state_25139__$1;
(statearr_25146_25177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (15))){
var inst_25129 = (state_25139[(2)]);
var state_25139__$1 = state_25139;
var statearr_25147_25178 = state_25139__$1;
(statearr_25147_25178[(2)] = inst_25129);

(statearr_25147_25178[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (13))){
var state_25139__$1 = state_25139;
var statearr_25148_25179 = state_25139__$1;
(statearr_25148_25179[(2)] = null);

(statearr_25148_25179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (6))){
var inst_25099 = (state_25139[(8)]);
var inst_25124 = inst_25099.length;
var inst_25125 = (inst_25124 > (0));
var state_25139__$1 = state_25139;
if(cljs.core.truth_(inst_25125)){
var statearr_25149_25180 = state_25139__$1;
(statearr_25149_25180[(1)] = (12));

} else {
var statearr_25150_25181 = state_25139__$1;
(statearr_25150_25181[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (3))){
var inst_25137 = (state_25139[(2)]);
var state_25139__$1 = state_25139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25139__$1,inst_25137);
} else {
if((state_val_25140 === (12))){
var inst_25099 = (state_25139[(8)]);
var inst_25127 = cljs.core.vec.call(null,inst_25099);
var state_25139__$1 = state_25139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25139__$1,(15),out,inst_25127);
} else {
if((state_val_25140 === (2))){
var state_25139__$1 = state_25139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25139__$1,(4),ch);
} else {
if((state_val_25140 === (11))){
var inst_25107 = (state_25139[(10)]);
var inst_25103 = (state_25139[(9)]);
var inst_25117 = (state_25139[(2)]);
var inst_25118 = [];
var inst_25119 = inst_25118.push(inst_25103);
var inst_25099 = inst_25118;
var inst_25100 = inst_25107;
var state_25139__$1 = (function (){var statearr_25151 = state_25139;
(statearr_25151[(7)] = inst_25100);

(statearr_25151[(11)] = inst_25117);

(statearr_25151[(8)] = inst_25099);

(statearr_25151[(12)] = inst_25119);

return statearr_25151;
})();
var statearr_25152_25182 = state_25139__$1;
(statearr_25152_25182[(2)] = null);

(statearr_25152_25182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (9))){
var inst_25099 = (state_25139[(8)]);
var inst_25115 = cljs.core.vec.call(null,inst_25099);
var state_25139__$1 = state_25139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25139__$1,(11),out,inst_25115);
} else {
if((state_val_25140 === (5))){
var inst_25107 = (state_25139[(10)]);
var inst_25100 = (state_25139[(7)]);
var inst_25103 = (state_25139[(9)]);
var inst_25107__$1 = f.call(null,inst_25103);
var inst_25108 = cljs.core._EQ_.call(null,inst_25107__$1,inst_25100);
var inst_25109 = cljs.core.keyword_identical_QMARK_.call(null,inst_25100,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25110 = (inst_25108) || (inst_25109);
var state_25139__$1 = (function (){var statearr_25153 = state_25139;
(statearr_25153[(10)] = inst_25107__$1);

return statearr_25153;
})();
if(cljs.core.truth_(inst_25110)){
var statearr_25154_25183 = state_25139__$1;
(statearr_25154_25183[(1)] = (8));

} else {
var statearr_25155_25184 = state_25139__$1;
(statearr_25155_25184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (14))){
var inst_25132 = (state_25139[(2)]);
var inst_25133 = cljs.core.async.close_BANG_.call(null,out);
var state_25139__$1 = (function (){var statearr_25157 = state_25139;
(statearr_25157[(13)] = inst_25132);

return statearr_25157;
})();
var statearr_25158_25185 = state_25139__$1;
(statearr_25158_25185[(2)] = inst_25133);

(statearr_25158_25185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (10))){
var inst_25122 = (state_25139[(2)]);
var state_25139__$1 = state_25139;
var statearr_25159_25186 = state_25139__$1;
(statearr_25159_25186[(2)] = inst_25122);

(statearr_25159_25186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (8))){
var inst_25107 = (state_25139[(10)]);
var inst_25099 = (state_25139[(8)]);
var inst_25103 = (state_25139[(9)]);
var inst_25112 = inst_25099.push(inst_25103);
var tmp25156 = inst_25099;
var inst_25099__$1 = tmp25156;
var inst_25100 = inst_25107;
var state_25139__$1 = (function (){var statearr_25160 = state_25139;
(statearr_25160[(14)] = inst_25112);

(statearr_25160[(7)] = inst_25100);

(statearr_25160[(8)] = inst_25099__$1);

return statearr_25160;
})();
var statearr_25161_25187 = state_25139__$1;
(statearr_25161_25187[(2)] = null);

(statearr_25161_25187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22418__auto___25173,out))
;
return ((function (switch__22306__auto__,c__22418__auto___25173,out){
return (function() {
var cljs$core$async$state_machine__22307__auto__ = null;
var cljs$core$async$state_machine__22307__auto____0 = (function (){
var statearr_25165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25165[(0)] = cljs$core$async$state_machine__22307__auto__);

(statearr_25165[(1)] = (1));

return statearr_25165;
});
var cljs$core$async$state_machine__22307__auto____1 = (function (state_25139){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_25139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e25166){if((e25166 instanceof Object)){
var ex__22310__auto__ = e25166;
var statearr_25167_25188 = state_25139;
(statearr_25167_25188[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25189 = state_25139;
state_25139 = G__25189;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
cljs$core$async$state_machine__22307__auto__ = function(state_25139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22307__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22307__auto____1.call(this,state_25139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22307__auto____0;
cljs$core$async$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22307__auto____1;
return cljs$core$async$state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto___25173,out))
})();
var state__22420__auto__ = (function (){var statearr_25168 = f__22419__auto__.call(null);
(statearr_25168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___25173);

return statearr_25168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto___25173,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map