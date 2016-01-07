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
var or__19735__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19735__auto__){
return or__19735__auto__;
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
var or__19735__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19735__auto__)){
return or__19735__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25312_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25312_SHARP_));
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
var seq__25317 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25318 = null;
var count__25319 = (0);
var i__25320 = (0);
while(true){
if((i__25320 < count__25319)){
var n = cljs.core._nth.call(null,chunk__25318,i__25320);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25321 = seq__25317;
var G__25322 = chunk__25318;
var G__25323 = count__25319;
var G__25324 = (i__25320 + (1));
seq__25317 = G__25321;
chunk__25318 = G__25322;
count__25319 = G__25323;
i__25320 = G__25324;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25317);
if(temp__4425__auto__){
var seq__25317__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25317__$1)){
var c__20538__auto__ = cljs.core.chunk_first.call(null,seq__25317__$1);
var G__25325 = cljs.core.chunk_rest.call(null,seq__25317__$1);
var G__25326 = c__20538__auto__;
var G__25327 = cljs.core.count.call(null,c__20538__auto__);
var G__25328 = (0);
seq__25317 = G__25325;
chunk__25318 = G__25326;
count__25319 = G__25327;
i__25320 = G__25328;
continue;
} else {
var n = cljs.core.first.call(null,seq__25317__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25329 = cljs.core.next.call(null,seq__25317__$1);
var G__25330 = null;
var G__25331 = (0);
var G__25332 = (0);
seq__25317 = G__25329;
chunk__25318 = G__25330;
count__25319 = G__25331;
i__25320 = G__25332;
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

var seq__25371_25378 = cljs.core.seq.call(null,deps);
var chunk__25372_25379 = null;
var count__25373_25380 = (0);
var i__25374_25381 = (0);
while(true){
if((i__25374_25381 < count__25373_25380)){
var dep_25382 = cljs.core._nth.call(null,chunk__25372_25379,i__25374_25381);
topo_sort_helper_STAR_.call(null,dep_25382,(depth + (1)),state);

var G__25383 = seq__25371_25378;
var G__25384 = chunk__25372_25379;
var G__25385 = count__25373_25380;
var G__25386 = (i__25374_25381 + (1));
seq__25371_25378 = G__25383;
chunk__25372_25379 = G__25384;
count__25373_25380 = G__25385;
i__25374_25381 = G__25386;
continue;
} else {
var temp__4425__auto___25387 = cljs.core.seq.call(null,seq__25371_25378);
if(temp__4425__auto___25387){
var seq__25371_25388__$1 = temp__4425__auto___25387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25371_25388__$1)){
var c__20538__auto___25389 = cljs.core.chunk_first.call(null,seq__25371_25388__$1);
var G__25390 = cljs.core.chunk_rest.call(null,seq__25371_25388__$1);
var G__25391 = c__20538__auto___25389;
var G__25392 = cljs.core.count.call(null,c__20538__auto___25389);
var G__25393 = (0);
seq__25371_25378 = G__25390;
chunk__25372_25379 = G__25391;
count__25373_25380 = G__25392;
i__25374_25381 = G__25393;
continue;
} else {
var dep_25394 = cljs.core.first.call(null,seq__25371_25388__$1);
topo_sort_helper_STAR_.call(null,dep_25394,(depth + (1)),state);

var G__25395 = cljs.core.next.call(null,seq__25371_25388__$1);
var G__25396 = null;
var G__25397 = (0);
var G__25398 = (0);
seq__25371_25378 = G__25395;
chunk__25372_25379 = G__25396;
count__25373_25380 = G__25397;
i__25374_25381 = G__25398;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25375){
var vec__25377 = p__25375;
var x = cljs.core.nth.call(null,vec__25377,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25377,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25377,x,xs,get_deps__$1){
return (function (p1__25333_SHARP_){
return clojure.set.difference.call(null,p1__25333_SHARP_,x);
});})(vec__25377,x,xs,get_deps__$1))
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
var seq__25411 = cljs.core.seq.call(null,provides);
var chunk__25412 = null;
var count__25413 = (0);
var i__25414 = (0);
while(true){
if((i__25414 < count__25413)){
var prov = cljs.core._nth.call(null,chunk__25412,i__25414);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25415_25423 = cljs.core.seq.call(null,requires);
var chunk__25416_25424 = null;
var count__25417_25425 = (0);
var i__25418_25426 = (0);
while(true){
if((i__25418_25426 < count__25417_25425)){
var req_25427 = cljs.core._nth.call(null,chunk__25416_25424,i__25418_25426);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25427,prov);

var G__25428 = seq__25415_25423;
var G__25429 = chunk__25416_25424;
var G__25430 = count__25417_25425;
var G__25431 = (i__25418_25426 + (1));
seq__25415_25423 = G__25428;
chunk__25416_25424 = G__25429;
count__25417_25425 = G__25430;
i__25418_25426 = G__25431;
continue;
} else {
var temp__4425__auto___25432 = cljs.core.seq.call(null,seq__25415_25423);
if(temp__4425__auto___25432){
var seq__25415_25433__$1 = temp__4425__auto___25432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25415_25433__$1)){
var c__20538__auto___25434 = cljs.core.chunk_first.call(null,seq__25415_25433__$1);
var G__25435 = cljs.core.chunk_rest.call(null,seq__25415_25433__$1);
var G__25436 = c__20538__auto___25434;
var G__25437 = cljs.core.count.call(null,c__20538__auto___25434);
var G__25438 = (0);
seq__25415_25423 = G__25435;
chunk__25416_25424 = G__25436;
count__25417_25425 = G__25437;
i__25418_25426 = G__25438;
continue;
} else {
var req_25439 = cljs.core.first.call(null,seq__25415_25433__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25439,prov);

var G__25440 = cljs.core.next.call(null,seq__25415_25433__$1);
var G__25441 = null;
var G__25442 = (0);
var G__25443 = (0);
seq__25415_25423 = G__25440;
chunk__25416_25424 = G__25441;
count__25417_25425 = G__25442;
i__25418_25426 = G__25443;
continue;
}
} else {
}
}
break;
}

var G__25444 = seq__25411;
var G__25445 = chunk__25412;
var G__25446 = count__25413;
var G__25447 = (i__25414 + (1));
seq__25411 = G__25444;
chunk__25412 = G__25445;
count__25413 = G__25446;
i__25414 = G__25447;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25411);
if(temp__4425__auto__){
var seq__25411__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25411__$1)){
var c__20538__auto__ = cljs.core.chunk_first.call(null,seq__25411__$1);
var G__25448 = cljs.core.chunk_rest.call(null,seq__25411__$1);
var G__25449 = c__20538__auto__;
var G__25450 = cljs.core.count.call(null,c__20538__auto__);
var G__25451 = (0);
seq__25411 = G__25448;
chunk__25412 = G__25449;
count__25413 = G__25450;
i__25414 = G__25451;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25411__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25419_25452 = cljs.core.seq.call(null,requires);
var chunk__25420_25453 = null;
var count__25421_25454 = (0);
var i__25422_25455 = (0);
while(true){
if((i__25422_25455 < count__25421_25454)){
var req_25456 = cljs.core._nth.call(null,chunk__25420_25453,i__25422_25455);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25456,prov);

var G__25457 = seq__25419_25452;
var G__25458 = chunk__25420_25453;
var G__25459 = count__25421_25454;
var G__25460 = (i__25422_25455 + (1));
seq__25419_25452 = G__25457;
chunk__25420_25453 = G__25458;
count__25421_25454 = G__25459;
i__25422_25455 = G__25460;
continue;
} else {
var temp__4425__auto___25461__$1 = cljs.core.seq.call(null,seq__25419_25452);
if(temp__4425__auto___25461__$1){
var seq__25419_25462__$1 = temp__4425__auto___25461__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25419_25462__$1)){
var c__20538__auto___25463 = cljs.core.chunk_first.call(null,seq__25419_25462__$1);
var G__25464 = cljs.core.chunk_rest.call(null,seq__25419_25462__$1);
var G__25465 = c__20538__auto___25463;
var G__25466 = cljs.core.count.call(null,c__20538__auto___25463);
var G__25467 = (0);
seq__25419_25452 = G__25464;
chunk__25420_25453 = G__25465;
count__25421_25454 = G__25466;
i__25422_25455 = G__25467;
continue;
} else {
var req_25468 = cljs.core.first.call(null,seq__25419_25462__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25468,prov);

var G__25469 = cljs.core.next.call(null,seq__25419_25462__$1);
var G__25470 = null;
var G__25471 = (0);
var G__25472 = (0);
seq__25419_25452 = G__25469;
chunk__25420_25453 = G__25470;
count__25421_25454 = G__25471;
i__25422_25455 = G__25472;
continue;
}
} else {
}
}
break;
}

