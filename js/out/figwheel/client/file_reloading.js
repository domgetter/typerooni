// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__19655__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19655__auto__){
return or__19655__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__19655__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19655__auto__)){
return or__19655__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25242_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25242_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25247 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25248 = null;
var count__25249 = (0);
var i__25250 = (0);
while(true){
if((i__25250 < count__25249)){
var n = cljs.core._nth.call(null,chunk__25248,i__25250);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25251 = seq__25247;
var G__25252 = chunk__25248;
var G__25253 = count__25249;
var G__25254 = (i__25250 + (1));
seq__25247 = G__25251;
chunk__25248 = G__25252;
count__25249 = G__25253;
i__25250 = G__25254;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25247);
if(temp__4425__auto__){
var seq__25247__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25247__$1)){
var c__20458__auto__ = cljs.core.chunk_first.call(null,seq__25247__$1);
var G__25255 = cljs.core.chunk_rest.call(null,seq__25247__$1);
var G__25256 = c__20458__auto__;
var G__25257 = cljs.core.count.call(null,c__20458__auto__);
var G__25258 = (0);
seq__25247 = G__25255;
chunk__25248 = G__25256;
count__25249 = G__25257;
i__25250 = G__25258;
continue;
} else {
var n = cljs.core.first.call(null,seq__25247__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25259 = cljs.core.next.call(null,seq__25247__$1);
var G__25260 = null;
var G__25261 = (0);
var G__25262 = (0);
seq__25247 = G__25259;
chunk__25248 = G__25260;
count__25249 = G__25261;
i__25250 = G__25262;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25301_25308 = cljs.core.seq.call(null,deps);
var chunk__25302_25309 = null;
var count__25303_25310 = (0);
var i__25304_25311 = (0);
while(true){
if((i__25304_25311 < count__25303_25310)){
var dep_25312 = cljs.core._nth.call(null,chunk__25302_25309,i__25304_25311);
topo_sort_helper_STAR_.call(null,dep_25312,(depth + (1)),state);

var G__25313 = seq__25301_25308;
var G__25314 = chunk__25302_25309;
var G__25315 = count__25303_25310;
var G__25316 = (i__25304_25311 + (1));
seq__25301_25308 = G__25313;
chunk__25302_25309 = G__25314;
count__25303_25310 = G__25315;
i__25304_25311 = G__25316;
continue;
} else {
var temp__4425__auto___25317 = cljs.core.seq.call(null,seq__25301_25308);
if(temp__4425__auto___25317){
var seq__25301_25318__$1 = temp__4425__auto___25317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25301_25318__$1)){
var c__20458__auto___25319 = cljs.core.chunk_first.call(null,seq__25301_25318__$1);
var G__25320 = cljs.core.chunk_rest.call(null,seq__25301_25318__$1);
var G__25321 = c__20458__auto___25319;
var G__25322 = cljs.core.count.call(null,c__20458__auto___25319);
var G__25323 = (0);
seq__25301_25308 = G__25320;
chunk__25302_25309 = G__25321;
count__25303_25310 = G__25322;
i__25304_25311 = G__25323;
continue;
} else {
var dep_25324 = cljs.core.first.call(null,seq__25301_25318__$1);
topo_sort_helper_STAR_.call(null,dep_25324,(depth + (1)),state);

var G__25325 = cljs.core.next.call(null,seq__25301_25318__$1);
var G__25326 = null;
var G__25327 = (0);
var G__25328 = (0);
seq__25301_25308 = G__25325;
chunk__25302_25309 = G__25326;
count__25303_25310 = G__25327;
i__25304_25311 = G__25328;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25305){
var vec__25307 = p__25305;
var x = cljs.core.nth.call(null,vec__25307,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25307,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25307,x,xs,get_deps__$1){
return (function (p1__25263_SHARP_){
return clojure.set.difference.call(null,p1__25263_SHARP_,x);
});})(vec__25307,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25341 = cljs.core.seq.call(null,provides);
var chunk__25342 = null;
var count__25343 = (0);
var i__25344 = (0);
while(true){
if((i__25344 < count__25343)){
var prov = cljs.core._nth.call(null,chunk__25342,i__25344);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25345_25353 = cljs.core.seq.call(null,requires);
var chunk__25346_25354 = null;
var count__25347_25355 = (0);
var i__25348_25356 = (0);
while(true){
if((i__25348_25356 < count__25347_25355)){
var req_25357 = cljs.core._nth.call(null,chunk__25346_25354,i__25348_25356);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25357,prov);

var G__25358 = seq__25345_25353;
var G__25359 = chunk__25346_25354;
var G__25360 = count__25347_25355;
var G__25361 = (i__25348_25356 + (1));
seq__25345_25353 = G__25358;
chunk__25346_25354 = G__25359;
count__25347_25355 = G__25360;
i__25348_25356 = G__25361;
continue;
} else {
var temp__4425__auto___25362 = cljs.core.seq.call(null,seq__25345_25353);
if(temp__4425__auto___25362){
var seq__25345_25363__$1 = temp__4425__auto___25362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25345_25363__$1)){
var c__20458__auto___25364 = cljs.core.chunk_first.call(null,seq__25345_25363__$1);
var G__25365 = cljs.core.chunk_rest.call(null,seq__25345_25363__$1);
var G__25366 = c__20458__auto___25364;
var G__25367 = cljs.core.count.call(null,c__20458__auto___25364);
var G__25368 = (0);
seq__25345_25353 = G__25365;
chunk__25346_25354 = G__25366;
count__25347_25355 = G__25367;
i__25348_25356 = G__25368;
continue;
} else {
var req_25369 = cljs.core.first.call(null,seq__25345_25363__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25369,prov);

var G__25370 = cljs.core.next.call(null,seq__25345_25363__$1);
var G__25371 = null;
var G__25372 = (0);
var G__25373 = (0);
seq__25345_25353 = G__25370;
chunk__25346_25354 = G__25371;
count__25347_25355 = G__25372;
i__25348_25356 = G__25373;
continue;
}
} else {
}
}
break;
}

var G__25374 = seq__25341;
var G__25375 = chunk__25342;
var G__25376 = count__25343;
var G__25377 = (i__25344 + (1));
seq__25341 = G__25374;
chunk__25342 = G__25375;
count__25343 = G__25376;
i__25344 = G__25377;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25341);
if(temp__4425__auto__){
var seq__25341__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25341__$1)){
var c__20458__auto__ = cljs.core.chunk_first.call(null,seq__25341__$1);
var G__25378 = cljs.core.chunk_rest.call(null,seq__25341__$1);
var G__25379 = c__20458__auto__;
var G__25380 = cljs.core.count.call(null,c__20458__auto__);
var G__25381 = (0);
seq__25341 = G__25378;
chunk__25342 = G__25379;
count__25343 = G__25380;
i__25344 = G__25381;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25341__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25349_25382 = cljs.core.seq.call(null,requires);
var chunk__25350_25383 = null;
var count__25351_25384 = (0);
var i__25352_25385 = (0);
while(true){
if((i__25352_25385 < count__25351_25384)){
var req_25386 = cljs.core._nth.call(null,chunk__25350_25383,i__25352_25385);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25386,prov);

var G__25387 = seq__25349_25382;
var G__25388 = chunk__25350_25383;
var G__25389 = count__25351_25384;
var G__25390 = (i__25352_25385 + (1));
seq__25349_25382 = G__25387;
chunk__25350_25383 = G__25388;
count__25351_25384 = G__25389;
i__25352_25385 = G__25390;
continue;
} else {
var temp__4425__auto___25391__$1 = cljs.core.seq.call(null,seq__25349_25382);
if(temp__4425__auto___25391__$1){
var seq__25349_25392__$1 = temp__4425__auto___25391__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25349_25392__$1)){
var c__20458__auto___25393 = cljs.core.chunk_first.call(null,seq__25349_25392__$1);
var G__25394 = cljs.core.chunk_rest.call(null,seq__25349_25392__$1);
var G__25395 = c__20458__auto___25393;
var G__25396 = cljs.core.count.call(null,c__20458__auto___25393);
var G__25397 = (0);
seq__25349_25382 = G__25394;
chunk__25350_25383 = G__25395;
count__25351_25384 = G__25396;
i__25352_25385 = G__25397;
continue;
} else {
var req_25398 = cljs.core.first.call(null,seq__25349_25392__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25398,prov);

var G__25399 = cljs.core.next.call(null,seq__25349_25392__$1);
var G__25400 = null;
var G__25401 = (0);
var G__25402 = (0);
seq__25349_25382 = G__25399;
chunk__25350_25383 = G__25400;
count__25351_25384 = G__25401;
i__25352_25385 = G__25402;
continue;
}
} else {
}
}
break;
}

