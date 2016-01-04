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
var pred__26685 = cljs.core._EQ_;
var expr__26686 = (function (){var or__19655__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__19655__auto__)){
return or__19655__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26685.call(null,"true",expr__26686))){
return true;
} else {
if(cljs.core.truth_(pred__26685.call(null,"false",expr__26686))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26686)].join('')));
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
var args__20720__auto__ = [];
var len__20713__auto___26689 = arguments.length;
var i__20714__auto___26690 = (0);
while(true){
if((i__20714__auto___26690 < len__20713__auto___26689)){
args__20720__auto__.push((arguments[i__20714__auto___26690]));

var G__26691 = (i__20714__auto___26690 + (1));
i__20714__auto___26690 = G__26691;
continue;
} else {
}
break;
}

var argseq__20721__auto__ = ((((0) < args__20720__auto__.length))?(new cljs.core.IndexedSeq(args__20720__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__20721__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq26688){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26688));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26692){
var map__26695 = p__26692;
var map__26695__$1 = ((((!((map__26695 == null)))?((((map__26695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26695):map__26695);
var message = cljs.core.get.call(null,map__26695__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26695__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19655__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19655__auto__)){
return or__19655__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19643__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19643__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19643__auto__;
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
var c__22348__auto___26857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto___26857,ch){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto___26857,ch){
return (function (state_26826){
var state_val_26827 = (state_26826[(1)]);
if((state_val_26827 === (7))){
var inst_26822 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26828_26858 = state_26826__$1;
(statearr_26828_26858[(2)] = inst_26822);

(statearr_26828_26858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (1))){
var state_26826__$1 = state_26826;
var statearr_26829_26859 = state_26826__$1;
(statearr_26829_26859[(2)] = null);

(statearr_26829_26859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (4))){
var inst_26779 = (state_26826[(7)]);
var inst_26779__$1 = (state_26826[(2)]);
var state_26826__$1 = (function (){var statearr_26830 = state_26826;
(statearr_26830[(7)] = inst_26779__$1);

return statearr_26830;
})();
if(cljs.core.truth_(inst_26779__$1)){
var statearr_26831_26860 = state_26826__$1;
(statearr_26831_26860[(1)] = (5));

} else {
var statearr_26832_26861 = state_26826__$1;
(statearr_26832_26861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (15))){
var inst_26786 = (state_26826[(8)]);
var inst_26801 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26786);
var inst_26802 = cljs.core.first.call(null,inst_26801);
var inst_26803 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26802);
var inst_26804 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26803)].join('');
var inst_26805 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26804);
var state_26826__$1 = state_26826;
var statearr_26833_26862 = state_26826__$1;
(statearr_26833_26862[(2)] = inst_26805);

(statearr_26833_26862[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (13))){
var inst_26810 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26834_26863 = state_26826__$1;
(statearr_26834_26863[(2)] = inst_26810);

(statearr_26834_26863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (6))){
var state_26826__$1 = state_26826;
var statearr_26835_26864 = state_26826__$1;
(statearr_26835_26864[(2)] = null);

(statearr_26835_26864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (17))){
var inst_26808 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26836_26865 = state_26826__$1;
(statearr_26836_26865[(2)] = inst_26808);

(statearr_26836_26865[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (3))){
var inst_26824 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26826__$1,inst_26824);
} else {
if((state_val_26827 === (12))){
var inst_26785 = (state_26826[(9)]);
var inst_26799 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26785,opts);
var state_26826__$1 = state_26826;
if(cljs.core.truth_(inst_26799)){
var statearr_26837_26866 = state_26826__$1;
(statearr_26837_26866[(1)] = (15));

} else {
var statearr_26838_26867 = state_26826__$1;
(statearr_26838_26867[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (2))){
var state_26826__$1 = state_26826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26826__$1,(4),ch);
} else {
if((state_val_26827 === (11))){
var inst_26786 = (state_26826[(8)]);
var inst_26791 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26792 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26786);
var inst_26793 = cljs.core.async.timeout.call(null,(1000));
var inst_26794 = [inst_26792,inst_26793];
var inst_26795 = (new cljs.core.PersistentVector(null,2,(5),inst_26791,inst_26794,null));
var state_26826__$1 = state_26826;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26826__$1,(14),inst_26795);
} else {
if((state_val_26827 === (9))){
var inst_26786 = (state_26826[(8)]);
var inst_26812 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26813 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26786);
var inst_26814 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26813);
var inst_26815 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26814)].join('');
var inst_26816 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26815);
var state_26826__$1 = (function (){var statearr_26839 = state_26826;
(statearr_26839[(10)] = inst_26812);

return statearr_26839;
})();
var statearr_26840_26868 = state_26826__$1;
(statearr_26840_26868[(2)] = inst_26816);

(statearr_26840_26868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (5))){
var inst_26779 = (state_26826[(7)]);
var inst_26781 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26782 = (new cljs.core.PersistentArrayMap(null,2,inst_26781,null));
var inst_26783 = (new cljs.core.PersistentHashSet(null,inst_26782,null));
var inst_26784 = figwheel.client.focus_msgs.call(null,inst_26783,inst_26779);
var inst_26785 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26784);
var inst_26786 = cljs.core.first.call(null,inst_26784);
var inst_26787 = figwheel.client.autoload_QMARK_.call(null);
var state_26826__$1 = (function (){var statearr_26841 = state_26826;
(statearr_26841[(8)] = inst_26786);

(statearr_26841[(9)] = inst_26785);

return statearr_26841;
})();
if(cljs.core.truth_(inst_26787)){
var statearr_26842_26869 = state_26826__$1;
(statearr_26842_26869[(1)] = (8));

} else {
var statearr_26843_26870 = state_26826__$1;
(statearr_26843_26870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (14))){
var inst_26797 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
var statearr_26844_26871 = state_26826__$1;
(statearr_26844_26871[(2)] = inst_26797);

(statearr_26844_26871[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (16))){
var state_26826__$1 = state_26826;
var statearr_26845_26872 = state_26826__$1;
(statearr_26845_26872[(2)] = null);

(statearr_26845_26872[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (10))){
var inst_26818 = (state_26826[(2)]);
var state_26826__$1 = (function (){var statearr_26846 = state_26826;
(statearr_26846[(11)] = inst_26818);

return statearr_26846;
})();
var statearr_26847_26873 = state_26826__$1;
(statearr_26847_26873[(2)] = null);

(statearr_26847_26873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26827 === (8))){
var inst_26785 = (state_26826[(9)]);
var inst_26789 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26785,opts);
var state_26826__$1 = state_26826;
if(cljs.core.truth_(inst_26789)){
var statearr_26848_26874 = state_26826__$1;
(statearr_26848_26874[(1)] = (11));

} else {
var statearr_26849_26875 = state_26826__$1;
(statearr_26849_26875[(1)] = (12));

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
});})(c__22348__auto___26857,ch))
;
return ((function (switch__22236__auto__,c__22348__auto___26857,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22237__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22237__auto____0 = (function (){
var statearr_26853 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26853[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22237__auto__);

(statearr_26853[(1)] = (1));

return statearr_26853;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22237__auto____1 = (function (state_26826){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_26826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e26854){if((e26854 instanceof Object)){
var ex__22240__auto__ = e26854;
var statearr_26855_26876 = state_26826;
(statearr_26855_26876[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26877 = state_26826;
state_26826 = G__26877;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22237__auto__ = function(state_26826){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22237__auto____1.call(this,state_26826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22237__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22237__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto___26857,ch))
})();
var state__22350__auto__ = (function (){var statearr_26856 = f__22349__auto__.call(null);
(statearr_26856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___26857);

return statearr_26856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto___26857,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26878_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26878_SHARP_));
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
var base_path_26885 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26885){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26883 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26884 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26884;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26883;
}}catch (e26882){if((e26882 instanceof Error)){
var e = e26882;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26885], null));
} else {
var e = e26882;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26885))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26886){
var map__26893 = p__26886;
var map__26893__$1 = ((((!((map__26893 == null)))?((((map__26893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26893):map__26893);
var opts = map__26893__$1;
var build_id = cljs.core.get.call(null,map__26893__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26893,map__26893__$1,opts,build_id){
return (function (p__26895){
var vec__26896 = p__26895;
var map__26897 = cljs.core.nth.call(null,vec__26896,(0),null);
var map__26897__$1 = ((((!((map__26897 == null)))?((((map__26897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26897):map__26897);
var msg = map__26897__$1;
var msg_name = cljs.core.get.call(null,map__26897__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26896,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26896,map__26897,map__26897__$1,msg,msg_name,_,map__26893,map__26893__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26896,map__26897,map__26897__$1,msg,msg_name,_,map__26893,map__26893__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26893,map__26893__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26903){
var vec__26904 = p__26903;
var map__26905 = cljs.core.nth.call(null,vec__26904,(0),null);
var map__26905__$1 = ((((!((map__26905 == null)))?((((map__26905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26905):map__26905);
var msg = map__26905__$1;
var msg_name = cljs.core.get.call(null,map__26905__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26904,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26907){
var map__26917 = p__26907;
var map__26917__$1 = ((((!((map__26917 == null)))?((((map__26917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26917):map__26917);
var on_compile_warning = cljs.core.get.call(null,map__26917__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26917__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26917,map__26917__$1,on_compile_warning,on_compile_fail){
return (function (p__26919){
var vec__26920 = p__26919;
var map__26921 = cljs.core.nth.call(null,vec__26920,(0),null);
var map__26921__$1 = ((((!((map__26921 == null)))?((((map__26921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26921):map__26921);
var msg = map__26921__$1;
var msg_name = cljs.core.get.call(null,map__26921__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26920,(1));
var pred__26923 = cljs.core._EQ_;
var expr__26924 = msg_name;
if(cljs.core.truth_(pred__26923.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26924))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26923.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26924))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26917,map__26917__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto__,msg_hist,msg_names,msg){
return (function (state_27140){
var state_val_27141 = (state_27140[(1)]);
if((state_val_27141 === (7))){
var inst_27064 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
if(cljs.core.truth_(inst_27064)){
var statearr_27142_27188 = state_27140__$1;
(statearr_27142_27188[(1)] = (8));

} else {
var statearr_27143_27189 = state_27140__$1;
(statearr_27143_27189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (20))){
var inst_27134 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
var statearr_27144_27190 = state_27140__$1;
(statearr_27144_27190[(2)] = inst_27134);

(statearr_27144_27190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (27))){
var inst_27130 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
var statearr_27145_27191 = state_27140__$1;
(statearr_27145_27191[(2)] = inst_27130);

(statearr_27145_27191[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (1))){
var inst_27057 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27140__$1 = state_27140;
if(cljs.core.truth_(inst_27057)){
var statearr_27146_27192 = state_27140__$1;
(statearr_27146_27192[(1)] = (2));

} else {
var statearr_27147_27193 = state_27140__$1;
(statearr_27147_27193[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (24))){
var inst_27132 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
var statearr_27148_27194 = state_27140__$1;
(statearr_27148_27194[(2)] = inst_27132);

(statearr_27148_27194[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (4))){
var inst_27138 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27140__$1,inst_27138);
} else {
if((state_val_27141 === (15))){
var inst_27136 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
var statearr_27149_27195 = state_27140__$1;
(statearr_27149_27195[(2)] = inst_27136);

(statearr_27149_27195[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (21))){
var inst_27095 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
var statearr_27150_27196 = state_27140__$1;
(statearr_27150_27196[(2)] = inst_27095);

(statearr_27150_27196[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (31))){
var inst_27119 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27140__$1 = state_27140;
if(cljs.core.truth_(inst_27119)){
var statearr_27151_27197 = state_27140__$1;
(statearr_27151_27197[(1)] = (34));

} else {
var statearr_27152_27198 = state_27140__$1;
(statearr_27152_27198[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (32))){
var inst_27128 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
var statearr_27153_27199 = state_27140__$1;
(statearr_27153_27199[(2)] = inst_27128);

(statearr_27153_27199[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (33))){
var inst_27117 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
var statearr_27154_27200 = state_27140__$1;
(statearr_27154_27200[(2)] = inst_27117);

(statearr_27154_27200[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (13))){
var inst_27078 = figwheel.client.heads_up.clear.call(null);
var state_27140__$1 = state_27140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27140__$1,(16),inst_27078);
} else {
if((state_val_27141 === (22))){
var inst_27099 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27100 = figwheel.client.heads_up.append_message.call(null,inst_27099);
var state_27140__$1 = state_27140;
var statearr_27155_27201 = state_27140__$1;
(statearr_27155_27201[(2)] = inst_27100);

(statearr_27155_27201[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (36))){
var inst_27126 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
var statearr_27156_27202 = state_27140__$1;
(statearr_27156_27202[(2)] = inst_27126);

(statearr_27156_27202[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (29))){
var inst_27110 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
var statearr_27157_27203 = state_27140__$1;
(statearr_27157_27203[(2)] = inst_27110);

(statearr_27157_27203[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (6))){
var inst_27059 = (state_27140[(7)]);
var state_27140__$1 = state_27140;
var statearr_27158_27204 = state_27140__$1;
(statearr_27158_27204[(2)] = inst_27059);

(statearr_27158_27204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (28))){
var inst_27106 = (state_27140[(2)]);
var inst_27107 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27108 = figwheel.client.heads_up.display_warning.call(null,inst_27107);
var state_27140__$1 = (function (){var statearr_27159 = state_27140;
(statearr_27159[(8)] = inst_27106);

return statearr_27159;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27140__$1,(29),inst_27108);
} else {
if((state_val_27141 === (25))){
var inst_27104 = figwheel.client.heads_up.clear.call(null);
var state_27140__$1 = state_27140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27140__$1,(28),inst_27104);
} else {
if((state_val_27141 === (34))){
var inst_27121 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27140__$1 = state_27140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27140__$1,(37),inst_27121);
} else {
if((state_val_27141 === (17))){
var inst_27086 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
var statearr_27160_27205 = state_27140__$1;
(statearr_27160_27205[(2)] = inst_27086);

(statearr_27160_27205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (3))){
var inst_27076 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27140__$1 = state_27140;
if(cljs.core.truth_(inst_27076)){
var statearr_27161_27206 = state_27140__$1;
(statearr_27161_27206[(1)] = (13));

} else {
var statearr_27162_27207 = state_27140__$1;
(statearr_27162_27207[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (12))){
var inst_27072 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
var statearr_27163_27208 = state_27140__$1;
(statearr_27163_27208[(2)] = inst_27072);

(statearr_27163_27208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (2))){
var inst_27059 = (state_27140[(7)]);
var inst_27059__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27140__$1 = (function (){var statearr_27164 = state_27140;
(statearr_27164[(7)] = inst_27059__$1);

return statearr_27164;
})();
if(cljs.core.truth_(inst_27059__$1)){
var statearr_27165_27209 = state_27140__$1;
(statearr_27165_27209[(1)] = (5));

} else {
var statearr_27166_27210 = state_27140__$1;
(statearr_27166_27210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (23))){
var inst_27102 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27140__$1 = state_27140;
if(cljs.core.truth_(inst_27102)){
var statearr_27167_27211 = state_27140__$1;
(statearr_27167_27211[(1)] = (25));

} else {
var statearr_27168_27212 = state_27140__$1;
(statearr_27168_27212[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (35))){
var state_27140__$1 = state_27140;
var statearr_27169_27213 = state_27140__$1;
(statearr_27169_27213[(2)] = null);

(statearr_27169_27213[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (19))){
var inst_27097 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27140__$1 = state_27140;
if(cljs.core.truth_(inst_27097)){
var statearr_27170_27214 = state_27140__$1;
(statearr_27170_27214[(1)] = (22));

} else {
var statearr_27171_27215 = state_27140__$1;
(statearr_27171_27215[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (11))){
var inst_27068 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
var statearr_27172_27216 = state_27140__$1;
(statearr_27172_27216[(2)] = inst_27068);

(statearr_27172_27216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (9))){
var inst_27070 = figwheel.client.heads_up.clear.call(null);
var state_27140__$1 = state_27140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27140__$1,(12),inst_27070);
} else {
if((state_val_27141 === (5))){
var inst_27061 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27140__$1 = state_27140;
var statearr_27173_27217 = state_27140__$1;
(statearr_27173_27217[(2)] = inst_27061);

(statearr_27173_27217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (14))){
var inst_27088 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27140__$1 = state_27140;
if(cljs.core.truth_(inst_27088)){
var statearr_27174_27218 = state_27140__$1;
(statearr_27174_27218[(1)] = (18));

} else {
var statearr_27175_27219 = state_27140__$1;
(statearr_27175_27219[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (26))){
var inst_27112 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27140__$1 = state_27140;
if(cljs.core.truth_(inst_27112)){
var statearr_27176_27220 = state_27140__$1;
(statearr_27176_27220[(1)] = (30));

} else {
var statearr_27177_27221 = state_27140__$1;
(statearr_27177_27221[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (16))){
var inst_27080 = (state_27140[(2)]);
var inst_27081 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27082 = figwheel.client.format_messages.call(null,inst_27081);
var inst_27083 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27084 = figwheel.client.heads_up.display_error.call(null,inst_27082,inst_27083);
var state_27140__$1 = (function (){var statearr_27178 = state_27140;
(statearr_27178[(9)] = inst_27080);

return statearr_27178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27140__$1,(17),inst_27084);
} else {
if((state_val_27141 === (30))){
var inst_27114 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27115 = figwheel.client.heads_up.display_warning.call(null,inst_27114);
var state_27140__$1 = state_27140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27140__$1,(33),inst_27115);
} else {
if((state_val_27141 === (10))){
var inst_27074 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
var statearr_27179_27222 = state_27140__$1;
(statearr_27179_27222[(2)] = inst_27074);

(statearr_27179_27222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (18))){
var inst_27090 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27091 = figwheel.client.format_messages.call(null,inst_27090);
var inst_27092 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27093 = figwheel.client.heads_up.display_error.call(null,inst_27091,inst_27092);
var state_27140__$1 = state_27140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27140__$1,(21),inst_27093);
} else {
if((state_val_27141 === (37))){
var inst_27123 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
var statearr_27180_27223 = state_27140__$1;
(statearr_27180_27223[(2)] = inst_27123);

(statearr_27180_27223[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (8))){
var inst_27066 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27140__$1 = state_27140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27140__$1,(11),inst_27066);
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
});})(c__22348__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22236__auto__,c__22348__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto____0 = (function (){
var statearr_27184 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27184[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto__);

(statearr_27184[(1)] = (1));

return statearr_27184;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto____1 = (function (state_27140){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_27140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e27185){if((e27185 instanceof Object)){
var ex__22240__auto__ = e27185;
var statearr_27186_27224 = state_27140;
(statearr_27186_27224[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27225 = state_27140;
state_27140 = G__27225;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto__ = function(state_27140){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto____1.call(this,state_27140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto__,msg_hist,msg_names,msg))
})();
var state__22350__auto__ = (function (){var statearr_27187 = f__22349__auto__.call(null);
(statearr_27187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto__);

return statearr_27187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto__,msg_hist,msg_names,msg))
);

return c__22348__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22348__auto___27288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto___27288,ch){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto___27288,ch){
return (function (state_27271){
var state_val_27272 = (state_27271[(1)]);
if((state_val_27272 === (1))){
var state_27271__$1 = state_27271;
var statearr_27273_27289 = state_27271__$1;
(statearr_27273_27289[(2)] = null);

(statearr_27273_27289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27272 === (2))){
var state_27271__$1 = state_27271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27271__$1,(4),ch);
} else {
if((state_val_27272 === (3))){
var inst_27269 = (state_27271[(2)]);
var state_27271__$1 = state_27271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27271__$1,inst_27269);
} else {
if((state_val_27272 === (4))){
var inst_27259 = (state_27271[(7)]);
var inst_27259__$1 = (state_27271[(2)]);
var state_27271__$1 = (function (){var statearr_27274 = state_27271;
(statearr_27274[(7)] = inst_27259__$1);

return statearr_27274;
})();
if(cljs.core.truth_(inst_27259__$1)){
var statearr_27275_27290 = state_27271__$1;
(statearr_27275_27290[(1)] = (5));

} else {
var statearr_27276_27291 = state_27271__$1;
(statearr_27276_27291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27272 === (5))){
var inst_27259 = (state_27271[(7)]);
var inst_27261 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27259);
var state_27271__$1 = state_27271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27271__$1,(8),inst_27261);
} else {
if((state_val_27272 === (6))){
var state_27271__$1 = state_27271;
var statearr_27277_27292 = state_27271__$1;
(statearr_27277_27292[(2)] = null);

(statearr_27277_27292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27272 === (7))){
var inst_27267 = (state_27271[(2)]);
var state_27271__$1 = state_27271;
var statearr_27278_27293 = state_27271__$1;
(statearr_27278_27293[(2)] = inst_27267);

(statearr_27278_27293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27272 === (8))){
var inst_27263 = (state_27271[(2)]);
var state_27271__$1 = (function (){var statearr_27279 = state_27271;
(statearr_27279[(8)] = inst_27263);

return statearr_27279;
})();
var statearr_27280_27294 = state_27271__$1;
(statearr_27280_27294[(2)] = null);

(statearr_27280_27294[(1)] = (2));


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
});})(c__22348__auto___27288,ch))
;
return ((function (switch__22236__auto__,c__22348__auto___27288,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22237__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22237__auto____0 = (function (){
var statearr_27284 = [null,null,null,null,null,null,null,null,null];
(statearr_27284[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22237__auto__);

(statearr_27284[(1)] = (1));

return statearr_27284;
});
var figwheel$client$heads_up_plugin_$_state_machine__22237__auto____1 = (function (state_27271){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_27271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e27285){if((e27285 instanceof Object)){
var ex__22240__auto__ = e27285;
var statearr_27286_27295 = state_27271;
(statearr_27286_27295[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27296 = state_27271;
state_27271 = G__27296;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22237__auto__ = function(state_27271){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22237__auto____1.call(this,state_27271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22237__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22237__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto___27288,ch))
})();
var state__22350__auto__ = (function (){var statearr_27287 = f__22349__auto__.call(null);
(statearr_27287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto___27288);

return statearr_27287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto___27288,ch))
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
var c__22348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto__){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto__){
return (function (state_27317){
var state_val_27318 = (state_27317[(1)]);
if((state_val_27318 === (1))){
var inst_27312 = cljs.core.async.timeout.call(null,(3000));
var state_27317__$1 = state_27317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27317__$1,(2),inst_27312);
} else {
if((state_val_27318 === (2))){
var inst_27314 = (state_27317[(2)]);
var inst_27315 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27317__$1 = (function (){var statearr_27319 = state_27317;
(statearr_27319[(7)] = inst_27314);

return statearr_27319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27317__$1,inst_27315);
} else {
return null;
}
}
});})(c__22348__auto__))
;
return ((function (switch__22236__auto__,c__22348__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22237__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22237__auto____0 = (function (){
var statearr_27323 = [null,null,null,null,null,null,null,null];
(statearr_27323[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22237__auto__);

(statearr_27323[(1)] = (1));

return statearr_27323;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22237__auto____1 = (function (state_27317){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_27317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e27324){if((e27324 instanceof Object)){
var ex__22240__auto__ = e27324;
var statearr_27325_27327 = state_27317;
(statearr_27325_27327[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27328 = state_27317;
state_27317 = G__27328;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22237__auto__ = function(state_27317){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22237__auto____1.call(this,state_27317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22237__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22237__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto__))
})();
var state__22350__auto__ = (function (){var statearr_27326 = f__22349__auto__.call(null);
(statearr_27326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto__);

return statearr_27326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto__))
);

return c__22348__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27329){
var map__27336 = p__27329;
var map__27336__$1 = ((((!((map__27336 == null)))?((((map__27336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27336):map__27336);
var ed = map__27336__$1;
var formatted_exception = cljs.core.get.call(null,map__27336__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27336__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27336__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27338_27342 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27339_27343 = null;
var count__27340_27344 = (0);
var i__27341_27345 = (0);
while(true){
if((i__27341_27345 < count__27340_27344)){
var msg_27346 = cljs.core._nth.call(null,chunk__27339_27343,i__27341_27345);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27346);

var G__27347 = seq__27338_27342;
var G__27348 = chunk__27339_27343;
var G__27349 = count__27340_27344;
var G__27350 = (i__27341_27345 + (1));
seq__27338_27342 = G__27347;
chunk__27339_27343 = G__27348;
count__27340_27344 = G__27349;
i__27341_27345 = G__27350;
continue;
} else {
var temp__4425__auto___27351 = cljs.core.seq.call(null,seq__27338_27342);
if(temp__4425__auto___27351){
var seq__27338_27352__$1 = temp__4425__auto___27351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27338_27352__$1)){
var c__20458__auto___27353 = cljs.core.chunk_first.call(null,seq__27338_27352__$1);
var G__27354 = cljs.core.chunk_rest.call(null,seq__27338_27352__$1);
var G__27355 = c__20458__auto___27353;
var G__27356 = cljs.core.count.call(null,c__20458__auto___27353);
var G__27357 = (0);
seq__27338_27342 = G__27354;
chunk__27339_27343 = G__27355;
count__27340_27344 = G__27356;
i__27341_27345 = G__27357;
continue;
} else {
var msg_27358 = cljs.core.first.call(null,seq__27338_27352__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27358);

var G__27359 = cljs.core.next.call(null,seq__27338_27352__$1);
var G__27360 = null;
var G__27361 = (0);
var G__27362 = (0);
seq__27338_27342 = G__27359;
chunk__27339_27343 = G__27360;
count__27340_27344 = G__27361;
i__27341_27345 = G__27362;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27363){
var map__27366 = p__27363;
var map__27366__$1 = ((((!((map__27366 == null)))?((((map__27366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27366):map__27366);
var w = map__27366__$1;
var message = cljs.core.get.call(null,map__27366__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__19643__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19643__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19643__auto__;
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
var seq__27374 = cljs.core.seq.call(null,plugins);
var chunk__27375 = null;
var count__27376 = (0);
var i__27377 = (0);
while(true){
if((i__27377 < count__27376)){
var vec__27378 = cljs.core._nth.call(null,chunk__27375,i__27377);
var k = cljs.core.nth.call(null,vec__27378,(0),null);
var plugin = cljs.core.nth.call(null,vec__27378,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27380 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27374,chunk__27375,count__27376,i__27377,pl_27380,vec__27378,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27380.call(null,msg_hist);
});})(seq__27374,chunk__27375,count__27376,i__27377,pl_27380,vec__27378,k,plugin))
);
} else {
}

var G__27381 = seq__27374;
var G__27382 = chunk__27375;
var G__27383 = count__27376;
var G__27384 = (i__27377 + (1));
seq__27374 = G__27381;
chunk__27375 = G__27382;
count__27376 = G__27383;
i__27377 = G__27384;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27374);
if(temp__4425__auto__){
var seq__27374__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27374__$1)){
var c__20458__auto__ = cljs.core.chunk_first.call(null,seq__27374__$1);
var G__27385 = cljs.core.chunk_rest.call(null,seq__27374__$1);
var G__27386 = c__20458__auto__;
var G__27387 = cljs.core.count.call(null,c__20458__auto__);
var G__27388 = (0);
seq__27374 = G__27385;
chunk__27375 = G__27386;
count__27376 = G__27387;
i__27377 = G__27388;
continue;
} else {
var vec__27379 = cljs.core.first.call(null,seq__27374__$1);
var k = cljs.core.nth.call(null,vec__27379,(0),null);
var plugin = cljs.core.nth.call(null,vec__27379,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27389 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27374,chunk__27375,count__27376,i__27377,pl_27389,vec__27379,k,plugin,seq__27374__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27389.call(null,msg_hist);
});})(seq__27374,chunk__27375,count__27376,i__27377,pl_27389,vec__27379,k,plugin,seq__27374__$1,temp__4425__auto__))
);
} else {
}

var G__27390 = cljs.core.next.call(null,seq__27374__$1);
var G__27391 = null;
var G__27392 = (0);
var G__27393 = (0);
seq__27374 = G__27390;
chunk__27375 = G__27391;
count__27376 = G__27392;
i__27377 = G__27393;
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
var args27394 = [];
var len__20713__auto___27397 = arguments.length;
var i__20714__auto___27398 = (0);
while(true){
if((i__20714__auto___27398 < len__20713__auto___27397)){
args27394.push((arguments[i__20714__auto___27398]));

var G__27399 = (i__20714__auto___27398 + (1));
i__20714__auto___27398 = G__27399;
continue;
} else {
}
break;
}

var G__27396 = args27394.length;
switch (G__27396) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27394.length)].join('')));

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
var args__20720__auto__ = [];
var len__20713__auto___27405 = arguments.length;
var i__20714__auto___27406 = (0);
while(true){
if((i__20714__auto___27406 < len__20713__auto___27405)){
args__20720__auto__.push((arguments[i__20714__auto___27406]));

var G__27407 = (i__20714__auto___27406 + (1));
i__20714__auto___27406 = G__27407;
continue;
} else {
}
break;
}

var argseq__20721__auto__ = ((((0) < args__20720__auto__.length))?(new cljs.core.IndexedSeq(args__20720__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20721__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27402){
var map__27403 = p__27402;
var map__27403__$1 = ((((!((map__27403 == null)))?((((map__27403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27403):map__27403);
var opts = map__27403__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27401){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27401));
});

//# sourceMappingURL=client.js.map