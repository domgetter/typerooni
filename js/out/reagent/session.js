// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__20800__auto__ = [];
var len__20793__auto___21366 = arguments.length;
var i__20794__auto___21367 = (0);
while(true){
if((i__20794__auto___21367 < len__20793__auto___21366)){
args__20800__auto__.push((arguments[i__20794__auto___21367]));

var G__21368 = (i__20794__auto___21367 + (1));
i__20794__auto___21367 = G__21368;
continue;
} else {
}
break;
}

var argseq__20801__auto__ = ((((1) < args__20800__auto__.length))?(new cljs.core.IndexedSeq(args__20800__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20801__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__21364){
var vec__21365 = p__21364;
var default$ = cljs.core.nth.call(null,vec__21365,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq21362){
var G__21363 = cljs.core.first.call(null,seq21362);
var seq21362__$1 = cljs.core.next.call(null,seq21362);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__21363,seq21362__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__20800__auto__ = [];
var len__20793__auto___21373 = arguments.length;
var i__20794__auto___21374 = (0);
while(true){
if((i__20794__auto___21374 < len__20793__auto___21373)){
args__20800__auto__.push((arguments[i__20794__auto___21374]));

var G__21375 = (i__20794__auto___21374 + (1));
i__20794__auto___21374 = G__21375;
continue;
} else {
}
break;
}

var argseq__20801__auto__ = ((((1) < args__20800__auto__.length))?(new cljs.core.IndexedSeq(args__20800__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20801__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__21371){
var vec__21372 = p__21371;
var default$ = cljs.core.nth.call(null,vec__21372,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq21369){
var G__21370 = cljs.core.first.call(null,seq21369);
var seq21369__$1 = cljs.core.next.call(null,seq21369);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__21370,seq21369__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__20800__auto__ = [];
var len__20793__auto___21378 = arguments.length;
var i__20794__auto___21379 = (0);
while(true){
if((i__20794__auto___21379 < len__20793__auto___21378)){
args__20800__auto__.push((arguments[i__20794__auto___21379]));

var G__21380 = (i__20794__auto___21379 + (1));
i__20794__auto___21379 = G__21380;
continue;
} else {
}
break;
}

var argseq__20801__auto__ = ((((1) < args__20800__auto__.length))?(new cljs.core.IndexedSeq(args__20800__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20801__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq21376){
var G__21377 = cljs.core.first.call(null,seq21376);
var seq21376__$1 = cljs.core.next.call(null,seq21376);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21377,seq21376__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__21381_SHARP_){
return cljs.core.assoc_in.call(null,p1__21381_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__20800__auto__ = [];
var len__20793__auto___21386 = arguments.length;
var i__20794__auto___21387 = (0);
while(true){
if((i__20794__auto___21387 < len__20793__auto___21386)){
args__20800__auto__.push((arguments[i__20794__auto___21387]));

var G__21388 = (i__20794__auto___21387 + (1));
i__20794__auto___21387 = G__21388;
continue;
} else {
}
break;
}

var argseq__20801__auto__ = ((((1) < args__20800__auto__.length))?(new cljs.core.IndexedSeq(args__20800__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20801__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__21384){
var vec__21385 = p__21384;
var default$ = cljs.core.nth.call(null,vec__21385,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq21382){
var G__21383 = cljs.core.first.call(null,seq21382);
var seq21382__$1 = cljs.core.next.call(null,seq21382);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21383,seq21382__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__20800__auto__ = [];
var len__20793__auto___21393 = arguments.length;
var i__20794__auto___21394 = (0);
while(true){
if((i__20794__auto___21394 < len__20793__auto___21393)){
args__20800__auto__.push((arguments[i__20794__auto___21394]));

var G__21395 = (i__20794__auto___21394 + (1));
i__20794__auto___21394 = G__21395;
continue;
} else {
}
break;
}

var argseq__20801__auto__ = ((((1) < args__20800__auto__.length))?(new cljs.core.IndexedSeq(args__20800__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20801__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__21391){
var vec__21392 = p__21391;
var default$ = cljs.core.nth.call(null,vec__21392,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq21389){
var G__21390 = cljs.core.first.call(null,seq21389);
var seq21389__$1 = cljs.core.next.call(null,seq21389);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21390,seq21389__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__20800__auto__ = [];
var len__20793__auto___21400 = arguments.length;
var i__20794__auto___21401 = (0);
while(true){
if((i__20794__auto___21401 < len__20793__auto___21400)){
args__20800__auto__.push((arguments[i__20794__auto___21401]));

var G__21402 = (i__20794__auto___21401 + (1));
i__20794__auto___21401 = G__21402;
continue;
} else {
}
break;
}

var argseq__20801__auto__ = ((((2) < args__20800__auto__.length))?(new cljs.core.IndexedSeq(args__20800__auto__.slice((2)),(0))):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20801__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__21396_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__21396_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq21397){
var G__21398 = cljs.core.first.call(null,seq21397);
var seq21397__$1 = cljs.core.next.call(null,seq21397);
var G__21399 = cljs.core.first.call(null,seq21397__$1);
var seq21397__$2 = cljs.core.next.call(null,seq21397__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21398,G__21399,seq21397__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__20800__auto__ = [];
var len__20793__auto___21407 = arguments.length;
var i__20794__auto___21408 = (0);
while(true){
if((i__20794__auto___21408 < len__20793__auto___21407)){
args__20800__auto__.push((arguments[i__20794__auto___21408]));

var G__21409 = (i__20794__auto___21408 + (1));
i__20794__auto___21408 = G__21409;
continue;
} else {
}
break;
}

var argseq__20801__auto__ = ((((2) < args__20800__auto__.length))?(new cljs.core.IndexedSeq(args__20800__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20801__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__21403_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__21403_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq21404){
var G__21405 = cljs.core.first.call(null,seq21404);
var seq21404__$1 = cljs.core.next.call(null,seq21404);
var G__21406 = cljs.core.first.call(null,seq21404__$1);
var seq21404__$2 = cljs.core.next.call(null,seq21404__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21405,G__21406,seq21404__$2);
});

//# sourceMappingURL=session.js.map