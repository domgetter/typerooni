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
var seq__26336_26350 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26337_26351 = null;
var count__26338_26352 = (0);
var i__26339_26353 = (0);
while(true){
if((i__26339_26353 < count__26338_26352)){
var f_26354 = cljs.core._nth.call(null,chunk__26337_26351,i__26339_26353);
cljs.core.println.call(null,"  ",f_26354);

var G__26355 = seq__26336_26350;
var G__26356 = chunk__26337_26351;
var G__26357 = count__26338_26352;
var G__26358 = (i__26339_26353 + (1));
seq__26336_26350 = G__26355;
chunk__26337_26351 = G__26356;
count__26338_26352 = G__26357;
i__26339_26353 = G__26358;
continue;
} else {
var temp__4425__auto___26359 = cljs.core.seq.call(null,seq__26336_26350);
if(temp__4425__auto___26359){
var seq__26336_26360__$1 = temp__4425__auto___26359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26336_26360__$1)){
var c__20538__auto___26361 = cljs.core.chunk_first.call(null,seq__26336_26360__$1);
var G__26362 = cljs.core.chunk_rest.call(null,seq__26336_26360__$1);
var G__26363 = c__20538__auto___26361;
var G__26364 = cljs.core.count.call(null,c__20538__auto___26361);
var G__26365 = (0);
seq__26336_26350 = G__26362;
chunk__26337_26351 = G__26363;
count__26338_26352 = G__26364;
i__26339_26353 = G__26365;
continue;
} else {
var f_26366 = cljs.core.first.call(null,seq__26336_26360__$1);
cljs.core.println.call(null,"  ",f_26366);

var G__26367 = cljs.core.next.call(null,seq__26336_26360__$1);
var G__26368 = null;
var G__26369 = (0);
var G__26370 = (0);
seq__26336_26350 = G__26367;
chunk__26337_26351 = G__26368;
count__26338_26352 = G__26369;
i__26339_26353 = G__26370;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26371 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19735__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19735__auto__)){
return or__19735__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26371);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26371)))?cljs.core.second.call(null,arglists_26371):arglists_26371));
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
var seq__26340 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26341 = null;
var count__26342 = (0);
var i__26343 = (0);
while(true){
if((i__26343 < count__26342)){
var vec__26344 = cljs.core._nth.call(null,chunk__26341,i__26343);
var name = cljs.core.nth.call(null,vec__26344,(0),null);
var map__26345 = cljs.core.nth.call(null,vec__26344,(1),null);
var map__26345__$1 = ((((!((map__26345 == null)))?((((map__26345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26345):map__26345);
var doc = cljs.core.get.call(null,map__26345__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26345__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26372 = seq__26340;
var G__26373 = chunk__26341;
var G__26374 = count__26342;
var G__26375 = (i__26343 + (1));
seq__26340 = G__26372;
chunk__26341 = G__26373;
count__26342 = G__26374;
i__26343 = G__26375;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26340);
if(temp__4425__auto__){
var seq__26340__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26340__$1)){
var c__20538__auto__ = cljs.core.chunk_first.call(null,seq__26340__$1);
var G__26376 = cljs.core.chunk_rest.call(null,seq__26340__$1);
var G__26377 = c__20538__auto__;
var G__26378 = cljs.core.count.call(null,c__20538__auto__);
var G__26379 = (0);
seq__26340 = G__26376;
chunk__26341 = G__26377;
count__26342 = G__26378;
i__26343 = G__26379;
continue;
} else {
var vec__26347 = cljs.core.first.call(null,seq__26340__$1);
var name = cljs.core.nth.call(null,vec__26347,(0),null);
var map__26348 = cljs.core.nth.call(null,vec__26347,(1),null);
var map__26348__$1 = ((((!((map__26348 == null)))?((((map__26348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26348):map__26348);
var doc = cljs.core.get.call(null,map__26348__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26348__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26380 = cljs.core.next.call(null,seq__26340__$1);
var G__26381 = null;
var G__26382 = (0);
var G__26383 = (0);
seq__26340 = G__26380;
chunk__26341 = G__26381;
count__26342 = G__26382;
i__26343 = G__26383;
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