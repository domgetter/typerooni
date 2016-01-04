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
var args22393 = [];
var len__20713__auto___22399 = arguments.length;
var i__20714__auto___22400 = (0);
while(true){
if((i__20714__auto___22400 < len__20713__auto___22399)){
args22393.push((arguments[i__20714__auto___22400]));

var G__22401 = (i__20714__auto___22400 + (1));
i__20714__auto___22400 = G__22401;
continue;
} else {
}
break;
}

var G__22395 = args22393.length;
switch (G__22395) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22393.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22396 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22396 = (function (f,blockable,meta22397){
this.f = f;
this.blockable = blockable;
this.meta22397 = meta22397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22398,meta22397__$1){
var self__ = this;
var _22398__$1 = this;
return (new cljs.core.async.t_cljs$core$async22396(self__.f,self__.blockable,meta22397__$1));
});

cljs.core.async.t_cljs$core$async22396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22398){
var self__ = this;
var _22398__$1 = this;
return self__.meta22397;
});

cljs.core.async.t_cljs$core$async22396.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22396.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22397","meta22397",-1175374069,null)], null);
});

cljs.core.async.t_cljs$core$async22396.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22396";

cljs.core.async.t_cljs$core$async22396.cljs$lang$ctorPrWriter = (function (this__20253__auto__,writer__20254__auto__,opt__20255__auto__){
return cljs.core._write.call(null,writer__20254__auto__,"cljs.core.async/t_cljs$core$async22396");
});

cljs.core.async.__GT_t_cljs$core$async22396 = (function cljs$core$async$__GT_t_cljs$core$async22396(f__$1,blockable__$1,meta22397){
return (new cljs.core.async.t_cljs$core$async22396(f__$1,blockable__$1,meta22397));
});

}

return (new cljs.core.async.t_cljs$core$async22396(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args22405 = [];
var len__20713__auto___22408 = arguments.length;
var i__20714__auto___22409 = (0);
while(true){
if((i__20714__auto___22409 < len__20713__auto___22408)){
args22405.push((arguments[i__20714__auto___22409]));

var G__22410 = (i__20714__auto___22409 + (1));
i__20714__auto___22409 = G__22410;
continue;
} else {
}
break;
}

var G__22407 = args22405.length;
switch (G__22407) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22405.length)].join('')));

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
var args22412 = [];
var len__20713__auto___22415 = arguments.length;
var i__20714__auto___22416 = (0);
while(true){
if((i__20714__auto___22416 < len__20713__auto___22415)){
args22412.push((arguments[i__20714__auto___22416]));

var G__22417 = (i__20714__auto___22416 + (1));
i__20714__auto___22416 = G__22417;
continue;
} else {
}
break;
}

var G__22414 = args22412.length;
switch (G__22414) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22412.length)].join('')));

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
var args22419 = [];
var len__20713__auto___22422 = arguments.length;
var i__20714__auto___22423 = (0);
while(true){
if((i__20714__auto___22423 < len__20713__auto___22422)){
args22419.push((arguments[i__20714__auto___22423]));

var G__22424 = (i__20714__auto___22423 + (1));
i__20714__auto___22423 = G__22424;
continue;
} else {
}
break;
}

var G__22421 = args22419.length;
switch (G__22421) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22419.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22426 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22426);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22426,ret){
return (function (){
return fn1.call(null,val_22426);
});})(val_22426,ret))
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
var args22427 = [];
var len__20713__auto___22430 = arguments.length;
var i__20714__auto___22431 = (0);
while(true){
if((i__20714__auto___22431 < len__20713__auto___22430)){
args22427.push((arguments[i__20714__auto___22431]));

var G__22432 = (i__20714__auto___22431 + (1));
i__20714__auto___22431 = G__22432;
continue;
} else {
}
break;
}

var G__22429 = args22427.length;
switch (G__22429) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22427.length)].join('')));

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
var n__20558__auto___22434 = n;
var x_22435 = (0);
while(true){
if((x_22435 < n__20558__auto___22434)){
(a[x_22435] = (0));

var G__22436 = (x_22435 + (1));
x_22435 = G__22436;
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

var G__22437 = (i + (1));
i = G__22437;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22441 = (function (alt_flag,flag,meta22442){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22442 = meta22442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22443,meta22442__$1){
var self__ = this;
var _22443__$1 = this;
return (new cljs.core.async.t_cljs$core$async22441(self__.alt_flag,self__.flag,meta22442__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22443){
var self__ = this;
var _22443__$1 = this;
return self__.meta22442;
});})(flag))
;

cljs.core.async.t_cljs$core$async22441.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22441.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22441.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22442","meta22442",1701521301,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22441";

cljs.core.async.t_cljs$core$async22441.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20253__auto__,writer__20254__auto__,opt__20255__auto__){
return cljs.core._write.call(null,writer__20254__auto__,"cljs.core.async/t_cljs$core$async22441");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22441 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22441(alt_flag__$1,flag__$1,meta22442){
return (new cljs.core.async.t_cljs$core$async22441(alt_flag__$1,flag__$1,meta22442));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22441(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22447 = (function (alt_handler,flag,cb,meta22448){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22448 = meta22448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22449,meta22448__$1){
var self__ = this;
var _22449__$1 = this;
return (new cljs.core.async.t_cljs$core$async22447(self__.alt_handler,self__.flag,self__.cb,meta22448__$1));
});

cljs.core.async.t_cljs$core$async22447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22449){
var self__ = this;
var _22449__$1 = this;
return self__.meta22448;
});

cljs.core.async.t_cljs$core$async22447.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22447.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22447.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22447.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22448","meta22448",-1860251733,null)], null);
});

cljs.core.async.t_cljs$core$async22447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22447";

cljs.core.async.t_cljs$core$async22447.cljs$lang$ctorPrWriter = (function (this__20253__auto__,writer__20254__auto__,opt__20255__auto__){
return cljs.core._write.call(null,writer__20254__auto__,"cljs.core.async/t_cljs$core$async22447");
});

cljs.core.async.__GT_t_cljs$core$async22447 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22447(alt_handler__$1,flag__$1,cb__$1,meta22448){
return (new cljs.core.async.t_cljs$core$async22447(alt_handler__$1,flag__$1,cb__$1,meta22448));
});

}

