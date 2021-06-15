function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,o){for(var t=0;t<o.length;t++){var i=o[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,o,t){return o&&_defineProperties(e.prototype,o),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{K7bo:function(e,o,t){"use strict";t.r(o),t.d(o,"ShowLastPedidoModule",(function(){return g}));var i,a,r,n,s=t("ofXK"),d=t("tyNb"),l=t("fXoL"),c=((i=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=l.Gb({type:i,selectors:[["app-main"]],decls:1,vars:0,template:function(e,o){1&e&&l.Nb(0,"router-outlet")},directives:[d.e],styles:[""]}),i),p=t("0IaG"),u=t("pjhI"),b=t("+lji"),f=t("e5F3"),v=t("wne+"),h=function(e,o){return{"bg-danger":e,"text-white":o}},m=[{path:"",component:c,data:{titulo:"Pedido"},children:[{path:"",component:(a=function(){function e(o,t,i,a,r,n){_classCallCheck(this,e),this.router=o,this.activatedRoute=t,this.dialog=i,this.crudService=a,this.pedidoComercioService=r,this.utilService=n,this.timepoMax=10,this.timepoMedio=this.timepoMax/2,this.labelMsj="Cargando Datos...",this.isPedidoExpirado=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.activatedRoute.queryParams.subscribe((function(o){var t=JSON.parse(atob(o.p.toString()));t.s=t.s.split(".")[1];var i=e.utilService.xTiempoTranscurrido_min(t.h);if(console.log("\xbf_hExpira",i),i>60)return e.isPedidoExpirado=!0,e.labelMsj="El tiempo para ver el pedido expir\xf3.",void setTimeout((function(){e.router.navigate(["/"])}),4e3);e.loadOrden(t)}))}},{key:"loadOrden",value:function(e){var o=this;this.crudService.postFree(e,"comercio","get-last-pedido-url",!1).subscribe((function(e){console.log("pedido",e),(null==e?void 0:e.data.length)>0&&o.darFormatoOrden(e.data)}))}},{key:"darFormatoOrden",value:function(e){var o=this;e.filter((function(e){return!e.con_formato})).map((function(e){e.json_datos_delivery="object"==typeof e.json_datos_delivery?e.json_datos_delivery:JSON.parse(e.json_datos_delivery),e.estadoTitle=o.pedidoComercioService.getEstadoPedido(e.pwa_estado).estadoTitle,e.json_datos_delivery.p_subtotales=o.pedidoComercioService.darFormatoSubTotales(e.json_datos_delivery.p_subtotales,e.json_datos_delivery.p_header.arrDatosDelivery.costoTotalDelivery),e.visible=!0,e.isTieneRepartidor=!!e.idrepartidor,e.isClientePasaRecoger=e.json_datos_delivery.p_header.arrDatosDelivery.pasoRecoger,e.nom_repartidor=e.isClientePasaRecoger?"Cliente Recoge":e.nom_repartidor,e.con_formato=!0,e.flag_pedido_programado=e.flag_pedido_programado?e.flag_pedido_programado:0;var t=e.tiempo?e.tiempo:0;return e.color=t>=o.timepoMax?"r":t>=o.timepoMedio?"a":"v",e.color=1===e.flag_pedido_programado?"p":e.color,e})),this.openDialogOrden(e[0])}},{key:"openDialogOrden",value:function(e){var o=new p.e;o.disableClose=!0,o.hasBackdrop=!0,o.width="700px",o.panelClass=["my-dialog-orden-detalle","my-dialog-scrool"],o.data={laOrden:e,isViewOnlyPedidoUrl:!0},this.dialog.open(u.a,o)}}]),e}(),a.\u0275fac=function(e){return new(e||a)(l.Mb(d.b),l.Mb(d.a),l.Mb(p.b),l.Mb(b.a),l.Mb(f.a),l.Mb(v.a))},a.\u0275cmp=l.Gb({type:a,selectors:[["app-show-pedido"]],decls:4,vars:5,consts:[[1,"p-5"],[1,"div-center-msj"],[1,"div-label-msj","text-center",3,"ngClass"]],template:function(e,o){1&e&&(l.Sb(0,"div",0),l.Sb(1,"div",1),l.Sb(2,"p",2),l.Dc(3),l.Rb(),l.Rb(),l.Rb()),2&e&&(l.Ab(2),l.jc("ngClass",l.pc(2,h,o.isPedidoExpirado,o.isPedidoExpirado)),l.Ab(1),l.Ec(o.labelMsj))},directives:[s.k],styles:[".div-center-msj[_ngcontent-%COMP%]{height:90vh;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:center;align-content:center;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly}.div-label-msj[_ngcontent-%COMP%]{background:#d3d3d3;padding:20px;border-radius:5px}"]}),a),data:{titulo:"Pedido"}}]}],_=((n=function e(){_classCallCheck(this,e)}).\u0275mod=l.Kb({type:n}),n.\u0275inj=l.Jb({factory:function(e){return new(e||n)},imports:[[d.d.forChild(m)],d.d]}),n),g=((r=function e(){_classCallCheck(this,e)}).\u0275mod=l.Kb({type:r}),r.\u0275inj=l.Jb({factory:function(e){return new(e||r)},imports:[[s.c,_]]}),r)}}]);