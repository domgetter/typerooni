// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26755 = cljs.core._EQ_;
var expr__26756 = (function (){var or__19735__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__19735__auto__)){
return or__19735__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26755.call(null,"true",expr__26756))){
return true;
} else {
if(cljs.core.truth_(pred__26755.call(null,"false",expr__26756))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26756)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__20800__auto__ = [];
var len__20793__auto___26759 = arguments.length;
var i__20794__auto___26760 = (0);
while(true){
if((i__20794__auto___26760 < len__20793__auto___26759)){
args__20800__auto__.push((arguments[i__20794__auto___26760]));

var G__26761 = (i__20794__auto___26760 + (1));
i__20794__auto___26760 = G__26761;
continue;
} else {
}
break;
}

var argseq__20801__auto__ = ((((0) < args__20800__auto__.length))?(new cljs.core.IndexedSeq(args__20800__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__20801__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq26758){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26758));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26762){
var map__26765 = p__26762;
var map__26765__$1 = ((((!((map__26765 == null)))?((((map__26765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26765):map__26765);
var message = cljs.core.get.call(null,map__26765__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26765__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19735__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19735__auto__)){
return or__19735__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19723__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19723__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19723__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22418__auto___26927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto___26927,ch){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto___26927,ch){
return (function (state_26896){
var state_val_26897 = (state_26896[(1)]);
if((state_val_26897 === (7))){
var inst_26892 = (state_26896[(2)]);
var state_26896__$1 = state_26896;
var statearr_26898_26928 = state_26896__$1;
(statearr_26898_26928[(2)] = inst_26892);

(statearr_26898_26928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (1))){
var state_26896__$1 = state_26896;
var statearr_26899_26929 = state_26896__$1;
(statearr_26899_26929[(2)] = null);

(statearr_26899_26929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (4))){
var inst_26849 = (state_26896[(7)]);
var inst_26849__$1 = (state_26896[(2)]);
var state_26896__$1 = (function (){var statearr_26900 = state_26896;
(statearr_26900[(7)] = inst_26849__$1);

return statearr_26900;
})();
if(cljs.core.truth_(inst_26849__$1)){
var statearr_26901_26930 = state_26896__$1;
(statearr_26901_26930[(1)] = (5));

} else {
var statearr_26902_26931 = state_26896__$1;
(statearr_26902_26931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (15))){
var inst_26856 = (state_26896[(8)]);
var inst_26871 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26856);
var inst_26872 = cljs.core.first.call(null,inst_26871);
var inst_26873 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26872);
var inst_26874 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26873)].join('');
var inst_26875 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26874);
var state_26896__$1 = state_26896;
var statearr_26903_26932 = state_26896__$1;
(statearr_26903_26932[(2)] = inst_26875);

(statearr_26903_26932[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (13))){
var inst_26880 = (state_26896[(2)]);
var state_26896__$1 = state_26896;
var statearr_26904_26933 = state_26896__$1;
(statearr_26904_26933[(2)] = inst_26880);

(statearr_26904_26933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (6))){
var state_26896__$1 = state_26896;
var statearr_26905_26934 = state_26896__$1;
(statearr_26905_26934[(2)] = null);

(statearr_26905_26934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (17))){
var inst_26878 = (state_26896[(2)]);
var state_26896__$1 = state_26896;
var statearr_26906_26935 = state_26896__$1;
(statearr_26906_26935[(2)] = inst_26878);

(statearr_26906_26935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (3))){
var inst_26894 = (state_26896[(2)]);
var state_26896__$1 = state_26896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26896__$1,inst_26894);
} else {
if((state_val_26897 === (12))){
var inst_26855 = (state_26896[(9)]);
var inst_26869 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26855,opts);
var state_26896__$1 = state_26896;
if(cljs.core.truth_(inst_26869)){
var statearr_26907_26936 = state_26896__$1;
(statearr_26907_26936[(1)] = (15));

} else {
var statearr_26908_26937 = state_26896__$1;
(statearr_26908_26937[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (2))){
var state_26896__$1 = state_26896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26896__$1,(4),ch);
} else {
if((state_val_26897 === (11))){
var inst_26856 = (state_26896[(8)]);
var inst_26861 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26862 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26856);
var inst_26863 = cljs.core.async.timeout.call(null,(1000));
var inst_26864 = [inst_26862,inst_26863];
var inst_26865 = (new cljs.core.PersistentVector(null,2,(5),inst_26861,inst_26864,null));
var state_26896__$1 = state_26896;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26896__$1,(14),inst_26865);
} else {
if((state_val_26897 === (9))){
var inst_26856 = (state_26896[(8)]);
var inst_26882 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26883 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26856);
var inst_26884 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26883);
var inst_26885 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26884)].join('');
var inst_26886 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26885);
var state_26896__$1 = (function (){var statearr_26909 = state_26896;
(statearr_26909[(10)] = inst_26882);

return statearr_26909;
})();
var statearr_26910_26938 = state_26896__$1;
(statearr_26910_26938[(2)] = inst_26886);

(statearr_26910_26938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (5))){
var inst_26849 = (state_26896[(7)]);
var inst_26851 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26852 = (new cljs.core.PersistentArrayMap(null,2,inst_26851,null));
var inst_26853 = (new cljs.core.PersistentHashSet(null,inst_26852,null));
var inst_26854 = figwheel.client.focus_msgs.call(null,inst_26853,inst_26849);
var inst_26855 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26854);
var inst_26856 = cljs.core.first.call(null,inst_26854);
var inst_26857 = figwheel.client.autoload_QMARK_.call(null);
var state_26896__$1 = (function (){var statearr_26911 = state_26896;
(statearr_26911[(9)] = inst_26855);

(statearr_26911[(8)] = inst_26856);

return statearr_26911;
})();
if(cljs.core.truth_(inst_26857)){
var statearr_26912_26939 = state_26896__$1;
(statearr_26912_26939[(1)] = (8));

} else {
var statearr_26913_26940 = state_26896__$1;
(statearr_26913_26940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (14))){
var inst_26867 = (state_26896[(2)]);
var state_26896__$1 = state_26896;
var statearr_26914_26941 = state_26896__$1;
(statearr_26914_26941[(2)] = inst_26867);

(statearr_26914_26941[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (16))){
var state_26896__$1 = state_26896;
var statearr_26915_26942 = state_26896__$1;
(statearr_26915_26942[(2)] = null);

(statearr_26915_26942[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (10))){
var inst_26888 = (state_26896[(2)]);
var state_26896__$1 = (function (){var statearr_26916 = state_26896;
(statearr_26916[(11)] = inst_26888);

return statearr_26916;
})();
var statearr_26917_26943 = state_26896__$1;
(statearr_26917_26943[(2)] = null);

(statearr_26917_26943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (8))){
var inst_26855 = (state_26896[(9)]);
var inst_26859 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26855,opts);
var state_26896__$1 = state_26896;
if(cljs.core.truth_(inst_26859)){
var statearr_26918_26944 = state_26896__$1;
(statearr_26918_26944[(1)] = (11));

} else {
var statearr_26919_26945 = state_26896__$1;
(statearr_26919_26945[(1)] = (12));

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
});})(c__22418__auto___26927,ch))
;
return ((function (switch__22306__auto__,c__22418__auto___26927,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22307__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22307__auto____0 = (function (){
var statearr_26923 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26923[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22307__auto__);

(statearr_26923[(1)] = (1));

return statearr_26923;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22307__auto____1 = (function (state_26896){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_26896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e26924){if((e26924 instanceof Object)){
var ex__22310__auto__ = e26924;
var statearr_26925_26946 = state_26896;
(statearr_26925_26946[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26947 = state_26896;
state_26896 = G__26947;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22307__auto__ = function(state_26896){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22307__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22307__auto____1.call(this,state_26896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22307__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22307__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto___26927,ch))
})();
var state__22420__auto__ = (function (){var statearr_26926 = f__22419__auto__.call(null);
(statearr_26926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___26927);

return statearr_26926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto___26927,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26948_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26948_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26955 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26955){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26953 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26954 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26954;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26953;
}}catch (e26952){if((e26952 instanceof Error)){
var e = e26952;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26955], null));
} else {
var e = e26952;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26955))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26956){
var map__26963 = p__26956;
var map__26963__$1 = ((((!((map__26963 == null)))?((((map__26963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26963):map__26963);
var opts = map__26963__$1;
var build_id = cljs.core.get.call(null,map__26963__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26963,map__26963__$1,opts,build_id){
return (function (p__26965){
var vec__26966 = p__26965;
var map__26967 = cljs.core.nth.call(null,vec__26966,(0),null);
var map__26967__$1 = ((((!((map__26967 == null)))?((((map__26967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26967):map__26967);
var msg = map__26967__$1;
var msg_name = cljs.core.get.call(null,map__26967__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26966,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26966,map__26967,map__26967__$1,msg,msg_name,_,map__26963,map__26963__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26966,map__26967,map__26967__$1,msg,msg_name,_,map__26963,map__26963__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26963,map__26963__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26973){
var vec__26974 = p__26973;
var map__26975 = cljs.core.nth.call(null,vec__26974,(0),null);
var map__26975__$1 = ((((!((map__26975 == null)))?((((map__26975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26975):map__26975);
var msg = map__26975__$1;
var msg_name = cljs.core.get.call(null,map__26975__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26974,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26977){
var map__26987 = p__26977;
var map__26987__$1 = ((((!((map__26987 == null)))?((((map__26987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26987):map__26987);
var on_compile_warning = cljs.core.get.call(null,map__26987__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26987__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26987,map__26987__$1,on_compile_warning,on_compile_fail){
return (function (p__26989){
var vec__26990 = p__26989;
var map__26991 = cljs.core.nth.call(null,vec__26990,(0),null);
var map__26991__$1 = ((((!((map__26991 == null)))?((((map__26991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26991):map__26991);
var msg = map__26991__$1;
var msg_name = cljs.core.get.call(null,map__26991__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26990,(1));
var pred__26993 = cljs.core._EQ_;
var expr__26994 = msg_name;
if(cljs.core.truth_(pred__26993.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26994))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26993.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26994))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26987,map__26987__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto__,msg_hist,msg_names,msg){
return (function (state_27210){
var state_val_27211 = (state_27210[(1)]);
if((state_val_27211 === (7))){
var inst_27134 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
if(cljs.core.truth_(inst_27134)){
var statearr_27212_27258 = state_27210__$1;
(statearr_27212_27258[(1)] = (8));

} else {
var statearr_27213_27259 = state_27210__$1;
(statearr_27213_27259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (20))){
var inst_27204 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
var statearr_27214_27260 = state_27210__$1;
(statearr_27214_27260[(2)] = inst_27204);

(statearr_27214_27260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (27))){
var inst_27200 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
var statearr_27215_27261 = state_27210__$1;
(statearr_27215_27261[(2)] = inst_27200);

(statearr_27215_27261[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (1))){
var inst_27127 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27210__$1 = state_27210;
if(cljs.core.truth_(inst_27127)){
var statearr_27216_27262 = state_27210__$1;
(statearr_27216_27262[(1)] = (2));

} else {
var statearr_27217_27263 = state_27210__$1;
(statearr_27217_27263[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (24))){
var inst_27202 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
var statearr_27218_27264 = state_27210__$1;
(statearr_27218_27264[(2)] = inst_27202);

(statearr_27218_27264[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (4))){
var inst_27208 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27210__$1,inst_27208);
} else {
if((state_val_27211 === (15))){
var inst_27206 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
var statearr_27219_27265 = state_27210__$1;
(statearr_27219_27265[(2)] = inst_27206);

(statearr_27219_27265[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (21))){
var inst_27165 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
var statearr_27220_27266 = state_27210__$1;
(statearr_27220_27266[(2)] = inst_27165);

(statearr_27220_27266[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (31))){
var inst_27189 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27210__$1 = state_27210;
if(cljs.core.truth_(inst_27189)){
var statearr_27221_27267 = state_27210__$1;
(statearr_27221_27267[(1)] = (34));

} else {
var statearr_27222_27268 = state_27210__$1;
(statearr_27222_27268[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (32))){
var inst_27198 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
var statearr_27223_27269 = state_27210__$1;
(statearr_27223_27269[(2)] = inst_27198);

(statearr_27223_27269[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (33))){
var inst_27187 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
var statearr_27224_27270 = state_27210__$1;
(statearr_27224_27270[(2)] = inst_27187);

(statearr_27224_27270[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (13))){
var inst_27148 = figwheel.client.heads_up.clear.call(null);
var state_27210__$1 = state_27210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27210__$1,(16),inst_27148);
} else {
if((state_val_27211 === (22))){
var inst_27169 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27170 = figwheel.client.heads_up.append_message.call(null,inst_27169);
var state_27210__$1 = state_27210;
var statearr_27225_27271 = state_27210__$1;
(statearr_27225_27271[(2)] = inst_27170);

(statearr_27225_27271[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (36))){
var inst_27196 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
var statearr_27226_27272 = state_27210__$1;
(statearr_27226_27272[(2)] = inst_27196);

(statearr_27226_27272[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (29))){
var inst_27180 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
var statearr_27227_27273 = state_27210__$1;
(statearr_27227_27273[(2)] = inst_27180);

(statearr_27227_27273[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (6))){
var inst_27129 = (state_27210[(7)]);
var state_27210__$1 = state_27210;
var statearr_27228_27274 = state_27210__$1;
(statearr_27228_27274[(2)] = inst_27129);

(statearr_27228_27274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (28))){
var inst_27176 = (state_27210[(2)]);
var inst_27177 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27178 = figwheel.client.heads_up.display_warning.call(null,inst_27177);
var state_27210__$1 = (function (){var statearr_27229 = state_27210;
(statearr_27229[(8)] = inst_27176);

return statearr_27229;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27210__$1,(29),inst_27178);
} else {
if((state_val_27211 === (25))){
var inst_27174 = figwheel.client.heads_up.clear.call(null);
var state_27210__$1 = state_27210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27210__$1,(28),inst_27174);
} else {
if((state_val_27211 === (34))){
var inst_27191 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27210__$1 = state_27210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27210__$1,(37),inst_27191);
} else {
if((state_val_27211 === (17))){
var inst_27156 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
var statearr_27230_27275 = state_27210__$1;
(statearr_27230_27275[(2)] = inst_27156);

(statearr_27230_27275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (3))){
var inst_27146 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27210__$1 = state_27210;
if(cljs.core.truth_(inst_27146)){
var statearr_27231_27276 = state_27210__$1;
(statearr_27231_27276[(1)] = (13));

} else {
var statearr_27232_27277 = state_27210__$1;
(statearr_27232_27277[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (12))){
var inst_27142 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
var statearr_27233_27278 = state_27210__$1;
(statearr_27233_27278[(2)] = inst_27142);

(statearr_27233_27278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (2))){
var inst_27129 = (state_27210[(7)]);
var inst_27129__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27210__$1 = (function (){var statearr_27234 = state_27210;
(statearr_27234[(7)] = inst_27129__$1);

return statearr_27234;
})();
if(cljs.core.truth_(inst_27129__$1)){
var statearr_27235_27279 = state_27210__$1;
(statearr_27235_27279[(1)] = (5));

} else {
var statearr_27236_27280 = state_27210__$1;
(statearr_27236_27280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (23))){
var inst_27172 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27210__$1 = state_27210;
if(cljs.core.truth_(inst_27172)){
var statearr_27237_27281 = state_27210__$1;
(statearr_27237_27281[(1)] = (25));

} else {
var statearr_27238_27282 = state_27210__$1;
(statearr_27238_27282[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (35))){
var state_27210__$1 = state_27210;
var statearr_27239_27283 = state_27210__$1;
(statearr_27239_27283[(2)] = null);

(statearr_27239_27283[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (19))){
var inst_27167 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27210__$1 = state_27210;
if(cljs.core.truth_(inst_27167)){
var statearr_27240_27284 = state_27210__$1;
(statearr_27240_27284[(1)] = (22));

} else {
var statearr_27241_27285 = state_27210__$1;
(statearr_27241_27285[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (11))){
var inst_27138 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
var statearr_27242_27286 = state_27210__$1;
(statearr_27242_27286[(2)] = inst_27138);

(statearr_27242_27286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (9))){
var inst_27140 = figwheel.client.heads_up.clear.call(null);
var state_27210__$1 = state_27210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27210__$1,(12),inst_27140);
} else {
if((state_val_27211 === (5))){
var inst_27131 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27210__$1 = state_27210;
var statearr_27243_27287 = state_27210__$1;
(statearr_27243_27287[(2)] = inst_27131);

(statearr_27243_27287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (14))){
var inst_27158 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27210__$1 = state_27210;
if(cljs.core.truth_(inst_27158)){
var statearr_27244_27288 = state_27210__$1;
(statearr_27244_27288[(1)] = (18));

} else {
var statearr_27245_27289 = state_27210__$1;
(statearr_27245_27289[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (26))){
var inst_27182 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27210__$1 = state_27210;
if(cljs.core.truth_(inst_27182)){
var statearr_27246_27290 = state_27210__$1;
(statearr_27246_27290[(1)] = (30));

} else {
var statearr_27247_27291 = state_27210__$1;
(statearr_27247_27291[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (16))){
var inst_27150 = (state_27210[(2)]);
var inst_27151 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27152 = figwheel.client.format_messages.call(null,inst_27151);
var inst_27153 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27154 = figwheel.client.heads_up.display_error.call(null,inst_27152,inst_27153);
var state_27210__$1 = (function (){var statearr_27248 = state_27210;
(statearr_27248[(9)] = inst_27150);

return statearr_27248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27210__$1,(17),inst_27154);
} else {
if((state_val_27211 === (30))){
var inst_27184 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27185 = figwheel.client.heads_up.display_warning.call(null,inst_27184);
var state_27210__$1 = state_27210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27210__$1,(33),inst_27185);
} else {
if((state_val_27211 === (10))){
var inst_27144 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
var statearr_27249_27292 = state_27210__$1;
(statearr_27249_27292[(2)] = inst_27144);

(statearr_27249_27292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (18))){
var inst_27160 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27161 = figwheel.client.format_messages.call(null,inst_27160);
var inst_27162 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27163 = figwheel.client.heads_up.display_error.call(null,inst_27161,inst_27162);
var state_27210__$1 = state_27210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27210__$1,(21),inst_27163);
} else {
if((state_val_27211 === (37))){
var inst_27193 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
var statearr_27250_27293 = state_27210__$1;
(statearr_27250_27293[(2)] = inst_27193);

(statearr_27250_27293[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27211 === (8))){
var inst_27136 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27210__$1 = state_27210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27210__$1,(11),inst_27136);
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
});})(c__22418__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22306__auto__,c__22418__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22307__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22307__auto____0 = (function (){
var statearr_27254 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27254[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22307__auto__);

(statearr_27254[(1)] = (1));

return statearr_27254;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22307__auto____1 = (function (state_27210){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_27210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e27255){if((e27255 instanceof Object)){
var ex__22310__auto__ = e27255;
var statearr_27256_27294 = state_27210;
(statearr_27256_27294[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27295 = state_27210;
state_27210 = G__27295;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22307__auto__ = function(state_27210){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22307__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22307__auto____1.call(this,state_27210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22307__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22307__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto__,msg_hist,msg_names,msg))
})();
var state__22420__auto__ = (function (){var statearr_27257 = f__22419__auto__.call(null);
(statearr_27257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto__);

return statearr_27257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto__,msg_hist,msg_names,msg))
);

return c__22418__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22418__auto___27358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto___27358,ch){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto___27358,ch){
return (function (state_27341){
var state_val_27342 = (state_27341[(1)]);
if((state_val_27342 === (1))){
var state_27341__$1 = state_27341;
var statearr_27343_27359 = state_27341__$1;
(statearr_27343_27359[(2)] = null);

(statearr_27343_27359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (2))){
var state_27341__$1 = state_27341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27341__$1,(4),ch);
} else {
if((state_val_27342 === (3))){
var inst_27339 = (state_27341[(2)]);
var state_27341__$1 = state_27341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27341__$1,inst_27339);
} else {
if((state_val_27342 === (4))){
var inst_27329 = (state_27341[(7)]);
var inst_27329__$1 = (state_27341[(2)]);
var state_27341__$1 = (function (){var statearr_27344 = state_27341;
(statearr_27344[(7)] = inst_27329__$1);

return statearr_27344;
})();
if(cljs.core.truth_(inst_27329__$1)){
var statearr_27345_27360 = state_27341__$1;
(statearr_27345_27360[(1)] = (5));

} else {
var statearr_27346_27361 = state_27341__$1;
(statearr_27346_27361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (5))){
var inst_27329 = (state_27341[(7)]);
var inst_27331 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27329);
var state_27341__$1 = state_27341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27341__$1,(8),inst_27331);
} else {
if((state_val_27342 === (6))){
var state_27341__$1 = state_27341;
var statearr_27347_27362 = state_27341__$1;
(statearr_27347_27362[(2)] = null);

(statearr_27347_27362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (7))){
var inst_27337 = (state_27341[(2)]);
var state_27341__$1 = state_27341;
var statearr_27348_27363 = state_27341__$1;
(statearr_27348_27363[(2)] = inst_27337);

(statearr_27348_27363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27342 === (8))){
var inst_27333 = (state_27341[(2)]);
var state_27341__$1 = (function (){var statearr_27349 = state_27341;
(statearr_27349[(8)] = inst_27333);

return statearr_27349;
})();
var statearr_27350_27364 = state_27341__$1;
(statearr_27350_27364[(2)] = null);

(statearr_27350_27364[(1)] = (2));


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
});})(c__22418__auto___27358,ch))
;
return ((function (switch__22306__auto__,c__22418__auto___27358,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22307__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22307__auto____0 = (function (){
var statearr_27354 = [null,null,null,null,null,null,null,null,null];
(statearr_27354[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22307__auto__);

(statearr_27354[(1)] = (1));

return statearr_27354;
});
var figwheel$client$heads_up_plugin_$_state_machine__22307__auto____1 = (function (state_27341){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_27341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e27355){if((e27355 instanceof Object)){
var ex__22310__auto__ = e27355;
var statearr_27356_27365 = state_27341;
(statearr_27356_27365[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27366 = state_27341;
state_27341 = G__27366;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22307__auto__ = function(state_27341){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22307__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22307__auto____1.call(this,state_27341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22307__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22307__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto___27358,ch))
})();
var state__22420__auto__ = (function (){var statearr_27357 = f__22419__auto__.call(null);
(statearr_27357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto___27358);

return statearr_27357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto___27358,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto__){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto__){
return (function (state_27387){
var state_val_27388 = (state_27387[(1)]);
if((state_val_27388 === (1))){
var inst_27382 = cljs.core.async.timeout.call(null,(3000));
var state_27387__$1 = state_27387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27387__$1,(2),inst_27382);
} else {
if((state_val_27388 === (2))){
var inst_27384 = (state_27387[(2)]);
var inst_27385 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27387__$1 = (function (){var statearr_27389 = state_27387;
(statearr_27389[(7)] = inst_27384);

return statearr_27389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27387__$1,inst_27385);
} else {
return null;
}
}
});})(c__22418__auto__))
;
return ((function (switch__22306__auto__,c__22418__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22307__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22307__auto____0 = (function (){
var statearr_27393 = [null,null,null,null,null,null,null,null];
(statearr_27393[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22307__auto__);

(statearr_27393[(1)] = (1));

return statearr_27393;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22307__auto____1 = (function (state_27387){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_27387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e27394){if((e27394 instanceof Object)){
var ex__22310__auto__ = e27394;
var statearr_27395_27397 = state_27387;
(statearr_27395_27397[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27398 = state_27387;
state_27387 = G__27398;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22307__auto__ = function(state_27387){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22307__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22307__auto____1.call(this,state_27387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22307__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22307__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto__))
})();
var state__22420__auto__ = (function (){var statearr_27396 = f__22419__auto__.call(null);
(statearr_27396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto__);

return statearr_27396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto__))
);

return c__22418__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27399){
var map__27406 = p__27399;
var map__27406__$1 = ((((!((map__27406 == null)))?((((map__27406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27406):map__27406);
var ed = map__27406__$1;
var formatted_exception = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27408_27412 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27409_27413 = null;
var count__27410_27414 = (0);
var i__27411_27415 = (0);
while(true){
if((i__27411_27415 < count__27410_27414)){
var msg_27416 = cljs.core._nth.call(null,chunk__27409_27413,i__27411_27415);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27416);

var G__27417 = seq__27408_27412;
var G__27418 = chunk__27409_27413;
var G__27419 = count__27410_27414;
var G__27420 = (i__27411_27415 + (1));
seq__27408_27412 = G__27417;
chunk__27409_27413 = G__27418;
count__27410_27414 = G__27419;
i__27411_27415 = G__27420;
continue;
} else {
var temp__4425__auto___27421 = cljs.core.seq.call(null,seq__27408_27412);
if(temp__4425__auto___27421){
var seq__27408_27422__$1 = temp__4425__auto___27421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27408_27422__$1)){
var c__20538__auto___27423 = cljs.core.chunk_first.call(null,seq__27408_27422__$1);
var G__27424 = cljs.core.chunk_rest.call(null,seq__27408_27422__$1);
var G__27425 = c__20538__auto___27423;
var G__27426 = cljs.core.count.call(null,c__20538__auto___27423);
var G__27427 = (0);
seq__27408_27412 = G__27424;
chunk__27409_27413 = G__27425;
count__27410_27414 = G__27426;
i__27411_27415 = G__27427;
continue;
} else {
var msg_27428 = cljs.core.first.call(null,seq__27408_27422__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27428);

var G__27429 = cljs.core.next.call(null,seq__27408_27422__$1);
var G__27430 = null;
var G__27431 = (0);
var G__27432 = (0);
seq__27408_27412 = G__27429;
chunk__27409_27413 = G__27430;
count__27410_27414 = G__27431;
i__27411_27415 = G__27432;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27433){
var map__27436 = p__27433;
var map__27436__$1 = ((((!((map__27436 == null)))?((((map__27436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27436):map__27436);
var w = map__27436__$1;
var message = cljs.core.get.call(null,map__27436__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__19723__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19723__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19723__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27444 = cljs.core.seq.call(null,plugins);
var chunk__27445 = null;
var count__27446 = (0);
var i__27447 = (0);
while(true){
if((i__27447 < count__27446)){
var vec__27448 = cljs.core._nth.call(null,chunk__27445,i__27447);
var k = cljs.core.nth.call(null,vec__27448,(0),null);
var plugin = cljs.core.nth.call(null,vec__27448,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27450 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27444,chunk__27445,count__27446,i__27447,pl_27450,vec__27448,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27450.call(null,msg_hist);
});})(seq__27444,chunk__27445,count__27446,i__27447,pl_27450,vec__27448,k,plugin))
);
} else {
}

var G__27451 = seq__27444;
var G__27452 = chunk__27445;
var G__27453 = count__27446;
var G__27454 = (i__27447 + (1));
seq__27444 = G__27451;
chunk__27445 = G__27452;
count__27446 = G__27453;
i__27447 = G__27454;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27444);
if(temp__4425__auto__){
var seq__27444__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27444__$1)){
var c__20538__auto__ = cljs.core.chunk_first.call(null,seq__27444__$1);
var G__27455 = cljs.core.chunk_rest.call(null,seq__27444__$1);
var G__27456 = c__20538__auto__;
var G__27457 = cljs.core.count.call(null,c__20538__auto__);
var G__27458 = (0);
seq__27444 = G__27455;
chunk__27445 = G__27456;
count__27446 = G__27457;
i__27447 = G__27458;
continue;
} else {
var vec__27449 = cljs.core.first.call(null,seq__27444__$1);
var k = cljs.core.nth.call(null,vec__27449,(0),null);
var plugin = cljs.core.nth.call(null,vec__27449,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27459 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27444,chunk__27445,count__27446,i__27447,pl_27459,vec__27449,k,plugin,seq__27444__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27459.call(null,msg_hist);
});})(seq__27444,chunk__27445,count__27446,i__27447,pl_27459,vec__27449,k,plugin,seq__27444__$1,temp__4425__auto__))
);
} else {
}

var G__27460 = cljs.core.next.call(null,seq__27444__$1);
var G__27461 = null;
var G__27462 = (0);
var G__27463 = (0);
seq__27444 = G__27460;
chunk__27445 = G__27461;
count__27446 = G__27462;
i__27447 = G__27463;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27464 = [];
var len__20793__auto___27467 = arguments.length;
var i__20794__auto___27468 = (0);
while(true){
if((i__20794__auto___27468 < len__20793__auto___27467)){
args27464.push((arguments[i__20794__auto___27468]));

var G__27469 = (i__20794__auto___27468 + (1));
i__20794__auto___27468 = G__27469;
continue;
} else {
}
break;
}

var G__27466 = args27464.length;
switch (G__27466) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27464.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__20800__auto__ = [];
var len__20793__auto___27475 = arguments.length;
var i__20794__auto___27476 = (0);
while(true){
if((i__20794__auto___27476 < len__20793__auto___27475)){
args__20800__auto__.push((arguments[i__20794__auto___27476]));

var G__27477 = (i__20794__auto___27476 + (1));
i__20794__auto___27476 = G__27477;
continue;
} else {
}
break;
}

var argseq__20801__auto__ = ((((0) < args__20800__auto__.length))?(new cljs.core.IndexedSeq(args__20800__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20801__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27472){
var map__27473 = p__27472;
var map__27473__$1 = ((((!((map__27473 == null)))?((((map__27473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27473):map__27473);
var opts = map__27473__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27471){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27471));
});

//# sourceMappingURL=client.js.map