import{r as a,o as L,d,f as w,w as V,g as t,F as x,k as E,i as _,z as m,h as g,t as i,l as v,b as D,c}from"./index-De0Ru6L5.js";import{_ as I}from"./PaginationCom-HflJnJvh.js";import{S as f}from"./sweetalert2.all-wg-7VLTu.js";import{M as b}from"./modal-D4v5xXbi.js";const j=t("div",{class:"loader-container"},[t("div",{class:"loader"}),t("div",{class:"text-white text-center fs-4 mt-2"},"喝杯熱茶，稍等片刻 ~ ~")],-1),S={class:"container mt-5"},U={class:"d-flex justify-content-between"},N=t("h3",{class:"fw-bold"},[t("i",{class:"bi bi-ticket-detailed"}),g(" 優惠碼列表")],-1),F={class:"table-responsive"},T={class:"table table-striped mb-4"},z=t("thead",null,[t("tr",null,[t("th",null,"名稱"),t("th",{class:"d-none d-md-table-cell"},"優惠碼"),t("th",null,"折扣"),t("th",null,"期限"),t("th",null,"操作")])],-1),A={class:"d-none d-md-table-cell"},G={class:"btn-group"},P=["onClick"],q=["onClick"],H={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},J={class:"modal-dialog modal-md",role:"document"},K={class:"modal-content border-0"},O={class:"modal-header bg-dark text-white"},Q={class:"modal-title",id:"exampleModalLabel"},R={key:0},W={key:1},X=t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Y={class:"modal-body"},Z={class:"row"},tt={class:"col-sm-12"},et={class:"form-group"},ot=t("label",{for:"title"},"優惠券名稱",-1),lt={class:"row"},st={class:"form-group col-md-6"},nt=t("label",{for:"percent"},"折扣百分比",-1),at={class:"form-group col-md-6"},dt=t("label",{for:"due_date"},"到期日",-1),it=t("hr",null,null,-1),ct={class:"form-group"},ut=t("label",{for:"code"},"優惠碼",-1),rt={class:"modal-footer"},pt=t("button",{type:"button",class:"btn btn-outline-danger","data-bs-dismiss":"modal","aria-label":"Close"}," 取消 ",-1),_t={class:"modal fade",id:"delCouponModal",tabindex:"-1",role:"dialog","aria-labelledby":"delModalLabel","aria-hidden":"true"},mt={class:"modal-dialog",role:"document"},bt={class:"modal-content border-0"},ht=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"delModalLabel"},[t("span",null,"刪除優惠")]),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),vt={class:"text-center modal-body fs-3"},ft={class:"text-light bg-info p-1 rounded-3"},gt=t("br",null,null,-1),yt={class:"modal-footer"},Ct=t("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"},"取消",-1),Bt={__name:"AdminCoupon",setup(kt){const u=a(!1),y=a({}),C=a([]);function r(s=1){u.value=!0,v.get(`https://vue3-course-api.hexschool.io/v2/api/kjwapi/admin/coupons?page=${s}`).then(e=>{C.value=e.data.coupons,y.value=e.data.pagination,console.log(e.data),u.value=!1}).catch(e=>{console.error(e.response),u.value=!1})}const l=a({}),h=a(!1);function k(s,e={}){const n=new b(document.getElementById("couponModal"));h.value=s,s?l.value={}:l.value={...e},n.show()}function M(){let s="https://vue3-course-api.hexschool.io/v2/api/kjwapi/admin/coupon",e="post";const n=document.getElementById("couponModal");h.value||(s=`${s}/${l.value.id}`,e="put"),l.value.due_date=Date.parse(l.value.due_date),l.value.is_enabled=1,v({method:e,url:s,data:{data:l.value}}).then(o=>{f.fire({icon:"success",title:"優惠編輯成功",showConfirmButton:!1,timer:1500});const p=b.getInstance(n);p&&p.hide(),console.log(o),r()}).catch(o=>{f.fire({icon:"error",title:"優惠建立失敗",text:o.response.data.message}),console.error(o.response)})}function $(s){const e=new b(document.getElementById("delCouponModal"));l.value={...s},e.show()}function B(){const s=document.getElementById("delCouponModal");v.delete(`https://vue3-course-api.hexschool.io/v2/api/kjwapi/admin/coupon/${l.value.id}`).then(()=>{f.fire({icon:"success",title:"已刪除優惠",showConfirmButton:!1,timer:1500});const e=b.getInstance(s);e&&e.hide(),r()}).catch(e=>{console.error(e.response)})}return L(()=>{r()}),(s,e)=>{const n=D("VLoading");return c(),d(x,null,[w(n,{active:u.value},{default:V(()=>[j]),_:1},8,["active"]),t("div",S,[t("div",U,[N,t("button",{class:"btn btn-dark mb-4",type:"button",onClick:e[0]||(e[0]=o=>k(!0))}," 建立新的優惠 ")]),t("div",F,[t("table",T,[z,t("tbody",null,[(c(!0),d(x,null,E(C.value,o=>(c(),d("tr",{key:o.id},[t("td",null,i(o.title),1),t("td",A,i(o.code),1),t("td",null,i(o.percent)+"% off",1),t("td",null,i(new Date(o.due_date).toLocaleDateString())+" 截止",1),t("td",null,[t("div",G,[t("button",{type:"button",class:"btn btn-outline-dark btn-sm",onClick:p=>k(!1,o)}," 編輯 ",8,P),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:p=>$(o)}," 刪除 ",8,q)])])]))),128))])])]),w(I,{pages:y.value,onGetPage:r},null,8,["pages"]),t("div",H,[t("div",J,[t("div",K,[t("div",O,[t("h5",Q,[h.value?(c(),d("span",R,"新增優惠")):(c(),d("span",W,"編輯優惠"))]),X]),t("div",Y,[t("div",Z,[t("div",tt,[t("div",et,[ot,_(t("input",{type:"text",class:"form-control my-2",id:"title",placeholder:"請輸入名稱","onUpdate:modelValue":e[1]||(e[1]=o=>l.value.title=o)},null,512),[[m,l.value.title]])]),t("div",lt,[t("div",st,[nt,_(t("input",{type:"number",class:"form-control my-2",id:"percent",placeholder:"請輸入百分比","onUpdate:modelValue":e[2]||(e[2]=o=>l.value.percent=o)},null,512),[[m,l.value.percent,void 0,{number:!0}]])]),t("div",at,[dt,_(t("input",{type:"date",class:"form-control my-2",id:"due_date",placeholder:"請輸入到期日","onUpdate:modelValue":e[3]||(e[3]=o=>l.value.due_date=o)},null,512),[[m,l.value.due_date]])])]),it,t("div",ct,[ut,_(t("input",{type:"text",class:"form-control my-2",id:"code",placeholder:"請輸入優惠碼","onUpdate:modelValue":e[4]||(e[4]=o=>l.value.code=o)},null,512),[[m,l.value.code]])])])])]),t("div",rt,[pt,t("button",{type:"button",class:"btn btn-dark",onClick:e[5]||(e[5]=o=>M(l.value))}," 確認 ")])])])]),t("div",_t,[t("div",mt,[t("div",bt,[ht,t("div",vt,[g(" 是否刪除優惠碼 "),t("strong",ft,i(l.value.code),1),gt,g(" (刪除後將無法恢復) ")]),t("div",yt,[Ct,t("button",{type:"button",class:"btn btn-outline-danger",onClick:e[6]||(e[6]=o=>B())}," 確認刪除 ")])])])])])],64)}}};export{Bt as default};
