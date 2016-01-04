// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26266_26280 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26267_26281 = null;
var count__26268_26282 = (0);
var i__26269_26283 = (0);
while(true){
if((i__26269_26283 < count__26268_26282)){
var f_26284 = cljs.core._nth.call(null,chunk__26267_26281,i__26269_26283);
cljs.core.println.call(null,"  ",f_26284);

var G__26285 = seq__26266_26280;
var G__26286 = chunk__26267_26281;
var G__26287 = count__26268_26282;
var G__26288 = (i__26269_26283 + (1));
seq__26266_26280 = G__26285;
chunk__26267_26281 = G__26286;
count__26268_26282 = G__26287;
i__26269_26283 = G__26288;
continue;
} else {
var temp__4425__auto___26289 = cljs.core.seq.call(null,seq__26266_26280);
if(temp__4425__auto___26289){
var seq__26266_26290__$1 = temp__4425__auto___26289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26266_26290__$1)){
var c__20458__auto___26291 = cljs.core.chunk_first.call(null,seq__26266_26290__$1);
var G__26292 = cljs.core.chunk_rest.call(null,seq__26266_26290__$1);
var G__26293 = c__20458__auto___26291;
var G__26294 = cljs.core.count.call(null,c__20458__auto___26291);
var G__26295 = (0);
seq__26266_26280 = G__26292;
chunk__26267_26281 = G__26293;
count__26268_26282 = G__26294;
i__26269_26283 = G__26295;
continue;
} else {
var f_26296 = cljs.core.first.call(null,seq__26266_26290__$1);
cljs.core.println.call(null,"  ",f_26296);

var G__26297 = cljs.core.next.call(null,seq__26266_26290__$1);
var G__26298 = null;
var G__26299 = (0);
var G__26300 = (0);
seq__26266_26280 = G__26297;
chunk__26267_26281 = G__26298;
count__26268_26282 = G__26299;
i__26269_26283 = G__26300;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26301 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19655__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19655__auto__)){
return or__19655__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26301);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26301)))?cljs.core.second.call(null,arglists_26301):arglists_26301));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26270 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26271 = null;
var count__26272 = (0);
var i__26273 = (0);
while(true){
if((i__26273 < count__26272)){
var vec__26274 = cljs.core._nth.call(null,chunk__26271,i__26273);
var name = cljs.core.nth.call(null,vec__26274,(0),null);
var map__26275 = cljs.core.nth.call(null,vec__26274,(1),null);
var map__26275__$1 = ((((!((map__26275 == null)))?((((map__26275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26275):map__26275);
var doc = cljs.core.get.call(null,map__26275__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26275__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26302 = seq__26270;
var G__26303 = chunk__26271;
var G__26304 = count__26272;
var G__26305 = (i__26273 + (1));
seq__26270 = G__26302;
chunk__26271 = G__26303;
count__26272 = G__26304;
i__26273 = G__26305;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26270);
if(temp__4425__auto__){
var seq__26270__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26270__$1)){
var c__20458__auto__ = cljs.core.chunk_first.call(null,seq__26270__$1);
var G__26306 = cljs.core.chunk_rest.call(null,seq__26270__$1);
var G__26307 = c__20458__auto__;
var G__26308 = cljs.core.count.call(null,c__20458__auto__);
var G__26309 = (0);
seq__26270 = G__26306;
chunk__26271 = G__26307;
count__26272 = G__26308;
i__26273 = G__26309;
continue;
} else {
var vec__26277 = cljs.core.first.call(null,seq__26270__$1);
var name = cljs.core.nth.call(null,vec__26277,(0),null);
var map__26278 = cljs.core.nth.call(null,vec__26277,(1),null);
var map__26278__$1 = ((((!((map__26278 == null)))?((((map__26278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26278):map__26278);
var doc = cljs.core.get.call(null,map__26278__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26278__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26310 = cljs.core.next.call(null,seq__26270__$1);
var G__26311 = null;
var G__26312 = (0);
var G__26313 = (0);
seq__26270 = G__26310;
chunk__26271 = G__26311;
count__26272 = G__26312;
i__26273 = G__26313;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map