return (new cljs.core.async.t_cljs$core$async22447(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22450_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22450_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22451_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22451_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19655__auto__ = wport;
if(cljs.core.truth_(or__19655__auto__)){
return or__19655__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22452 = (i + (1));
i = G__22452;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19655__auto__ = ret;
if(cljs.core.truth_(or__19655__auto__)){
return or__19655__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__19643__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19643__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19643__auto__;
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
var args__20720__auto__ = [];
var len__20713__auto___22458 = arguments.length;
var i__20714__auto___22459 = (0);
while(true){
if((i__20714__auto___22459 < len__20713__auto___22458)){
args__20720__auto__.push((arguments[i__20714__auto___22459]));

var G__22460 = (i__20714__auto___22459 + (1));
i__20714__auto___22459 = G__22460;
continue;
} else {
}
break;
}

var argseq__20721__auto__ = ((((1) < args__20720__auto__.length))?(new cljs.core.IndexedSeq(args__20720__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20721__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22455){
var map__22456 = p__22455;
var map__22456__$1 = ((((!((map__22456 == null)))?((((map__22456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22456):map__22456);
var opts = map__22456__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22453){
var G__22454 = cljs.core.first.call(null,seq22453);
var seq22453__$1 = cljs.core.next.call(null,seq22453);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22454,seq22453__$1);
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
var args22461 = [];
var len__20713__auto___22511 = arguments.length;
var i__20714__auto___22512 = (0);
while(true){
if((i__20714__auto___22512 < len__20713__auto___22511)){
args22461.push((arguments[i__20714__auto___22512]));

var G__22513 = (i__20714__auto___22512 + (1));
i__20714__auto___22512 = G__22513;
continue;
} else {
}
break;
}

var G__22463 = args22461.length;
switch (G__22463) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22461.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22348__auto___22515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto___22515){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto___22515){
return (function (state_22487){
var state_val_22488 = (state_22487[(1)]);
if((state_val_22488 === (7))){
var inst_22483 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
var statearr_22489_22516 = state_22487__$1;
(statearr_22489_22516[(2)] = inst_22483);

(statearr_22489_22516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (1))){
var state_22487__$1 = state_22487;
var statearr_22490_22517 = state_22487__$1;
(statearr_22490_22517[(2)] = null);

(statearr_22490_22517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (4))){
var inst_22466 = (state_22487[(7)]);
var inst_22466__$1 = (state_22487[(2)]);
var inst_22467 = (inst_22466__$1 == null);
var state_22487__$1 = (function (){var statearr_22491 = state_22487;
(statearr_22491[(7)] = inst_22466__$1);

return statearr_22491;
})();
if(cljs.core.truth_(inst_22467)){
var statearr_22492_22518 = state_22487__$1;
(statearr_22492_22518[(1)] = (5));

} else {
var statearr_22493_22519 = state_22487__$1;
(statearr_22493_22519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (13))){
var state_22487__$1 = state_22487;
var statearr_22494_22520 = state_22487__$1;
(statearr_22494_22520[(2)] = null);

(statearr_22494_22520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (6))){
var inst_22466 = (state_22487[(7)]);
var state_22487__$1 = state_22487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22487__$1,(11),to,inst_22466);
} else {
if((state_val_22488 === (3))){
var inst_22485 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22487__$1,inst_22485);
} else {
if((state_val_22488 === (12))){
var state_22487__$1 = state_22487;
var statearr_22495_22521 = state_22487__$1;
(statearr_22495_22521[(2)] = null);

(statearr_22495_22521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (2))){
var state_22487__$1 = state_22487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22487__$1,(4),from);
} else {
if((state_val_22488 === (11))){
var inst_22476 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
if(cljs.core.truth_(inst_22476)){
var statearr_22496_22522 = state_22487__$1;
(statearr_22496_22522[(1)] = (12));

} else {
var statearr_22497_22523 = state_22487__$1;
(statearr_22497_22523[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (9))){
var state_22487__$1 = state_22487;
var statearr_22498_22524 = state_22487__$1;
(statearr_22498_22524[(2)] = null);

(statearr_22498_22524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (5))){
var state_22487__$1 = state_22487;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22499_22525 = state_22487__$1;
(statearr_22499_22525[(1)] = (8));

} else {
var statearr_22500_22526 = state_22487__$1;
(statearr_22500_22526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (14))){
var inst_22481 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
var statearr_22501_22527 = state_22487__$1;
(statearr_22501_22527[(2)] = inst_22481);

(statearr_22501_22527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (10))){
var inst_22473 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
var statearr_22502_22528 = state_22487__$1;
(statearr_22502_22528[(2)] = inst_22473);

(statearr_22502_22528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (8))){
var inst_22470 = cljs.core.async.close_BANG_.call(null,to);
var state_22487__$1 = state_22487;
var statearr_22503_22529 = state_22487__$1;
(statearr_22503_22529[(2)] = inst_22470);

(statearr_22503_22529[(1)] = (10));


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
});})(c__22348__auto___22515))
;
return ((function (switch__22236__auto__,c__22348__auto___22515){
return (function() {
var cljs$core$async$state_machine__22237__auto__ = null;
var cljs$core$async$state_machine__22237__auto____0 = (function (){
var statearr_22507 = [null,null,null,null,null,null,null,null];
(statearr_22507[(0)] = cljs$core$async$state_machine__22237__auto__);

(statearr_22507[(1)] = (1));

return statearr_22507;
});
var cljs$core$async$state_machine__22237__auto____1 = (function (state_22487){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_22487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e22508){if((e22508 instanceof Object)){
var ex__22240__auto__ = e22508;
var statearr_22509_22530 = state_22487;
(statearr_22509_22530[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22531 = state_22487;
state_22487 = G__22531;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$state_machine__22237__auto__ = function(state_22487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22237__auto____1.call(this,state_22487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22237__auto____0;
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22237__auto____1;
return cljs$core$async$state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto___22515))
})();
var state__22350__auto__ = (function (){var statearr_22510 = f__22349__auto__.call(null);
(statearr_22510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___22515);

return statearr_22510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto___22515))
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
return (function (p__22715){
var vec__22716 = p__22715;
var v = cljs.core.nth.call(null,vec__22716,(0),null);
var p = cljs.core.nth.call(null,vec__22716,(1),null);
var job = vec__22716;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22348__auto___22898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto___22898,res,vec__22716,v,p,job,jobs,results){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto___22898,res,vec__22716,v,p,job,jobs,results){
return (function (state_22721){
var state_val_22722 = (state_22721[(1)]);
if((state_val_22722 === (1))){
var state_22721__$1 = state_22721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22721__$1,(2),res,v);
} else {
if((state_val_22722 === (2))){
var inst_22718 = (state_22721[(2)]);
var inst_22719 = cljs.core.async.close_BANG_.call(null,res);
var state_22721__$1 = (function (){var statearr_22723 = state_22721;
(statearr_22723[(7)] = inst_22718);

return statearr_22723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22721__$1,inst_22719);
} else {
return null;
}
}
});})(c__22348__auto___22898,res,vec__22716,v,p,job,jobs,results))
;
return ((function (switch__22236__auto__,c__22348__auto___22898,res,vec__22716,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____0 = (function (){
var statearr_22727 = [null,null,null,null,null,null,null,null];
(statearr_22727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__);

(statearr_22727[(1)] = (1));

return statearr_22727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____1 = (function (state_22721){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_22721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e22728){if((e22728 instanceof Object)){
var ex__22240__auto__ = e22728;
var statearr_22729_22899 = state_22721;
(statearr_22729_22899[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22900 = state_22721;
state_22721 = G__22900;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__ = function(state_22721){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____1.call(this,state_22721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto___22898,res,vec__22716,v,p,job,jobs,results))
})();
var state__22350__auto__ = (function (){var statearr_22730 = f__22349__auto__.call(null);
(statearr_22730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___22898);

return statearr_22730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto___22898,res,vec__22716,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22731){
var vec__22732 = p__22731;
var v = cljs.core.nth.call(null,vec__22732,(0),null);
var p = cljs.core.nth.call(null,vec__22732,(1),null);
var job = vec__22732;
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
var n__20558__auto___22901 = n;
var __22902 = (0);
while(true){
if((__22902 < n__20558__auto___22901)){
var G__22733_22903 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22733_22903) {
case "compute":
var c__22348__auto___22905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22902,c__22348__auto___22905,G__22733_22903,n__20558__auto___22901,jobs,results,process,async){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (__22902,c__22348__auto___22905,G__22733_22903,n__20558__auto___22901,jobs,results,process,async){
return (function (state_22746){
var state_val_22747 = (state_22746[(1)]);
if((state_val_22747 === (1))){
var state_22746__$1 = state_22746;
var statearr_22748_22906 = state_22746__$1;
(statearr_22748_22906[(2)] = null);

(statearr_22748_22906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22747 === (2))){
var state_22746__$1 = state_22746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22746__$1,(4),jobs);
} else {
if((state_val_22747 === (3))){
var inst_22744 = (state_22746[(2)]);
var state_22746__$1 = state_22746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22746__$1,inst_22744);
} else {
if((state_val_22747 === (4))){
var inst_22736 = (state_22746[(2)]);
var inst_22737 = process.call(null,inst_22736);
var state_22746__$1 = state_22746;
if(cljs.core.truth_(inst_22737)){
var statearr_22749_22907 = state_22746__$1;
(statearr_22749_22907[(1)] = (5));

} else {
var statearr_22750_22908 = state_22746__$1;
(statearr_22750_22908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22747 === (5))){
var state_22746__$1 = state_22746;
var statearr_22751_22909 = state_22746__$1;
(statearr_22751_22909[(2)] = null);

(statearr_22751_22909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22747 === (6))){
var state_22746__$1 = state_22746;
var statearr_22752_22910 = state_22746__$1;
(statearr_22752_22910[(2)] = null);

(statearr_22752_22910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22747 === (7))){
var inst_22742 = (state_22746[(2)]);
var state_22746__$1 = state_22746;
var statearr_22753_22911 = state_22746__$1;
(statearr_22753_22911[(2)] = inst_22742);

(statearr_22753_22911[(1)] = (3));


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
});})(__22902,c__22348__auto___22905,G__22733_22903,n__20558__auto___22901,jobs,results,process,async))
;
return ((function (__22902,switch__22236__auto__,c__22348__auto___22905,G__22733_22903,n__20558__auto___22901,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____0 = (function (){
var statearr_22757 = [null,null,null,null,null,null,null];
(statearr_22757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__);

(statearr_22757[(1)] = (1));

return statearr_22757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____1 = (function (state_22746){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_22746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e22758){if((e22758 instanceof Object)){
var ex__22240__auto__ = e22758;
var statearr_22759_22912 = state_22746;
(statearr_22759_22912[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22913 = state_22746;
state_22746 = G__22913;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__ = function(state_22746){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____1.call(this,state_22746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__;
})()
;})(__22902,switch__22236__auto__,c__22348__auto___22905,G__22733_22903,n__20558__auto___22901,jobs,results,process,async))
})();
var state__22350__auto__ = (function (){var statearr_22760 = f__22349__auto__.call(null);
(statearr_22760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___22905);

return statearr_22760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(__22902,c__22348__auto___22905,G__22733_22903,n__20558__auto___22901,jobs,results,process,async))
);


break;
case "async":
var c__22348__auto___22914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22902,c__22348__auto___22914,G__22733_22903,n__20558__auto___22901,jobs,results,process,async){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (__22902,c__22348__auto___22914,G__22733_22903,n__20558__auto___22901,jobs,results,process,async){
return (function (state_22773){
var state_val_22774 = (state_22773[(1)]);
if((state_val_22774 === (1))){
var state_22773__$1 = state_22773;
var statearr_22775_22915 = state_22773__$1;
(statearr_22775_22915[(2)] = null);

(statearr_22775_22915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22774 === (2))){
var state_22773__$1 = state_22773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22773__$1,(4),jobs);
} else {
if((state_val_22774 === (3))){
var inst_22771 = (state_22773[(2)]);
var state_22773__$1 = state_22773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22773__$1,inst_22771);
} else {
if((state_val_22774 === (4))){
var inst_22763 = (state_22773[(2)]);
var inst_22764 = async.call(null,inst_22763);
var state_22773__$1 = state_22773;
if(cljs.core.truth_(inst_22764)){
var statearr_22776_22916 = state_22773__$1;
(statearr_22776_22916[(1)] = (5));

} else {
var statearr_22777_22917 = state_22773__$1;
(statearr_22777_22917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22774 === (5))){
var state_22773__$1 = state_22773;
var statearr_22778_22918 = state_22773__$1;
(statearr_22778_22918[(2)] = null);

(statearr_22778_22918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22774 === (6))){
var state_22773__$1 = state_22773;
var statearr_22779_22919 = state_22773__$1;
(statearr_22779_22919[(2)] = null);

(statearr_22779_22919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22774 === (7))){
var inst_22769 = (state_22773[(2)]);
var state_22773__$1 = state_22773;
var statearr_22780_22920 = state_22773__$1;
(statearr_22780_22920[(2)] = inst_22769);

(statearr_22780_22920[(1)] = (3));


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
});})(__22902,c__22348__auto___22914,G__22733_22903,n__20558__auto___22901,jobs,results,process,async))
;
return ((function (__22902,switch__22236__auto__,c__22348__auto___22914,G__22733_22903,n__20558__auto___22901,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____0 = (function (){
var statearr_22784 = [null,null,null,null,null,null,null];
(statearr_22784[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__);

(statearr_22784[(1)] = (1));

return statearr_22784;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____1 = (function (state_22773){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_22773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e22785){if((e22785 instanceof Object)){
var ex__22240__auto__ = e22785;
var statearr_22786_22921 = state_22773;
(statearr_22786_22921[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22922 = state_22773;
state_22773 = G__22922;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__ = function(state_22773){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____1.call(this,state_22773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__;
})()
;})(__22902,switch__22236__auto__,c__22348__auto___22914,G__22733_22903,n__20558__auto___22901,jobs,results,process,async))
})();
var state__22350__auto__ = (function (){var statearr_22787 = f__22349__auto__.call(null);
(statearr_22787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___22914);

return statearr_22787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(__22902,c__22348__auto___22914,G__22733_22903,n__20558__auto___22901,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22923 = (__22902 + (1));
__22902 = G__22923;
continue;
} else {
}
break;
}

var c__22348__auto___22924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto___22924,jobs,results,process,async){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto___22924,jobs,results,process,async){
return (function (state_22809){
var state_val_22810 = (state_22809[(1)]);
if((state_val_22810 === (1))){
var state_22809__$1 = state_22809;
var statearr_22811_22925 = state_22809__$1;
(statearr_22811_22925[(2)] = null);

(statearr_22811_22925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22810 === (2))){
var state_22809__$1 = state_22809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22809__$1,(4),from);
} else {
if((state_val_22810 === (3))){
var inst_22807 = (state_22809[(2)]);
var state_22809__$1 = state_22809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22809__$1,inst_22807);
} else {
if((state_val_22810 === (4))){
var inst_22790 = (state_22809[(7)]);
var inst_22790__$1 = (state_22809[(2)]);
var inst_22791 = (inst_22790__$1 == null);
var state_22809__$1 = (function (){var statearr_22812 = state_22809;
(statearr_22812[(7)] = inst_22790__$1);

return statearr_22812;
})();
if(cljs.core.truth_(inst_22791)){
var statearr_22813_22926 = state_22809__$1;
(statearr_22813_22926[(1)] = (5));

} else {
var statearr_22814_22927 = state_22809__$1;
(statearr_22814_22927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22810 === (5))){
var inst_22793 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22809__$1 = state_22809;
var statearr_22815_22928 = state_22809__$1;
(statearr_22815_22928[(2)] = inst_22793);

(statearr_22815_22928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22810 === (6))){
var inst_22795 = (state_22809[(8)]);
var inst_22790 = (state_22809[(7)]);
var inst_22795__$1 = cljs.core.async.chan.call(null,(1));
var inst_22796 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22797 = [inst_22790,inst_22795__$1];
var inst_22798 = (new cljs.core.PersistentVector(null,2,(5),inst_22796,inst_22797,null));
var state_22809__$1 = (function (){var statearr_22816 = state_22809;
(statearr_22816[(8)] = inst_22795__$1);

return statearr_22816;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22809__$1,(8),jobs,inst_22798);
} else {
if((state_val_22810 === (7))){
var inst_22805 = (state_22809[(2)]);
var state_22809__$1 = state_22809;
var statearr_22817_22929 = state_22809__$1;
(statearr_22817_22929[(2)] = inst_22805);

(statearr_22817_22929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22810 === (8))){
var inst_22795 = (state_22809[(8)]);
var inst_22800 = (state_22809[(2)]);
var state_22809__$1 = (function (){var statearr_22818 = state_22809;
(statearr_22818[(9)] = inst_22800);

return statearr_22818;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22809__$1,(9),results,inst_22795);
} else {
if((state_val_22810 === (9))){
var inst_22802 = (state_22809[(2)]);
var state_22809__$1 = (function (){var statearr_22819 = state_22809;
(statearr_22819[(10)] = inst_22802);

return statearr_22819;
})();
var statearr_22820_22930 = state_22809__$1;
(statearr_22820_22930[(2)] = null);

(statearr_22820_22930[(1)] = (2));


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
});})(c__22348__auto___22924,jobs,results,process,async))
;
return ((function (switch__22236__auto__,c__22348__auto___22924,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____0 = (function (){
var statearr_22824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__);

(statearr_22824[(1)] = (1));

return statearr_22824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____1 = (function (state_22809){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_22809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e22825){if((e22825 instanceof Object)){
var ex__22240__auto__ = e22825;
var statearr_22826_22931 = state_22809;
(statearr_22826_22931[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22932 = state_22809;
state_22809 = G__22932;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__ = function(state_22809){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____1.call(this,state_22809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto___22924,jobs,results,process,async))
})();
var state__22350__auto__ = (function (){var statearr_22827 = f__22349__auto__.call(null);
(statearr_22827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___22924);

return statearr_22827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto___22924,jobs,results,process,async))
);


var c__22348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto__,jobs,results,process,async){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto__,jobs,results,process,async){
return (function (state_22865){
var state_val_22866 = (state_22865[(1)]);
if((state_val_22866 === (7))){
var inst_22861 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
var statearr_22867_22933 = state_22865__$1;
(statearr_22867_22933[(2)] = inst_22861);

(statearr_22867_22933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (20))){
var state_22865__$1 = state_22865;
var statearr_22868_22934 = state_22865__$1;
(statearr_22868_22934[(2)] = null);

(statearr_22868_22934[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (1))){
var state_22865__$1 = state_22865;
var statearr_22869_22935 = state_22865__$1;
(statearr_22869_22935[(2)] = null);

(statearr_22869_22935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (4))){
var inst_22830 = (state_22865[(7)]);
var inst_22830__$1 = (state_22865[(2)]);
var inst_22831 = (inst_22830__$1 == null);
var state_22865__$1 = (function (){var statearr_22870 = state_22865;
(statearr_22870[(7)] = inst_22830__$1);

return statearr_22870;
})();
if(cljs.core.truth_(inst_22831)){
var statearr_22871_22936 = state_22865__$1;
(statearr_22871_22936[(1)] = (5));

} else {
var statearr_22872_22937 = state_22865__$1;
(statearr_22872_22937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (15))){
var inst_22843 = (state_22865[(8)]);
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22865__$1,(18),to,inst_22843);
} else {
if((state_val_22866 === (21))){
var inst_22856 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
var statearr_22873_22938 = state_22865__$1;
(statearr_22873_22938[(2)] = inst_22856);

(statearr_22873_22938[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (13))){
var inst_22858 = (state_22865[(2)]);
var state_22865__$1 = (function (){var statearr_22874 = state_22865;
(statearr_22874[(9)] = inst_22858);

return statearr_22874;
})();
var statearr_22875_22939 = state_22865__$1;
(statearr_22875_22939[(2)] = null);

(statearr_22875_22939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (6))){
var inst_22830 = (state_22865[(7)]);
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22865__$1,(11),inst_22830);
} else {
if((state_val_22866 === (17))){
var inst_22851 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
if(cljs.core.truth_(inst_22851)){
var statearr_22876_22940 = state_22865__$1;
(statearr_22876_22940[(1)] = (19));

} else {
var statearr_22877_22941 = state_22865__$1;
(statearr_22877_22941[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (3))){
var inst_22863 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22865__$1,inst_22863);
} else {
if((state_val_22866 === (12))){
var inst_22840 = (state_22865[(10)]);
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22865__$1,(14),inst_22840);
} else {
if((state_val_22866 === (2))){
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22865__$1,(4),results);
} else {
if((state_val_22866 === (19))){
var state_22865__$1 = state_22865;
var statearr_22878_22942 = state_22865__$1;
(statearr_22878_22942[(2)] = null);

(statearr_22878_22942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (11))){
var inst_22840 = (state_22865[(2)]);
var state_22865__$1 = (function (){var statearr_22879 = state_22865;
(statearr_22879[(10)] = inst_22840);

return statearr_22879;
})();
var statearr_22880_22943 = state_22865__$1;
(statearr_22880_22943[(2)] = null);

(statearr_22880_22943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (9))){
var state_22865__$1 = state_22865;
var statearr_22881_22944 = state_22865__$1;
(statearr_22881_22944[(2)] = null);

(statearr_22881_22944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (5))){
var state_22865__$1 = state_22865;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22882_22945 = state_22865__$1;
(statearr_22882_22945[(1)] = (8));

} else {
var statearr_22883_22946 = state_22865__$1;
(statearr_22883_22946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (14))){
var inst_22843 = (state_22865[(8)]);
var inst_22845 = (state_22865[(11)]);
var inst_22843__$1 = (state_22865[(2)]);
var inst_22844 = (inst_22843__$1 == null);
var inst_22845__$1 = cljs.core.not.call(null,inst_22844);
var state_22865__$1 = (function (){var statearr_22884 = state_22865;
(statearr_22884[(8)] = inst_22843__$1);

(statearr_22884[(11)] = inst_22845__$1);

return statearr_22884;
})();
if(inst_22845__$1){
var statearr_22885_22947 = state_22865__$1;
(statearr_22885_22947[(1)] = (15));

} else {
var statearr_22886_22948 = state_22865__$1;
(statearr_22886_22948[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (16))){
var inst_22845 = (state_22865[(11)]);
var state_22865__$1 = state_22865;
var statearr_22887_22949 = state_22865__$1;
(statearr_22887_22949[(2)] = inst_22845);

(statearr_22887_22949[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (10))){
var inst_22837 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
var statearr_22888_22950 = state_22865__$1;
(statearr_22888_22950[(2)] = inst_22837);

(statearr_22888_22950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (18))){
var inst_22848 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
var statearr_22889_22951 = state_22865__$1;
(statearr_22889_22951[(2)] = inst_22848);

(statearr_22889_22951[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (8))){
var inst_22834 = cljs.core.async.close_BANG_.call(null,to);
var state_22865__$1 = state_22865;
var statearr_22890_22952 = state_22865__$1;
(statearr_22890_22952[(2)] = inst_22834);

(statearr_22890_22952[(1)] = (10));


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
});})(c__22348__auto__,jobs,results,process,async))
;
return ((function (switch__22236__auto__,c__22348__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____0 = (function (){
var statearr_22894 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22894[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__);

(statearr_22894[(1)] = (1));

return statearr_22894;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____1 = (function (state_22865){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_22865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e22895){if((e22895 instanceof Object)){
var ex__22240__auto__ = e22895;
var statearr_22896_22953 = state_22865;
(statearr_22896_22953[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22954 = state_22865;
state_22865 = G__22954;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__ = function(state_22865){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____1.call(this,state_22865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto__,jobs,results,process,async))
})();
var state__22350__auto__ = (function (){var statearr_22897 = f__22349__auto__.call(null);
(statearr_22897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto__);

return statearr_22897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto__,jobs,results,process,async))
);

return c__22348__auto__;
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
var args22955 = [];
var len__20713__auto___22958 = arguments.length;
var i__20714__auto___22959 = (0);
while(true){
if((i__20714__auto___22959 < len__20713__auto___22958)){
args22955.push((arguments[i__20714__auto___22959]));

var G__22960 = (i__20714__auto___22959 + (1));
i__20714__auto___22959 = G__22960;
continue;
} else {
}
break;
}

var G__22957 = args22955.length;
switch (G__22957) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22955.length)].join('')));

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
var args22962 = [];
var len__20713__auto___22965 = arguments.length;
var i__20714__auto___22966 = (0);
while(true){
if((i__20714__auto___22966 < len__20713__auto___22965)){
args22962.push((arguments[i__20714__auto___22966]));

var G__22967 = (i__20714__auto___22966 + (1));
i__20714__auto___22966 = G__22967;
continue;
} else {
}
break;
}

var G__22964 = args22962.length;
switch (G__22964) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22962.length)].join('')));

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
var args22969 = [];
var len__20713__auto___23022 = arguments.length;
var i__20714__auto___23023 = (0);
while(true){
if((i__20714__auto___23023 < len__20713__auto___23022)){
args22969.push((arguments[i__20714__auto___23023]));

var G__23024 = (i__20714__auto___23023 + (1));
i__20714__auto___23023 = G__23024;
continue;
} else {
}
break;
}

var G__22971 = args22969.length;
switch (G__22971) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22969.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22348__auto___23026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto___23026,tc,fc){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto___23026,tc,fc){
return (function (state_22997){
var state_val_22998 = (state_22997[(1)]);
if((state_val_22998 === (7))){
var inst_22993 = (state_22997[(2)]);
var state_22997__$1 = state_22997;
var statearr_22999_23027 = state_22997__$1;
(statearr_22999_23027[(2)] = inst_22993);

(statearr_22999_23027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (1))){
var state_22997__$1 = state_22997;
var statearr_23000_23028 = state_22997__$1;
(statearr_23000_23028[(2)] = null);

(statearr_23000_23028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (4))){
var inst_22974 = (state_22997[(7)]);
var inst_22974__$1 = (state_22997[(2)]);
var inst_22975 = (inst_22974__$1 == null);
var state_22997__$1 = (function (){var statearr_23001 = state_22997;
(statearr_23001[(7)] = inst_22974__$1);

return statearr_23001;
})();
if(cljs.core.truth_(inst_22975)){
var statearr_23002_23029 = state_22997__$1;
(statearr_23002_23029[(1)] = (5));

} else {
var statearr_23003_23030 = state_22997__$1;
(statearr_23003_23030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (13))){
var state_22997__$1 = state_22997;
var statearr_23004_23031 = state_22997__$1;
(statearr_23004_23031[(2)] = null);

(statearr_23004_23031[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (6))){
var inst_22974 = (state_22997[(7)]);
var inst_22980 = p.call(null,inst_22974);
var state_22997__$1 = state_22997;
if(cljs.core.truth_(inst_22980)){
var statearr_23005_23032 = state_22997__$1;
(statearr_23005_23032[(1)] = (9));

} else {
var statearr_23006_23033 = state_22997__$1;
(statearr_23006_23033[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (3))){
var inst_22995 = (state_22997[(2)]);
var state_22997__$1 = state_22997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22997__$1,inst_22995);
} else {
if((state_val_22998 === (12))){
var state_22997__$1 = state_22997;
var statearr_23007_23034 = state_22997__$1;
(statearr_23007_23034[(2)] = null);

(statearr_23007_23034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (2))){
var state_22997__$1 = state_22997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22997__$1,(4),ch);
} else {
if((state_val_22998 === (11))){
var inst_22974 = (state_22997[(7)]);
var inst_22984 = (state_22997[(2)]);
var state_22997__$1 = state_22997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22997__$1,(8),inst_22984,inst_22974);
} else {
if((state_val_22998 === (9))){
var state_22997__$1 = state_22997;
var statearr_23008_23035 = state_22997__$1;
(statearr_23008_23035[(2)] = tc);

(statearr_23008_23035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (5))){
var inst_22977 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22978 = cljs.core.async.close_BANG_.call(null,fc);
var state_22997__$1 = (function (){var statearr_23009 = state_22997;
(statearr_23009[(8)] = inst_22977);

return statearr_23009;
})();
var statearr_23010_23036 = state_22997__$1;
(statearr_23010_23036[(2)] = inst_22978);

(statearr_23010_23036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (14))){
var inst_22991 = (state_22997[(2)]);
var state_22997__$1 = state_22997;
var statearr_23011_23037 = state_22997__$1;
(statearr_23011_23037[(2)] = inst_22991);

(statearr_23011_23037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (10))){
var state_22997__$1 = state_22997;
var statearr_23012_23038 = state_22997__$1;
(statearr_23012_23038[(2)] = fc);

(statearr_23012_23038[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22998 === (8))){
var inst_22986 = (state_22997[(2)]);
var state_22997__$1 = state_22997;
if(cljs.core.truth_(inst_22986)){
var statearr_23013_23039 = state_22997__$1;
(statearr_23013_23039[(1)] = (12));

} else {
var statearr_23014_23040 = state_22997__$1;
(statearr_23014_23040[(1)] = (13));

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
});})(c__22348__auto___23026,tc,fc))
;
return ((function (switch__22236__auto__,c__22348__auto___23026,tc,fc){
return (function() {
var cljs$core$async$state_machine__22237__auto__ = null;
var cljs$core$async$state_machine__22237__auto____0 = (function (){
var statearr_23018 = [null,null,null,null,null,null,null,null,null];
(statearr_23018[(0)] = cljs$core$async$state_machine__22237__auto__);

(statearr_23018[(1)] = (1));

return statearr_23018;
});
var cljs$core$async$state_machine__22237__auto____1 = (function (state_22997){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_22997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e23019){if((e23019 instanceof Object)){
var ex__22240__auto__ = e23019;
var statearr_23020_23041 = state_22997;
(statearr_23020_23041[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23042 = state_22997;
state_22997 = G__23042;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$state_machine__22237__auto__ = function(state_22997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22237__auto____1.call(this,state_22997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22237__auto____0;
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22237__auto____1;
return cljs$core$async$state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto___23026,tc,fc))
})();
var state__22350__auto__ = (function (){var statearr_23021 = f__22349__auto__.call(null);
(statearr_23021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___23026);

return statearr_23021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto___23026,tc,fc))
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
var c__22348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto__){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto__){
return (function (state_23106){
var state_val_23107 = (state_23106[(1)]);
if((state_val_23107 === (7))){
var inst_23102 = (state_23106[(2)]);
var state_23106__$1 = state_23106;
var statearr_23108_23129 = state_23106__$1;
(statearr_23108_23129[(2)] = inst_23102);

(statearr_23108_23129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23107 === (1))){
var inst_23086 = init;
var state_23106__$1 = (function (){var statearr_23109 = state_23106;
(statearr_23109[(7)] = inst_23086);

return statearr_23109;
})();
var statearr_23110_23130 = state_23106__$1;
(statearr_23110_23130[(2)] = null);

(statearr_23110_23130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23107 === (4))){
var inst_23089 = (state_23106[(8)]);
var inst_23089__$1 = (state_23106[(2)]);
var inst_23090 = (inst_23089__$1 == null);
var state_23106__$1 = (function (){var statearr_23111 = state_23106;
(statearr_23111[(8)] = inst_23089__$1);

return statearr_23111;
})();
if(cljs.core.truth_(inst_23090)){
var statearr_23112_23131 = state_23106__$1;
(statearr_23112_23131[(1)] = (5));

} else {
var statearr_23113_23132 = state_23106__$1;
(statearr_23113_23132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23107 === (6))){
var inst_23089 = (state_23106[(8)]);
var inst_23086 = (state_23106[(7)]);
var inst_23093 = (state_23106[(9)]);
var inst_23093__$1 = f.call(null,inst_23086,inst_23089);
var inst_23094 = cljs.core.reduced_QMARK_.call(null,inst_23093__$1);
var state_23106__$1 = (function (){var statearr_23114 = state_23106;
(statearr_23114[(9)] = inst_23093__$1);

return statearr_23114;
})();
if(inst_23094){
var statearr_23115_23133 = state_23106__$1;
(statearr_23115_23133[(1)] = (8));

} else {
var statearr_23116_23134 = state_23106__$1;
(statearr_23116_23134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23107 === (3))){
var inst_23104 = (state_23106[(2)]);
var state_23106__$1 = state_23106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23106__$1,inst_23104);
} else {
if((state_val_23107 === (2))){
var state_23106__$1 = state_23106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23106__$1,(4),ch);
} else {
if((state_val_23107 === (9))){
var inst_23093 = (state_23106[(9)]);
var inst_23086 = inst_23093;
var state_23106__$1 = (function (){var statearr_23117 = state_23106;
(statearr_23117[(7)] = inst_23086);

return statearr_23117;
})();
var statearr_23118_23135 = state_23106__$1;
(statearr_23118_23135[(2)] = null);

(statearr_23118_23135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23107 === (5))){
var inst_23086 = (state_23106[(7)]);
var state_23106__$1 = state_23106;
var statearr_23119_23136 = state_23106__$1;
(statearr_23119_23136[(2)] = inst_23086);

(statearr_23119_23136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23107 === (10))){
var inst_23100 = (state_23106[(2)]);
var state_23106__$1 = state_23106;
var statearr_23120_23137 = state_23106__$1;
(statearr_23120_23137[(2)] = inst_23100);

(statearr_23120_23137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23107 === (8))){
var inst_23093 = (state_23106[(9)]);
var inst_23096 = cljs.core.deref.call(null,inst_23093);
var state_23106__$1 = state_23106;
var statearr_23121_23138 = state_23106__$1;
(statearr_23121_23138[(2)] = inst_23096);

(statearr_23121_23138[(1)] = (10));


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
});})(c__22348__auto__))
;
return ((function (switch__22236__auto__,c__22348__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22237__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22237__auto____0 = (function (){
var statearr_23125 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23125[(0)] = cljs$core$async$reduce_$_state_machine__22237__auto__);

(statearr_23125[(1)] = (1));

return statearr_23125;
});
var cljs$core$async$reduce_$_state_machine__22237__auto____1 = (function (state_23106){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_23106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e23126){if((e23126 instanceof Object)){
var ex__22240__auto__ = e23126;
var statearr_23127_23139 = state_23106;
(statearr_23127_23139[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23140 = state_23106;
state_23106 = G__23140;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22237__auto__ = function(state_23106){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22237__auto____1.call(this,state_23106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22237__auto____0;
cljs$core$async$reduce_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22237__auto____1;
return cljs$core$async$reduce_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto__))
})();
var state__22350__auto__ = (function (){var statearr_23128 = f__22349__auto__.call(null);
(statearr_23128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto__);

return statearr_23128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto__))
);

return c__22348__auto__;
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
var args23141 = [];
var len__20713__auto___23193 = arguments.length;
var i__20714__auto___23194 = (0);
while(true){
if((i__20714__auto___23194 < len__20713__auto___23193)){
args23141.push((arguments[i__20714__auto___23194]));

var G__23195 = (i__20714__auto___23194 + (1));
i__20714__auto___23194 = G__23195;
continue;
} else {
}
break;
}

var G__23143 = args23141.length;
switch (G__23143) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23141.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto__){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto__){
return (function (state_23168){
var state_val_23169 = (state_23168[(1)]);
if((state_val_23169 === (7))){
var inst_23150 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
var statearr_23170_23197 = state_23168__$1;
(statearr_23170_23197[(2)] = inst_23150);

(statearr_23170_23197[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (1))){
var inst_23144 = cljs.core.seq.call(null,coll);
var inst_23145 = inst_23144;
var state_23168__$1 = (function (){var statearr_23171 = state_23168;
(statearr_23171[(7)] = inst_23145);

return statearr_23171;
})();
var statearr_23172_23198 = state_23168__$1;
(statearr_23172_23198[(2)] = null);

(statearr_23172_23198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (4))){
var inst_23145 = (state_23168[(7)]);
var inst_23148 = cljs.core.first.call(null,inst_23145);
var state_23168__$1 = state_23168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23168__$1,(7),ch,inst_23148);
} else {
if((state_val_23169 === (13))){
var inst_23162 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
var statearr_23173_23199 = state_23168__$1;
(statearr_23173_23199[(2)] = inst_23162);

(statearr_23173_23199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (6))){
var inst_23153 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
if(cljs.core.truth_(inst_23153)){
var statearr_23174_23200 = state_23168__$1;
(statearr_23174_23200[(1)] = (8));

} else {
var statearr_23175_23201 = state_23168__$1;
(statearr_23175_23201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (3))){
var inst_23166 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23168__$1,inst_23166);
} else {
if((state_val_23169 === (12))){
var state_23168__$1 = state_23168;
var statearr_23176_23202 = state_23168__$1;
(statearr_23176_23202[(2)] = null);

(statearr_23176_23202[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (2))){
var inst_23145 = (state_23168[(7)]);
var state_23168__$1 = state_23168;
if(cljs.core.truth_(inst_23145)){
var statearr_23177_23203 = state_23168__$1;
(statearr_23177_23203[(1)] = (4));

} else {
var statearr_23178_23204 = state_23168__$1;
(statearr_23178_23204[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (11))){
var inst_23159 = cljs.core.async.close_BANG_.call(null,ch);
var state_23168__$1 = state_23168;
var statearr_23179_23205 = state_23168__$1;
(statearr_23179_23205[(2)] = inst_23159);

(statearr_23179_23205[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (9))){
var state_23168__$1 = state_23168;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23180_23206 = state_23168__$1;
(statearr_23180_23206[(1)] = (11));

} else {
var statearr_23181_23207 = state_23168__$1;
(statearr_23181_23207[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (5))){
var inst_23145 = (state_23168[(7)]);
var state_23168__$1 = state_23168;
var statearr_23182_23208 = state_23168__$1;
(statearr_23182_23208[(2)] = inst_23145);

(statearr_23182_23208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (10))){
var inst_23164 = (state_23168[(2)]);
var state_23168__$1 = state_23168;
var statearr_23183_23209 = state_23168__$1;
(statearr_23183_23209[(2)] = inst_23164);

(statearr_23183_23209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23169 === (8))){
var inst_23145 = (state_23168[(7)]);
var inst_23155 = cljs.core.next.call(null,inst_23145);
var inst_23145__$1 = inst_23155;
var state_23168__$1 = (function (){var statearr_23184 = state_23168;
(statearr_23184[(7)] = inst_23145__$1);

return statearr_23184;
})();
var statearr_23185_23210 = state_23168__$1;
(statearr_23185_23210[(2)] = null);

(statearr_23185_23210[(1)] = (2));


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
});})(c__22348__auto__))
;
return ((function (switch__22236__auto__,c__22348__auto__){
return (function() {
var cljs$core$async$state_machine__22237__auto__ = null;
var cljs$core$async$state_machine__22237__auto____0 = (function (){
var statearr_23189 = [null,null,null,null,null,null,null,null];
(statearr_23189[(0)] = cljs$core$async$state_machine__22237__auto__);

(statearr_23189[(1)] = (1));

return statearr_23189;
});
var cljs$core$async$state_machine__22237__auto____1 = (function (state_23168){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_23168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e23190){if((e23190 instanceof Object)){
var ex__22240__auto__ = e23190;
var statearr_23191_23211 = state_23168;
(statearr_23191_23211[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23212 = state_23168;
state_23168 = G__23212;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$state_machine__22237__auto__ = function(state_23168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22237__auto____1.call(this,state_23168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22237__auto____0;
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22237__auto____1;
return cljs$core$async$state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto__))
})();
var state__22350__auto__ = (function (){var statearr_23192 = f__22349__auto__.call(null);
(statearr_23192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto__);

return statearr_23192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto__))
);

return c__22348__auto__;
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
var x__20310__auto__ = (((_ == null))?null:_);
var m__20311__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20310__auto__)]);
if(!((m__20311__auto__ == null))){
return m__20311__auto__.call(null,_);
} else {
var m__20311__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20311__auto____$1 == null))){
return m__20311__auto____$1.call(null,_);
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
var x__20310__auto__ = (((m == null))?null:m);
var m__20311__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20310__auto__)]);
if(!((m__20311__auto__ == null))){
return m__20311__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20311__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20311__auto____$1 == null))){
return m__20311__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__20310__auto__ = (((m == null))?null:m);
var m__20311__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20310__auto__)]);
if(!((m__20311__auto__ == null))){
return m__20311__auto__.call(null,m,ch);
} else {
var m__20311__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20311__auto____$1 == null))){
return m__20311__auto____$1.call(null,m,ch);
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
var x__20310__auto__ = (((m == null))?null:m);
var m__20311__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20310__auto__)]);
if(!((m__20311__auto__ == null))){
return m__20311__auto__.call(null,m);
} else {
var m__20311__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20311__auto____$1 == null))){
return m__20311__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async23434 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23434 = (function (mult,ch,cs,meta23435){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23435 = meta23435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23436,meta23435__$1){
var self__ = this;
var _23436__$1 = this;
return (new cljs.core.async.t_cljs$core$async23434(self__.mult,self__.ch,self__.cs,meta23435__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23434.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23436){
var self__ = this;
var _23436__$1 = this;
return self__.meta23435;
});})(cs))
;

cljs.core.async.t_cljs$core$async23434.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23434.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23434.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23434.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23434.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23434.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23434.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23435","meta23435",1889530533,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23434.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23434";

cljs.core.async.t_cljs$core$async23434.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20253__auto__,writer__20254__auto__,opt__20255__auto__){
return cljs.core._write.call(null,writer__20254__auto__,"cljs.core.async/t_cljs$core$async23434");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23434 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23434(mult__$1,ch__$1,cs__$1,meta23435){
return (new cljs.core.async.t_cljs$core$async23434(mult__$1,ch__$1,cs__$1,meta23435));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23434(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22348__auto___23655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto___23655,cs,m,dchan,dctr,done){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto___23655,cs,m,dchan,dctr,done){
return (function (state_23567){
var state_val_23568 = (state_23567[(1)]);
if((state_val_23568 === (7))){
var inst_23563 = (state_23567[(2)]);
var state_23567__$1 = state_23567;
var statearr_23569_23656 = state_23567__$1;
(statearr_23569_23656[(2)] = inst_23563);

(statearr_23569_23656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (20))){
var inst_23468 = (state_23567[(7)]);
var inst_23478 = cljs.core.first.call(null,inst_23468);
var inst_23479 = cljs.core.nth.call(null,inst_23478,(0),null);
var inst_23480 = cljs.core.nth.call(null,inst_23478,(1),null);
var state_23567__$1 = (function (){var statearr_23570 = state_23567;
(statearr_23570[(8)] = inst_23479);

return statearr_23570;
})();
if(cljs.core.truth_(inst_23480)){
var statearr_23571_23657 = state_23567__$1;
(statearr_23571_23657[(1)] = (22));

} else {
var statearr_23572_23658 = state_23567__$1;
(statearr_23572_23658[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (27))){
var inst_23439 = (state_23567[(9)]);
var inst_23510 = (state_23567[(10)]);
var inst_23508 = (state_23567[(11)]);
var inst_23515 = (state_23567[(12)]);
var inst_23515__$1 = cljs.core._nth.call(null,inst_23508,inst_23510);
var inst_23516 = cljs.core.async.put_BANG_.call(null,inst_23515__$1,inst_23439,done);
var state_23567__$1 = (function (){var statearr_23573 = state_23567;
(statearr_23573[(12)] = inst_23515__$1);

return statearr_23573;
})();
if(cljs.core.truth_(inst_23516)){
var statearr_23574_23659 = state_23567__$1;
(statearr_23574_23659[(1)] = (30));

} else {
var statearr_23575_23660 = state_23567__$1;
(statearr_23575_23660[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (1))){
var state_23567__$1 = state_23567;
var statearr_23576_23661 = state_23567__$1;
(statearr_23576_23661[(2)] = null);

(statearr_23576_23661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (24))){
var inst_23468 = (state_23567[(7)]);
var inst_23485 = (state_23567[(2)]);
var inst_23486 = cljs.core.next.call(null,inst_23468);
var inst_23448 = inst_23486;
var inst_23449 = null;
var inst_23450 = (0);
var inst_23451 = (0);
var state_23567__$1 = (function (){var statearr_23577 = state_23567;
(statearr_23577[(13)] = inst_23451);

(statearr_23577[(14)] = inst_23448);

(statearr_23577[(15)] = inst_23450);

(statearr_23577[(16)] = inst_23449);

(statearr_23577[(17)] = inst_23485);

return statearr_23577;
})();
var statearr_23578_23662 = state_23567__$1;
(statearr_23578_23662[(2)] = null);

(statearr_23578_23662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (39))){
var state_23567__$1 = state_23567;
var statearr_23582_23663 = state_23567__$1;
(statearr_23582_23663[(2)] = null);

(statearr_23582_23663[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (4))){
var inst_23439 = (state_23567[(9)]);
var inst_23439__$1 = (state_23567[(2)]);
var inst_23440 = (inst_23439__$1 == null);
var state_23567__$1 = (function (){var statearr_23583 = state_23567;
(statearr_23583[(9)] = inst_23439__$1);

return statearr_23583;
})();
if(cljs.core.truth_(inst_23440)){
var statearr_23584_23664 = state_23567__$1;
(statearr_23584_23664[(1)] = (5));

} else {
var statearr_23585_23665 = state_23567__$1;
(statearr_23585_23665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (15))){
var inst_23451 = (state_23567[(13)]);
var inst_23448 = (state_23567[(14)]);
var inst_23450 = (state_23567[(15)]);
var inst_23449 = (state_23567[(16)]);
var inst_23464 = (state_23567[(2)]);
var inst_23465 = (inst_23451 + (1));
var tmp23579 = inst_23448;
var tmp23580 = inst_23450;
var tmp23581 = inst_23449;
var inst_23448__$1 = tmp23579;
var inst_23449__$1 = tmp23581;
var inst_23450__$1 = tmp23580;
var inst_23451__$1 = inst_23465;
var state_23567__$1 = (function (){var statearr_23586 = state_23567;
(statearr_23586[(13)] = inst_23451__$1);

(statearr_23586[(14)] = inst_23448__$1);

(statearr_23586[(15)] = inst_23450__$1);

(statearr_23586[(18)] = inst_23464);

(statearr_23586[(16)] = inst_23449__$1);

return statearr_23586;
})();
var statearr_23587_23666 = state_23567__$1;
(statearr_23587_23666[(2)] = null);

(statearr_23587_23666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (21))){
var inst_23489 = (state_23567[(2)]);
var state_23567__$1 = state_23567;
var statearr_23591_23667 = state_23567__$1;
(statearr_23591_23667[(2)] = inst_23489);

(statearr_23591_23667[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (31))){
var inst_23515 = (state_23567[(12)]);
var inst_23519 = done.call(null,null);
var inst_23520 = cljs.core.async.untap_STAR_.call(null,m,inst_23515);
var state_23567__$1 = (function (){var statearr_23592 = state_23567;
(statearr_23592[(19)] = inst_23519);

return statearr_23592;
})();
var statearr_23593_23668 = state_23567__$1;
(statearr_23593_23668[(2)] = inst_23520);

(statearr_23593_23668[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (32))){
var inst_23507 = (state_23567[(20)]);
var inst_23509 = (state_23567[(21)]);
var inst_23510 = (state_23567[(10)]);
var inst_23508 = (state_23567[(11)]);
var inst_23522 = (state_23567[(2)]);
var inst_23523 = (inst_23510 + (1));
var tmp23588 = inst_23507;
var tmp23589 = inst_23509;
var tmp23590 = inst_23508;
var inst_23507__$1 = tmp23588;
var inst_23508__$1 = tmp23590;
var inst_23509__$1 = tmp23589;
var inst_23510__$1 = inst_23523;
var state_23567__$1 = (function (){var statearr_23594 = state_23567;
(statearr_23594[(22)] = inst_23522);

(statearr_23594[(20)] = inst_23507__$1);

(statearr_23594[(21)] = inst_23509__$1);

(statearr_23594[(10)] = inst_23510__$1);

(statearr_23594[(11)] = inst_23508__$1);

return statearr_23594;
})();
var statearr_23595_23669 = state_23567__$1;
(statearr_23595_23669[(2)] = null);

(statearr_23595_23669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (40))){
var inst_23535 = (state_23567[(23)]);
var inst_23539 = done.call(null,null);
var inst_23540 = cljs.core.async.untap_STAR_.call(null,m,inst_23535);
var state_23567__$1 = (function (){var statearr_23596 = state_23567;
(statearr_23596[(24)] = inst_23539);

return statearr_23596;
})();
var statearr_23597_23670 = state_23567__$1;
(statearr_23597_23670[(2)] = inst_23540);

(statearr_23597_23670[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (33))){
var inst_23526 = (state_23567[(25)]);
var inst_23528 = cljs.core.chunked_seq_QMARK_.call(null,inst_23526);
var state_23567__$1 = state_23567;
if(inst_23528){
var statearr_23598_23671 = state_23567__$1;
(statearr_23598_23671[(1)] = (36));

} else {
var statearr_23599_23672 = state_23567__$1;
(statearr_23599_23672[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (13))){
var inst_23458 = (state_23567[(26)]);
var inst_23461 = cljs.core.async.close_BANG_.call(null,inst_23458);
var state_23567__$1 = state_23567;
var statearr_23600_23673 = state_23567__$1;
(statearr_23600_23673[(2)] = inst_23461);

(statearr_23600_23673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (22))){
var inst_23479 = (state_23567[(8)]);
var inst_23482 = cljs.core.async.close_BANG_.call(null,inst_23479);
var state_23567__$1 = state_23567;
var statearr_23601_23674 = state_23567__$1;
(statearr_23601_23674[(2)] = inst_23482);

(statearr_23601_23674[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (36))){
var inst_23526 = (state_23567[(25)]);
var inst_23530 = cljs.core.chunk_first.call(null,inst_23526);
var inst_23531 = cljs.core.chunk_rest.call(null,inst_23526);
var inst_23532 = cljs.core.count.call(null,inst_23530);
var inst_23507 = inst_23531;
var inst_23508 = inst_23530;
var inst_23509 = inst_23532;
var inst_23510 = (0);
var state_23567__$1 = (function (){var statearr_23602 = state_23567;
(statearr_23602[(20)] = inst_23507);

(statearr_23602[(21)] = inst_23509);

(statearr_23602[(10)] = inst_23510);

(statearr_23602[(11)] = inst_23508);

return statearr_23602;
})();
var statearr_23603_23675 = state_23567__$1;
(statearr_23603_23675[(2)] = null);

(statearr_23603_23675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (41))){
var inst_23526 = (state_23567[(25)]);
var inst_23542 = (state_23567[(2)]);
var inst_23543 = cljs.core.next.call(null,inst_23526);
var inst_23507 = inst_23543;
var inst_23508 = null;
var inst_23509 = (0);
var inst_23510 = (0);
var state_23567__$1 = (function (){var statearr_23604 = state_23567;
(statearr_23604[(20)] = inst_23507);

(statearr_23604[(21)] = inst_23509);

(statearr_23604[(27)] = inst_23542);

(statearr_23604[(10)] = inst_23510);

(statearr_23604[(11)] = inst_23508);

return statearr_23604;
})();
var statearr_23605_23676 = state_23567__$1;
(statearr_23605_23676[(2)] = null);

(statearr_23605_23676[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (43))){
var state_23567__$1 = state_23567;
var statearr_23606_23677 = state_23567__$1;
(statearr_23606_23677[(2)] = null);

(statearr_23606_23677[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (29))){
var inst_23551 = (state_23567[(2)]);
var state_23567__$1 = state_23567;
var statearr_23607_23678 = state_23567__$1;
(statearr_23607_23678[(2)] = inst_23551);

(statearr_23607_23678[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (44))){
var inst_23560 = (state_23567[(2)]);
var state_23567__$1 = (function (){var statearr_23608 = state_23567;
(statearr_23608[(28)] = inst_23560);

return statearr_23608;
})();
var statearr_23609_23679 = state_23567__$1;
(statearr_23609_23679[(2)] = null);

(statearr_23609_23679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (6))){
var inst_23499 = (state_23567[(29)]);
var inst_23498 = cljs.core.deref.call(null,cs);
var inst_23499__$1 = cljs.core.keys.call(null,inst_23498);
var inst_23500 = cljs.core.count.call(null,inst_23499__$1);
var inst_23501 = cljs.core.reset_BANG_.call(null,dctr,inst_23500);
var inst_23506 = cljs.core.seq.call(null,inst_23499__$1);
var inst_23507 = inst_23506;
var inst_23508 = null;
var inst_23509 = (0);
var inst_23510 = (0);
var state_23567__$1 = (function (){var statearr_23610 = state_23567;
(statearr_23610[(30)] = inst_23501);

(statearr_23610[(20)] = inst_23507);

(statearr_23610[(29)] = inst_23499__$1);

(statearr_23610[(21)] = inst_23509);

(statearr_23610[(10)] = inst_23510);

(statearr_23610[(11)] = inst_23508);

return statearr_23610;
})();
var statearr_23611_23680 = state_23567__$1;
(statearr_23611_23680[(2)] = null);

(statearr_23611_23680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (28))){
var inst_23507 = (state_23567[(20)]);
var inst_23526 = (state_23567[(25)]);
var inst_23526__$1 = cljs.core.seq.call(null,inst_23507);
var state_23567__$1 = (function (){var statearr_23612 = state_23567;
(statearr_23612[(25)] = inst_23526__$1);

return statearr_23612;
})();
if(inst_23526__$1){
var statearr_23613_23681 = state_23567__$1;
(statearr_23613_23681[(1)] = (33));

} else {
var statearr_23614_23682 = state_23567__$1;
(statearr_23614_23682[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (25))){
var inst_23509 = (state_23567[(21)]);
var inst_23510 = (state_23567[(10)]);
var inst_23512 = (inst_23510 < inst_23509);
var inst_23513 = inst_23512;
var state_23567__$1 = state_23567;
if(cljs.core.truth_(inst_23513)){
var statearr_23615_23683 = state_23567__$1;
(statearr_23615_23683[(1)] = (27));

} else {
var statearr_23616_23684 = state_23567__$1;
(statearr_23616_23684[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (34))){
var state_23567__$1 = state_23567;
var statearr_23617_23685 = state_23567__$1;
(statearr_23617_23685[(2)] = null);

(statearr_23617_23685[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (17))){
var state_23567__$1 = state_23567;
var statearr_23618_23686 = state_23567__$1;
(statearr_23618_23686[(2)] = null);

(statearr_23618_23686[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (3))){
var inst_23565 = (state_23567[(2)]);
var state_23567__$1 = state_23567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23567__$1,inst_23565);
} else {
if((state_val_23568 === (12))){
var inst_23494 = (state_23567[(2)]);
var state_23567__$1 = state_23567;
var statearr_23619_23687 = state_23567__$1;
(statearr_23619_23687[(2)] = inst_23494);

(statearr_23619_23687[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (2))){
var state_23567__$1 = state_23567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23567__$1,(4),ch);
} else {
if((state_val_23568 === (23))){
var state_23567__$1 = state_23567;
var statearr_23620_23688 = state_23567__$1;
(statearr_23620_23688[(2)] = null);

(statearr_23620_23688[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (35))){
var inst_23549 = (state_23567[(2)]);
var state_23567__$1 = state_23567;
var statearr_23621_23689 = state_23567__$1;
(statearr_23621_23689[(2)] = inst_23549);

(statearr_23621_23689[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (19))){
var inst_23468 = (state_23567[(7)]);
var inst_23472 = cljs.core.chunk_first.call(null,inst_23468);
var inst_23473 = cljs.core.chunk_rest.call(null,inst_23468);
var inst_23474 = cljs.core.count.call(null,inst_23472);
var inst_23448 = inst_23473;
var inst_23449 = inst_23472;
var inst_23450 = inst_23474;
var inst_23451 = (0);
var state_23567__$1 = (function (){var statearr_23622 = state_23567;
(statearr_23622[(13)] = inst_23451);

(statearr_23622[(14)] = inst_23448);

(statearr_23622[(15)] = inst_23450);

(statearr_23622[(16)] = inst_23449);

return statearr_23622;
})();
var statearr_23623_23690 = state_23567__$1;
(statearr_23623_23690[(2)] = null);

(statearr_23623_23690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (11))){
var inst_23448 = (state_23567[(14)]);
var inst_23468 = (state_23567[(7)]);
var inst_23468__$1 = cljs.core.seq.call(null,inst_23448);
var state_23567__$1 = (function (){var statearr_23624 = state_23567;
(statearr_23624[(7)] = inst_23468__$1);

return statearr_23624;
})();
if(inst_23468__$1){
var statearr_23625_23691 = state_23567__$1;
(statearr_23625_23691[(1)] = (16));

} else {
var statearr_23626_23692 = state_23567__$1;
(statearr_23626_23692[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (9))){
var inst_23496 = (state_23567[(2)]);
var state_23567__$1 = state_23567;
var statearr_23627_23693 = state_23567__$1;
(statearr_23627_23693[(2)] = inst_23496);

(statearr_23627_23693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (5))){
var inst_23446 = cljs.core.deref.call(null,cs);
var inst_23447 = cljs.core.seq.call(null,inst_23446);
var inst_23448 = inst_23447;
var inst_23449 = null;
var inst_23450 = (0);
var inst_23451 = (0);
var state_23567__$1 = (function (){var statearr_23628 = state_23567;
(statearr_23628[(13)] = inst_23451);

(statearr_23628[(14)] = inst_23448);

(statearr_23628[(15)] = inst_23450);

(statearr_23628[(16)] = inst_23449);

return statearr_23628;
})();
var statearr_23629_23694 = state_23567__$1;
(statearr_23629_23694[(2)] = null);

(statearr_23629_23694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (14))){
var state_23567__$1 = state_23567;
var statearr_23630_23695 = state_23567__$1;
(statearr_23630_23695[(2)] = null);

(statearr_23630_23695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (45))){
var inst_23557 = (state_23567[(2)]);
var state_23567__$1 = state_23567;
var statearr_23631_23696 = state_23567__$1;
(statearr_23631_23696[(2)] = inst_23557);

(statearr_23631_23696[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (26))){
var inst_23499 = (state_23567[(29)]);
var inst_23553 = (state_23567[(2)]);
var inst_23554 = cljs.core.seq.call(null,inst_23499);
var state_23567__$1 = (function (){var statearr_23632 = state_23567;
(statearr_23632[(31)] = inst_23553);

return statearr_23632;
})();
if(inst_23554){
var statearr_23633_23697 = state_23567__$1;
(statearr_23633_23697[(1)] = (42));

} else {
var statearr_23634_23698 = state_23567__$1;
(statearr_23634_23698[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (16))){
var inst_23468 = (state_23567[(7)]);
var inst_23470 = cljs.core.chunked_seq_QMARK_.call(null,inst_23468);
var state_23567__$1 = state_23567;
if(inst_23470){
var statearr_23635_23699 = state_23567__$1;
(statearr_23635_23699[(1)] = (19));

} else {
var statearr_23636_23700 = state_23567__$1;
(statearr_23636_23700[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (38))){
var inst_23546 = (state_23567[(2)]);
var state_23567__$1 = state_23567;
var statearr_23637_23701 = state_23567__$1;
(statearr_23637_23701[(2)] = inst_23546);

(statearr_23637_23701[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (30))){
var state_23567__$1 = state_23567;
var statearr_23638_23702 = state_23567__$1;
(statearr_23638_23702[(2)] = null);

(statearr_23638_23702[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (10))){
var inst_23451 = (state_23567[(13)]);
var inst_23449 = (state_23567[(16)]);
var inst_23457 = cljs.core._nth.call(null,inst_23449,inst_23451);
var inst_23458 = cljs.core.nth.call(null,inst_23457,(0),null);
var inst_23459 = cljs.core.nth.call(null,inst_23457,(1),null);
var state_23567__$1 = (function (){var statearr_23639 = state_23567;
(statearr_23639[(26)] = inst_23458);

return statearr_23639;
})();
if(cljs.core.truth_(inst_23459)){
var statearr_23640_23703 = state_23567__$1;
(statearr_23640_23703[(1)] = (13));

} else {
var statearr_23641_23704 = state_23567__$1;
(statearr_23641_23704[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (18))){
var inst_23492 = (state_23567[(2)]);
var state_23567__$1 = state_23567;
var statearr_23642_23705 = state_23567__$1;
(statearr_23642_23705[(2)] = inst_23492);

(statearr_23642_23705[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (42))){
var state_23567__$1 = state_23567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23567__$1,(45),dchan);
} else {
if((state_val_23568 === (37))){
var inst_23439 = (state_23567[(9)]);
var inst_23535 = (state_23567[(23)]);
var inst_23526 = (state_23567[(25)]);
var inst_23535__$1 = cljs.core.first.call(null,inst_23526);
var inst_23536 = cljs.core.async.put_BANG_.call(null,inst_23535__$1,inst_23439,done);
var state_23567__$1 = (function (){var statearr_23643 = state_23567;
(statearr_23643[(23)] = inst_23535__$1);

return statearr_23643;
})();
if(cljs.core.truth_(inst_23536)){
var statearr_23644_23706 = state_23567__$1;
(statearr_23644_23706[(1)] = (39));

} else {
var statearr_23645_23707 = state_23567__$1;
(statearr_23645_23707[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (8))){
var inst_23451 = (state_23567[(13)]);
var inst_23450 = (state_23567[(15)]);
var inst_23453 = (inst_23451 < inst_23450);
var inst_23454 = inst_23453;
var state_23567__$1 = state_23567;
if(cljs.core.truth_(inst_23454)){
var statearr_23646_23708 = state_23567__$1;
(statearr_23646_23708[(1)] = (10));

} else {
var statearr_23647_23709 = state_23567__$1;
(statearr_23647_23709[(1)] = (11));

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
});})(c__22348__auto___23655,cs,m,dchan,dctr,done))
;
return ((function (switch__22236__auto__,c__22348__auto___23655,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22237__auto__ = null;
var cljs$core$async$mult_$_state_machine__22237__auto____0 = (function (){
var statearr_23651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23651[(0)] = cljs$core$async$mult_$_state_machine__22237__auto__);

(statearr_23651[(1)] = (1));

return statearr_23651;
});
var cljs$core$async$mult_$_state_machine__22237__auto____1 = (function (state_23567){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_23567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e23652){if((e23652 instanceof Object)){
var ex__22240__auto__ = e23652;
var statearr_23653_23710 = state_23567;
(statearr_23653_23710[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23711 = state_23567;
state_23567 = G__23711;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22237__auto__ = function(state_23567){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22237__auto____1.call(this,state_23567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22237__auto____0;
cljs$core$async$mult_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22237__auto____1;
return cljs$core$async$mult_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto___23655,cs,m,dchan,dctr,done))
})();
var state__22350__auto__ = (function (){var statearr_23654 = f__22349__auto__.call(null);
(statearr_23654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___23655);

return statearr_23654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto___23655,cs,m,dchan,dctr,done))
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
var args23712 = [];
var len__20713__auto___23715 = arguments.length;
var i__20714__auto___23716 = (0);
while(true){
if((i__20714__auto___23716 < len__20713__auto___23715)){
args23712.push((arguments[i__20714__auto___23716]));

var G__23717 = (i__20714__auto___23716 + (1));
i__20714__auto___23716 = G__23717;
continue;
} else {
}
break;
}

var G__23714 = args23712.length;
switch (G__23714) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23712.length)].join('')));

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
var x__20310__auto__ = (((m == null))?null:m);
var m__20311__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20310__auto__)]);
if(!((m__20311__auto__ == null))){
return m__20311__auto__.call(null,m,ch);
} else {
var m__20311__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20311__auto____$1 == null))){
return m__20311__auto____$1.call(null,m,ch);
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
var x__20310__auto__ = (((m == null))?null:m);
var m__20311__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20310__auto__)]);
if(!((m__20311__auto__ == null))){
return m__20311__auto__.call(null,m,ch);
} else {
var m__20311__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20311__auto____$1 == null))){
return m__20311__auto____$1.call(null,m,ch);
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
var x__20310__auto__ = (((m == null))?null:m);
var m__20311__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20310__auto__)]);
if(!((m__20311__auto__ == null))){
return m__20311__auto__.call(null,m);
} else {
var m__20311__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20311__auto____$1 == null))){
return m__20311__auto____$1.call(null,m);
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
var x__20310__auto__ = (((m == null))?null:m);
var m__20311__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20310__auto__)]);
if(!((m__20311__auto__ == null))){
return m__20311__auto__.call(null,m,state_map);
} else {
var m__20311__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20311__auto____$1 == null))){
return m__20311__auto____$1.call(null,m,state_map);
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
var x__20310__auto__ = (((m == null))?null:m);
var m__20311__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20310__auto__)]);
if(!((m__20311__auto__ == null))){
return m__20311__auto__.call(null,m,mode);
} else {
var m__20311__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20311__auto____$1 == null))){
return m__20311__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20720__auto__ = [];
var len__20713__auto___23729 = arguments.length;
var i__20714__auto___23730 = (0);
while(true){
if((i__20714__auto___23730 < len__20713__auto___23729)){
args__20720__auto__.push((arguments[i__20714__auto___23730]));

var G__23731 = (i__20714__auto___23730 + (1));
i__20714__auto___23730 = G__23731;
continue;
} else {
}
break;
}

var argseq__20721__auto__ = ((((3) < args__20720__auto__.length))?(new cljs.core.IndexedSeq(args__20720__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20721__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23723){
var map__23724 = p__23723;
var map__23724__$1 = ((((!((map__23724 == null)))?((((map__23724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23724):map__23724);
var opts = map__23724__$1;
var statearr_23726_23732 = state;
(statearr_23726_23732[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23724,map__23724__$1,opts){
return (function (val){
var statearr_23727_23733 = state;
(statearr_23727_23733[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23724,map__23724__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23728_23734 = state;
(statearr_23728_23734[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23719){
var G__23720 = cljs.core.first.call(null,seq23719);
var seq23719__$1 = cljs.core.next.call(null,seq23719);
var G__23721 = cljs.core.first.call(null,seq23719__$1);
var seq23719__$2 = cljs.core.next.call(null,seq23719__$1);
var G__23722 = cljs.core.first.call(null,seq23719__$2);
var seq23719__$3 = cljs.core.next.call(null,seq23719__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23720,G__23721,G__23722,seq23719__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23898 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23898 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23899){
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
this.meta23899 = meta23899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23900,meta23899__$1){
var self__ = this;
var _23900__$1 = this;
return (new cljs.core.async.t_cljs$core$async23898(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23899__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23898.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23900){
var self__ = this;
var _23900__$1 = this;
return self__.meta23899;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23898.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23898.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23898.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23898.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23898.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23898.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23898.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23898.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23898.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23899","meta23899",-1827306226,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23898";

cljs.core.async.t_cljs$core$async23898.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20253__auto__,writer__20254__auto__,opt__20255__auto__){
return cljs.core._write.call(null,writer__20254__auto__,"cljs.core.async/t_cljs$core$async23898");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23898 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23898(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23899){
return (new cljs.core.async.t_cljs$core$async23898(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23899));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23898(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22348__auto___24061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto___24061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto___24061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23998){
var state_val_23999 = (state_23998[(1)]);
if((state_val_23999 === (7))){
var inst_23916 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
var statearr_24000_24062 = state_23998__$1;
(statearr_24000_24062[(2)] = inst_23916);

(statearr_24000_24062[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (20))){
var inst_23928 = (state_23998[(7)]);
var state_23998__$1 = state_23998;
var statearr_24001_24063 = state_23998__$1;
(statearr_24001_24063[(2)] = inst_23928);

(statearr_24001_24063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (27))){
var state_23998__$1 = state_23998;
var statearr_24002_24064 = state_23998__$1;
(statearr_24002_24064[(2)] = null);

(statearr_24002_24064[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (1))){
var inst_23904 = (state_23998[(8)]);
var inst_23904__$1 = calc_state.call(null);
var inst_23906 = (inst_23904__$1 == null);
var inst_23907 = cljs.core.not.call(null,inst_23906);
var state_23998__$1 = (function (){var statearr_24003 = state_23998;
(statearr_24003[(8)] = inst_23904__$1);

return statearr_24003;
})();
if(inst_23907){
var statearr_24004_24065 = state_23998__$1;
(statearr_24004_24065[(1)] = (2));

} else {
var statearr_24005_24066 = state_23998__$1;
(statearr_24005_24066[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (24))){
var inst_23972 = (state_23998[(9)]);
var inst_23958 = (state_23998[(10)]);
var inst_23951 = (state_23998[(11)]);
var inst_23972__$1 = inst_23951.call(null,inst_23958);
var state_23998__$1 = (function (){var statearr_24006 = state_23998;
(statearr_24006[(9)] = inst_23972__$1);

return statearr_24006;
})();
if(cljs.core.truth_(inst_23972__$1)){
var statearr_24007_24067 = state_23998__$1;
(statearr_24007_24067[(1)] = (29));

} else {
var statearr_24008_24068 = state_23998__$1;
(statearr_24008_24068[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (4))){
var inst_23919 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
if(cljs.core.truth_(inst_23919)){
var statearr_24009_24069 = state_23998__$1;
(statearr_24009_24069[(1)] = (8));

} else {
var statearr_24010_24070 = state_23998__$1;
(statearr_24010_24070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (15))){
var inst_23945 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
if(cljs.core.truth_(inst_23945)){
var statearr_24011_24071 = state_23998__$1;
(statearr_24011_24071[(1)] = (19));

} else {
var statearr_24012_24072 = state_23998__$1;
(statearr_24012_24072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (21))){
var inst_23950 = (state_23998[(12)]);
var inst_23950__$1 = (state_23998[(2)]);
var inst_23951 = cljs.core.get.call(null,inst_23950__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23952 = cljs.core.get.call(null,inst_23950__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23953 = cljs.core.get.call(null,inst_23950__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23998__$1 = (function (){var statearr_24013 = state_23998;
(statearr_24013[(12)] = inst_23950__$1);

(statearr_24013[(13)] = inst_23952);

(statearr_24013[(11)] = inst_23951);

return statearr_24013;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23998__$1,(22),inst_23953);
} else {
if((state_val_23999 === (31))){
var inst_23980 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
if(cljs.core.truth_(inst_23980)){
var statearr_24014_24073 = state_23998__$1;
(statearr_24014_24073[(1)] = (32));

} else {
var statearr_24015_24074 = state_23998__$1;
(statearr_24015_24074[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (32))){
var inst_23957 = (state_23998[(14)]);
var state_23998__$1 = state_23998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23998__$1,(35),out,inst_23957);
} else {
if((state_val_23999 === (33))){
var inst_23950 = (state_23998[(12)]);
var inst_23928 = inst_23950;
var state_23998__$1 = (function (){var statearr_24016 = state_23998;
(statearr_24016[(7)] = inst_23928);

return statearr_24016;
})();
var statearr_24017_24075 = state_23998__$1;
(statearr_24017_24075[(2)] = null);

(statearr_24017_24075[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (13))){
var inst_23928 = (state_23998[(7)]);
var inst_23935 = inst_23928.cljs$lang$protocol_mask$partition0$;
var inst_23936 = (inst_23935 & (64));
var inst_23937 = inst_23928.cljs$core$ISeq$;
var inst_23938 = (inst_23936) || (inst_23937);
var state_23998__$1 = state_23998;
if(cljs.core.truth_(inst_23938)){
var statearr_24018_24076 = state_23998__$1;
(statearr_24018_24076[(1)] = (16));

} else {
var statearr_24019_24077 = state_23998__$1;
(statearr_24019_24077[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (22))){
var inst_23957 = (state_23998[(14)]);
var inst_23958 = (state_23998[(10)]);
var inst_23956 = (state_23998[(2)]);
var inst_23957__$1 = cljs.core.nth.call(null,inst_23956,(0),null);
var inst_23958__$1 = cljs.core.nth.call(null,inst_23956,(1),null);
var inst_23959 = (inst_23957__$1 == null);
var inst_23960 = cljs.core._EQ_.call(null,inst_23958__$1,change);
var inst_23961 = (inst_23959) || (inst_23960);
var state_23998__$1 = (function (){var statearr_24020 = state_23998;
(statearr_24020[(14)] = inst_23957__$1);

(statearr_24020[(10)] = inst_23958__$1);

return statearr_24020;
})();
if(cljs.core.truth_(inst_23961)){
var statearr_24021_24078 = state_23998__$1;
(statearr_24021_24078[(1)] = (23));

} else {
var statearr_24022_24079 = state_23998__$1;
(statearr_24022_24079[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (36))){
var inst_23950 = (state_23998[(12)]);
var inst_23928 = inst_23950;
var state_23998__$1 = (function (){var statearr_24023 = state_23998;
(statearr_24023[(7)] = inst_23928);

return statearr_24023;
})();
var statearr_24024_24080 = state_23998__$1;
(statearr_24024_24080[(2)] = null);

(statearr_24024_24080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (29))){
var inst_23972 = (state_23998[(9)]);
var state_23998__$1 = state_23998;
var statearr_24025_24081 = state_23998__$1;
(statearr_24025_24081[(2)] = inst_23972);

(statearr_24025_24081[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (6))){
var state_23998__$1 = state_23998;
var statearr_24026_24082 = state_23998__$1;
(statearr_24026_24082[(2)] = false);

(statearr_24026_24082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (28))){
var inst_23968 = (state_23998[(2)]);
var inst_23969 = calc_state.call(null);
var inst_23928 = inst_23969;
var state_23998__$1 = (function (){var statearr_24027 = state_23998;
(statearr_24027[(7)] = inst_23928);

(statearr_24027[(15)] = inst_23968);

return statearr_24027;
})();
var statearr_24028_24083 = state_23998__$1;
(statearr_24028_24083[(2)] = null);

(statearr_24028_24083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (25))){
var inst_23994 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
var statearr_24029_24084 = state_23998__$1;
(statearr_24029_24084[(2)] = inst_23994);

(statearr_24029_24084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (34))){
var inst_23992 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
var statearr_24030_24085 = state_23998__$1;
(statearr_24030_24085[(2)] = inst_23992);

(statearr_24030_24085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (17))){
var state_23998__$1 = state_23998;
var statearr_24031_24086 = state_23998__$1;
(statearr_24031_24086[(2)] = false);

(statearr_24031_24086[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (3))){
var state_23998__$1 = state_23998;
var statearr_24032_24087 = state_23998__$1;
(statearr_24032_24087[(2)] = false);

(statearr_24032_24087[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (12))){
var inst_23996 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23998__$1,inst_23996);
} else {
if((state_val_23999 === (2))){
var inst_23904 = (state_23998[(8)]);
var inst_23909 = inst_23904.cljs$lang$protocol_mask$partition0$;
var inst_23910 = (inst_23909 & (64));
var inst_23911 = inst_23904.cljs$core$ISeq$;
var inst_23912 = (inst_23910) || (inst_23911);
var state_23998__$1 = state_23998;
if(cljs.core.truth_(inst_23912)){
var statearr_24033_24088 = state_23998__$1;
(statearr_24033_24088[(1)] = (5));

} else {
var statearr_24034_24089 = state_23998__$1;
(statearr_24034_24089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (23))){
var inst_23957 = (state_23998[(14)]);
var inst_23963 = (inst_23957 == null);
var state_23998__$1 = state_23998;
if(cljs.core.truth_(inst_23963)){
var statearr_24035_24090 = state_23998__$1;
(statearr_24035_24090[(1)] = (26));

} else {
var statearr_24036_24091 = state_23998__$1;
(statearr_24036_24091[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (35))){
var inst_23983 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
if(cljs.core.truth_(inst_23983)){
var statearr_24037_24092 = state_23998__$1;
(statearr_24037_24092[(1)] = (36));

} else {
var statearr_24038_24093 = state_23998__$1;
(statearr_24038_24093[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (19))){
var inst_23928 = (state_23998[(7)]);
var inst_23947 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23928);
var state_23998__$1 = state_23998;
var statearr_24039_24094 = state_23998__$1;
(statearr_24039_24094[(2)] = inst_23947);

(statearr_24039_24094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (11))){
var inst_23928 = (state_23998[(7)]);
var inst_23932 = (inst_23928 == null);
var inst_23933 = cljs.core.not.call(null,inst_23932);
var state_23998__$1 = state_23998;
if(inst_23933){
var statearr_24040_24095 = state_23998__$1;
(statearr_24040_24095[(1)] = (13));

} else {
var statearr_24041_24096 = state_23998__$1;
(statearr_24041_24096[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (9))){
var inst_23904 = (state_23998[(8)]);
var state_23998__$1 = state_23998;
var statearr_24042_24097 = state_23998__$1;
(statearr_24042_24097[(2)] = inst_23904);

(statearr_24042_24097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (5))){
var state_23998__$1 = state_23998;
var statearr_24043_24098 = state_23998__$1;
(statearr_24043_24098[(2)] = true);

(statearr_24043_24098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (14))){
var state_23998__$1 = state_23998;
var statearr_24044_24099 = state_23998__$1;
(statearr_24044_24099[(2)] = false);

(statearr_24044_24099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (26))){
var inst_23958 = (state_23998[(10)]);
var inst_23965 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23958);
var state_23998__$1 = state_23998;
var statearr_24045_24100 = state_23998__$1;
(statearr_24045_24100[(2)] = inst_23965);

(statearr_24045_24100[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (16))){
var state_23998__$1 = state_23998;
var statearr_24046_24101 = state_23998__$1;
(statearr_24046_24101[(2)] = true);

(statearr_24046_24101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (38))){
var inst_23988 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
var statearr_24047_24102 = state_23998__$1;
(statearr_24047_24102[(2)] = inst_23988);

(statearr_24047_24102[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (30))){
var inst_23958 = (state_23998[(10)]);
var inst_23952 = (state_23998[(13)]);
var inst_23951 = (state_23998[(11)]);
var inst_23975 = cljs.core.empty_QMARK_.call(null,inst_23951);
var inst_23976 = inst_23952.call(null,inst_23958);
var inst_23977 = cljs.core.not.call(null,inst_23976);
var inst_23978 = (inst_23975) && (inst_23977);
var state_23998__$1 = state_23998;
var statearr_24048_24103 = state_23998__$1;
(statearr_24048_24103[(2)] = inst_23978);

(statearr_24048_24103[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (10))){
var inst_23904 = (state_23998[(8)]);
var inst_23924 = (state_23998[(2)]);
var inst_23925 = cljs.core.get.call(null,inst_23924,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23926 = cljs.core.get.call(null,inst_23924,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23927 = cljs.core.get.call(null,inst_23924,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23928 = inst_23904;
var state_23998__$1 = (function (){var statearr_24049 = state_23998;
(statearr_24049[(16)] = inst_23925);

(statearr_24049[(17)] = inst_23926);

(statearr_24049[(18)] = inst_23927);

(statearr_24049[(7)] = inst_23928);

return statearr_24049;
})();
var statearr_24050_24104 = state_23998__$1;
(statearr_24050_24104[(2)] = null);

(statearr_24050_24104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (18))){
var inst_23942 = (state_23998[(2)]);
var state_23998__$1 = state_23998;
var statearr_24051_24105 = state_23998__$1;
(statearr_24051_24105[(2)] = inst_23942);

(statearr_24051_24105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (37))){
var state_23998__$1 = state_23998;
var statearr_24052_24106 = state_23998__$1;
(statearr_24052_24106[(2)] = null);

(statearr_24052_24106[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23999 === (8))){
var inst_23904 = (state_23998[(8)]);
var inst_23921 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23904);
var state_23998__$1 = state_23998;
var statearr_24053_24107 = state_23998__$1;
(statearr_24053_24107[(2)] = inst_23921);

(statearr_24053_24107[(1)] = (10));


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
});})(c__22348__auto___24061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22236__auto__,c__22348__auto___24061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22237__auto__ = null;
var cljs$core$async$mix_$_state_machine__22237__auto____0 = (function (){
var statearr_24057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24057[(0)] = cljs$core$async$mix_$_state_machine__22237__auto__);

(statearr_24057[(1)] = (1));

return statearr_24057;
});
var cljs$core$async$mix_$_state_machine__22237__auto____1 = (function (state_23998){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_23998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e24058){if((e24058 instanceof Object)){
var ex__22240__auto__ = e24058;
var statearr_24059_24108 = state_23998;
(statearr_24059_24108[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24109 = state_23998;
state_23998 = G__24109;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22237__auto__ = function(state_23998){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22237__auto____1.call(this,state_23998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22237__auto____0;
cljs$core$async$mix_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22237__auto____1;
return cljs$core$async$mix_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto___24061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22350__auto__ = (function (){var statearr_24060 = f__22349__auto__.call(null);
(statearr_24060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___24061);

return statearr_24060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto___24061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__20310__auto__ = (((p == null))?null:p);
var m__20311__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20310__auto__)]);
if(!((m__20311__auto__ == null))){
return m__20311__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20311__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20311__auto____$1 == null))){
return m__20311__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__20310__auto__ = (((p == null))?null:p);
var m__20311__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20310__auto__)]);
if(!((m__20311__auto__ == null))){
return m__20311__auto__.call(null,p,v,ch);
} else {
var m__20311__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20311__auto____$1 == null))){
return m__20311__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24110 = [];
var len__20713__auto___24113 = arguments.length;
var i__20714__auto___24114 = (0);
while(true){
if((i__20714__auto___24114 < len__20713__auto___24113)){
args24110.push((arguments[i__20714__auto___24114]));

var G__24115 = (i__20714__auto___24114 + (1));
i__20714__auto___24114 = G__24115;
continue;
} else {
}
break;
}

var G__24112 = args24110.length;
switch (G__24112) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24110.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20310__auto__ = (((p == null))?null:p);
var m__20311__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20310__auto__)]);
if(!((m__20311__auto__ == null))){
return m__20311__auto__.call(null,p);
} else {
var m__20311__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20311__auto____$1 == null))){
return m__20311__auto____$1.call(null,p);
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
var x__20310__auto__ = (((p == null))?null:p);
var m__20311__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20310__auto__)]);
if(!((m__20311__auto__ == null))){
return m__20311__auto__.call(null,p,v);
} else {
var m__20311__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20311__auto____$1 == null))){
return m__20311__auto____$1.call(null,p,v);
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
var args24118 = [];
var len__20713__auto___24243 = arguments.length;
var i__20714__auto___24244 = (0);
while(true){
if((i__20714__auto___24244 < len__20713__auto___24243)){
args24118.push((arguments[i__20714__auto___24244]));

var G__24245 = (i__20714__auto___24244 + (1));
i__20714__auto___24244 = G__24245;
continue;
} else {
}
break;
}

var G__24120 = args24118.length;
switch (G__24120) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24118.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19655__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19655__auto__)){
return or__19655__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19655__auto__,mults){
return (function (p1__24117_SHARP_){
if(cljs.core.truth_(p1__24117_SHARP_.call(null,topic))){
return p1__24117_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24117_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19655__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24121 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24122){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24122 = meta24122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24123,meta24122__$1){
var self__ = this;
var _24123__$1 = this;
return (new cljs.core.async.t_cljs$core$async24121(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24122__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24123){
var self__ = this;
var _24123__$1 = this;
return self__.meta24122;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24121.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24121.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24122","meta24122",353845817,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24121";

cljs.core.async.t_cljs$core$async24121.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20253__auto__,writer__20254__auto__,opt__20255__auto__){
return cljs.core._write.call(null,writer__20254__auto__,"cljs.core.async/t_cljs$core$async24121");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24121 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24121(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24122){
return (new cljs.core.async.t_cljs$core$async24121(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24122));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24121(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22348__auto___24247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto___24247,mults,ensure_mult,p){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto___24247,mults,ensure_mult,p){
return (function (state_24195){
var state_val_24196 = (state_24195[(1)]);
if((state_val_24196 === (7))){
var inst_24191 = (state_24195[(2)]);
var state_24195__$1 = state_24195;
var statearr_24197_24248 = state_24195__$1;
(statearr_24197_24248[(2)] = inst_24191);

(statearr_24197_24248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (20))){
var state_24195__$1 = state_24195;
var statearr_24198_24249 = state_24195__$1;
(statearr_24198_24249[(2)] = null);

(statearr_24198_24249[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (1))){
var state_24195__$1 = state_24195;
var statearr_24199_24250 = state_24195__$1;
(statearr_24199_24250[(2)] = null);

(statearr_24199_24250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (24))){
var inst_24174 = (state_24195[(7)]);
var inst_24183 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24174);
var state_24195__$1 = state_24195;
var statearr_24200_24251 = state_24195__$1;
(statearr_24200_24251[(2)] = inst_24183);

(statearr_24200_24251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (4))){
var inst_24126 = (state_24195[(8)]);
var inst_24126__$1 = (state_24195[(2)]);
var inst_24127 = (inst_24126__$1 == null);
var state_24195__$1 = (function (){var statearr_24201 = state_24195;
(statearr_24201[(8)] = inst_24126__$1);

return statearr_24201;
})();
if(cljs.core.truth_(inst_24127)){
var statearr_24202_24252 = state_24195__$1;
(statearr_24202_24252[(1)] = (5));

} else {
var statearr_24203_24253 = state_24195__$1;
(statearr_24203_24253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (15))){
var inst_24168 = (state_24195[(2)]);
var state_24195__$1 = state_24195;
var statearr_24204_24254 = state_24195__$1;
(statearr_24204_24254[(2)] = inst_24168);

(statearr_24204_24254[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (21))){
var inst_24188 = (state_24195[(2)]);
var state_24195__$1 = (function (){var statearr_24205 = state_24195;
(statearr_24205[(9)] = inst_24188);

return statearr_24205;
})();
var statearr_24206_24255 = state_24195__$1;
(statearr_24206_24255[(2)] = null);

(statearr_24206_24255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (13))){
var inst_24150 = (state_24195[(10)]);
var inst_24152 = cljs.core.chunked_seq_QMARK_.call(null,inst_24150);
var state_24195__$1 = state_24195;
if(inst_24152){
var statearr_24207_24256 = state_24195__$1;
(statearr_24207_24256[(1)] = (16));

} else {
var statearr_24208_24257 = state_24195__$1;
(statearr_24208_24257[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (22))){
var inst_24180 = (state_24195[(2)]);
var state_24195__$1 = state_24195;
if(cljs.core.truth_(inst_24180)){
var statearr_24209_24258 = state_24195__$1;
(statearr_24209_24258[(1)] = (23));

} else {
var statearr_24210_24259 = state_24195__$1;
(statearr_24210_24259[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (6))){
var inst_24174 = (state_24195[(7)]);
var inst_24176 = (state_24195[(11)]);
var inst_24126 = (state_24195[(8)]);
var inst_24174__$1 = topic_fn.call(null,inst_24126);
var inst_24175 = cljs.core.deref.call(null,mults);
var inst_24176__$1 = cljs.core.get.call(null,inst_24175,inst_24174__$1);
var state_24195__$1 = (function (){var statearr_24211 = state_24195;
(statearr_24211[(7)] = inst_24174__$1);

(statearr_24211[(11)] = inst_24176__$1);

return statearr_24211;
})();
if(cljs.core.truth_(inst_24176__$1)){
var statearr_24212_24260 = state_24195__$1;
(statearr_24212_24260[(1)] = (19));

} else {
var statearr_24213_24261 = state_24195__$1;
(statearr_24213_24261[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (25))){
var inst_24185 = (state_24195[(2)]);
var state_24195__$1 = state_24195;
var statearr_24214_24262 = state_24195__$1;
(statearr_24214_24262[(2)] = inst_24185);

(statearr_24214_24262[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (17))){
var inst_24150 = (state_24195[(10)]);
var inst_24159 = cljs.core.first.call(null,inst_24150);
var inst_24160 = cljs.core.async.muxch_STAR_.call(null,inst_24159);
var inst_24161 = cljs.core.async.close_BANG_.call(null,inst_24160);
var inst_24162 = cljs.core.next.call(null,inst_24150);
var inst_24136 = inst_24162;
var inst_24137 = null;
var inst_24138 = (0);
var inst_24139 = (0);
var state_24195__$1 = (function (){var statearr_24215 = state_24195;
(statearr_24215[(12)] = inst_24138);

(statearr_24215[(13)] = inst_24137);

(statearr_24215[(14)] = inst_24139);

(statearr_24215[(15)] = inst_24161);

(statearr_24215[(16)] = inst_24136);

return statearr_24215;
})();
var statearr_24216_24263 = state_24195__$1;
(statearr_24216_24263[(2)] = null);

(statearr_24216_24263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (3))){
var inst_24193 = (state_24195[(2)]);
var state_24195__$1 = state_24195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24195__$1,inst_24193);
} else {
if((state_val_24196 === (12))){
var inst_24170 = (state_24195[(2)]);
var state_24195__$1 = state_24195;
var statearr_24217_24264 = state_24195__$1;
(statearr_24217_24264[(2)] = inst_24170);

(statearr_24217_24264[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (2))){
var state_24195__$1 = state_24195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24195__$1,(4),ch);
} else {
if((state_val_24196 === (23))){
var state_24195__$1 = state_24195;
var statearr_24218_24265 = state_24195__$1;
(statearr_24218_24265[(2)] = null);

(statearr_24218_24265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (19))){
var inst_24176 = (state_24195[(11)]);
var inst_24126 = (state_24195[(8)]);
var inst_24178 = cljs.core.async.muxch_STAR_.call(null,inst_24176);
var state_24195__$1 = state_24195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24195__$1,(22),inst_24178,inst_24126);
} else {
if((state_val_24196 === (11))){
var inst_24150 = (state_24195[(10)]);
var inst_24136 = (state_24195[(16)]);
var inst_24150__$1 = cljs.core.seq.call(null,inst_24136);
var state_24195__$1 = (function (){var statearr_24219 = state_24195;
(statearr_24219[(10)] = inst_24150__$1);

return statearr_24219;
})();
if(inst_24150__$1){
var statearr_24220_24266 = state_24195__$1;
(statearr_24220_24266[(1)] = (13));

} else {
var statearr_24221_24267 = state_24195__$1;
(statearr_24221_24267[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (9))){
var inst_24172 = (state_24195[(2)]);
var state_24195__$1 = state_24195;
var statearr_24222_24268 = state_24195__$1;
(statearr_24222_24268[(2)] = inst_24172);

(statearr_24222_24268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (5))){
var inst_24133 = cljs.core.deref.call(null,mults);
var inst_24134 = cljs.core.vals.call(null,inst_24133);
var inst_24135 = cljs.core.seq.call(null,inst_24134);
var inst_24136 = inst_24135;
var inst_24137 = null;
var inst_24138 = (0);
var inst_24139 = (0);
var state_24195__$1 = (function (){var statearr_24223 = state_24195;
(statearr_24223[(12)] = inst_24138);

(statearr_24223[(13)] = inst_24137);

(statearr_24223[(14)] = inst_24139);

(statearr_24223[(16)] = inst_24136);

return statearr_24223;
})();
var statearr_24224_24269 = state_24195__$1;
(statearr_24224_24269[(2)] = null);

(statearr_24224_24269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (14))){
var state_24195__$1 = state_24195;
var statearr_24228_24270 = state_24195__$1;
(statearr_24228_24270[(2)] = null);

(statearr_24228_24270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (16))){
var inst_24150 = (state_24195[(10)]);
var inst_24154 = cljs.core.chunk_first.call(null,inst_24150);
var inst_24155 = cljs.core.chunk_rest.call(null,inst_24150);
var inst_24156 = cljs.core.count.call(null,inst_24154);
var inst_24136 = inst_24155;
var inst_24137 = inst_24154;
var inst_24138 = inst_24156;
var inst_24139 = (0);
var state_24195__$1 = (function (){var statearr_24229 = state_24195;
(statearr_24229[(12)] = inst_24138);

(statearr_24229[(13)] = inst_24137);

(statearr_24229[(14)] = inst_24139);

(statearr_24229[(16)] = inst_24136);

return statearr_24229;
})();
var statearr_24230_24271 = state_24195__$1;
(statearr_24230_24271[(2)] = null);

(statearr_24230_24271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (10))){
var inst_24138 = (state_24195[(12)]);
var inst_24137 = (state_24195[(13)]);
var inst_24139 = (state_24195[(14)]);
var inst_24136 = (state_24195[(16)]);
var inst_24144 = cljs.core._nth.call(null,inst_24137,inst_24139);
var inst_24145 = cljs.core.async.muxch_STAR_.call(null,inst_24144);
var inst_24146 = cljs.core.async.close_BANG_.call(null,inst_24145);
var inst_24147 = (inst_24139 + (1));
var tmp24225 = inst_24138;
var tmp24226 = inst_24137;
var tmp24227 = inst_24136;
var inst_24136__$1 = tmp24227;
var inst_24137__$1 = tmp24226;
var inst_24138__$1 = tmp24225;
var inst_24139__$1 = inst_24147;
var state_24195__$1 = (function (){var statearr_24231 = state_24195;
(statearr_24231[(12)] = inst_24138__$1);

(statearr_24231[(13)] = inst_24137__$1);

(statearr_24231[(14)] = inst_24139__$1);

(statearr_24231[(17)] = inst_24146);

(statearr_24231[(16)] = inst_24136__$1);

return statearr_24231;
})();
var statearr_24232_24272 = state_24195__$1;
(statearr_24232_24272[(2)] = null);

(statearr_24232_24272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (18))){
var inst_24165 = (state_24195[(2)]);
var state_24195__$1 = state_24195;
var statearr_24233_24273 = state_24195__$1;
(statearr_24233_24273[(2)] = inst_24165);

(statearr_24233_24273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24196 === (8))){
var inst_24138 = (state_24195[(12)]);
var inst_24139 = (state_24195[(14)]);
var inst_24141 = (inst_24139 < inst_24138);
var inst_24142 = inst_24141;
var state_24195__$1 = state_24195;
if(cljs.core.truth_(inst_24142)){
var statearr_24234_24274 = state_24195__$1;
(statearr_24234_24274[(1)] = (10));

} else {
var statearr_24235_24275 = state_24195__$1;
(statearr_24235_24275[(1)] = (11));

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
});})(c__22348__auto___24247,mults,ensure_mult,p))
;
return ((function (switch__22236__auto__,c__22348__auto___24247,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22237__auto__ = null;
var cljs$core$async$state_machine__22237__auto____0 = (function (){
var statearr_24239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24239[(0)] = cljs$core$async$state_machine__22237__auto__);

(statearr_24239[(1)] = (1));

return statearr_24239;
});
var cljs$core$async$state_machine__22237__auto____1 = (function (state_24195){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_24195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e24240){if((e24240 instanceof Object)){
var ex__22240__auto__ = e24240;
var statearr_24241_24276 = state_24195;
(statearr_24241_24276[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24277 = state_24195;
state_24195 = G__24277;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$state_machine__22237__auto__ = function(state_24195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22237__auto____1.call(this,state_24195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22237__auto____0;
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22237__auto____1;
return cljs$core$async$state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto___24247,mults,ensure_mult,p))
})();
var state__22350__auto__ = (function (){var statearr_24242 = f__22349__auto__.call(null);
(statearr_24242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___24247);

return statearr_24242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto___24247,mults,ensure_mult,p))
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
var args24278 = [];
var len__20713__auto___24281 = arguments.length;
var i__20714__auto___24282 = (0);
while(true){
if((i__20714__auto___24282 < len__20713__auto___24281)){
args24278.push((arguments[i__20714__auto___24282]));

var G__24283 = (i__20714__auto___24282 + (1));
i__20714__auto___24282 = G__24283;
continue;
} else {
}
break;
}

var G__24280 = args24278.length;
switch (G__24280) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24278.length)].join('')));

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
var args24285 = [];
var len__20713__auto___24288 = arguments.length;
var i__20714__auto___24289 = (0);
while(true){
if((i__20714__auto___24289 < len__20713__auto___24288)){
args24285.push((arguments[i__20714__auto___24289]));

var G__24290 = (i__20714__auto___24289 + (1));
i__20714__auto___24289 = G__24290;
continue;
} else {
}
break;
}

var G__24287 = args24285.length;
switch (G__24287) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24285.length)].join('')));

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
var args24292 = [];
var len__20713__auto___24363 = arguments.length;
var i__20714__auto___24364 = (0);
while(true){
if((i__20714__auto___24364 < len__20713__auto___24363)){
args24292.push((arguments[i__20714__auto___24364]));

var G__24365 = (i__20714__auto___24364 + (1));
i__20714__auto___24364 = G__24365;
continue;
} else {
}
break;
}

var G__24294 = args24292.length;
switch (G__24294) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24292.length)].join('')));

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
var c__22348__auto___24367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto___24367,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto___24367,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24333){
var state_val_24334 = (state_24333[(1)]);
if((state_val_24334 === (7))){
var state_24333__$1 = state_24333;
var statearr_24335_24368 = state_24333__$1;
(statearr_24335_24368[(2)] = null);

(statearr_24335_24368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (1))){
var state_24333__$1 = state_24333;
var statearr_24336_24369 = state_24333__$1;
(statearr_24336_24369[(2)] = null);

(statearr_24336_24369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (4))){
var inst_24297 = (state_24333[(7)]);
var inst_24299 = (inst_24297 < cnt);
var state_24333__$1 = state_24333;
if(cljs.core.truth_(inst_24299)){
var statearr_24337_24370 = state_24333__$1;
(statearr_24337_24370[(1)] = (6));

} else {
var statearr_24338_24371 = state_24333__$1;
(statearr_24338_24371[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (15))){
var inst_24329 = (state_24333[(2)]);
var state_24333__$1 = state_24333;
var statearr_24339_24372 = state_24333__$1;
(statearr_24339_24372[(2)] = inst_24329);

(statearr_24339_24372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (13))){
var inst_24322 = cljs.core.async.close_BANG_.call(null,out);
var state_24333__$1 = state_24333;
var statearr_24340_24373 = state_24333__$1;
(statearr_24340_24373[(2)] = inst_24322);

(statearr_24340_24373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (6))){
var state_24333__$1 = state_24333;
var statearr_24341_24374 = state_24333__$1;
(statearr_24341_24374[(2)] = null);

(statearr_24341_24374[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (3))){
var inst_24331 = (state_24333[(2)]);
var state_24333__$1 = state_24333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24333__$1,inst_24331);
} else {
if((state_val_24334 === (12))){
var inst_24319 = (state_24333[(8)]);
var inst_24319__$1 = (state_24333[(2)]);
var inst_24320 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24319__$1);
var state_24333__$1 = (function (){var statearr_24342 = state_24333;
(statearr_24342[(8)] = inst_24319__$1);

return statearr_24342;
})();
if(cljs.core.truth_(inst_24320)){
var statearr_24343_24375 = state_24333__$1;
(statearr_24343_24375[(1)] = (13));

} else {
var statearr_24344_24376 = state_24333__$1;
(statearr_24344_24376[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (2))){
var inst_24296 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24297 = (0);
var state_24333__$1 = (function (){var statearr_24345 = state_24333;
(statearr_24345[(7)] = inst_24297);

(statearr_24345[(9)] = inst_24296);

return statearr_24345;
})();
var statearr_24346_24377 = state_24333__$1;
(statearr_24346_24377[(2)] = null);

(statearr_24346_24377[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (11))){
var inst_24297 = (state_24333[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24333,(10),Object,null,(9));
var inst_24306 = chs__$1.call(null,inst_24297);
var inst_24307 = done.call(null,inst_24297);
var inst_24308 = cljs.core.async.take_BANG_.call(null,inst_24306,inst_24307);
var state_24333__$1 = state_24333;
var statearr_24347_24378 = state_24333__$1;
(statearr_24347_24378[(2)] = inst_24308);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24333__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (9))){
var inst_24297 = (state_24333[(7)]);
var inst_24310 = (state_24333[(2)]);
var inst_24311 = (inst_24297 + (1));
var inst_24297__$1 = inst_24311;
var state_24333__$1 = (function (){var statearr_24348 = state_24333;
(statearr_24348[(7)] = inst_24297__$1);

(statearr_24348[(10)] = inst_24310);

return statearr_24348;
})();
var statearr_24349_24379 = state_24333__$1;
(statearr_24349_24379[(2)] = null);

(statearr_24349_24379[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (5))){
var inst_24317 = (state_24333[(2)]);
var state_24333__$1 = (function (){var statearr_24350 = state_24333;
(statearr_24350[(11)] = inst_24317);

return statearr_24350;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24333__$1,(12),dchan);
} else {
if((state_val_24334 === (14))){
var inst_24319 = (state_24333[(8)]);
var inst_24324 = cljs.core.apply.call(null,f,inst_24319);
var state_24333__$1 = state_24333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24333__$1,(16),out,inst_24324);
} else {
if((state_val_24334 === (16))){
var inst_24326 = (state_24333[(2)]);
var state_24333__$1 = (function (){var statearr_24351 = state_24333;
(statearr_24351[(12)] = inst_24326);

return statearr_24351;
})();
var statearr_24352_24380 = state_24333__$1;
(statearr_24352_24380[(2)] = null);

(statearr_24352_24380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (10))){
var inst_24301 = (state_24333[(2)]);
var inst_24302 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24333__$1 = (function (){var statearr_24353 = state_24333;
(statearr_24353[(13)] = inst_24301);

return statearr_24353;
})();
var statearr_24354_24381 = state_24333__$1;
(statearr_24354_24381[(2)] = inst_24302);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24333__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24334 === (8))){
var inst_24315 = (state_24333[(2)]);
var state_24333__$1 = state_24333;
var statearr_24355_24382 = state_24333__$1;
(statearr_24355_24382[(2)] = inst_24315);

(statearr_24355_24382[(1)] = (5));


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
});})(c__22348__auto___24367,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22236__auto__,c__22348__auto___24367,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22237__auto__ = null;
var cljs$core$async$state_machine__22237__auto____0 = (function (){
var statearr_24359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24359[(0)] = cljs$core$async$state_machine__22237__auto__);

(statearr_24359[(1)] = (1));

return statearr_24359;
});
var cljs$core$async$state_machine__22237__auto____1 = (function (state_24333){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_24333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e24360){if((e24360 instanceof Object)){
var ex__22240__auto__ = e24360;
var statearr_24361_24383 = state_24333;
(statearr_24361_24383[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24384 = state_24333;
state_24333 = G__24384;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$state_machine__22237__auto__ = function(state_24333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22237__auto____1.call(this,state_24333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22237__auto____0;
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22237__auto____1;
return cljs$core$async$state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto___24367,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22350__auto__ = (function (){var statearr_24362 = f__22349__auto__.call(null);
(statearr_24362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___24367);

return statearr_24362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto___24367,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24386 = [];
var len__20713__auto___24442 = arguments.length;
var i__20714__auto___24443 = (0);
while(true){
if((i__20714__auto___24443 < len__20713__auto___24442)){
args24386.push((arguments[i__20714__auto___24443]));

var G__24444 = (i__20714__auto___24443 + (1));
i__20714__auto___24443 = G__24444;
continue;
} else {
}
break;
}

var G__24388 = args24386.length;
switch (G__24388) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24386.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22348__auto___24446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto___24446,out){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto___24446,out){
return (function (state_24418){
var state_val_24419 = (state_24418[(1)]);
if((state_val_24419 === (7))){
var inst_24397 = (state_24418[(7)]);
var inst_24398 = (state_24418[(8)]);
var inst_24397__$1 = (state_24418[(2)]);
var inst_24398__$1 = cljs.core.nth.call(null,inst_24397__$1,(0),null);
var inst_24399 = cljs.core.nth.call(null,inst_24397__$1,(1),null);
var inst_24400 = (inst_24398__$1 == null);
var state_24418__$1 = (function (){var statearr_24420 = state_24418;
(statearr_24420[(7)] = inst_24397__$1);

(statearr_24420[(8)] = inst_24398__$1);

(statearr_24420[(9)] = inst_24399);

return statearr_24420;
})();
if(cljs.core.truth_(inst_24400)){
var statearr_24421_24447 = state_24418__$1;
(statearr_24421_24447[(1)] = (8));

} else {
var statearr_24422_24448 = state_24418__$1;
(statearr_24422_24448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (1))){
var inst_24389 = cljs.core.vec.call(null,chs);
var inst_24390 = inst_24389;
var state_24418__$1 = (function (){var statearr_24423 = state_24418;
(statearr_24423[(10)] = inst_24390);

return statearr_24423;
})();
var statearr_24424_24449 = state_24418__$1;
(statearr_24424_24449[(2)] = null);

(statearr_24424_24449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (4))){
var inst_24390 = (state_24418[(10)]);
var state_24418__$1 = state_24418;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24418__$1,(7),inst_24390);
} else {
if((state_val_24419 === (6))){
var inst_24414 = (state_24418[(2)]);
var state_24418__$1 = state_24418;
var statearr_24425_24450 = state_24418__$1;
(statearr_24425_24450[(2)] = inst_24414);

(statearr_24425_24450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (3))){
var inst_24416 = (state_24418[(2)]);
var state_24418__$1 = state_24418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24418__$1,inst_24416);
} else {
if((state_val_24419 === (2))){
var inst_24390 = (state_24418[(10)]);
var inst_24392 = cljs.core.count.call(null,inst_24390);
var inst_24393 = (inst_24392 > (0));
var state_24418__$1 = state_24418;
if(cljs.core.truth_(inst_24393)){
var statearr_24427_24451 = state_24418__$1;
(statearr_24427_24451[(1)] = (4));

} else {
var statearr_24428_24452 = state_24418__$1;
(statearr_24428_24452[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (11))){
var inst_24390 = (state_24418[(10)]);
var inst_24407 = (state_24418[(2)]);
var tmp24426 = inst_24390;
var inst_24390__$1 = tmp24426;
var state_24418__$1 = (function (){var statearr_24429 = state_24418;
(statearr_24429[(11)] = inst_24407);

(statearr_24429[(10)] = inst_24390__$1);

return statearr_24429;
})();
var statearr_24430_24453 = state_24418__$1;
(statearr_24430_24453[(2)] = null);

(statearr_24430_24453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (9))){
var inst_24398 = (state_24418[(8)]);
var state_24418__$1 = state_24418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24418__$1,(11),out,inst_24398);
} else {
if((state_val_24419 === (5))){
var inst_24412 = cljs.core.async.close_BANG_.call(null,out);
var state_24418__$1 = state_24418;
var statearr_24431_24454 = state_24418__$1;
(statearr_24431_24454[(2)] = inst_24412);

(statearr_24431_24454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (10))){
var inst_24410 = (state_24418[(2)]);
var state_24418__$1 = state_24418;
var statearr_24432_24455 = state_24418__$1;
(statearr_24432_24455[(2)] = inst_24410);

(statearr_24432_24455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24419 === (8))){
var inst_24397 = (state_24418[(7)]);
var inst_24398 = (state_24418[(8)]);
var inst_24390 = (state_24418[(10)]);
var inst_24399 = (state_24418[(9)]);
var inst_24402 = (function (){var cs = inst_24390;
var vec__24395 = inst_24397;
var v = inst_24398;
var c = inst_24399;
return ((function (cs,vec__24395,v,c,inst_24397,inst_24398,inst_24390,inst_24399,state_val_24419,c__22348__auto___24446,out){
return (function (p1__24385_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24385_SHARP_);
});
;})(cs,vec__24395,v,c,inst_24397,inst_24398,inst_24390,inst_24399,state_val_24419,c__22348__auto___24446,out))
})();
var inst_24403 = cljs.core.filterv.call(null,inst_24402,inst_24390);
var inst_24390__$1 = inst_24403;
var state_24418__$1 = (function (){var statearr_24433 = state_24418;
(statearr_24433[(10)] = inst_24390__$1);

return statearr_24433;
})();
var statearr_24434_24456 = state_24418__$1;
(statearr_24434_24456[(2)] = null);

(statearr_24434_24456[(1)] = (2));


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
});})(c__22348__auto___24446,out))
;
return ((function (switch__22236__auto__,c__22348__auto___24446,out){
return (function() {
var cljs$core$async$state_machine__22237__auto__ = null;
var cljs$core$async$state_machine__22237__auto____0 = (function (){
var statearr_24438 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24438[(0)] = cljs$core$async$state_machine__22237__auto__);

(statearr_24438[(1)] = (1));

return statearr_24438;
});
var cljs$core$async$state_machine__22237__auto____1 = (function (state_24418){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_24418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e24439){if((e24439 instanceof Object)){
var ex__22240__auto__ = e24439;
var statearr_24440_24457 = state_24418;
(statearr_24440_24457[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24458 = state_24418;
state_24418 = G__24458;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$state_machine__22237__auto__ = function(state_24418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22237__auto____1.call(this,state_24418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22237__auto____0;
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22237__auto____1;
return cljs$core$async$state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto___24446,out))
})();
var state__22350__auto__ = (function (){var statearr_24441 = f__22349__auto__.call(null);
(statearr_24441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___24446);

return statearr_24441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto___24446,out))
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
var args24459 = [];
var len__20713__auto___24508 = arguments.length;
var i__20714__auto___24509 = (0);
while(true){
if((i__20714__auto___24509 < len__20713__auto___24508)){
args24459.push((arguments[i__20714__auto___24509]));

var G__24510 = (i__20714__auto___24509 + (1));
i__20714__auto___24509 = G__24510;
continue;
} else {
}
break;
}

var G__24461 = args24459.length;
switch (G__24461) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24459.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22348__auto___24512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto___24512,out){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto___24512,out){
return (function (state_24485){
var state_val_24486 = (state_24485[(1)]);
if((state_val_24486 === (7))){
var inst_24467 = (state_24485[(7)]);
var inst_24467__$1 = (state_24485[(2)]);
var inst_24468 = (inst_24467__$1 == null);
var inst_24469 = cljs.core.not.call(null,inst_24468);
var state_24485__$1 = (function (){var statearr_24487 = state_24485;
(statearr_24487[(7)] = inst_24467__$1);

return statearr_24487;
})();
if(inst_24469){
var statearr_24488_24513 = state_24485__$1;
(statearr_24488_24513[(1)] = (8));

} else {
var statearr_24489_24514 = state_24485__$1;
(statearr_24489_24514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (1))){
var inst_24462 = (0);
var state_24485__$1 = (function (){var statearr_24490 = state_24485;
(statearr_24490[(8)] = inst_24462);

return statearr_24490;
})();
var statearr_24491_24515 = state_24485__$1;
(statearr_24491_24515[(2)] = null);

(statearr_24491_24515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (4))){
var state_24485__$1 = state_24485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24485__$1,(7),ch);
} else {
if((state_val_24486 === (6))){
var inst_24480 = (state_24485[(2)]);
var state_24485__$1 = state_24485;
var statearr_24492_24516 = state_24485__$1;
(statearr_24492_24516[(2)] = inst_24480);

(statearr_24492_24516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (3))){
var inst_24482 = (state_24485[(2)]);
var inst_24483 = cljs.core.async.close_BANG_.call(null,out);
var state_24485__$1 = (function (){var statearr_24493 = state_24485;
(statearr_24493[(9)] = inst_24482);

return statearr_24493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24485__$1,inst_24483);
} else {
if((state_val_24486 === (2))){
var inst_24462 = (state_24485[(8)]);
var inst_24464 = (inst_24462 < n);
var state_24485__$1 = state_24485;
if(cljs.core.truth_(inst_24464)){
var statearr_24494_24517 = state_24485__$1;
(statearr_24494_24517[(1)] = (4));

} else {
var statearr_24495_24518 = state_24485__$1;
(statearr_24495_24518[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (11))){
var inst_24462 = (state_24485[(8)]);
var inst_24472 = (state_24485[(2)]);
var inst_24473 = (inst_24462 + (1));
var inst_24462__$1 = inst_24473;
var state_24485__$1 = (function (){var statearr_24496 = state_24485;
(statearr_24496[(10)] = inst_24472);

(statearr_24496[(8)] = inst_24462__$1);

return statearr_24496;
})();
var statearr_24497_24519 = state_24485__$1;
(statearr_24497_24519[(2)] = null);

(statearr_24497_24519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (9))){
var state_24485__$1 = state_24485;
var statearr_24498_24520 = state_24485__$1;
(statearr_24498_24520[(2)] = null);

(statearr_24498_24520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (5))){
var state_24485__$1 = state_24485;
var statearr_24499_24521 = state_24485__$1;
(statearr_24499_24521[(2)] = null);

(statearr_24499_24521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (10))){
var inst_24477 = (state_24485[(2)]);
var state_24485__$1 = state_24485;
var statearr_24500_24522 = state_24485__$1;
(statearr_24500_24522[(2)] = inst_24477);

(statearr_24500_24522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24486 === (8))){
var inst_24467 = (state_24485[(7)]);
var state_24485__$1 = state_24485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24485__$1,(11),out,inst_24467);
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
});})(c__22348__auto___24512,out))
;
return ((function (switch__22236__auto__,c__22348__auto___24512,out){
return (function() {
var cljs$core$async$state_machine__22237__auto__ = null;
var cljs$core$async$state_machine__22237__auto____0 = (function (){
var statearr_24504 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24504[(0)] = cljs$core$async$state_machine__22237__auto__);

(statearr_24504[(1)] = (1));

return statearr_24504;
});
var cljs$core$async$state_machine__22237__auto____1 = (function (state_24485){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_24485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e24505){if((e24505 instanceof Object)){
var ex__22240__auto__ = e24505;
var statearr_24506_24523 = state_24485;
(statearr_24506_24523[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24524 = state_24485;
state_24485 = G__24524;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$state_machine__22237__auto__ = function(state_24485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22237__auto____1.call(this,state_24485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22237__auto____0;
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22237__auto____1;
return cljs$core$async$state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto___24512,out))
})();
var state__22350__auto__ = (function (){var statearr_24507 = f__22349__auto__.call(null);
(statearr_24507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___24512);

return statearr_24507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto___24512,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24532 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24532 = (function (map_LT_,f,ch,meta24533){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24533 = meta24533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24534,meta24533__$1){
var self__ = this;
var _24534__$1 = this;
return (new cljs.core.async.t_cljs$core$async24532(self__.map_LT_,self__.f,self__.ch,meta24533__$1));
});

cljs.core.async.t_cljs$core$async24532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24534){
var self__ = this;
var _24534__$1 = this;
return self__.meta24533;
});

cljs.core.async.t_cljs$core$async24532.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24532.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24532.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24532.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24532.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24535 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24535 = (function (map_LT_,f,ch,meta24533,_,fn1,meta24536){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24533 = meta24533;
this._ = _;
this.fn1 = fn1;
this.meta24536 = meta24536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24537,meta24536__$1){
var self__ = this;
var _24537__$1 = this;
return (new cljs.core.async.t_cljs$core$async24535(self__.map_LT_,self__.f,self__.ch,self__.meta24533,self__._,self__.fn1,meta24536__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24537){
var self__ = this;
var _24537__$1 = this;
return self__.meta24536;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24535.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24525_SHARP_){
return f1.call(null,(((p1__24525_SHARP_ == null))?null:self__.f.call(null,p1__24525_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24535.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24533","meta24533",-1418633735,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24532","cljs.core.async/t_cljs$core$async24532",530788799,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24536","meta24536",1693354587,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24535";

cljs.core.async.t_cljs$core$async24535.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20253__auto__,writer__20254__auto__,opt__20255__auto__){
return cljs.core._write.call(null,writer__20254__auto__,"cljs.core.async/t_cljs$core$async24535");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24535 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24535(map_LT___$1,f__$1,ch__$1,meta24533__$1,___$2,fn1__$1,meta24536){
return (new cljs.core.async.t_cljs$core$async24535(map_LT___$1,f__$1,ch__$1,meta24533__$1,___$2,fn1__$1,meta24536));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24535(self__.map_LT_,self__.f,self__.ch,self__.meta24533,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19643__auto__ = ret;
if(cljs.core.truth_(and__19643__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19643__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24532.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24532.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24533","meta24533",-1418633735,null)], null);
});

cljs.core.async.t_cljs$core$async24532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24532";

cljs.core.async.t_cljs$core$async24532.cljs$lang$ctorPrWriter = (function (this__20253__auto__,writer__20254__auto__,opt__20255__auto__){
return cljs.core._write.call(null,writer__20254__auto__,"cljs.core.async/t_cljs$core$async24532");
});

cljs.core.async.__GT_t_cljs$core$async24532 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24532(map_LT___$1,f__$1,ch__$1,meta24533){
return (new cljs.core.async.t_cljs$core$async24532(map_LT___$1,f__$1,ch__$1,meta24533));
});

}

return (new cljs.core.async.t_cljs$core$async24532(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24541 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24541 = (function (map_GT_,f,ch,meta24542){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24542 = meta24542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24543,meta24542__$1){
var self__ = this;
var _24543__$1 = this;
return (new cljs.core.async.t_cljs$core$async24541(self__.map_GT_,self__.f,self__.ch,meta24542__$1));
});

cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24543){
var self__ = this;
var _24543__$1 = this;
return self__.meta24542;
});

cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24541.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24542","meta24542",304755355,null)], null);
});

cljs.core.async.t_cljs$core$async24541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24541";

cljs.core.async.t_cljs$core$async24541.cljs$lang$ctorPrWriter = (function (this__20253__auto__,writer__20254__auto__,opt__20255__auto__){
return cljs.core._write.call(null,writer__20254__auto__,"cljs.core.async/t_cljs$core$async24541");
});

cljs.core.async.__GT_t_cljs$core$async24541 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24541(map_GT___$1,f__$1,ch__$1,meta24542){
return (new cljs.core.async.t_cljs$core$async24541(map_GT___$1,f__$1,ch__$1,meta24542));
});

}

return (new cljs.core.async.t_cljs$core$async24541(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24547 = (function (filter_GT_,p,ch,meta24548){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24548 = meta24548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24549,meta24548__$1){
var self__ = this;
var _24549__$1 = this;
return (new cljs.core.async.t_cljs$core$async24547(self__.filter_GT_,self__.p,self__.ch,meta24548__$1));
});

cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24549){
var self__ = this;
var _24549__$1 = this;
return self__.meta24548;
});

cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24547.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24547.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24548","meta24548",1122683785,null)], null);
});

cljs.core.async.t_cljs$core$async24547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24547";

cljs.core.async.t_cljs$core$async24547.cljs$lang$ctorPrWriter = (function (this__20253__auto__,writer__20254__auto__,opt__20255__auto__){
return cljs.core._write.call(null,writer__20254__auto__,"cljs.core.async/t_cljs$core$async24547");
});

cljs.core.async.__GT_t_cljs$core$async24547 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24547(filter_GT___$1,p__$1,ch__$1,meta24548){
return (new cljs.core.async.t_cljs$core$async24547(filter_GT___$1,p__$1,ch__$1,meta24548));
});

}

return (new cljs.core.async.t_cljs$core$async24547(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24550 = [];
var len__20713__auto___24594 = arguments.length;
var i__20714__auto___24595 = (0);
while(true){
if((i__20714__auto___24595 < len__20713__auto___24594)){
args24550.push((arguments[i__20714__auto___24595]));

var G__24596 = (i__20714__auto___24595 + (1));
i__20714__auto___24595 = G__24596;
continue;
} else {
}
break;
}

var G__24552 = args24550.length;
switch (G__24552) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24550.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22348__auto___24598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto___24598,out){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto___24598,out){
return (function (state_24573){
var state_val_24574 = (state_24573[(1)]);
if((state_val_24574 === (7))){
var inst_24569 = (state_24573[(2)]);
var state_24573__$1 = state_24573;
var statearr_24575_24599 = state_24573__$1;
(statearr_24575_24599[(2)] = inst_24569);

(statearr_24575_24599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (1))){
var state_24573__$1 = state_24573;
var statearr_24576_24600 = state_24573__$1;
(statearr_24576_24600[(2)] = null);

(statearr_24576_24600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (4))){
var inst_24555 = (state_24573[(7)]);
var inst_24555__$1 = (state_24573[(2)]);
var inst_24556 = (inst_24555__$1 == null);
var state_24573__$1 = (function (){var statearr_24577 = state_24573;
(statearr_24577[(7)] = inst_24555__$1);

return statearr_24577;
})();
if(cljs.core.truth_(inst_24556)){
var statearr_24578_24601 = state_24573__$1;
(statearr_24578_24601[(1)] = (5));

} else {
var statearr_24579_24602 = state_24573__$1;
(statearr_24579_24602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (6))){
var inst_24555 = (state_24573[(7)]);
var inst_24560 = p.call(null,inst_24555);
var state_24573__$1 = state_24573;
if(cljs.core.truth_(inst_24560)){
var statearr_24580_24603 = state_24573__$1;
(statearr_24580_24603[(1)] = (8));

} else {
var statearr_24581_24604 = state_24573__$1;
(statearr_24581_24604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (3))){
var inst_24571 = (state_24573[(2)]);
var state_24573__$1 = state_24573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24573__$1,inst_24571);
} else {
if((state_val_24574 === (2))){
var state_24573__$1 = state_24573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24573__$1,(4),ch);
} else {
if((state_val_24574 === (11))){
var inst_24563 = (state_24573[(2)]);
var state_24573__$1 = state_24573;
var statearr_24582_24605 = state_24573__$1;
(statearr_24582_24605[(2)] = inst_24563);

(statearr_24582_24605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (9))){
var state_24573__$1 = state_24573;
var statearr_24583_24606 = state_24573__$1;
(statearr_24583_24606[(2)] = null);

(statearr_24583_24606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (5))){
var inst_24558 = cljs.core.async.close_BANG_.call(null,out);
var state_24573__$1 = state_24573;
var statearr_24584_24607 = state_24573__$1;
(statearr_24584_24607[(2)] = inst_24558);

(statearr_24584_24607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (10))){
var inst_24566 = (state_24573[(2)]);
var state_24573__$1 = (function (){var statearr_24585 = state_24573;
(statearr_24585[(8)] = inst_24566);

return statearr_24585;
})();
var statearr_24586_24608 = state_24573__$1;
(statearr_24586_24608[(2)] = null);

(statearr_24586_24608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24574 === (8))){
var inst_24555 = (state_24573[(7)]);
var state_24573__$1 = state_24573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24573__$1,(11),out,inst_24555);
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
});})(c__22348__auto___24598,out))
;
return ((function (switch__22236__auto__,c__22348__auto___24598,out){
return (function() {
var cljs$core$async$state_machine__22237__auto__ = null;
var cljs$core$async$state_machine__22237__auto____0 = (function (){
var statearr_24590 = [null,null,null,null,null,null,null,null,null];
(statearr_24590[(0)] = cljs$core$async$state_machine__22237__auto__);

(statearr_24590[(1)] = (1));

return statearr_24590;
});
var cljs$core$async$state_machine__22237__auto____1 = (function (state_24573){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_24573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e24591){if((e24591 instanceof Object)){
var ex__22240__auto__ = e24591;
var statearr_24592_24609 = state_24573;
(statearr_24592_24609[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24610 = state_24573;
state_24573 = G__24610;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$state_machine__22237__auto__ = function(state_24573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22237__auto____1.call(this,state_24573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22237__auto____0;
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22237__auto____1;
return cljs$core$async$state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto___24598,out))
})();
var state__22350__auto__ = (function (){var statearr_24593 = f__22349__auto__.call(null);
(statearr_24593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___24598);

return statearr_24593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto___24598,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24611 = [];
var len__20713__auto___24614 = arguments.length;
var i__20714__auto___24615 = (0);
while(true){
if((i__20714__auto___24615 < len__20713__auto___24614)){
args24611.push((arguments[i__20714__auto___24615]));

var G__24616 = (i__20714__auto___24615 + (1));
i__20714__auto___24615 = G__24616;
continue;
} else {
}
break;
}

var G__24613 = args24611.length;
switch (G__24613) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24611.length)].join('')));

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
var c__22348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto__){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto__){
return (function (state_24783){
var state_val_24784 = (state_24783[(1)]);
if((state_val_24784 === (7))){
var inst_24779 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
var statearr_24785_24826 = state_24783__$1;
(statearr_24785_24826[(2)] = inst_24779);

(statearr_24785_24826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (20))){
var inst_24749 = (state_24783[(7)]);
var inst_24760 = (state_24783[(2)]);
var inst_24761 = cljs.core.next.call(null,inst_24749);
var inst_24735 = inst_24761;
var inst_24736 = null;
var inst_24737 = (0);
var inst_24738 = (0);
var state_24783__$1 = (function (){var statearr_24786 = state_24783;
(statearr_24786[(8)] = inst_24738);

(statearr_24786[(9)] = inst_24735);

(statearr_24786[(10)] = inst_24760);

(statearr_24786[(11)] = inst_24737);

(statearr_24786[(12)] = inst_24736);

return statearr_24786;
})();
var statearr_24787_24827 = state_24783__$1;
(statearr_24787_24827[(2)] = null);

(statearr_24787_24827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (1))){
var state_24783__$1 = state_24783;
var statearr_24788_24828 = state_24783__$1;
(statearr_24788_24828[(2)] = null);

(statearr_24788_24828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (4))){
var inst_24724 = (state_24783[(13)]);
var inst_24724__$1 = (state_24783[(2)]);
var inst_24725 = (inst_24724__$1 == null);
var state_24783__$1 = (function (){var statearr_24789 = state_24783;
(statearr_24789[(13)] = inst_24724__$1);

return statearr_24789;
})();
if(cljs.core.truth_(inst_24725)){
var statearr_24790_24829 = state_24783__$1;
(statearr_24790_24829[(1)] = (5));

} else {
var statearr_24791_24830 = state_24783__$1;
(statearr_24791_24830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (15))){
var state_24783__$1 = state_24783;
var statearr_24795_24831 = state_24783__$1;
(statearr_24795_24831[(2)] = null);

(statearr_24795_24831[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (21))){
var state_24783__$1 = state_24783;
var statearr_24796_24832 = state_24783__$1;
(statearr_24796_24832[(2)] = null);

(statearr_24796_24832[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (13))){
var inst_24738 = (state_24783[(8)]);
var inst_24735 = (state_24783[(9)]);
var inst_24737 = (state_24783[(11)]);
var inst_24736 = (state_24783[(12)]);
var inst_24745 = (state_24783[(2)]);
var inst_24746 = (inst_24738 + (1));
var tmp24792 = inst_24735;
var tmp24793 = inst_24737;
var tmp24794 = inst_24736;
var inst_24735__$1 = tmp24792;
var inst_24736__$1 = tmp24794;
var inst_24737__$1 = tmp24793;
var inst_24738__$1 = inst_24746;
var state_24783__$1 = (function (){var statearr_24797 = state_24783;
(statearr_24797[(14)] = inst_24745);

(statearr_24797[(8)] = inst_24738__$1);

(statearr_24797[(9)] = inst_24735__$1);

(statearr_24797[(11)] = inst_24737__$1);

(statearr_24797[(12)] = inst_24736__$1);

return statearr_24797;
})();
var statearr_24798_24833 = state_24783__$1;
(statearr_24798_24833[(2)] = null);

(statearr_24798_24833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (22))){
var state_24783__$1 = state_24783;
var statearr_24799_24834 = state_24783__$1;
(statearr_24799_24834[(2)] = null);

(statearr_24799_24834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (6))){
var inst_24724 = (state_24783[(13)]);
var inst_24733 = f.call(null,inst_24724);
var inst_24734 = cljs.core.seq.call(null,inst_24733);
var inst_24735 = inst_24734;
var inst_24736 = null;
var inst_24737 = (0);
var inst_24738 = (0);
var state_24783__$1 = (function (){var statearr_24800 = state_24783;
(statearr_24800[(8)] = inst_24738);

(statearr_24800[(9)] = inst_24735);

(statearr_24800[(11)] = inst_24737);

(statearr_24800[(12)] = inst_24736);

return statearr_24800;
})();
var statearr_24801_24835 = state_24783__$1;
(statearr_24801_24835[(2)] = null);

(statearr_24801_24835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (17))){
var inst_24749 = (state_24783[(7)]);
var inst_24753 = cljs.core.chunk_first.call(null,inst_24749);
var inst_24754 = cljs.core.chunk_rest.call(null,inst_24749);
var inst_24755 = cljs.core.count.call(null,inst_24753);
var inst_24735 = inst_24754;
var inst_24736 = inst_24753;
var inst_24737 = inst_24755;
var inst_24738 = (0);
var state_24783__$1 = (function (){var statearr_24802 = state_24783;
(statearr_24802[(8)] = inst_24738);

(statearr_24802[(9)] = inst_24735);

(statearr_24802[(11)] = inst_24737);

(statearr_24802[(12)] = inst_24736);

return statearr_24802;
})();
var statearr_24803_24836 = state_24783__$1;
(statearr_24803_24836[(2)] = null);

(statearr_24803_24836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (3))){
var inst_24781 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24783__$1,inst_24781);
} else {
if((state_val_24784 === (12))){
var inst_24769 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
var statearr_24804_24837 = state_24783__$1;
(statearr_24804_24837[(2)] = inst_24769);

(statearr_24804_24837[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (2))){
var state_24783__$1 = state_24783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24783__$1,(4),in$);
} else {
if((state_val_24784 === (23))){
var inst_24777 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
var statearr_24805_24838 = state_24783__$1;
(statearr_24805_24838[(2)] = inst_24777);

(statearr_24805_24838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (19))){
var inst_24764 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
var statearr_24806_24839 = state_24783__$1;
(statearr_24806_24839[(2)] = inst_24764);

(statearr_24806_24839[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (11))){
var inst_24735 = (state_24783[(9)]);
var inst_24749 = (state_24783[(7)]);
var inst_24749__$1 = cljs.core.seq.call(null,inst_24735);
var state_24783__$1 = (function (){var statearr_24807 = state_24783;
(statearr_24807[(7)] = inst_24749__$1);

return statearr_24807;
})();
if(inst_24749__$1){
var statearr_24808_24840 = state_24783__$1;
(statearr_24808_24840[(1)] = (14));

} else {
var statearr_24809_24841 = state_24783__$1;
(statearr_24809_24841[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (9))){
var inst_24771 = (state_24783[(2)]);
var inst_24772 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24783__$1 = (function (){var statearr_24810 = state_24783;
(statearr_24810[(15)] = inst_24771);

return statearr_24810;
})();
if(cljs.core.truth_(inst_24772)){
var statearr_24811_24842 = state_24783__$1;
(statearr_24811_24842[(1)] = (21));

} else {
var statearr_24812_24843 = state_24783__$1;
(statearr_24812_24843[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (5))){
var inst_24727 = cljs.core.async.close_BANG_.call(null,out);
var state_24783__$1 = state_24783;
var statearr_24813_24844 = state_24783__$1;
(statearr_24813_24844[(2)] = inst_24727);

(statearr_24813_24844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (14))){
var inst_24749 = (state_24783[(7)]);
var inst_24751 = cljs.core.chunked_seq_QMARK_.call(null,inst_24749);
var state_24783__$1 = state_24783;
if(inst_24751){
var statearr_24814_24845 = state_24783__$1;
(statearr_24814_24845[(1)] = (17));

} else {
var statearr_24815_24846 = state_24783__$1;
(statearr_24815_24846[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (16))){
var inst_24767 = (state_24783[(2)]);
var state_24783__$1 = state_24783;
var statearr_24816_24847 = state_24783__$1;
(statearr_24816_24847[(2)] = inst_24767);

(statearr_24816_24847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24784 === (10))){
var inst_24738 = (state_24783[(8)]);
var inst_24736 = (state_24783[(12)]);
var inst_24743 = cljs.core._nth.call(null,inst_24736,inst_24738);
var state_24783__$1 = state_24783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24783__$1,(13),out,inst_24743);
} else {
if((state_val_24784 === (18))){
var inst_24749 = (state_24783[(7)]);
var inst_24758 = cljs.core.first.call(null,inst_24749);
var state_24783__$1 = state_24783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24783__$1,(20),out,inst_24758);
} else {
if((state_val_24784 === (8))){
var inst_24738 = (state_24783[(8)]);
var inst_24737 = (state_24783[(11)]);
var inst_24740 = (inst_24738 < inst_24737);
var inst_24741 = inst_24740;
var state_24783__$1 = state_24783;
if(cljs.core.truth_(inst_24741)){
var statearr_24817_24848 = state_24783__$1;
(statearr_24817_24848[(1)] = (10));

} else {
var statearr_24818_24849 = state_24783__$1;
(statearr_24818_24849[(1)] = (11));

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
});})(c__22348__auto__))
;
return ((function (switch__22236__auto__,c__22348__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22237__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22237__auto____0 = (function (){
var statearr_24822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24822[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22237__auto__);

(statearr_24822[(1)] = (1));

return statearr_24822;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22237__auto____1 = (function (state_24783){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_24783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e24823){if((e24823 instanceof Object)){
var ex__22240__auto__ = e24823;
var statearr_24824_24850 = state_24783;
(statearr_24824_24850[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24851 = state_24783;
state_24783 = G__24851;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22237__auto__ = function(state_24783){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22237__auto____1.call(this,state_24783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22237__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22237__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto__))
})();
var state__22350__auto__ = (function (){var statearr_24825 = f__22349__auto__.call(null);
(statearr_24825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto__);

return statearr_24825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto__))
);

return c__22348__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24852 = [];
var len__20713__auto___24855 = arguments.length;
var i__20714__auto___24856 = (0);
while(true){
if((i__20714__auto___24856 < len__20713__auto___24855)){
args24852.push((arguments[i__20714__auto___24856]));

var G__24857 = (i__20714__auto___24856 + (1));
i__20714__auto___24856 = G__24857;
continue;
} else {
}
break;
}

var G__24854 = args24852.length;
switch (G__24854) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24852.length)].join('')));

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
var args24859 = [];
var len__20713__auto___24862 = arguments.length;
var i__20714__auto___24863 = (0);
while(true){
if((i__20714__auto___24863 < len__20713__auto___24862)){
args24859.push((arguments[i__20714__auto___24863]));

var G__24864 = (i__20714__auto___24863 + (1));
i__20714__auto___24863 = G__24864;
continue;
} else {
}
break;
}

var G__24861 = args24859.length;
switch (G__24861) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24859.length)].join('')));

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
var args24866 = [];
var len__20713__auto___24917 = arguments.length;
var i__20714__auto___24918 = (0);
while(true){
if((i__20714__auto___24918 < len__20713__auto___24917)){
args24866.push((arguments[i__20714__auto___24918]));

var G__24919 = (i__20714__auto___24918 + (1));
i__20714__auto___24918 = G__24919;
continue;
} else {
}
break;
}

var G__24868 = args24866.length;
switch (G__24868) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24866.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22348__auto___24921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto___24921,out){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto___24921,out){
return (function (state_24892){
var state_val_24893 = (state_24892[(1)]);
if((state_val_24893 === (7))){
var inst_24887 = (state_24892[(2)]);
var state_24892__$1 = state_24892;
var statearr_24894_24922 = state_24892__$1;
(statearr_24894_24922[(2)] = inst_24887);

(statearr_24894_24922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24893 === (1))){
var inst_24869 = null;
var state_24892__$1 = (function (){var statearr_24895 = state_24892;
(statearr_24895[(7)] = inst_24869);

return statearr_24895;
})();
var statearr_24896_24923 = state_24892__$1;
(statearr_24896_24923[(2)] = null);

(statearr_24896_24923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24893 === (4))){
var inst_24872 = (state_24892[(8)]);
var inst_24872__$1 = (state_24892[(2)]);
var inst_24873 = (inst_24872__$1 == null);
var inst_24874 = cljs.core.not.call(null,inst_24873);
var state_24892__$1 = (function (){var statearr_24897 = state_24892;
(statearr_24897[(8)] = inst_24872__$1);

return statearr_24897;
})();
if(inst_24874){
var statearr_24898_24924 = state_24892__$1;
(statearr_24898_24924[(1)] = (5));

} else {
var statearr_24899_24925 = state_24892__$1;
(statearr_24899_24925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24893 === (6))){
var state_24892__$1 = state_24892;
var statearr_24900_24926 = state_24892__$1;
(statearr_24900_24926[(2)] = null);

(statearr_24900_24926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24893 === (3))){
var inst_24889 = (state_24892[(2)]);
var inst_24890 = cljs.core.async.close_BANG_.call(null,out);
var state_24892__$1 = (function (){var statearr_24901 = state_24892;
(statearr_24901[(9)] = inst_24889);

return statearr_24901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24892__$1,inst_24890);
} else {
if((state_val_24893 === (2))){
var state_24892__$1 = state_24892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24892__$1,(4),ch);
} else {
if((state_val_24893 === (11))){
var inst_24872 = (state_24892[(8)]);
var inst_24881 = (state_24892[(2)]);
var inst_24869 = inst_24872;
var state_24892__$1 = (function (){var statearr_24902 = state_24892;
(statearr_24902[(10)] = inst_24881);

(statearr_24902[(7)] = inst_24869);

return statearr_24902;
})();
var statearr_24903_24927 = state_24892__$1;
(statearr_24903_24927[(2)] = null);

(statearr_24903_24927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24893 === (9))){
var inst_24872 = (state_24892[(8)]);
var state_24892__$1 = state_24892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24892__$1,(11),out,inst_24872);
} else {
if((state_val_24893 === (5))){
var inst_24872 = (state_24892[(8)]);
var inst_24869 = (state_24892[(7)]);
var inst_24876 = cljs.core._EQ_.call(null,inst_24872,inst_24869);
var state_24892__$1 = state_24892;
if(inst_24876){
var statearr_24905_24928 = state_24892__$1;
(statearr_24905_24928[(1)] = (8));

} else {
var statearr_24906_24929 = state_24892__$1;
(statearr_24906_24929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24893 === (10))){
var inst_24884 = (state_24892[(2)]);
var state_24892__$1 = state_24892;
var statearr_24907_24930 = state_24892__$1;
(statearr_24907_24930[(2)] = inst_24884);

(statearr_24907_24930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24893 === (8))){
var inst_24869 = (state_24892[(7)]);
var tmp24904 = inst_24869;
var inst_24869__$1 = tmp24904;
var state_24892__$1 = (function (){var statearr_24908 = state_24892;
(statearr_24908[(7)] = inst_24869__$1);

return statearr_24908;
})();
var statearr_24909_24931 = state_24892__$1;
(statearr_24909_24931[(2)] = null);

(statearr_24909_24931[(1)] = (2));


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
});})(c__22348__auto___24921,out))
;
return ((function (switch__22236__auto__,c__22348__auto___24921,out){
return (function() {
var cljs$core$async$state_machine__22237__auto__ = null;
var cljs$core$async$state_machine__22237__auto____0 = (function (){
var statearr_24913 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24913[(0)] = cljs$core$async$state_machine__22237__auto__);

(statearr_24913[(1)] = (1));

return statearr_24913;
});
var cljs$core$async$state_machine__22237__auto____1 = (function (state_24892){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_24892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e24914){if((e24914 instanceof Object)){
var ex__22240__auto__ = e24914;
var statearr_24915_24932 = state_24892;
(statearr_24915_24932[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24933 = state_24892;
state_24892 = G__24933;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$state_machine__22237__auto__ = function(state_24892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22237__auto____1.call(this,state_24892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22237__auto____0;
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22237__auto____1;
return cljs$core$async$state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto___24921,out))
})();
var state__22350__auto__ = (function (){var statearr_24916 = f__22349__auto__.call(null);
(statearr_24916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___24921);

return statearr_24916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto___24921,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24934 = [];
var len__20713__auto___25004 = arguments.length;
var i__20714__auto___25005 = (0);
while(true){
if((i__20714__auto___25005 < len__20713__auto___25004)){
args24934.push((arguments[i__20714__auto___25005]));

var G__25006 = (i__20714__auto___25005 + (1));
i__20714__auto___25005 = G__25006;
continue;
} else {
}
break;
}

var G__24936 = args24934.length;
switch (G__24936) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24934.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22348__auto___25008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto___25008,out){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto___25008,out){
return (function (state_24974){
var state_val_24975 = (state_24974[(1)]);
if((state_val_24975 === (7))){
var inst_24970 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
var statearr_24976_25009 = state_24974__$1;
(statearr_24976_25009[(2)] = inst_24970);

(statearr_24976_25009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (1))){
var inst_24937 = (new Array(n));
var inst_24938 = inst_24937;
var inst_24939 = (0);
var state_24974__$1 = (function (){var statearr_24977 = state_24974;
(statearr_24977[(7)] = inst_24939);

(statearr_24977[(8)] = inst_24938);

return statearr_24977;
})();
var statearr_24978_25010 = state_24974__$1;
(statearr_24978_25010[(2)] = null);

(statearr_24978_25010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (4))){
var inst_24942 = (state_24974[(9)]);
var inst_24942__$1 = (state_24974[(2)]);
var inst_24943 = (inst_24942__$1 == null);
var inst_24944 = cljs.core.not.call(null,inst_24943);
var state_24974__$1 = (function (){var statearr_24979 = state_24974;
(statearr_24979[(9)] = inst_24942__$1);

return statearr_24979;
})();
if(inst_24944){
var statearr_24980_25011 = state_24974__$1;
(statearr_24980_25011[(1)] = (5));

} else {
var statearr_24981_25012 = state_24974__$1;
(statearr_24981_25012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (15))){
var inst_24964 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
var statearr_24982_25013 = state_24974__$1;
(statearr_24982_25013[(2)] = inst_24964);

(statearr_24982_25013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (13))){
var state_24974__$1 = state_24974;
var statearr_24983_25014 = state_24974__$1;
(statearr_24983_25014[(2)] = null);

(statearr_24983_25014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (6))){
var inst_24939 = (state_24974[(7)]);
var inst_24960 = (inst_24939 > (0));
var state_24974__$1 = state_24974;
if(cljs.core.truth_(inst_24960)){
var statearr_24984_25015 = state_24974__$1;
(statearr_24984_25015[(1)] = (12));

} else {
var statearr_24985_25016 = state_24974__$1;
(statearr_24985_25016[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (3))){
var inst_24972 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24974__$1,inst_24972);
} else {
if((state_val_24975 === (12))){
var inst_24938 = (state_24974[(8)]);
var inst_24962 = cljs.core.vec.call(null,inst_24938);
var state_24974__$1 = state_24974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24974__$1,(15),out,inst_24962);
} else {
if((state_val_24975 === (2))){
var state_24974__$1 = state_24974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24974__$1,(4),ch);
} else {
if((state_val_24975 === (11))){
var inst_24954 = (state_24974[(2)]);
var inst_24955 = (new Array(n));
var inst_24938 = inst_24955;
var inst_24939 = (0);
var state_24974__$1 = (function (){var statearr_24986 = state_24974;
(statearr_24986[(7)] = inst_24939);

(statearr_24986[(8)] = inst_24938);

(statearr_24986[(10)] = inst_24954);

return statearr_24986;
})();
var statearr_24987_25017 = state_24974__$1;
(statearr_24987_25017[(2)] = null);

(statearr_24987_25017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (9))){
var inst_24938 = (state_24974[(8)]);
var inst_24952 = cljs.core.vec.call(null,inst_24938);
var state_24974__$1 = state_24974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24974__$1,(11),out,inst_24952);
} else {
if((state_val_24975 === (5))){
var inst_24939 = (state_24974[(7)]);
var inst_24947 = (state_24974[(11)]);
var inst_24938 = (state_24974[(8)]);
var inst_24942 = (state_24974[(9)]);
var inst_24946 = (inst_24938[inst_24939] = inst_24942);
var inst_24947__$1 = (inst_24939 + (1));
var inst_24948 = (inst_24947__$1 < n);
var state_24974__$1 = (function (){var statearr_24988 = state_24974;
(statearr_24988[(12)] = inst_24946);

(statearr_24988[(11)] = inst_24947__$1);

return statearr_24988;
})();
if(cljs.core.truth_(inst_24948)){
var statearr_24989_25018 = state_24974__$1;
(statearr_24989_25018[(1)] = (8));

} else {
var statearr_24990_25019 = state_24974__$1;
(statearr_24990_25019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (14))){
var inst_24967 = (state_24974[(2)]);
var inst_24968 = cljs.core.async.close_BANG_.call(null,out);
var state_24974__$1 = (function (){var statearr_24992 = state_24974;
(statearr_24992[(13)] = inst_24967);

return statearr_24992;
})();
var statearr_24993_25020 = state_24974__$1;
(statearr_24993_25020[(2)] = inst_24968);

(statearr_24993_25020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (10))){
var inst_24958 = (state_24974[(2)]);
var state_24974__$1 = state_24974;
var statearr_24994_25021 = state_24974__$1;
(statearr_24994_25021[(2)] = inst_24958);

(statearr_24994_25021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24975 === (8))){
var inst_24947 = (state_24974[(11)]);
var inst_24938 = (state_24974[(8)]);
var tmp24991 = inst_24938;
var inst_24938__$1 = tmp24991;
var inst_24939 = inst_24947;
var state_24974__$1 = (function (){var statearr_24995 = state_24974;
(statearr_24995[(7)] = inst_24939);

(statearr_24995[(8)] = inst_24938__$1);

return statearr_24995;
})();
var statearr_24996_25022 = state_24974__$1;
(statearr_24996_25022[(2)] = null);

(statearr_24996_25022[(1)] = (2));


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
});})(c__22348__auto___25008,out))
;
return ((function (switch__22236__auto__,c__22348__auto___25008,out){
return (function() {
var cljs$core$async$state_machine__22237__auto__ = null;
var cljs$core$async$state_machine__22237__auto____0 = (function (){
var statearr_25000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25000[(0)] = cljs$core$async$state_machine__22237__auto__);

(statearr_25000[(1)] = (1));

return statearr_25000;
});
var cljs$core$async$state_machine__22237__auto____1 = (function (state_24974){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_24974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e25001){if((e25001 instanceof Object)){
var ex__22240__auto__ = e25001;
var statearr_25002_25023 = state_24974;
(statearr_25002_25023[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25024 = state_24974;
state_24974 = G__25024;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$state_machine__22237__auto__ = function(state_24974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22237__auto____1.call(this,state_24974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22237__auto____0;
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22237__auto____1;
return cljs$core$async$state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto___25008,out))
})();
var state__22350__auto__ = (function (){var statearr_25003 = f__22349__auto__.call(null);
(statearr_25003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___25008);

return statearr_25003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto___25008,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25025 = [];
var len__20713__auto___25099 = arguments.length;
var i__20714__auto___25100 = (0);
while(true){
if((i__20714__auto___25100 < len__20713__auto___25099)){
args25025.push((arguments[i__20714__auto___25100]));

var G__25101 = (i__20714__auto___25100 + (1));
i__20714__auto___25100 = G__25101;
continue;
} else {
}
break;
}

var G__25027 = args25025.length;
switch (G__25027) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25025.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22348__auto___25103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto___25103,out){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto___25103,out){
return (function (state_25069){
var state_val_25070 = (state_25069[(1)]);
if((state_val_25070 === (7))){
var inst_25065 = (state_25069[(2)]);
var state_25069__$1 = state_25069;
var statearr_25071_25104 = state_25069__$1;
(statearr_25071_25104[(2)] = inst_25065);

(statearr_25071_25104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (1))){
var inst_25028 = [];
var inst_25029 = inst_25028;
var inst_25030 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25069__$1 = (function (){var statearr_25072 = state_25069;
(statearr_25072[(7)] = inst_25030);

(statearr_25072[(8)] = inst_25029);

return statearr_25072;
})();
var statearr_25073_25105 = state_25069__$1;
(statearr_25073_25105[(2)] = null);

(statearr_25073_25105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (4))){
var inst_25033 = (state_25069[(9)]);
var inst_25033__$1 = (state_25069[(2)]);
var inst_25034 = (inst_25033__$1 == null);
var inst_25035 = cljs.core.not.call(null,inst_25034);
var state_25069__$1 = (function (){var statearr_25074 = state_25069;
(statearr_25074[(9)] = inst_25033__$1);

return statearr_25074;
})();
if(inst_25035){
var statearr_25075_25106 = state_25069__$1;
(statearr_25075_25106[(1)] = (5));

} else {
var statearr_25076_25107 = state_25069__$1;
(statearr_25076_25107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (15))){
var inst_25059 = (state_25069[(2)]);
var state_25069__$1 = state_25069;
var statearr_25077_25108 = state_25069__$1;
(statearr_25077_25108[(2)] = inst_25059);

(statearr_25077_25108[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (13))){
var state_25069__$1 = state_25069;
var statearr_25078_25109 = state_25069__$1;
(statearr_25078_25109[(2)] = null);

(statearr_25078_25109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (6))){
var inst_25029 = (state_25069[(8)]);
var inst_25054 = inst_25029.length;
var inst_25055 = (inst_25054 > (0));
var state_25069__$1 = state_25069;
if(cljs.core.truth_(inst_25055)){
var statearr_25079_25110 = state_25069__$1;
(statearr_25079_25110[(1)] = (12));

} else {
var statearr_25080_25111 = state_25069__$1;
(statearr_25080_25111[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (3))){
var inst_25067 = (state_25069[(2)]);
var state_25069__$1 = state_25069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25069__$1,inst_25067);
} else {
if((state_val_25070 === (12))){
var inst_25029 = (state_25069[(8)]);
var inst_25057 = cljs.core.vec.call(null,inst_25029);
var state_25069__$1 = state_25069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25069__$1,(15),out,inst_25057);
} else {
if((state_val_25070 === (2))){
var state_25069__$1 = state_25069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25069__$1,(4),ch);
} else {
if((state_val_25070 === (11))){
var inst_25037 = (state_25069[(10)]);
var inst_25033 = (state_25069[(9)]);
var inst_25047 = (state_25069[(2)]);
var inst_25048 = [];
var inst_25049 = inst_25048.push(inst_25033);
var inst_25029 = inst_25048;
var inst_25030 = inst_25037;
var state_25069__$1 = (function (){var statearr_25081 = state_25069;
(statearr_25081[(7)] = inst_25030);

(statearr_25081[(11)] = inst_25049);

(statearr_25081[(12)] = inst_25047);

(statearr_25081[(8)] = inst_25029);

return statearr_25081;
})();
var statearr_25082_25112 = state_25069__$1;
(statearr_25082_25112[(2)] = null);

(statearr_25082_25112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (9))){
var inst_25029 = (state_25069[(8)]);
var inst_25045 = cljs.core.vec.call(null,inst_25029);
var state_25069__$1 = state_25069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25069__$1,(11),out,inst_25045);
} else {
if((state_val_25070 === (5))){
var inst_25030 = (state_25069[(7)]);
var inst_25037 = (state_25069[(10)]);
var inst_25033 = (state_25069[(9)]);
var inst_25037__$1 = f.call(null,inst_25033);
var inst_25038 = cljs.core._EQ_.call(null,inst_25037__$1,inst_25030);
var inst_25039 = cljs.core.keyword_identical_QMARK_.call(null,inst_25030,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25040 = (inst_25038) || (inst_25039);
var state_25069__$1 = (function (){var statearr_25083 = state_25069;
(statearr_25083[(10)] = inst_25037__$1);

return statearr_25083;
})();
if(cljs.core.truth_(inst_25040)){
var statearr_25084_25113 = state_25069__$1;
(statearr_25084_25113[(1)] = (8));

} else {
var statearr_25085_25114 = state_25069__$1;
(statearr_25085_25114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (14))){
var inst_25062 = (state_25069[(2)]);
var inst_25063 = cljs.core.async.close_BANG_.call(null,out);
var state_25069__$1 = (function (){var statearr_25087 = state_25069;
(statearr_25087[(13)] = inst_25062);

return statearr_25087;
})();
var statearr_25088_25115 = state_25069__$1;
(statearr_25088_25115[(2)] = inst_25063);

(statearr_25088_25115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (10))){
var inst_25052 = (state_25069[(2)]);
var state_25069__$1 = state_25069;
var statearr_25089_25116 = state_25069__$1;
(statearr_25089_25116[(2)] = inst_25052);

(statearr_25089_25116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (8))){
var inst_25037 = (state_25069[(10)]);
var inst_25029 = (state_25069[(8)]);
var inst_25033 = (state_25069[(9)]);
var inst_25042 = inst_25029.push(inst_25033);
var tmp25086 = inst_25029;
var inst_25029__$1 = tmp25086;
var inst_25030 = inst_25037;
var state_25069__$1 = (function (){var statearr_25090 = state_25069;
(statearr_25090[(7)] = inst_25030);

(statearr_25090[(14)] = inst_25042);

(statearr_25090[(8)] = inst_25029__$1);

return statearr_25090;
})();
var statearr_25091_25117 = state_25069__$1;
(statearr_25091_25117[(2)] = null);

(statearr_25091_25117[(1)] = (2));


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
});})(c__22348__auto___25103,out))
;
return ((function (switch__22236__auto__,c__22348__auto___25103,out){
return (function() {
var cljs$core$async$state_machine__22237__auto__ = null;
var cljs$core$async$state_machine__22237__auto____0 = (function (){
var statearr_25095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25095[(0)] = cljs$core$async$state_machine__22237__auto__);

(statearr_25095[(1)] = (1));

return statearr_25095;
});
var cljs$core$async$state_machine__22237__auto____1 = (function (state_25069){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_25069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e25096){if((e25096 instanceof Object)){
var ex__22240__auto__ = e25096;
var statearr_25097_25118 = state_25069;
(statearr_25097_25118[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25119 = state_25069;
state_25069 = G__25119;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
cljs$core$async$state_machine__22237__auto__ = function(state_25069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22237__auto____1.call(this,state_25069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22237__auto____0;
cljs$core$async$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22237__auto____1;
return cljs$core$async$state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto___25103,out))
})();
var state__22350__auto__ = (function (){var statearr_25098 = f__22349__auto__.call(null);
(statearr_25098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___25103);

return statearr_25098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto___25103,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map