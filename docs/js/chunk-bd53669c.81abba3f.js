(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd53669c","chunk-2d0e97ef"],{"1d8c":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"职务编码"}},[a("a-input",{attrs:{placeholder:"请输入职务编码"},model:{value:e.queryParam.code,callback:function(t){e.$set(e.queryParam,"code",t)},expression:"queryParam.code"}})],1)],1),a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"职务名称"}},[a("a-input",{attrs:{placeholder:"请输入职务名称"},model:{value:e.queryParam.name,callback:function(t){e.$set(e.queryParam,"name",t)},expression:"queryParam.name"}})],1)],1),e.toggleSearchStatus?[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"职级"}},[a("j-dict-select-tag",{attrs:{placeholder:"请选择职级",dictCode:"position_rank"},model:{value:e.queryParam.postRank,callback:function(t){e.$set(e.queryParam,"postRank",t)},expression:"queryParam.postRank"}})],1)],1)]:e._e(),a("a-col",{attrs:{md:6,sm:8}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")]),a("a",{staticStyle:{"margin-left":"8px"},on:{click:e.handleToggleSearch}},[e._v("\n              "+e._s(e.toggleSearchStatus?"收起":"展开")+"\n              "),a("a-icon",{attrs:{type:e.toggleSearchStatus?"up":"down"}})],1)],1)])],2)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("职务表")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,o){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(o)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(o.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("sysPosition-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},n=[],l=a("8e7c"),i=a("b65a"),r=a("7b16"),s={name:"SysPositionList",mixins:[i["a"]],components:{SysPositionModal:l["default"],JDictSelectTag:r["default"]},data:function(){return{description:"职务表管理页面",columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"职务编码",align:"center",dataIndex:"code"},{title:"职务名称",align:"center",dataIndex:"name"},{title:"职级",align:"center",dataIndex:"postRank_dictText"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],url:{list:"/sys/position/list",delete:"/sys/position/delete",deleteBatch:"/sys/position/deleteBatch",exportXlsUrl:"/sys/position/exportXls",importExcelUrl:"sys/position/importExcel"}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}}},c=s,d=(a("9e6c"),a("2877")),m=Object(d["a"])(c,o,n,!1,null,"43007d60",null);t["default"]=m.exports},"207d":function(e,t,a){},"8e7c":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"code",required:"",label:"职务编码"}},[a("a-input",{attrs:{placeholder:"请输入职务编码","read-only":e.readOnly},model:{value:e.model.code,callback:function(t){e.$set(e.model,"code",t)},expression:"model.code"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"name",required:"",label:"职务名称"}},[a("a-input",{attrs:{placeholder:"请输入职务名称"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"postRank",required:"",label:"职级"}},[a("j-dict-select-tag",{attrs:{placeholder:"请选择职级",dictCode:"position_rank"},model:{value:e.model.postRank,callback:function(t){e.$set(e.model,"postRank",t)},expression:"model.postRank"}})],1)],1)],1)],1)},n=[],l=(a("88bc"),a("0fea")),i=a("4ec3"),r=a("7b16"),s=null,c={name:"SysPositionModal",components:{JDictSelectTag:r["default"]},data:function(){var e=this;return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{code:[{required:!0,message:"请输入职务编码"},{validator:function(t,a,o){s&&clearTimeout(s),s=setTimeout((function(){Object(i["m"])({tableName:"sys_position",fieldName:"code",fieldVal:a,dataId:e.model.id}).then((function(e){e.success?o():o(e.message)})).catch(console.error)}),300)}}],name:[{required:!0,message:"请输入职务名称"}],postRank:[{required:!0,message:"请选择职级"}]},url:{add:"/sys/position/add",edit:"/sys/position/edit"},readOnly:!1}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){this.model=Object.assign({},e),this.visible=!0,e.id?this.readOnly=!0:this.readOnly=!1},close:function(){this.$emit("close"),this.visible=!1,this.$refs.form.resetFields()},handleOk:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(!a)return!1;t.confirmLoading=!0;var o="",n="";e.model.id?(o+=e.url.edit,n="put"):(o+=e.url.add,n="post"),Object(l["h"])(o,e.model,n).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))},handleCancel:function(){this.close()}}},d=c,m=a("2877"),u=Object(m["a"])(d,o,n,!1,null,"6dbfc6c7",null);t["default"]=u.exports},"9e6c":function(e,t,a){"use strict";var o=a("207d"),n=a.n(o);n.a}}]);