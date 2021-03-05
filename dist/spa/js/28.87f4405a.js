(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{c582:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page-container",[i("q-page",[i("div",{staticClass:"row q-pa-md q-gutter-sm"},[i("div",{staticClass:"col-12"},[i("q-btn",{attrs:{fab:"",icon:"add",color:"primary"},on:{click:function(t){e.showCreateSiteDrawer=!0}}})],1)]),i("div",{staticClass:"row q-pa-md q-gutter-sm"},e._l(e.sites,(function(t){return i("div",{staticClass:"col-4 col-xl-2 col-lg-3 col-xs-12 col-sm-6"},[i("q-card",[i("q-card-section",[i("q-item",[i("q-item-section",[i("span",{staticClass:"text-h6"},[e._v(e._s(t.name))])])],1)],1),i("q-card-section",[i("q-list",[i("q-item",[i("q-item-section",[i("span",[e._v("HTTPS")])]),e.showHttpEdit?i("q-item-section",{attrs:{avatar:""}},[i("q-checkbox",{staticClass:"float-right",attrs:{size:"sm"},on:{input:function(t){e.showHttpEdit=!1}},model:{value:t.enable_https,callback:function(i){e.$set(t,"enable_https",i)},expression:"site.enable_https"}})],1):e._e(),i("q-item-section",{attrs:{avatar:""}},[i("q-item-label",[i("q-icon",{attrs:{color:"primary",size:"xs",name:t.enable_https?"fas fa-check":"fas fa-times"}})],1)],1)],1),i("q-item",[i("q-item-section",[i("span",[e._v("FTP enabled")])]),e.showHttpEdit?i("q-item-section",{attrs:{avatar:""}},[i("q-checkbox",{staticClass:"float-right",attrs:{size:"sm"},on:{input:function(t){e.showHttpEdit=!1}},model:{value:t.enable_https,callback:function(i){e.$set(t,"enable_https",i)},expression:"site.enable_https"}})],1):e._e(),i("q-item-section",{attrs:{avatar:""}},[i("q-item-label",[i("q-icon",{attrs:{color:"primary",size:"xs",name:t.ftp_enabled?"fas fa-check":"fas fa-times"}})],1)],1)],1),i("q-item",[i("q-item-section",[i("span",[e._v("Site type")])]),i("q-item-section",{attrs:{avatar:""}},[i("q-item-label",[i("span",{staticClass:"text-bold"},[e._v(e._s(t.site_type))])])],1)],1)],1)],1),i("q-card-section",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("q-btn",{staticClass:"float-right",attrs:{size:"sm",label:"Browse files","text-color":"primary"},on:{click:function(i){return e.$router.push("/site/"+t.reference_id+"/browse")}}}),i("q-btn",{staticClass:"float-right",attrs:{size:"sm",label:"Edit site"},on:{click:function(i){return e.showEditSite(t)}}})],1)])])],1)],1)})),0),i("q-drawer",{attrs:{breakpoint:1400,overlay:"","content-class":"bg-grey-3",side:"right"},model:{value:e.showCreateSiteDrawer,callback:function(t){e.showCreateSiteDrawer=t},expression:"showCreateSiteDrawer"}},[i("q-scroll-area",{staticClass:"fit row"},[i("div",{staticClass:"q-pa-md"},[i("span",{staticClass:"text-h6"},[e._v("Create site")]),i("q-form",{staticClass:"q-gutter-md"},[i("q-input",{attrs:{label:"Hostname"},model:{value:e.newSite.hostname,callback:function(t){e.$set(e.newSite,"hostname",t)},expression:"newSite.hostname"}}),i("q-input",{attrs:{value:"/new-site",label:"Path"},model:{value:e.newSite.path,callback:function(t){e.$set(e.newSite,"path",t)},expression:"newSite.path"}}),i("q-select",{attrs:{options:[{label:"Hugo",value:"hugo"},{label:"Static",value:"static"}],value:"static",label:"Site type","emit-value":"","map-options":""},model:{value:e.newSite.site_type,callback:function(t){e.$set(e.newSite,"site_type",t)},expression:"newSite.site_type"}}),i("q-select",{attrs:{label:"Cloud store",options:e.stores,"option-label":"name","option-value":"id"},model:{value:e.newSite.cloud_store_id,callback:function(t){e.$set(e.newSite,"cloud_store_id",t)},expression:"newSite.cloud_store_id"}}),i("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.createSite()}}},[e._v("Create")]),i("q-btn",{on:{click:function(t){e.showCreateSiteDrawer=!1}}},[e._v("Cancel")])],1)],1)])],1),i("q-drawer",{attrs:{overlay:"","content-class":"bg-grey-3",breakpoint:1400,side:"right"},model:{value:e.showEditSiteDrawer,callback:function(t){e.showEditSiteDrawer=t},expression:"showEditSiteDrawer"}},[i("q-scroll-area",{staticClass:"fit row"},[i("div",{staticClass:"q-pa-md"},[i("span",{staticClass:"text-h6"},[e._v("Edit site")]),i("q-form",{staticClass:"q-gutter-md"},[i("q-input",{attrs:{label:"Name"},model:{value:e.newSite.name,callback:function(t){e.$set(e.newSite,"name",t)},expression:"newSite.name"}}),i("q-input",{attrs:{label:"Hostname"},model:{value:e.newSite.hostname,callback:function(t){e.$set(e.newSite,"hostname",t)},expression:"newSite.hostname"}}),i("q-input",{attrs:{label:"Path"},model:{value:e.newSite.path,callback:function(t){e.$set(e.newSite,"path",t)},expression:"newSite.path"}}),i("q-input",{attrs:{label:"Site type"},model:{value:e.newSite.site_type,callback:function(t){e.$set(e.newSite,"site_type",t)},expression:"newSite.site_type"}}),i("q-select",{attrs:{options:e.stores,"option-label":"name","option-value":"id","emit-value":"","map-options":""},model:{value:e.newSite.cloud_store_id,callback:function(t){e.$set(e.newSite,"cloud_store_id",t)},expression:"newSite.cloud_store_id"}}),i("q-item",[i("q-item-section",[i("q-item-label",[e._v("HTTPS")])],1),i("q-item-section",[i("q-btn-toggle",{attrs:{size:"xs",options:[{label:e.newSite.enable_https?"Enabled":"Enable",value:!0},{label:e.newSite.enable_https?"Disable":"Disabled",value:!1}]},model:{value:e.newSite.enable_https,callback:function(t){e.$set(e.newSite,"enable_https",t)},expression:"newSite.enable_https"}})],1)],1),i("q-item",[i("q-item-section",[i("q-item-label",[e._v("FTP")])],1),i("q-item-section",[i("q-btn-toggle",{attrs:{size:"xs",options:[{label:e.newSite.ftp_enabled?"Enabled":"Enable",value:!0},{label:e.newSite.ftp_enabled?"Disable":"Disabled",value:!1}]},model:{value:e.newSite.ftp_enabled,callback:function(t){e.$set(e.newSite,"ftp_enabled",t)},expression:"newSite.ftp_enabled"}})],1)],1),i("q-btn",{attrs:{size:"sm",color:"negative"},on:{click:function(t){return e.deleteSite()}}},[e._v("Delete")]),i("q-btn",{staticClass:"float-right",attrs:{size:"sm",color:"primary"},on:{click:function(t){return e.editSite()}}},[e._v("Save")]),i("q-btn",{staticClass:"float-right",attrs:{size:"sm"},on:{click:function(t){e.showEditSiteDrawer=!1}}},[e._v("Cancel")])],1)],1)])],1),i("q-drawer",{attrs:{breakpoint:1400,width:e.fileDrawerWidth>800?800:e.fileDrawerWidth,side:"right",overlay:""},model:{value:e.showFileBrowser,callback:function(t){e.showFileBrowser=t},expression:"showFileBrowser"}},[i("q-scroll-area",{staticClass:"fit"},[e.selectedSite&&e.showFileBrowser?i("file-browser",{attrs:{site:e.selectedSite},on:{close:function(t){e.showFileBrowser=!1}}}):e._e()],1)],1)],1)],1)},s=[],n=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("7f7f"),i("c47a")),o=i.n(n),l=i("2f62");function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var d={name:"SitePage",methods:c(c({syncSite:function(e){var t=this;t.executeAction({tableName:"site",actionName:"sync_site_storage",params:{site_id:e.id,path:""}})},showEditSite:function(e){this.selectedSite=e,this.showEditSiteDrawer=!0,this.showFileBrowser=!1,this.newSite.hostname=e.hostname,this.newSite.name=e.hostname,this.newSite.path=e.path,this.newSite.enable_https=1===e.enable_https||!!e.enable_https,this.newSite.ftp_enabled=e.ftp_enabled,this.newSite.site_type=e.site_type,this.newSite.cloud_store_id=e.cloud_store_id},deleteSite:function(){var e=this;console.log("Delete site",this.selectedSite),this.deleteRow({tableName:"site",reference_id:this.selectedSite.id}).then((function(t){e.showEditSiteDrawer=!1,e.selectedSite={},e.$q.notify({title:"Success",message:"Site deleted"}),e.refresh()})).catch((function(t){e.$q.notify({title:"Failed",message:JSON.stringify(t)})}))},editSite:function(){var e=this;console.log("Edit site",this.selectedSite,this.newSite),this.newSite.tableName="site",this.newSite.id=this.selectedSite.id,this.newSite.cloud_store_id={id:this.newSite.cloud_store_id,type:"cloud_store"},this.updateRow(this.newSite).then((function(t){e.showEditSiteDrawer=!1,e.selectedSite={},e.$q.notify({title:"Success",message:"Site updated"}),e.refresh()})).catch((function(t){e.$q.notify({title:"Failed",message:JSON.stringify(t)})}))},createSite:function(){var e=this;console.log("new site",this.newSite),this.newSite.tableName="site",e.executeAction({tableName:"cloud_store",actionName:"create_site",params:{cloud_store_id:this.newSite.cloud_store_id.id,hostname:this.newSite.hostname,path:this.newSite.path,site_type:this.newSite.site_type}}).then((function(t){e.user={},e.$q.notify({message:"Site created"}),e.refresh(),e.showCreateSiteDrawer=!1})).catch((function(t){console.log("Failed to create site",t),t instanceof Array?e.$q.notify({message:t[0].title}):e.$q.notify({message:"Failed to create site"})}))}},Object(l["b"])(["loadData","getTableSchema","createRow","deleteRow","updateRow","executeAction"])),{},{refresh:function(){var e="site",t=this;this.loadData({tableName:e,params:{included_relations:"cloud_store_id"}}).then((function(e){console.log("Loaded data",e),t.sites=e.data.map((function(e){return e.ftp_enabled=1===e.ftp_enabled||!0===e.ftp_enabled,e}))})),t.loadData({tableName:"cloud_store"}).then((function(e){t.stores=e.data}))}}),data:function(){return c({text:"",showHttpEdit:!1,fileList:[],currentSite:null,showFileBrowser:!1,stores:[],selectedSite:{},siteProviderOptions:[{icon:"fas fa-aws",label:"Amazon Drive",description:"OAuth token based"},{icon:"fas fa-aws",label:"Amazon S3",description:"OAuth token based"},{icon:"fas fa-aws",label:"Backblaze B2",description:"OAuth token based"},{icon:"fas fa-aws",label:"Dropbox",description:"OAuth token based"},{icon:"fas fa-aws",label:"FTP",description:"OAuth token based"},{icon:"fas fa-aws",label:"Google Drive",description:"OAuth token based"},{icon:"fas fa-aws",label:"local",description:"The local filesystem"}],showHelp:!1,newSite:{name:null,hostname:null,path:null,site_type:null,cloud_store_id:null,ftp_enabled:!1,enable_https:!1},showCreateSiteDrawer:!1,showEditSiteDrawer:!1,filter:null,sites:[],columns:[{name:"name",field:"name",label:"cloud name",align:"left",sortable:!0}]},Object(l["d"])([]))},mounted:function(){console.log("Site page scope",this,window.screen.availWidth),this.refresh()},computed:c(c({fileDrawerWidth:function(){return window.screen.availWidth}},Object(l["c"])(["selectedTable"])),Object(l["d"])([])),watch:{}},u=d,p=i("2877"),h=i("09e3"),w=i("9989"),b=i("9c40"),f=i("f09f"),m=i("a370"),S=i("66e5"),_=i("4074"),q=i("1c1c"),v=i("8f8e"),g=i("0170"),y=i("0016"),k=i("9404"),C=i("4983"),x=i("0378"),D=i("27f9"),O=i("ddd8"),E=i("6a67"),$=i("eebe"),P=i.n($),Q=Object(p["a"])(u,a,s,!1,null,null,null);t["default"]=Q.exports;P()(Q,"components",{QPageContainer:h["a"],QPage:w["a"],QBtn:b["a"],QCard:f["a"],QCardSection:m["a"],QItem:S["a"],QItemSection:_["a"],QList:q["a"],QCheckbox:v["a"],QItemLabel:g["a"],QIcon:y["a"],QDrawer:k["a"],QScrollArea:C["a"],QForm:x["a"],QInput:D["a"],QSelect:O["a"],QBtnToggle:E["a"]})}}]);