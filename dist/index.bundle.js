"use strict";(self.webpackChunkmy_todo_list=self.webpackChunkmy_todo_list||[]).push([[826],{426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),s=n.n(o),r=n(645),a=n.n(r)()(s());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap);"]),a.push([e.id,"body {\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 5%;\n  background-color: #ebebeb;\n  gap: 10px;\n  padding: 0.6rem;\n  box-shadow: 5px 5px 5px #c0c0c0;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n}\n\nh1 {\n  margin: 0;\n  color: #545862;\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.material-symbols-outlined {\n  font-size: 20px;\n  color: #9f9fa0;\n}\n\nform {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 30px;\n  border-bottom: 1px solid #bebebe;\n}\n\n.input {\n  width: 90%;\n  border: none;\n  background-color: #ebebeb;\n  outline: none;\n  color: #545862;\n  font-size: 15px;\n}\n\n.task-container {\n  font-size: 15px;\n  color: #545862;\n}\n\n.new-list {\n  display: flex;\n  list-style: none;\n  border-bottom: 1px solid #bebebe;\n  gap: 10px;\n  padding-top: 20px;\n}\n\n.new-list label {\n  width: 100%;\n}\n\n.text-area {\n  height: 50px;\n  outline: none;\n  border: none;\n  background: transparent;\n  font-size: 25px;\n  color: #4b4c50;\n  margin-left: 0;\n  width: 100%;\n}\n\n.checkbox:checked + input {\n  text-decoration: line-through;\n}\n\n.delete {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n\nbutton {\n  border: none;\n  font-size: 18px;\n  background-color: #ebebeb;\n  color: #8f9192;\n}\n",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},a=[],i=0;i<e.length;i++){var c=e[i],l=o.base?c[0]+o.base:c[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var u=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=s(f,o);o.byIndex=i,t.splice(i,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=o(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var i=n(r[a]);t[i].references--}for(var c=o(e,s),l=0;l<r.length;l++){var d=n(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,s&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},648:(e,t,n)=>{var o=n(379),s=n.n(o),r=n(795),a=n.n(r),i=n(569),c=n.n(i),l=n(565),d=n.n(l),p=n(216),u=n.n(p),f=n(589),m=n.n(f),h=n(426),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),s()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const b=document.querySelector(".task-container"),v=document.querySelector("form"),y=document.querySelector("#add-task"),x=document.querySelector(".completed"),k=new class{constructor(){this.tasks=[]}addTask=e=>{const t={id:this.tasks.length+1,description:e,completed:!1};this.tasks.push(t)};removeList=e=>{this.tasks.forEach((t=>{t.id===e&&this.tasks.splice(this.tasks.indexOf(t),1)}))};displayToDo=e=>{e.innerHTML="",this.tasks.forEach((t=>{const n=`<li id="${t.id}" class="new-list">\n            <input\n              type="checkbox"\n              id="${t.id}"\n              name="task"\n              value="task"\n              ${t.completed?"checked":""}\n              class="checkbox"\n            />\n            <input\n              type="text" id="${t.id}" class="text-area" name="task" value="${t.description}" />\n              \n              <span class="material-symbols-outlined delete"> delete </span>\n              \n          </li>`;e.innerHTML+=n})),document.querySelectorAll(".checkbox").forEach((e=>{e.addEventListener("change",(()=>{e.checked?(e.parentElement.classList.add("complete"),this.tasks=this.tasks.map((t=>(t.id===parseInt(e.parentElement.id,20)&&(t.completed=e.checked),t))),this.setStorage()):(e.parentElement.classList.remove("complete"),this.tasks=this.tasks.map((t=>(t.id===parseInt(e.parentElement.id,20)&&(t.completed=!1),t))),this.setStorage())}))})),document.querySelectorAll(".text-area").forEach((e=>{e.addEventListener("blur",(()=>{const t=this.tasks.findIndex((t=>t.id===Number(e.id)));-1!==t&&(this.tasks[t].description=e.value,this.setStorage())}))}))};resetIndex=()=>{let e=1;this.tasks.forEach((t=>{t.id=e,e+=1}))};showCompleted=()=>{this.tasks.forEach((e=>{e.completed=!0}))};cleanCompleted=()=>{this.tasks=this.tasks.filter((e=>!1===e.completed))};setStorage=()=>{const e=JSON.stringify(this.tasks);localStorage.setItem("tasks",e)};getStorage=()=>{localStorage.getItem("tasks")&&(this.tasks=JSON.parse(localStorage.getItem("tasks")))}};x.addEventListener("click",(()=>{k.cleanCompleted(),k.setStorage(),k.displayToDo(b)})),v.addEventListener("submit",(e=>{e.preventDefault(),y.value.trim()&&(k.addTask(y.value),k.setStorage(),k.resetIndex(),k.displayToDo(b),v.reset())})),document.addEventListener("click",(e=>{if(e.target&&e.target.classList.contains("delete")){const t=parseInt(e.target.parentElement.id,20);k.removeList(t),k.resetIndex(),k.setStorage(),k.displayToDo(b)}})),document.addEventListener("DOMContentLoaded",(()=>{k.getStorage(),k.displayToDo(b)}))}},e=>{e(e.s=648)}]);