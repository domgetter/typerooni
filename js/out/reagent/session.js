// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__20720__auto__ = [];
var len__20713__auto___21296 = arguments.length;
var i__20714__auto___21297 = (0);
while(true){
if((i__20714__auto___21297 < len__20713__auto___21296)){
args__20720__auto__.push((arguments[i__20714__auto___21297]));

var G__21298 = (i__20714__auto___21297 + (1));
i__20714__auto___21297 = G__21298;
continue;
} else {
}
break;
}

var argseq__20721__auto__ = ((((1) < args__20720__auto__.length))?(new cljs.core.IndexedSeq(args__20720__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20721__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__21294){
var vec__21295 = p__21294;
var default$ = cljs.core.nth.call(null,vec__21295,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq21292){
var G__21293 = cljs.core.first.call(null,seq21292);
var seq21292__$1 = cljs.core.next.call(null,seq21292);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__21293,seq21292__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__20720__auto__ = [];
var len__20713__auto___21303 = arguments.length;
var i__20714__auto___21304 = (0);
while(true){
if((i__20714__auto___21304 < len__20713__auto___21303)){
args__20720__auto__.push((arguments[i__20714__auto___21304]));

var G__21305 = (i__20714__auto___21304 + (1));
i__20714__auto___21304 = G__21305;
continue;
} else {
}
break;
}

var argseq__20721__auto__ = ((((1) < args__20720__auto__.length))?(new cljs.core.IndexedSeq(args__20720__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20721__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__21301){
var vec__21302 = p__21301;
var default$ = cljs.core.nth.call(null,vec__21302,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq21299){
var G__21300 = cljs.core.first.call(null,seq21299);
var seq21299__$1 = cljs.core.next.call(null,seq21299);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__21300,seq21299__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__20720__auto__ = [];
var len__20713__auto___21308 = arguments.length;
var i__20714__auto___21309 = (0);
while(true){
if((i__20714__auto___21309 < len__20713__auto___21308)){
args__20720__auto__.push((arguments[i__20714__auto___21309]));

var G__21310 = (i__20714__auto___21309 + (1));
i__20714__auto___21309 = G__21310;
continue;
} else {
}
break;
}

var argseq__20721__auto__ = ((((1) < args__20720__auto__.length))?(new cljs.core.IndexedSeq(args__20720__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20721__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq21306){
var G__21307 = cljs.core.first.call(null,seq21306);
var seq21306__$1 = cljs.core.next.call(null,seq21306);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21307,seq21306__$1);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__21311_SHARP_){
return cljs.core.assoc_in.call(null,p1__21311_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__20720__auto__ = [];
var len__20713__auto___21316 = arguments.length;
var i__20714__auto___21317 = (0);
while(true){
if((i__20714__auto___21317 < len__20713__auto___21316)){
args__20720__auto__.push((arguments[i__20714__auto___21317]));

var G__21318 = (i__20714__auto___21317 + (1));
i__20714__auto___21317 = G__21318;
continue;
} else {
}
break;
}

var argseq__20721__auto__ = ((((1) < args__20720__auto__.length))?(new cljs.core.IndexedSeq(args__20720__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20721__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__21314){
var vec__21315 = p__21314;
var default$ = cljs.core.nth.call(null,vec__21315,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq21312){
var G__21313 = cljs.core.first.call(null,seq21312);
var seq21312__$1 = cljs.core.next.call(null,seq21312);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21313,seq21312__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__20720__auto__ = [];
var len__20713__auto___21323 = arguments.length;
var i__20714__auto___21324 = (0);
while(true){
if((i__20714__auto___21324 < len__20713__auto___21323)){
args__20720__auto__.push((arguments[i__20714__auto___21324]));

var G__21325 = (i__20714__auto___21324 + (1));
i__20714__auto___21324 = G__21325;
continue;
} else {
}
break;
}

var argseq__20721__auto__ = ((((1) < args__20720__auto__.length))?(new cljs.core.IndexedSeq(args__20720__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20721__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__21321){
var vec__21322 = p__21321;
var default$ = cljs.core.nth.call(null,vec__21322,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq21319){
var G__21320 = cljs.core.first.call(null,seq21319);
var seq21319__$1 = cljs.core.next.call(null,seq21319);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21320,seq21319__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__20720__auto__ = [];
var len__20713__auto___21330 = arguments.length;
var i__20714__auto___21331 = (0);
while(true){
if((i__20714__auto___21331 < len__20713__auto___21330)){
args__20720__auto__.push((arguments[i__20714__auto___21331]));

var G__21332 = (i__20714__auto___21331 + (1));
i__20714__auto___21331 = G__21332;
continue;
} else {
}
break;
}

var argseq__20721__auto__ = ((((2) < args__20720__auto__.length))?(new cljs.core.IndexedSeq(args__20720__auto__.slice((2)),(0))):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20721__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__21326_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__21326_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq21327){
var G__21328 = cljs.core.first.call(null,seq21327);
var seq21327__$1 = cljs.core.next.call(null,seq21327);
var G__21329 = cljs.core.first.call(null,seq21327__$1);
var seq21327__$2 = cljs.core.next.call(null,seq21327__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21328,G__21329,seq21327__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__20720__auto__ = [];
var len__20713__auto___21337 = arguments.length;
var i__20714__auto___21338 = (0);
while(true){
if((i__20714__auto___21338 < len__20713__auto___21337)){
args__20720__auto__.push((arguments[i__20714__auto___21338]));

var G__21339 = (i__20714__auto___21338 + (1));
i__20714__auto___21338 = G__21339;
continue;
} else {
}
break;
}

var argseq__20721__auto__ = ((((2) < args__20720__auto__.length))?(new cljs.core.IndexedSeq(args__20720__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20721__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__21333_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__21333_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq21334){
var G__21335 = cljs.core.first.call(null,seq21334);
var seq21334__$1 = cljs.core.next.call(null,seq21334);
var G__21336 = cljs.core.first.call(null,seq21334__$1);
var seq21334__$2 = cljs.core.next.call(null,seq21334__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21335,G__21336,seq21334__$2);
});

//# sourceMappingURL=session.js.map