(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-012368b6"],{"12db":function(e,t,n){},"26e3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{attrs:{bordered:!1}},[n("a-row",[n("a-col",[n("a-switch",e._b({model:{value:e.pageSwitch,callback:function(t){e.pageSwitch=t},expression:"pageSwitch"}},"a-switch",e.pageSwitchProps,!1))],1),n("a-col",[n("a-table",e._b({staticStyle:{"margin-top":"20px"},on:{change:e.handleTableChange}},"a-table",e.tableProps,!1))],1)],1)],1)},i=[],r=n("a34a"),o=n.n(r);function l(e,t,n,a,i,r,o){try{var l=e[r](o),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(a,i)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var r=e.apply(t,n);function o(e){l(r,a,i,o,c,"next",e)}function c(e){l(r,a,i,o,c,"throw",e)}o(void 0)}))}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={name:"TableTotal",data:function(){return{columns:[{title:"#",width:"180px",align:"center",dataIndex:"rowIndex",customRender:function(e,t,n){return"总计"!==e?parseInt(n)+1:e}},{title:"姓名",dataIndex:"name",width:180},{title:"贡献点",dataIndex:"point",width:180},{title:"等级",dataIndex:"level",width:180},{title:"更新时间",dataIndex:"updateTime",width:180}],ipagination:{current:1,pageSize:10},dataSource:[{id:"1",name:"张三",point:23,level:3,updateTime:"2019-8-14"},{name:"小王",point:6,level:1,updateTime:"2019-8-13"},{name:"李四",point:53,level:8,updateTime:"2019-8-12"},{name:"小红",point:44,level:5,updateTime:"2019-8-11"},{name:"王五",point:97,level:10,updateTime:"2019-8-10"},{name:"小明",point:33,level:2,updateTime:"2019-8-10"},{name:"小张",point:33,level:2,updateTime:"2019-8-10"},{name:"小六",point:33,level:2,updateTime:"2019-8-10"},{name:"小五",point:33,level:2,updateTime:"2019-8-10"},{name:"小赵",point:33,level:2,updateTime:"2019-8-10"},{name:"李华",point:33,level:2,updateTime:"2019-8-10"},{name:"小康",point:33,level:2,updateTime:"2019-8-10"},{name:"小鹿",point:33,level:2,updateTime:"2019-8-10"}],newArr:[],newDataSource:[],footerDataSource:[],pageSwitch:!0}},computed:{tableProps:function(){var e=this,t={size:"middle",rowKey:"rowIndex",columns:this.columns,scroll:{x:!0}},n=0===this.footerDataSource.length?null:function(){return e.renderTableFooter(t)};return p(p({},t),{},{ref:"table",class:"chart-data-list",pagination:!!this.pageSwitch&&this.ipagination,columns:this.columns,dataSource:this.dataSource,footer:n})},pageSwitchProps:function(){return{checkedChildren:"分页",unCheckedChildren:"分页",style:{position:"absolute",right:"0px",top:"-10px"}}}},mounted:function(){this.newDataSource=this.dataSource,this.dataHandling(1,this.ipagination.pageSize)},watch:{pageSwitch:function(e){e?this.dataHandling(1,this.ipagination.pageSize):this.dataHandling("-1",0)},"ipagination.current":function(e){this.dataHandling(e,this.ipagination.pageSize)},footerDataSource:{handler:function(){var e=c(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t&&t.length>0)){e.next=6;break}return e.next=3,this.$nextTick();case 3:n=this.$refs.table.$el.querySelectorAll(".ant-table-body")[0],a=this.$refs.footerTable.$el.querySelectorAll(".ant-table-body")[0],n.addEventListener("scroll",(function(){a.scrollLeft=n.scrollLeft}),!0);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},methods:{tableAddTotalRow:function(e,t){var n="rowIndex",a=s({},n,"合计");e.forEach((function(e){var i=e.key,r=e.dataIndex;if(![i,r].includes(n)){var o=0;t.forEach((function(e){o+=/^\d+\.?\d?$/.test(e[r])?Number.parseInt(e[r]):Number.NaN})),Number.isNaN(o)&&(o="-"),a[r]=o}})),t.push(a)},handleTableChange:function(e,t,n){this.ipagination=e},dataHandling:function(e,t){var n=[];n=-1!=e?this.newDataSource.slice((e-1)*t,e*t):this.newDataSource;for(var a=[],i={rowIndex:"总计"},r=0,o=0,l=0;l<n.length;l++)r+=n[l].level,o+=n[l].point;i.level=r,i.point=o,a.push(i),this.footerDataSource=a},renderTableFooter:function(e){var t=this.$createElement;return t("a-table",{ref:"footerTable",props:p(p({},e),{},{pagination:!1,dataSource:this.footerDataSource,showHeader:!1})})}}},h=d,f=(n("da47"),n("2877")),b=Object(f["a"])(h,a,i,!1,null,"191e8bde",null);t["default"]=b.exports},da47:function(e,t,n){"use strict";var a=n("12db"),i=n.n(a);i.a}}]);