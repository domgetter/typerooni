// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__20720__auto__ = [];
var len__20713__auto___26451 = arguments.length;
var i__20714__auto___26452 = (0);
while(true){
if((i__20714__auto___26452 < len__20713__auto___26451)){
args__20720__auto__.push((arguments[i__20714__auto___26452]));

var G__26453 = (i__20714__auto___26452 + (1));
i__20714__auto___26452 = G__26453;
continue;
} else {
}
break;
}

var argseq__20721__auto__ = ((((2) < args__20720__auto__.length))?(new cljs.core.IndexedSeq(args__20720__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20721__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26443_26454 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26444_26455 = null;
var count__26445_26456 = (0);
var i__26446_26457 = (0);
while(true){
if((i__26446_26457 < count__26445_26456)){
var k_26458 = cljs.core._nth.call(null,chunk__26444_26455,i__26446_26457);
e.setAttribute(cljs.core.name.call(null,k_26458),cljs.core.get.call(null,attrs,k_26458));

var G__26459 = seq__26443_26454;
var G__26460 = chunk__26444_26455;
var G__26461 = count__26445_26456;
var G__26462 = (i__26446_26457 + (1));
seq__26443_26454 = G__26459;
chunk__26444_26455 = G__26460;
count__26445_26456 = G__26461;
i__26446_26457 = G__26462;
continue;
} else {
var temp__4425__auto___26463 = cljs.core.seq.call(null,seq__26443_26454);
if(temp__4425__auto___26463){
var seq__26443_26464__$1 = temp__4425__auto___26463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26443_26464__$1)){
var c__20458__auto___26465 = cljs.core.chunk_first.call(null,seq__26443_26464__$1);
var G__26466 = cljs.core.chunk_rest.call(null,seq__26443_26464__$1);
var G__26467 = c__20458__auto___26465;
var G__26468 = cljs.core.count.call(null,c__20458__auto___26465);
var G__26469 = (0);
seq__26443_26454 = G__26466;
chunk__26444_26455 = G__26467;
count__26445_26456 = G__26468;
i__26446_26457 = G__26469;
continue;
} else {
var k_26470 = cljs.core.first.call(null,seq__26443_26464__$1);
e.setAttribute(cljs.core.name.call(null,k_26470),cljs.core.get.call(null,attrs,k_26470));

var G__26471 = cljs.core.next.call(null,seq__26443_26464__$1);
var G__26472 = null;
var G__26473 = (0);
var G__26474 = (0);
seq__26443_26454 = G__26471;
chunk__26444_26455 = G__26472;
count__26445_26456 = G__26473;
i__26446_26457 = G__26474;
continue;
}
} else {
}
}
break;
}

var seq__26447_26475 = cljs.core.seq.call(null,children);
var chunk__26448_26476 = null;
var count__26449_26477 = (0);
var i__26450_26478 = (0);
while(true){
if((i__26450_26478 < count__26449_26477)){
var ch_26479 = cljs.core._nth.call(null,chunk__26448_26476,i__26450_26478);
e.appendChild(ch_26479);

var G__26480 = seq__26447_26475;
var G__26481 = chunk__26448_26476;
var G__26482 = count__26449_26477;
var G__26483 = (i__26450_26478 + (1));
seq__26447_26475 = G__26480;
chunk__26448_26476 = G__26481;
count__26449_26477 = G__26482;
i__26450_26478 = G__26483;
continue;
} else {
var temp__4425__auto___26484 = cljs.core.seq.call(null,seq__26447_26475);
if(temp__4425__auto___26484){
var seq__26447_26485__$1 = temp__4425__auto___26484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26447_26485__$1)){
var c__20458__auto___26486 = cljs.core.chunk_first.call(null,seq__26447_26485__$1);
var G__26487 = cljs.core.chunk_rest.call(null,seq__26447_26485__$1);
var G__26488 = c__20458__auto___26486;
var G__26489 = cljs.core.count.call(null,c__20458__auto___26486);
var G__26490 = (0);
seq__26447_26475 = G__26487;
chunk__26448_26476 = G__26488;
count__26449_26477 = G__26489;
i__26450_26478 = G__26490;
continue;
} else {
var ch_26491 = cljs.core.first.call(null,seq__26447_26485__$1);
e.appendChild(ch_26491);

var G__26492 = cljs.core.next.call(null,seq__26447_26485__$1);
var G__26493 = null;
var G__26494 = (0);
var G__26495 = (0);
seq__26447_26475 = G__26492;
chunk__26448_26476 = G__26493;
count__26449_26477 = G__26494;
i__26450_26478 = G__26495;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26440){
var G__26441 = cljs.core.first.call(null,seq26440);
var seq26440__$1 = cljs.core.next.call(null,seq26440);
var G__26442 = cljs.core.first.call(null,seq26440__$1);
var seq26440__$2 = cljs.core.next.call(null,seq26440__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26441,G__26442,seq26440__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__20568__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20569__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20570__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20571__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20572__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__20568__auto__,prefer_table__20569__auto__,method_cache__20570__auto__,cached_hierarchy__20571__auto__,hierarchy__20572__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__20568__auto__,prefer_table__20569__auto__,method_cache__20570__auto__,cached_hierarchy__20571__auto__,hierarchy__20572__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20572__auto__,method_table__20568__auto__,prefer_table__20569__auto__,method_cache__20570__auto__,cached_hierarchy__20571__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_26496 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26496.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26496.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_26496.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26496);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26497,st_map){
var map__26502 = p__26497;
var map__26502__$1 = ((((!((map__26502 == null)))?((((map__26502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26502):map__26502);
var container_el = cljs.core.get.call(null,map__26502__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26502,map__26502__$1,container_el){
return (function (p__26504){
var vec__26505 = p__26504;
var k = cljs.core.nth.call(null,vec__26505,(0),null);
var v = cljs.core.nth.call(null,vec__26505,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26502,map__26502__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26506,dom_str){
var map__26509 = p__26506;
var map__26509__$1 = ((((!((map__26509 == null)))?((((map__26509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26509):map__26509);
var c = map__26509__$1;
var content_area_el = cljs.core.get.call(null,map__26509__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26511){
var map__26514 = p__26511;
var map__26514__$1 = ((((!((map__26514 == null)))?((((map__26514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26514):map__26514);
var content_area_el = cljs.core.get.call(null,map__26514__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto__){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto__){
return (function (state_26557){
var state_val_26558 = (state_26557[(1)]);
if((state_val_26558 === (1))){
var inst_26542 = (state_26557[(7)]);
var inst_26542__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26543 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26544 = ["10px","10px","100%","68px","1.0"];
var inst_26545 = cljs.core.PersistentHashMap.fromArrays(inst_26543,inst_26544);
var inst_26546 = cljs.core.merge.call(null,inst_26545,style);
var inst_26547 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26542__$1,inst_26546);
var inst_26548 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26542__$1,msg);
var inst_26549 = cljs.core.async.timeout.call(null,(300));
var state_26557__$1 = (function (){var statearr_26559 = state_26557;
(statearr_26559[(7)] = inst_26542__$1);

(statearr_26559[(8)] = inst_26547);

(statearr_26559[(9)] = inst_26548);

return statearr_26559;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26557__$1,(2),inst_26549);
} else {
if((state_val_26558 === (2))){
var inst_26542 = (state_26557[(7)]);
var inst_26551 = (state_26557[(2)]);
var inst_26552 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26553 = ["auto"];
var inst_26554 = cljs.core.PersistentHashMap.fromArrays(inst_26552,inst_26553);
var inst_26555 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26542,inst_26554);
var state_26557__$1 = (function (){var statearr_26560 = state_26557;
(statearr_26560[(10)] = inst_26551);

return statearr_26560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26557__$1,inst_26555);
} else {
return null;
}
}
});})(c__22348__auto__))
;
return ((function (switch__22236__auto__,c__22348__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22237__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22237__auto____0 = (function (){
var statearr_26564 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26564[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22237__auto__);

(statearr_26564[(1)] = (1));

return statearr_26564;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22237__auto____1 = (function (state_26557){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_26557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e26565){if((e26565 instanceof Object)){
var ex__22240__auto__ = e26565;
var statearr_26566_26568 = state_26557;
(statearr_26566_26568[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26569 = state_26557;
state_26557 = G__26569;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22237__auto__ = function(state_26557){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22237__auto____1.call(this,state_26557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22237__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22237__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto__))
})();
var state__22350__auto__ = (function (){var statearr_26567 = f__22349__auto__.call(null);
(statearr_26567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto__);

return statearr_26567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto__))
);

return c__22348__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__26571 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__26571,(0),null);
var ln = cljs.core.nth.call(null,vec__26571,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26574 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26574,(0),null);
var file_line = cljs.core.nth.call(null,vec__26574,(1),null);
var file_column = cljs.core.nth.call(null,vec__26574,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26574,file_name,file_line,file_column){
return (function (p1__26572_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__26572_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__26574,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__19655__auto__ = file_line;
if(cljs.core.truth_(or__19655__auto__)){
return or__19655__auto__;
} else {
var and__19643__auto__ = cause;
if(cljs.core.truth_(and__19643__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__19643__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__26577 = figwheel.client.heads_up.ensure_container.call(null);
var map__26577__$1 = ((((!((map__26577 == null)))?((((map__26577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26577):map__26577);
var content_area_el = cljs.core.get.call(null,map__26577__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto__){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto__){
return (function (state_26625){
var state_val_26626 = (state_26625[(1)]);
if((state_val_26626 === (1))){
var inst_26608 = (state_26625[(7)]);
var inst_26608__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26609 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26610 = ["0.0"];
var inst_26611 = cljs.core.PersistentHashMap.fromArrays(inst_26609,inst_26610);
var inst_26612 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26608__$1,inst_26611);
var inst_26613 = cljs.core.async.timeout.call(null,(300));
var state_26625__$1 = (function (){var statearr_26627 = state_26625;
(statearr_26627[(7)] = inst_26608__$1);

(statearr_26627[(8)] = inst_26612);

return statearr_26627;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26625__$1,(2),inst_26613);
} else {
if((state_val_26626 === (2))){
var inst_26608 = (state_26625[(7)]);
var inst_26615 = (state_26625[(2)]);
var inst_26616 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26617 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26618 = cljs.core.PersistentHashMap.fromArrays(inst_26616,inst_26617);
var inst_26619 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26608,inst_26618);
var inst_26620 = cljs.core.async.timeout.call(null,(200));
var state_26625__$1 = (function (){var statearr_26628 = state_26625;
(statearr_26628[(9)] = inst_26619);

(statearr_26628[(10)] = inst_26615);

return statearr_26628;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26625__$1,(3),inst_26620);
} else {
if((state_val_26626 === (3))){
var inst_26608 = (state_26625[(7)]);
var inst_26622 = (state_26625[(2)]);
var inst_26623 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26608,"");
var state_26625__$1 = (function (){var statearr_26629 = state_26625;
(statearr_26629[(11)] = inst_26622);

return statearr_26629;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26625__$1,inst_26623);
} else {
return null;
}
}
}
});})(c__22348__auto__))
;
return ((function (switch__22236__auto__,c__22348__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22237__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22237__auto____0 = (function (){
var statearr_26633 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26633[(0)] = figwheel$client$heads_up$clear_$_state_machine__22237__auto__);

(statearr_26633[(1)] = (1));

return statearr_26633;
});
var figwheel$client$heads_up$clear_$_state_machine__22237__auto____1 = (function (state_26625){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_26625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e26634){if((e26634 instanceof Object)){
var ex__22240__auto__ = e26634;
var statearr_26635_26637 = state_26625;
(statearr_26635_26637[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26638 = state_26625;
state_26625 = G__26638;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22237__auto__ = function(state_26625){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22237__auto____1.call(this,state_26625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22237__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22237__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto__))
})();
var state__22350__auto__ = (function (){var statearr_26636 = f__22349__auto__.call(null);
(statearr_26636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto__);

return statearr_26636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto__))
);

return c__22348__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22348__auto__){
return (function (){
var f__22349__auto__ = (function (){var switch__22236__auto__ = ((function (c__22348__auto__){
return (function (state_26670){
var state_val_26671 = (state_26670[(1)]);
if((state_val_26671 === (1))){
var inst_26660 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26670__$1 = state_26670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26670__$1,(2),inst_26660);
} else {
if((state_val_26671 === (2))){
var inst_26662 = (state_26670[(2)]);
var inst_26663 = cljs.core.async.timeout.call(null,(400));
var state_26670__$1 = (function (){var statearr_26672 = state_26670;
(statearr_26672[(7)] = inst_26662);

return statearr_26672;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26670__$1,(3),inst_26663);
} else {
if((state_val_26671 === (3))){
var inst_26665 = (state_26670[(2)]);
var inst_26666 = figwheel.client.heads_up.clear.call(null);
var state_26670__$1 = (function (){var statearr_26673 = state_26670;
(statearr_26673[(8)] = inst_26665);

return statearr_26673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26670__$1,(4),inst_26666);
} else {
if((state_val_26671 === (4))){
var inst_26668 = (state_26670[(2)]);
var state_26670__$1 = state_26670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26670__$1,inst_26668);
} else {
return null;
}
}
}
}
});})(c__22348__auto__))
;
return ((function (switch__22236__auto__,c__22348__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22237__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22237__auto____0 = (function (){
var statearr_26677 = [null,null,null,null,null,null,null,null,null];
(statearr_26677[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22237__auto__);

(statearr_26677[(1)] = (1));

return statearr_26677;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22237__auto____1 = (function (state_26670){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_26670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e26678){if((e26678 instanceof Object)){
var ex__22240__auto__ = e26678;
var statearr_26679_26681 = state_26670;
(statearr_26679_26681[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26682 = state_26670;
state_26670 = G__26682;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22237__auto__ = function(state_26670){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22237__auto____1.call(this,state_26670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22237__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22237__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22348__auto__))
})();
var state__22350__auto__ = (function (){var statearr_26680 = f__22349__auto__.call(null);
(statearr_26680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22348__auto__);

return statearr_26680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22350__auto__);
});})(c__22348__auto__))
);

return c__22348__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map