var G__25473 = cljs.core.next.call(null,seq__25411__$1);
var G__25474 = null;
var G__25475 = (0);
var G__25476 = (0);
seq__25411 = G__25473;
chunk__25412 = G__25474;
count__25413 = G__25475;
i__25414 = G__25476;
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
var seq__25481_25485 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25482_25486 = null;
var count__25483_25487 = (0);
var i__25484_25488 = (0);
while(true){
if((i__25484_25488 < count__25483_25487)){
var ns_25489 = cljs.core._nth.call(null,chunk__25482_25486,i__25484_25488);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25489);

var G__25490 = seq__25481_25485;
var G__25491 = chunk__25482_25486;
var G__25492 = count__25483_25487;
var G__25493 = (i__25484_25488 + (1));
seq__25481_25485 = G__25490;
chunk__25482_25486 = G__25491;
count__25483_25487 = G__25492;
i__25484_25488 = G__25493;
continue;
} else {
var temp__4425__auto___25494 = cljs.core.seq.call(null,seq__25481_25485);
if(temp__4425__auto___25494){
var seq__25481_25495__$1 = temp__4425__auto___25494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25481_25495__$1)){
var c__20538__auto___25496 = cljs.core.chunk_first.call(null,seq__25481_25495__$1);
var G__25497 = cljs.core.chunk_rest.call(null,seq__25481_25495__$1);
var G__25498 = c__20538__auto___25496;
var G__25499 = cljs.core.count.call(null,c__20538__auto___25496);
var G__25500 = (0);
seq__25481_25485 = G__25497;
chunk__25482_25486 = G__25498;
count__25483_25487 = G__25499;
i__25484_25488 = G__25500;
continue;
} else {
var ns_25501 = cljs.core.first.call(null,seq__25481_25495__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25501);

var G__25502 = cljs.core.next.call(null,seq__25481_25495__$1);
var G__25503 = null;
var G__25504 = (0);
var G__25505 = (0);
seq__25481_25485 = G__25502;
chunk__25482_25486 = G__25503;
count__25483_25487 = G__25504;
i__25484_25488 = G__25505;
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
goog.require_figwheel_backup_ = (function (){var or__19735__auto__ = goog.require__;
if(cljs.core.truth_(or__19735__auto__)){
return or__19735__auto__;
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
var G__25506__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25507__i = 0, G__25507__a = new Array(arguments.length -  0);
while (G__25507__i < G__25507__a.length) {G__25507__a[G__25507__i] = arguments[G__25507__i + 0]; ++G__25507__i;}
  args = new cljs.core.IndexedSeq(G__25507__a,0);
} 
return G__25506__delegate.call(this,args);};
G__25506.cljs$lang$maxFixedArity = 0;
G__25506.cljs$lang$applyTo = (function (arglist__25508){
var args = cljs.core.seq(arglist__25508);
return G__25506__delegate(args);
});
G__25506.cljs$core$IFn$_invoke$arity$variadic = G__25506__delegate;
return G__25506;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25510 = cljs.core._EQ_;
var expr__25511 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25510.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25511))){
var path_parts = ((function (pred__25510,expr__25511){
return (function (p1__25509_SHARP_){
return clojure.string.split.call(null,p1__25509_SHARP_,/[\/\\]/);
});})(pred__25510,expr__25511))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25510,expr__25511){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25513){if((e25513 instanceof Error)){
var e = e25513;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25513;

}
}})());
});
;})(path_parts,sep,root,pred__25510,expr__25511))
} else {
if(cljs.core.truth_(pred__25510.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25511))){
return ((function (pred__25510,expr__25511){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25510,expr__25511){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25510,expr__25511))
);

return deferred.addErrback(((function (deferred,pred__25510,expr__25511){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25510,expr__25511))
);
});
;})(pred__25510,expr__25511))
} else {
return ((function (pred__25510,expr__25511){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25510,expr__25511))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25514,callback){
var map__25517 = p__25514;
var map__25517__$1 = ((((!((map__25517 == null)))?((((map__25517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25517):map__25517);
var file_msg = map__25517__$1;
var request_url = cljs.core.get.call(null,map__25517__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25517,map__25517__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25517,map__25517__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto__){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto__){
return (function (state_25541){
var state_val_25542 = (state_25541[(1)]);
if((state_val_25542 === (7))){
var inst_25537 = (state_25541[(2)]);
var state_25541__$1 = state_25541;
var statearr_25543_25563 = state_25541__$1;
(statearr_25543_25563[(2)] = inst_25537);

(statearr_25543_25563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (1))){
var state_25541__$1 = state_25541;
var statearr_25544_25564 = state_25541__$1;
(statearr_25544_25564[(2)] = null);

(statearr_25544_25564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (4))){
var inst_25521 = (state_25541[(7)]);
var inst_25521__$1 = (state_25541[(2)]);
var state_25541__$1 = (function (){var statearr_25545 = state_25541;
(statearr_25545[(7)] = inst_25521__$1);

return statearr_25545;
})();
if(cljs.core.truth_(inst_25521__$1)){
var statearr_25546_25565 = state_25541__$1;
(statearr_25546_25565[(1)] = (5));

} else {
var statearr_25547_25566 = state_25541__$1;
(statearr_25547_25566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (6))){
var state_25541__$1 = state_25541;
var statearr_25548_25567 = state_25541__$1;
(statearr_25548_25567[(2)] = null);

(statearr_25548_25567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (3))){
var inst_25539 = (state_25541[(2)]);
var state_25541__$1 = state_25541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25541__$1,inst_25539);
} else {
if((state_val_25542 === (2))){
var state_25541__$1 = state_25541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25541__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25542 === (11))){
var inst_25533 = (state_25541[(2)]);
var state_25541__$1 = (function (){var statearr_25549 = state_25541;
(statearr_25549[(8)] = inst_25533);

return statearr_25549;
})();
var statearr_25550_25568 = state_25541__$1;
(statearr_25550_25568[(2)] = null);

(statearr_25550_25568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (9))){
var inst_25525 = (state_25541[(9)]);
var inst_25527 = (state_25541[(10)]);
var inst_25529 = inst_25527.call(null,inst_25525);
var state_25541__$1 = state_25541;
var statearr_25551_25569 = state_25541__$1;
(statearr_25551_25569[(2)] = inst_25529);

(statearr_25551_25569[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (5))){
var inst_25521 = (state_25541[(7)]);
var inst_25523 = figwheel.client.file_reloading.blocking_load.call(null,inst_25521);
var state_25541__$1 = state_25541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25541__$1,(8),inst_25523);
} else {
if((state_val_25542 === (10))){
var inst_25525 = (state_25541[(9)]);
var inst_25531 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25525);
var state_25541__$1 = state_25541;
var statearr_25552_25570 = state_25541__$1;
(statearr_25552_25570[(2)] = inst_25531);

(statearr_25552_25570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25542 === (8))){
var inst_25521 = (state_25541[(7)]);
var inst_25527 = (state_25541[(10)]);
var inst_25525 = (state_25541[(2)]);
var inst_25526 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25527__$1 = cljs.core.get.call(null,inst_25526,inst_25521);
var state_25541__$1 = (function (){var statearr_25553 = state_25541;
(statearr_25553[(9)] = inst_25525);

(statearr_25553[(10)] = inst_25527__$1);

return statearr_25553;
})();
if(cljs.core.truth_(inst_25527__$1)){
var statearr_25554_25571 = state_25541__$1;
(statearr_25554_25571[(1)] = (9));

} else {
var statearr_25555_25572 = state_25541__$1;
(statearr_25555_25572[(1)] = (10));

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
});})(c__22418__auto__))
;
return ((function (switch__22306__auto__,c__22418__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22307__auto__ = null;
var figwheel$client$file_reloading$state_machine__22307__auto____0 = (function (){
var statearr_25559 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25559[(0)] = figwheel$client$file_reloading$state_machine__22307__auto__);

(statearr_25559[(1)] = (1));

return statearr_25559;
});
var figwheel$client$file_reloading$state_machine__22307__auto____1 = (function (state_25541){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_25541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e25560){if((e25560 instanceof Object)){
var ex__22310__auto__ = e25560;
var statearr_25561_25573 = state_25541;
(statearr_25561_25573[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25574 = state_25541;
state_25541 = G__25574;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22307__auto__ = function(state_25541){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22307__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22307__auto____1.call(this,state_25541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22307__auto____0;
figwheel$client$file_reloading$state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22307__auto____1;
return figwheel$client$file_reloading$state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto__))
})();
var state__22420__auto__ = (function (){var statearr_25562 = f__22419__auto__.call(null);
(statearr_25562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto__);

return statearr_25562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto__))
);

return c__22418__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25575,callback){
var map__25578 = p__25575;
var map__25578__$1 = ((((!((map__25578 == null)))?((((map__25578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25578):map__25578);
var file_msg = map__25578__$1;
var namespace = cljs.core.get.call(null,map__25578__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25578,map__25578__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25578,map__25578__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25580){
var map__25583 = p__25580;
var map__25583__$1 = ((((!((map__25583 == null)))?((((map__25583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25583):map__25583);
var file_msg = map__25583__$1;
var namespace = cljs.core.get.call(null,map__25583__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19723__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19723__auto__){
var or__19735__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19735__auto__)){
return or__19735__auto__;
} else {
var or__19735__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19735__auto____$1)){
return or__19735__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19723__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25585,callback){
var map__25588 = p__25585;
var map__25588__$1 = ((((!((map__25588 == null)))?((((map__25588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25588):map__25588);
var file_msg = map__25588__$1;
var request_url = cljs.core.get.call(null,map__25588__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25588__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22418__auto___25676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto___25676,out){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto___25676,out){
return (function (state_25658){
var state_val_25659 = (state_25658[(1)]);
if((state_val_25659 === (1))){
var inst_25636 = cljs.core.nth.call(null,files,(0),null);
var inst_25637 = cljs.core.nthnext.call(null,files,(1));
var inst_25638 = files;
var state_25658__$1 = (function (){var statearr_25660 = state_25658;
(statearr_25660[(7)] = inst_25637);

(statearr_25660[(8)] = inst_25638);

(statearr_25660[(9)] = inst_25636);

return statearr_25660;
})();
var statearr_25661_25677 = state_25658__$1;
(statearr_25661_25677[(2)] = null);

(statearr_25661_25677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (2))){
var inst_25641 = (state_25658[(10)]);
var inst_25638 = (state_25658[(8)]);
var inst_25641__$1 = cljs.core.nth.call(null,inst_25638,(0),null);
var inst_25642 = cljs.core.nthnext.call(null,inst_25638,(1));
var inst_25643 = (inst_25641__$1 == null);
var inst_25644 = cljs.core.not.call(null,inst_25643);
var state_25658__$1 = (function (){var statearr_25662 = state_25658;
(statearr_25662[(11)] = inst_25642);

(statearr_25662[(10)] = inst_25641__$1);

return statearr_25662;
})();
if(inst_25644){
var statearr_25663_25678 = state_25658__$1;
(statearr_25663_25678[(1)] = (4));

} else {
var statearr_25664_25679 = state_25658__$1;
(statearr_25664_25679[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (3))){
var inst_25656 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25658__$1,inst_25656);
} else {
if((state_val_25659 === (4))){
var inst_25641 = (state_25658[(10)]);
var inst_25646 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25641);
var state_25658__$1 = state_25658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25658__$1,(7),inst_25646);
} else {
if((state_val_25659 === (5))){
var inst_25652 = cljs.core.async.close_BANG_.call(null,out);
var state_25658__$1 = state_25658;
var statearr_25665_25680 = state_25658__$1;
(statearr_25665_25680[(2)] = inst_25652);

(statearr_25665_25680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (6))){
var inst_25654 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25666_25681 = state_25658__$1;
(statearr_25666_25681[(2)] = inst_25654);

(statearr_25666_25681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (7))){
var inst_25642 = (state_25658[(11)]);
var inst_25648 = (state_25658[(2)]);
var inst_25649 = cljs.core.async.put_BANG_.call(null,out,inst_25648);
var inst_25638 = inst_25642;
var state_25658__$1 = (function (){var statearr_25667 = state_25658;
(statearr_25667[(12)] = inst_25649);

(statearr_25667[(8)] = inst_25638);

return statearr_25667;
})();
var statearr_25668_25682 = state_25658__$1;
(statearr_25668_25682[(2)] = null);

(statearr_25668_25682[(1)] = (2));


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
});})(c__22418__auto___25676,out))
;
return ((function (switch__22306__auto__,c__22418__auto___25676,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22307__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22307__auto____0 = (function (){
var statearr_25672 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25672[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22307__auto__);

(statearr_25672[(1)] = (1));

return statearr_25672;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22307__auto____1 = (function (state_25658){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_25658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e25673){if((e25673 instanceof Object)){
var ex__22310__auto__ = e25673;
var statearr_25674_25683 = state_25658;
(statearr_25674_25683[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25684 = state_25658;
state_25658 = G__25684;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22307__auto__ = function(state_25658){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22307__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22307__auto____1.call(this,state_25658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22307__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22307__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto___25676,out))
})();
var state__22420__auto__ = (function (){var statearr_25675 = f__22419__auto__.call(null);
(statearr_25675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___25676);

return statearr_25675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto___25676,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25685,opts){
var map__25689 = p__25685;
var map__25689__$1 = ((((!((map__25689 == null)))?((((map__25689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25689):map__25689);
var eval_body__$1 = cljs.core.get.call(null,map__25689__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25689__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19723__auto__ = eval_body__$1;
if(cljs.core.truth_(and__19723__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__19723__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25691){var e = e25691;
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
return (function (p1__25692_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25692_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__25697){
var vec__25698 = p__25697;
var k = cljs.core.nth.call(null,vec__25698,(0),null);
var v = cljs.core.nth.call(null,vec__25698,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25699){
var vec__25700 = p__25699;
var k = cljs.core.nth.call(null,vec__25700,(0),null);
var v = cljs.core.nth.call(null,vec__25700,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25704,p__25705){
var map__25952 = p__25704;
var map__25952__$1 = ((((!((map__25952 == null)))?((((map__25952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25952):map__25952);
var opts = map__25952__$1;
var before_jsload = cljs.core.get.call(null,map__25952__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25952__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25952__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25953 = p__25705;
var map__25953__$1 = ((((!((map__25953 == null)))?((((map__25953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25953):map__25953);
var msg = map__25953__$1;
var files = cljs.core.get.call(null,map__25953__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25953__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25953__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26106){
var state_val_26107 = (state_26106[(1)]);
if((state_val_26107 === (7))){
var inst_25969 = (state_26106[(7)]);
var inst_25968 = (state_26106[(8)]);
var inst_25970 = (state_26106[(9)]);
var inst_25967 = (state_26106[(10)]);
var inst_25975 = cljs.core._nth.call(null,inst_25968,inst_25970);
var inst_25976 = figwheel.client.file_reloading.eval_body.call(null,inst_25975,opts);
var inst_25977 = (inst_25970 + (1));
var tmp26108 = inst_25969;
var tmp26109 = inst_25968;
var tmp26110 = inst_25967;
var inst_25967__$1 = tmp26110;
var inst_25968__$1 = tmp26109;
var inst_25969__$1 = tmp26108;
var inst_25970__$1 = inst_25977;
var state_26106__$1 = (function (){var statearr_26111 = state_26106;
(statearr_26111[(7)] = inst_25969__$1);

(statearr_26111[(11)] = inst_25976);

(statearr_26111[(8)] = inst_25968__$1);

(statearr_26111[(9)] = inst_25970__$1);

(statearr_26111[(10)] = inst_25967__$1);

return statearr_26111;
})();
var statearr_26112_26198 = state_26106__$1;
(statearr_26112_26198[(2)] = null);

(statearr_26112_26198[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (20))){
var inst_26010 = (state_26106[(12)]);
var inst_26018 = figwheel.client.file_reloading.sort_files.call(null,inst_26010);
var state_26106__$1 = state_26106;
var statearr_26113_26199 = state_26106__$1;
(statearr_26113_26199[(2)] = inst_26018);

(statearr_26113_26199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (27))){
var state_26106__$1 = state_26106;
var statearr_26114_26200 = state_26106__$1;
(statearr_26114_26200[(2)] = null);

(statearr_26114_26200[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (1))){
var inst_25959 = (state_26106[(13)]);
var inst_25956 = before_jsload.call(null,files);
var inst_25957 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25958 = (function (){return ((function (inst_25959,inst_25956,inst_25957,state_val_26107,c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25701_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25701_SHARP_);
});
;})(inst_25959,inst_25956,inst_25957,state_val_26107,c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25959__$1 = cljs.core.filter.call(null,inst_25958,files);
var inst_25960 = cljs.core.not_empty.call(null,inst_25959__$1);
var state_26106__$1 = (function (){var statearr_26115 = state_26106;
(statearr_26115[(13)] = inst_25959__$1);

(statearr_26115[(14)] = inst_25956);

(statearr_26115[(15)] = inst_25957);

return statearr_26115;
})();
if(cljs.core.truth_(inst_25960)){
var statearr_26116_26201 = state_26106__$1;
(statearr_26116_26201[(1)] = (2));

} else {
var statearr_26117_26202 = state_26106__$1;
(statearr_26117_26202[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (24))){
var state_26106__$1 = state_26106;
var statearr_26118_26203 = state_26106__$1;
(statearr_26118_26203[(2)] = null);

(statearr_26118_26203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (39))){
var inst_26060 = (state_26106[(16)]);
var state_26106__$1 = state_26106;
var statearr_26119_26204 = state_26106__$1;
(statearr_26119_26204[(2)] = inst_26060);

(statearr_26119_26204[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (46))){
var inst_26101 = (state_26106[(2)]);
var state_26106__$1 = state_26106;
var statearr_26120_26205 = state_26106__$1;
(statearr_26120_26205[(2)] = inst_26101);

(statearr_26120_26205[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (4))){
var inst_26004 = (state_26106[(2)]);
var inst_26005 = cljs.core.List.EMPTY;
var inst_26006 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26005);
var inst_26007 = (function (){return ((function (inst_26004,inst_26005,inst_26006,state_val_26107,c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25702_SHARP_){
var and__19723__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25702_SHARP_);
if(cljs.core.truth_(and__19723__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25702_SHARP_));
} else {
return and__19723__auto__;
}
});
;})(inst_26004,inst_26005,inst_26006,state_val_26107,c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26008 = cljs.core.filter.call(null,inst_26007,files);
var inst_26009 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26010 = cljs.core.concat.call(null,inst_26008,inst_26009);
var state_26106__$1 = (function (){var statearr_26121 = state_26106;
(statearr_26121[(17)] = inst_26006);

(statearr_26121[(12)] = inst_26010);

(statearr_26121[(18)] = inst_26004);

return statearr_26121;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26122_26206 = state_26106__$1;
(statearr_26122_26206[(1)] = (16));

} else {
var statearr_26123_26207 = state_26106__$1;
(statearr_26123_26207[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (15))){
var inst_25994 = (state_26106[(2)]);
var state_26106__$1 = state_26106;
var statearr_26124_26208 = state_26106__$1;
(statearr_26124_26208[(2)] = inst_25994);

(statearr_26124_26208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (21))){
var inst_26020 = (state_26106[(19)]);
var inst_26020__$1 = (state_26106[(2)]);
var inst_26021 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26020__$1);
var state_26106__$1 = (function (){var statearr_26125 = state_26106;
(statearr_26125[(19)] = inst_26020__$1);

return statearr_26125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26106__$1,(22),inst_26021);
} else {
if((state_val_26107 === (31))){
var inst_26104 = (state_26106[(2)]);
var state_26106__$1 = state_26106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26106__$1,inst_26104);
} else {
if((state_val_26107 === (32))){
var inst_26060 = (state_26106[(16)]);
var inst_26065 = inst_26060.cljs$lang$protocol_mask$partition0$;
var inst_26066 = (inst_26065 & (64));
var inst_26067 = inst_26060.cljs$core$ISeq$;
var inst_26068 = (inst_26066) || (inst_26067);
var state_26106__$1 = state_26106;
if(cljs.core.truth_(inst_26068)){
var statearr_26126_26209 = state_26106__$1;
(statearr_26126_26209[(1)] = (35));

} else {
var statearr_26127_26210 = state_26106__$1;
(statearr_26127_26210[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (40))){
var inst_26081 = (state_26106[(20)]);
var inst_26080 = (state_26106[(2)]);
var inst_26081__$1 = cljs.core.get.call(null,inst_26080,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26082 = cljs.core.get.call(null,inst_26080,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26083 = cljs.core.not_empty.call(null,inst_26081__$1);
var state_26106__$1 = (function (){var statearr_26128 = state_26106;
(statearr_26128[(21)] = inst_26082);

(statearr_26128[(20)] = inst_26081__$1);

return statearr_26128;
})();
if(cljs.core.truth_(inst_26083)){
var statearr_26129_26211 = state_26106__$1;
(statearr_26129_26211[(1)] = (41));

} else {
var statearr_26130_26212 = state_26106__$1;
(statearr_26130_26212[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (33))){
var state_26106__$1 = state_26106;
var statearr_26131_26213 = state_26106__$1;
(statearr_26131_26213[(2)] = false);

(statearr_26131_26213[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (13))){
var inst_25980 = (state_26106[(22)]);
var inst_25984 = cljs.core.chunk_first.call(null,inst_25980);
var inst_25985 = cljs.core.chunk_rest.call(null,inst_25980);
var inst_25986 = cljs.core.count.call(null,inst_25984);
var inst_25967 = inst_25985;
var inst_25968 = inst_25984;
var inst_25969 = inst_25986;
var inst_25970 = (0);
var state_26106__$1 = (function (){var statearr_26132 = state_26106;
(statearr_26132[(7)] = inst_25969);

(statearr_26132[(8)] = inst_25968);

(statearr_26132[(9)] = inst_25970);

(statearr_26132[(10)] = inst_25967);

return statearr_26132;
})();
var statearr_26133_26214 = state_26106__$1;
(statearr_26133_26214[(2)] = null);

(statearr_26133_26214[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (22))){
var inst_26023 = (state_26106[(23)]);
var inst_26020 = (state_26106[(19)]);
var inst_26024 = (state_26106[(24)]);
var inst_26028 = (state_26106[(25)]);
var inst_26023__$1 = (state_26106[(2)]);
var inst_26024__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26023__$1);
var inst_26025 = (function (){var all_files = inst_26020;
var res_SINGLEQUOTE_ = inst_26023__$1;
var res = inst_26024__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26023,inst_26020,inst_26024,inst_26028,inst_26023__$1,inst_26024__$1,state_val_26107,c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25703_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25703_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26023,inst_26020,inst_26024,inst_26028,inst_26023__$1,inst_26024__$1,state_val_26107,c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26026 = cljs.core.filter.call(null,inst_26025,inst_26023__$1);
var inst_26027 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26028__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26027);
var inst_26029 = cljs.core.not_empty.call(null,inst_26028__$1);
var state_26106__$1 = (function (){var statearr_26134 = state_26106;
(statearr_26134[(23)] = inst_26023__$1);

(statearr_26134[(26)] = inst_26026);

(statearr_26134[(24)] = inst_26024__$1);

(statearr_26134[(25)] = inst_26028__$1);

return statearr_26134;
})();
if(cljs.core.truth_(inst_26029)){
var statearr_26135_26215 = state_26106__$1;
(statearr_26135_26215[(1)] = (23));

} else {
var statearr_26136_26216 = state_26106__$1;
(statearr_26136_26216[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (36))){
var state_26106__$1 = state_26106;
var statearr_26137_26217 = state_26106__$1;
(statearr_26137_26217[(2)] = false);

(statearr_26137_26217[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (41))){
var inst_26081 = (state_26106[(20)]);
var inst_26085 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26086 = cljs.core.map.call(null,inst_26085,inst_26081);
var inst_26087 = cljs.core.pr_str.call(null,inst_26086);
var inst_26088 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26087)].join('');
var inst_26089 = figwheel.client.utils.log.call(null,inst_26088);
var state_26106__$1 = state_26106;
var statearr_26138_26218 = state_26106__$1;
(statearr_26138_26218[(2)] = inst_26089);

(statearr_26138_26218[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (43))){
var inst_26082 = (state_26106[(21)]);
var inst_26092 = (state_26106[(2)]);
var inst_26093 = cljs.core.not_empty.call(null,inst_26082);
var state_26106__$1 = (function (){var statearr_26139 = state_26106;
(statearr_26139[(27)] = inst_26092);

return statearr_26139;
})();
if(cljs.core.truth_(inst_26093)){
var statearr_26140_26219 = state_26106__$1;
(statearr_26140_26219[(1)] = (44));

} else {
var statearr_26141_26220 = state_26106__$1;
(statearr_26141_26220[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (29))){
var inst_26060 = (state_26106[(16)]);
var inst_26023 = (state_26106[(23)]);
var inst_26026 = (state_26106[(26)]);
var inst_26020 = (state_26106[(19)]);
var inst_26024 = (state_26106[(24)]);
var inst_26028 = (state_26106[(25)]);
var inst_26056 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26059 = (function (){var all_files = inst_26020;
var res_SINGLEQUOTE_ = inst_26023;
var res = inst_26024;
var files_not_loaded = inst_26026;
var dependencies_that_loaded = inst_26028;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26023,inst_26026,inst_26020,inst_26024,inst_26028,inst_26056,state_val_26107,c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26058){
var map__26142 = p__26058;
var map__26142__$1 = ((((!((map__26142 == null)))?((((map__26142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26142):map__26142);
var namespace = cljs.core.get.call(null,map__26142__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26023,inst_26026,inst_26020,inst_26024,inst_26028,inst_26056,state_val_26107,c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26060__$1 = cljs.core.group_by.call(null,inst_26059,inst_26026);
var inst_26062 = (inst_26060__$1 == null);
var inst_26063 = cljs.core.not.call(null,inst_26062);
var state_26106__$1 = (function (){var statearr_26144 = state_26106;
(statearr_26144[(16)] = inst_26060__$1);

(statearr_26144[(28)] = inst_26056);

return statearr_26144;
})();
if(inst_26063){
var statearr_26145_26221 = state_26106__$1;
(statearr_26145_26221[(1)] = (32));

} else {
var statearr_26146_26222 = state_26106__$1;
(statearr_26146_26222[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (44))){
var inst_26082 = (state_26106[(21)]);
var inst_26095 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26082);
var inst_26096 = cljs.core.pr_str.call(null,inst_26095);
var inst_26097 = [cljs.core.str("not required: "),cljs.core.str(inst_26096)].join('');
var inst_26098 = figwheel.client.utils.log.call(null,inst_26097);
var state_26106__$1 = state_26106;
var statearr_26147_26223 = state_26106__$1;
(statearr_26147_26223[(2)] = inst_26098);

(statearr_26147_26223[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (6))){
var inst_26001 = (state_26106[(2)]);
var state_26106__$1 = state_26106;
var statearr_26148_26224 = state_26106__$1;
(statearr_26148_26224[(2)] = inst_26001);

(statearr_26148_26224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (28))){
var inst_26026 = (state_26106[(26)]);
var inst_26053 = (state_26106[(2)]);
var inst_26054 = cljs.core.not_empty.call(null,inst_26026);
var state_26106__$1 = (function (){var statearr_26149 = state_26106;
(statearr_26149[(29)] = inst_26053);

return statearr_26149;
})();
if(cljs.core.truth_(inst_26054)){
var statearr_26150_26225 = state_26106__$1;
(statearr_26150_26225[(1)] = (29));

} else {
var statearr_26151_26226 = state_26106__$1;
(statearr_26151_26226[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (25))){
var inst_26024 = (state_26106[(24)]);
var inst_26040 = (state_26106[(2)]);
var inst_26041 = cljs.core.not_empty.call(null,inst_26024);
var state_26106__$1 = (function (){var statearr_26152 = state_26106;
(statearr_26152[(30)] = inst_26040);

return statearr_26152;
})();
if(cljs.core.truth_(inst_26041)){
var statearr_26153_26227 = state_26106__$1;
(statearr_26153_26227[(1)] = (26));

} else {
var statearr_26154_26228 = state_26106__$1;
(statearr_26154_26228[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (34))){
var inst_26075 = (state_26106[(2)]);
var state_26106__$1 = state_26106;
if(cljs.core.truth_(inst_26075)){
var statearr_26155_26229 = state_26106__$1;
(statearr_26155_26229[(1)] = (38));

} else {
var statearr_26156_26230 = state_26106__$1;
(statearr_26156_26230[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (17))){
var state_26106__$1 = state_26106;
var statearr_26157_26231 = state_26106__$1;
(statearr_26157_26231[(2)] = recompile_dependents);

(statearr_26157_26231[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (3))){
var state_26106__$1 = state_26106;
var statearr_26158_26232 = state_26106__$1;
(statearr_26158_26232[(2)] = null);

(statearr_26158_26232[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (12))){
var inst_25997 = (state_26106[(2)]);
var state_26106__$1 = state_26106;
var statearr_26159_26233 = state_26106__$1;
(statearr_26159_26233[(2)] = inst_25997);

(statearr_26159_26233[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (2))){
var inst_25959 = (state_26106[(13)]);
var inst_25966 = cljs.core.seq.call(null,inst_25959);
var inst_25967 = inst_25966;
var inst_25968 = null;
var inst_25969 = (0);
var inst_25970 = (0);
var state_26106__$1 = (function (){var statearr_26160 = state_26106;
(statearr_26160[(7)] = inst_25969);

(statearr_26160[(8)] = inst_25968);

(statearr_26160[(9)] = inst_25970);

(statearr_26160[(10)] = inst_25967);

return statearr_26160;
})();
var statearr_26161_26234 = state_26106__$1;
(statearr_26161_26234[(2)] = null);

(statearr_26161_26234[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (23))){
var inst_26023 = (state_26106[(23)]);
var inst_26026 = (state_26106[(26)]);
var inst_26020 = (state_26106[(19)]);
var inst_26024 = (state_26106[(24)]);
var inst_26028 = (state_26106[(25)]);
var inst_26031 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26033 = (function (){var all_files = inst_26020;
var res_SINGLEQUOTE_ = inst_26023;
var res = inst_26024;
var files_not_loaded = inst_26026;
var dependencies_that_loaded = inst_26028;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26023,inst_26026,inst_26020,inst_26024,inst_26028,inst_26031,state_val_26107,c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26032){
var map__26162 = p__26032;
var map__26162__$1 = ((((!((map__26162 == null)))?((((map__26162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26162):map__26162);
var request_url = cljs.core.get.call(null,map__26162__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26023,inst_26026,inst_26020,inst_26024,inst_26028,inst_26031,state_val_26107,c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26034 = cljs.core.reverse.call(null,inst_26028);
var inst_26035 = cljs.core.map.call(null,inst_26033,inst_26034);
var inst_26036 = cljs.core.pr_str.call(null,inst_26035);
var inst_26037 = figwheel.client.utils.log.call(null,inst_26036);
var state_26106__$1 = (function (){var statearr_26164 = state_26106;
(statearr_26164[(31)] = inst_26031);

return statearr_26164;
})();
var statearr_26165_26235 = state_26106__$1;
(statearr_26165_26235[(2)] = inst_26037);

(statearr_26165_26235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (35))){
var state_26106__$1 = state_26106;
var statearr_26166_26236 = state_26106__$1;
(statearr_26166_26236[(2)] = true);

(statearr_26166_26236[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (19))){
var inst_26010 = (state_26106[(12)]);
var inst_26016 = figwheel.client.file_reloading.expand_files.call(null,inst_26010);
var state_26106__$1 = state_26106;
var statearr_26167_26237 = state_26106__$1;
(statearr_26167_26237[(2)] = inst_26016);

(statearr_26167_26237[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (11))){
var state_26106__$1 = state_26106;
var statearr_26168_26238 = state_26106__$1;
(statearr_26168_26238[(2)] = null);

(statearr_26168_26238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (9))){
var inst_25999 = (state_26106[(2)]);
var state_26106__$1 = state_26106;
var statearr_26169_26239 = state_26106__$1;
(statearr_26169_26239[(2)] = inst_25999);

(statearr_26169_26239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (5))){
var inst_25969 = (state_26106[(7)]);
var inst_25970 = (state_26106[(9)]);
var inst_25972 = (inst_25970 < inst_25969);
var inst_25973 = inst_25972;
var state_26106__$1 = state_26106;
if(cljs.core.truth_(inst_25973)){
var statearr_26170_26240 = state_26106__$1;
(statearr_26170_26240[(1)] = (7));

} else {
var statearr_26171_26241 = state_26106__$1;
(statearr_26171_26241[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (14))){
var inst_25980 = (state_26106[(22)]);
var inst_25989 = cljs.core.first.call(null,inst_25980);
var inst_25990 = figwheel.client.file_reloading.eval_body.call(null,inst_25989,opts);
var inst_25991 = cljs.core.next.call(null,inst_25980);
var inst_25967 = inst_25991;
var inst_25968 = null;
var inst_25969 = (0);
var inst_25970 = (0);
var state_26106__$1 = (function (){var statearr_26172 = state_26106;
(statearr_26172[(7)] = inst_25969);

(statearr_26172[(8)] = inst_25968);

(statearr_26172[(32)] = inst_25990);

(statearr_26172[(9)] = inst_25970);

(statearr_26172[(10)] = inst_25967);

return statearr_26172;
})();
var statearr_26173_26242 = state_26106__$1;
(statearr_26173_26242[(2)] = null);

(statearr_26173_26242[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (45))){
var state_26106__$1 = state_26106;
var statearr_26174_26243 = state_26106__$1;
(statearr_26174_26243[(2)] = null);

(statearr_26174_26243[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (26))){
var inst_26023 = (state_26106[(23)]);
var inst_26026 = (state_26106[(26)]);
var inst_26020 = (state_26106[(19)]);
var inst_26024 = (state_26106[(24)]);
var inst_26028 = (state_26106[(25)]);
var inst_26043 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26045 = (function (){var all_files = inst_26020;
var res_SINGLEQUOTE_ = inst_26023;
var res = inst_26024;
var files_not_loaded = inst_26026;
var dependencies_that_loaded = inst_26028;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26023,inst_26026,inst_26020,inst_26024,inst_26028,inst_26043,state_val_26107,c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26044){
var map__26175 = p__26044;
var map__26175__$1 = ((((!((map__26175 == null)))?((((map__26175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26175):map__26175);
var namespace = cljs.core.get.call(null,map__26175__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26175__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26023,inst_26026,inst_26020,inst_26024,inst_26028,inst_26043,state_val_26107,c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26046 = cljs.core.map.call(null,inst_26045,inst_26024);
var inst_26047 = cljs.core.pr_str.call(null,inst_26046);
var inst_26048 = figwheel.client.utils.log.call(null,inst_26047);
var inst_26049 = (function (){var all_files = inst_26020;
var res_SINGLEQUOTE_ = inst_26023;
var res = inst_26024;
var files_not_loaded = inst_26026;
var dependencies_that_loaded = inst_26028;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26023,inst_26026,inst_26020,inst_26024,inst_26028,inst_26043,inst_26045,inst_26046,inst_26047,inst_26048,state_val_26107,c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26023,inst_26026,inst_26020,inst_26024,inst_26028,inst_26043,inst_26045,inst_26046,inst_26047,inst_26048,state_val_26107,c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26050 = setTimeout(inst_26049,(10));
var state_26106__$1 = (function (){var statearr_26177 = state_26106;
(statearr_26177[(33)] = inst_26043);

(statearr_26177[(34)] = inst_26048);

return statearr_26177;
})();
var statearr_26178_26244 = state_26106__$1;
(statearr_26178_26244[(2)] = inst_26050);

(statearr_26178_26244[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (16))){
var state_26106__$1 = state_26106;
var statearr_26179_26245 = state_26106__$1;
(statearr_26179_26245[(2)] = reload_dependents);

(statearr_26179_26245[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (38))){
var inst_26060 = (state_26106[(16)]);
var inst_26077 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26060);
var state_26106__$1 = state_26106;
var statearr_26180_26246 = state_26106__$1;
(statearr_26180_26246[(2)] = inst_26077);

(statearr_26180_26246[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (30))){
var state_26106__$1 = state_26106;
var statearr_26181_26247 = state_26106__$1;
(statearr_26181_26247[(2)] = null);

(statearr_26181_26247[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (10))){
var inst_25980 = (state_26106[(22)]);
var inst_25982 = cljs.core.chunked_seq_QMARK_.call(null,inst_25980);
var state_26106__$1 = state_26106;
if(inst_25982){
var statearr_26182_26248 = state_26106__$1;
(statearr_26182_26248[(1)] = (13));

} else {
var statearr_26183_26249 = state_26106__$1;
(statearr_26183_26249[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (18))){
var inst_26014 = (state_26106[(2)]);
var state_26106__$1 = state_26106;
if(cljs.core.truth_(inst_26014)){
var statearr_26184_26250 = state_26106__$1;
(statearr_26184_26250[(1)] = (19));

} else {
var statearr_26185_26251 = state_26106__$1;
(statearr_26185_26251[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (42))){
var state_26106__$1 = state_26106;
var statearr_26186_26252 = state_26106__$1;
(statearr_26186_26252[(2)] = null);

(statearr_26186_26252[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (37))){
var inst_26072 = (state_26106[(2)]);
var state_26106__$1 = state_26106;
var statearr_26187_26253 = state_26106__$1;
(statearr_26187_26253[(2)] = inst_26072);

(statearr_26187_26253[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26107 === (8))){
var inst_25980 = (state_26106[(22)]);
var inst_25967 = (state_26106[(10)]);
var inst_25980__$1 = cljs.core.seq.call(null,inst_25967);
var state_26106__$1 = (function (){var statearr_26188 = state_26106;
(statearr_26188[(22)] = inst_25980__$1);

return statearr_26188;
})();
if(inst_25980__$1){
var statearr_26189_26254 = state_26106__$1;
(statearr_26189_26254[(1)] = (10));

} else {
var statearr_26190_26255 = state_26106__$1;
(statearr_26190_26255[(1)] = (11));

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
});})(c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22306__auto__,c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22307__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22307__auto____0 = (function (){
var statearr_26194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26194[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22307__auto__);

(statearr_26194[(1)] = (1));

return statearr_26194;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22307__auto____1 = (function (state_26106){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_26106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e26195){if((e26195 instanceof Object)){
var ex__22310__auto__ = e26195;
var statearr_26196_26256 = state_26106;
(statearr_26196_26256[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26257 = state_26106;
state_26106 = G__26257;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22307__auto__ = function(state_26106){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22307__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22307__auto____1.call(this,state_26106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22307__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22307__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22420__auto__ = (function (){var statearr_26197 = f__22419__auto__.call(null);
(statearr_26197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto__);

return statearr_26197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto__,map__25952,map__25952__$1,opts,before_jsload,on_jsload,reload_dependents,map__25953,map__25953__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22418__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26260,link){
var map__26263 = p__26260;
var map__26263__$1 = ((((!((map__26263 == null)))?((((map__26263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26263):map__26263);
var file = cljs.core.get.call(null,map__26263__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26263,map__26263__$1,file){
return (function (p1__26258_SHARP_,p2__26259_SHARP_){
if(cljs.core._EQ_.call(null,p1__26258_SHARP_,p2__26259_SHARP_)){
return p1__26258_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26263,map__26263__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26269){
var map__26270 = p__26269;
var map__26270__$1 = ((((!((map__26270 == null)))?((((map__26270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26270):map__26270);
var match_length = cljs.core.get.call(null,map__26270__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26270__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26265_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26265_SHARP_);
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
var args26272 = [];
var len__20793__auto___26275 = arguments.length;
var i__20794__auto___26276 = (0);
while(true){
if((i__20794__auto___26276 < len__20793__auto___26275)){
args26272.push((arguments[i__20794__auto___26276]));

var G__26277 = (i__20794__auto___26276 + (1));
i__20794__auto___26276 = G__26277;
continue;
} else {
}
break;
}

var G__26274 = args26272.length;
switch (G__26274) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26272.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26279_SHARP_,p2__26280_SHARP_){
return cljs.core.assoc.call(null,p1__26279_SHARP_,cljs.core.get.call(null,p2__26280_SHARP_,key),p2__26280_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26281){
var map__26284 = p__26281;
var map__26284__$1 = ((((!((map__26284 == null)))?((((map__26284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26284):map__26284);
var f_data = map__26284__$1;
var file = cljs.core.get.call(null,map__26284__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26286,files_msg){
var map__26293 = p__26286;
var map__26293__$1 = ((((!((map__26293 == null)))?((((map__26293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26293):map__26293);
var opts = map__26293__$1;
var on_cssload = cljs.core.get.call(null,map__26293__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26295_26299 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26296_26300 = null;
var count__26297_26301 = (0);
var i__26298_26302 = (0);
while(true){
if((i__26298_26302 < count__26297_26301)){
var f_26303 = cljs.core._nth.call(null,chunk__26296_26300,i__26298_26302);
figwheel.client.file_reloading.reload_css_file.call(null,f_26303);

var G__26304 = seq__26295_26299;
var G__26305 = chunk__26296_26300;
var G__26306 = count__26297_26301;
var G__26307 = (i__26298_26302 + (1));
seq__26295_26299 = G__26304;
chunk__26296_26300 = G__26305;
count__26297_26301 = G__26306;
i__26298_26302 = G__26307;
continue;
} else {
var temp__4425__auto___26308 = cljs.core.seq.call(null,seq__26295_26299);
if(temp__4425__auto___26308){
var seq__26295_26309__$1 = temp__4425__auto___26308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26295_26309__$1)){
var c__20538__auto___26310 = cljs.core.chunk_first.call(null,seq__26295_26309__$1);
var G__26311 = cljs.core.chunk_rest.call(null,seq__26295_26309__$1);
var G__26312 = c__20538__auto___26310;
var G__26313 = cljs.core.count.call(null,c__20538__auto___26310);
var G__26314 = (0);
seq__26295_26299 = G__26311;
chunk__26296_26300 = G__26312;
count__26297_26301 = G__26313;
i__26298_26302 = G__26314;
continue;
} else {
var f_26315 = cljs.core.first.call(null,seq__26295_26309__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26315);

var G__26316 = cljs.core.next.call(null,seq__26295_26309__$1);
var G__26317 = null;
var G__26318 = (0);
var G__26319 = (0);
seq__26295_26299 = G__26316;
chunk__26296_26300 = G__26317;
count__26297_26301 = G__26318;
i__26298_26302 = G__26319;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26293,map__26293__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26293,map__26293__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map