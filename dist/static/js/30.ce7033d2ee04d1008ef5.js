webpackJsonp([30],{n1Xm:function(t,e){},nrOE:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("woOf"),a=n.n(i),l=n("STSY"),s=n("xT6B"),o={pageNum:1,pageSize:5,keyword:null},r={id:null,name:null,description:null,adminCount:0,status:1},c={name:"roleList",data:function(){return{listQuery:a()({},o),list:null,total:null,listLoading:!1,dialogVisible:!1,role:a()({},r),isEdit:!1}},created:function(){this.getList()},filters:{formatDateTime:function(t){if(null==t||""===t)return"N/A";var e=new Date(t);return Object(s.a)(e,"yyyy-MM-dd hh:mm:ss")}},methods:{handleResetSearch:function(){this.listQuery=a()({},o)},handleSearchList:function(){this.listQuery.pageNum=1,this.getList()},handleSizeChange:function(t){this.listQuery.pageNum=1,this.listQuery.pageSize=t,this.getList()},handleCurrentChange:function(t){this.listQuery.pageNum=t,this.getList()},handleAdd:function(){this.dialogVisible=!0,this.isEdit=!1,this.role=a()({},r)},handleStatusChange:function(t,e){var n=this;this.$confirm("是否要修改该状态?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(l.j)(e.id,{status:e.status}).then(function(t){n.$message({type:"success",message:"修改成功!"})})}).catch(function(){n.$message({type:"info",message:"取消修改"}),n.getList()})},handleDelete:function(t,e){var n=this;this.$confirm("是否要删除该角色?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t=[];t.push(e.id);var i=new URLSearchParams;i.append("ids",t),Object(l.d)(i).then(function(t){n.$message({type:"success",message:"删除成功!"}),n.getList()})})},handleUpdate:function(t,e){this.dialogVisible=!0,this.isEdit=!0,this.role=a()({},e)},handleDialogConfirm:function(){var t=this;this.$confirm("是否要确认?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.isEdit?Object(l.i)(t.role.id,t.role).then(function(e){t.$message({message:"修改成功！",type:"success"}),t.dialogVisible=!1,t.getList()}):Object(l.c)(t.role).then(function(e){t.$message({message:"添加成功！",type:"success"}),t.dialogVisible=!1,t.getList()})})},handleSelectMenu:function(t,e){this.$router.push({path:"/ums/allocMenu",query:{roleId:e.id}})},handleSelectResource:function(t,e){this.$router.push({path:"/ums/allocResource",query:{roleId:e.id}})},getList:function(){var t=this;this.listLoading=!0,Object(l.f)(this.listQuery).then(function(e){t.listLoading=!1,t.list=e.data.list,t.total=e.data.total})}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[n("div",[n("i",{staticClass:"el-icon-search"}),t._v(" "),n("span",[t._v("筛选搜索")]),t._v(" "),n("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(e){t.handleSearchList()}}},[t._v("\n        查询搜索\n      ")]),t._v(" "),n("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:function(e){t.handleResetSearch()}}},[t._v("\n        重置\n      ")])],1),t._v(" "),n("div",{staticStyle:{"margin-top":"15px"}},[n("el-form",{attrs:{inline:!0,model:t.listQuery,size:"small","label-width":"140px"}},[n("el-form-item",{attrs:{label:"输入搜索："}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"角色名称",clearable:""},model:{value:t.listQuery.keyword,callback:function(e){t.$set(t.listQuery,"keyword",e)},expression:"listQuery.keyword"}})],1)],1)],1)]),t._v(" "),n("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[n("i",{staticClass:"el-icon-tickets"}),t._v(" "),n("span",[t._v("数据列表")]),t._v(" "),n("el-button",{staticClass:"btn-add",staticStyle:{"margin-left":"20px"},attrs:{size:"mini"},on:{click:function(e){t.handleAdd()}}},[t._v("添加")])],1),t._v(" "),n("div",{staticClass:"table-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"roleTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[n("el-table-column",{attrs:{label:"编号",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"角色名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"描述",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.description))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"用户数",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.adminCount))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"添加时间",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatDateTime")(e.row.createTime)))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"是否启用",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(n){t.handleStatusChange(e.$index,e.row)}},model:{value:e.row.status,callback:function(n){t.$set(e.row,"status",n)},expression:"scope.row.status"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-row",[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){t.handleSelectMenu(e.$index,e.row)}}},[t._v("分配菜单\n            ")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){t.handleSelectResource(e.$index,e.row)}}},[t._v("分配资源\n            ")])],1),t._v(" "),n("el-row",[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){t.handleUpdate(e.$index,e.row)}}},[t._v("\n            编辑\n          ")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){t.handleDelete(e.$index,e.row)}}},[t._v("删除\n          ")])],1)]}}])})],1)],1),t._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","current-page":t.listQuery.pageNum,"page-size":t.listQuery.pageSize,"page-sizes":[5,10,15],total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.listQuery,"pageNum",e)}}})],1),t._v(" "),n("el-dialog",{attrs:{title:t.isEdit?"编辑角色":"添加角色",visible:t.dialogVisible,width:"40%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-form",{ref:"roleForm",attrs:{model:t.role,"label-width":"150px",size:"small"}},[n("el-form-item",{attrs:{label:"角色名称："}},[n("el-input",{staticStyle:{width:"250px"},model:{value:t.role.name,callback:function(e){t.$set(t.role,"name",e)},expression:"role.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"描述："}},[n("el-input",{staticStyle:{width:"250px"},attrs:{type:"textarea",rows:5},model:{value:t.role.description,callback:function(e){t.$set(t.role,"description",e)},expression:"role.description"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"是否启用："}},[n("el-radio-group",{model:{value:t.role.status,callback:function(e){t.$set(t.role,"status",e)},expression:"role.status"}},[n("el-radio",{attrs:{label:1}},[t._v("是")]),t._v(" "),n("el-radio",{attrs:{label:0}},[t._v("否")])],1)],1)],1),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.handleDialogConfirm()}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var d=n("VU/8")(c,u,!1,function(t){n("n1Xm")},null,null);e.default=d.exports}});
//# sourceMappingURL=30.ce7033d2ee04d1008ef5.js.map