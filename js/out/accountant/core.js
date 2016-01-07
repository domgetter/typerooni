// Compiled by ClojureScript 1.7.170 {}
goog.provide('accountant.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('secretary.core');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.history.Event');
goog.require('clojure.string');
if(typeof accountant.core.history !== 'undefined'){
} else {
accountant.core.history = (new goog.history.Html5History());
}
accountant.core.listen = (function accountant$core$listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history){
var navigation = accountant.core.listen.call(null,history,goog.history.EventType.NAVIGATE);
var c__22418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto__,navigation){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto__,navigation){
return (function (state_27647){
var state_val_27648 = (state_27647[(1)]);
if((state_val_27648 === (1))){
var state_27647__$1 = state_27647;
var statearr_27649_27663 = state_27647__$1;
(statearr_27649_27663[(2)] = null);

(statearr_27649_27663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27648 === (2))){
var state_27647__$1 = state_27647;
var statearr_27650_27664 = state_27647__$1;
(statearr_27650_27664[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27648 === (3))){
var inst_27645 = (state_27647[(2)]);
var state_27647__$1 = state_27647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27647__$1,inst_27645);
} else {
if((state_val_27648 === (4))){
var state_27647__$1 = state_27647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27647__$1,(7),navigation);
} else {
if((state_val_27648 === (5))){
var state_27647__$1 = state_27647;
var statearr_27652_27665 = state_27647__$1;
(statearr_27652_27665[(2)] = null);

(statearr_27652_27665[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27648 === (6))){
var inst_27643 = (state_27647[(2)]);
var state_27647__$1 = state_27647;
var statearr_27653_27666 = state_27647__$1;
(statearr_27653_27666[(2)] = inst_27643);

(statearr_27653_27666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27648 === (7))){
var inst_27637 = (state_27647[(2)]);
var inst_27638 = inst_27637.token;
var inst_27639 = secretary.core.dispatch_BANG_.call(null,inst_27638);
var state_27647__$1 = (function (){var statearr_27654 = state_27647;
(statearr_27654[(7)] = inst_27639);

return statearr_27654;
})();
var statearr_27655_27667 = state_27647__$1;
(statearr_27655_27667[(2)] = null);

(statearr_27655_27667[(1)] = (2));


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
});})(c__22418__auto__,navigation))
;
return ((function (switch__22306__auto__,c__22418__auto__,navigation){
return (function() {
var accountant$core$dispatch_on_navigate_$_state_machine__22307__auto__ = null;
var accountant$core$dispatch_on_navigate_$_state_machine__22307__auto____0 = (function (){
var statearr_27659 = [null,null,null,null,null,null,null,null];
(statearr_27659[(0)] = accountant$core$dispatch_on_navigate_$_state_machine__22307__auto__);

(statearr_27659[(1)] = (1));

return statearr_27659;
});
var accountant$core$dispatch_on_navigate_$_state_machine__22307__auto____1 = (function (state_27647){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_27647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e27660){if((e27660 instanceof Object)){
var ex__22310__auto__ = e27660;
var statearr_27661_27668 = state_27647;
(statearr_27661_27668[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27669 = state_27647;
state_27647 = G__27669;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
accountant$core$dispatch_on_navigate_$_state_machine__22307__auto__ = function(state_27647){
switch(arguments.length){
case 0:
return accountant$core$dispatch_on_navigate_$_state_machine__22307__auto____0.call(this);
case 1:
return accountant$core$dispatch_on_navigate_$_state_machine__22307__auto____1.call(this,state_27647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
accountant$core$dispatch_on_navigate_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = accountant$core$dispatch_on_navigate_$_state_machine__22307__auto____0;
accountant$core$dispatch_on_navigate_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = accountant$core$dispatch_on_navigate_$_state_machine__22307__auto____1;
return accountant$core$dispatch_on_navigate_$_state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto__,navigation))
})();
var state__22420__auto__ = (function (){var statearr_27662 = f__22419__auto__.call(null);
(statearr_27662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto__);

return statearr_27662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto__,navigation))
);

return c__22418__auto__;
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the href content.
 */
accountant.core.find_href = (function accountant$core$find_href(e){
while(true){
var temp__4423__auto__ = e.href;
if(cljs.core.truth_(temp__4423__auto__)){
var href = temp__4423__auto__;
return href;
} else {
var temp__4425__auto__ = e.parentNode;
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
var G__27670 = parent;
e = G__27670;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Gets the URL for a history token, but without preserving the query string
 *   as Google's version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.get_url = (function accountant$core$get_url(history,token){
return [cljs.core.str(history.pathPrefix_),cljs.core.str(token)].join('');
});
/**
 * Sets a history token, but without preserving the query string as Google's
 *   version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.set_token_BANG_ = (function accountant$core$set_token_BANG_(history,token,title){
var js_history = history.window_.history;
var url = accountant.core.get_url.call(null,history,token);
js_history.pushState(null,(function (){var or__19735__auto__ = title;
if(cljs.core.truth_(or__19735__auto__)){
return or__19735__auto__;
} else {
var or__19735__auto____$1 = document.title;
if(cljs.core.truth_(or__19735__auto____$1)){
return or__19735__auto____$1;
} else {
return "";
}
}
})(),url);

return history.dispatchEvent((new goog.history.Event(token)));
});
accountant.core.uri__GT_query = (function accountant$core$uri__GT_query(uri){
var query = uri.getQuery();
if(cljs.core.empty_QMARK_.call(null,query)){
return null;
} else {
return [cljs.core.str("?"),cljs.core.str(query)].join('');
}
});
accountant.core.uri__GT_fragment = (function accountant$core$uri__GT_fragment(uri){
var fragment = uri.getFragment();
if(cljs.core.empty_QMARK_.call(null,fragment)){
return null;
} else {
return [cljs.core.str("#"),cljs.core.str(fragment)].join('');
}
});
/**
 * Create a click handler that blocks page reloads for known routes in
 *   Secretary.
 */
accountant.core.prevent_reload_on_known_path = (function accountant$core$prevent_reload_on_known_path(history){
return goog.events.listen(document,"click",(function (e){
var target = e.target;
var button = e.button;
var meta_key = e.metaKey;
var alt_key = e.altKey;
var ctrl_key = e.ctrlKey;
var shift_key = e.shiftKey;
var any_key = (function (){var or__19735__auto__ = meta_key;
if(cljs.core.truth_(or__19735__auto__)){
return or__19735__auto__;
} else {
var or__19735__auto____$1 = alt_key;
if(cljs.core.truth_(or__19735__auto____$1)){
return or__19735__auto____$1;
} else {
var or__19735__auto____$2 = ctrl_key;
if(cljs.core.truth_(or__19735__auto____$2)){
return or__19735__auto____$2;
} else {
return shift_key;
}
}
}
})();
var href = accountant.core.find_href.call(null,target);
var uri = goog.Uri.parse(href);
var path = uri.getPath();
var query = accountant.core.uri__GT_query.call(null,uri);
var fragment = accountant.core.uri__GT_fragment.call(null,uri);
var relative_href = [cljs.core.str(path),cljs.core.str(query),cljs.core.str(fragment)].join('');
var title = target.title;
if(cljs.core.truth_((function (){var and__19723__auto__ = cljs.core.not.call(null,any_key);
if(and__19723__auto__){
var and__19723__auto____$1 = cljs.core._EQ_.call(null,button,(0));
if(and__19723__auto____$1){
return secretary.core.locate_route.call(null,path);
} else {
return and__19723__auto____$1;
}
} else {
return and__19723__auto__;
}
})())){
accountant.core.set_token_BANG_.call(null,history,relative_href,title);

return e.preventDefault();
} else {
return null;
}
}));
});
/**
 * Create and configure HTML5 history navigation.
 */
accountant.core.configure_navigation_BANG_ = (function accountant$core$configure_navigation_BANG_(){
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

accountant.core.dispatch_on_navigate.call(null,accountant.core.history);

return accountant.core.prevent_reload_on_known_path.call(null,accountant.core.history);
});
accountant.core.map__GT_params = (function accountant$core$map__GT_params(query){
var params = cljs.core.map.call(null,(function (p1__27671_SHARP_){
return cljs.core.name.call(null,p1__27671_SHARP_);
}),cljs.core.keys.call(null,query));
var values = cljs.core.vals.call(null,query);
var pairs = cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,params,values));
return clojure.string.join.call(null,"&",cljs.core.map.call(null,((function (params,values,pairs){
return (function (p1__27672_SHARP_){
return clojure.string.join.call(null,"=",p1__27672_SHARP_);
});})(params,values,pairs))
,pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var args27673 = [];
var len__20793__auto___27676 = arguments.length;
var i__20794__auto___27677 = (0);
while(true){
if((i__20794__auto___27677 < len__20793__auto___27676)){
args27673.push((arguments[i__20794__auto___27677]));

var G__27678 = (i__20794__auto___27677 + (1));
i__20794__auto___27677 = G__27678;
continue;
} else {
}
break;
}

var G__27675 = args27673.length;
switch (G__27675) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27673.length)].join('')));

}
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return accountant.core.navigate_BANG_.call(null,route,cljs.core.PersistentArrayMap.EMPTY);
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,query){
var token = accountant.core.history.getToken();
var old_route = cljs.core.first.call(null,clojure.string.split.call(null,token,"?"));
var query_string = accountant.core.map__GT_params.call(null,cljs.core.reduce_kv.call(null,((function (token,old_route){
return (function (valid,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,valid,k,v);
} else {
return valid;
}
});})(token,old_route))
,cljs.core.PersistentArrayMap.EMPTY,query));
var with_params = ((cljs.core.empty_QMARK_.call(null,query_string))?route:[cljs.core.str(route),cljs.core.str("?"),cljs.core.str(query_string)].join(''));
if(cljs.core._EQ_.call(null,old_route,route)){
return accountant.core.history.replaceToken(with_params);
} else {
return accountant.core.history.setToken(with_params);
}
});

accountant.core.navigate_BANG_.cljs$lang$maxFixedArity = 2;
accountant.core.dispatch_current_BANG_ = (function accountant$core$dispatch_current_BANG_(){

var path = window.location.pathname;
var query = window.location.search;
var hash = window.location.hash;
return secretary.core.dispatch_BANG_.call(null,[cljs.core.str(path),cljs.core.str(query),cljs.core.str(hash)].join(''));
});

//# sourceMappingURL=core.js.map