var G__25403 = cljs.core.next.call(null,seq__25341__$1);
var G__25404 = null;
var G__25405 = (0);
var G__25406 = (0);
seq__25341 = G__25403;
chunk__25342 = G__25404;
count__25343 = G__25405;
i__25344 = G__25406;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25411_25415 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25412_25416 = null;
var count__25413_25417 = (0);
var i__25414_25418 = (0);
while(true){
if((i__25414_25418 < count__25413_25417)){
var ns_25419 = cljs.core._nth.call(null,chunk__25412_25416,i__25414_25418);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25419);

var G__25420 = seq__25411_25415;
var G__25421 = chunk__25412_25416;
var G__25422 = count__25413_25417;
var G__25423 = (i__25414_25418 + (1));
seq__25411_25415 = G__25420;
chunk__25412_25416 = G__25421;
count__25413_25417 = G__25422;
i__25414_25418 = G__25423;
continue;
} else {
var temp__4425__auto___25424 = cljs.core.seq.call(null,seq__25411_25415);
if(temp__4425__auto___25424){
var seq__25411_25425__$1 = temp__4425__auto___25424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25411_25425__$1)){
var c__20458__auto___25426 = cljs.core.chunk_first.call(null,seq__25411_25425__$1);
var G__25427 = cljs.core.chunk_rest.call(null,seq__25411_25425__$1);
var G__25428 = c__20458__auto___25426;
var G__25429 = cljs.core.count.call(null,c__20458__auto___25426);
var G__25430 = (0);
seq__25411_25415 = G__25427;
chunk__25412_25416 = G__25428;
count__25413_25417 = G__25429;
i__25414_25418 = G__25430;
continue;
} else {
var ns_25431 = cljs.core.first.call(null,seq__25411_25425__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25431);

var G__25432 = cljs.core.next.call(null,seq__25411_25425__$1);
var G__25433 = null;
var G__25434 = (0);
var G__25435 = (0);
seq__25411_25415 = G__25432;
chunk__25412_25416 = G__25433;
count__25413_25417 = G__25434;
i__25414_25418 = G__25435;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__19655__auto__ = goog.require__;
if(cljs.core.truth_(or__19655__auto__)){
return or__19655__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25436__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25436 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25437__i = 0, G__25437__a = new Array(arguments.length -  0);
while (G__25437__i < G__25437__a.length) {G__25437__a[G__25437__i] = arguments[G__25437__i + 0]; ++G__25437__i;}
  args = new cljs.core.IndexedSeq(G__25437__a,0);
} 
return G__25436__delegate.call(this,args);};
G__25436.cljs$lang$maxFixedArity = 0;
G__25436.cljs$lang$applyTo = (function (arglist__25438){
var args = cljs.core.seq(arglist__25438);
return G__25436__delegate(args);
});
G__25436.cljs$core$IFn$_invoke$arity$variadic = G__25436__delegate;
return G__25436;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25440 = cljs.core._EQ_;
var expr__25441 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25440.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25441))){
var path_parts = ((function (pred__25440,expr__25441){
return (function (p1__25439_SHARP_){
return clojure.string.split.call(null,p1__25439_SHARP_,/[\/\\]/);
});})(pred__25440,expr__25441))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25440,expr__25441){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25443){if((e25443 instanceof Error)){
var e = e25443;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25443;

}
}})());
});
;})(path_parts,sep,root,pred__25440,expr__25441))
} else {
if(cljs.core.truth_(pred__25440.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25441))){
return ((function (pred__25440,expr__25441){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25440,expr__25441){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25440,expr__25441))
);

return deferred.addErrback(((function (deferred,pred__25440,expr__25441){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25440,expr__25441))
);
});
;})(pred__25440,expr__25441))
} else {
return ((function (pred__25440,expr__25441){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25440,expr__25441))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25444,callback){
var map__25447 = p__25444;
var map__25447__$1 = ((((!((map__25447 == null)))?((((map__25447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25447):map__25447);
var file_msg = map__25447__$1;
var request_url = cljs.core.get.call(null,map__25447__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25447,map__25447__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25447,map__25447__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto__){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto__){
return (function (state_25471){
var state_val_25472 = (state_25471[(1)]);
if((state_val_25472 === (7))){
var inst_25467 = (state_25471[(2)]);
var state_25471__$1 = state_25471;
var statearr_25473_25493 = state_25471__$1;
(statearr_25473_25493[(2)] = inst_25467);

(statearr_25473_25493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25472 === (1))){
var state_25471__$1 = state_25471;
var statearr_25474_25494 = state_25471__$1;
(statearr_25474_25494[(2)] = null);

(statearr_25474_25494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25472 === (4))){
var inst_25451 = (state_25471[(7)]);
var inst_25451__$1 = (state_25471[(2)]);
var state_25471__$1 = (function (){var statearr_25475 = state_25471;
(statearr_25475[(7)] = inst_25451__$1);

return statearr_25475;
})();
if(cljs.core.truth_(inst_25451__$1)){
var statearr_25476_25495 = state_25471__$1;
(statearr_25476_25495[(1)] = (5));

} else {
var statearr_25477_25496 = state_25471__$1;
(statearr_25477_25496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25472 === (6))){
var state_25471__$1 = state_25471;
var statearr_25478_25497 = state_25471__$1;
(statearr_25478_25497[(2)] = null);

(statearr_25478_25497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25472 === (3))){
var inst_25469 = (state_25471[(2)]);
var state_25471__$1 = state_25471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25471__$1,inst_25469);
} else {
if((state_val_25472 === (2))){
var state_25471__$1 = state_25471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25471__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25472 === (11))){
var inst_25463 = (state_25471[(2)]);
var state_25471__$1 = (function (){var statearr_25479 = state_25471;
(statearr_25479[(8)] = inst_25463);

return statearr_25479;
})();
var statearr_25480_25498 = state_25471__$1;
(statearr_25480_25498[(2)] = null);

(statearr_25480_25498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25472 === (9))){
var inst_25455 = (state_25471[(9)]);
var inst_25457 = (state_25471[(10)]);
var inst_25459 = inst_25457.call(null,inst_25455);
var state_25471__$1 = state_25471;
var statearr_25481_25499 = state_25471__$1;
(statearr_25481_25499[(2)] = inst_25459);

(statearr_25481_25499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25472 === (5))){
var inst_25451 = (state_25471[(7)]);
var inst_25453 = figwheel.client.file_reloading.blocking_load.call(null,inst_25451);
var state_25471__$1 = state_25471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25471__$1,(8),inst_25453);
} else {
if((state_val_25472 === (10))){
var inst_25455 = (state_25471[(9)]);
var inst_25461 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25455);
var state_25471__$1 = state_25471;
var statearr_25482_25500 = state_25471__$1;
(statearr_25482_25500[(2)] = inst_25461);

(statearr_25482_25500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25472 === (8))){
var inst_25451 = (state_25471[(7)]);
var inst_25457 = (state_25471[(10)]);
var inst_25455 = (state_25471[(2)]);
var inst_25456 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25457__$1 = cljs.core.get.call(null,inst_25456,inst_25451);
var state_25471__$1 = (function (){var statearr_25483 = state_25471;
(statearr_25483[(9)] = inst_25455);

(statearr_25483[(10)] = inst_25457__$1);

return statearr_25483;
})();
if(cljs.core.truth_(inst_25457__$1)){
var statearr_25484_25501 = state_25471__$1;
(statearr_25484_25501[(1)] = (9));

} else {
var statearr_25485_25502 = state_25471__$1;
(statearr_25485_25502[(1)] = (10));

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
});})(c__22348__auto__))
;
return ((function (switch__22236__auto__,c__22348__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22237__auto__ = null;
var figwheel$client$file_reloading$state_machine__22237__auto____0 = (function (){
var statearr_25489 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25489[(0)] = figwheel$client$file_reloading$state_machine__22237__auto__);

(statearr_25489[(1)] = (1));

return statearr_25489;
});
var figwheel$client$file_reloading$state_machine__22237__auto____1 = (function (state_25471){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_25471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e25490){if((e25490 instanceof Object)){
var ex__22240__auto__ = e25490;
var statearr_25491_25503 = state_25471;
(statearr_25491_25503[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25504 = state_25471;
state_25471 = G__25504;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22237__auto__ = function(state_25471){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22237__auto____1.call(this,state_25471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22237__auto____0;
figwheel$client$file_reloading$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22237__auto____1;
return figwheel$client$file_reloading$state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto__))
})();
var state__22350__auto__ = (function (){var statearr_25492 = f__22349__auto__.call(null);
(statearr_25492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto__);

return statearr_25492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto__))
);

return c__22348__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25505,callback){
var map__25508 = p__25505;
var map__25508__$1 = ((((!((map__25508 == null)))?((((map__25508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25508):map__25508);
var file_msg = map__25508__$1;
var namespace = cljs.core.get.call(null,map__25508__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25508,map__25508__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25508,map__25508__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25510){
var map__25513 = p__25510;
var map__25513__$1 = ((((!((map__25513 == null)))?((((map__25513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25513):map__25513);
var file_msg = map__25513__$1;
var namespace = cljs.core.get.call(null,map__25513__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19643__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19643__auto__){
var or__19655__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19655__auto__)){
return or__19655__auto__;
} else {
var or__19655__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19655__auto____$1)){
return or__19655__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19643__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25515,callback){
var map__25518 = p__25515;
var map__25518__$1 = ((((!((map__25518 == null)))?((((map__25518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25518):map__25518);
var file_msg = map__25518__$1;
var request_url = cljs.core.get.call(null,map__25518__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25518__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22348__auto___25606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto___25606,out){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto___25606,out){
return (function (state_25588){
var state_val_25589 = (state_25588[(1)]);
if((state_val_25589 === (1))){
var inst_25566 = cljs.core.nth.call(null,files,(0),null);
var inst_25567 = cljs.core.nthnext.call(null,files,(1));
var inst_25568 = files;
var state_25588__$1 = (function (){var statearr_25590 = state_25588;
(statearr_25590[(7)] = inst_25567);

(statearr_25590[(8)] = inst_25568);

(statearr_25590[(9)] = inst_25566);

return statearr_25590;
})();
var statearr_25591_25607 = state_25588__$1;
(statearr_25591_25607[(2)] = null);

(statearr_25591_25607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (2))){
var inst_25571 = (state_25588[(10)]);
var inst_25568 = (state_25588[(8)]);
var inst_25571__$1 = cljs.core.nth.call(null,inst_25568,(0),null);
var inst_25572 = cljs.core.nthnext.call(null,inst_25568,(1));
var inst_25573 = (inst_25571__$1 == null);
var inst_25574 = cljs.core.not.call(null,inst_25573);
var state_25588__$1 = (function (){var statearr_25592 = state_25588;
(statearr_25592[(10)] = inst_25571__$1);

(statearr_25592[(11)] = inst_25572);

return statearr_25592;
})();
if(inst_25574){
var statearr_25593_25608 = state_25588__$1;
(statearr_25593_25608[(1)] = (4));

} else {
var statearr_25594_25609 = state_25588__$1;
(statearr_25594_25609[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (3))){
var inst_25586 = (state_25588[(2)]);
var state_25588__$1 = state_25588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25588__$1,inst_25586);
} else {
if((state_val_25589 === (4))){
var inst_25571 = (state_25588[(10)]);
var inst_25576 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25571);
var state_25588__$1 = state_25588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25588__$1,(7),inst_25576);
} else {
if((state_val_25589 === (5))){
var inst_25582 = cljs.core.async.close_BANG_.call(null,out);
var state_25588__$1 = state_25588;
var statearr_25595_25610 = state_25588__$1;
(statearr_25595_25610[(2)] = inst_25582);

(statearr_25595_25610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (6))){
var inst_25584 = (state_25588[(2)]);
var state_25588__$1 = state_25588;
var statearr_25596_25611 = state_25588__$1;
(statearr_25596_25611[(2)] = inst_25584);

(statearr_25596_25611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25589 === (7))){
var inst_25572 = (state_25588[(11)]);
var inst_25578 = (state_25588[(2)]);
var inst_25579 = cljs.core.async.put_BANG_.call(null,out,inst_25578);
var inst_25568 = inst_25572;
var state_25588__$1 = (function (){var statearr_25597 = state_25588;
(statearr_25597[(12)] = inst_25579);

(statearr_25597[(8)] = inst_25568);

return statearr_25597;
})();
var statearr_25598_25612 = state_25588__$1;
(statearr_25598_25612[(2)] = null);

(statearr_25598_25612[(1)] = (2));


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
});})(c__22348__auto___25606,out))
;
return ((function (switch__22236__auto__,c__22348__auto___25606,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto____0 = (function (){
var statearr_25602 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25602[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto__);

(statearr_25602[(1)] = (1));

return statearr_25602;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto____1 = (function (state_25588){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_25588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e25603){if((e25603 instanceof Object)){
var ex__22240__auto__ = e25603;
var statearr_25604_25613 = state_25588;
(statearr_25604_25613[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25614 = state_25588;
state_25588 = G__25614;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto__ = function(state_25588){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto____1.call(this,state_25588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto___25606,out))
})();
var state__22350__auto__ = (function (){var statearr_25605 = f__22349__auto__.call(null);
(statearr_25605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___25606);

return statearr_25605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto___25606,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25615,opts){
var map__25619 = p__25615;
var map__25619__$1 = ((((!((map__25619 == null)))?((((map__25619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25619):map__25619);
var eval_body__$1 = cljs.core.get.call(null,map__25619__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25619__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19643__auto__ = eval_body__$1;
if(cljs.core.truth_(and__19643__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__19643__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25621){var e = e25621;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25622_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25622_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25627){
var vec__25628 = p__25627;
var k = cljs.core.nth.call(null,vec__25628,(0),null);
var v = cljs.core.nth.call(null,vec__25628,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25629){
var vec__25630 = p__25629;
var k = cljs.core.nth.call(null,vec__25630,(0),null);
var v = cljs.core.nth.call(null,vec__25630,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25634,p__25635){
var map__25882 = p__25634;
var map__25882__$1 = ((((!((map__25882 == null)))?((((map__25882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25882):map__25882);
var opts = map__25882__$1;
var before_jsload = cljs.core.get.call(null,map__25882__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25882__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25882__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25883 = p__25635;
var map__25883__$1 = ((((!((map__25883 == null)))?((((map__25883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25883):map__25883);
var msg = map__25883__$1;
var files = cljs.core.get.call(null,map__25883__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25883__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25883__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26036){
var state_val_26037 = (state_26036[(1)]);
if((state_val_26037 === (7))){
var inst_25898 = (state_26036[(7)]);
var inst_25899 = (state_26036[(8)]);
var inst_25897 = (state_26036[(9)]);
var inst_25900 = (state_26036[(10)]);
var inst_25905 = cljs.core._nth.call(null,inst_25898,inst_25900);
var inst_25906 = figwheel.client.file_reloading.eval_body.call(null,inst_25905,opts);
var inst_25907 = (inst_25900 + (1));
var tmp26038 = inst_25898;
var tmp26039 = inst_25899;
var tmp26040 = inst_25897;
var inst_25897__$1 = tmp26040;
var inst_25898__$1 = tmp26038;
var inst_25899__$1 = tmp26039;
var inst_25900__$1 = inst_25907;
var state_26036__$1 = (function (){var statearr_26041 = state_26036;
(statearr_26041[(7)] = inst_25898__$1);

(statearr_26041[(8)] = inst_25899__$1);

(statearr_26041[(9)] = inst_25897__$1);

(statearr_26041[(11)] = inst_25906);

(statearr_26041[(10)] = inst_25900__$1);

return statearr_26041;
})();
var statearr_26042_26128 = state_26036__$1;
(statearr_26042_26128[(2)] = null);

(statearr_26042_26128[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (20))){
var inst_25940 = (state_26036[(12)]);
var inst_25948 = figwheel.client.file_reloading.sort_files.call(null,inst_25940);
var state_26036__$1 = state_26036;
var statearr_26043_26129 = state_26036__$1;
(statearr_26043_26129[(2)] = inst_25948);

(statearr_26043_26129[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (27))){
var state_26036__$1 = state_26036;
var statearr_26044_26130 = state_26036__$1;
(statearr_26044_26130[(2)] = null);

(statearr_26044_26130[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (1))){
var inst_25889 = (state_26036[(13)]);
var inst_25886 = before_jsload.call(null,files);
var inst_25887 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25888 = (function (){return ((function (inst_25889,inst_25886,inst_25887,state_val_26037,c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25631_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25631_SHARP_);
});
;})(inst_25889,inst_25886,inst_25887,state_val_26037,c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25889__$1 = cljs.core.filter.call(null,inst_25888,files);
var inst_25890 = cljs.core.not_empty.call(null,inst_25889__$1);
var state_26036__$1 = (function (){var statearr_26045 = state_26036;
(statearr_26045[(14)] = inst_25887);

(statearr_26045[(15)] = inst_25886);

(statearr_26045[(13)] = inst_25889__$1);

return statearr_26045;
})();
if(cljs.core.truth_(inst_25890)){
var statearr_26046_26131 = state_26036__$1;
(statearr_26046_26131[(1)] = (2));

} else {
var statearr_26047_26132 = state_26036__$1;
(statearr_26047_26132[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (24))){
var state_26036__$1 = state_26036;
var statearr_26048_26133 = state_26036__$1;
(statearr_26048_26133[(2)] = null);

(statearr_26048_26133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (39))){
var inst_25990 = (state_26036[(16)]);
var state_26036__$1 = state_26036;
var statearr_26049_26134 = state_26036__$1;
(statearr_26049_26134[(2)] = inst_25990);

(statearr_26049_26134[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (46))){
var inst_26031 = (state_26036[(2)]);
var state_26036__$1 = state_26036;
var statearr_26050_26135 = state_26036__$1;
(statearr_26050_26135[(2)] = inst_26031);

(statearr_26050_26135[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (4))){
var inst_25934 = (state_26036[(2)]);
var inst_25935 = cljs.core.List.EMPTY;
var inst_25936 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25935);
var inst_25937 = (function (){return ((function (inst_25934,inst_25935,inst_25936,state_val_26037,c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25632_SHARP_){
var and__19643__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25632_SHARP_);
if(cljs.core.truth_(and__19643__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25632_SHARP_));
} else {
return and__19643__auto__;
}
});
;})(inst_25934,inst_25935,inst_25936,state_val_26037,c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25938 = cljs.core.filter.call(null,inst_25937,files);
var inst_25939 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25940 = cljs.core.concat.call(null,inst_25938,inst_25939);
var state_26036__$1 = (function (){var statearr_26051 = state_26036;
(statearr_26051[(17)] = inst_25936);

(statearr_26051[(18)] = inst_25934);

(statearr_26051[(12)] = inst_25940);

return statearr_26051;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26052_26136 = state_26036__$1;
(statearr_26052_26136[(1)] = (16));

} else {
var statearr_26053_26137 = state_26036__$1;
(statearr_26053_26137[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (15))){
var inst_25924 = (state_26036[(2)]);
var state_26036__$1 = state_26036;
var statearr_26054_26138 = state_26036__$1;
(statearr_26054_26138[(2)] = inst_25924);

(statearr_26054_26138[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (21))){
var inst_25950 = (state_26036[(19)]);
var inst_25950__$1 = (state_26036[(2)]);
var inst_25951 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25950__$1);
var state_26036__$1 = (function (){var statearr_26055 = state_26036;
(statearr_26055[(19)] = inst_25950__$1);

return statearr_26055;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26036__$1,(22),inst_25951);
} else {
if((state_val_26037 === (31))){
var inst_26034 = (state_26036[(2)]);
var state_26036__$1 = state_26036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26036__$1,inst_26034);
} else {
if((state_val_26037 === (32))){
var inst_25990 = (state_26036[(16)]);
var inst_25995 = inst_25990.cljs$lang$protocol_mask$partition0$;
var inst_25996 = (inst_25995 & (64));
var inst_25997 = inst_25990.cljs$core$ISeq$;
var inst_25998 = (inst_25996) || (inst_25997);
var state_26036__$1 = state_26036;
if(cljs.core.truth_(inst_25998)){
var statearr_26056_26139 = state_26036__$1;
(statearr_26056_26139[(1)] = (35));

} else {
var statearr_26057_26140 = state_26036__$1;
(statearr_26057_26140[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (40))){
var inst_26011 = (state_26036[(20)]);
var inst_26010 = (state_26036[(2)]);
var inst_26011__$1 = cljs.core.get.call(null,inst_26010,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26012 = cljs.core.get.call(null,inst_26010,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26013 = cljs.core.not_empty.call(null,inst_26011__$1);
var state_26036__$1 = (function (){var statearr_26058 = state_26036;
(statearr_26058[(21)] = inst_26012);

(statearr_26058[(20)] = inst_26011__$1);

return statearr_26058;
})();
if(cljs.core.truth_(inst_26013)){
var statearr_26059_26141 = state_26036__$1;
(statearr_26059_26141[(1)] = (41));

} else {
var statearr_26060_26142 = state_26036__$1;
(statearr_26060_26142[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (33))){
var state_26036__$1 = state_26036;
var statearr_26061_26143 = state_26036__$1;
(statearr_26061_26143[(2)] = false);

(statearr_26061_26143[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (13))){
var inst_25910 = (state_26036[(22)]);
var inst_25914 = cljs.core.chunk_first.call(null,inst_25910);
var inst_25915 = cljs.core.chunk_rest.call(null,inst_25910);
var inst_25916 = cljs.core.count.call(null,inst_25914);
var inst_25897 = inst_25915;
var inst_25898 = inst_25914;
var inst_25899 = inst_25916;
var inst_25900 = (0);
var state_26036__$1 = (function (){var statearr_26062 = state_26036;
(statearr_26062[(7)] = inst_25898);

(statearr_26062[(8)] = inst_25899);

(statearr_26062[(9)] = inst_25897);

(statearr_26062[(10)] = inst_25900);

return statearr_26062;
})();
var statearr_26063_26144 = state_26036__$1;
(statearr_26063_26144[(2)] = null);

(statearr_26063_26144[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (22))){
var inst_25954 = (state_26036[(23)]);
var inst_25958 = (state_26036[(24)]);
var inst_25953 = (state_26036[(25)]);
var inst_25950 = (state_26036[(19)]);
var inst_25953__$1 = (state_26036[(2)]);
var inst_25954__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25953__$1);
var inst_25955 = (function (){var all_files = inst_25950;
var res_SINGLEQUOTE_ = inst_25953__$1;
var res = inst_25954__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25954,inst_25958,inst_25953,inst_25950,inst_25953__$1,inst_25954__$1,state_val_26037,c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25633_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25633_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25954,inst_25958,inst_25953,inst_25950,inst_25953__$1,inst_25954__$1,state_val_26037,c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25956 = cljs.core.filter.call(null,inst_25955,inst_25953__$1);
var inst_25957 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25958__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25957);
var inst_25959 = cljs.core.not_empty.call(null,inst_25958__$1);
var state_26036__$1 = (function (){var statearr_26064 = state_26036;
(statearr_26064[(23)] = inst_25954__$1);

(statearr_26064[(24)] = inst_25958__$1);

(statearr_26064[(26)] = inst_25956);

(statearr_26064[(25)] = inst_25953__$1);

return statearr_26064;
})();
if(cljs.core.truth_(inst_25959)){
var statearr_26065_26145 = state_26036__$1;
(statearr_26065_26145[(1)] = (23));

} else {
var statearr_26066_26146 = state_26036__$1;
(statearr_26066_26146[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (36))){
var state_26036__$1 = state_26036;
var statearr_26067_26147 = state_26036__$1;
(statearr_26067_26147[(2)] = false);

(statearr_26067_26147[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (41))){
var inst_26011 = (state_26036[(20)]);
var inst_26015 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26016 = cljs.core.map.call(null,inst_26015,inst_26011);
var inst_26017 = cljs.core.pr_str.call(null,inst_26016);
var inst_26018 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26017)].join('');
var inst_26019 = figwheel.client.utils.log.call(null,inst_26018);
var state_26036__$1 = state_26036;
var statearr_26068_26148 = state_26036__$1;
(statearr_26068_26148[(2)] = inst_26019);

(statearr_26068_26148[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (43))){
var inst_26012 = (state_26036[(21)]);
var inst_26022 = (state_26036[(2)]);
var inst_26023 = cljs.core.not_empty.call(null,inst_26012);
var state_26036__$1 = (function (){var statearr_26069 = state_26036;
(statearr_26069[(27)] = inst_26022);

return statearr_26069;
})();
if(cljs.core.truth_(inst_26023)){
var statearr_26070_26149 = state_26036__$1;
(statearr_26070_26149[(1)] = (44));

} else {
var statearr_26071_26150 = state_26036__$1;
(statearr_26071_26150[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (29))){
var inst_25954 = (state_26036[(23)]);
var inst_25990 = (state_26036[(16)]);
var inst_25958 = (state_26036[(24)]);
var inst_25956 = (state_26036[(26)]);
var inst_25953 = (state_26036[(25)]);
var inst_25950 = (state_26036[(19)]);
var inst_25986 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25989 = (function (){var all_files = inst_25950;
var res_SINGLEQUOTE_ = inst_25953;
var res = inst_25954;
var files_not_loaded = inst_25956;
var dependencies_that_loaded = inst_25958;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25954,inst_25990,inst_25958,inst_25956,inst_25953,inst_25950,inst_25986,state_val_26037,c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25988){
var map__26072 = p__25988;
var map__26072__$1 = ((((!((map__26072 == null)))?((((map__26072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26072):map__26072);
var namespace = cljs.core.get.call(null,map__26072__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25954,inst_25990,inst_25958,inst_25956,inst_25953,inst_25950,inst_25986,state_val_26037,c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25990__$1 = cljs.core.group_by.call(null,inst_25989,inst_25956);
var inst_25992 = (inst_25990__$1 == null);
var inst_25993 = cljs.core.not.call(null,inst_25992);
var state_26036__$1 = (function (){var statearr_26074 = state_26036;
(statearr_26074[(16)] = inst_25990__$1);

(statearr_26074[(28)] = inst_25986);

return statearr_26074;
})();
if(inst_25993){
var statearr_26075_26151 = state_26036__$1;
(statearr_26075_26151[(1)] = (32));

} else {
var statearr_26076_26152 = state_26036__$1;
(statearr_26076_26152[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (44))){
var inst_26012 = (state_26036[(21)]);
var inst_26025 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26012);
var inst_26026 = cljs.core.pr_str.call(null,inst_26025);
var inst_26027 = [cljs.core.str("not required: "),cljs.core.str(inst_26026)].join('');
var inst_26028 = figwheel.client.utils.log.call(null,inst_26027);
var state_26036__$1 = state_26036;
var statearr_26077_26153 = state_26036__$1;
(statearr_26077_26153[(2)] = inst_26028);

(statearr_26077_26153[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (6))){
var inst_25931 = (state_26036[(2)]);
var state_26036__$1 = state_26036;
var statearr_26078_26154 = state_26036__$1;
(statearr_26078_26154[(2)] = inst_25931);

(statearr_26078_26154[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (28))){
var inst_25956 = (state_26036[(26)]);
var inst_25983 = (state_26036[(2)]);
var inst_25984 = cljs.core.not_empty.call(null,inst_25956);
var state_26036__$1 = (function (){var statearr_26079 = state_26036;
(statearr_26079[(29)] = inst_25983);

return statearr_26079;
})();
if(cljs.core.truth_(inst_25984)){
var statearr_26080_26155 = state_26036__$1;
(statearr_26080_26155[(1)] = (29));

} else {
var statearr_26081_26156 = state_26036__$1;
(statearr_26081_26156[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (25))){
var inst_25954 = (state_26036[(23)]);
var inst_25970 = (state_26036[(2)]);
var inst_25971 = cljs.core.not_empty.call(null,inst_25954);
var state_26036__$1 = (function (){var statearr_26082 = state_26036;
(statearr_26082[(30)] = inst_25970);

return statearr_26082;
})();
if(cljs.core.truth_(inst_25971)){
var statearr_26083_26157 = state_26036__$1;
(statearr_26083_26157[(1)] = (26));

} else {
var statearr_26084_26158 = state_26036__$1;
(statearr_26084_26158[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (34))){
var inst_26005 = (state_26036[(2)]);
var state_26036__$1 = state_26036;
if(cljs.core.truth_(inst_26005)){
var statearr_26085_26159 = state_26036__$1;
(statearr_26085_26159[(1)] = (38));

} else {
var statearr_26086_26160 = state_26036__$1;
(statearr_26086_26160[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (17))){
var state_26036__$1 = state_26036;
var statearr_26087_26161 = state_26036__$1;
(statearr_26087_26161[(2)] = recompile_dependents);

(statearr_26087_26161[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (3))){
var state_26036__$1 = state_26036;
var statearr_26088_26162 = state_26036__$1;
(statearr_26088_26162[(2)] = null);

(statearr_26088_26162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (12))){
var inst_25927 = (state_26036[(2)]);
var state_26036__$1 = state_26036;
var statearr_26089_26163 = state_26036__$1;
(statearr_26089_26163[(2)] = inst_25927);

(statearr_26089_26163[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (2))){
var inst_25889 = (state_26036[(13)]);
var inst_25896 = cljs.core.seq.call(null,inst_25889);
var inst_25897 = inst_25896;
var inst_25898 = null;
var inst_25899 = (0);
var inst_25900 = (0);
var state_26036__$1 = (function (){var statearr_26090 = state_26036;
(statearr_26090[(7)] = inst_25898);

(statearr_26090[(8)] = inst_25899);

(statearr_26090[(9)] = inst_25897);

(statearr_26090[(10)] = inst_25900);

return statearr_26090;
})();
var statearr_26091_26164 = state_26036__$1;
(statearr_26091_26164[(2)] = null);

(statearr_26091_26164[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (23))){
var inst_25954 = (state_26036[(23)]);
var inst_25958 = (state_26036[(24)]);
var inst_25956 = (state_26036[(26)]);
var inst_25953 = (state_26036[(25)]);
var inst_25950 = (state_26036[(19)]);
var inst_25961 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25963 = (function (){var all_files = inst_25950;
var res_SINGLEQUOTE_ = inst_25953;
var res = inst_25954;
var files_not_loaded = inst_25956;
var dependencies_that_loaded = inst_25958;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25954,inst_25958,inst_25956,inst_25953,inst_25950,inst_25961,state_val_26037,c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25962){
var map__26092 = p__25962;
var map__26092__$1 = ((((!((map__26092 == null)))?((((map__26092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26092):map__26092);
var request_url = cljs.core.get.call(null,map__26092__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25954,inst_25958,inst_25956,inst_25953,inst_25950,inst_25961,state_val_26037,c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25964 = cljs.core.reverse.call(null,inst_25958);
var inst_25965 = cljs.core.map.call(null,inst_25963,inst_25964);
var inst_25966 = cljs.core.pr_str.call(null,inst_25965);
var inst_25967 = figwheel.client.utils.log.call(null,inst_25966);
var state_26036__$1 = (function (){var statearr_26094 = state_26036;
(statearr_26094[(31)] = inst_25961);

return statearr_26094;
})();
var statearr_26095_26165 = state_26036__$1;
(statearr_26095_26165[(2)] = inst_25967);

(statearr_26095_26165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (35))){
var state_26036__$1 = state_26036;
var statearr_26096_26166 = state_26036__$1;
(statearr_26096_26166[(2)] = true);

(statearr_26096_26166[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (19))){
var inst_25940 = (state_26036[(12)]);
var inst_25946 = figwheel.client.file_reloading.expand_files.call(null,inst_25940);
var state_26036__$1 = state_26036;
var statearr_26097_26167 = state_26036__$1;
(statearr_26097_26167[(2)] = inst_25946);

(statearr_26097_26167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (11))){
var state_26036__$1 = state_26036;
var statearr_26098_26168 = state_26036__$1;
(statearr_26098_26168[(2)] = null);

(statearr_26098_26168[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (9))){
var inst_25929 = (state_26036[(2)]);
var state_26036__$1 = state_26036;
var statearr_26099_26169 = state_26036__$1;
(statearr_26099_26169[(2)] = inst_25929);

(statearr_26099_26169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (5))){
var inst_25899 = (state_26036[(8)]);
var inst_25900 = (state_26036[(10)]);
var inst_25902 = (inst_25900 < inst_25899);
var inst_25903 = inst_25902;
var state_26036__$1 = state_26036;
if(cljs.core.truth_(inst_25903)){
var statearr_26100_26170 = state_26036__$1;
(statearr_26100_26170[(1)] = (7));

} else {
var statearr_26101_26171 = state_26036__$1;
(statearr_26101_26171[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (14))){
var inst_25910 = (state_26036[(22)]);
var inst_25919 = cljs.core.first.call(null,inst_25910);
var inst_25920 = figwheel.client.file_reloading.eval_body.call(null,inst_25919,opts);
var inst_25921 = cljs.core.next.call(null,inst_25910);
var inst_25897 = inst_25921;
var inst_25898 = null;
var inst_25899 = (0);
var inst_25900 = (0);
var state_26036__$1 = (function (){var statearr_26102 = state_26036;
(statearr_26102[(32)] = inst_25920);

(statearr_26102[(7)] = inst_25898);

(statearr_26102[(8)] = inst_25899);

(statearr_26102[(9)] = inst_25897);

(statearr_26102[(10)] = inst_25900);

return statearr_26102;
})();
var statearr_26103_26172 = state_26036__$1;
(statearr_26103_26172[(2)] = null);

(statearr_26103_26172[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (45))){
var state_26036__$1 = state_26036;
var statearr_26104_26173 = state_26036__$1;
(statearr_26104_26173[(2)] = null);

(statearr_26104_26173[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (26))){
var inst_25954 = (state_26036[(23)]);
var inst_25958 = (state_26036[(24)]);
var inst_25956 = (state_26036[(26)]);
var inst_25953 = (state_26036[(25)]);
var inst_25950 = (state_26036[(19)]);
var inst_25973 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25975 = (function (){var all_files = inst_25950;
var res_SINGLEQUOTE_ = inst_25953;
var res = inst_25954;
var files_not_loaded = inst_25956;
var dependencies_that_loaded = inst_25958;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25954,inst_25958,inst_25956,inst_25953,inst_25950,inst_25973,state_val_26037,c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25974){
var map__26105 = p__25974;
var map__26105__$1 = ((((!((map__26105 == null)))?((((map__26105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26105):map__26105);
var namespace = cljs.core.get.call(null,map__26105__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26105__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25954,inst_25958,inst_25956,inst_25953,inst_25950,inst_25973,state_val_26037,c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25976 = cljs.core.map.call(null,inst_25975,inst_25954);
var inst_25977 = cljs.core.pr_str.call(null,inst_25976);
var inst_25978 = figwheel.client.utils.log.call(null,inst_25977);
var inst_25979 = (function (){var all_files = inst_25950;
var res_SINGLEQUOTE_ = inst_25953;
var res = inst_25954;
var files_not_loaded = inst_25956;
var dependencies_that_loaded = inst_25958;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25954,inst_25958,inst_25956,inst_25953,inst_25950,inst_25973,inst_25975,inst_25976,inst_25977,inst_25978,state_val_26037,c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25954,inst_25958,inst_25956,inst_25953,inst_25950,inst_25973,inst_25975,inst_25976,inst_25977,inst_25978,state_val_26037,c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25980 = setTimeout(inst_25979,(10));
var state_26036__$1 = (function (){var statearr_26107 = state_26036;
(statearr_26107[(33)] = inst_25973);

(statearr_26107[(34)] = inst_25978);

return statearr_26107;
})();
var statearr_26108_26174 = state_26036__$1;
(statearr_26108_26174[(2)] = inst_25980);

(statearr_26108_26174[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (16))){
var state_26036__$1 = state_26036;
var statearr_26109_26175 = state_26036__$1;
(statearr_26109_26175[(2)] = reload_dependents);

(statearr_26109_26175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (38))){
var inst_25990 = (state_26036[(16)]);
var inst_26007 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25990);
var state_26036__$1 = state_26036;
var statearr_26110_26176 = state_26036__$1;
(statearr_26110_26176[(2)] = inst_26007);

(statearr_26110_26176[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (30))){
var state_26036__$1 = state_26036;
var statearr_26111_26177 = state_26036__$1;
(statearr_26111_26177[(2)] = null);

(statearr_26111_26177[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (10))){
var inst_25910 = (state_26036[(22)]);
var inst_25912 = cljs.core.chunked_seq_QMARK_.call(null,inst_25910);
var state_26036__$1 = state_26036;
if(inst_25912){
var statearr_26112_26178 = state_26036__$1;
(statearr_26112_26178[(1)] = (13));

} else {
var statearr_26113_26179 = state_26036__$1;
(statearr_26113_26179[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (18))){
var inst_25944 = (state_26036[(2)]);
var state_26036__$1 = state_26036;
if(cljs.core.truth_(inst_25944)){
var statearr_26114_26180 = state_26036__$1;
(statearr_26114_26180[(1)] = (19));

} else {
var statearr_26115_26181 = state_26036__$1;
(statearr_26115_26181[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (42))){
var state_26036__$1 = state_26036;
var statearr_26116_26182 = state_26036__$1;
(statearr_26116_26182[(2)] = null);

(statearr_26116_26182[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (37))){
var inst_26002 = (state_26036[(2)]);
var state_26036__$1 = state_26036;
var statearr_26117_26183 = state_26036__$1;
(statearr_26117_26183[(2)] = inst_26002);

(statearr_26117_26183[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (8))){
var inst_25897 = (state_26036[(9)]);
var inst_25910 = (state_26036[(22)]);
var inst_25910__$1 = cljs.core.seq.call(null,inst_25897);
var state_26036__$1 = (function (){var statearr_26118 = state_26036;
(statearr_26118[(22)] = inst_25910__$1);

return statearr_26118;
})();
if(inst_25910__$1){
var statearr_26119_26184 = state_26036__$1;
(statearr_26119_26184[(1)] = (10));

} else {
var statearr_26120_26185 = state_26036__$1;
(statearr_26120_26185[(1)] = (11));

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
}
});})(c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22236__auto__,c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto____0 = (function (){
var statearr_26124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26124[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto__);

(statearr_26124[(1)] = (1));

return statearr_26124;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto____1 = (function (state_26036){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_26036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e26125){if((e26125 instanceof Object)){
var ex__22240__auto__ = e26125;
var statearr_26126_26186 = state_26036;
(statearr_26126_26186[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26187 = state_26036;
state_26036 = G__26187;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto__ = function(state_26036){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto____1.call(this,state_26036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22350__auto__ = (function (){var statearr_26127 = f__22349__auto__.call(null);
(statearr_26127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto__);

return statearr_26127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto__,map__25882,map__25882__$1,opts,before_jsload,on_jsload,reload_dependents,map__25883,map__25883__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22348__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26190,link){
var map__26193 = p__26190;
var map__26193__$1 = ((((!((map__26193 == null)))?((((map__26193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26193):map__26193);
var file = cljs.core.get.call(null,map__26193__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26193,map__26193__$1,file){
return (function (p1__26188_SHARP_,p2__26189_SHARP_){
if(cljs.core._EQ_.call(null,p1__26188_SHARP_,p2__26189_SHARP_)){
return p1__26188_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26193,map__26193__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26199){
var map__26200 = p__26199;
var map__26200__$1 = ((((!((map__26200 == null)))?((((map__26200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26200):map__26200);
var match_length = cljs.core.get.call(null,map__26200__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26200__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26195_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26195_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26202 = [];
var len__20713__auto___26205 = arguments.length;
var i__20714__auto___26206 = (0);
while(true){
if((i__20714__auto___26206 < len__20713__auto___26205)){
args26202.push((arguments[i__20714__auto___26206]));

var G__26207 = (i__20714__auto___26206 + (1));
i__20714__auto___26206 = G__26207;
continue;
} else {
}
break;
}

var G__26204 = args26202.length;
switch (G__26204) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26202.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26209_SHARP_,p2__26210_SHARP_){
return cljs.core.assoc.call(null,p1__26209_SHARP_,cljs.core.get.call(null,p2__26210_SHARP_,key),p2__26210_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26211){
var map__26214 = p__26211;
var map__26214__$1 = ((((!((map__26214 == null)))?((((map__26214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26214):map__26214);
var f_data = map__26214__$1;
var file = cljs.core.get.call(null,map__26214__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26216,files_msg){
var map__26223 = p__26216;
var map__26223__$1 = ((((!((map__26223 == null)))?((((map__26223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26223):map__26223);
var opts = map__26223__$1;
var on_cssload = cljs.core.get.call(null,map__26223__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26225_26229 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26226_26230 = null;
var count__26227_26231 = (0);
var i__26228_26232 = (0);
while(true){
if((i__26228_26232 < count__26227_26231)){
var f_26233 = cljs.core._nth.call(null,chunk__26226_26230,i__26228_26232);
figwheel.client.file_reloading.reload_css_file.call(null,f_26233);

var G__26234 = seq__26225_26229;
var G__26235 = chunk__26226_26230;
var G__26236 = count__26227_26231;
var G__26237 = (i__26228_26232 + (1));
seq__26225_26229 = G__26234;
chunk__26226_26230 = G__26235;
count__26227_26231 = G__26236;
i__26228_26232 = G__26237;
continue;
} else {
var temp__4425__auto___26238 = cljs.core.seq.call(null,seq__26225_26229);
if(temp__4425__auto___26238){
var seq__26225_26239__$1 = temp__4425__auto___26238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26225_26239__$1)){
var c__20458__auto___26240 = cljs.core.chunk_first.call(null,seq__26225_26239__$1);
var G__26241 = cljs.core.chunk_rest.call(null,seq__26225_26239__$1);
var G__26242 = c__20458__auto___26240;
var G__26243 = cljs.core.count.call(null,c__20458__auto___26240);
var G__26244 = (0);
seq__26225_26229 = G__26241;
chunk__26226_26230 = G__26242;
count__26227_26231 = G__26243;
i__26228_26232 = G__26244;
continue;
} else {
var f_26245 = cljs.core.first.call(null,seq__26225_26239__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26245);

var G__26246 = cljs.core.next.call(null,seq__26225_26239__$1);
var G__26247 = null;
var G__26248 = (0);
var G__26249 = (0);
seq__26225_26229 = G__26246;
chunk__26226_26230 = G__26247;
count__26227_26231 = G__26248;
i__26228_26232 = G__26249;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26223,map__26223__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26223,map__26223__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map