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
var args__20800__auto__ = [];
var len__20793__auto___26521 = arguments.length;
var i__20794__auto___26522 = (0);
while(true){
if((i__20794__auto___26522 < len__20793__auto___26521)){
args__20800__auto__.push((arguments[i__20794__auto___26522]));

var G__26523 = (i__20794__auto___26522 + (1));
i__20794__auto___26522 = G__26523;
continue;
} else {
}
break;
}

var argseq__20801__auto__ = ((((2) < args__20800__auto__.length))?(new cljs.core.IndexedSeq(args__20800__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20801__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26513_26524 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26514_26525 = null;
var count__26515_26526 = (0);
var i__26516_26527 = (0);
while(true){
if((i__26516_26527 < count__26515_26526)){
var k_26528 = cljs.core._nth.call(null,chunk__26514_26525,i__26516_26527);
e.setAttribute(cljs.core.name.call(null,k_26528),cljs.core.get.call(null,attrs,k_26528));

var G__26529 = seq__26513_26524;
var G__26530 = chunk__26514_26525;
var G__26531 = count__26515_26526;
var G__26532 = (i__26516_26527 + (1));
seq__26513_26524 = G__26529;
chunk__26514_26525 = G__26530;
count__26515_26526 = G__26531;
i__26516_26527 = G__26532;
continue;
} else {
var temp__4425__auto___26533 = cljs.core.seq.call(null,seq__26513_26524);
if(temp__4425__auto___26533){
var seq__26513_26534__$1 = temp__4425__auto___26533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26513_26534__$1)){
var c__20538__auto___26535 = cljs.core.chunk_first.call(null,seq__26513_26534__$1);
var G__26536 = cljs.core.chunk_rest.call(null,seq__26513_26534__$1);
var G__26537 = c__20538__auto___26535;
var G__26538 = cljs.core.count.call(null,c__20538__auto___26535);
var G__26539 = (0);
seq__26513_26524 = G__26536;
chunk__26514_26525 = G__26537;
count__26515_26526 = G__26538;
i__26516_26527 = G__26539;
continue;
} else {
var k_26540 = cljs.core.first.call(null,seq__26513_26534__$1);
e.setAttribute(cljs.core.name.call(null,k_26540),cljs.core.get.call(null,attrs,k_26540));

var G__26541 = cljs.core.next.call(null,seq__26513_26534__$1);
var G__26542 = null;
var G__26543 = (0);
var G__26544 = (0);
seq__26513_26524 = G__26541;
chunk__26514_26525 = G__26542;
count__26515_26526 = G__26543;
i__26516_26527 = G__26544;
continue;
}
} else {
}
}
break;
}

var seq__26517_26545 = cljs.core.seq.call(null,children);
var chunk__26518_26546 = null;
var count__26519_26547 = (0);
var i__26520_26548 = (0);
while(true){
if((i__26520_26548 < count__26519_26547)){
var ch_26549 = cljs.core._nth.call(null,chunk__26518_26546,i__26520_26548);
e.appendChild(ch_26549);

var G__26550 = seq__26517_26545;
var G__26551 = chunk__26518_26546;
var G__26552 = count__26519_26547;
var G__26553 = (i__26520_26548 + (1));
seq__26517_26545 = G__26550;
chunk__26518_26546 = G__26551;
count__26519_26547 = G__26552;
i__26520_26548 = G__26553;
continue;
} else {
var temp__4425__auto___26554 = cljs.core.seq.call(null,seq__26517_26545);
if(temp__4425__auto___26554){
var seq__26517_26555__$1 = temp__4425__auto___26554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26517_26555__$1)){
var c__20538__auto___26556 = cljs.core.chunk_first.call(null,seq__26517_26555__$1);
var G__26557 = cljs.core.chunk_rest.call(null,seq__26517_26555__$1);
var G__26558 = c__20538__auto___26556;
var G__26559 = cljs.core.count.call(null,c__20538__auto___26556);
var G__26560 = (0);
seq__26517_26545 = G__26557;
chunk__26518_26546 = G__26558;
count__26519_26547 = G__26559;
i__26520_26548 = G__26560;
continue;
} else {
var ch_26561 = cljs.core.first.call(null,seq__26517_26555__$1);
e.appendChild(ch_26561);

var G__26562 = cljs.core.next.call(null,seq__26517_26555__$1);
var G__26563 = null;
var G__26564 = (0);
var G__26565 = (0);
seq__26517_26545 = G__26562;
chunk__26518_26546 = G__26563;
count__26519_26547 = G__26564;
i__26520_26548 = G__26565;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26510){
var G__26511 = cljs.core.first.call(null,seq26510);
var seq26510__$1 = cljs.core.next.call(null,seq26510);
var G__26512 = cljs.core.first.call(null,seq26510__$1);
var seq26510__$2 = cljs.core.next.call(null,seq26510__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26511,G__26512,seq26510__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__20648__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20649__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20650__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20651__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20652__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__20648__auto__,prefer_table__20649__auto__,method_cache__20650__auto__,cached_hierarchy__20651__auto__,hierarchy__20652__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__20648__auto__,prefer_table__20649__auto__,method_cache__20650__auto__,cached_hierarchy__20651__auto__,hierarchy__20652__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20652__auto__,method_table__20648__auto__,prefer_table__20649__auto__,method_cache__20650__auto__,cached_hierarchy__20651__auto__));
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
var el_26566 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26566.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26566.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_26566.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26566);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26567,st_map){
var map__26572 = p__26567;
var map__26572__$1 = ((((!((map__26572 == null)))?((((map__26572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26572):map__26572);
var container_el = cljs.core.get.call(null,map__26572__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26572,map__26572__$1,container_el){
return (function (p__26574){
var vec__26575 = p__26574;
var k = cljs.core.nth.call(null,vec__26575,(0),null);
var v = cljs.core.nth.call(null,vec__26575,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26572,map__26572__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26576,dom_str){
var map__26579 = p__26576;
var map__26579__$1 = ((((!((map__26579 == null)))?((((map__26579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26579):map__26579);
var c = map__26579__$1;
var content_area_el = cljs.core.get.call(null,map__26579__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26581){
var map__26584 = p__26581;
var map__26584__$1 = ((((!((map__26584 == null)))?((((map__26584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26584):map__26584);
var content_area_el = cljs.core.get.call(null,map__26584__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto__){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto__){
return (function (state_26627){
var state_val_26628 = (state_26627[(1)]);
if((state_val_26628 === (1))){
var inst_26612 = (state_26627[(7)]);
var inst_26612__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26613 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26614 = ["10px","10px","100%","68px","1.0"];
var inst_26615 = cljs.core.PersistentHashMap.fromArrays(inst_26613,inst_26614);
var inst_26616 = cljs.core.merge.call(null,inst_26615,style);
var inst_26617 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26612__$1,inst_26616);
var inst_26618 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26612__$1,msg);
var inst_26619 = cljs.core.async.timeout.call(null,(300));
var state_26627__$1 = (function (){var statearr_26629 = state_26627;
(statearr_26629[(8)] = inst_26618);

(statearr_26629[(9)] = inst_26617);

(statearr_26629[(7)] = inst_26612__$1);

return statearr_26629;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26627__$1,(2),inst_26619);
} else {
if((state_val_26628 === (2))){
var inst_26612 = (state_26627[(7)]);
var inst_26621 = (state_26627[(2)]);
var inst_26622 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26623 = ["auto"];
var inst_26624 = cljs.core.PersistentHashMap.fromArrays(inst_26622,inst_26623);
var inst_26625 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26612,inst_26624);
var state_26627__$1 = (function (){var statearr_26630 = state_26627;
(statearr_26630[(10)] = inst_26621);

return statearr_26630;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26627__$1,inst_26625);
} else {
return null;
}
}
});})(c__22418__auto__))
;
return ((function (switch__22306__auto__,c__22418__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22307__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22307__auto____0 = (function (){
var statearr_26634 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26634[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22307__auto__);

(statearr_26634[(1)] = (1));

return statearr_26634;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22307__auto____1 = (function (state_26627){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_26627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e26635){if((e26635 instanceof Object)){
var ex__22310__auto__ = e26635;
var statearr_26636_26638 = state_26627;
(statearr_26636_26638[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26639 = state_26627;
state_26627 = G__26639;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22307__auto__ = function(state_26627){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22307__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22307__auto____1.call(this,state_26627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22307__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22307__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto__))
})();
var state__22420__auto__ = (function (){var statearr_26637 = f__22419__auto__.call(null);
(statearr_26637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto__);

return statearr_26637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto__))
);

return c__22418__auto__;
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
var vec__26641 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__26641,(0),null);
var ln = cljs.core.nth.call(null,vec__26641,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26644 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26644,(0),null);
var file_line = cljs.core.nth.call(null,vec__26644,(1),null);
var file_column = cljs.core.nth.call(null,vec__26644,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26644,file_name,file_line,file_column){
return (function (p1__26642_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__26642_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__26644,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__19735__auto__ = file_line;
if(cljs.core.truth_(or__19735__auto__)){
return or__19735__auto__;
} else {
var and__19723__auto__ = cause;
if(cljs.core.truth_(and__19723__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__19723__auto__;
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
var map__26647 = figwheel.client.heads_up.ensure_container.call(null);
var map__26647__$1 = ((((!((map__26647 == null)))?((((map__26647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26647):map__26647);
var content_area_el = cljs.core.get.call(null,map__26647__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto__){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto__){
return (function (state_26695){
var state_val_26696 = (state_26695[(1)]);
if((state_val_26696 === (1))){
var inst_26678 = (state_26695[(7)]);
var inst_26678__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26679 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26680 = ["0.0"];
var inst_26681 = cljs.core.PersistentHashMap.fromArrays(inst_26679,inst_26680);
var inst_26682 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26678__$1,inst_26681);
var inst_26683 = cljs.core.async.timeout.call(null,(300));
var state_26695__$1 = (function (){var statearr_26697 = state_26695;
(statearr_26697[(8)] = inst_26682);

(statearr_26697[(7)] = inst_26678__$1);

return statearr_26697;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26695__$1,(2),inst_26683);
} else {
if((state_val_26696 === (2))){
var inst_26678 = (state_26695[(7)]);
var inst_26685 = (state_26695[(2)]);
var inst_26686 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26687 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26688 = cljs.core.PersistentHashMap.fromArrays(inst_26686,inst_26687);
var inst_26689 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26678,inst_26688);
var inst_26690 = cljs.core.async.timeout.call(null,(200));
var state_26695__$1 = (function (){var statearr_26698 = state_26695;
(statearr_26698[(9)] = inst_26685);

(statearr_26698[(10)] = inst_26689);

return statearr_26698;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26695__$1,(3),inst_26690);
} else {
if((state_val_26696 === (3))){
var inst_26678 = (state_26695[(7)]);
var inst_26692 = (state_26695[(2)]);
var inst_26693 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26678,"");
var state_26695__$1 = (function (){var statearr_26699 = state_26695;
(statearr_26699[(11)] = inst_26692);

return statearr_26699;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26695__$1,inst_26693);
} else {
return null;
}
}
}
});})(c__22418__auto__))
;
return ((function (switch__22306__auto__,c__22418__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22307__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22307__auto____0 = (function (){
var statearr_26703 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26703[(0)] = figwheel$client$heads_up$clear_$_state_machine__22307__auto__);

(statearr_26703[(1)] = (1));

return statearr_26703;
});
var figwheel$client$heads_up$clear_$_state_machine__22307__auto____1 = (function (state_26695){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_26695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e26704){if((e26704 instanceof Object)){
var ex__22310__auto__ = e26704;
var statearr_26705_26707 = state_26695;
(statearr_26705_26707[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26708 = state_26695;
state_26695 = G__26708;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22307__auto__ = function(state_26695){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22307__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22307__auto____1.call(this,state_26695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22307__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22307__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto__))
})();
var state__22420__auto__ = (function (){var statearr_26706 = f__22419__auto__.call(null);
(statearr_26706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto__);

return statearr_26706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto__))
);

return c__22418__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22418__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22418__auto__){
return (function (){
var f__22419__auto__ = (function (){var switch__22306__auto__ = ((function (c__22418__auto__){
return (function (state_26740){
var state_val_26741 = (state_26740[(1)]);
if((state_val_26741 === (1))){
var inst_26730 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26740__$1 = state_26740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26740__$1,(2),inst_26730);
} else {
if((state_val_26741 === (2))){
var inst_26732 = (state_26740[(2)]);
var inst_26733 = cljs.core.async.timeout.call(null,(400));
var state_26740__$1 = (function (){var statearr_26742 = state_26740;
(statearr_26742[(7)] = inst_26732);

return statearr_26742;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26740__$1,(3),inst_26733);
} else {
if((state_val_26741 === (3))){
var inst_26735 = (state_26740[(2)]);
var inst_26736 = figwheel.client.heads_up.clear.call(null);
var state_26740__$1 = (function (){var statearr_26743 = state_26740;
(statearr_26743[(8)] = inst_26735);

return statearr_26743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26740__$1,(4),inst_26736);
} else {
if((state_val_26741 === (4))){
var inst_26738 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26740__$1,inst_26738);
} else {
return null;
}
}
}
}
});})(c__22418__auto__))
;
return ((function (switch__22306__auto__,c__22418__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22307__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22307__auto____0 = (function (){
var statearr_26747 = [null,null,null,null,null,null,null,null,null];
(statearr_26747[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22307__auto__);

(statearr_26747[(1)] = (1));

return statearr_26747;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22307__auto____1 = (function (state_26740){
while(true){
var ret_value__22308__auto__ = (function (){try{while(true){
var result__22309__auto__ = switch__22306__auto__.call(null,state_26740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22309__auto__;
}
break;
}
}catch (e26748){if((e26748 instanceof Object)){
var ex__22310__auto__ = e26748;
var statearr_26749_26751 = state_26740;
(statearr_26749_26751[(5)] = ex__22310__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26752 = state_26740;
state_26740 = G__26752;
continue;
} else {
return ret_value__22308__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22307__auto__ = function(state_26740){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22307__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22307__auto____1.call(this,state_26740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22307__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22307__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22307__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22307__auto__;
})()
;})(switch__22306__auto__,c__22418__auto__))
})();
var state__22420__auto__ = (function (){var statearr_26750 = f__22419__auto__.call(null);
(statearr_26750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22418__auto__);

return statearr_26750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22420__auto__);
});})(c__22418__auto__))
);

return c__22418__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map