/*! For license information please see main.3b159a09.js.LICENSE.txt */
  background: ${cc};
  box-sizing: border-box;
  width: 100%;
  background-attachment: fixed;
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  flex-grow: 1;

  h1 {
    color: ${rc};
  }
  h2 {
    color: ${rc};
  }
  h3 {
    color: ${rc};
  }
  h4 {
    color: ${rc};
  }
  h5 {
    color: ${rc};
  }
  a {
    color: ${ic};
  }
  input {
    color: ${rc};
  }

  path.primary {
    fill: ${rc};
  }

  input {
    border: none;
    border-bottom: 1px solid #ddd;
    padding: 0.7rem 0rem;
    font-size: 1.1rem;
    background: none;
    transition: all 0.1s;
  }

  input::placeholder {
    color: #bbb;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }

  .page-padding {
    padding-left: 1.25rem;
    padding-right: 1.25rem;

    @media (min-width: ${1001}px) {
      padding-left: 1.75rem;
      padding-right: 1.75rem;
    }
    @media (min-width: ${1176}px) {
      padding: 0 3rem 0 1rem;
    }
    @media (min-width: 1500px) {
      padding: 0 5rem 0 1.5rem;
    }
  }
`,Hc=pn.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  flex-grow: 1;
`,Bc=pn.div`
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  position: sticky;
  top: 0px;
  z-index: 6;
  flex: 0;
  overflow: hidden;
  min-width: ${t=>t.minimised?"75px":"180px"};
  max-width: ${t=>t.minimised?"75px":"180px"};

  margin-right: ${t=>t.minimised?"1.25rem":0};

  @media (max-width: ${At}px) {
    position: fixed;
    transition: all 0.15s ease-in-out;
    top: 0;
    left: ${t=>t.open?0:"-180px"};
  }
`,Dc=pn.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
`,Fc=pn(Yu.div)`
  max-width: ${1800}px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 4.5rem;
  width: 100%;
  margin: 0 auto;
`,Uc=pn.header`
  box-sizing: border-box;
  background: ${lc};
  position: sticky;
  top: 0px;
  padding-top: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: ${At}px) {
    top: 4rem;
    padding-top: 0.25rem;
  }
  width: 100%;
  z-index: 4;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  transition: padding 0.3s ease-out;

  h1 {
    font-size: ${t=>t.sticky?"1.4rem ":"1.8rem"};
    @media (max-width: ${At}px) {
      font-size: 1.5rem;
    }
    transition: font 0.5s;
  }

  > .tabs {
    box-sizing: border-box;
    overflow: auto;
    max-width: ${1800}px;
    margin-top: ${t=>t.sticky?"0":"0.75rem"};
    transition: margin 0.2s;

    > .inner {
      display: flex;
      flex-flow: row nowrap;
      border-bottom: ${t=>t.sticky?"0px":"1px solid"};
      border-bottom-color: ${Sc};

      > button {
        padding: 0.75rem 1rem;
        margin-bottom: 0.5rem;
        margin-right: 0.75rem;
        font-size: ${t=>t.sticky?"1.05rem":"1.15rem"};
        color: ${ic};
        transition: opacity 0.1s, font-size 0.1s;
        border-radius: 0.5rem;

        &.active {
          background: ${wc};
        }

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`,Wc=pn.div`
  background: ${lc};
  box-sizing: border-box;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 4rem;
  z-index: 4;
  display: none;
  @media (max-width: ${At}px) {
    display: block;
  }
`,qc=pn.div`
  box-sizing: border-box;
  margin-top: ${t=>!0===t.noVerticalSpacer?"0":"1rem"};
  margin-bottom: ${t=>!0===t.noVerticalSpacer?"0":"1rem"};
  display: flex;
  flex-shrink: 0;
  flex-flow: row wrap;
  width: 100%;
  * {
    box-sizing: border-box;
  }
  /* kill heading padding, already applied to wrapper */
  h1,
  h2,
  h3,
  h4 {
    margin-top: 0;
  }
`,Xc=pn.div`
  order: ${t=>t.vOrder};
  box-sizing: border-box;
  flex: 1;
  flex-basis: 100%;
  max-width: 100%;

  @media (min-width: ${1176}px) {
    ${t=>0===t.hOrder&&" padding-right: 0.5rem;"}
    ${t=>1===t.hOrder&&"padding-left: 0.5rem;"}
    order: ${t=>t.hOrder};
    flex-basis: 50%;
    width: 50%;
    flex: 1;
  }

  @media (min-width: ${1450}px) {
    flex-basis: 62%;
    width: 62%;
  }
`,Zc=pn.div`
  order: ${t=>t.vOrder};
  box-sizing: border-box;
  flex-basis: 100%;
  width: 100%;
  border-radius: 1rem;

  @media (min-width: ${1176}px) {
    ${t=>1===t.hOrder&&" padding-left: 0.5rem;"}
    ${t=>0===t.hOrder&&"padding-right: 0.5rem;"}
    order: ${t=>t.hOrder};
    flex-basis: 50%;
    width: 50%;
    flex: 1;
  }

  @media (min-width: ${1450}px) {
    flex-basis: 38%;
    max-width: 38%;
  }
`,Yc=pn.div`
  border-bottom: 1px solid ${Sc};
  width: 100%;
  margin: 0.75rem 0;
`;function Kc(){return Kc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kc.apply(this,arguments)}var Gc;!function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"}(Gc||(Gc={}));var Jc=function(t){return t};var Qc="beforeunload",_c="popstate";function $c(t){void 0===t&&(t={});var e=t.window,n=void 0===e?document.defaultView:e,r=n.history;function i(){var t=ih(n.location.hash.substr(1)),e=t.pathname,i=void 0===e?"/":e,o=t.search,a=void 0===o?"":o,s=t.hash,l=void 0===s?"":s,u=r.state||{};return[u.idx,Jc({pathname:i,search:a,hash:l,state:u.usr||null,key:u.key||"default"})]}var o=null;function a(){if(o)d.call(o),o=null;else{var t=Gc.Pop,e=i(),n=e[0],r=e[1];if(d.length){if(null!=n){var a=u-n;a&&(o={action:t,location:r,retry:function(){v(-1*a)}},v(a))}}else y(t)}}n.addEventListener(_c,a),n.addEventListener("hashchange",(function(){rh(i()[1])!==rh(c)&&a()}));var s=Gc.Pop,l=i(),u=l[0],c=l[1],h=eh(),d=eh();function f(t){return function(){var t=document.querySelector("base"),e="";if(t&&t.getAttribute("href")){var r=n.location.href,i=r.indexOf("#");e=-1===i?r:r.slice(0,i)}return e}()+"#"+("string"===typeof t?t:rh(t))}function p(t,e){return void 0===e&&(e=null),Jc(Kc({pathname:c.pathname,hash:"",search:""},"string"===typeof t?ih(t):t,{state:e,key:nh()}))}function m(t,e){return[{usr:t.state,key:t.key,idx:e},f(t)]}function g(t,e,n){return!d.length||(d.call({action:t,location:e,retry:n}),!1)}function y(t){s=t;var e=i();u=e[0],c=e[1],h.call({action:s,location:c})}function v(t){r.go(t)}null==u&&(u=0,r.replaceState(Kc({},r.state,{idx:u}),""));var b={get action(){return s},get location(){return c},createHref:f,push:function t(e,i){var o=Gc.Push,a=p(e,i);if(g(o,a,(function(){t(e,i)}))){var s=m(a,u+1),l=s[0],c=s[1];try{r.pushState(l,"",c)}catch(h){n.location.assign(c)}y(o)}},replace:function t(e,n){var i=Gc.Replace,o=p(e,n);if(g(i,o,(function(){t(e,n)}))){var a=m(o,u),s=a[0],l=a[1];r.replaceState(s,"",l),y(i)}},go:v,back:function(){v(-1)},forward:function(){v(1)},listen:function(t){return h.push(t)},block:function(t){var e=d.push(t);return 1===d.length&&n.addEventListener(Qc,th),function(){e(),d.length||n.removeEventListener(Qc,th)}}};return b}function th(t){t.preventDefault(),t.returnValue=""}function eh(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter((function(t){return t!==e}))}},call:function(e){t.forEach((function(t){return t&&t(e)}))}}}function nh(){return Math.random().toString(36).substr(2,8)}function rh(t){var e=t.pathname,n=void 0===e?"/":e,r=t.search,i=void 0===r?"":r,o=t.hash,a=void 0===o?"":o;return i&&"?"!==i&&(n+="?"===i.charAt(0)?i:"?"+i),a&&"#"!==a&&(n+="#"===a.charAt(0)?a:"#"+a),n}function ih(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}const oh=(0,k.createContext)(null);const ah=(0,k.createContext)(null);const sh=(0,k.createContext)({outlet:null,matches:[]});function lh(t,e){if(!t)throw new Error(e)}function uh(t,e,n){void 0===n&&(n="/");let r=yh(("string"===typeof e?ih(e):e).pathname||"/",n);if(null==r)return null;let i=ch(t);!function(t){t.sort(((t,e)=>t.score!==e.score?e.score-t.score:function(t,e){let n=t.length===e.length&&t.slice(0,-1).every(((t,n)=>t===e[n]));return n?t[t.length-1]-e[e.length-1]:0}(t.routesMeta.map((t=>t.childrenIndex)),e.routesMeta.map((t=>t.childrenIndex)))))}(i);let o=null;for(let a=0;null==o&&a<i.length;++a)o=ph(i[a],r);return o}function ch(t,e,n,r){return void 0===e&&(e=[]),void 0===n&&(n=[]),void 0===r&&(r=""),t.forEach(((t,i)=>{let o={relativePath:t.path||"",caseSensitive:!0===t.caseSensitive,childrenIndex:i,route:t};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||lh(!1),o.relativePath=o.relativePath.slice(r.length));let a=vh([r,o.relativePath]),s=n.concat(o);t.children&&t.children.length>0&&(!0===t.index&&lh(!1),ch(t.children,e,s,a)),(null!=t.path||t.index)&&e.push({path:a,score:fh(a,t.index),routesMeta:s})})),e}const hh=/^:\w+$/,dh=t=>"*"===t;function fh(t,e){let n=t.split("/"),r=n.length;return n.some(dh)&&(r+=-2),e&&(r+=2),n.filter((t=>!dh(t))).reduce(((t,e)=>t+(hh.test(e)?3:""===e?1:10)),r)}function ph(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let a=0;a<n.length;++a){let t=n[a],s=a===n.length-1,l="/"===i?e:e.slice(i.length)||"/",u=mh({path:t.relativePath,caseSensitive:t.caseSensitive,end:s},l);if(!u)return null;Object.assign(r,u.params);let c=t.route;o.push({params:r,pathname:vh([i,u.pathname]),pathnameBase:bh(vh([i,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(i=vh([i,u.pathnameBase]))}return o}function mh(t,e){"string"===typeof t&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=function(t,e,n){void 0===e&&(e=!1);void 0===n&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((t,e)=>(r.push(e),"([^\\/]+)")));t.endsWith("*")?(r.push("*"),i+="*"===t||"/*"===t?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";return[new RegExp(i,e?void 0:"i"),r]}(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1),l=r.reduce(((t,e,n)=>{if("*"===e){let t=s[n]||"";a=o.slice(0,o.length-t.length).replace(/(.)\/+$/,"$1")}return t[e]=function(t,e){try{return decodeURIComponent(t)}catch(n){return t}}(s[n]||""),t}),{});return{params:l,pathname:o,pathnameBase:a,pattern:t}}function gh(t,e,n){let r,i="string"===typeof t?ih(t):t,o=""===t||""===i.pathname?"/":i.pathname;if(null==o)r=n;else{let t=e.length-1;if(o.startsWith("..")){let e=o.split("/");for(;".."===e[0];)e.shift(),t-=1;i.pathname=e.join("/")}r=t>=0?e[t]:"/"}let a=function(t,e){void 0===e&&(e="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof t?ih(t):t,o=n?n.startsWith("/")?n:function(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach((t=>{".."===t?n.length>1&&n.pop():"."!==t&&n.push(t)})),n.length>1?n.join("/"):"/"}(n,e):e;return{pathname:o,search:wh(r),hash:xh(i)}}(i,r);return o&&"/"!==o&&o.endsWith("/")&&!a.pathname.endsWith("/")&&(a.pathname+="/"),a}function yh(t,e){if("/"===e)return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&"/"!==n?null:t.slice(e.length)||"/"}const vh=t=>t.join("/").replace(/\/\/+/g,"/"),bh=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),wh=t=>t&&"?"!==t?t.startsWith("?")?t:"?"+t:"",xh=t=>t&&"#"!==t?t.startsWith("#")?t:"#"+t:"";function Mh(t){kh()||lh(!1);let{basename:e,navigator:n}=(0,k.useContext)(oh),{hash:r,pathname:i,search:o}=Ph(t),a=i;if("/"!==e){let n=function(t){return""===t||""===t.pathname?"/":"string"===typeof t?ih(t).pathname:t.pathname}(t),r=null!=n&&n.endsWith("/");a="/"===i?e+(r?"/":""):vh([e,i])}return n.createHref({pathname:a,search:o,hash:r})}function kh(){return null!=(0,k.useContext)(ah)}function Sh(){return kh()||lh(!1),(0,k.useContext)(ah).location}function Ch(){kh()||lh(!1);let{basename:t,navigator:e}=(0,k.useContext)(oh),{matches:n}=(0,k.useContext)(sh),{pathname:r}=Sh(),i=JSON.stringify(n.map((t=>t.pathnameBase))),o=(0,k.useRef)(!1);(0,k.useEffect)((()=>{o.current=!0}));let a=(0,k.useCallback)((function(n,a){if(void 0===a&&(a={}),!o.current)return;if("number"===typeof n)return void e.go(n);let s=gh(n,JSON.parse(i),r);"/"!==t&&(s.pathname=vh([t,s.pathname])),(a.replace?e.replace:e.push)(s,a.state)}),[t,e,i,r]);return a}function Ph(t){let{matches:e}=(0,k.useContext)(sh),{pathname:n}=Sh(),r=JSON.stringify(e.map((t=>t.pathnameBase)));return(0,k.useMemo)((()=>gh(t,JSON.parse(r),n)),[t,r,n])}function Th(t,e){return void 0===e&&(e=[]),null==t?null:t.reduceRight(((n,r,i)=>(0,k.createElement)(sh.Provider,{children:void 0!==r.route.element?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}})),null)}function Ah(t){let{to:e,replace:n,state:r}=t;kh()||lh(!1);let i=Ch();return(0,k.useEffect)((()=>{i(e,{replace:n,state:r})})),null}function Nh(t){lh(!1)}function Oh(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Gc.Pop,navigator:o,static:a=!1}=t;kh()&&lh(!1);let s=bh(e),l=(0,k.useMemo)((()=>({basename:s,navigator:o,static:a})),[s,o,a]);"string"===typeof r&&(r=ih(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,p=(0,k.useMemo)((()=>{let t=yh(u,s);return null==t?null:{pathname:t,search:c,hash:h,state:d,key:f}}),[s,u,c,h,d,f]);return null==p?null:(0,k.createElement)(oh.Provider,{value:l},(0,k.createElement)(ah.Provider,{children:n,value:{location:p,navigationType:i}}))}function jh(t){let{children:e,location:n}=t;return function(t,e){kh()||lh(!1);let{matches:n}=(0,k.useContext)(sh),r=n[n.length-1],i=r?r.params:{},o=(r&&r.pathname,r?r.pathnameBase:"/");r&&r.route;let a,s=Sh();if(e){var l;let t="string"===typeof e?ih(e):e;"/"===o||(null==(l=t.pathname)?void 0:l.startsWith(o))||lh(!1),a=t}else a=s;let u=a.pathname||"/",c=uh(t,{pathname:"/"===o?u:u.slice(o.length)||"/"});return Th(c&&c.map((t=>Object.assign({},t,{params:Object.assign({},i,t.params),pathname:vh([o,t.pathname]),pathnameBase:"/"===t.pathnameBase?o:vh([o,t.pathnameBase])}))),n)}(Eh(e),n)}function Eh(t){let e=[];return k.Children.forEach(t,(t=>{if(!(0,k.isValidElement)(t))return;if(t.type===k.Fragment)return void e.push.apply(e,Eh(t.props.children));t.type!==Nh&&lh(!1);let n={caseSensitive:t.props.caseSensitive,element:t.props.element,index:t.props.index,path:t.props.path};t.props.children&&(n.children=Eh(t.props.children)),e.push(n)})),e}function Vh(){return Vh=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vh.apply(this,arguments)}function Ih(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}const Rh=["onClick","reloadDocument","replace","state","target","to"];function zh(t){let{basename:e,children:n,window:r}=t,i=(0,k.useRef)();null==i.current&&(i.current=$c({window:r}));let o=i.current,[a,s]=(0,k.useState)({action:o.action,location:o.location});return(0,k.useLayoutEffect)((()=>o.listen(s)),[o]),(0,k.createElement)(Oh,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const Lh=(0,k.forwardRef)((function(t,e){let{onClick:n,reloadDocument:r,replace:i=!1,state:o,target:a,to:s}=t,l=Ih(t,Rh),u=Mh(s),c=function(t,e){let{target:n,replace:r,state:i}=void 0===e?{}:e,o=Ch(),a=Sh(),s=Ph(t);return(0,k.useCallback)((e=>{if(0===e.button&&(!n||"_self"===n)&&!function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(e)){e.preventDefault();let n=!!r||rh(a)===rh(s);o(t,{replace:n,state:i})}}),[a,o,s,r,i,n,t])}(s,{replace:i,state:o,target:a});return(0,k.createElement)("a",Vh({},l,{href:u,onClick:function(t){n&&n(t),t.defaultPrevented||r||c(t)},ref:e,target:a}))}));function Hh(){var t=(0,k.useRef)(!1);return zn((function(){return t.current=!0,function(){t.current=!1}}),[]),t}var Bh=function(t){var e=t.children,n=t.initial,r=t.isPresent,i=t.onExitComplete,o=t.custom,a=t.presenceAffectsLayout,s=Jn(Dh),l=kl(),u=(0,k.useMemo)((function(){return{id:l,initial:n,isPresent:r,custom:o,onExitComplete:function(t){var e,n;s.set(t,!0);try{for(var r=xn(s.values()),o=r.next();!o.done;o=r.next()){if(!o.value)return}}catch(a){e={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}null===i||void 0===i||i()},register:function(t){return s.set(t,!1),function(){return s.delete(t)}}}}),a?void 0:[r]);return(0,k.useMemo)((function(){s.forEach((function(t,e){return s.set(e,!1)}))}),[r]),k.useEffect((function(){!r&&!s.size&&(null===i||void 0===i||i())}),[r]),k.createElement(In.Provider,{value:u},e)};function Dh(){return new Map}var Fh=function(t){return t.key||""};var Uh=function(t){var e=t.children,n=t.custom,r=t.initial,i=void 0===r||r,o=t.onExitComplete,a=t.exitBeforeEnter,s=t.presenceAffectsLayout,l=void 0===s||s,u=Mn(function(){var t=Hh(),e=Mn((0,k.useState)(0),2),n=e[0],r=e[1],i=(0,k.useCallback)((function(){t.current&&r(n+1)}),[n]);return[(0,k.useCallback)((function(){return fr.postRender(i)}),[i]),n]}(),1),c=u[0],h=(0,k.useContext)(ns).forceRender;h&&(c=h);var d=Hh(),f=function(t){var e=[];return k.Children.forEach(t,(function(t){(0,k.isValidElement)(t)&&e.push(t)})),e}(e),p=f,m=new Set,g=(0,k.useRef)(p),y=(0,k.useRef)(new Map).current,v=(0,k.useRef)(!0);if(zn((function(){v.current=!1,function(t,e){t.forEach((function(t){var n=Fh(t);e.set(n,t)}))}(f,y),g.current=p})),cl((function(){v.current=!0,y.clear(),m.clear()})),v.current)return k.createElement(k.Fragment,null,p.map((function(t){return k.createElement(Bh,{key:Fh(t),isPresent:!0,initial:!!i&&void 0,presenceAffectsLayout:l},t)})));p=kn([],Mn(p),!1);for(var b=g.current.map(Fh),w=f.map(Fh),x=b.length,M=0;M<x;M++){var S=b[M];-1===w.indexOf(S)&&m.add(S)}return a&&m.size&&(p=[]),m.forEach((function(t){if(-1===w.indexOf(t)){var e=y.get(t);if(e){var r=b.indexOf(t);p.splice(r,0,k.createElement(Bh,{key:Fh(e),isPresent:!1,onExitComplete:function(){y.delete(t),m.delete(t);var e=g.current.findIndex((function(e){return e.key===t}));if(g.current.splice(e,1),!m.size){if(g.current=f,!1===d.current)return;c(),o&&o()}},custom:n,presenceAffectsLayout:l},e))}}})),p=p.map((function(t){var e=t.key;return m.has(e)?t:k.createElement(Bh,{key:Fh(t),isPresent:!0,presenceAffectsLayout:l},t)})),k.createElement(k.Fragment,null,m.size?p:p.map((function(t){return(0,k.cloneElement)(t)})))},Wh=__webpack_require__(2007),qh=__webpack_require__.n(Wh),Xh=__webpack_require__(9475),Zh=__webpack_require__.n(Xh),Yh=__webpack_require__(77),Kh=__webpack_require__.n(Yh),Gh=__webpack_require__(1725),Jh=__webpack_require__.n(Gh),Qh="bodyAttributes",_h="htmlAttributes",$h="titleAttributes",td={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},ed=(Object.keys(td).map((function(t){return td[t]})),"charset"),nd="cssText",rd="href",id="http-equiv",od="innerHTML",ad="itemprop",sd="name",ld="property",ud="rel",cd="src",hd="target",dd={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},fd="defaultTitle",pd="defer",md="encodeSpecialCharacters",gd="onChangeClientState",yd="titleTemplate",vd=Object.keys(dd).reduce((function(t,e){return t[dd[e]]=e,t}),{}),bd=[td.NOSCRIPT,td.SCRIPT,td.STYLE],wd="data-react-helmet",xd="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Md=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},kd=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Sd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cd=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},Pd=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e},Td=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Ad=function(t){var e=Vd(t,td.TITLE),n=Vd(t,yd);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=Vd(t,fd);return e||r||void 0},Nd=function(t){return Vd(t,gd)||function(){}},Od=function(t,e){return e.filter((function(e){return"undefined"!==typeof e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return Sd({},t,e)}),{})},jd=function(t,e){return e.filter((function(t){return"undefined"!==typeof t[td.BASE]})).map((function(t){return t[td.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},Ed=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||("undefined"!==typeof e[t]&&Hd("Helmet: "+t+' should be of type "Array". Instead found type "'+xd(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var i={};n.filter((function(t){for(var n=void 0,o=Object.keys(t),a=0;a<o.length;a++){var s=o[a],l=s.toLowerCase();-1===e.indexOf(l)||n===ud&&"canonical"===t[n].toLowerCase()||l===ud&&"stylesheet"===t[l].toLowerCase()||(n=l),-1===e.indexOf(s)||s!==od&&s!==nd&&s!==ad||(n=s)}if(!n||!t[n])return!1;var u=t[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],l=Jh()({},r[s],i[s]);r[s]=l}return t}),[]).reverse()},Vd=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},Id=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout((function(){Id(e)}),0)}}(),Rd=function(t){return clearTimeout(t)},zd="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Id:__webpack_require__.g.requestAnimationFrame||Id,Ld="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Rd:__webpack_require__.g.cancelAnimationFrame||Rd,Hd=function(t){return console&&"function"===typeof console.warn&&console.warn(t)},Bd=null,Dd=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,s=t.noscriptTags,l=t.onChangeClientState,u=t.scriptTags,c=t.styleTags,h=t.title,d=t.titleAttributes;Wd(td.BODY,r),Wd(td.HTML,i),Ud(h,d);var f={baseTag:qd(td.BASE,n),linkTags:qd(td.LINK,o),metaTags:qd(td.META,a),noscriptTags:qd(td.NOSCRIPT,s),scriptTags:qd(td.SCRIPT,u),styleTags:qd(td.STYLE,c)},p={},m={};Object.keys(f).forEach((function(t){var e=f[t],n=e.newTags,r=e.oldTags;n.length&&(p[t]=n),r.length&&(m[t]=f[t].oldTags)})),e&&e(),l(t,p,m)},Fd=function(t){return Array.isArray(t)?t.join(""):t},Ud=function(t,e){"undefined"!==typeof t&&document.title!==t&&(document.title=Fd(t)),Wd(td.TITLE,e)},Wd=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(wd),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(e),s=0;s<a.length;s++){var l=a[s],u=e[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===i.indexOf(l)&&i.push(l);var c=o.indexOf(l);-1!==c&&o.splice(c,1)}for(var h=o.length-1;h>=0;h--)n.removeAttribute(o[h]);i.length===o.length?n.removeAttribute(wd):n.getAttribute(wd)!==a.join(",")&&n.setAttribute(wd,a.join(","))}},qd=function(t,e){var n=document.head||document.querySelector(td.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===od)n.innerHTML=e.innerHTML;else if(r===nd)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var s="undefined"===typeof e[r]?"":e[r];n.setAttribute(r,s)}n.setAttribute(wd,"true"),i.some((function(t,e){return a=e,n.isEqualNode(t)}))?i.splice(a,1):o.push(n)})),i.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return n.appendChild(t)})),{oldTags:i,newTags:o}},Xd=function(t){return Object.keys(t).reduce((function(e,n){var r="undefined"!==typeof t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},Zd=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[dd[n]||n]=t[n],e}),e)},Yd=function(t,e,n){switch(t){case td.TITLE:return{toComponent:function(){return function(t,e,n){var r,i=((r={key:e})[wd]=!0,r),o=Zd(n,i);return[k.createElement(td.TITLE,o,e)]}(0,e.title,e.titleAttributes)},toString:function(){return function(t,e,n,r){var i=Xd(n),o=Fd(e);return i?"<"+t+' data-react-helmet="true" '+i+">"+Td(o,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+Td(o,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case Qh:case _h:return{toComponent:function(){return Zd(e)},toString:function(){return Xd(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,i=((r={key:n})[wd]=!0,r);return Object.keys(e).forEach((function(t){var n=dd[t]||t;if(n===od||n===nd){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),k.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var i=Object.keys(r).filter((function(t){return!(t===od||t===nd)})).reduce((function(t,e){var i="undefined"===typeof r[e]?e:e+'="'+Td(r[e],n)+'"';return t?t+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===bd.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+t+">")}),"")}(t,e,n)}}}},Kd=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,s=t.noscriptTags,l=t.scriptTags,u=t.styleTags,c=t.title,h=void 0===c?"":c,d=t.titleAttributes;return{base:Yd(td.BASE,e,r),bodyAttributes:Yd(Qh,n,r),htmlAttributes:Yd(_h,i,r),link:Yd(td.LINK,o,r),meta:Yd(td.META,a,r),noscript:Yd(td.NOSCRIPT,s,r),script:Yd(td.SCRIPT,l,r),style:Yd(td.STYLE,u,r),title:Yd(td.TITLE,{title:h,titleAttributes:d},r)}},Gd=function(t){var e,n;return n=e=function(e){function n(){return Md(this,n),Pd(this,e.apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e),n.prototype.shouldComponentUpdate=function(t){return!Kh()(this.props,t)},n.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case td.SCRIPT:case td.NOSCRIPT:return{innerHTML:e};case td.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,i=t.newChildProps,o=t.nestedChildren;return Sd({},r,((e={})[n.type]=[].concat(r[n.type]||[],[Sd({},i,this.mapNestedChildrenToProps(n,o))]),e))},n.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,i=t.newProps,o=t.newChildProps,a=t.nestedChildren;switch(r.type){case td.TITLE:return Sd({},i,((e={})[r.type]=a,e.titleAttributes=Sd({},o),e));case td.BODY:return Sd({},i,{bodyAttributes:Sd({},o)});case td.HTML:return Sd({},i,{htmlAttributes:Sd({},o)})}return Sd({},i,((n={})[r.type]=Sd({},o),n))},n.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=Sd({},e);return Object.keys(t).forEach((function(e){var r;n=Sd({},n,((r={})[e]=t[e],r))})),n},n.prototype.warnOnInvalidChildren=function(t,e){return!0},n.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return k.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,o=i.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[vd[n]||n]=t[n],e}),e)}(Cd(i,["children"]));switch(n.warnOnInvalidChildren(t,o),t.type){case td.LINK:case td.META:case td.NOSCRIPT:case td.SCRIPT:case td.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},n.prototype.render=function(){var e=this.props,n=e.children,r=Cd(e,["children"]),i=Sd({},r);return n&&(i=this.mapChildrenToProps(n,i)),k.createElement(t,i)},kd(n,null,[{key:"canUseDOM",set:function(e){t.canUseDOM=e}}]),n}(k.Component),e.propTypes={base:qh().object,bodyAttributes:qh().object,children:qh().oneOfType([qh().arrayOf(qh().node),qh().node]),defaultTitle:qh().string,defer:qh().bool,encodeSpecialCharacters:qh().bool,htmlAttributes:qh().object,link:qh().arrayOf(qh().object),meta:qh().arrayOf(qh().object),noscript:qh().arrayOf(qh().object),onChangeClientState:qh().func,script:qh().arrayOf(qh().object),style:qh().arrayOf(qh().object),title:qh().string,titleAttributes:qh().object,titleTemplate:qh().string},e.defaultProps={defer:!0,encodeSpecialCharacters:!0},e.peek=t.peek,e.rewind=function(){var e=t.rewind();return e||(e=Kd({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},n}(Zh()((function(t){return{baseTag:jd([rd,hd],t),bodyAttributes:Od(Qh,t),defer:Vd(t,pd),encode:Vd(t,md),htmlAttributes:Od(_h,t),linkTags:Ed(td.LINK,[ud,rd],t),metaTags:Ed(td.META,[sd,ed,id,ld,ad],t),noscriptTags:Ed(td.NOSCRIPT,[od],t),onChangeClientState:Nd(t),scriptTags:Ed(td.SCRIPT,[cd,od],t),styleTags:Ed(td.STYLE,[nd],t),title:Ad(t),titleAttributes:Od($h,t)}}),(function(t){Bd&&Ld(Bd),t.defer?Bd=zd((function(){Dd(t,(function(){Bd=null}))})):(Dd(t),Bd=null)}),Kd)((function(){return null})));Gd.renderStatic=Gd.rewind;var Jd=__webpack_require__(184);const Qd=k.createContext({openMenu:()=>{},closeMenu:()=>{},setMenuPosition:t=>{},checkMenuPosition:t=>{},setMenuItems:t=>{},open:0,show:0,position:[0,0],items:[]}),_d=()=>k.useContext(Qd),$d=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];(0,k.useEffect)((()=>{const r=r=>{if(t.current&&!t.current.contains(r.target)){void 0===n.find((t=>r.target.classList.contains(t)))&&e()}};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}}),[t])},tf=pn.div`
  background: ${Tc};
  box-sizing: border-box;
  width: ${250}px;
  padding: 0.25rem 0.75rem;
  display: flex;
  flex-flow: column wrap;
  transition: opacity 0.1s;
  border-radius: 1rem;

  > button:last-child {
    border: none;
  }
`,ef=pn.button`
  border-bottom: 1px solid ${Sc};
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 0.75rem 0.5rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  color: ${ic};

  &:hover {
    opacity: 0.75;
  }

  .title {
    color: ${ic};
    padding: 0 0 0 0.75rem;
    font-size: 1rem;
  }
`,nf=()=>{const t=_d(),{position:e}=t,n=(0,k.useRef)(null);(0,k.useEffect)((()=>{1===t.open&&t.checkMenuPosition(n)}),[t.open]),(0,k.useEffect)((()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)})),[]);const r=()=>{t.closeMenu()};return $d(n,(()=>{t.closeMenu()}),["ignore-open-menu-button"]),(0,Jd.jsx)(Jd.Fragment,{children:1===t.open&&(0,Jd.jsx)(tf,{ref:n,style:{position:"absolute",left:`${e[0]}px`,top:`${e[1]}px`,zIndex:99,opacity:1===t.show?1:0},children:t.items.map(((e,n)=>{const{icon:r,title:i,wrap:o,cb:a}=e;return(0,Jd.jsxs)(ef,{onClick:()=>{a(),t.closeMenu()},children:[r,(0,Jd.jsx)("div",{className:"title",children:i})]},`menu_item_${n}`)}))})})},rf=k.createContext({openPalette:()=>{},closePalette:()=>{},setPalettePosition:t=>{},checkPalettePosition:t=>{},open:0,show:0,position:[0,0]}),of=()=>k.useContext(rf);var af=__webpack_require__(518),sf=__webpack_require__.n(af);function lf(t){return"function"===typeof t}function uf(t){return null===t}function cf(t){return"undefined"===typeof t}function hf(t,e){if(!t)throw new Error(lf(e)?e():e)}const df=new Array(256),ff=new Array(65536),pf={},mf={};for(let Set=0;Set<256;Set++){const t=Set.toString(16).padStart(2,"0");df[Set]=t,pf[t]=Set}for(let Set=0;Set<256;Set++)for(let t=0;t<256;t++){const e=df[Set]+df[t],n=Set<<8|t;ff[n]=e,mf[e]=n}const gf=/^0x[\da-fA-F]+$/,yf=/^[\da-fA-F]+$/;function vf(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=arguments.length>2?arguments[2]:void 0;return"string"===typeof t&&("0x"===t||gf.test(t))&&(-1===e?n||t.length%2===0:t.length===2+Math.ceil(e/4))}function bf(t){if(!t||"0x"===t)return"";if(gf.test(t))return t.substring(2);if(yf.test(t))return t;throw new Error(`Expected hex value to convert, found '${t}'`)}function wf(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;if(!t)return new Uint8Array;const n=bf(t).toLowerCase(),r=n.length/2,i=Math.ceil(-1===e?r:e/8),o=new Uint8Array(i),a=i>r?i-r:0,s=new DataView(o.buffer,a),l=(i-a)%2,u=i-a-l;for(let c=0;c<u;c+=2){const t=2*c;s.setUint16(c,mf[n.substring(t,t+4)])}return l&&s.setUint8(u,pf[n.substring(n.length-2)]),o}const xf="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:function(t){return t("return this")}(Function);const Mf="function"===typeof xf.BigInt&&"function"===typeof xf.BigInt.asIntN?xf.BigInt:()=>Number.NaN,kf="function"===typeof Mf&&"function"===typeof Mf.asIntN,Sf="undefined"!==typeof Buffer;function Cf(t){return t instanceof Uint8Array}function Pf(t){return t?Array.isArray(t)||function(t){return Sf&&Buffer.isBuffer(t)}(t)?new Uint8Array(t):Cf(t)?t:vf(t)?wf(t):N(t):new Uint8Array}function Tf(){let t=0,e=0;const n=new Array(arguments.length);for(let i=0;i<arguments.length;i++)n[i]=Pf(i<0||arguments.length<=i?void 0:arguments[i]),t+=n[i].length;const r=new Uint8Array(t);for(let i=0;i<n.length;i++)r.set(n[i],e),e+=n[i].length;return r}var Af=__webpack_require__(3704);function Nf(t,e){let{coder:n,ipfs:r}=t;return(t,i)=>(e(t,i),n.decode(r&&i?t.substring(1):t))}function Of(t){let{coder:e,ipfs:n}=t;return(t,r)=>{const i=e.encode(Pf(t));return n&&r?`${n}${i}`:i}}function jf(t){return(e,n)=>{try{return t(e,n)}catch(r){return!1}}}function Ef(t){let{chars:e,ipfs:n,type:r}=t;return(t,i)=>{hf(t&&"string"===typeof t,(()=>`Expected non-null, non-empty ${r} string input`)),n&&i&&hf(t[0]===n,(()=>`Expected ipfs-compatible ${r} to start with '${n}'`));for(let n=i?1:0;n<t.length;n++)hf(e.includes(t[n])||"="===t[n]&&(n===t.length-1||!e.includes(t[n+1])),(()=>`Invalid ${r} character "${t[n]}" (0x${t.charCodeAt(n).toString(16)}) at index ${n}`));return!0}}const Vf={chars:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",coder:Af.Jq,ipfs:"z",type:"base58"},If=Ef(Vf),Rf=Nf(Vf,If),zf=Of(Vf),Lf=(jf(If),"object"===typeof self&&"crypto"in self&&self.crypto,t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))),Hf=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Bf=(t,e)=>t<<32-e|t>>>e;if(!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));(()=>{const t="undefined"!==typeof module&&"function"===typeof module.require&&module.require.bind(module);try{if(t){const{setImmediate:e}=t("timers");return()=>new Promise((t=>e(t)))}}catch(pdt){}})();function Df(t){if("string"===typeof t&&(t=function(t){if("string"!==typeof t)throw new TypeError("utf8ToBytes expected string, got "+typeof t);return(new TextEncoder).encode(t)}(t)),!(t instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof t})`);return t}function Ff(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function Uf(t){if("function"!==typeof t||"function"!==typeof t.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");Ff(t.outputLen),Ff(t.blockLen)}class Wf{clone(){return this._cloneInto()}}function qf(t,e){if(void 0!==e&&("object"!==typeof e||(n=e,"[object Object]"!==Object.prototype.toString.call(n)||n.constructor!==Object)))throw new TypeError("Options should be object or undefined");var n;return Object.assign(t,e)}function Xf(t){const e=e=>t().update(Df(e)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function Zf(t){const e=(e,n)=>t(n).update(Df(e)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=e=>t(e),e}const Yf=new Uint8Array([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3,11,8,12,0,5,2,15,13,10,14,3,6,7,1,9,4,7,9,3,1,13,12,11,14,2,6,5,10,4,0,15,8,9,0,5,7,2,4,10,15,14,1,11,12,6,8,3,13,2,12,6,10,0,11,8,3,4,13,7,5,15,14,1,9,12,5,1,15,14,13,4,10,0,7,6,3,9,2,8,11,13,11,7,14,12,1,3,9,5,0,15,4,8,6,2,10,6,15,14,9,11,3,0,8,12,2,13,7,1,4,10,5,10,2,8,4,7,6,1,5,15,11,9,14,3,12,13,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,10,4,8,9,15,13,6,1,12,0,2,11,7,5,3]);class Kf extends Wf{constructor(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;if(super(),this.blockLen=t,this.outputLen=e,this.length=0,this.pos=0,this.finished=!1,this.destroyed=!1,Ff(t),Ff(e),Ff(r),e<0||e>r)throw new Error("Blake2: outputLen bigger than keyLen");if(void 0!==n.key&&(n.key.length<1||n.key.length>r))throw new Error(`Key should be up 1..${r} byte long or undefined`);if(void 0!==n.salt&&n.salt.length!==i)throw new Error(`Salt should be ${i} byte long or undefined`);if(void 0!==n.personalization&&n.personalization.length!==o)throw new Error(`Personalization should be ${o} byte long or undefined`);this.buffer32=Lf(this.buffer=new Uint8Array(t))}update(t){if(this.destroyed)throw new Error("instance is destroyed");const{finished:e,blockLen:n,buffer:r,buffer32:i}=this;if(e)throw new Error("digest() was already called");const o=(t=Df(t)).length;for(let a=0;a<o;){this.pos===n&&(this.compress(i,0,!1),this.pos=0);const e=Math.min(n-this.pos,o-a),s=t.byteOffset+a;if(e!==n||s%4||!(a+e<o))r.set(t.subarray(a,a+e),this.pos),this.pos+=e,this.length+=e,a+=e;else{const e=new Uint32Array(t.buffer,s,Math.floor((o-a)/4));for(let t=0;a+n<o;t+=i.length,a+=n)this.length+=n,this.compress(e,t,!1)}}return this}digestInto(t){if(this.destroyed)throw new Error("instance is destroyed");if(!(t instanceof Uint8Array)||t.length<this.outputLen)throw new Error("_Blake2: Invalid output buffer");const{finished:e,pos:n,buffer32:r}=this;if(e)throw new Error("digest() was already called");this.finished=!0,this.buffer.subarray(n).fill(0),this.compress(r,0,!0);const i=Lf(t);this.get().forEach(((t,e)=>i[e]=t))}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const n=t.slice(0,e);return this.destroy(),n}_cloneInto(t){const{buffer:e,length:n,finished:r,destroyed:i,outputLen:o,pos:a}=this;return t||(t=new this.constructor({dkLen:o})),t.set(...this.get()),t.length=n,t.finished=r,t.destroyed=i,t.outputLen=o,t.buffer.set(e),t.pos=a,t}}const Gf=BigInt(2**32-1),Jf=BigInt(32);function Qf(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?{h:Number(t&Gf),l:Number(t>>Jf&Gf)}:{h:0|Number(t>>Jf&Gf),l:0|Number(t&Gf)}}function _f(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Uint32Array(t.length),r=new Uint32Array(t.length);for(let i=0;i<t.length;i++){const{h:o,l:a}=Qf(t[i],e);[n[i],r[i]]=[o,a]}return[n,r]}const $f=(t,e,n)=>t>>>n,tp=(t,e,n)=>t<<32-n|e>>>n,ep=(t,e,n)=>t>>>n|e<<32-n,np=(t,e,n)=>t<<32-n|e>>>n,rp=(t,e,n)=>t<<64-n|e>>>n-32,ip=(t,e,n)=>t>>>n-32|e<<64-n,op=(t,e)=>e;function ap(t,e,n,r){const i=(e>>>0)+(r>>>0);return{h:t+n+(i/2**32|0)|0,l:0|i}}const sp=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),lp=(t,e,n,r)=>e+n+r+(t/2**32|0)|0,up=(t,e,n,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),cp=(t,e,n,r,i)=>e+n+r+i+(t/2**32|0)|0,hp=(t,e,n,r,i)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0)+(i>>>0),dp=(t,e,n,r,i,o)=>e+n+r+i+o+(t/2**32|0)|0,fp=new Uint32Array([4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225]),pp=new Uint32Array(32);function mp(t,e,n,r,i,o){const a=i[o],s=i[o+1];let l=pp[2*t],u=pp[2*t+1],c=pp[2*e],h=pp[2*e+1],d=pp[2*n],f=pp[2*n+1],p=pp[2*r],m=pp[2*r+1],g=sp(l,c,a);var y;u=lp(g,u,h,s),l=0|g,({Dh:m,Dl:p}={Dh:m^u,Dl:p^l}),({Dh:m,Dl:p}={Dh:op(0,p),Dl:(y=m,y)}),({h:f,l:d}=ap(f,d,m,p)),({Bh:h,Bl:c}={Bh:h^f,Bl:c^d}),({Bh:h,Bl:c}={Bh:ep(h,c,24),Bl:np(h,c,24)}),pp[2*t]=l,pp[2*t+1]=u,pp[2*e]=c,pp[2*e+1]=h,pp[2*n]=d,pp[2*n+1]=f,pp[2*r]=p,pp[2*r+1]=m}function gp(t,e,n,r,i,o){const a=i[o],s=i[o+1];let l=pp[2*t],u=pp[2*t+1],c=pp[2*e],h=pp[2*e+1],d=pp[2*n],f=pp[2*n+1],p=pp[2*r],m=pp[2*r+1],g=sp(l,c,a);u=lp(g,u,h,s),l=0|g,({Dh:m,Dl:p}={Dh:m^u,Dl:p^l}),({Dh:m,Dl:p}={Dh:ep(m,p,16),Dl:np(m,p,16)}),({h:f,l:d}=ap(f,d,m,p)),({Bh:h,Bl:c}={Bh:h^f,Bl:c^d}),({Bh:h,Bl:c}={Bh:rp(h,c,63),Bl:ip(h,c,63)}),pp[2*t]=l,pp[2*t+1]=u,pp[2*e]=c,pp[2*e+1]=h,pp[2*n]=d,pp[2*n+1]=f,pp[2*r]=p,pp[2*r+1]=m}class yp extends Kf{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(128,void 0===t.dkLen?64:t.dkLen,t,64,16,16),this.v0l=0|fp[0],this.v0h=0|fp[1],this.v1l=0|fp[2],this.v1h=0|fp[3],this.v2l=0|fp[4],this.v2h=0|fp[5],this.v3l=0|fp[6],this.v3h=0|fp[7],this.v4l=0|fp[8],this.v4h=0|fp[9],this.v5l=0|fp[10],this.v5h=0|fp[11],this.v6l=0|fp[12],this.v6h=0|fp[13],this.v7l=0|fp[14],this.v7h=0|fp[15];const e=t.key?t.key.length:0;if(this.v0l^=this.outputLen|e<<8|65536|1<<24,t.salt){const e=Lf(Df(t.salt));this.v4l^=e[0],this.v4h^=e[1],this.v5l^=e[2],this.v5h^=e[3]}if(t.personalization){const e=Lf(Df(t.personalization));this.v6l^=e[0],this.v6h^=e[1],this.v7l^=e[2],this.v7h^=e[3]}if(t.key){const e=new Uint8Array(this.blockLen);e.set(Df(t.key)),this.update(e)}}get(){let{v0l:t,v0h:e,v1l:n,v1h:r,v2l:i,v2h:o,v3l:a,v3h:s,v4l:l,v4h:u,v5l:c,v5h:h,v6l:d,v6h:f,v7l:p,v7h:m}=this;return[t,e,n,r,i,o,a,s,l,u,c,h,d,f,p,m]}set(t,e,n,r,i,o,a,s,l,u,c,h,d,f,p,m){this.v0l=0|t,this.v0h=0|e,this.v1l=0|n,this.v1h=0|r,this.v2l=0|i,this.v2h=0|o,this.v3l=0|a,this.v3h=0|s,this.v4l=0|l,this.v4h=0|u,this.v5l=0|c,this.v5h=0|h,this.v6l=0|d,this.v6h=0|f,this.v7l=0|p,this.v7h=0|m}compress(t,e,n){this.get().forEach(((t,e)=>pp[e]=t)),pp.set(fp,16);let{h:r,l:i}=Qf(BigInt(this.length));pp[24]=fp[8]^i,pp[25]=fp[9]^r,n&&(pp[28]=~pp[28],pp[29]=~pp[29]);let o=0;const a=Yf;for(let s=0;s<12;s++)mp(0,4,8,12,t,e+2*a[o++]),gp(0,4,8,12,t,e+2*a[o++]),mp(1,5,9,13,t,e+2*a[o++]),gp(1,5,9,13,t,e+2*a[o++]),mp(2,6,10,14,t,e+2*a[o++]),gp(2,6,10,14,t,e+2*a[o++]),mp(3,7,11,15,t,e+2*a[o++]),gp(3,7,11,15,t,e+2*a[o++]),mp(0,5,10,15,t,e+2*a[o++]),gp(0,5,10,15,t,e+2*a[o++]),mp(1,6,11,12,t,e+2*a[o++]),gp(1,6,11,12,t,e+2*a[o++]),mp(2,7,8,13,t,e+2*a[o++]),gp(2,7,8,13,t,e+2*a[o++]),mp(3,4,9,14,t,e+2*a[o++]),gp(3,4,9,14,t,e+2*a[o++]);this.v0l^=pp[0]^pp[16],this.v0h^=pp[1]^pp[17],this.v1l^=pp[2]^pp[18],this.v1h^=pp[3]^pp[19],this.v2l^=pp[4]^pp[20],this.v2h^=pp[5]^pp[21],this.v3l^=pp[6]^pp[22],this.v3h^=pp[7]^pp[23],this.v4l^=pp[8]^pp[24],this.v4h^=pp[9]^pp[25],this.v5l^=pp[10]^pp[26],this.v5h^=pp[11]^pp[27],this.v6l^=pp[12]^pp[28],this.v6h^=pp[13]^pp[29],this.v7l^=pp[14]^pp[30],this.v7h^=pp[15]^pp[31],pp.fill(0)}destroy(){this.destroyed=!0,this.buffer32.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const vp=Zf((t=>new yp(t)));function bp(t,e,n){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,n)}function wp(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function xp(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,wp(t,e,"get"))}function Mp(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,wp(t,e,"set"),n),n}const kp="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:function(t){return t("return this")}(Function);const Sp=function(t,e){return"undefined"===typeof kp[t]?e:kp[t]}("TextDecoder",class{constructor(t){}decode(t){let e="";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e}}),Cp=new Sp("utf-8");function Pp(t){return null!==t&&void 0!==t&&t.length?Cp.decode(t):""}function Tp(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const Ap="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:function(t){return t("return this")}(Function);const Np={getRandomValues:function(t){return Ap.crypto.getRandomValues(t)}},Op={crypto:Np};var jp=new WeakMap;class Ep{constructor(t){bp(this,jp,{writable:!0,value:void 0}),Tp(this,"abort",(()=>{throw new Error("abort")})),Tp(this,"__wbindgen_is_undefined",(t=>void 0===xp(this,jp).getObject(t))),Tp(this,"__wbindgen_throw",((t,e)=>{throw new Error(xp(this,jp).getString(t,e))})),Tp(this,"__wbg_self_1b7a39e3a92c949c",(()=>xp(this,jp).addObject(Op))),Tp(this,"__wbg_require_604837428532a733",((t,e)=>{throw new Error(`Unable to require ${xp(this,jp).getString(t,e)}`)})),Tp(this,"__wbg_crypto_968f1772287e2df0",(t=>xp(this,jp).addObject(Np))),Tp(this,"__wbg_getRandomValues_a3d34b4fee3c2869",(t=>xp(this,jp).addObject(Np.getRandomValues))),Tp(this,"__wbg_getRandomValues_f5e14ab7ac8e995d",((t,e,n)=>{Np.getRandomValues(xp(this,jp).getU8a(e,n))})),Tp(this,"__wbg_randomFillSync_d5bd2d655fdf256a",((t,e,n)=>{throw new Error("randomFillsync is not available")})),Tp(this,"__wbindgen_object_drop_ref",(t=>{xp(this,jp).takeObject(t)})),Mp(this,jp,t)}}var Vp=new WeakMap,Ip=new WeakMap,Rp=new WeakMap,zp=new WeakMap,Lp=new WeakMap,Hp=new WeakMap,Bp=new WeakMap,Dp=new WeakMap,Fp=new WeakMap,Up=new WeakMap;const Wp=Uint8Array,qp=Uint16Array,Xp=Uint32Array,Zp=new Wp([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Yp=new Wp([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Kp=new Wp([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Gp=(t,e)=>{const n=new qp(31);for(let i=0;i<31;++i)n[i]=e+=1<<t[i-1];const r=new Xp(n[30]);for(let i=1;i<30;++i)for(let t=n[i];t<n[i+1];++t)r[t]=t-n[i]<<5|i;return[n,r]},[Jp,Qp]=Gp(Yp,2);Jp[28]=258,Qp[258]=28;const[_p]=Gp(Kp,0),$p=new qp(32768);for(let Set=0;Set<32768;++Set){let t=(43690&Set)>>>1|(21845&Set)<<1;t=(52428&t)>>>2|(13107&t)<<2,t=(61680&t)>>>4|(3855&t)<<4,$p[Set]=((65280&t)>>>8|(255&t)<<8)>>>1}const tm=(t,e,n)=>{const r=t.length;let i=0;const o=new qp(e);for(;i<r;++i)++o[t[i]-1];const a=new qp(e);for(i=0;i<e;++i)a[i]=a[i-1]+o[i-1]<<1;let s;if(n){s=new qp(1<<e);const n=15-e;for(i=0;i<r;++i)if(t[i]){const r=i<<4|t[i],o=e-t[i];let l=a[t[i]-1]++<<o;for(const t=l|(1<<o)-1;l<=t;++l)s[$p[l]>>>n]=r}}else for(s=new qp(r),i=0;i<r;++i)s[i]=$p[a[t[i]-1]++]>>>15-t[i];return s},em=new Wp(288);for(let Set=0;Set<144;++Set)em[Set]=8;for(let Set=144;Set<256;++Set)em[Set]=9;for(let Set=256;Set<280;++Set)em[Set]=7;for(let Set=280;Set<288;++Set)em[Set]=8;const nm=new Wp(32);for(let Set=0;Set<32;++Set)nm[Set]=5;const rm=tm(em,9,1),im=tm(nm,5,1),om=(t,e,n)=>{const r=e>>>3;return(t[r]|t[r+1]<<8)>>>(7&e)&n},am=(t,e)=>{const n=e>>>3;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>>(7&e)},sm=t=>(t>>>3)+(7&t&&1),lm=t=>{let e=t[0];for(let n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},um=(t,e,n)=>{const r=!n||n.i;n||(n={});const i=t.length,o=!e||!r;e||(e=new Wp(3*i));const a=t=>{let n=e.length;if(t>n){const r=new Wp(Math.max(n<<1,t));r.set(e),e=r}};let s=n.f||0,l=n.p||0,u=n.b||0,c=n.l,h=n.d,d=n.m,f=n.n;if(s&&!c)return e;const p=i<<3;do{if(!c){n.f=s=om(t,l,1);const m=om(t,l+1,3);if(l+=3,!m){const s=sm(l)+4,c=t[s-4]|t[s-3]<<8,h=s+c;if(h>i){if(r)throw"unexpected EOF";break}o&&a(u+c),e.set(t.subarray(s,h),u),n.b=u+=c,n.p=l=h<<3;continue}if(1==m)c=rm,h=im,d=9,f=5;else{if(2!=m)throw"invalid block type";{const e=om(t,l,31)+257,n=om(t,l+10,15)+4,i=e+om(t,l+5,31)+1;l+=14;const o=new Wp(i),a=new Wp(19);for(let r=0;r<n;++r)a[Zp[r]]=om(t,l+3*r,7);l+=3*n;const s=lm(a),u=(1<<s)-1;if(!r&&l+i*(s+7)>p)break;const m=tm(a,s,1);for(let r=0;r<i;){const e=m[om(t,l,u)];l+=15&e;const n=e>>>4;if(n<16)o[r++]=n;else{let e=0,i=0;for(16==n?(i=3+om(t,l,3),l+=2,e=o[r-1]):17==n?(i=3+om(t,l,7),l+=3):18==n&&(i=11+om(t,l,127),l+=7);i--;)o[r++]=e}}const g=o.subarray(0,e),y=o.subarray(e);d=lm(g),f=lm(y),c=tm(g,d,1),h=tm(y,f,1)}}if(l>p)throw"unexpected EOF"}o&&a(u+131072);const m=(1<<d)-1,g=(1<<f)-1,y=d+f+18;for(;r||l+y<p;){const n=c[am(t,l)&m],r=n>>>4;if(l+=15&n,l>p)throw"unexpected EOF";if(!n)throw"invalid length/literal";if(r<256)e[u++]=r;else{if(256==r){c=void 0;break}{let n=r-254;if(r>264){const e=r-257,i=Yp[e];n=om(t,l,(1<<i)-1)+Jp[e],l+=i}const i=h[am(t,l)&g],s=i>>>4;if(!i)throw"invalid distance";l+=15&i;let c=_p[s];if(s>3){const e=Kp[s];c+=am(t,l)&(1<<e)-1,l+=e}if(l>p)throw"unexpected EOF";o&&a(u+131072);const d=u+n;for(;u<d;u+=4)e[u]=e[u-c],e[u+1]=e[u+1-c],e[u+2]=e[u+2-c],e[u+3]=e[u+3-c];u=d}}}n.l=c,n.p=l,n.b=u,c&&(s=1,n.m=d,n.d=h,n.n=f)}while(!s);return u==e.length?e:((t,e,n)=>{(null==e||e<0)&&(e=0),(null==n||n>t.length)&&(n=t.length);const r=new(t instanceof qp?qp:t instanceof Xp?Xp:Wp)(n-e);return r.set(t.subarray(e,n)),r})(e,0,u)};var cm=__webpack_require__(9355);const hm=function(t,e){return um(((t=>{if(8!=(15&t[0])||t[0]>>>4>7||(t[0]<<8|t[1])%31)throw"invalid zlib data";if(32&t[1])throw"invalid zlib data: preset dictionaries not supported"})(t),t.subarray(2,-4)),e)}(function(t){const e=[];let n=0,r=0;for(let i=0;i<t.length&&"="!==t[i];i++)n=n<<6|"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t[i]),(r+=6)>=8&&e.push(n>>>(r-=8)&255);return Uint8Array.from(e)}(cm.bytes),new Uint8Array(cm.sizeUncompressed)),dm=function(t,e,n){return async r=>{const i={error:null,type:"none",wasm:null};try{hf("object"===typeof WebAssembly&&"function"===typeof WebAssembly.instantiate&&e&&e.length,"WebAssembly is not available in your environment");const t=await WebAssembly.instantiate(e,{wbg:r});i.wasm=t.instance.exports,i.type="wasm"}catch(o){n?(i.wasm=n(r),i.type="asm"):(i.error=`FATAL: Unable to initialize @polkadot/wasm-${t}:: ${o.message}`,console.error(i.error))}return i}}("crypto",hm,null),fm=new class{constructor(t){bp(this,Vp,{writable:!0,value:void 0}),bp(this,Ip,{writable:!0,value:void 0}),bp(this,Rp,{writable:!0,value:void 0}),bp(this,zp,{writable:!0,value:void 0}),bp(this,Lp,{writable:!0,value:void 0}),bp(this,Hp,{writable:!0,value:void 0}),bp(this,Bp,{writable:!0,value:void 0}),bp(this,Dp,{writable:!0,value:void 0}),bp(this,Fp,{writable:!0,value:void 0}),bp(this,Up,{writable:!0,value:void 0}),Mp(this,Rp,t),Mp(this,Vp,null),Mp(this,Ip,null),Mp(this,zp,new Array(32).fill(void 0).concat(void 0,null,!0,!1)),Mp(this,Lp,xp(this,zp).length),Mp(this,Up,"none"),Mp(this,Hp,null),Mp(this,Bp,null),Mp(this,Dp,null),Mp(this,Fp,{...new Ep(this)})}get error(){return xp(this,Bp)}get type(){return xp(this,Up)}get wbg(){return xp(this,Fp)}get wasm(){return xp(this,Hp)}async init(t){xp(this,Dp)&&!t||Mp(this,Dp,(t||xp(this,Rp))(xp(this,Fp)));const{error:e,type:n,wasm:r}=await xp(this,Dp);return Mp(this,Up,n),Mp(this,Hp,r),Mp(this,Bp,e),xp(this,Hp)}getObject(t){return xp(this,zp)[t]}dropObject(t){t<36||(xp(this,zp)[t]=xp(this,Lp),Mp(this,Lp,t))}takeObject(t){const e=this.getObject(t);return this.dropObject(t),e}addObject(t){xp(this,Lp)===xp(this,zp).length&&xp(this,zp).push(xp(this,zp).length+1);const e=xp(this,Lp);return Mp(this,Lp,xp(this,zp)[e]),xp(this,zp)[e]=t,e}getInt32(){return null!==xp(this,Vp)&&xp(this,Vp).buffer===xp(this,Hp).memory.buffer||Mp(this,Vp,new Int32Array(xp(this,Hp).memory.buffer)),xp(this,Vp)}getUint8(){return null!==xp(this,Ip)&&xp(this,Ip).buffer===xp(this,Hp).memory.buffer||Mp(this,Ip,new Uint8Array(xp(this,Hp).memory.buffer)),xp(this,Ip)}getU8a(t,e){return this.getUint8().subarray(t/1,t/1+e)}getString(t,e){return Pp(this.getU8a(t,e))}allocU8a(t){const e=xp(this,Hp).__wbindgen_malloc(1*t.length);return this.getUint8().set(t,e/1),[e,t.length]}allocString(t){return this.allocU8a(N(t))}resultU8a(){const t=this.getInt32()[2],e=this.getInt32()[3],n=this.getU8a(t,e).slice();return xp(this,Hp).__wbindgen_free(t,1*e),n}resultString(){return Pp(this.resultU8a())}}(dm);function pm(t){return function(){hf(fm.wasm,"The WASM interface has not been initialized. Ensure that you wait for the initialization Promise with waitReady() from @polkadot/wasm-crypto (or cryptoWaitReady() from @polkadot/util-crypto) before attempting to use WASM-only interfaces.");for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t(fm.wasm,...n)}}pm(((t,e)=>(t.ext_bip39_generate(8,e),fm.resultString())));const mm=pm(((t,e)=>(t.ext_bip39_to_entropy(8,...fm.allocString(e)),fm.resultU8a()))),gm=pm(((t,e,n)=>(t.ext_bip39_to_mini_secret(8,...fm.allocString(e),...fm.allocString(n)),fm.resultU8a()))),ym=pm(((t,e,n)=>(t.ext_bip39_to_seed(8,...fm.allocString(e),...fm.allocString(n)),fm.resultU8a()))),vm=pm(((t,e)=>0!==t.ext_bip39_validate(...fm.allocString(e)))),bm=pm(((t,e)=>(t.ext_ed_from_seed(8,...fm.allocU8a(e)),fm.resultU8a()))),wm=pm(((t,e,n,r)=>(t.ext_ed_sign(8,...fm.allocU8a(e),...fm.allocU8a(n),...fm.allocU8a(r)),fm.resultU8a()))),xm=pm(((t,e,n,r)=>0!==t.ext_ed_verify(...fm.allocU8a(e),...fm.allocU8a(n),...fm.allocU8a(r)))),Mm=pm(((t,e)=>(t.ext_secp_from_seed(8,...fm.allocU8a(e)),fm.resultU8a()))),km=pm(((t,e)=>(t.ext_secp_pub_compress(8,...fm.allocU8a(e)),fm.resultU8a()))),Sm=pm(((t,e)=>(t.ext_secp_pub_expand(8,...fm.allocU8a(e)),fm.resultU8a()))),Cm=pm(((t,e,n,r)=>(t.ext_secp_recover(8,...fm.allocU8a(e),...fm.allocU8a(n),r),fm.resultU8a()))),Pm=pm(((t,e,n)=>(t.ext_secp_sign(8,...fm.allocU8a(e),...fm.allocU8a(n)),fm.resultU8a()))),Tm=pm(((t,e,n)=>(t.ext_sr_derive_keypair_hard(8,...fm.allocU8a(e),...fm.allocU8a(n)),fm.resultU8a()))),Am=pm(((t,e,n)=>(t.ext_sr_derive_keypair_soft(8,...fm.allocU8a(e),...fm.allocU8a(n)),fm.resultU8a()))),Nm=(pm(((t,e,n)=>(t.ext_sr_derive_public_soft(8,...fm.allocU8a(e),...fm.allocU8a(n)),fm.resultU8a()))),pm(((t,e)=>(t.ext_sr_from_seed(8,...fm.allocU8a(e)),fm.resultU8a())))),Om=pm(((t,e,n,r)=>(t.ext_sr_sign(8,...fm.allocU8a(e),...fm.allocU8a(n),...fm.allocU8a(r)),fm.resultU8a()))),jm=pm(((t,e,n,r)=>0!==t.ext_sr_verify(...fm.allocU8a(e),...fm.allocU8a(n),...fm.allocU8a(r)))),Em=(pm(((t,e,n)=>(t.ext_sr_agree(8,...fm.allocU8a(e),...fm.allocU8a(n)),fm.resultU8a()))),pm(((t,e,n,r,i)=>(t.ext_vrf_sign(8,...fm.allocU8a(e),...fm.allocU8a(n),...fm.allocU8a(r),...fm.allocU8a(i)),fm.resultU8a())))),Vm=pm(((t,e,n,r,i,o)=>0!==t.ext_vrf_verify(...fm.allocU8a(e),...fm.allocU8a(n),...fm.allocU8a(r),...fm.allocU8a(i),...fm.allocU8a(o)))),Im=pm(((t,e,n,r)=>(t.ext_blake2b(8,...fm.allocU8a(e),...fm.allocU8a(n),r),fm.resultU8a()))),Rm=pm(((t,e,n)=>(t.ext_hmac_sha256(8,...fm.allocU8a(e),...fm.allocU8a(n)),fm.resultU8a()))),zm=pm(((t,e,n)=>(t.ext_hmac_sha512(8,...fm.allocU8a(e),...fm.allocU8a(n)),fm.resultU8a()))),Lm=pm(((t,e)=>(t.ext_keccak256(8,...fm.allocU8a(e)),fm.resultU8a()))),Hm=pm(((t,e)=>(t.ext_keccak512(8,...fm.allocU8a(e)),fm.resultU8a()))),Bm=pm(((t,e,n,r)=>(t.ext_pbkdf2(8,...fm.allocU8a(e),...fm.allocU8a(n),r),fm.resultU8a()))),Dm=pm(((t,e,n,r,i,o)=>(t.ext_scrypt(8,...fm.allocU8a(e),...fm.allocU8a(n),r,i,o),fm.resultU8a()))),Fm=pm(((t,e)=>(t.ext_sha256(8,...fm.allocU8a(e)),fm.resultU8a()))),Um=pm(((t,e)=>(t.ext_sha512(8,...fm.allocU8a(e)),fm.resultU8a())));pm(((t,e,n)=>(t.ext_twox(8,...fm.allocU8a(e),n),fm.resultU8a())));function Wm(){return!!fm.wasm}function qm(t){const e=t.length%2,n=t.length-e,r=new DataView(t.buffer,t.byteOffset);let i="";for(let o=0;o<n;o+=2)i+=ff[r.getUint16(o)];return e&&(i+=df[r.getUint8(n)]),i}function Xm(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=Math.ceil(e/8);return`${n?"0x":""}${t&&t.length?r>0&&t.length>r?`${qm(t.subarray(0,r/2))}\u2026${qm(t.subarray(t.length-r/2))}`:qm(t):""}`}function Zm(t){return function(){return Xm(t(...arguments))}}function Ym(t,e){return(n,r)=>e(n,t,r)}function Km(t,e){return function(n){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,i=arguments.length>2?arguments[2]:void 0;const o=Pf(n);return!kf||!i&&Wm()?t[r](o):e[r](o)}}function Gm(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;const i=Math.ceil(e/8),o=Pf(t);return!kf||!r&&Wm()?Im(o,Pf(n),i):vp(o,{dkLen:i,key:n||void 0})}Zm(Gm);const Jm=N("SS58PRE");function Qm(t){return Gm(Tf(Jm,t),512)}function _m(t){const e=64&t[0]?2:1,n=1===e?t[0]:(63&t[0])<<2|t[1]>>6|(63&t[1])<<8,r=[34+e,35+e].includes(t.length),i=t.length-(r?2:1),o=Qm(t.subarray(0,i));return[0===(128&t[0])&&![46,47].includes(t[0])&&(r?t[t.length-2]===o[0]&&t[t.length-1]===o[1]:t[t.length-1]===o[0]),i,e,n]}const $m=[{prefix:0,network:"polkadot",displayName:"Polkadot Relay Chain",symbols:["DOT"],decimals:[10],standardAccount:"*25519",website:"https://polkadot.network"},{prefix:1,network:"BareSr25519",displayName:"Bare 32-bit Schnorr/Ristretto (S/R 25519) public key.",symbols:[],decimals:[],standardAccount:"Sr25519",website:null},{prefix:2,network:"kusama",displayName:"Kusama Relay Chain",symbols:["KSM"],decimals:[12],standardAccount:"*25519",website:"https://kusama.network"},{prefix:3,network:"BareEd25519",displayName:"Bare 32-bit Ed25519 public key.",symbols:[],decimals:[],standardAccount:"Ed25519",website:null},{prefix:4,network:"katalchain",displayName:"Katal Chain",symbols:[],decimals:[],standardAccount:"*25519",website:null},{prefix:5,network:"astar",displayName:"Astar Network",symbols:["ASTR"],decimals:[18],standardAccount:"*25519",website:"https://astar.network"},{prefix:6,network:"bifrost",displayName:"Bifrost",symbols:["BNC"],decimals:[12],standardAccount:"*25519",website:"https://bifrost.finance/"},{prefix:7,network:"edgeware",displayName:"Edgeware",symbols:["EDG"],decimals:[18],standardAccount:"*25519",website:"https://edgewa.re"},{prefix:8,network:"karura",displayName:"Karura",symbols:["KAR"],decimals:[12],standardAccount:"*25519",website:"https://karura.network/"},{prefix:9,network:"reynolds",displayName:"Laminar Reynolds Canary",symbols:["REY"],decimals:[18],standardAccount:"*25519",website:"http://laminar.network/"},{prefix:10,network:"acala",displayName:"Acala",symbols:["ACA"],decimals:[12],standardAccount:"*25519",website:"https://acala.network/"},{prefix:11,network:"laminar",displayName:"Laminar",symbols:["LAMI"],decimals:[18],standardAccount:"*25519",website:"http://laminar.network/"},{prefix:12,network:"polymesh",displayName:"Polymesh",symbols:["POLYX"],decimals:[6],standardAccount:"*25519",website:"https://polymath.network/"},{prefix:13,network:"integritee",displayName:"Integritee",symbols:["TEER"],decimals:[12],standardAccount:"*25519",website:"https://integritee.network"},{prefix:14,network:"totem",displayName:"Totem",symbols:["TOTEM"],decimals:[0],standardAccount:"*25519",website:"https://totemaccounting.com"},{prefix:15,network:"synesthesia",displayName:"Synesthesia",symbols:["SYN"],decimals:[12],standardAccount:"*25519",website:"https://synesthesia.network/"},{prefix:16,network:"kulupu",displayName:"Kulupu",symbols:["KLP"],decimals:[12],standardAccount:"*25519",website:"https://kulupu.network/"},{prefix:17,network:"dark",displayName:"Dark Mainnet",symbols:[],decimals:[],standardAccount:"*25519",website:null},{prefix:18,network:"darwinia",displayName:"Darwinia Network",symbols:["RING","KTON"],decimals:[9,9],standardAccount:"*25519",website:"https://darwinia.network/"},{prefix:20,network:"stafi",displayName:"Stafi",symbols:["FIS"],decimals:[12],standardAccount:"*25519",website:"https://stafi.io"},{prefix:22,network:"dock-pos-mainnet",displayName:"Dock Mainnet",symbols:["DCK"],decimals:[6],standardAccount:"*25519",website:"https://dock.io"},{prefix:23,network:"shift",displayName:"ShiftNrg",symbols:[],decimals:[],standardAccount:"*25519",website:null},{prefix:24,network:"zero",displayName:"ZERO",symbols:["ZERO"],decimals:[18],standardAccount:"*25519",website:"https://zero.io"},{prefix:25,network:"zero-alphaville",displayName:"ZERO Alphaville",symbols:["ZERO"],decimals:[18],standardAccount:"*25519",website:"https://zero.io"},{prefix:26,network:"jupiter",displayName:"Jupiter",symbols:["jDOT"],decimals:[10],standardAccount:"*25519",website:"https://jupiter.patract.io"},{prefix:27,network:"kabocha",displayName:"Kabocha",symbols:["KAB"],decimals:[12],standardAccount:"*25519",website:"https://kabocha.network"},{prefix:28,network:"subsocial",displayName:"Subsocial",symbols:[],decimals:[],standardAccount:"*25519",website:null},{prefix:29,network:"cord",displayName:"CORD Network",symbols:["DHI","WAY"],decimals:[12,12],standardAccount:"*25519",website:"https://cord.network/"},{prefix:30,network:"phala",displayName:"Phala Network",symbols:["PHA"],decimals:[12],standardAccount:"*25519",website:"https://phala.network"},{prefix:31,network:"litentry",displayName:"Litentry Network",symbols:["LIT"],decimals:[12],standardAccount:"*25519",website:"https://litentry.com/"},{prefix:32,network:"robonomics",displayName:"Robonomics",symbols:["XRT"],decimals:[9],standardAccount:"*25519",website:"https://robonomics.network"},{prefix:33,network:"datahighway",displayName:"DataHighway",symbols:[],decimals:[],standardAccount:"*25519",website:null},{prefix:34,network:"ares",displayName:"Ares Protocol",symbols:["ARES"],decimals:[12],standardAccount:"*25519",website:"https://www.aresprotocol.com/"},{prefix:35,network:"vln",displayName:"Valiu Liquidity Network",symbols:["USDv"],decimals:[15],standardAccount:"*25519",website:"https://valiu.com/"},{prefix:36,network:"centrifuge",displayName:"Centrifuge Chain",symbols:["CFG"],decimals:[18],standardAccount:"*25519",website:"https://centrifuge.io/"},{prefix:37,network:"nodle",displayName:"Nodle Chain",symbols:["NODL"],decimals:[18],standardAccount:"*25519",website:"https://nodle.io/"},{prefix:38,network:"kilt",displayName:"KILT Spiritnet",symbols:["KILT"],decimals:[15],standardAccount:"*25519",website:"https://kilt.io/"},{prefix:39,network:"mathchain",displayName:"MathChain mainnet",symbols:["MATH"],decimals:[18],standardAccount:"*25519",website:"https://mathwallet.org"},{prefix:40,network:"mathchain-testnet",displayName:"MathChain testnet",symbols:["MATH"],decimals:[18],standardAccount:"*25519",website:"https://mathwallet.org"},{prefix:41,network:"poli",displayName:"Polimec Chain",symbols:[],decimals:[],standardAccount:"*25519",website:"https://polimec.io/"},{prefix:42,network:"substrate",displayName:"Substrate",symbols:[],decimals:[],standardAccount:"*25519",website:"https://substrate.io/"},{prefix:43,network:"BareSecp256k1",displayName:"Bare 32-bit ECDSA SECP-256k1 public key.",symbols:[],decimals:[],standardAccount:"secp256k1",website:null},{prefix:44,network:"chainx",displayName:"ChainX",symbols:["PCX"],decimals:[8],standardAccount:"*25519",website:"https://chainx.org/"},{prefix:45,network:"uniarts",displayName:"UniArts Network",symbols:["UART","UINK"],decimals:[12,12],standardAccount:"*25519",website:"https://uniarts.me"},{prefix:46,network:"reserved46",displayName:"This prefix is reserved.",symbols:[],decimals:[],standardAccount:null,website:null},{prefix:47,network:"reserved47",displayName:"This prefix is reserved.",symbols:[],decimals:[],standardAccount:null,website:null},{prefix:48,network:"neatcoin",displayName:"Neatcoin Mainnet",symbols:["NEAT"],decimals:[12],standardAccount:"*25519",website:"https://neatcoin.org"},{prefix:49,network:"picasso",displayName:"Picasso",symbols:["PICA"],decimals:[12],standardAccount:"*25519",website:"https://picasso.composable.finance"},{prefix:50,network:"composable",displayName:"Composable",symbols:["LAYR"],decimals:[12],standardAccount:"*25519",website:"https://composable.finance"},{prefix:51,network:"oak",displayName:"OAK Network",symbols:["OAK"],decimals:[10],standardAccount:"*25519",website:"https://oak.tech"},{prefix:52,network:"KICO",displayName:"KICO",symbols:["KICO"],decimals:[14],standardAccount:"*25519",website:"https://dico.io"},{prefix:53,network:"DICO",displayName:"DICO",symbols:["DICO"],decimals:[14],standardAccount:"*25519",website:"https://dico.io"},{prefix:55,network:"xxnetwork",displayName:"xx network",symbols:["XX"],decimals:[9],standardAccount:"*25519",website:"https://xx.network"},{prefix:63,network:"hydradx",displayName:"HydraDX",symbols:["HDX"],decimals:[12],standardAccount:"*25519",website:"https://hydradx.io"},{prefix:65,network:"aventus",displayName:"AvN Mainnet",symbols:["AVT"],decimals:[18],standardAccount:"*25519",website:"https://aventus.io"},{prefix:66,network:"crust",displayName:"Crust Network",symbols:["CRU"],decimals:[12],standardAccount:"*25519",website:"https://crust.network"},{prefix:67,network:"genshiro",displayName:"Genshiro Network",symbols:["GENS","EQD","LPT0"],decimals:[9,9,9],standardAccount:"*25519",website:"https://genshiro.equilibrium.io"},{prefix:68,network:"equilibrium",displayName:"Equilibrium Network",symbols:["EQ"],decimals:[9],standardAccount:"*25519",website:"https://equilibrium.io"},{prefix:69,network:"sora",displayName:"SORA Network",symbols:["XOR"],decimals:[18],standardAccount:"*25519",website:"https://sora.org"},{prefix:73,network:"zeitgeist",displayName:"Zeitgeist",symbols:["ZTG"],decimals:[10],standardAccount:"*25519",website:"https://zeitgeist.pm"},{prefix:77,network:"manta",displayName:"Manta network",symbols:["MANTA"],decimals:[18],standardAccount:"*25519",website:"https://manta.network"},{prefix:78,network:"calamari",displayName:"Calamari: Manta Canary Network",symbols:["KMA"],decimals:[12],standardAccount:"*25519",website:"https://manta.network"},{prefix:88,network:"polkadex",displayName:"Polkadex Mainnet",symbols:["PDEX"],decimals:[12],standardAccount:"*25519",website:"https://polkadex.trade"},{prefix:98,network:"polkasmith",displayName:"PolkaSmith Canary Network",symbols:["PKS"],decimals:[18],standardAccount:"*25519",website:"https://polkafoundry.com"},{prefix:99,network:"polkafoundry",displayName:"PolkaFoundry Network",symbols:["PKF"],decimals:[18],standardAccount:"*25519",website:"https://polkafoundry.com"},{prefix:101,network:"origintrail-parachain",displayName:"OriginTrail Parachain",symbols:["OTP"],decimals:[12],standardAccount:"*25519",website:"https://parachain.origintrail.io/"},{prefix:105,network:"pontem-network",displayName:"Pontem Network",symbols:["PONT"],decimals:[10],standardAccount:"*25519",website:"https://pontem.network"},{prefix:110,network:"heiko",displayName:"Heiko",symbols:["HKO"],decimals:[12],standardAccount:"*25519",website:"https://parallel.fi/"},{prefix:113,network:"integritee-incognito",displayName:"Integritee Incognito",symbols:[],decimals:[],standardAccount:"*25519",website:"https://integritee.network"},{prefix:128,network:"clover",displayName:"Clover Finance",symbols:["CLV"],decimals:[18],standardAccount:"*25519",website:"https://clover.finance"},{prefix:131,network:"litmus",displayName:"Litmus Network",symbols:["LIT"],decimals:[12],standardAccount:"*25519",website:"https://litentry.com/"},{prefix:136,network:"altair",displayName:"Altair",symbols:["AIR"],decimals:[18],standardAccount:"*25519",website:"https://centrifuge.io/"},{prefix:172,network:"parallel",displayName:"Parallel",symbols:["PARA"],decimals:[12],standardAccount:"*25519",website:"https://parallel.fi/"},{prefix:252,network:"social-network",displayName:"Social Network",symbols:["NET"],decimals:[18],standardAccount:"*25519",website:"https://social.network"},{prefix:255,network:"quartz_mainnet",displayName:"QUARTZ by UNIQUE",symbols:["QTZ"],decimals:[15],standardAccount:"*25519",website:"https://unique.network"},{prefix:268,network:"pioneer_network",displayName:"Pioneer Network by Bit.Country",symbols:["NEER"],decimals:[18],standardAccount:"*25519",website:"https://bit.country"},{prefix:420,network:"sora_kusama_para",displayName:"SORA Kusama Parachain",symbols:["XOR"],decimals:[18],standardAccount:"*25519",website:"https://sora.org"},{prefix:789,network:"geek",displayName:"GEEK Network",symbols:["GEEK"],decimals:[18],standardAccount:"*25519",website:"https://geek.gl"},{prefix:1110,network:"efinity",displayName:"Efinity",symbols:["EFI"],decimals:[18],standardAccount:"Sr25519",website:"https://efinity.io/"},{prefix:1284,network:"moonbeam",displayName:"Moonbeam",symbols:["GLMR"],decimals:[18],standardAccount:"secp256k1",website:"https://moonbeam.network"},{prefix:1285,network:"moonriver",displayName:"Moonriver",symbols:["MOVR"],decimals:[18],standardAccount:"secp256k1",website:"https://moonbeam.network"},{prefix:1328,network:"ajuna",displayName:"Ajuna Network",symbols:["AJUN"],decimals:[12],standardAccount:"*25519",website:"https://ajuna.io"},{prefix:1337,network:"bajun",displayName:"Bajun Network",symbols:["BAJU"],decimals:[12],standardAccount:"*25519",website:"https://ajuna.io"},{prefix:2007,network:"kapex",displayName:"Kapex",symbols:["KAPEX"],decimals:[12],standardAccount:"*25519",website:"https://totemaccounting.com"},{prefix:2032,network:"interlay",displayName:"Interlay",symbols:["INTR"],decimals:[10],standardAccount:"*25519",website:"https://interlay.io/"},{prefix:2092,network:"kintsugi",displayName:"Kintsugi",symbols:["KINT"],decimals:[12],standardAccount:"*25519",website:"https://interlay.io/"},{prefix:2254,network:"subspace_testnet",displayName:"Subspace testnet",symbols:["tSSC"],decimals:[18],standardAccount:"*25519",website:"https://subspace.network"},{prefix:6094,network:"subspace",displayName:"Subspace",symbols:["SSC"],decimals:[18],standardAccount:"*25519",website:"https://subspace.network"},{prefix:7391,network:"unique_mainnet",displayName:"Unique Network",symbols:["UNQ"],decimals:[18],standardAccount:"*25519",website:"https://unique.network"},{prefix:10041,network:"basilisk",displayName:"Basilisk",symbols:["BSX"],decimals:[12],standardAccount:"*25519",website:"https://bsx.fi"},{prefix:11330,network:"cess-testnet",displayName:"CESS Testnet",symbols:["TCESS"],decimals:[12],standardAccount:"*25519",website:"https://cess.cloud"},{prefix:11331,network:"cess",displayName:"CESS",symbols:["CESS"],decimals:[12],standardAccount:"*25519",website:"https://cess.cloud"},{prefix:11820,network:"contextfree",displayName:"Automata ContextFree",symbols:["CTX"],decimals:[18],standardAccount:"*25519",website:"https://ata.network"}],tg={acala:787,bifrost:788,centrifuge:747,"dock-mainnet":594,edgeware:523,equilibrium:99999997,genshiro:99999996,karura:686,kusama:434,"nodle-chain":1003,polkadot:354,polymesh:595,sora:617,statemine:434,statemint:354,xxnetwork:1955},eg={acala:["0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c"],astar:["0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6"],basilisk:["0xa85cfb9b9fd4d622a5b28289a02347af987d8f73fa3108450e2b4a11c1ce5755"],bifrost:["0x9f28c6a68e0fc9646eff64935684f6eeeece527e37bbe1f213d22caa1d9d6bed"],centrifuge:["0x67dddf2673b69e5f875f6f25277495834398eafd67f492e09f3f3345e003d1b5"],"dock-mainnet":["0x6bfe24dca2a3be10f22212678ac13a6446ec764103c0f3471c71609eac384aae","0xf73467c6544aa68df2ee546b135f955c46b90fa627e9b5d7935f41061bb8a5a9"],edgeware:["0x742a2ca70c2fda6cee4f8df98d64c4c670a052d9568058982dad9d5a7a135c5b"],equilibrium:["0x6f1a800de3daff7f5e037ddf66ab22ce03ab91874debeddb1086f5f7dbd48925"],genshiro:["0x9b8cefc0eb5c568b527998bdd76c184e2b76ae561be76e4667072230217ea243"],hydradx:["0xd2a620c27ec5cbc5621ff9a522689895074f7cca0d08e7134a7804e1a3ba86fc","0x10af6e84234477d84dc572bac0789813b254aa490767ed06fb9591191d1073f9","0x3d75507dd46301767e601265791da1d9cb47b6ebc94e87347b635e5bf58bd047","0x0ed32bfcab4a83517fac88f2aa7cbc2f88d3ab93be9a12b6188a036bf8a943c2"],karura:["0xbaf5aabe40646d11f0ee8abbdc64f4a4b7674925cba08e4a05ff9ebed6e2126b"],kulupu:["0xf7a99d3cb92853d00d5275c971c132c074636256583fee53b3bbe60d7b8769ba"],kusama:["0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe","0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636","0x3fd7b9eb6a00376e5be61f01abb429ffb0b104be05eaff4d458da48fcd425baf"],"nodle-chain":["0xa3d114c2b8d0627c1aa9b134eafcf7d05ca561fdc19fb388bb9457f81809fb23"],picasso:["0xe8e7f0f4c4f5a00720b4821dbfddefea7490bcf0b19009961cc46957984e2c1c"],polkadot:["0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3"],polymesh:["0x6fbd74e5e1d0a61d52ccfe9d4adaed16dd3a7caa37c6bc4d0c2fa12e8b2f4063"],rococo:["0x6408de7737c59c238890533af25896a2c20608d8b380bb01029acb392781063e","0xaaf2cd1b74b5f726895921259421b534124726263982522174147046b8827897","0x037f5f3c8e67b314062025fc886fcd6238ea25a4a9b45dce8d246815c9ebe770","0xc196f81260cf1686172b47a79cf002120735d7cb0eb1474e8adce56618456fff","0xf6e9983c37baf68846fedafe21e56718790e39fb1c582abc408b81bc7b208f9a","0x5fce687da39305dfe682b117f0820b319348e8bb37eb16cf34acbf6a202de9d9","0xe7c3d5edde7db964317cd9b51a3a059d7cd99f81bdbce14990047354334c9779","0x1611e1dbf0405379b861e2e27daa90f480b2e6d3682414a80835a52e8cb8a215","0x343442f12fa715489a8714e79a7b264ea88c0d5b8c66b684a7788a516032f6b9","0x78bcd530c6b3a068bc17473cf5d2aff9c287102bed9af3ae3c41c33b9d6c6147","0x47381ee0697153d64404fc578392c8fd5cba9073391908f46c888498415647bd","0x19c0e4fa8ab75f5ac7865e0b8f74ff91eb9a100d336f423cd013a8befba40299"],sora:["0x7e4e32d0feafd4f9c9414b0be86373f9a1efa904809b683453a9af6856d38ad5"],stafi:["0x290a4149f09ea0e402c74c1c7e96ae4239588577fe78932f94f5404c68243d80"],statemine:["0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a"],statemint:["0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f"],subsocial:["0x0bd72c1c305172e1275278aaeb3f161e02eccb7a819e63f62d47bd53a28189f8"],westend:["0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e"],xxnetwork:["0x50dd5d206917bf10502c68fb4d18a59fc8aa31586f4e8856b493e43544aa82aa"]},ng={centrifuge:"polkadot",kusama:"polkadot",polkadot:"polkadot",sora:"polkadot",statemine:"polkadot",statemint:"polkadot",westmint:"polkadot"},rg={"":!0,"cess-testnet":!0,"dock-testnet":!0,jupiter:!0,"mathchain-testnet":!0,subspace_testnet:!0,"zero-alphaville":!0},ig=[0,2,42],og=["testnet"];const ag=$m.map((function(t){const e=t.network||"",n=e.replace(/_/g,"-").split("-"),r=t;return r.slip44=tg[e],r.hasLedgerSupport=!!r.slip44,r.genesisHash=eg[e]||[],r.icon=ng[e]||"substrate",r.isTestnet=!!rg[e]||og.includes(n[n.length-1]),r.isIgnored=r.isTestnet||!(t.standardAccount&&t.decimals&&t.decimals.length&&t.symbols&&t.symbols.length)&&42!==t.prefix,r})),sg=ag.filter((function(t){return!t.isIgnored&&!!t.network})).sort((function(t,e){const n=ig.includes(t.prefix);return n===ig.includes(e.prefix)?n?0:t.displayName.localeCompare(e.displayName):n?-1:1}));sg.filter((function(t){let{genesisHash:e,prefix:n}=t;return!!e.length||42===n}));const lg={allowedDecodedLengths:[1,2,4,8,32,33],allowedEncodedLengths:[3,4,6,10,35,36,37,38],allowedPrefix:sg.map((function(t){let{prefix:e}=t;return e})),prefix:42};function ug(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;if(hf(t,"Invalid empty address passed"),Cf(t)||vf(t))return Pf(t);try{const r=Rf(t);hf(lg.allowedEncodedLengths.includes(r.length),"Invalid decoded address length");const[i,o,a,s]=_m(r);return hf(e||i,"Invalid decoded address checksum"),hf([-1,s].includes(n),(()=>`Expected ss58Format ${n}, received ${s}`)),r.slice(a,o)}catch(r){throw new Error(`Decoding ${t}: ${r.message}`)}}function cg(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:lg.prefix;const n=ug(t);hf(e>=0&&e<=16383&&![46,47].includes(e),"Out of range ss58Format specified"),hf(lg.allowedDecodedLengths.includes(n.length),(()=>`Expected a valid key to convert, with length ${lg.allowedDecodedLengths.join(", ")}`));const r=Tf(e<64?[e]:[(252&e)>>2|64,e>>8|(3&e)<<6],n);return zf(Tf(r,Qm(r).subarray(0,[32,33].includes(n.length)?2:1)))}const hg=t=>"string"!==typeof t?t:`${t.substring(0,6)}...${t.substring(t.length-6,t.length)}`,dg=t=>Number(t.slice(0,t.length-3))*parseFloat(getComputedStyle(document.documentElement).fontSize),fg=(t,e)=>+parseFloat(String(t)).toFixed(e),pg=(t,e)=>t/10**e,mg=(t,e)=>{const n=new(sf())(10),r=new(sf())(e),i=t.div(n.pow(r)),o=t.mod(n.pow(r)),a=i.toString(),s=o.toString().padStart(e,"0");return Number(`${a}.${s||"0"}`)},gg=(t,e)=>{t=Number(t),e=Number(e);const n=new(sf())(10),r=new(sf())(e),[i,o]=t.toFixed(e).split("."),a=new(sf())(Number(i)),s=new(sf())(Number(o));return a.mul(n.pow(r)).add(s)},yg=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),vg=t=>{const e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")},bg=t=>t.replace(/,/g,""),wg=t=>new Promise((e=>setTimeout(e,t))),xg=t=>Number(t.slice(0,-1)),Mg=t=>{const e=t.substring(t.lastIndexOf("/")+1);return""===e.trim()?"overview":e},kg=(t,e)=>{for(const n of e)if(n.uri===t)return n.title;return""},Sg=t=>""!==(t="string"===typeof t?t.trim():String(t))&&!Number.isNaN(Number(t)),Cg=(t,e,n)=>{e(t),n.current=t},Pg=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=localStorage.getItem(t);return null===r?e:n?JSON.parse(r):r},Tg=t=>{try{return cg(vf(t)?wf(t):ug(t)),!0}catch(e){return!1}},Ag=(t,e,n)=>t.replace(new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),n),Ng=k.createContext({toggleTheme:t=>{},toggleCard:t=>{},mode:"light",card:"flat"}),Og=()=>k.useContext(Ng),jg=t=>{let{children:e}=t,n=localStorage.getItem("theme"),r=localStorage.getItem("card");"light"!==n&&"dark"!==n&&(n="light",n=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"light":"dark",localStorage.setItem("theme",n)),["flat","border","shadow"].includes(r||"")||(r="shadow",localStorage.setItem("card",r));const[i,o]=k.useState({mode:n,card:r}),a=(0,k.useRef)(i);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(t=>{const e=t.matches?"dark":"light";localStorage.setItem("theme",e),Cg({...a.current,mode:e},o,a)}));return(0,Jd.jsx)(Ng.Provider,{value:{toggleTheme:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===t&&(t="dark"===i.mode?"light":"dark"),localStorage.setItem("theme",t),Cg({...a.current,mode:t},o,a)},toggleCard:t=>{localStorage.setItem("card",t),Cg({...a.current,card:t},o,a)},mode:a.current.mode,card:a.current.card},children:e})};var Eg;function Vg(){return Vg=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vg.apply(this,arguments)}function Ig(t,e){let{title:n,titleId:r,...i}=t;return k.createElement("svg",Vg({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:e,"aria-labelledby":r},i),void 0===n?k.createElement("title",{id:r},"Moon"):n?k.createElement("title",{id:r},n):null,Eg||(Eg=k.createElement("path",{d:"M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32})))}const Rg=k.forwardRef(Ig);__webpack_require__.p;var zg,Lg;function Hg(){return Hg=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hg.apply(this,arguments)}function Bg(t,e){let{title:n,titleId:r,...i}=t;return k.createElement("svg",Hg({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:e,"aria-labelledby":r},i),void 0===n?k.createElement("title",{id:r},"Sunny"):n?k.createElement("title",{id:r},n):null,zg||(zg=k.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:32,d:"M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"})),Lg||(Lg=k.createElement("circle",{cx:256,cy:256,r:80,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:32})))}const Dg=k.forwardRef(Bg);__webpack_require__.p;function Fg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Ug(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Fg(Object(n),!0).forEach((function(e){Xg(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Fg(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Wg(t){return Wg="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wg(t)}function qg(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Xg(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Zg(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(t,e)||Kg(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Yg(t){return function(t){if(Array.isArray(t))return Gg(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Kg(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Kg(t,e){if(t){if("string"===typeof t)return Gg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Gg(t,e):void 0}}function Gg(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Jg=function(){},Qg={},_g={},$g=null,ty={mark:Jg,measure:Jg};try{"undefined"!==typeof window&&(Qg=window),"undefined"!==typeof document&&(_g=document),"undefined"!==typeof MutationObserver&&($g=MutationObserver),"undefined"!==typeof performance&&(ty=performance)}catch(pdt){}var ey=(Qg.navigator||{}).userAgent,ny=void 0===ey?"":ey,ry=Qg,iy=_g,oy=$g,ay=ty,sy=(ry.document,!!iy.documentElement&&!!iy.head&&"function"===typeof iy.addEventListener&&"function"===typeof iy.createElement),ly=~ny.indexOf("MSIE")||~ny.indexOf("Trident/"),uy="svg-inline--fa",cy="data-fa-i2svg",hy="data-fa-pseudo-element",dy="data-prefix",fy="data-icon",py="fontawesome-i2svg",my=["HTML","HEAD","STYLE","SCRIPT"],gy=function(){try{return!0}catch(pdt){return!1}}(),yy={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},vy={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},by={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},wy={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},xy=/fa[srltdbk\-\ ]/,My="fa-layers-text",ky=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Sy={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Cy=[1,2,3,4,5,6,7,8,9,10],Py=Cy.concat([11,12,13,14,15,16,17,18,19,20]),Ty=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ay="duotone-group",Ny="swap-opacity",Oy="primary",jy="secondary",Ey=[].concat(Yg(Object.keys(vy)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ay,Ny,Oy,jy]).concat(Cy.map((function(t){return"".concat(t,"x")}))).concat(Py.map((function(t){return"w-".concat(t)}))),Vy=ry.FontAwesomeConfig||{};if(iy&&"function"===typeof iy.querySelector){[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(t){var e=Zg(t,2),n=e[0],r=e[1],i=function(t){return""===t||"false"!==t&&("true"===t||t)}(function(t){var e=iy.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}(n));void 0!==i&&null!==i&&(Vy[r]=i)}))}var Iy=Ug(Ug({},{familyPrefix:"fa",styleDefault:"solid",replacementClass:uy,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0}),Vy);Iy.autoReplaceSvg||(Iy.observeMutations=!1);var Ry={};Object.keys(Iy).forEach((function(t){Object.defineProperty(Ry,t,{enumerable:!0,set:function(e){Iy[t]=e,zy.forEach((function(t){return t(Ry)}))},get:function(){return Iy[t]}})})),ry.FontAwesomeConfig=Ry;var zy=[];var Ly=16,Hy={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function By(){for(var t=12,e="";t-- >0;)e+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return e}function Dy(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Fy(t){return t.classList?Dy(t.classList):(t.getAttribute("class")||"").split(" ").filter((function(t){return t}))}function Uy(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wy(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")}),"")}function qy(t){return t.size!==Hy.size||t.x!==Hy.x||t.y!==Hy.y||t.rotate!==Hy.rotate||t.flipX||t.flipY}function Xy(){var t="fa",e=uy,n=Ry.familyPrefix,r=Ry.replacementClass,i=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Zy=!1;function Yy(){Ry.autoAddCss&&!Zy&&(!function(t){if(t&&sy){var e=iy.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=iy.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}iy.head.insertBefore(e,r)}}(Xy()),Zy=!0)}var Ky={mixout:function(){return{dom:{css:Xy,insertCss:Yy}}},hooks:function(){return{beforeDOMElementCreation:function(){Yy()},beforeI2svg:function(){Yy()}}}},Gy=ry||{};Gy.___FONT_AWESOME___||(Gy.___FONT_AWESOME___={}),Gy.___FONT_AWESOME___.styles||(Gy.___FONT_AWESOME___.styles={}),Gy.___FONT_AWESOME___.hooks||(Gy.___FONT_AWESOME___.hooks={}),Gy.___FONT_AWESOME___.shims||(Gy.___FONT_AWESOME___.shims=[]);var Jy=Gy.___FONT_AWESOME___,Qy=[],_y=!1;function $y(t){sy&&(_y?setTimeout(t,0):Qy.push(t))}function tv(t){var e=t.tag,n=t.attributes,r=void 0===n?{}:n,i=t.children,o=void 0===i?[]:i;return"string"===typeof t?Uy(t):"<".concat(e," ").concat(function(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,'="').concat(Uy(t[n]),'" ')}),"").trim()}(r),">").concat(o.map(tv).join(""),"</").concat(e,">")}function ev(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}sy&&((_y=(iy.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(iy.readyState))||iy.addEventListener("DOMContentLoaded",(function t(){iy.removeEventListener("DOMContentLoaded",t),_y=1,Qy.map((function(t){return t()}))})));var nv=function(t,e,n,r){var i,o,a,s=Object.keys(t),l=s.length,u=void 0!==r?function(t,e){return function(n,r,i,o){return t.call(e,n,r,i,o)}}(e,r):e;for(void 0===n?(i=1,a=t[s[0]]):(i=0,a=n);i<l;i++)a=u(a,t[o=s[i]],o,t);return a};function rv(t){var e=function(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=t.charCodeAt(n++);56320==(64512&o)?e.push(((1023&i)<<10)+(1023&o)+65536):(e.push(i),n--)}else e.push(i)}return e}(t);return 1===e.length?e[0].toString(16):null}function iv(t){return Object.keys(t).reduce((function(e,n){var r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e}),{})}function ov(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,i=void 0!==r&&r,o=iv(e);"function"!==typeof Jy.hooks.addPack||i?Jy.styles[t]=Ug(Ug({},Jy.styles[t]||{}),o):Jy.hooks.addPack(t,iv(e)),"fas"===t&&ov("fa",e)}var av=Jy.styles,sv=Jy.shims,lv=Object.values(by),uv=null,cv={},hv={},dv={},fv={},pv={},mv=Object.keys(yy);function gv(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r!==t||""===i||function(t){return~Ey.indexOf(t)}(i)?null:i}var yv=function(){var t=function(t){return nv(av,(function(e,n,r){return e[r]=nv(n,t,{}),e}),{})};cv=t((function(t,e,n){if(e[3]&&(t[e[3]]=n),e[2]){var r=e[2].filter((function(t){return"number"===typeof t}));r.forEach((function(e){t[e.toString(16)]=n}))}return t})),hv=t((function(t,e,n){if(t[n]=n,e[2]){var r=e[2].filter((function(t){return"string"===typeof t}));r.forEach((function(e){t[e]=n}))}return t})),pv=t((function(t,e,n){var r=e[2];return t[n]=n,r.forEach((function(e){t[e]=n})),t}));var e="far"in av||Ry.autoFetchSvg,n=nv(sv,(function(t,n){var r=n[0],i=n[1],o=n[2];return"far"!==i||e||(i="fas"),"string"===typeof r&&(t.names[r]={prefix:i,iconName:o}),"number"===typeof r&&(t.unicodes[r.toString(16)]={prefix:i,iconName:o}),t}),{names:{},unicodes:{}});dv=n.names,fv=n.unicodes,uv=Mv(Ry.styleDefault)};function vv(t,e){return(cv[t]||{})[e]}function bv(t,e){return(pv[t]||{})[e]}function wv(t){return dv[t]||{prefix:null,iconName:null}}function xv(){return uv}!function(t){zy.push(t)}((function(t){uv=Mv(t.styleDefault)})),yv();function Mv(t){var e=vy[t]||vy[yy[t]],n=t in Jy.styles?t:null;return e||n||null}function kv(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.skipLookups,r=void 0!==n&&n,i=null,o=t.reduce((function(t,e){var n=gv(Ry.familyPrefix,e);if(av[e]?(e=lv.includes(e)?wy[e]:e,i=e,t.prefix=e):mv.indexOf(e)>-1?(i=e,t.prefix=Mv(e)):n?t.iconName=n:e!==Ry.replacementClass&&t.rest.push(e),!r&&t.prefix&&t.iconName){var o="fa"===i?wv(t.iconName):{},a=bv(t.prefix,t.iconName);o.prefix&&(i=null),t.iconName=o.iconName||a||t.iconName,t.prefix=o.prefix||t.prefix,"far"!==t.prefix||av.far||!av.fas||Ry.autoFetchSvg||(t.prefix="fas")}return t}),{prefix:null,iconName:null,rest:[]});return"fa"!==o.prefix&&"fa"!==i||(o.prefix=xv()||"fas"),o}var Sv=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.definitions={}}var e,n,r;return e=t,n=[{key:"add",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(e){t.definitions[e]=Ug(Ug({},t.definitions[e]||{}),i[e]),ov(e,i[e]);var n=by[e];n&&ov(n,i[e]),yv()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map((function(e){var r=n[e],i=r.prefix,o=r.iconName,a=r.icon,s=a[2];t[i]||(t[i]={}),s.length>0&&s.forEach((function(e){"string"===typeof e&&(t[i][e]=a)})),t[i][o]=a})),t}}],n&&qg(e.prototype,n),r&&qg(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),Cv=[],Pv={},Tv={},Av=Object.keys(Tv);function Nv(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Pv[t]||[];return o.forEach((function(t){e=t.apply(null,[e].concat(r))})),e}function Ov(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Pv[t]||[];i.forEach((function(t){t.apply(null,n)}))}function jv(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Tv[t]?Tv[t].apply(null,e):void 0}function Ev(t){"fa"===t.prefix&&(t.prefix="fas");var e=t.iconName,n=t.prefix||xv();if(e)return e=bv(n,e)||e,ev(Vv.definitions,n,e)||ev(Jy.styles,n,e)}var Vv=new Sv,Iv={i2svg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return sy?(Ov("beforeI2svg",t),jv("pseudoElements2svg",t),jv("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot;!1===Ry.autoReplaceSvg&&(Ry.autoReplaceSvg=!0),Ry.observeMutations=!0,$y((function(){Lv({autoReplaceSvgRoot:e}),Ov("watch",t)}))}},Rv={icon:function(t){if(null===t)return null;if("object"===Wg(t)&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:bv(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&2===t.length){var e=0===t[1].indexOf("fa-")?t[1].slice(3):t[1],n=Mv(t[0]);return{prefix:n,iconName:bv(n,e)||e}}if("string"===typeof t&&(t.indexOf("".concat(Ry.familyPrefix,"-"))>-1||t.match(xy))){var r=kv(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||xv(),iconName:bv(r.prefix,r.iconName)||r.iconName}}if("string"===typeof t){var i=xv();return{prefix:i,iconName:bv(i,t)||t}}}},zv={noAuto:function(){Ry.autoReplaceSvg=!1,Ry.observeMutations=!1,Ov("noAuto")},config:Ry,dom:Iv,parse:Rv,library:Vv,findIconDefinition:Ev,toHtml:tv},Lv=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot,n=void 0===e?iy:e;(Object.keys(Jy.styles).length>0||Ry.autoFetchSvg)&&sy&&Ry.autoReplaceSvg&&zv.dom.i2svg({node:n})};function Hv(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return tv(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(sy){var e=iy.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function Bv(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,a=t.transform,s=t.symbol,l=t.title,u=t.maskId,c=t.titleId,h=t.extra,d=t.watchable,f=void 0!==d&&d,p=r.found?r:n,m=p.width,g=p.height,y="fak"===i,v=[Ry.replacementClass,o?"".concat(Ry.familyPrefix,"-").concat(o):""].filter((function(t){return-1===h.classes.indexOf(t)})).filter((function(t){return""!==t||!!t})).concat(h.classes).join(" "),b={children:[],attributes:Ug(Ug({},h.attributes),{},{"data-prefix":i,"data-icon":o,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)})},w=y&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};f&&(b.attributes[cy]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(c||By())},children:[l]}),delete b.attributes.title);var x=Ug(Ug({},b),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:a,symbol:s,styles:Ug(Ug({},w),h.styles)}),M=r.found&&n.found?jv("generateAbstractMask",x)||{children:[],attributes:{}}:jv("generateAbstractIcon",x)||{children:[],attributes:{}},k=M.children,S=M.attributes;return x.children=k,x.attributes=S,s?function(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol,a=!0===o?"".concat(e,"-").concat(Ry.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Ug(Ug({},i),{},{id:a}),children:r}]}]}(x):function(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,a=t.transform;if(qy(a)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=Wy(Ug(Ug({},o),{},{"transform-origin":"".concat(s.x+a.x/16,"em ").concat(s.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}(x)}function Dv(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,a=t.extra,s=t.watchable,l=void 0!==s&&s,u=Ug(Ug(Ug({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});l&&(u[cy]="");var c=Ug({},a.styles);qy(i)&&(c.transform=function(t){var e=t.transform,n=t.width,r=void 0===n?16:n,i=t.height,o=void 0===i?16:i,a=t.startCentered,s=void 0!==a&&a,l="";return l+=s&&ly?"translate(".concat(e.x/Ly-r/2,"em, ").concat(e.y/Ly-o/2,"em) "):s?"translate(calc(-50% + ".concat(e.x/Ly,"em), calc(-50% + ").concat(e.y/Ly,"em)) "):"translate(".concat(e.x/Ly,"em, ").concat(e.y/Ly,"em) "),l+="scale(".concat(e.size/Ly*(e.flipX?-1:1),", ").concat(e.size/Ly*(e.flipY?-1:1),") "),l+"rotate(".concat(e.rotate,"deg) ")}({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var h=Wy(c);h.length>0&&(u.style=h);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function Fv(t){var e=t.content,n=t.title,r=t.extra,i=Ug(Ug(Ug({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Wy(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Uv=Jy.styles;function Wv(t){var e=t[0],n=t[1],r=Zg(t.slice(4),1)[0];return{found:!0,width:e,height:n,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(Ry.familyPrefix,"-").concat(Ay)},children:[{tag:"path",attributes:{class:"".concat(Ry.familyPrefix,"-").concat(jy),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(Ry.familyPrefix,"-").concat(Oy),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}var qv={found:!1,width:512,height:512};function Xv(t,e){var n=e;return"fa"===e&&null!==Ry.styleDefault&&(e=xv()),new Promise((function(r,i){jv("missingIconAbstract");if("fa"===n){var o=wv(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Uv[e]&&Uv[e][t])return r(Wv(Uv[e][t]));!function(t,e){gy||Ry.showMissingIcons||!t||console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}(t,e),r(Ug(Ug({},qv),{},{icon:Ry.showMissingIcons&&t&&jv("missingIconAbstract")||{}}))}))}var Zv=function(){},Yv=Ry.measurePerformance&&ay&&ay.mark&&ay.measure?ay:{mark:Zv,measure:Zv},Kv='FA "6.1.0"',Gv=function(t){Yv.mark("".concat(Kv," ").concat(t," ends")),Yv.measure("".concat(Kv," ").concat(t),"".concat(Kv," ").concat(t," begins"),"".concat(Kv," ").concat(t," ends"))},Jv=function(t){return Yv.mark("".concat(Kv," ").concat(t," begins")),function(){return Gv(t)}},Qv=function(){};function _v(t){return"string"===typeof(t.getAttribute?t.getAttribute(cy):null)}function $v(t){return iy.createElementNS("http://www.w3.org/2000/svg",t)}function tb(t){return iy.createElement(t)}function eb(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.ceFn,r=void 0===n?"svg"===t.tag?$v:tb:n;if("string"===typeof t)return iy.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach((function(e){i.setAttribute(e,t.attributes[e])}));var o=t.children||[];return o.forEach((function(t){i.appendChild(eb(t,{ceFn:r}))})),i}var nb={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach((function(t){e.parentNode.insertBefore(eb(t),e)})),null===e.getAttribute(cy)&&Ry.keepOriginalSource){var n=iy.createComment(function(t){var e=" ".concat(t.outerHTML," ");return"".concat(e,"Font Awesome fontawesome.com ")}(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){var e=t[0],n=t[1];if(~Fy(e).indexOf(Ry.replacementClass))return nb.replace(t);var r=new RegExp("".concat(Ry.familyPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce((function(t,e){return e===Ry.replacementClass||e.match(r)?t.toSvg.push(e):t.toNode.push(e),t}),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),0===i.toNode.length?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=n.map((function(t){return tv(t)})).join("\n");e.setAttribute(cy,""),e.innerHTML=o}};function rb(t){t()}function ib(t,e){var n="function"===typeof e?e:Qv;if(0===t.length)n();else{var r=rb;"async"===Ry.mutateApproach&&(r=ry.requestAnimationFrame||rb),r((function(){var e=!0===Ry.autoReplaceSvg?nb.replace:nb[Ry.autoReplaceSvg]||nb.replace,r=Jv("mutate");t.map(e),r(),n()}))}}var ob=!1;function ab(){ob=!0}function sb(){ob=!1}var lb=null;function ub(t){if(oy&&Ry.observeMutations){var e=t.treeCallback,n=void 0===e?Qv:e,r=t.nodeCallback,i=void 0===r?Qv:r,o=t.pseudoElementsCallback,a=void 0===o?Qv:o,s=t.observeMutationsRoot,l=void 0===s?iy:s;lb=new oy((function(t){if(!ob){var e=xv();Dy(t).forEach((function(t){if("childList"===t.type&&t.addedNodes.length>0&&!_v(t.addedNodes[0])&&(Ry.searchPseudoElements&&a(t.target),n(t.target)),"attributes"===t.type&&t.target.parentNode&&Ry.searchPseudoElements&&a(t.target.parentNode),"attributes"===t.type&&_v(t.target)&&~Ty.indexOf(t.attributeName))if("class"===t.attributeName&&function(t){var e=t.getAttribute?t.getAttribute(dy):null,n=t.getAttribute?t.getAttribute(fy):null;return e&&n}(t.target)){var r=kv(Fy(t.target)),o=r.prefix,s=r.iconName;t.target.setAttribute(dy,o||e),s&&t.target.setAttribute(fy,s)}else(function(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Ry.replacementClass)})(t.target)&&i(t.target)}))}})),sy&&lb.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function cb(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((function(t,e){var n=e.split(":"),r=n[0],i=n.slice(1);return r&&i.length>0&&(t[r]=i.join(":").trim()),t}),{})),n}function hb(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=void 0!==t.innerText?t.innerText.trim():"",i=kv(Fy(t));return i.prefix||(i.prefix=xv()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=function(t,e){return(hv[t]||{})[e]}(i.prefix,t.innerText)||vv(i.prefix,rv(t.innerText))),i}function db(t){var e=Dy(t.attributes).reduce((function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t}),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return Ry.autoA11y&&(n?e["aria-labelledby"]="".concat(Ry.replacementClass,"-title-").concat(r||By()):(e["aria-hidden"]="true",e.focusable="false")),e}function fb(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},n=hb(t),r=n.iconName,i=n.prefix,o=n.rest,a=db(t),s=Nv("parseNodeAttributes",{},t),l=e.styleParser?cb(t):[];return Ug({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Hy,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:a}},s)}var pb=Jy.styles;function mb(t){var e="nest"===Ry.autoReplaceSvg?fb(t,{styleParser:!1}):fb(t);return~e.extra.classes.indexOf(My)?jv("generateLayersText",t,e):jv("generateSvgReplacementMutation",t,e)}function gb(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!sy)return Promise.resolve();var n=iy.documentElement.classList,r=function(t){return n.add("".concat(py,"-").concat(t))},i=function(t){return n.remove("".concat(py,"-").concat(t))},o=Ry.autoFetchSvg?Object.keys(yy):Object.keys(pb),a=[".".concat(My,":not([").concat(cy,"])")].concat(o.map((function(t){return".".concat(t,":not([").concat(cy,"])")}))).join(", ");if(0===a.length)return Promise.resolve();var s=[];try{s=Dy(t.querySelectorAll(a))}catch(pdt){}if(!(s.length>0))return Promise.resolve();r("pending"),i("complete");var l=Jv("onTree"),u=s.reduce((function(t,e){try{var n=mb(e);n&&t.push(n)}catch(pdt){gy||"MissingIcon"===pdt.name&&console.error(pdt)}return t}),[]);return new Promise((function(t,n){Promise.all(u).then((function(n){ib(n,(function(){r("active"),r("complete"),i("pending"),"function"===typeof e&&e(),l(),t()}))})).catch((function(t){l(),n(t)}))}))}function yb(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;mb(t).then((function(t){t&&ib([t],e)}))}var vb=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?Hy:n,i=e.symbol,o=void 0!==i&&i,a=e.mask,s=void 0===a?null:a,l=e.maskId,u=void 0===l?null:l,c=e.title,h=void 0===c?null:c,d=e.titleId,f=void 0===d?null:d,p=e.classes,m=void 0===p?[]:p,g=e.attributes,y=void 0===g?{}:g,v=e.styles,b=void 0===v?{}:v;if(t){var w=t.prefix,x=t.iconName,M=t.icon;return Hv(Ug({type:"icon"},t),(function(){return Ov("beforeDOMElementCreation",{iconDefinition:t,params:e}),Ry.autoA11y&&(h?y["aria-labelledby"]="".concat(Ry.replacementClass,"-title-").concat(f||By()):(y["aria-hidden"]="true",y.focusable="false")),Bv({icons:{main:Wv(M),mask:s?Wv(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:x,transform:Ug(Ug({},Hy),r),symbol:o,title:h,maskId:u,titleId:f,extra:{attributes:y,styles:b,classes:m}})}))}},bb={mixout:function(){return{icon:(t=vb,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(e||{}).icon?e:Ev(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ev(i||{})),t(r,Ug(Ug({},n),{},{mask:i}))})};var t},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=gb,t.nodeCallback=yb,t}}},provides:function(t){t.i2svg=function(t){var e=t.node,n=void 0===e?iy:e,r=t.callback;return gb(n,void 0===r?function(){}:r)},t.generateSvgReplacementMutation=function(t,e){var n=e.iconName,r=e.title,i=e.titleId,o=e.prefix,a=e.transform,s=e.symbol,l=e.mask,u=e.maskId,c=e.extra;return new Promise((function(e,h){Promise.all([Xv(n,o),l.iconName?Xv(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((function(l){var h=Zg(l,2),d=h[0],f=h[1];e([t,Bv({icons:{main:d,mask:f},prefix:o,iconName:n,transform:a,symbol:s,maskId:u,title:r,titleId:i,extra:c,watchable:!0})])})).catch(h)}))},t.generateAbstractIcon=function(t){var e,n=t.children,r=t.attributes,i=t.main,o=t.transform,a=Wy(t.styles);return a.length>0&&(r.style=a),qy(o)&&(e=jv("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(e||i.icon),{children:n,attributes:r}}}},wb={mixout:function(){return{layer:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.classes,r=void 0===n?[]:n;return Hv({type:"layer"},(function(){Ov("beforeDOMElementCreation",{assembler:t,params:e});var n=[];return t((function(t){Array.isArray(t)?t.map((function(t){n=n.concat(t.abstract)})):n=n.concat(t.abstract)})),[{tag:"span",attributes:{class:["".concat(Ry.familyPrefix,"-layers")].concat(Yg(r)).join(" ")},children:n}]}))}}}},xb={mixout:function(){return{counter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.title,r=void 0===n?null:n,i=e.classes,o=void 0===i?[]:i,a=e.attributes,s=void 0===a?{}:a,l=e.styles,u=void 0===l?{}:l;return Hv({type:"counter",content:t},(function(){return Ov("beforeDOMElementCreation",{content:t,params:e}),Fv({content:t.toString(),title:r,extra:{attributes:s,styles:u,classes:["".concat(Ry.familyPrefix,"-layers-counter")].concat(Yg(o))}})}))}}}},Mb={mixout:function(){return{text:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?Hy:n,i=e.title,o=void 0===i?null:i,a=e.classes,s=void 0===a?[]:a,l=e.attributes,u=void 0===l?{}:l,c=e.styles,h=void 0===c?{}:c;return Hv({type:"text",content:t},(function(){return Ov("beforeDOMElementCreation",{content:t,params:e}),Dv({content:t,transform:Ug(Ug({},Hy),r),title:o,extra:{attributes:u,styles:h,classes:["".concat(Ry.familyPrefix,"-layers-text")].concat(Yg(s))}})}))}}},provides:function(t){t.generateLayersText=function(t,e){var n=e.title,r=e.transform,i=e.extra,o=null,a=null;if(ly){var s=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();o=l.width/s,a=l.height/s}return Ry.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,Dv({content:t.innerHTML,width:o,height:a,transform:r,title:n,extra:i,watchable:!0})])}}},kb=new RegExp('"',"ug"),Sb=[1105920,1112319];function Cb(t,e){var n="".concat("data-fa-pseudo-element-pending").concat(e.replace(":","-"));return new Promise((function(r,i){if(null!==t.getAttribute(n))return r();var o=Dy(t.children).filter((function(t){return t.getAttribute(hy)===e}))[0],a=ry.getComputedStyle(t,e),s=a.getPropertyValue("font-family").match(ky),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!s)return t.removeChild(o),r();if(s&&"none"!==u&&""!==u){var c=a.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?vy[s[2].toLowerCase()]:Sy[l],d=function(t){var e=t.replace(kb,""),n=function(t,e){var n,r=t.length,i=t.charCodeAt(e);return i>=55296&&i<=56319&&r>e+1&&(n=t.charCodeAt(e+1))>=56320&&n<=57343?1024*(i-55296)+n-56320+65536:i}(e,0),r=n>=Sb[0]&&n<=Sb[1],i=2===e.length&&e[0]===e[1];return{value:rv(i?e[0]:e),isSecondary:r||i}}(c),f=d.value,p=d.isSecondary,m=s[0].startsWith("FontAwesome"),g=vv(h,f),y=g;if(m){var v=function(t){var e=fv[t],n=vv("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}(f);v.iconName&&v.prefix&&(g=v.iconName,h=v.prefix)}if(!g||p||o&&o.getAttribute(dy)===h&&o.getAttribute(fy)===y)r();else{t.setAttribute(n,y),o&&t.removeChild(o);var b={iconName:null,title:null,titleId:null,prefix:null,transform:Hy,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},w=b.extra;w.attributes[hy]=e,Xv(g,h).then((function(i){var o=Bv(Ug(Ug({},b),{},{icons:{main:i,mask:{prefix:null,iconName:null,rest:[]}},prefix:h,iconName:y,extra:w,watchable:!0})),a=iy.createElement("svg");"::before"===e?t.insertBefore(a,t.firstChild):t.appendChild(a),a.outerHTML=o.map((function(t){return tv(t)})).join("\n"),t.removeAttribute(n),r()})).catch(i)}}else r()}))}function Pb(t){return Promise.all([Cb(t,"::before"),Cb(t,"::after")])}function Tb(t){return t.parentNode!==document.head&&!~my.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(hy)&&(!t.parentNode||"svg"!==t.parentNode.tagName)}function Ab(t){if(sy)return new Promise((function(e,n){var r=Dy(t.querySelectorAll("*")).filter(Tb).map(Pb),i=Jv("searchPseudoElements");ab(),Promise.all(r).then((function(){i(),sb(),e()})).catch((function(){i(),sb(),n()}))}))}var Nb={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Ab,t}}},provides:function(t){t.pseudoElements2svg=function(t){var e=t.node,n=void 0===e?iy:e;Ry.searchPseudoElements&&Ab(n)}}},Ob=!1,jb=function(t){return t.toLowerCase().split(" ").reduce((function(t,e){var n=e.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&"h"===i)return t.flipX=!0,t;if(r&&"v"===i)return t.flipY=!0,t;if(i=parseFloat(i),isNaN(i))return t;switch(r){case"grow":t.size=t.size+i;break;case"shrink":t.size=t.size-i;break;case"left":t.x=t.x-i;break;case"right":t.x=t.x+i;break;case"up":t.y=t.y-i;break;case"down":t.y=t.y+i;break;case"rotate":t.rotate=t.rotate+i}return t}),{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Eb={mixout:function(){return{parse:{transform:function(t){return jb(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-transform");return n&&(t.transform=jb(n)),t}}},provides:function(t){t.generateAbstractTransformGrouping=function(t){var e=t.main,n=t.transform,r=t.containerWidth,i=t.iconWidth,o={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(32*n.x,", ").concat(32*n.y,") "),s="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),u={outer:o,inner:{transform:"".concat(a," ").concat(s," ").concat(l)},path:{transform:"translate(".concat(i/2*-1," -256)")}};return{tag:"g",attributes:Ug({},u.outer),children:[{tag:"g",attributes:Ug({},u.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:Ug(Ug({},e.icon.attributes),u.path)}]}]}}}},Vb={x:0,y:0,width:"100%",height:"100%"};function Ib(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}var Rb={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-mask"),r=n?kv(n.split(" ").map((function(t){return t.trim()}))):{prefix:null,iconName:null,rest:[]};return r.prefix||(r.prefix=xv()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(t){t.generateAbstractMask=function(t){var e,n=t.children,r=t.attributes,i=t.main,o=t.mask,a=t.maskId,s=t.transform,l=i.width,u=i.icon,c=o.width,h=o.icon,d=function(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(32*e.x,", ").concat(32*e.y,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)");return{outer:i,inner:{transform:"".concat(o," ").concat(a," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}({transform:s,containerWidth:c,iconWidth:l}),f={tag:"rect",attributes:Ug(Ug({},Vb),{},{fill:"white"})},p=u.children?{children:u.children.map(Ib)}:{},m={tag:"g",attributes:Ug({},d.inner),children:[Ib(Ug({tag:u.tag,attributes:Ug(Ug({},u.attributes),d.path)},p))]},g={tag:"g",attributes:Ug({},d.outer),children:[m]},y="mask-".concat(a||By()),v="clip-".concat(a||By()),b={tag:"mask",attributes:Ug(Ug({},Vb),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,g]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(e=h,"g"===e.tag?e.children:[e])},b]};return n.push(w,{tag:"rect",attributes:Ug({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(y,")")},Vb)}),{children:n,attributes:r}}}},zb={provides:function(t){var e=!1;ry.matchMedia&&(e=ry.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var t=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:Ug(Ug({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=Ug(Ug({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:Ug(Ug({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:Ug(Ug({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Ug(Ug({},i),{},{values:"1;0;1;1;0;1;"})}),t.push(o),t.push({tag:"path",attributes:Ug(Ug({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:Ug(Ug({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:Ug(Ug({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Ug(Ug({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},Lb=[Ky,bb,wb,xb,Mb,Nb,{mixout:function(){return{dom:{unwatch:function(){ab(),Ob=!0}}}},hooks:function(){return{bootstrap:function(){ub(Nv("mutationObserverCallbacks",{}))},noAuto:function(){lb&&lb.disconnect()},watch:function(t){var e=t.observeMutationsRoot;Ob?sb():ub(Nv("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Eb,Rb,zb,{hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-symbol"),r=null!==n&&(""===n||n);return t.symbol=r,t}}}}];!function(t,e){var n=e.mixoutsTo;Cv=t,Pv={},Object.keys(Tv).forEach((function(t){-1===Av.indexOf(t)&&delete Tv[t]})),Cv.forEach((function(t){var e=t.mixout?t.mixout():{};if(Object.keys(e).forEach((function(t){"function"===typeof e[t]&&(n[t]=e[t]),"object"===Wg(e[t])&&Object.keys(e[t]).forEach((function(r){n[t]||(n[t]={}),n[t][r]=e[t][r]}))})),t.hooks){var r=t.hooks();Object.keys(r).forEach((function(t){Pv[t]||(Pv[t]=[]),Pv[t].push(r[t])}))}t.provides&&t.provides(Tv)}))}(Lb,{mixoutsTo:zv});var Hb=zv.parse,Bb=zv.icon;function Db(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Fb(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Db(Object(n),!0).forEach((function(e){Wb(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Db(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Ub(t){return Ub="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ub(t)}function Wb(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qb(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function Xb(t){return function(t){if(Array.isArray(t))return Zb(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return Zb(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zb(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Zb(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Yb(t){return e=t,(e-=0)===e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}var Kb=["style"];function Gb(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var n,r=e.indexOf(":"),i=Yb(e.slice(0,r)),o=e.slice(r+1).trim();return i.startsWith("webkit")?t[(n=i,n.charAt(0).toUpperCase()+n.slice(1))]=o:t[i]=o,t}),{})}var Jb=!1;try{Jb=!0}catch(pdt){}function Qb(t){return t&&"object"===Ub(t)&&t.prefix&&t.iconName&&t.icon?t:Hb.icon?Hb.icon(t):null===t?null:t&&"object"===Ub(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"===typeof t?{prefix:"fas",iconName:t}:void 0}function _b(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Wb({},t,e):{}}var $b=["forwardedRef"];function tw(t){var e=t.forwardedRef,n=qb(t,$b),r=n.icon,i=n.mask,o=n.symbol,a=n.className,s=n.title,l=n.titleId,u=n.maskId,c=Qb(r),h=_b("classes",[].concat(Xb(function(t){var e,n=t.beat,r=t.fade,i=t.beatFade,o=t.bounce,a=t.shake,s=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,h=t.pulse,d=t.fixedWidth,f=t.inverse,p=t.border,m=t.listItem,g=t.flip,y=t.size,v=t.rotation,b=t.pull,w=(Wb(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":d,"fa-inverse":f,"fa-border":p,"fa-li":m,"fa-flip-horizontal":"horizontal"===g||"both"===g,"fa-flip-vertical":"vertical"===g||"both"===g},"fa-".concat(y),"undefined"!==typeof y&&null!==y),Wb(e,"fa-rotate-".concat(v),"undefined"!==typeof v&&null!==v&&0!==v),Wb(e,"fa-pull-".concat(b),"undefined"!==typeof b&&null!==b),Wb(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(w).map((function(t){return w[t]?t:null})).filter((function(t){return t}))}(n)),Xb(a.split(" ")))),d=_b("transform","string"===typeof n.transform?Hb.transform(n.transform):n.transform),f=_b("mask",Qb(i)),p=Bb(c,Fb(Fb(Fb(Fb({},h),d),f),{},{symbol:o,title:s,titleId:l,maskId:u}));if(!p)return function(){var t;!Jb&&console&&"function"===typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",c),null;var m=p.abstract,g={ref:e};return Object.keys(n).forEach((function(t){tw.defaultProps.hasOwnProperty(t)||(g[t]=n[t])})),ew(m[0],g)}tw.displayName="FontAwesomeIcon",tw.propTypes={beat:qh().bool,border:qh().bool,bounce:qh().bool,className:qh().string,fade:qh().bool,flash:qh().bool,mask:qh().oneOfType([qh().object,qh().array,qh().string]),maskId:qh().string,fixedWidth:qh().bool,inverse:qh().bool,flip:qh().oneOf(["horizontal","vertical","both"]),icon:qh().oneOfType([qh().object,qh().array,qh().string]),listItem:qh().bool,pull:qh().oneOf(["right","left"]),pulse:qh().bool,rotation:qh().oneOf([0,90,180,270]),shake:qh().bool,size:qh().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:qh().bool,spinPulse:qh().bool,spinReverse:qh().bool,symbol:qh().oneOfType([qh().bool,qh().string]),title:qh().string,titleId:qh().string,transform:qh().oneOfType([qh().string,qh().object]),swapOpacity:qh().bool},tw.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var ew=function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var i=(n.children||[]).map((function(n){return t(e,n)})),o=Object.keys(n.attributes||{}).reduce((function(t,e){var r=n.attributes[e];switch(e){case"class":t.attrs.className=r,delete n.attributes.class;break;case"style":t.attrs.style=Gb(r);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=r:t.attrs[Yb(e)]=r}return t}),{attrs:{}}),a=r.style,s=void 0===a?{}:a,l=qb(r,Kb);return o.attrs.style=Fb(Fb({},o.attrs.style),s),e.apply(void 0,[n.tag,Fb(Fb({},o.attrs),l)].concat(Xb(i)))}.bind(null,k.createElement),nw={prefix:"fas",iconName:"angles-right",icon:[448,512,[187,"angle-double-right"],"f101","M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"]},rw=nw,iw={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]},ow={prefix:"fas",iconName:"braille",icon:[640,512,[],"f2a1","M128 96C128 131.3 99.35 160 64 160C28.65 160 0 131.3 0 96C0 60.65 28.65 32 64 32C99.35 32 128 60.65 128 96zM160 256C160 220.7 188.7 192 224 192C259.3 192 288 220.7 288 256C288 291.3 259.3 320 224 320C188.7 320 160 291.3 160 256zM224 272C232.8 272 240 264.8 240 256C240 247.2 232.8 240 224 240C215.2 240 208 247.2 208 256C208 264.8 215.2 272 224 272zM128 416C128 451.3 99.35 480 64 480C28.65 480 0 451.3 0 416C0 380.7 28.65 352 64 352C99.35 352 128 380.7 128 416zM64 400C55.16 400 48 407.2 48 416C48 424.8 55.16 432 64 432C72.84 432 80 424.8 80 416C80 407.2 72.84 400 64 400zM288 416C288 451.3 259.3 480 224 480C188.7 480 160 451.3 160 416C160 380.7 188.7 352 224 352C259.3 352 288 380.7 288 416zM224 400C215.2 400 208 407.2 208 416C208 424.8 215.2 432 224 432C232.8 432 240 424.8 240 416C240 407.2 232.8 400 224 400zM0 256C0 220.7 28.65 192 64 192C99.35 192 128 220.7 128 256C128 291.3 99.35 320 64 320C28.65 320 0 291.3 0 256zM160 96C160 60.65 188.7 32 224 32C259.3 32 288 60.65 288 96C288 131.3 259.3 160 224 160C188.7 160 160 131.3 160 96zM480 96C480 131.3 451.3 160 416 160C380.7 160 352 131.3 352 96C352 60.65 380.7 32 416 32C451.3 32 480 60.65 480 96zM640 96C640 131.3 611.3 160 576 160C540.7 160 512 131.3 512 96C512 60.65 540.7 32 576 32C611.3 32 640 60.65 640 96zM576 80C567.2 80 560 87.16 560 96C560 104.8 567.2 112 576 112C584.8 112 592 104.8 592 96C592 87.16 584.8 80 576 80zM512 256C512 220.7 540.7 192 576 192C611.3 192 640 220.7 640 256C640 291.3 611.3 320 576 320C540.7 320 512 291.3 512 256zM576 272C584.8 272 592 264.8 592 256C592 247.2 584.8 240 576 240C567.2 240 560 247.2 560 256C560 264.8 567.2 272 576 272zM640 416C640 451.3 611.3 480 576 480C540.7 480 512 451.3 512 416C512 380.7 540.7 352 576 352C611.3 352 640 380.7 640 416zM576 400C567.2 400 560 407.2 560 416C560 424.8 567.2 432 576 432C584.8 432 592 424.8 592 416C592 407.2 584.8 400 576 400zM352 256C352 220.7 380.7 192 416 192C451.3 192 480 220.7 480 256C480 291.3 451.3 320 416 320C380.7 320 352 291.3 352 256zM416 272C424.8 272 432 264.8 432 256C432 247.2 424.8 240 416 240C407.2 240 400 247.2 400 256C400 264.8 407.2 272 416 272zM480 416C480 451.3 451.3 480 416 480C380.7 480 352 451.3 352 416C352 380.7 380.7 352 416 352C451.3 352 480 380.7 480 416zM416 400C407.2 400 400 407.2 400 416C400 424.8 407.2 432 416 432C424.8 432 432 424.8 432 416C432 407.2 424.8 400 416 400z"]},aw={prefix:"fas",iconName:"bullhorn",icon:[512,512,[128363,128226],"f0a1","M480 179.6C498.6 188.4 512 212.1 512 240C512 267.9 498.6 291.6 480 300.4V448C480 460.9 472.2 472.6 460.2 477.6C448.3 482.5 434.5 479.8 425.4 470.6L381.7 426.1C333.7 378.1 268.6 352 200.7 352H192V480C192 497.7 177.7 512 160 512H96C78.33 512 64 497.7 64 480V352C28.65 352 0 323.3 0 288V192C0 156.7 28.65 128 64 128H200.7C268.6 128 333.7 101 381.7 53.02L425.4 9.373C434.5 .2215 448.3-2.516 460.2 2.437C472.2 7.39 480 19.06 480 32V179.6zM200.7 192H192V288H200.7C280.5 288 357.2 317.8 416 371.3V108.7C357.2 162.2 280.5 192 200.7 192V192z"]},sw={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64V400zM342.6 278.6C330.1 291.1 309.9 291.1 297.4 278.6L240 221.3L150.6 310.6C138.1 323.1 117.9 323.1 105.4 310.6C92.88 298.1 92.88 277.9 105.4 265.4L217.4 153.4C229.9 140.9 250.1 140.9 262.6 153.4L320 210.7L425.4 105.4C437.9 92.88 458.1 92.88 470.6 105.4C483.1 117.9 483.1 138.1 470.6 150.6L342.6 278.6z"]},lw={prefix:"fas",iconName:"check",icon:[448,512,[10004,10003],"f00c","M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"]},uw={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"]},cw={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"]},hw={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9898,9899,11044,61708,61915,9679],"f111","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"]},dw={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"]},fw=dw,pw={prefix:"fas",iconName:"circle-chevron-right",icon:[512,512,["chevron-circle-right"],"f138","M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z"]},mw=pw,gw={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"]},yw=gw,vw={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"]},bw=vw,ww={prefix:"fas",iconName:"circle-stop",icon:[512,512,[62094,"stop-circle"],"f28d","M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM352 328c0 13.2-10.8 24-24 24h-144C170.8 352 160 341.2 160 328v-144C160 170.8 170.8 160 184 160h144C341.2 160 352 170.8 352 184V328z"]},xw=ww,Mw={prefix:"fas",iconName:"circle-up",icon:[512,512,[61467,"arrow-alt-circle-up"],"f35b","M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256c141.4 0 256-114.6 256-256S397.4 0 256 0zM382.8 246.1C380.3 252.1 374.5 256 368 256h-64v96c0 17.67-14.33 32-32 32h-32c-17.67 0-32-14.33-32-32V256h-64C137.5 256 131.7 252.1 129.2 246.1C126.7 240.1 128.1 233.3 132.7 228.7l112-112c6.248-6.248 16.38-6.248 22.62 0l112 112C383.9 233.3 385.3 240.1 382.8 246.1z"]},kw=Mw,Sw={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"]},Cw=Sw,Pw={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"]},Tw={prefix:"fas",iconName:"comment",icon:[512,512,[61669,128489],"f075","M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z"]},Aw={prefix:"fas",iconName:"diagram-project",icon:[576,512,["project-diagram"],"f542","M0 80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V96H384V80C384 53.49 405.5 32 432 32H528C554.5 32 576 53.49 576 80V176C576 202.5 554.5 224 528 224H432C405.5 224 384 202.5 384 176V160H192V176C192 177.7 191.9 179.4 191.7 180.1L272 288H368C394.5 288 416 309.5 416 336V432C416 458.5 394.5 480 368 480H272C245.5 480 224 458.5 224 432V336C224 334.3 224.1 332.6 224.3 331L144 224H48C21.49 224 0 202.5 0 176V80z"]},Nw=Aw,Ow={prefix:"fas",iconName:"down-left-and-up-right-to-center",icon:[512,512,["compress-alt"],"f422","M215.1 272h-136c-12.94 0-24.63 7.797-29.56 19.75C45.47 303.7 48.22 317.5 57.37 326.6l30.06 30.06l-78.06 78.07c-12.5 12.5-12.5 32.75-.0012 45.25l22.62 22.62c12.5 12.5 32.76 12.5 45.26 .0013l78.06-78.07l30.06 30.06c6.125 6.125 14.31 9.367 22.63 9.367c4.125 0 8.279-.7891 12.25-2.43c11.97-4.953 19.75-16.62 19.75-29.56V296C239.1 282.7 229.3 272 215.1 272zM296 240h136c12.94 0 24.63-7.797 29.56-19.75c4.969-11.97 2.219-25.72-6.938-34.87l-30.06-30.06l78.06-78.07c12.5-12.5 12.5-32.76 .0002-45.26l-22.62-22.62c-12.5-12.5-32.76-12.5-45.26-.0003l-78.06 78.07l-30.06-30.06c-9.156-9.141-22.87-11.84-34.87-6.937c-11.97 4.953-19.75 16.62-19.75 29.56v135.1C272 229.3 282.7 240 296 240z"]},jw=Ow,Ew={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128426,128190,"save"],"f0c7","M433.1 129.1l-83.9-83.9C342.3 38.32 327.1 32 316.1 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V163.9C448 152.9 441.7 137.7 433.1 129.1zM224 416c-35.34 0-64-28.66-64-64s28.66-64 64-64s64 28.66 64 64S259.3 416 224 416zM320 208C320 216.8 312.8 224 304 224h-224C71.16 224 64 216.8 64 208v-96C64 103.2 71.16 96 80 96h224C312.8 96 320 103.2 320 112V208z"]},Vw={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"]},Iw=Vw,Rw={prefix:"fas",iconName:"glasses",icon:[576,512,[],"f530","M574.1 280.4l-45.38-181.8c-5.875-23.63-21.62-44-43-55.75c-21.5-11.75-46.1-14.13-70.25-6.375l-15.25 5.125c-8.375 2.75-12.87 11.88-10 20.25l5 15.13c2.75 8.375 11.88 12.88 20.25 10.13l13.12-4.375c10.88-3.625 23-3.625 33.25 1.75c10.25 5.375 17.5 14.5 20.38 25.75l38.38 153.9c-22.12-6.875-49.75-12.5-81.13-12.5c-34.88 0-73.1 7-114.9 26.75H251.4C210.5 258.6 171.4 251.6 136.5 251.6c-31.38 0-59 5.625-81.12 12.5l38.38-153.9c2.875-11.25 10.12-20.38 20.5-25.75C124.4 79.12 136.5 79.12 147.4 82.74l13.12 4.375c8.375 2.75 17.5-1.75 20.25-10.13l5-15.13C188.6 53.49 184.1 44.37 175.6 41.62l-15.25-5.125c-23.13-7.75-48.75-5.375-70.13 6.375c-21.37 11.75-37.12 32.13-43 55.75L1.875 280.4C.6251 285.4 .0001 290.6 .0001 295.9v70.25C.0001 428.1 51.63 480 115.3 480h37.13c60.25 0 110.4-46 114.9-105.4l2.875-38.63h35.75l2.875 38.63C313.3 433.1 363.4 480 423.6 480h37.13c63.62 0 115.2-51 115.2-113.9V295.9C576 290.6 575.4 285.5 574.1 280.4zM203.4 369.7c-2 26-24.38 46.25-51 46.25H115.2C87 415.1 64 393.6 64 366.1v-37.5c18.12-6.5 43.38-13 72.62-13c23.88 0 47.25 4.375 69.88 13L203.4 369.7zM512 366.1c0 27.5-23 49.88-51.25 49.88h-37.13c-26.62 0-49-20.25-51-46.25l-3.125-41.13c22.62-8.625 46.13-13 70-13c29 0 54.38 6.5 72.5 13V366.1z"]},zw={prefix:"fas",iconName:"grip-vertical",icon:[320,512,[],"f58e","M88 352C110.1 352 128 369.9 128 392V440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392C0 369.9 17.91 352 40 352H88zM280 352C302.1 352 320 369.9 320 392V440C320 462.1 302.1 480 280 480H232C209.9 480 192 462.1 192 440V392C192 369.9 209.9 352 232 352H280zM40 320C17.91 320 0 302.1 0 280V232C0 209.9 17.91 192 40 192H88C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40zM280 192C302.1 192 320 209.9 320 232V280C320 302.1 302.1 320 280 320H232C209.9 320 192 302.1 192 280V232C192 209.9 209.9 192 232 192H280zM40 160C17.91 160 0 142.1 0 120V72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40zM280 32C302.1 32 320 49.91 320 72V120C320 142.1 302.1 160 280 160H232C209.9 160 192 142.1 192 120V72C192 49.91 209.9 32 232 32H280z"]},Lw={prefix:"fas",iconName:"hashtag",icon:[448,512,[],"23","M416 127.1h-58.23l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L292.9 127.1H197.8l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L132.9 127.1H64c-17.67 0-32 14.33-32 32C32 177.7 46.33 191.1 64 191.1h58.23l-21.33 128H32c-17.67 0-32 14.33-32 32c0 17.67 14.33 31.1 32 31.1h58.23l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83C108.5 479.9 110.3 480 112 480c15.36 0 28.92-11.09 31.53-26.73l11.54-69.27h95.12l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83C268.5 479.9 270.3 480 272 480c15.36 0 28.92-11.09 31.53-26.73l11.54-69.27H384c17.67 0 32-14.33 32-31.1c0-17.67-14.33-32-32-32h-58.23l21.33-128H416c17.67 0 32-14.32 32-31.1C448 142.3 433.7 127.1 416 127.1zM260.9 319.1H165.8L187.1 191.1h95.12L260.9 319.1z"]},Hw={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"]},Bw={prefix:"fas",iconName:"lock-open",icon:[576,512,[],"f3c1","M352 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H288V144C288 64.47 352.5 0 432 0C511.5 0 576 64.47 576 144V192C576 209.7 561.7 224 544 224C526.3 224 512 209.7 512 192V144C512 99.82 476.2 64 432 64C387.8 64 352 99.82 352 144V192z"]},Dw={prefix:"fas",iconName:"minus",icon:[448,512,[8722,10134,8211,"subtract"],"f068","M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"]},Fw={prefix:"fas",iconName:"palette",icon:[512,512,[127912],"f53f","M512 255.1C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 319.1 441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V255.1zM96 255.1C78.33 255.1 64 270.3 64 287.1C64 305.7 78.33 319.1 96 319.1C113.7 319.1 128 305.7 128 287.1C128 270.3 113.7 255.1 96 255.1zM128 191.1C145.7 191.1 160 177.7 160 159.1C160 142.3 145.7 127.1 128 127.1C110.3 127.1 96 142.3 96 159.1C96 177.7 110.3 191.1 128 191.1zM256 63.1C238.3 63.1 224 78.33 224 95.1C224 113.7 238.3 127.1 256 127.1C273.7 127.1 288 113.7 288 95.1C288 78.33 273.7 63.1 256 63.1zM384 191.1C401.7 191.1 416 177.7 416 159.1C416 142.3 401.7 127.1 384 127.1C366.3 127.1 352 142.3 352 159.1C352 177.7 366.3 191.1 384 191.1z"]},Uw={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"]},Ww={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"]},qw=Ww,Xw={prefix:"fas",iconName:"percent",icon:[384,512,[62101,"percentage"],"25","M374.6 73.39c-12.5-12.5-32.75-12.5-45.25 0l-320 320c-12.5 12.5-12.5 32.75 0 45.25C15.63 444.9 23.81 448 32 448s16.38-3.125 22.62-9.375l320-320C387.1 106.1 387.1 85.89 374.6 73.39zM64 192c35.3 0 64-28.72 64-64S99.3 64.01 64 64.01S0 92.73 0 128S28.7 192 64 192zM320 320c-35.3 0-64 28.72-64 64s28.7 64 64 64s64-28.72 64-64S355.3 320 320 320z"]},Zw=Xw,Yw={prefix:"fas",iconName:"plus",icon:[448,512,[10133,"add"],"2b","M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"]},Kw={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"]},Gw=Kw,Jw={prefix:"fas",iconName:"right-left",icon:[512,512,["exchange-alt"],"f362","M32 160h319.9l.0791 72c0 9.547 5.652 18.19 14.41 22c8.754 3.812 18.93 2.078 25.93-4.406l112-104c10.24-9.5 10.24-25.69 0-35.19l-112-104c-6.992-6.484-17.17-8.217-25.93-4.408c-8.758 3.816-14.41 12.46-14.41 22L351.9 96H32C14.31 96 0 110.3 0 127.1S14.31 160 32 160zM480 352H160.1L160 279.1c0-9.547-5.652-18.19-14.41-22C136.9 254.2 126.7 255.9 119.7 262.4l-112 104c-10.24 9.5-10.24 25.69 0 35.19l112 104c6.992 6.484 17.17 8.219 25.93 4.406C154.4 506.2 160 497.5 160 488L160.1 416H480c17.69 0 32-14.31 32-32S497.7 352 480 352z"]},Qw=Jw,_w={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M468.9 32.11c13.87 0 27.18 10.77 27.18 27.04v145.9c0 10.59-8.584 19.17-19.17 19.17h-145.7c-16.28 0-27.06-13.32-27.06-27.2c0-6.634 2.461-13.4 7.96-18.9l45.12-45.14c-28.22-23.14-63.85-36.64-101.3-36.64c-88.09 0-159.8 71.69-159.8 159.8S167.8 415.9 255.9 415.9c73.14 0 89.44-38.31 115.1-38.31c18.48 0 31.97 15.04 31.97 31.96c0 35.04-81.59 70.41-147 70.41c-123.4 0-223.9-100.5-223.9-223.9S132.6 32.44 256 32.44c54.6 0 106.2 20.39 146.4 55.26l47.6-47.63C455.5 34.57 462.3 32.11 468.9 32.11z"]},$w=_w,tx={prefix:"fas",iconName:"scale-unbalanced",icon:[640,512,["balance-scale-left"],"f515","M85 250.5c-87 174.2-84.1 165.9-84.1 181.5C.0035 476.1 57.25 512 128 512s128-35.88 128-79.1c0-16.12 1.375-8.752-85.12-181.5C153.3 215.3 102.8 215.1 85 250.5zM55.96 416l71.98-143.1l72.15 143.1H55.96zM554.9 122.5c-17.62-35.25-68.08-35.37-85.83 0c-87 174.2-85.04 165.9-85.04 181.5c0 44.12 57.25 79.1 128 79.1s127.1-35.87 127.1-79.1C639.1 287.9 641.4 295.3 554.9 122.5zM439.1 288l72.04-143.1l72.08 143.1H439.1zM495.1 448h-143.1V153.3c20.83-9.117 36.72-26.93 43.78-48.77l126.3-42.11c16.77-5.594 25.83-23.72 20.23-40.48c-5.578-16.73-23.62-25.86-40.48-20.23l-113.3 37.76c-13.94-23.49-39.29-39.41-68.58-39.41c-44.18 0-79.1 35.82-79.1 80c0 2.961 .5587 5.771 .8712 8.648L117.9 129.7C101.1 135.3 92.05 153.4 97.64 170.1c4.469 13.41 16.95 21.88 30.36 21.88c3.344 0 6.768-.5186 10.13-1.644L273.8 145.1C278.2 148.3 282.1 151.1 288 153.3V496C288 504.8 295.2 512 304 512h223.1c8.838 0 16-7.164 16-15.1C543.1 469.5 522.5 448 495.1 448z"]},ex=tx,nx={prefix:"fas",iconName:"server",icon:[512,512,[],"f233","M480 288H32c-17.62 0-32 14.38-32 32v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32v-128C512 302.4 497.6 288 480 288zM352 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S365.3 408 352 408zM416 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S429.3 408 416 408zM480 32H32C14.38 32 0 46.38 0 64v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V64C512 46.38 497.6 32 480 32zM352 152c-13.25 0-24-10.75-24-24S338.8 104 352 104S376 114.8 376 128S365.3 152 352 152zM416 152c-13.25 0-24-10.75-24-24S402.8 104 416 104S440 114.8 440 128S429.3 152 416 152z"]},rx={prefix:"fas",iconName:"square",icon:[448,512,[9723,9724,61590,9632],"f0c8","M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"]},ix={prefix:"fas",iconName:"star",icon:[576,512,[61446,11088],"f005","M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"]},ox={prefix:"fas",iconName:"thumbtack",icon:[384,512,[128392,128204,"thumb-tack"],"f08d","M32 32C32 14.33 46.33 0 64 0H320C337.7 0 352 14.33 352 32C352 49.67 337.7 64 320 64H290.5L301.9 212.2C338.6 232.1 367.5 265.4 381.4 306.9L382.4 309.9C385.6 319.6 383.1 330.4 377.1 338.7C371.9 347.1 362.3 352 352 352H32C21.71 352 12.05 347.1 6.04 338.7C.0259 330.4-1.611 319.6 1.642 309.9L2.644 306.9C16.47 265.4 45.42 232.1 82.14 212.2L93.54 64H64C46.33 64 32 49.67 32 32zM224 384V480C224 497.7 209.7 512 192 512C174.3 512 160 497.7 160 480V384H224z"]},ax={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"]},sx=ax,lx={prefix:"fas",iconName:"unlock",icon:[448,512,[128275],"f09c","M144 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80V144C80 64.47 144.5 0 224 0C281.5 0 331 33.69 354.1 82.27C361.7 98.23 354.9 117.3 338.1 124.9C322.1 132.5 303.9 125.7 296.3 109.7C283.4 82.63 255.9 64 224 64C179.8 64 144 99.82 144 144L144 192z"]},ux={prefix:"fas",iconName:"up-right-and-down-left-from-center",icon:[512,512,["expand-alt"],"f424","M208 281.4c-12.5-12.5-32.76-12.5-45.26-.002l-78.06 78.07l-30.06-30.06c-6.125-6.125-14.31-9.367-22.63-9.367c-4.125 0-8.279 .7891-12.25 2.43c-11.97 4.953-19.75 16.62-19.75 29.56v135.1C.0013 501.3 10.75 512 24 512h136c12.94 0 24.63-7.797 29.56-19.75c4.969-11.97 2.219-25.72-6.938-34.87l-30.06-30.06l78.06-78.07c12.5-12.49 12.5-32.75 .002-45.25L208 281.4zM487.1 0h-136c-12.94 0-24.63 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.87l30.06 30.06l-78.06 78.07c-12.5 12.5-12.5 32.76 0 45.26l22.62 22.62c12.5 12.5 32.76 12.5 45.26 0l78.06-78.07l30.06 30.06c9.156 9.141 22.87 11.84 34.87 6.937C504.2 184.6 512 172.9 512 159.1V23.1C512 10.74 501.3 0 487.1 0z"]},cx=ux,hx={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z"]},dx=hx,fx={prefix:"fas",iconName:"user-group",icon:[640,512,[128101,"user-friends"],"f500","M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM479.1 320h-73.85C451.2 357.7 480 414.1 480 477.3C480 490.1 476.2 501.9 470 512h138C625.7 512 640 497.6 640 479.1C640 391.6 568.4 320 479.1 320zM432 256C493.9 256 544 205.9 544 144S493.9 32 432 32c-25.11 0-48.04 8.555-66.72 22.51C376.8 76.63 384 101.4 384 128c0 35.52-11.93 68.14-31.59 94.71C372.7 243.2 400.8 256 432 256z"]},px=fx,mx={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"]},gx={prefix:"fas",iconName:"user-slash",icon:[640,512,[],"f506","M95.1 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7c5.625 0 10.73-1.65 15.42-4.029L264.9 304.3C171.3 306.7 95.1 383.1 95.1 477.3zM630.8 469.1l-277.1-217.9c54.69-14.56 95.18-63.95 95.18-123.2C447.1 57.31 390.7 0 319.1 0C250.2 0 193.7 55.93 192.3 125.4l-153.4-120.3C34.41 1.672 29.19 0 24.03 0C16.91 0 9.845 3.156 5.127 9.187c-8.187 10.44-6.375 25.53 4.062 33.7L601.2 506.9c10.5 8.203 25.56 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1z"]},yx={prefix:"fas",iconName:"user-tag",icon:[640,512,[],"f507","M351.8 367.3v-44.1C328.5 310.7 302.4 304 274.7 304H173.3c-95.73 0-173.3 77.65-173.3 173.4C.0005 496.5 15.52 512 34.66 512h378.7c11.86 0 21.82-6.337 28.07-15.43l-61.65-61.57C361.7 416.9 351.8 392.9 351.8 367.3zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM630.6 364.8L540.3 274.8C528.3 262.8 512 256 495 256h-79.23c-17.75 0-31.99 14.25-31.99 32l.0147 79.2c0 17 6.647 33.15 18.65 45.15l90.31 90.27c12.5 12.5 32.74 12.5 45.24 0l92.49-92.5C643.1 397.6 643.1 377.3 630.6 364.8zM447.8 343.9c-13.25 0-24-10.62-24-24c0-13.25 10.75-24 24-24c13.38 0 24 10.75 24 24S461.1 343.9 447.8 343.9z"]},vx={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"]},bx={prefix:"fas",iconName:"wallet",icon:[512,512,[],"f555","M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z"]},wx={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"]},xx=wx,Mx={prefix:"far",iconName:"arrow-alt-circle-up",icon:[512,512,[],"f35b","M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"]},kx={prefix:"far",iconName:"check-circle",icon:[512,512,[],"f058","M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"]},Sx={prefix:"far",iconName:"circle",icon:[512,512,[],"f111","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"]},Cx={prefix:"far",iconName:"copy",icon:[448,512,[],"f0c5","M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"]},Px={prefix:"far",iconName:"flag",icon:[512,512,[],"f024","M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"]},Tx={prefix:"far",iconName:"square",icon:[448,512,[],"f0c8","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"]},Ax={prefix:"far",iconName:"times-circle",icon:[512,512,[],"f057","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"]};const Nx=pn.div`
  background: ${lc};
  box-sizing: border-box;
  border-radius: 1.25rem;
  width: ${250}px;
  padding: 1rem;
  display: flex;
  flex-flow: column wrap;
  transition: opacity 0.1s;
  box-shadow: 3px 3px 20px ${Oc};

  h4 {
    color: ${ic};
    margin: 0 0 0.5rem 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`,Ox=pn.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-bottom: 1rem;

  button {
    position: relative;
    color: ${ic};
    transition: color 0.2s;
    margin: 0 0.25rem;
    opacity: 0.75;
    border: 2px solid ${Sc};
    background: none;
    border-radius: 0.75rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 0;

    svg {
      padding: 0;
      margin: 0;
    }

    path {
      fill: ${ic};
    }
    &:hover {
      opacity: 1;
    }
    &:disabled {
      opacity: 0.5;
      cursor: default;
      background: ${Sc};
    }
  }
`,jx=()=>{const{mode:t,card:e,toggleTheme:n,toggleCard:r}=Og(),i=of(),{position:o}=i,a=(0,k.useRef)(null);(0,k.useEffect)((()=>{1===i.open&&i.checkPalettePosition(a)}),[i.open]),(0,k.useEffect)((()=>(window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)})),[]);const s=()=>{i.closePalette()};return $d(a,(()=>{i.closePalette()}),["ignore-open-palette-button"]),(0,Jd.jsx)(Jd.Fragment,{children:1===i.open&&(0,Jd.jsxs)(Nx,{ref:a,style:{position:"absolute",left:`${o[0]}px`,top:`${o[1]}px`,zIndex:99,opacity:1===i.show?1:0},children:[(0,Jd.jsx)("h4",{children:"Theme"}),(0,Jd.jsxs)(Ox,{children:[(0,Jd.jsx)("button",{type:"button",onClick:()=>n(),disabled:"light"===t,children:(0,Jd.jsx)(Dg,{width:"1.65rem",height:"1.65rem"})}),(0,Jd.jsx)("button",{type:"button",onClick:()=>n(),disabled:"dark"===t,children:(0,Jd.jsx)(Rg,{width:"1.25rem",height:"1.25rem"})})]}),(0,Jd.jsx)("h4",{children:"Card Style"}),(0,Jd.jsxs)(Ox,{children:[(0,Jd.jsx)("button",{type:"button",onClick:()=>r("flat"),disabled:"flat"===e,children:"\xa0"}),(0,Jd.jsx)("button",{type:"button",onClick:()=>r("border"),disabled:"border"===e,children:(0,Jd.jsx)(tw,{icon:Tx})}),(0,Jd.jsx)("button",{type:"button",onClick:()=>r("shadow"),disabled:"shadow"===e,children:(0,Jd.jsx)(tw,{icon:rx})})]})]})})};var Ex=__webpack_require__(2426),Vx=__webpack_require__.n(Ex);const Ix=pn.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`,Rx=pn.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 1rem;
`,zx=pn(Yu.div)`
  display: flex;
  flex-flow: column wrap;
  z-index: 0;
  flex-basis: 100%;
  flex: 1;
  flex-basis: 100%;
  margin-bottom: 1rem;

  @media (min-width: 800px) {
    flex-basis: 33%;
    min-width: 200px;
    max-width: none;
    margin-bottom: 0;
  }

  /* responsive screen sizing */
  h2 {
    font-size: 1.2rem;
  }

  @media (min-width: 950px) {
    max-width: 300px;
    h2 {
      font-size: 1.35rem;
    }
  }

  .content {
    background: ${uc};
    display: flex;
    border-radius: 0.75rem;
    margin-right: 1.25rem;
    padding: 1rem 0;
    max-height: 3.4rem;
    flex-flow: row wrap;

    @media (max-width: 749px) {
      margin-right: 0;
      padding: 0.9rem 0;
    }

    h2,
    h4 {
      margin: 0;
    }

    h4 {
      flex: 1;
      display: flex;
      flex-flow: row wrap;
      align-items: center;

      .assistant-icon {
        margin-left: 0.6rem;
      }
    }

    > .chart {
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      padding-left: 1rem;

      .graph {
        opacity: 0.75;
        overflow: hidden;
      }

      .tooltip {
        background: ${kc};
        opacity: 0;
        position: absolute;
        top: -20px;
        left: -8px;
        z-index: 2;
        border-radius: 0.5rem;
        padding: 0 0.5rem;
        width: auto;
        max-width: 200px;
        transition: opacity 0.2s;

        p {
          text-align: center;
          color: ${oc};
          margin: 0;
          font-size: 0.9rem;
        }
      }

      &:hover {
        .tooltip {
          opacity: 1;
        }
      }
    }

    > .labels {
      padding-left: 1.25rem;
      flex-basis: 70%;
      flex: 1;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      overflow: hidden;

      h2 {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 0.4rem;

        span.total {
          color: ${ic};
          font-size: 0.88rem;
          margin-left: 0.3rem;
          margin-top: 0.2rem;
        }
      }
    }
  }
`,Lx=t=>{let{children:e}=t;return(0,Jd.jsx)(Ix,{className:"page-padding",children:(0,Jd.jsx)(Rx,{children:e})})},Hx=pn.div`
  display: flex;
  flex-flow: ${t=>t.withAction?"row":"column"} wrap;
  width: 100%;
  padding: ${t=>t.padded?"0.75rem 1.2rem 0.5rem 1.2rem":"0.25rem"};

  h2,
  h3 {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    flex-grow: ${t=>t.withAction?1:0};

    .assistant-icon {
      margin-left: 0.6rem;
    }
  }
  h4 {
    margin: 0 0 0.5rem 0;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;

    .assistant-icon {
      margin-left: 0.5rem;
    }
  }
`,Bx=pn.div`
  border: ${Ec} ${Sc};
  box-shadow: ${Vc} ${Oc};
  box-sizing: border-box;
  padding: ${t=>t.noPadding?"0rem":t.transparent?"0rem 0rem":"1.2rem"};
  border-radius: 1rem;
  background: ${t=>t.transparent?"none":uc};
  display: flex;
  flex-flow: column nowrap;
  align-content: flex-start;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  margin-top: ${t=>t.transparent?"0rem":"1rem"};
  position: relative;

  @media (max-width: ${Nt}px) {
    padding: ${t=>t.noPadding?"0rem":t.transparent?"0rem 0rem":"1rem 0.5rem"};
  }

  @media (min-width: ${1051}px) {
    height: ${t=>t.height?`${t.height}px`:"inherit"};
  }

  .inner {
    padding: 1rem;
    display: flex;
    flex-flow: column nowrap;
    align-content: flex-start;
    align-items: flex-start;
    width: 100%;
    position: relative;
  }

  .option {
    border-bottom: 1px solid #ddd;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    text-align: left;
  }
`,Dx=pn.div`
  border: ${Ec} ${Sc};
  box-shadow: ${Vc} ${Oc};
  box-sizing: border-box;
  border-radius: 1rem;
  background: ${t=>t.transparent?"none":uc};
  display: flex;
  flex-flow: column nowrap;
  align-content: flex-start;
  align-items: flex-start;
  flex: 1;
  margin-top: ${t=>t.noMargin?0:"1rem"};
  position: relative;
  overflow: hidden;

  .inner {
    width: 100%;
    height: 100%;
  }

  .label {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 0.8rem;
    font-variation-settings: 'wght' 550;
    background: ${Rc};
    border-radius: 0.3rem;
    padding: 0.2rem 0.4rem;
    color: #fff;
    opacity: 0.8;
  }
  .head {
    padding: 0.75rem 1.2rem 0.5rem 1.2rem;
  }

  h2 {
    .amount {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      flex: 1;
    }
  }

  h2,
  h4 {
    margin: 0;
    padding: 0.25rem 0;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-end;
    align-items: flex-end;
    justify-content: flex-start;

    .fiat {
      font-size: 1rem;
      color: ${ic};
      margin-top: 0.2rem;
      font-variation-settings: 'wght' 530;
    }
  }
  h2 {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
  }
  p {
    margin: 0.25rem 0 0;
  }
  h4 {
    align-items: center;
    margin-top: 0.4rem;

    .assistant-icon {
      margin-left: 0.4rem;
    }
  }
  .small_button {
    background: #f1f1f1;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
  }
  .graph {
    position: relative;
    flex: ${t=>t.flex?1:0};
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    padding: 1rem 1.2rem;
  }
  .graph_line {
    margin-top: 1.5rem;
    margin-left: 1rem;
    padding: 1rem 1rem 0.5rem 1rem;
  }
  .graph_with_extra {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    height: 190px;
    flex: 1;

    .extra {
      flex: 1;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-end;
      align-items: flex-end;
      align-content: flex-end;
      height: 190px;
      border: 1px solid;
    }
  }

  .change {
    margin-left: 0.6rem;
    font-size: 0.9rem;
    color: white;
    border-radius: 0.75rem;
    padding: 0.15rem 0.5rem;
    font-variation-settings: 'wght' 550;
    &.pos {
      background: #3eb955;
    }
    &.neg {
      background: #d2545d;
    }
  }
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 0.9rem;
  font-variation-settings: 'wght' 570;
  border-radius: 0.3rem;
  padding: 0.25rem 0.4rem;
  color: ${t=>t.color};
  opacity: ${t=>t.opacity};
`,ret=()=>{const{network:t}=u$(),{mode:e}=Og(),{services:n}=$tt();return(0,Jd.jsxs)(net,{color:n.includes("subscan")?tc[`${t.name}-${e}`]:Qu.text.secondary[e],opacity:n.includes("subscan")?1:.5,children:[(0,Jd.jsx)(tw,{icon:Nw,transform:"shrink-2",style:{marginRight:"0.3rem"}}),"Subscan"]})},iet=t=>{var e;const{title:n}=t,r=null!==(e=t.tabs)&&void 0!==e?e:[],[i,o]=(0,k.useState)(!1),a=(0,k.useRef)();return(0,k.useEffect)((()=>{const t=a.current,e=new IntersectionObserver((t=>{let[e]=t;o(e.intersectionRatio<1)}),{threshold:[1],rootMargin:"-1px 0px 0px 0px"});return e.observe(t),()=>{e.unobserve(t)}}),[i]),(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(Wc,{}),(0,Jd.jsxs)(Uc,{ref:a,sticky:i,children:[(0,Jd.jsx)("h1",{className:"page-padding",children:n}),r.length>0&&(0,Jd.jsx)("section",{className:"tabs page-padding",children:(0,Jd.jsx)("div",{className:"inner",children:r.map(((t,e)=>(0,Jd.jsx)("button",{className:t.active?"active":"",type:"button",onClick:()=>t.onClick(),children:t.title},`page_tab_${e}`)))})})]})]})};var oet=__webpack_require__(3881),aet=__webpack_require__.n(oet);const set=t=>{const e=null===t||void 0===t?void 0:t.offsetWidth;return{height:null===t||void 0===t?void 0:t.offsetHeight,width:e}},uet=t=>{const[e,n]=k.useState(set(t));return k.useEffect((()=>{const e=aet()((()=>{n(set(t))}),100,{trailing:!0,leading:!1});return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}})),e},cet=(t,e)=>({width:void 0===t.width?"100%":`${t.width}px`,height:void 0===t.height?e:`${t.height}px`,minHeight:e}),het=(t,e,n)=>{if(!t.length)return t;const r=[];let i=367,o=3e3,a={amount:new(sf())(0),event_id:""};const s=Vx().unix(t[0].block_timestamp);let l=Vx()().startOf("day").diff(s,"days");if(l>0){l=l>e?e:l;let t=Vx()().add(1,"days").endOf("day");for(let e=1;e<=l;e++)t=t.subtract(1,"days"),r.push({amount:0,event_id:"Reward",block_timestamp:t.unix()})}if(t.length>0){let s=0,l=0;for(const u of t){if(r.length>=e)break;s++;const c=Vx().unix(u.block_timestamp),h=c.dayOfYear(),d=c.year();if(h<i||d<o){const t=Vx()(`${i}/${o}`,"DDD/YYYY").unix(),e=Vx()(`${h}/${d}`,"DDD/YYYY").unix(),s=Vx().unix(t).diff(Vx().unix(e),"days");0!==l?l+=s:l++;const c=Vx()(`${i}/${o}`,"DDD/YYYY").endOf("day").unix();if(l>1&&r.push({amount:mg(a.amount,n),event_id:a.amount.lt(new(sf())(0))?"Slash":"Reward",block_timestamp:c}),0!==l){let e=Vx().unix(t);if(s>1)for(let t=1;t<s;t++)e=e.subtract(1,"days"),r.push({amount:0,event_id:"Reward",block_timestamp:e.unix()})}const f=new(sf())(u.amount);a={amount:f,event_id:f.lt(new(sf())(0))?"Slash":"Reward"},h<i&&(i=h),d<o&&(o=d)}else a.amount=a.amount.add(new(sf())(u.amount));s===t.length&&r.push({amount:mg(a.amount,n),event_id:a.amount.lt(new(sf())(0))?"Slash":"Reward",block_timestamp:u.block_timestamp})}}return r},det=(t,e)=>{if(t.length<e){const n=e-t.length;let r;r=t.length?Vx().unix(t[t.length-1].block_timestamp):Vx()().endOf("day");for(let e=0;e<n;e++)r=r.subtract(1,"days"),t.push({amount:0,event_id:"Reward",block_timestamp:r.unix()})}return t};var fet=__webpack_require__(8029),pet=__webpack_require__(7550);"function"===typeof lM&&lM.asIntN;const met="object"===typeof process;function get(t){return"undefined"===typeof t}const yet=[{info:"on",text:"Allow camera access",value:"on"},{info:"off",text:"Do not allow camera access",value:"off"}],vet=[{info:"session",text:"Once per session",value:"session"},{info:"tx",text:"On each transaction",value:"tx"}],bet=[{info:"local",text:"Local Node (Own, 127.0.0.1:9944)",value:"ws://127.0.0.1:9944/"}],wet=bet[0],xet=[{info:"none",text:"Do not attach Ledger devices",value:"none"},{info:"webusb",text:"Attach Ledger via WebUSB (Chrome, recommended)",value:"webusb"},{info:"hid",text:"Attach Ledger via WebHID (Chrome, experimental)",value:"hid"}],Met="undefined"!==typeof window&&window.location.host.includes("polkadot"),ket=!Met&&"undefined"!==typeof window&&window.location.host.includes("ui-light")?"light":"full",Cet=[{info:"full",text:"Fully featured",value:"full"},{info:"light",text:"Basic features only",value:"light"}],Pet=Met?"polkadot":"substrate",Tet=[{info:"polkadot",text:"Polkadot",value:"polkadot"},{info:"substrate",text:"Substrate",value:"substrate"}],Aet=Met?"polkadot":"substrate",Net=[{info:"default",text:"Default for the connected node",value:"default"},{info:"polkadot",text:"Polkadot",value:"polkadot"},{info:"substrate",text:"Substrate",value:"substrate"},{info:"beachball",text:"Beachball",value:"beachball"}],Oet=mI.map((t=>{let{displayName:e,network:n,prefix:r}=t;return{info:n,text:e,value:r}})),jet=[{info:"default",text:"Default for the connected node",value:-1},...Oet],Eet=[{info:"sr25519",text:"Schnorrkel (sr25519, recommended)",value:"sr25519"},{info:"ed25519",text:"Edwards (ed25519, alternative)",value:"ed25519"},{info:"ecdsa",text:"ECDSA (Non BTC/ETH compatible)",value:"ecdsa"}],Vet=[{info:"ethereum",text:"ECDSA (ETH compatible)",value:"ethereum"}],Iet=[...Eet,{info:"ed25519-ledger",text:"Ledger (ed25519, BIP32 derivation)",value:"ed25519-ledger"}];function Ret(t,e,n){const r=e||n;return t.some((t=>{let{value:e}=t;return e===r}))?r:n}var zet=new WeakMap,Let=new WeakMap,Het=new WeakMap,Bet=new WeakMap,Det=new WeakMap,Fet=new WeakMap,Uet=new WeakMap,Wet=new WeakMap,qet=new WeakMap,Xet=new WeakMap,Zet=new WeakMap,Yet=new WeakMap;const Ket=new class{constructor(){bp(this,zet,{writable:!0,value:void 0}),bp(this,Let,{writable:!0,value:void 0}),bp(this,Het,{writable:!0,value:void 0}),bp(this,Bet,{writable:!0,value:void 0}),bp(this,Det,{writable:!0,value:void 0}),bp(this,Fet,{writable:!0,value:void 0}),bp(this,Uet,{writable:!0,value:void 0}),bp(this,Wet,{writable:!0,value:void 0}),bp(this,qet,{writable:!0,value:void 0}),bp(this,Xet,{writable:!0,value:void 0}),bp(this,Zet,{writable:!0,value:void 0}),bp(this,Yet,{writable:!0,value:void 0});const t=pet.get("settings")||{};Mp(this,zet,new wG),Mp(this,Het,"string"===typeof t.apiUrl&&t.apiUrl||met&&{NODE_ENV:"production",PUBLIC_URL:"/polkadot-staking-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&{NODE_ENV:"production",PUBLIC_URL:"/polkadot-staking-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.WS_URL||wet.value),Mp(this,Let,{param:xp(this,Het),type:"json-rpc"}),Mp(this,Bet,Ret(yet,t.camera,"off")),Mp(this,Uet,Ret(xet,t.ledgerConn,"none")),Mp(this,Det,t.i18nLang||"default"),Mp(this,Fet,t.icon||"default"),Mp(this,Wet,t.locking||"session"),Mp(this,qet,get(t.prefix)?-1:t.prefix),Mp(this,Xet,t.uiMode||ket),Mp(this,Zet,t.uiTheme||Pet),Mp(this,Yet,t.notification||"popup")}get camera(){return xp(this,Bet)}get apiType(){return xp(this,Let)}get apiUrl(){return xp(this,Het)}get i18nLang(){return xp(this,Det)}get icon(){return xp(this,Fet)}get notification(){return xp(this,Yet)}get ledgerConn(){return xp(this,Uet)}get locking(){return xp(this,Wet)}get prefix(){return xp(this,qet)}get uiMode(){return xp(this,Xet)}get uiTheme(){return xp(this,Zet)}get availableCamera(){return yet}get availableCryptos(){return Eet}get availableCryptosEth(){return Vet}get availableCryptosLedger(){return Iet}get availableIcons(){return Net}get availableLedgerConn(){return xet}get availableLocking(){return vet}get availableNodes(){return bet}get availablePrefixes(){return jet}get availableUIModes(){return Cet}get availableUIThemes(){return Tet}get(){return{apiType:xp(this,Let),apiUrl:xp(this,Het),camera:xp(this,Bet),i18nLang:xp(this,Det),icon:xp(this,Fet),ledgerConn:xp(this,Uet),locking:xp(this,Wet),notification:xp(this,Yet),prefix:xp(this,qet),uiMode:xp(this,Xet),uiTheme:xp(this,Zet)}}set(t){Mp(this,Let,t.apiType||xp(this,Let)),Mp(this,Het,t.apiUrl||xp(this,Het)),Mp(this,Bet,t.camera||xp(this,Bet)),Mp(this,Uet,t.ledgerConn||xp(this,Uet)),Mp(this,Det,t.i18nLang||xp(this,Det)),Mp(this,Fet,t.icon||xp(this,Fet)),Mp(this,Wet,t.locking||xp(this,Wet)),Mp(this,Yet,t.notification||xp(this,Yet)),Mp(this,qet,get(t.prefix)?xp(this,qet):t.prefix),Mp(this,Xet,t.uiMode||xp(this,Xet)),Mp(this,Zet,t.uiTheme||xp(this,Zet));const e=this.get();pet.set("settings",e),xp(this,zet).emit("change",e)}on(t,e){xp(this,zet).on(t,e)}},Get=["#ffe119","#4363d8","#f58231","#fabebe","#e6beff","#800000","#000075","#a9a9a9","#ffffff","#000000"];function Jet(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Qet(t,e,n){const r=Jet("circle");return r.setAttributeNS("","cx",`${e}`),r.setAttributeNS("","cy",`${n}`),r.setAttributeNS("","r",`${t}`),r}function _et(t,e,n,r){const i=n/2,o=360*t(),a=(5-r)/5*(n/2)+n/8*t(),s=n/4*(t()+(r+1)/5),l=Qet(a,s*Math.sin(o)+i,s*Math.cos(o)+i);return l.setAttributeNS("","fill",e),l}function $et(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"svg",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const i=Jet(e);return i.setAttributeNS("","x",`${n}`),i.setAttributeNS("","y",`${r}`),i.setAttributeNS("","width",`${t}`),i.setAttributeNS("","height",`${t}`),i}var tnt=__webpack_require__(3861);function ent(t){const e=30*t()-15,n=Get.map((t=>tnt(t).rotate(e)));return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;const r=Math.floor(n.length*t());return n.splice(r,1)[0].alpha(e).string()}}function nnt(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"white",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i=document.createElement("div"),o=Object.assign({background:e,borderRadius:t/2+"px",display:"inline-block",height:`${t}px`,margin:"0px",overflow:"hidden",padding:"0px",width:`${t}px`},r);return i.className=n,i.style.background=e,Object.keys(o).forEach((t=>{i.style[t]=o[t]})),i}function rnt(t){return t instanceof Uint8Array}const int=sM("TextEncoder",class{encode(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}}),ont=new int;function ant(t){return t?ont.encode(t.toString()):new Uint8Array}function snt(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Uint8Array(32);const e=rnt(t)?t:ant(t);let n=e[Math.floor(e.length/2)]%e.length-1;const r=()=>(n+=1,n===e.length&&(n=0),e[n]);return()=>(256*r()+r())/65536}function lnt(t){let{address:e,className:n="",size:r,style:i}=t;const o=(0,k.useCallback)((t=>{t&&t.appendChild(function(t,e){let{size:n=256}=e,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3?arguments[3]:void 0;const o=snt(t),a=ent(o),s=nnt(n,"white",r,i),l=nnt(n,a()),u=$et(n);s.appendChild(l),l.appendChild(u);for(let c=0;c<5;c++){const t=_et(o,a(),n,c);u.appendChild(t)}return s}(e,{isAlternative:!1,size:r}))}),[e,r]);return(0,Jd.jsx)("div",{className:n,ref:o,style:i})}const unt=k.memo(lnt);function cnt(t){let{className:e="",size:n,style:r}=t;return(0,Jd.jsx)("svg",{className:e,height:n,style:r,viewBox:"0 0 64 64",width:n})}const hnt=k.memo(cnt);var dnt=__webpack_require__(7883);const fnt=k.memo(pn((function(t){let{address:e,className:n="",style:r}=t;const i=(0,k.useMemo)((()=>dnt(e)),[e]);return(0,Jd.jsx)("img",{className:n,src:i,style:r})})).withConfig({displayName:"Ethereum",componentId:"sc-osop9v-0"})((t=>{let{size:e}=t;return`\n  display: block;\n  height: ${e}px;\n  width: ${e}px;\n`})));function pnt(t,e,n){return parseInt(t.substr(e,n),16)}function mnt(t){return(t|=0)<0?"00":t<16?"0"+t.toString(16):t<256?t.toString(16):"ff"}function gnt(t,e,n){return mnt(255*((n=n<0?n+6:n>6?n-6:n)<1?t+(e-t)*n:n<3?e:n<4?t+(e-t)*(4-n):t))}function ynt(t){if(/^#[0-9a-f]{3,8}$/i.test(t)){let e;const n=t.length;if(n<6){const n=t[1],r=t[2],i=t[3],o=t[4]||"";e="#"+n+n+r+r+i+i+o+o}return(7==n||n>8)&&(e=t),e}}function vnt(t,e,n){const r=[.55,.5,.5,.46,.6,.55,.55][6*t+.5|0];return function(t,e,n){let r;if(0==e){const t=mnt(255*n);r=t+t+t}else{const i=n<=.5?n*(e+1):n+e-n*e,o=2*n-i;r=gnt(o,i,6*t+2)+gnt(o,i,6*t)+gnt(o,i,6*t-2)}return"#"+r}(t,e,n=n<.5?n*r*2:r+(n-.5)*(1-r)*2)}const bnt="undefined"!==typeof window?window:"undefined"!==typeof self?self:"undefined"!==typeof global?global:{},wnt="jdenticon_config",xnt="config";var Mnt={};class knt{constructor(t,e){this.x=t,this.y=e}}class Snt{constructor(t,e,n,r){this.q=t,this.t=e,this.H=n,this.Y=r}I(t,e,n,r){const i=this.q+this.H,o=this.t+this.H,a=this.Y;return 1===a?new knt(i-e-(r||0),this.t+t):2===a?new knt(i-t-(n||0),o-e-(r||0)):3===a?new knt(this.q+e,o-t-(n||0)):new knt(this.q+t,this.t+e)}}const Cnt=new Snt(0,0,0,0);class Pnt{constructor(t){this.J=t,this.u=Cnt}g(t,e){const n=e?-2:2,r=[];for(let i=e?t.length-2:0;i<t.length&&i>=0;i+=n)r.push(this.u.I(t[i],t[i+1]));this.J.g(r)}h(t,e,n,r){const i=this.u.I(t,e,n,n);this.J.h(i,n,r)}i(t,e,n,r,i){this.g([t,e,t+n,e,t+n,e+r,t,e+r],i)}j(t,e,n,r,i,o){const a=[t+n,e,t+n,e+r,t,e+r,t,e];a.splice((i||0)%4*2,2),this.g(a,o)}K(t,e,n,r,i){this.g([t+n/2,e,t+n,e+r/2,t+n/2,e+r,t,e+r/2],i)}}function Tnt(t,e,n,r){let i,o,a,s,l,u;(t%=14)?1==t?(a=0|.5*n,s=0|.8*n,e.j(n-a,0,a,s,2)):2==t?(a=0|n/3,e.i(a,a,n-a,n-a)):3==t?(l=.1*n,u=n<6?1:n<8?2:0|.25*n,l=l>1?0|l:l>.5?1:l,e.i(u,u,n-l-u,n-l-u)):4==t?(o=0|.15*n,a=0|.5*n,e.h(n-a-o,n-a-o,a)):5==t?(l=.1*n,u=4*l,u>3&&(u|=0),e.i(0,0,n,n),e.g([u,u,n-l,u,u+(n-u-l)/2,n-l],!0)):6==t?e.g([0,0,n,0,n,.7*n,.4*n,.4*n,.7*n,n,0,n]):7==t?e.j(n/2,n/2,n/2,n/2,3):8==t?(e.i(0,0,n,n/2),e.i(0,n/2,n/2,n/2),e.j(n/2,n/2,n/2,n/2,1)):9==t?(l=.14*n,u=n<4?1:n<6?2:0|.35*n,l=n<8?l:0|l,e.i(0,0,n,n),e.i(u,u,n-u-l,n-u-l,!0)):10==t?(l=.12*n,u=3*l,e.i(0,0,n,n),e.h(u,u,n-l-u,!0)):11==t?e.j(n/2,n/2,n/2,n/2,3):12==t?(o=.25*n,e.i(0,0,n,n),e.K(o,o,n-o,n-o,!0)):!r&&(o=.4*n,a=1.2*n,e.h(o,o,a)):(i=.42*n,e.g([0,0,n,0,n,n-2*i,n-i,n,0,n]))}function Ant(t,e,n){let r;(t%=4)?1==t?e.j(0,n/2,n,n/2,0):2==t?e.K(0,0,n,n):(r=n/6,e.h(r,r,n-2*r)):e.j(0,0,n,n,0)}function Nnt(t,e,n){const r=function(t,e){const n="object"==typeof t&&t||Mnt[xnt]||bnt[wnt]||{},r=n.lightness||{},i=n.saturation||{},o="color"in i?i.color:i,a=i.grayscale,s=n.backColor,l=n.padding;function u(t,e){let n=r[t];return n&&n.length>1||(n=e),function(t){return(t=n[0]+t*(n[1]-n[0]))<0?0:t>1?1:t}}return{W:function(t){const e=n.hues;let r;return e&&e.length>0&&(r=e[0|.999*t*e.length]),"number"==typeof r?(r/360%1+1)%1:t},o:"number"==typeof o?o:.5,D:"number"==typeof a?a:0,p:u("color",[.4,.8]),F:u("grayscale",[.3,.9]),G:ynt(s),X:"number"==typeof t?t:"number"==typeof l?l:e}}(n,.08);r.G&&t.m(r.G);let i=t.k;const o=.5+i*r.X|0;i-=2*o;const a=new Pnt(t),s=0|i/4,l=0|o+i/2-2*s,u=0|o+i/2-2*s;function c(n,r,i,o,c){const f=pnt(e,i,1);let p=o?pnt(e,o,1):0;t.L(h[d[n]]);for(let t=0;t<c.length;t++)a.u=new Snt(l+c[t][0]*s,u+c[t][1]*s,s,p++%4),r(f,a,s,t);t.M()}const h=function(t,e){return[vnt(t=e.W(t),e.D,e.F(0)),vnt(t,e.o,e.p(.5)),vnt(t,e.D,e.F(1)),vnt(t,e.o,e.p(1)),vnt(t,e.o,e.p(0))]}(pnt(e,-7)/268435455,r),d=[];let f;function p(t){if(t.indexOf(f)>=0)for(let e=0;e<t.length;e++)if(d.indexOf(t[e])>=0)return!0}for(let m=0;m<3;m++)f=pnt(e,8+m,1)%h.length,(p([0,4])||p([2,3]))&&(f=1),d.push(f);c(0,Ant,2,3,[[1,0],[2,0],[2,3],[1,3],[0,1],[3,1],[3,2],[0,2]]),c(1,Ant,4,5,[[0,0],[3,0],[3,3],[0,3]]),c(2,Tnt,1,null,[[1,1],[2,1],[2,2],[1,2]]),t.finish()}function Ont(t){return/^[0-9a-f]{11,}$/i.test(t)&&t}function jnt(t){return function(t){var e,n=0,r=0,i=encodeURI(t)+"%80",o=[],a=[],s=1732584193,l=4023233417,u=~s,c=~l,h=3285377520,d=[s,l,u,c,h],f=0,p="";function m(t,e){return t<<e|t>>>32-e}for(;n<i.length;r++)o[r>>2]=o[r>>2]|("%"==i[n]?parseInt(i.substring(n+1,n+=3),16):i.charCodeAt(n++))<<8*(3-(3&r));for(o[(e=16*(1+(r+7>>6)))-1]=8*r-8;f<e;f+=16){for(n=0;n<80;n++)r=m(s,5)+h+(n<20?1518500249+(l&u^~l&c):n<40?1859775393+(l^u^c):n<60?2400959708+(l&u^l&c^u&c):3395469782+(l^u^c))+(a[n]=n<16?0|o[f+n]:m(a[n-3]^a[n-8]^a[n-14]^a[n-16],1)),h=c,c=u,u=m(l,30),l=s,s=r;d[0]=s=d[0]+s|0,d[1]=l=d[1]+l|0,d[2]=u=d[2]+u|0,d[3]=c=d[3]+c|0,d[4]=h=d[4]+h|0}for(n=0;n<40;n++)p+=(d[n>>3]>>>4*(7-(7&n))&15).toString(16);return p}(null==t?"":""+t)}function Ent(t){return(10*t+.5|0)/10}class Vnt{constructor(){this.v=""}g(t){let e="";for(let n=0;n<t.length;n++)e+=(n?"L":"M")+Ent(t[n].x)+" "+Ent(t[n].y);this.v+=e+"Z"}h(t,e,n){const r=n?0:1,i=Ent(e/2),o=Ent(e),a="a"+i+","+i+" 0 1,"+r+" ";this.v+="M"+Ent(t.x)+" "+Ent(t.y+e/2)+a+o+",0"+a+-o+",0"}}class Int{constructor(t){this.A,this.B={},this.N=t,this.k=t.k}m(t){const e=/^(#......)(..)?/.exec(t),n=e[2]?pnt(e[2],0)/255:1;this.N.m(e[1],n)}L(t){this.A=this.B[t]||(this.B[t]=new Vnt)}M(){}g(t){this.A.g(t)}h(t,e,n){this.A.h(t,e,n)}finish(){const t=this.B;for(let e in t)t.hasOwnProperty(e)&&this.N.O(e,t[e].v)}}const Rnt="http://www.w3.org/2000/svg";class znt{constructor(t){this.k=t,this.C='<svg xmlns="'+Rnt+'" width="'+t+'" height="'+t+'" viewBox="0 0 '+t+" "+t+'">'}m(t,e){e&&(this.C+='<rect width="100%" height="100%" fill="'+t+'" opacity="'+e.toFixed(2)+'"/>')}O(t,e){this.C+='<path fill="'+t+'" d="'+e+'"/>'}toString(){return this.C+"</svg>"}}function Lnt(t,e,n){const r=new znt(e);return Nnt(new Int(r),Ont(t)||jnt(t),n),r.toString()}"undefined"!==typeof document&&document.querySelectorAll.bind(document);function Hnt(t){let{className:e="",publicKey:n,size:r,style:i}=t;return(0,Jd.jsx)("div",{className:e,dangerouslySetInnerHTML:{__html:Lnt(n.substr(2),r)},style:i})}const Bnt=k.memo(Hnt),Dnt=t=>SO(t,512),Fnt=32,Unt=Dnt(new Uint8Array(32)),Wnt={target:{colors:[0,28,0,0,28,0,0,28,0,0,28,0,0,28,0,0,28,0,1],freq:1},cube:{colors:[0,1,3,2,4,3,0,1,3,2,4,3,0,1,3,2,4,3,5],freq:20},quazar:{colors:[1,2,3,1,2,4,5,5,4,1,2,3,1,2,4,5,5,4,0],freq:16},flower:{colors:[0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,3],freq:32},cyclic:{colors:[0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,6],freq:32},vmirror:{colors:[0,1,2,3,4,5,3,4,2,0,1,6,7,8,9,7,8,6,10],freq:128},hmirror:{colors:[0,1,2,3,4,5,6,7,8,9,10,8,6,7,5,3,4,2,11],freq:128}},qnt={cx:Fnt,cy:Fnt,fill:"#eee",r:Fnt};function Xnt(t){const{r:e,r3o4:n,ro2:r,ro4:i,rroot3o2:o,rroot3o4:a}=function(t){const e=t?20:24;return{r:e,r3o4:3*e/4,ro2:e/2,ro4:e/4,rroot3o2:e*Math.sqrt(3)/2,rroot3o4:e*Math.sqrt(3)/4}}(t);return[[Fnt,Fnt-e],[Fnt,Fnt-r],[Fnt-a,Fnt-n],[Fnt-o,Fnt-r],[Fnt-a,Fnt-i],[Fnt-o,Fnt],[Fnt-o,Fnt+r],[Fnt-a,Fnt+i],[Fnt-a,Fnt+n],[Fnt,Fnt+e],[Fnt,Fnt+r],[Fnt+a,Fnt+n],[Fnt+o,Fnt+r],[Fnt+a,Fnt+i],[Fnt+o,Fnt],[Fnt+o,Fnt-r],[Fnt+a,Fnt-i],[Fnt+a,Fnt-n],[Fnt,Fnt]]}function Znt(t){const e=Object.values(Wnt).map((t=>t.freq)).reduce(((t,e)=>t+e)),n=function(t){return Dnt(vI(t)).map(((t,e)=>(t+256-Unt[e])%256))}(t),r=Math.floor((n[30]+256*n[31])%e),i=n[28]%6*3,o=Math.floor(70*n[29]/256+26)%80+30,a=function(t){let e=0;const n=Object.values(Wnt).find((n=>(e+=n.freq,t<e)));if(!n)throw new Error("Unable to find schema");return n}(r),s=Array.from(n).map(((t,e)=>{const n=(t+e%28*58)%256;if(0===n)return"#444";if(255===n)return"transparent";const r=Math.floor(n%64*360/64),i=[53,15,35,75][Math.floor(n/64)];return`hsl(${r}, ${o}%, ${i}%)`}));return a.colors.map(((t,e)=>s[a.colors[e<18?(e+i)%18:18]]))}function Ynt(t,e){let{isAlternative:n}=e;const r=Znt(t);return[qnt].concat(Xnt(n).map(((t,e)=>{let[n,i]=t;return{cx:n,cy:i,fill:r[e],r:5}})))}function Knt(t,e){let{cx:n,cy:r,fill:i,r:o}=t;return(0,Jd.jsx)("circle",{cx:n,cy:r,fill:i,r:o},e)}function Gnt(t){let{address:e,className:n="",isAlternative:r=!1,size:i,style:o}=t;return(0,Jd.jsx)("svg",{className:n,height:i,id:e,name:e,style:o,viewBox:"0 0 64 64",width:i,children:Ynt(e,{isAlternative:r}).map(Knt)})}const Jnt=unt,Qnt=64,_nt={beachball:unt,empty:hnt,ethereum:fnt,jdenticon:Bnt,polkadot:k.memo(Gnt),substrate:Bnt},$nt=pn.div.withConfig({displayName:"Identicon__Wrapper",componentId:"sc-1gm2vek-0"})(["cursor:copy;display:inline-block;line-height:0;> .container{position:relative;> div,> svg{position:relative;}&.highlight:before{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:50%;box-shadow:0 0 5px 2px #aaa;content:'';}}"]);class trt extends k.PureComponent{constructor(){super(...arguments),Tp(this,"state",{address:"",publicKey:"0x"}),Tp(this,"onCopy",(()=>{const{onCopy:t}=this.props,{address:e}=this.state;e&&t&&t(e)}))}static setDefaultPrefix(t){trt.prefix=t}static getDerivedStateFromProps(t,e){let{prefix:n=trt.prefix,theme:r,value:i}=t;if("ethereum"===r){return{address:Cf(i)?QV(i):i||"",publicKey:""}}try{const t=Cf(i)||vf(i)?wI(i,n):i||"",r=Xm(vI(t,!1,n));return t===e.address?null:{address:t,publicKey:r}}catch(avt){return{address:"",publicKey:"0x"}}}render(){const{address:t}=this.state,e=this.getWrapped(this.state,this.props);return t?(0,Jd.jsx)(fet,{onCopy:this.onCopy,text:t,children:e}):e}getWrapped(t,e){let{address:n,publicKey:r}=t,{Custom:i}=e;const{className:o="",isAlternative:a,isHighlight:s,size:l=Qnt,style:u,theme:c=Ket.icon}=this.props,h=n?i||_nt["default"===c?Aet:c]||Jnt:hnt;return(0,Jd.jsx)($nt,{className:`ui--IdentityIcon  ${o}`,style:u,children:(0,Jd.jsx)(h,{address:n,className:s?"highlight":"",isAlternative:a,publicKey:r,size:l})},n)}}function ert(t){return(0,Jd.jsx)(trt,{...t})}Tp(trt,"prefix",void 0);const nrt=k.memo(ert),rrt=pn.div`
  svg > circle:first-child {
    fill: ${mc};
  }
`,irt=t=>{const{value:e,size:n}=t;return(0,Jd.jsx)(rrt,{children:(0,Jd.jsx)(nrt,{value:e,size:n,theme:"polkadot",style:{cursor:"default"}})})},ort=irt,art=k.createContext({addNotification:t=>{},removeNotification:t=>{},notifications:[]}),srt=()=>k.useContext(art),lrt=pn.div`
  padding: 0 1.25rem 0rem 1.25rem;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column wrap;

  .account {
    box-sizing: border-box;
    width: 100%;
    height: 27px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 0;
    margin-top: 1.25rem;

    button {
      color: ${rc};
    }

    .icon {
      position: relative;
      top: 0.1rem;
    }
    .title {
      box-sizing: border-box;
      margin: 0;
      padding: 0 0.5rem;
      flex-grow: 1;
      overflow: hidden;
    }
    h4 {
      margin: 0;
      > .sep {
        border-right: 1px solid ${Sc};
        margin: 0 0.7rem;
        width: 1px;
        height: 1.25rem;
      }
      > .addr {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        flex: 1;
        opacity: 0.75;
      }
    }

    > *:last-child {
      flex-grow: 1;
      display: flex;
      flex-flow: row-reverse wrap;

      > .copy {
        color: ${ic};
        opacity: 0.5;
        cursor: pointer;
        transition: opacity 0.1s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`,urt=pn.div`
  border-bottom: 1px solid ${Sc};
  margin-top: 0.8rem;
  width: 100%;
  height: 1px;
`,crt=()=>{const{addNotification:t}=srt(),{activeAccount:e,getAccount:n}=btt(),r=n(e);let i={};return null!==r&&(i={title:"Address Copied to Clipboard",subtitle:r.address}),(0,Jd.jsxs)(lrt,{children:[(0,Jd.jsxs)("div",{className:"account",children:[null!==r&&(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)("div",{className:"icon",children:(0,Jd.jsx)(irt,{value:r.address,size:"1.6rem"})}),(0,Jd.jsx)("div",{className:"title",children:(0,Jd.jsxs)("h4",{children:[hg(r.address),(0,Jd.jsx)("div",{className:"sep"})," ",(0,Jd.jsx)("span",{className:"addr",children:r.name})]})}),(0,Jd.jsx)("div",{children:(0,Jd.jsx)(Yu.div,{className:"copy",whileHover:{scale:1.02},whileTap:{scale:.97},children:(0,Jd.jsx)("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(r.address),t(i)},children:(0,Jd.jsx)(tw,{icon:Cx,transform:"grow-3"})})})})]}),null===r&&(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)("h4",{style:{marginLeft:0},children:"Account Not Connected"}),(0,Jd.jsx)("div",{})]})]}),(0,Jd.jsx)(urt,{})]})};var hrt=__webpack_require__(6066);const drt=[{key:"overview",definitions:[{title:"Supply Staked",description:["The current cumulative supply of {NETWORK_UNIT} being staked globally.","The percentage of staked {NETWORK_UNIT} is relative to the total supply of {NETWORK_UNIT}."]},{title:"Nominators",description:["Nominators are accounts who are staking in the network, regardless of whether they are active or earning rewards.","In order to stake {NETWORK_UNIT}, you must be a nominator."]},{title:"Active Nominators",description:["The amount of nominators in the network who are actively earning rewards."]},{title:"Your Balance",description:["Your balance represents total amount you have staked in addition to the total amount you have bonded in a Pool.","Unlike your staked balance, your bonded pool balance is held and locked in the pool itself."]},{title:"Announcements",description:["Real time network statistics that may affect your staking positions.","Keep up to date on the state of the network from your Overview."]}]},{key:"stake",definitions:[{title:"Staking Status",description:["The current state of your staking position.","Whether you receive rewards depends on whether you have active nominations in the current era, and whether you are above their over-subscribed threshold.","Your staking status provides you this information at a glance."]},{title:"Stash and Controller Accounts",description:["The Stash and Controller are simply {NETWORK_NAME} accounts that manage your staking activity.","Your Stash account is the account used to hold your staked funds, whereas the Controller account is used to carry out Staking actions on the Stash account's behalf.","When you switch accounts in this app, you are actually switching your Stash account. Your Controller account is then automatically fetched for you.","This app assumes you have both Stash and Controller accounts imported. If you do not, you will not be able to use all app functions.","You can assign a different Controller account on the Stake page."]},{title:"Bonding",description:['Bonding funds is the process of "locking" (or staking) {NETWORK_UNIT}. Bonded {NETWORK_UNIT} will then be automatically allocated to one or more of your nominated validators.',"The minimum active bond statistic is the minimum {NETWORK_UNIT} being bonded by a nominator for the current era."]},{title:"Active Bond Threshold",description:["The amount of {NETWORK_UNIT} needed to be actively nominating in an era. ","Being above this metric simply guarantees that you will be present in the active nominator set for the era. This amount still does not guarantee rewards, as your active nominations may still be over-subscribed.","Only the top {MAX_NOMINATOR_REWARDED_PER_VALIDATOR} nominators are rewarded per validator in {NETWORK_NAME}. Ensuring your active bond is above this threshold will increase your chances of rewards.","You can keep track of these metrics from the dashboard and amend your staking position if necessary, whether increasing your bonded {NETWORK_UNIT} or changing your nominations."]},{title:"Reward Destination",description:["Your reward destination is where your rewards are sent to.","Rewards can be automatically bonded on top of your current bond, or they can be sent to your stash, controller, or an external account of your choosing."]},{title:"Nominating",description:["Nominating is the process of selecting validators you wish to stake your {NETWORK_UNIT} to. You can choose to nominate up to 16 validators for each of your accounts.","Once you have nominated your selected validators, they become your nominations."]},{title:"Nominations",description:["Your nominations are the validators you have chosen to nominate. You can nominate up to 16 validators.","Your bonded funds are automatically distributed to nominations that are active in the staking era.","As long as at least one of your nominations is actively validating in a session, your funds will be staked with that validator and you will receive rewards."]}],external:[]},{key:"pools",definitions:[{title:"Nomination Pools",description:["Nomination pools allow users to contribute {NETWORK_UNIT} and earn staking rewards.","Unlike nominating, staking using pools requires a small amount of {NETWORK_UNIT}, and the pool manages nominees on your behalf."]},{title:"Active Pools",description:["The current amount of active nomination pools."]},{title:"Minimum Join Bond",description:["The minimum amount of {NETWORK_UNIT} needed to bond in order to join a pool."]},{title:"Minimum Create Bond",description:["The minimum amount of {NETWORK_UNIT} needed to bond for a creator  of a pool."]},{title:"Pool Status",description:["Your current pool status, summarising whether your account is actively in a pool and generating rewards."]},{title:"Bonded in Pool",description:["The amount of {NETWORK_UNIT} currently bonded in a pool."]},{title:"Pool Rewards",description:["The amount of rewards in {NETWORK_UNIT} generated by being an active participant in a pool.","Users are required to claim their pool rewards in order to receive them. Pool rewards can be bonded back into the pool, or sent to your account as free {NETWORK_UNIT}."]},{title:"Joined Pool",description:["The currently joined pool. Only one pool can be joined per account."]}],external:[]},{key:"validators",definitions:[{title:"Validator",description:["An entity that validates blocks for the {NETWORK_NAME} Relay Chain. Validators play a key role in {NETWORK_NAME} to secure the network and produce blocks.","As a nominator, you choose which validators you wish to back, and receive rewards for doing so."]},{title:"Active Validator",description:["A validator that is actively validating blocks. Rewards are accumulated based on the validator's activity.","A new set of validators are chosen for each era, so there is no guarantee the same validator will be active in subsequent eras.","{NETWORK_NAME} allows a nominator to nominate up to 16 validators, maximising your chances of nominating an active validator in each era."]},{title:"Era",description:["At the end of each era, validators are rewarded {NETWORK_UNIT} based on how many era points they accumulated in that era. This {NETWORK_UNIT} reward is then distributed amongst the nominators of the validator via a payout.","1 era is currently 24 hours in Polkadot."]},{title:"Epoch",description:["An epoch is another name for a session in {NETWORK_NAME}. A different set of validators are selected to validate blocks at the beginning of every epoch.","1 epoch is currently 4 hours in Polkadot."]},{title:"Era Points",description:["Era Points are accumulated by validators during each era, and depend on a validator's performance.","As a staker, you do not need to worry about Era Points. In general, better performing validators produce more Era Points, which in-turn lead to higher staking rewards."]},{title:"Minimum Nomination Bond",description:["The minimum amount you need bonded in order to nominate."]},{title:"Commission",description:["Validators can take a percentage of the rewards they earn. This chunk is called their commission.","Nominating validators with low commissions mean you will receive a larger share of the rewards they generate.","Many validators will have a commission rate of 100%, meaning you will receive no rewards by nominating these validators.","Examples of such validators include those operating on behalf of exchanges, where nominating and reward distribution is done centrally on the exchange in question.","A validator can update their commission rates as and when they please, and such changes will have an impact on your profitability. Be sure to monitor your nominations on this dashboard to keep updated on their commission rates."]},{title:"Over Subscribed",description:["Only the top {MAX_NOMINATOR_REWARDED_PER_VALIDATOR} nominators for each validator are rewarded in {NETWORK_NAME}. When this number is surpassed, this validator is considered over subscribed."]},{title:"Blocked Nominations",description:["When a validator has blocked nominations, nominators are unable to nominate them."]}],external:[]},{key:"payouts",definitions:[{title:"Payout",description:['Payouts are staking rewards on {NETWORK_NAME}. They depend on how many "Era Points" your nominated validators accrue over time. Rewards are determined at the end of every Era (24 hour periods).',"To receive staking rewards, a Payout needs to be requested. Any nominator backing the validator in question can request a Payout.","One payout request triggers the reward payout for every nominator."]},{title:"Last Era Payout",description:["The total amount of {NETWORK_UNIT} paid out for the last active era.","Payouts are distributed evenly amongst the active validators for that era, and are then further distributed to the active nominators that took part in that era.","The payout amounts received depend on how much {NETWORK_UNIT} the nominators, and validators themselves, had bonded for that era."]},{title:"Payout History",description:["Historical records of payouts made for being an active nominator.","Requesting payouts is a manual process, so you may receive payouts for multiple eras in quick succession or in a sporadic fashion. Your payout graphs may therefore have multiple payouts occur on the same day, or have days where there were no payouts.","This does not mean that you were not nominating or generating rewards in that period - only that the payout for that period was not yet made."]}],external:[]},{key:"community",definitions:[],external:[]}],frt=k.createContext(null),prt=()=>k.useContext(frt);var mrt;function grt(){return grt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},grt.apply(this,arguments)}function yrt(t,e){let{title:n,titleId:r,...i}=t;return k.createElement("svg",grt({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:"100%",height:"100%",ref:e,"aria-labelledby":r},i),n?k.createElement("title",{id:r},n):null,mrt||(mrt=k.createElement("path",{d:"M32 15c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 14.5c-2.5 0-4.5 2-4.5 4.5v12c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5V34c0-2.5-2-4.5-4.5-4.5z"})))}const vrt=k.forwardRef(yrt),brt=(__webpack_require__.p,pn.button`
  background: ${Mc};
  color: ${ic};
  fill: ${ic};
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0.05rem;
  transition: all 0.15s;

  &:hover {
    fill: ${Rc};
  }
`),wrt=t=>{var e;const{goToDefinition:n}=prt(),{page:r,title:i}=t,o=null!==(e=t.size)&&void 0!==e?e:"1.3em";return(0,Jd.jsx)(brt,{className:"assistant-icon ignore-assistant-outside-alerter",onClick:()=>{n(r,i)},style:{width:o,height:o},children:(0,Jd.jsx)(vrt,{className:"ignore-assistant-outside-alerter"})})};const xrt="undefined"===typeof window?function(t){return t()}:window.requestAnimationFrame;function Mrt(t,e,n){const r=n||(t=>Array.prototype.slice.call(t));let i=!1,o=[];return function(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];o=r(a),i||(i=!0,xrt.call(window,(()=>{i=!1,t.apply(e,o)})))}}const krt=t=>"start"===t?"left":"end"===t?"right":"center",Srt=(t,e,n)=>"start"===t?e:"end"===t?n:(e+n)/2;function Crt(){}const Prt=function(){let t=0;return function(){return t++}}();function Trt(t){return null===t||"undefined"===typeof t}function Art(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}function Nrt(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}const Ort=t=>("number"===typeof t||t instanceof Number)&&isFinite(+t);function jrt(t,e){return Ort(t)?t:e}function Ert(t,e){return"undefined"===typeof t?e:t}const Vrt=(t,e)=>"string"===typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function Irt(t,e,n){if(t&&"function"===typeof t.call)return t.apply(n,e)}function Rrt(t,e,n,r){let i,o,a;if(Art(t))if(o=t.length,r)for(i=o-1;i>=0;i--)e.call(n,t[i],i);else for(i=0;i<o;i++)e.call(n,t[i],i);else if(Nrt(t))for(a=Object.keys(t),o=a.length,i=0;i<o;i++)e.call(n,t[a[i]],a[i])}function zrt(t,e){let n,r,i,o;if(!t||!e||t.length!==e.length)return!1;for(n=0,r=t.length;n<r;++n)if(i=t[n],o=e[n],i.datasetIndex!==o.datasetIndex||i.index!==o.index)return!1;return!0}function Lrt(t){if(Art(t))return t.map(Lrt);if(Nrt(t)){const e=Object.create(null),n=Object.keys(t),r=n.length;let i=0;for(;i<r;++i)e[n[i]]=Lrt(t[n[i]]);return e}return t}function Hrt(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function Brt(t,e,n,r){if(!Hrt(t))return;const i=e[t],o=n[t];Nrt(i)&&Nrt(o)?Drt(i,o,r):e[t]=Lrt(o)}function Drt(t,e,n){const r=Art(e)?e:[e],i=r.length;if(!Nrt(t))return t;const o=(n=n||{}).merger||Brt;for(let a=0;a<i;++a){if(!Nrt(e=r[a]))continue;const i=Object.keys(e);for(let r=0,a=i.length;r<a;++r)o(i[r],t,e,n)}return t}function Frt(t,e){return Drt(t,e,{merger:Urt})}function Urt(t,e,n){if(!Hrt(t))return;const r=e[t],i=n[t];Nrt(r)&&Nrt(i)?Frt(r,i):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Lrt(i))}function Wrt(t,e){const n=t.indexOf(".",e);return-1===n?t.length:n}function qrt(t,e){if(""===e)return t;let n=0,r=Wrt(e,n);for(;t&&r>n;)t=t[e.slice(n,r)],n=r+1,r=Wrt(e,n);return t}function Xrt(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Zrt=t=>"undefined"!==typeof t,Yrt=t=>"function"===typeof t,Krt=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};const Grt=Math.PI,Jrt=2*Grt,Qrt=Jrt+Grt,_rt=Number.POSITIVE_INFINITY,$rt=Grt/180,tit=Grt/2,eit=Grt/4,nit=2*Grt/3,rit=Math.log10,iit=Math.sign;function oit(t){const e=Math.round(t);t=sit(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(rit(t))),r=t/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function ait(t){return!isNaN(parseFloat(t))&&isFinite(t)}function sit(t,e,n){return Math.abs(t-e)<n}function lit(t,e,n){let r,i,o;for(r=0,i=t.length;r<i;r++)o=t[r][n],isNaN(o)||(e.min=Math.min(e.min,o),e.max=Math.max(e.max,o))}function uit(t){return t*(Grt/180)}function cit(t){return t*(180/Grt)}function hit(t){if(!Ort(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function dit(t,e){const n=e.x-t.x,r=e.y-t.y,i=Math.sqrt(n*n+r*r);let o=Math.atan2(r,n);return o<-.5*Grt&&(o+=Jrt),{angle:o,distance:i}}function fit(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function pit(t,e){return(t-e+Qrt)%Jrt-Grt}function mit(t){return(t%Jrt+Jrt)%Jrt}function git(t,e,n,r){const i=mit(t),o=mit(e),a=mit(n),s=mit(o-i),l=mit(a-i),u=mit(i-o),c=mit(i-a);return i===o||i===a||r&&o===a||s>l&&u<c}function yit(t,e,n){return Math.max(e,Math.min(n,t))}function vit(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e-6;return t>=Math.min(e,n)-r&&t<=Math.max(e,n)+r}const bit=t=>0===t||1===t,wit=(t,e,n)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*Jrt/n),xit=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*Jrt/n)+1,Mit={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*tit),easeOutSine:t=>Math.sin(t*tit),easeInOutSine:t=>-.5*(Math.cos(Grt*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>bit(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>bit(t)?t:wit(t,.075,.3),easeOutElastic:t=>bit(t)?t:xit(t,.075,.3),easeInOutElastic(t){const e=.1125;return bit(t)?t:t<.5?.5*wit(2*t,e,.45):.5+.5*xit(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-Mit.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?e*(t-=1.5/n)*t+.75:t<2.5/n?e*(t-=2.25/n)*t+.9375:e*(t-=2.625/n)*t+.984375},easeInOutBounce:t=>t<.5?.5*Mit.easeInBounce(2*t):.5*Mit.easeOutBounce(2*t-1)+.5};function kit(t){return t+.5|0}const Sit=(t,e,n)=>Math.max(Math.min(t,n),e);function Cit(t){return Sit(kit(2.55*t),0,255)}function Pit(t){return Sit(kit(255*t),0,255)}function Tit(t){return Sit(kit(t/2.55)/100,0,1)}function Ait(t){return Sit(kit(100*t),0,100)}const Nit={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Oit=[..."0123456789ABCDEF"],jit=t=>Oit[15&t],Eit=t=>Oit[(240&t)>>4]+Oit[15&t],Vit=t=>(240&t)>>4===(15&t);function Iit(t){var e=(t=>Vit(t.r)&&Vit(t.g)&&Vit(t.b)&&Vit(t.a))(t)?jit:Eit;return t?"#"+e(t.r)+e(t.g)+e(t.b)+((t,e)=>t<255?e(t):"")(t.a,e):void 0}const Rit=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function zit(t,e,n){const r=e*Math.min(n,1-n),i=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+t/30)%12;return n-r*Math.max(Math.min(i-3,9-i,1),-1)};return[i(0),i(8),i(4)]}function Lit(t,e,n){const r=function(r){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(r+t/60)%6;return n-n*e*Math.max(Math.min(i,4-i,1),0)};return[r(5),r(3),r(1)]}function Hit(t,e,n){const r=zit(t,1,.5);let i;for(e+n>1&&(i=1/(e+n),e*=i,n*=i),i=0;i<3;i++)r[i]*=1-e-n,r[i]+=e;return r}function Bit(t){const e=t.r/255,n=t.g/255,r=t.b/255,i=Math.max(e,n,r),o=Math.min(e,n,r),a=(i+o)/2;let s,l,u;return i!==o&&(u=i-o,l=a>.5?u/(2-i-o):u/(i+o),s=function(t,e,n,r,i){return t===i?(e-n)/r+(e<n?6:0):e===i?(n-t)/r+2:(t-e)/r+4}(e,n,r,u,i),s=60*s+.5),[0|s,l||0,a]}function Dit(t,e,n,r){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,r)).map(Pit)}function Fit(t,e,n){return Dit(zit,t,e,n)}function Uit(t){return(t%360+360)%360}function Wit(t){const e=Rit.exec(t);let n,r=255;if(!e)return;e[5]!==n&&(r=e[6]?Cit(+e[5]):Pit(+e[5]));const i=Uit(+e[2]),o=+e[3]/100,a=+e[4]/100;return n="hwb"===e[1]?function(t,e,n){return Dit(Hit,t,e,n)}(i,o,a):"hsv"===e[1]?function(t,e,n){return Dit(Lit,t,e,n)}(i,o,a):Fit(i,o,a),{r:n[0],g:n[1],b:n[2],a:r}}const qit={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Xit={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};let Zit;function Yit(t){Zit||(Zit=function(){const t={},e=Object.keys(Xit),n=Object.keys(qit);let r,i,o,a,s;for(r=0;r<e.length;r++){for(a=s=e[r],i=0;i<n.length;i++)o=n[i],s=s.replace(o,qit[o]);o=parseInt(Xit[a],16),t[s]=[o>>16&255,o>>8&255,255&o]}return t}(),Zit.transparent=[0,0,0,0]);const e=Zit[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}const Kit=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;const Git=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,Jit=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function Qit(t,e,n){if(t){let r=Bit(t);r[e]=Math.max(0,Math.min(r[e]+r[e]*n,0===e?360:1)),r=Fit(r),t.r=r[0],t.g=r[1],t.b=r[2]}}function _it(t,e){return t?Object.assign(e||{},t):t}function $it(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Pit(t[3]))):(e=_it(t,{r:0,g:0,b:0,a:1})).a=Pit(e.a),e}function tot(t){return"r"===t.charAt(0)?function(t){const e=Kit.exec(t);let n,r,i,o=255;if(e){if(e[7]!==n){const t=+e[7];o=e[8]?Cit(t):Sit(255*t,0,255)}return n=+e[1],r=+e[3],i=+e[5],n=255&(e[2]?Cit(n):Sit(n,0,255)),r=255&(e[4]?Cit(r):Sit(r,0,255)),i=255&(e[6]?Cit(i):Sit(i,0,255)),{r:n,g:r,b:i,a:o}}}(t):Wit(t)}class eot{constructor(t){if(t instanceof eot)return t;const e=typeof t;let n;"object"===e?n=$it(t):"string"===e&&(n=function(t){var e,n=t.length;return"#"===t[0]&&(4===n||5===n?e={r:255&17*Nit[t[1]],g:255&17*Nit[t[2]],b:255&17*Nit[t[3]],a:5===n?17*Nit[t[4]]:255}:7!==n&&9!==n||(e={r:Nit[t[1]]<<4|Nit[t[2]],g:Nit[t[3]]<<4|Nit[t[4]],b:Nit[t[5]]<<4|Nit[t[6]],a:9===n?Nit[t[7]]<<4|Nit[t[8]]:255})),e}(t)||Yit(t)||tot(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=_it(this._rgb);return t&&(t.a=Tit(t.a)),t}set rgb(t){this._rgb=$it(t)}rgbString(){return this._valid?function(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Tit(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}(this._rgb):void 0}hexString(){return this._valid?Iit(this._rgb):void 0}hslString(){return this._valid?function(t){if(!t)return;const e=Bit(t),n=e[0],r=Ait(e[1]),i=Ait(e[2]);return t.a<255?`hsla(${n}, ${r}%, ${i}%, ${Tit(t.a)})`:`hsl(${n}, ${r}%, ${i}%)`}(this._rgb):void 0}mix(t,e){if(t){const n=this.rgb,r=t.rgb;let i;const o=e===i?.5:e,a=2*o-1,s=n.a-r.a,l=((a*s===-1?a:(a+s)/(1+a*s))+1)/2;i=1-l,n.r=255&l*n.r+i*r.r+.5,n.g=255&l*n.g+i*r.g+.5,n.b=255&l*n.b+i*r.b+.5,n.a=o*n.a+(1-o)*r.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=function(t,e,n){const r=Jit(Tit(t.r)),i=Jit(Tit(t.g)),o=Jit(Tit(t.b));return{r:Pit(Git(r+n*(Jit(Tit(e.r))-r))),g:Pit(Git(i+n*(Jit(Tit(e.g))-i))),b:Pit(Git(o+n*(Jit(Tit(e.b))-o))),a:t.a+n*(e.a-t.a)}}(this._rgb,t._rgb,e)),this}clone(){return new eot(this.rgb)}alpha(t){return this._rgb.a=Pit(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=kit(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Qit(this._rgb,2,t),this}darken(t){return Qit(this._rgb,2,-t),this}saturate(t){return Qit(this._rgb,1,t),this}desaturate(t){return Qit(this._rgb,1,-t),this}rotate(t){return function(t,e){var n=Bit(t);n[0]=Uit(n[0]+e),n=Fit(n),t.r=n[0],t.g=n[1],t.b=n[2]}(this._rgb,t),this}}function not(t){return new eot(t)}function rot(t){if(t&&"object"===typeof t){const e=t.toString();return"[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return!1}function iot(t){return rot(t)?t:not(t)}function oot(t){return rot(t)?t:not(t).saturate(.5).darken(.1).hexString()}const aot=Object.create(null),sot=Object.create(null);function lot(t,e){if(!e)return t;const n=e.split(".");for(let r=0,i=n.length;r<i;++r){const e=n[r];t=t[e]||(t[e]=Object.create(null))}return t}function uot(t,e,n){return"string"===typeof e?Drt(lot(t,e),n):Drt(lot(t,""),e)}var cot=new class{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>oot(e.backgroundColor),this.hoverBorderColor=(t,e)=>oot(e.borderColor),this.hoverColor=(t,e)=>oot(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return uot(this,t,e)}get(t){return lot(this,t)}describe(t,e){return uot(sot,t,e)}override(t,e){return uot(aot,t,e)}route(t,e,n,r){const i=lot(this,t),o=lot(this,n),a="_"+e;Object.defineProperties(i,{[a]:{value:i[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[a],e=o[r];return Nrt(t)?Object.assign({},e,t):Ert(t,e)},set(t){this[a]=t}}})}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function hot(t,e,n,r,i){let o=e[i];return o||(o=e[i]=t.measureText(i).width,n.push(i)),o>r&&(r=o),r}function dot(t,e,n,r){let i=(r=r||{}).data=r.data||{},o=r.garbageCollect=r.garbageCollect||[];r.font!==e&&(i=r.data={},o=r.garbageCollect=[],r.font=e),t.save(),t.font=e;let a=0;const s=n.length;let l,u,c,h,d;for(l=0;l<s;l++)if(h=n[l],void 0!==h&&null!==h&&!0!==Art(h))a=hot(t,i,o,a,h);else if(Art(h))for(u=0,c=h.length;u<c;u++)d=h[u],void 0===d||null===d||Art(d)||(a=hot(t,i,o,a,d));t.restore();const f=o.length/2;if(f>n.length){for(l=0;l<f;l++)delete i[o[l]];o.splice(0,f)}return a}function fot(t,e,n){const r=t.currentDevicePixelRatio,i=0!==n?Math.max(n/2,.5):0;return Math.round((e-i)*r)/r+i}function pot(t,e){(e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function mot(t,e,n,r){let i,o,a,s,l;const u=e.pointStyle,c=e.rotation,h=e.radius;let d=(c||0)*$rt;if(u&&"object"===typeof u&&(i=u.toString(),"[object HTMLImageElement]"===i||"[object HTMLCanvasElement]"===i))return t.save(),t.translate(n,r),t.rotate(d),t.drawImage(u,-u.width/2,-u.height/2,u.width,u.height),void t.restore();if(!(isNaN(h)||h<=0)){switch(t.beginPath(),u){default:t.arc(n,r,h,0,Jrt),t.closePath();break;case"triangle":t.moveTo(n+Math.sin(d)*h,r-Math.cos(d)*h),d+=nit,t.lineTo(n+Math.sin(d)*h,r-Math.cos(d)*h),d+=nit,t.lineTo(n+Math.sin(d)*h,r-Math.cos(d)*h),t.closePath();break;case"rectRounded":l=.516*h,s=h-l,o=Math.cos(d+eit)*s,a=Math.sin(d+eit)*s,t.arc(n-o,r-a,l,d-Grt,d-tit),t.arc(n+a,r-o,l,d-tit,d),t.arc(n+o,r+a,l,d,d+tit),t.arc(n-a,r+o,l,d+tit,d+Grt),t.closePath();break;case"rect":if(!c){s=Math.SQRT1_2*h,t.rect(n-s,r-s,2*s,2*s);break}d+=eit;case"rectRot":o=Math.cos(d)*h,a=Math.sin(d)*h,t.moveTo(n-o,r-a),t.lineTo(n+a,r-o),t.lineTo(n+o,r+a),t.lineTo(n-a,r+o),t.closePath();break;case"crossRot":d+=eit;case"cross":o=Math.cos(d)*h,a=Math.sin(d)*h,t.moveTo(n-o,r-a),t.lineTo(n+o,r+a),t.moveTo(n+a,r-o),t.lineTo(n-a,r+o);break;case"star":o=Math.cos(d)*h,a=Math.sin(d)*h,t.moveTo(n-o,r-a),t.lineTo(n+o,r+a),t.moveTo(n+a,r-o),t.lineTo(n-a,r+o),d+=eit,o=Math.cos(d)*h,a=Math.sin(d)*h,t.moveTo(n-o,r-a),t.lineTo(n+o,r+a),t.moveTo(n+a,r-o),t.lineTo(n-a,r+o);break;case"line":o=Math.cos(d)*h,a=Math.sin(d)*h,t.moveTo(n-o,r-a),t.lineTo(n+o,r+a);break;case"dash":t.moveTo(n,r),t.lineTo(n+Math.cos(d)*h,r+Math.sin(d)*h)}t.fill(),e.borderWidth>0&&t.stroke()}}function got(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function yot(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function vot(t){t.restore()}function bot(t,e,n,r,i){if(!e)return t.lineTo(n.x,n.y);if("middle"===i){const r=(e.x+n.x)/2;t.lineTo(r,e.y),t.lineTo(r,n.y)}else"after"===i!==!!r?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function wot(t,e,n,r){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(r?e.cp1x:e.cp2x,r?e.cp1y:e.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function xot(t,e,n,r,i){let o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};const a=Art(e)?e:[e],s=o.strokeWidth>0&&""!==o.strokeColor;let l,u;for(t.save(),t.font=i.string,Mot(t,o),l=0;l<a.length;++l)u=a[l],s&&(o.strokeColor&&(t.strokeStyle=o.strokeColor),Trt(o.strokeWidth)||(t.lineWidth=o.strokeWidth),t.strokeText(u,n,r,o.maxWidth)),t.fillText(u,n,r,o.maxWidth),kot(t,n,r,u,o),r+=i.lineHeight;t.restore()}function Mot(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),Trt(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function kot(t,e,n,r,i){if(i.strikethrough||i.underline){const o=t.measureText(r),a=e-o.actualBoundingBoxLeft,s=e+o.actualBoundingBoxRight,l=n-o.actualBoundingBoxAscent,u=n+o.actualBoundingBoxDescent,c=i.strikethrough?(l+u)/2:u;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=i.decorationWidth||2,t.moveTo(a,c),t.lineTo(s,c),t.stroke()}}function Sot(t,e){const{x:n,y:r,w:i,h:o,radius:a}=e;t.arc(n+a.topLeft,r+a.topLeft,a.topLeft,-tit,Grt,!0),t.lineTo(n,r+o-a.bottomLeft),t.arc(n+a.bottomLeft,r+o-a.bottomLeft,a.bottomLeft,Grt,tit,!0),t.lineTo(n+i-a.bottomRight,r+o),t.arc(n+i-a.bottomRight,r+o-a.bottomRight,a.bottomRight,tit,0,!0),t.lineTo(n+i,r+a.topRight),t.arc(n+i-a.topRight,r+a.topRight,a.topRight,0,-tit,!0),t.lineTo(n+a.topLeft,r)}const Cot=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),Pot=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function Tot(t,e){const n=(""+t).match(Cot);if(!n||"normal"===n[1])return 1.2*e;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100}return e*t}const Aot=t=>+t||0;function Not(t,e){const n={},r=Nrt(e),i=r?Object.keys(e):e,o=Nrt(t)?r?n=>Ert(t[n],t[e[n]]):e=>t[e]:()=>t;for(const a of i)n[a]=Aot(o(a));return n}function Oot(t){return Not(t,{top:"y",right:"x",bottom:"y",left:"x"})}function jot(t){return Not(t,["topLeft","topRight","bottomLeft","bottomRight"])}function Eot(t){const e=Oot(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function Vot(t,e){t=t||{},e=e||cot.font;let n=Ert(t.size,e.size);"string"===typeof n&&(n=parseInt(n,10));let r=Ert(t.style,e.style);r&&!(""+r).match(Pot)&&(console.warn('Invalid font style specified: "'+r+'"'),r="");const i={family:Ert(t.family,e.family),lineHeight:Tot(Ert(t.lineHeight,e.lineHeight),n),size:n,style:r,weight:Ert(t.weight,e.weight),string:""};return i.string=function(t){return!t||Trt(t.size)||Trt(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(i),i}function Iot(t,e,n,r){let i,o,a,s=!0;for(i=0,o=t.length;i<o;++i)if(a=t[i],void 0!==a&&(void 0!==e&&"function"===typeof a&&(a=a(e),s=!1),void 0!==n&&Art(a)&&(a=a[n%a.length],s=!1),void 0!==a))return r&&!s&&(r.cacheable=!1),a}function Rot(t,e){return Object.assign(Object.create(t),e)}function zot(t,e,n){n=n||(n=>t[n]<e);let r,i=t.length-1,o=0;for(;i-o>1;)r=o+i>>1,n(r)?o=r:i=r;return{lo:o,hi:i}}const Lot=(t,e,n)=>zot(t,n,(r=>t[r][e]<n)),Hot=(t,e,n)=>zot(t,n,(r=>t[r][e]>=n));const Bot=["push","pop","shift","splice","unshift"];function Dot(t,e){const n=t._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(e);-1!==i&&r.splice(i,1),r.length>0||(Bot.forEach((e=>{delete t[e]})),delete t._chartjs)}function Fot(t){const e=new Set;let n,r;for(n=0,r=t.length;n<r;++n)e.add(t[n]);return e.size===r?t:Array.from(e)}function Uot(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[""],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:()=>t[0];Zrt(r)||(r=tat("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:n,_fallback:r,_getTarget:i,override:i=>Uot([i,...t],e,n,r)};return new Proxy(o,{deleteProperty:(e,n)=>(delete e[n],delete e._keys,delete t[0][n],!0),get:(n,r)=>Yot(n,r,(()=>$ot(r,e,t,n))),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>eat(t).includes(e),ownKeys:t=>eat(t),set(t,e,n){const r=t._storage||(t._storage=i());return t[e]=r[e]=n,delete t._keys,!0}})}function Wot(t,e,n,r){const i={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:qot(t,r),setContext:e=>Wot(t,e,n,r),override:i=>Wot(t.override(i),e,n,r)};return new Proxy(i,{deleteProperty:(e,n)=>(delete e[n],delete t[n],!0),get:(t,e,n)=>Yot(t,e,(()=>function(t,e,n){const{_proxy:r,_context:i,_subProxy:o,_descriptors:a}=t;let s=r[e];Yrt(s)&&a.isScriptable(e)&&(s=function(t,e,n,r){const{_proxy:i,_context:o,_subProxy:a,_stack:s}=n;if(s.has(t))throw new Error("Recursion detected: "+Array.from(s).join("->")+"->"+t);s.add(t),e=e(o,a||r),s.delete(t),Zot(t,e)&&(e=Qot(i._scopes,i,t,e));return e}(e,s,t,n));Art(s)&&s.length&&(s=function(t,e,n,r){const{_proxy:i,_context:o,_subProxy:a,_descriptors:s}=n;if(Zrt(o.index)&&r(t))e=e[o.index%e.length];else if(Nrt(e[0])){const n=e,r=i._scopes.filter((t=>t!==n));e=[];for(const l of n){const n=Qot(r,i,t,l);e.push(Wot(n,o,a&&a[t],s))}}return e}(e,s,t,a.isIndexable));Zot(e,s)&&(s=Wot(s,i,o&&o[e],a));return s}(t,e,n))),getOwnPropertyDescriptor:(e,n)=>e._descriptors.allKeys?Reflect.has(t,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,n),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,n)=>Reflect.has(t,n),ownKeys:()=>Reflect.ownKeys(t),set:(e,n,r)=>(t[n]=r,delete e[n],!0)})}function qot(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{scriptable:!0,indexable:!0};const{_scriptable:n=e.scriptable,_indexable:r=e.indexable,_allKeys:i=e.allKeys}=t;return{allKeys:i,scriptable:n,indexable:r,isScriptable:Yrt(n)?n:()=>n,isIndexable:Yrt(r)?r:()=>r}}const Xot=(t,e)=>t?t+Xrt(e):e,Zot=(t,e)=>Nrt(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function Yot(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const r=n();return t[e]=r,r}function Kot(t,e,n){return Yrt(t)?t(e,n):t}const Got=(t,e)=>!0===t?e:"string"===typeof t?qrt(e,t):void 0;function Jot(t,e,n,r,i){for(const o of e){const e=Got(n,o);if(e){t.add(e);const o=Kot(e._fallback,n,i);if(Zrt(o)&&o!==n&&o!==r)return o}else if(!1===e&&Zrt(r)&&n!==r)return null}return!1}function Qot(t,e,n,r){const i=e._rootScopes,o=Kot(e._fallback,n,r),a=[...t,...i],s=new Set;s.add(r);let l=_ot(s,a,n,o||n,r);return null!==l&&((!Zrt(o)||o===n||(l=_ot(s,a,o,l,r),null!==l))&&Uot(Array.from(s),[""],i,o,(()=>function(t,e,n){const r=t._getTarget();e in r||(r[e]={});const i=r[e];if(Art(i)&&Nrt(n))return n;return i}(e,n,r))))}function _ot(t,e,n,r,i){for(;n;)n=Jot(t,e,n,r,i);return n}function $ot(t,e,n,r){let i;for(const o of e)if(i=tat(Xot(o,t),n),Zrt(i))return Zot(t,i)?Qot(n,r,t,i):i}function tat(t,e){for(const n of e){if(!n)continue;const e=n[t];if(Zrt(e))return e}}function eat(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const n of t)for(const t of Object.keys(n).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}(t._scopes)),e}function nat(t,e,n,r){const{iScale:i}=t,{key:o="r"}=this._parsing,a=new Array(r);let s,l,u,c;for(s=0,l=r;s<l;++s)u=s+n,c=e[u],a[s]={r:i.parse(qrt(c,o),u)};return a}const rat=Number.EPSILON||1e-14,iat=(t,e)=>e<t.length&&!t[e].skip&&t[e],oat=t=>"x"===t?"y":"x";function aat(t,e,n,r){const i=t.skip?e:t,o=e,a=n.skip?e:n,s=fit(o,i),l=fit(a,o);let u=s/(s+l),c=l/(s+l);u=isNaN(u)?0:u,c=isNaN(c)?0:c;const h=r*u,d=r*c;return{previous:{x:o.x-h*(a.x-i.x),y:o.y-h*(a.y-i.y)},next:{x:o.x+d*(a.x-i.x),y:o.y+d*(a.y-i.y)}}}function sat(t,e,n){const r=t.length;let i,o,a,s,l,u=iat(t,0);for(let c=0;c<r-1;++c)l=u,u=iat(t,c+1),l&&u&&(sit(e[c],0,rat)?n[c]=n[c+1]=0:(i=n[c]/e[c],o=n[c+1]/e[c],s=Math.pow(i,2)+Math.pow(o,2),s<=9||(a=3/Math.sqrt(s),n[c]=i*a*e[c],n[c+1]=o*a*e[c])))}function lat(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"x";const r=oat(n),i=t.length;let o,a,s,l=iat(t,0);for(let u=0;u<i;++u){if(a=s,s=l,l=iat(t,u+1),!s)continue;const i=s[n],c=s[r];a&&(o=(i-a[n])/3,s[`cp1${n}`]=i-o,s[`cp1${r}`]=c-o*e[u]),l&&(o=(l[n]-i)/3,s[`cp2${n}`]=i+o,s[`cp2${r}`]=c+o*e[u])}}function uat(t,e,n){return Math.max(Math.min(t,n),e)}function cat(t,e,n,r,i){let o,a,s,l;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)!function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x";const n=oat(e),r=t.length,i=Array(r).fill(0),o=Array(r);let a,s,l,u=iat(t,0);for(a=0;a<r;++a)if(s=l,l=u,u=iat(t,a+1),l){if(u){const t=u[e]-l[e];i[a]=0!==t?(u[n]-l[n])/t:0}o[a]=s?u?iit(i[a-1])!==iit(i[a])?0:(i[a-1]+i[a])/2:i[a-1]:i[a]}sat(t,i,o),lat(t,o,e)}(t,i);else{let n=r?t[t.length-1]:t[0];for(o=0,a=t.length;o<a;++o)s=t[o],l=aat(n,s,t[Math.min(o+1,a-(r?0:1))%a],e.tension),s.cp1x=l.previous.x,s.cp1y=l.previous.y,s.cp2x=l.next.x,s.cp2y=l.next.y,n=s}e.capBezierPoints&&function(t,e){let n,r,i,o,a,s=got(t[0],e);for(n=0,r=t.length;n<r;++n)a=o,o=s,s=n<r-1&&got(t[n+1],e),o&&(i=t[n],a&&(i.cp1x=uat(i.cp1x,e.left,e.right),i.cp1y=uat(i.cp1y,e.top,e.bottom)),s&&(i.cp2x=uat(i.cp2x,e.left,e.right),i.cp2y=uat(i.cp2y,e.top,e.bottom)))}(t,n)}function hat(){return"undefined"!==typeof window&&"undefined"!==typeof document}function dat(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function fat(t,e,n){let r;return"string"===typeof t?(r=parseInt(t,10),-1!==t.indexOf("%")&&(r=r/100*e.parentNode[n])):r=t,r}const pat=t=>window.getComputedStyle(t,null);const mat=["top","right","bottom","left"];function gat(t,e,n){const r={};n=n?"-"+n:"";for(let i=0;i<4;i++){const o=mat[i];r[o]=parseFloat(t[e+"-"+o+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}function yat(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:r}=e,i=pat(n),o="border-box"===i.boxSizing,a=gat(i,"padding"),s=gat(i,"border","width"),{x:l,y:u,box:c}=function(t,e){const n=t.touches,r=n&&n.length?n[0]:t,{offsetX:i,offsetY:o}=r;let a,s,l=!1;if(((t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot))(i,o,t.target))a=i,s=o;else{const t=e.getBoundingClientRect();a=r.clientX-t.left,s=r.clientY-t.top,l=!0}return{x:a,y:s,box:l}}(t,n),h=a.left+(c&&s.left),d=a.top+(c&&s.top);let{width:f,height:p}=e;return o&&(f-=a.width+s.width,p-=a.height+s.height),{x:Math.round((l-h)/f*n.width/r),y:Math.round((u-d)/p*n.height/r)}}const vat=t=>Math.round(10*t)/10;function bat(t,e,n,r){const i=pat(t),o=gat(i,"margin"),a=fat(i.maxWidth,t,"clientWidth")||_rt,s=fat(i.maxHeight,t,"clientHeight")||_rt,l=function(t,e,n){let r,i;if(void 0===e||void 0===n){const o=dat(t);if(o){const t=o.getBoundingClientRect(),a=pat(o),s=gat(a,"border","width"),l=gat(a,"padding");e=t.width-l.width-s.width,n=t.height-l.height-s.height,r=fat(a.maxWidth,o,"clientWidth"),i=fat(a.maxHeight,o,"clientHeight")}else e=t.clientWidth,n=t.clientHeight}return{width:e,height:n,maxWidth:r||_rt,maxHeight:i||_rt}}(t,e,n);let{width:u,height:c}=l;if("content-box"===i.boxSizing){const t=gat(i,"border","width"),e=gat(i,"padding");u-=e.width+t.width,c-=e.height+t.height}return u=Math.max(0,u-o.width),c=Math.max(0,r?Math.floor(u/r):c-o.height),u=vat(Math.min(u,a,l.maxWidth)),c=vat(Math.min(c,s,l.maxHeight)),u&&!c&&(c=vat(u/2)),{width:u,height:c}}function wat(t,e,n){const r=e||1,i=Math.floor(t.height*r),o=Math.floor(t.width*r);t.height=i/r,t.width=o/r;const a=t.canvas;return a.style&&(n||!a.style.height&&!a.style.width)&&(a.style.height=`${t.height}px`,a.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==r||a.height!==i||a.width!==o)&&(t.currentDevicePixelRatio=r,a.height=i,a.width=o,t.ctx.setTransform(r,0,0,r,0,0),!0)}const xat=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(pdt){}return t}();function Mat(t,e){const n=function(t,e){return pat(t).getPropertyValue(e)}(t,e),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function kat(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function Sat(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:"middle"===r?n<.5?t.y:e.y:"after"===r?n<1?t.y:e.y:n>0?e.y:t.y}}function Cat(t,e,n,r){const i={x:t.cp2x,y:t.cp2y},o={x:e.cp1x,y:e.cp1y},a=kat(t,i,n),s=kat(i,o,n),l=kat(o,e,n),u=kat(a,s,n),c=kat(s,l,n);return kat(u,c,n)}const Pat=new Map;function Tat(t,e,n){return function(t,e){e=e||{};const n=t+JSON.stringify(e);let r=Pat.get(n);return r||(r=new Intl.NumberFormat(t,e),Pat.set(n,r)),r}(e,n).format(t)}function Aat(t,e,n){return t?function(t,e){return{x:n=>t+t+e-n,setWidth(t){e=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}}(e,n):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function Nat(t,e){let n,r;"ltr"!==e&&"rtl"!==e||(n=t.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=r)}function Oat(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function jat(t){return"angle"===t?{between:git,compare:pit,normalize:mit}:{between:vit,compare:(t,e)=>t-e,normalize:t=>t}}function Eat(t){let{start:e,end:n,count:r,loop:i,style:o}=t;return{start:e%r,end:n%r,loop:i&&(n-e+1)%r===0,style:o}}function Vat(t,e,n){if(!n)return[t];const{property:r,start:i,end:o}=n,a=e.length,{compare:s,between:l,normalize:u}=jat(r),{start:c,end:h,loop:d,style:f}=function(t,e,n){const{property:r,start:i,end:o}=n,{between:a,normalize:s}=jat(r),l=e.length;let u,c,{start:h,end:d,loop:f}=t;if(f){for(h+=l,d+=l,u=0,c=l;u<c&&a(s(e[h%l][r]),i,o);++u)h--,d--;h%=l,d%=l}return d<h&&(d+=l),{start:h,end:d,loop:f,style:t.style}}(t,e,n),p=[];let m,g,y,v=!1,b=null;const w=()=>v||l(i,y,m)&&0!==s(i,y),x=()=>!v||0===s(o,m)||l(o,y,m);for(let M=c,k=c;M<=h;++M)g=e[M%a],g.skip||(m=u(g[r]),m!==y&&(v=l(m,i,o),null===b&&w()&&(b=0===s(m,i)?M:k),null!==b&&x()&&(p.push(Eat({start:b,end:M,loop:d,count:a,style:f})),b=null),k=M,y=m));return null!==b&&p.push(Eat({start:b,end:h,loop:d,count:a,style:f})),p}function Iat(t,e){const n=[],r=t.segments;for(let i=0;i<r.length;i++){const o=Vat(r[i],t.points,e);o.length&&n.push(...o)}return n}function Rat(t,e,n,r){return r&&r.setContext&&n?function(t,e,n,r){const i=t._chart.getContext(),o=zat(t.options),{_datasetIndex:a,options:{spanGaps:s}}=t,l=n.length,u=[];let c=o,h=e[0].start,d=h;function f(t,e,r,i){const o=s?-1:1;if(t!==e){for(t+=l;n[t%l].skip;)t-=o;for(;n[e%l].skip;)e+=o;t%l!==e%l&&(u.push({start:t%l,end:e%l,loop:r,style:i}),c=i,h=e%l)}}for(const p of e){h=s?h:p.start;let t,e=n[h%l];for(d=h+1;d<=p.end;d++){const o=n[d%l];t=zat(r.setContext(Rot(i,{type:"segment",p0:e,p1:o,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:a}))),Lat(t,c)&&f(h,d-1,p.loop,c),e=o,c=t}h<d-1&&f(h,d-1,p.loop,c)}return u}(t,e,n,r):e}function zat(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Lat(t,e){return e&&JSON.stringify(t)!==JSON.stringify(e)}var Hat=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,n,r){const i=e.listeners[r],o=e.duration;i.forEach((r=>r({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(n-e.start,o)})))}_refresh(){this._request||(this._running=!0,this._request=xrt.call(window,(()=>{this._update(),this._request=null,this._running&&this._refresh()})))}_update(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),e=0;this._charts.forEach(((n,r)=>{if(!n.running||!n.items.length)return;const i=n.items;let o,a=i.length-1,s=!1;for(;a>=0;--a)o=i[a],o._active?(o._total>n.duration&&(n.duration=o._total),o.tick(t),s=!0):(i[a]=i[i.length-1],i.pop());s&&(r.draw(),this._notify(r,n,t,"progress")),i.length||(n.running=!1,this._notify(r,n,t,"complete"),n.initial=!1),e+=i.length})),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){const e=this._charts;let n=e.get(t);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,n)),n}listen(t,e,n){this._getAnims(t).listeners[e].push(n)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce(((t,e)=>Math.max(t,e._duration)),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const n=e.items;let r=n.length-1;for(;r>=0;--r)n[r].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}};const Bat="transparent",Dat={boolean:(t,e,n)=>n>.5?e:t,color(t,e,n){const r=iot(t||Bat),i=r.valid&&iot(e||Bat);return i&&i.valid?i.mix(r,n).hexString():e},number:(t,e,n)=>t+(e-t)*n};class Fat{constructor(t,e,n,r){const i=e[n];r=Iot([t.to,r,i,t.from]);const o=Iot([t.from,i,r]);this._active=!0,this._fn=t.fn||Dat[t.type||typeof o],this._easing=Mit[t.easing]||Mit.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=n,this._from=o,this._to=r,this._promises=void 0}active(){return this._active}update(t,e,n){if(this._active){this._notify(!1);const r=this._target[this._prop],i=n-this._start,o=this._duration-i;this._start=n,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=i,this._loop=!!t.loop,this._to=Iot([t.to,e,r,t.from]),this._from=Iot([t.from,r,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,n=this._duration,r=this._prop,i=this._from,o=this._loop,a=this._to;let s;if(this._active=i!==a&&(o||e<n),!this._active)return this._target[r]=a,void this._notify(!0);e<0?this._target[r]=i:(s=e/n%2,s=o&&s>1?2-s:s,s=this._easing(Math.min(1,Math.max(0,s))),this._target[r]=this._fn(i,a,s))}wait(){const t=this._promises||(this._promises=[]);return new Promise(((e,n)=>{t.push({res:e,rej:n})}))}_notify(t){const e=t?"res":"rej",n=this._promises||[];for(let r=0;r<n.length;r++)n[r][e]()}}cot.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});const Uat=Object.keys(cot.animation);cot.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),cot.set("animations",{colors:{type:"color",properties:["color","borderColor","backgroundColor"]},numbers:{type:"number",properties:["x","y","borderWidth","radius","tension"]}}),cot.describe("animations",{_fallback:"animation"}),cot.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}});class Wat{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!Nrt(t))return;const e=this._properties;Object.getOwnPropertyNames(t).forEach((n=>{const r=t[n];if(!Nrt(r))return;const i={};for(const t of Uat)i[t]=r[t];(Art(r.properties)&&r.properties||[n]).forEach((t=>{t!==n&&e.has(t)||e.set(t,i)}))}))}_animateOptions(t,e){const n=e.options,r=function(t,e){if(!e)return;let n=t.options;if(!n)return void(t.options=e);n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}}));return n}(t,n);if(!r)return[];const i=this._createAnimations(r,n);return n.$shared&&function(t,e){const n=[],r=Object.keys(e);for(let i=0;i<r.length;i++){const e=t[r[i]];e&&e.active()&&n.push(e.wait())}return Promise.all(n)}(t.options.$animations,n).then((()=>{t.options=n}),(()=>{})),i}_createAnimations(t,e){const n=this._properties,r=[],i=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let s;for(s=o.length-1;s>=0;--s){const l=o[s];if("$"===l.charAt(0))continue;if("options"===l){r.push(...this._animateOptions(t,e));continue}const u=e[l];let c=i[l];const h=n.get(l);if(c){if(h&&c.active()){c.update(h,u,a);continue}c.cancel()}h&&h.duration?(i[l]=c=new Fat(h,t,l,u),r.push(c)):t[l]=u}return r}update(t,e){if(0===this._properties.size)return void Object.assign(t,e);const n=this._createAnimations(t,e);return n.length?(Hat.add(this._chart,n),!0):void 0}}function qat(t,e){const n=t&&t.options||{},r=n.reverse,i=void 0===n.min?e:0,o=void 0===n.max?e:0;return{start:r?o:i,end:r?i:o}}function Xat(t,e){const n=[],r=t._getSortedDatasetMetas(e);let i,o;for(i=0,o=r.length;i<o;++i)n.push(r[i].index);return n}function Zat(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i=t.keys,o="single"===r.mode;let a,s,l,u;if(null!==e){for(a=0,s=i.length;a<s;++a){if(l=+i[a],l===n){if(r.all)continue;break}u=t.values[l],Ort(u)&&(o||0===e||iit(e)===iit(u))&&(e+=u)}return e}}function Yat(t,e){const n=t&&t.options.stacked;return n||void 0===n&&void 0!==e.stack}function Kat(t,e,n){const r=t[e]||(t[e]={});return r[n]||(r[n]={})}function Gat(t,e,n,r){for(const i of e.getMatchingVisibleMetas(r).reverse()){const e=t[i.index];if(n&&e>0||!n&&e<0)return i.index}return null}function Jat(t,e){const{chart:n,_cachedMeta:r}=t,i=n._stacks||(n._stacks={}),{iScale:o,vScale:a,index:s}=r,l=o.axis,u=a.axis,c=function(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}(o,a,r),h=e.length;let d;for(let f=0;f<h;++f){const t=e[f],{[l]:n,[u]:o}=t;d=(t._stacks||(t._stacks={}))[u]=Kat(i,c,n),d[s]=o,d._top=Gat(d,a,!0,r.type),d._bottom=Gat(d,a,!1,r.type)}}function Qat(t,e){const n=t.scales;return Object.keys(n).filter((t=>n[t].axis===e)).shift()}function _at(t,e){const n=t.controller.index,r=t.vScale&&t.vScale.axis;if(r){e=e||t._parsed;for(const t of e){const e=t._stacks;if(!e||void 0===e[r]||void 0===e[r][n])return;delete e[r][n]}}}const $at=t=>"reset"===t||"none"===t,tst=(t,e)=>e?t:Object.assign({},t);class est{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Yat(t.vScale,t),this.addElements()}updateIndex(t){this.index!==t&&_at(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,n=this.getDataset(),r=(t,e,n,r)=>"x"===t?e:"r"===t?r:n,i=e.xAxisID=Ert(n.xAxisID,Qat(t,"x")),o=e.yAxisID=Ert(n.yAxisID,Qat(t,"y")),a=e.rAxisID=Ert(n.rAxisID,Qat(t,"r")),s=e.indexAxis,l=e.iAxisID=r(s,i,o,a),u=e.vAxisID=r(s,o,i,a);e.xScale=this.getScaleForId(i),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Dot(this._data,this),t._stacked&&_at(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),n=this._data;if(Nrt(e))this._data=function(t){const e=Object.keys(t),n=new Array(e.length);let r,i,o;for(r=0,i=e.length;r<i;++r)o=e[r],n[r]={x:o,y:t[o]};return n}(e);else if(n!==e){if(n){Dot(n,this);const t=this._cachedMeta;_at(t),t._parsed=[]}e&&Object.isExtensible(e)&&function(t,e){t._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Bot.forEach((e=>{const n="_onData"+Xrt(e),r=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(){for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];const a=r.apply(this,i);return t._chartjs.listeners.forEach((t=>{"function"===typeof t[n]&&t[n](...i)})),a}})})))}(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,n=this.getDataset();let r=!1;this._dataCheck();const i=e._stacked;e._stacked=Yat(e.vScale,e),e.stack!==n.stack&&(r=!0,_at(e),e.stack=n.stack),this._resyncElements(t),(r||i!==e._stacked)&&Jat(this,e._parsed)}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),n=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:n,_data:r}=this,{iScale:i,_stacked:o}=n,a=i.axis;let s,l,u,c=0===t&&e===r.length||n._sorted,h=t>0&&n._parsed[t-1];if(!1===this._parsing)n._parsed=r,n._sorted=!0,u=r;else{u=Art(r[t])?this.parseArrayData(n,r,t,e):Nrt(r[t])?this.parseObjectData(n,r,t,e):this.parsePrimitiveData(n,r,t,e);const i=()=>null===l[a]||h&&l[a]<h[a];for(s=0;s<e;++s)n._parsed[s+t]=l=u[s],c&&(i()&&(c=!1),h=l);n._sorted=c}o&&Jat(this,u)}parsePrimitiveData(t,e,n,r){const{iScale:i,vScale:o}=t,a=i.axis,s=o.axis,l=i.getLabels(),u=i===o,c=new Array(r);let h,d,f;for(h=0,d=r;h<d;++h)f=h+n,c[h]={[a]:u||i.parse(l[f],f),[s]:o.parse(e[f],f)};return c}parseArrayData(t,e,n,r){const{xScale:i,yScale:o}=t,a=new Array(r);let s,l,u,c;for(s=0,l=r;s<l;++s)u=s+n,c=e[u],a[s]={x:i.parse(c[0],u),y:o.parse(c[1],u)};return a}parseObjectData(t,e,n,r){const{xScale:i,yScale:o}=t,{xAxisKey:a="x",yAxisKey:s="y"}=this._parsing,l=new Array(r);let u,c,h,d;for(u=0,c=r;u<c;++u)h=u+n,d=e[h],l[u]={x:i.parse(qrt(d,a),h),y:o.parse(qrt(d,s),h)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,n){const r=this.chart,i=this._cachedMeta,o=e[t.axis];return Zat({keys:Xat(r,!0),values:e._stacks[t.axis]},o,i.index,{mode:n})}updateRangeFromParsed(t,e,n,r){const i=n[e.axis];let o=null===i?NaN:i;const a=r&&n._stacks[e.axis];r&&a&&(r.values=a,o=Zat(r,i,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const n=this._cachedMeta,r=n._parsed,i=n._sorted&&t===n.iScale,o=r.length,a=this._getOtherScale(t),s=((t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:Xat(n,!0),values:null})(e,n,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:c}=function(t){const{min:e,max:n,minDefined:r,maxDefined:i}=t.getUserBounds();return{min:r?e:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}(a);let h,d;function f(){d=r[h];const e=d[a.axis];return!Ort(d[t.axis])||u>e||c<e}for(h=0;h<o&&(f()||(this.updateRangeFromParsed(l,t,d,s),!i));++h);if(i)for(h=o-1;h>=0;--h)if(!f()){this.updateRangeFromParsed(l,t,d,s);break}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,n=[];let r,i,o;for(r=0,i=e.length;r<i;++r)o=e[r][t.axis],Ort(o)&&n.push(o);return n}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,n=e.iScale,r=e.vScale,i=this.getParsed(t);return{label:n?""+n.getLabelForValue(i[n.axis]):"",value:r?""+r.getLabelForValue(i[r.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=function(t){let e,n,r,i;return Nrt(t)?(e=t.top,n=t.right,r=t.bottom,i=t.left):e=n=r=i=t,{top:e,right:n,bottom:r,left:i,disabled:!1===t}}(Ert(this.options.clip,function(t,e,n){if(!1===n)return!1;const r=qat(t,n),i=qat(e,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,n=this._cachedMeta,r=n.data||[],i=e.chartArea,o=[],a=this._drawStart||0,s=this._drawCount||r.length-a,l=this.options.drawActiveElementsOnTop;let u;for(n.dataset&&n.dataset.draw(t,i,a,s),u=a;u<a+s;++u){const e=r[u];e.hidden||(e.active&&l?o.push(e):e.draw(t,i))}for(u=0;u<o.length;++u)o[u].draw(t,i)}getStyle(t,e){const n=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(t||0,n)}getContext(t,e,n){const r=this.getDataset();let i;if(t>=0&&t<this._cachedMeta.data.length){const e=this._cachedMeta.data[t];i=e.$context||(e.$context=function(t,e,n){return Rot(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}(this.getContext(),t,e)),i.parsed=this.getParsed(t),i.raw=r.data[t],i.index=i.dataIndex=t}else i=this.$context||(this.$context=function(t,e){return Rot(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}(this.chart.getContext(),this.index)),i.dataset=r,i.index=i.datasetIndex=this.index;return i.active=!!e,i.mode=n,i}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2?arguments[2]:void 0;const r="active"===e,i=this._cachedDataOpts,o=t+"-"+e,a=i[o],s=this.enableOptionSharing&&Zrt(n);if(a)return tst(a,s);const l=this.chart.config,u=l.datasetElementScopeKeys(this._type,t),c=r?[`${t}Hover`,"hover",t,""]:[t,""],h=l.getOptionScopes(this.getDataset(),u),d=Object.keys(cot.elements[t]),f=l.resolveNamedOptions(h,d,(()=>this.getContext(n,r)),c);return f.$shared&&(f.$shared=s,i[o]=Object.freeze(tst(f,s))),f}_resolveAnimations(t,e,n){const r=this.chart,i=this._cachedDataOpts,o=`animation-${e}`,a=i[o];if(a)return a;let s;if(!1!==r.options.animation){const r=this.chart.config,i=r.datasetAnimationScopeKeys(this._type,e),o=r.getOptionScopes(this.getDataset(),i);s=r.createResolver(o,this.getContext(t,n,e))}const l=new Wat(r,s&&s.animations);return s&&s._cacheable&&(i[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||$at(t)||this.chart._animationsDisabled}updateElement(t,e,n,r){$at(r)?Object.assign(t,n):this._resolveAnimations(e,r).update(t,n)}updateSharedOptions(t,e,n){t&&!$at(e)&&this._resolveAnimations(void 0,e).update(t,n)}_setStyle(t,e,n,r){t.active=r;const i=this.getStyle(e,r);this._resolveAnimations(e,n,r).update(t,{options:!r&&this.getSharedOptions(i)||i})}removeHoverStyle(t,e,n){this._setStyle(t,n,"active",!1)}setHoverStyle(t,e,n){this._setStyle(t,n,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,n=this._cachedMeta.data;for(const[a,s,l]of this._syncList)this[a](s,l);this._syncList=[];const r=n.length,i=e.length,o=Math.min(i,r);o&&this.parse(0,o),i>r?this._insertElements(r,i-r,t):i<r&&this._removeElements(i,r-i)}_insertElements(t,e){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=this._cachedMeta,i=r.data,o=t+e;let a;const s=t=>{for(t.length+=e,a=t.length-1;a>=o;a--)t[a]=t[a-e]};for(s(i),a=t;a<o;++a)i[a]=new this.dataElementType;this._parsing&&s(r._parsed),this.parse(t,e),n&&this.updateElements(i,t,e,"reset")}updateElements(t,e,n,r){}_removeElements(t,e){const n=this._cachedMeta;if(this._parsing){const r=n._parsed.splice(t,e);n._stacked&&_at(n,r)}n.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,n,r]=t;this[e](n,r)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const n=arguments.length-2;n&&this._sync(["_insertElements",t,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function nst(t){const e=t.iScale,n=function(t,e){if(!t._cache.$bar){const n=t.getMatchingVisibleMetas(e);let r=[];for(let e=0,i=n.length;e<i;e++)r=r.concat(n[e].controller.getAllParsedValues(t));t._cache.$bar=Fot(r.sort(((t,e)=>t-e)))}return t._cache.$bar}(e,t.type);let r,i,o,a,s=e._length;const l=()=>{32767!==o&&-32768!==o&&(Zrt(a)&&(s=Math.min(s,Math.abs(o-a)||s)),a=o)};for(r=0,i=n.length;r<i;++r)o=e.getPixelForValue(n[r]),l();for(a=void 0,r=0,i=e.ticks.length;r<i;++r)o=e.getPixelForTick(r),l();return s}function rst(t,e,n,r){return Art(t)?function(t,e,n,r){const i=n.parse(t[0],r),o=n.parse(t[1],r),a=Math.min(i,o),s=Math.max(i,o);let l=a,u=s;Math.abs(a)>Math.abs(s)&&(l=s,u=a),e[n.axis]=u,e._custom={barStart:l,barEnd:u,start:i,end:o,min:a,max:s}}(t,e,n,r):e[n.axis]=n.parse(t,r),e}function ist(t,e,n,r){const i=t.iScale,o=t.vScale,a=i.getLabels(),s=i===o,l=[];let u,c,h,d;for(u=n,c=n+r;u<c;++u)d=e[u],h={},h[i.axis]=s||i.parse(a[u],u),l.push(rst(d,h,o,u));return l}function ost(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}function ast(t,e,n,r){let i=e.borderSkipped;const o={};if(!i)return void(t.borderSkipped=o);const{start:a,end:s,reverse:l,top:u,bottom:c}=function(t){let e,n,r,i,o;return t.horizontal?(e=t.base>t.x,n="left",r="right"):(e=t.base<t.y,n="bottom",r="top"),e?(i="end",o="start"):(i="start",o="end"),{start:n,end:r,reverse:e,top:i,bottom:o}}(t);"middle"===i&&n&&(t.enableBorderRadius=!0,(n._top||0)===r?i=u:(n._bottom||0)===r?i=c:(o[sst(c,a,s,l)]=!0,i=u)),o[sst(i,a,s,l)]=!0,t.borderSkipped=o}function sst(t,e,n,r){return r?(t=function(t,e,n){return t===e?n:t===n?e:t}(t,e,n),t=lst(t,n,e)):t=lst(t,e,n),t}function lst(t,e,n){return"start"===t?e:"end"===t?n:t}function ust(t,e,n){let{inflateAmount:r}=e;t.inflateAmount="auto"===r?1===n?.33:0:r}est.defaults={},est.prototype.datasetElementType=null,est.prototype.dataElementType=null;class cst extends est{parsePrimitiveData(t,e,n,r){return ist(t,e,n,r)}parseArrayData(t,e,n,r){return ist(t,e,n,r)}parseObjectData(t,e,n,r){const{iScale:i,vScale:o}=t,{xAxisKey:a="x",yAxisKey:s="y"}=this._parsing,l="x"===i.axis?a:s,u="x"===o.axis?a:s,c=[];let h,d,f,p;for(h=n,d=n+r;h<d;++h)p=e[h],f={},f[i.axis]=i.parse(qrt(p,l),h),c.push(rst(qrt(p,u),f,o,h));return c}updateRangeFromParsed(t,e,n,r){super.updateRangeFromParsed(t,e,n,r);const i=n._custom;i&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,i.min),t.max=Math.max(t.max,i.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:n,vScale:r}=e,i=this.getParsed(t),o=i._custom,a=ost(o)?"["+o.start+", "+o.end+"]":""+r.getLabelForValue(i[r.axis]);return{label:""+n.getLabelForValue(i[n.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();this._cachedMeta.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,n,r){const i="reset"===r,{index:o,_cachedMeta:{vScale:a}}=this,s=a.getBasePixel(),l=a.isHorizontal(),u=this._getRuler(),c=this.resolveDataElementOptions(e,r),h=this.getSharedOptions(c),d=this.includeOptions(r,h);this.updateSharedOptions(h,r,c);for(let f=e;f<e+n;f++){const e=this.getParsed(f),n=i||Trt(e[a.axis])?{base:s,head:s}:this._calculateBarValuePixels(f),c=this._calculateBarIndexPixels(f,u),p=(e._stacks||{})[a.axis],m={horizontal:l,base:n.base,enableBorderRadius:!p||ost(e._custom)||o===p._top||o===p._bottom,x:l?n.head:c.center,y:l?c.center:n.head,height:l?c.size:Math.abs(n.size),width:l?Math.abs(n.size):c.size};d&&(m.options=h||this.resolveDataElementOptions(f,t[f].active?"active":r));const g=m.options||t[f].options;ast(m,g,p,o),ust(m,g,u.ratio),this.updateElement(t[f],f,m,r)}}_getStacks(t,e){const n=this._cachedMeta.iScale,r=n.getMatchingVisibleMetas(this._type),i=n.options.stacked,o=r.length,a=[];let s,l;for(s=0;s<o;++s)if(l=r[s],l.controller.options.grouped){if("undefined"!==typeof e){const t=l.controller.getParsed(e)[l.controller._cachedMeta.vScale.axis];if(Trt(t)||isNaN(t))continue}if((!1===i||-1===a.indexOf(l.stack)||void 0===i&&void 0===l.stack)&&a.push(l.stack),l.index===t)break}return a.length||a.push(void 0),a}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,n){const r=this._getStacks(t,n),i=void 0!==e?r.indexOf(e):-1;return-1===i?r.length-1:i}_getRuler(){const t=this.options,e=this._cachedMeta,n=e.iScale,r=[];let i,o;for(i=0,o=e.data.length;i<o;++i)r.push(n.getPixelForValue(this.getParsed(i)[n.axis],i));const a=t.barThickness;return{min:a||nst(e),pixels:r,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:n},options:{base:r,minBarLength:i}}=this,o=r||0,a=this.getParsed(t),s=a._custom,l=ost(s);let u,c,h=a[e.axis],d=0,f=n?this.applyStack(e,a,n):h;f!==h&&(d=f-h,f=h),l&&(h=s.barStart,f=s.barEnd-s.barStart,0!==h&&iit(h)!==iit(s.barEnd)&&(d=0),d+=h);const p=Trt(r)||l?d:r;let m=e.getPixelForValue(p);if(u=this.chart.getDataVisibility(t)?e.getPixelForValue(d+f):m,c=u-m,Math.abs(c)<i){c=function(t,e,n){return 0!==t?iit(t):(e.isHorizontal()?1:-1)*(e.min>=n?1:-1)}(c,e,o)*i,h===o&&(m-=c/2);const t=e.getPixelForDecimal(0),n=e.getPixelForDecimal(1),r=Math.min(t,n),a=Math.max(t,n);m=Math.max(Math.min(m,a),r),u=m+c}if(m===e.getPixelForValue(o)){const t=iit(c)*e.getLineWidthForValue(o)/2;m+=t,c-=t}return{size:c,base:m,head:u,center:u+c/2}}_calculateBarIndexPixels(t,e){const n=e.scale,r=this.options,i=r.skipNull,o=Ert(r.maxBarThickness,1/0);let a,s;if(e.grouped){const n=i?this._getStackCount(t):e.stackCount,l="flex"===r.barThickness?function(t,e,n,r){const i=e.pixels,o=i[t];let a=t>0?i[t-1]:null,s=t<i.length-1?i[t+1]:null;const l=n.categoryPercentage;null===a&&(a=o-(null===s?e.end-e.start:s-o)),null===s&&(s=o+o-a);const u=o-(o-Math.min(a,s))/2*l;return{chunk:Math.abs(s-a)/2*l/r,ratio:n.barPercentage,start:u}}(t,e,r,n):function(t,e,n,r){const i=n.barThickness;let o,a;return Trt(i)?(o=e.min*n.categoryPercentage,a=n.barPercentage):(o=i*r,a=1),{chunk:o/r,ratio:a,start:e.pixels[t]-o/2}}(t,e,r,n),u=this._getStackIndex(this.index,this._cachedMeta.stack,i?t:void 0);a=l.start+l.chunk*u+l.chunk/2,s=Math.min(o,l.chunk*l.ratio)}else a=n.getPixelForValue(this.getParsed(t)[n.axis],t),s=Math.min(o,e.min*e.ratio);return{base:a-s/2,head:a+s/2,center:a,size:s}}draw(){const t=this._cachedMeta,e=t.vScale,n=t.data,r=n.length;let i=0;for(;i<r;++i)null!==this.getParsed(i)[e.axis]&&n[i].draw(this._ctx)}}cst.id="bar",cst.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}},cst.overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};class hst extends est{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,n,r){const i=super.parsePrimitiveData(t,e,n,r);for(let o=0;o<i.length;o++)i[o]._custom=this.resolveDataElementOptions(o+n).radius;return i}parseArrayData(t,e,n,r){const i=super.parseArrayData(t,e,n,r);for(let o=0;o<i.length;o++){const t=e[n+o];i[o]._custom=Ert(t[2],this.resolveDataElementOptions(o+n).radius)}return i}parseObjectData(t,e,n,r){const i=super.parseObjectData(t,e,n,r);for(let o=0;o<i.length;o++){const t=e[n+o];i[o]._custom=Ert(t&&t.r&&+t.r,this.resolveDataElementOptions(o+n).radius)}return i}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let n=t.length-1;n>=0;--n)e=Math.max(e,t[n].size(this.resolveDataElementOptions(n))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,{xScale:n,yScale:r}=e,i=this.getParsed(t),o=n.getLabelForValue(i.x),a=r.getLabelForValue(i.y),s=i._custom;return{label:e.label,value:"("+o+", "+a+(s?", "+s:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,n,r){const i="reset"===r,{iScale:o,vScale:a}=this._cachedMeta,s=this.resolveDataElementOptions(e,r),l=this.getSharedOptions(s),u=this.includeOptions(r,l),c=o.axis,h=a.axis;for(let d=e;d<e+n;d++){const e=t[d],n=!i&&this.getParsed(d),s={},l=s[c]=i?o.getPixelForDecimal(.5):o.getPixelForValue(n[c]),f=s[h]=i?a.getBasePixel():a.getPixelForValue(n[h]);s.skip=isNaN(l)||isNaN(f),u&&(s.options=this.resolveDataElementOptions(d,e.active?"active":r),i&&(s.options.radius=0)),this.updateElement(e,d,s,r)}this.updateSharedOptions(l,r,s)}resolveDataElementOptions(t,e){const n=this.getParsed(t);let r=super.resolveDataElementOptions(t,e);r.$shared&&(r=Object.assign({},r,{$shared:!1}));const i=r.radius;return"active"!==e&&(r.radius=0),r.radius+=Ert(n&&n._custom,i),r}}hst.id="bubble",hst.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}},hst.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title:()=>""}}}};class dst extends est{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const n=this.getDataset().data,r=this._cachedMeta;if(!1===this._parsing)r._parsed=n;else{let i,o,a=t=>+n[t];if(Nrt(n[t])){const{key:t="value"}=this._parsing;a=e=>+qrt(n[e],t)}for(i=t,o=t+e;i<o;++i)r._parsed[i]=a(i)}}_getRotation(){return uit(this.options.rotation-90)}_getCircumference(){return uit(this.options.circumference)}_getRotationExtents(){let t=Jrt,e=-Jrt;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)){const r=this.chart.getDatasetMeta(n).controller,i=r._getRotation(),o=r._getCircumference();t=Math.min(t,i),e=Math.max(e,i+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:n}=e,r=this._cachedMeta,i=r.data,o=this.getMaxBorderWidth()+this.getMaxOffset(i)+this.options.spacing,a=Math.max((Math.min(n.width,n.height)-o)/2,0),s=Math.min(((t,e)=>"string"===typeof t&&t.endsWith("%")?parseFloat(t)/100:t/e)(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:u,rotation:c}=this._getRotationExtents(),{ratioX:h,ratioY:d,offsetX:f,offsetY:p}=function(t,e,n){let r=1,i=1,o=0,a=0;if(e<Jrt){const s=t,l=s+e,u=Math.cos(s),c=Math.sin(s),h=Math.cos(l),d=Math.sin(l),f=(t,e,r)=>git(t,s,l,!0)?1:Math.max(e,e*n,r,r*n),p=(t,e,r)=>git(t,s,l,!0)?-1:Math.min(e,e*n,r,r*n),m=f(0,u,h),g=f(tit,c,d),y=p(Grt,u,h),v=p(Grt+tit,c,d);r=(m-y)/2,i=(g-v)/2,o=-(m+y)/2,a=-(g+v)/2}return{ratioX:r,ratioY:i,offsetX:o,offsetY:a}}(c,u,s),m=(n.width-o)/h,g=(n.height-o)/d,y=Math.max(Math.min(m,g)/2,0),v=Vrt(this.options.radius,y),b=(v-Math.max(v*s,0))/this._getVisibleDatasetWeightTotal();this.offsetX=f*v,this.offsetY=p*v,r.total=this.calculateTotal(),this.outerRadius=v-b*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-b*l,0),this.updateElements(i,0,i.length,t)}_circumference(t,e){const n=this.options,r=this._cachedMeta,i=this._getCircumference();return e&&n.animation.animateRotate||!this.chart.getDataVisibility(t)||null===r._parsed[t]||r.data[t].hidden?0:this.calculateCircumference(r._parsed[t]*i/Jrt)}updateElements(t,e,n,r){const i="reset"===r,o=this.chart,a=o.chartArea,s=o.options.animation,l=(a.left+a.right)/2,u=(a.top+a.bottom)/2,c=i&&s.animateScale,h=c?0:this.innerRadius,d=c?0:this.outerRadius,f=this.resolveDataElementOptions(e,r),p=this.getSharedOptions(f),m=this.includeOptions(r,p);let g,y=this._getRotation();for(g=0;g<e;++g)y+=this._circumference(g,i);for(g=e;g<e+n;++g){const e=this._circumference(g,i),n=t[g],o={x:l+this.offsetX,y:u+this.offsetY,startAngle:y,endAngle:y+e,circumference:e,outerRadius:d,innerRadius:h};m&&(o.options=p||this.resolveDataElementOptions(g,n.active?"active":r)),y+=e,this.updateElement(n,g,o,r)}this.updateSharedOptions(p,r,f)}calculateTotal(){const t=this._cachedMeta,e=t.data;let n,r=0;for(n=0;n<e.length;n++){const i=t._parsed[n];null===i||isNaN(i)||!this.chart.getDataVisibility(n)||e[n].hidden||(r+=Math.abs(i))}return r}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?Jrt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,n=this.chart,r=n.data.labels||[],i=Tat(e._parsed[t],n.options.locale);return{label:r[t]||"",value:i}}getMaxBorderWidth(t){let e=0;const n=this.chart;let r,i,o,a,s;if(!t)for(r=0,i=n.data.datasets.length;r<i;++r)if(n.isDatasetVisible(r)){o=n.getDatasetMeta(r),t=o.data,a=o.controller;break}if(!t)return 0;for(r=0,i=t.length;r<i;++r)s=a.resolveDataElementOptions(r),"inner"!==s.borderAlign&&(e=Math.max(e,s.borderWidth||0,s.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let n=0,r=t.length;n<r;++n){const t=this.resolveDataElementOptions(n);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let n=0;n<t;++n)this.chart.isDatasetVisible(n)&&(e+=this._getRingWeight(n));return e}_getRingWeight(t){return Math.max(Ert(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}dst.id="doughnut",dst.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"},dst.descriptors={_scriptable:t=>"spacing"!==t,_indexable:t=>"spacing"!==t},dst.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:n}}=t.legend.options;return e.labels.map(((e,r)=>{const i=t.getDatasetMeta(0).controller.getStyle(r);return{text:e,fillStyle:i.backgroundColor,strokeStyle:i.borderColor,lineWidth:i.borderWidth,pointStyle:n,hidden:!t.getDataVisibility(r),index:r}}))}return[]}},onClick(t,e,n){n.chart.toggleDataVisibility(e.index),n.chart.update()}},tooltip:{callbacks:{title:()=>"",label(t){let e=t.label;const n=": "+t.formattedValue;return Art(e)?(e=e.slice(),e[0]+=n):e+=n,e}}}}};class fst extends est{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:n,data:r=[],_dataset:i}=e,o=this.chart._animationsDisabled;let{start:a,count:s}=function(t,e,n){const r=e.length;let i=0,o=r;if(t._sorted){const{iScale:a,_parsed:s}=t,l=a.axis,{min:u,max:c,minDefined:h,maxDefined:d}=a.getUserBounds();h&&(i=yit(Math.min(Lot(s,a.axis,u).lo,n?r:Lot(e,l,a.getPixelForValue(u)).lo),0,r-1)),o=d?yit(Math.max(Lot(s,a.axis,c).hi+1,n?0:Lot(e,l,a.getPixelForValue(c)).hi+1),i,r)-i:r-i}return{start:i,count:o}}(e,r,o);this._drawStart=a,this._drawCount=s,function(t){const{xScale:e,yScale:n,_scaleRanges:r}=t,i={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!r)return t._scaleRanges=i,!0;const o=r.xmin!==e.min||r.xmax!==e.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),o}(e)&&(a=0,s=r.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!i._decimated,n.points=r;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(n,void 0,{animated:!o,options:l},t),this.updateElements(r,a,s,t)}updateElements(t,e,n,r){const i="reset"===r,{iScale:o,vScale:a,_stacked:s,_dataset:l}=this._cachedMeta,u=this.resolveDataElementOptions(e,r),c=this.getSharedOptions(u),h=this.includeOptions(r,c),d=o.axis,f=a.axis,{spanGaps:p,segment:m}=this.options,g=ait(p)?p:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||i||"none"===r;let v=e>0&&this.getParsed(e-1);for(let b=e;b<e+n;++b){const e=t[b],n=this.getParsed(b),u=y?e:{},p=Trt(n[f]),w=u[d]=o.getPixelForValue(n[d],b),x=u[f]=i||p?a.getBasePixel():a.getPixelForValue(s?this.applyStack(a,n,s):n[f],b);u.skip=isNaN(w)||isNaN(x)||p,u.stop=b>0&&Math.abs(n[d]-v[d])>g,m&&(u.parsed=n,u.raw=l.data[b]),h&&(u.options=c||this.resolveDataElementOptions(b,e.active?"active":r)),y||this.updateElement(e,b,u,r),v=n}this.updateSharedOptions(c,r,u)}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,n=e.options&&e.options.borderWidth||0,r=t.data||[];if(!r.length)return n;const i=r[0].size(this.resolveDataElementOptions(0)),o=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(n,i,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}fst.id="line",fst.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1},fst.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};class pst extends est{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,n=this.chart,r=n.data.labels||[],i=Tat(e._parsed[t].r,n.options.locale);return{label:r[t]||"",value:i}}parseObjectData(t,e,n,r){return nat.bind(this)(t,e,n,r)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach(((t,n)=>{const r=this.getParsed(n).r;!isNaN(r)&&this.chart.getDataVisibility(n)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))})),e}_updateRadius(){const t=this.chart,e=t.chartArea,n=t.options,r=Math.min(e.right-e.left,e.bottom-e.top),i=Math.max(r/2,0),o=(i-Math.max(n.cutoutPercentage?i/100*n.cutoutPercentage:1,0))/t.getVisibleDatasetCount();this.outerRadius=i-o*this.index,this.innerRadius=this.outerRadius-o}updateElements(t,e,n,r){const i="reset"===r,o=this.chart,a=o.options.animation,s=this._cachedMeta.rScale,l=s.xCenter,u=s.yCenter,c=s.getIndexAngle(0)-.5*Grt;let h,d=c;const f=360/this.countVisibleElements();for(h=0;h<e;++h)d+=this._computeAngle(h,r,f);for(h=e;h<e+n;h++){const e=t[h];let n=d,p=d+this._computeAngle(h,r,f),m=o.getDataVisibility(h)?s.getDistanceFromCenterForValue(this.getParsed(h).r):0;d=p,i&&(a.animateScale&&(m=0),a.animateRotate&&(n=p=c));const g={x:l,y:u,innerRadius:0,outerRadius:m,startAngle:n,endAngle:p,options:this.resolveDataElementOptions(h,e.active?"active":r)};this.updateElement(e,h,g,r)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach(((t,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&e++})),e}_computeAngle(t,e,n){return this.chart.getDataVisibility(t)?uit(this.resolveDataElementOptions(t,e).angle||n):0}}pst.id="polarArea",pst.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0},pst.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:n}}=t.legend.options;return e.labels.map(((e,r)=>{const i=t.getDatasetMeta(0).controller.getStyle(r);return{text:e,fillStyle:i.backgroundColor,strokeStyle:i.borderColor,lineWidth:i.borderWidth,pointStyle:n,hidden:!t.getDataVisibility(r),index:r}}))}return[]}},onClick(t,e,n){n.chart.toggleDataVisibility(e.index),n.chart.update()}},tooltip:{callbacks:{title:()=>"",label:t=>t.chart.data.labels[t.dataIndex]+": "+t.formattedValue}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};class mst extends dst{}mst.id="pie",mst.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class gst extends est{getLabelAndValue(t){const e=this._cachedMeta.vScale,n=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(n[e.axis])}}parseObjectData(t,e,n,r){return nat.bind(this)(t,e,n,r)}update(t){const e=this._cachedMeta,n=e.dataset,r=e.data||[],i=e.iScale.getLabels();if(n.points=r,"resize"!==t){const e=this.resolveDatasetElementOptions(t);this.options.showLine||(e.borderWidth=0);const o={_loop:!0,_fullLoop:i.length===r.length,options:e};this.updateElement(n,void 0,o,t)}this.updateElements(r,0,r.length,t)}updateElements(t,e,n,r){const i=this._cachedMeta.rScale,o="reset"===r;for(let a=e;a<e+n;a++){const e=t[a],n=this.resolveDataElementOptions(a,e.active?"active":r),s=i.getPointPositionForValue(a,this.getParsed(a).r),l=o?i.xCenter:s.x,u=o?i.yCenter:s.y,c={x:l,y:u,angle:s.angle,skip:isNaN(l)||isNaN(u),options:n};this.updateElement(e,a,c,r)}}}gst.id="radar",gst.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}},gst.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};class yst extends fst{}yst.id="scatter",yst.defaults={showLine:!1,fill:!1},yst.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title:()=>"",label:t=>"("+t.label+", "+t.formattedValue+")"}}},scales:{x:{type:"linear"},y:{type:"linear"}}};function vst(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class bst{constructor(t){this.options=t||{}}formats(){return vst()}parse(t,e){return vst()}format(t,e){return vst()}add(t,e,n){return vst()}diff(t,e,n){return vst()}startOf(t,e,n){return vst()}endOf(t,e){return vst()}}bst.override=function(t){Object.assign(bst.prototype,t)};var wst={_date:bst};function xst(t,e,n,r){const{controller:i,data:o,_sorted:a}=t,s=i._cachedMeta.iScale;if(s&&e===s.axis&&"r"!==e&&a&&o.length){const t=s._reversePixels?Hot:Lot;if(!r)return t(o,e,n);if(i._sharedOptions){const r=o[0],i="function"===typeof r.getRange&&r.getRange(e);if(i){const r=t(o,e,n-i),a=t(o,e,n+i);return{lo:r.lo,hi:a.hi}}}}return{lo:0,hi:o.length-1}}function Mst(t,e,n,r,i){const o=t.getSortedVisibleDatasetMetas(),a=n[e];for(let s=0,l=o.length;s<l;++s){const{index:t,data:n}=o[s],{lo:l,hi:u}=xst(o[s],e,a,i);for(let e=l;e<=u;++e){const i=n[e];i.skip||r(i,t,e)}}}function kst(t,e,n,r,i){const o=[];if(!i&&!t.isPointInArea(e))return o;return Mst(t,n,e,(function(n,a,s){(i||got(n,t.chartArea,0))&&n.inRange(e.x,e.y,r)&&o.push({element:n,datasetIndex:a,index:s})}),!0),o}function Sst(t,e,n,r,i,o){let a=[];const s=function(t){const e=-1!==t.indexOf("x"),n=-1!==t.indexOf("y");return function(t,r){const i=e?Math.abs(t.x-r.x):0,o=n?Math.abs(t.y-r.y):0;return Math.sqrt(Math.pow(i,2)+Math.pow(o,2))}}(n);let l=Number.POSITIVE_INFINITY;return Mst(t,n,e,(function(n,u,c){const h=n.inRange(e.x,e.y,i);if(r&&!h)return;const d=n.getCenterPoint(i);if(!(!!o||t.isPointInArea(d))&&!h)return;const f=s(e,d);f<l?(a=[{element:n,datasetIndex:u,index:c}],l=f):f===l&&a.push({element:n,datasetIndex:u,index:c})})),a}function Cst(t,e,n,r,i,o){return o||t.isPointInArea(e)?"r"!==n||r?Sst(t,e,n,r,i,o):function(t,e,n,r){let i=[];return Mst(t,n,e,(function(t,n,o){const{startAngle:a,endAngle:s}=t.getProps(["startAngle","endAngle"],r),{angle:l}=dit(t,{x:e.x,y:e.y});git(l,a,s)&&i.push({element:t,datasetIndex:n,index:o})})),i}(t,e,n,i):[]}function Pst(t,e,n,r,i){const o=[],a="x"===n?"inXRange":"inYRange";let s=!1;return Mst(t,n,e,((t,r,l)=>{t[a](e[n],i)&&(o.push({element:t,datasetIndex:r,index:l}),s=s||t.inRange(e.x,e.y,i))})),r&&!s?[]:o}var Tst={evaluateInteractionItems:Mst,modes:{index(t,e,n,r){const i=yat(e,t),o=n.axis||"x",a=n.includeInvisible||!1,s=n.intersect?kst(t,i,o,r,a):Cst(t,i,o,!1,r,a),l=[];return s.length?(t.getSortedVisibleDatasetMetas().forEach((t=>{const e=s[0].index,n=t.data[e];n&&!n.skip&&l.push({element:n,datasetIndex:t.index,index:e})})),l):[]},dataset(t,e,n,r){const i=yat(e,t),o=n.axis||"xy",a=n.includeInvisible||!1;let s=n.intersect?kst(t,i,o,r,a):Cst(t,i,o,!1,r,a);if(s.length>0){const e=s[0].datasetIndex,n=t.getDatasetMeta(e).data;s=[];for(let t=0;t<n.length;++t)s.push({element:n[t],datasetIndex:e,index:t})}return s},point:(t,e,n,r)=>kst(t,yat(e,t),n.axis||"xy",r,n.includeInvisible||!1),nearest(t,e,n,r){const i=yat(e,t),o=n.axis||"xy",a=n.includeInvisible||!1;return Cst(t,i,o,n.intersect,r,a)},x:(t,e,n,r)=>Pst(t,yat(e,t),"x",n.intersect,r),y:(t,e,n,r)=>Pst(t,yat(e,t),"y",n.intersect,r)}};const Ast=["left","top","right","bottom"];function Nst(t,e){return t.filter((t=>t.pos===e))}function Ost(t,e){return t.filter((t=>-1===Ast.indexOf(t.pos)&&t.box.axis===e))}function jst(t,e){return t.sort(((t,n)=>{const r=e?n:t,i=e?t:n;return r.weight===i.weight?r.index-i.index:r.weight-i.weight}))}function Est(t,e){const n=function(t){const e={};for(const n of t){const{stack:t,pos:r,stackWeight:i}=n;if(!t||!Ast.includes(r))continue;const o=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=i}return e}(t),{vBoxMaxWidth:r,hBoxMaxHeight:i}=e;let o,a,s;for(o=0,a=t.length;o<a;++o){s=t[o];const{fullSize:a}=s.box,l=n[s.stack],u=l&&s.stackWeight/l.weight;s.horizontal?(s.width=u?u*r:a&&e.availableWidth,s.height=i):(s.width=r,s.height=u?u*i:a&&e.availableHeight)}return n}function Vst(t,e,n,r){return Math.max(t[n],e[n])+Math.max(t[r],e[r])}function Ist(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function Rst(t,e,n,r){const{pos:i,box:o}=n,a=t.maxPadding;if(!Nrt(i)){n.size&&(t[i]-=n.size);const e=r[n.stack]||{size:0,count:1};e.size=Math.max(e.size,n.horizontal?o.height:o.width),n.size=e.size/e.count,t[i]+=n.size}o.getPadding&&Ist(a,o.getPadding());const s=Math.max(0,e.outerWidth-Vst(a,t,"left","right")),l=Math.max(0,e.outerHeight-Vst(a,t,"top","bottom")),u=s!==t.w,c=l!==t.h;return t.w=s,t.h=l,n.horizontal?{same:u,other:c}:{same:c,other:u}}function zst(t,e){const n=e.maxPadding;function r(t){const r={left:0,top:0,right:0,bottom:0};return t.forEach((t=>{r[t]=Math.max(e[t],n[t])})),r}return r(t?["left","right"]:["top","bottom"])}function Lst(t,e,n,r){const i=[];let o,a,s,l,u,c;for(o=0,a=t.length,u=0;o<a;++o){s=t[o],l=s.box,l.update(s.width||e.w,s.height||e.h,zst(s.horizontal,e));const{same:a,other:h}=Rst(e,n,s,r);u|=a&&i.length,c=c||h,l.fullSize||i.push(s)}return u&&Lst(i,e,n,r)||c}function Hst(t,e,n,r,i){t.top=n,t.left=e,t.right=e+r,t.bottom=n+i,t.width=r,t.height=i}function Bst(t,e,n,r){const i=n.padding;let{x:o,y:a}=e;for(const s of t){const t=s.box,l=r[s.stack]||{count:1,placed:0,weight:1},u=s.stackWeight/l.weight||1;if(s.horizontal){const r=e.w*u,o=l.size||t.height;Zrt(l.start)&&(a=l.start),t.fullSize?Hst(t,i.left,a,n.outerWidth-i.right-i.left,o):Hst(t,e.left+l.placed,a,r,o),l.start=a,l.placed+=r,a=t.bottom}else{const r=e.h*u,a=l.size||t.width;Zrt(l.start)&&(o=l.start),t.fullSize?Hst(t,o,i.top,a,n.outerHeight-i.bottom-i.top):Hst(t,o,e.top+l.placed,a,r),l.start=o,l.placed+=r,o=t.right}}e.x=o,e.y=a}cot.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}});var Dst={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;-1!==n&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,r){if(!t)return;const i=Eot(t.options.layout.padding),o=Math.max(e-i.width,0),a=Math.max(n-i.height,0),s=function(t){const e=function(t){const e=[];let n,r,i,o,a,s;for(n=0,r=(t||[]).length;n<r;++n)i=t[n],({position:o,options:{stack:a,stackWeight:s=1}}=i),e.push({index:n,box:i,pos:o,horizontal:i.isHorizontal(),weight:i.weight,stack:a&&o+a,stackWeight:s});return e}(t),n=jst(e.filter((t=>t.box.fullSize)),!0),r=jst(Nst(e,"left"),!0),i=jst(Nst(e,"right")),o=jst(Nst(e,"top"),!0),a=jst(Nst(e,"bottom")),s=Ost(e,"x"),l=Ost(e,"y");return{fullSize:n,leftAndTop:r.concat(o),rightAndBottom:i.concat(l).concat(a).concat(s),chartArea:Nst(e,"chartArea"),vertical:r.concat(i).concat(l),horizontal:o.concat(a).concat(s)}}(t.boxes),l=s.vertical,u=s.horizontal;Rrt(t.boxes,(t=>{"function"===typeof t.beforeLayout&&t.beforeLayout()}));const c=l.reduce(((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1),0)||1,h=Object.freeze({outerWidth:e,outerHeight:n,padding:i,availableWidth:o,availableHeight:a,vBoxMaxWidth:o/2/c,hBoxMaxHeight:a/2}),d=Object.assign({},i);Ist(d,Eot(r));const f=Object.assign({maxPadding:d,w:o,h:a,x:i.left,y:i.top},i),p=Est(l.concat(u),h);Lst(s.fullSize,f,h,p),Lst(l,f,h,p),Lst(u,f,h,p)&&Lst(l,f,h,p),function(t){const e=t.maxPadding;function n(n){const r=Math.max(e[n]-t[n],0);return t[n]+=r,r}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}(f),Bst(s.leftAndTop,f,h,p),f.x+=f.w,f.y+=f.h,Bst(s.rightAndBottom,f,h,p),t.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},Rrt(s.chartArea,(e=>{const n=e.box;Object.assign(n,t.chartArea),n.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})}))}};class Fst{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,n){}removeEventListener(t,e,n){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,n,r){return e=Math.max(0,e||t.width),n=n||t.height,{width:e,height:Math.max(0,r?Math.floor(e/r):n)}}isAttached(t){return!0}updateConfig(t){}}class Ust extends Fst{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Wst={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},qst=t=>null===t||""===t;const Xst=!!xat&&{passive:!0};function Zst(t,e,n){t.canvas.removeEventListener(e,n,Xst)}function Yst(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function Kst(t,e,n){const r=t.canvas,i=new MutationObserver((t=>{let e=!1;for(const n of t)e=e||Yst(n.addedNodes,r),e=e&&!Yst(n.removedNodes,r);e&&n()}));return i.observe(document,{childList:!0,subtree:!0}),i}function Gst(t,e,n){const r=t.canvas,i=new MutationObserver((t=>{let e=!1;for(const n of t)e=e||Yst(n.removedNodes,r),e=e&&!Yst(n.addedNodes,r);e&&n()}));return i.observe(document,{childList:!0,subtree:!0}),i}const Jst=new Map;let Qst=0;function _st(){const t=window.devicePixelRatio;t!==Qst&&(Qst=t,Jst.forEach(((e,n)=>{n.currentDevicePixelRatio!==t&&e()})))}function $st(t,e,n){const r=t.canvas,i=r&&dat(r);if(!i)return;const o=Mrt(((t,e)=>{const r=i.clientWidth;n(t,e),r<i.clientWidth&&n()}),window),a=new ResizeObserver((t=>{const e=t[0],n=e.contentRect.width,r=e.contentRect.height;0===n&&0===r||o(n,r)}));return a.observe(i),function(t,e){Jst.size||window.addEventListener("resize",_st),Jst.set(t,e)}(t,o),a}function tlt(t,e,n){n&&n.disconnect(),"resize"===e&&function(t){Jst.delete(t),Jst.size||window.removeEventListener("resize",_st)}(t)}function elt(t,e,n){const r=t.canvas,i=Mrt((e=>{null!==t.ctx&&n(function(t,e){const n=Wst[t.type]||t.type,{x:r,y:i}=yat(t,e);return{type:n,chart:e,native:t,x:void 0!==r?r:null,y:void 0!==i?i:null}}(e,t))}),t,(t=>{const e=t[0];return[e,e.offsetX,e.offsetY]}));return function(t,e,n){t.addEventListener(e,n,Xst)}(r,e,i),i}class nlt extends Fst{acquireContext(t,e){const n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(function(t,e){const n=t.style,r=t.getAttribute("height"),i=t.getAttribute("width");if(t.$chartjs={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",qst(i)){const e=Mat(t,"width");void 0!==e&&(t.width=e)}if(qst(r))if(""===t.style.height)t.height=t.width/(e||2);else{const e=Mat(t,"height");void 0!==e&&(t.height=e)}}(t,e),n):null}releaseContext(t){const e=t.canvas;if(!e.$chartjs)return!1;const n=e.$chartjs.initial;["height","width"].forEach((t=>{const r=n[t];Trt(r)?e.removeAttribute(t):e.setAttribute(t,r)}));const r=n.style||{};return Object.keys(r).forEach((t=>{e.style[t]=r[t]})),e.width=e.width,delete e.$chartjs,!0}addEventListener(t,e,n){this.removeEventListener(t,e);const r=t.$proxies||(t.$proxies={}),i={attach:Kst,detach:Gst,resize:$st}[e]||elt;r[e]=i(t,e,n)}removeEventListener(t,e){const n=t.$proxies||(t.$proxies={}),r=n[e];if(!r)return;({attach:tlt,detach:tlt,resize:tlt}[e]||Zst)(t,e,r),n[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,n,r){return bat(t,e,n,r)}isAttached(t){const e=dat(t);return!(!e||!e.isConnected)}}class rlt{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(t){const{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}hasValue(){return ait(this.x)&&ait(this.y)}getProps(t,e){const n=this.$animations;if(!e||!n)return this;const r={};return t.forEach((t=>{r[t]=n[t]&&n[t].active()?n[t]._to:this[t]})),r}}rlt.defaults={},rlt.defaultRoutes=void 0;const ilt={values:t=>Art(t)?t:""+t,numeric(t,e,n){if(0===t)return"0";const r=this.chart.options.locale;let i,o=t;if(n.length>1){const e=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(e<1e-4||e>1e15)&&(i="scientific"),o=function(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t));return n}(t,n)}const a=rit(Math.abs(o)),s=Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:i,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(l,this.options.ticks.format),Tat(t,r,l)},logarithmic(t,e,n){if(0===t)return"0";const r=t/Math.pow(10,Math.floor(rit(t)));return 1===r||2===r||5===r?ilt.numeric.call(this,t,e,n):""}};var olt={formatters:ilt};function alt(t,e){const n=t.options.ticks,r=n.maxTicksLimit||function(t){const e=t.options.offset,n=t._tickSize(),r=t._length/n+(e?0:1),i=t._maxLength/n;return Math.floor(Math.min(r,i))}(t),i=n.major.enabled?function(t){const e=[];let n,r;for(n=0,r=t.length;n<r;n++)t[n].major&&e.push(n);return e}(e):[],o=i.length,a=i[0],s=i[o-1],l=[];if(o>r)return function(t,e,n,r){let i,o=0,a=n[0];for(r=Math.ceil(r),i=0;i<t.length;i++)i===a&&(e.push(t[i]),o++,a=n[o*r])}(e,l,i,o/r),l;const u=function(t,e,n){const r=function(t){const e=t.length;let n,r;if(e<2)return!1;for(r=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==r)return!1;return r}(t),i=e.length/n;if(!r)return Math.max(i,1);const o=function(t){const e=[],n=Math.sqrt(t);let r;for(r=1;r<n;r++)t%r===0&&(e.push(r),e.push(t/r));return n===(0|n)&&e.push(n),e.sort(((t,e)=>t-e)).pop(),e}(r);for(let a=0,s=o.length-1;a<s;a++){const t=o[a];if(t>i)return t}return Math.max(i,1)}(i,e,r);if(o>0){let t,n;const r=o>1?Math.round((s-a)/(o-1)):null;for(slt(e,l,u,Trt(r)?0:a-r,a),t=0,n=o-1;t<n;t++)slt(e,l,u,i[t],i[t+1]);return slt(e,l,u,s,Trt(r)?e.length:s+r),l}return slt(e,l,u),l}function slt(t,e,n,r,i){const o=Ert(r,0),a=Math.min(Ert(i,t.length),t.length);let s,l,u,c=0;for(n=Math.ceil(n),i&&(s=i-r,n=s/Math.floor(s/n)),u=o;u<0;)c++,u=Math.round(o+c*n);for(l=Math.max(o,0);l<a;l++)l===u&&(e.push(t[l]),c++,u=Math.round(o+c*n))}cot.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:olt.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),cot.route("scale.ticks","color","","color"),cot.route("scale.grid","color","","borderColor"),cot.route("scale.grid","borderColor","","borderColor"),cot.route("scale.title","color","","color"),cot.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t}),cot.describe("scales",{_fallback:"scale"}),cot.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t});const llt=(t,e,n)=>"top"===e||"left"===e?t[e]+n:t[e]-n;function ult(t,e){const n=[],r=t.length/e,i=t.length;let o=0;for(;o<i;o+=r)n.push(t[Math.floor(o)]);return n}function clt(t,e,n){const r=t.ticks.length,i=Math.min(e,r-1),o=t._startPixel,a=t._endPixel,s=1e-6;let l,u=t.getPixelForTick(i);if(!(n&&(l=1===r?Math.max(u-o,a-u):0===e?(t.getPixelForTick(1)-u)/2:(u-t.getPixelForTick(i-1))/2,u+=i<e?l:-l,u<o-s||u>a+s)))return u}function hlt(t){return t.drawTicks?t.tickLength:0}function dlt(t,e){if(!t.display)return 0;const n=Vot(t.font,e),r=Eot(t.padding);return(Art(t.text)?t.text.length:1)*n.lineHeight+r.height}function flt(t,e,n){let r=krt(t);return(n&&"right"!==e||!n&&"right"===e)&&(r=(t=>"left"===t?"right":"right"===t?"left":t)(r)),r}class plt extends rlt{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:n,_suggestedMax:r}=this;return t=jrt(t,Number.POSITIVE_INFINITY),e=jrt(e,Number.NEGATIVE_INFINITY),n=jrt(n,Number.POSITIVE_INFINITY),r=jrt(r,Number.NEGATIVE_INFINITY),{min:jrt(t,n),max:jrt(e,r),minDefined:Ort(t),maxDefined:Ort(e)}}getMinMax(t){let e,{min:n,max:r,minDefined:i,maxDefined:o}=this.getUserBounds();if(i&&o)return{min:n,max:r};const a=this.getMatchingVisibleMetas();for(let s=0,l=a.length;s<l;++s)e=a[s].controller.getMinMax(this,t),i||(n=Math.min(n,e.min)),o||(r=Math.max(r,e.max));return n=o&&n>r?r:n,r=i&&n>r?n:r,{min:jrt(n,jrt(r,n)),max:jrt(r,jrt(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Irt(this.options.beforeUpdate,[this])}update(t,e,n){const{beginAtZero:r,grace:i,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=function(t,e,n){const{min:r,max:i}=t,o=Vrt(e,(i-r)/2),a=(t,e)=>n&&0===t?0:t+e;return{min:a(r,-Math.abs(o)),max:a(i,o)}}(this,i,r),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const s=a<this.ticks.length;this._convertTicksToLabels(s?ult(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||"auto"===o.source)&&(this.ticks=alt(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,n=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,n=!n),this._startPixel=t,this._endPixel=e,this._reversePixels=n,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Irt(this.options.afterUpdate,[this])}beforeSetDimensions(){Irt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Irt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Irt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Irt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let n,r,i;for(n=0,r=t.length;n<r;n++)i=t[n],i.label=Irt(e.callback,[i.value,n,t],this)}afterTickToLabelConversion(){Irt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Irt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,n=this.ticks.length,r=e.minRotation||0,i=e.maxRotation;let o,a,s,l=r;if(!this._isVisible()||!e.display||r>=i||n<=1||!this.isHorizontal())return void(this.labelRotation=r);const u=this._getLabelSizes(),c=u.widest.width,h=u.highest.height,d=yit(this.chart.width-c,0,this.maxWidth);o=t.offset?this.maxWidth/n:d/(n-1),c+6>o&&(o=d/(n-(t.offset?.5:1)),a=this.maxHeight-hlt(t.grid)-e.padding-dlt(t.title,this.chart.options.font),s=Math.sqrt(c*c+h*h),l=cit(Math.min(Math.asin(yit((u.highest.height+6)/o,-1,1)),Math.asin(yit(a/s,-1,1))-Math.asin(yit(h/s,-1,1)))),l=Math.max(r,Math.min(i,l))),this.labelRotation=l}afterCalculateLabelRotation(){Irt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Irt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:n,title:r,grid:i}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const o=dlt(r,e.options.font);if(a?(t.width=this.maxWidth,t.height=hlt(i)+o):(t.height=this.maxHeight,t.width=hlt(i)+o),n.display&&this.ticks.length){const{first:e,last:r,widest:i,highest:o}=this._getLabelSizes(),s=2*n.padding,l=uit(this.labelRotation),u=Math.cos(l),c=Math.sin(l);if(a){const e=n.mirror?0:c*i.width+u*o.height;t.height=Math.min(this.maxHeight,t.height+e+s)}else{const e=n.mirror?0:u*i.width+c*o.height;t.width=Math.min(this.maxWidth,t.width+e+s)}this._calculatePadding(e,r,c,u)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,n,r){const{ticks:{align:i,padding:o},position:a}=this.options,s=0!==this.labelRotation,l="top"!==a&&"x"===this.axis;if(this.isHorizontal()){const a=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1);let c=0,h=0;s?l?(c=r*t.width,h=n*e.height):(c=n*t.height,h=r*e.width):"start"===i?h=e.width:"end"===i?c=t.width:"inner"!==i&&(c=t.width/2,h=e.width/2),this.paddingLeft=Math.max((c-a+o)*this.width/(this.width-a),0),this.paddingRight=Math.max((h-u+o)*this.width/(this.width-u),0)}else{let n=e.height/2,r=t.height/2;"start"===i?(n=0,r=t.height):"end"===i&&(n=e.height,r=0),this.paddingTop=n+o,this.paddingBottom=r+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Irt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,n;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,n=t.length;e<n;e++)Trt(t[e].label)&&(t.splice(e,1),n--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let n=this.ticks;e<n.length&&(n=ult(n,e)),this._labelSizes=t=this._computeLabelSizes(n,n.length)}return t}_computeLabelSizes(t,e){const{ctx:n,_longestTextCache:r}=this,i=[],o=[];let a,s,l,u,c,h,d,f,p,m,g,y=0,v=0;for(a=0;a<e;++a){if(u=t[a].label,c=this._resolveTickFontOptions(a),n.font=h=c.string,d=r[h]=r[h]||{data:{},gc:[]},f=c.lineHeight,p=m=0,Trt(u)||Art(u)){if(Art(u))for(s=0,l=u.length;s<l;++s)g=u[s],Trt(g)||Art(g)||(p=hot(n,d.data,d.gc,p,g),m+=f)}else p=hot(n,d.data,d.gc,p,u),m=f;i.push(p),o.push(m),y=Math.max(p,y),v=Math.max(m,v)}!function(t,e){Rrt(t,(t=>{const n=t.gc,r=n.length/2;let i;if(r>e){for(i=0;i<r;++i)delete t.data[n[i]];n.splice(0,r)}}))}(r,e);const b=i.indexOf(y),w=o.indexOf(v),x=t=>({width:i[t]||0,height:o[t]||0});return{first:x(0),last:x(e-1),widest:x(b),highest:x(w),widths:i,heights:o}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return function(t){return yit(t,-32768,32767)}(this._alignToPixels?fot(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const n=e[t];return n.$context||(n.$context=function(t,e,n){return Rot(t,{tick:n,index:e,type:"tick"})}(this.getContext(),t,n))}return this.$context||(this.$context=function(t,e){return Rot(t,{scale:e,type:"scale"})}(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=uit(this.labelRotation),n=Math.abs(Math.cos(e)),r=Math.abs(Math.sin(e)),i=this._getLabelSizes(),o=t.autoSkipPadding||0,a=i?i.widest.width+o:0,s=i?i.highest.height+o:0;return this.isHorizontal()?s*n>a*r?a/n:s/r:s*r<a*n?s/n:a/r}_isVisible(){const t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,n=this.chart,r=this.options,{grid:i,position:o}=r,a=i.offset,s=this.isHorizontal(),l=this.ticks.length+(a?1:0),u=hlt(i),c=[],h=i.setContext(this.getContext()),d=h.drawBorder?h.borderWidth:0,f=d/2,p=function(t){return fot(n,t,d)};let m,g,y,v,b,w,x,M,k,S,C,P;if("top"===o)m=p(this.bottom),w=this.bottom-u,M=m-f,S=p(t.top)+f,P=t.bottom;else if("bottom"===o)m=p(this.top),S=t.top,P=p(t.bottom)-f,w=m+f,M=this.top+u;else if("left"===o)m=p(this.right),b=this.right-u,x=m-f,k=p(t.left)+f,C=t.right;else if("right"===o)m=p(this.left),k=t.left,C=p(t.right)-f,b=m+f,x=this.left+u;else if("x"===e){if("center"===o)m=p((t.top+t.bottom)/2+.5);else if(Nrt(o)){const t=Object.keys(o)[0],e=o[t];m=p(this.chart.scales[t].getPixelForValue(e))}S=t.top,P=t.bottom,w=m+f,M=w+u}else if("y"===e){if("center"===o)m=p((t.left+t.right)/2);else if(Nrt(o)){const t=Object.keys(o)[0],e=o[t];m=p(this.chart.scales[t].getPixelForValue(e))}b=m-f,x=b-u,k=t.left,C=t.right}const T=Ert(r.ticks.maxTicksLimit,l),A=Math.max(1,Math.ceil(l/T));for(g=0;g<l;g+=A){const t=i.setContext(this.getContext(g)),e=t.lineWidth,r=t.color,o=i.borderDash||[],l=t.borderDashOffset,u=t.tickWidth,h=t.tickColor,d=t.tickBorderDash||[],f=t.tickBorderDashOffset;y=clt(this,g,a),void 0!==y&&(v=fot(n,y,e),s?b=x=k=C=v:w=M=S=P=v,c.push({tx1:b,ty1:w,tx2:x,ty2:M,x1:k,y1:S,x2:C,y2:P,width:e,color:r,borderDash:o,borderDashOffset:l,tickWidth:u,tickColor:h,tickBorderDash:d,tickBorderDashOffset:f}))}return this._ticksLength=l,this._borderValue=m,c}_computeLabelItems(t){const e=this.axis,n=this.options,{position:r,ticks:i}=n,o=this.isHorizontal(),a=this.ticks,{align:s,crossAlign:l,padding:u,mirror:c}=i,h=hlt(n.grid),d=h+u,f=c?-u:d,p=-uit(this.labelRotation),m=[];let g,y,v,b,w,x,M,k,S,C,P,T,A="middle";if("top"===r)x=this.bottom-f,M=this._getXAxisLabelAlignment();else if("bottom"===r)x=this.top+f,M=this._getXAxisLabelAlignment();else if("left"===r){const t=this._getYAxisLabelAlignment(h);M=t.textAlign,w=t.x}else if("right"===r){const t=this._getYAxisLabelAlignment(h);M=t.textAlign,w=t.x}else if("x"===e){if("center"===r)x=(t.top+t.bottom)/2+d;else if(Nrt(r)){const t=Object.keys(r)[0],e=r[t];x=this.chart.scales[t].getPixelForValue(e)+d}M=this._getXAxisLabelAlignment()}else if("y"===e){if("center"===r)w=(t.left+t.right)/2-d;else if(Nrt(r)){const t=Object.keys(r)[0],e=r[t];w=this.chart.scales[t].getPixelForValue(e)}M=this._getYAxisLabelAlignment(h).textAlign}"y"===e&&("start"===s?A="top":"end"===s&&(A="bottom"));const N=this._getLabelSizes();for(g=0,y=a.length;g<y;++g){v=a[g],b=v.label;const t=i.setContext(this.getContext(g));k=this.getPixelForTick(g)+i.labelOffset,S=this._resolveTickFontOptions(g),C=S.lineHeight,P=Art(b)?b.length:1;const e=P/2,n=t.color,s=t.textStrokeColor,u=t.textStrokeWidth;let h,d=M;if(o?(w=k,"inner"===M&&(d=g===y-1?this.options.reverse?"left":"right":0===g?this.options.reverse?"right":"left":"center"),T="top"===r?"near"===l||0!==p?-P*C+C/2:"center"===l?-N.highest.height/2-e*C+C:-N.highest.height+C/2:"near"===l||0!==p?C/2:"center"===l?N.highest.height/2-e*C:N.highest.height-P*C,c&&(T*=-1)):(x=k,T=(1-P)*C/2),t.showLabelBackdrop){const e=Eot(t.backdropPadding),n=N.heights[g],r=N.widths[g];let i=x+T-e.top,o=w-e.left;switch(A){case"middle":i-=n/2;break;case"bottom":i-=n}switch(M){case"center":o-=r/2;break;case"right":o-=r}h={left:o,top:i,width:r+e.width,height:n+e.height,color:t.backdropColor}}m.push({rotation:p,label:b,font:S,color:n,strokeColor:s,strokeWidth:u,textOffset:T,textAlign:d,textBaseline:A,translation:[w,x],backdrop:h})}return m}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-uit(this.labelRotation))return"top"===t?"left":"right";let n="center";return"start"===e.align?n="left":"end"===e.align?n="right":"inner"===e.align&&(n="inner"),n}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:n,mirror:r,padding:i}}=this.options,o=t+i,a=this._getLabelSizes().widest.width;let s,l;return"left"===e?r?(l=this.right+i,"near"===n?s="left":"center"===n?(s="center",l+=a/2):(s="right",l+=a)):(l=this.right-o,"near"===n?s="right":"center"===n?(s="center",l-=a/2):(s="left",l=this.left)):"right"===e?r?(l=this.left+i,"near"===n?s="right":"center"===n?(s="center",l-=a/2):(s="left",l-=a)):(l=this.left+o,"near"===n?s="left":"center"===n?(s="center",l+=a/2):(s="right",l=this.right)):s="right",{textAlign:s,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:n,top:r,width:i,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(n,r,i,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const n=this.ticks.findIndex((e=>e.value===t));if(n>=0){return e.setContext(this.getContext(n)).lineWidth}return 0}drawGrid(t){const e=this.options.grid,n=this.ctx,r=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let i,o;const a=(t,e,r)=>{r.width&&r.color&&(n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.setLineDash(r.borderDash||[]),n.lineDashOffset=r.borderDashOffset,n.beginPath(),n.moveTo(t.x,t.y),n.lineTo(e.x,e.y),n.stroke(),n.restore())};if(e.display)for(i=0,o=r.length;i<o;++i){const t=r[i];e.drawOnChartArea&&a({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),e.drawTicks&&a({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{grid:n}}=this,r=n.setContext(this.getContext()),i=n.drawBorder?r.borderWidth:0;if(!i)return;const o=n.setContext(this.getContext(0)).lineWidth,a=this._borderValue;let s,l,u,c;this.isHorizontal()?(s=fot(t,this.left,i)-i/2,l=fot(t,this.right,o)+o/2,u=c=a):(u=fot(t,this.top,i)-i/2,c=fot(t,this.bottom,o)+o/2,s=l=a),e.save(),e.lineWidth=r.borderWidth,e.strokeStyle=r.borderColor,e.beginPath(),e.moveTo(s,u),e.lineTo(l,c),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const e=this.ctx,n=this._computeLabelArea();n&&yot(e,n);const r=this._labelItems||(this._labelItems=this._computeLabelItems(t));let i,o;for(i=0,o=r.length;i<o;++i){const t=r[i],n=t.font,o=t.label;t.backdrop&&(e.fillStyle=t.backdrop.color,e.fillRect(t.backdrop.left,t.backdrop.top,t.backdrop.width,t.backdrop.height)),xot(e,o,0,t.textOffset,n,t)}n&&vot(e)}drawTitle(){const{ctx:t,options:{position:e,title:n,reverse:r}}=this;if(!n.display)return;const i=Vot(n.font),o=Eot(n.padding),a=n.align;let s=i.lineHeight/2;"bottom"===e||"center"===e||Nrt(e)?(s+=o.bottom,Art(n.text)&&(s+=i.lineHeight*(n.text.length-1))):s+=o.top;const{titleX:l,titleY:u,maxWidth:c,rotation:h}=function(t,e,n,r){const{top:i,left:o,bottom:a,right:s,chart:l}=t,{chartArea:u,scales:c}=l;let h,d,f,p=0;const m=a-i,g=s-o;if(t.isHorizontal()){if(d=Srt(r,o,s),Nrt(n)){const t=Object.keys(n)[0],r=n[t];f=c[t].getPixelForValue(r)+m-e}else f="center"===n?(u.bottom+u.top)/2+m-e:llt(t,n,e);h=s-o}else{if(Nrt(n)){const t=Object.keys(n)[0],r=n[t];d=c[t].getPixelForValue(r)-g+e}else d="center"===n?(u.left+u.right)/2-g+e:llt(t,n,e);f=Srt(r,a,i),p="left"===n?-tit:tit}return{titleX:d,titleY:f,maxWidth:h,rotation:p}}(this,s,e,a);xot(t,n.text,0,0,i,{color:n.color,maxWidth:c,rotation:h,textAlign:flt(a,e,r),textBaseline:"middle",translation:[l,u]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,n=Ert(t.grid&&t.grid.z,-1);return this._isVisible()&&this.draw===plt.prototype.draw?[{z:n,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:n+1,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",r=[];let i,o;for(i=0,o=e.length;i<o;++i){const o=e[i];o[n]!==this.id||t&&o.type!==t||r.push(o)}return r}_resolveTickFontOptions(t){return Vot(this.options.ticks.setContext(this.getContext(t)).font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class mlt{constructor(t,e,n){this.type=t,this.scope=e,this.override=n,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let n;(function(t){return"id"in t&&"defaults"in t})(e)&&(n=this.register(e));const r=this.items,i=t.id,o=this.scope+"."+i;if(!i)throw new Error("class does not have id: "+t);return i in r||(r[i]=t,function(t,e,n){const r=Drt(Object.create(null),[n?cot.get(n):{},cot.get(e),t.defaults]);cot.set(e,r),t.defaultRoutes&&function(t,e){Object.keys(e).forEach((n=>{const r=n.split("."),i=r.pop(),o=[t].concat(r).join("."),a=e[n].split("."),s=a.pop(),l=a.join(".");cot.route(o,i,l,s)}))}(e,t.defaultRoutes);t.descriptors&&cot.describe(e,t.descriptors)}(t,o,n),this.override&&cot.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,n=t.id,r=this.scope;n in e&&delete e[n],r&&n in cot[r]&&(delete cot[r][n],this.override&&delete aot[n])}}var glt=new class{constructor(){this.controllers=new mlt(est,"datasets",!0),this.elements=new mlt(rlt,"elements"),this.plugins=new mlt(Object,"plugins"),this.scales=new mlt(plt,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("register",e)}remove(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("unregister",e)}addControllers(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("register",e,this.controllers)}addElements(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("register",e,this.elements)}addPlugins(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("register",e,this.plugins)}addScales(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("register",e,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("unregister",e,this.controllers)}removeElements(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("unregister",e,this.elements)}removePlugins(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("unregister",e,this.plugins)}removeScales(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("unregister",e,this.scales)}_each(t,e,n){[...e].forEach((e=>{const r=n||this._getRegistryForType(e);n||r.isForType(e)||r===this.plugins&&e.id?this._exec(t,r,e):Rrt(e,(e=>{const r=n||this._getRegistryForType(e);this._exec(t,r,e)}))}))}_exec(t,e,n){const r=Xrt(t);Irt(n["before"+r],[],n),e[t](n),Irt(n["after"+r],[],n)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const n=this._typedRegistries[e];if(n.isForType(t))return n}return this.plugins}_get(t,e,n){const r=e.get(t);if(void 0===r)throw new Error('"'+t+'" is not a registered '+n+".");return r}};class ylt{constructor(){this._init=[]}notify(t,e,n,r){"beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const i=r?this._descriptors(t).filter(r):this._descriptors(t),o=this._notify(i,t,e,n);return"afterDestroy"===e&&(this._notify(i,t,"stop"),this._notify(this._init,t,"uninstall")),o}_notify(t,e,n,r){r=r||{};for(const i of t){const t=i.plugin;if(!1===Irt(t[n],[e,r,i.options],t)&&r.cancelable)return!1}return!0}invalidate(){Trt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const n=t&&t.config,r=Ert(n.options&&n.options.plugins,{}),i=function(t){const e=[],n=Object.keys(glt.plugins.items);for(let i=0;i<n.length;i++)e.push(glt.getPlugin(n[i]));const r=t.plugins||[];for(let i=0;i<r.length;i++){const t=r[i];-1===e.indexOf(t)&&e.push(t)}return e}(n);return!1!==r||e?function(t,e,n,r){const i=[],o=t.getContext();for(let a=0;a<e.length;a++){const s=e[a],l=vlt(n[s.id],r);null!==l&&i.push({plugin:s,options:blt(t.config,s,l,o)})}return i}(t,i,r,e):[]}_notifyStateChanges(t){const e=this._oldCache||[],n=this._cache,r=(t,e)=>t.filter((t=>!e.some((e=>t.plugin.id===e.plugin.id))));this._notify(r(e,n),t,"stop"),this._notify(r(n,e),t,"start")}}function vlt(t,e){return e||!1!==t?!0===t?{}:t:null}function blt(t,e,n,r){const i=t.pluginScopeKeys(e),o=t.getOptionScopes(n,i);return t.createResolver(o,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function wlt(t,e){const n=cot.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function xlt(t,e){return"x"===t||"y"===t?t:e.axis||("top"===(n=e.position)||"bottom"===n?"x":"left"===n||"right"===n?"y":void 0)||t.charAt(0).toLowerCase();var n}function Mlt(t){const e=t.options||(t.options={});e.plugins=Ert(e.plugins,{}),e.scales=function(t,e){const n=aot[t.type]||{scales:{}},r=e.scales||{},i=wlt(t.type,e),o=Object.create(null),a=Object.create(null);return Object.keys(r).forEach((t=>{const e=r[t];if(!Nrt(e))return console.error(`Invalid scale configuration for scale: ${t}`);if(e._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);const s=xlt(t,e),l=function(t,e){return t===e?"_index_":"_value_"}(s,i),u=n.scales||{};o[s]=o[s]||t,a[t]=Frt(Object.create(null),[{axis:s},e,u[s],u[l]])})),t.data.datasets.forEach((n=>{const i=n.type||t.type,s=n.indexAxis||wlt(i,e),l=(aot[i]||{}).scales||{};Object.keys(l).forEach((t=>{const e=function(t,e){let n=t;return"_index_"===t?n=e:"_value_"===t&&(n="x"===e?"y":"x"),n}(t,s),i=n[e+"AxisID"]||o[e]||e;a[i]=a[i]||Object.create(null),Frt(a[i],[{axis:e},r[i],l[t]])}))})),Object.keys(a).forEach((t=>{const e=a[t];Frt(e,[cot.scales[e.type],cot.scale])})),a}(t,e)}function klt(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const Slt=new Map,Clt=new Set;function Plt(t,e){let n=Slt.get(t);return n||(n=e(),Slt.set(t,n),Clt.add(n)),n}const Tlt=(t,e,n)=>{const r=qrt(e,n);void 0!==r&&t.add(r)};class Alt{constructor(t){this._config=function(t){return(t=t||{}).data=klt(t.data),Mlt(t),t}(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=klt(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Mlt(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Plt(t,(()=>[[`datasets.${t}`,""]]))}datasetAnimationScopeKeys(t,e){return Plt(`${t}.transition.${e}`,(()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]]))}datasetElementScopeKeys(t,e){return Plt(`${t}-${e}`,(()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]]))}pluginScopeKeys(t){const e=t.id;return Plt(`${this.type}-plugin-${e}`,(()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]]))}_cachedScopes(t,e){const n=this._scopeCache;let r=n.get(t);return r&&!e||(r=new Map,n.set(t,r)),r}getOptionScopes(t,e,n){const{options:r,type:i}=this,o=this._cachedScopes(t,n),a=o.get(e);if(a)return a;const s=new Set;e.forEach((e=>{t&&(s.add(t),e.forEach((e=>Tlt(s,t,e)))),e.forEach((t=>Tlt(s,r,t))),e.forEach((t=>Tlt(s,aot[i]||{},t))),e.forEach((t=>Tlt(s,cot,t))),e.forEach((t=>Tlt(s,sot,t)))}));const l=Array.from(s);return 0===l.length&&l.push(Object.create(null)),Clt.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,aot[e]||{},cot.datasets[e]||{},{type:e},cot,sot]}resolveNamedOptions(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[""];const i={$shared:!0},{resolver:o,subPrefixes:a}=Nlt(this._resolverCache,t,r);let s=o;if(function(t,e){const{isScriptable:n,isIndexable:r}=qot(t);for(const i of e){const e=n(i),o=r(i),a=(o||e)&&t[i];if(e&&(Yrt(a)||Olt(a))||o&&Art(a))return!0}return!1}(o,e)){i.$shared=!1;s=Wot(o,n=Yrt(n)?n():n,this.createResolver(t,n,a))}for(const l of e)i[l]=s[l];return i}createResolver(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[""],r=arguments.length>3?arguments[3]:void 0;const{resolver:i}=Nlt(this._resolverCache,t,n);return Nrt(e)?Wot(i,e,void 0,r):i}}function Nlt(t,e,n){let r=t.get(e);r||(r=new Map,t.set(e,r));const i=n.join();let o=r.get(i);if(!o){o={resolver:Uot(e,n),subPrefixes:n.filter((t=>!t.toLowerCase().includes("hover")))},r.set(i,o)}return o}const Olt=t=>Nrt(t)&&Object.getOwnPropertyNames(t).reduce(((e,n)=>e||Yrt(t[n])),!1);const jlt=["top","bottom","left","right","chartArea"];function Elt(t,e){return"top"===t||"bottom"===t||-1===jlt.indexOf(t)&&"x"===e}function Vlt(t,e){return function(n,r){return n[t]===r[t]?n[e]-r[e]:n[t]-r[t]}}function Ilt(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),Irt(n&&n.onComplete,[t],e)}function Rlt(t){const e=t.chart,n=e.options.animation;Irt(n&&n.onProgress,[t],e)}function zlt(t){return hat()&&"string"===typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Llt={},Hlt=t=>{const e=zlt(t);return Object.values(Llt).filter((t=>t.canvas===e)).pop()};function Blt(t,e,n){const r=Object.keys(t);for(const i of r){const r=+i;if(r>=e){const o=t[i];delete t[i],(n>0||r>e)&&(t[r+n]=o)}}}class Dlt{constructor(t,e){const n=this.config=new Alt(e),r=zlt(t),i=Hlt(r);if(i)throw new Error("Canvas is already in use. Chart with ID '"+i.id+"' must be destroyed before the canvas can be reused.");const o=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||function(t){return!hat()||"undefined"!==typeof OffscreenCanvas&&t instanceof OffscreenCanvas?Ust:nlt}(r)),this.platform.updateConfig(n);const a=this.platform.acquireContext(r,o.aspectRatio),s=a&&a.canvas,l=s&&s.height,u=s&&s.width;this.id=Prt(),this.ctx=a,this.canvas=s,this.width=u,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new ylt,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=function(t,e){let n;return function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}((t=>this.update(t)),o.resizeDelay||0),this._dataChanges=[],Llt[this.id]=this,a&&s?(Hat.listen(this,"complete",Ilt),Hat.listen(this,"progress",Rlt),this._initialize(),this.attached&&this.update()):console.error("Failed to create chart: can't acquire context from the given item")}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:n,height:r,_aspectRatio:i}=this;return Trt(t)?e&&i?i:r?n/r:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():wat(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return pot(this.canvas,this.ctx),this}stop(){return Hat.stop(this),this}resize(t,e){Hat.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const n=this.options,r=this.canvas,i=n.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(r,t,e,i),a=n.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,wat(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Irt(n.onResize,[this,o],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){Rrt(this.options.scales||{},((t,e)=>{t.id=e}))}buildOrUpdateScales(){const t=this.options,e=t.scales,n=this.scales,r=Object.keys(n).reduce(((t,e)=>(t[e]=!1,t)),{});let i=[];e&&(i=i.concat(Object.keys(e).map((t=>{const n=e[t],r=xlt(t,n),i="r"===r,o="x"===r;return{options:n,dposition:i?"chartArea":o?"bottom":"left",dtype:i?"radialLinear":o?"category":"linear"}})))),Rrt(i,(e=>{const i=e.options,o=i.id,a=xlt(o,i),s=Ert(i.type,e.dtype);void 0!==i.position&&Elt(i.position,a)===Elt(e.dposition)||(i.position=e.dposition),r[o]=!0;let l=null;if(o in n&&n[o].type===s)l=n[o];else{l=new(glt.getScale(s))({id:o,type:s,ctx:this.ctx,chart:this}),n[l.id]=l}l.init(i,t)})),Rrt(r,((t,e)=>{t||delete n[e]})),Rrt(n,(t=>{Dst.configure(this,t,t.options),Dst.addBox(this,t)}))}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,n=t.length;if(t.sort(((t,e)=>t.index-e.index)),n>e){for(let t=e;t<n;++t)this._destroyDatasetMeta(t);t.splice(e,n-e)}this._sortedMetasets=t.slice(0).sort(Vlt("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach(((t,n)=>{0===e.filter((e=>e===t._dataset)).length&&this._destroyDatasetMeta(n)}))}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let n,r;for(this._removeUnreferencedMetasets(),n=0,r=e.length;n<r;n++){const r=e[n];let i=this.getDatasetMeta(n);const o=r.type||this.config.type;if(i.type&&i.type!==o&&(this._destroyDatasetMeta(n),i=this.getDatasetMeta(n)),i.type=o,i.indexAxis=r.indexAxis||wlt(o,this.options),i.order=r.order||0,i.index=n,i.label=""+r.label,i.visible=this.isDatasetVisible(n),i.controller)i.controller.updateIndex(n),i.controller.linkScales();else{const e=glt.getController(o),{datasetElementType:r,dataElementType:a}=cot.datasets[o];Object.assign(e.prototype,{dataElementType:glt.getElement(a),datasetElementType:r&&glt.getElement(r)}),i.controller=new e(this,n),t.push(i.controller)}}return this._updateMetasets(),t}_resetElements(){Rrt(this.data.datasets,((t,e)=>{this.getDatasetMeta(e).controller.reset()}),this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const n=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;const i=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,u=this.data.datasets.length;l<u;l++){const{controller:t}=this.getDatasetMeta(l),e=!r&&-1===i.indexOf(t);t.buildOrUpdateElements(e),o=Math.max(+t.getMaxOverflow(),o)}o=this._minPadding=n.layout.autoPadding?o:0,this._updateLayout(o),r||Rrt(i,(t=>{t.reset()})),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Vlt("z","_idx"));const{_active:a,_lastEvent:s}=this;s?this._eventHandler(s,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Rrt(this.scales,(t=>{Dst.removeBox(this,t)})),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),n=new Set(t.events);Krt(e,n)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:n,start:r,count:i}of e){Blt(t,r,"_removeElements"===n?-i:i)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,n=e=>new Set(t.filter((t=>t[0]===e)).map(((t,e)=>e+","+t.splice(1).join(",")))),r=n(0);for(let i=1;i<e;i++)if(!Krt(r,n(i)))return;return Array.from(r).map((t=>t.split(","))).map((t=>({method:t[1],start:+t[2],count:+t[3]})))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;Dst.update(this,this.width,this.height,t);const e=this.chartArea,n=e.width<=0||e.height<=0;this._layers=[],Rrt(this.boxes,(t=>{n&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))}),this),this._layers.forEach(((t,e)=>{t._idx=e})),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,n=this.data.datasets.length;e<n;++e)this._updateDataset(e,Yrt(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const n=this.getDatasetMeta(t),r={meta:n,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",r)&&(n.controller._update(e),r.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",r))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(Hat.has(this)?this.attached&&!Hat.running(this)&&Hat.start(this):(this.draw(),Ilt({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:t,height:e}=this._resizeBeforeDraw;this._resize(t,e),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0)return;if(!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,n=[];let r,i;for(r=0,i=e.length;r<i;++r){const i=e[r];t&&!i.visible||n.push(i)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,n=t._clip,r=!n.disabled,i=this.chartArea,o={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",o)&&(r&&yot(e,{left:!1===n.left?0:i.left-n.left,right:!1===n.right?this.width:i.right+n.right,top:!1===n.top?0:i.top-n.top,bottom:!1===n.bottom?this.height:i.bottom+n.bottom}),t.controller.draw(),r&&vot(e),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(t){return got(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,n,r){const i=Tst.modes[e];return"function"===typeof i?i(this,t,n,r):[]}getDatasetMeta(t){const e=this.data.datasets[t],n=this._metasets;let r=n.filter((t=>t&&t._dataset===e)).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},n.push(r)),r}getContext(){return this.$context||(this.$context=Rot(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const n=this.getDatasetMeta(t);return"boolean"===typeof n.hidden?!n.hidden:!e.hidden}setDatasetVisibility(t,e){this.getDatasetMeta(t).hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,n){const r=n?"show":"hide",i=this.getDatasetMeta(t),o=i.controller._resolveAnimations(void 0,r);Zrt(e)?(i.data[e].hidden=!n,this.update()):(this.setDatasetVisibility(t,n),o.update(i,{visible:n}),this.update((e=>e.datasetIndex===t?r:void 0)))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),Hat.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),pot(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),this.notifyPlugins("destroy"),delete Llt[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(){return this.canvas.toDataURL(...arguments)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,n=(n,r)=>{e.addEventListener(this,n,r),t[n]=r},r=(t,e,n)=>{t.offsetX=e,t.offsetY=n,this._eventHandler(t)};Rrt(this.options.events,(t=>n(t,r)))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,n=(n,r)=>{e.addEventListener(this,n,r),t[n]=r},r=(n,r)=>{t[n]&&(e.removeEventListener(this,n,r),delete t[n])},i=(t,e)=>{this.canvas&&this.resize(t,e)};let o;const a=()=>{r("attach",a),this.attached=!0,this.resize(),n("resize",i),n("detach",o)};o=()=>{this.attached=!1,r("resize",i),this._stop(),this._resize(0,0),n("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){Rrt(this._listeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._listeners={},Rrt(this._responsiveListeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._responsiveListeners=void 0}updateHoverStyle(t,e,n){const r=n?"set":"remove";let i,o,a,s;for("dataset"===e&&(i=this.getDatasetMeta(t[0].datasetIndex),i.controller["_"+r+"DatasetHoverStyle"]()),a=0,s=t.length;a<s;++a){o=t[a];const e=o&&this.getDatasetMeta(o.datasetIndex).controller;e&&e[r+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],n=t.map((t=>{let{datasetIndex:e,index:n}=t;const r=this.getDatasetMeta(e);if(!r)throw new Error("No dataset found at index "+e);return{datasetIndex:e,element:r.data[n],index:n}}));!zrt(n,e)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,e))}notifyPlugins(t,e,n){return this._plugins.notify(this,t,e,n)}_updateHoverStyles(t,e,n){const r=this.options.hover,i=(t,e)=>t.filter((t=>!e.some((e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)))),o=i(e,t),a=n?t:i(t,e);o.length&&this.updateHoverStyle(o,r.mode,!1),a.length&&r.mode&&this.updateHoverStyle(a,r.mode,!0)}_eventHandler(t,e){const n={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},r=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",n,r))return;const i=this._handleEvent(t,e,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,r),(i||n.changed)&&this.render(),this}_handleEvent(t,e,n){const{_active:r=[],options:i}=this,o=e,a=this._getActiveElements(t,r,n,o),s=function(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}(t),l=function(t,e,n,r){return n&&"mouseout"!==t.type?r?e:t:null}(t,this._lastEvent,n,s);n&&(this._lastEvent=null,Irt(i.onHover,[t,a,this],this),s&&Irt(i.onClick,[t,a,this],this));const u=!zrt(a,r);return(u||e)&&(this._active=a,this._updateHoverStyles(a,r,e)),this._lastEvent=l,u}_getActiveElements(t,e,n,r){if("mouseout"===t.type)return[];if(!n)return e;const i=this.options.hover;return this.getElementsAtEventForMode(t,i.mode,i,r)}}const Flt=()=>Rrt(Dlt.instances,(t=>t._plugins.invalidate())),Ult=!0;function Wlt(t,e,n){const{startAngle:r,pixelMargin:i,x:o,y:a,outerRadius:s,innerRadius:l}=e;let u=i/s;t.beginPath(),t.arc(o,a,s,r-u,n+u),l>i?(u=i/l,t.arc(o,a,l,n+u,r-u,!0)):t.arc(o,a,i,n+tit,r-tit),t.closePath(),t.clip()}function qlt(t,e,n,r){const i=function(t){return Not(t,["outerStart","outerEnd","innerStart","innerEnd"])}(t.options.borderRadius),o=(n-e)/2,a=Math.min(o,r*e/2),s=t=>{const e=(n-Math.min(o,t))*r/2;return yit(t,0,Math.min(o,e))};return{outerStart:s(i.outerStart),outerEnd:s(i.outerEnd),innerStart:yit(i.innerStart,0,a),innerEnd:yit(i.innerEnd,0,a)}}function Xlt(t,e,n,r){return{x:n+t*Math.cos(e),y:r+t*Math.sin(e)}}function Zlt(t,e,n,r,i){const{x:o,y:a,startAngle:s,pixelMargin:l,innerRadius:u}=e,c=Math.max(e.outerRadius+r+n-l,0),h=u>0?u+r+n+l:0;let d=0;const f=i-s;if(r){const t=((u>0?u-r:0)+(c>0?c-r:0))/2;d=(f-(0!==t?f*t/(t+r):f))/2}const p=(f-Math.max(.001,f*c-n/Grt)/c)/2,m=s+p+d,g=i-p-d,{outerStart:y,outerEnd:v,innerStart:b,innerEnd:w}=qlt(e,h,c,g-m),x=c-y,M=c-v,k=m+y/x,S=g-v/M,C=h+b,P=h+w,T=m+b/C,A=g-w/P;if(t.beginPath(),t.arc(o,a,c,k,S),v>0){const e=Xlt(M,S,o,a);t.arc(e.x,e.y,v,S,g+tit)}const N=Xlt(P,g,o,a);if(t.lineTo(N.x,N.y),w>0){const e=Xlt(P,A,o,a);t.arc(e.x,e.y,w,g+tit,A+Math.PI)}if(t.arc(o,a,h,g-w/h,m+b/h,!0),b>0){const e=Xlt(C,T,o,a);t.arc(e.x,e.y,b,T+Math.PI,m-tit)}const O=Xlt(x,m,o,a);if(t.lineTo(O.x,O.y),y>0){const e=Xlt(x,k,o,a);t.arc(e.x,e.y,y,m-tit,k)}t.closePath()}function Ylt(t,e,n,r,i){const{options:o}=e,{borderWidth:a,borderJoinStyle:s}=o,l="inner"===o.borderAlign;a&&(l?(t.lineWidth=2*a,t.lineJoin=s||"round"):(t.lineWidth=a,t.lineJoin=s||"bevel"),e.fullCircles&&function(t,e,n){const{x:r,y:i,startAngle:o,pixelMargin:a,fullCircles:s}=e,l=Math.max(e.outerRadius-a,0),u=e.innerRadius+a;let c;for(n&&Wlt(t,e,o+Jrt),t.beginPath(),t.arc(r,i,u,o+Jrt,o,!0),c=0;c<s;++c)t.stroke();for(t.beginPath(),t.arc(r,i,l,o,o+Jrt),c=0;c<s;++c)t.stroke()}(t,e,l),l&&Wlt(t,e,i),Zlt(t,e,n,r,i),t.stroke())}Object.defineProperties(Dlt,{defaults:{enumerable:Ult,value:cot},instances:{enumerable:Ult,value:Llt},overrides:{enumerable:Ult,value:aot},registry:{enumerable:Ult,value:glt},version:{enumerable:Ult,value:"3.8.0"},getChart:{enumerable:Ult,value:Hlt},register:{enumerable:Ult,value:function(){glt.add(...arguments),Flt()}},unregister:{enumerable:Ult,value:function(){glt.remove(...arguments),Flt()}}});class Klt extends rlt{constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,n){const r=this.getProps(["x","y"],n),{angle:i,distance:o}=dit(r,{x:t,y:e}),{startAngle:a,endAngle:s,innerRadius:l,outerRadius:u,circumference:c}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),h=this.options.spacing/2,d=Ert(c,s-a)>=Jrt||git(i,a,s),f=vit(o,l+h,u+h);return d&&f}getCenterPoint(t){const{x:e,y:n,startAngle:r,endAngle:i,innerRadius:o,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),{offset:s,spacing:l}=this.options,u=(r+i)/2,c=(o+a+l+s)/2;return{x:e+Math.cos(u)*c,y:n+Math.sin(u)*c}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:e,circumference:n}=this,r=(e.offset||0)/2,i=(e.spacing||0)/2;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=n>Jrt?Math.floor(n/Jrt):0,0===n||this.innerRadius<0||this.outerRadius<0)return;t.save();let o=0;if(r){o=r/2;const e=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(e)*o,Math.sin(e)*o),this.circumference>=Grt&&(o=r)}t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor;const a=function(t,e,n,r){const{fullCircles:i,startAngle:o,circumference:a}=e;let s=e.endAngle;if(i){Zlt(t,e,n,r,o+Jrt);for(let e=0;e<i;++e)t.fill();isNaN(a)||(s=o+a%Jrt,a%Jrt===0&&(s+=Jrt))}return Zlt(t,e,n,r,s),t.fill(),s}(t,this,o,i);Ylt(t,this,o,i,a),t.restore()}}function Glt(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;t.lineCap=Ert(n.borderCapStyle,e.borderCapStyle),t.setLineDash(Ert(n.borderDash,e.borderDash)),t.lineDashOffset=Ert(n.borderDashOffset,e.borderDashOffset),t.lineJoin=Ert(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=Ert(n.borderWidth,e.borderWidth),t.strokeStyle=Ert(n.borderColor,e.borderColor)}function Jlt(t,e,n){t.lineTo(n.x,n.y)}function Qlt(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=t.length,{start:i=0,end:o=r-1}=n,{start:a,end:s}=e,l=Math.max(i,a),u=Math.min(o,s),c=i<a&&o<a||i>s&&o>s;return{count:r,start:l,loop:e.loop,ilen:u<l&&!c?r+u-l:u-l}}function _lt(t,e,n,r){const{points:i,options:o}=e,{count:a,start:s,loop:l,ilen:u}=Qlt(i,n,r),c=function(t){return t.stepped?bot:t.tension||"monotone"===t.cubicInterpolationMode?wot:Jlt}(o);let h,d,f,{move:p=!0,reverse:m}=r||{};for(h=0;h<=u;++h)d=i[(s+(m?u-h:h))%a],d.skip||(p?(t.moveTo(d.x,d.y),p=!1):c(t,f,d,m,o.stepped),f=d);return l&&(d=i[(s+(m?u:0))%a],c(t,f,d,m,o.stepped)),!!l}function $lt(t,e,n,r){const i=e.points,{count:o,start:a,ilen:s}=Qlt(i,n,r),{move:l=!0,reverse:u}=r||{};let c,h,d,f,p,m,g=0,y=0;const v=t=>(a+(u?s-t:t))%o,b=()=>{f!==p&&(t.lineTo(g,p),t.lineTo(g,f),t.lineTo(g,m))};for(l&&(h=i[v(0)],t.moveTo(h.x,h.y)),c=0;c<=s;++c){if(h=i[v(c)],h.skip)continue;const e=h.x,n=h.y,r=0|e;r===d?(n<f?f=n:n>p&&(p=n),g=(y*g+e)/++y):(b(),t.lineTo(e,n),d=r,y=0,f=p=n),m=n}b()}function tut(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&"monotone"!==e.cubicInterpolationMode&&!e.stepped&&!n?$lt:_lt}Klt.id="arc",Klt.defaults={borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0},Klt.defaultRoutes={backgroundColor:"backgroundColor"};const eut="function"===typeof Path2D;function nut(t,e,n,r){eut&&!e.options.segment?function(t,e,n,r){let i=e._path;i||(i=e._path=new Path2D,e.path(i,n,r)&&i.closePath()),Glt(t,e.options),t.stroke(i)}(t,e,n,r):function(t,e,n,r){const{segments:i,options:o}=e,a=tut(e);for(const s of i)Glt(t,o,s.style),t.beginPath(),a(t,e,s,{start:n,end:n+r-1})&&t.closePath(),t.stroke()}(t,e,n,r)}class rut extends rlt{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const n=this.options;if((n.tension||"monotone"===n.cubicInterpolationMode)&&!n.stepped&&!this._pointsUpdated){const r=n.spanGaps?this._loop:this._fullLoop;cat(this._points,n,t,r,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=function(t,e){const n=t.points,r=t.options.spanGaps,i=n.length;if(!i)return[];const o=!!t._loop,{start:a,end:s}=function(t,e,n,r){let i=0,o=e-1;if(n&&!r)for(;i<e&&!t[i].skip;)i++;for(;i<e&&t[i].skip;)i++;for(i%=e,n&&(o+=i);o>i&&t[o%e].skip;)o--;return o%=e,{start:i,end:o}}(n,i,o,r);return Rat(t,!0===r?[{start:a,end:s,loop:o}]:function(t,e,n,r){const i=t.length,o=[];let a,s=e,l=t[e];for(a=e+1;a<=n;++a){const n=t[a%i];n.skip||n.stop?l.skip||(r=!1,o.push({start:e%i,end:(a-1)%i,loop:r}),e=s=n.stop?a:null):(s=a,l.skip&&(e=a)),l=n}return null!==s&&o.push({start:e%i,end:s%i,loop:r}),o}(n,a,s<a?s+i:s,!!t._fullLoop&&0===a&&s===i-1),n,e)}(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,n=t.length;return n&&e[t[n-1].end]}interpolate(t,e){const n=this.options,r=t[e],i=this.points,o=Iat(this,{property:e,start:r,end:r});if(!o.length)return;const a=[],s=function(t){return t.stepped?Sat:t.tension||"monotone"===t.cubicInterpolationMode?Cat:kat}(n);let l,u;for(l=0,u=o.length;l<u;++l){const{start:u,end:c}=o[l],h=i[u],d=i[c];if(h===d){a.push(h);continue}const f=s(h,d,Math.abs((r-h[e])/(d[e]-h[e])),n.stepped);f[e]=t[e],a.push(f)}return 1===a.length?a[0]:a}pathSegment(t,e,n){return tut(this)(t,this,e,n)}path(t,e,n){const r=this.segments,i=tut(this);let o=this._loop;e=e||0,n=n||this.points.length-e;for(const a of r)o&=i(t,this,a,{start:e,end:e+n-1});return!!o}draw(t,e,n,r){const i=this.options||{};(this.points||[]).length&&i.borderWidth&&(t.save(),nut(t,this,n,r),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function iut(t,e,n,r){const i=t.options,{[n]:o}=t.getProps([n],r);return Math.abs(e-o)<i.radius+i.hitRadius}rut.id="line",rut.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0},rut.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"},rut.descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};class out extends rlt{constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,n){const r=this.options,{x:i,y:o}=this.getProps(["x","y"],n);return Math.pow(t-i,2)+Math.pow(e-o,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(t,e){return iut(this,t,"x",e)}inYRange(t,e){return iut(this,t,"y",e)}getCenterPoint(t){const{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}size(t){let e=(t=t||this.options||{}).radius||0;e=Math.max(e,e&&t.hoverRadius||0);return 2*(e+(e&&t.borderWidth||0))}draw(t,e){const n=this.options;this.skip||n.radius<.1||!got(this,e,this.size(n)/2)||(t.strokeStyle=n.borderColor,t.lineWidth=n.borderWidth,t.fillStyle=n.backgroundColor,mot(t,n,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function aut(t,e){const{x:n,y:r,base:i,width:o,height:a}=t.getProps(["x","y","base","width","height"],e);let s,l,u,c,h;return t.horizontal?(h=a/2,s=Math.min(n,i),l=Math.max(n,i),u=r-h,c=r+h):(h=o/2,s=n-h,l=n+h,u=Math.min(r,i),c=Math.max(r,i)),{left:s,top:u,right:l,bottom:c}}function sut(t,e,n,r){return t?0:yit(e,n,r)}function lut(t){const e=aut(t),n=e.right-e.left,r=e.bottom-e.top,i=function(t,e,n){const r=t.options.borderWidth,i=t.borderSkipped,o=Oot(r);return{t:sut(i.top,o.top,0,n),r:sut(i.right,o.right,0,e),b:sut(i.bottom,o.bottom,0,n),l:sut(i.left,o.left,0,e)}}(t,n/2,r/2),o=function(t,e,n){const{enableBorderRadius:r}=t.getProps(["enableBorderRadius"]),i=t.options.borderRadius,o=jot(i),a=Math.min(e,n),s=t.borderSkipped,l=r||Nrt(i);return{topLeft:sut(!l||s.top||s.left,o.topLeft,0,a),topRight:sut(!l||s.top||s.right,o.topRight,0,a),bottomLeft:sut(!l||s.bottom||s.left,o.bottomLeft,0,a),bottomRight:sut(!l||s.bottom||s.right,o.bottomRight,0,a)}}(t,n/2,r/2);return{outer:{x:e.left,y:e.top,w:n,h:r,radius:o},inner:{x:e.left+i.l,y:e.top+i.t,w:n-i.l-i.r,h:r-i.t-i.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,o.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(i.b,i.r))}}}}function uut(t,e,n,r){const i=null===e,o=null===n,a=t&&!(i&&o)&&aut(t,r);return a&&(i||vit(e,a.left,a.right))&&(o||vit(n,a.top,a.bottom))}function cut(t,e){t.rect(e.x,e.y,e.w,e.h)}function hut(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=t.x!==n.x?-e:0,i=t.y!==n.y?-e:0,o=(t.x+t.w!==n.x+n.w?e:0)-r,a=(t.y+t.h!==n.y+n.h?e:0)-i;return{x:t.x+r,y:t.y+i,w:t.w+o,h:t.h+a,radius:t.radius}}out.id="point",out.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0},out.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};class dut extends rlt{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:n,backgroundColor:r}}=this,{inner:i,outer:o}=lut(this),a=(s=o.radius).topLeft||s.topRight||s.bottomLeft||s.bottomRight?Sot:cut;var s;t.save(),o.w===i.w&&o.h===i.h||(t.beginPath(),a(t,hut(o,e,i)),t.clip(),a(t,hut(i,-e,o)),t.fillStyle=n,t.fill("evenodd")),t.beginPath(),a(t,hut(i,e)),t.fillStyle=r,t.fill(),t.restore()}inRange(t,e,n){return uut(this,t,e,n)}inXRange(t,e){return uut(this,t,null,e)}inYRange(t,e){return uut(this,null,t,e)}getCenterPoint(t){const{x:e,y:n,base:r,horizontal:i}=this.getProps(["x","y","base","horizontal"],t);return{x:i?(e+r)/2:e,y:i?n:(n+r)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}}dut.id="bar",dut.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0},dut.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};const fut=(t,e)=>{let{boxHeight:n=e,boxWidth:r=e}=t;return t.usePointStyle&&(n=Math.min(n,e),r=Math.min(r,e)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(e,n)}};class put extends rlt{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,n){this.maxWidth=t,this.maxHeight=e,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=Irt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter((e=>t.filter(e,this.chart.data)))),t.sort&&(e=e.sort(((e,n)=>t.sort(e,n,this.chart.data)))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display)return void(this.width=this.height=0);const n=t.labels,r=Vot(n.font),i=r.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:s}=fut(n,i);let l,u;e.font=r.string,this.isHorizontal()?(l=this.maxWidth,u=this._fitRows(o,i,a,s)+10):(u=this.maxHeight,l=this._fitCols(o,i,a,s)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(u,t.maxHeight||this.maxHeight)}_fitRows(t,e,n,r){const{ctx:i,maxWidth:o,options:{labels:{padding:a}}}=this,s=this.legendHitBoxes=[],l=this.lineWidths=[0],u=r+a;let c=t;i.textAlign="left",i.textBaseline="middle";let h=-1,d=-u;return this.legendItems.forEach(((t,f)=>{const p=n+e/2+i.measureText(t.text).width;(0===f||l[l.length-1]+p+2*a>o)&&(c+=u,l[l.length-(f>0?0:1)]=0,d+=u,h++),s[f]={left:0,top:d,row:h,width:p,height:r},l[l.length-1]+=p+a})),c}_fitCols(t,e,n,r){const{ctx:i,maxHeight:o,options:{labels:{padding:a}}}=this,s=this.legendHitBoxes=[],l=this.columnSizes=[],u=o-t;let c=a,h=0,d=0,f=0,p=0;return this.legendItems.forEach(((t,o)=>{const m=n+e/2+i.measureText(t.text).width;o>0&&d+r+2*a>u&&(c+=h+a,l.push({width:h,height:d}),f+=h+a,p++,h=d=0),s[o]={left:f,top:d,col:p,width:m,height:r},h=Math.max(h,m),d+=r+a})),c+=h,l.push({width:h,height:d}),c}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:n,labels:{padding:r},rtl:i}}=this,o=Aat(i,this.left,this.width);if(this.isHorizontal()){let i=0,a=Srt(n,this.left+r,this.right-this.lineWidths[i]);for(const s of e)i!==s.row&&(i=s.row,a=Srt(n,this.left+r,this.right-this.lineWidths[i])),s.top+=this.top+t+r,s.left=o.leftForLtr(o.x(a),s.width),a+=s.width+r}else{let i=0,a=Srt(n,this.top+t+r,this.bottom-this.columnSizes[i].height);for(const s of e)s.col!==i&&(i=s.col,a=Srt(n,this.top+t+r,this.bottom-this.columnSizes[i].height)),s.top=a,s.left+=this.left+r,s.left=o.leftForLtr(o.x(s.left),s.width),a+=s.height+r}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){const t=this.ctx;yot(t,this),this._draw(),vot(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:n,ctx:r}=this,{align:i,labels:o}=t,a=cot.color,s=Aat(t.rtl,this.left,this.width),l=Vot(o.font),{color:u,padding:c}=o,h=l.size,d=h/2;let f;this.drawTitle(),r.textAlign=s.textAlign("left"),r.textBaseline="middle",r.lineWidth=.5,r.font=l.string;const{boxWidth:p,boxHeight:m,itemHeight:g}=fut(o,h),y=this.isHorizontal(),v=this._computeTitleHeight();f=y?{x:Srt(i,this.left+c,this.right-n[0]),y:this.top+c+v,line:0}:{x:this.left+c,y:Srt(i,this.top+v+c,this.bottom-e[0].height),line:0},Nat(this.ctx,t.textDirection);const b=g+c;this.legendItems.forEach(((w,x)=>{r.strokeStyle=w.fontColor||u,r.fillStyle=w.fontColor||u;const M=r.measureText(w.text).width,k=s.textAlign(w.textAlign||(w.textAlign=o.textAlign)),S=p+d+M;let C=f.x,P=f.y;s.setWidth(this.width),y?x>0&&C+S+c>this.right&&(P=f.y+=b,f.line++,C=f.x=Srt(i,this.left+c,this.right-n[f.line])):x>0&&P+b>this.bottom&&(C=f.x=C+e[f.line].width+c,f.line++,P=f.y=Srt(i,this.top+v+c,this.bottom-e[f.line].height));!function(t,e,n){if(isNaN(p)||p<=0||isNaN(m)||m<0)return;r.save();const i=Ert(n.lineWidth,1);if(r.fillStyle=Ert(n.fillStyle,a),r.lineCap=Ert(n.lineCap,"butt"),r.lineDashOffset=Ert(n.lineDashOffset,0),r.lineJoin=Ert(n.lineJoin,"miter"),r.lineWidth=i,r.strokeStyle=Ert(n.strokeStyle,a),r.setLineDash(Ert(n.lineDash,[])),o.usePointStyle){const o={radius:p*Math.SQRT2/2,pointStyle:n.pointStyle,rotation:n.rotation,borderWidth:i},a=s.xPlus(t,p/2);mot(r,o,a,e+d)}else{const o=e+Math.max((h-m)/2,0),a=s.leftForLtr(t,p),l=jot(n.borderRadius);r.beginPath(),Object.values(l).some((t=>0!==t))?Sot(r,{x:a,y:o,w:p,h:m,radius:l}):r.rect(a,o,p,m),r.fill(),0!==i&&r.stroke()}r.restore()}(s.x(C),P,w),C=((t,e,n,r)=>t===(r?"left":"right")?n:"center"===t?(e+n)/2:e)(k,C+p+d,y?C+S:this.right,t.rtl),function(t,e,n){xot(r,n.text,t,e+g/2,l,{strikethrough:n.hidden,textAlign:s.textAlign(n.textAlign)})}(s.x(C),P,w),y?f.x+=S+c:f.y+=b})),Oat(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,n=Vot(e.font),r=Eot(e.padding);if(!e.display)return;const i=Aat(t.rtl,this.left,this.width),o=this.ctx,a=e.position,s=n.size/2,l=r.top+s;let u,c=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),u=this.top+l,c=Srt(t.align,c,this.right-h);else{const e=this.columnSizes.reduce(((t,e)=>Math.max(t,e.height)),0);u=l+Srt(t.align,this.top,this.bottom-e-t.labels.padding-this._computeTitleHeight())}const d=Srt(a,c,c+h);o.textAlign=i.textAlign(krt(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=n.string,xot(o,e.text,d,u,n)}_computeTitleHeight(){const t=this.options.title,e=Vot(t.font),n=Eot(t.padding);return t.display?e.lineHeight+n.height:0}_getLegendItemAt(t,e){let n,r,i;if(vit(t,this.left,this.right)&&vit(e,this.top,this.bottom))for(i=this.legendHitBoxes,n=0;n<i.length;++n)if(r=i[n],vit(t,r.left,r.left+r.width)&&vit(e,r.top,r.top+r.height))return this.legendItems[n];return null}handleEvent(t){const e=this.options;if(!function(t,e){if(("mousemove"===t||"mouseout"===t)&&(e.onHover||e.onLeave))return!0;if(e.onClick&&("click"===t||"mouseup"===t))return!0;return!1}(t.type,e))return;const n=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type||"mouseout"===t.type){const r=this._hoveredItem,i=((t,e)=>null!==t&&null!==e&&t.datasetIndex===e.datasetIndex&&t.index===e.index)(r,n);r&&!i&&Irt(e.onLeave,[t,r,this],this),this._hoveredItem=n,n&&!i&&Irt(e.onHover,[t,n,this],this)}else n&&Irt(e.onClick,[t,n,this],this)}}var mut={id:"legend",_element:put,start(t,e,n){const r=t.legend=new put({ctx:t.ctx,options:n,chart:t});Dst.configure(t,r,n),Dst.addBox(t,r)},stop(t){Dst.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const r=t.legend;Dst.configure(t,r,n),r.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const r=e.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),e.hidden=!0):(i.show(r),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:o}}=t.legend.options;return t._getSortedDatasetMetas().map((t=>{const a=t.controller.getStyle(n?0:void 0),s=Eot(a.borderWidth);return{text:e[t.index].label,fillStyle:a.backgroundColor,fontColor:o,hidden:!t.visible,lineCap:a.borderCapStyle,lineDash:a.borderDash,lineDashOffset:a.borderDashOffset,lineJoin:a.borderJoinStyle,lineWidth:(s.width+s.height)/4,strokeStyle:a.borderColor,pointStyle:r||a.pointStyle,rotation:a.rotation,textAlign:i||a.textAlign,borderRadius:0,datasetIndex:t.index}}),this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class gut extends rlt{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const n=this.options;if(this.left=0,this.top=0,!n.display)return void(this.width=this.height=this.right=this.bottom=0);this.width=this.right=t,this.height=this.bottom=e;const r=Art(n.text)?n.text.length:1;this._padding=Eot(n.padding);const i=r*Vot(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=i:this.width=i}isHorizontal(){const t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){const{top:e,left:n,bottom:r,right:i,options:o}=this,a=o.align;let s,l,u,c=0;return this.isHorizontal()?(l=Srt(a,n,i),u=e+t,s=i-n):("left"===o.position?(l=n+t,u=Srt(a,r,e),c=-.5*Grt):(l=i-t,u=Srt(a,e,r),c=.5*Grt),s=r-e),{titleX:l,titleY:u,maxWidth:s,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const n=Vot(e.font),r=n.lineHeight/2+this._padding.top,{titleX:i,titleY:o,maxWidth:a,rotation:s}=this._drawArgs(r);xot(t,e.text,0,0,n,{color:e.color,maxWidth:a,rotation:s,textAlign:krt(e.align),textBaseline:"middle",translation:[i,o]})}}var yut={id:"title",_element:gut,start(t,e,n){!function(t,e){const n=new gut({ctx:t.ctx,options:e,chart:t});Dst.configure(t,n,e),Dst.addBox(t,n),t.titleBlock=n}(t,n)},stop(t){const e=t.titleBlock;Dst.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const r=t.titleBlock;Dst.configure(t,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};new WeakMap;const vut={average(t){if(!t.length)return!1;let e,n,r=0,i=0,o=0;for(e=0,n=t.length;e<n;++e){const n=t[e].element;if(n&&n.hasValue()){const t=n.tooltipPosition();r+=t.x,i+=t.y,++o}}return{x:r/o,y:i/o}},nearest(t,e){if(!t.length)return!1;let n,r,i,o=e.x,a=e.y,s=Number.POSITIVE_INFINITY;for(n=0,r=t.length;n<r;++n){const r=t[n].element;if(r&&r.hasValue()){const t=fit(e,r.getCenterPoint());t<s&&(s=t,i=r)}}if(i){const t=i.tooltipPosition();o=t.x,a=t.y}return{x:o,y:a}}};function but(t,e){return e&&(Art(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function wut(t){return("string"===typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function xut(t,e){const{element:n,datasetIndex:r,index:i}=e,o=t.getDatasetMeta(r).controller,{label:a,value:s}=o.getLabelAndValue(i);return{chart:t,label:a,parsed:o.getParsed(i),raw:t.data.datasets[r].data[i],formattedValue:s,dataset:o.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function Mut(t,e){const n=t.chart.ctx,{body:r,footer:i,title:o}=t,{boxWidth:a,boxHeight:s}=e,l=Vot(e.bodyFont),u=Vot(e.titleFont),c=Vot(e.footerFont),h=o.length,d=i.length,f=r.length,p=Eot(e.padding);let m=p.height,g=0,y=r.reduce(((t,e)=>t+e.before.length+e.lines.length+e.after.length),0);if(y+=t.beforeBody.length+t.afterBody.length,h&&(m+=h*u.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),y){m+=f*(e.displayColors?Math.max(s,l.lineHeight):l.lineHeight)+(y-f)*l.lineHeight+(y-1)*e.bodySpacing}d&&(m+=e.footerMarginTop+d*c.lineHeight+(d-1)*e.footerSpacing);let v=0;const b=function(t){g=Math.max(g,n.measureText(t).width+v)};return n.save(),n.font=u.string,Rrt(t.title,b),n.font=l.string,Rrt(t.beforeBody.concat(t.afterBody),b),v=e.displayColors?a+2+e.boxPadding:0,Rrt(r,(t=>{Rrt(t.before,b),Rrt(t.lines,b),Rrt(t.after,b)})),v=0,n.font=c.string,Rrt(t.footer,b),n.restore(),g+=p.width,{width:g,height:m}}function kut(t,e,n,r){const{x:i,width:o}=n,{width:a,chartArea:{left:s,right:l}}=t;let u="center";return"center"===r?u=i<=(s+l)/2?"left":"right":i<=o/2?u="left":i>=a-o/2&&(u="right"),function(t,e,n,r){const{x:i,width:o}=r,a=n.caretSize+n.caretPadding;return"left"===t&&i+o+a>e.width||"right"===t&&i-o-a<0||void 0}(u,t,e,n)&&(u="center"),u}function Sut(t,e,n){const r=n.yAlign||e.yAlign||function(t,e){const{y:n,height:r}=e;return n<r/2?"top":n>t.height-r/2?"bottom":"center"}(t,n);return{xAlign:n.xAlign||e.xAlign||kut(t,e,n,r),yAlign:r}}function Cut(t,e,n,r){const{caretSize:i,caretPadding:o,cornerRadius:a}=t,{xAlign:s,yAlign:l}=n,u=i+o,{topLeft:c,topRight:h,bottomLeft:d,bottomRight:f}=jot(a);let p=function(t,e){let{x:n,width:r}=t;return"right"===e?n-=r:"center"===e&&(n-=r/2),n}(e,s);const m=function(t,e,n){let{y:r,height:i}=t;return"top"===e?r+=n:r-="bottom"===e?i+n:i/2,r}(e,l,u);return"center"===l?"left"===s?p+=u:"right"===s&&(p-=u):"left"===s?p-=Math.max(c,d)+i:"right"===s&&(p+=Math.max(h,f)+i),{x:yit(p,0,r.width-e.width),y:yit(m,0,r.height-e.height)}}function Put(t,e,n){const r=Eot(n.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-r.right:t.x+r.left}function Tut(t){return but([],wut(t))}function Aut(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}class Nut extends rlt{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart||t._chart,this._chart=this.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,n=this.options.setContext(this.getContext()),r=n.enabled&&e.options.animation&&n.animations,i=new Wat(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||(this.$context=(t=this.chart.getContext(),e=this,n=this._tooltipItems,Rot(t,{tooltip:e,tooltipItems:n,type:"tooltip"})));var t,e,n}getTitle(t,e){const{callbacks:n}=e,r=n.beforeTitle.apply(this,[t]),i=n.title.apply(this,[t]),o=n.afterTitle.apply(this,[t]);let a=[];return a=but(a,wut(r)),a=but(a,wut(i)),a=but(a,wut(o)),a}getBeforeBody(t,e){return Tut(e.callbacks.beforeBody.apply(this,[t]))}getBody(t,e){const{callbacks:n}=e,r=[];return Rrt(t,(t=>{const e={before:[],lines:[],after:[]},i=Aut(n,t);but(e.before,wut(i.beforeLabel.call(this,t))),but(e.lines,i.label.call(this,t)),but(e.after,wut(i.afterLabel.call(this,t))),r.push(e)})),r}getAfterBody(t,e){return Tut(e.callbacks.afterBody.apply(this,[t]))}getFooter(t,e){const{callbacks:n}=e,r=n.beforeFooter.apply(this,[t]),i=n.footer.apply(this,[t]),o=n.afterFooter.apply(this,[t]);let a=[];return a=but(a,wut(r)),a=but(a,wut(i)),a=but(a,wut(o)),a}_createItems(t){const e=this._active,n=this.chart.data,r=[],i=[],o=[];let a,s,l=[];for(a=0,s=e.length;a<s;++a)l.push(xut(this.chart,e[a]));return t.filter&&(l=l.filter(((e,r,i)=>t.filter(e,r,i,n)))),t.itemSort&&(l=l.sort(((e,r)=>t.itemSort(e,r,n)))),Rrt(l,(e=>{const n=Aut(t.callbacks,e);r.push(n.labelColor.call(this,e)),i.push(n.labelPointStyle.call(this,e)),o.push(n.labelTextColor.call(this,e))})),this.labelColors=r,this.labelPointStyles=i,this.labelTextColors=o,this.dataPoints=l,l}update(t,e){const n=this.options.setContext(this.getContext()),r=this._active;let i,o=[];if(r.length){const t=vut[n.position].call(this,r,this._eventPosition);o=this._createItems(n),this.title=this.getTitle(o,n),this.beforeBody=this.getBeforeBody(o,n),this.body=this.getBody(o,n),this.afterBody=this.getAfterBody(o,n),this.footer=this.getFooter(o,n);const e=this._size=Mut(this,n),a=Object.assign({},t,e),s=Sut(this.chart,n,a),l=Cut(n,a,s,this.chart);this.xAlign=s.xAlign,this.yAlign=s.yAlign,i={opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(i={opacity:0});this._tooltipItems=o,this.$context=void 0,i&&this._resolveAnimations().update(this,i),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,n,r){const i=this.getCaretPosition(t,n,r);e.lineTo(i.x1,i.y1),e.lineTo(i.x2,i.y2),e.lineTo(i.x3,i.y3)}getCaretPosition(t,e,n){const{xAlign:r,yAlign:i}=this,{caretSize:o,cornerRadius:a}=n,{topLeft:s,topRight:l,bottomLeft:u,bottomRight:c}=jot(a),{x:h,y:d}=t,{width:f,height:p}=e;let m,g,y,v,b,w;return"center"===i?(b=d+p/2,"left"===r?(m=h,g=m-o,v=b+o,w=b-o):(m=h+f,g=m+o,v=b-o,w=b+o),y=m):(g="left"===r?h+Math.max(s,u)+o:"right"===r?h+f-Math.max(l,c)-o:this.caretX,"top"===i?(v=d,b=v-o,m=g-o,y=g+o):(v=d+p,b=v+o,m=g+o,y=g-o),w=v),{x1:m,x2:g,x3:y,y1:v,y2:b,y3:w}}drawTitle(t,e,n){const r=this.title,i=r.length;let o,a,s;if(i){const l=Aat(n.rtl,this.x,this.width);for(t.x=Put(this,n.titleAlign,n),e.textAlign=l.textAlign(n.titleAlign),e.textBaseline="middle",o=Vot(n.titleFont),a=n.titleSpacing,e.fillStyle=n.titleColor,e.font=o.string,s=0;s<i;++s)e.fillText(r[s],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,s+1===i&&(t.y+=n.titleMarginBottom-a)}}_drawColorBox(t,e,n,r,i){const o=this.labelColors[n],a=this.labelPointStyles[n],{boxHeight:s,boxWidth:l,boxPadding:u}=i,c=Vot(i.bodyFont),h=Put(this,"left",i),d=r.x(h),f=s<c.lineHeight?(c.lineHeight-s)/2:0,p=e.y+f;if(i.usePointStyle){const e={radius:Math.min(l,s)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},n=r.leftForLtr(d,l)+l/2,u=p+s/2;t.strokeStyle=i.multiKeyBackground,t.fillStyle=i.multiKeyBackground,mot(t,e,n,u),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,mot(t,e,n,u)}else{t.lineWidth=o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const e=r.leftForLtr(d,l-u),n=r.leftForLtr(r.xPlus(d,1),l-u-2),a=jot(o.borderRadius);Object.values(a).some((t=>0!==t))?(t.beginPath(),t.fillStyle=i.multiKeyBackground,Sot(t,{x:e,y:p,w:l,h:s,radius:a}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),Sot(t,{x:n,y:p+1,w:l-2,h:s-2,radius:a}),t.fill()):(t.fillStyle=i.multiKeyBackground,t.fillRect(e,p,l,s),t.strokeRect(e,p,l,s),t.fillStyle=o.backgroundColor,t.fillRect(n,p+1,l-2,s-2))}t.fillStyle=this.labelTextColors[n]}drawBody(t,e,n){const{body:r}=this,{bodySpacing:i,bodyAlign:o,displayColors:a,boxHeight:s,boxWidth:l,boxPadding:u}=n,c=Vot(n.bodyFont);let h=c.lineHeight,d=0;const f=Aat(n.rtl,this.x,this.width),p=function(n){e.fillText(n,f.x(t.x+d),t.y+h/2),t.y+=h+i},m=f.textAlign(o);let g,y,v,b,w,x,M;for(e.textAlign=o,e.textBaseline="middle",e.font=c.string,t.x=Put(this,m,n),e.fillStyle=n.bodyColor,Rrt(this.beforeBody,p),d=a&&"right"!==m?"center"===o?l/2+u:l+2+u:0,b=0,x=r.length;b<x;++b){for(g=r[b],y=this.labelTextColors[b],e.fillStyle=y,Rrt(g.before,p),v=g.lines,a&&v.length&&(this._drawColorBox(e,t,b,f,n),h=Math.max(c.lineHeight,s)),w=0,M=v.length;w<M;++w)p(v[w]),h=c.lineHeight;Rrt(g.after,p)}d=0,h=c.lineHeight,Rrt(this.afterBody,p),t.y-=i}drawFooter(t,e,n){const r=this.footer,i=r.length;let o,a;if(i){const s=Aat(n.rtl,this.x,this.width);for(t.x=Put(this,n.footerAlign,n),t.y+=n.footerMarginTop,e.textAlign=s.textAlign(n.footerAlign),e.textBaseline="middle",o=Vot(n.footerFont),e.fillStyle=n.footerColor,e.font=o.string,a=0;a<i;++a)e.fillText(r[a],s.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+n.footerSpacing}}drawBackground(t,e,n,r){const{xAlign:i,yAlign:o}=this,{x:a,y:s}=t,{width:l,height:u}=n,{topLeft:c,topRight:h,bottomLeft:d,bottomRight:f}=jot(r.cornerRadius);e.fillStyle=r.backgroundColor,e.strokeStyle=r.borderColor,e.lineWidth=r.borderWidth,e.beginPath(),e.moveTo(a+c,s),"top"===o&&this.drawCaret(t,e,n,r),e.lineTo(a+l-h,s),e.quadraticCurveTo(a+l,s,a+l,s+h),"center"===o&&"right"===i&&this.drawCaret(t,e,n,r),e.lineTo(a+l,s+u-f),e.quadraticCurveTo(a+l,s+u,a+l-f,s+u),"bottom"===o&&this.drawCaret(t,e,n,r),e.lineTo(a+d,s+u),e.quadraticCurveTo(a,s+u,a,s+u-d),"center"===o&&"left"===i&&this.drawCaret(t,e,n,r),e.lineTo(a,s+c),e.quadraticCurveTo(a,s,a+c,s),e.closePath(),e.fill(),r.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,n=this.$animations,r=n&&n.x,i=n&&n.y;if(r||i){const n=vut[t.position].call(this,this._active,this._eventPosition);if(!n)return;const o=this._size=Mut(this,t),a=Object.assign({},n,this._size),s=Sut(e,t,a),l=Cut(t,a,s,e);r._to===l.x&&i._to===l.y||(this.xAlign=s.xAlign,this.yAlign=s.yAlign,this.width=o.width,this.height=o.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,l))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(e);const r={width:this.width,height:this.height},i={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const o=Eot(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=n,this.drawBackground(i,t,r,e),Nat(t,e.textDirection),i.y+=o.top,this.drawTitle(i,t,e),this.drawBody(i,t,e),this.drawFooter(i,t,e),Oat(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const n=this._active,r=t.map((t=>{let{datasetIndex:e,index:n}=t;const r=this.chart.getDatasetMeta(e);if(!r)throw new Error("Cannot find a dataset at index "+e);return{datasetIndex:e,element:r.data[n],index:n}})),i=!zrt(n,r),o=this._positionChanged(r,e);(i||o)&&(this._active=r,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const r=this.options,i=this._active||[],o=this._getActiveElements(t,i,e,n),a=this._positionChanged(o,t),s=e||!zrt(o,i)||a;return s&&(this._active=o,(r.enabled||r.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),s}_getActiveElements(t,e,n,r){const i=this.options;if("mouseout"===t.type)return[];if(!r)return e;const o=this.chart.getElementsAtEventForMode(t,i.mode,i,n);return i.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:n,caretY:r,options:i}=this,o=vut[i.position].call(this,t,e);return!1!==o&&(n!==o.x||r!==o.y)}}Nut.positioners=vut;var Out={id:"tooltip",_element:Nut,positioners:vut,afterInit(t,e,n){n&&(t.tooltip=new Nut({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(!1===t.notifyPlugins("beforeTooltipDraw",n))return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:{beforeTitle:Crt,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,r=n?n.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(r>0&&e.dataIndex<r)return n[e.dataIndex]}return""},afterTitle:Crt,beforeBody:Crt,beforeLabel:Crt,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return Trt(n)||(e+=n),e},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:Crt,afterBody:Crt,beforeFooter:Crt,footer:Crt,afterFooter:Crt}},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};function jut(t,e,n,r){const i=t.indexOf(e);if(-1===i)return((t,e,n,r)=>("string"===typeof e?(n=t.push(e)-1,r.unshift({index:n,label:e})):isNaN(e)&&(n=null),n))(t,e,n,r);return i!==t.lastIndexOf(e)?n:i}class Eut extends plt{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const t=this.getLabels();for(const{index:n,label:r}of e)t[n]===r&&t.splice(n,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(Trt(t))return null;const n=this.getLabels();return((t,e)=>null===t?null:yit(Math.round(t),0,e))(e=isFinite(e)&&n[e]===t?e:jut(n,t,Ert(e,t),this._addedLabels),n.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:n,max:r}=this.getMinMax(!0);"ticks"===this.options.bounds&&(t||(n=0),e||(r=this.getLabels().length-1)),this.min=n,this.max=r}buildTicks(){const t=this.min,e=this.max,n=this.options.offset,r=[];let i=this.getLabels();i=0===t&&e===i.length-1?i:i.slice(t,e+1),this._valueRange=Math.max(i.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let o=t;o<=e;o++)r.push({value:o});return r}getLabelForValue(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!==typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function Vut(t,e){const n=[],{bounds:r,step:i,min:o,max:a,precision:s,count:l,maxTicks:u,maxDigits:c,includeBounds:h}=t,d=i||1,f=u-1,{min:p,max:m}=e,g=!Trt(o),y=!Trt(a),v=!Trt(l),b=(m-p)/(c+1);let w,x,M,k,S=oit((m-p)/f/d)*d;if(S<1e-14&&!g&&!y)return[{value:p},{value:m}];k=Math.ceil(m/S)-Math.floor(p/S),k>f&&(S=oit(k*S/f/d)*d),Trt(s)||(w=Math.pow(10,s),S=Math.ceil(S*w)/w),"ticks"===r?(x=Math.floor(p/S)*S,M=Math.ceil(m/S)*S):(x=p,M=m),g&&y&&i&&function(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}((a-o)/i,S/1e3)?(k=Math.round(Math.min((a-o)/S,u)),S=(a-o)/k,x=o,M=a):v?(x=g?o:x,M=y?a:M,k=l-1,S=(M-x)/k):(k=(M-x)/S,k=sit(k,Math.round(k),S/1e3)?Math.round(k):Math.ceil(k));const C=Math.max(hit(S),hit(x));w=Math.pow(10,Trt(s)?C:s),x=Math.round(x*w)/w,M=Math.round(M*w)/w;let P=0;for(g&&(h&&x!==o?(n.push({value:o}),x<o&&P++,sit(Math.round((x+P*S)*w)/w,o,Iut(o,b,t))&&P++):x<o&&P++);P<k;++P)n.push({value:Math.round((x+P*S)*w)/w});return y&&h&&M!==a?n.length&&sit(n[n.length-1].value,a,Iut(a,b,t))?n[n.length-1].value=a:n.push({value:a}):y&&M!==a||n.push({value:M}),n}function Iut(t,e,n){let{horizontal:r,minRotation:i}=n;const o=uit(i),a=(r?Math.sin(o):Math.cos(o))||.001,s=.75*e*(""+t).length;return Math.min(e/a,s)}Eut.id="category",Eut.defaults={ticks:{callback:Eut.prototype.getLabelForValue}};class Rut extends plt{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return Trt(t)||("number"===typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:r,max:i}=this;const o=t=>r=e?r:t,a=t=>i=n?i:t;if(t){const t=iit(r),e=iit(i);t<0&&e<0?a(0):t>0&&e>0&&o(0)}if(r===i){let e=1;(i>=Number.MAX_SAFE_INTEGER||r<=Number.MIN_SAFE_INTEGER)&&(e=Math.abs(.05*i)),a(i+e),t||o(r-e)}this.min=r,this.max=i}getTickLimit(){const t=this.options.ticks;let e,{maxTicksLimit:n,stepSize:r}=t;return r?(e=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,e>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${e} ticks. Limiting to 1000.`),e=1e3)):(e=this.computeTickLimit(),n=n||11),n&&(e=Math.min(n,e)),e}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let n=this.getTickLimit();n=Math.max(2,n);const r=Vut({maxTicks:n,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},this._range||this);return"ticks"===t.bounds&&lit(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){const t=this.ticks;let e=this.min,n=this.max;if(super.configure(),this.options.offset&&t.length){const r=(n-e)/Math.max(t.length-1,1)/2;e-=r,n+=r}this._startValue=e,this._endValue=n,this._valueRange=n-e}getLabelForValue(t){return Tat(t,this.chart.options.locale,this.options.ticks.format)}}class zut extends Rut{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Ort(t)?t:0,this.max=Ort(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,n=uit(this.options.ticks.minRotation),r=(t?Math.sin(n):Math.cos(n))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,i.lineHeight/r))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}function Lut(t){return 1===t/Math.pow(10,Math.floor(rit(t)))}zut.id="linear",zut.defaults={ticks:{callback:olt.formatters.numeric}};class Hut extends plt{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const n=Rut.prototype.parse.apply(this,[t,e]);if(0!==n)return Ort(n)&&n>0?n:null;this._zero=!0}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=Ort(t)?Math.max(0,t):null,this.max=Ort(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let n=this.min,r=this.max;const i=e=>n=t?n:e,o=t=>r=e?r:t,a=(t,e)=>Math.pow(10,Math.floor(rit(t))+e);n===r&&(n<=0?(i(1),o(10)):(i(a(n,-1)),o(a(r,1)))),n<=0&&i(a(r,-1)),r<=0&&o(a(n,1)),this._zero&&this.min!==this._suggestedMin&&n===a(this.min,0)&&i(a(n,-1)),this.min=n,this.max=r}buildTicks(){const t=this.options,e=function(t,e){const n=Math.floor(rit(e.max)),r=Math.ceil(e.max/Math.pow(10,n)),i=[];let o=jrt(t.min,Math.pow(10,Math.floor(rit(e.min)))),a=Math.floor(rit(o)),s=Math.floor(o/Math.pow(10,a)),l=a<0?Math.pow(10,Math.abs(a)):1;do{i.push({value:o,major:Lut(o)}),++s,10===s&&(s=1,++a,l=a>=0?1:l),o=Math.round(s*Math.pow(10,a)*l)/l}while(a<n||a===n&&s<r);const u=jrt(t.max,o);return i.push({value:u,major:Lut(o)}),i}({min:this._userMin,max:this._userMax},this);return"ticks"===t.bounds&&lit(e,this,"value"),t.reverse?(e.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),e}getLabelForValue(t){return void 0===t?"0":Tat(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=rit(t),this._valueRange=rit(this.max)-rit(t)}getPixelForValue(t){return void 0!==t&&0!==t||(t=this.min),null===t||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(rit(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function But(t){const e=t.ticks;if(e.display&&t.display){const t=Eot(e.backdropPadding);return Ert(e.font&&e.font.size,cot.font.size)+t.height}return 0}function Dut(t,e,n,r,i){return t===r||t===i?{start:e-n/2,end:e+n/2}:t<r||t>i?{start:e-n,end:e}:{start:e,end:e+n}}function Fut(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},n=Object.assign({},e),r=[],i=[],o=t._pointLabels.length,a=t.options.pointLabels,s=a.centerPointLabels?Grt/o:0;for(let h=0;h<o;h++){const o=a.setContext(t.getPointLabelContext(h));i[h]=o.padding;const d=t.getPointPosition(h,t.drawingArea+i[h],s),f=Vot(o.font),p=(l=t.ctx,u=f,c=Art(c=t._pointLabels[h])?c:[c],{w:dot(l,u.string,c),h:c.length*u.lineHeight});r[h]=p;const m=mit(t.getIndexAngle(h)+s),g=Math.round(cit(m));Uut(n,e,m,Dut(g,d.x,p.w,0,180),Dut(g,d.y,p.h,90,270))}var l,u,c;t.setCenterPoint(e.l-n.l,n.r-e.r,e.t-n.t,n.b-e.b),t._pointLabelItems=function(t,e,n){const r=[],i=t._pointLabels.length,o=t.options,a=But(o)/2,s=t.drawingArea,l=o.pointLabels.centerPointLabels?Grt/i:0;for(let u=0;u<i;u++){const i=t.getPointPosition(u,s+a+n[u],l),o=Math.round(cit(mit(i.angle+tit))),c=e[u],h=Xut(i.y,c.h,o),d=Wut(o),f=qut(i.x,c.w,d);r.push({x:i.x,y:h,textAlign:d,left:f,top:h,right:f+c.w,bottom:h+c.h})}return r}(t,r,i)}function Uut(t,e,n,r,i){const o=Math.abs(Math.sin(n)),a=Math.abs(Math.cos(n));let s=0,l=0;r.start<e.l?(s=(e.l-r.start)/o,t.l=Math.min(t.l,e.l-s)):r.end>e.r&&(s=(r.end-e.r)/o,t.r=Math.max(t.r,e.r+s)),i.start<e.t?(l=(e.t-i.start)/a,t.t=Math.min(t.t,e.t-l)):i.end>e.b&&(l=(i.end-e.b)/a,t.b=Math.max(t.b,e.b+l))}function Wut(t){return 0===t||180===t?"center":t<180?"left":"right"}function qut(t,e,n){return"right"===n?t-=e:"center"===n&&(t-=e/2),t}function Xut(t,e,n){return 90===n||270===n?t-=e/2:(n>270||n<90)&&(t-=e),t}function Zut(t,e,n,r){const{ctx:i}=t;if(n)i.arc(t.xCenter,t.yCenter,e,0,Jrt);else{let n=t.getPointPosition(0,e);i.moveTo(n.x,n.y);for(let o=1;o<r;o++)n=t.getPointPosition(o,e),i.lineTo(n.x,n.y)}}Hut.id="logarithmic",Hut.defaults={ticks:{callback:olt.formatters.logarithmic,major:{enabled:!0}}};class Yut extends Rut{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Eot(But(this.options)/2),e=this.width=this.maxWidth-t.width,n=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+n/2+t.top),this.drawingArea=Math.floor(Math.min(e,n)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=Ort(t)&&!isNaN(t)?t:0,this.max=Ort(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/But(this.options))}generateTickLabels(t){Rut.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map(((t,e)=>{const n=Irt(this.options.pointLabels.callback,[t,e],this);return n||0===n?n:""})).filter(((t,e)=>this.chart.getDataVisibility(e)))}fit(){const t=this.options;t.display&&t.pointLabels.display?Fut(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,n,r){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((n-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,n,r))}getIndexAngle(t){return mit(t*(Jrt/(this._pointLabels.length||1))+uit(this.options.startAngle||0))}getDistanceFromCenterForValue(t){if(Trt(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(Trt(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const n=e[t];return function(t,e,n){return Rot(t,{label:n,index:e,type:"pointLabel"})}(this.getContext(),t,n)}}getPointPosition(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=this.getIndexAngle(t)-tit+n;return{x:Math.cos(r)*e+this.xCenter,y:Math.sin(r)*e+this.yCenter,angle:r}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:n,right:r,bottom:i}=this._pointLabelItems[t];return{left:e,top:n,right:r,bottom:i}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const n=this.ctx;n.save(),n.beginPath(),Zut(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),n.closePath(),n.fillStyle=t,n.fill(),n.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:n,grid:r}=e,i=this._pointLabels.length;let o,a,s;if(e.pointLabels.display&&function(t,e){const{ctx:n,options:{pointLabels:r}}=t;for(let i=e-1;i>=0;i--){const e=r.setContext(t.getPointLabelContext(i)),o=Vot(e.font),{x:a,y:s,textAlign:l,left:u,top:c,right:h,bottom:d}=t._pointLabelItems[i],{backdropColor:f}=e;if(!Trt(f)){const t=jot(e.borderRadius),r=Eot(e.backdropPadding);n.fillStyle=f;const i=u-r.left,o=c-r.top,a=h-u+r.width,s=d-c+r.height;Object.values(t).some((t=>0!==t))?(n.beginPath(),Sot(n,{x:i,y:o,w:a,h:s,radius:t}),n.fill()):n.fillRect(i,o,a,s)}xot(n,t._pointLabels[i],a,s+o.lineHeight/2,o,{color:e.color,textAlign:l,textBaseline:"middle"})}}(this,i),r.display&&this.ticks.forEach(((t,e)=>{if(0!==e){a=this.getDistanceFromCenterForValue(t.value);!function(t,e,n,r){const i=t.ctx,o=e.circular,{color:a,lineWidth:s}=e;!o&&!r||!a||!s||n<0||(i.save(),i.strokeStyle=a,i.lineWidth=s,i.setLineDash(e.borderDash),i.lineDashOffset=e.borderDashOffset,i.beginPath(),Zut(t,n,o,r),i.closePath(),i.stroke(),i.restore())}(this,r.setContext(this.getContext(e-1)),a,i)}})),n.display){for(t.save(),o=i-1;o>=0;o--){const r=n.setContext(this.getPointLabelContext(o)),{color:i,lineWidth:l}=r;l&&i&&(t.lineWidth=l,t.strokeStyle=i,t.setLineDash(r.borderDash),t.lineDashOffset=r.borderDashOffset,a=this.getDistanceFromCenterForValue(e.ticks.reverse?this.min:this.max),s=this.getPointPosition(o,a),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(s.x,s.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,n=e.ticks;if(!n.display)return;const r=this.getIndexAngle(0);let i,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(r),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach(((r,a)=>{if(0===a&&!e.reverse)return;const s=n.setContext(this.getContext(a)),l=Vot(s.font);if(i=this.getDistanceFromCenterForValue(this.ticks[a].value),s.showLabelBackdrop){t.font=l.string,o=t.measureText(r.label).width,t.fillStyle=s.backdropColor;const e=Eot(s.backdropPadding);t.fillRect(-o/2-e.left,-i-l.size/2-e.top,o+e.width,l.size+e.height)}xot(t,r.label,0,-i,l,{color:s.color})})),t.restore()}drawTitle(){}}Yut.id="radialLinear",Yut.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:olt.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback:t=>t,padding:5,centerPointLabels:!1}},Yut.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"},Yut.descriptors={angleLines:{_fallback:"grid"}};const Kut={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Gut=Object.keys(Kut);function Jut(t,e){return t-e}function Qut(t,e){if(Trt(e))return null;const n=t._adapter,{parser:r,round:i,isoWeekday:o}=t._parseOpts;let a=e;return"function"===typeof r&&(a=r(a)),Ort(a)||(a="string"===typeof r?n.parse(a,r):n.parse(a)),null===a?null:(i&&(a="week"!==i||!ait(o)&&!0!==o?n.startOf(a,i):n.startOf(a,"isoWeek",o)),+a)}function _ut(t,e,n,r){const i=Gut.length;for(let o=Gut.indexOf(t);o<i-1;++o){const t=Kut[Gut[o]],i=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((n-e)/(i*t.size))<=r)return Gut[o]}return Gut[i-1]}function $ut(t,e,n){if(n){if(n.length){const{lo:r,hi:i}=zot(n,e);t[n[r]>=e?n[r]:n[i]]=!0}}else t[e]=!0}function tct(t,e,n){const r=[],i={},o=e.length;let a,s;for(a=0;a<o;++a)s=e[a],i[s]=a,r.push({value:s,major:!1});return 0!==o&&n?function(t,e,n,r){const i=t._adapter,o=+i.startOf(e[0].value,r),a=e[e.length-1].value;let s,l;for(s=o;s<=a;s=+i.add(s,1,r))l=n[s],l>=0&&(e[l].major=!0);return e}(t,r,i,n):r}class ect extends plt{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e){const n=t.time||(t.time={}),r=this._adapter=new wst._date(t.adapters.date);Frt(n.displayFormats,r.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:Qut(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,n=t.time.unit||"day";let{min:r,max:i,minDefined:o,maxDefined:a}=this.getUserBounds();function s(t){o||isNaN(t.min)||(r=Math.min(r,t.min)),a||isNaN(t.max)||(i=Math.max(i,t.max))}o&&a||(s(this._getLabelBounds()),"ticks"===t.bounds&&"labels"===t.ticks.source||s(this.getMinMax(!1))),r=Ort(r)&&!isNaN(r)?r:+e.startOf(Date.now(),n),i=Ort(i)&&!isNaN(i)?i:+e.endOf(Date.now(),n)+1,this.min=Math.min(r,i-1),this.max=Math.max(r+1,i)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],n=t[t.length-1]),{min:e,max:n}}buildTicks(){const t=this.options,e=t.time,n=t.ticks,r="labels"===n.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);const i=this.min,o=function(t,e,n){let r=0,i=t.length;for(;r<i&&t[r]<e;)r++;for(;i>r&&t[i-1]>n;)i--;return r>0||i<t.length?t.slice(r,i):t}(r,i,this.max);return this._unit=e.unit||(n.autoSkip?_ut(e.minUnit,this.min,this.max,this._getLabelCapacity(i)):function(t,e,n,r,i){for(let o=Gut.length-1;o>=Gut.indexOf(n);o--){const n=Gut[o];if(Kut[n].common&&t._adapter.diff(i,r,n)>=e-1)return n}return Gut[n?Gut.indexOf(n):0]}(this,o.length,e.minUnit,this.min,this.max)),this._majorUnit=n.major.enabled&&"year"!==this._unit?function(t){for(let e=Gut.indexOf(t)+1,n=Gut.length;e<n;++e)if(Kut[Gut[e]].common)return Gut[e]}(this._unit):void 0,this.initOffsets(r),t.reverse&&o.reverse(),tct(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map((t=>+t.value)))}initOffsets(t){let e,n,r=0,i=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),r=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,n=this.getDecimalForValue(t[t.length-1]),i=1===t.length?n:(n-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;r=yit(r,0,o),i=yit(i,0,o),this._offsets={start:r,end:i,factor:1/(r+1+i)}}_generate(){const t=this._adapter,e=this.min,n=this.max,r=this.options,i=r.time,o=i.unit||_ut(i.minUnit,e,n,this._getLabelCapacity(e)),a=Ert(i.stepSize,1),s="week"===o&&i.isoWeekday,l=ait(s)||!0===s,u={};let c,h,d=e;if(l&&(d=+t.startOf(d,"isoWeek",s)),d=+t.startOf(d,l?"day":o),t.diff(n,e,o)>1e5*a)throw new Error(e+" and "+n+" are too far apart with stepSize of "+a+" "+o);const f="data"===r.ticks.source&&this.getDataTimestamps();for(c=d,h=0;c<n;c=+t.add(c,a,o),h++)$ut(u,c,f);return c!==n&&"ticks"!==r.bounds&&1!==h||$ut(u,c,f),Object.keys(u).sort(((t,e)=>t-e)).map((t=>+t))}getLabelForValue(t){const e=this._adapter,n=this.options.time;return n.tooltipFormat?e.format(t,n.tooltipFormat):e.format(t,n.displayFormats.datetime)}_tickFormatFunction(t,e,n,r){const i=this.options,o=i.time.displayFormats,a=this._unit,s=this._majorUnit,l=a&&o[a],u=s&&o[s],c=n[e],h=s&&u&&c&&c.major,d=this._adapter.format(t,r||(h?u:l)),f=i.ticks.callback;return f?Irt(f,[d,e,n],this):d}generateTickLabels(t){let e,n,r;for(e=0,n=t.length;e<n;++e)r=t[e],r.label=this._tickFormatFunction(r.value,e,t)}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,n=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+n)*e.factor)}getValueForPixel(t){const e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+n*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,n=this.ctx.measureText(t).width,r=uit(this.isHorizontal()?e.maxRotation:e.minRotation),i=Math.cos(r),o=Math.sin(r),a=this._resolveTickFontOptions(0).size;return{w:n*i+a*o,h:n*o+a*i}}_getLabelCapacity(t){const e=this.options.time,n=e.displayFormats,r=n[e.unit]||n.millisecond,i=this._tickFormatFunction(t,0,tct(this,[t],this._majorUnit),r),o=this._getLabelSize(i),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t,e,n=this._cache.data||[];if(n.length)return n;const r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(t=0,e=r.length;t<e;++t)n=n.concat(r[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(n)}getLabelTimestamps(){const t=this._cache.labels||[];let e,n;if(t.length)return t;const r=this.getLabels();for(e=0,n=r.length;e<n;++e)t.push(Qut(this,r[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Fot(t.sort(Jut))}}function nct(t,e,n){let r,i,o,a,s=0,l=t.length-1;n?(e>=t[s].pos&&e<=t[l].pos&&({lo:s,hi:l}=Lot(t,"pos",e)),({pos:r,time:o}=t[s]),({pos:i,time:a}=t[l])):(e>=t[s].time&&e<=t[l].time&&({lo:s,hi:l}=Lot(t,"time",e)),({time:r,pos:o}=t[s]),({time:i,pos:a}=t[l]));const u=i-r;return u?o+(a-o)*(e-r)/u:o}ect.id="time",ect.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};class rct extends ect{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=nct(e,this.min),this._tableRange=nct(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:n}=this,r=[],i=[];let o,a,s,l,u;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=n&&r.push(l);if(r.length<2)return[{time:e,pos:0},{time:n,pos:1}];for(o=0,a=r.length;o<a;++o)u=r[o+1],s=r[o-1],l=r[o],Math.round((u+s)/2)!==l&&i.push({time:l,pos:o/(a-1)});return i}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),n=this.getLabelTimestamps();return t=e.length&&n.length?this.normalize(e.concat(n)):e.length?e:n,t=this._cache.all=t,t}getDecimalForValue(t){return(nct(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return nct(this._table,n*this._tableRange+this._minPos,!0)}}rct.id="timeseries",rct.defaults=ect.defaults;const ict="label";function oct(t,e){"function"===typeof t?t(e):t&&(t.current=e)}function act(t,e){t.labels=e}function sct(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ict;const r=[];t.datasets=e.map((e=>{const i=t.datasets.find((t=>t[n]===e[n]));return i&&e.data&&!r.includes(i)?(r.push(i),Object.assign(i,e),i):{...e}}))}function lct(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ict;const n={labels:[],datasets:[]};return act(n,t.labels),sct(n,t.datasets,e),n}function uct(t,e){let{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:o,type:a,data:s,options:l,plugins:u=[],fallbackContent:c,updateMode:h,...d}=t;const f=(0,k.useRef)(null),p=(0,k.useRef)(),m=()=>{f.current&&(p.current=new Dlt(f.current,{type:a,data:lct(s,o),options:l,plugins:u}),oct(e,p.current))},g=()=>{oct(e,null),p.current&&(p.current.destroy(),p.current=null)};return(0,k.useEffect)((()=>{var t,e;!i&&p.current&&l&&(t=p.current,e=l,t.options={...e})}),[i,l]),(0,k.useEffect)((()=>{!i&&p.current&&act(p.current.config.data,s.labels)}),[i,s.labels]),(0,k.useEffect)((()=>{!i&&p.current&&s.datasets&&sct(p.current.config.data,s.datasets,o)}),[i,s.datasets]),(0,k.useEffect)((()=>{p.current&&(i?(g(),setTimeout(m)):p.current.update(h))}),[i,l,s.labels,s.datasets,h]),(0,k.useEffect)((()=>(m(),()=>g())),[]),k.createElement("canvas",Object.assign({ref:f,role:"img",height:n,width:r},d),c)}const cct=(0,k.forwardRef)(uct);function hct(t,e){return Dlt.register(e),(0,k.forwardRef)(((e,n)=>k.createElement(cct,Object.assign({},e,{ref:n,type:t}))))}const dct=hct("line",fst),fct=hct("bar",cst),pct=hct("doughnut",dst),mct=hct("pie",mst);Dlt.register(Klt,Out);const gct=t=>{let{value:e,value2:n}=t;const r=!e&&!e;r&&(e=1,n=0);const{mode:i}=Og(),o=r?Qu.buttons.toggle.background[i]:[Qu.text.secondary[i],Qu.transparent[i]],a=r?Qu.buttons.toggle.background[i]:Qu.transparent[i],s={borderColor:o,hoverBorderColor:o,backgroundColor:a,hoverBackgroundColor:a,responsive:!0,maintainAspectRatio:!1,spacing:0,plugins:{legend:{display:!1},tooltip:{enabled:!1}}},l={datasets:[{data:[e,n],backgroundColor:a,borderWidth:1.25}]};return(0,Jd.jsx)("div",{className:"graph",style:{width:36,height:36},children:(0,Jd.jsx)(mct,{options:s,data:l})})},yct=t=>{var e,n,r;const{label:i,value:o,unit:a,assistant:s}=t,l=void 0!==s,u=null!==(e=null===s||void 0===s?void 0:s.page)&&void 0!==e?e:"",c=null!==(n=null===s||void 0===s?void 0:s.key)&&void 0!==n?n:"",h=null!==(r=t.currency)&&void 0!==r?r:"";return(0,Jd.jsx)(bct,{children:(0,Jd.jsx)("div",{className:"content chart",children:(0,Jd.jsxs)("div",{className:"labels",children:[(0,Jd.jsxs)("h2",{children:[(0,Jd.jsx)(hrt.Z,{ease:"quintInOut",precision:2,speed:250,trail:!1,value:o,useLocaleString:!0,currency:h}),a&&(0,Jd.jsxs)(Jd.Fragment,{children:["\xa0",a]})]}),(0,Jd.jsxs)("h4",{children:[i,l&&(0,Jd.jsx)(wrt,{page:u,title:c})]})]})})})},vct=t=>{var e,n;const{label:r,value:i,assistant:o}=t,a=void 0!==o,s=null!==(e=null===o||void 0===o?void 0:o.page)&&void 0!==e?e:"",l=null!==(n=null===o||void 0===o?void 0:o.key)&&void 0!==n?n:"";return(0,Jd.jsx)(bct,{children:(0,Jd.jsx)("div",{className:"content chart",children:(0,Jd.jsxs)("div",{className:"labels",children:[(0,Jd.jsx)("h2",{children:i}),(0,Jd.jsxs)("h4",{children:[r,a&&(0,Jd.jsx)(wrt,{page:s,title:l})]})]})})})},bct=t=>{let{children:e}=t;return(0,Jd.jsx)(zx,{whileHover:{scale:1.02},transition:{duration:.5,type:"spring",bounce:.4},children:e})},wct=t=>{var e,n;const{label:r,stat:i,graph:o,tooltip:a,assistant:s}=t,l=void 0!==s,u=null!==(e=null===s||void 0===s?void 0:s.page)&&void 0!==e?e:"",c=null!==(n=null===s||void 0===s?void 0:s.key)&&void 0!==n?n:"",h=0!==(null===i||void 0===i?void 0:i.value)||0===(null===i||void 0===i?void 0:i.total),d=!(null===i||void 0===i||!i.total);return(0,Jd.jsx)(bct,{children:(0,Jd.jsxs)("div",{className:"content chart",children:[(0,Jd.jsxs)("div",{className:"chart",children:[(0,Jd.jsx)(gct,{value:null===o||void 0===o?void 0:o.value1,value2:null===o||void 0===o?void 0:o.value2}),a&&(0,Jd.jsx)("div",{className:"tooltip",children:(0,Jd.jsx)("p",{children:a})})]}),(0,Jd.jsxs)("div",{className:"labels",children:[(0,Jd.jsx)("h2",{children:h?(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(hrt.Z,{ease:"quintInOut",precision:2,speed:250,trail:!1,value:null===i||void 0===i?void 0:i.value,useLocaleString:!0}),(null===i||void 0===i?void 0:i.unit)&&(0,Jd.jsxs)(Jd.Fragment,{children:["\xa0",null===i||void 0===i?void 0:i.unit]}),d&&(0,Jd.jsxs)("span",{className:"total",children:["/"," ",(0,Jd.jsx)(hrt.Z,{ease:"quintInOut",precision:2,speed:250,trail:!1,value:null===i||void 0===i?void 0:i.total,useLocaleString:!0}),(null===i||void 0===i?void 0:i.unit)&&(0,Jd.jsxs)(Jd.Fragment,{children:["\xa0",null===i||void 0===i?void 0:i.unit]})]})]}):(0,Jd.jsx)(Jd.Fragment,{children:"0"})}),(0,Jd.jsxs)("h4",{children:[r,l&&(0,Jd.jsx)(wrt,{page:u,title:c})]})]})]})})},xct=()=>{const{staking:t}=Rtt(),{totalNominators:e,maxNominatorsCount:n}=t;let r=0;n.gt(new(sf())(0))&&(r=e.div(n.div(new(sf())(100))).toNumber());const i={label:"Total Nominators",stat:{value:e.toNumber(),total:n,unit:""},graph:{value1:e.toNumber(),value2:n.sub(e).toNumber()},tooltip:`${fg(r,2)}%`,assistant:{page:"overview",key:"Nominators"}};return(0,Jd.jsx)(wct,{...i})},Mct=()=>{const{network:t}=u$(),{units:e}=t,{metrics:n}=Mtt(),{totalIssuance:r}=n,{staking:i}=Rtt(),{lastTotalStake:o}=i;let a=0;r.gt(new(sf())(0))&&(a=o.div(r.div(new(sf())(100))).toNumber());const s=o.div(new(sf())(10**e)),l=r.div(new(sf())(10**e)),u={label:"Supply Staked",stat:{value:s.toNumber(),unit:t.unit},graph:{value1:s.toNumber(),value2:l.sub(s).toNumber()},tooltip:`${fg(a,2)}%`,assistant:{page:"overview",key:"Supply Staked"}};return(0,Jd.jsx)(wct,{...u})},kct=()=>{const{consts:t}=u$(),{maxElectingVoters:e}=t,{eraStakers:n}=Rtt(),{activeNominators:r}=n;let i=0;e>0&&(i=r/new(sf())(e).div(new(sf())(100)).toNumber());const o={label:"Active Nominators",stat:{value:r,total:e,unit:""},graph:{value1:r,value2:e-r},tooltip:`${fg(i,2)}%`,assistant:{page:"overview",key:"Active Nominators"}};return(0,Jd.jsx)(wct,{...o})};var Sct=function(){return Sct=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},Sct.apply(this,arguments)};var Cct=function(t){var e=t.animate,n=t.animateBegin,r=t.backgroundColor,i=t.backgroundOpacity,o=t.baseUrl,a=t.children,s=t.foregroundColor,l=t.foregroundOpacity,u=t.gradientRatio,c=t.gradientDirection,h=t.uniqueKey,d=t.interval,f=t.rtl,p=t.speed,m=t.style,g=t.title,y=t.beforeMask,v=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(t,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),b=h||Math.random().toString(36).substring(6),w=b+"-diff",x=b+"-animated-diff",M=b+"-aria",S=f?{transform:"scaleX(-1)"}:null,C="0; "+d+"; 1",P=p+"s",T="top-bottom"===c?"rotate(90)":void 0;return(0,k.createElement)("svg",Sct({"aria-labelledby":M,role:"img",style:Sct(Sct({},m),S)},v),g?(0,k.createElement)("title",{id:M},g):null,y&&(0,k.isValidElement)(y)?y:null,(0,k.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+o+"#"+w+")",style:{fill:"url("+o+"#"+x+")"}}),(0,k.createElement)("defs",null,(0,k.createElement)("clipPath",{id:w},a),(0,k.createElement)("linearGradient",{id:x,gradientTransform:T},(0,k.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:i},e&&(0,k.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:C,dur:P,repeatCount:"indefinite",begin:n})),(0,k.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:l},e&&(0,k.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:C,dur:P,repeatCount:"indefinite",begin:n})),(0,k.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:i},e&&(0,k.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:C,dur:P,repeatCount:"indefinite",begin:n})))))};Cct.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var Pct=function(t){return t.children?(0,k.createElement)(Cct,Sct({},t)):(0,k.createElement)(Tct,Sct({},t))},Tct=function(t){return(0,k.createElement)(Pct,Sct({viewBox:"0 0 476 124"},t),(0,k.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,k.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,k.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,k.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,k.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,k.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const Act=Pct,Nct=()=>{const{mode:t}=Og();return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(Act,{height:90,width:"100%",backgroundColor:Qu.loader.background[t],foregroundColor:Qu.loader.foreground[t],opacity:.2,style:{marginTop:"0.75rem",marginBottom:"0.75rem"},children:(0,Jd.jsx)("rect",{x:"0",y:"0",rx:"0.5rem",ry:"0.5rem",width:"100%",height:"100%"})}),(0,Jd.jsx)(Act,{height:90,width:"100%",backgroundColor:Qu.loader.background[t],foregroundColor:Qu.loader.foreground[t],opacity:.2,children:(0,Jd.jsx)("rect",{x:"0",y:"0",rx:"0.5rem",ry:"0.5rem",width:"100%",height:"100%"})})]})},Oct=pn.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`,jct=pn(Yu.div)`
  list-style: none;
  flex: 1;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 1rem;
  border-bottom: 1px solid ${Sc};

  h3 {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin: 0 0 0.5rem;
    padding: 0.2rem 0;

    &.neutral {
      color: ${Rc};
    }
    &.danger {
      color: #d2545d;
    }
    &.warning {
      color: #b5a200;
    }
    &.pools {
      color: ${zc};
    }
  }

  p {
    margin: 0;
    color: ${ic};
    line-height: 1.2rem;
    font-variation-settings: 'wght' 490;
  }
`,Ect=()=>{const{isSyncing:t}=$tt(),{network:e}=u$(),{units:n}=e,{staking:r}=Rtt(),{minNominatorBond:i,totalNominators:o,maxNominatorsCount:a}=r,{bondedPools:s}=Xtt(),l={hidden:{opacity:0},show:{opacity:1}},u=a.eq(o);let c=new(sf())(0);a.gt(new(sf())(0))&&o.gt(new(sf())(0))&&(c=o.div(a.div(new(sf())(100))));const h=mg(i,n),d=[];return u&&d.push({class:"danger",title:"Nominator Limit Has Been Reached.",subtitle:"The maximum allowed nominators have been reached on the network. Please wait for available slots if you wish to nominate."}),c.toNumber()>=90&&d.push({class:"warning",title:`${fg(c.toNumber(),2)}% of Nominator Limit Reached.`,subtitle:`The maximum amount of nominators has almost been reached. The nominator cap is currently ${vg(a.toNumber())}.`}),s.length&&d.push({class:"pools",title:`${s.length} nomination pools are active.`,subtitle:`Nomination pools are available to join on the ${e.name} network.`}),d.push({class:"neutral",title:`The minimum nominator bond is now ${h} ${e.unit}.`,subtitle:`The minimum bonding amount to start nominating on ${e.name} is now ${mg(i,n)} ${e.unit}.`}),d.push({class:"neutral",title:`The maximum nominator cap is now ${vg(a.toNumber())}.`,subtitle:`A total of ${vg(a.toNumber())} nominators can now join the ${e.name} network.`}),(0,Jd.jsxs)(Bx,{children:[(0,Jd.jsx)(Hx,{children:(0,Jd.jsxs)("h2",{children:["Announcements",(0,Jd.jsx)(wrt,{page:"overview",title:"Announcements"})]})}),(0,Jd.jsx)(Oct,{children:(0,Jd.jsx)(Yu.div,{variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.25}}},initial:"hidden",animate:"show",style:{width:"100%"},children:t?(0,Jd.jsx)(Nct,{}):d.map(((t,e)=>(0,Jd.jsxs)(jct,{variants:l,children:[(0,Jd.jsxs)("h3",{className:t.class,children:[(0,Jd.jsx)(tw,{icon:aw,style:{marginRight:"0.6rem"}}),t.title]}),(0,Jd.jsx)("p",{children:t.subtitle})]},`announcement_${e}`)))})})]})},Vct=()=>{const{network:t,fetchDotPrice:e}=u$(),{services:n}=$tt(),[r,i]=(0,k.useState)((()=>{const e=localStorage.getItem(`${t.name}_prices`);return null===e?{lastPrice:0,change:0}:JSON.parse(e)})()),o=(0,k.useRef)(r),a=e=>{localStorage.setItem(`${t.name}_prices`,JSON.stringify(e)),o.current={...o.current,...e},i({...o.current,...e})},s=async()=>{const t=await e();a(t),null===l&&u()};let l=null;const u=async()=>{l=setInterval((async()=>{const t=await e();a(t)}),3e4)};return(0,k.useEffect)((()=>(s(),()=>{null!==l&&clearInterval(l)})),[]),(0,k.useEffect)((()=>{null!==l&&clearInterval(l),s()}),[t]),(0,k.useEffect)((()=>{n.includes("binance_spot")?null===l&&s():null!==l&&clearInterval(l)}),[n]),o.current};Dlt.register(Klt,Out,mut);const Ict=()=>{const{mode:t}=Og(),{network:e}=u$(),{units:n,features:r}=e,{activeAccount:i}=btt(),{getAccountBalance:o,getBondOptions:a}=Ntt(),s=o(i),{services:l}=$tt(),u=Vct(),{freeToStake:c,freeToUnbond:h,totalUnlocking:d,totalUnlocked:f}=a(i)||{},{getPoolBondOptions:p}=Gtt(),m=p(i),g=m.totalUnlocking.add(m.totalUnlocked).add(f).add(d),{free:y}=s,v=mg(y,n),b=fg(Number(v*u.lastPrice),2);let w=mg(h,n),x=mg(c,n),M=mg(m.active,n),S=mg(g,n),C=!1;0===w&&0===x&&0===S&&0===M&&(w=-1,S=-1,x=-1,M=-1,C=!0);const P={responsive:!0,maintainAspectRatio:!1,spacing:C?0:5,plugins:{legend:{display:!0,padding:{right:10},position:"left",align:"center",labels:{padding:20,color:Qu.text.primary[t],font:{size:14,weight:"500"}}},tooltip:{displayColors:!1,backgroundColor:Qu.graphs.tooltip[t],bodyColor:Qu.text.invert[t],callbacks:{label:t=>`${t.label}: ${-1===t.parsed?0:vg(t.parsed)} ${e.unit}`}}},cutout:"75%"};let T,A=["Available","Unlocking","Staking","In Pool"],N=[x,S,w,M],O=C?[Qu.graphs.colors[1][t],Qu.graphs.inactive2[t],Qu.graphs.inactive2[t],Qu.graphs.inactive[t]]:[Qu.graphs.colors[1][t],Qu.graphs.colors[0][t],tc[`${e.name}-${t}`],ec[`${e.name}-${t}`]];N=r.pools?N:N.slice(0,3),O=r.pools?O:O.slice(0,3),A=r.pools?A:A.slice(0,3),T={label:e.unit,data:N,backgroundColor:O,borderWidth:0};const j={labels:A,datasets:[T]},E=k.useRef(),V=uet(E.current),{width:I,height:R,minHeight:z}=cet(V,220);return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsxs)("div",{className:"head",style:{paddingTop:"0"},children:[(0,Jd.jsxs)("h4",{children:["Balance",(0,Jd.jsx)(wrt,{page:"overview",title:"Your Balance"})]}),(0,Jd.jsxs)("h2",{children:[(0,Jd.jsx)("span",{className:"amount",children:vg(v)}),"\xa0",e.unit,(0,Jd.jsx)("span",{className:"fiat",children:l.includes("binance_spot")&&(0,Jd.jsxs)(Jd.Fragment,{children:["\xa0",yg.format(Number(b))]})})]})]}),(0,Jd.jsx)("div",{style:{paddingTop:"20px"}}),(0,Jd.jsx)("div",{className:"inner",ref:E,style:{minHeight:z},children:(0,Jd.jsx)("div",{className:"graph",style:{height:`${R}px`,width:`${I}px`,position:"absolute"},children:(0,Jd.jsx)(pct,{options:P,data:j})})}),(0,Jd.jsx)("div",{style:{paddingTop:"25px"}})]})};Dlt.register(Eut,zut,out,rut,yut,Out,mut);const Rct=t=>{const{mode:e}=Og(),{network:n}=u$(),{payouts:r,height:i,background:o}=t,a={responsive:!0,maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1,maxTicksLimit:30,autoSkip:!0}},y:{ticks:{display:!1,beginAtZero:!1},grid:{drawBorder:!1,color:Qu.graphs.grid[e],borderColor:Qu.transparent[e]}}},plugins:{legend:{display:!1},title:{display:!1,text:`${n.unit} Payouts`},tooltip:{displayColors:!1,backgroundColor:Qu.graphs.tooltip[e],bodyColor:Qu.text.invert[e],callbacks:{title:()=>[],label:t=>`${vg(t.parsed.y)} ${n.unit}`},intersect:!1,interaction:{mode:"nearest"}}}},s={labels:r.map(((t,e)=>"")),datasets:[{label:"Price",data:r.map(((t,e)=>t.amount)),borderColor:tc[`${n.name}-${e}`],backgroundColor:Qu.graphs.colors[1][e],pointStyle:void 0,pointRadius:0,borderWidth:2}]};return(0,Jd.jsx)("div",{className:"graph_line",style:{height:void 0===i?"auto":i,background:void 0===o?"none":o},children:(0,Jd.jsx)(dct,{options:a,data:s})})};Dlt.register(Eut,zut,out,rut,dut,yut,Out,mut);const zct=t=>{const{mode:e}=Og(),{network:n}=u$(),{payouts:r,height:i}=t,o={labels:r.map(((t,e)=>Vx().unix(t.block_timestamp).format("Do MMM"))),datasets:[{label:"Price",data:r.map(((t,e)=>t.amount)),borderColor:tc[`${n.name}-${e}`],backgroundColor:tc[`${n.name}-${e}`],pointRadius:0,borderRadius:3}]},a={responsive:!0,maintainAspectRatio:!1,barPercentage:.4,maxBarThickness:11,scales:{x:{grid:{display:!1,drawBorder:!0},ticks:{font:{size:10},autoSkip:!0}},y:{ticks:{font:{size:10}},grid:{color:Qu.graphs.grid[e],borderColor:Qu.transparent[e]}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{displayColors:!1,backgroundColor:Qu.graphs.tooltip[e],bodyColor:Qu.text.invert[e],callbacks:{title:()=>[],label:t=>`${vg(t.parsed.y)} ${n.unit}`}}}};return(0,Jd.jsx)("div",{style:{height:void 0===i?"auto":i},children:(0,Jd.jsx)(fct,{options:a,data:o})})},Lct=pn.div`
  position: absolute;
  top: ${t=>t.topOffset?t.topOffset:"50%"};
  left: 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  z-index: 2;

  > div {
    background: ${pc};
    opacity: 0.75;
    padding: 0.75rem 1.25rem;
    border-radius: 0.75rem;

    h3 {
      padding: 0;
      margin: 0;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
  }
`,Hct=t=>{var e,n,r;const i=null!==(e=t.status)&&void 0!==e?e:"sync_or_setup",o=null!==(n=t.statusFor)&&void 0!==n&&n,{isSyncing:a,services:s}=$tt(),{inSetup:l}=Rtt();if("sync_or_setup"===i&&(a||!l()))return(0,Jd.jsx)(Jd.Fragment,{});if("active_service"===i&&s.includes(o))return(0,Jd.jsx)(Jd.Fragment,{});const{title:u}=t,c=null!==(r=t.topOffset)&&void 0!==r?r:"40%";return(0,Jd.jsx)(Lct,{topOffset:c,children:(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("h3",{children:[(0,Jd.jsx)(tw,{icon:sx,transform:"grow-1"}),"\xa0",u]})})})},Bct=t=>{const{payouts:e}=t,{services:n}=$tt(),r=k.useRef(),i=uet(r.current),{width:o,height:a,minHeight:s}=cet(i,306);return(0,Jd.jsxs)("div",{className:"inner",ref:r,style:{minHeight:s},children:[n.includes("subscan")?(0,Jd.jsx)(Hct,{status:"sync_or_setup",title:"Not Staking"}):(0,Jd.jsx)(Hct,{status:"active_service",statusFor:"subscan",title:"Subscan Disabled"}),(0,Jd.jsxs)("div",{className:"graph",style:{height:`${a}px`,width:`${o}px`,position:"absolute"},children:[(0,Jd.jsx)(zct,{payouts:e,height:"170px"}),(0,Jd.jsx)("div",{style:{marginTop:"1rem"},children:(0,Jd.jsx)(Rct,{payouts:e,height:"70px"})})]})]})};class Dct extends k.Component{shouldComponentUpdate(t,e){const n=t.account!==this.props.account,r=t.payouts!==this.props.payouts;return n||r}render(){return(0,Jd.jsx)(Bct,{...this.props})}}const Fct=Dct,Uct=()=>{var t;const{network:e}=u$(),{units:n}=e,{activeAccount:r}=btt(),{payouts:i}=eet();let o=det(het(i,21,n),21);o=o.reverse();const a=null!==(t=i.find((t=>new(sf())(t.amount).gt(new(sf())(0)))))&&void 0!==t?t:null;return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(iet,{title:"Overview"}),(0,Jd.jsxs)(Lx,{children:[(0,Jd.jsx)(Mct,{}),(0,Jd.jsx)(xct,{}),(0,Jd.jsx)(kct,{})]}),(0,Jd.jsxs)(qc,{className:"page-padding",noVerticalSpacer:!0,children:[(0,Jd.jsx)(Zc,{hOrder:0,vOrder:0,children:(0,Jd.jsxs)(Dx,{style:{minHeight:390},flex:!0,children:[(0,Jd.jsx)(crt,{}),(0,Jd.jsx)(Ict,{})]})}),(0,Jd.jsx)(Xc,{hOrder:1,vOrder:1,children:(0,Jd.jsxs)(Dx,{style:{minHeight:390},flex:!0,children:[(0,Jd.jsx)(ret,{}),(0,Jd.jsxs)("div",{className:"head",children:[(0,Jd.jsx)("h4",{children:"Recent Payouts"}),(0,Jd.jsxs)("h2",{children:[null===a?0:vg(mg(new(sf())(a.amount),n)),"\xa0",e.unit,"\xa0",(0,Jd.jsx)("span",{className:"fiat",children:null===a?"":Vx().unix(a.block_timestamp).fromNow()})]})]}),(0,Jd.jsx)(Fct,{account:r,payouts:o})]})})]}),(0,Jd.jsx)(qc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Jd.jsx)(Ect,{})})]})},Wct=pn.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;

  h3 {
    margin-bottom: 0;
  }
`,qct=pn.div`
  border-bottom: 1px solid ${Sc};
  padding-bottom: 1rem;
  width: 100%;
  margin-top: 1rem;
`,Xct=(pn.div`
  margin-bottom: ${t=>!0===t.last?"none":"1rem"};
  display: flex;
  flex-flow: row wrap;
  h4 {
    color: ${ic};
  }
`,pn.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  > section {
    color: ${ic};
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  > section:last-child {
    flex: 1;
    justify-content: flex-end;

    .progress {
      color: ${ic};
      opacity: 0.5;
    }

    .complete {
      margin: 0;
      color: ${Rc};
    }

    span {
      margin-right: 1rem;
    }
  }

  h2 {
    margin: 0;
    padding: 0.3rem 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;

    .assistant-icon {
      margin-left: 0.6rem;
    }
  }
`),Zct=pn.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0.25rem;
  margin-top: 1rem;
`,Yct=(pn.div`
  flex: 1;
  display: flex;
  padding-right: 0.5rem;

  &:last-child {
    padding-right: 0;
  }

  > div {
    flex: 1;
    background: white;
    border-radius: 0.75rem;
    margin-right: 1rem;
    padding: 0 1rem;
  }
`,pn.div`
  width: 100%;
  height: 1px;
  margin: 0.75rem 0;
`),Kct=pn.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,Gct=pn(Yu.div)`
  display: inline-block;
  margin: ${t=>t.margin};

  > button {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    background: ${t=>"invert-primary"===t.type?Rc:"invert-secondary"===t.type?zc:wc};
    color: ${t=>"invert-primary"===t.type||"invert-secondary"===t.type?"white":ic};

    padding: ${t=>t.padding};
    border-radius: 0.75rem;
    font-size: ${t=>t.fontSize};
    font-variation-settings: 'wght' 560;
    transition: opacity 0.2s;

    .space {
      margin-right: 0.6rem;
    }

    &:disabled {
      cursor: default;
      opacity: 0.25;
    }
  }
`,Jct=t=>{var e;let{transform:n}=t;const{primary:r,secondary:i,icon:o,title:a,disabled:s,small:l,inline:u}=t,{onClick:c}=t;n=null!==(e=n)&&void 0!==e?e:"shrink-1";const h=r?"invert-primary":i?"invert-secondary":"default";return(0,Jd.jsx)(Gct,{whileHover:{scale:s?1:1.02},whileTap:{scale:s?1:.98},type:h,margin:u?"0":"0 0.5rem",padding:l?"0.36rem 0.8rem":"0.45rem 1.2rem",fontSize:l?"0.95rem":"1.05rem",children:(0,Jd.jsxs)("button",{type:"button",disabled:s,onClick:()=>void 0!==c&&c(),children:[o&&(0,Jd.jsx)(tw,{icon:o,className:a?"space":void 0,transform:n}),a&&a]})})},Qct=Jct,_ct="ConnectAccounts",$ct=k.createContext({status:0,setStatus:t=>{},openModalWith:(t,e,n)=>{},setModalHeight:t=>{},setResize:()=>{},modal:_ct,config:{},size:"large",height:0,resize:0}),tht=()=>k.useContext($ct),eht=pn.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: ${t=>"nomination"===t.format?"5.6rem":"3.2rem"};
  position: relative;
  margin: 0.5rem;

  > .inner {
    background: ${fc};
    box-sizing: border-box;
    flex: 1;
    border-radius: 0.75rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding: 0;

    .row {
      box-sizing: border-box;
      flex: 1 0 100%;
      height: 3.2rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      padding: 0 0.5rem;

      &.status {
        height: 2.2rem;
      }
      svg {
        margin: 0;
      }
    }

    .label {
      margin-left: 0.3rem;
      color: ${ic};

      &.comm {
        margin: 0 0.3rem;
      }

      &.warning {
        color: #d2545d;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        padding-right: 0.35rem;
      }
      button {
        color: ${ic};
        &:hover {
          opacity: 0.75;
        }
        &.active {
          color: ${Rc};
        }
      }
    }
  }
`,nht=pn.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  flex: 1 1 100%;
  padding: 0 0 0 0.25rem;
`,rht=pn(Yu.div)`
  box-sizing: border-box;
  display: flex;
  margin-right: 0.5rem;
  flex-flow: row nowrap;
  align-items: center;
  align-content: center;
  overflow: hidden;
  flex: 1 1 25%;
  position: relative;

  h4 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 2rem;
    padding-left: 2.2rem;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,iht=pn.div`
  margin-right: 0.35rem;
  padding: 0 0.5rem;

  h5 {
    color: ${t=>"active"===t.status?"green":ic};
    opacity: ${t=>"active"===t.status?1:.5};
    margin: 0;
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,oht=pn.div`
  margin: 0 0.75rem 0 0.25rem;
  overflow: hidden;
  display: block;
  background: ${Tc};
  border-radius: 0.25rem;
  width: 1.1rem;
  height: 1.1rem;
  * {
    cursor: pointer;
    width: 100%;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 1rem;
    height: 1rem;
  }
  .select-checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
`,aht=pn.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${Sc};
`,sht=pn.div`
  position: absolute;
  top: -10px;
  right: 10px;
  width: 0;
  height: 0;
  opacity: 0;
`,lht=(t,e)=>{var n,r,i,o,a,s,l,u,c,h,d;let f=null!==(n=null===t||void 0===t||null===(r=t.info)||void 0===r||null===(i=r.display)||void 0===i?void 0:i.Raw)&&void 0!==n?n:null;f=null===f?null!==(o=null===t||void 0===t||null===(a=t.info)||void 0===a?void 0:a.legal.Raw)&&void 0!==o?o:null:f;const p=Pp(q1(f));if(""!==p)return p;if(null!==f)return f;const m=null!==(s=null===e||void 0===e?void 0:e.identity)&&void 0!==s?s:null;f=null!==(l=null===m||void 0===m||null===(u=m.info)||void 0===u||null===(c=u.display)||void 0===c?void 0:c.Raw)&&void 0!==l?l:null,f=null===f?null!==(h=null===m||void 0===m||null===(d=m.info)||void 0===d?void 0:d.legal.Raw)&&void 0!==h?h:null:f;const g=Pp(q1(f));return""!==g?g:f},uht=t=>{const{addNotification:e}=srt(),{favourites:n,addFavourite:r,removeFavourite:i}=Qtt(),{address:o}=t,a=n.includes(o)?{title:"Favourite Validator Removed",subtitle:o}:{title:"Favourite Validator Added",subtitle:o};return(0,Jd.jsx)("div",{className:"label",children:(0,Jd.jsx)("button",{type:"button",className:n.includes(o)?"active":void 0,onClick:()=>{n.includes(o)?i(o):r(o),e(a)},children:(0,Jd.jsx)(tw,{icon:ox,transform:"shrink-1"})})})},cht=t=>{var e,n,r,i,o,a,s,l,u;const{meta:c}=Qtt(),{validator:h,batchIndex:d,batchKey:f}=t,p=null!==(e=null===(n=c[f])||void 0===n?void 0:n.identities)&&void 0!==e?e:[],m=null!==(r=null===(i=c[f])||void 0===i?void 0:i.supers)&&void 0!==r?r:[],g=null!==(o=null===(a=c[f])||void 0===a?void 0:a.stake)&&void 0!==o?o:[],y=null!==(s=p.length>0)&&void 0!==s&&s,v=null!==(l=m.length>0)&&void 0!==l&&l,b=y&&v,{address:w}=(u=g.length>0,h),x=lht(p[d],m[d]);return(0,Jd.jsxs)(rht,{className:"identity",initial:{opacity:.5},animate:{opacity:1},transition:{duration:.3},children:[(0,Jd.jsx)(ort,{value:w,size:26}),b&&null!==x?(0,Jd.jsx)("h4",{children:x}):(0,Jd.jsx)("h4",{children:hg(w)})]})},hht=t=>{var e,n,r,i,o,a,s,l,u,c,h;const{consts:d,network:f}=u$(),{meta:p}=Qtt(),{batchIndex:m,batchKey:g}=t,y=null!==(e=null===(n=p[g])||void 0===n?void 0:n.identities)&&void 0!==e?e:[],v=null!==(r=null===(i=p[g])||void 0===i?void 0:i.supers)&&void 0!==r?r:[],b=null!==(o=null===(a=p[g])||void 0===a?void 0:a.stake)&&void 0!==o?o:[],w=null!==(s=y.length>0)&&void 0!==s&&s,x=null!==(l=v.length>0)&&void 0!==l&&l,M={identities:w&&x,stake:null!==(u=b.length>0)&&void 0!==u&&u},k=b[m],S=null!==(c=null===k||void 0===k?void 0:k.total_nominations)&&void 0!==c?c:0,C=null!==(h=null===k||void 0===k?void 0:k.lowestReward)&&void 0!==h?h:0,P=M.stake&&S>=d.maxNominatorRewardedPerValidator;return(0,Jd.jsx)(Jd.Fragment,{children:P&&(0,Jd.jsx)(Yu.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.1},children:(0,Jd.jsxs)("div",{className:"label warning",children:[(0,Jd.jsx)(tw,{icon:sx,transform:"shrink-2"}),"\xa0",C," ",f.unit]})})})},dht=t=>{var e;const{prefs:n}=t,r=null!==(e=null===n||void 0===n?void 0:n.blocked)&&void 0!==e?e:null;return(0,Jd.jsx)(Jd.Fragment,{children:r&&(0,Jd.jsx)("div",{className:"label",children:(0,Jd.jsx)(tw,{icon:gx,color:"#d2545d",transform:"shrink-1"})})})};function fht(){return fht=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fht.apply(this,arguments)}var pht=["borderColor","borderRadius","borderStyle","borderWidth","checkbox","className","checked","disabled","containerClassName","containerStyle","label","labelClassName","labelStyle","name","onChange","reference","right","size","style","value","icon","tabIndex"],mht=function(t){var e=t.borderColor,n=t.borderRadius,r=t.borderStyle,i=t.borderWidth,o=t.checkbox,a=t.className,s=t.checked,l=t.disabled,u=t.containerClassName,c=t.containerStyle,h=t.label,d=t.labelClassName,f=t.labelStyle,p=t.name,m=t.onChange,g=t.reference,y=t.right,v=t.size,b=t.style,w=t.value,x=t.icon,M=t.tabIndex,S=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,pht),C=(0,k.useState)(s),P=C[0],T=C[1],A=function(t){if(t.preventDefault(),l)return null;T(!P),m&&m(!P)};return(0,k.useEffect)((function(){T(s)}),[s]),k.createElement("label",{style:fht({},c,{display:"flex",alignItems:"center"}),className:u,onClick:function(t){return A(t)}},y&&h&&k.createElement("span",{className:d,style:f},h)||null,o||k.createElement("span",null,k.createElement("div",{style:fht({},b,{height:v,width:v,borderWidth:i,borderColor:e,borderStyle:r,borderRadius:n,display:"flex",alignItems:"center",justifyContent:"center",cursor:l?"not-allowed":""}),tabIndex:M,onKeyDown:function(t){"Enter"!==t.key&&" "!==t.key&&"Spacebar"!==t.key||A(t)},className:a},P&&x||null,k.createElement("input",fht({},S,{ref:g,type:"checkbox",name:p,checked:P,value:w,onChange:A,disabled:l,hidden:!0})))),!y&&h&&k.createElement("span",{className:d,style:f},h)||null)};mht.defaultProps={borderColor:"#D7C629",borderStyle:"solid",borderWidth:2,borderRadius:5,checked:!1,disabled:!1,right:!1,name:"",size:18,style:{},className:"",labelStyle:{marginLeft:5},labelClassName:"",containerStyle:{},containerClassName:"",value:"",onChange:null,icon:k.createElement("div",{style:{backgroundColor:"#D7C629",borderRadius:5,padding:5}})};const ght=mht,yht=k.createContext({setSelectable:t=>{},addToSelected:t=>{},removeFromSelected:t=>{},resetSelected:()=>{},setListFormat:t=>{},selected:[],selectable:!1,listFormat:"col",selectToggleable:!0}),vht=()=>k.useContext(yht),bht=t=>{var e,n;const r=null===(e=t.selectToggleable)||void 0===e||e,[i,o]=(0,k.useState)([]),[a,s]=(0,k.useState)(null!==(n=t.selectActive)&&void 0!==n&&n),[l,u]=(0,k.useState)("col"),c=()=>{o([])};return(0,Jd.jsx)(yht.Provider,{value:{setSelectActive:t=>{s(t),!1===t&&c()},addToSelected:t=>{o([...i].concat(t))},removeFromSelected:t=>{o([...i].filter((e=>!t.includes(e))))},resetSelected:c,setListFormat:t=>{u(t)},selected:i,selectActive:a,listFormat:l,selectToggleable:r},children:t.children})},wht=t=>{const{validator:e}=t,{mode:n}=(0,k.useContext)(un),{addToSelected:r,removeFromSelected:i,selected:o}=vht();return(0,Jd.jsx)(oht,{children:(0,Jd.jsx)(ght,{onChange:()=>{o.includes(e)?i([e]):r(e)},icon:(0,Jd.jsx)(tw,{icon:lw,transform:"shrink-2",color:Qu.text.secondary[n]}),borderColor:"rgba(0,0,0,0)",style:{overflow:"hidden",cursor:"pointer"},size:18})})},xht=t=>{var e,n,r,i,o;const{validator:a,toggleFavourites:s,batchIndex:l,batchKey:u,showStatus:c,showMenu:h}=t,{openModalWith:d}=tht(),{addNotification:f}=srt(),{setMenuPosition:p,setMenuItems:m,open:g}=_d(),{meta:y}=Qtt(),{selectActive:v}=vht(),b=null!==(e=null===(n=y[u])||void 0===n?void 0:n.identities)&&void 0!==e?e:[],w=null!==(r=null===(i=y[u])||void 0===i?void 0:i.supers)&&void 0!==r?r:[],{address:x,prefs:M}=a,S=null!==(o=null===M||void 0===M?void 0:M.commission)&&void 0!==o?o:null,C=(0,k.useRef)(null),P=lht(b[l],w[l]),T=null==x?{}:{title:"Address Copied to Clipboard",subtitle:x},A=[{icon:(0,Jd.jsx)(tw,{icon:sw}),wrap:null,title:"View Metrics",cb:()=>{d("ValidatorMetrics",{address:x,identity:P},"large")}},{icon:(0,Jd.jsx)(tw,{icon:Cx}),wrap:null,title:"Copy Address",cb:()=>{navigator.clipboard.writeText(x),f(T)}}];return(0,Jd.jsx)(eht,{showStatus:c,children:(0,Jd.jsxs)("div",{className:"inner",children:[(0,Jd.jsx)(sht,{ref:C}),(0,Jd.jsxs)("div",{className:"row",children:[v&&(0,Jd.jsx)(wht,{validator:a}),(0,Jd.jsx)(cht,{validator:a,batchIndex:l,batchKey:u}),(0,Jd.jsx)("div",{children:(0,Jd.jsxs)(nht,{children:[(0,Jd.jsx)(hht,{batchIndex:l,batchKey:u}),(0,Jd.jsx)(dht,{prefs:M}),(0,Jd.jsxs)("div",{className:"label comm",children:[S,"%"]}),s&&(0,Jd.jsx)(uht,{address:x}),h&&(0,Jd.jsx)("button",{type:"button",className:"label",onClick:()=>{g||(m(A),p(C))},children:(0,Jd.jsx)(tw,{icon:iw})})]})})]})]})})},Mht=t=>{const{openModalWith:e}=tht(),{display:n,address:r}=t;return(0,Jd.jsx)("div",{className:"label",children:(0,Jd.jsx)("button",{type:"button",onClick:()=>e("ValidatorMetrics",{address:r,identity:n},"large"),children:(0,Jd.jsx)(tw,{icon:sw})})})},kht=t=>{const{addNotification:e}=srt(),{validator:n}=t,{address:r}=n,i=null==r?{}:{title:"Address Copied to Clipboard",subtitle:r};return(0,Jd.jsx)("div",{className:"label",children:(0,Jd.jsx)("button",{type:"button",onClick:()=>{e(i),navigator.clipboard.writeText(r)},children:(0,Jd.jsx)(tw,{icon:Cx})})})},Sht=t=>{var e,n;const{getNominationsStatus:r,eraStakers:i,erasStakersSyncing:o}=Rtt(),{getNominationsStatus:a}=Gtt(),{network:{unit:s}}=u$(),{ownStake:l}=i,{address:u,bondType:c}=t;let h;h="pool"===c?a():r();const d=h[u],f="active"===d&&null!==(e=null===l||void 0===l||null===(n=l.find((t=>t.address)))||void 0===n?void 0:n.value)&&void 0!==e?e:0;return(0,Jd.jsx)(iht,{status:d,children:(0,Jd.jsxs)("h5",{children:[(p=null!==d&&void 0!==d?d:"",p.charAt(0).toUpperCase()+p.slice(1)),f>0&&"/ "+(o?"...":`${vg(f)} ${s}`)]})});var p},Cht=t=>{var e,n,r,i,o;const{meta:a}=Qtt(),{selectActive:s}=vht(),{validator:l,toggleFavourites:u,batchIndex:c,batchKey:h,bondType:d}=t,f=null!==(e=null===(n=a[h])||void 0===n?void 0:n.identities)&&void 0!==e?e:[],p=null!==(r=null===(i=a[h])||void 0===i?void 0:i.supers)&&void 0!==r?r:[],{address:m,prefs:g}=l,y=null!==(o=null===g||void 0===g?void 0:g.commission)&&void 0!==o?o:null;return(0,Jd.jsx)(eht,{format:"nomination",children:(0,Jd.jsxs)("div",{className:"inner",children:[(0,Jd.jsxs)("div",{className:"row",children:[s&&(0,Jd.jsx)(wht,{validator:l}),(0,Jd.jsx)(cht,{validator:l,batchIndex:c,batchKey:h}),(0,Jd.jsx)("div",{children:(0,Jd.jsxs)(nht,{children:[(0,Jd.jsx)(kht,{validator:l}),u&&(0,Jd.jsx)(uht,{address:m})]})})]}),(0,Jd.jsx)(aht,{}),(0,Jd.jsxs)("div",{className:"row status",children:[(0,Jd.jsx)(Sht,{address:m,bondType:d}),(0,Jd.jsxs)(nht,{children:[(0,Jd.jsx)(hht,{batchIndex:c,batchKey:h}),(0,Jd.jsx)(dht,{prefs:g}),(0,Jd.jsxs)("div",{className:"label",children:[y,"%"]}),(0,Jd.jsx)(Mht,{address:m,display:lht(f[c],p[c])})]})]})]})})},Pht=t=>{const{format:e}=t;return"nomination"===e?(0,Jd.jsx)(Cht,{...t}):(0,Jd.jsx)(xht,{...t})};class Tht extends k.Component{shouldComponentUpdate(t){return this.props.validator.address!==t.validator.address||this.props.batchIndex!==t.batchIndex||this.props.batchKey!==t.batchKey}render(){return(0,Jd.jsx)(Pht,{...this.props})}}const Aht=pn.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
`,Nht=pn.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  padding: 0 0.25rem 0.5rem 0.25rem;
  flex: 1;
  border-bottom: 1px solid ${Sc};

  h4 {
    margin: 0;
    color: ${ic};
  }

  > div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  > div:first-child {
    justify-content: flex-start;
  }

  > div:last-child {
    justify-content: flex-end;
    flex: 1;

    button {
      font-size: 1.1rem;
      margin-left: 0.4rem;
      opacity: 0.6;
      transition: all 0.2s;
      color: ${ic};

      &:hover {
        opacity: 0.9;
      }
    }
  }
`,Oht=pn.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.75rem 0.5rem;

  h4 {
    margin: 0;
  }

  > div:first-child {
    display: flex;
    justify-content: flex-start;
    flex: 1;
  }
  > div:last-child {
    display: flex;
    justify-content: flex-end;

    button {
      margin-left: 0.5rem;
      &.next {
        color: ${t=>t.next?Rc:ic};
        cursor: ${t=>t.next?"pointer":"default"};
      }
      &.prev {
        color: ${t=>t.prev?Rc:ic};
        cursor: ${t=>t.prev?"pointer":"default"};
      }
    }
  }
`,jht=pn.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem;

  > button {
    color: ${ic};
    background: ${wc};
    border-radius: 0.5rem;
    padding: 0.36rem 0.8rem;
    margin-right: 0.5rem;

    &:disabled {
      opacity: 0.5;
    }

    &:hover {
      color: ${rc};
    }
  }
`,Eht=pn.div`
  margin-top: 1rem;
  width: 100%;

  .transition {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;

    > .item {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      overflow: hidden;

      &.row {
        flex-basis: 100%;
      }

      &.col {
        flex-grow: 1;
        flex-basis: 100%;
        @media (min-width: 875px) {
          flex-basis: 50%;
          max-width: 50%;
        }
        @media (min-width: 1500px) {
          flex-basis: ${t=>t.flexBasisLarge};
          max-width: ${t=>t.flexBasisLarge};
        }
      }
    }
  }
`,Vht=pn.div`
  box-sizing: border-box;
  padding: 0 0.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  height: 65px;
  margin: 1rem 0;

  > .hide-scrollbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    > div {
      box-sizing: border-box;
      display: flex;
      flex-wrap: nowrap;
      overflow: auto;
      width: 100%;
      padding-bottom: 3rem;

      > .category {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;

        > .head {
          flex: 1;
          padding-bottom: 0.5rem;
          padding-left: 0.5rem;
          font-size: 0.9rem;
          color: ${ic};
          display: flex;
          flex-flow: row wrap;
          align-items: center;

          > button {
            font-size: 0.88rem;
            background: ${wc};
            border-radius: 0.5rem;
            margin: 0 0.5rem;
            padding: 0.25rem 0.75rem;

            &:disabled {
              opacity: 0.5;
              cursor: default;
            }
          }
        }
        > .items {
          flex: 1;
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
        }
      }
    }
  }
`,Iht=pn.div`
  border: 1px solid ${t=>t.active?Rc:Sc};
  border-radius: 0.7rem;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  padding: 0.65rem 0.85rem;
  margin-right: 1rem;
  align-items: center;

  &:last-child {
    margin-right: 0;
  }
  .icon {
    color: ${t=>t.active?Rc:ic};
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin-right: 0.75rem;
  }
  p {
    color: ${t=>t.active?Rc:ic};
    font-size: 0.9rem;
    margin: 0;
    text-align: left;
    padding-top: 0.15rem;
    line-height: 0.95rem;
  }
`,Rht=t=>{let{children:e}=t;return(0,Jd.jsx)(Vht,{children:(0,Jd.jsx)("div",{className:"hide-scrollbar",children:(0,Jd.jsx)("div",{children:e})})})},zht=t=>{var e;const{title:n}=t,r=null!==(e=t.buttons)&&void 0!==e?e:[];return(0,Jd.jsxs)("div",{className:"category",children:[(0,Jd.jsxs)("div",{className:"head",children:[n,r.map(((t,e)=>(0,Jd.jsx)("button",{type:"button",onClick:()=>t.onClick(),disabled:t.disabled,children:t.title},`category_${n}_${e}`)))]}),(0,Jd.jsx)("div",{className:"items",children:t.children})]})},Lht=t=>{var e,n;const{icon:r,label:i,transform:o,onClick:a}=t,s=null!==(e=t.disabled)&&void 0!==e&&e;return(0,Jd.jsx)(Yu.button,{disabled:s,whileHover:{scale:1.02},whileTap:{scale:.99},transition:{duration:.3},onClick:()=>{a()},style:{opacity:s?.5:1},children:(0,Jd.jsxs)(Iht,{active:t.active,style:{width:null!==(n=t.width)&&void 0!==n?n:180},children:[(0,Jd.jsx)("div",{className:"icon",children:(0,Jd.jsx)(tw,{icon:r,transform:o,opacity:t.active?1:.7})}),(0,Jd.jsx)("p",{children:i})]})})},Hht=()=>{var t,e,n,r,i;const{validatorOrder:o,validatorFilters:a,orderValidators:s,toggleFilterValidators:l,toggleAllValidatorFilters:u}=$tt(),c=(t,e)=>{t(e)};return(0,k.useEffect)((()=>{window.scrollTo(0,0)}),[a]),(0,Jd.jsxs)(Rht,{children:[(0,Jd.jsx)(zht,{title:"Order",children:(0,Jd.jsx)(Lht,{label:"lowest commission",icon:Zw,transform:"grow-4",active:"commission"===o,onClick:()=>c(s,"commission"),width:175})}),(0,Jd.jsxs)(zht,{title:"Exclude:",buttons:[{title:"All",onClick:()=>u(1)},{title:"Clear",onClick:()=>u(0),disabled:!a.length}],children:[(0,Jd.jsx)(Lht,{label:"inactive validators",icon:Pw,transform:"grow-4",active:null!==(t=null===a||void 0===a?void 0:a.includes("inactive"))&&void 0!==t&&t,onClick:()=>{c(l,"inactive")},width:170}),(0,Jd.jsx)(Lht,{label:"over subscribed",icon:sx,transform:"grow-4",active:null!==(e=null===a||void 0===a?void 0:a.includes("over_subscribed"))&&void 0!==e&&e,onClick:()=>{c(l,"over_subscribed")},width:155}),(0,Jd.jsx)(Lht,{label:"100% commission",icon:ex,transform:"grow-2",active:null!==(n=null===a||void 0===a?void 0:a.includes("all_commission"))&&void 0!==n&&n,onClick:()=>{c(l,"all_commission")},width:170}),(0,Jd.jsx)(Lht,{label:"blocked nominations",icon:gx,transform:"grow-1",active:null!==(r=null===a||void 0===a?void 0:a.includes("blocked_nominations"))&&void 0!==r&&r,onClick:()=>{c(l,"blocked_nominations")},width:190}),(0,Jd.jsx)(Lht,{label:"missing identity",icon:yx,transform:"grow-2",active:null!==(i=null===a||void 0===a?void 0:a.includes("missing_identity"))&&void 0!==i&&i,onClick:()=>{c(l,"missing_identity")},width:160})]})]})},Bht=t=>{var e,n,r,i;const{mode:o}=Og(),{isReady:a,network:s}=u$(),{activeAccount:l}=btt(),{metrics:u}=Mtt(),{fetchValidatorMetaBatch:c}=Qtt(),h=vht(),d=tht(),{selectActive:f,setSelectActive:p,selected:m,listFormat:g,setListFormat:y,selectToggleable:v}=h,{validatorFilters:b,validatorOrder:w,applyValidatorFilters:x,applyValidatorOrder:M,isSyncing:S}=$tt(),{batchKey:C,allowMoreCols:P,allowFilters:T,toggleFavourites:A,pagination:N,title:O,format:j,selectable:E,bondType:V}=t,I=null!==(e=t.actions)&&void 0!==e?e:[],R=null===(n=t.showMenu)||void 0===n||n,z=null!==(r=t.inModal)&&void 0!==r&&r,L=[...I].filter((t=>!t.onSelected)),H=[...I].filter((t=>t.onSelected)),B=null!==(i=t.disableThrottle)&&void 0!==i&&i,D=void 0!==t.refetchOnListUpdate&&t.refetchOnListUpdate,[F,U]=(0,k.useState)(1),[W,q]=(0,k.useState)(1),[X,Z]=(0,k.useState)(t.validators),[Y,K]=(0,k.useState)(t.validators),[G,J]=(0,k.useState)(!1),Q=(0,k.useRef)(W),_=t=>{Q.current=t,q(t)},$=Math.ceil(Y.length/Et),tt=F+1>$?$:F+1,et=F-1<1?1:F-1,nt=F*Et-1,rt=nt-49,it=30*W-1;(0,k.useEffect)((()=>{t.validators!==X&&J(!1)}),[t.validators,l]),(0,k.useEffect)((()=>{a&&0!==u.activeEra.index&&!G&&ot()}),[a,u.activeEra.index,G]),(0,k.useEffect)((()=>{it>=nt||B||setTimeout((()=>{_(Q.current+1)}),50)}),[Q.current]),(0,k.useEffect)((()=>{t.onSelected&&t.onSelected(h)}),[m]),(0,k.useEffect)((()=>{T&&G&&at()}),[b,w,S]),(0,k.useEffect)((()=>{lt()}),[g,W,Y,F]);const ot=()=>{Z(t.validators),K(t.validators),J(!0),c(C,t.validators,D)},at=()=>{if(T){let t=Object.assign(X);"default"!==w&&(t=M(t,w)),t=x(t,C),K(t),U(1),_(1)}};let st=[];st=B?Y:Y.slice(rt).slice(0,it);const lt=()=>{z&&d.setResize()};return Y.length?(0,Jd.jsxs)(Aht,{children:[(0,Jd.jsxs)(Nht,{children:[(0,Jd.jsx)("div",{children:(0,Jd.jsx)("h4",{children:O||`Dispalying ${Y.length} Validator${1===Y.length?"":"s"}`})}),(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)("button",{type:"button",onClick:()=>y("row"),children:(0,Jd.jsx)(tw,{icon:iw,color:"row"===g?tc[`${s.name}-${o}`]:"inherit"})}),(0,Jd.jsx)("button",{type:"button",onClick:()=>y("col"),children:(0,Jd.jsx)(tw,{icon:zw,color:"col"===g?tc[`${s.name}-${o}`]:"inherit"})})]})]}),(0,Jd.jsxs)(Eht,{flexBasisLarge:P?"33.33%":"50%",children:[T&&(0,Jd.jsx)(Hht,{}),N&&(0,Jd.jsxs)(Oht,{prev:1!==F,next:F!==$,children:[(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("h4",{children:["Page ",F," of ",$]})}),(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)("button",{type:"button",className:"prev",onClick:()=>{U(et)},children:"Prev"}),(0,Jd.jsx)("button",{type:"button",className:"next",onClick:()=>{U(tt)},children:"Next"})]})]}),E&&(0,Jd.jsxs)(jht,{children:[L.map(((t,e)=>{var n;return(0,Jd.jsx)("button",{disabled:null!==(n=t.disabled)&&void 0!==n&&n,type:"button",onClick:()=>t.onClick(h),children:t.title},`a_all_${e}`)})),!0===v&&(0,Jd.jsx)("button",{type:"button",onClick:()=>{p(!f)},children:f?"Cancel Selection":"Select"}),m.length>0&&(0,Jd.jsx)(Jd.Fragment,{children:H.map(((t,e)=>{var n;return(0,Jd.jsx)("button",{disabled:null!==(n=t.disabled)&&void 0!==n&&n,type:"button",onClick:()=>t.onClick(h),children:t.title},`a_selected_${e}`)}))})]}),(0,Jd.jsx)(Yu.div,{className:"transition",initial:"hidden",animate:"show",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.01}}},children:st.map(((t,e)=>{const n=X.indexOf(t);return(0,Jd.jsx)(Yu.div,{className:"item "+("row"===g?"row":"col"),variants:{hidden:{y:15,opacity:0},show:{y:0,opacity:1}},children:(0,Jd.jsx)(Tht,{validator:t,toggleFavourites:A,batchIndex:n,batchKey:C,format:j,showMenu:R,bondType:V})},`nomination_${e}`)}))})]})]}):(0,Jd.jsx)(Jd.Fragment,{})},Dht=t=>{const{selectActive:e,selectToggleable:n}=t;return(0,Jd.jsx)(bht,{selectActive:e,selectToggleable:n,children:(0,Jd.jsx)(Fht,{...t})})};class Fht extends k.Component{shouldComponentUpdate(t,e){return this.props.validators!==t.validators}render(){return(0,Jd.jsx)(Bht,{...this.props})}}Fht.contextType=Itt;const Uht=pn.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  width: 100%;

  .head {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    padding: 0 0.25rem;

    > h2 {
      flex: 1;
    }
  }
`,Wht=t=>{let{bondType:e}=t;const{openModalWith:n}=tht(),{isReady:r}=u$(),{inSetup:i}=Rtt(),{isSyncing:o}=$tt(),{activeAccount:a,isReadOnlyAccount:s}=btt(),{getAccountNominations:l}=Ntt(),{nominated:u,poolNominated:c}=Qtt();let{favouritesList:h}=Qtt();null===h&&(h=[]);const{poolNominations:d,isNominator:f}=Gtt(),p="pool"===e,m=p?d.targets:l(a),g=p?c:u,y=p?"pool_nominations":"stake_nominations";return(0,Jd.jsxs)(Uht,{children:[(0,Jd.jsxs)(Hx,{withAction:!0,children:[(0,Jd.jsxs)("h2",{children:[p?"Pool Nominations":"Nominations",(0,Jd.jsx)(wrt,{page:"stake",title:"Nominations"})]}),(0,Jd.jsx)("div",{children:!p&&m.length?(0,Jd.jsx)("div",{children:(0,Jd.jsx)(Jct,{small:!0,icon:xw,transform:"grow-1",inline:!0,primary:!0,title:"Stop",disabled:!p&&i()||o||s(a),onClick:()=>n("ChangeNominations",{nominations:[],bondType:e},"small")})}):(0,Jd.jsx)(Jd.Fragment,{})})]}),a?null===g||o?(0,Jd.jsx)("div",{className:"head",children:(0,Jd.jsx)("h3",{children:"Syncing nominations..."})}):(0,Jd.jsx)(Jd.Fragment,{children:r&&(0,Jd.jsx)(Jd.Fragment,{children:g.length>0?(0,Jd.jsx)("div",{style:{marginTop:"1rem"},children:(0,Jd.jsx)(Dht,{validators:g,batchKey:y,title:"Your Nominations",format:"nomination",bondType:p?"pool":"stake",selectable:!s(a)&&(!p||f()),actions:s(a)?[]:[{title:"Stop Nominating Selected",onClick:t=>{const{selected:r}=t,i=[...m].filter((t=>!r.map((t=>t.address)).includes(t)));n("ChangeNominations",{nominations:i,provider:t,bondType:e},"small")},onSelected:!0},{disabled:!h.length,title:"Add From Favourites",onClick:t=>{let{setSelectActive:r}=t;r(!1),n("NominateFromFavourites",{nominations:m,bondType:e},"large")},onSelected:!1}],refetchOnListUpdate:!0,allowMoreCols:!0,disableThrottle:!0})}):(0,Jd.jsx)("div",{className:"head",children:(0,Jd.jsx)("h3",{children:"Not Nominating."})})})}):(0,Jd.jsx)("div",{className:"head",children:(0,Jd.jsx)("h3",{children:"Not Nominating."})})]})},qht=Wht;Dlt.register(Klt,Out,mut);const Xht=t=>{const{mode:e}=Og(),{network:n}=u$(),{active:r,unlocking:i,unlocked:o,inactive:a}=t,{free:s}=t;let l=r,u=i+o,c=s,h=!1;0===l&&0===u&&0===c&&(l=-1,u=-1,c=-1,h=!0);const d={responsive:!0,maintainAspectRatio:!1,spacing:h?0:2,plugins:{legend:{padding:{right:20},display:!0,position:"left",align:"center",labels:{padding:20,color:Qu.text.primary[e],font:{size:14,weight:"500"}}},tooltip:{displayColors:!1,backgroundColor:Qu.graphs.tooltip[e],bodyColor:Qu.text.invert[e],callbacks:{label:t=>a?"Inactive":`${t.label}: ${-1===t.parsed?0:vg(t.parsed)} ${n.unit}`}}},cutout:"75%"},f=h?[Qu.graphs.colors[1][e],Qu.graphs.inactive2[e],Qu.graphs.inactive[e]]:[tc[`${n.name}-${e}`],Qu.graphs.colors[0][e],Qu.graphs.colors[1][e]],p={labels:["Active","Unlocking","Free"],datasets:[{label:n.unit,data:[l,u,c],backgroundColor:f,borderWidth:0}]};return(0,Jd.jsx)(Dx,{transparent:!0,noMargin:!0,style:{border:"none",boxShadow:"none"},children:(0,Jd.jsx)("div",{className:"graph",style:{flex:0,paddingRight:"1rem",height:160},children:(0,Jd.jsx)(pct,{options:d,data:p})})})},Zht=()=>{const{network:t}=u$(),{units:e}=t,{openModalWith:n}=tht(),{activeAccount:r,isReadOnlyAccount:i}=btt(),{getLedgerForStash:o,getBondOptions:a}=Ntt(),{inSetup:s}=Rtt(),{isSyncing:l}=$tt(),u=o(r),{active:c}=u,{freeToBond:h,totalUnlocking:d,totalUnlocked:f,totalUnlockChuncks:p}=a(r);return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsxs)(Hx,{children:[(0,Jd.jsxs)("h4",{children:["Bonded Funds",(0,Jd.jsx)(wrt,{page:"stake",title:"Bonding"})]}),(0,Jd.jsxs)("h2",{children:[vg(mg(c,e)),"\xa0",t.unit]}),(0,Jd.jsxs)(Kct,{children:[(0,Jd.jsx)(Jct,{small:!0,primary:!0,inline:!0,title:"+",disabled:s()||l||i(r),onClick:()=>n("UpdateBond",{fn:"add",bondType:"stake"},"small")}),(0,Jd.jsx)(Jct,{small:!0,primary:!0,title:"-",disabled:s()||l||i(r),onClick:()=>n("UpdateBond",{fn:"remove",bondType:"stake"},"small")}),(0,Jd.jsx)(Jct,{small:!0,inline:!0,primary:!0,icon:Bw,title:String(null!==p&&void 0!==p?p:0),disabled:s()||l||i(r),onClick:()=>n("UnlockChunks",{bondType:"stake"},"small")})]})]}),(0,Jd.jsx)(Xht,{active:mg(c,e),unlocking:mg(d,e),unlocked:mg(f,e),free:mg(h,e),inactive:s()})]})},Yht=t=>{var e;const n=null!==(e=t.setters)&&void 0!==e?e:[],r=t.nominations,{batchKey:i}=t,{openModalWith:o}=tht(),{isReady:a}=u$(),{activeAccount:s,isReadOnlyAccount:l}=btt(),{removeValidatorMetaBatch:u,validators:c,meta:h}=Qtt(),{applyValidatorOrder:d,applyValidatorFilters:f}=$tt();let{favouritesList:p}=Qtt();null===p&&(p=[]);const[m,g]=(0,k.useState)(null),[y,v]=(0,k.useState)(!1),[b,w]=(0,k.useState)(r),x="validators_browse";(0,k.useEffect)((()=>{w(r)}),[s,r]);(0,k.useEffect)((()=>{if(!a||!c.length)return;const t=h[x];if(void 0===t)return;if(void 0===t.stake)return;let e;if(y){switch(m){case"Favourites":e=(()=>{let t=[];return p.length&&(t=p.slice(0,16)),t})();break;case"Most Profitable":e=(()=>{let t=Object.assign(c);return t=f(t,x,["all_commission","blocked_nominations","over_subscribed","inactive","missing_identity"]),t=d(t,"commission"),t.length&&(t=t.slice(0,16)),t})();break;default:return}w(e),v(!1),M(e)}}));const M=t=>{for(const r of n){var e;const{current:n,set:i}=r;let o;o=null!==(e=null===n||void 0===n?void 0:n.callable)&&void 0!==e&&e?n.fn():n;i({...o,nominations:t})}};return(0,Jd.jsxs)(Oct,{children:[(0,Jd.jsx)("div",{children:!l(s)&&!b.length&&(0,Jd.jsx)(Jd.Fragment,{children:(0,Jd.jsx)(Rht,{children:(0,Jd.jsxs)(zht,{title:"Generate Method",children:[(0,Jd.jsx)(Lht,{label:"Most Profitable",icon:ix,transform:"grow-2",active:!1,onClick:()=>{g("Most Profitable"),u(i),w([]),v(!0)},width:175}),(0,Jd.jsx)(Lht,{label:"From Favourites",icon:ox,transform:"grow-2",disabled:!p.length,active:!1,onClick:()=>{g("Favourites"),u(i),w([]),v(!0)},width:175})]})})})}),y?(0,Jd.jsx)(Jd.Fragment,{}):(0,Jd.jsx)(Jd.Fragment,{children:a&&b.length>0?(0,Jd.jsx)("div",{style:{marginTop:"1rem"},children:(0,Jd.jsx)(Dht,{validators:b,batchKey:i,selectable:!0,actions:[{title:"Start Again",onClick:t=>{let{resetSelected:e}=t;g(null),u(i),w([]),M([]),e()},onSelected:!1},{disabled:!p.length,title:"Add From Favourites",onClick:t=>{let{setSelectActive:e}=t;e(!1);o("SelectFavourites",{nominations:b,callback:t=>{g(null),u(i),w(t),M(t)}},"large")},onSelected:!1},{title:"Remove Selected",onClick:t=>{let{selected:e,resetSelected:n,setSelectActive:r}=t;g("From List"),u(i);const o=[...b].filter((t=>!e.map((t=>t.address)).includes(t.address)));w(o),M(o),r(!1),n()},onSelected:!0}],allowMoreCols:!0})}):(0,Jd.jsx)("div",{className:"head",children:(0,Jd.jsx)("h3",{children:"No Nominations."})})})]})},Kht=()=>{var t;const{getNominationsStatus:e}=Rtt(),n=e(),r=Object.values(n).length,i=null!==(t=Object.values(n).filter((t=>"active"===t)).length)&&void 0!==t?t:0,o={label:"Active Nominations",stat:{value:i,total:r,unit:""},graph:{value1:i,value2:i?0:1},tooltip:i?"Active":void 0,assistant:{page:"stake",key:"Nominations"}};return(0,Jd.jsx)(wct,{...o})},Ght=()=>{const{network:t}=u$(),{eraStakers:e}=Rtt(),{minActiveBond:n}=e,r={label:"Minimum Active Bond",value:n,unit:t.unit,assistant:{page:"stake",key:"Bonding"}};return(0,Jd.jsx)(yct,{...r})},Jht={eraLength:0,eraProgress:0,sessionLength:0,sessionProgress:0,sessionsPerEra:0,unsub:void 0},Qht=k.createContext({getEraTimeLeft:()=>0,sessionEra:{}}),_ht=()=>k.useContext(Qht),$ht=()=>{const{sessionEra:t,getEraTimeLeft:e}=_ht(),[n,r]=(0,k.useState)(0),i=(0,k.useRef)(n),o=t=>{r(t),i.current=t};let a;return(0,k.useEffect)((()=>(o(e()),a=setInterval((()=>{o(i.current-1)}),1e3),()=>{clearInterval(a)})),[t]),i.current},tdt=()=>{const{metrics:t}=Mtt(),{sessionEra:e}=_ht(),n=$ht(),r=Vx().duration(1e3*n,"milliseconds"),i=`${r.hours()}:${r.minutes()}:${r.seconds()}`,o={label:"Active Era",stat:{value:t.activeEra.index,unit:""},graph:{value1:e.eraProgress,value2:e.eraLength-e.eraProgress},tooltip:0===t.activeEra.index?void 0:i,assistant:{page:"validators",key:"Era"}};return(0,Jd.jsx)(wct,{...o})},edt=()=>{const{openModalWith:t}=tht(),{isSyncing:e}=$tt(),{getControllerNotImported:n}=Rtt(),{activeAccount:r,isReadOnlyAccount:i}=btt(),{getBondedAccount:o}=Ntt(),a=o(r);return(0,Jd.jsx)(Jd.Fragment,{children:n(a)&&!e&&!i(r)&&(0,Jd.jsx)(qc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Jd.jsxs)(Bx,{style:{border:"2px solid rgba(242, 185, 27,0.25)"},children:[(0,Jd.jsx)(Hx,{children:(0,Jd.jsx)("h4",{children:"You have not imported your controller account. If you have lost access to your controller account, set a new one now. Otherwise, import the controller into one of your active extensions."})}),(0,Jd.jsx)(Jct,{small:!0,primary:!0,inline:!0,title:"Set New Controller",onClick:()=>t("UpdateController",{},"large")})]})})})},ndt=pn.div`
  padding: 0.15rem 0.25rem;
  width: 100%;
  h4 {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 0.5rem 0;

    .assistant-icon {
      margin-left: 0.5rem;
    }
  }
  h2 {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 0;
    line-height: 2.1rem;
  }
`,rdt=t=>{const{label:e,stat:n,buttons:r,assistant:i,icon:o}=t;return(0,Jd.jsxs)(ndt,{children:[(0,Jd.jsxs)("h4",{children:[e,i.length&&(0,Jd.jsx)(wrt,{page:i[0],title:i[1]})]}),(0,Jd.jsxs)("h2",{children:[o&&(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(tw,{icon:o,transform:"shrink-4"}),"\xa0"]}),n,r&&(0,Jd.jsxs)("span",{children:["\xa0\xa0",r.map(((t,e)=>{var n,r,i,o;return(0,Jd.jsxs)(k.Fragment,{children:[(0,Jd.jsx)(Jct,{primary:!0,inline:!0,title:t.title,small:null!==(n=t.small)&&void 0!==n?n:void 0,icon:null!==(r=t.icon)&&void 0!==r?r:void 0,transform:null!==(i=t.transform)&&void 0!==i?i:void 0,disabled:null!==(o=t.disabled)&&void 0!==o&&o,onClick:()=>t.onClick()},`btn_${e}_${Math.random()}`),"\xa0\xa0"]},`stat_${e}`)}))]})]})]})},idt=rdt,odt=()=>{var t;const{isReady:e}=u$(),{setOnSetup:n,getSetupProgressPercent:r}=$tt(),{openModalWith:i}=tht(),{activeAccount:o,isReadOnlyAccount:a}=btt(),{isSyncing:s}=$tt(),{getNominationsStatus:l,staking:u,inSetup:c}=Rtt(),{getAccountNominations:h}=Ntt(),{payee:d}=u,f=h(o),p=l(),m=Object.values(p).filter((t=>"active"===t)).length,g=Tt.find((t=>t.key===d));let y="Start Staking";if(c()){const t=r(o);t>0&&(y+=`: ${t}%`)}return(0,Jd.jsxs)(Bx,{height:300,children:[(0,Jd.jsx)(idt,{label:"Status",assistant:["stake","Staking Status"],stat:c()||s?"Not Staking":f.length?m?"Actively Nominating with Bonded Funds":"Waiting for Active Nominations":"Inactive: Not Nominating",buttons:c()?[{title:y,icon:mw,transform:"grow-1",disabled:!e||a(o)||!o,onClick:()=>n(!0)}]:[]}),(0,Jd.jsx)(Yc,{}),(0,Jd.jsx)(idt,{label:"Reward Destination",assistant:["stake","Reward Destination"],icon:null===d?Sx:"Staked"===d?$w:"None"===d?Sx:bx,stat:c()?"Not Assigned":null!==(t=null===g||void 0===g?void 0:g.name)&&void 0!==t?t:"Not Assigned",buttons:g?[{title:"Update",icon:bx,small:!0,disabled:c()||s||a(o),onClick:()=>i("UpdatePayee",{},"small")}]:[]})]})},adt=t=>{let{title:e}=t;const{openModalWith:n}=tht(),{activeAccount:r}=btt(),{isSyncing:i}=$tt(),{targets:o,setTargets:a,inSetup:s}=Rtt(),{getAccountNominations:l}=Ntt(),u=l(r);return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(iet,{title:e}),(0,Jd.jsxs)(Lx,{children:[(0,Jd.jsx)(Kht,{}),(0,Jd.jsx)(Ght,{}),(0,Jd.jsx)(tdt,{})]}),(0,Jd.jsx)(edt,{}),(0,Jd.jsxs)(qc,{className:"page-padding",noVerticalSpacer:!0,children:[(0,Jd.jsx)(Xc,{hOrder:1,vOrder:0,children:(0,Jd.jsx)(odt,{})}),(0,Jd.jsx)(Zc,{hOrder:0,vOrder:1,children:(0,Jd.jsx)(Bx,{height:300,children:(0,Jd.jsx)(Zht,{})})})]}),(0,Jd.jsx)(qc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Jd.jsx)(Bx,{children:u.length||s()||i?(0,Jd.jsx)(Wht,{bondType:"stake"}):(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsxs)(Hx,{withAction:!0,children:[(0,Jd.jsxs)("h2",{children:["Start Nominating",(0,Jd.jsx)(wrt,{page:"stake",title:"Nominations"})]}),(0,Jd.jsx)("div",{children:(0,Jd.jsx)(Jct,{small:!0,inline:!0,primary:!0,title:"Nominate",icon:mw,transform:"grow-1",disabled:0===o.length||s()||i,onClick:()=>n("Nominate",{},"small")})})]}),(0,Jd.jsx)(Yht,{batchKey:"generate_nominations_active",setters:[{set:a,current:o}],nominations:o.nominations})]})})})]})};var sdt=__webpack_require__(5667);const ldt=t=>{const{activeAccount:e}=btt(),{getSetupProgress:n,setActiveAccountSetupSection:r}=$tt(),i=n(e),{title:o,assistantPage:a,assistantKey:s,complete:l,thisSection:u}=t;return(0,Jd.jsxs)(Xct,{children:[(0,Jd.jsx)("section",{children:(0,Jd.jsxs)("h2",{children:[o,void 0!==a&&void 0!==s&&(0,Jd.jsx)(wrt,{page:a,title:s})]})}),(0,Jd.jsx)("section",{children:l&&(0,Jd.jsxs)(Jd.Fragment,{children:[i.section!==u&&u<i.section&&(0,Jd.jsx)("span",{children:(0,Jd.jsx)(Jct,{inline:!0,small:!0,title:"Update",onClick:()=>{r(u)}})}),(0,Jd.jsx)("h4",{className:"complete",children:"Complete"})]})})]})},udt=t=>{const{activeAccount:e}=btt(),{getSetupProgress:n,setActiveAccountSetupSection:r}=$tt(),i=n(e),{complete:o}=t;return(0,Jd.jsx)(Zct,{children:(0,Jd.jsx)("section",{children:o?(0,Jd.jsx)(Jct,{inline:!0,primary:!0,title:"Continue",onClick:()=>r(i.section+1)}):(0,Jd.jsx)("div",{style:{opacity:.5},children:(0,Jd.jsx)(Jct,{inline:!0,title:"Continue",disabled:!0})})})})},cdt=t=>{let{thisSection:e,activeSection:n,children:r}=t;const i=e===n?"visible":"hidden";return(0,Jd.jsx)(Yu.div,{initial:!1,style:{overflow:"hidden",width:"100%"},variants:{hidden:{height:"0px"},visible:{height:"auto"}},animate:i,transition:{duration:.5,type:"spring",bounce:.2},children:r})},hdt=t=>{const{consts:e}=u$(),{section:n}=t,{activeAccount:r}=btt(),{getSetupProgress:i,setActiveAccountSetup:o}=$tt(),a=i(r),{maxNominations:s}=e;return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(ldt,{thisSection:n,complete:a.nominations.length>0,title:"Nominate",assistantPage:"stake",assistantKey:"Nominating"}),(0,Jd.jsxs)(cdt,{thisSection:n,activeSection:a.section,children:[(0,Jd.jsxs)("div",{style:{marginTop:"0.5rem"},children:[(0,Jd.jsxs)("h4",{children:["Choose up to ",s," validators to nominate. Generate your nominations automatically or add a selection from your favourites."]}),(0,Jd.jsx)(Yht,{batchKey:"generate_nominations_inactive",setters:[{current:{callable:!0,fn:()=>i(r)},set:o}],nominations:a.nominations})]}),(0,Jd.jsx)(udt,{complete:a.nominations.length>0})]})]})};function ddt(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}__webpack_require__(419);function fdt(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function pdt(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function mdt(t,e){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var n=getComputedStyle(t,null);return pdt(n.overflowY,e)||pdt(n.overflowX,e)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function gdt(t,e,n,r,i,o,a,s){return o<t&&a>e||o>t&&a<e?0:o<=t&&s<=n||a>=e&&s>=n?o-t-r:a>e&&s<n||o<t&&s>n?a-e+i:0}var ydt=0;function vdt(){}function bdt(t,e){if(t){var n=function(t,e){var n=window,r=e.scrollMode,i=e.block,o=e.inline,a=e.boundary,s=e.skipOverflowHiddenElements,l="function"==typeof a?a:function(t){return t!==a};if(!fdt(t))throw new TypeError("Invalid target");for(var u=document.scrollingElement||document.documentElement,c=[],h=t;fdt(h)&&l(h);){if((h=h.parentElement)===u){c.push(h);break}null!=h&&h===document.body&&mdt(h)&&!mdt(document.documentElement)||null!=h&&mdt(h,s)&&c.push(h)}for(var d=n.visualViewport?n.visualViewport.width:innerWidth,f=n.visualViewport?n.visualViewport.height:innerHeight,p=window.scrollX||pageXOffset,m=window.scrollY||pageYOffset,g=t.getBoundingClientRect(),y=g.height,v=g.width,b=g.top,w=g.right,x=g.bottom,M=g.left,k="start"===i||"nearest"===i?b:"end"===i?x:b+y/2,S="center"===o?M+v/2:"end"===o?w:M,C=[],P=0;P<c.length;P++){var T=c[P],A=T.getBoundingClientRect(),N=A.height,O=A.width,j=A.top,E=A.right,V=A.bottom,I=A.left;if("if-needed"===r&&b>=0&&M>=0&&x<=f&&w<=d&&b>=j&&x<=V&&M>=I&&w<=E)return C;var R=getComputedStyle(T),z=parseInt(R.borderLeftWidth,10),L=parseInt(R.borderTopWidth,10),H=parseInt(R.borderRightWidth,10),B=parseInt(R.borderBottomWidth,10),D=0,F=0,U="offsetWidth"in T?T.offsetWidth-T.clientWidth-z-H:0,W="offsetHeight"in T?T.offsetHeight-T.clientHeight-L-B:0;if(u===T)D="start"===i?k:"end"===i?k-f:"nearest"===i?gdt(m,m+f,f,L,B,m+k,m+k+y,y):k-f/2,F="start"===o?S:"center"===o?S-d/2:"end"===o?S-d:gdt(p,p+d,d,z,H,p+S,p+S+v,v),D=Math.max(0,D+m),F=Math.max(0,F+p);else{D="start"===i?k-j-L:"end"===i?k-V+B+W:"nearest"===i?gdt(j,V,N,L,B+W,k,k+y,y):k-(j+N/2)+W/2,F="start"===o?S-I-z:"center"===o?S-(I+O/2)+U/2:"end"===o?S-E+H+U:gdt(I,E,O,z,H+U,S,S+v,v);var q=T.scrollLeft,X=T.scrollTop;k+=X-(D=Math.max(0,Math.min(X+D,T.scrollHeight-N+W))),S+=q-(F=Math.max(0,Math.min(q+F,T.scrollWidth-O+U)))}C.push({el:T,top:D,left:F})}return C}(t,{boundary:e,block:"nearest",scrollMode:"if-needed"});n.forEach((function(t){var e=t.el,n=t.top,r=t.left;e.scrollTop=n,e.scrollLeft=r}))}}function wdt(t,e,n){return t===e||e instanceof n.Node&&t.contains&&t.contains(e)}function xdt(t,e){var n;function r(){n&&clearTimeout(n)}function i(){for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];r(),n=setTimeout((function(){n=null,t.apply(void 0,o)}),e)}return i.cancel=r,i}function Mdt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return e.some((function(e){return e&&e.apply(void 0,[t].concat(r)),t.preventDownshiftDefault||t.hasOwnProperty("nativeEvent")&&t.nativeEvent.preventDownshiftDefault}))}}function kdt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){e.forEach((function(e){"function"===typeof e?e(t):e&&(e.current=t)}))}}function Sdt(){return String(ydt++)}function Cdt(t){var e=t.isOpen,n=t.resultCount,r=t.previousResultCount;return e?n?n!==r?n+" result"+(1===n?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function Pdt(t,e){return Object.keys(t).reduce((function(n,r){return n[r]=Tdt(e,r)?e[r]:t[r],n}),{})}function Tdt(t,e){return void 0!==t[e]}function Adt(t){var e=t.key,n=t.keyCode;return n>=37&&n<=40&&0!==e.indexOf("Arrow")?"Arrow"+e:e}function Ndt(t,e,n,r,i){if(void 0===i&&(i=!0),0===n)return-1;var o=n-1;("number"!==typeof e||e<0||e>=n)&&(e=t>0?-1:o+1);var a=e+t;a<0?a=i?o:0:a>o&&(a=i?0:o);var s=Odt(t,a,n,r,i);return-1===s?e>=n?-1:e:s}function Odt(t,e,n,r,i){var o=r(e);if(!o||!o.hasAttribute("disabled"))return e;if(t>0){for(var a=e+1;a<n;a++)if(!r(a).hasAttribute("disabled"))return a}else for(var s=e-1;s>=0;s--)if(!r(s).hasAttribute("disabled"))return s;return i?t>0?Odt(1,0,n,r,!1):Odt(-1,n-1,n,r,!1):-1}function jdt(t,e,n,r){return void 0===r&&(r=!0),e.some((function(e){return e&&(wdt(e,t,n)||r&&wdt(e,n.document.activeElement,n))}))}var Edt=xdt((function(t){Idt(t).textContent=""}),500);function Vdt(t,e){var n=Idt(e);t&&(n.textContent=t,Edt(e))}function Idt(t){void 0===t&&(t=document);var e=t.getElementById("a11y-status-message");return e||((e=t.createElement("div")).setAttribute("id","a11y-status-message"),e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.setAttribute("aria-relevant","additions text"),Object.assign(e.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),t.body.appendChild(e),e)}var Rdt=["isInitialMount","highlightedIndex","items","environment"],zdt={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function Ldt(t,e,n){var r=t.props,i=t.type,o={};Object.keys(e).forEach((function(r){!function(t,e,n,r){var i=e.props,o=e.type,a="on"+Udt(t)+"Change";i[a]&&void 0!==r[t]&&r[t]!==n[t]&&i[a](Kc({type:o},r))}(r,t,e,n),n[r]!==e[r]&&(o[r]=n[r])})),r.onStateChange&&Object.keys(o).length&&r.onStateChange(Kc({type:i},o))}var Hdt=xdt((function(t,e){Vdt(t(),e)}),200),Bdt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?k.useLayoutEffect:k.useEffect;function Ddt(t){var e=t.id,n=void 0===e?"downshift-"+Sdt():e,r=t.labelId,i=t.menuId,o=t.getItemId,a=t.toggleButtonId,s=t.inputId,l=(0,k.useRef)({labelId:r||n+"-label",menuId:i||n+"-menu",getItemId:o||function(t){return n+"-item-"+t},toggleButtonId:a||n+"-toggle-button",inputId:s||n+"-input"});return l.current}function Fdt(t,e,n){return void 0!==t?t:0===n.length?-1:n.indexOf(e)}function Udt(t){return""+t.slice(0,1).toUpperCase()+t.slice(1)}function Wdt(t){var e=(0,k.useRef)(t);return e.current=t,e}function qdt(t,e,n){var r=(0,k.useRef)(),i=(0,k.useRef)(),o=(0,k.useCallback)((function(e,n){i.current=n,e=Pdt(e,n.props);var r=t(e,n);return n.props.stateReducer(e,Kc({},n,{changes:r}))}),[t]),a=(0,k.useReducer)(o,e),s=a[0],l=a[1],u=Wdt(n),c=(0,k.useCallback)((function(t){return l(Kc({props:u.current},t))}),[u]),h=i.current;return(0,k.useEffect)((function(){h&&r.current&&r.current!==s&&Ldt(h,Pdt(r.current,h.props),s),r.current=s}),[s,n,h]),[s,c]}var Xdt={itemToString:function(t){return t?String(t):""},stateReducer:function(t,e){return e.changes},getA11ySelectionMessage:function(t){var e=t.selectedItem,n=t.itemToString;return e?n(e)+" has been selected.":""},scrollIntoView:bdt,circularNavigation:!1,environment:"undefined"===typeof window?{}:window};function Zdt(t,e,n){void 0===n&&(n=zdt);var r="default"+Udt(e);return r in t?t[r]:n[e]}function Ydt(t,e,n){if(void 0===n&&(n=zdt),e in t)return t[e];var r="initial"+Udt(e);return r in t?t[r]:Zdt(t,e,n)}function Kdt(t){var e=Ydt(t,"selectedItem"),n=Ydt(t,"isOpen"),r=Ydt(t,"highlightedIndex"),i=Ydt(t,"inputValue");return{highlightedIndex:r<0&&e&&n?t.items.indexOf(e):r,isOpen:n,selectedItem:e,inputValue:i}}function Gdt(t,e,n,r){var i=t.items,o=t.initialHighlightedIndex,a=t.defaultHighlightedIndex,s=e.selectedItem,l=e.highlightedIndex;return 0===i.length?-1:void 0!==o&&l===o?o:void 0!==a?a:s?0===n?i.indexOf(s):Ndt(n,i.indexOf(s),i.length,r,!1):0===n?-1:n<0?i.length-1:0}function Jdt(t,e,n,r){var i=(0,k.useRef)({isMouseDown:!1,isTouchMove:!1});return(0,k.useEffect)((function(){var o=function(){i.current.isMouseDown=!0},a=function(o){i.current.isMouseDown=!1,t&&!jdt(o.target,e.map((function(t){return t.current})),n)&&r()},s=function(){i.current.isTouchMove=!1},l=function(){i.current.isTouchMove=!0},u=function(o){!t||i.current.isTouchMove||jdt(o.target,e.map((function(t){return t.current})),n,!1)||r()};return n.addEventListener("mousedown",o),n.addEventListener("mouseup",a),n.addEventListener("touchstart",s),n.addEventListener("touchmove",l),n.addEventListener("touchend",u),function(){n.removeEventListener("mousedown",o),n.removeEventListener("mouseup",a),n.removeEventListener("touchstart",s),n.removeEventListener("touchmove",l),n.removeEventListener("touchend",u)}}),[t,n]),i}var Qdt=function(){return vdt};function _dt(t,e,n){var r=n.isInitialMount,i=n.highlightedIndex,o=n.items,a=n.environment,s=ddt(n,Rdt);(0,k.useEffect)((function(){r||Hdt((function(){return t(Kc({highlightedIndex:i,highlightedItem:o[i],resultCount:o.length},s))}),a.document)}),e)}function $dt(t){var e=t.highlightedIndex,n=t.isOpen,r=t.itemRefs,i=t.getItemNodeFromIndex,o=t.menuElement,a=t.scrollIntoView,s=(0,k.useRef)(!0);return Bdt((function(){e<0||!n||!Object.keys(r.current).length||(!1===s.current?s.current=!0:a(i(e),o))}),[e]),s}var tft=vdt;function eft(t,e,n){var r,i=e.type,o=e.props;switch(i){case n.ItemMouseMove:r={highlightedIndex:e.index};break;case n.MenuMouseLeave:r={highlightedIndex:-1};break;case n.ToggleButtonClick:case n.FunctionToggleMenu:r={isOpen:!t.isOpen,highlightedIndex:t.isOpen?-1:Gdt(o,t,0)};break;case n.FunctionOpenMenu:r={isOpen:!0,highlightedIndex:Gdt(o,t,0)};break;case n.FunctionCloseMenu:r={isOpen:!1};break;case n.FunctionSetHighlightedIndex:r={highlightedIndex:e.highlightedIndex};break;case n.FunctionSetInputValue:r={inputValue:e.inputValue};break;case n.FunctionReset:r={highlightedIndex:Zdt(o,"highlightedIndex"),isOpen:Zdt(o,"isOpen"),selectedItem:Zdt(o,"selectedItem"),inputValue:Zdt(o,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return Kc({},t,r)}qh().array.isRequired,qh().func,qh().func,qh().func,qh().bool,qh().number,qh().number,qh().number,qh().bool,qh().bool,qh().bool,qh().any,qh().any,qh().any,qh().string,qh().string,qh().string,qh().func,qh().string,qh().func,qh().func,qh().func,qh().func,qh().func,qh().shape({addEventListener:qh().func,removeEventListener:qh().func,document:qh().shape({getElementById:qh().func,activeElement:qh().any,body:qh().any})});yn(yn({},Xdt),{getA11yStatusMessage:function(t){var e=t.isOpen,n=t.resultCount,r=t.previousResultCount;return e?n?n!==r?n+" result"+(1===n?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.":"":"No results are available.":""}});var nft=Object.freeze({__proto__:null,InputKeyDownArrowDown:0,InputKeyDownArrowUp:1,InputKeyDownEscape:2,InputKeyDownHome:3,InputKeyDownEnd:4,InputKeyDownEnter:5,InputChange:6,InputBlur:7,MenuMouseLeave:8,ItemMouseMove:9,ItemClick:10,ToggleButtonClick:11,FunctionToggleMenu:12,FunctionOpenMenu:13,FunctionCloseMenu:14,FunctionSetHighlightedIndex:15,FunctionSelectItem:16,FunctionSetInputValue:17,FunctionReset:18,ControlledPropUpdatedSelectedItem:19});qh().array.isRequired,qh().func,qh().func,qh().func,qh().bool,qh().number,qh().number,qh().number,qh().bool,qh().bool,qh().bool,qh().any,qh().any,qh().any,qh().string,qh().string,qh().string,qh().string,qh().string,qh().string,qh().func,qh().string,qh().string,qh().func,qh().func,qh().func,qh().func,qh().func,qh().func,qh().shape({addEventListener:qh().func,removeEventListener:qh().func,document:qh().shape({getElementById:qh().func,activeElement:qh().any,body:qh().any})});var rft=vdt;var ift=Kc({},Xdt,{getA11yStatusMessage:Cdt,circularNavigation:!0});function oft(t,e){var n,r=e.type,i=e.props,o=e.shiftKey;switch(r){case 10:n={isOpen:Zdt(i,"isOpen"),highlightedIndex:Zdt(i,"highlightedIndex"),selectedItem:i.items[e.index],inputValue:i.itemToString(i.items[e.index])};break;case 0:n=t.isOpen?{highlightedIndex:Ndt(o?5:1,t.highlightedIndex,i.items.length,e.getItemNodeFromIndex,i.circularNavigation)}:{highlightedIndex:Gdt(i,t,1,e.getItemNodeFromIndex),isOpen:i.items.length>=0};break;case 1:n=t.isOpen?{highlightedIndex:Ndt(o?-5:-1,t.highlightedIndex,i.items.length,e.getItemNodeFromIndex,i.circularNavigation)}:{highlightedIndex:Gdt(i,t,-1,e.getItemNodeFromIndex),isOpen:i.items.length>=0};break;case 5:n=Kc({},t.isOpen&&t.highlightedIndex>=0&&{selectedItem:i.items[t.highlightedIndex],isOpen:Zdt(i,"isOpen"),highlightedIndex:Zdt(i,"highlightedIndex"),inputValue:i.itemToString(i.items[t.highlightedIndex])});break;case 2:n=Kc({isOpen:!1,highlightedIndex:-1},!t.isOpen&&{selectedItem:null,inputValue:""});break;case 3:n={highlightedIndex:Odt(1,0,i.items.length,e.getItemNodeFromIndex,!1)};break;case 4:n={highlightedIndex:Odt(-1,i.items.length-1,i.items.length,e.getItemNodeFromIndex,!1)};break;case 7:n=Kc({isOpen:!1,highlightedIndex:-1},t.highlightedIndex>=0&&e.selectItem&&{selectedItem:i.items[t.highlightedIndex],inputValue:i.itemToString(i.items[t.highlightedIndex])});break;case 6:n={isOpen:!0,highlightedIndex:Zdt(i,"highlightedIndex"),inputValue:e.inputValue};break;case 16:n={selectedItem:e.selectedItem,inputValue:i.itemToString(e.selectedItem)};break;case 19:n={inputValue:e.inputValue};break;default:return eft(t,e,nft)}return Kc({},t,n)}var aft=["onMouseLeave","refKey","ref"],sft=["item","index","refKey","ref","onMouseMove","onClick","onPress"],lft=["onClick","onPress","refKey","ref"],uft=["onKeyDown","onChange","onInput","onBlur","onChangeText","refKey","ref"],cft=["refKey","ref"];function hft(t){void 0===t&&(t={}),rft(t,hft);var e=Kc({},ift,t),n=e.initialIsOpen,r=e.defaultIsOpen,i=e.items,o=e.scrollIntoView,a=e.environment,s=e.getA11yStatusMessage,l=e.getA11ySelectionMessage,u=e.itemToString,c=function(t){var e=Kdt(t),n=e.selectedItem,r=e.inputValue;return""===r&&n&&void 0===t.defaultInputValue&&void 0===t.initialInputValue&&void 0===t.inputValue&&(r=t.itemToString(n)),Kc({},e,{inputValue:r})}(e),h=function(t,e,n){var r=(0,k.useRef)(),i=qdt(t,e,n),o=i[0],a=i[1];return(0,k.useEffect)((function(){Tdt(n,"selectedItem")&&(r.current!==n.selectedItem&&a({type:19,inputValue:n.itemToString(n.selectedItem)}),r.current=o.selectedItem===r.current?n.selectedItem:o.selectedItem)})),[Pdt(o,n),a]}(oft,c,e),d=h[0],f=h[1],p=d.isOpen,m=d.highlightedIndex,g=d.selectedItem,y=d.inputValue,v=(0,k.useRef)(null),b=(0,k.useRef)({}),w=(0,k.useRef)(null),x=(0,k.useRef)(null),M=(0,k.useRef)(null),S=(0,k.useRef)(!0),C=Ddt(e),P=(0,k.useRef)(),T=Wdt({state:d,props:e}),A=(0,k.useCallback)((function(t){return b.current[C.getItemId(t)]}),[C]);_dt(s,[p,m,y,i],Kc({isInitialMount:S.current,previousResultCount:P.current,items:i,environment:a,itemToString:u},d)),_dt(l,[g],Kc({isInitialMount:S.current,previousResultCount:P.current,items:i,environment:a,itemToString:u},d));var N=$dt({menuElement:v.current,highlightedIndex:m,isOpen:p,itemRefs:b,scrollIntoView:o,getItemNodeFromIndex:A});tft({isInitialMount:S.current,props:e,state:d}),(0,k.useEffect)((function(){(n||r||p)&&w.current&&w.current.focus()}),[]),(0,k.useEffect)((function(){S.current||(P.current=i.length)}));var O=Jdt(p,[M,v,x],a,(function(){f({type:7,selectItem:!1})})),j=Qdt();(0,k.useEffect)((function(){S.current=!1}),[]),(0,k.useEffect)((function(){p||(b.current={})}),[p]);var E=(0,k.useMemo)((function(){return{ArrowDown:function(t){t.preventDefault(),f({type:0,shiftKey:t.shiftKey,getItemNodeFromIndex:A})},ArrowUp:function(t){t.preventDefault(),f({type:1,shiftKey:t.shiftKey,getItemNodeFromIndex:A})},Home:function(t){T.current.state.isOpen&&(t.preventDefault(),f({type:3,getItemNodeFromIndex:A}))},End:function(t){T.current.state.isOpen&&(t.preventDefault(),f({type:4,getItemNodeFromIndex:A}))},Escape:function(){var t=T.current.state;(t.isOpen||t.inputValue||t.selectedItem||t.highlightedIndex>-1)&&f({type:2})},Enter:function(t){var e=T.current.state;!e.isOpen||e.highlightedIndex<0||229===t.which||(t.preventDefault(),f({type:5,getItemNodeFromIndex:A}))}}}),[f,T,A]),V=(0,k.useCallback)((function(t){return Kc({id:C.labelId,htmlFor:C.inputId},t)}),[C]),I=(0,k.useCallback)((function(t,e){var n,r=void 0===t?{}:t,i=r.onMouseLeave,o=r.refKey,a=void 0===o?"ref":o,s=r.ref,l=ddt(r,aft),u=(void 0===e?{}:e).suppressRefError;return j("getMenuProps",void 0!==u&&u,a,v),Kc(((n={})[a]=kdt(s,(function(t){v.current=t})),n.id=C.menuId,n.role="listbox",n["aria-labelledby"]=C.labelId,n.onMouseLeave=Mdt(i,(function(){f({type:8})})),n),l)}),[f,j,C]),R=(0,k.useCallback)((function(t){var e,n,r=void 0===t?{}:t,i=r.item,o=r.index,a=r.refKey,s=void 0===a?"ref":a,l=r.ref,u=r.onMouseMove,c=r.onClick;r.onPress;var h=ddt(r,sft),d=T.current,p=d.props,m=d.state,g=Fdt(o,i,p.items);if(g<0)throw new Error("Pass either item or item index in getItemProps!");var y=c;return Kc(((e={})[s]=kdt(l,(function(t){t&&(b.current[C.getItemId(g)]=t)})),e.role="option",e["aria-selected"]=""+(g===m.highlightedIndex),e.id=C.getItemId(g),e),!h.disabled&&((n={onMouseMove:Mdt(u,(function(){o!==m.highlightedIndex&&(N.current=!1,f({type:9,index:o}))}))}).onClick=Mdt(y,(function(){f({type:10,index:o}),w.current&&w.current.focus()})),n),h)}),[f,T,N,C]),z=(0,k.useCallback)((function(t){var e,n=void 0===t?{}:t,r=n.onClick;n.onPress;var i=n.refKey,o=void 0===i?"ref":i,a=n.ref,s=ddt(n,lft);return Kc(((e={})[o]=kdt(a,(function(t){x.current=t})),e.id=C.toggleButtonId,e.tabIndex=-1,e),!s.disabled&&Kc({},{onClick:Mdt(r,(function(){f({type:11}),!T.current.state.isOpen&&w.current&&w.current.focus()}))}),s)}),[f,T,C]),L=(0,k.useCallback)((function(t,e){var n,r=void 0===t?{}:t,i=r.onKeyDown,o=r.onChange,a=r.onInput,s=r.onBlur;r.onChangeText;var l=r.refKey,u=void 0===l?"ref":l,c=r.ref,h=ddt(r,uft),d=(void 0===e?{}:e).suppressRefError;j("getInputProps",void 0!==d&&d,u,w);var p,m=T.current.state,g={};h.disabled||((p={}).onChange=Mdt(o,a,(function(t){f({type:6,inputValue:t.target.value})})),p.onKeyDown=Mdt(i,(function(t){var e=Adt(t);e&&E[e]&&E[e](t)})),p.onBlur=Mdt(s,(function(){m.isOpen&&!O.current.isMouseDown&&f({type:7,selectItem:!0})})),g=p);return Kc(((n={})[u]=kdt(c,(function(t){w.current=t})),n.id=C.inputId,n["aria-autocomplete"]="list",n["aria-controls"]=C.menuId,n),m.isOpen&&m.highlightedIndex>-1&&{"aria-activedescendant":C.getItemId(m.highlightedIndex)},{"aria-labelledby":C.labelId,autoComplete:"off",value:m.inputValue},g,h)}),[f,E,T,O,j,C]),H=(0,k.useCallback)((function(t,e){var n,r=void 0===t?{}:t,i=r.refKey,o=void 0===i?"ref":i,a=r.ref,s=ddt(r,cft),l=(void 0===e?{}:e).suppressRefError;return j("getComboboxProps",void 0!==l&&l,o,M),Kc(((n={})[o]=kdt(a,(function(t){M.current=t})),n.role="combobox",n["aria-haspopup"]="listbox",n["aria-owns"]=C.menuId,n["aria-expanded"]=T.current.state.isOpen,n),s)}),[T,j,C]),B=(0,k.useCallback)((function(){f({type:12})}),[f]),D=(0,k.useCallback)((function(){f({type:14})}),[f]),F=(0,k.useCallback)((function(){f({type:13})}),[f]),U=(0,k.useCallback)((function(t){f({type:15,highlightedIndex:t})}),[f]),W=(0,k.useCallback)((function(t){f({type:16,selectedItem:t})}),[f]);return{getItemProps:R,getLabelProps:V,getMenuProps:I,getInputProps:L,getComboboxProps:H,getToggleButtonProps:z,toggleMenu:B,openMenu:F,closeMenu:D,setHighlightedIndex:U,setInputValue:(0,k.useCallback)((function(t){f({type:17,inputValue:t})}),[f]),selectItem:W,reset:(0,k.useCallback)((function(){f({type:18})}),[f]),highlightedIndex:m,isOpen:p,selectedItem:g,inputValue:y}}hft.stateChangeTypes=nft;qh().array,qh().array,qh().array,qh().func,qh().func,qh().func,qh().number,qh().number,qh().number,qh().func,qh().func,qh().string,qh().string,qh().shape({addEventListener:qh().func,removeEventListener:qh().func,document:qh().shape({getElementById:qh().func,activeElement:qh().any,body:qh().any})});const dft=pn.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: ${t=>t.height?t.height:"auto"};
  overflow: hidden;

  /* title of dropdown */
  .label {
    margin: 1rem 0;
    display: block;
  }

  /* input element of dropdown */
  .input-wrap {
    border: 1px solid ${Sc};
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    box-sizing: border-box;
    border-radius: 1rem;
    padding: 0.1rem 0.75rem;
    margin: 0.25rem 0;
  }

  .input {
    border: none;
    box-sizing: border-box;
    padding-left: 0.75rem;
    flex-grow: 1;
  }
`,fft=pn.button`
  color: ${rc};
  box-sizing: border-box;
  position: absolute;
  right: 0.5rem;
  top: 0.4rem;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`,pft=pn.div`
  border: 1px solid ${Sc};
  position: relative;
  box-sizing: border-box;
  margin: 0.75rem 0 0;
  width: 100%;
  border-radius: 0.75rem;
  z-index: 1;
  height: 148px;
  padding: 0.25rem;
  overflow: auto;
  display: flex;
  flex-flow: row wrap;
  flex: 1;
  border-radius: 1rem;

  .wrapper {
    position: relative;
    width: 240px;
    height: 130px;
    margin: 0.25rem;

    .item {
      background: ${xc};
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 0.65rem 1rem;
      cursor: pointer;
      border-radius: 0.75rem;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: flex-start;
      flex-grow: 1;
      overflow: hidden;

      > .title {
        box-sizing: border-box;
        display: flex;
        flex-flow: row wrap;
        max-width: 100%;

        h3 {
          box-sizing: border-box;
          display: inline-block;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }

      &:first-child {
        margin-left: 0rem;
      }
      &:last-child {
        margin-right: 0rem;
      }
      p {
        color: ${rc};
        margin: 0.15rem 0 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        flex: 1;
      }
      .icon {
        margin-bottom: 0.7rem;
      }
    }
  }
`,mft=t=>{var e;const{items:n,onChange:r,placeholder:i,value:o}=t,[a,s]=(0,k.useState)(n);(0,k.useEffect)((()=>{s(n)}),[n]);const l=hft({items:a,itemToString:t=>{var e;return null!==(e=null===t||void 0===t?void 0:t.name)&&void 0!==e?e:""},onSelectedItemChange:r,initialSelectedItem:o,onInputValueChange:t=>{let{inputValue:e}=t;s(n.filter((t=>{var n;return!e||(null===t||void 0===t||null===(n=t.name)||void 0===n?void 0:n.toLowerCase().startsWith(null===e||void 0===e?void 0:e.toLowerCase()))})))}});return(0,Jd.jsx)(dft,{children:(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("div",{style:{position:"relative"},children:[(0,Jd.jsxs)("div",{className:"input-wrap",...l.getComboboxProps(),children:[null!==o&&(0,Jd.jsx)(ort,{value:null!==(e=null===o||void 0===o?void 0:o.address)&&void 0!==e?e:"",size:dg("2rem")}),(0,Jd.jsx)("input",{...l.getInputProps({placeholder:i}),className:"input"})]}),l.selectedItem&&(0,Jd.jsx)(fft,{onClick:()=>l.reset(),"aria-label":"clear selection",children:(0,Jd.jsx)(tw,{transform:"grow-2",icon:xx})}),(0,Jd.jsx)(pft,{...l.getMenuProps(),children:a.map(((t,e)=>(0,Jd.jsx)(gft,{c:l,item:t,index:e},`controller_acc_${e}`)))})]})})})},gft=t=>{var e,n;let{c:r,item:i,index:o}=t;const{network:a}=u$(),{mode:s}=Og(),l=i.active?r.getItemProps({index:o,item:i}):{},u=(null===(e=r.selectedItem)||void 0===e?void 0:e.address)===(null===i||void 0===i?void 0:i.address)?tc[`${a.name}-${s}`]:Qu.text.primary[s],c=(null===(n=r.selectedItem)||void 0===n?void 0:n.address)===(null===i||void 0===i?void 0:i.address)?`2px solid ${tc[`${a.name}-${s}`]}`:`2px solid ${Qu.transparent[s]}`,h=i.active?1:.1;return(0,Jd.jsxs)("div",{className:"wrapper",...l,children:[!i.active&&(0,Jd.jsx)(Hct,{status:"sync_or_setup",title:i.alert,topOffset:"40%"}),(0,Jd.jsxs)("div",{className:"item",style:{color:u,border:c,opacity:h},children:[(0,Jd.jsx)("div",{className:"icon",children:(0,Jd.jsx)(ort,{value:i.address,size:40})}),(0,Jd.jsx)("div",{className:"title",children:(0,Jd.jsx)("h3",{style:{color:u},children:i.name})}),(0,Jd.jsx)("p",{children:hg(i.address)})]})]},i.name)},yft=t=>{const{section:e}=t,{network:n}=u$(),{units:r}=n,{activeAccount:i,accounts:o,getAccount:a}=btt(),{getAccountBalance:s,minReserve:l,isController:u}=Ntt(),{getSetupProgress:c,setActiveAccountSetup:h}=$tt(),d=c(i),f=null!==d.controller?d.controller:null,[p,m]=(0,k.useState)(a(f));(0,k.useEffect)((()=>{const t=a(null!==d.controller?d.controller:null);m(t)}),[i,o]);let g=o.filter((t=>!u(t.address)));return g=g.filter((t=>t.address!==i)),g=g.map((t=>{const e=s(t.address);return{...t,balance:e,active:pg(e.free.toNumber(),r)>=pg(l.toNumber(),r),alert:`Not Enough ${n.unit}`}})),g=g.sort(((t,e)=>e.balance.free.sub(t.balance.free).toNumber())),(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(ldt,{thisSection:e,title:"Set Controller Account",assistantPage:"stake",assistantKey:"Stash and Controller Accounts",complete:null!==d.controller}),(0,Jd.jsxs)(cdt,{thisSection:e,activeSection:d.section,children:[(0,Jd.jsx)(Yct,{}),(0,Jd.jsx)(mft,{items:g,onChange:t=>{var e;let{selectedItem:n}=t;m(n),h({...d,controller:null!==(e=null===n||void 0===n?void 0:n.address)&&void 0!==e?e:null})},placeholder:"Search Account",value:p}),(0,Jd.jsx)(udt,{complete:null!==d.controller})]})]})},vft=pn.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;

  > div:last-child {
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    padding: 0.5rem 1rem;
  }
`,bft=pn.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  > section {
    flex: 1;

    h3 {
      margin: 0;
    }

    input {
      max-width: 100%;
      margin-top: 0.5rem;
      border: none;
      background: ${pc};
      border-radius: 0.75rem;
      padding: 0.75rem;
    }
  }
`,wft=t=>{var e,n,r;const i=null!==(e=t.setters)&&void 0!==e?e:[],{disabled:o,freeToBond:a,freeToUnbondToMin:s}=t,l=null!==(n=t.task)&&void 0!==n?n:"bond",u=null!==(r=t.value)&&void 0!==r?r:0,{network:c}=u$(),{activeAccount:h}=btt(),[d,f]=(0,k.useState)(u),p=t=>{for(const e of i)e.set({...e.current,bond:t})};return(0,k.useEffect)((()=>{var e;f(null!==(e=t.defaultValue)&&void 0!==e?e:0)}),[h]),(0,Jd.jsxs)(vft,{children:[(0,Jd.jsx)("div",{children:(0,Jd.jsx)(bft,{children:(0,Jd.jsxs)("section",{style:{opacity:o?.5:1},children:[(0,Jd.jsxs)("h3",{children:["unbond"===l?"Unbond":"Bond"," ",c.unit,":"]}),(0,Jd.jsx)("input",{type:"text",placeholder:`0 ${c.unit}`,value:d,onChange:t=>{"bond"===l?(t=>{const{value:e}=t.target;(Sg(e)||""===e)&&(f(e),p(e))})(t):(t=>{if(!t)return;const e=t.currentTarget.value;(Sg(e)||""===e)&&(f(e),p(e))})(t)},disabled:o})]})})}),(0,Jd.jsx)("div",{children:(0,Jd.jsx)("div",{children:(0,Jd.jsx)(Jct,{inline:!0,small:!0,title:"Max",onClick:()=>{const t="bond"===l?a:s;f(t),p(t)}})})})]})},xft=pn.div`
  width: 100%;
  height: 1px;
  margin: 0.75rem 0;
`,Mft=pn.div`
  background: ${pc};
  margin: 0.6rem 0;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  > h4 {
    margin: 0;

    .icon {
      color: rgba(255, 144, 0, 1);
      margin-right: 0.4rem;
    }
  }
`,kft=t=>{const{text:e}=t;return(0,Jd.jsx)(Mft,{children:(0,Jd.jsxs)("h4",{children:[(0,Jd.jsx)(tw,{icon:sx,transform:"shrink-2",className:"icon"}),e]})})},Sft=t=>{var e,n,r,i;const{bondType:o,defaultBond:a,unbond:s}=t,l=null!==(e=t.nominating)&&void 0!==e&&e,u=null!==(n=t.warnings)&&void 0!==n?n:[],c=null!==(r=t.setters)&&void 0!==r?r:[],h=null!==(i=t.listenIsValid)&&void 0!==i?i:()=>{},{network:d}=u$(),{activeAccount:f}=btt(),{staking:p,getControllerNotImported:m}=Rtt(),{getLedgerForStash:g,getBondedAccount:y,getBondOptions:v}=Ntt(),{getPoolBondOptions:b}=Gtt(),{stats:w}=Wtt(),{minJoinBond:x}=w,{units:M}=d,S=y(f),C=g(f),{active:P}=C,{minNominatorBond:T}=p,A="pool"===o?b(f):v(f),{freeToBond:N,freeToUnbond:O,active:j}=A,E=mg(N,M),V=mg("pool"===o?x:T,M),I=mg("pool"===o?sf().max(O.sub(x),new(sf())(0)):sf().max(O.sub(T),new(sf())(0)),M),R=mg("pool"===o?j:P,M),[z,L]=(0,k.useState)([]),[H,B]=(0,k.useState)({bond:a}),[D,F]=(0,k.useState)(!1);c.push({set:B,current:H}),(0,k.useEffect)((()=>{B({bond:a})}),[f]),(0,k.useEffect)((()=>{U()}),[H]);const U=()=>{let t=!1;const e=u;s||(0===E&&(t=!0,e.push(`You have no free ${d.unit} to bond.`)),""!==H.bond&&H.bond>E&&e.push("Bond amount is more than your free balance."),l&&(E<V&&(t=!0,e.push(`You do not meet the minimum bond of ${V} ${d.unit}.`)),""!==H.bond&&H.bond<V&&e.push(`Bond amount must be at least ${V} ${d.unit}.`))),s&&(""!==H.bond&&H.bond>R&&e.push("Unbond amount is more than your bonded balance."),"stake"===o&&m(S)&&e.push("You must have your controller account imported to unbond."),""!==H.bond&&H.bond>I&&e.push(`A minimum bond of ${V} ${d.unit} is required when ${"stake"===o?"actively nominating":"in your pool"}.`));const n=!e.length&&""!==H.bond;F(t),h(n),L(e)};return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(Hx,{children:(0,Jd.jsxs)("h4",{children:[s?"Bonded":"Available",":"," ",vg(s?R:E)," ",d.unit]})}),z.map(((t,e)=>(0,Jd.jsx)(kft,{text:t},`setup_error_${e}`))),(0,Jd.jsx)(xft,{}),(0,Jd.jsx)(wft,{task:s?"unbond":"bond",value:H.bond,defaultValue:a,disabled:D,setters:c,freeToBond:E,freeToUnbondToMin:I})]})},Cft=pn.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 1rem;

  .bars {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: 1rem;

    > section {
      box-sizing: border-box;
      padding: 0 0.15rem;

      &:nth-child(1) {
        flex-basis: 15%;
      }
      &:nth-child(2) {
        flex-basis: 40%;
      }
      &:nth-child(3) {
        flex-basis: 45%;
      }
      h4,
      h5 {
        color: ${ic};
      }

      h4 {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        margin-bottom: 0.4rem;
      }
      h5 {
        margin: 0;
        position: relative;
        opacity: 0.75;
      }
      .bar {
        background: ${pc};
        width: 100%;
        padding: 0.4rem 0.5rem;
        overflow: hidden;
        position: relative;
        transition: background 0.15s;
      }
      &:first-child .bar {
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        h5 {
          margin-left: 0.25rem;
        }
      }
      &:last-child .bar {
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }

      &.invert {
        h4 {
          color: ${Rc};
        }
        h5 {
          opacity: 1;
          color: white;
        }
        .bar {
          background: ${Rc};
        }
      }
    }
  }
`,Pft=t=>{const{value:e}=t,{network:n}=u$(),{staking:r,eraStakers:i}=Rtt(),{isSyncing:o}=$tt(),{unit:a,units:s}=n,{minNominatorBond:l}=r,{minActiveBond:u}=i,c=mg(l,s),h=e>=c,d=e>=u;return(0,Jd.jsx)(Cft,{children:(0,Jd.jsxs)("div",{className:"bars",children:[(0,Jd.jsxs)("section",{className:h&&!o?"invert":"",children:[(0,Jd.jsx)("h4",{children:"\xa0"}),(0,Jd.jsx)("div",{className:"bar",children:(0,Jd.jsx)("h5",{children:"Inactive"})})]}),(0,Jd.jsxs)("section",{className:h&&!o?"invert":"",children:[(0,Jd.jsxs)("h4",{children:[(0,Jd.jsx)(tw,{icon:Px,transform:"shrink-4"}),"\xa0 Nominate \xa0",(0,Jd.jsx)(wrt,{page:"stake",title:"Nominating"})]}),(0,Jd.jsx)("div",{className:"bar",children:(0,Jd.jsxs)("h5",{children:[c," ",a]})})]}),(0,Jd.jsxs)("section",{className:d&&!o?"invert":"",children:[(0,Jd.jsxs)("h4",{children:[(0,Jd.jsx)(tw,{icon:Px,transform:"shrink-4"}),"\xa0Active \xa0",(0,Jd.jsx)(wrt,{page:"stake",title:"Active Bond Threshold"})]}),(0,Jd.jsx)("div",{className:"bar",children:(0,Jd.jsx)("h5",{children:o?"...":`${u} ${a}`})})]})]})})},Tft=t=>{const{network:e}=u$(),{units:n}=e,{section:r}=t,{activeAccount:i}=btt(),{getBondOptions:o}=Ntt(),{getSetupProgress:a,setActiveAccountSetup:s}=$tt(),{freeToBond:l}=o(i),u=a(i),c=0===u.bond?mg(l,n):u.bond,[h,d]=(0,k.useState)({bond:c}),[f,p]=(0,k.useState)(!1);return(0,k.useEffect)((()=>{d({bond:c})}),[i]),(0,k.useEffect)((()=>{4===u.section&&s({...u,bond:c})}),[u.section]),(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(ldt,{thisSection:r,complete:0!==u.bond,title:"Bond",assistantPage:"stake",assistantKey:"Bonding"}),(0,Jd.jsxs)(cdt,{thisSection:r,activeSection:u.section,children:[(0,Jd.jsx)(Sft,{bondType:"stake",nominating:!0,unbond:!1,listenIsValid:p,defaultBond:c,setters:[{set:s,current:u},{set:d,current:h}]}),(0,Jd.jsx)(Pft,{value:h.bond}),(0,Jd.jsx)(udt,{complete:f})]})]})},Aft=pn.div`
  position: relative;
  box-sizing: border-box;
  margin: 0.75rem 0 0;
  width: 100%;
  border-radius: 0.75rem;
  padding: 0.25rem;
  overflow: auto;
  display: flex;
  flex-flow: row wrap;
  flex: 1;
`,Nft=pn.button`
  background: ${xc};
  border: 2px solid
    ${t=>t.selected?Rc:xc};
  box-sizing: border-box;
  width: 240px;
  height: 120px;
  padding: 1.25rem;
  margin: 0.25rem;
  border-radius: 0.75rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;

  > div {
    width: 100%;
  }
  h3 {
    color: ${t=>t.selected?Rc:rc};
    font-size: 1.2rem;
  }
  &:first-child {
    margin-left: 0rem;
  }
  &:last-child {
    margin-right: 0rem;
  }
  p {
    color: ${ic};
    margin-top: 0.4rem;
    text-align: left;
  }
`,Oft=t=>{const{section:e}=t,{activeAccount:n}=btt(),{getSetupProgress:r,setActiveAccountSetup:i}=$tt(),o=r(n),a=["Staked","Stash","Controller"],[s,l]=(0,k.useState)(o.payee);(0,k.useEffect)((()=>{l(o.payee)}),[n]);return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(ldt,{thisSection:e,complete:null!==o.payee,title:"Reward Destination",assistantPage:"stake",assistantKey:"Reward Destination"}),(0,Jd.jsxs)(cdt,{thisSection:e,activeSection:o.section,children:[(0,Jd.jsx)(Yct,{}),(0,Jd.jsx)(Aft,{children:[{title:"Back to Staking",subtitle:"Payouts are automatically bonded to your existing bonded balance.",index:0},{title:"To Stash",subtitle:"Payouts will be sent to your stash account as free balance.",index:1},{title:"To Controller",subtitle:"Payouts will be sent to your controller account as free balance.",index:2}].map(((t,e)=>(0,Jd.jsxs)(Nft,{selected:s===a[t.index],onClick:()=>{return e=t.index,void(Sg(e)&&(e>=a.length||(l(a[e]),i({...o,payee:a[e]}))));var e},children:[(0,Jd.jsx)("h3",{children:t.title}),(0,Jd.jsx)("div",{children:(0,Jd.jsx)("p",{children:t.subtitle})})]},`payee_option_${e}`)))}),(0,Jd.jsx)(udt,{complete:null!==o.payee})]})]})},jft=k.createContext({addPending:t=>{},removePending:t=>{},pending:[]}),Eft=()=>k.useContext(jft),Vft=t=>{var e;const{tx:n,shouldSubmit:r,callbackSubmit:i,callbackInBlock:o}=t;let{from:a}=t;a=null!==(e=a)&&void 0!==e?e:"";const{api:s}=u$(),{addNotification:l}=srt(),{addPending:u,removePending:c}=Eft(),{getAccount:h}=btt(),[d,f]=(0,k.useState)(!1),[p,m]=(0,k.useState)(null);(0,k.useEffect)((()=>{g()}),[t]);const g=async()=>{if(null===n)return;const t=await n.paymentInfo(a);m(t.partialFee.toHuman())};return{submitTx:async()=>{if(d||!r||!s)return;const t=h(a);if(null===t)return;const e=await s.rpc.system.accountNextIndex(a),{signer:p,source:m}=t,g=ytt(m);if(void 0===g)throw new Error("wallet not found");await g.enable(bt),f(!0);try{const t=await n.signAndSend(a,{signer:p},(n=>{let{status:r,nonce:a,events:s=[]}=n;r.isReady&&(u(e),l({title:"Pending",subtitle:"Transaction was initiated."}),i()),r.isInBlock&&(f(!1),c(e),l({title:"In Block",subtitle:"Transaction in block"}),o()),r.isFinalized&&s.forEach((n=>{let{phase:r,event:{data:i,method:o,section:a}}=n;"ExtrinsicSuccess"===o?(l({title:"Finalized",subtitle:"Transaction successful"}),t()):"ExtrinsicFailed"===o&&(l({title:"Failed",subtitle:"Error with transaction"}),f(!1),c(e),t())}))}))}catch(pdt){f(!1),c(e),l({title:"Cancelled",subtitle:"Transaction was cancelled"})}},estimatedFee:p,submitting:d}},Ift=pn.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1rem;

  > section {
    flex-basis: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-end;
    border-bottom: 1px solid ${Sc};
    margin-top: 1rem;
    padding: 0.5rem 0 0.75rem 0;

    > div:first-child {
      width: 200px;
      display: flex;
      flex-flow: row wrap;
      align-items: flex-end;

      svg {
        color: ${Rc};
      }
    }

    > div:last-child {
      flex-grow: 1;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
  }
`,Rft=t=>{const{section:e}=t,{api:n,network:r}=u$(),{units:i}=r,{activeAccount:o,accountHasSigner:a}=btt(),{getSetupProgress:s}=$tt(),l=s(o),{controller:u,bond:c,nominations:h,payee:d}=l,{submitTx:f,estimatedFee:p,submitting:m}=Vft({tx:(()=>{if(!o||!n)return null;const t={Id:o},e=c*10**i,r=h.map((t=>({Id:t.address}))),a={Id:u},s=[n.tx.staking.bond(t,e,d),n.tx.staking.nominate(r),n.tx.staking.setController(a)];return n.tx.utility.batch(s)})(),from:o,shouldSubmit:!0,callbackSubmit:()=>{},callbackInBlock:()=>{}});return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(ldt,{thisSection:e,complete:null,title:"Summary"}),(0,Jd.jsxs)(cdt,{thisSection:e,activeSection:l.section,children:[!a(o)&&(0,Jd.jsx)(kft,{text:"Your account is read only, and cannot sign transactions."}),(0,Jd.jsxs)(Ift,{children:[(0,Jd.jsxs)("section",{children:[(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)(tw,{icon:kx,transform:"grow-1"})," ","\xa0 Controller:"]}),(0,Jd.jsx)("div",{children:u})]}),(0,Jd.jsxs)("section",{children:[(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)(tw,{icon:kx,transform:"grow-1"})," ","\xa0 Reward Destination:"]}),(0,Jd.jsx)("div",{children:d})]}),(0,Jd.jsxs)("section",{children:[(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)(tw,{icon:kx,transform:"grow-1"})," ","\xa0 Nominations:"]}),(0,Jd.jsx)("div",{children:h.length})]}),(0,Jd.jsxs)("section",{children:[(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)(tw,{icon:kx,transform:"grow-1"})," ","\xa0 Bond Amount:"]}),(0,Jd.jsxs)("div",{children:[vg(c)," ",r.unit]})]}),(0,Jd.jsxs)("section",{children:[(0,Jd.jsx)("div",{children:"Estimated Tx Fee:"}),(0,Jd.jsx)("div",{children:null===p?"...":`${p}`})]})]}),(0,Jd.jsx)("div",{style:{flex:1,flexDirection:"row",width:"100%",display:"flex",justifyContent:"end"},children:(0,Jd.jsx)(Jct,{onClick:()=>f(),disabled:m||!a(o),title:"Start Staking",primary:!0})})]})]})},zft=t=>{let{title:e}=t;const{setOnSetup:n}=$tt();return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(iet,{title:`${e} Setup`}),(0,Jd.jsx)(qc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Jd.jsx)(qct,{children:(0,Jd.jsx)(Jct,{inline:!0,title:"Go Back",icon:uw,transform:"shrink-3",onClick:()=>n(0)})})}),(0,Jd.jsx)(qc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Jd.jsxs)(Bx,{children:[(0,Jd.jsx)(sdt.W_,{name:"controller",style:{position:"absolute"}}),(0,Jd.jsx)(yft,{section:1})]})}),(0,Jd.jsx)(qc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Jd.jsxs)(Bx,{children:[(0,Jd.jsx)(sdt.W_,{name:"payee",style:{position:"absolute"}}),(0,Jd.jsx)(Oft,{section:2})]})}),(0,Jd.jsx)(qc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Jd.jsxs)(Bx,{children:[(0,Jd.jsx)(sdt.W_,{name:"nominate",style:{position:"absolute"}}),(0,Jd.jsx)(hdt,{section:3})]})}),(0,Jd.jsx)(qc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Jd.jsxs)(Bx,{children:[(0,Jd.jsx)(sdt.W_,{name:"bond",style:{position:"absolute"}}),(0,Jd.jsx)(Tft,{section:4})]})}),(0,Jd.jsx)(qc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Jd.jsxs)(Bx,{children:[(0,Jd.jsx)(sdt.W_,{name:"summary",style:{position:"absolute"}}),(0,Jd.jsx)(Rft,{section:5})]})})]})},Lft=t=>{const{page:e}=t,{title:n}=e,{onSetup:r,setOnSetup:i}=$tt();return(0,Jd.jsx)(Wct,{children:r?(0,Jd.jsx)(zft,{title:n,setOnSetup:i}):(0,Jd.jsx)(adt,{title:n,setOnSetup:i})})},Hft=k.createContext({setActiveTab:t=>{},activeTab:0}),Bft=()=>k.useContext(Hft),Dft=t=>{let{children:e}=t;const[n,r]=(0,k.useState)(0);return(0,Jd.jsx)(Hft.Provider,{value:{activeTab:n,setActiveTab:t=>{r(t)}},children:e})},Fft=pn(Yu.div)`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 3.2rem;
  position: relative;
  padding: 0.5rem;
  margin: 0.5rem;

  > div {
    background: ${fc};
    box-sizing: border-box;
    padding: 0.6rem;
    flex: 1;
    border-radius: 0.75rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    h3 {
      margin: 0 0.75rem;
      border-right: 1px solid ${Cc};
      padding-right: 1rem;
    }

    .identity {
      position: relative;
      display: flex;
      margin-left: 0.75rem;
      margin-right: 0.5rem;
      flex-flow: row wrap;
      align-items: center;
      align-content: center;
      overflow: hidden;
      flex: 1;

      h4 {
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .labels {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      align-items: center;
      flex-grow: 1;
      flex-flow: row nowrap;

      .join {
        color: ${Rc};
      }

      .label {
        color: ${ic};
        display: flex;
        align-items: center;
        margin-left: 1rem;
        .icon {
          margin-right: 0.4rem;
        }
        &.warning {
          color: #d2545d;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
        }
        button {
          color: ${ic};
          &:hover {
            opacity: 0.75;
          }
          &.active {
            color: ${Rc};
          }
          &:disabled {
            opacity: 0.25;
          }
        }
      }
    }

    svg {
      margin: 0;
    }
  }
`,Uft=t=>{var e,n,r,i;const{pool:o,batchKey:a,batchIndex:s}=t,{memberCounter:l,addresses:u,id:c}=o,{openModalWith:h}=tht(),{activeAccount:d,isReadOnlyAccount:f}=btt(),{meta:p}=Xtt(),{isBonding:m}=Gtt(),{setActiveTab:g}=Bft(),y=null!==(e=null===(n=p[a])||void 0===n?void 0:n.metadata)&&void 0!==e?e:[],v=null!==(r=y.length>0)&&void 0!==r&&r,b=hg(u.stash);let w=null!==(i=y[s])&&void 0!==i?i:b;const x=Pp(q1(w));return""!==x&&(w=x),""===w&&(w=b),(0,Jd.jsx)(Fft,{children:(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)(ort,{value:u.stash,size:26}),v?(0,Jd.jsx)(Yu.div,{className:"identity",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:(0,Jd.jsx)("h4",{children:w})}):(0,Jd.jsx)(Yu.div,{className:"identity",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:(0,Jd.jsx)("h4",{children:hg(u.stash)})}),(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("div",{className:"labels",children:[(0,Jd.jsxs)("div",{className:"label stat",children:[(0,Jd.jsx)(tw,{icon:Lw}),"\xa0",c]}),(0,Jd.jsx)(Yu.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.1},children:(0,Jd.jsxs)("div",{className:"label",children:[(0,Jd.jsx)(tw,{icon:vx,className:"icon"}),l]})}),!m()&&(0,Jd.jsx)("div",{className:"label",children:(0,Jd.jsx)("button",{type:"button",disabled:f(d)||!d,onClick:()=>h("JoinPool",{id:c,setActiveTab:g},"small"),children:(0,Jd.jsx)(tw,{icon:bw,transform:"grow-4",className:"join"})})})]})})]})})},Wft=k.createContext({setListFormat:t=>{},listFormat:"col"}),qft=t=>{let{children:e}=t;const[n,r]=(0,k.useState)("col");return(0,Jd.jsx)(Wft.Provider,{value:{setListFormat:t=>{r(t)},listFormat:n},children:e})},Xft=t=>{var e;const{allowMoreCols:n,pagination:r,batchKey:i}=t,o=null!==(e=t.disableThrottle)&&void 0!==e&&e,a=void 0!==t.refetchOnListUpdate&&t.refetchOnListUpdate,{mode:s}=Og(),{isReady:l,network:u}=u$(),{metrics:c}=Mtt(),{fetchPoolsMetaBatch:h}=Xtt(),{listFormat:d,setListFormat:f}=k.useContext(Wft),[p,m]=(0,k.useState)(1),[g,y]=(0,k.useState)(1),[v,b]=(0,k.useState)(t.pools),[w,x]=(0,k.useState)(t.pools),[M,S]=(0,k.useState)(!1),C=(0,k.useRef)(g),P=Math.ceil(w.length/Et),T=p+1>P?P:p+1,A=p-1<1?1:p-1,N=p*Et-1,O=N-49,j=30*g-1;(0,k.useEffect)((()=>{t.pools!==v&&S(!1)}),[t.pools]),(0,k.useEffect)((()=>{l&&0!==c.activeEra.index&&!M&&E()}),[l,M,c.activeEra.index]);const E=()=>{b(t.pools),x(t.pools),S(!0),h(i,t.pools,a)};(0,k.useEffect)((()=>{j>=N||o||setTimeout((()=>{var t;t=C.current+1,C.current=t,y(t)}),500)}),[C.current]);let V=[];return V=o?w:w.slice(O).slice(0,Et),w.length?(0,Jd.jsxs)(Aht,{children:[(0,Jd.jsxs)(Nht,{children:[(0,Jd.jsx)("div",{children:(0,Jd.jsx)("h4",{children:t.title})}),(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)("button",{type:"button",onClick:()=>f("row"),children:(0,Jd.jsx)(tw,{icon:iw,color:"row"===d?tc[`${u.name}-${s}`]:"inherit"})}),(0,Jd.jsx)("button",{type:"button",onClick:()=>f("col"),children:(0,Jd.jsx)(tw,{icon:zw,color:"col"===d?tc[`${u.name}-${s}`]:"inherit"})})]})]}),(0,Jd.jsxs)(Eht,{flexBasisLarge:n?"33.33%":"50%",children:[r&&(0,Jd.jsxs)(Oht,{prev:1!==p,next:p!==P,children:[(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("h4",{children:["Page",p," of ",P]})}),(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)("button",{type:"button",className:"prev",onClick:()=>{m(A)},children:"Prev"}),(0,Jd.jsx)("button",{type:"button",className:"next",onClick:()=>{m(T)},children:"Next"})]})]}),(0,Jd.jsx)(Yu.div,{className:"transition",initial:"hidden",animate:"show",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.01}}},children:V.map(((t,e)=>{const n=v.indexOf(t);return(0,Jd.jsx)(Yu.div,{className:"item "+("row"===d?"row":"col"),variants:{hidden:{y:15,opacity:0},show:{y:0,opacity:1}},children:(0,Jd.jsx)(Uft,{pool:t,batchKey:i,batchIndex:n})},`nomination_${e}`)}))})]})]}):(0,Jd.jsx)(Jd.Fragment,{})},Zft=t=>(0,Jd.jsx)(qft,{children:(0,Jd.jsx)(Yft,{...t})});class Yft extends k.Component{shouldComponentUpdate(t,e){return this.props.pools!==t.pools}render(){return(0,Jd.jsx)(Xft,{...this.props})}}Yft.contextType=Itt;const Kft=()=>{const{stats:t}=Wtt(),e={label:"Active Pools",value:t.counterForBondedPools.toNumber(),unit:"",assistant:{page:"pools",key:"Nomination Pools"}};return(0,Jd.jsx)(yct,{...e})},Gft=()=>{const{network:t}=u$(),{units:e}=t,{stats:n}=Wtt(),r={label:"Minimum Join Bond",value:mg(n.minJoinBond,e),unit:t.unit,assistant:{page:"pools",key:"Minimum Join Bond"}};return(0,Jd.jsx)(yct,{...r})},Jft=()=>{const{membership:t}=Ytt(),{isOwner:e}=Gtt(),n={label:"Pool Membership",value:null===t?"Not in Pool":e()?`Owner of Pool ${t.poolId}`:`In Pool ${t.poolId}`,unit:"",assistant:{page:"pools",key:"Nomination Pools"}};return(0,Jd.jsx)(vct,{...n})},Qft=()=>{const{network:t}=u$(),{units:e}=t,{stats:n}=Wtt(),r={label:"Minimum Create Bond",value:mg(n.minCreateBond,e),unit:t.unit,assistant:{page:"pools",key:"Minimum Create Bond"}};return(0,Jd.jsx)(yct,{...r})};let _ft;!function(t){t.Open="Open",t.Block="Blocked",t.Destroy="Destroying"}(_ft||(_ft={}));const $ft=()=>{var t,e,n;const{network:r,isReady:i}=u$(),{activeAccount:o,isReadOnlyAccount:a}=btt(),{units:s,unit:l}=r,{isSyncing:u}=$tt(),{membership:c}=Ytt(),{setActiveTab:h}=Bft(),{activeBondedPool:d,poolNominations:f,isOwner:p,getNominationsStatus:m,getPoolBondOptions:g}=Gtt(),{openModalWith:y}=tht(),{active:v}=g(o),b=m(),w=Object.values(b).filter((t=>"active"===t)).length,x=!(null===f||void 0===f||null===(t=f.targets)||void 0===t||!t.length),{label:M,buttons:k}=(()=>{let t,e;const n={title:"Create Pool",icon:bw,transform:"grow-1",disabled:!i||a(o)||!o,onClick:()=>y("CreatePool",{bondType:"pool"},"small")},r={title:"Join Pool",icon:mx,transform:"grow-1",disabled:!i||a(o)||!o,onClick:()=>h(1)},s={title:"Leave Pool",icon:Gw,disabled:!i||a(o),small:!0,onClick:()=>y("LeavePool",{bondType:"pool"},"small")},l={title:"Destroy Pool",icon:Cw,transform:"grow-1",disabled:!i||a(o),small:!0,onClick:()=>y("ChangePoolState",{bondType:"pool",state:_ft.Destroy},"small")},u={title:"Lock Pool",icon:Hw,transform:"grow-1",disabled:!i||a(o),small:!0,onClick:()=>y("ChangePoolState",{bondType:"pool",state:_ft.Block},"small")},f={title:"Unlock Pool",icon:Bw,transform:"grow-1",disabled:!i||a(o),small:!0,onClick:()=>y("ChangePoolState",{bondType:"pool",state:_ft.Open},"small")};if(c)if(p())switch(t=`Owner of Pool ${c.poolId}`,null===d||void 0===d?void 0:d.state){case _ft.Open:e=[l,u];break;case _ft.Block:e=[l,f];break;default:e=[]}else null!==v&&void 0!==v&&v.gtn(0)?(t=`Active in Pool ${c.poolId}`,e=[s]):t=`Leaving Pool ${c.poolId}`;else t="Not in a Pool",e=[n,r];return{label:t,buttons:e}})(),S=M;let{unclaimedReward:C}=d||{};C=null!==(e=C)&&void 0!==e?e:new(sf())(0);const P=`${mg(C,s)} ${l}`,T=C.gtn(0)?[{title:"Claim",icon:Uw,disabled:!i||a(o),small:!0,onClick:()=>y("ClaimReward",{bondType:"pool"},"small")}]:void 0,A=null!==(n=null===d||void 0===d?void 0:d.state)&&void 0!==n?n:null;let N;switch(A){case _ft.Block:N=Hw;break;case _ft.Destroy:N=sx;break;default:N=void 0}const O=A===_ft.Block?"Blocked / ":A===_ft.Destroy?"Destroying / ":"",j=u?"Inactive: Not Nominating":x?w?"Actively Nominating with Pool Funds":"Waiting for Active Nominations":"Inactive: Not Nominating";return(0,Jd.jsxs)(Bx,{height:"300",children:[(0,Jd.jsx)(rdt,{label:"Membership",assistant:["pools","Pool Status"],stat:S,buttons:u?[]:k}),(0,Jd.jsx)(Yc,{}),(0,Jd.jsx)(rdt,{label:"Unclaimed Rewards",assistant:["pools","Pool Rewards"],stat:P,buttons:u?[]:T}),c&&(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(Yc,{}),(0,Jd.jsx)(rdt,{icon:u?void 0:N,label:"Pool Status",assistant:["stake","Staking Status"],stat:`${O}${j}`})]})]})},tpt=()=>{const{network:t}=u$(),{units:e}=t,{openModalWith:n}=tht(),{activeAccount:r}=btt(),{isSyncing:i}=$tt(),{getPoolBondOptions:o,isBonding:a}=Gtt(),{active:s,freeToBond:l,totalUnlocking:u,totalUnlocked:c,totalUnlockChuncks:h}=o(r);return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsxs)(Hx,{children:[(0,Jd.jsxs)("h4",{children:["Bonded Funds",(0,Jd.jsx)(wrt,{page:"pools",title:"Bonded in Pool"})]}),(0,Jd.jsxs)("h2",{children:[vg(mg(s,e)),"\xa0",t.unit]}),(0,Jd.jsxs)(Kct,{children:[(0,Jd.jsx)(Jct,{small:!0,primary:!0,inline:!0,title:"+",disabled:i||!a(),onClick:()=>n("UpdateBond",{fn:"add",bondType:"pool"},"small")}),(0,Jd.jsx)(Jct,{small:!0,primary:!0,title:"-",disabled:i||!a(),onClick:()=>n("UpdateBond",{fn:"remove",bondType:"pool"},"small")}),(0,Jd.jsx)(Jct,{small:!0,inline:!0,primary:!0,icon:Bw,title:String(null!==h&&void 0!==h?h:0),disabled:i||!a(),onClick:()=>n("UnlockChunks",{bondType:"pool"},"small")})]})]}),(0,Jd.jsx)(Xht,{active:mg(s,e),unlocking:mg(u,e),unlocked:mg(c,e),free:mg(l,e),inactive:!a()})]})},ept=()=>{var t;const{isNominator:e,setTargets:n,targets:r,poolNominations:i}=Gtt(),{openModalWith:o}=tht(),a=!(null===i||void 0===i||null===(t=i.targets)||void 0===t||!t.length);return(0,Jd.jsx)(qc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Jd.jsx)(Bx,{children:e()&&!a?(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsxs)(Hx,{withAction:!0,children:[(0,Jd.jsxs)("h3",{children:["Generate Nominations",(0,Jd.jsx)(wrt,{page:"stake",title:"Nominations"})]}),(0,Jd.jsx)("div",{children:(0,Jd.jsx)(Jct,{small:!0,inline:!0,primary:!0,icon:mw,transform:"grow-1",title:"Nominate",disabled:!e(),onClick:()=>o("NominatePool",{},"small")})})]}),(0,Jd.jsx)(Yht,{batchKey:"generate_pool_nominations",nominations:r.nominations,setters:[{set:n,current:r}]})]}):(0,Jd.jsx)(qht,{bondType:"pool"})})})},npt=k.createContext({fetchAccountMetaBatch:(t,e,n)=>{},removeAccountMetaBatch:t=>{},meta:{}}),rpt=()=>k.useContext(npt),ipt=pn.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  padding-bottom: 0.5rem;
  margin-top: 1.25rem;

  .account {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: 0;

    button {
      color: ${rc};
    }

    .icon {
      position: relative;
      top: 0.1rem;
      margin-right: 0.5rem;
    }
    h4 {
      margin: 0;
      padding: 0;

      > .addr {
        opacity: 0.75;
      }
    }

    > :last-child {
      display: flex;
      flex-flow: row-reverse wrap;
      margin-left: 0.5rem;

      > .copy {
        color: ${ic};
        opacity: 0.5;
        cursor: pointer;
        transition: opacity 0.1s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`,opt=t=>{var e,n,r,i,o,a;const{address:s,last:l,batchKey:u,batchIndex:c}=t,{addNotification:h}=srt(),{meta:d}=rpt(),f=null!==(e=null===(n=d[u])||void 0===n?void 0:n.identities)&&void 0!==e?e:[],p=null!==(r=null===(i=d[u])||void 0===i?void 0:i.supers)&&void 0!==r?r:[],m=null!==(o=f.length>0)&&void 0!==o&&o,g=null!==(a=p.length>0)&&void 0!==a&&a,y=m&&g,v=lht(f[c],p[c]);let b={};return null!==s&&(b={title:"Address Copied to Clipboard",subtitle:s}),(0,Jd.jsx)(ipt,{last:l,children:(0,Jd.jsxs)(Yu.div,{className:"account",initial:{opacity:.5},animate:{opacity:1},transition:{duration:.3},children:[null===s?(0,Jd.jsx)("h4",{children:"Not Set"}):y&&null!==v?(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)("div",{className:"icon",children:(0,Jd.jsx)(irt,{value:s,size:"1.6rem"})}),(0,Jd.jsx)("h4",{children:v})]}):(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)("div",{className:"icon",children:(0,Jd.jsx)(irt,{value:s,size:"1.6rem"})}),(0,Jd.jsx)("h4",{children:hg(s)})]}),(0,Jd.jsx)("div",{children:(0,Jd.jsx)(Yu.div,{className:"copy",whileHover:{scale:1.02},whileTap:{scale:.97},children:null!==s&&(0,Jd.jsx)("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(s),h(b)},children:(0,Jd.jsx)(tw,{icon:Cx,transform:"grow-1"})})})})]})})},apt=pn.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin-top: 0.25rem;

  > section {
    box-sizing: border-box;
    flex: 1 1 25%;
    padding: 0 0.5rem;
    border-right: 1px solid ${Sc};

    @media (max-width: ${Nt}px) {
      flex-basis: 100%;
      border-right: none;
      border-bottom: 1px solid ${Sc};
      margin: 0.75rem 0;

      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
        border-bottom: 0;
      }
    }

    &:last-child {
      border-right: none;
    }

    .inner {
      flex: 1;
      box-sizing: border-box;
      padding: 0 0.5rem;

      @media (max-width: ${Nt}px) {
        padding: 0;
      }

      > h3 {
        display: flex;
        align-items: center;
        margin-bottom: 0rem;

        > .assistant-icon {
          margin-left: 0.5rem;
        }
      }
    }
  }
`,spt=pn.div`
  width: 100%;
  margin-top: 0.5rem;

  .input {
    box-sizing: border-box;
    border: 1px solid ${Sc};
    border-radius: 1rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: 0.25rem 0.5rem 0.25rem 1rem;

    > section {
      display: flex;
      flex-flow: column wrap;

      > input {
        box-sizing: border-box;
        width: 100%;
        border: none;
        padding-right: 1rem;
      }

      &:first-child {
        flex: 1;
      }
    }
  }
  h5 {
    margin: 0.75rem 0.25rem;
    &.neutral {
      color: ${ic};
      opacity: 0.8;
    }
    &.danger {
      color: ${ac};
    }
    &.success {
      color: ${sc};
    }
  }
`,lpt=t=>{let{setRoleEdit:e,roleEdit:n}=t;const{formatAccountSs58:r}=btt(),i=t=>{const i=(t=>{let e={newAddress:t,valid:""===t,reformatted:!1};if(Tg(t)){const n=r(t);e=n?{newAddress:n,valid:!0,reformatted:!0}:{newAddress:t,valid:!0,reformatted:!1}}return{...n,...e}})(t.currentTarget.value);e(i)};let o,a;return null!==n&&void 0!==n&&n.valid?null!==n&&void 0!==n&&n.reformatted&&(o="Address was reformatted",a="neutral"):(o="Address Invalid",a="danger"),(0,Jd.jsxs)(spt,{children:[(0,Jd.jsx)("div",{className:"input",children:(0,Jd.jsx)("section",{children:(0,Jd.jsx)("input",{placeholder:"Address",type:"text",onChange:t=>i(t),value:null===n||void 0===n?void 0:n.newAddress})})}),o&&(0,Jd.jsx)("h5",{className:a,children:o})]})},upt=()=>{var t,e,n,r;const{isReady:i}=u$(),{activeAccount:o,isReadOnlyAccount:a}=btt(),{fetchAccountMetaBatch:s}=rpt(),{activeBondedPool:l,isOwner:u}=Gtt(),{isSyncing:c}=$tt(),{openModalWith:h}=tht(),d=l,{id:f,roles:p}=d||{},m="pool_roles",g=(()=>{var t;const e={};return null===(t=Object.entries(p))||void 0===t||t.forEach((t=>{let[n,r]=t;e[n]={oldAddress:r,newAddress:r,valid:!0,reformatted:!1}})),e})(),[y,v]=(0,k.useState)(!1),[b,w]=(0,k.useState)(g),x=[p.root,p.depositor,p.nominator,p.stateToggler],[M,S]=(0,k.useState)(x),[C,P]=(0,k.useState)(!1);(0,k.useEffect)((()=>{S(x),P(!1)}),[o]),(0,k.useEffect)((()=>{i&&!C&&(P(!0),s(m,x,!1))}),[i,C]);return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsxs)(Hx,{withAction:!0,children:[(0,Jd.jsx)("h2",{children:"Roles"}),u()?(0,Jd.jsxs)(Jd.Fragment,{children:[y&&(0,Jd.jsx)("div",{children:(0,Jd.jsx)(Qct,{small:!0,icon:Cw,transform:"grow-1",inline:!0,primary:!0,title:"Cancel",disabled:c||a(o),onClick:()=>(w(g),void v(!1))})}),"\xa0\xa0",(0,Jd.jsx)("div",{children:(0,Jd.jsx)(Qct,{small:!0,icon:y?Ew:qw,transform:"grow-1",inline:!0,primary:!0,title:y?"Save":"Edit",disabled:c||a(o)||!(()=>{for(const t of Object.values(b))if(!1===(null===t||void 0===t?void 0:t.valid))return!1;return!0})(),onClick:()=>y?(h("ChangePoolRoles",{poolId:f,roleEdits:b},"small"),void v(!1)):(w(g),void v(!0))})})]}):(0,Jd.jsx)(Jd.Fragment,{})]}),(0,Jd.jsxs)(apt,{children:[(0,Jd.jsx)("section",{children:(0,Jd.jsxs)("div",{className:"inner",children:[(0,Jd.jsxs)("h3",{children:["Root",(0,Jd.jsx)(wrt,{page:"pools",title:"Joined Pool"})]}),(0,Jd.jsx)(opt,{address:null!==(t=p.root)&&void 0!==t?t:null,batchIndex:M.indexOf(p.root),batchKey:m})]})}),(0,Jd.jsx)("section",{children:(0,Jd.jsxs)("div",{className:"inner",children:[(0,Jd.jsxs)("h3",{children:["Depositor ",(0,Jd.jsx)(wrt,{page:"pools",title:"Joined Pool"})]}),(0,Jd.jsx)(opt,{address:null!==(e=p.depositor)&&void 0!==e?e:null,batchIndex:M.indexOf(p.depositor),batchKey:m})]})}),(0,Jd.jsx)("section",{children:(0,Jd.jsxs)("div",{className:"inner",children:[(0,Jd.jsxs)("h3",{children:["Nominator ",(0,Jd.jsx)(wrt,{page:"pools",title:"Joined Pool"})]}),y?(0,Jd.jsx)(lpt,{roleEdit:null===b||void 0===b?void 0:b.nominator,setRoleEdit:t=>{w((e=>({...e,nominator:t})))}}):(0,Jd.jsx)(opt,{address:null!==(n=p.nominator)&&void 0!==n?n:null,batchIndex:M.indexOf(p.nominator),batchKey:m})]})}),(0,Jd.jsx)("section",{children:(0,Jd.jsxs)("div",{className:"inner",children:[(0,Jd.jsxs)("h3",{children:["State Toggler",(0,Jd.jsx)(wrt,{page:"pools",title:"Joined Pool"})]}),y?(0,Jd.jsx)(lpt,{roleEdit:null===b||void 0===b?void 0:b.stateToggler,setRoleEdit:t=>{w((e=>({...e,stateToggler:t})))}}):(0,Jd.jsx)(opt,{address:null!==(r=p.stateToggler)&&void 0!==r?r:null,batchIndex:M.indexOf(p.stateToggler),batchKey:m,last:!0})]})})]})]})},cpt=t=>{const{page:e}=t,{title:n}=e,{network:r}=u$(),i=Ch(),{bondedPools:o}=Xtt(),{isBonding:a}=Gtt(),{activeTab:s,setActiveTab:l}=Bft();return(0,k.useEffect)((()=>{r.features.pools||i("/#/overview",{replace:!0})}),[r]),(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(iet,{title:n,tabs:[{title:"Overview",active:0===s,onClick:()=>l(0)},{title:"All Pools",active:1===s,onClick:()=>l(1)}]}),0===s&&(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsxs)(Lx,{children:[(0,Jd.jsx)(Kft,{}),(0,Jd.jsx)(Gft,{}),(0,Jd.jsx)(Qft,{})]}),(0,Jd.jsxs)(qc,{className:"page-padding",noVerticalSpacer:!0,children:[(0,Jd.jsx)(Xc,{hOrder:1,vOrder:0,children:(0,Jd.jsx)($ft,{})}),(0,Jd.jsx)(Zc,{hOrder:0,vOrder:1,children:(0,Jd.jsx)(Bx,{height:300,children:(0,Jd.jsx)(tpt,{})})})]}),a()&&(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(ept,{}),(0,Jd.jsx)(qc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Jd.jsx)(Bx,{children:(0,Jd.jsx)(upt,{})})})]})]}),1===s&&(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsxs)(Lx,{children:[(0,Jd.jsx)(Jft,{}),(0,Jd.jsx)(Kft,{}),(0,Jd.jsx)(Gft,{})]}),(0,Jd.jsx)(qc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Jd.jsxs)(Bx,{children:[(0,Jd.jsx)(Hx,{children:(0,Jd.jsxs)("h2",{children:["All Pools",(0,Jd.jsx)(wrt,{page:"pools",title:"Nomination Pools"})]})}),(0,Jd.jsx)(Zft,{pools:o,title:"Active Pools",allowMoreCols:!0,pagination:!0})]})})]})]})},hpt=t=>(0,Jd.jsx)(Dft,{children:(0,Jd.jsx)(cpt,{...t})}),dpt=()=>{const{staking:t}=Rtt(),{totalValidators:e,maxValidatorsCount:n}=t;let r=0;n.gt(new(sf())(0))&&(r=e.div(n.div(new(sf())(100))).toNumber());const i={label:"Total Validators",stat:{value:e.toNumber(),total:n.toNumber(),unit:""},graph:{value1:e.toNumber(),value2:n.sub(e).toNumber()},tooltip:`${fg(r,2)}%`,assistant:{page:"validators",key:"Validator"}};return(0,Jd.jsx)(wct,{...i})},fpt=()=>{const{staking:t,eraStakers:e}=Rtt(),{validatorCount:n}=t,{activeValidators:r}=e;let i=0;n.gt(new(sf())(0))&&(i=r/(.01*n.toNumber()));const o={label:"Active Validators",stat:{value:r,total:n.toNumber(),unit:""},graph:{value1:r,value2:n.sub(new(sf())(r)).toNumber()},tooltip:`${fg(i,2)}%`,assistant:{page:"validators",key:"Active Validator"}};return(0,Jd.jsx)(wct,{...o})},ppt=t=>{const{page:e}=t,{title:n}=e,{isReady:r}=u$(),{validators:i}=Qtt();return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(iet,{title:n}),(0,Jd.jsxs)(Lx,{children:[(0,Jd.jsx)(dpt,{}),(0,Jd.jsx)(fpt,{}),(0,Jd.jsx)(tdt,{})]}),(0,Jd.jsx)(qc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Jd.jsx)(Bx,{children:r?(0,Jd.jsxs)(Jd.Fragment,{children:[0===i.length&&(0,Jd.jsx)("div",{className:"item",children:(0,Jd.jsx)("h3",{children:"Fetching validators..."})}),i.length>0&&(0,Jd.jsx)(Dht,{validators:i,batchKey:"validators_browse",title:"Network Validators",selectable:!1,allowMoreCols:!0,allowFilters:!0,pagination:!0,toggleFavourites:!0})]}):(0,Jd.jsx)("div",{className:"item",children:(0,Jd.jsx)("h3",{children:"Connecting..."})})})})]})},mpt=t=>{const{isReady:e}=u$(),{page:n}=t,{title:r}=n,{favouritesList:i}=Qtt();return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(iet,{title:r}),(0,Jd.jsx)(qc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Jd.jsx)(Bx,{children:null===i?(0,Jd.jsx)("h3",{children:"Fetching favourite validators..."}):(0,Jd.jsx)(Jd.Fragment,{children:e&&(0,Jd.jsx)(Jd.Fragment,{children:i.length>0?(0,Jd.jsx)(Dht,{validators:i,batchKey:"favourite_validators",title:"Favourite Validators",selectable:!1,refetchOnListUpdate:!0,allowMoreCols:!0,toggleFavourites:!0}):(0,Jd.jsx)("h3",{children:"No Favourites."})})})})})]})},gpt=k.createContext({setListFormat:t=>{},listFormat:"col"}),ypt=t=>{let{children:e}=t;const[n,r]=(0,k.useState)("col");return(0,Jd.jsx)(gpt.Provider,{value:{setListFormat:t=>{r(t)},listFormat:n},children:e})},vpt=pn(Yu.div)`
  padding: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;

  > div {
    padding: 0.75rem 0.5rem;
    flex: 1;
    background: ${fc};
    border-radius: 0.75rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    max-width: 100%;

    h4 {
      margin: 0 0.75rem;
      color: ${ic};

      &.reward {
        color: ${Rc};
      }
    }

    span {
      border-radius: 0.65rem;
      padding: 0.1rem 0.6rem;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;

      h4 {
        color: ${ic};
        opacity: 0.6;
        margin: 0;
      }
    }

    > div:first-child {
      flex-grow: 1;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;
    }

    > div:last-child {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-end;

      > h4 {
        color: ${ic};
        opacity: 0.8;
      }
    }
  }
`,bpt=t=>{var e;const{allowMoreCols:n,pagination:r}=t,{mode:i}=Og(),{isReady:o,network:a}=u$(),{units:s}=a,{metrics:l}=Mtt(),{listFormat:u,setListFormat:c}=k.useContext(gpt),h=null!==(e=t.disableThrottle)&&void 0!==e&&e,[d,f]=(0,k.useState)(1),[p,m]=(0,k.useState)(1),[g,y]=(0,k.useState)(t.payouts),[v,b]=(0,k.useState)(!1),w=(0,k.useRef)(p),x=Math.ceil(g.length/Et),M=d+1>x?x:d+1,S=d-1<1?1:d-1,C=d*Et-1,P=C-49,T=30*p-1;(0,k.useEffect)((()=>{b(!1)}),[t.payouts]),(0,k.useEffect)((()=>{o&&0!==l.activeEra.index&&!v&&(y(t.payouts),b(!0))}),[o,v,l.activeEra.index]),(0,k.useEffect)((()=>{T>=C||h||setTimeout((()=>{var t;t=w.current+1,w.current=t,m(t)}),500)}),[w.current]);let A=[];return A=h?g:g.slice(P).slice(0,Et),g.length?(0,Jd.jsxs)(Aht,{children:[(0,Jd.jsxs)(Nht,{children:[(0,Jd.jsx)("div",{children:(0,Jd.jsx)("h3",{children:t.title})}),(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)("button",{type:"button",onClick:()=>c("row"),children:(0,Jd.jsx)(tw,{icon:iw,color:"row"===u?tc[`${a.name}-${i}`]:"inherit"})}),(0,Jd.jsx)("button",{type:"button",onClick:()=>c("col"),children:(0,Jd.jsx)(tw,{icon:zw,color:"col"===u?tc[`${a.name}-${i}`]:"inherit"})})]})]}),(0,Jd.jsxs)(Eht,{flexBasisLarge:n?"33.33%":"50%",children:[r&&(0,Jd.jsxs)(Oht,{prev:1!==d,next:d!==x,children:[(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("h4",{children:["Page ",d," of ",x]})}),(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)("button",{type:"button",className:"prev",onClick:()=>{f(S)},children:"Prev"}),(0,Jd.jsx)("button",{type:"button",className:"next",onClick:()=>{f(M)},children:"Next"})]})]}),(0,Jd.jsx)(Yu.div,{className:"transition",initial:"hidden",animate:"show",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.01}}},children:A.map(((t,e)=>{const{amount:n,block_timestamp:r,event_id:i}=t;return(0,Jd.jsx)(Yu.div,{className:"item "+("row"===u?"row":"col"),variants:{hidden:{y:15,opacity:0},show:{y:0,opacity:1}},children:(0,Jd.jsx)(vpt,{children:(0,Jd.jsxs)("div",{children:[(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)("span",{className:i.toLowerCase(),children:(0,Jd.jsx)("h4",{children:i})}),(0,Jd.jsxs)("h4",{className:i.toLowerCase(),children:["Reward"===i?"+":"-",pg(n,s)," ",a.unit]})]}),(0,Jd.jsx)("div",{children:(0,Jd.jsx)("h4",{children:Vx().unix(r).fromNow()})})]})})},`nomination_${e}`)}))})]})]}):(0,Jd.jsx)(Jd.Fragment,{})},wpt=t=>(0,Jd.jsx)(ypt,{children:(0,Jd.jsx)(xpt,{...t})});class xpt extends k.Component{render(){return(0,Jd.jsx)(bpt,{...this.props})}}xpt.contextType=Itt;const Mpt=()=>{const{network:t}=u$(),{staking:e}=Rtt(),{unit:n,units:r}=t,{lastReward:i}=e,o={label:"Last Era Payout",value:mg(i,r).toFixed(0),unit:n,assistant:{page:"payouts",key:"Last Era Payout"}};return(0,Jd.jsx)(yct,{...o})},kpt=t=>{const{network:e}=u$(),{payouts:n}=eet(),{services:r}=$tt(),{units:i}=e,{page:o}=t,{title:a}=o,s=k.useRef(),l=uet(s.current),{width:u,height:c,minHeight:h}=cet(l,250);let d=det(het(n,60,i),60);d=d.reverse();const f=[...n.filter((t=>t.amount>0))].slice(0,60);return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(iet,{title:a}),(0,Jd.jsx)(Lx,{children:(0,Jd.jsx)(Mpt,{})}),(0,Jd.jsx)(qc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Jd.jsxs)(Dx,{children:[(0,Jd.jsx)(ret,{}),(0,Jd.jsxs)(Hx,{padded:!0,children:[(0,Jd.jsxs)("h4",{children:["Payout History",(0,Jd.jsx)(wrt,{page:"payouts",title:"Payout History"})]}),(0,Jd.jsx)("h2",{children:n.length?(0,Jd.jsxs)(Jd.Fragment,{children:[Vx().unix(n[0].block_timestamp).format("Do MMMM"),"\xa0-\xa0",Vx().unix(n[n.length-1].block_timestamp).format("Do MMMM")]}):"None"})]}),(0,Jd.jsxs)("div",{className:"inner",ref:s,style:{minHeight:h},children:[r.includes("subscan")?(0,Jd.jsx)(Hct,{status:"sync_or_setup",title:"Not Staking"}):(0,Jd.jsx)(Hct,{status:"active_service",statusFor:"subscan",title:"Subscan Disabled"}),(0,Jd.jsxs)("div",{className:"graph",style:{height:`${c}px`,width:`${u}px`,position:"absolute"},children:[(0,Jd.jsx)(zct,{payouts:d,height:"120px"}),(0,Jd.jsx)(Rct,{payouts:d,height:"70px"})]})]})]})}),f.length?(0,Jd.jsx)(qc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Jd.jsx)(Bx,{children:(0,Jd.jsx)(wpt,{title:"Recent Payouts",payouts:f,pagination:!0})})}):(0,Jd.jsx)(Jd.Fragment,{})]})},Spt=pn.div`
  h2 {
    color: ${ic};
    margin-top: 2rem;
  }
`,Cpt=pn(Yu.div)`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`,Ppt=pn(Yu.button)`
  width: 200px;
  height: 200px;
  background: rgba(0, 0, 0, 0.03);
  color: ${ic};
  margin: 1rem 2rem 1rem 0;
  border-radius: 0.75rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`,Tpt=t=>{const{page:e}=t,{title:n}=e;return(0,k.useEffect)((()=>{!function(t,e,n,r){function i(){if(!e.getElementById("canny-jssdk")){var t=e.getElementsByTagName(r)[0],n=e.createElement(r);n.type="text/javascript",n.async=!0,n.src="https://canny.io/sdk.js",t.parentNode.insertBefore(n,t)}}if("function"!=typeof t.Canny){var o=function(){o.q.push(arguments)};o.q=[],t.Canny=o,"complete"===e.readyState?i():t.attachEvent?t.attachEvent("onload",i):t.addEventListener("load",i,!1)}}(window,document,0,"script"),Canny("render",{boardToken:"2dda48aa-e149-da7b-f016-98e22279df1e",basePath:null,ssoToken:null})}),[]),(0,Jd.jsxs)(Spt,{children:[(0,Jd.jsx)(iet,{title:n}),(0,Jd.jsx)(qc,{className:"page-padding",children:(0,Jd.jsx)("div",{"data-canny":!0,style:{width:"100%"}})})]})},Apt=[{_id:1,title:"default"},{_id:2,title:"Staking"},{_id:3,title:"Validators"},{_id:4,title:"Explore"},{_id:5,title:"Feedback"}],Npt=[{category:1,title:"Overview",uri:`${vt}/`,hash:"/overview",Entry:Uct,icon:ow},{category:2,title:"Stake",uri:`${vt}/stake`,hash:"/stake",Entry:Lft,icon:sw},{category:2,title:"Pools",uri:`${vt}/pools`,hash:"/pools",Entry:hpt,icon:vx},{category:2,title:"Payouts",uri:`${vt}/payouts`,hash:"/payouts",Entry:kpt,icon:ix},{category:3,title:"Validators",uri:`${vt}/validators`,hash:"/validators",Entry:ppt,icon:nx},{category:3,title:"Favourites",uri:`${vt}/favourites`,hash:"/favourites",Entry:mpt,icon:ox},{category:4,title:"Community",uri:`${vt}/community`,hash:"/community",Entry:t=>{const{page:e}=t,{title:n}=e,r={hidden:{opacity:0},show:{opacity:1,transition:{duration:1,staggerChildren:.25}}},i={hidden:{opacity:0,y:50,transition:{duration:.5}},show:{opacity:1,y:0,transition:{duration:.5}}};return(0,Jd.jsxs)(Spt,{children:[(0,Jd.jsx)(iet,{title:n}),(0,Jd.jsx)(qc,{className:"page-padding",children:(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)("h2",{children:"Validator Programs"}),(0,Jd.jsx)(Cpt,{variants:r,initial:"hidden",animate:"show",children:(0,Jd.jsx)(Ppt,{whileHover:{scale:1.02},whileTap:{scale:.98},variants:i,children:"cool icon here"})}),(0,Jd.jsx)("h2",{children:"Staking in the Polkadot Ecosystem"}),(0,Jd.jsxs)(Cpt,{variants:r,initial:"hidden",animate:"show",children:[(0,Jd.jsx)(Ppt,{whileHover:{scale:1.02},whileTap:{scale:.98},variants:i,children:"cool icon here"}),(0,Jd.jsx)(Ppt,{whileHover:{scale:1.02},whileTap:{scale:.98},variants:i,children:"cool icon here"})]})]})})]})},icon:px},{category:5,title:"Feedback",uri:`${vt}/feedback`,hash:"/feedback",Entry:Tpt,icon:Tw}],Opt=pn(Yu.div)`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.85rem;
  color: #444;
  bottom: 0px;
  left: 0px;
  overflow: hidden;
  background: ${hc};
  z-index: 6;
  backdrop-filter: blur(4px);
  position: relative;
  @media (min-width: ${1176}px) {
    position: fixed;
  }
`,jpt=pn.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  /* hide connection status text on small screens */
  .hide-small {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;

    @media (max-width: 600px) {
      display: none;
    }
  }

  a {
    opacity: 0.75;
  }
  p {
    margin: 0 0.25rem;
    font-size: 0.85rem;
  }
  .stat {
    margin: 0 0.25rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  /* left and right sections for each row*/
  > section {
    padding: 0.5rem 0.5rem;
    color: ${ic};

    /* left section */
    &:nth-child(1) {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      flex-grow: 1;
      .network_icon {
        margin-right: 0.5rem;
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    /* right section */
    &:last-child {
      flex-grow: 1;
      display: flex;
      align-items: center;
      flex-flow: row-reverse wrap;
      button {
        border-radius: 0.4rem;
        padding: 0.25rem 0.5rem;
        color: ${ic};
        font-size: 0.85rem;
      }
      span {
        &.pos {
          color: #3eb955;
        }
        &.neg {
          color: #d2545d;
        }
      }
    }
  }
`,Ept=pn(Yu.div)`
  width: 100%;
  background: ${Rc};
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-content: flex-end;
  padding: 0.25rem 1rem 1rem 1rem;
  overflow: auto;

  > .row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-content: flex-start;
    align-items: flex-start;

    h2 {
      color: #eee;
      font-size: 1.1rem;
      line-height: 2rem;
      padding: 0 0.25rem;
      margin: 1rem 0;
    }

    > div,
    > button {
      padding: 0.25rem 1.5rem 0.25rem;
      background: rgba(0, 0, 0, 0.1);
      margin-right: 1rem;
      border-radius: 0.5rem;
      padding: 0.5rem 1.25rem;
      display: flex;
      flex-flow: column nowrap;

      &:last-child {
        margin-right: 0;
      }
    }
    h3 {
      margin: 0.25rem 0;
      font-variation-settings: 'wght' 575;
      color: #f1f1f1;
      padding: 0.2rem 0;

      &.val {
        font-size: 0.85rem;
        color: #e6e6e6;
      }
    }
  }

  > .row:first-child > h3 {
    margin-top: 0.5rem;
    border-top: 0;
  }
`,Vpt=pn.div`
  border-left: 1px solid ${ic};
  opacity: 0.2;
  margin: 0 0.3rem;
  width: 1px;
  height: 1rem;
`,Ipt=pn.div`
  width: 10px;
  height: 10px;
  background: ${t=>t.color};
  border-radius: 50%;
  margin: 0 0.7rem;
`,Rpt=t=>(0,Jd.jsx)(Yu.div,{animate:{opacity:[.5,1]},transition:{duration:.5},children:t.block});class zpt extends k.Component{constructor(t){super(t),this.stateRef=void 0,this.initiateBlockSubscription=async()=>{const{api:t,isReady:e}=this.context;if(e){const e=await t.rpc.chain.subscribeNewHeads((t=>{void 0!==t&&this._setState({...this.stateRef.current,block:`#${t.number.toHuman()}`})}));this._setState({...this.stateRef.current,unsub:e})}},this.state={block:0,unsub:null},this.stateRef=k.createRef(),this.stateRef.current=this.state}componentDidMount(){this.initiateBlockSubscription()}componentDidUpdate(){null===this.state.unsub&&this.initiateBlockSubscription()}componentWillUnmount(){const{unsub:t}=this.state;null!==t&&t()}_setState(t){this.stateRef.current=t,this.setState(t)}render(){return(0,Jd.jsx)(Rpt,{...this.props,block:this.state.block})}}zpt.contextType=l$;const Lpt=()=>{const{services:t}=$tt(),{status:e,switchNetwork:n,network:r}=u$(),i=Vct(),[o,a]=(0,k.useState)(!1),s=e===i$.Connecting?Ct:e===i$.Connected?Pt:St,l=o?"maximised":"minimised",u=(0,k.useRef)(null),c={NODE_ENV:"production",PUBLIC_URL:"/polkadot-staking-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_PRIVACY_URL,h={NODE_ENV:"production",PUBLIC_URL:"/polkadot-staking-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_ORGANISATION;return $d(u,(()=>{a(!1)}),["igignore-network-info-toggle"]),(0,Jd.jsxs)(Opt,{ref:u,initial:!1,animate:l,transition:{duration:.4,type:"spring",bounce:.25},variants:{minimised:{height:"2.5rem"},maximised:{height:"155px"}},children:[(0,Jd.jsxs)(jpt,{children:[(0,Jd.jsxs)("section",{children:[(0,Jd.jsx)(r.icon,{className:"network_icon"}),void 0===h?r.name:h,void 0!==c&&(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(Vpt,{}),(0,Jd.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:"Privacy"})]})]}),(0,Jd.jsxs)("section",{children:[(0,Jd.jsx)("button",{type:"button",className:"ignore-network-info-toggle",onClick:()=>{a(!o)},children:o?"Collapse":"Switch Network"}),(0,Jd.jsxs)("div",{className:"stat",style:{marginRight:0},children:[e===i$.Connected&&(0,Jd.jsx)(zpt,{}),(0,Jd.jsx)(Ipt,{color:s})]}),(0,Jd.jsx)("div",{className:"hide-small",children:t.includes("binance_spot")&&(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)("div",{className:"stat",children:(0,Jd.jsxs)("span",{className:"change"+(i.change<0?" neg":i.change>0?" pos":""),children:[i.change<0?"":i.change>0?"+":"",i.change,"%"]})}),(0,Jd.jsxs)("div",{className:"stat",children:["1 ",r.api.unit," / ",i.lastPrice," USD"]}),(0,Jd.jsx)(Vpt,{})]})})]})]}),(0,Jd.jsxs)(Ept,{children:[(0,Jd.jsx)("div",{className:"row",children:(0,Jd.jsx)("h2",{children:"Switch Network"})}),(0,Jd.jsx)("div",{className:"row",children:Object.entries(kt).map(((t,e)=>{let[i,o]=t;return(0,Jd.jsx)("button",{type:"button",onClick:()=>{r.name.toLowerCase()!==i&&(n(i),a(!1))},children:(0,Jd.jsx)("h3",{children:o.name})},`switch_network_${e}`)}))})]})]})};function Hpt(){var t=!1,e=[],n=new Set,r={subscribe:function(t){return n.add(t),function(){n.delete(t)}},start:function(r,i){if(t){var o=[];return n.forEach((function(t){o.push(Ll(t,r,{transitionOverride:i}))})),Promise.all(o)}return new Promise((function(t){e.push({animation:[r,i],resolve:t})}))},set:function(t){return n.forEach((function(e){!function(t,e){Array.isArray(e)?Rl(t,e):"string"===typeof e?Rl(t,[e]):Il(t,e)}(e,t)}))},stop:function(){n.forEach((function(t){!function(t){t.forEachValue((function(t){return t.stop()}))}(t)}))},mount:function(){return t=!0,e.forEach((function(t){var e=t.animation,n=t.resolve;r.start.apply(r,kn([],Mn(e),!1)).then(n)})),function(){t=!1,r.stop()}}};return r}const Bpt=pn(Yu.div)`
  background: ${Pc};
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9;
  backdrop-filter: blur(4px);

  /* modal content wrapper */
  .content_wrapper {
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;

    /* click anywhere behind modal content to close */
    .close {
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 8;
      cursor: default;
    }
  }
`,Dpt=pn.div`
  border: ${Ec} ${Sc};
  box-shadow: ${Vc} ${Oc};
  transition: height 0.6s cubic-bezier(0.1, 1, 0.2, 1);
  box-sizing: border-box;
  width: 100%;
  max-width: ${t=>"large"===t.size?"800px":"600px"};
  max-height: 100%;
  border-radius: 1rem;
  z-index: 9;
  position: relative;
`,Fpt=pn.div`
  box-sizing: border-box;
  background: ${Tc};
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  .header {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: 1rem 1rem 0 1rem;
  }
  .body {
    padding: 1rem;
  }
  .notes {
    padding: 1rem 0;
    > p {
      color: ${ic};
    }
  }
`,Upt=pn.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: ${t=>t.verticalOnly?"1rem 0":"1rem"};
`,Wpt=pn.h3`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 0.25rem;
  padding: ${t=>t.noPadding?"0":"0 1rem"};
  color: ${ic};
  flex: 1;

  > svg {
    margin-right: 0.75rem;
  }
`,qpt=pn.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  h3 {
    color: ${ic};
    opacity: 0.5;
    margin: 0;
    &.active {
      opacity: 1;
      color: ${Rc};
    }
  }

  > div {
    margin-left: 1rem;
  }
  .submit {
    padding: 0.5rem 0.75rem;
    border-radius: 0.7rem;
    font-size: 1rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    color: ${Rc};
    border: 1px solid ${Rc};

    &:disabled {
      opacity: 0.25;
    }
    svg {
      margin-right: 0.5rem;
    }
  }
`,Xpt=pn.div`
  border-top: 1px solid ${ic};
  width: 100%;
  opacity: 0.1;
  margin: 0.75rem 0rem;
`,Zpt=pn.div`
  width: 100%;
  padding: 1rem 0;
  > p {
    color: ${ic};
  }
`,Ypt=pn(Yu.div)`
  box-sizing: border-box;
  width: 200%;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  position: relative;
`,Kpt=pn.div`
  box-sizing: border-box;
  border-radius: 1rem;
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 50%;
  height: auto;
  padding: 0 1rem 1rem 1rem;
`,Gpt=pn.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  width: 100%;

  h1 {
    padding: 0 0.5rem;
  }

  h2 {
    color: ${rc};
    border-bottom: 1px solid ${Sc};
    padding-bottom: 0.75rem;
    margin: 2rem 0 1rem 0;
  }

  h3 {
    margin: 1rem 0;
  }

  .head {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin: 0.5rem 0 1.5rem 0;

    > div:last-child {
      display: flex;
      flex-flow: row-reverse wrap;
      flex-grow: 1;

      button {
        background: none;
        opacity: 0.85;
      }
    }
  }
`,Jpt=pn.div`
  box-sizing: border-box;
  padding: 1rem 0 0.5rem 0rem;
  height: auto;
`,Qpt=pn(Yu.button)`
  box-sizing: border-box;
  border-radius: 1rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  background: ${bc};
  margin-bottom: 1rem;
  transition: background 0.15s;

  > section {
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    flex-basis: 100%;

    @media (min-width: 800px) {
      flex-basis: 50%;

      &:first-child {
        padding-right: 0.25rem;
      }
      &:last-child {
        padding-left: 0.25rem;
      }
    }

    > h5 {
      margin: 0 0 0.25rem 0;
      opacity: 0.75;
    }

    > div {
      > button,
      > div {
        border-radius: 0.75rem;
        border: 1px solid ${Tc};
        margin: 0;
      }
    }
  }

  &:hover {
    background: ${xc};
    > section > div {
      > button,
      > div {
        background: ${xc};
      }
    }
  }
`,_pt=pn.div`
  width: 100%;
  margin: 0.5rem 0;

  > button {
    &:hover {
      background: ${xc};
    }
    &:disabled {
      cursor: default;
      border: 2px solid rgba(242, 185, 27, 0.25);
    }
  }

  > div,
  button {
    box-sizing: border-box;
    width: 100%;
    border-radius: 0.75rem;
    font-size: 1rem;
    background: ${bc};
    transition: background 0.15s;
    color: ${rc};
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    min-height: 3.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    > div {
      box-sizing: border-box;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      padding: 0 0.25rem;

      &:first-child {
        flex-shrink: 1;
        overflow: hidden;
        .name {
          max-width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }

      &:last-child {
        flex-grow: 1;
        justify-content: flex-end;
      }

      &.neutral {
        h5 {
          color: ${ic};
          opacity: 0.75;
        }
      }
      &.danger {
        h5 {
          color: ${ac};
        }
      }
      .icon {
        width: 1rem;
        height: 1rem;
        margin-left: 0.75rem;
      }

      /* svg theming */
      svg {
        .light {
          fill: ${oc};
        }
        .dark {
          fill: ${ic};
        }
      }
    }
  }
`,$pt=pn.div`
  box-sizing: border-box;
  width: 100%;

  > button,
  > div {
    box-sizing: border-box;
    width: 100%;
    margin: ${t=>t.noSpacing?0:"1rem 0"};
    padding: ${t=>t.noSpacing?0:"1rem 0.75rem"};
    font-size: 1rem;
    background: ${bc};
    border-radius: 0.75rem;
    transition: background 0.15s;
    color: ${rc};
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    min-height: 3.5rem;

    > div {
      box-sizing: border-box;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      padding: 0 1rem;
      h3 {
        margin: 0;
      }
      span {
        margin-right: 1.25rem;
        &.name {
          max-width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        &.message {
          opacity: 0.75;
        }
      }
      &:first-child {
        flex-shrink: 1;
        overflow: hidden;
      }
      &:last-child {
        flex-grow: 1;
        justify-content: flex-end;
        .icon {
          margin-left: 1rem;
        }
      }
    }
    .neutral {
      color: ${ic};
    }
    .danger {
      color: ${ac};
    }
    .success {
      color: ${sc};
    }
    /* svg theming */
    svg {
      .light {
        fill: ${oc};
      }
      .dark {
        fill: ${ic};
      }
    }
  }
  > button {
    &:hover {
      background: ${xc};
    }

    &:disabled {
      cursor: default;
      opacity: 1;
      &:hover {
        background: ${bc};
      }
    }
  }
`,tmt=pn.div`
  border-top: 1px solid ${ic};
  width: 100%;
  opacity: 0.1;
  margin: 1.5rem 0rem;
`;var emt,nmt,rmt;function imt(){return imt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},imt.apply(this,arguments)}function omt(t,e){let{title:n,titleId:r,...i}=t;return k.createElement("svg",imt({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"logo",ref:e,"aria-labelledby":r},i),n?k.createElement("title",{id:r},n):null,emt||(emt=k.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.058 17.832c.304.662 1.2.896 1.714.38l.945-.944a2.5 2.5 0 0 1 3.536 3.535l-7.636 7.636A9.979 9.979 0 0 1 15.965 32a9.983 9.983 0 0 1-7.883-3.847l-7.35-7.35a2.5 2.5 0 1 1 3.536-3.535l.93.93c.504.504 1.379.277 1.677-.37a.97.97 0 0 0 .09-.406V6a2.5 2.5 0 0 1 5 0v5.778c0 .497.51.835.984.685a.727.727 0 0 0 .516-.682V2.5a2.5 2.5 0 0 1 5 0v9.28c0 .315.217.588.517.683.474.15.983-.188.983-.685V6a2.5 2.5 0 0 1 5 0v11.418a.99.99 0 0 0 .093.414Z",className:"dark"})),nmt||(nmt=k.createElement("path",{className:"light",d:"M23.965 23s-3.581 5-8 5c-4.418 0-8-5-8-5s3.582-5 8-5c4.419 0 8 5 8 5Z"})),rmt||(rmt=k.createElement("path",{d:"M18.731 23a2.766 2.766 0 1 1-5.531 0 2.766 2.766 0 0 1 5.531 0Z",className:"dark",stroke:"currentColor",strokeWidth:.469})))}const amt=k.forwardRef(omt);__webpack_require__.p;var smt,lmt,umt;function cmt(){return cmt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cmt.apply(this,arguments)}function hmt(t,e){let{title:n,titleId:r,...i}=t;return k.createElement("svg",cmt({id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 372.78 498.62",ref:e,"aria-labelledby":r},i),n?k.createElement("title",{id:r},n):null,smt||(smt=k.createElement("defs",null,k.createElement("style",null,".cls-2{fill:#e6007a;}"))),lmt||(lmt=k.createElement("path",{className:"dark",d:"M260.4,6.38C156.25,6.8,71.92,91.12,71.51,195.27a193.86,193.86,0,0,0,10,61.36,27,27,0,0,0,33.23,16.55,26.88,26.88,0,0,0,16-33.11,124.53,124.53,0,0,1-7.35-48.15A136.26,136.26,0,1,1,267.87,332s-26.51,1.61-39.7,3.23a134.73,134.73,0,0,0-14.45,2.87,1.75,1.75,0,0,1-2.47,0l0,0a1.77,1.77,0,0,1,0-2.12l4.11-22.39,24.9-112a25.89,25.89,0,0,0-50.64-10.84s-59.23,274.13-59.23,276.63a24.9,24.9,0,0,0,18,30.26,3.48,3.48,0,0,0,.44.1h1.38a24.89,24.89,0,0,0,30.32-17.87,6.77,6.77,0,0,0,.16-.68,6.42,6.42,0,0,1,0-1.24c.73-3.22,8.2-39.7,8.2-39.7a67.19,67.19,0,0,1,55.62-52.89c5.72-.88,29.75-2.49,29.75-2.49C378,372.57,453.7,280.08,443.34,176.33A188.78,188.78,0,0,0,260.4,6.38Z",transform:"translate(-71.51 -6.38)"})),umt||(umt=k.createElement("path",{className:"cls-2",d:"M271.85,441.92a31.47,31.47,0,0,0-37.23,24.4c0,.16-.06.32-.1.48a31.36,31.36,0,0,0,24,37.31.07.07,0,0,1,.06,0h.87a30.86,30.86,0,0,0,37.24-22.75c0-.12.06-.26.1-.38v-1.73A32.64,32.64,0,0,0,271.85,441.92Z",transform:"translate(-71.51 -6.38)"})))}const dmt=k.forwardRef(hmt),fmt=(__webpack_require__.p,t=>{const{meta:e}=t,{extensionName:n}=e,{extensionsStatus:r}=btt(),i=r[n];let o;switch(i){case"connected":o="Connected";break;case"not_authenticated":o="Not Authenticated. Authenticate and Try Again";break;case"not_found":o="Not Found. Install and Refresh";break;default:o="no_accounts"===i?"No Accounts":"Not Connected"}return(0,Jd.jsx)($pt,{children:"connected"===i?(0,Jd.jsx)(mmt,{...t,message:o,status:i,size:"1.5rem"}):(0,Jd.jsx)(pmt,{...t,message:o,status:i,size:"1.5rem"})})}),pmt=t=>{const{meta:e,setSection:n}=t,{extensionName:r,status:i}=e,{connectExtensionAccounts:o}=btt(),[a,s]=(0,k.useState)(0);return(0,Jd.jsx)("button",{type:"button",disabled:"connected"===i,onClick:()=>{"connected"!==i&&(async()=>{"connected"===i?n(1):(async()=>{await o(r),s(a+1)})()})()},children:(0,Jd.jsx)(gmt,{...t})})},mmt=t=>(0,Jd.jsx)("div",{children:(0,Jd.jsx)(gmt,{...t})}),gmt=t=>{const{size:e,message:n,flag:r,meta:i,status:o}=t,{extensionName:a,title:s}=i;return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsxs)("div",{children:["talisman"===a&&(0,Jd.jsx)(Jd.Fragment,{children:(0,Jd.jsx)(amt,{width:e,height:e})}),"polkadot-js"===a&&(0,Jd.jsx)(dmt,{width:e,height:e}),(0,Jd.jsx)("h3",{children:(0,Jd.jsxs)("span",{className:"name",children:["\xa0 ",s]})})]}),(0,Jd.jsxs)("div",{className:"connected"===o?"success":"neutral",children:[(0,Jd.jsx)("h3",{children:(0,Jd.jsx)("span",{className:"message "+("connected"===o?"success":""),children:n})}),r&&r,(0,Jd.jsx)(tw,{icon:"connected"===o?fw:Yw,transform:"shrink-0",className:"icon"})]})]})},ymt=pn.div`
  box-sizing: border-box;
  border-radius: 0.75rem;
  width: 100%;
  margin: 1rem 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: ${bc};
  transition: background 0.15s;
  color: ${rc};
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  min-height: 3.5rem;

  > .content {
    box-sizing: border-box;
    padding: 0 1rem;
    width: 100%;
  }

  .accounts {
    margin-top: 1rem;
    width: 100%;
  }

  .account {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid ${Sc};
    border-radius: 0.75rem;
    margin: 1rem 0;
    padding: 1rem;
    display: flex;
    flex-flow: row wrap;
    transition: border 0.1s;

    > div {
      color: ${ic};
      transition: opacity 0.2s;

      &:first-child {
        box-sizing: border-box;
        flex: 1;
        display: flex;
        flex-flow: row wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &:last-child {
        padding-left: 2rem;
        opacity: 0.25;
      }
    }

    &:hover {
      > div:last-child {
        opacity: 1;
      }
    }

    &:hover {
      border-color: ${Cc};
    }
  }
`,vmt=pn.div`
  width: 100%;
  margin-top: 0.5rem;

  .input {
    box-sizing: border-box;
    border: 1px solid ${Sc};
    border-radius: 1rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: 0.25rem 0.5rem 0.25rem 1rem;

    > section {
      display: flex;
      flex-flow: column wrap;

      > input {
        box-sizing: border-box;
        width: 100%;
        border: none;
        padding-right: 1rem;
      }

      &:first-child {
        flex: 1;
      }
    }
  }
  h5 {
    margin: 0.75rem 0.25rem;
    &.neutral {
      color: ${ic};
      opacity: 0.8;
    }
    &.danger {
      color: ${ac};
    }
    &.success {
      color: ${sc};
    }
  }
`,bmt=()=>{const{formatAccountSs58:t,accounts:e,addExternalAccount:n}=btt(),[r,i]=(0,k.useState)(""),[o,a]=(0,k.useState)(null),[s,l]=(0,k.useState)(!1),u=()=>{const e=t(r);e?(a("confirm_reformat"),i(e),l(!0)):(n(r,"user"),l(!1),i(""),a(null))};let c,h;switch(o){case"confirm_reformat":c="Address was reformatted. Please confirm.",h="neutral";break;case"already_imported":c="Address Already Imported",h="danger";break;case"not_valid":c="Address Invalid",h="danger";break;case"valid":c="Valid Address",h="success";break;default:c="Input Address",h="neutral"}return(0,Jd.jsxs)(vmt,{children:[(0,Jd.jsx)("h5",{className:h,children:c}),(0,Jd.jsxs)("div",{className:"input",children:[(0,Jd.jsx)("section",{children:(0,Jd.jsx)("input",{placeholder:"Address",type:"text",onChange:t=>(t=>{const n=t.currentTarget.value;if(i(n),s&&l(!1),""===n)return void a(null);const r=e.find((t=>t.address.toUpperCase()===n.toUpperCase()));a(void 0===r?Tg(n)?"valid":"not_valid":"already_imported")})(t),value:r})}),(0,Jd.jsx)("section",{children:s?(0,Jd.jsx)(Qct,{inline:!0,onClick:()=>(a("valid"),l(!1),void u()),title:"Confirm"}):(0,Jd.jsx)(Qct,{inline:!0,onClick:()=>u(),title:"Import",disabled:"valid"!==o})})]})]})},wmt=t=>{const{setReadOnlyOpen:e,readOnlyOpen:n}=t,{accounts:r,forgetAccounts:i}=btt(),o=r.filter((t=>"external"===t.source)),a=o.filter((t=>"user"===t.addedBy));return(0,Jd.jsxs)(ymt,{children:[(0,Jd.jsx)($pt,{noSpacing:!0,children:(0,Jd.jsxs)("button",{type:"button",onClick:()=>{e(!n)},children:[(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)(tw,{icon:Rw,transform:"grow-5",style:{margin:"0 1rem 0 1rem"}}),(0,Jd.jsx)("h3",{children:(0,Jd.jsx)("span",{className:"name",children:"Read Only Accounts"})})]}),(0,Jd.jsxs)("div",{className:"neutral",children:[(0,Jd.jsx)("h3",{children:(0,Jd.jsx)("span",{className:"message"+(a.length?" success":""),children:a.length?`${a.length} Connected`:""})}),(0,Jd.jsx)(tw,{icon:n?xx:Iw,className:"icon",style:{marginRight:"0.75rem"}})]})]})}),n&&(0,Jd.jsxs)("div",{className:"content",children:[(0,Jd.jsx)(bmt,{}),a.length>0&&(0,Jd.jsxs)("h5",{children:[a.length," Read Only Account",1===a.length?"":"s"]}),(0,Jd.jsx)("div",{className:"accounts",children:a.map(((t,e)=>(0,Jd.jsxs)("button",{type:"button",className:"account",onClick:()=>{(t=>{i([t])})(t)},children:[(0,Jd.jsx)("div",{children:t.address}),(0,Jd.jsx)("div",{children:"Forget"})]},`user_external_account_${e}`)))})]})]})},xmt=(0,k.forwardRef)(((t,e)=>{const{setSection:n}=t,{extensions:r,accounts:i}=btt();return(0,Jd.jsx)(Kpt,{children:(0,Jd.jsxs)(Jpt,{ref:e,children:[(0,Jd.jsx)("div",{className:"head",children:(0,Jd.jsx)("h1",{children:"Extensions"})}),(0,Jd.jsx)($pt,{children:(0,Jd.jsxs)("button",{type:"button",onClick:()=>{n(1)},children:[(0,Jd.jsx)("div",{children:(0,Jd.jsx)("h3",{children:(0,Jd.jsxs)("span",{className:"name",children:[i.length," Imported Account",1!==i.length&&"s"]})})}),(0,Jd.jsx)("div",{className:"neutral",children:(0,Jd.jsx)(tw,{icon:rw,className:"icon"})})]})}),(0,Jd.jsx)(tmt,{}),r.map(((t,e)=>(0,Jd.jsx)(fmt,{meta:t,setSection:n},`active_extension_${e}`))),(0,Jd.jsx)(wmt,{...t})]})})})),Mmt=t=>(0,Jd.jsx)(_pt,{children:(0,Jd.jsx)("div",{children:(0,Jd.jsx)(Smt,{...t})})}),kmt=t=>{var e;const{meta:n}=t,r=null!==(e=t.disconnect)&&void 0!==e&&e,{connectToAccount:i,disconnectFromAccount:o}=btt(),{setStatus:a}=tht(),s=null!==n;return(0,Jd.jsx)(_pt,{children:(0,Jd.jsx)("button",{type:"button",disabled:!r&&!s,onClick:()=>{s&&(r?o():(i(n),a(0)))},children:(0,Jd.jsx)(Smt,{...t})})})},Smt=t=>{var e,n,r;const{address:i,meta:o}=t,a=null!==(e=t.label)&&void 0!==e?e:null,s=null!==(n=null===o||void 0===o?void 0:o.source)&&void 0!==n?n:null,l=null!==o&&"external"!==s;return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)(ort,{value:null!==i&&void 0!==i?i:"",size:26}),(0,Jd.jsxs)("span",{className:"name",children:["\xa0 ",null!==(r=null===o||void 0===o?void 0:o.name)&&void 0!==r?r:hg(null!==i&&void 0!==i?i:"")]})]}),!l&&(0,Jd.jsx)("div",{className:"label warning",style:{color:"#a17703",paddingLeft:"0.5rem"},children:"Read Only"}),(0,Jd.jsxs)("div",{className:null===a?"":a[0],children:[null!==a&&(0,Jd.jsx)("h5",{children:a[1]}),"talisman"===s&&(0,Jd.jsx)(amt,{className:"icon"}),"polkadot-js"===s&&(0,Jd.jsx)(dmt,{className:"icon"}),!l&&(0,Jd.jsx)(tw,{icon:Rw,className:"icon",style:{opacity:.7}})]})]})},Cmt=(0,k.forwardRef)(((t,e)=>{const{setSection:n}=t,{isReady:r}=u$(),{getAccount:i,activeAccount:o}=btt(),{getLedgerForController:a,getAccountLocks:s,getBondedAccount:l,accounts:u,ledgers:c}=Ntt(),{connectToAccount:h}=btt(),{setStatus:d}=tht(),{accounts:f}=btt(),{memberships:p}=Ytt(),m=[],g=[],[y,v]=(0,k.useState)(f),[b,w]=(0,k.useState)([]),[x,M]=(0,k.useState)([]),[S,C]=(0,k.useState)([]);(0,k.useEffect)((()=>{v(f)}),[r,f]),(0,k.useEffect)((()=>{P()}),[y,u,c]);const P=()=>{for(const r of y){const t=s(r.address).find((t=>{const{id:e}=t;return"staking"===e.trim()}));void 0!==t&&g.push({address:r.address,controller:l(r.address)})}for(const r of y){const t=a(r.address);t&&m.push({address:r.address,ledger:t})}const t=[],e=[],n=[];for(const r of y){const i=g.find((t=>t.address===r.address)),o=m.find((t=>t.address===r.address)),a=p.find((t=>t.address===r.address));if(i){const e=void 0!==t.find((t=>t.stash===r.address));if(!e){const e={stash:r.address,controller:i.controller,stashImported:!0,controllerImported:void 0!==y.find((t=>t.address===i.controller))};t.push(e)}}if(o){const e=void 0!==t.find((t=>t.controller===r.address));if(!e){const e={stash:o.ledger.stash,controller:o.address,stashImported:void 0!==y.find((t=>t.address===o.ledger.stash)),controllerImported:!0};t.push(e)}}a&&e.push(a),i||o||a||n.push(r.address)}w(t),M(e),C(n)};return(0,Jd.jsx)(Kpt,{children:(0,Jd.jsxs)(Jpt,{ref:e,children:[(0,Jd.jsxs)("div",{className:"head",children:[(0,Jd.jsx)("div",{children:(0,Jd.jsx)("h1",{children:"Accounts"})}),(0,Jd.jsx)("div",{children:(0,Jd.jsx)(Qct,{title:"Extensions",inline:!0,icon:Iw,transform:"shrink-2",onClick:()=>n(0)})})]}),o?(0,Jd.jsx)(kmt,{address:o,meta:i(o),label:["danger","Disconnect"],disconnect:!0}):(0,Jd.jsx)(_pt,{children:(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)("div",{children:(0,Jd.jsx)("h3",{children:"No Account Connected"})}),(0,Jd.jsx)("div",{})]})}),b.length>0&&(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsxs)("h2",{children:[(0,Jd.jsx)(tw,{icon:sw,transform:"shrink-4"})," ","Actively Staking"]}),b.map(((t,e)=>{const{stash:n,controller:r}=t,o=i(n),a=i(r);return(0,Jd.jsxs)(Qpt,{onClick:()=>{o&&(h(o),d(0))},children:[(0,Jd.jsx)("section",{children:(0,Jd.jsx)(Mmt,{address:n,meta:o,label:["neutral","Stash"],asElement:!0})}),(0,Jd.jsx)("section",{children:(0,Jd.jsx)(Mmt,{address:r,meta:a,label:["neutral","Controller"],asElement:!0})})]},`active_staking_${e}`)}))]}),x.length>0&&(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsxs)("h2",{children:[(0,Jd.jsx)(tw,{icon:vx,transform:"shrink-4"})," In Pool"]}),x.map(((t,e)=>{const{address:n}=t,r=i(n);return(0,Jd.jsx)(kmt,{address:n,meta:r},`active_pool_${e}`)}))]}),S.length>0&&(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)("h2",{children:"Not Staking"}),S.map(((t,e)=>{var n;const r=i(t),o=null!==(n=null===r||void 0===r?void 0:r.address)&&void 0!==n?n:"";return(0,Jd.jsx)(kmt,{address:o,meta:r},`not_staking_${e}`)}))]})]})})})),Pmt=()=>{var t;const e=tht(),{activeAccount:n,extensions:r}=btt();let{accounts:i}=btt();const{config:o}=e,a=null!==(t=null===o||void 0===o?void 0:o.section)&&void 0!==t?t:null,[s,l]=(0,k.useState)(null!==a?a:null!==n?1:0),[u,c]=(0,k.useState)(!1),h=(0,k.useRef)(null),d=(0,k.useRef)(null);return(0,k.useEffect)((()=>{(()=>{let t=0;var n,r;if(0===s)t=null!==(n=null===(r=h.current)||void 0===r?void 0:r.clientHeight)&&void 0!==n?n:0;else if(1===s){var i,o;t=null!==(i=null===(o=d.current)||void 0===o?void 0:o.clientHeight)&&void 0!==i?i:0}e.setModalHeight(t)})()}),[s,n,i,r,e.height,u]),i=i.filter((t=>t.address!==n)),(0,Jd.jsx)(Gpt,{children:(0,Jd.jsxs)(Ypt,{animate:0===s?"home":"next",initial:!1,transition:{duration:.5,type:"spring",bounce:.1},variants:{home:{left:0},next:{left:"-100%"}},children:[(0,Jd.jsx)(xmt,{setSection:l,readOnlyOpen:u,setReadOnlyOpen:c,ref:h}),(0,Jd.jsx)(Cmt,{setSection:l,ref:d})]})})};Dlt.register(Eut,zut,out,rut,yut,Out,mut);const Tmt=t=>{const{mode:e}=Og(),{network:n}=u$();let{items:r}=t;const{height:i}=t;r=void 0===r?[]:r;const o={responsive:!0,maintainAspectRatio:!1,scales:{x:{grid:{drawBorder:!1,color:Qu.transparent[e],borderColor:Qu.transparent[e]},ticks:{display:!0,maxTicksLimit:30,autoSkip:!0},title:{display:!0,text:"Era",font:{size:14}}},y:{ticks:{display:!0,beginAtZero:!1},grid:{drawBorder:!1,color:Qu.graphs.grid[e],borderColor:Qu.transparent[e]}}},plugins:{legend:{display:!1},title:{display:!1,text:"Era Points"},tooltip:{displayColors:!1,backgroundColor:Qu.graphs.tooltip[e],bodyColor:Qu.text.invert[e],callbacks:{title:()=>[],label:t=>`${t.parsed.y}`},intersect:!1,interaction:{mode:"nearest"}}}},a={labels:r.map(((t,e)=>t.era)),datasets:[{label:"Points",data:r.map(((t,e)=>t.reward_point)),borderColor:tc[`${n.name}-${e}`],backgroundColor:tc[`${n.name}-${e}`],pointStyle:void 0,pointRadius:0,borderWidth:2}]};return(0,Jd.jsx)("div",{style:{height:void 0===i?"auto":i},children:(0,Jd.jsx)(dct,{options:o,data:a})})},Amt=()=>{const{config:t}=tht(),{address:e,identity:n}=t,{fetchEraPoints:r}=eet(),{metrics:i}=Mtt(),[o,a]=(0,k.useState)([]),s=k.useRef(),l=uet(s.current),{width:u,height:c,minHeight:h}=cet(l,300);return(0,k.useEffect)((()=>{(async()=>{const t=await r(e,i.activeEra.index);a(t)})()}),[]),(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(ret,{}),(0,Jd.jsxs)("div",{className:"header",children:[(0,Jd.jsx)(ort,{value:e,size:40}),(0,Jd.jsxs)("h1",{children:["\xa0",null===n?hg(e):n]})]}),(0,Jd.jsx)("div",{className:"body",children:(0,Jd.jsxs)(Dx,{style:{margin:"0 0.5rem",height:275,border:"none",boxShadow:"none"},flex:!0,children:[(0,Jd.jsx)("h4",{children:"Recent Era Points"}),(0,Jd.jsxs)("div",{className:"inner",ref:s,style:{minHeight:h},children:[(0,Jd.jsx)(Hct,{status:"active_service",statusFor:"subscan",title:"Subscan Disabled"}),(0,Jd.jsx)("div",{className:"graph",style:{height:`${c}px`,width:`${u}px`,position:"absolute",left:"-1rem"},children:(0,Jd.jsx)(Tmt,{items:o,height:200})})]})]})})]})},Nmt=pn.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;

  .label {
    margin: 0.25rem 0 0.75rem 0;
  }
  .current {
    flex: 1;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    > span {
      margin: 0 0.75rem;
      color: ${ic};
      opacity: 0.5;
    }
  }

  /* input element of dropdown */
  .input-wrap {
    border-bottom: 1px solid ${Sc};
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    box-sizing: border-box;
    padding: 0.25rem 0 0 0;
    margin: 0.25rem 0.7rem 0 0.7rem;
    flex: 1;

    &.selected {
      border: 1px solid ${Sc};
      border-radius: 1rem;
      margin: 0;
      padding: 0.1rem 0.75rem;
    }
  }

  /* input element of dropdown */
  .input {
    border: none;
    box-sizing: border-box;
    padding-left: 0.75rem;
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`,Omt=pn.button`
  color: ${rc};
  box-sizing: border-box;
  border: none;
  position: absolute;
  right: 0.5rem;
  top: 0.4rem;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`,jmt=pn.div`
  background: ${dc};
  position: relative;
  box-sizing: border-box;
  margin: 0.5rem 0 0;
  border-bottom: none;
  border-radius: 0.75rem;
  z-index: 1;

  .items {
    box-sizing: border-box;
    width: auto;
    height: ${t=>t.height?t.height:"auto"};
    overflow: auto;

    .item {
      box-sizing: border-box;
      padding: 0.5rem;
      cursor: pointer;
      margin: 0.25rem;
      border-radius: 0.75rem;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;

      .icon {
        margin-right: 0.5rem;
      }
      p {
        font-size: 1rem;
        color: ${rc};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        flex: 1;
      }
    }
  }
`,Emt=t=>{var e,n,r,i;const{items:o,onChange:a,placeholder:s,value:l,current:u,height:c}=t,[h,d]=(0,k.useState)(o),f=hft({items:h,itemToString:t=>{var e;return null!==(e=null===t||void 0===t?void 0:t.name)&&void 0!==e?e:""},onSelectedItemChange:a,initialSelectedItem:l,onInputValueChange:t=>{let{inputValue:e}=t;d(o.filter((t=>{var n;return!e||(null===t||void 0===t||null===(n=t.name)||void 0===n?void 0:n.toLowerCase().startsWith(null===e||void 0===e?void 0:e.toLowerCase()))})))}});return(0,Jd.jsx)(Nmt,{children:(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)("div",{className:"label",...f.getLabelProps(),children:"Currently Selected:"}),(0,Jd.jsxs)("div",{children:[(0,Jd.jsxs)("div",{className:"current",children:[(0,Jd.jsxs)("div",{className:"input-wrap selected",children:[null!==u&&(0,Jd.jsx)(ort,{value:null!==(e=null===u||void 0===u?void 0:u.address)&&void 0!==e?e:"",size:dg("2rem")}),(0,Jd.jsx)("input",{className:"input",disabled:!0,value:null!==(n=null===u||void 0===u?void 0:u.name)&&void 0!==n?n:""})]}),(0,Jd.jsx)("span",{children:(0,Jd.jsx)(tw,{icon:nw})}),(0,Jd.jsxs)("div",{className:"input-wrap selected",children:[null!==l&&(0,Jd.jsx)(ort,{value:null!==(r=null===l||void 0===l?void 0:l.address)&&void 0!==r?r:"",size:dg("2rem")}),(0,Jd.jsx)("input",{className:"input",disabled:!0,value:null!==(i=null===l||void 0===l?void 0:l.name)&&void 0!==i?i:"..."})]})]}),(0,Jd.jsxs)(jmt,{...f.getMenuProps(),height:c,children:[(0,Jd.jsx)("div",{className:"input-wrap",...f.getComboboxProps(),children:(0,Jd.jsx)("input",{...f.getInputProps({placeholder:s}),className:"input"})}),(0,Jd.jsxs)("div",{className:"items",children:[f.selectedItem&&(0,Jd.jsx)(Omt,{onClick:()=>f.reset(),"aria-label":"clear selection",children:(0,Jd.jsx)(tw,{transform:"grow-2",icon:xx})}),h.map(((t,e)=>(0,Jd.jsx)(Vmt,{c:f,item:t,index:e},`controller_acc_${e}`)))]})]})]})]})})},Vmt=t=>{let{c:e,item:n,index:r}=t;const{network:i}=u$(),{mode:o}=Og();let a,s;return e.selectedItem===n?(a=tc[`${i.name}-${o}`],s=`2px solid ${tc[`${i.name}-${o}`]}`):(a=Qu.text.primary[o],s=`2px solid ${Qu.transparent[o]}`),(0,Jd.jsxs)("div",{className:"item",...e.getItemProps({key:n.name,index:r,item:n}),style:{color:a,border:s},children:[(0,Jd.jsx)("div",{className:"icon",children:(0,Jd.jsx)(ort,{value:n.address,size:26})}),(0,Jd.jsx)("p",{children:n.name})]})},Imt=pn.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem 0;

  .form {
    width: 100%;
    height: 250px;
    overflow: hidden;
  }
`,Rmt=()=>{const{api:t}=u$(),{setStatus:e}=tht(),{accounts:n,activeAccount:r,getAccount:i,accountHasSigner:o}=btt(),{getBondedAccount:a,isController:s}=Ntt(),l=i(a(r)),[u,c]=(0,k.useState)(null);(0,k.useEffect)((()=>{c(null)}),[r]);const{submitTx:h,estimatedFee:d,submitting:f}=Vft({tx:(()=>{var e;let n=null;if(!u||!t)return n;const r={Id:null!==(e=null===u||void 0===u?void 0:u.address)&&void 0!==e?e:""};return n=t.tx.staking.setController(r),n})(),from:r,shouldSubmit:!0,callbackSubmit:()=>{e(0)},callbackInBlock:()=>{}}),p=n.filter((t=>t.address!==r&&!s(t.address)));return(0,Jd.jsxs)(Imt,{children:[(0,Jd.jsxs)(Wpt,{children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Qw}),"Change Controller Account"]}),(0,Jd.jsxs)("div",{style:{padding:"0 1rem",width:"100%",boxSizing:"border-box"},children:[(0,Jd.jsx)("div",{style:{marginBottom:"1.5rem"},children:!o(r)&&(0,Jd.jsx)(kft,{text:"Your stash account is read only and cannot sign transactions."})}),(0,Jd.jsx)(Emt,{items:p.filter((t=>t.address!==r)),onChange:t=>{let{selectedItem:e}=t;c(e)},placeholder:"Search Account",current:l,value:u,height:"17rem"}),(0,Jd.jsx)(Zpt,{children:(0,Jd.jsxs)("p",{children:["Estimated Tx Fee:"," ",null===d?"...":`${d}`]})}),(0,Jd.jsx)(qpt,{children:(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("button",{type:"button",className:"submit",onClick:()=>h(),disabled:null===u||f||!o(r),children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Mx}),"Submit"]})})})]})]})},zmt=pn.button`
  width: 100%;
  flex: 1;
  padding: 1rem 0.75rem;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  display: flex;
  flex-flow: row-reverse wrap;
  align-items: center;
  background: ${bc};
  transition: all 0.15s;
  color: ${rc};

  > section:last-child {
    color: ${ic};
    padding-left: 0.25rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    flex: 1;
    font-variation-settings: 'wght' 420;
  }

  &:hover {
    > section {
      color: ${rc};
    }
  }
`,Lmt=t=>{const{checked:e,label:n,onClick:r}=t;return(0,Jd.jsxs)(zmt,{onClick:()=>{void 0!==r&&r()},children:[(0,Jd.jsx)("section",{className:e?"checked":void 0,children:(0,Jd.jsx)(tw,{icon:e?lw:Sx,transform:"shrink-3"})}),(0,Jd.jsx)("section",{children:n})]})},Hmt=()=>{var t;const{services:e,toggleService:n}=$tt(),r=Number(null!==(t={NODE_ENV:"production",PUBLIC_URL:"/polkadot-staking-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_DISABLE_FIAT)&&void 0!==t?t:0);return(0,Jd.jsxs)(Upt,{children:[(0,Jd.jsx)("h2",{children:"Toggle Services"}),(0,Jd.jsx)(Lmt,{checked:e.includes("subscan"),label:"Subscan API",onClick:()=>{n("subscan")}}),!r&&(0,Jd.jsx)(Lmt,{checked:e.includes("binance_spot"),label:"Binance Spot API",onClick:()=>{n("binance_spot")}})]})},Bmt=pn.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
`,Dmt=pn.div`
  padding-top: 1rem;
  box-sizing: border-box;
  flex-basis: 50%;
`,Fmt=pn(Yu.div)`
  box-sizing: border-box;
  width: 200%;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  position: relative;
`,Umt=pn.div`
  box-sizing: border-box;
  border-radius: 1rem;
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 50%;
  min-width: 50%;
  height: auto;
  padding: 0 1rem 1rem 1rem;
  flex-grow: 1;

  .items {
    box-sizing: border-box;
    position: relative;
    box-sizing: border-box;
    padding: 0.5rem 0 1.5rem 0;
    border-bottom: none;
    width: auto;
    border-radius: 0.75rem;
    overflow: hidden;
    overflow-y: auto;
    z-index: 1;
    width: 100%;

    h4 {
      margin: 0.2rem 0;
    }
    h2 {
      margin: 0.75rem 0;
    }

    .action-button {
      background: ${bc};
      box-sizing: border-box;
      padding: 1rem;
      cursor: pointer;
      margin-bottom: 1rem;
      border-radius: 0.75rem;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;
      transition: all 0.15s;
      width: 100%;

      &:last-child {
        margin-bottom: 0;
      }

      h3,
      p {
        text-align: left;
        margin: 0;
      }
      h3 {
        margin-bottom: 0.5rem;
      }
      > *:last-child {
        flex: 1;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
      }
      &:hover {
        background: ${xc};
      }
      .icon {
        margin-right: 0.5rem;
      }
      p {
        color: ${rc};
        font-size: 1rem;
      }
    }
  }
`,Wmt=(0,k.forwardRef)(((t,e)=>{const{setSection:n,setTask:r}=t,{network:i}=u$(),{config:o}=tht(),{fn:a}=o;return(0,Jd.jsx)(Umt,{children:(0,Jd.jsxs)("div",{className:"items",ref:e,children:["add"===a&&(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsxs)("button",{type:"button",className:"action-button",onClick:()=>{n(1),r("bond_some")},children:[(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)("h3",{children:"Bond Extra"}),(0,Jd.jsxs)("p",{children:["Bond more ",i.unit,"."]})]}),(0,Jd.jsx)("div",{children:(0,Jd.jsx)(tw,{transform:"shrink-2",icon:cw})})]}),(0,Jd.jsxs)("button",{type:"button",className:"action-button",onClick:()=>{n(1),r("bond_all")},children:[(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)("h3",{children:"Bond All"}),(0,Jd.jsxs)("p",{children:["Bond all available ",i.unit,"."]})]}),(0,Jd.jsx)("div",{children:(0,Jd.jsx)(tw,{transform:"shrink-2",icon:cw})})]})]}),"remove"===a&&(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsxs)("button",{type:"button",className:"action-button",onClick:()=>{n(1),r("unbond_some")},children:[(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)("h3",{children:"Unbond"}),(0,Jd.jsxs)("p",{children:["Unbond some of your ",i.unit,"."]})]}),(0,Jd.jsx)("div",{children:(0,Jd.jsx)(tw,{transform:"shrink-2",icon:cw})})]}),(0,Jd.jsxs)("button",{type:"button",className:"action-button",onClick:()=>{n(1),r("unbond_all")},children:[(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)("h3",{children:"Unbond All"}),(0,Jd.jsx)("p",{children:"Exit your staking position."})]}),(0,Jd.jsx)("div",{children:(0,Jd.jsx)(tw,{transform:"shrink-2",icon:cw})})]})]})]})})})),qmt=t=>{let{setSection:e,submitTx:n,submitting:r,isValid:i}=t;const o=void 0!==e;return(0,Jd.jsxs)(qpt,{children:[(0,Jd.jsx)("div",{children:o&&(0,Jd.jsxs)("button",{type:"button",className:"submit",onClick:()=>{o&&e(0)},children:[(0,Jd.jsx)(tw,{transform:"shrink-2",icon:uw}),"Back"]})}),(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("button",{type:"button",className:"submit",onClick:()=>n(),disabled:r||!i,children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Mx}),"Submit",r&&"ting"]})})]})},Xmt=t=>{const{setSection:e}=t,{api:n,network:r}=u$(),{units:i}=r,{setStatus:o,setResize:a,config:s}=tht(),{activeAccount:l,accountHasSigner:u}=btt(),{getBondOptions:c}=Ntt(),{bondType:h}=s,{getPoolBondOptions:d}=Gtt(),f=c(l),p=d(l),m="stake"===h,g="pool"===h,{freeToBond:y}=g?p:f,v=mg(y,i),[b,w]=(0,k.useState)({bond:v}),[x,M]=(0,k.useState)(!1);(0,k.useEffect)((()=>{w({bond:v})}),[v]),(0,k.useEffect)((()=>{a()}),[b]);const{submitTx:S,estimatedFee:C,submitting:P}=Vft({tx:(()=>{let t=null;if(!x||!n||!l)return t;const e=gg(b.bond,i);return g?t=n.tx.nominationPools.bondExtra({FreeBalance:e}):m&&(t=n.tx.staking.bondExtra(e)),t})(),from:l,shouldSubmit:x,callbackSubmit:()=>{o(0)},callbackInBlock:()=>{}}),T=(0,Jd.jsxs)("p",{children:["Estimated Tx Fee: ",null===C?"...":`${C}`]}),A=[];return u(l)||A.push("Your account is read only, and cannot sign transactions."),(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)("div",{className:"items",children:(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(Sft,{bondType:h,unbond:!1,listenIsValid:M,defaultBond:v,setters:[{set:w,current:b}],warnings:A}),(0,Jd.jsx)(Zpt,{children:T})]})}),(0,Jd.jsx)(qmt,{setSection:e,submitTx:S,submitting:P,isValid:x&&u(l)})]})},Zmt=t=>{const{setSection:e}=t,{api:n,network:r}=u$(),{units:i}=r,{setStatus:o,setResize:a,config:s}=tht(),{activeAccount:l,accountHasSigner:u}=btt(),{getBondOptions:c}=Ntt(),{bondType:h}=s,{getPoolBondOptions:d}=Gtt(),f=c(l),p=d(l),m="stake"===h,g="pool"===h,{freeToBond:y}=g?p:f,{totalPossibleBond:v}=g?p:f,b=mg(y,i),w=mg(v,i),[x,M]=(0,k.useState)({bond:b}),[S,C]=(0,k.useState)(!1);(0,k.useEffect)((()=>{const t=b;M({bond:t}),C(t>0)}),[b]),(0,k.useEffect)((()=>{a()}),[x]);const{submitTx:P,estimatedFee:T,submitting:A}=Vft({tx:(()=>{let t=null;if(!S||!n||!l)return t;const e=gg(x.bond,i);return g?t=n.tx.nominationPools.bondExtra({FreeBalance:e}):m&&(t=n.tx.staking.bondExtra(e)),t})(),from:l,shouldSubmit:S,callbackSubmit:()=>{o(0)},callbackInBlock:()=>{}}),N=(0,Jd.jsxs)("p",{children:["Estimated Tx Fee: ",null===T?"...":`${T}`]});return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)("div",{className:"items",children:(0,Jd.jsxs)(Jd.Fragment,{children:[!u(l)&&(0,Jd.jsx)(kft,{text:"Your account is read only, and cannot sign transactions."}),0===b&&(0,Jd.jsx)(kft,{text:`You have no free ${r.unit} to bond.`}),(0,Jd.jsx)("h4",{children:"Amount to bond:"}),(0,Jd.jsxs)("h2",{children:[b," ",r.unit]}),(0,Jd.jsxs)("p",{children:["This amount of ",r.unit," will be added to your current bonded funds."]}),(0,Jd.jsx)(Xpt,{}),(0,Jd.jsx)("h4",{children:"New total bond:"}),(0,Jd.jsxs)("h2",{children:[w," ",r.unit]}),(0,Jd.jsx)(Zpt,{children:N})]})}),(0,Jd.jsx)(qmt,{setSection:e,submitTx:P,submitting:A,isValid:S&&u(l)})]})},Ymt=t=>{const{setSection:e}=t,{api:n,network:r}=u$(),{units:i}=r,{setStatus:o,setResize:a,config:s}=tht(),{activeAccount:l,accountHasSigner:u}=btt(),{staking:c,getControllerNotImported:h}=Rtt(),{getBondOptions:d,getBondedAccount:f}=Ntt(),{bondType:p}=s,{stats:m}=Wtt(),{getPoolBondOptions:g}=Gtt(),y=f(l),v=h(y),{minNominatorBond:b}=c,w=d(l),x=g(l),M="stake"===p,S="pool"===p,{minJoinBond:C}=m,{freeToUnbond:P}=S?x:w,T=mg(P,i),A=mg(C,i),N=mg(b,i),[O,j]=(0,k.useState)({bond:T}),[E,V]=(0,k.useState)(!1),I=S?Math.max(T-A,0):Math.max(T-N,0),R=!!S||!v;(0,k.useEffect)((()=>{j({bond:I}),V(R)}),[I,R]),(0,k.useEffect)((()=>{a()}),[O]);const z=S?l:y,{submitTx:L,estimatedFee:H,submitting:B}=Vft({tx:(()=>{let t=null;if(!E||!n||!l)return t;if(M&&v)return t;const e=gg(O.bond,i);return S?t=n.tx.nominationPools.unbond(l,e):M&&(t=n.tx.staking.unbond(e)),t})(),from:z,shouldSubmit:E,callbackSubmit:()=>{o(0)},callbackInBlock:()=>{}}),D=(0,Jd.jsxs)("p",{children:["Estimated Tx Fee: ",null===H?"...":`${H}`]}),F=[];return u(l)||F.push("Your account is read only, and cannot sign transactions."),(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)("div",{className:"items",children:(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(Sft,{bondType:p,unbond:!0,listenIsValid:V,defaultBond:I,setters:[{set:j,current:O}],warnings:F}),(0,Jd.jsxs)(Zpt,{children:[(0,Jd.jsx)("p",{children:"Once unbonding, you must wait 28 days for your funds to become available."}),D]})]})}),(0,Jd.jsx)(qmt,{setSection:e,submitTx:L,submitting:B,isValid:E&&u(z)})]})},Kmt=t=>{const{setSection:e}=t,{api:n,network:r}=u$(),{units:i}=r,{setStatus:o,setResize:a,config:s}=tht(),{activeAccount:l,accountHasSigner:u}=btt(),{getControllerNotImported:c}=Rtt(),{getBondOptions:h,getBondedAccount:d,getAccountNominations:f}=Ntt(),{bondType:p}=s,{getPoolBondOptions:m}=Gtt(),g=d(l),y=f(l),v=c(g),b=h(l),w=m(l),x="stake"===p,M="pool"===p,{freeToUnbond:S}=M?w:b,C=mg(S,i),[P,T]=(0,k.useState)({bond:C}),[A,N]=(0,k.useState)(!1),O=(()=>{let t=!1;return t=M?C>0:C>0&&0===y.length&&!v,t})();(0,k.useEffect)((()=>{T({bond:C}),N(O)}),[C,O]),(0,k.useEffect)((()=>{a()}),[P]);const j=M?l:g,{submitTx:E,estimatedFee:V,submitting:I}=Vft({tx:(()=>{let t=null;if(!A||!n||!l)return t;if(x&&v)return t;const e=gg(P.bond,i);return M?t=n.tx.nominationPools.unbond(l,e):x&&(t=n.tx.staking.unbond(e)),t})(),from:j,shouldSubmit:A,callbackSubmit:()=>{o(0)},callbackInBlock:()=>{}}),R=(0,Jd.jsxs)("p",{children:["Estimated Tx Fee: ",null===V?"...":`${V}`]});return(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)("div",{className:"items",children:(0,Jd.jsxs)(Jd.Fragment,{children:[!u(j)&&(0,Jd.jsx)(kft,{text:"Your account is read only, and cannot sign transactions."}),x&&v?(0,Jd.jsx)(kft,{text:"You must have your controller account imported to unbond."}):(0,Jd.jsx)(Jd.Fragment,{}),x&&y.length?(0,Jd.jsx)(kft,{text:"Stop nominating before unbonding all funds."}):(0,Jd.jsx)(Jd.Fragment,{}),(0,Jd.jsx)("h4",{children:"Amount to unbond:"}),(0,Jd.jsxs)("h2",{children:[C," ",r.unit]}),(0,Jd.jsx)(Xpt,{}),(0,Jd.jsxs)(Zpt,{children:[(0,Jd.jsx)("p",{children:"Once unbonding, you must wait 28 days for your funds to become available."}),A&&R]})]})}),(0,Jd.jsx)(qmt,{setSection:e,submitTx:E,submitting:I,isValid:A&&u(j)})]})},Gmt=(0,k.forwardRef)(((t,e)=>{const{task:n}=t;return(0,Jd.jsxs)(Umt,{ref:e,children:["bond_some"===n&&(0,Jd.jsx)(Xmt,{...t}),"bond_all"===n&&(0,Jd.jsx)(Zmt,{...t}),"unbond_some"===n&&(0,Jd.jsx)(Ymt,{...t}),"unbond_all"===n&&(0,Jd.jsx)(Kmt,{...t})]})})),Jmt=()=>{const{config:t,setModalHeight:e}=tht(),{fn:n,bondType:r}=t,[i,o]=(0,k.useState)(null),[a,s]=(0,k.useState)(0),l=(0,k.useRef)(null),u=(0,k.useRef)(null),c=(0,k.useRef)(null);return(0,k.useEffect)((()=>{var t,n;let r=null!==(t=null===(n=l.current)||void 0===n?void 0:n.clientHeight)&&void 0!==t?t:0;var i,o,s,h;0===a?r+=null!==(i=null===(o=u.current)||void 0===o?void 0:o.clientHeight)&&void 0!==i?i:0:r+=null!==(s=null===(h=c.current)||void 0===h?void 0:h.clientHeight)&&void 0!==s?s:0;e(r)}),[a,i]),(0,Jd.jsxs)(Bmt,{children:[(0,Jd.jsx)(Dmt,{ref:l,children:(0,Jd.jsxs)(Wpt,{children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:"add"===n?Yw:Dw}),"add"===n?"Add To":"Remove"," Bond"]})}),(0,Jd.jsxs)(Fmt,{animate:0===a?"home":"next",transition:{duration:.5,type:"spring",bounce:.1},variants:{home:{left:0},next:{left:"-100%"}},children:[(0,Jd.jsx)(Wmt,{setSection:s,setTask:o,ref:u}),(0,Jd.jsx)(Gmt,{setSection:s,task:i,ref:c,bondType:r})]})]})},Qmt=t=>{var e,n;const{items:r,onChange:i,label:o,placeholder:a,value:s,current:l}=t,[u,c]=(0,k.useState)(r),h=hft({items:u,itemToString:t=>{var e;return null!==(e=null===t||void 0===t?void 0:t.name)&&void 0!==e?e:""},onSelectedItemChange:i,initialSelectedItem:s,onInputValueChange:()=>{c(r)}});return(0,Jd.jsx)(Nmt,{children:(0,Jd.jsxs)("div",{children:[o&&(0,Jd.jsx)("div",{className:"label",...h.getLabelProps(),children:o}),(0,Jd.jsxs)("div",{style:{position:"relative"},children:[(0,Jd.jsxs)("div",{className:"current",children:[(0,Jd.jsx)("div",{className:"input-wrap selected",children:(0,Jd.jsx)("input",{className:"input",disabled:!0,value:null!==(e=null===l||void 0===l?void 0:l.name)&&void 0!==e?e:""})}),(0,Jd.jsx)("span",{children:(0,Jd.jsx)(tw,{icon:nw})}),(0,Jd.jsx)("div",{className:"input-wrap selected",...h.getComboboxProps(),children:(0,Jd.jsx)("input",{className:"input",disabled:!0,...h.getInputProps({placeholder:a}),value:null!==(n=null===s||void 0===s?void 0:s.name)&&void 0!==n?n:"..."})})]}),(0,Jd.jsx)(jmt,{...h.getMenuProps(),children:(0,Jd.jsx)("div",{className:"items",children:u.map(((t,e)=>(0,Jd.jsx)(_mt,{c:h,item:t,index:e},`controller_acc_${e}`)))})})]})]})})},_mt=t=>{var e,n;let{c:r,item:i,index:o}=t;const{network:a}=u$(),{mode:s}=Og(),l=(null===(e=r.selectedItem)||void 0===e?void 0:e.key)===i.key?tc[`${a.name}-${s}`]:Qu.text.primary[s],u=(null===(n=r.selectedItem)||void 0===n?void 0:n.key)===i.key?`2px solid ${tc[`${a.name}-${s}`]}`:`2px solid ${Qu.transparent[s]}`;return(0,Jd.jsx)("div",{className:"item",...r.getItemProps({key:i.name,index:o,item:i}),style:{color:l,border:u},children:(0,Jd.jsx)("p",{children:i.name})})},$mt=()=>{const{api:t}=u$(),{activeAccount:e}=btt(),{getBondedAccount:n}=Ntt(),{setStatus:r}=tht(),i=n(e),{staking:o,getControllerNotImported:a}=Rtt(),{payee:s}=o,l=Tt.find((t=>t.key===s)),[u,c]=(0,k.useState)(null);(0,k.useEffect)((()=>{c(null)}),[e]),(0,k.useEffect)((()=>{const t=Tt.find((t=>t.key===(null===u||void 0===u?void 0:u.key)));d(void 0!==t)}),[u]);const[h,d]=(0,k.useState)(!1),{submitTx:f,estimatedFee:p,submitting:m}=Vft({tx:(()=>{let e=null;return t&&h?(e=t.tx.staking.setPayee(u.key),e):e})(),from:i,shouldSubmit:h,callbackSubmit:()=>{r(0)},callbackInBlock:()=>{}}),g=Tt.filter((t=>t.key!==l.key));return(0,Jd.jsxs)(Upt,{verticalOnly:!0,children:[(0,Jd.jsxs)(Wpt,{children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:bx}),"Update Reward Destination"]}),(0,Jd.jsxs)("div",{style:{padding:"0 1rem",width:"100%",boxSizing:"border-box"},children:[a(i)&&(0,Jd.jsx)(kft,{text:"You must have your controller account imported to update your reward destination"}),(0,Jd.jsx)(Qmt,{items:g,onChange:t=>{let{selectedItem:e}=t;c(e)},placeholder:"Reward Destination",value:u,current:l,height:"17rem"}),(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("p",{children:["Estimated Tx Fee:"," ",null===p?"...":`${p}`]})}),(0,Jd.jsx)(qpt,{children:(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("button",{type:"button",className:"submit",onClick:()=>f(),disabled:!h||m||a(i),children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Mx}),"Submit"]})})})]})]})},tgt=()=>{const{api:t}=u$(),{activeAccount:e,accountHasSigner:n}=btt(),{getBondedAccount:r,getAccountNominations:i}=Ntt(),{setStatus:o,config:a}=tht(),{membership:s}=Ytt(),{poolNominations:l,isNominator:u}=Gtt(),{nominations:c,provider:h,bondType:d}=a,f="pool"===d,p="stake"===d,m=r(e),g=f?e:m,y=!0===f?l.targets:i(e),v=y.length-c.length,b=c.length,[w,x]=(0,k.useState)(!1);(0,k.useEffect)((()=>{x(y.length>0)}),[y]);let M=y.length>0;f&&(M=s&&u()&&c.length>0),(0,k.useEffect)((()=>{x(M)}),[M]);const{submitTx:S,estimatedFee:C,submitting:P}=Vft({tx:(()=>{let e=null;if(!w||!t)return e;const n=c.map((t=>f?null===t||void 0===t?void 0:t.address:{Id:t}));return f&&0!==b?e=t.tx.nominationPools.nominate(s.poolId,n):p&&0!==b?e=t.tx.staking.nominate(n):p&&0===b&&(e=t.tx.staking.chill()),e})(),from:g,shouldSubmit:w,callbackSubmit:()=>{o(0),h&&(h.setSelectActive(!1),h.resetSelected())},callbackInBlock:()=>{}});return(0,Jd.jsxs)(Upt,{verticalOnly:!0,children:[(0,Jd.jsxs)(Wpt,{children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:xw}),"Stop Nominating"]}),(0,Jd.jsxs)("div",{style:{padding:"0 1rem",width:"100%",boxSizing:"border-box"},children:[!y.length&&(0,Jd.jsx)(kft,{text:"You have no nominations set."}),f&&!c.length&&(0,Jd.jsx)(kft,{text:"A pool needs to have at least one nomination. If the intention is to delete the pool, the pool owner can destroy it."}),!n(g)&&(0,Jd.jsx)(kft,{text:`You must have your${"stake"===d?" controller":" "}account imported to stop nominating.`}),(0,Jd.jsxs)("h2",{children:["Stop ",b?`${v} Nomination`:"All Nomination",1===b?"":"s"]}),(0,Jd.jsx)(Xpt,{}),(0,Jd.jsxs)(Zpt,{children:[(0,Jd.jsx)("p",{children:"Once submitted, your nominations will be removed from your dashboard immediately, and will not be nominated from the start of the next era."}),(0,Jd.jsxs)("p",{children:["Estimated Tx Fee:"," ",null===C?"...":`${C}`]})]}),(0,Jd.jsx)(qpt,{children:(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("button",{type:"button",className:"submit",onClick:()=>S(),disabled:!w||P||!n(g),children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Mx}),"Submit"]})})})]})]})},egt=()=>{const{api:t,network:e}=u$(),{activeAccount:n}=btt(),{targets:r,staking:i,getControllerNotImported:o}=Rtt(),{getBondedAccount:a,getLedgerForStash:s}=Ntt(),{setStatus:l}=tht(),{units:u}=e,{minNominatorBond:c}=i,h=a(n),{nominations:d}=r,f=s(n),{active:p}=f,m=mg(p,u),g=mg(c,u),[y,v]=(0,k.useState)(!1);(0,k.useEffect)((()=>{v(d.length>0&&m>=g)}),[r]);const{submitTx:b,estimatedFee:w,submitting:x}=Vft({tx:(()=>{let e=null;if(!y||!t)return e;const n=d.map((t=>({Id:t.address})));return e=t.tx.staking.nominate(n),e})(),from:h,shouldSubmit:y,callbackSubmit:()=>{l(0)},callbackInBlock:()=>{}}),M=[];return o(h)&&M.push("You must have your controller account imported to start nominating"),d.length||M.push("You have no nominations set."),m<g&&M.push(`You do not meet the minimum nominator bond of ${g} ${e.unit}. Please bond some funds before nominating.`),(0,Jd.jsxs)(Upt,{verticalOnly:!0,children:[(0,Jd.jsxs)(Wpt,{children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:yw}),"Nominate"]}),(0,Jd.jsxs)("div",{style:{padding:"0 1rem",width:"100%",boxSizing:"border-box"},children:[M.map(((t,e)=>(0,Jd.jsx)(kft,{text:t}))),(0,Jd.jsxs)("h2",{children:["You Have ",d.length," Nomination",1===d.length?"":"s"]}),(0,Jd.jsx)(Xpt,{}),(0,Jd.jsxs)(Zpt,{children:[(0,Jd.jsx)("p",{children:"Once submitted, you will start nominating your chosen validators."}),(0,Jd.jsxs)("p",{children:["Estimated Tx Fee:"," ",null===w?"...":`${w}`]})]}),(0,Jd.jsx)(qpt,{children:(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("button",{type:"button",className:"submit",onClick:()=>b(),disabled:!y||x||M.length,children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Mx}),"Submit"]})})})]})]})},ngt=pn.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
`,rgt=pn.div`
  box-sizing: border-box;
  padding-top: 1rem;
  flex-basis: 50%;
`,igt=pn(Yu.div)`
  box-sizing: border-box;
  width: 200%;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
  height: 100%;
`,ogt=pn.div`
  box-sizing: border-box;
  border-radius: 1rem;
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 50%;
  flex: 1;
  padding: 0 1rem;
`,agt=pn.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  margin: 1rem 0;

  > div {
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    padding: 0 0.5rem;

    > section {
      display: flex;
      flex-flow: column wrap;
      justify-content: flex-end;
      align-items: flex-start;
      padding: 0.5rem 0;

      &:first-child {
        flex-grow: 1;
      }
    }
  }

  h2 {
    margin: 0.75rem 0 0 0;
  }
  h3 {
    color: ${ic};
    margin: 1rem 0 0 0;
  }
  h4 {
    background: ${t=>t.noFill?"none":bc};
    padding: ${t=>t.noFill?"0 0.5rem":"0.5rem"};
    color: ${ic};
    box-sizing: border-box;
    margin: 0;
    width: 100%;
    border-radius: 0.75rem;
  }
`,sgt=(0,k.forwardRef)(((t,e)=>{let{unlocking:n,bondType:r,setSection:i,setUnlock:o,setTask:a}=t;const{network:s,consts:l}=u$(),{metrics:u}=Mtt(),{bondDuration:c}=l,{units:h}=s,{activeEra:d}=u,f="stake"===r;let p=new(sf())(0);for(const m of n){const{era:t,value:e}=m;t-d.index<=0&&(p=p.add(e))}return(0,Jd.jsxs)(ogt,{ref:e,children:[p.toNumber()>0&&(0,Jd.jsx)(Jd.Fragment,{children:(0,Jd.jsxs)(agt,{noFill:!0,children:[(0,Jd.jsx)("h4",{children:"Available to Withdraw"}),(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)("section",{children:(0,Jd.jsxs)("h2",{children:[mg(p,h)," ",s.unit]})}),(0,Jd.jsx)("section",{children:(0,Jd.jsx)("div",{children:(0,Jd.jsx)(Qct,{small:!0,inline:!0,primary:!0,title:"Withdraw",onClick:()=>{a("withdraw"),o({era:0,value:p}),i(1)}})})})]})]})}),0===n.length&&(0,Jd.jsx)("h2",{children:"No Unlocks"}),n.map(((t,e)=>{const{era:n,value:r}=t,l=n-d.index;return(0,Jd.jsxs)(agt,{children:[(0,Jd.jsx)("h4",{children:l<=0?"Unlocked":`Unlocks after era ${n}`}),(0,Jd.jsxs)("div",{children:[(0,Jd.jsxs)("section",{children:[(0,Jd.jsxs)("h2",{children:[mg(r,h)," ",s.unit]}),l>0?(0,Jd.jsxs)("h3",{children:[l," era",1!==l&&"s"," remaining before withdraw."]}):(0,Jd.jsx)("h3",{children:"Available to withdraw"})]}),f&&(0,Jd.jsx)("section",{children:(0,Jd.jsx)("div",{children:(0,Jd.jsx)(Qct,{small:!0,inline:!0,primary:!0,title:"Rebond",onClick:()=>{a("rebond"),o(t),i(1)}})})})]}),(0,Jd.jsx)(Xpt,{})]},`unlock_chunk_${e}`)})),(0,Jd.jsx)(Zpt,{children:(0,Jd.jsxs)("p",{children:["Unlocks take ",c," eras before they can be withdrawn. You can rebond unlocks at any time in this period, or withdraw them to your free balance thereafter."]})})]})})),lgt=(0,k.forwardRef)(((t,e)=>{var n,r,i;let{setSection:o,unlock:a,task:s}=t;const{api:l,network:u}=u$(),{activeAccount:c,accountHasSigner:h}=btt(),{staking:d}=Rtt(),{activeBondedPool:f}=Gtt(),{setStatus:p,config:m}=tht(),{bondType:g}=m||{},{getBondedAccount:y}=Ntt(),{historyDepth:v}=d,{units:b}=u,w=y(c),x="stake"===g,M="pool"===g,[S,C]=(0,k.useState)(null!==(n=(null===a||void 0===a||null===(r=a.value)||void 0===r?void 0:r.toNumber())>0)&&void 0!==n&&n);(0,k.useEffect)((()=>{var t,e;C(null!==(t=(null===a||void 0===a||null===(e=a.value)||void 0===e?void 0:e.toNumber())>0)&&void 0!==t&&t)}),[a]);const P=x?w:c,{submitTx:T,estimatedFee:A,submitting:N}=Vft({tx:(()=>{let t=null;return S&&l?("rebond"===s&&x?t=l.tx.staking.rebond(a.value.toNumber()):"withdraw"===s&&x?t=l.tx.staking.withdrawUnbonded(v):"withdraw"===s&&M&&f&&(t=l.tx.nominationPools.withdrawUnbonded(c,null===f||void 0===f?void 0:f.slashingSpansCount)),t):t})(),from:P,shouldSubmit:S,callbackSubmit:()=>{p(0)},callbackInBlock:()=>{}}),O=null!==(i=null===a||void 0===a?void 0:a.value)&&void 0!==i?i:new(sf())(0);return(0,Jd.jsx)(ogt,{children:(0,Jd.jsxs)("div",{ref:e,style:{paddingBottom:"1rem"},children:[(0,Jd.jsxs)("div",{children:[!h(P)&&(0,Jd.jsx)(kft,{text:"Your account is read only, and cannot sign transactions."}),"rebond"===s&&(0,Jd.jsxs)("h2",{children:["Rebond ",mg(O,b)," ",u.unit]}),"withdraw"===s&&(0,Jd.jsxs)("h2",{children:["Withdraw ",mg(O,b)," ",u.unit]}),(0,Jd.jsx)(Xpt,{}),(0,Jd.jsx)(Zpt,{children:(0,Jd.jsxs)("p",{children:["Estimated Tx Fee:"," ",null===A?"...":`${A}`]})})]}),(0,Jd.jsxs)(qpt,{children:[(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("button",{type:"button",className:"submit",onClick:()=>o(0),children:[(0,Jd.jsx)(tw,{transform:"shrink-2",icon:uw}),"Back"]})}),(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("button",{type:"button",className:"submit",onClick:()=>T(),disabled:!S||N||!h(P),children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Mx}),"Submit"]})})]})]})})})),ugt=()=>{const{activeAccount:t}=btt(),{config:e,setModalHeight:n}=tht(),{bondType:r}=e||{},{getLedgerForStash:i}=Ntt(),{getPoolUnlocking:o}=Gtt(),a=(()=>{let e,n=[];switch(r){case"stake":e=i(t),n=e.unlocking;break;case"pool":n=o();break;default:console.error(`unlocking modal bond-type ${r} is not defined.`)}return n})(),[s,l]=(0,k.useState)(0),[u,c]=(0,k.useState)(null),[h,d]=(0,k.useState)(null),f=(0,k.useRef)(null),p=(0,k.useRef)(null),m=(0,k.useRef)(null);return(0,k.useEffect)((()=>{var t,e;let r=null!==(t=null===(e=f.current)||void 0===e?void 0:e.clientHeight)&&void 0!==t?t:0;var i,o,a,l;0===s?r+=null!==(i=null===(o=p.current)||void 0===o?void 0:o.clientHeight)&&void 0!==i?i:0:r+=null!==(a=null===(l=m.current)||void 0===l?void 0:l.clientHeight)&&void 0!==a?a:0;n(r)}),[u,s]),(0,Jd.jsxs)(ngt,{children:[(0,Jd.jsx)(rgt,{ref:f,children:(0,Jd.jsxs)(Wpt,{children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Bw}),a.length>0&&`${a.length} `,"Unlock",1===a.length?"":"s"]})}),(0,Jd.jsxs)(igt,{animate:0===s?"home":"next",transition:{duration:.5,type:"spring",bounce:.1},variants:{home:{left:0},next:{left:"-100%"}},children:[(0,Jd.jsx)(sgt,{unlocking:a,bondType:r,setSection:l,setUnlock:d,setTask:c,ref:p}),(0,Jd.jsx)(lgt,{setSection:l,unlock:h,task:u,ref:m})]})]})},cgt=pn.div`
  width: 100%;
  box-sizing: border-box;
`,hgt=()=>{const{api:t,network:e}=u$(),{units:n}=e,{setStatus:r,setResize:i}=tht(),{activeAccount:o,accountHasSigner:a}=btt(),{getBondOptions:s}=Ntt(),{freeToBond:l}=s(o),[u,c]=(0,k.useState)({bond:mg(l,n)}),[h,d]=(0,k.useState)(!0);(0,k.useEffect)((()=>{i()}),[u]);const{submitTx:f,estimatedFee:p,submitting:m}=Vft({tx:(()=>{let e=null;if(!h||!o)return e;const r=gg(u.bond,n);return e=t.tx.nominationPools.create(r,o,o,o),e})(),from:o,shouldSubmit:h,callbackSubmit:()=>{r(0)},callbackInBlock:()=>{}}),g=(0,Jd.jsxs)("p",{children:["Estimated Tx Fee: ",null===p?"...":`${p}`]}),y=[];return a(o)||y.push("Your account is read only, and cannot sign transactions."),(0,Jd.jsxs)(cgt,{children:[(0,Jd.jsx)("div",{children:(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(Sft,{bondType:"pool",unbond:!1,listenIsValid:d,defaultBond:mg(l,n),setters:[{set:c,current:u}],warnings:y}),(0,Jd.jsx)(Zpt,{children:g})]})}),(0,Jd.jsx)(qpt,{children:(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("button",{type:"button",className:"submit",onClick:()=>f(),disabled:m||!h||!a(o),children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Mx}),"Submit",m&&"ting"]})})})]})},dgt=()=>(0,Jd.jsxs)(Upt,{children:[(0,Jd.jsxs)(Wpt,{children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Yw}),"Create Pool"]}),(0,Jd.jsx)(hgt,{})]}),fgt=()=>{const{api:t}=u$(),{setStatus:e}=tht(),{activeAccount:n,accountHasSigner:r}=btt(),{membership:i}=Ytt(),{isNominator:o,targets:a}=Gtt(),{nominations:s}=a,l=null===i||void 0===i?void 0:i.poolId,[u,c]=(0,k.useState)(!1),h=i&&o()&&s.length>0;(0,k.useEffect)((()=>{c(h)}),[h]);const{submitTx:d,estimatedFee:f,submitting:p}=Vft({tx:(()=>{let e=null;if(!u)return e;const n=s.map((t=>t.address));return e=t.tx.nominationPools.nominate(l,n),e})(),from:n,shouldSubmit:u,callbackSubmit:()=>{e(0)},callbackInBlock:()=>{}}),m=[];return r(n)||m.push("Your account is read only, and cannot sign transactions."),s.length||m.push("You have no nominations set."),i&&o()||m.push("You do not have a nominator role in any pools."),(0,Jd.jsxs)(Upt,{verticalOnly:!0,children:[(0,Jd.jsxs)(Wpt,{children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:yw}),"Nominate"]}),(0,Jd.jsxs)("div",{style:{padding:"0 1rem",width:"100%",boxSizing:"border-box"},children:[m.map(((t,e)=>(0,Jd.jsx)(kft,{text:t},`warning_${e}`))),(0,Jd.jsxs)("h2",{children:["You Have ",s.length," Nomination",1===s.length?"":"s"]}),(0,Jd.jsx)(Xpt,{}),(0,Jd.jsxs)(Zpt,{children:[(0,Jd.jsx)("p",{children:"Once submitted, you will start nominating your chosen validators."}),(0,Jd.jsxs)("p",{children:["Estimated Tx Fee:"," ",null===f?"...":`${f}`]})]}),(0,Jd.jsx)(qpt,{children:(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("button",{type:"button",className:"submit",onClick:()=>d(),disabled:!u||p||m.length||!r(n),children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Mx}),"Submit"]})})})]})]})},pgt=pn.div`
  width: 100%;
  box-sizing: border-box;
`,mgt=()=>{const{api:t,network:e}=u$(),{units:n}=e,{setStatus:r,config:i,setResize:o}=tht(),{id:a,setActiveTab:s}=i,{activeAccount:l,accountHasSigner:u}=btt(),{getBondOptions:c}=Ntt(),{freeToBond:h}=c(l),[d,f]=(0,k.useState)({bond:mg(h,n)}),[p,m]=(0,k.useState)(!0);(0,k.useEffect)((()=>{o()}),[d]);const{submitTx:g,estimatedFee:y,submitting:v}=Vft({tx:(()=>{let e=null;if(!p)return e;const r=gg(d.bond,n);return e=t.tx.nominationPools.join(r,a),e})(),from:l,shouldSubmit:p,callbackSubmit:()=>{r(0),s(0)},callbackInBlock:()=>{}}),b=(0,Jd.jsxs)("p",{children:["Estimated Tx Fee: ",null===y?"...":`${y}`]}),w=[];return u(l)||w.push("Your account is read only, and cannot sign transactions."),(0,Jd.jsxs)(pgt,{children:[(0,Jd.jsx)("div",{children:(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(Sft,{bondType:"pool",unbond:!1,listenIsValid:m,defaultBond:mg(h,n),setters:[{set:f,current:d}],warnings:w}),(0,Jd.jsx)(Zpt,{children:b})]})}),(0,Jd.jsx)(qpt,{children:(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("button",{type:"button",className:"submit",onClick:()=>g(),disabled:v||!p||!u(l),children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Mx}),"Submit",v&&"ting"]})})})]})},ggt=()=>(0,Jd.jsxs)(Upt,{children:[(0,Jd.jsxs)(Wpt,{children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Yw}),"Join Pool"]}),(0,Jd.jsx)(mgt,{})]}),ygt=()=>(0,Jd.jsxs)(Upt,{children:[(0,Jd.jsxs)(Wpt,{noPadding:!0,children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Yw}),"Leave Pool"]}),(0,Jd.jsx)(Kmt,{})]}),vgt=pn.div`
  width: 100%;
  box-sizing: border-box;
`,bgt=()=>{const{api:t}=u$(),{setStatus:e,config:n}=tht(),{state:r}=n,{activeAccount:i,accountHasSigner:o}=btt(),{membership:a}=Ytt(),{isOwner:s}=Gtt(),l=null===a||void 0===a?void 0:a.poolId,[u,c]=(0,k.useState)(!1),h=a&&s();(0,k.useEffect)((()=>{c(h)}),[h]);const d=(()=>{let t,e;switch(r){case _ft.Destroy:t=(0,Jd.jsx)("h2",{children:"Destroying a Pool is Irreversible"}),e=(0,Jd.jsx)("p",{children:"Once you Destroy the pool, all members can be permissionlessly unbonded, and the pool can never be reopened."});break;case _ft.Open:t=(0,Jd.jsx)("h2",{children:"Submit Pool Unlock"}),e=(0,Jd.jsx)("p",{children:"Once you Unlock the pool new people can join the pool."});break;case _ft.Block:t=(0,Jd.jsx)("h2",{children:"Submit Pool Lock"}),e=(0,Jd.jsx)("p",{children:"Once you Lock the pool no one else can join the pool."});break;default:t=null,e=null}return{title:t,message:e}})(),{submitTx:f,estimatedFee:p,submitting:m}=Vft({tx:(()=>{let e=null;if(!u)return e;switch(r){case _ft.Destroy:e=t.tx.nominationPools.setState(l,_ft.Destroy);break;case _ft.Open:e=t.tx.nominationPools.setState(l,_ft.Open);break;case _ft.Block:e=t.tx.nominationPools.setState(l,_ft.Block);break;default:e=null}return e})(),from:i,shouldSubmit:!0,callbackSubmit:()=>{e(0)},callbackInBlock:()=>{}}),g=(0,Jd.jsxs)("p",{children:["Estimated Tx Fee: ",null===p?"...":`${p}`]});return(0,Jd.jsxs)(vgt,{children:[!o(i)&&(0,Jd.jsx)(kft,{text:"Your account is read only, and cannot sign transactions."}),(0,Jd.jsx)("div",{children:(0,Jd.jsxs)(Jd.Fragment,{children:[d.title,(0,Jd.jsx)(Yc,{}),(0,Jd.jsxs)(Zpt,{children:[d.message,g]})]})}),(0,Jd.jsxs)(qpt,{children:[(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("button",{type:"button",className:"submit",onClick:()=>e(0),disabled:m,children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Ax}),"Cancel"]})}),(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("button",{type:"button",className:"submit",onClick:()=>f(),disabled:m||!o(i),children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Mx}),"Submit",m&&"ting"]})})]})]})},wgt=()=>{const{config:t}=tht(),{state:e}=t;let n,r;switch(e){case _ft.Open:n="Unlock Pool",r=lx;break;case _ft.Block:n="Lock Pool",r=Hw;break;default:n="Destroy Pool",r=Ax}return(0,Jd.jsxs)(Upt,{children:[(0,Jd.jsxs)(Wpt,{noPadding:!0,children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:r}),n]}),(0,Jd.jsx)(bgt,{})]})},xgt=pn.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem 0;
`,Mgt=pn.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;

  .label {
    margin: 0.25rem 0 0.75rem 0;
  }
  .role-change {
    flex: 1;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    > span {
      margin: 0 0.75rem;
      color: ${ic};
      opacity: 0.5;
    }
  }

  .input-wrap {
    border-bottom: 1px solid ${Sc};
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    box-sizing: border-box;
    padding: 0.25rem 0 0 0;
    margin: 0.25rem 0.7rem 0 0.7rem;
    flex: 1;

    &.selected {
      border: 1px solid ${Sc};
      border-radius: 1rem;
      margin: 0;
      padding: 0.1rem 0.75rem;
    }
  }
  .input {
    border: none;
    box-sizing: border-box;
    padding-left: 0.75rem;
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`,kgt=xgt,Sgt=t=>{let{roleName:e,oldAddress:n,newAddress:r}=t;return(0,Jd.jsxs)(Mgt,{children:[(0,Jd.jsx)("div",{className:"label",children:e}),(0,Jd.jsxs)("div",{className:"role-change",children:[(0,Jd.jsxs)("div",{className:"input-wrap selected",children:[(0,Jd.jsx)(ort,{value:null!==n&&void 0!==n?n:"",size:dg("2rem")}),(0,Jd.jsx)("input",{className:"input",disabled:!0,value:n?hg(n):""})]}),(0,Jd.jsx)("span",{children:(0,Jd.jsx)(tw,{icon:nw})}),(0,Jd.jsxs)("div",{className:"input-wrap selected",children:[(0,Jd.jsx)(ort,{value:null!==r&&void 0!==r?r:"",size:dg("2rem")}),(0,Jd.jsx)("input",{className:"input",disabled:!0,value:r?hg(r):""})]})]})]})},Cgt=()=>{var t,e,n,r;const{api:i}=u$(),{setStatus:o}=tht(),{activeAccount:a,accountHasSigner:s}=btt(),{config:l}=tht(),{poolId:u,roleEdits:c}=l,{submitTx:h,estimatedFee:d,submitting:f}=Vft({tx:(()=>{var t,e,n,r,o;let a=null;const s=null!==c&&void 0!==c&&null!==(t=c.nominator)&&void 0!==t&&t.newAddress?{Set:null===c||void 0===c||null===(e=c.nominator)||void 0===e?void 0:e.newAddress}:"Remove",l=null!==c&&void 0!==c&&null!==(n=c.stateToggler)&&void 0!==n&&n.newAddress?{Set:null===c||void 0===c||null===(r=c.stateToggler)||void 0===r?void 0:r.newAddress}:"Remove";return a=null===i||void 0===i||null===(o=i.tx.nominationPools)||void 0===o?void 0:o.updateRoles(u,"Noop",s,l),a})(),from:a,shouldSubmit:!0,callbackSubmit:()=>{o(0)},callbackInBlock:()=>{}});return(0,Jd.jsxs)(kgt,{children:[(0,Jd.jsxs)(Wpt,{children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Qw}),"Change Pool Role"]}),(0,Jd.jsxs)("div",{style:{padding:"0 1rem",width:"100%",boxSizing:"border-box"},children:[(0,Jd.jsx)(Sgt,{roleName:"Nominator",oldAddress:null===c||void 0===c||null===(t=c.nominator)||void 0===t?void 0:t.oldAddress,newAddress:null===c||void 0===c||null===(e=c.nominator)||void 0===e?void 0:e.newAddress}),(0,Jd.jsx)(Sgt,{roleName:"State Toggler",oldAddress:null===c||void 0===c||null===(n=c.stateToggler)||void 0===n?void 0:n.oldAddress,newAddress:null===c||void 0===c||null===(r=c.stateToggler)||void 0===r?void 0:r.newAddress}),(0,Jd.jsx)(Zpt,{children:(0,Jd.jsxs)("p",{children:["Estimated Tx Fee:"," ",null===d?"...":`${d}`]})}),(0,Jd.jsx)(qpt,{children:(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("button",{type:"button",className:"submit",onClick:()=>h(),disabled:f||!s(a),children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Mx}),"Submit"]})})})]})]})},Pgt=new RegExp("(\\d+?)(?=(\\d{3})+(?!\\d)|$)","g");function Tgt(t){const e=t[0].startsWith("-"),n=e?t.substring(1).match(Pgt):t.match(Pgt);return n?`${e?"-":""}${n.join(",")}`:t}const Agt=[{power:-24,text:"yocto",value:"y"},{power:-21,text:"zepto",value:"z"},{power:-18,text:"atto",value:"a"},{power:-15,text:"femto",value:"f"},{power:-12,text:"pico",value:"p"},{power:-9,text:"nano",value:"n"},{power:-6,text:"micro",value:"\xb5"},{power:-3,text:"milli",value:"m"},{power:0,text:"Unit",value:"-"},{power:3,text:"Kilo",value:"k"},{power:6,text:"Mill",value:"M"},{power:9,text:"Bill",value:"B"},{power:12,text:"Tril",value:"T"},{power:15,text:"Peta",value:"P"},{power:18,text:"Exa",value:"E"},{power:21,text:"Zeta",value:"Z"},{power:24,text:"Yotta",value:"Y"}];function Ngt(t){for(let e=0;e<Agt.length;e++)if(Agt[e].value===t)return Agt[e];return Agt[8]}function Ogt(t,e,n){if(n)return Ngt(n);const r=7+Math.ceil((t.length-e)/3);return Agt[r]||Agt[r<0?0:Agt.length-1]}const jgt=Agt[8].text;let Egt=0,Vgt=jgt;function Igt(t,e,n,r){const i=T$(r)?Agt[8].text:r;return e||n?"-"===t.value?r?` ${i}`:"":` ${n?`${t.text}${r?" ":""}`:t.value}${r?i:""}`:""}function Rgt(t,e,n){const r=Ogt(t,e,n),i=t.length-(e+r.power);return[r,t.substring(0,i)||"0",`${`${new Array((i<0?0-i:0)+1).join("0")}${t}`.substring(i<0?0:i)}0000`.substring(0,4)]}const zgt=function(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Egt,r=V$(t).toString();if(0===r.length||"0"===r)return"0";const{decimals:i=n,forceUnit:o,withSi:a=!0,withSiFull:s=!1,withUnit:l=!0}=T$(e)?{withSi:e}:e;let u="";r[0].startsWith("-")&&(u="-",r=r.substring(1));const[c,h,d]=Rgt(r,i,o),f=Igt(c,a,s,l);return`${u}${Tgt(h)}.${d}${f}`};zgt.calcSi=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Egt;return Ogt(t,e)},zgt.findSi=Ngt,zgt.getDefaults=()=>({decimals:Egt,unit:Vgt}),zgt.getOptions=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Egt;return Agt.filter((e=>{let{power:n}=e;return!(n<0)||t+n>=0}))},zgt.setDefaults=t=>{let{decimals:e,unit:n}=t;Egt=cf(e)?Egt:Array.isArray(e)?e[0]:e,Vgt=cf(n)?Vgt:Array.isArray(n)?n[0]:n,Agt[8].text=Vgt};const Lgt=()=>{const{api:t,network:e}=u$(),{setStatus:n}=tht(),{activeBondedPool:r}=Gtt(),{activeAccount:i,accountHasSigner:o}=btt(),{units:a,unit:s}=e,{unclaimedReward:l}=r||{};(0,k.useEffect)((()=>{null!==l&&void 0!==l&&l.gtn(0)?c(!0):c(!1)}),[r]);const[u,c]=(0,k.useState)(!1),{submitTx:h,estimatedFee:d,submitting:f}=Vft({tx:(()=>{let e=null;return t?(e=t.tx.nominationPools.claimPayout(),e):e})(),from:i,shouldSubmit:u,callbackSubmit:()=>{n(0)},callbackInBlock:()=>{}});return(0,Jd.jsxs)(Upt,{verticalOnly:!0,children:[(0,Jd.jsxs)(Wpt,{children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:bx}),"Claim Payout"]}),(0,Jd.jsxs)("div",{style:{padding:"0 1rem",width:"100%",boxSizing:"border-box"},children:[!o(i)&&(0,Jd.jsx)(kft,{text:"Your account is read only, and cannot sign transactions."}),!(null!==l&&void 0!==l&&l.gtn(0))&&(0,Jd.jsx)(kft,{text:"You have no rewards to claim."}),(0,Jd.jsx)("h2",{children:zgt(l,{decimals:a,withSiFull:!0,withUnit:s})}),(0,Jd.jsx)(Xpt,{}),(0,Jd.jsx)("div",{className:"notes",children:(0,Jd.jsxs)("p",{children:["Estimated Tx Fee:"," ",null===d?"...":`${d}`]})}),(0,Jd.jsx)(qpt,{children:(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("button",{type:"button",className:"submit",onClick:()=>h(),disabled:!u||f||!o(i),children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:Mx}),"Submit"]})})})]})]})},Hgt=pn.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;

  > div {
    width: 100%;
  }
`,Bgt=pn.div`
  position: relative;
  bottom: 0px;
  left: 0px;
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  button {
    font-size: 1.2rem;
    color: ${Rc};

    &:disabled {
      opacity: 0.5;
      color: ${ic};
    }
  }
`,Dgt=()=>{const{consts:t}=u$(),{config:e,setStatus:n,setResize:r}=tht(),{favouritesList:i}=Qtt(),{maxNominations:o}=t,{nominations:a,callback:s}=e,[l,u]=(0,k.useState)([]),[c,h]=(0,k.useState)([]);(0,k.useEffect)((()=>{const t=i.filter((t=>!a.find((e=>e.address===t.address))&&!t.prefs.blocked));u(t)}),[]),(0,k.useEffect)((()=>{r()}),[c]);const d=a.length+c.length>o;return(0,Jd.jsxs)(Upt,{children:[(0,Jd.jsx)("h2",{children:"Add From Favourites"}),(0,Jd.jsx)(Hgt,{children:l.length>0?(0,Jd.jsx)(Dht,{validators:l,batchKey:"favourite_validators",title:"Favourite Validators",selectable:!0,selectActive:!0,selectToggleable:!1,onSelected:t=>{const{selected:e}=t;h(e)},refetchOnListUpdate:!0,showMenu:!1,inModal:!0}):(0,Jd.jsx)("h3",{children:"No Favourites Available."})}),(0,Jd.jsx)(Bgt,{children:(0,Jd.jsx)("button",{type:"button",disabled:!c.length||d,onClick:()=>(()=>{if(!c.length)return;const t=[...a].concat(...c);s(t),n(0)})(),children:c.length>0?d?`Adding this many favourites will surpass ${o} nominations.`:`Add ${c.length} Favourite${1!==c.length?"s":""} to Nominations`:"No Favourites Selected"})})]})},Fgt=pn.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;

  > div {
    width: 100%;
  }
`,Ugt=(pn.div`
  position: relative;
  bottom: 0px;
  left: 0px;
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  button {
    font-size: 1.2rem;
    color: ${Rc};

    &:disabled {
      opacity: 0.5;
      color: ${ic};
    }
  }
`,()=>{const{consts:t,api:e}=u$(),{activeAccount:n,accountHasSigner:r}=btt(),{getBondedAccount:i}=Ntt(),{config:o,setStatus:a,setResize:s}=tht(),{favouritesList:l}=Qtt(),{isNominator:u,isOwner:c}=Gtt(),h=i(n),{membership:d}=Ytt(),{maxNominations:f}=t,{bondType:p,nominations:m}=o,g="pool"===p?n:h,[y,v]=(0,k.useState)([]),[b,w]=(0,k.useState)([]);(0,k.useEffect)((()=>{const t=l.filter((t=>!m.find((e=>e===t.address))&&!t.prefs.blocked));v(t)}),[]);const x=m.concat(b.map((t=>t.address))),[M,S]=(0,k.useState)(!1);(0,k.useEffect)((()=>{s()}),[b]),(0,k.useEffect)((()=>{S(x.length>0&&x.length<=f&&b.length>0)}),[b]);const C=m.length+b.length>f,{submitTx:P,estimatedFee:T,submitting:A}=Vft({tx:(()=>{let t=null;if(!M||!e)return t;const n=x.map((t=>"pool"===p?t:{Id:t}));return t="pool"===p?e.tx.nominationPools.nominate(null===d||void 0===d?void 0:d.poolId,n):e.tx.staking.nominate(n),t})(),from:g,shouldSubmit:M,callbackSubmit:()=>{a(0)},callbackInBlock:()=>{}});return(0,Jd.jsxs)(Upt,{children:[(0,Jd.jsx)("h2",{children:"Nominate From Favourites"}),(0,Jd.jsx)("div",{style:{marginBottom:"1rem"},children:!r(g)&&(0,Jd.jsx)(kft,{text:`You must have your${"stake"===p?" controller":" "}account imported to add nominations.`})}),(0,Jd.jsx)(Fgt,{children:y.length>0?(0,Jd.jsx)(Dht,{validators:y,batchKey:"nominate_from_favourites",title:"Favourite Validators / Not Nominated",selectable:!0,selectActive:!0,selectToggleable:!1,onSelected:t=>{const{selected:e}=t;w(e)},refetchOnListUpdate:!0,showMenu:!1,inModal:!0}):(0,Jd.jsx)("h3",{children:"No Favourites Available."})}),(0,Jd.jsx)(Zpt,{style:{paddingBottom:0},children:(0,Jd.jsxs)("p",{style:{textAlign:"right"},children:["Estimated Tx Fee: ",null===T?"...":`${T}`]})}),(0,Jd.jsxs)(qpt,{children:[(0,Jd.jsx)("h3",{className:0===b.length||x.length>f?"":"active",children:b.length>0?C?`Adding this many favourites will surpass ${f} nominations.`:`Adding ${b.length} Nomination${1!==b.length?"s":""}`:"No Favourites Selected"}),(0,Jd.jsx)("div",{children:(0,Jd.jsxs)("button",{type:"button",className:"submit",onClick:()=>P(),disabled:!M||A||"pool"===p&&!u()&&!c()||!r(g),children:[(0,Jd.jsx)(tw,{transform:"grow-2",icon:kw}),"Submit"]})})]})]})}),Wgt=()=>{const{setModalHeight:t,setStatus:e,status:n,modal:r,size:i,height:o,resize:a}=tht(),s=function(){var t=Jn(Hpt);return(0,k.useEffect)(t.mount,[]),t}(),l=.8*window.innerHeight,u=async()=>{await s.start("hidden"),e(0)};(0,k.useEffect)((()=>{1===n&&(async()=>{await s.start("visible")})(),2===n&&u()}),[n]);const c=(0,k.useRef)(null);(0,k.useEffect)((()=>{h()}),[a]);const h=()=>{var e;let n=null===(e=c.current)||void 0===e?void 0:e.clientHeight;n=n>l?l:n,t(n)};return 0===n?(0,Jd.jsx)(Jd.Fragment,{}):(0,Jd.jsx)(Bpt,{initial:{opacity:0},animate:s,transition:{duration:.15},variants:{hidden:{opacity:0},visible:{opacity:1}},children:(0,Jd.jsxs)("div",{className:"content_wrapper",children:[(0,Jd.jsx)(Dpt,{size:i,style:{height:o,overflow:o>=l?"scroll":"hidden"},children:(0,Jd.jsxs)(Fpt,{ref:c,children:["ConnectAccounts"===r&&(0,Jd.jsx)(Pmt,{}),"ValidatorMetrics"===r&&(0,Jd.jsx)(Amt,{}),"Settings"===r&&(0,Jd.jsx)(Hmt,{}),"UpdateController"===r&&(0,Jd.jsx)(Rmt,{}),"UpdateBond"===r&&(0,Jd.jsx)(Jmt,{}),"UpdatePayee"===r&&(0,Jd.jsx)($mt,{}),"ChangeNominations"===r&&(0,Jd.jsx)(tgt,{}),"Nominate"===r&&(0,Jd.jsx)(egt,{}),"UnlockChunks"===r&&(0,Jd.jsx)(ugt,{}),"CreatePool"===r&&(0,Jd.jsx)(dgt,{}),"NominatePool"===r&&(0,Jd.jsx)(fgt,{}),"JoinPool"===r&&(0,Jd.jsx)(ggt,{}),"LeavePool"===r&&(0,Jd.jsx)(ygt,{}),"ChangePoolState"===r&&(0,Jd.jsx)(wgt,{}),"ChangePoolRoles"===r&&(0,Jd.jsx)(Cgt,{}),"ClaimReward"===r&&(0,Jd.jsx)(Lgt,{}),"SelectFavourites"===r&&(0,Jd.jsx)(Dgt,{}),"NominateFromFavourites"===r&&(0,Jd.jsx)(Ugt,{})]})}),(0,Jd.jsx)("button",{type:"button",className:"close",onClick:()=>{u()},children:"\xa0"})]})})},qgt=k.createContext({openSideBar:()=>{},closeSideBar:()=>{},open:0}),Xgt=()=>k.useContext(qgt),Zgt=pn(Yu.div)`
  position: fixed;
  right: -600px;
  top: 0;
  width: 100%;
  max-width: ${400}px;
  height: auto;
  max-height: 100%;
  z-index: 8;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`,Ygt=pn.div`
  background: ${Ac};
  backdrop-filter: blur(4px);
  border-radius: 1rem;
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 100%;
  margin: 0.85rem;
  overflow: hidden;
  max-height: 100%;

  > div {
    margin: 0.5rem;
    flex-grow: 1;
  }

  .account-label {
    min-width: 70px;
  }
`,Kgt=pn.div`
  display: flex;
  margin-left: 1rem;

  @media (min-width: ${1001}px) {
    display: none;
  }
`,Ggt=t=>{let{children:e}=t;const{closeSideBar:n,open:r}=Xgt(),i=(0,k.useRef)(null);$d(i,(()=>{n()}),["ignore-toggle-side-bar"]),(0,k.useEffect)((()=>(window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)})),[]);const o=aet()((()=>{window.innerWidth>=Ot&&n()}),200,{trailing:!0,leading:!1}),a=r?"visible":"hidden";return(0,Jd.jsx)(Zgt,{ref:i,initial:!1,animate:a,transition:{duration:.5,type:"spring",bounce:.2},variants:{hidden:{opacity:1,right:"-600px"},visible:{opacity:1,right:"0px"}},children:(0,Jd.jsx)(Ygt,{children:e})})},Jgt=pn.div`
  font-size: 10px;
  margin: 0;
  text-indent: -9999em;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #ccc;
  background: -moz-linear-gradient(left, #ccc 10%, rgba(255, 255, 255, 0) 42%);
  background: -webkit-linear-gradient(
    left,
    #ccc 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -o-linear-gradient(left, #ccc 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(left, #ccc 10%, rgba(255, 255, 255, 0) 42%);
  background: linear-gradient(to right, #ccc 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  -webkit-animation: load3 0.7s infinite linear;
  animation: load3 0.7s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  &:before {
    width: 50%;
    height: 50%;
    background: #ccc;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  &:after {
    background: ${lc};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`,Qgt=()=>(0,Jd.jsx)(Jgt,{}),_gt=pn.div`
  box-sizing: border-box;
  position: sticky;
  top: 0px;
  right: 0px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  padding: 0 1.25rem;
  transition: all 0.15s;
  z-index: 5;
  margin: 0.25rem 0;
  height: 4rem;

  /* no longer in use */
  .menu {
    display: none;
    @media (max-width: ${At}px) {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;
      flex-grow: 1;
    }
  }
`,$gt=pn.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  margin-left: 0.75rem;

  /* accounts dropdown */
  .accounts {
    background: ${dc};
    position: absolute;
    border-radius: 1rem;
    backdrop-filter: blur(4px);
    top: 3rem;
    right: 0;
    width: 100%;
    min-width: 250px;
    list-style: none;
    margin: 0;
    padding: 0rem 0.25rem;
    display: flex;
    flex-flow: column wrap;
    box-sizing: border-box;

    > button {
      margin: 0.25rem 0;
    }
  }
`,tyt=pn(Yu.button)`
  background: ${wc};
  border: 1px solid ${Sc};
  flex-grow: 1;
  padding: 0 1rem;
  border-radius: 1rem;
  box-shadow: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-variation-settings: 'wght' 540;
  font-size: 1rem;

  .label {
    border: 0.125rem solid ${Rc};
    border-radius: 0.8rem;
    color: ${Rc};
    font-size: 0.85rem;
    font-variation-settings: 'wght' 525;
    margin-right: 0.6rem;
    padding: 0.1rem 0.5rem;
  }

  > span {
    color: ${rc};
    line-height: 2.2rem;
  }
  &.connect {
    background: ${Rc};
    > span {
      color: ${oc};
      svg {
        color: white;
      }
    }
    .icon {
      margin-right: 0.4rem;
      path {
        fill: ${oc};
      }
    }
  }
  path {
    fill: ${rc};
  }
`,eyt=(pn(Yu.div)`
  flex-grow: 1;
  padding: 0 1rem;
  border-radius: 1rem;
  background: ${wc};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-variation-settings: 'wght' 540;
  font-size: 1rem;

  > span {
    color: ${rc};
    line-height: 2.2rem;
  }
`,pn.div`
  display: flex;
  @media (max-width: ${Ot}px) {
    display: none;
  }
`);var nyt,ryt;function iyt(){return iyt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},iyt.apply(this,arguments)}function oyt(t,e){let{title:n,titleId:r,...i}=t;return k.createElement("svg",iyt({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 508.043 508.043",width:"100%",height:"100%",ref:e,"aria-labelledby":r},i),n?k.createElement("title",{id:r},n):null,nyt||(nyt=k.createElement("path",{d:"M465.771 110.943h-18.5v-96.8c0-4.4-2.1-8.6-5.6-11.3s-8.1-3.5-12.4-2.3l-391.2 110.6c-21.3 2.2-38 20.2-38 42.1v312.4c0 23.4 19 42.4 42.3 42.4h423.3c23.3 0 42.3-19 42.3-42.3v-312.5c.1-23.3-18.9-42.3-42.2-42.3zm-46.7-78.1v78.1h-276.4l276.4-78.1zm60.7 432.8c.1 7.8-6.3 14.2-14 14.2h-423.4c-7.8 0-14.1-6.3-14.1-14.1v-115.5h25.2c7.8 0 14.1-6.3 14.1-14.1s-6.3-14.1-14.1-14.1h-25.2v-25.1h58.5c7.8 0 14.1-6.3 14.1-14.1s-6.3-14.1-14.1-14.1h-58.5v-115.5c0-7.8 6.3-14.1 14.1-14.1h423.3c7.8 0 14.1 6.3 14.1 14.1v88.8h-66.6c-37.2 0-67.4 30.2-67.4 67.4s30.2 67.4 67.4 67.4h66.6v88.8zm.1-116.9h-66.6c-21.6 0-39.2-17.6-39.2-39.2s17.6-39.2 39.2-39.2h66.6v78.4z"})),ryt||(ryt=k.createElement("path",{d:"M409.071 295.343h-1.4c-7.8 0-14.1 6.3-14.1 14.1s6.3 14.1 14.1 14.1h1.4c7.8 0 14.1-6.3 14.1-14.1s-6.3-14.1-14.1-14.1z"})))}const ayt=k.forwardRef(oyt),syt=(__webpack_require__.p,()=>{const{activeAccount:t}=btt(),{openSideBar:e,open:n}=Xgt(),r={flex:0},i=(0,Jd.jsx)("div",{style:{width:"1rem",height:"1rem",padding:"0.6rem 0",marginRight:"0.75rem"},children:(0,Jd.jsx)(ayt,{})});return(0,Jd.jsxs)(Kgt,{children:[!n&&t&&(0,Jd.jsxs)(tyt,{style:r,onClick:()=>{e()},whileHover:{scale:"1.01"},children:[i," Wallet"]}),n?(0,Jd.jsxs)(tyt,{style:r,children:[i," Wallet"]}):(0,Jd.jsx)(Jd.Fragment,{})]})}),lyt=()=>{const{openModalWith:t}=tht(),{activeAccount:e,accounts:n}=btt();return(0,Jd.jsx)(Jd.Fragment,{children:!e&&(0,Jd.jsx)($gt,{children:(0,Jd.jsxs)(tyt,{className:"connect",onClick:()=>{t("ConnectAccounts",{section:n.length?1:0},"large")},whileHover:{scale:1.02},children:[(0,Jd.jsx)(tw,{icon:bx,className:"icon"}),(0,Jd.jsx)("span",{children:"Connect"})]})})})},uyt=pn(Yu.button)`
  border-radius: 1rem;
  box-shadow: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  font-variation-settings: 'wght' 540;
  cursor: ${t=>t.cursor};
  background: ${t=>t.fill};
  font-size: ${t=>t.fontSize};
  padding: 0 1rem;
  max-width: 250px;
  flex: 1;

  .identicon {
    margin: 0.15rem 0.25rem 0 0;
  }

  .account-label {
    border-right: 1px solid ${Cc};
    color: ${ic};
    font-size: 0.8em;
    font-variation-settings: 'wght' 535;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
    margin-right: 0.5rem;
    padding-right: 0.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex-shrink: 1;
  }

  .title {
    color: ${rc};
    margin-left: 0.25rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 2.2rem;
    flex: 1;

    &.syncing {
      opacity: 0.4;
    }

    &.unassigned {
      color: ${ic};
      opacity: 0.45;
    }
  }

  .wallet {
    width: 1em;
    height: 1em;
    margin-left: 0.8rem;
    opacity: 0.8;

    path {
      fill: ${rc};
    }
  }
`,cyt=t=>{var e,n,r,i;const{mode:o}=Og(),{isReady:a}=u$(),{activeAccount:s}=btt(),{fetchPoolsMetaBatch:l,meta:u}=Xtt(),{label:c}=t,[h,d]=(0,k.useState)(!1),f="pool_header";(0,k.useEffect)((()=>{d(!1)}),[s,t.pool]),(0,k.useEffect)((()=>{a&&(d(!0),h||p())}),[a,h]);const p=()=>{const e=[{id:t.pool.id}];l(f,e,!0)},m=null!==(e=t.filled)&&void 0!==e&&e,g=null!==(n=t.fontSize)&&void 0!==n?n:"0.95rem",y=null!==(r=t.wallet)&&void 0!==r&&r,{canClick:v}=t,b=u[f],w=null===b||void 0===b||null===(i=b.metadata)||void 0===i?void 0:i[0],x=void 0===w,M=hg(t.pool.addresses.stash);let S=x?"Syncing...":null!==w&&void 0!==w?w:M;const C=Pp(q1(S));return""!==C&&(S=C),""===S&&(S=M),(0,Jd.jsxs)(uyt,{whileHover:{scale:1.01},onClick:t.onClick,cursor:v?"pointer":"default",fill:m?Qu.buttons.secondary.background[o]:"none",fontSize:g,children:[void 0!==c&&(0,Jd.jsx)("div",{className:"account-label",children:c}),(0,Jd.jsx)("span",{className:"identicon",children:(0,Jd.jsx)(ort,{value:t.pool.addresses.stash,size:1.45*dg(g)})}),(0,Jd.jsx)("span",{className:"title"+(!0===x?" syncing":""),children:S}),y&&(0,Jd.jsx)("div",{className:"wallet",children:(0,Jd.jsx)(ayt,{})})]})},hyt=pn(Yu.button)`
  border: 1px solid ${Sc};
  background: ${t=>t.fill};
  font-size: ${t=>t.fontSize};
  box-sizing: border-box;
  border-radius: 1rem;
  box-shadow: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  font-variation-settings: 'wght' 540;
  padding: 0 1rem;
  max-width: 250px;
  flex: 1;

  .identicon {
    margin: 0.15rem 0.25rem 0 0;
  }

  .account-label {
    border-right: 1px solid ${Cc};
    color: ${ic};
    font-size: 0.8em;
    font-variation-settings: 'wght' 535;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;
    margin-right: 0.5rem;
    padding-right: 0.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex-shrink: 1;

    > svg {
      color: ${ic};
    }
  }

  .title {
    color: ${rc};
    margin-left: 0.25rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 2.2rem;
    flex: 1;

    &.unassigned {
      color: ${ic};
      opacity: 0.45;
    }
  }

  .wallet {
    width: 1em;
    height: 1em;
    margin-left: 0.8rem;
    opacity: 0.8;

    path {
      fill: ${rc};
    }
  }
`,dyt=t=>{var e,n,r;const{mode:i}=Og(),{getAccount:o}=btt(),{value:a,label:s,readOnly:l}=t,{format:u}=t,c=null!==(e=t.filled)&&void 0!==e&&e,h=null!==(n=t.fontSize)&&void 0!==n?n:"0.95rem",d=null!==(r=t.wallet)&&void 0!==r&&r,{canClick:f}=t,p=null===a||void 0===a||!a.length;let m;switch(u){case"name":var g;if(""!==a)m=null===(g=o(a))||void 0===g?void 0:g.name;else m=hg(a);break;case"text":m=a;break;default:a&&(m=hg(a))}return void 0!==t.title&&(m=t.title),(0,Jd.jsxs)(hyt,{whileHover:{scale:1.01},onClick:t.onClick,cursor:f?"pointer":"default",fill:c?Qu.buttons.secondary.background[i]:"none",fontSize:h,children:[void 0!==s&&(0,Jd.jsxs)("div",{className:"account-label",children:[s," ",l&&(0,Jd.jsxs)(Jd.Fragment,{children:["\xa0",(0,Jd.jsx)(tw,{icon:Rw})]})]}),p?(0,Jd.jsx)("span",{className:"title unassigned",children:"Not Staking"}):(0,Jd.jsxs)(Jd.Fragment,{children:["text"!==u&&(0,Jd.jsx)("span",{className:"identicon",children:(0,Jd.jsx)(ort,{value:a,size:1.45*dg(h)})}),(0,Jd.jsx)("span",{className:"title",children:m||hg(a)})]}),d&&(0,Jd.jsx)("div",{className:"wallet",children:(0,Jd.jsx)(ayt,{})})]})},fyt=()=>{const{activeAccount:t,accounts:e,accountHasSigner:n}=btt(),{openModalWith:r}=tht(),{hasController:i,getControllerNotImported:o}=Rtt(),{getBondedAccount:a}=Ntt(),s=a(t),{activeBondedPool:l}=Gtt(),{isSyncing:u}=$tt();let c="";if(void 0!==l){const{addresses:t}=l;c=t.stash}const h=u?void 0:i()?"Stash":void 0;return(0,Jd.jsx)(Jd.Fragment,{children:t&&(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)($gt,{children:(0,Jd.jsx)(dyt,{canClick:!0,onClick:()=>{r("ConnectAccounts",{section:e.length?1:0},"large")},value:t,readOnly:!n(t),label:h,format:"name",filled:!0,wallet:!0})}),i()&&!u&&(0,Jd.jsx)($gt,{children:(0,Jd.jsx)(dyt,{value:null!==s&&void 0!==s?s:"",readOnly:!n(s),title:o(s)?s?hg(s):"Not Imported":void 0,format:"name",label:"Controller",canClick:i(),onClick:()=>{i()&&r("UpdateController",{},"large")},filled:!0})}),void 0!==l&&!u&&(0,Jd.jsx)($gt,{children:(0,Jd.jsx)(cyt,{value:c,pool:l,label:"Pool",canClick:!1,onClick:()=>{},filled:!0})})]})})},pyt=()=>{const{setSideMenu:t,sideMenuOpen:e}=$tt();return(0,Jd.jsx)("div",{className:"menu",children:(0,Jd.jsx)(tyt,{style:{width:"50px",flex:0},onClick:()=>{t(e?0:1)},children:(0,Jd.jsx)("span",{children:(0,Jd.jsx)(tw,{icon:iw,style:{cursor:"pointer"}})})})})},myt=()=>{const{pathname:t}=Sh(),e=prt(),{activeAccount:n}=btt(),{validators:r}=Qtt(),{pending:i}=Eft(),{isSyncing:o}=$tt();let a=o;return"validators"===Mg(t)&&(r.length||(a=!0)),(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(Ggt,{children:(0,Jd.jsx)(fyt,{})}),(0,Jd.jsxs)(_gt,{children:[(0,Jd.jsx)(pyt,{}),a||i.length>0?(0,Jd.jsx)(Qgt,{}):(0,Jd.jsx)(Jd.Fragment,{}),(0,Jd.jsx)(syt,{}),(0,Jd.jsx)(eyt,{children:(0,Jd.jsx)(fyt,{})}),(0,Jd.jsx)(lyt,{}),(0,Jd.jsx)($gt,{children:(0,Jd.jsxs)(tyt,{onClick:()=>{e.toggle()},whileHover:{scale:1.02},children:[!n&&(0,Jd.jsx)("div",{className:"label",children:"1"}),(0,Jd.jsx)("span",{children:"Assistant"})]})})]})]})};var gyt;function yyt(){return yyt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yyt.apply(this,arguments)}function vyt(t,e){let{title:n,titleId:r,...i}=t;return k.createElement("svg",yyt({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:e,"aria-labelledby":r},i),void 0===n?k.createElement("title",{id:r},"Cog"):n?k.createElement("title",{id:r},n):null,gyt||(gyt=k.createElement("path",{d:"M456.7 242.27l-26.08-4.2a8 8 0 01-6.6-6.82c-.5-3.2-1-6.41-1.7-9.51a8.08 8.08 0 013.9-8.62l23.09-12.82a8.05 8.05 0 003.9-9.92l-4-11a7.94 7.94 0 00-9.4-5l-25.89 5a8 8 0 01-8.59-4.11q-2.25-4.2-4.8-8.41a8.16 8.16 0 01.7-9.52l17.29-19.94a8 8 0 00.3-10.62l-7.49-9a7.88 7.88 0 00-10.5-1.51l-22.69 13.63a8 8 0 01-9.39-.9c-2.4-2.11-4.9-4.21-7.4-6.22a8 8 0 01-2.5-9.11l9.4-24.75A8 8 0 00365 78.77l-10.2-5.91a8 8 0 00-10.39 2.21l-16.64 20.84a7.15 7.15 0 01-8.5 2.5s-5.6-2.3-9.8-3.71A8 8 0 01304 87l.4-26.45a8.07 8.07 0 00-6.6-8.42l-11.59-2a8.07 8.07 0 00-9.1 5.61l-8.6 25.05a8 8 0 01-7.79 5.41h-9.8a8.07 8.07 0 01-7.79-5.41l-8.6-25.05a8.07 8.07 0 00-9.1-5.61l-11.59 2a8.07 8.07 0 00-6.6 8.42l.4 26.45a8 8 0 01-5.49 7.71c-2.3.9-7.3 2.81-9.7 3.71-2.8 1-6.1.2-8.8-2.91l-16.51-20.34A8 8 0 00156.75 73l-10.2 5.91a7.94 7.94 0 00-3.3 10.09l9.4 24.75a8.06 8.06 0 01-2.5 9.11c-2.5 2-5 4.11-7.4 6.22a8 8 0 01-9.39.9L111 116.14a8 8 0 00-10.5 1.51l-7.49 9a8 8 0 00.3 10.62l17.29 19.94a8 8 0 01.7 9.52q-2.55 4-4.8 8.41a8.11 8.11 0 01-8.59 4.11l-25.89-5a8 8 0 00-9.4 5l-4 11a8.05 8.05 0 003.9 9.92L85.58 213a7.94 7.94 0 013.9 8.62c-.6 3.2-1.2 6.31-1.7 9.51a8.08 8.08 0 01-6.6 6.82l-26.08 4.2a8.09 8.09 0 00-7.1 7.92v11.72a7.86 7.86 0 007.1 7.92l26.08 4.2a8 8 0 016.6 6.82c.5 3.2 1 6.41 1.7 9.51a8.08 8.08 0 01-3.9 8.62L62.49 311.7a8.05 8.05 0 00-3.9 9.92l4 11a7.94 7.94 0 009.4 5l25.89-5a8 8 0 018.59 4.11q2.25 4.2 4.8 8.41a8.16 8.16 0 01-.7 9.52l-17.29 19.96a8 8 0 00-.3 10.62l7.49 9a7.88 7.88 0 0010.5 1.51l22.69-13.63a8 8 0 019.39.9c2.4 2.11 4.9 4.21 7.4 6.22a8 8 0 012.5 9.11l-9.4 24.75a8 8 0 003.3 10.12l10.2 5.91a8 8 0 0010.39-2.21l16.79-20.64c2.1-2.6 5.5-3.7 8.2-2.6 3.4 1.4 5.7 2.2 9.9 3.61a8 8 0 015.49 7.71l-.4 26.45a8.07 8.07 0 006.6 8.42l11.59 2a8.07 8.07 0 009.1-5.61l8.6-25a8 8 0 017.79-5.41h9.8a8.07 8.07 0 017.79 5.41l8.6 25a8.07 8.07 0 009.1 5.61l11.59-2a8.07 8.07 0 006.6-8.42l-.4-26.45a8 8 0 015.49-7.71c4.2-1.41 7-2.51 9.6-3.51s5.8-1 8.3 2.1l17 20.94A8 8 0 00355 439l10.2-5.91a7.93 7.93 0 003.3-10.12l-9.4-24.75a8.08 8.08 0 012.5-9.12c2.5-2 5-4.1 7.4-6.21a8 8 0 019.39-.9L401 395.66a8 8 0 0010.5-1.51l7.49-9a8 8 0 00-.3-10.62l-17.29-19.94a8 8 0 01-.7-9.52q2.55-4.05 4.8-8.41a8.11 8.11 0 018.59-4.11l25.89 5a8 8 0 009.4-5l4-11a8.05 8.05 0 00-3.9-9.92l-23.09-12.82a7.94 7.94 0 01-3.9-8.62c.6-3.2 1.2-6.31 1.7-9.51a8.08 8.08 0 016.6-6.82l26.08-4.2a8.09 8.09 0 007.1-7.92V250a8.25 8.25 0 00-7.27-7.73zM256 112a143.82 143.82 0 01139.38 108.12A16 16 0 01379.85 240H274.61a16 16 0 01-13.91-8.09l-52.1-91.71a16 16 0 019.85-23.39A146.94 146.94 0 01256 112zM112 256a144 144 0 0143.65-103.41 16 16 0 0125.17 3.47L233.06 248a16 16 0 010 15.87l-52.67 91.7a16 16 0 01-25.18 3.36A143.94 143.94 0 01112 256zm144 144a146.9 146.9 0 01-38.19-4.95 16 16 0 01-9.76-23.44l52.58-91.55a16 16 0 0113.88-8H379.9a16 16 0 0115.52 19.88A143.84 143.84 0 01256 400z"})))}const byt=k.forwardRef(vyt);__webpack_require__.p;var wyt;function xyt(){return xyt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xyt.apply(this,arguments)}function Myt(t,e){let{title:n,titleId:r,...i}=t;return k.createElement("svg",xyt({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:e,"aria-labelledby":r},i),void 0===n?k.createElement("title",{id:r},"Logo Github"):n?k.createElement("title",{id:r},n):null,wyt||(wyt=k.createElement("path",{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"})))}const kyt=k.forwardRef(Myt),Syt=(__webpack_require__.p,pn.div`
  background: none;
  border-radius: 0.7rem;
  padding: 1rem 0.5rem;
  overflow: auto;
  flex-grow: 1;
  margin: 0.75rem 0 3.35rem 1rem;
  display: flex;
  flex-flow: column nowrap;
  backdrop-filter: blur(4px);

  @media (max-width: ${At}px) {
    background: ${gc};
    transition: all 0.2s;
  }

  .close-menu {
    color: ${rc};
    display: none;
    @media (max-width: ${At}px) {
      display: inline;
    }
  }

  section {
    &:first-child {
      flex-grow: 1;
    }
    /* Footer */
    &:last-child {
      display: flex;
      flex-flow: ${t=>t.minimised?"column-reverse wrap":"row wrap"};
      align-items: center;
      padding-top: 0.5rem;

      button {
        position: relative;
        color: ${ic};
        transition: color 0.2s;
        margin-right: ${t=>t.minimised?0:"0.1rem"};
        margin-top: ${t=>t.minimised?"1.25rem":0};
        opacity: 0.75;

        path {
          fill: ${ic};
        }
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`),Cyt=pn.button`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${t=>t.minimised?"center":"flex-start"};
  width: 100%;
  height: 2.8rem;
  padding: ${t=>t.minimised?"0":"0.4rem 0.5rem"};
  margin-bottom: ${t=>t.minimised?"1.5rem":"1rem"};
  position: relative;

  > .beta {
    color: ${Rc};
    position: absolute;
    top: 0px;
    font-size: 0.85rem;
  }

  > .beta-min {
    color: ${Rc};
    background: ${Tc};
    position: absolute;
    right: -8px;
    z-index: 2;
    font-size: 0.6rem;
    padding: 0.1rem 0.45rem;
    border-radius: 0.5rem;
  }
  ellipse {
    fill: ${Rc};
  }
`,Pyt=pn.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${t=>t.minimised?"center":"flex-start"};
  opacity: ${t=>t.minimised?.5:1};
  align-items: center;

  h5 {
    color: ${ic};
    margin: 1.1rem 0 0.2rem 0;
    padding: 0 0.5rem;
    opacity: 0.7;
  }
`,Tyt=pn(Yu.div)`
  border-radius: 0.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0.9rem 0.5rem;
  margin: 0.3rem 0;
  font-size: 1.04rem;
  position: relative;

  .icon {
    margin-left: ${t=>t.minimised?0:"0.25rem"};
    margin-right: 0.65rem;
  }
  .name {
    margin: 0;
    padding: 0;
  }
  .action {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
  }

  &.active {
    background: ${yc};
  }
  &.inactive:hover {
    background: ${vc};
  }
`,Ayt=pn(Yu.div)`
  border-radius: 0.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 0.9rem 0rem;
  margin: 0.3rem 0;
  font-size: 1.04rem;
  position: relative;

  &.active {
    background: ${yc};
  }
  &.inactive:hover {
    background: ${vc};
  }
  .icon {
    margin: 0;
  }
  .action {
    &.minimised {
      > svg {
        flex: 0;
        position: absolute;
        top: -4px;
        right: -4px;
      }
    }
  }
`,Nyt=pn.div`
  position: absolute;
  right: 10px;
  top: -150px;
`,Oyt=t=>{const{setSideMenu:e}=$tt(),{name:n,active:r,to:i,icon:o,action:a,minimised:s}=t,l=s?Ayt:Tyt;return(0,Jd.jsx)(Lh,{to:i,onClick:()=>e(0),children:(0,Jd.jsxs)(l,{className:r?"active":"inactive",whileHover:{scale:1.02},whileTap:{scale:.98},transition:{duration:.1},children:[(0,Jd.jsx)("div",{className:"icon",children:o}),!s&&(0,Jd.jsx)("h3",{className:"name",children:n}),a&&(0,Jd.jsx)("div",{className:"action"+(s?" minimised":""),children:(0,Jd.jsx)(tw,{icon:hw,color:"rgba(242, 185, 27,0.75)",transform:"shrink-3"})})]})})},jyt=t=>{const{title:e,minimised:n}=t;return(0,Jd.jsx)(Pyt,{minimised:n,children:n?(0,Jd.jsx)("h5",{children:"\u2022"}):(0,Jd.jsx)("h5",{children:e})})},Eyt=()=>{const{network:t}=u$(),{openModalWith:e}=tht(),{activeAccount:n,accounts:r}=btt(),{pathname:i}=Sh(),{getBondedAccount:o}=Ntt(),{getControllerNotImported:a}=Rtt(),{setPalettePosition:s,open:l}=of(),u=o(n),{isSyncing:c,setSideMenu:h,sideMenuOpen:d,sideMenuMinimised:f,userSideMenuMinimised:p,setUserSideMenuMinimised:m}=$tt(),g=a(u),[y,v]=(0,k.useState)({categories:Object.assign(Apt),pages:Object.assign(Npt)});(0,k.useEffect)((()=>(window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]);const b=aet()((()=>{window.innerWidth>=At&&h(0)}),200,{trailing:!0,leading:!1});(0,k.useEffect)((()=>{if(r.length){const t=Object.assign(y.pages);for(let e=0;e<t.length;e++){const{uri:n}=t[e];n===`${vt}/stake`&&(t[e].action=!c&&g)}v({categories:y.categories,pages:t})}}),[t,n,r,g,c]);const w=(0,k.useRef)(null);$d(w,(()=>{h(0)}));let x=Object.values(y.pages);t.features.pools||(x=x.filter((t=>"/pools"!==t.hash)));const M=(0,k.useRef)(null);return(0,Jd.jsxs)(Syt,{ref:w,minimised:f,children:[(0,Jd.jsxs)("section",{children:[(0,Jd.jsx)("button",{type:"button",className:"close-menu",style:{fontVariationSettings:"'wght' 450",margin:"0.2rem 0 1rem 0",opacity:.7},onClick:()=>{h(d?0:1)},children:"Close"}),(0,Jd.jsx)(Cyt,{onClick:()=>{window.open("https://polkadot.network","_blank")},minimised:f,children:f?(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)("div",{className:"beta-min",style:{top:"Westend"===t.name?"-5px":"-14px"},children:"BETA"}),(0,Jd.jsx)(t.icon,{style:{maxHeight:"100%",width:"2rem"}})]}):(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)("div",{className:"beta",style:{right:"Kusama"===t.name?"1.8rem":"Westend"===t.name?"0.25rem":"0px"},children:"BETA"}),(0,Jd.jsx)(t.logo.svg,{style:{maxHeight:"100%",height:"100%",width:t.logo.width}})]})}),y.categories.map(((t,e)=>(0,Jd.jsxs)(k.Fragment,{children:["default"!==t.title&&(0,Jd.jsx)(jyt,{title:t.title,minimised:f}),x.map(((e,n)=>(0,Jd.jsx)(k.Fragment,{children:e.category===t._id&&(0,Jd.jsx)(Oyt,{name:e.title,to:e.hash,active:e.hash===i,icon:(0,Jd.jsx)(tw,{icon:e.icon}),action:e.action,minimised:f})},`sidemenu_page_${n}`)))]},`sidemenu_category_${e}`)))]}),(0,Jd.jsxs)("section",{children:[(0,Jd.jsx)("button",{type:"button",onClick:()=>m(p?0:1),children:(0,Jd.jsx)(tw,{icon:p?cx:jw,transform:"grow-3"})}),(0,Jd.jsx)("button",{type:"button",onClick:()=>window.open("https://github.com/rossbulat/polkadot-staking-experience","_blank"),children:(0,Jd.jsx)(kyt,{width:"1.45rem",height:"1.45rem"})}),(0,Jd.jsx)("button",{type:"button",onClick:()=>e("Settings",{},"small"),children:(0,Jd.jsx)(byt,{width:"1.65rem",height:"1.65rem"})}),(0,Jd.jsxs)("button",{type:"button",onClick:()=>{l||s(M)},children:[(0,Jd.jsx)(Nyt,{ref:M}),(0,Jd.jsx)(tw,{icon:Fw,transform:"grow-5"})]})]})]})},Vyt=pn(Yu.div)`
  position: fixed;
  right: -600px;
  top: 0;
  width: 100%;
  max-width: ${500}px;
  height: auto;
  max-height: 100%;
  z-index: 8;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`,Iyt=pn(Yu.div)`
  width: 200%;
  display: flex;
  flex-flow: row nowrap;
  overflow: auto;
  position: relative;
  flex: 1;
`,Ryt=pn.div`
  background: ${Ac};
  backdrop-filter: blur(4px);
  border-radius: 1rem;
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 100%;
  margin: 0.75rem;
  overflow: hidden;
  max-height: 100%;
`,zyt=pn.div`
  transition: ${t=>t.transition?"height 0.4s cubic-bezier(0.1, 1, 0.2, 1)":"none"};
  width: 100%;
  max-height: 100%;
  overflow: auto;
  overflow-x: hidden;
`,Lyt=pn(Yu.div)`
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 100%;
`,Hyt=pn.div`
  width: 100%;
  .hold {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    height: 3rem;
    flex-shrink: 0;
    margin: 0;
  }
  button {
    color: ${rc};
    font-size: 1rem;
    font-variation-settings: 'wght' 575;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;

    &.close {
      border: 1px solid ${rc};
      border-radius: 1rem;
      padding: 0.3rem 0.75rem;
      margin-right: 0.5rem;
      font-size: 0.9rem;
    }
  }

  span {
    flex-grow: 1;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items: center;
  }
  svg {
    margin-left: 0.5rem;
  }

  h3 {
    padding: 0 1rem;
  }
`,Byt=pn(Yu.div)`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  align-content: flex-start;
  overflow: auto;
  padding: 0.75rem 0.5rem;

  > button {
    padding: 0.25rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    color: ${rc};
  }
  h2 {
    color: ${rc};
    padding: 0 0.75rem;
    margin: 0.5rem 0;
    width: 100%;
  }
  p {
    color: ${rc};
  }
  .definition {
    color: ${rc};
    padding: 0.75rem;
    line-height: 1.4rem;
    margin: 0;
  }
`,Dyt=pn.div`
  width: 100%;
  padding: 0 0.6rem;
  > h4 {
    margin: 0.5rem 0 0;
    padding: 0.5rem 0;
    font-variation-settings: 'wght' 575;
    color: ${ic};
  }
`,Fyt=pn(Yu.div)`
  width: 100%;
  display: flex;

  > button {
    background: ${Nc};
    border-radius: 0.75rem;
    margin: 0.45rem;
    padding: 1rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    position: relative;
    flex: 1;

    > div:first-child {
      display: flex;
      flex-flow: column wrap;
      align-items: flex-start;
      justify-content: center;
      flex: 1;

      > h3 {
        color: ${rc};
        font-size: 1rem;
        margin: 0;
        text-align: left;
      }
      > p {
        color: ${rc};
        font-variation-settings: 'wght' 420;
        margin: 0.5rem 0 0 0;
        text-align: left;
      }
    }

    p.icon {
      opacity: 0.5;
    }
  }
`,Uyt=pn(Yu.div)`
  display: flex;
  width: ${t=>t.width};
  height: ${t=>void 0===t.height?"160px":t.height};
  overflow: auto;
  flex-flow: row wrap;
  justify-content: flex-start;

  p.icon {
    opacity: 0.5;
  }

  > * {
    background: ${Nc};
    border-radius: 0.75rem;
    flex: 1;
    padding: 0 0.8rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0.4rem;
    position: relative;

    > h4 {
      color: ${rc};
      font-weight: normal;
      margin: 0.65rem 0;
      text-transform: uppercase;
      font-size: 0.7rem;
    }
    > h3 {
      color: ${rc};
      margin: 0;
      text-align: left;
    }

    > p {
      color: ${rc};
      font-variation-settings: 'wght' 420;
      text-align: left;
    }

    .ext {
      position: absolute;
      bottom: 0.7rem;
      right: 0.7rem;
    }

    &.action {
      background: ${Rc};
      > h4 {
        color: white;
      }
      > h3 {
        color: white;
      }
      > p {
        color: white;
      }
    }
  }
`,Wyt=t=>{const{title:e}=t;return(0,Jd.jsx)(Dyt,{children:(0,Jd.jsx)("h4",{children:e})})},qyt=t=>{const{onClick:e,title:n,description:r}=t,i=r[0].length>55?`${r[0].substring(0,55)}...`:r[0];return(0,Jd.jsx)(Fyt,{children:(0,Jd.jsxs)(Yu.button,{className:"item",whileHover:{scale:1.01},whileTap:{scale:.99},transition:{duration:.5,type:"spring",bounce:.4},onClick:e,children:[(0,Jd.jsxs)("div",{children:[(0,Jd.jsx)("h3",{children:n}),(0,Jd.jsx)("p",{children:i})]}),(0,Jd.jsx)("div",{children:(0,Jd.jsx)("p",{className:"icon",children:(0,Jd.jsx)(tw,{icon:cw})})})]})})},Xyt=t=>{const{width:e,height:n,subtitle:r,label:i,title:o,url:a}=t;return(0,Jd.jsx)(Uyt,{width:`${e}%`,height:n||"auto",children:(0,Jd.jsxs)(Yu.button,{className:"item",whileHover:{scale:1.015},whileTap:{scale:.99},transition:{duration:.5,type:"spring",bounce:.4},onClick:()=>{window.open(a,"_blank")},children:[(0,Jd.jsx)("h4",{children:i}),(0,Jd.jsx)("h3",{children:o}),e>50&&(0,Jd.jsx)("p",{children:r}),(0,Jd.jsx)("p",{className:"icon",children:(0,Jd.jsx)(tw,{icon:dx,className:"ext"})})]})})},Zyt=t=>{const{height:e,subtitle:n,label:r,title:i,onClick:o}=t;return(0,Jd.jsx)(Uyt,{width:"100%",height:e,children:(0,Jd.jsxs)(Yu.button,{className:"item action",whileHover:{scale:1.015},whileTap:{scale:.99},transition:{duration:.5,type:"spring",bounce:.4},onClick:o,children:[(0,Jd.jsx)("h4",{children:r}),(0,Jd.jsx)("h3",{children:i}),(0,Jd.jsx)("p",{children:n})]})})},Yyt=t=>{var e,n;let{pageMeta:r}=t;const{openModalWith:i}=tht(),{network:o}=u$(),{activeAccount:a,accounts:s}=btt(),{pathname:l}=Sh(),u=prt(),c=null!==(e=null===r||void 0===r?void 0:r.definitions)&&void 0!==e?e:[],h=null!==(n=null===r||void 0===r?void 0:r.external)&&void 0!==n?n:[];let d=0;const f=[66,34,100,50,50],p=u.innerDefinition,m=(0,k.useRef)(null),g=(0,k.useRef)(null);return(0,k.useEffect)((()=>{u.setAssistantHeight(0===u.activeSection?m.current.clientHeight:g.current.clientHeight)}),[u.activeSection,u.open,u.innerDefinition]),(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsxs)(Lyt,{ref:m,style:{height:0===u.activeSection?"auto":0},children:[(0,Jd.jsx)(Hyt,{children:(0,Jd.jsxs)("div",{className:"hold",children:[(0,Jd.jsxs)("h3",{children:[kg(l,Npt)," Resources"]}),(0,Jd.jsx)("span",{children:(0,Jd.jsx)("button",{type:"button",className:"close",onClick:()=>{u.closeAssistant()},children:"Close"})})]})}),(0,Jd.jsxs)(Byt,{children:[!a&&(0,Jd.jsx)(Zyt,{height:"120px",label:"next step",title:"Connect Wallet",subtitle:`Connect your ${o.name} accounts to start staking.`,onClick:()=>{u.toggle(),i("ConnectAccounts",{section:s.length?1:0},"large")}}),c.length>0&&(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(Wyt,{title:"Definitions"}),c.map(((t,e)=>(t=u.fillDefinitionVariables(t),(0,Jd.jsx)(qyt,{onClick:()=>{u.setInnerDefinition(t),u.setActiveSection(1)},title:t.title,description:t.description},`def_${e}`))))]}),h.length>0&&(0,Jd.jsxs)(Jd.Fragment,{children:[(0,Jd.jsx)(Wyt,{title:"Articles"}),h.map(((t,e)=>{const n=(0,Jd.jsx)(Xyt,{width:f[d],label:t.label,title:t.title,subtitle:t.subtitle,url:t.url},`ext_${e}`);return d=d>f.length-1?0:d+1,n}))]})]})]}),(0,Jd.jsxs)(Lyt,{ref:g,style:{height:1===u.activeSection?"auto":0},children:[(0,Jd.jsx)(Hyt,{children:(0,Jd.jsxs)("div",{className:"hold",children:[(0,Jd.jsxs)("button",{type:"button",onClick:()=>u.setActiveSection(0),children:[(0,Jd.jsx)(tw,{icon:uw,transform:"shrink-4",style:{cursor:"pointer",marginRight:"0.3rem"}})," ","Back"]}),(0,Jd.jsx)("span",{children:(0,Jd.jsx)("button",{type:"button",className:"close",onClick:()=>{u.closeAssistant()},children:"Close"})})]})}),(0,Jd.jsxs)(Byt,{children:[(0,Jd.jsx)("h2",{children:null===p||void 0===p?void 0:p.title}),null===p||void 0===p?void 0:p.description.map(((t,e)=>(0,Jd.jsx)("p",{className:"definition",children:t},`inner_def_${e}`)))]})]})]})},Kyt=()=>{const t=prt(),{pathname:e}=Sh(),n=(0,k.useCallback)((()=>{t.setPage(Mg(e))}),[e]);(0,k.useEffect)((()=>n()),[n]);const r=t.open===a$.Open?"visible":"hidden",i=0===t.activeSection?"home":"item",o=Object.values(drt).find((e=>e.key===t.page)),a=(0,k.useRef)(null);return $d(a,(()=>{t.closeAssistant()}),["ignore-assistant-outside-alerter"]),(0,Jd.jsx)(Vyt,{ref:a,initial:!1,animate:r,transition:{duration:.5,type:"spring",bounce:.2},variants:{hidden:{opacity:1,right:"-600px"},visible:{opacity:1,right:"0px"}},children:(0,Jd.jsx)(Ryt,{children:(0,Jd.jsx)(zyt,{style:{height:t.height},transition:t.transition,children:(0,Jd.jsx)(Iyt,{animate:i,transition:{duration:.5,type:"spring",bounce:.1},variants:{home:{left:0},item:{left:"-100%"}},children:(0,Jd.jsx)(Yyt,{pageMeta:o})})})})})},Gyt=pn.ul`
  position: fixed;
  bottom: 20px;
  right: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: flex-end;
  z-index: 10;

  li {
    background: ${lc};
    width: 360px;
    margin: 0.4rem 1.2rem;
    position: relative;
    border-radius: 10px;
    padding: 1rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;

    h3 {
      color: ${Rc};
      box-sizing: border-box;
      margin: 0 0 0.5rem;
      font-variation-settings: 'wght' 500;
      flex: 1;
    }
    h5 {
      color: ${ic};
      box-sizing: border-box;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      flex: 1;
      max-width: 100%;
    }
  }
//# sourceMappingURL=main.3b159a09.js.map