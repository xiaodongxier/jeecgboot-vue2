(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1d91"],{4890:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("j-form-container",{attrs:{disabled:e.formDisabled}},[a("a-form-model",{ref:"form",attrs:{slot:"detail",model:e.model,rules:e.validatorRules},slot:"detail"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"租户名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{attrs:{placeholder:"请输入租户名称"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"租户编号",labelCol:e.labelCol,wrapperCol:e.wrapperCol,prop:"id"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{min:1,placeholder:"请输入租户编号",disabled:e.disabledId},model:{value:e.model.id,callback:function(t){e.$set(e.model,"id",t)},expression:"model.id"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"状态",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-radio-group",{attrs:{name:"tenantStatus"},model:{value:e.model.status,callback:function(t){e.$set(e.model,"status",t)},expression:"model.status"}},[a("a-radio",{attrs:{value:1}},[e._v("正常")]),a("a-radio",{attrs:{value:0}},[e._v("冻结")])],1)],1)],1),e.showFlowSubmitButton?a("a-col",{staticStyle:{"text-align":"center"},attrs:{span:24}},[a("a-button",{on:{click:e.submitForm}},[e._v("提 交")])],1):e._e()],1)],1)],1)],1)},o=[],s=a("0fea"),i=(a("ca00"),a("c681")),n=a("2dab"),r=a("7b16"),d={name:"TenantForm",components:{JFormContainer:i["default"],JDate:n["default"],JDictSelectTag:r["default"]},props:{formData:{type:Object,default:function(){},required:!1},normal:{type:Boolean,default:!1,required:!1},disabled:{type:Boolean,default:!1,required:!1}},data:function(){return{model:{status:1},id:"",labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{id:[{required:!0,message:"请输入租户编号!"}]},url:{add:"/sys/tenant/add",edit:"/sys/tenant/edit",queryById:"/sys/tenant/queryById"}}},computed:{formDisabled:function(){return!1===this.normal?!1!==this.formData.disabled:this.disabled},disabledId:function(){return!!this.id},showFlowSubmitButton:function(){return!1===this.normal&&!1===this.formData.disabled}},created:function(){this.showFlowData()},methods:{show:function(e){this.model=e?Object.assign({},e):this.model,this.id=e?e.id:"",this.visible=!0},showFlowData:function(){var e=this;if(!1===this.normal){var t={id:this.formData.dataId};Object(s["c"])(this.url.queryById,t).then((function(t){t.success&&e.edit(t.result)}))}},submitForm:function(){var e=this,t=this;t.$refs.form.validate((function(a){if(!a)return!1;t.confirmLoading=!0;var l="",o="";e.id?(l+=e.url.edit,o="put"):(l+=e.url.add,o="post"),Object(s["h"])(l,e.model,o).then((function(a){a.success?(t.$message.success(a.message),t.$emit("ok")):("该编号已存在!"==a.message&&(e.model.id=""),t.$message.warning(a.message))})).finally((function(){t.confirmLoading=!1}))}))},popupCallback:function(e){this.model=Object.assign(this.model,e)}}},u=d,m=a("2877"),c=Object(m["a"])(u,l,o,!1,null,null,null);t["default"]=c.exports}}]);