/*! For license information please see main.34271b65.js.LICENSE.txt */
  background: ${rc};
  box-sizing: border-box;
  width: 100%;
  background-attachment: fixed;
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  flex-grow: 1;

  h1 {
    color: ${Qu};
  }
  h2 {
    color: ${Qu};
  }
  h3 {
    color: ${Qu};
  }
  h4 {
    color: ${Qu};
  }
  h5 {
    color: ${Qu};
  }
  a {
    color: ${Qu};
  }
  input {
    color: ${Qu};
  }

  path.primary {
    fill: ${Qu};
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
`,jc=ln.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  flex-grow: 1;
`,Vc=ln.div`
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

  @media (max-width: ${Mt}px) {
    position: fixed;
    transition: all 0.15s ease-in-out;
    top: 0;
    left: ${t=>t.open?0:"-180px"};
  }
`,Ec=ln.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
`,Ic=ln(Fu.div)`
  max-width: ${1800}px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 4.5rem;
  width: 100%;
  margin: 0 auto;
`,zc=ln.header`
  box-sizing: border-box;
  background: ${ec};
  position: sticky;
  top: 0px;
  padding-top: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: ${Mt}px) {
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
    @media (max-width: ${Mt}px) {
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
      border-bottom-color: ${yc};

      > button {
        padding: 0.75rem 1rem;
        margin-bottom: 0.5rem;
        margin-right: 0.75rem;
        font-size: ${t=>t.sticky?"1.05rem":"1.15rem"};
        color: ${_u};
        transition: opacity 0.1s, font-size 0.1s;
        border-radius: 0.5rem;

        &.active {
          background: ${fc};
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
`,Lc=ln.div`
  background: ${ec};
  box-sizing: border-box;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 4rem;
  z-index: 4;
  display: none;
  @media (max-width: ${Mt}px) {
    display: block;
  }
`,Rc=ln.div`
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
`,Hc=ln.div`
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
`,Bc=ln.div`
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
`,Dc=ln.div`
  border-bottom: 1px solid ${yc};
  width: 100%;
  margin: 0.75rem 0;
`;function Fc(){return Fc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fc.apply(this,arguments)}var Uc;!function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"}(Uc||(Uc={}));var Wc=function(t){return t};var qc="beforeunload",Xc="popstate";function Zc(t){void 0===t&&(t={});var e=t.window,n=void 0===e?document.defaultView:e,r=n.history;function i(){var t=Qc(n.location.hash.substr(1)),e=t.pathname,i=void 0===e?"/":e,o=t.search,a=void 0===o?"":o,s=t.hash,l=void 0===s?"":s,u=r.state||{};return[u.idx,Wc({pathname:i,search:a,hash:l,state:u.usr||null,key:u.key||"default"})]}var o=null;function a(){if(o)d.call(o),o=null;else{var t=Uc.Pop,e=i(),n=e[0],r=e[1];if(d.length){if(null!=n){var a=u-n;a&&(o={action:t,location:r,retry:function(){v(-1*a)}},v(a))}}else y(t)}}n.addEventListener(Xc,a),n.addEventListener("hashchange",(function(){Jc(i()[1])!==Jc(c)&&a()}));var s=Uc.Pop,l=i(),u=l[0],c=l[1],h=Kc(),d=Kc();function f(t){return function(){var t=document.querySelector("base"),e="";if(t&&t.getAttribute("href")){var r=n.location.href,i=r.indexOf("#");e=-1===i?r:r.slice(0,i)}return e}()+"#"+("string"===typeof t?t:Jc(t))}function p(t,e){return void 0===e&&(e=null),Wc(Fc({pathname:c.pathname,hash:"",search:""},"string"===typeof t?Qc(t):t,{state:e,key:Gc()}))}function m(t,e){return[{usr:t.state,key:t.key,idx:e},f(t)]}function g(t,e,n){return!d.length||(d.call({action:t,location:e,retry:n}),!1)}function y(t){s=t;var e=i();u=e[0],c=e[1],h.call({action:s,location:c})}function v(t){r.go(t)}null==u&&(u=0,r.replaceState(Fc({},r.state,{idx:u}),""));var b={get action(){return s},get location(){return c},createHref:f,push:function t(e,i){var o=Uc.Push,a=p(e,i);if(g(o,a,(function(){t(e,i)}))){var s=m(a,u+1),l=s[0],c=s[1];try{r.pushState(l,"",c)}catch(h){n.location.assign(c)}y(o)}},replace:function t(e,n){var i=Uc.Replace,o=p(e,n);if(g(i,o,(function(){t(e,n)}))){var a=m(o,u),s=a[0],l=a[1];r.replaceState(s,"",l),y(i)}},go:v,back:function(){v(-1)},forward:function(){v(1)},listen:function(t){return h.push(t)},block:function(t){var e=d.push(t);return 1===d.length&&n.addEventListener(qc,Yc),function(){e(),d.length||n.removeEventListener(qc,Yc)}}};return b}function Yc(t){t.preventDefault(),t.returnValue=""}function Kc(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter((function(t){return t!==e}))}},call:function(e){t.forEach((function(t){return t&&t(e)}))}}}function Gc(){return Math.random().toString(36).substr(2,8)}function Jc(t){var e=t.pathname,n=void 0===e?"/":e,r=t.search,i=void 0===r?"":r,o=t.hash,a=void 0===o?"":o;return i&&"?"!==i&&(n+="?"===i.charAt(0)?i:"?"+i),a&&"#"!==a&&(n+="#"===a.charAt(0)?a:"#"+a),n}function Qc(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}const _c=(0,k.createContext)(null);const $c=(0,k.createContext)(null);const th=(0,k.createContext)({outlet:null,matches:[]});function eh(t,e){if(!t)throw new Error(e)}function nh(t,e,n){void 0===n&&(n="/");let r=ch(("string"===typeof e?Qc(e):e).pathname||"/",n);if(null==r)return null;let i=rh(t);!function(t){t.sort(((t,e)=>t.score!==e.score?e.score-t.score:function(t,e){let n=t.length===e.length&&t.slice(0,-1).every(((t,n)=>t===e[n]));return n?t[t.length-1]-e[e.length-1]:0}(t.routesMeta.map((t=>t.childrenIndex)),e.routesMeta.map((t=>t.childrenIndex)))))}(i);let o=null;for(let a=0;null==o&&a<i.length;++a)o=sh(i[a],r);return o}function rh(t,e,n,r){return void 0===e&&(e=[]),void 0===n&&(n=[]),void 0===r&&(r=""),t.forEach(((t,i)=>{let o={relativePath:t.path||"",caseSensitive:!0===t.caseSensitive,childrenIndex:i,route:t};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||eh(!1),o.relativePath=o.relativePath.slice(r.length));let a=hh([r,o.relativePath]),s=n.concat(o);t.children&&t.children.length>0&&(!0===t.index&&eh(!1),rh(t.children,e,s,a)),(null!=t.path||t.index)&&e.push({path:a,score:ah(a,t.index),routesMeta:s})})),e}const ih=/^:\w+$/,oh=t=>"*"===t;function ah(t,e){let n=t.split("/"),r=n.length;return n.some(oh)&&(r+=-2),e&&(r+=2),n.filter((t=>!oh(t))).reduce(((t,e)=>t+(ih.test(e)?3:""===e?1:10)),r)}function sh(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let a=0;a<n.length;++a){let t=n[a],s=a===n.length-1,l="/"===i?e:e.slice(i.length)||"/",u=lh({path:t.relativePath,caseSensitive:t.caseSensitive,end:s},l);if(!u)return null;Object.assign(r,u.params);let c=t.route;o.push({params:r,pathname:hh([i,u.pathname]),pathnameBase:dh(hh([i,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(i=hh([i,u.pathnameBase]))}return o}function lh(t,e){"string"===typeof t&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=function(t,e,n){void 0===e&&(e=!1);void 0===n&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((t,e)=>(r.push(e),"([^\\/]+)")));t.endsWith("*")?(r.push("*"),i+="*"===t||"/*"===t?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";return[new RegExp(i,e?void 0:"i"),r]}(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1),l=r.reduce(((t,e,n)=>{if("*"===e){let t=s[n]||"";a=o.slice(0,o.length-t.length).replace(/(.)\/+$/,"$1")}return t[e]=function(t,e){try{return decodeURIComponent(t)}catch(n){return t}}(s[n]||""),t}),{});return{params:l,pathname:o,pathnameBase:a,pattern:t}}function uh(t,e,n){let r,i="string"===typeof t?Qc(t):t,o=""===t||""===i.pathname?"/":i.pathname;if(null==o)r=n;else{let t=e.length-1;if(o.startsWith("..")){let e=o.split("/");for(;".."===e[0];)e.shift(),t-=1;i.pathname=e.join("/")}r=t>=0?e[t]:"/"}let a=function(t,e){void 0===e&&(e="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof t?Qc(t):t,o=n?n.startsWith("/")?n:function(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach((t=>{".."===t?n.length>1&&n.pop():"."!==t&&n.push(t)})),n.length>1?n.join("/"):"/"}(n,e):e;return{pathname:o,search:fh(r),hash:ph(i)}}(i,r);return o&&"/"!==o&&o.endsWith("/")&&!a.pathname.endsWith("/")&&(a.pathname+="/"),a}function ch(t,e){if("/"===e)return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&"/"!==n?null:t.slice(e.length)||"/"}const hh=t=>t.join("/").replace(/\/\/+/g,"/"),dh=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fh=t=>t&&"?"!==t?t.startsWith("?")?t:"?"+t:"",ph=t=>t&&"#"!==t?t.startsWith("#")?t:"#"+t:"";function mh(t){gh()||eh(!1);let{basename:e,navigator:n}=(0,k.useContext)(_c),{hash:r,pathname:i,search:o}=bh(t),a=i;if("/"!==e){let n=function(t){return""===t||""===t.pathname?"/":"string"===typeof t?Qc(t).pathname:t.pathname}(t),r=null!=n&&n.endsWith("/");a="/"===i?e+(r?"/":""):hh([e,i])}return n.createHref({pathname:a,search:o,hash:r})}function gh(){return null!=(0,k.useContext)($c)}function yh(){return gh()||eh(!1),(0,k.useContext)($c).location}function vh(){gh()||eh(!1);let{basename:t,navigator:e}=(0,k.useContext)(_c),{matches:n}=(0,k.useContext)(th),{pathname:r}=yh(),i=JSON.stringify(n.map((t=>t.pathnameBase))),o=(0,k.useRef)(!1);(0,k.useEffect)((()=>{o.current=!0}));let a=(0,k.useCallback)((function(n,a){if(void 0===a&&(a={}),!o.current)return;if("number"===typeof n)return void e.go(n);let s=uh(n,JSON.parse(i),r);"/"!==t&&(s.pathname=hh([t,s.pathname])),(a.replace?e.replace:e.push)(s,a.state)}),[t,e,i,r]);return a}function bh(t){let{matches:e}=(0,k.useContext)(th),{pathname:n}=yh(),r=JSON.stringify(e.map((t=>t.pathnameBase)));return(0,k.useMemo)((()=>uh(t,JSON.parse(r),n)),[t,r,n])}function wh(t,e){return void 0===e&&(e=[]),null==t?null:t.reduceRight(((n,r,i)=>(0,k.createElement)(th.Provider,{children:void 0!==r.route.element?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}})),null)}function xh(t){let{to:e,replace:n,state:r}=t;gh()||eh(!1);let i=vh();return(0,k.useEffect)((()=>{i(e,{replace:n,state:r})})),null}function Mh(t){eh(!1)}function kh(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Uc.Pop,navigator:o,static:a=!1}=t;gh()&&eh(!1);let s=dh(e),l=(0,k.useMemo)((()=>({basename:s,navigator:o,static:a})),[s,o,a]);"string"===typeof r&&(r=Qc(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,p=(0,k.useMemo)((()=>{let t=ch(u,s);return null==t?null:{pathname:t,search:c,hash:h,state:d,key:f}}),[s,u,c,h,d,f]);return null==p?null:(0,k.createElement)(_c.Provider,{value:l},(0,k.createElement)($c.Provider,{children:n,value:{location:p,navigationType:i}}))}function Sh(t){let{children:e,location:n}=t;return function(t,e){gh()||eh(!1);let{matches:n}=(0,k.useContext)(th),r=n[n.length-1],i=r?r.params:{},o=(r&&r.pathname,r?r.pathnameBase:"/");r&&r.route;let a,s=yh();if(e){var l;let t="string"===typeof e?Qc(e):e;"/"===o||(null==(l=t.pathname)?void 0:l.startsWith(o))||eh(!1),a=t}else a=s;let u=a.pathname||"/",c=nh(t,{pathname:"/"===o?u:u.slice(o.length)||"/"});return wh(c&&c.map((t=>Object.assign({},t,{params:Object.assign({},i,t.params),pathname:hh([o,t.pathname]),pathnameBase:"/"===t.pathnameBase?o:hh([o,t.pathnameBase])}))),n)}(Ch(e),n)}function Ch(t){let e=[];return k.Children.forEach(t,(t=>{if(!(0,k.isValidElement)(t))return;if(t.type===k.Fragment)return void e.push.apply(e,Ch(t.props.children));t.type!==Mh&&eh(!1);let n={caseSensitive:t.props.caseSensitive,element:t.props.element,index:t.props.index,path:t.props.path};t.props.children&&(n.children=Ch(t.props.children)),e.push(n)})),e}function Ph(){return Ph=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ph.apply(this,arguments)}function Th(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}const Ah=["onClick","reloadDocument","replace","state","target","to"];function Nh(t){let{basename:e,children:n,window:r}=t,i=(0,k.useRef)();null==i.current&&(i.current=Zc({window:r}));let o=i.current,[a,s]=(0,k.useState)({action:o.action,location:o.location});return(0,k.useLayoutEffect)((()=>o.listen(s)),[o]),(0,k.createElement)(kh,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const Oh=(0,k.forwardRef)((function(t,e){let{onClick:n,reloadDocument:r,replace:i=!1,state:o,target:a,to:s}=t,l=Th(t,Ah),u=mh(s),c=function(t,e){let{target:n,replace:r,state:i}=void 0===e?{}:e,o=vh(),a=yh(),s=bh(t);return(0,k.useCallback)((e=>{if(0===e.button&&(!n||"_self"===n)&&!function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(e)){e.preventDefault();let n=!!r||Jc(a)===Jc(s);o(t,{replace:n,state:i})}}),[a,o,s,r,i,n,t])}(s,{replace:i,state:o,target:a});return(0,k.createElement)("a",Ph({},l,{href:u,onClick:function(t){n&&n(t),t.defaultPrevented||r||c(t)},ref:e,target:a}))}));function jh(){var t=(0,k.useRef)(!1);return On((function(){return t.current=!0,function(){t.current=!1}}),[]),t}var Vh=function(t){var e=t.children,n=t.initial,r=t.isPresent,i=t.onExitComplete,o=t.custom,a=t.presenceAffectsLayout,s=qn(Eh),l=yl(),u=(0,k.useMemo)((function(){return{id:l,initial:n,isPresent:r,custom:o,onExitComplete:function(t){var e,n;s.set(t,!0);try{for(var r=mn(s.values()),o=r.next();!o.done;o=r.next()){if(!o.value)return}}catch(a){e={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}null===i||void 0===i||i()},register:function(t){return s.set(t,!1),function(){return s.delete(t)}}}}),a?void 0:[r]);return(0,k.useMemo)((function(){s.forEach((function(t,e){return s.set(e,!1)}))}),[r]),k.useEffect((function(){!r&&!s.size&&(null===i||void 0===i||i())}),[r]),k.createElement(An.Provider,{value:u},e)};function Eh(){return new Map}var Ih=function(t){return t.key||""};var zh=function(t){var e=t.children,n=t.custom,r=t.initial,i=void 0===r||r,o=t.onExitComplete,a=t.exitBeforeEnter,s=t.presenceAffectsLayout,l=void 0===s||s,u=gn(function(){var t=jh(),e=gn((0,k.useState)(0),2),n=e[0],r=e[1],i=(0,k.useCallback)((function(){t.current&&r(n+1)}),[n]);return[(0,k.useCallback)((function(){return sr.postRender(i)}),[i]),n]}(),1),c=u[0],h=(0,k.useContext)(Ja).forceRender;h&&(c=h);var d=jh(),f=function(t){var e=[];return k.Children.forEach(t,(function(t){(0,k.isValidElement)(t)&&e.push(t)})),e}(e),p=f,m=new Set,g=(0,k.useRef)(p),y=(0,k.useRef)(new Map).current,v=(0,k.useRef)(!0);if(On((function(){v.current=!1,function(t,e){t.forEach((function(t){var n=Ih(t);e.set(n,t)}))}(f,y),g.current=p})),il((function(){v.current=!0,y.clear(),m.clear()})),v.current)return k.createElement(k.Fragment,null,p.map((function(t){return k.createElement(Vh,{key:Ih(t),isPresent:!0,initial:!!i&&void 0,presenceAffectsLayout:l},t)})));p=yn([],gn(p),!1);for(var b=g.current.map(Ih),w=f.map(Ih),x=b.length,M=0;M<x;M++){var S=b[M];-1===w.indexOf(S)&&m.add(S)}return a&&m.size&&(p=[]),m.forEach((function(t){if(-1===w.indexOf(t)){var e=y.get(t);if(e){var r=b.indexOf(t);p.splice(r,0,k.createElement(Vh,{key:Ih(e),isPresent:!1,onExitComplete:function(){y.delete(t),m.delete(t);var e=g.current.findIndex((function(e){return e.key===t}));if(g.current.splice(e,1),!m.size){if(g.current=f,!1===d.current)return;c(),o&&o()}},custom:n,presenceAffectsLayout:l},e))}}})),p=p.map((function(t){var e=t.key;return m.has(e)?t:k.createElement(Vh,{key:Ih(t),isPresent:!0,presenceAffectsLayout:l},t)})),k.createElement(k.Fragment,null,m.size?p:p.map((function(t){return(0,k.cloneElement)(t)})))},Lh=__webpack_require__(2007),Rh=__webpack_require__.n(Lh),Hh=__webpack_require__(9475),Bh=__webpack_require__.n(Hh),Dh=__webpack_require__(77),Fh=__webpack_require__.n(Dh),Uh=__webpack_require__(1725),Wh=__webpack_require__.n(Uh),qh="bodyAttributes",Xh="htmlAttributes",Zh="titleAttributes",Yh={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},Kh=(Object.keys(Yh).map((function(t){return Yh[t]})),"charset"),Gh="cssText",Jh="href",Qh="http-equiv",_h="innerHTML",$h="itemprop",td="name",ed="property",nd="rel",rd="src",id="target",od={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ad="defaultTitle",sd="defer",ld="encodeSpecialCharacters",ud="onChangeClientState",cd="titleTemplate",hd=Object.keys(od).reduce((function(t,e){return t[od[e]]=e,t}),{}),dd=[Yh.NOSCRIPT,Yh.SCRIPT,Yh.STYLE],fd="data-react-helmet",pd="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},md=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},gd=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),yd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vd=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},bd=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e},wd=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},xd=function(t){var e=Pd(t,Yh.TITLE),n=Pd(t,cd);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=Pd(t,ad);return e||r||void 0},Md=function(t){return Pd(t,ud)||function(){}},kd=function(t,e){return e.filter((function(e){return"undefined"!==typeof e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return yd({},t,e)}),{})},Sd=function(t,e){return e.filter((function(t){return"undefined"!==typeof t[Yh.BASE]})).map((function(t){return t[Yh.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},Cd=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||("undefined"!==typeof e[t]&&jd("Helmet: "+t+' should be of type "Array". Instead found type "'+pd(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var i={};n.filter((function(t){for(var n=void 0,o=Object.keys(t),a=0;a<o.length;a++){var s=o[a],l=s.toLowerCase();-1===e.indexOf(l)||n===nd&&"canonical"===t[n].toLowerCase()||l===nd&&"stylesheet"===t[l].toLowerCase()||(n=l),-1===e.indexOf(s)||s!==_h&&s!==Gh&&s!==$h||(n=s)}if(!n||!t[n])return!1;var u=t[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],l=Wh()({},r[s],i[s]);r[s]=l}return t}),[]).reverse()},Pd=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},Td=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout((function(){Td(e)}),0)}}(),Ad=function(t){return clearTimeout(t)},Nd="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Td:__webpack_require__.g.requestAnimationFrame||Td,Od="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Ad:__webpack_require__.g.cancelAnimationFrame||Ad,jd=function(t){return console&&"function"===typeof console.warn&&console.warn(t)},Vd=null,Ed=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,s=t.noscriptTags,l=t.onChangeClientState,u=t.scriptTags,c=t.styleTags,h=t.title,d=t.titleAttributes;Ld(Yh.BODY,r),Ld(Yh.HTML,i),zd(h,d);var f={baseTag:Rd(Yh.BASE,n),linkTags:Rd(Yh.LINK,o),metaTags:Rd(Yh.META,a),noscriptTags:Rd(Yh.NOSCRIPT,s),scriptTags:Rd(Yh.SCRIPT,u),styleTags:Rd(Yh.STYLE,c)},p={},m={};Object.keys(f).forEach((function(t){var e=f[t],n=e.newTags,r=e.oldTags;n.length&&(p[t]=n),r.length&&(m[t]=f[t].oldTags)})),e&&e(),l(t,p,m)},Id=function(t){return Array.isArray(t)?t.join(""):t},zd=function(t,e){"undefined"!==typeof t&&document.title!==t&&(document.title=Id(t)),Ld(Yh.TITLE,e)},Ld=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(fd),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(e),s=0;s<a.length;s++){var l=a[s],u=e[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===i.indexOf(l)&&i.push(l);var c=o.indexOf(l);-1!==c&&o.splice(c,1)}for(var h=o.length-1;h>=0;h--)n.removeAttribute(o[h]);i.length===o.length?n.removeAttribute(fd):n.getAttribute(fd)!==a.join(",")&&n.setAttribute(fd,a.join(","))}},Rd=function(t,e){var n=document.head||document.querySelector(Yh.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===_h)n.innerHTML=e.innerHTML;else if(r===Gh)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var s="undefined"===typeof e[r]?"":e[r];n.setAttribute(r,s)}n.setAttribute(fd,"true"),i.some((function(t,e){return a=e,n.isEqualNode(t)}))?i.splice(a,1):o.push(n)})),i.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return n.appendChild(t)})),{oldTags:i,newTags:o}},Hd=function(t){return Object.keys(t).reduce((function(e,n){var r="undefined"!==typeof t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},Bd=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[od[n]||n]=t[n],e}),e)},Dd=function(t,e,n){switch(t){case Yh.TITLE:return{toComponent:function(){return function(t,e,n){var r,i=((r={key:e})[fd]=!0,r),o=Bd(n,i);return[k.createElement(Yh.TITLE,o,e)]}(0,e.title,e.titleAttributes)},toString:function(){return function(t,e,n,r){var i=Hd(n),o=Id(e);return i?"<"+t+' data-react-helmet="true" '+i+">"+wd(o,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+wd(o,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case qh:case Xh:return{toComponent:function(){return Bd(e)},toString:function(){return Hd(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,i=((r={key:n})[fd]=!0,r);return Object.keys(e).forEach((function(t){var n=od[t]||t;if(n===_h||n===Gh){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),k.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var i=Object.keys(r).filter((function(t){return!(t===_h||t===Gh)})).reduce((function(t,e){var i="undefined"===typeof r[e]?e:e+'="'+wd(r[e],n)+'"';return t?t+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===dd.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+t+">")}),"")}(t,e,n)}}}},Fd=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,s=t.noscriptTags,l=t.scriptTags,u=t.styleTags,c=t.title,h=void 0===c?"":c,d=t.titleAttributes;return{base:Dd(Yh.BASE,e,r),bodyAttributes:Dd(qh,n,r),htmlAttributes:Dd(Xh,i,r),link:Dd(Yh.LINK,o,r),meta:Dd(Yh.META,a,r),noscript:Dd(Yh.NOSCRIPT,s,r),script:Dd(Yh.SCRIPT,l,r),style:Dd(Yh.STYLE,u,r),title:Dd(Yh.TITLE,{title:h,titleAttributes:d},r)}},Ud=function(t){var e,n;return n=e=function(e){function n(){return md(this,n),bd(this,e.apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e),n.prototype.shouldComponentUpdate=function(t){return!Fh()(this.props,t)},n.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case Yh.SCRIPT:case Yh.NOSCRIPT:return{innerHTML:e};case Yh.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,i=t.newChildProps,o=t.nestedChildren;return yd({},r,((e={})[n.type]=[].concat(r[n.type]||[],[yd({},i,this.mapNestedChildrenToProps(n,o))]),e))},n.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,i=t.newProps,o=t.newChildProps,a=t.nestedChildren;switch(r.type){case Yh.TITLE:return yd({},i,((e={})[r.type]=a,e.titleAttributes=yd({},o),e));case Yh.BODY:return yd({},i,{bodyAttributes:yd({},o)});case Yh.HTML:return yd({},i,{htmlAttributes:yd({},o)})}return yd({},i,((n={})[r.type]=yd({},o),n))},n.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=yd({},e);return Object.keys(t).forEach((function(e){var r;n=yd({},n,((r={})[e]=t[e],r))})),n},n.prototype.warnOnInvalidChildren=function(t,e){return!0},n.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return k.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,o=i.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[hd[n]||n]=t[n],e}),e)}(vd(i,["children"]));switch(n.warnOnInvalidChildren(t,o),t.type){case Yh.LINK:case Yh.META:case Yh.NOSCRIPT:case Yh.SCRIPT:case Yh.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},n.prototype.render=function(){var e=this.props,n=e.children,r=vd(e,["children"]),i=yd({},r);return n&&(i=this.mapChildrenToProps(n,i)),k.createElement(t,i)},gd(n,null,[{key:"canUseDOM",set:function(e){t.canUseDOM=e}}]),n}(k.Component),e.propTypes={base:Rh().object,bodyAttributes:Rh().object,children:Rh().oneOfType([Rh().arrayOf(Rh().node),Rh().node]),defaultTitle:Rh().string,defer:Rh().bool,encodeSpecialCharacters:Rh().bool,htmlAttributes:Rh().object,link:Rh().arrayOf(Rh().object),meta:Rh().arrayOf(Rh().object),noscript:Rh().arrayOf(Rh().object),onChangeClientState:Rh().func,script:Rh().arrayOf(Rh().object),style:Rh().arrayOf(Rh().object),title:Rh().string,titleAttributes:Rh().object,titleTemplate:Rh().string},e.defaultProps={defer:!0,encodeSpecialCharacters:!0},e.peek=t.peek,e.rewind=function(){var e=t.rewind();return e||(e=Fd({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},n}(Bh()((function(t){return{baseTag:Sd([Jh,id],t),bodyAttributes:kd(qh,t),defer:Pd(t,sd),encode:Pd(t,ld),htmlAttributes:kd(Xh,t),linkTags:Cd(Yh.LINK,[nd,Jh],t),metaTags:Cd(Yh.META,[td,Kh,Qh,ed,$h],t),noscriptTags:Cd(Yh.NOSCRIPT,[_h],t),onChangeClientState:Md(t),scriptTags:Cd(Yh.SCRIPT,[rd,_h],t),styleTags:Cd(Yh.STYLE,[Gh],t),title:xd(t),titleAttributes:kd(Zh,t)}}),(function(t){Vd&&Od(Vd),t.defer?Vd=Nd((function(){Ed(t,(function(){Vd=null}))})):(Ed(t),Vd=null)}),Fd)((function(){return null})));Ud.renderStatic=Ud.rewind;var Wd=__webpack_require__(184);const qd=k.createContext({openMenu:()=>{},closeMenu:()=>{},setMenuPosition:t=>{},checkMenuPosition:t=>{},setMenuItems:t=>{},open:0,show:0,position:[0,0],items:[]}),Xd=()=>k.useContext(qd),Zd=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];(0,k.useEffect)((()=>{const r=r=>{if(t.current&&!t.current.contains(r.target)){void 0===n.find((t=>r.target.classList.contains(t)))&&e()}};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}}),[t])},Yd=ln.div`
  background: ${wc};
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
`,Kd=ln.button`
  border-bottom: 1px solid ${yc};
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 0.75rem 0.5rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  color: ${_u};

  &:hover {
    opacity: 0.75;
  }

  .title {
    color: ${_u};
    padding: 0 0 0 0.75rem;
    font-size: 1rem;
  }
`,Gd=()=>{const t=Xd(),{position:e}=t,n=(0,k.useRef)(null);(0,k.useEffect)((()=>{1===t.open&&t.checkMenuPosition(n)}),[t.open]),(0,k.useEffect)((()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)})),[]);const r=()=>{t.closeMenu()};return Zd(n,(()=>{t.closeMenu()}),["ignore-open-menu-button"]),(0,Wd.jsx)(Wd.Fragment,{children:1===t.open&&(0,Wd.jsx)(Yd,{ref:n,style:{position:"absolute",left:`${e[0]}px`,top:`${e[1]}px`,zIndex:99,opacity:1===t.show?1:0},children:t.items.map(((e,n)=>{const{icon:r,title:i,wrap:o,cb:a}=e;return(0,Wd.jsxs)(Kd,{onClick:()=>{a(),t.closeMenu()},children:[r,(0,Wd.jsx)("div",{className:"title",children:i})]},`menu_item_${n}`)}))})})},Jd=k.createContext({openPalette:()=>{},closePalette:()=>{},setPalettePosition:t=>{},checkPalettePosition:t=>{},open:0,show:0,position:[0,0]}),Qd=()=>k.useContext(Jd);var _d=__webpack_require__(518),$d=__webpack_require__.n(_d);const tf=t=>"string"!==typeof t?t:`${t.substring(0,6)}...${t.substring(t.length-6,t.length)}`,ef=t=>Number(t.slice(0,t.length-3))*parseFloat(getComputedStyle(document.documentElement).fontSize),nf=(t,e)=>t/10**e,rf=(t,e)=>{const n=new($d())(10),r=new($d())(e),i=t.div(n.pow(r)),o=t.mod(n.pow(r)),a=i.toString(),s=o.toString().padStart(e,"0");return Number(`${a}.${s||"0"}`)},of=(t,e)=>{t=Number(t),e=Number(e);const n=new($d())(10),r=new($d())(e),[i,o]=t.toFixed(e).split("."),a=new($d())(Number(i)),s=new($d())(Number(o));return a.mul(n.pow(r)).add(s)},af=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),sf=t=>{const e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")},lf=t=>t.replace(/,/g,""),uf=t=>new Promise((e=>setTimeout(e,t))),cf=t=>Number(t.slice(0,-1)),hf=t=>{const e=t.substring(t.lastIndexOf("/")+1);return""===e.trim()?"overview":e},df=(t,e)=>{for(const n of e)if(n.uri===t)return n.title;return""},ff=t=>""!==(t="string"===typeof t?t.trim():String(t))&&!Number.isNaN(Number(t)),pf=(t,e,n)=>{e(t),n.current=t},mf=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=localStorage.getItem(t);return null===r?e:n?JSON.parse(r):r},gf=k.createContext({toggleTheme:t=>{},toggleCard:t=>{},mode:"light",card:"flat"}),yf=()=>k.useContext(gf),vf=t=>{let{children:e}=t,n=localStorage.getItem("theme"),r=localStorage.getItem("card");"light"!==n&&"dark"!==n&&(n="light",n=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"light":"dark",localStorage.setItem("theme",n)),["flat","border","shadow"].includes(r||"")||(r="shadow",localStorage.setItem("card",r));const[i,o]=k.useState({mode:n,card:r}),a=(0,k.useRef)(i);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(t=>{const e=t.matches?"dark":"light";localStorage.setItem("theme",e),pf({...a.current,mode:e},o,a)}));return(0,Wd.jsx)(gf.Provider,{value:{toggleTheme:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null===t&&(t="dark"===i.mode?"light":"dark"),localStorage.setItem("theme",t),pf({...a.current,mode:t},o,a)},toggleCard:t=>{localStorage.setItem("card",t),pf({...a.current,card:t},o,a)},mode:a.current.mode,card:a.current.card},children:e})};var bf;function wf(){return wf=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wf.apply(this,arguments)}function xf(t,e){let{title:n,titleId:r,...i}=t;return k.createElement("svg",wf({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:e,"aria-labelledby":r},i),void 0===n?k.createElement("title",{id:r},"Moon"):n?k.createElement("title",{id:r},n):null,bf||(bf=k.createElement("path",{d:"M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32})))}const Mf=k.forwardRef(xf);__webpack_require__.p;var kf,Sf;function Cf(){return Cf=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cf.apply(this,arguments)}function Pf(t,e){let{title:n,titleId:r,...i}=t;return k.createElement("svg",Cf({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:e,"aria-labelledby":r},i),void 0===n?k.createElement("title",{id:r},"Sunny"):n?k.createElement("title",{id:r},n):null,kf||(kf=k.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:32,d:"M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"})),Sf||(Sf=k.createElement("circle",{cx:256,cy:256,r:80,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:32})))}const Tf=k.forwardRef(Pf);__webpack_require__.p;function Af(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Nf(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Af(Object(n),!0).forEach((function(e){Vf(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Af(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Of(t){return Of="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Of(t)}function jf(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Vf(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ef(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(t,e)||zf(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function If(t){return function(t){if(Array.isArray(t))return Lf(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||zf(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function zf(t,e){if(t){if("string"===typeof t)return Lf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Lf(t,e):void 0}}function Lf(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Rf=function(){},Hf={},Bf={},Df=null,Ff={mark:Rf,measure:Rf};try{"undefined"!==typeof window&&(Hf=window),"undefined"!==typeof document&&(Bf=document),"undefined"!==typeof MutationObserver&&(Df=MutationObserver),"undefined"!==typeof performance&&(Ff=performance)}catch($ht){}var Uf=(Hf.navigator||{}).userAgent,Wf=void 0===Uf?"":Uf,qf=Hf,Xf=Bf,Zf=Df,Yf=Ff,Kf=(qf.document,!!Xf.documentElement&&!!Xf.head&&"function"===typeof Xf.addEventListener&&"function"===typeof Xf.createElement),Gf=~Wf.indexOf("MSIE")||~Wf.indexOf("Trident/"),Jf="svg-inline--fa",Qf="data-fa-i2svg",_f="data-fa-pseudo-element",$f="data-prefix",tp="data-icon",ep="fontawesome-i2svg",np=["HTML","HEAD","STYLE","SCRIPT"],rp=function(){try{return!0}catch($ht){return!1}}(),ip={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},op={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ap={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sp={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},lp=/fa[srltdbk\-\ ]/,up="fa-layers-text",cp=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,hp={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},dp=[1,2,3,4,5,6,7,8,9,10],fp=dp.concat([11,12,13,14,15,16,17,18,19,20]),pp=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],mp="duotone-group",gp="swap-opacity",yp="primary",vp="secondary",bp=[].concat(If(Object.keys(op)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mp,gp,yp,vp]).concat(dp.map((function(t){return"".concat(t,"x")}))).concat(fp.map((function(t){return"w-".concat(t)}))),wp=qf.FontAwesomeConfig||{};if(Xf&&"function"===typeof Xf.querySelector){[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(t){var e=Ef(t,2),n=e[0],r=e[1],i=function(t){return""===t||"false"!==t&&("true"===t||t)}(function(t){var e=Xf.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}(n));void 0!==i&&null!==i&&(wp[r]=i)}))}var xp=Nf(Nf({},{familyPrefix:"fa",styleDefault:"solid",replacementClass:Jf,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0}),wp);xp.autoReplaceSvg||(xp.observeMutations=!1);var Mp={};Object.keys(xp).forEach((function(t){Object.defineProperty(Mp,t,{enumerable:!0,set:function(e){xp[t]=e,kp.forEach((function(t){return t(Mp)}))},get:function(){return xp[t]}})})),qf.FontAwesomeConfig=Mp;var kp=[];var Sp=16,Cp={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Pp(){for(var t=12,e="";t-- >0;)e+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return e}function Tp(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ap(t){return t.classList?Tp(t.classList):(t.getAttribute("class")||"").split(" ").filter((function(t){return t}))}function Np(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Op(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")}),"")}function jp(t){return t.size!==Cp.size||t.x!==Cp.x||t.y!==Cp.y||t.rotate!==Cp.rotate||t.flipX||t.flipY}function Vp(){var t="fa",e=Jf,n=Mp.familyPrefix,r=Mp.replacementClass,i=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Ep=!1;function Ip(){Mp.autoAddCss&&!Ep&&(!function(t){if(t&&Kf){var e=Xf.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Xf.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}Xf.head.insertBefore(e,r)}}(Vp()),Ep=!0)}var zp={mixout:function(){return{dom:{css:Vp,insertCss:Ip}}},hooks:function(){return{beforeDOMElementCreation:function(){Ip()},beforeI2svg:function(){Ip()}}}},Lp=qf||{};Lp.___FONT_AWESOME___||(Lp.___FONT_AWESOME___={}),Lp.___FONT_AWESOME___.styles||(Lp.___FONT_AWESOME___.styles={}),Lp.___FONT_AWESOME___.hooks||(Lp.___FONT_AWESOME___.hooks={}),Lp.___FONT_AWESOME___.shims||(Lp.___FONT_AWESOME___.shims=[]);var Rp=Lp.___FONT_AWESOME___,Hp=[],Bp=!1;function Dp(t){Kf&&(Bp?setTimeout(t,0):Hp.push(t))}function Fp(t){var e=t.tag,n=t.attributes,r=void 0===n?{}:n,i=t.children,o=void 0===i?[]:i;return"string"===typeof t?Np(t):"<".concat(e," ").concat(function(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,'="').concat(Np(t[n]),'" ')}),"").trim()}(r),">").concat(o.map(Fp).join(""),"</").concat(e,">")}function Up(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}Kf&&((Bp=(Xf.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Xf.readyState))||Xf.addEventListener("DOMContentLoaded",(function t(){Xf.removeEventListener("DOMContentLoaded",t),Bp=1,Hp.map((function(t){return t()}))})));var Wp=function(t,e,n,r){var i,o,a,s=Object.keys(t),l=s.length,u=void 0!==r?function(t,e){return function(n,r,i,o){return t.call(e,n,r,i,o)}}(e,r):e;for(void 0===n?(i=1,a=t[s[0]]):(i=0,a=n);i<l;i++)a=u(a,t[o=s[i]],o,t);return a};function qp(t){var e=function(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=t.charCodeAt(n++);56320==(64512&o)?e.push(((1023&i)<<10)+(1023&o)+65536):(e.push(i),n--)}else e.push(i)}return e}(t);return 1===e.length?e[0].toString(16):null}function Xp(t){return Object.keys(t).reduce((function(e,n){var r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e}),{})}function Zp(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,i=void 0!==r&&r,o=Xp(e);"function"!==typeof Rp.hooks.addPack||i?Rp.styles[t]=Nf(Nf({},Rp.styles[t]||{}),o):Rp.hooks.addPack(t,Xp(e)),"fas"===t&&Zp("fa",e)}var Yp=Rp.styles,Kp=Rp.shims,Gp=Object.values(ap),Jp=null,Qp={},_p={},$p={},tm={},em={},nm=Object.keys(ip);function rm(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r!==t||""===i||function(t){return~bp.indexOf(t)}(i)?null:i}var im=function(){var t=function(t){return Wp(Yp,(function(e,n,r){return e[r]=Wp(n,t,{}),e}),{})};Qp=t((function(t,e,n){if(e[3]&&(t[e[3]]=n),e[2]){var r=e[2].filter((function(t){return"number"===typeof t}));r.forEach((function(e){t[e.toString(16)]=n}))}return t})),_p=t((function(t,e,n){if(t[n]=n,e[2]){var r=e[2].filter((function(t){return"string"===typeof t}));r.forEach((function(e){t[e]=n}))}return t})),em=t((function(t,e,n){var r=e[2];return t[n]=n,r.forEach((function(e){t[e]=n})),t}));var e="far"in Yp||Mp.autoFetchSvg,n=Wp(Kp,(function(t,n){var r=n[0],i=n[1],o=n[2];return"far"!==i||e||(i="fas"),"string"===typeof r&&(t.names[r]={prefix:i,iconName:o}),"number"===typeof r&&(t.unicodes[r.toString(16)]={prefix:i,iconName:o}),t}),{names:{},unicodes:{}});$p=n.names,tm=n.unicodes,Jp=um(Mp.styleDefault)};function om(t,e){return(Qp[t]||{})[e]}function am(t,e){return(em[t]||{})[e]}function sm(t){return $p[t]||{prefix:null,iconName:null}}function lm(){return Jp}!function(t){kp.push(t)}((function(t){Jp=um(t.styleDefault)})),im();function um(t){var e=op[t]||op[ip[t]],n=t in Rp.styles?t:null;return e||n||null}function cm(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.skipLookups,r=void 0!==n&&n,i=null,o=t.reduce((function(t,e){var n=rm(Mp.familyPrefix,e);if(Yp[e]?(e=Gp.includes(e)?sp[e]:e,i=e,t.prefix=e):nm.indexOf(e)>-1?(i=e,t.prefix=um(e)):n?t.iconName=n:e!==Mp.replacementClass&&t.rest.push(e),!r&&t.prefix&&t.iconName){var o="fa"===i?sm(t.iconName):{},a=am(t.prefix,t.iconName);o.prefix&&(i=null),t.iconName=o.iconName||a||t.iconName,t.prefix=o.prefix||t.prefix,"far"!==t.prefix||Yp.far||!Yp.fas||Mp.autoFetchSvg||(t.prefix="fas")}return t}),{prefix:null,iconName:null,rest:[]});return"fa"!==o.prefix&&"fa"!==i||(o.prefix=lm()||"fas"),o}var hm=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.definitions={}}var e,n,r;return e=t,n=[{key:"add",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(e){t.definitions[e]=Nf(Nf({},t.definitions[e]||{}),i[e]),Zp(e,i[e]);var n=ap[e];n&&Zp(n,i[e]),im()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map((function(e){var r=n[e],i=r.prefix,o=r.iconName,a=r.icon,s=a[2];t[i]||(t[i]={}),s.length>0&&s.forEach((function(e){"string"===typeof e&&(t[i][e]=a)})),t[i][o]=a})),t}}],n&&jf(e.prototype,n),r&&jf(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),dm=[],fm={},pm={},mm=Object.keys(pm);function gm(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=fm[t]||[];return o.forEach((function(t){e=t.apply(null,[e].concat(r))})),e}function ym(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=fm[t]||[];i.forEach((function(t){t.apply(null,n)}))}function vm(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return pm[t]?pm[t].apply(null,e):void 0}function bm(t){"fa"===t.prefix&&(t.prefix="fas");var e=t.iconName,n=t.prefix||lm();if(e)return e=am(n,e)||e,Up(wm.definitions,n,e)||Up(Rp.styles,n,e)}var wm=new hm,xm={i2svg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Kf?(ym("beforeI2svg",t),vm("pseudoElements2svg",t),vm("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot;!1===Mp.autoReplaceSvg&&(Mp.autoReplaceSvg=!0),Mp.observeMutations=!0,Dp((function(){Sm({autoReplaceSvgRoot:e}),ym("watch",t)}))}},Mm={icon:function(t){if(null===t)return null;if("object"===Of(t)&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:am(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&2===t.length){var e=0===t[1].indexOf("fa-")?t[1].slice(3):t[1],n=um(t[0]);return{prefix:n,iconName:am(n,e)||e}}if("string"===typeof t&&(t.indexOf("".concat(Mp.familyPrefix,"-"))>-1||t.match(lp))){var r=cm(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||lm(),iconName:am(r.prefix,r.iconName)||r.iconName}}if("string"===typeof t){var i=lm();return{prefix:i,iconName:am(i,t)||t}}}},km={noAuto:function(){Mp.autoReplaceSvg=!1,Mp.observeMutations=!1,ym("noAuto")},config:Mp,dom:xm,parse:Mm,library:wm,findIconDefinition:bm,toHtml:Fp},Sm=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot,n=void 0===e?Xf:e;(Object.keys(Rp.styles).length>0||Mp.autoFetchSvg)&&Kf&&Mp.autoReplaceSvg&&km.dom.i2svg({node:n})};function Cm(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return Fp(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(Kf){var e=Xf.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function Pm(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,a=t.transform,s=t.symbol,l=t.title,u=t.maskId,c=t.titleId,h=t.extra,d=t.watchable,f=void 0!==d&&d,p=r.found?r:n,m=p.width,g=p.height,y="fak"===i,v=[Mp.replacementClass,o?"".concat(Mp.familyPrefix,"-").concat(o):""].filter((function(t){return-1===h.classes.indexOf(t)})).filter((function(t){return""!==t||!!t})).concat(h.classes).join(" "),b={children:[],attributes:Nf(Nf({},h.attributes),{},{"data-prefix":i,"data-icon":o,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)})},w=y&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};f&&(b.attributes[Qf]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(c||Pp())},children:[l]}),delete b.attributes.title);var x=Nf(Nf({},b),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:a,symbol:s,styles:Nf(Nf({},w),h.styles)}),M=r.found&&n.found?vm("generateAbstractMask",x)||{children:[],attributes:{}}:vm("generateAbstractIcon",x)||{children:[],attributes:{}},k=M.children,S=M.attributes;return x.children=k,x.attributes=S,s?function(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol,a=!0===o?"".concat(e,"-").concat(Mp.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Nf(Nf({},i),{},{id:a}),children:r}]}]}(x):function(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,a=t.transform;if(jp(a)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=Op(Nf(Nf({},o),{},{"transform-origin":"".concat(s.x+a.x/16,"em ").concat(s.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}(x)}function Tm(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,a=t.extra,s=t.watchable,l=void 0!==s&&s,u=Nf(Nf(Nf({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});l&&(u[Qf]="");var c=Nf({},a.styles);jp(i)&&(c.transform=function(t){var e=t.transform,n=t.width,r=void 0===n?16:n,i=t.height,o=void 0===i?16:i,a=t.startCentered,s=void 0!==a&&a,l="";return l+=s&&Gf?"translate(".concat(e.x/Sp-r/2,"em, ").concat(e.y/Sp-o/2,"em) "):s?"translate(calc(-50% + ".concat(e.x/Sp,"em), calc(-50% + ").concat(e.y/Sp,"em)) "):"translate(".concat(e.x/Sp,"em, ").concat(e.y/Sp,"em) "),l+="scale(".concat(e.size/Sp*(e.flipX?-1:1),", ").concat(e.size/Sp*(e.flipY?-1:1),") "),l+"rotate(".concat(e.rotate,"deg) ")}({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var h=Op(c);h.length>0&&(u.style=h);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function Am(t){var e=t.content,n=t.title,r=t.extra,i=Nf(Nf(Nf({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Op(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Nm=Rp.styles;function Om(t){var e=t[0],n=t[1],r=Ef(t.slice(4),1)[0];return{found:!0,width:e,height:n,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(Mp.familyPrefix,"-").concat(mp)},children:[{tag:"path",attributes:{class:"".concat(Mp.familyPrefix,"-").concat(vp),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(Mp.familyPrefix,"-").concat(yp),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}var jm={found:!1,width:512,height:512};function Vm(t,e){var n=e;return"fa"===e&&null!==Mp.styleDefault&&(e=lm()),new Promise((function(r,i){vm("missingIconAbstract");if("fa"===n){var o=sm(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Nm[e]&&Nm[e][t])return r(Om(Nm[e][t]));!function(t,e){rp||Mp.showMissingIcons||!t||console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}(t,e),r(Nf(Nf({},jm),{},{icon:Mp.showMissingIcons&&t&&vm("missingIconAbstract")||{}}))}))}var Em=function(){},Im=Mp.measurePerformance&&Yf&&Yf.mark&&Yf.measure?Yf:{mark:Em,measure:Em},zm='FA "6.1.0"',Lm=function(t){Im.mark("".concat(zm," ").concat(t," ends")),Im.measure("".concat(zm," ").concat(t),"".concat(zm," ").concat(t," begins"),"".concat(zm," ").concat(t," ends"))},Rm=function(t){return Im.mark("".concat(zm," ").concat(t," begins")),function(){return Lm(t)}},Hm=function(){};function Bm(t){return"string"===typeof(t.getAttribute?t.getAttribute(Qf):null)}function Dm(t){return Xf.createElementNS("http://www.w3.org/2000/svg",t)}function Fm(t){return Xf.createElement(t)}function Um(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.ceFn,r=void 0===n?"svg"===t.tag?Dm:Fm:n;if("string"===typeof t)return Xf.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach((function(e){i.setAttribute(e,t.attributes[e])}));var o=t.children||[];return o.forEach((function(t){i.appendChild(Um(t,{ceFn:r}))})),i}var Wm={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach((function(t){e.parentNode.insertBefore(Um(t),e)})),null===e.getAttribute(Qf)&&Mp.keepOriginalSource){var n=Xf.createComment(function(t){var e=" ".concat(t.outerHTML," ");return"".concat(e,"Font Awesome fontawesome.com ")}(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){var e=t[0],n=t[1];if(~Ap(e).indexOf(Mp.replacementClass))return Wm.replace(t);var r=new RegExp("".concat(Mp.familyPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce((function(t,e){return e===Mp.replacementClass||e.match(r)?t.toSvg.push(e):t.toNode.push(e),t}),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),0===i.toNode.length?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=n.map((function(t){return Fp(t)})).join("\n");e.setAttribute(Qf,""),e.innerHTML=o}};function qm(t){t()}function Xm(t,e){var n="function"===typeof e?e:Hm;if(0===t.length)n();else{var r=qm;"async"===Mp.mutateApproach&&(r=qf.requestAnimationFrame||qm),r((function(){var e=!0===Mp.autoReplaceSvg?Wm.replace:Wm[Mp.autoReplaceSvg]||Wm.replace,r=Rm("mutate");t.map(e),r(),n()}))}}var Zm=!1;function Ym(){Zm=!0}function Km(){Zm=!1}var Gm=null;function Jm(t){if(Zf&&Mp.observeMutations){var e=t.treeCallback,n=void 0===e?Hm:e,r=t.nodeCallback,i=void 0===r?Hm:r,o=t.pseudoElementsCallback,a=void 0===o?Hm:o,s=t.observeMutationsRoot,l=void 0===s?Xf:s;Gm=new Zf((function(t){if(!Zm){var e=lm();Tp(t).forEach((function(t){if("childList"===t.type&&t.addedNodes.length>0&&!Bm(t.addedNodes[0])&&(Mp.searchPseudoElements&&a(t.target),n(t.target)),"attributes"===t.type&&t.target.parentNode&&Mp.searchPseudoElements&&a(t.target.parentNode),"attributes"===t.type&&Bm(t.target)&&~pp.indexOf(t.attributeName))if("class"===t.attributeName&&function(t){var e=t.getAttribute?t.getAttribute($f):null,n=t.getAttribute?t.getAttribute(tp):null;return e&&n}(t.target)){var r=cm(Ap(t.target)),o=r.prefix,s=r.iconName;t.target.setAttribute($f,o||e),s&&t.target.setAttribute(tp,s)}else(function(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Mp.replacementClass)})(t.target)&&i(t.target)}))}})),Kf&&Gm.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Qm(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((function(t,e){var n=e.split(":"),r=n[0],i=n.slice(1);return r&&i.length>0&&(t[r]=i.join(":").trim()),t}),{})),n}function _m(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=void 0!==t.innerText?t.innerText.trim():"",i=cm(Ap(t));return i.prefix||(i.prefix=lm()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=function(t,e){return(_p[t]||{})[e]}(i.prefix,t.innerText)||om(i.prefix,qp(t.innerText))),i}function $m(t){var e=Tp(t.attributes).reduce((function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t}),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return Mp.autoA11y&&(n?e["aria-labelledby"]="".concat(Mp.replacementClass,"-title-").concat(r||Pp()):(e["aria-hidden"]="true",e.focusable="false")),e}function tg(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},n=_m(t),r=n.iconName,i=n.prefix,o=n.rest,a=$m(t),s=gm("parseNodeAttributes",{},t),l=e.styleParser?Qm(t):[];return Nf({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Cp,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:a}},s)}var eg=Rp.styles;function ng(t){var e="nest"===Mp.autoReplaceSvg?tg(t,{styleParser:!1}):tg(t);return~e.extra.classes.indexOf(up)?vm("generateLayersText",t,e):vm("generateSvgReplacementMutation",t,e)}function rg(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!Kf)return Promise.resolve();var n=Xf.documentElement.classList,r=function(t){return n.add("".concat(ep,"-").concat(t))},i=function(t){return n.remove("".concat(ep,"-").concat(t))},o=Mp.autoFetchSvg?Object.keys(ip):Object.keys(eg),a=[".".concat(up,":not([").concat(Qf,"])")].concat(o.map((function(t){return".".concat(t,":not([").concat(Qf,"])")}))).join(", ");if(0===a.length)return Promise.resolve();var s=[];try{s=Tp(t.querySelectorAll(a))}catch($ht){}if(!(s.length>0))return Promise.resolve();r("pending"),i("complete");var l=Rm("onTree"),u=s.reduce((function(t,e){try{var n=ng(e);n&&t.push(n)}catch($ht){rp||"MissingIcon"===$ht.name&&console.error($ht)}return t}),[]);return new Promise((function(t,n){Promise.all(u).then((function(n){Xm(n,(function(){r("active"),r("complete"),i("pending"),"function"===typeof e&&e(),l(),t()}))})).catch((function(t){l(),n(t)}))}))}function ig(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;ng(t).then((function(t){t&&Xm([t],e)}))}var og=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?Cp:n,i=e.symbol,o=void 0!==i&&i,a=e.mask,s=void 0===a?null:a,l=e.maskId,u=void 0===l?null:l,c=e.title,h=void 0===c?null:c,d=e.titleId,f=void 0===d?null:d,p=e.classes,m=void 0===p?[]:p,g=e.attributes,y=void 0===g?{}:g,v=e.styles,b=void 0===v?{}:v;if(t){var w=t.prefix,x=t.iconName,M=t.icon;return Cm(Nf({type:"icon"},t),(function(){return ym("beforeDOMElementCreation",{iconDefinition:t,params:e}),Mp.autoA11y&&(h?y["aria-labelledby"]="".concat(Mp.replacementClass,"-title-").concat(f||Pp()):(y["aria-hidden"]="true",y.focusable="false")),Pm({icons:{main:Om(M),mask:s?Om(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:x,transform:Nf(Nf({},Cp),r),symbol:o,title:h,maskId:u,titleId:f,extra:{attributes:y,styles:b,classes:m}})}))}},ag={mixout:function(){return{icon:(t=og,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(e||{}).icon?e:bm(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:bm(i||{})),t(r,Nf(Nf({},n),{},{mask:i}))})};var t},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=rg,t.nodeCallback=ig,t}}},provides:function(t){t.i2svg=function(t){var e=t.node,n=void 0===e?Xf:e,r=t.callback;return rg(n,void 0===r?function(){}:r)},t.generateSvgReplacementMutation=function(t,e){var n=e.iconName,r=e.title,i=e.titleId,o=e.prefix,a=e.transform,s=e.symbol,l=e.mask,u=e.maskId,c=e.extra;return new Promise((function(e,h){Promise.all([Vm(n,o),l.iconName?Vm(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((function(l){var h=Ef(l,2),d=h[0],f=h[1];e([t,Pm({icons:{main:d,mask:f},prefix:o,iconName:n,transform:a,symbol:s,maskId:u,title:r,titleId:i,extra:c,watchable:!0})])})).catch(h)}))},t.generateAbstractIcon=function(t){var e,n=t.children,r=t.attributes,i=t.main,o=t.transform,a=Op(t.styles);return a.length>0&&(r.style=a),jp(o)&&(e=vm("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(e||i.icon),{children:n,attributes:r}}}},sg={mixout:function(){return{layer:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.classes,r=void 0===n?[]:n;return Cm({type:"layer"},(function(){ym("beforeDOMElementCreation",{assembler:t,params:e});var n=[];return t((function(t){Array.isArray(t)?t.map((function(t){n=n.concat(t.abstract)})):n=n.concat(t.abstract)})),[{tag:"span",attributes:{class:["".concat(Mp.familyPrefix,"-layers")].concat(If(r)).join(" ")},children:n}]}))}}}},lg={mixout:function(){return{counter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.title,r=void 0===n?null:n,i=e.classes,o=void 0===i?[]:i,a=e.attributes,s=void 0===a?{}:a,l=e.styles,u=void 0===l?{}:l;return Cm({type:"counter",content:t},(function(){return ym("beforeDOMElementCreation",{content:t,params:e}),Am({content:t.toString(),title:r,extra:{attributes:s,styles:u,classes:["".concat(Mp.familyPrefix,"-layers-counter")].concat(If(o))}})}))}}}},ug={mixout:function(){return{text:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?Cp:n,i=e.title,o=void 0===i?null:i,a=e.classes,s=void 0===a?[]:a,l=e.attributes,u=void 0===l?{}:l,c=e.styles,h=void 0===c?{}:c;return Cm({type:"text",content:t},(function(){return ym("beforeDOMElementCreation",{content:t,params:e}),Tm({content:t,transform:Nf(Nf({},Cp),r),title:o,extra:{attributes:u,styles:h,classes:["".concat(Mp.familyPrefix,"-layers-text")].concat(If(s))}})}))}}},provides:function(t){t.generateLayersText=function(t,e){var n=e.title,r=e.transform,i=e.extra,o=null,a=null;if(Gf){var s=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();o=l.width/s,a=l.height/s}return Mp.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,Tm({content:t.innerHTML,width:o,height:a,transform:r,title:n,extra:i,watchable:!0})])}}},cg=new RegExp('"',"ug"),hg=[1105920,1112319];function dg(t,e){var n="".concat("data-fa-pseudo-element-pending").concat(e.replace(":","-"));return new Promise((function(r,i){if(null!==t.getAttribute(n))return r();var o=Tp(t.children).filter((function(t){return t.getAttribute(_f)===e}))[0],a=qf.getComputedStyle(t,e),s=a.getPropertyValue("font-family").match(cp),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!s)return t.removeChild(o),r();if(s&&"none"!==u&&""!==u){var c=a.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?op[s[2].toLowerCase()]:hp[l],d=function(t){var e=t.replace(cg,""),n=function(t,e){var n,r=t.length,i=t.charCodeAt(e);return i>=55296&&i<=56319&&r>e+1&&(n=t.charCodeAt(e+1))>=56320&&n<=57343?1024*(i-55296)+n-56320+65536:i}(e,0),r=n>=hg[0]&&n<=hg[1],i=2===e.length&&e[0]===e[1];return{value:qp(i?e[0]:e),isSecondary:r||i}}(c),f=d.value,p=d.isSecondary,m=s[0].startsWith("FontAwesome"),g=om(h,f),y=g;if(m){var v=function(t){var e=tm[t],n=om("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}(f);v.iconName&&v.prefix&&(g=v.iconName,h=v.prefix)}if(!g||p||o&&o.getAttribute($f)===h&&o.getAttribute(tp)===y)r();else{t.setAttribute(n,y),o&&t.removeChild(o);var b={iconName:null,title:null,titleId:null,prefix:null,transform:Cp,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},w=b.extra;w.attributes[_f]=e,Vm(g,h).then((function(i){var o=Pm(Nf(Nf({},b),{},{icons:{main:i,mask:{prefix:null,iconName:null,rest:[]}},prefix:h,iconName:y,extra:w,watchable:!0})),a=Xf.createElement("svg");"::before"===e?t.insertBefore(a,t.firstChild):t.appendChild(a),a.outerHTML=o.map((function(t){return Fp(t)})).join("\n"),t.removeAttribute(n),r()})).catch(i)}}else r()}))}function fg(t){return Promise.all([dg(t,"::before"),dg(t,"::after")])}function pg(t){return t.parentNode!==document.head&&!~np.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(_f)&&(!t.parentNode||"svg"!==t.parentNode.tagName)}function mg(t){if(Kf)return new Promise((function(e,n){var r=Tp(t.querySelectorAll("*")).filter(pg).map(fg),i=Rm("searchPseudoElements");Ym(),Promise.all(r).then((function(){i(),Km(),e()})).catch((function(){i(),Km(),n()}))}))}var gg={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=mg,t}}},provides:function(t){t.pseudoElements2svg=function(t){var e=t.node,n=void 0===e?Xf:e;Mp.searchPseudoElements&&mg(n)}}},yg=!1,vg=function(t){return t.toLowerCase().split(" ").reduce((function(t,e){var n=e.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&"h"===i)return t.flipX=!0,t;if(r&&"v"===i)return t.flipY=!0,t;if(i=parseFloat(i),isNaN(i))return t;switch(r){case"grow":t.size=t.size+i;break;case"shrink":t.size=t.size-i;break;case"left":t.x=t.x-i;break;case"right":t.x=t.x+i;break;case"up":t.y=t.y-i;break;case"down":t.y=t.y+i;break;case"rotate":t.rotate=t.rotate+i}return t}),{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},bg={mixout:function(){return{parse:{transform:function(t){return vg(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-transform");return n&&(t.transform=vg(n)),t}}},provides:function(t){t.generateAbstractTransformGrouping=function(t){var e=t.main,n=t.transform,r=t.containerWidth,i=t.iconWidth,o={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(32*n.x,", ").concat(32*n.y,") "),s="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),u={outer:o,inner:{transform:"".concat(a," ").concat(s," ").concat(l)},path:{transform:"translate(".concat(i/2*-1," -256)")}};return{tag:"g",attributes:Nf({},u.outer),children:[{tag:"g",attributes:Nf({},u.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:Nf(Nf({},e.icon.attributes),u.path)}]}]}}}},wg={x:0,y:0,width:"100%",height:"100%"};function xg(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}var Mg={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-mask"),r=n?cm(n.split(" ").map((function(t){return t.trim()}))):{prefix:null,iconName:null,rest:[]};return r.prefix||(r.prefix=lm()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(t){t.generateAbstractMask=function(t){var e,n=t.children,r=t.attributes,i=t.main,o=t.mask,a=t.maskId,s=t.transform,l=i.width,u=i.icon,c=o.width,h=o.icon,d=function(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(32*e.x,", ").concat(32*e.y,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)");return{outer:i,inner:{transform:"".concat(o," ").concat(a," ").concat(s)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}({transform:s,containerWidth:c,iconWidth:l}),f={tag:"rect",attributes:Nf(Nf({},wg),{},{fill:"white"})},p=u.children?{children:u.children.map(xg)}:{},m={tag:"g",attributes:Nf({},d.inner),children:[xg(Nf({tag:u.tag,attributes:Nf(Nf({},u.attributes),d.path)},p))]},g={tag:"g",attributes:Nf({},d.outer),children:[m]},y="mask-".concat(a||Pp()),v="clip-".concat(a||Pp()),b={tag:"mask",attributes:Nf(Nf({},wg),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,g]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(e=h,"g"===e.tag?e.children:[e])},b]};return n.push(w,{tag:"rect",attributes:Nf({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(y,")")},wg)}),{children:n,attributes:r}}}},kg={provides:function(t){var e=!1;qf.matchMedia&&(e=qf.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var t=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:Nf(Nf({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=Nf(Nf({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:Nf(Nf({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:Nf(Nf({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Nf(Nf({},i),{},{values:"1;0;1;1;0;1;"})}),t.push(o),t.push({tag:"path",attributes:Nf(Nf({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:Nf(Nf({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:Nf(Nf({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Nf(Nf({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},Sg=[zp,ag,sg,lg,ug,gg,{mixout:function(){return{dom:{unwatch:function(){Ym(),yg=!0}}}},hooks:function(){return{bootstrap:function(){Jm(gm("mutationObserverCallbacks",{}))},noAuto:function(){Gm&&Gm.disconnect()},watch:function(t){var e=t.observeMutationsRoot;yg?Km():Jm(gm("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},bg,Mg,kg,{hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-symbol"),r=null!==n&&(""===n||n);return t.symbol=r,t}}}}];!function(t,e){var n=e.mixoutsTo;dm=t,fm={},Object.keys(pm).forEach((function(t){-1===mm.indexOf(t)&&delete pm[t]})),dm.forEach((function(t){var e=t.mixout?t.mixout():{};if(Object.keys(e).forEach((function(t){"function"===typeof e[t]&&(n[t]=e[t]),"object"===Of(e[t])&&Object.keys(e[t]).forEach((function(r){n[t]||(n[t]={}),n[t][r]=e[t][r]}))})),t.hooks){var r=t.hooks();Object.keys(r).forEach((function(t){fm[t]||(fm[t]=[]),fm[t].push(r[t])}))}t.provides&&t.provides(pm)}))}(Sg,{mixoutsTo:km});var Cg=km.parse,Pg=km.icon;function Tg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Ag(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Tg(Object(n),!0).forEach((function(e){Og(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Tg(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Ng(t){return Ng="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ng(t)}function Og(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function jg(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function Vg(t){return function(t){if(Array.isArray(t))return Eg(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return Eg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Eg(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Eg(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ig(t){return e=t,(e-=0)===e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}var zg=["style"];function Lg(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var n,r=e.indexOf(":"),i=Ig(e.slice(0,r)),o=e.slice(r+1).trim();return i.startsWith("webkit")?t[(n=i,n.charAt(0).toUpperCase()+n.slice(1))]=o:t[i]=o,t}),{})}var Rg=!1;try{Rg=!0}catch($ht){}function Hg(t){return t&&"object"===Ng(t)&&t.prefix&&t.iconName&&t.icon?t:Cg.icon?Cg.icon(t):null===t?null:t&&"object"===Ng(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"===typeof t?{prefix:"fas",iconName:t}:void 0}function Bg(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Og({},t,e):{}}var Dg=["forwardedRef"];function Fg(t){var e=t.forwardedRef,n=jg(t,Dg),r=n.icon,i=n.mask,o=n.symbol,a=n.className,s=n.title,l=n.titleId,u=n.maskId,c=Hg(r),h=Bg("classes",[].concat(Vg(function(t){var e,n=t.beat,r=t.fade,i=t.beatFade,o=t.bounce,a=t.shake,s=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,h=t.pulse,d=t.fixedWidth,f=t.inverse,p=t.border,m=t.listItem,g=t.flip,y=t.size,v=t.rotation,b=t.pull,w=(Og(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":d,"fa-inverse":f,"fa-border":p,"fa-li":m,"fa-flip-horizontal":"horizontal"===g||"both"===g,"fa-flip-vertical":"vertical"===g||"both"===g},"fa-".concat(y),"undefined"!==typeof y&&null!==y),Og(e,"fa-rotate-".concat(v),"undefined"!==typeof v&&null!==v&&0!==v),Og(e,"fa-pull-".concat(b),"undefined"!==typeof b&&null!==b),Og(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(w).map((function(t){return w[t]?t:null})).filter((function(t){return t}))}(n)),Vg(a.split(" ")))),d=Bg("transform","string"===typeof n.transform?Cg.transform(n.transform):n.transform),f=Bg("mask",Hg(i)),p=Pg(c,Ag(Ag(Ag(Ag({},h),d),f),{},{symbol:o,title:s,titleId:l,maskId:u}));if(!p)return function(){var t;!Rg&&console&&"function"===typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",c),null;var m=p.abstract,g={ref:e};return Object.keys(n).forEach((function(t){Fg.defaultProps.hasOwnProperty(t)||(g[t]=n[t])})),Ug(m[0],g)}Fg.displayName="FontAwesomeIcon",Fg.propTypes={beat:Rh().bool,border:Rh().bool,bounce:Rh().bool,className:Rh().string,fade:Rh().bool,flash:Rh().bool,mask:Rh().oneOfType([Rh().object,Rh().array,Rh().string]),maskId:Rh().string,fixedWidth:Rh().bool,inverse:Rh().bool,flip:Rh().oneOf(["horizontal","vertical","both"]),icon:Rh().oneOfType([Rh().object,Rh().array,Rh().string]),listItem:Rh().bool,pull:Rh().oneOf(["right","left"]),pulse:Rh().bool,rotation:Rh().oneOf([0,90,180,270]),shake:Rh().bool,size:Rh().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Rh().bool,spinPulse:Rh().bool,spinReverse:Rh().bool,symbol:Rh().oneOfType([Rh().bool,Rh().string]),title:Rh().string,titleId:Rh().string,transform:Rh().oneOfType([Rh().string,Rh().object]),swapOpacity:Rh().bool},Fg.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Ug=function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var i=(n.children||[]).map((function(n){return t(e,n)})),o=Object.keys(n.attributes||{}).reduce((function(t,e){var r=n.attributes[e];switch(e){case"class":t.attrs.className=r,delete n.attributes.class;break;case"style":t.attrs.style=Lg(r);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=r:t.attrs[Ig(e)]=r}return t}),{attrs:{}}),a=r.style,s=void 0===a?{}:a,l=jg(r,zg);return o.attrs.style=Ag(Ag({},o.attrs.style),s),e.apply(void 0,[n.tag,Ag(Ag({},o.attrs),l)].concat(Vg(i)))}.bind(null,k.createElement),Wg={prefix:"fas",iconName:"angles-right",icon:[448,512,[187,"angle-double-right"],"f101","M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"]},qg=Wg,Xg={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]},Zg={prefix:"fas",iconName:"braille",icon:[640,512,[],"f2a1","M128 96C128 131.3 99.35 160 64 160C28.65 160 0 131.3 0 96C0 60.65 28.65 32 64 32C99.35 32 128 60.65 128 96zM160 256C160 220.7 188.7 192 224 192C259.3 192 288 220.7 288 256C288 291.3 259.3 320 224 320C188.7 320 160 291.3 160 256zM224 272C232.8 272 240 264.8 240 256C240 247.2 232.8 240 224 240C215.2 240 208 247.2 208 256C208 264.8 215.2 272 224 272zM128 416C128 451.3 99.35 480 64 480C28.65 480 0 451.3 0 416C0 380.7 28.65 352 64 352C99.35 352 128 380.7 128 416zM64 400C55.16 400 48 407.2 48 416C48 424.8 55.16 432 64 432C72.84 432 80 424.8 80 416C80 407.2 72.84 400 64 400zM288 416C288 451.3 259.3 480 224 480C188.7 480 160 451.3 160 416C160 380.7 188.7 352 224 352C259.3 352 288 380.7 288 416zM224 400C215.2 400 208 407.2 208 416C208 424.8 215.2 432 224 432C232.8 432 240 424.8 240 416C240 407.2 232.8 400 224 400zM0 256C0 220.7 28.65 192 64 192C99.35 192 128 220.7 128 256C128 291.3 99.35 320 64 320C28.65 320 0 291.3 0 256zM160 96C160 60.65 188.7 32 224 32C259.3 32 288 60.65 288 96C288 131.3 259.3 160 224 160C188.7 160 160 131.3 160 96zM480 96C480 131.3 451.3 160 416 160C380.7 160 352 131.3 352 96C352 60.65 380.7 32 416 32C451.3 32 480 60.65 480 96zM640 96C640 131.3 611.3 160 576 160C540.7 160 512 131.3 512 96C512 60.65 540.7 32 576 32C611.3 32 640 60.65 640 96zM576 80C567.2 80 560 87.16 560 96C560 104.8 567.2 112 576 112C584.8 112 592 104.8 592 96C592 87.16 584.8 80 576 80zM512 256C512 220.7 540.7 192 576 192C611.3 192 640 220.7 640 256C640 291.3 611.3 320 576 320C540.7 320 512 291.3 512 256zM576 272C584.8 272 592 264.8 592 256C592 247.2 584.8 240 576 240C567.2 240 560 247.2 560 256C560 264.8 567.2 272 576 272zM640 416C640 451.3 611.3 480 576 480C540.7 480 512 451.3 512 416C512 380.7 540.7 352 576 352C611.3 352 640 380.7 640 416zM576 400C567.2 400 560 407.2 560 416C560 424.8 567.2 432 576 432C584.8 432 592 424.8 592 416C592 407.2 584.8 400 576 400zM352 256C352 220.7 380.7 192 416 192C451.3 192 480 220.7 480 256C480 291.3 451.3 320 416 320C380.7 320 352 291.3 352 256zM416 272C424.8 272 432 264.8 432 256C432 247.2 424.8 240 416 240C407.2 240 400 247.2 400 256C400 264.8 407.2 272 416 272zM480 416C480 451.3 451.3 480 416 480C380.7 480 352 451.3 352 416C352 380.7 380.7 352 416 352C451.3 352 480 380.7 480 416zM416 400C407.2 400 400 407.2 400 416C400 424.8 407.2 432 416 432C424.8 432 432 424.8 432 416C432 407.2 424.8 400 416 400z"]},Yg={prefix:"fas",iconName:"bullhorn",icon:[512,512,[128363,128226],"f0a1","M480 179.6C498.6 188.4 512 212.1 512 240C512 267.9 498.6 291.6 480 300.4V448C480 460.9 472.2 472.6 460.2 477.6C448.3 482.5 434.5 479.8 425.4 470.6L381.7 426.1C333.7 378.1 268.6 352 200.7 352H192V480C192 497.7 177.7 512 160 512H96C78.33 512 64 497.7 64 480V352C28.65 352 0 323.3 0 288V192C0 156.7 28.65 128 64 128H200.7C268.6 128 333.7 101 381.7 53.02L425.4 9.373C434.5 .2215 448.3-2.516 460.2 2.437C472.2 7.39 480 19.06 480 32V179.6zM200.7 192H192V288H200.7C280.5 288 357.2 317.8 416 371.3V108.7C357.2 162.2 280.5 192 200.7 192V192z"]},Kg={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64V400zM342.6 278.6C330.1 291.1 309.9 291.1 297.4 278.6L240 221.3L150.6 310.6C138.1 323.1 117.9 323.1 105.4 310.6C92.88 298.1 92.88 277.9 105.4 265.4L217.4 153.4C229.9 140.9 250.1 140.9 262.6 153.4L320 210.7L425.4 105.4C437.9 92.88 458.1 92.88 470.6 105.4C483.1 117.9 483.1 138.1 470.6 150.6L342.6 278.6z"]},Gg={prefix:"fas",iconName:"check",icon:[448,512,[10004,10003],"f00c","M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"]},Jg={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"]},Qg={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"]},_g={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9898,9899,11044,61708,61915,9679],"f111","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"]},$g={prefix:"fas",iconName:"circle-chevron-right",icon:[512,512,["chevron-circle-right"],"f138","M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z"]},ty=$g,ey={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"]},ny=ey,ry={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"]},iy=ry,oy={prefix:"fas",iconName:"circle-stop",icon:[512,512,[62094,"stop-circle"],"f28d","M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM352 328c0 13.2-10.8 24-24 24h-144C170.8 352 160 341.2 160 328v-144C160 170.8 170.8 160 184 160h144C341.2 160 352 170.8 352 184V328z"]},ay=oy,sy={prefix:"fas",iconName:"circle-up",icon:[512,512,[61467,"arrow-alt-circle-up"],"f35b","M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256c141.4 0 256-114.6 256-256S397.4 0 256 0zM382.8 246.1C380.3 252.1 374.5 256 368 256h-64v96c0 17.67-14.33 32-32 32h-32c-17.67 0-32-14.33-32-32V256h-64C137.5 256 131.7 252.1 129.2 246.1C126.7 240.1 128.1 233.3 132.7 228.7l112-112c6.248-6.248 16.38-6.248 22.62 0l112 112C383.9 233.3 385.3 240.1 382.8 246.1z"]},ly=sy,uy={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"]},cy=uy,hy={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"]},dy={prefix:"fas",iconName:"comment",icon:[512,512,[61669,128489],"f075","M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z"]},fy={prefix:"fas",iconName:"diagram-project",icon:[576,512,["project-diagram"],"f542","M0 80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V96H384V80C384 53.49 405.5 32 432 32H528C554.5 32 576 53.49 576 80V176C576 202.5 554.5 224 528 224H432C405.5 224 384 202.5 384 176V160H192V176C192 177.7 191.9 179.4 191.7 180.1L272 288H368C394.5 288 416 309.5 416 336V432C416 458.5 394.5 480 368 480H272C245.5 480 224 458.5 224 432V336C224 334.3 224.1 332.6 224.3 331L144 224H48C21.49 224 0 202.5 0 176V80z"]},py=fy,my={prefix:"fas",iconName:"down-left-and-up-right-to-center",icon:[512,512,["compress-alt"],"f422","M215.1 272h-136c-12.94 0-24.63 7.797-29.56 19.75C45.47 303.7 48.22 317.5 57.37 326.6l30.06 30.06l-78.06 78.07c-12.5 12.5-12.5 32.75-.0012 45.25l22.62 22.62c12.5 12.5 32.76 12.5 45.26 .0013l78.06-78.07l30.06 30.06c6.125 6.125 14.31 9.367 22.63 9.367c4.125 0 8.279-.7891 12.25-2.43c11.97-4.953 19.75-16.62 19.75-29.56V296C239.1 282.7 229.3 272 215.1 272zM296 240h136c12.94 0 24.63-7.797 29.56-19.75c4.969-11.97 2.219-25.72-6.938-34.87l-30.06-30.06l78.06-78.07c12.5-12.5 12.5-32.76 .0002-45.26l-22.62-22.62c-12.5-12.5-32.76-12.5-45.26-.0003l-78.06 78.07l-30.06-30.06c-9.156-9.141-22.87-11.84-34.87-6.937c-11.97 4.953-19.75 16.62-19.75 29.56v135.1C272 229.3 282.7 240 296 240z"]},gy=my,yy={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"]},vy=yy,by={prefix:"fas",iconName:"glasses",icon:[576,512,[],"f530","M574.1 280.4l-45.38-181.8c-5.875-23.63-21.62-44-43-55.75c-21.5-11.75-46.1-14.13-70.25-6.375l-15.25 5.125c-8.375 2.75-12.87 11.88-10 20.25l5 15.13c2.75 8.375 11.88 12.88 20.25 10.13l13.12-4.375c10.88-3.625 23-3.625 33.25 1.75c10.25 5.375 17.5 14.5 20.38 25.75l38.38 153.9c-22.12-6.875-49.75-12.5-81.13-12.5c-34.88 0-73.1 7-114.9 26.75H251.4C210.5 258.6 171.4 251.6 136.5 251.6c-31.38 0-59 5.625-81.12 12.5l38.38-153.9c2.875-11.25 10.12-20.38 20.5-25.75C124.4 79.12 136.5 79.12 147.4 82.74l13.12 4.375c8.375 2.75 17.5-1.75 20.25-10.13l5-15.13C188.6 53.49 184.1 44.37 175.6 41.62l-15.25-5.125c-23.13-7.75-48.75-5.375-70.13 6.375c-21.37 11.75-37.12 32.13-43 55.75L1.875 280.4C.6251 285.4 .0001 290.6 .0001 295.9v70.25C.0001 428.1 51.63 480 115.3 480h37.13c60.25 0 110.4-46 114.9-105.4l2.875-38.63h35.75l2.875 38.63C313.3 433.1 363.4 480 423.6 480h37.13c63.62 0 115.2-51 115.2-113.9V295.9C576 290.6 575.4 285.5 574.1 280.4zM203.4 369.7c-2 26-24.38 46.25-51 46.25H115.2C87 415.1 64 393.6 64 366.1v-37.5c18.12-6.5 43.38-13 72.62-13c23.88 0 47.25 4.375 69.88 13L203.4 369.7zM512 366.1c0 27.5-23 49.88-51.25 49.88h-37.13c-26.62 0-49-20.25-51-46.25l-3.125-41.13c22.62-8.625 46.13-13 70-13c29 0 54.38 6.5 72.5 13V366.1z"]},wy={prefix:"fas",iconName:"grip-vertical",icon:[320,512,[],"f58e","M88 352C110.1 352 128 369.9 128 392V440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392C0 369.9 17.91 352 40 352H88zM280 352C302.1 352 320 369.9 320 392V440C320 462.1 302.1 480 280 480H232C209.9 480 192 462.1 192 440V392C192 369.9 209.9 352 232 352H280zM40 320C17.91 320 0 302.1 0 280V232C0 209.9 17.91 192 40 192H88C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40zM280 192C302.1 192 320 209.9 320 232V280C320 302.1 302.1 320 280 320H232C209.9 320 192 302.1 192 280V232C192 209.9 209.9 192 232 192H280zM40 160C17.91 160 0 142.1 0 120V72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40zM280 32C302.1 32 320 49.91 320 72V120C320 142.1 302.1 160 280 160H232C209.9 160 192 142.1 192 120V72C192 49.91 209.9 32 232 32H280z"]},xy={prefix:"fas",iconName:"hashtag",icon:[448,512,[],"23","M416 127.1h-58.23l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L292.9 127.1H197.8l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L132.9 127.1H64c-17.67 0-32 14.33-32 32C32 177.7 46.33 191.1 64 191.1h58.23l-21.33 128H32c-17.67 0-32 14.33-32 32c0 17.67 14.33 31.1 32 31.1h58.23l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83C108.5 479.9 110.3 480 112 480c15.36 0 28.92-11.09 31.53-26.73l11.54-69.27h95.12l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83C268.5 479.9 270.3 480 272 480c15.36 0 28.92-11.09 31.53-26.73l11.54-69.27H384c17.67 0 32-14.33 32-31.1c0-17.67-14.33-32-32-32h-58.23l21.33-128H416c17.67 0 32-14.32 32-31.1C448 142.3 433.7 127.1 416 127.1zM260.9 319.1H165.8L187.1 191.1h95.12L260.9 319.1z"]},My={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"]},ky={prefix:"fas",iconName:"lock-open",icon:[576,512,[],"f3c1","M352 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H288V144C288 64.47 352.5 0 432 0C511.5 0 576 64.47 576 144V192C576 209.7 561.7 224 544 224C526.3 224 512 209.7 512 192V144C512 99.82 476.2 64 432 64C387.8 64 352 99.82 352 144V192z"]},Sy={prefix:"fas",iconName:"minus",icon:[448,512,[8722,10134,8211,"subtract"],"f068","M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"]},Cy={prefix:"fas",iconName:"palette",icon:[512,512,[127912],"f53f","M512 255.1C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 319.1 441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V255.1zM96 255.1C78.33 255.1 64 270.3 64 287.1C64 305.7 78.33 319.1 96 319.1C113.7 319.1 128 305.7 128 287.1C128 270.3 113.7 255.1 96 255.1zM128 191.1C145.7 191.1 160 177.7 160 159.1C160 142.3 145.7 127.1 128 127.1C110.3 127.1 96 142.3 96 159.1C96 177.7 110.3 191.1 128 191.1zM256 63.1C238.3 63.1 224 78.33 224 95.1C224 113.7 238.3 127.1 256 127.1C273.7 127.1 288 113.7 288 95.1C288 78.33 273.7 63.1 256 63.1zM384 191.1C401.7 191.1 416 177.7 416 159.1C416 142.3 401.7 127.1 384 127.1C366.3 127.1 352 142.3 352 159.1C352 177.7 366.3 191.1 384 191.1z"]},Py={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"]},Ty={prefix:"fas",iconName:"percent",icon:[384,512,[62101,"percentage"],"25","M374.6 73.39c-12.5-12.5-32.75-12.5-45.25 0l-320 320c-12.5 12.5-12.5 32.75 0 45.25C15.63 444.9 23.81 448 32 448s16.38-3.125 22.62-9.375l320-320C387.1 106.1 387.1 85.89 374.6 73.39zM64 192c35.3 0 64-28.72 64-64S99.3 64.01 64 64.01S0 92.73 0 128S28.7 192 64 192zM320 320c-35.3 0-64 28.72-64 64s28.7 64 64 64s64-28.72 64-64S355.3 320 320 320z"]},Ay=Ty,Ny={prefix:"fas",iconName:"plus",icon:[448,512,[10133,"add"],"2b","M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"]},Oy={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"]},jy=Oy,Vy={prefix:"fas",iconName:"right-left",icon:[512,512,["exchange-alt"],"f362","M32 160h319.9l.0791 72c0 9.547 5.652 18.19 14.41 22c8.754 3.812 18.93 2.078 25.93-4.406l112-104c10.24-9.5 10.24-25.69 0-35.19l-112-104c-6.992-6.484-17.17-8.217-25.93-4.408c-8.758 3.816-14.41 12.46-14.41 22L351.9 96H32C14.31 96 0 110.3 0 127.1S14.31 160 32 160zM480 352H160.1L160 279.1c0-9.547-5.652-18.19-14.41-22C136.9 254.2 126.7 255.9 119.7 262.4l-112 104c-10.24 9.5-10.24 25.69 0 35.19l112 104c6.992 6.484 17.17 8.219 25.93 4.406C154.4 506.2 160 497.5 160 488L160.1 416H480c17.69 0 32-14.31 32-32S497.7 352 480 352z"]},Ey=Vy,Iy={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M468.9 32.11c13.87 0 27.18 10.77 27.18 27.04v145.9c0 10.59-8.584 19.17-19.17 19.17h-145.7c-16.28 0-27.06-13.32-27.06-27.2c0-6.634 2.461-13.4 7.96-18.9l45.12-45.14c-28.22-23.14-63.85-36.64-101.3-36.64c-88.09 0-159.8 71.69-159.8 159.8S167.8 415.9 255.9 415.9c73.14 0 89.44-38.31 115.1-38.31c18.48 0 31.97 15.04 31.97 31.96c0 35.04-81.59 70.41-147 70.41c-123.4 0-223.9-100.5-223.9-223.9S132.6 32.44 256 32.44c54.6 0 106.2 20.39 146.4 55.26l47.6-47.63C455.5 34.57 462.3 32.11 468.9 32.11z"]},zy=Iy,Ly={prefix:"fas",iconName:"scale-unbalanced",icon:[640,512,["balance-scale-left"],"f515","M85 250.5c-87 174.2-84.1 165.9-84.1 181.5C.0035 476.1 57.25 512 128 512s128-35.88 128-79.1c0-16.12 1.375-8.752-85.12-181.5C153.3 215.3 102.8 215.1 85 250.5zM55.96 416l71.98-143.1l72.15 143.1H55.96zM554.9 122.5c-17.62-35.25-68.08-35.37-85.83 0c-87 174.2-85.04 165.9-85.04 181.5c0 44.12 57.25 79.1 128 79.1s127.1-35.87 127.1-79.1C639.1 287.9 641.4 295.3 554.9 122.5zM439.1 288l72.04-143.1l72.08 143.1H439.1zM495.1 448h-143.1V153.3c20.83-9.117 36.72-26.93 43.78-48.77l126.3-42.11c16.77-5.594 25.83-23.72 20.23-40.48c-5.578-16.73-23.62-25.86-40.48-20.23l-113.3 37.76c-13.94-23.49-39.29-39.41-68.58-39.41c-44.18 0-79.1 35.82-79.1 80c0 2.961 .5587 5.771 .8712 8.648L117.9 129.7C101.1 135.3 92.05 153.4 97.64 170.1c4.469 13.41 16.95 21.88 30.36 21.88c3.344 0 6.768-.5186 10.13-1.644L273.8 145.1C278.2 148.3 282.1 151.1 288 153.3V496C288 504.8 295.2 512 304 512h223.1c8.838 0 16-7.164 16-15.1C543.1 469.5 522.5 448 495.1 448z"]},Ry=Ly,Hy={prefix:"fas",iconName:"server",icon:[512,512,[],"f233","M480 288H32c-17.62 0-32 14.38-32 32v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32v-128C512 302.4 497.6 288 480 288zM352 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S365.3 408 352 408zM416 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S429.3 408 416 408zM480 32H32C14.38 32 0 46.38 0 64v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V64C512 46.38 497.6 32 480 32zM352 152c-13.25 0-24-10.75-24-24S338.8 104 352 104S376 114.8 376 128S365.3 152 352 152zM416 152c-13.25 0-24-10.75-24-24S402.8 104 416 104S440 114.8 440 128S429.3 152 416 152z"]},By={prefix:"fas",iconName:"square",icon:[448,512,[9723,9724,61590,9632],"f0c8","M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96z"]},Dy={prefix:"fas",iconName:"star",icon:[576,512,[61446,11088],"f005","M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"]},Fy={prefix:"fas",iconName:"thumbtack",icon:[384,512,[128392,128204,"thumb-tack"],"f08d","M32 32C32 14.33 46.33 0 64 0H320C337.7 0 352 14.33 352 32C352 49.67 337.7 64 320 64H290.5L301.9 212.2C338.6 232.1 367.5 265.4 381.4 306.9L382.4 309.9C385.6 319.6 383.1 330.4 377.1 338.7C371.9 347.1 362.3 352 352 352H32C21.71 352 12.05 347.1 6.04 338.7C.0259 330.4-1.611 319.6 1.642 309.9L2.644 306.9C16.47 265.4 45.42 232.1 82.14 212.2L93.54 64H64C46.33 64 32 49.67 32 32zM224 384V480C224 497.7 209.7 512 192 512C174.3 512 160 497.7 160 480V384H224z"]},Uy={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"]},Wy=Uy,qy={prefix:"fas",iconName:"unlock",icon:[448,512,[128275],"f09c","M144 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80V144C80 64.47 144.5 0 224 0C281.5 0 331 33.69 354.1 82.27C361.7 98.23 354.9 117.3 338.1 124.9C322.1 132.5 303.9 125.7 296.3 109.7C283.4 82.63 255.9 64 224 64C179.8 64 144 99.82 144 144L144 192z"]},Xy={prefix:"fas",iconName:"up-right-and-down-left-from-center",icon:[512,512,["expand-alt"],"f424","M208 281.4c-12.5-12.5-32.76-12.5-45.26-.002l-78.06 78.07l-30.06-30.06c-6.125-6.125-14.31-9.367-22.63-9.367c-4.125 0-8.279 .7891-12.25 2.43c-11.97 4.953-19.75 16.62-19.75 29.56v135.1C.0013 501.3 10.75 512 24 512h136c12.94 0 24.63-7.797 29.56-19.75c4.969-11.97 2.219-25.72-6.938-34.87l-30.06-30.06l78.06-78.07c12.5-12.49 12.5-32.75 .002-45.25L208 281.4zM487.1 0h-136c-12.94 0-24.63 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.87l30.06 30.06l-78.06 78.07c-12.5 12.5-12.5 32.76 0 45.26l22.62 22.62c12.5 12.5 32.76 12.5 45.26 0l78.06-78.07l30.06 30.06c9.156 9.141 22.87 11.84 34.87 6.937C504.2 184.6 512 172.9 512 159.1V23.1C512 10.74 501.3 0 487.1 0z"]},Zy=Xy,Yy={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z"]},Ky=Yy,Gy={prefix:"fas",iconName:"user-group",icon:[640,512,[128101,"user-friends"],"f500","M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM479.1 320h-73.85C451.2 357.7 480 414.1 480 477.3C480 490.1 476.2 501.9 470 512h138C625.7 512 640 497.6 640 479.1C640 391.6 568.4 320 479.1 320zM432 256C493.9 256 544 205.9 544 144S493.9 32 432 32c-25.11 0-48.04 8.555-66.72 22.51C376.8 76.63 384 101.4 384 128c0 35.52-11.93 68.14-31.59 94.71C372.7 243.2 400.8 256 432 256z"]},Jy=Gy,Qy={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"]},_y={prefix:"fas",iconName:"user-slash",icon:[640,512,[],"f506","M95.1 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7c5.625 0 10.73-1.65 15.42-4.029L264.9 304.3C171.3 306.7 95.1 383.1 95.1 477.3zM630.8 469.1l-277.1-217.9c54.69-14.56 95.18-63.95 95.18-123.2C447.1 57.31 390.7 0 319.1 0C250.2 0 193.7 55.93 192.3 125.4l-153.4-120.3C34.41 1.672 29.19 0 24.03 0C16.91 0 9.845 3.156 5.127 9.187c-8.187 10.44-6.375 25.53 4.062 33.7L601.2 506.9c10.5 8.203 25.56 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1z"]},$y={prefix:"fas",iconName:"user-tag",icon:[640,512,[],"f507","M351.8 367.3v-44.1C328.5 310.7 302.4 304 274.7 304H173.3c-95.73 0-173.3 77.65-173.3 173.4C.0005 496.5 15.52 512 34.66 512h378.7c11.86 0 21.82-6.337 28.07-15.43l-61.65-61.57C361.7 416.9 351.8 392.9 351.8 367.3zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM630.6 364.8L540.3 274.8C528.3 262.8 512 256 495 256h-79.23c-17.75 0-31.99 14.25-31.99 32l.0147 79.2c0 17 6.647 33.15 18.65 45.15l90.31 90.27c12.5 12.5 32.74 12.5 45.24 0l92.49-92.5C643.1 397.6 643.1 377.3 630.6 364.8zM447.8 343.9c-13.25 0-24-10.62-24-24c0-13.25 10.75-24 24-24c13.38 0 24 10.75 24 24S461.1 343.9 447.8 343.9z"]},tv={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"]},ev={prefix:"fas",iconName:"wallet",icon:[512,512,[],"f555","M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z"]},nv={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"]},rv=nv,iv={prefix:"far",iconName:"arrow-alt-circle-up",icon:[512,512,[],"f35b","M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"]},ov={prefix:"far",iconName:"check-circle",icon:[512,512,[],"f058","M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"]},av={prefix:"far",iconName:"circle",icon:[512,512,[],"f111","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"]},sv={prefix:"far",iconName:"copy",icon:[448,512,[],"f0c5","M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"]},lv={prefix:"far",iconName:"flag",icon:[512,512,[],"f024","M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"]},uv={prefix:"far",iconName:"square",icon:[448,512,[],"f0c8","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"]},cv={prefix:"far",iconName:"times-circle",icon:[512,512,[],"f057","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"]};const hv=ln.div`
  background: ${ec};
  box-sizing: border-box;
  border-radius: 1.25rem;
  width: ${250}px;
  padding: 1rem;
  display: flex;
  flex-flow: column wrap;
  transition: opacity 0.1s;
  box-shadow: 3px 3px 20px ${kc};

  h4 {
    color: ${_u};
    margin: 0 0 0.5rem 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`,dv=ln.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-bottom: 1rem;

  button {
    position: relative;
    color: ${_u};
    transition: color 0.2s;
    margin: 0 0.25rem;
    opacity: 0.75;
    border: 2px solid ${yc};
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
      fill: ${_u};
    }
    &:hover {
      opacity: 1;
    }
    &:disabled {
      opacity: 0.5;
      cursor: default;
      background: ${yc};
    }
  }
`,fv=()=>{const{mode:t,card:e,toggleTheme:n,toggleCard:r}=yf(),i=Qd(),{position:o}=i,a=(0,k.useRef)(null);(0,k.useEffect)((()=>{1===i.open&&i.checkPalettePosition(a)}),[i.open]),(0,k.useEffect)((()=>(window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)})),[]);const s=()=>{i.closePalette()};return Zd(a,(()=>{i.closePalette()}),["ignore-open-palette-button"]),(0,Wd.jsx)(Wd.Fragment,{children:1===i.open&&(0,Wd.jsxs)(hv,{ref:a,style:{position:"absolute",left:`${o[0]}px`,top:`${o[1]}px`,zIndex:99,opacity:1===i.show?1:0},children:[(0,Wd.jsx)("h4",{children:"Theme"}),(0,Wd.jsxs)(dv,{children:[(0,Wd.jsx)("button",{type:"button",onClick:()=>n(),disabled:"light"===t,children:(0,Wd.jsx)(Tf,{width:"1.65rem",height:"1.65rem"})}),(0,Wd.jsx)("button",{type:"button",onClick:()=>n(),disabled:"dark"===t,children:(0,Wd.jsx)(Mf,{width:"1.25rem",height:"1.25rem"})})]}),(0,Wd.jsx)("h4",{children:"Card Style"}),(0,Wd.jsxs)(dv,{children:[(0,Wd.jsx)("button",{type:"button",onClick:()=>r("flat"),disabled:"flat"===e,children:"\xa0"}),(0,Wd.jsx)("button",{type:"button",onClick:()=>r("border"),disabled:"border"===e,children:(0,Wd.jsx)(Fg,{icon:uv})}),(0,Wd.jsx)("button",{type:"button",onClick:()=>r("shadow"),disabled:"shadow"===e,children:(0,Wd.jsx)(Fg,{icon:By})})]})]})})};var pv=__webpack_require__(2426),mv=__webpack_require__.n(pv);const gv=ln.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`,yv=ln.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 1rem;
`,vv=ln(Fu.div)`
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
    background: ${nc};
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
        background: ${gc};
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
          color: ${$u};
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
          color: ${_u};
          font-size: 0.88rem;
          margin-left: 0.3rem;
          margin-top: 0.2rem;
        }
      }
    }
  }
`,bv=t=>{let{children:e}=t;return(0,Wd.jsx)(gv,{className:"page-padding",children:(0,Wd.jsx)(yv,{children:e})})},wv=ln.div`
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
`,xv=ln.div`
  border: ${Cc} ${yc};
  box-shadow: ${Pc} ${kc};
  box-sizing: border-box;
  padding: ${t=>t.noPadding?"0rem":t.transparent?"0rem 0rem":"1.2rem"};
  border-radius: 1rem;
  background: ${t=>t.transparent?"none":nc};
  display: flex;
  flex-flow: column nowrap;
  align-content: flex-start;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  margin-top: ${t=>t.transparent?"0rem":"1rem"};
  position: relative;

  @media (max-width: ${kt}px) {
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
`,Mv=ln.div`
  border: ${Cc} ${yc};
  box-shadow: ${Pc} ${kc};
  box-sizing: border-box;
  border-radius: 1rem;
  background: ${t=>t.transparent?"none":nc};
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
    background: ${Ac};
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
      color: ${_u};
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
`,Ftt=()=>{const{network:t}=IJ(),{mode:e}=yf(),{services:n}=Rtt();return(0,Wd.jsxs)(Dtt,{color:n.includes("subscan")?Ku[`${t.name}-${e}`]:Xu.text.secondary[e],opacity:n.includes("subscan")?1:.5,children:[(0,Wd.jsx)(Fg,{icon:py,transform:"shrink-2",style:{marginRight:"0.3rem"}}),"Subscan"]})},Utt=t=>{var e;const{title:n}=t,r=null!==(e=t.tabs)&&void 0!==e?e:[],[i,o]=(0,k.useState)(!1),a=(0,k.useRef)();return(0,k.useEffect)((()=>{const t=a.current,e=new IntersectionObserver((t=>{let[e]=t;o(e.intersectionRatio<1)}),{threshold:[1],rootMargin:"-1px 0px 0px 0px"});return e.observe(t),()=>{e.unobserve(t)}}),[i]),(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Lc,{}),(0,Wd.jsxs)(zc,{ref:a,sticky:i,children:[(0,Wd.jsx)("h1",{className:"page-padding",children:n}),r.length>0&&(0,Wd.jsx)("section",{className:"tabs page-padding",children:(0,Wd.jsx)("div",{className:"inner",children:r.map(((t,e)=>(0,Wd.jsx)("button",{className:t.active?"active":"",type:"button",onClick:()=>t.onClick(),children:t.title},`page_tab_${e}`)))})})]})]})};var Wtt=__webpack_require__(3881),qtt=__webpack_require__.n(Wtt);const Xtt=t=>{const e=null===t||void 0===t?void 0:t.offsetWidth;return{height:null===t||void 0===t?void 0:t.offsetHeight,width:e}},Ztt=t=>{const[e,n]=k.useState(Xtt(t));return k.useEffect((()=>{const e=qtt()((()=>{n(Xtt(t))}),100,{trailing:!0,leading:!1});return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}})),e},Ytt=(t,e)=>({width:void 0===t.width?"100%":`${t.width}px`,height:void 0===t.height?e:`${t.height}px`,minHeight:e}),Ktt=(t,e,n)=>{if(!t.length)return t;const r=[];let i=367,o=3e3,a={amount:new($d())(0),event_id:""};const s=mv().unix(t[0].block_timestamp);let l=mv()().startOf("day").diff(s,"days");if(l>0){l=l>e?e:l;let t=mv()().add(1,"days").endOf("day");for(let e=1;e<=l;e++)t=t.subtract(1,"days"),r.push({amount:0,event_id:"Reward",block_timestamp:t.unix()})}if(t.length>0){let s=0,l=0;for(const u of t){if(r.length>=e)break;s++;const c=mv().unix(u.block_timestamp),h=c.dayOfYear(),d=c.year();if(h<i||d<o){const t=mv()(`${i}/${o}`,"DDD/YYYY").unix(),e=mv()(`${h}/${d}`,"DDD/YYYY").unix(),s=mv().unix(t).diff(mv().unix(e),"days");0!==l?l+=s:l++;const c=mv()(`${i}/${o}`,"DDD/YYYY").endOf("day").unix();if(l>1&&r.push({amount:rf(a.amount,n),event_id:a.amount.lt(new($d())(0))?"Slash":"Reward",block_timestamp:c}),0!==l){let e=mv().unix(t);if(s>1)for(let t=1;t<s;t++)e=e.subtract(1,"days"),r.push({amount:0,event_id:"Reward",block_timestamp:e.unix()})}const f=new($d())(u.amount);a={amount:f,event_id:f.lt(new($d())(0))?"Slash":"Reward"},h<i&&(i=h),d<o&&(o=d)}else a.amount=a.amount.add(new($d())(u.amount));s===t.length&&r.push({amount:rf(a.amount,n),event_id:a.amount.lt(new($d())(0))?"Slash":"Reward",block_timestamp:u.block_timestamp})}}return r},Gtt=(t,e)=>{if(t.length<e){const n=e-t.length;let r;r=t.length?mv().unix(t[t.length-1].block_timestamp):mv()().endOf("day");for(let e=0;e<n;e++)r=r.subtract(1,"days"),t.push({amount:0,event_id:"Reward",block_timestamp:r.unix()})}return t};var Jtt=__webpack_require__(8029),Qtt=__webpack_require__(7550);"function"===typeof Kv&&Kv.asIntN;const _tt="object"===typeof process;function $tt(t){return"undefined"===typeof t}const tet=[{info:"on",text:"Allow camera access",value:"on"},{info:"off",text:"Do not allow camera access",value:"off"}],eet=[{info:"session",text:"Once per session",value:"session"},{info:"tx",text:"On each transaction",value:"tx"}],net=[{info:"local",text:"Local Node (Own, 127.0.0.1:9944)",value:"ws://127.0.0.1:9944/"}],ret=net[0],iet=[{info:"none",text:"Do not attach Ledger devices",value:"none"},{info:"webusb",text:"Attach Ledger via WebUSB (Chrome, recommended)",value:"webusb"},{info:"hid",text:"Attach Ledger via WebHID (Chrome, experimental)",value:"hid"}],oet="undefined"!==typeof window&&window.location.host.includes("polkadot"),aet=!oet&&"undefined"!==typeof window&&window.location.host.includes("ui-light")?"light":"full",set=[{info:"full",text:"Fully featured",value:"full"},{info:"light",text:"Basic features only",value:"light"}],uet=oet?"polkadot":"substrate",cet=[{info:"polkadot",text:"Polkadot",value:"polkadot"},{info:"substrate",text:"Substrate",value:"substrate"}],het=oet?"polkadot":"substrate",det=[{info:"default",text:"Default for the connected node",value:"default"},{info:"polkadot",text:"Polkadot",value:"polkadot"},{info:"substrate",text:"Substrate",value:"substrate"},{info:"beachball",text:"Beachball",value:"beachball"}],fet=Dj.map((t=>{let{displayName:e,network:n,prefix:r}=t;return{info:n,text:e,value:r}})),pet=[{info:"default",text:"Default for the connected node",value:-1},...fet],met=[{info:"sr25519",text:"Schnorrkel (sr25519, recommended)",value:"sr25519"},{info:"ed25519",text:"Edwards (ed25519, alternative)",value:"ed25519"},{info:"ecdsa",text:"ECDSA (Non BTC/ETH compatible)",value:"ecdsa"}],get=[{info:"ethereum",text:"ECDSA (ETH compatible)",value:"ethereum"}],yet=[...met,{info:"ed25519-ledger",text:"Ledger (ed25519, BIP32 derivation)",value:"ed25519-ledger"}];function vet(t,e,n){const r=e||n;return t.some((t=>{let{value:e}=t;return e===r}))?r:n}var bet=new WeakMap,wet=new WeakMap,xet=new WeakMap,Met=new WeakMap,ket=new WeakMap,Cet=new WeakMap,Pet=new WeakMap,Tet=new WeakMap,Aet=new WeakMap,Net=new WeakMap,Oet=new WeakMap,jet=new WeakMap;const Vet=new class{constructor(){kv(this,bet,{writable:!0,value:void 0}),kv(this,wet,{writable:!0,value:void 0}),kv(this,xet,{writable:!0,value:void 0}),kv(this,Met,{writable:!0,value:void 0}),kv(this,ket,{writable:!0,value:void 0}),kv(this,Cet,{writable:!0,value:void 0}),kv(this,Pet,{writable:!0,value:void 0}),kv(this,Tet,{writable:!0,value:void 0}),kv(this,Aet,{writable:!0,value:void 0}),kv(this,Net,{writable:!0,value:void 0}),kv(this,Oet,{writable:!0,value:void 0}),kv(this,jet,{writable:!0,value:void 0});const t=Qtt.get("settings")||{};Pv(this,bet,new XZ),Pv(this,xet,"string"===typeof t.apiUrl&&t.apiUrl||_tt&&{NODE_ENV:"production",PUBLIC_URL:"/dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&{NODE_ENV:"production",PUBLIC_URL:"/dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.WS_URL||ret.value),Pv(this,wet,{param:Cv(this,xet),type:"json-rpc"}),Pv(this,Met,vet(tet,t.camera,"off")),Pv(this,Pet,vet(iet,t.ledgerConn,"none")),Pv(this,ket,t.i18nLang||"default"),Pv(this,Cet,t.icon||"default"),Pv(this,Tet,t.locking||"session"),Pv(this,Aet,$tt(t.prefix)?-1:t.prefix),Pv(this,Net,t.uiMode||aet),Pv(this,Oet,t.uiTheme||uet),Pv(this,jet,t.notification||"popup")}get camera(){return Cv(this,Met)}get apiType(){return Cv(this,wet)}get apiUrl(){return Cv(this,xet)}get i18nLang(){return Cv(this,ket)}get icon(){return Cv(this,Cet)}get notification(){return Cv(this,jet)}get ledgerConn(){return Cv(this,Pet)}get locking(){return Cv(this,Tet)}get prefix(){return Cv(this,Aet)}get uiMode(){return Cv(this,Net)}get uiTheme(){return Cv(this,Oet)}get availableCamera(){return tet}get availableCryptos(){return met}get availableCryptosEth(){return get}get availableCryptosLedger(){return yet}get availableIcons(){return det}get availableLedgerConn(){return iet}get availableLocking(){return eet}get availableNodes(){return net}get availablePrefixes(){return pet}get availableUIModes(){return set}get availableUIThemes(){return cet}get(){return{apiType:Cv(this,wet),apiUrl:Cv(this,xet),camera:Cv(this,Met),i18nLang:Cv(this,ket),icon:Cv(this,Cet),ledgerConn:Cv(this,Pet),locking:Cv(this,Tet),notification:Cv(this,jet),prefix:Cv(this,Aet),uiMode:Cv(this,Net),uiTheme:Cv(this,Oet)}}set(t){Pv(this,wet,t.apiType||Cv(this,wet)),Pv(this,xet,t.apiUrl||Cv(this,xet)),Pv(this,Met,t.camera||Cv(this,Met)),Pv(this,Pet,t.ledgerConn||Cv(this,Pet)),Pv(this,ket,t.i18nLang||Cv(this,ket)),Pv(this,Cet,t.icon||Cv(this,Cet)),Pv(this,Tet,t.locking||Cv(this,Tet)),Pv(this,jet,t.notification||Cv(this,jet)),Pv(this,Aet,$tt(t.prefix)?Cv(this,Aet):t.prefix),Pv(this,Net,t.uiMode||Cv(this,Net)),Pv(this,Oet,t.uiTheme||Cv(this,Oet));const e=this.get();Qtt.set("settings",e),Cv(this,bet).emit("change",e)}on(t,e){Cv(this,bet).on(t,e)}},Eet=["#ffe119","#4363d8","#f58231","#fabebe","#e6beff","#800000","#000075","#a9a9a9","#ffffff","#000000"];function Iet(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function zet(t,e,n){const r=Iet("circle");return r.setAttributeNS("","cx",`${e}`),r.setAttributeNS("","cy",`${n}`),r.setAttributeNS("","r",`${t}`),r}function Let(t,e,n,r){const i=n/2,o=360*t(),a=(5-r)/5*(n/2)+n/8*t(),s=n/4*(t()+(r+1)/5),l=zet(a,s*Math.sin(o)+i,s*Math.cos(o)+i);return l.setAttributeNS("","fill",e),l}function Ret(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"svg",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const i=Iet(e);return i.setAttributeNS("","x",`${n}`),i.setAttributeNS("","y",`${r}`),i.setAttributeNS("","width",`${t}`),i.setAttributeNS("","height",`${t}`),i}var Het=__webpack_require__(3861);function Bet(t){const e=30*t()-15,n=Eet.map((t=>Het(t).rotate(e)));return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;const r=Math.floor(n.length*t());return n.splice(r,1)[0].alpha(e).string()}}function Det(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"white",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i=document.createElement("div"),o=Object.assign({background:e,borderRadius:t/2+"px",display:"inline-block",height:`${t}px`,margin:"0px",overflow:"hidden",padding:"0px",width:`${t}px`},r);return i.className=n,i.style.background=e,Object.keys(o).forEach((t=>{i.style[t]=o[t]})),i}function Fet(t){return t instanceof Uint8Array}const Uet=Yv("TextEncoder",class{encode(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}}),Wet=new Uet;function qet(t){return t?Wet.encode(t.toString()):new Uint8Array}function Xet(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Uint8Array(32);const e=Fet(t)?t:qet(t);let n=e[Math.floor(e.length/2)]%e.length-1;const r=()=>(n+=1,n===e.length&&(n=0),e[n]);return()=>(256*r()+r())/65536}function Zet(t){let{address:e,className:n="",size:r,style:i}=t;const o=(0,k.useCallback)((t=>{t&&t.appendChild(function(t,e){let{size:n=256}=e,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3?arguments[3]:void 0;const o=Xet(t),a=Bet(o),s=Det(n,"white",r,i),l=Det(n,a()),u=Ret(n);s.appendChild(l),l.appendChild(u);for(let c=0;c<5;c++){const t=Let(o,a(),n,c);u.appendChild(t)}return s}(e,{isAlternative:!1,size:r}))}),[e,r]);return(0,Wd.jsx)("div",{className:n,ref:o,style:i})}const Yet=k.memo(Zet);function Ket(t){let{className:e="",size:n,style:r}=t;return(0,Wd.jsx)("svg",{className:e,height:n,style:r,viewBox:"0 0 64 64",width:n})}const Get=k.memo(Ket);var Jet=__webpack_require__(7883);const Qet=k.memo(ln((function(t){let{address:e,className:n="",style:r}=t;const i=(0,k.useMemo)((()=>Jet(e)),[e]);return(0,Wd.jsx)("img",{className:n,src:i,style:r})})).withConfig({displayName:"Ethereum",componentId:"sc-osop9v-0"})((t=>{let{size:e}=t;return`\n  display: block;\n  height: ${e}px;\n  width: ${e}px;\n`})));function _et(t,e,n){return parseInt(t.substr(e,n),16)}function $et(t){return(t|=0)<0?"00":t<16?"0"+t.toString(16):t<256?t.toString(16):"ff"}function tnt(t,e,n){return $et(255*((n=n<0?n+6:n>6?n-6:n)<1?t+(e-t)*n:n<3?e:n<4?t+(e-t)*(4-n):t))}function ent(t){if(/^#[0-9a-f]{3,8}$/i.test(t)){let e;const n=t.length;if(n<6){const n=t[1],r=t[2],i=t[3],o=t[4]||"";e="#"+n+n+r+r+i+i+o+o}return(7==n||n>8)&&(e=t),e}}function nnt(t,e,n){const r=[.55,.5,.5,.46,.6,.55,.55][6*t+.5|0];return function(t,e,n){let r;if(0==e){const t=$et(255*n);r=t+t+t}else{const i=n<=.5?n*(e+1):n+e-n*e,o=2*n-i;r=tnt(o,i,6*t+2)+tnt(o,i,6*t)+tnt(o,i,6*t-2)}return"#"+r}(t,e,n=n<.5?n*r*2:r+(n-.5)*(1-r)*2)}const rnt="undefined"!==typeof window?window:"undefined"!==typeof self?self:"undefined"!==typeof global?global:{},int="jdenticon_config",ont="config";var ant={};class snt{constructor(t,e){this.x=t,this.y=e}}class lnt{constructor(t,e,n,r){this.q=t,this.t=e,this.H=n,this.Y=r}I(t,e,n,r){const i=this.q+this.H,o=this.t+this.H,a=this.Y;return 1===a?new snt(i-e-(r||0),this.t+t):2===a?new snt(i-t-(n||0),o-e-(r||0)):3===a?new snt(this.q+e,o-t-(n||0)):new snt(this.q+t,this.t+e)}}const unt=new lnt(0,0,0,0);class cnt{constructor(t){this.J=t,this.u=unt}g(t,e){const n=e?-2:2,r=[];for(let i=e?t.length-2:0;i<t.length&&i>=0;i+=n)r.push(this.u.I(t[i],t[i+1]));this.J.g(r)}h(t,e,n,r){const i=this.u.I(t,e,n,n);this.J.h(i,n,r)}i(t,e,n,r,i){this.g([t,e,t+n,e,t+n,e+r,t,e+r],i)}j(t,e,n,r,i,o){const a=[t+n,e,t+n,e+r,t,e+r,t,e];a.splice((i||0)%4*2,2),this.g(a,o)}K(t,e,n,r,i){this.g([t+n/2,e,t+n,e+r/2,t+n/2,e+r,t,e+r/2],i)}}function hnt(t,e,n,r){let i,o,a,s,l,u;(t%=14)?1==t?(a=0|.5*n,s=0|.8*n,e.j(n-a,0,a,s,2)):2==t?(a=0|n/3,e.i(a,a,n-a,n-a)):3==t?(l=.1*n,u=n<6?1:n<8?2:0|.25*n,l=l>1?0|l:l>.5?1:l,e.i(u,u,n-l-u,n-l-u)):4==t?(o=0|.15*n,a=0|.5*n,e.h(n-a-o,n-a-o,a)):5==t?(l=.1*n,u=4*l,u>3&&(u|=0),e.i(0,0,n,n),e.g([u,u,n-l,u,u+(n-u-l)/2,n-l],!0)):6==t?e.g([0,0,n,0,n,.7*n,.4*n,.4*n,.7*n,n,0,n]):7==t?e.j(n/2,n/2,n/2,n/2,3):8==t?(e.i(0,0,n,n/2),e.i(0,n/2,n/2,n/2),e.j(n/2,n/2,n/2,n/2,1)):9==t?(l=.14*n,u=n<4?1:n<6?2:0|.35*n,l=n<8?l:0|l,e.i(0,0,n,n),e.i(u,u,n-u-l,n-u-l,!0)):10==t?(l=.12*n,u=3*l,e.i(0,0,n,n),e.h(u,u,n-l-u,!0)):11==t?e.j(n/2,n/2,n/2,n/2,3):12==t?(o=.25*n,e.i(0,0,n,n),e.K(o,o,n-o,n-o,!0)):!r&&(o=.4*n,a=1.2*n,e.h(o,o,a)):(i=.42*n,e.g([0,0,n,0,n,n-2*i,n-i,n,0,n]))}function dnt(t,e,n){let r;(t%=4)?1==t?e.j(0,n/2,n,n/2,0):2==t?e.K(0,0,n,n):(r=n/6,e.h(r,r,n-2*r)):e.j(0,0,n,n,0)}function fnt(t,e,n){const r=function(t,e){const n="object"==typeof t&&t||ant[ont]||rnt[int]||{},r=n.lightness||{},i=n.saturation||{},o="color"in i?i.color:i,a=i.grayscale,s=n.backColor,l=n.padding;function u(t,e){let n=r[t];return n&&n.length>1||(n=e),function(t){return(t=n[0]+t*(n[1]-n[0]))<0?0:t>1?1:t}}return{W:function(t){const e=n.hues;let r;return e&&e.length>0&&(r=e[0|.999*t*e.length]),"number"==typeof r?(r/360%1+1)%1:t},o:"number"==typeof o?o:.5,D:"number"==typeof a?a:0,p:u("color",[.4,.8]),F:u("grayscale",[.3,.9]),G:ent(s),X:"number"==typeof t?t:"number"==typeof l?l:e}}(n,.08);r.G&&t.m(r.G);let i=t.k;const o=.5+i*r.X|0;i-=2*o;const a=new cnt(t),s=0|i/4,l=0|o+i/2-2*s,u=0|o+i/2-2*s;function c(n,r,i,o,c){const f=_et(e,i,1);let p=o?_et(e,o,1):0;t.L(h[d[n]]);for(let t=0;t<c.length;t++)a.u=new lnt(l+c[t][0]*s,u+c[t][1]*s,s,p++%4),r(f,a,s,t);t.M()}const h=function(t,e){return[nnt(t=e.W(t),e.D,e.F(0)),nnt(t,e.o,e.p(.5)),nnt(t,e.D,e.F(1)),nnt(t,e.o,e.p(1)),nnt(t,e.o,e.p(0))]}(_et(e,-7)/268435455,r),d=[];let f;function p(t){if(t.indexOf(f)>=0)for(let e=0;e<t.length;e++)if(d.indexOf(t[e])>=0)return!0}for(let m=0;m<3;m++)f=_et(e,8+m,1)%h.length,(p([0,4])||p([2,3]))&&(f=1),d.push(f);c(0,dnt,2,3,[[1,0],[2,0],[2,3],[1,3],[0,1],[3,1],[3,2],[0,2]]),c(1,dnt,4,5,[[0,0],[3,0],[3,3],[0,3]]),c(2,hnt,1,null,[[1,1],[2,1],[2,2],[1,2]]),t.finish()}function pnt(t){return/^[0-9a-f]{11,}$/i.test(t)&&t}function mnt(t){return function(t){var e,n=0,r=0,i=encodeURI(t)+"%80",o=[],a=[],s=1732584193,l=4023233417,u=~s,c=~l,h=3285377520,d=[s,l,u,c,h],f=0,p="";function m(t,e){return t<<e|t>>>32-e}for(;n<i.length;r++)o[r>>2]=o[r>>2]|("%"==i[n]?parseInt(i.substring(n+1,n+=3),16):i.charCodeAt(n++))<<8*(3-(3&r));for(o[(e=16*(1+(r+7>>6)))-1]=8*r-8;f<e;f+=16){for(n=0;n<80;n++)r=m(s,5)+h+(n<20?1518500249+(l&u^~l&c):n<40?1859775393+(l^u^c):n<60?2400959708+(l&u^l&c^u&c):3395469782+(l^u^c))+(a[n]=n<16?0|o[f+n]:m(a[n-3]^a[n-8]^a[n-14]^a[n-16],1)),h=c,c=u,u=m(l,30),l=s,s=r;d[0]=s=d[0]+s|0,d[1]=l=d[1]+l|0,d[2]=u=d[2]+u|0,d[3]=c=d[3]+c|0,d[4]=h=d[4]+h|0}for(n=0;n<40;n++)p+=(d[n>>3]>>>4*(7-(7&n))&15).toString(16);return p}(null==t?"":""+t)}function gnt(t){return(10*t+.5|0)/10}class ynt{constructor(){this.v=""}g(t){let e="";for(let n=0;n<t.length;n++)e+=(n?"L":"M")+gnt(t[n].x)+" "+gnt(t[n].y);this.v+=e+"Z"}h(t,e,n){const r=n?0:1,i=gnt(e/2),o=gnt(e),a="a"+i+","+i+" 0 1,"+r+" ";this.v+="M"+gnt(t.x)+" "+gnt(t.y+e/2)+a+o+",0"+a+-o+",0"}}class vnt{constructor(t){this.A,this.B={},this.N=t,this.k=t.k}m(t){const e=/^(#......)(..)?/.exec(t),n=e[2]?_et(e[2],0)/255:1;this.N.m(e[1],n)}L(t){this.A=this.B[t]||(this.B[t]=new ynt)}M(){}g(t){this.A.g(t)}h(t,e,n){this.A.h(t,e,n)}finish(){const t=this.B;for(let e in t)t.hasOwnProperty(e)&&this.N.O(e,t[e].v)}}const bnt="http://www.w3.org/2000/svg";class wnt{constructor(t){this.k=t,this.C='<svg xmlns="'+bnt+'" width="'+t+'" height="'+t+'" viewBox="0 0 '+t+" "+t+'">'}m(t,e){e&&(this.C+='<rect width="100%" height="100%" fill="'+t+'" opacity="'+e.toFixed(2)+'"/>')}O(t,e){this.C+='<path fill="'+t+'" d="'+e+'"/>'}toString(){return this.C+"</svg>"}}function xnt(t,e,n){const r=new wnt(e);return fnt(new vnt(r),pnt(t)||mnt(t),n),r.toString()}"undefined"!==typeof document&&document.querySelectorAll.bind(document);function Mnt(t){let{className:e="",publicKey:n,size:r,style:i}=t;return(0,Wd.jsx)("div",{className:e,dangerouslySetInnerHTML:{__html:xnt(n.substr(2),r)},style:i})}const knt=k.memo(Mnt),Snt=t=>YT(t,512),Cnt=32,Pnt=Snt(new Uint8Array(32)),Tnt={target:{colors:[0,28,0,0,28,0,0,28,0,0,28,0,0,28,0,0,28,0,1],freq:1},cube:{colors:[0,1,3,2,4,3,0,1,3,2,4,3,0,1,3,2,4,3,5],freq:20},quazar:{colors:[1,2,3,1,2,4,5,5,4,1,2,3,1,2,4,5,5,4,0],freq:16},flower:{colors:[0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,3],freq:32},cyclic:{colors:[0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,6],freq:32},vmirror:{colors:[0,1,2,3,4,5,3,4,2,0,1,6,7,8,9,7,8,6,10],freq:128},hmirror:{colors:[0,1,2,3,4,5,6,7,8,9,10,8,6,7,5,3,4,2,11],freq:128}},Ant={cx:Cnt,cy:Cnt,fill:"#eee",r:Cnt};function Nnt(t){const{r:e,r3o4:n,ro2:r,ro4:i,rroot3o2:o,rroot3o4:a}=function(t){const e=t?20:24;return{r:e,r3o4:3*e/4,ro2:e/2,ro4:e/4,rroot3o2:e*Math.sqrt(3)/2,rroot3o4:e*Math.sqrt(3)/4}}(t);return[[Cnt,Cnt-e],[Cnt,Cnt-r],[Cnt-a,Cnt-n],[Cnt-o,Cnt-r],[Cnt-a,Cnt-i],[Cnt-o,Cnt],[Cnt-o,Cnt+r],[Cnt-a,Cnt+i],[Cnt-a,Cnt+n],[Cnt,Cnt+e],[Cnt,Cnt+r],[Cnt+a,Cnt+n],[Cnt+o,Cnt+r],[Cnt+a,Cnt+i],[Cnt+o,Cnt],[Cnt+o,Cnt-r],[Cnt+a,Cnt-i],[Cnt+a,Cnt-n],[Cnt,Cnt]]}function Ont(t){const e=Object.values(Tnt).map((t=>t.freq)).reduce(((t,e)=>t+e)),n=function(t){return Snt(Wj(t)).map(((t,e)=>(t+256-Pnt[e])%256))}(t),r=Math.floor((n[30]+256*n[31])%e),i=n[28]%6*3,o=Math.floor(70*n[29]/256+26)%80+30,a=function(t){let e=0;const n=Object.values(Tnt).find((n=>(e+=n.freq,t<e)));if(!n)throw new Error("Unable to find schema");return n}(r),s=Array.from(n).map(((t,e)=>{const n=(t+e%28*58)%256;if(0===n)return"#444";if(255===n)return"transparent";const r=Math.floor(n%64*360/64),i=[53,15,35,75][Math.floor(n/64)];return`hsl(${r}, ${o}%, ${i}%)`}));return a.colors.map(((t,e)=>s[a.colors[e<18?(e+i)%18:18]]))}function jnt(t,e){let{isAlternative:n}=e;const r=Ont(t);return[Ant].concat(Nnt(n).map(((t,e)=>{let[n,i]=t;return{cx:n,cy:i,fill:r[e],r:5}})))}function Vnt(t,e){let{cx:n,cy:r,fill:i,r:o}=t;return(0,Wd.jsx)("circle",{cx:n,cy:r,fill:i,r:o},e)}function Ent(t){let{address:e,className:n="",isAlternative:r=!1,size:i,style:o}=t;return(0,Wd.jsx)("svg",{className:n,height:i,id:e,name:e,style:o,viewBox:"0 0 64 64",width:i,children:jnt(e,{isAlternative:r}).map(Vnt)})}const Int=Yet,znt=64,Lnt={beachball:Yet,empty:Get,ethereum:Qet,jdenticon:knt,polkadot:k.memo(Ent),substrate:knt},Rnt=ln.div.withConfig({displayName:"Identicon__Wrapper",componentId:"sc-1gm2vek-0"})(["cursor:copy;display:inline-block;line-height:0;> .container{position:relative;> div,> svg{position:relative;}&.highlight:before{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:50%;box-shadow:0 0 5px 2px #aaa;content:'';}}"]);class Hnt extends k.PureComponent{constructor(){super(...arguments),sM(this,"state",{address:"",publicKey:"0x"}),sM(this,"onCopy",(()=>{const{onCopy:t}=this.props,{address:e}=this.state;e&&t&&t(e)}))}static setDefaultPrefix(t){Hnt.prefix=t}static getDerivedStateFromProps(t,e){let{prefix:n=Hnt.prefix,theme:r,value:i}=t;if("ethereum"===r){return{address:A_(i)?wj(i):i||"",publicKey:""}}try{const t=A_(i)||KJ(i)?Xj(i,n):i||"",r=U_(Wj(t,!1,n));return t===e.address?null:{address:t,publicKey:r}}catch(Vyt){return{address:"",publicKey:"0x"}}}render(){const{address:t}=this.state,e=this.getWrapped(this.state,this.props);return t?(0,Wd.jsx)(Jtt,{onCopy:this.onCopy,text:t,children:e}):e}getWrapped(t,e){let{address:n,publicKey:r}=t,{Custom:i}=e;const{className:o="",isAlternative:a,isHighlight:s,size:l=znt,style:u,theme:c=Vet.icon}=this.props,h=n?i||Lnt["default"===c?het:c]||Int:Get;return(0,Wd.jsx)(Rnt,{className:`ui--IdentityIcon  ${o}`,style:u,children:(0,Wd.jsx)(h,{address:n,className:s?"highlight":"",isAlternative:a,publicKey:r,size:l})},n)}}function Bnt(t){return(0,Wd.jsx)(Hnt,{...t})}sM(Hnt,"prefix",void 0);const Dnt=k.memo(Bnt),Fnt=ln.div`
  svg > circle:first-child {
    fill: ${lc};
  }
`,Unt=t=>{const{value:e,size:n}=t;return(0,Wd.jsx)(Fnt,{children:(0,Wd.jsx)(Dnt,{value:e,size:n,theme:"polkadot",style:{cursor:"default"}})})},Wnt=Unt,qnt=k.createContext({addNotification:t=>{},removeNotification:t=>{},notifications:[]}),Xnt=()=>k.useContext(qnt),Znt=ln.div`
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
      color: ${Qu};
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
        border-right: 1px solid ${yc};
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
        color: ${_u};
        opacity: 0.5;
        cursor: pointer;
        transition: opacity 0.1s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`,Ynt=ln.div`
  border-bottom: 1px solid ${yc};
  margin-top: 0.8rem;
  width: 100%;
  height: 1px;
`,Knt=()=>{const{addNotification:t}=Xnt(),{activeAccount:e,getAccount:n}=rtt(),r=n(e);let i={};return null!==r&&(i={title:"Address Copied to Clipboard",subtitle:r.address}),(0,Wd.jsxs)(Znt,{children:[(0,Wd.jsxs)("div",{className:"account",children:[null!==r&&(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)("div",{className:"icon",children:(0,Wd.jsx)(Unt,{value:r.address,size:"1.6rem"})}),(0,Wd.jsx)("div",{className:"title",children:(0,Wd.jsxs)("h4",{children:[tf(r.address),(0,Wd.jsx)("div",{className:"sep"})," ",(0,Wd.jsx)("span",{className:"addr",children:r.name})]})}),(0,Wd.jsx)("div",{children:(0,Wd.jsx)(Fu.div,{className:"copy",whileHover:{scale:1.02},whileTap:{scale:.97},children:(0,Wd.jsx)("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(r.address),t(i)},children:(0,Wd.jsx)(Fg,{icon:sv,transform:"grow-3"})})})})]}),null===r&&(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)("h4",{style:{marginLeft:0},children:"Account Not Connected"}),(0,Wd.jsx)("div",{})]})]}),(0,Wd.jsx)(Ynt,{})]})};var Gnt=__webpack_require__(6066);const Jnt=[{key:"overview",definitions:[{title:"Supply Staked",description:["The current cumulative supply of DOT being staked globally.","The percentage of staked DOT is relative to the total supply of DOT."]},{title:"Nominators",description:["Nominators are accounts who are staking in the network, regardless of whether they are active or earning rewards.","In order to stake DOT, you must be a nominator."]},{title:"Active Nominators",description:["The amount of nominators in the network who are actively earning rewards."]},{title:"Your Balance",description:["Your balance represents total amount you have staked in addition to the total amount you have bonded in a Pool.","Unlike your staked balance, your bonded pool balance is held and locked in the pool itself."]},{title:"Announcements",description:["Real time network statistics that may affect your staking positions.","Keep up to date on the state of the network from your Overview."]}]},{key:"stake",definitions:[{title:"Staking Status",description:["The current state of your staking position.","Whether you receive rewards depends on whether you have active nominations in the current era, and whether you are above their over-subscribed threshold.","Your staking status provides you this information at a glance."]},{title:"Stash and Controller Accounts",description:["The Stash and Controller are simply Polkadot accounts that manage your staking activity.","Your Stash account is the account used to hold your staked funds, whereas the Controller account is used to carry out Staking actions on the Stash account's behalf.","When you switch accounts in this app, you are actually switching your Stash account. Your Controller account is then automatically fetched for you.","This app assumes you have both Stash and Controller accounts imported. If you do not, you will not be able to use all app functions.","You can assign a different Controller account on the Stake page."]},{title:"Bonding",description:['Bonding funds is the process of "locking" (or staking) DOT. Bonded DOT will then be automatically allocated to one or more of your nominated validators.',"The minimum active bond statistic is the minimum DOT being bonded by a nominator for the current era."]},{title:"Active Bond Threshold",description:["The amount of DOT needed to be actively nominating in an era. ","Being above this metric simply guarantees that you will be present in the active nominator set for the era. This amount still does not guarantee rewards, as your active nominations may still be over-subscribed.","Only the top 256 nominators are rewarded per validator. Ensuring your active bond is above this threshold will increase your chances of rewards.","You can keep track of these metrics from the dashboard and amend your staking position if necessary, whether increasing your bonded DOT or changing your nominations."]},{title:"Reward Destination",description:["Your reward destination is where your rewards are sent to.","Rewards can be automatically bonded on top of your current bond, or they can be sent to your stash, controller, or an external account of your choosing."]},{title:"Nominating",description:["Nominating is the process of selecting validators you wish to stake your DOT to. You can choose to nominate up to 16 validators for each of your accounts.","Once you have nominated your selected validators, they become your nominations."]},{title:"Nominations",description:["Your nominations are the validators you have chosen to nominate. You can nominate up to 16 validators.","Your bonded funds are automatically distributed to nominations that are active in the staking era.","As long as at least one of your nominations is actively validating in a session, your funds will be staked with that validator and you will receive rewards."]}],external:[]},{key:"pools",definitions:[{title:"Nomination Pools",description:["Nomination pools allow users to contribute DOT and earn staking rewards.","Unlike nominating, staking using pools requires a small amount of DOT, and the pool manages nominees on your behalf."]},{title:"Active Pools",description:["The current amount of active nomination pools."]},{title:"Minimum Join Bond",description:["The minimum amount of DOT needed to bond in order to join a pool."]},{title:"Minimum Create Bond",description:["The minimum amount of DOT needed to bond for a creator  of a pool."]},{title:"Pool Status",description:["Your current pool status, summarising whether your account is actively in a pool and generating rewards."]},{title:"Bonded in Pool",description:["The amount of DOT currently bonded in a pool."]},{title:"Pool Rewards",description:["The amount of rewards in DOT generated by being an active participant in a pool.","Users are required to claim their pool rewards in order to receive them. Pool rewards can be bonded back into the pool, or sent to your account as free DOT."]},{title:"Joined Pool",description:["The currently joined pool. Only one pool can be joined per account."]}],external:[]},{key:"validators",definitions:[{title:"Validator",description:["An entity that validates blocks for the Polkadot Relay Chain. Validators play a key role in Polkadot to secure the network and produce blocks.","As a nominator, you choose which validators you wish to back, and receive rewards for doing so."]},{title:"Active Validator",description:["A validator that is actively validating blocks. Rewards are accumulated based on the validator's activity.","A new set of validators are chosen for each era, so there is no guarantee the same validator will be active in subsequent eras.","Polkadot allows a nominator to nominate up to 16 validators, maximising your chances of nominating an active validator in each era."]},{title:"Era",description:["At the end of each era, validators are rewarded DOT based on how many era points they accumulated in that era. This DOT reward is then distributed amongst the nominators of the validator via a payout.","1 era is currently 24 hours in Polkadot."]},{title:"Epoch",description:["An epoch is another name for a session in Polkadot. A different set of validators are selected to validate blocks at the beginning of every epoch.","1 epoch is currently 4 hours in Polkadot."]},{title:"Era Points",description:["Era Points are accumulated by validators during each era, and depend on a validator's performance.","As a staker, you do not need to worry about Era Points. In general, better performing validators produce more Era Points, which in-turn lead to higher staking rewards."]},{title:"Minimum Nomination Bond",description:["The minimum amount you need bonded in order to nominate."]},{title:"Commission",description:["Validators can take a percentage of the rewards they earn. This chunk is called their commission.","Nominating validators with low commissions mean you will receive a larger share of the rewards they generate.","Many validators will have a commission rate of 100%, meaning you will receive no rewards by nominating these validators.","Examples of such validators include those operating on behalf of exchanges, where nominating and reward distribution is done centrally on the exchange in question.","A validator can update their commission rates as and when they please, and such changes will have an impact on your profitability. Be sure to monitor your nominations on this dashboard to keep updated on their commission rates."]},{title:"Over Subscribed",description:["Only the top 256 nominators for each validator are rewarded in Polkadot. When this number is surpassed, this validator is considered over subscribed."]},{title:"Blocked Nominations",description:["When a validator has blocked nominations, nominators are unable to nominate them."]}],external:[]},{key:"payouts",definitions:[{title:"Payout",description:['Payouts are staking rewards on Polkadot. They depend on how many "Era Points" your nominated validators accrue over time. Rewards are determined at the end of every Era (24 hour periods).',"To receive staking rewards, a Payout needs to be requested. Any nominator backing the validator in question can request a Payout.","One payout request triggers the reward payout for every nominator."]},{title:"Last Era Payout",description:["The total amount of DOT paid out for the last active era.","Payouts are distributed evenly amongst the active validators for that era, and are then further distributed to the active nominators that took part in that era.","The payout amounts received depend on how much DOT the nominators, and validators themselves, had bonded for that era."]},{title:"Payout History",description:["Historical records of payouts made for being an active nominator.","Requesting payouts is a manual process, so you may receive payouts for multiple eras in quick succession or in a sporadic fashion. Your payout graphs may therefore have multiple payouts occur on the same day, or have days where there were no payouts.","This does not mean that you were not nominating or generating rewards in that period - only that the payout for that period was not yet made."]}],external:[]},{key:"community",definitions:[],external:[]}],Qnt=k.createContext(null),_nt=()=>k.useContext(Qnt);class $nt extends k.Component{constructor(t){super(t),this.setPage=t=>{this.setState({page:t})},this.setInnerDefinition=t=>{this.setState({innerDefinition:t})},this.toggle=()=>{const{open:t}=this.state;this.setState({open:t===jJ.Closed?jJ.Open:jJ.Closed,transition:0})},this.openAssistant=()=>{this.setState({open:jJ.Open,transition:0})},this.closeAssistant=()=>{this.setState({open:jJ.Closed,transition:0}),setTimeout((()=>{this.setState({...this.state,activeSection:0})}),150)},this.setActiveSection=t=>{this.setState({activeSection:t,transition:1})},this.goToDefinition=(t,e)=>{const n=$nt.getDefinition(t,e);this.state.innerDefinition===n&&this.state.open===jJ.Open?this.closeAssistant():void 0!==n&&(this.setPage(t),this.setInnerDefinition(n),this.setActiveSection(1),setTimeout((()=>this.openAssistant()),60))},this.setAssistantHeight=t=>{this.setState({...this.state,height:t})},this.state={open:jJ.Closed,page:"overview",innerDefinition:{title:"",description:[""]},activeSection:0,height:0,transition:0}}render(){return(0,Wd.jsx)(Qnt.Provider,{value:{toggle:this.toggle,setPage:this.setPage,setInnerDefinition:this.setInnerDefinition,getDefinition:$nt.getDefinition,openAssistant:this.openAssistant,closeAssistant:this.closeAssistant,setActiveSection:this.setActiveSection,goToDefinition:this.goToDefinition,setAssistantHeight:this.setAssistantHeight,activeSection:this.state.activeSection,open:this.state.open,page:this.state.page,innerDefinition:this.state.innerDefinition,height:this.state.height,transition:this.state.transition},children:this.props.children})}}var trt;function ert(){return ert=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ert.apply(this,arguments)}function nrt(t,e){let{title:n,titleId:r,...i}=t;return k.createElement("svg",ert({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:"100%",height:"100%",ref:e,"aria-labelledby":r},i),n?k.createElement("title",{id:r},n):null,trt||(trt=k.createElement("path",{d:"M32 15c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 14.5c-2.5 0-4.5 2-4.5 4.5v12c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5V34c0-2.5-2-4.5-4.5-4.5z"})))}$nt.getDefinition=(t,e)=>{var n,r;return null===(n=Jnt.find((e=>e.key===t)))||void 0===n||null===(r=n.definitions)||void 0===r?void 0:r.find((t=>t.title===e))};const rrt=k.forwardRef(nrt),irt=(__webpack_require__.p,ln.button`
  background: ${mc};
  color: ${_u};
  fill: ${_u};
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0.05rem;
  transition: all 0.15s;

  &:hover {
    fill: ${Ac};
  }
`),ort=t=>{var e;const{goToDefinition:n}=_nt(),{page:r,title:i}=t,o=null!==(e=t.size)&&void 0!==e?e:"1.3em";return(0,Wd.jsx)(irt,{className:"assistant-icon ignore-assistant-outside-alerter",onClick:()=>{n(r,i)},style:{width:o,height:o},children:(0,Wd.jsx)(rrt,{className:"ignore-assistant-outside-alerter"})})};const art="undefined"===typeof window?function(t){return t()}:window.requestAnimationFrame;function srt(t,e,n){const r=n||(t=>Array.prototype.slice.call(t));let i=!1,o=[];return function(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];o=r(a),i||(i=!0,art.call(window,(()=>{i=!1,t.apply(e,o)})))}}const lrt=t=>"start"===t?"left":"end"===t?"right":"center",urt=(t,e,n)=>"start"===t?e:"end"===t?n:(e+n)/2;function crt(){}const hrt=function(){let t=0;return function(){return t++}}();function drt(t){return null===t||"undefined"===typeof t}function frt(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}function prt(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}const mrt=t=>("number"===typeof t||t instanceof Number)&&isFinite(+t);function grt(t,e){return mrt(t)?t:e}function yrt(t,e){return"undefined"===typeof t?e:t}const vrt=(t,e)=>"string"===typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function brt(t,e,n){if(t&&"function"===typeof t.call)return t.apply(n,e)}function wrt(t,e,n,r){let i,o,a;if(frt(t))if(o=t.length,r)for(i=o-1;i>=0;i--)e.call(n,t[i],i);else for(i=0;i<o;i++)e.call(n,t[i],i);else if(prt(t))for(a=Object.keys(t),o=a.length,i=0;i<o;i++)e.call(n,t[a[i]],a[i])}function xrt(t,e){let n,r,i,o;if(!t||!e||t.length!==e.length)return!1;for(n=0,r=t.length;n<r;++n)if(i=t[n],o=e[n],i.datasetIndex!==o.datasetIndex||i.index!==o.index)return!1;return!0}function Mrt(t){if(frt(t))return t.map(Mrt);if(prt(t)){const e=Object.create(null),n=Object.keys(t),r=n.length;let i=0;for(;i<r;++i)e[n[i]]=Mrt(t[n[i]]);return e}return t}function krt(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function Srt(t,e,n,r){if(!krt(t))return;const i=e[t],o=n[t];prt(i)&&prt(o)?Crt(i,o,r):e[t]=Mrt(o)}function Crt(t,e,n){const r=frt(e)?e:[e],i=r.length;if(!prt(t))return t;const o=(n=n||{}).merger||Srt;for(let a=0;a<i;++a){if(!prt(e=r[a]))continue;const i=Object.keys(e);for(let r=0,a=i.length;r<a;++r)o(i[r],t,e,n)}return t}function Prt(t,e){return Crt(t,e,{merger:Trt})}function Trt(t,e,n){if(!krt(t))return;const r=e[t],i=n[t];prt(r)&&prt(i)?Prt(r,i):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Mrt(i))}function Art(t,e){const n=t.indexOf(".",e);return-1===n?t.length:n}function Nrt(t,e){if(""===e)return t;let n=0,r=Art(e,n);for(;t&&r>n;)t=t[e.slice(n,r)],n=r+1,r=Art(e,n);return t}function Ort(t){return t.charAt(0).toUpperCase()+t.slice(1)}const jrt=t=>"undefined"!==typeof t,Vrt=t=>"function"===typeof t,Ert=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};const Irt=Math.PI,zrt=2*Irt,Lrt=zrt+Irt,Rrt=Number.POSITIVE_INFINITY,Hrt=Irt/180,Brt=Irt/2,Drt=Irt/4,Frt=2*Irt/3,Urt=Math.log10,Wrt=Math.sign;function qrt(t){const e=Math.round(t);t=Zrt(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(Urt(t))),r=t/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function Xrt(t){return!isNaN(parseFloat(t))&&isFinite(t)}function Zrt(t,e,n){return Math.abs(t-e)<n}function Yrt(t,e,n){let r,i,o;for(r=0,i=t.length;r<i;r++)o=t[r][n],isNaN(o)||(e.min=Math.min(e.min,o),e.max=Math.max(e.max,o))}function Krt(t){return t*(Irt/180)}function Grt(t){return t*(180/Irt)}function Jrt(t){if(!mrt(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function Qrt(t,e){const n=e.x-t.x,r=e.y-t.y,i=Math.sqrt(n*n+r*r);let o=Math.atan2(r,n);return o<-.5*Irt&&(o+=zrt),{angle:o,distance:i}}function _rt(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function $rt(t,e){return(t-e+Lrt)%zrt-Irt}function tit(t){return(t%zrt+zrt)%zrt}function eit(t,e,n,r){const i=tit(t),o=tit(e),a=tit(n),s=tit(o-i),l=tit(a-i),u=tit(i-o),c=tit(i-a);return i===o||i===a||r&&o===a||s>l&&u<c}function nit(t,e,n){return Math.max(e,Math.min(n,t))}function rit(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e-6;return t>=Math.min(e,n)-r&&t<=Math.max(e,n)+r}const iit=t=>0===t||1===t,oit=(t,e,n)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*zrt/n),ait=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*zrt/n)+1,sit={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*Brt),easeOutSine:t=>Math.sin(t*Brt),easeInOutSine:t=>-.5*(Math.cos(Irt*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>iit(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>iit(t)?t:oit(t,.075,.3),easeOutElastic:t=>iit(t)?t:ait(t,.075,.3),easeInOutElastic(t){const e=.1125;return iit(t)?t:t<.5?.5*oit(2*t,e,.45):.5+.5*ait(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-sit.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?e*(t-=1.5/n)*t+.75:t<2.5/n?e*(t-=2.25/n)*t+.9375:e*(t-=2.625/n)*t+.984375},easeInOutBounce:t=>t<.5?.5*sit.easeInBounce(2*t):.5*sit.easeOutBounce(2*t-1)+.5};function lit(t){return t+.5|0}const uit=(t,e,n)=>Math.max(Math.min(t,n),e);function cit(t){return uit(lit(2.55*t),0,255)}function hit(t){return uit(lit(255*t),0,255)}function dit(t){return uit(lit(t/2.55)/100,0,1)}function fit(t){return uit(lit(100*t),0,100)}const pit={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},mit=[..."0123456789ABCDEF"],git=t=>mit[15&t],yit=t=>mit[(240&t)>>4]+mit[15&t],vit=t=>(240&t)>>4===(15&t);function bit(t){var e=(t=>vit(t.r)&&vit(t.g)&&vit(t.b)&&vit(t.a))(t)?git:yit;return t?"#"+e(t.r)+e(t.g)+e(t.b)+((t,e)=>t<255?e(t):"")(t.a,e):void 0}const wit=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function xit(t,e,n){const r=e*Math.min(n,1-n),i=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+t/30)%12;return n-r*Math.max(Math.min(i-3,9-i,1),-1)};return[i(0),i(8),i(4)]}function Mit(t,e,n){const r=function(r){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(r+t/60)%6;return n-n*e*Math.max(Math.min(i,4-i,1),0)};return[r(5),r(3),r(1)]}function kit(t,e,n){const r=xit(t,1,.5);let i;for(e+n>1&&(i=1/(e+n),e*=i,n*=i),i=0;i<3;i++)r[i]*=1-e-n,r[i]+=e;return r}function Sit(t){const e=t.r/255,n=t.g/255,r=t.b/255,i=Math.max(e,n,r),o=Math.min(e,n,r),a=(i+o)/2;let s,l,u;return i!==o&&(u=i-o,l=a>.5?u/(2-i-o):u/(i+o),s=function(t,e,n,r,i){return t===i?(e-n)/r+(e<n?6:0):e===i?(n-t)/r+2:(t-e)/r+4}(e,n,r,u,i),s=60*s+.5),[0|s,l||0,a]}function Cit(t,e,n,r){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,r)).map(hit)}function Pit(t,e,n){return Cit(xit,t,e,n)}function Tit(t){return(t%360+360)%360}function Ait(t){const e=wit.exec(t);let n,r=255;if(!e)return;e[5]!==n&&(r=e[6]?cit(+e[5]):hit(+e[5]));const i=Tit(+e[2]),o=+e[3]/100,a=+e[4]/100;return n="hwb"===e[1]?function(t,e,n){return Cit(kit,t,e,n)}(i,o,a):"hsv"===e[1]?function(t,e,n){return Cit(Mit,t,e,n)}(i,o,a):Pit(i,o,a),{r:n[0],g:n[1],b:n[2],a:r}}const Nit={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Oit={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};let jit;function Vit(t){jit||(jit=function(){const t={},e=Object.keys(Oit),n=Object.keys(Nit);let r,i,o,a,s;for(r=0;r<e.length;r++){for(a=s=e[r],i=0;i<n.length;i++)o=n[i],s=s.replace(o,Nit[o]);o=parseInt(Oit[a],16),t[s]=[o>>16&255,o>>8&255,255&o]}return t}(),jit.transparent=[0,0,0,0]);const e=jit[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}const Eit=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;const Iit=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,zit=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function Lit(t,e,n){if(t){let r=Sit(t);r[e]=Math.max(0,Math.min(r[e]+r[e]*n,0===e?360:1)),r=Pit(r),t.r=r[0],t.g=r[1],t.b=r[2]}}function Rit(t,e){return t?Object.assign(e||{},t):t}function Hit(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=hit(t[3]))):(e=Rit(t,{r:0,g:0,b:0,a:1})).a=hit(e.a),e}function Bit(t){return"r"===t.charAt(0)?function(t){const e=Eit.exec(t);let n,r,i,o=255;if(e){if(e[7]!==n){const t=+e[7];o=e[8]?cit(t):uit(255*t,0,255)}return n=+e[1],r=+e[3],i=+e[5],n=255&(e[2]?cit(n):uit(n,0,255)),r=255&(e[4]?cit(r):uit(r,0,255)),i=255&(e[6]?cit(i):uit(i,0,255)),{r:n,g:r,b:i,a:o}}}(t):Ait(t)}class Dit{constructor(t){if(t instanceof Dit)return t;const e=typeof t;let n;"object"===e?n=Hit(t):"string"===e&&(n=function(t){var e,n=t.length;return"#"===t[0]&&(4===n||5===n?e={r:255&17*pit[t[1]],g:255&17*pit[t[2]],b:255&17*pit[t[3]],a:5===n?17*pit[t[4]]:255}:7!==n&&9!==n||(e={r:pit[t[1]]<<4|pit[t[2]],g:pit[t[3]]<<4|pit[t[4]],b:pit[t[5]]<<4|pit[t[6]],a:9===n?pit[t[7]]<<4|pit[t[8]]:255})),e}(t)||Vit(t)||Bit(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=Rit(this._rgb);return t&&(t.a=dit(t.a)),t}set rgb(t){this._rgb=Hit(t)}rgbString(){return this._valid?function(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${dit(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}(this._rgb):void 0}hexString(){return this._valid?bit(this._rgb):void 0}hslString(){return this._valid?function(t){if(!t)return;const e=Sit(t),n=e[0],r=fit(e[1]),i=fit(e[2]);return t.a<255?`hsla(${n}, ${r}%, ${i}%, ${dit(t.a)})`:`hsl(${n}, ${r}%, ${i}%)`}(this._rgb):void 0}mix(t,e){if(t){const n=this.rgb,r=t.rgb;let i;const o=e===i?.5:e,a=2*o-1,s=n.a-r.a,l=((a*s===-1?a:(a+s)/(1+a*s))+1)/2;i=1-l,n.r=255&l*n.r+i*r.r+.5,n.g=255&l*n.g+i*r.g+.5,n.b=255&l*n.b+i*r.b+.5,n.a=o*n.a+(1-o)*r.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=function(t,e,n){const r=zit(dit(t.r)),i=zit(dit(t.g)),o=zit(dit(t.b));return{r:hit(Iit(r+n*(zit(dit(e.r))-r))),g:hit(Iit(i+n*(zit(dit(e.g))-i))),b:hit(Iit(o+n*(zit(dit(e.b))-o))),a:t.a+n*(e.a-t.a)}}(this._rgb,t._rgb,e)),this}clone(){return new Dit(this.rgb)}alpha(t){return this._rgb.a=hit(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=lit(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Lit(this._rgb,2,t),this}darken(t){return Lit(this._rgb,2,-t),this}saturate(t){return Lit(this._rgb,1,t),this}desaturate(t){return Lit(this._rgb,1,-t),this}rotate(t){return function(t,e){var n=Sit(t);n[0]=Tit(n[0]+e),n=Pit(n),t.r=n[0],t.g=n[1],t.b=n[2]}(this._rgb,t),this}}function Fit(t){return new Dit(t)}function Uit(t){if(t&&"object"===typeof t){const e=t.toString();return"[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return!1}function Wit(t){return Uit(t)?t:Fit(t)}function qit(t){return Uit(t)?t:Fit(t).saturate(.5).darken(.1).hexString()}const Xit=Object.create(null),Zit=Object.create(null);function Yit(t,e){if(!e)return t;const n=e.split(".");for(let r=0,i=n.length;r<i;++r){const e=n[r];t=t[e]||(t[e]=Object.create(null))}return t}function Kit(t,e,n){return"string"===typeof e?Crt(Yit(t,e),n):Crt(Yit(t,""),e)}var Git=new class{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>qit(e.backgroundColor),this.hoverBorderColor=(t,e)=>qit(e.borderColor),this.hoverColor=(t,e)=>qit(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return Kit(this,t,e)}get(t){return Yit(this,t)}describe(t,e){return Kit(Zit,t,e)}override(t,e){return Kit(Xit,t,e)}route(t,e,n,r){const i=Yit(this,t),o=Yit(this,n),a="_"+e;Object.defineProperties(i,{[a]:{value:i[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[a],e=o[r];return prt(t)?Object.assign({},e,t):yrt(t,e)},set(t){this[a]=t}}})}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function Jit(t,e,n,r,i){let o=e[i];return o||(o=e[i]=t.measureText(i).width,n.push(i)),o>r&&(r=o),r}function Qit(t,e,n,r){let i=(r=r||{}).data=r.data||{},o=r.garbageCollect=r.garbageCollect||[];r.font!==e&&(i=r.data={},o=r.garbageCollect=[],r.font=e),t.save(),t.font=e;let a=0;const s=n.length;let l,u,c,h,d;for(l=0;l<s;l++)if(h=n[l],void 0!==h&&null!==h&&!0!==frt(h))a=Jit(t,i,o,a,h);else if(frt(h))for(u=0,c=h.length;u<c;u++)d=h[u],void 0===d||null===d||frt(d)||(a=Jit(t,i,o,a,d));t.restore();const f=o.length/2;if(f>n.length){for(l=0;l<f;l++)delete i[o[l]];o.splice(0,f)}return a}function _it(t,e,n){const r=t.currentDevicePixelRatio,i=0!==n?Math.max(n/2,.5):0;return Math.round((e-i)*r)/r+i}function $it(t,e){(e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function tot(t,e,n,r){let i,o,a,s,l;const u=e.pointStyle,c=e.rotation,h=e.radius;let d=(c||0)*Hrt;if(u&&"object"===typeof u&&(i=u.toString(),"[object HTMLImageElement]"===i||"[object HTMLCanvasElement]"===i))return t.save(),t.translate(n,r),t.rotate(d),t.drawImage(u,-u.width/2,-u.height/2,u.width,u.height),void t.restore();if(!(isNaN(h)||h<=0)){switch(t.beginPath(),u){default:t.arc(n,r,h,0,zrt),t.closePath();break;case"triangle":t.moveTo(n+Math.sin(d)*h,r-Math.cos(d)*h),d+=Frt,t.lineTo(n+Math.sin(d)*h,r-Math.cos(d)*h),d+=Frt,t.lineTo(n+Math.sin(d)*h,r-Math.cos(d)*h),t.closePath();break;case"rectRounded":l=.516*h,s=h-l,o=Math.cos(d+Drt)*s,a=Math.sin(d+Drt)*s,t.arc(n-o,r-a,l,d-Irt,d-Brt),t.arc(n+a,r-o,l,d-Brt,d),t.arc(n+o,r+a,l,d,d+Brt),t.arc(n-a,r+o,l,d+Brt,d+Irt),t.closePath();break;case"rect":if(!c){s=Math.SQRT1_2*h,t.rect(n-s,r-s,2*s,2*s);break}d+=Drt;case"rectRot":o=Math.cos(d)*h,a=Math.sin(d)*h,t.moveTo(n-o,r-a),t.lineTo(n+a,r-o),t.lineTo(n+o,r+a),t.lineTo(n-a,r+o),t.closePath();break;case"crossRot":d+=Drt;case"cross":o=Math.cos(d)*h,a=Math.sin(d)*h,t.moveTo(n-o,r-a),t.lineTo(n+o,r+a),t.moveTo(n+a,r-o),t.lineTo(n-a,r+o);break;case"star":o=Math.cos(d)*h,a=Math.sin(d)*h,t.moveTo(n-o,r-a),t.lineTo(n+o,r+a),t.moveTo(n+a,r-o),t.lineTo(n-a,r+o),d+=Drt,o=Math.cos(d)*h,a=Math.sin(d)*h,t.moveTo(n-o,r-a),t.lineTo(n+o,r+a),t.moveTo(n+a,r-o),t.lineTo(n-a,r+o);break;case"line":o=Math.cos(d)*h,a=Math.sin(d)*h,t.moveTo(n-o,r-a),t.lineTo(n+o,r+a);break;case"dash":t.moveTo(n,r),t.lineTo(n+Math.cos(d)*h,r+Math.sin(d)*h)}t.fill(),e.borderWidth>0&&t.stroke()}}function eot(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function not(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function rot(t){t.restore()}function iot(t,e,n,r,i){if(!e)return t.lineTo(n.x,n.y);if("middle"===i){const r=(e.x+n.x)/2;t.lineTo(r,e.y),t.lineTo(r,n.y)}else"after"===i!==!!r?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function oot(t,e,n,r){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(r?e.cp1x:e.cp2x,r?e.cp1y:e.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function aot(t,e,n,r,i){let o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};const a=frt(e)?e:[e],s=o.strokeWidth>0&&""!==o.strokeColor;let l,u;for(t.save(),t.font=i.string,sot(t,o),l=0;l<a.length;++l)u=a[l],s&&(o.strokeColor&&(t.strokeStyle=o.strokeColor),drt(o.strokeWidth)||(t.lineWidth=o.strokeWidth),t.strokeText(u,n,r,o.maxWidth)),t.fillText(u,n,r,o.maxWidth),lot(t,n,r,u,o),r+=i.lineHeight;t.restore()}function sot(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),drt(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function lot(t,e,n,r,i){if(i.strikethrough||i.underline){const o=t.measureText(r),a=e-o.actualBoundingBoxLeft,s=e+o.actualBoundingBoxRight,l=n-o.actualBoundingBoxAscent,u=n+o.actualBoundingBoxDescent,c=i.strikethrough?(l+u)/2:u;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=i.decorationWidth||2,t.moveTo(a,c),t.lineTo(s,c),t.stroke()}}function uot(t,e){const{x:n,y:r,w:i,h:o,radius:a}=e;t.arc(n+a.topLeft,r+a.topLeft,a.topLeft,-Brt,Irt,!0),t.lineTo(n,r+o-a.bottomLeft),t.arc(n+a.bottomLeft,r+o-a.bottomLeft,a.bottomLeft,Irt,Brt,!0),t.lineTo(n+i-a.bottomRight,r+o),t.arc(n+i-a.bottomRight,r+o-a.bottomRight,a.bottomRight,Brt,0,!0),t.lineTo(n+i,r+a.topRight),t.arc(n+i-a.topRight,r+a.topRight,a.topRight,0,-Brt,!0),t.lineTo(n+a.topLeft,r)}const cot=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),hot=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function dot(t,e){const n=(""+t).match(cot);if(!n||"normal"===n[1])return 1.2*e;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100}return e*t}const fot=t=>+t||0;function pot(t,e){const n={},r=prt(e),i=r?Object.keys(e):e,o=prt(t)?r?n=>yrt(t[n],t[e[n]]):e=>t[e]:()=>t;for(const a of i)n[a]=fot(o(a));return n}function mot(t){return pot(t,{top:"y",right:"x",bottom:"y",left:"x"})}function got(t){return pot(t,["topLeft","topRight","bottomLeft","bottomRight"])}function yot(t){const e=mot(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function vot(t,e){t=t||{},e=e||Git.font;let n=yrt(t.size,e.size);"string"===typeof n&&(n=parseInt(n,10));let r=yrt(t.style,e.style);r&&!(""+r).match(hot)&&(console.warn('Invalid font style specified: "'+r+'"'),r="");const i={family:yrt(t.family,e.family),lineHeight:dot(yrt(t.lineHeight,e.lineHeight),n),size:n,style:r,weight:yrt(t.weight,e.weight),string:""};return i.string=function(t){return!t||drt(t.size)||drt(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(i),i}function bot(t,e,n,r){let i,o,a,s=!0;for(i=0,o=t.length;i<o;++i)if(a=t[i],void 0!==a&&(void 0!==e&&"function"===typeof a&&(a=a(e),s=!1),void 0!==n&&frt(a)&&(a=a[n%a.length],s=!1),void 0!==a))return r&&!s&&(r.cacheable=!1),a}function wot(t,e){return Object.assign(Object.create(t),e)}function xot(t,e,n){n=n||(n=>t[n]<e);let r,i=t.length-1,o=0;for(;i-o>1;)r=o+i>>1,n(r)?o=r:i=r;return{lo:o,hi:i}}const Mot=(t,e,n)=>xot(t,n,(r=>t[r][e]<n)),kot=(t,e,n)=>xot(t,n,(r=>t[r][e]>=n));const Sot=["push","pop","shift","splice","unshift"];function Cot(t,e){const n=t._chartjs;if(!n)return;const r=n.listeners,i=r.indexOf(e);-1!==i&&r.splice(i,1),r.length>0||(Sot.forEach((e=>{delete t[e]})),delete t._chartjs)}function Pot(t){const e=new Set;let n,r;for(n=0,r=t.length;n<r;++n)e.add(t[n]);return e.size===r?t:Array.from(e)}function Tot(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[""],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:()=>t[0];jrt(r)||(r=Bot("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:n,_fallback:r,_getTarget:i,override:i=>Tot([i,...t],e,n,r)};return new Proxy(o,{deleteProperty:(e,n)=>(delete e[n],delete e._keys,delete t[0][n],!0),get:(n,r)=>Vot(n,r,(()=>Hot(r,e,t,n))),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>Dot(t).includes(e),ownKeys:t=>Dot(t),set(t,e,n){const r=t._storage||(t._storage=i());return t[e]=r[e]=n,delete t._keys,!0}})}function Aot(t,e,n,r){const i={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:Not(t,r),setContext:e=>Aot(t,e,n,r),override:i=>Aot(t.override(i),e,n,r)};return new Proxy(i,{deleteProperty:(e,n)=>(delete e[n],delete t[n],!0),get:(t,e,n)=>Vot(t,e,(()=>function(t,e,n){const{_proxy:r,_context:i,_subProxy:o,_descriptors:a}=t;let s=r[e];Vrt(s)&&a.isScriptable(e)&&(s=function(t,e,n,r){const{_proxy:i,_context:o,_subProxy:a,_stack:s}=n;if(s.has(t))throw new Error("Recursion detected: "+Array.from(s).join("->")+"->"+t);s.add(t),e=e(o,a||r),s.delete(t),jot(t,e)&&(e=Lot(i._scopes,i,t,e));return e}(e,s,t,n));frt(s)&&s.length&&(s=function(t,e,n,r){const{_proxy:i,_context:o,_subProxy:a,_descriptors:s}=n;if(jrt(o.index)&&r(t))e=e[o.index%e.length];else if(prt(e[0])){const n=e,r=i._scopes.filter((t=>t!==n));e=[];for(const l of n){const n=Lot(r,i,t,l);e.push(Aot(n,o,a&&a[t],s))}}return e}(e,s,t,a.isIndexable));jot(e,s)&&(s=Aot(s,i,o&&o[e],a));return s}(t,e,n))),getOwnPropertyDescriptor:(e,n)=>e._descriptors.allKeys?Reflect.has(t,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,n),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,n)=>Reflect.has(t,n),ownKeys:()=>Reflect.ownKeys(t),set:(e,n,r)=>(t[n]=r,delete e[n],!0)})}function Not(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{scriptable:!0,indexable:!0};const{_scriptable:n=e.scriptable,_indexable:r=e.indexable,_allKeys:i=e.allKeys}=t;return{allKeys:i,scriptable:n,indexable:r,isScriptable:Vrt(n)?n:()=>n,isIndexable:Vrt(r)?r:()=>r}}const Oot=(t,e)=>t?t+Ort(e):e,jot=(t,e)=>prt(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function Vot(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const r=n();return t[e]=r,r}function Eot(t,e,n){return Vrt(t)?t(e,n):t}const Iot=(t,e)=>!0===t?e:"string"===typeof t?Nrt(e,t):void 0;function zot(t,e,n,r,i){for(const o of e){const e=Iot(n,o);if(e){t.add(e);const o=Eot(e._fallback,n,i);if(jrt(o)&&o!==n&&o!==r)return o}else if(!1===e&&jrt(r)&&n!==r)return null}return!1}function Lot(t,e,n,r){const i=e._rootScopes,o=Eot(e._fallback,n,r),a=[...t,...i],s=new Set;s.add(r);let l=Rot(s,a,n,o||n,r);return null!==l&&((!jrt(o)||o===n||(l=Rot(s,a,o,l,r),null!==l))&&Tot(Array.from(s),[""],i,o,(()=>function(t,e,n){const r=t._getTarget();e in r||(r[e]={});const i=r[e];if(frt(i)&&prt(n))return n;return i}(e,n,r))))}function Rot(t,e,n,r,i){for(;n;)n=zot(t,e,n,r,i);return n}function Hot(t,e,n,r){let i;for(const o of e)if(i=Bot(Oot(o,t),n),jrt(i))return jot(t,i)?Lot(n,r,t,i):i}function Bot(t,e){for(const n of e){if(!n)continue;const e=n[t];if(jrt(e))return e}}function Dot(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const n of t)for(const t of Object.keys(n).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}(t._scopes)),e}function Fot(t,e,n,r){const{iScale:i}=t,{key:o="r"}=this._parsing,a=new Array(r);let s,l,u,c;for(s=0,l=r;s<l;++s)u=s+n,c=e[u],a[s]={r:i.parse(Nrt(c,o),u)};return a}const Uot=Number.EPSILON||1e-14,Wot=(t,e)=>e<t.length&&!t[e].skip&&t[e],qot=t=>"x"===t?"y":"x";function Xot(t,e,n,r){const i=t.skip?e:t,o=e,a=n.skip?e:n,s=_rt(o,i),l=_rt(a,o);let u=s/(s+l),c=l/(s+l);u=isNaN(u)?0:u,c=isNaN(c)?0:c;const h=r*u,d=r*c;return{previous:{x:o.x-h*(a.x-i.x),y:o.y-h*(a.y-i.y)},next:{x:o.x+d*(a.x-i.x),y:o.y+d*(a.y-i.y)}}}function Zot(t,e,n){const r=t.length;let i,o,a,s,l,u=Wot(t,0);for(let c=0;c<r-1;++c)l=u,u=Wot(t,c+1),l&&u&&(Zrt(e[c],0,Uot)?n[c]=n[c+1]=0:(i=n[c]/e[c],o=n[c+1]/e[c],s=Math.pow(i,2)+Math.pow(o,2),s<=9||(a=3/Math.sqrt(s),n[c]=i*a*e[c],n[c+1]=o*a*e[c])))}function Yot(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"x";const r=qot(n),i=t.length;let o,a,s,l=Wot(t,0);for(let u=0;u<i;++u){if(a=s,s=l,l=Wot(t,u+1),!s)continue;const i=s[n],c=s[r];a&&(o=(i-a[n])/3,s[`cp1${n}`]=i-o,s[`cp1${r}`]=c-o*e[u]),l&&(o=(l[n]-i)/3,s[`cp2${n}`]=i+o,s[`cp2${r}`]=c+o*e[u])}}function Kot(t,e,n){return Math.max(Math.min(t,n),e)}function Got(t,e,n,r,i){let o,a,s,l;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)!function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x";const n=qot(e),r=t.length,i=Array(r).fill(0),o=Array(r);let a,s,l,u=Wot(t,0);for(a=0;a<r;++a)if(s=l,l=u,u=Wot(t,a+1),l){if(u){const t=u[e]-l[e];i[a]=0!==t?(u[n]-l[n])/t:0}o[a]=s?u?Wrt(i[a-1])!==Wrt(i[a])?0:(i[a-1]+i[a])/2:i[a-1]:i[a]}Zot(t,i,o),Yot(t,o,e)}(t,i);else{let n=r?t[t.length-1]:t[0];for(o=0,a=t.length;o<a;++o)s=t[o],l=Xot(n,s,t[Math.min(o+1,a-(r?0:1))%a],e.tension),s.cp1x=l.previous.x,s.cp1y=l.previous.y,s.cp2x=l.next.x,s.cp2y=l.next.y,n=s}e.capBezierPoints&&function(t,e){let n,r,i,o,a,s=eot(t[0],e);for(n=0,r=t.length;n<r;++n)a=o,o=s,s=n<r-1&&eot(t[n+1],e),o&&(i=t[n],a&&(i.cp1x=Kot(i.cp1x,e.left,e.right),i.cp1y=Kot(i.cp1y,e.top,e.bottom)),s&&(i.cp2x=Kot(i.cp2x,e.left,e.right),i.cp2y=Kot(i.cp2y,e.top,e.bottom)))}(t,n)}function Jot(){return"undefined"!==typeof window&&"undefined"!==typeof document}function Qot(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function _ot(t,e,n){let r;return"string"===typeof t?(r=parseInt(t,10),-1!==t.indexOf("%")&&(r=r/100*e.parentNode[n])):r=t,r}const $ot=t=>window.getComputedStyle(t,null);const tat=["top","right","bottom","left"];function eat(t,e,n){const r={};n=n?"-"+n:"";for(let i=0;i<4;i++){const o=tat[i];r[o]=parseFloat(t[e+"-"+o+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}function nat(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:r}=e,i=$ot(n),o="border-box"===i.boxSizing,a=eat(i,"padding"),s=eat(i,"border","width"),{x:l,y:u,box:c}=function(t,e){const n=t.touches,r=n&&n.length?n[0]:t,{offsetX:i,offsetY:o}=r;let a,s,l=!1;if(((t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot))(i,o,t.target))a=i,s=o;else{const t=e.getBoundingClientRect();a=r.clientX-t.left,s=r.clientY-t.top,l=!0}return{x:a,y:s,box:l}}(t,n),h=a.left+(c&&s.left),d=a.top+(c&&s.top);let{width:f,height:p}=e;return o&&(f-=a.width+s.width,p-=a.height+s.height),{x:Math.round((l-h)/f*n.width/r),y:Math.round((u-d)/p*n.height/r)}}const rat=t=>Math.round(10*t)/10;function iat(t,e,n,r){const i=$ot(t),o=eat(i,"margin"),a=_ot(i.maxWidth,t,"clientWidth")||Rrt,s=_ot(i.maxHeight,t,"clientHeight")||Rrt,l=function(t,e,n){let r,i;if(void 0===e||void 0===n){const o=Qot(t);if(o){const t=o.getBoundingClientRect(),a=$ot(o),s=eat(a,"border","width"),l=eat(a,"padding");e=t.width-l.width-s.width,n=t.height-l.height-s.height,r=_ot(a.maxWidth,o,"clientWidth"),i=_ot(a.maxHeight,o,"clientHeight")}else e=t.clientWidth,n=t.clientHeight}return{width:e,height:n,maxWidth:r||Rrt,maxHeight:i||Rrt}}(t,e,n);let{width:u,height:c}=l;if("content-box"===i.boxSizing){const t=eat(i,"border","width"),e=eat(i,"padding");u-=e.width+t.width,c-=e.height+t.height}return u=Math.max(0,u-o.width),c=Math.max(0,r?Math.floor(u/r):c-o.height),u=rat(Math.min(u,a,l.maxWidth)),c=rat(Math.min(c,s,l.maxHeight)),u&&!c&&(c=rat(u/2)),{width:u,height:c}}function oat(t,e,n){const r=e||1,i=Math.floor(t.height*r),o=Math.floor(t.width*r);t.height=i/r,t.width=o/r;const a=t.canvas;return a.style&&(n||!a.style.height&&!a.style.width)&&(a.style.height=`${t.height}px`,a.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==r||a.height!==i||a.width!==o)&&(t.currentDevicePixelRatio=r,a.height=i,a.width=o,t.ctx.setTransform(r,0,0,r,0,0),!0)}const aat=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch($ht){}return t}();function sat(t,e){const n=function(t,e){return $ot(t).getPropertyValue(e)}(t,e),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function lat(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function uat(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:"middle"===r?n<.5?t.y:e.y:"after"===r?n<1?t.y:e.y:n>0?e.y:t.y}}function cat(t,e,n,r){const i={x:t.cp2x,y:t.cp2y},o={x:e.cp1x,y:e.cp1y},a=lat(t,i,n),s=lat(i,o,n),l=lat(o,e,n),u=lat(a,s,n),c=lat(s,l,n);return lat(u,c,n)}const hat=new Map;function dat(t,e,n){return function(t,e){e=e||{};const n=t+JSON.stringify(e);let r=hat.get(n);return r||(r=new Intl.NumberFormat(t,e),hat.set(n,r)),r}(e,n).format(t)}function fat(t,e,n){return t?function(t,e){return{x:n=>t+t+e-n,setWidth(t){e=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}}(e,n):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function pat(t,e){let n,r;"ltr"!==e&&"rtl"!==e||(n=t.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=r)}function mat(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function gat(t){return"angle"===t?{between:eit,compare:$rt,normalize:tit}:{between:rit,compare:(t,e)=>t-e,normalize:t=>t}}function yat(t){let{start:e,end:n,count:r,loop:i,style:o}=t;return{start:e%r,end:n%r,loop:i&&(n-e+1)%r===0,style:o}}function vat(t,e,n){if(!n)return[t];const{property:r,start:i,end:o}=n,a=e.length,{compare:s,between:l,normalize:u}=gat(r),{start:c,end:h,loop:d,style:f}=function(t,e,n){const{property:r,start:i,end:o}=n,{between:a,normalize:s}=gat(r),l=e.length;let u,c,{start:h,end:d,loop:f}=t;if(f){for(h+=l,d+=l,u=0,c=l;u<c&&a(s(e[h%l][r]),i,o);++u)h--,d--;h%=l,d%=l}return d<h&&(d+=l),{start:h,end:d,loop:f,style:t.style}}(t,e,n),p=[];let m,g,y,v=!1,b=null;const w=()=>v||l(i,y,m)&&0!==s(i,y),x=()=>!v||0===s(o,m)||l(o,y,m);for(let M=c,k=c;M<=h;++M)g=e[M%a],g.skip||(m=u(g[r]),m!==y&&(v=l(m,i,o),null===b&&w()&&(b=0===s(m,i)?M:k),null!==b&&x()&&(p.push(yat({start:b,end:M,loop:d,count:a,style:f})),b=null),k=M,y=m));return null!==b&&p.push(yat({start:b,end:h,loop:d,count:a,style:f})),p}function bat(t,e){const n=[],r=t.segments;for(let i=0;i<r.length;i++){const o=vat(r[i],t.points,e);o.length&&n.push(...o)}return n}function wat(t,e,n,r){return r&&r.setContext&&n?function(t,e,n,r){const i=t._chart.getContext(),o=xat(t.options),{_datasetIndex:a,options:{spanGaps:s}}=t,l=n.length,u=[];let c=o,h=e[0].start,d=h;function f(t,e,r,i){const o=s?-1:1;if(t!==e){for(t+=l;n[t%l].skip;)t-=o;for(;n[e%l].skip;)e+=o;t%l!==e%l&&(u.push({start:t%l,end:e%l,loop:r,style:i}),c=i,h=e%l)}}for(const p of e){h=s?h:p.start;let t,e=n[h%l];for(d=h+1;d<=p.end;d++){const o=n[d%l];t=xat(r.setContext(wot(i,{type:"segment",p0:e,p1:o,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:a}))),Mat(t,c)&&f(h,d-1,p.loop,c),e=o,c=t}h<d-1&&f(h,d-1,p.loop,c)}return u}(t,e,n,r):e}function xat(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Mat(t,e){return e&&JSON.stringify(t)!==JSON.stringify(e)}var kat=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,n,r){const i=e.listeners[r],o=e.duration;i.forEach((r=>r({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(n-e.start,o)})))}_refresh(){this._request||(this._running=!0,this._request=art.call(window,(()=>{this._update(),this._request=null,this._running&&this._refresh()})))}_update(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),e=0;this._charts.forEach(((n,r)=>{if(!n.running||!n.items.length)return;const i=n.items;let o,a=i.length-1,s=!1;for(;a>=0;--a)o=i[a],o._active?(o._total>n.duration&&(n.duration=o._total),o.tick(t),s=!0):(i[a]=i[i.length-1],i.pop());s&&(r.draw(),this._notify(r,n,t,"progress")),i.length||(n.running=!1,this._notify(r,n,t,"complete"),n.initial=!1),e+=i.length})),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){const e=this._charts;let n=e.get(t);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,n)),n}listen(t,e,n){this._getAnims(t).listeners[e].push(n)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce(((t,e)=>Math.max(t,e._duration)),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const n=e.items;let r=n.length-1;for(;r>=0;--r)n[r].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}};const Sat="transparent",Cat={boolean:(t,e,n)=>n>.5?e:t,color(t,e,n){const r=Wit(t||Sat),i=r.valid&&Wit(e||Sat);return i&&i.valid?i.mix(r,n).hexString():e},number:(t,e,n)=>t+(e-t)*n};class Pat{constructor(t,e,n,r){const i=e[n];r=bot([t.to,r,i,t.from]);const o=bot([t.from,i,r]);this._active=!0,this._fn=t.fn||Cat[t.type||typeof o],this._easing=sit[t.easing]||sit.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=n,this._from=o,this._to=r,this._promises=void 0}active(){return this._active}update(t,e,n){if(this._active){this._notify(!1);const r=this._target[this._prop],i=n-this._start,o=this._duration-i;this._start=n,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=i,this._loop=!!t.loop,this._to=bot([t.to,e,r,t.from]),this._from=bot([t.from,r,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,n=this._duration,r=this._prop,i=this._from,o=this._loop,a=this._to;let s;if(this._active=i!==a&&(o||e<n),!this._active)return this._target[r]=a,void this._notify(!0);e<0?this._target[r]=i:(s=e/n%2,s=o&&s>1?2-s:s,s=this._easing(Math.min(1,Math.max(0,s))),this._target[r]=this._fn(i,a,s))}wait(){const t=this._promises||(this._promises=[]);return new Promise(((e,n)=>{t.push({res:e,rej:n})}))}_notify(t){const e=t?"res":"rej",n=this._promises||[];for(let r=0;r<n.length;r++)n[r][e]()}}Git.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});const Tat=Object.keys(Git.animation);Git.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),Git.set("animations",{colors:{type:"color",properties:["color","borderColor","backgroundColor"]},numbers:{type:"number",properties:["x","y","borderWidth","radius","tension"]}}),Git.describe("animations",{_fallback:"animation"}),Git.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}});class Aat{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!prt(t))return;const e=this._properties;Object.getOwnPropertyNames(t).forEach((n=>{const r=t[n];if(!prt(r))return;const i={};for(const t of Tat)i[t]=r[t];(frt(r.properties)&&r.properties||[n]).forEach((t=>{t!==n&&e.has(t)||e.set(t,i)}))}))}_animateOptions(t,e){const n=e.options,r=function(t,e){if(!e)return;let n=t.options;if(!n)return void(t.options=e);n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}}));return n}(t,n);if(!r)return[];const i=this._createAnimations(r,n);return n.$shared&&function(t,e){const n=[],r=Object.keys(e);for(let i=0;i<r.length;i++){const e=t[r[i]];e&&e.active()&&n.push(e.wait())}return Promise.all(n)}(t.options.$animations,n).then((()=>{t.options=n}),(()=>{})),i}_createAnimations(t,e){const n=this._properties,r=[],i=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let s;for(s=o.length-1;s>=0;--s){const l=o[s];if("$"===l.charAt(0))continue;if("options"===l){r.push(...this._animateOptions(t,e));continue}const u=e[l];let c=i[l];const h=n.get(l);if(c){if(h&&c.active()){c.update(h,u,a);continue}c.cancel()}h&&h.duration?(i[l]=c=new Pat(h,t,l,u),r.push(c)):t[l]=u}return r}update(t,e){if(0===this._properties.size)return void Object.assign(t,e);const n=this._createAnimations(t,e);return n.length?(kat.add(this._chart,n),!0):void 0}}function Nat(t,e){const n=t&&t.options||{},r=n.reverse,i=void 0===n.min?e:0,o=void 0===n.max?e:0;return{start:r?o:i,end:r?i:o}}function Oat(t,e){const n=[],r=t._getSortedDatasetMetas(e);let i,o;for(i=0,o=r.length;i<o;++i)n.push(r[i].index);return n}function jat(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i=t.keys,o="single"===r.mode;let a,s,l,u;if(null!==e){for(a=0,s=i.length;a<s;++a){if(l=+i[a],l===n){if(r.all)continue;break}u=t.values[l],mrt(u)&&(o||0===e||Wrt(e)===Wrt(u))&&(e+=u)}return e}}function Vat(t,e){const n=t&&t.options.stacked;return n||void 0===n&&void 0!==e.stack}function Eat(t,e,n){const r=t[e]||(t[e]={});return r[n]||(r[n]={})}function Iat(t,e,n,r){for(const i of e.getMatchingVisibleMetas(r).reverse()){const e=t[i.index];if(n&&e>0||!n&&e<0)return i.index}return null}function zat(t,e){const{chart:n,_cachedMeta:r}=t,i=n._stacks||(n._stacks={}),{iScale:o,vScale:a,index:s}=r,l=o.axis,u=a.axis,c=function(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}(o,a,r),h=e.length;let d;for(let f=0;f<h;++f){const t=e[f],{[l]:n,[u]:o}=t;d=(t._stacks||(t._stacks={}))[u]=Eat(i,c,n),d[s]=o,d._top=Iat(d,a,!0,r.type),d._bottom=Iat(d,a,!1,r.type)}}function Lat(t,e){const n=t.scales;return Object.keys(n).filter((t=>n[t].axis===e)).shift()}function Rat(t,e){const n=t.controller.index,r=t.vScale&&t.vScale.axis;if(r){e=e||t._parsed;for(const t of e){const e=t._stacks;if(!e||void 0===e[r]||void 0===e[r][n])return;delete e[r][n]}}}const Hat=t=>"reset"===t||"none"===t,Bat=(t,e)=>e?t:Object.assign({},t);class Dat{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Vat(t.vScale,t),this.addElements()}updateIndex(t){this.index!==t&&Rat(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,n=this.getDataset(),r=(t,e,n,r)=>"x"===t?e:"r"===t?r:n,i=e.xAxisID=yrt(n.xAxisID,Lat(t,"x")),o=e.yAxisID=yrt(n.yAxisID,Lat(t,"y")),a=e.rAxisID=yrt(n.rAxisID,Lat(t,"r")),s=e.indexAxis,l=e.iAxisID=r(s,i,o,a),u=e.vAxisID=r(s,o,i,a);e.xScale=this.getScaleForId(i),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Cot(this._data,this),t._stacked&&Rat(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),n=this._data;if(prt(e))this._data=function(t){const e=Object.keys(t),n=new Array(e.length);let r,i,o;for(r=0,i=e.length;r<i;++r)o=e[r],n[r]={x:o,y:t[o]};return n}(e);else if(n!==e){if(n){Cot(n,this);const t=this._cachedMeta;Rat(t),t._parsed=[]}e&&Object.isExtensible(e)&&function(t,e){t._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Sot.forEach((e=>{const n="_onData"+Ort(e),r=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(){for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];const a=r.apply(this,i);return t._chartjs.listeners.forEach((t=>{"function"===typeof t[n]&&t[n](...i)})),a}})})))}(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,n=this.getDataset();let r=!1;this._dataCheck();const i=e._stacked;e._stacked=Vat(e.vScale,e),e.stack!==n.stack&&(r=!0,Rat(e),e.stack=n.stack),this._resyncElements(t),(r||i!==e._stacked)&&zat(this,e._parsed)}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),n=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:n,_data:r}=this,{iScale:i,_stacked:o}=n,a=i.axis;let s,l,u,c=0===t&&e===r.length||n._sorted,h=t>0&&n._parsed[t-1];if(!1===this._parsing)n._parsed=r,n._sorted=!0,u=r;else{u=frt(r[t])?this.parseArrayData(n,r,t,e):prt(r[t])?this.parseObjectData(n,r,t,e):this.parsePrimitiveData(n,r,t,e);const i=()=>null===l[a]||h&&l[a]<h[a];for(s=0;s<e;++s)n._parsed[s+t]=l=u[s],c&&(i()&&(c=!1),h=l);n._sorted=c}o&&zat(this,u)}parsePrimitiveData(t,e,n,r){const{iScale:i,vScale:o}=t,a=i.axis,s=o.axis,l=i.getLabels(),u=i===o,c=new Array(r);let h,d,f;for(h=0,d=r;h<d;++h)f=h+n,c[h]={[a]:u||i.parse(l[f],f),[s]:o.parse(e[f],f)};return c}parseArrayData(t,e,n,r){const{xScale:i,yScale:o}=t,a=new Array(r);let s,l,u,c;for(s=0,l=r;s<l;++s)u=s+n,c=e[u],a[s]={x:i.parse(c[0],u),y:o.parse(c[1],u)};return a}parseObjectData(t,e,n,r){const{xScale:i,yScale:o}=t,{xAxisKey:a="x",yAxisKey:s="y"}=this._parsing,l=new Array(r);let u,c,h,d;for(u=0,c=r;u<c;++u)h=u+n,d=e[h],l[u]={x:i.parse(Nrt(d,a),h),y:o.parse(Nrt(d,s),h)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,n){const r=this.chart,i=this._cachedMeta,o=e[t.axis];return jat({keys:Oat(r,!0),values:e._stacks[t.axis]},o,i.index,{mode:n})}updateRangeFromParsed(t,e,n,r){const i=n[e.axis];let o=null===i?NaN:i;const a=r&&n._stacks[e.axis];r&&a&&(r.values=a,o=jat(r,i,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const n=this._cachedMeta,r=n._parsed,i=n._sorted&&t===n.iScale,o=r.length,a=this._getOtherScale(t),s=((t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:Oat(n,!0),values:null})(e,n,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:c}=function(t){const{min:e,max:n,minDefined:r,maxDefined:i}=t.getUserBounds();return{min:r?e:Number.NEGATIVE_INFINITY,max:i?n:Number.POSITIVE_INFINITY}}(a);let h,d;function f(){d=r[h];const e=d[a.axis];return!mrt(d[t.axis])||u>e||c<e}for(h=0;h<o&&(f()||(this.updateRangeFromParsed(l,t,d,s),!i));++h);if(i)for(h=o-1;h>=0;--h)if(!f()){this.updateRangeFromParsed(l,t,d,s);break}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,n=[];let r,i,o;for(r=0,i=e.length;r<i;++r)o=e[r][t.axis],mrt(o)&&n.push(o);return n}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,n=e.iScale,r=e.vScale,i=this.getParsed(t);return{label:n?""+n.getLabelForValue(i[n.axis]):"",value:r?""+r.getLabelForValue(i[r.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=function(t){let e,n,r,i;return prt(t)?(e=t.top,n=t.right,r=t.bottom,i=t.left):e=n=r=i=t,{top:e,right:n,bottom:r,left:i,disabled:!1===t}}(yrt(this.options.clip,function(t,e,n){if(!1===n)return!1;const r=Nat(t,n),i=Nat(e,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,n=this._cachedMeta,r=n.data||[],i=e.chartArea,o=[],a=this._drawStart||0,s=this._drawCount||r.length-a,l=this.options.drawActiveElementsOnTop;let u;for(n.dataset&&n.dataset.draw(t,i,a,s),u=a;u<a+s;++u){const e=r[u];e.hidden||(e.active&&l?o.push(e):e.draw(t,i))}for(u=0;u<o.length;++u)o[u].draw(t,i)}getStyle(t,e){const n=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(t||0,n)}getContext(t,e,n){const r=this.getDataset();let i;if(t>=0&&t<this._cachedMeta.data.length){const e=this._cachedMeta.data[t];i=e.$context||(e.$context=function(t,e,n){return wot(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}(this.getContext(),t,e)),i.parsed=this.getParsed(t),i.raw=r.data[t],i.index=i.dataIndex=t}else i=this.$context||(this.$context=function(t,e){return wot(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}(this.chart.getContext(),this.index)),i.dataset=r,i.index=i.datasetIndex=this.index;return i.active=!!e,i.mode=n,i}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2?arguments[2]:void 0;const r="active"===e,i=this._cachedDataOpts,o=t+"-"+e,a=i[o],s=this.enableOptionSharing&&jrt(n);if(a)return Bat(a,s);const l=this.chart.config,u=l.datasetElementScopeKeys(this._type,t),c=r?[`${t}Hover`,"hover",t,""]:[t,""],h=l.getOptionScopes(this.getDataset(),u),d=Object.keys(Git.elements[t]),f=l.resolveNamedOptions(h,d,(()=>this.getContext(n,r)),c);return f.$shared&&(f.$shared=s,i[o]=Object.freeze(Bat(f,s))),f}_resolveAnimations(t,e,n){const r=this.chart,i=this._cachedDataOpts,o=`animation-${e}`,a=i[o];if(a)return a;let s;if(!1!==r.options.animation){const r=this.chart.config,i=r.datasetAnimationScopeKeys(this._type,e),o=r.getOptionScopes(this.getDataset(),i);s=r.createResolver(o,this.getContext(t,n,e))}const l=new Aat(r,s&&s.animations);return s&&s._cacheable&&(i[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Hat(t)||this.chart._animationsDisabled}updateElement(t,e,n,r){Hat(r)?Object.assign(t,n):this._resolveAnimations(e,r).update(t,n)}updateSharedOptions(t,e,n){t&&!Hat(e)&&this._resolveAnimations(void 0,e).update(t,n)}_setStyle(t,e,n,r){t.active=r;const i=this.getStyle(e,r);this._resolveAnimations(e,n,r).update(t,{options:!r&&this.getSharedOptions(i)||i})}removeHoverStyle(t,e,n){this._setStyle(t,n,"active",!1)}setHoverStyle(t,e,n){this._setStyle(t,n,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,n=this._cachedMeta.data;for(const[a,s,l]of this._syncList)this[a](s,l);this._syncList=[];const r=n.length,i=e.length,o=Math.min(i,r);o&&this.parse(0,o),i>r?this._insertElements(r,i-r,t):i<r&&this._removeElements(i,r-i)}_insertElements(t,e){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=this._cachedMeta,i=r.data,o=t+e;let a;const s=t=>{for(t.length+=e,a=t.length-1;a>=o;a--)t[a]=t[a-e]};for(s(i),a=t;a<o;++a)i[a]=new this.dataElementType;this._parsing&&s(r._parsed),this.parse(t,e),n&&this.updateElements(i,t,e,"reset")}updateElements(t,e,n,r){}_removeElements(t,e){const n=this._cachedMeta;if(this._parsing){const r=n._parsed.splice(t,e);n._stacked&&Rat(n,r)}n.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,n,r]=t;this[e](n,r)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const n=arguments.length-2;n&&this._sync(["_insertElements",t,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function Fat(t){const e=t.iScale,n=function(t,e){if(!t._cache.$bar){const n=t.getMatchingVisibleMetas(e);let r=[];for(let e=0,i=n.length;e<i;e++)r=r.concat(n[e].controller.getAllParsedValues(t));t._cache.$bar=Pot(r.sort(((t,e)=>t-e)))}return t._cache.$bar}(e,t.type);let r,i,o,a,s=e._length;const l=()=>{32767!==o&&-32768!==o&&(jrt(a)&&(s=Math.min(s,Math.abs(o-a)||s)),a=o)};for(r=0,i=n.length;r<i;++r)o=e.getPixelForValue(n[r]),l();for(a=void 0,r=0,i=e.ticks.length;r<i;++r)o=e.getPixelForTick(r),l();return s}function Uat(t,e,n,r){return frt(t)?function(t,e,n,r){const i=n.parse(t[0],r),o=n.parse(t[1],r),a=Math.min(i,o),s=Math.max(i,o);let l=a,u=s;Math.abs(a)>Math.abs(s)&&(l=s,u=a),e[n.axis]=u,e._custom={barStart:l,barEnd:u,start:i,end:o,min:a,max:s}}(t,e,n,r):e[n.axis]=n.parse(t,r),e}function Wat(t,e,n,r){const i=t.iScale,o=t.vScale,a=i.getLabels(),s=i===o,l=[];let u,c,h,d;for(u=n,c=n+r;u<c;++u)d=e[u],h={},h[i.axis]=s||i.parse(a[u],u),l.push(Uat(d,h,o,u));return l}function qat(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}function Xat(t,e,n,r){let i=e.borderSkipped;const o={};if(!i)return void(t.borderSkipped=o);const{start:a,end:s,reverse:l,top:u,bottom:c}=function(t){let e,n,r,i,o;return t.horizontal?(e=t.base>t.x,n="left",r="right"):(e=t.base<t.y,n="bottom",r="top"),e?(i="end",o="start"):(i="start",o="end"),{start:n,end:r,reverse:e,top:i,bottom:o}}(t);"middle"===i&&n&&(t.enableBorderRadius=!0,(n._top||0)===r?i=u:(n._bottom||0)===r?i=c:(o[Zat(c,a,s,l)]=!0,i=u)),o[Zat(i,a,s,l)]=!0,t.borderSkipped=o}function Zat(t,e,n,r){return r?(t=function(t,e,n){return t===e?n:t===n?e:t}(t,e,n),t=Yat(t,n,e)):t=Yat(t,e,n),t}function Yat(t,e,n){return"start"===t?e:"end"===t?n:t}function Kat(t,e,n){let{inflateAmount:r}=e;t.inflateAmount="auto"===r?1===n?.33:0:r}Dat.defaults={},Dat.prototype.datasetElementType=null,Dat.prototype.dataElementType=null;class Gat extends Dat{parsePrimitiveData(t,e,n,r){return Wat(t,e,n,r)}parseArrayData(t,e,n,r){return Wat(t,e,n,r)}parseObjectData(t,e,n,r){const{iScale:i,vScale:o}=t,{xAxisKey:a="x",yAxisKey:s="y"}=this._parsing,l="x"===i.axis?a:s,u="x"===o.axis?a:s,c=[];let h,d,f,p;for(h=n,d=n+r;h<d;++h)p=e[h],f={},f[i.axis]=i.parse(Nrt(p,l),h),c.push(Uat(Nrt(p,u),f,o,h));return c}updateRangeFromParsed(t,e,n,r){super.updateRangeFromParsed(t,e,n,r);const i=n._custom;i&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,i.min),t.max=Math.max(t.max,i.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:n,vScale:r}=e,i=this.getParsed(t),o=i._custom,a=qat(o)?"["+o.start+", "+o.end+"]":""+r.getLabelForValue(i[r.axis]);return{label:""+n.getLabelForValue(i[n.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();this._cachedMeta.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,n,r){const i="reset"===r,{index:o,_cachedMeta:{vScale:a}}=this,s=a.getBasePixel(),l=a.isHorizontal(),u=this._getRuler(),c=this.resolveDataElementOptions(e,r),h=this.getSharedOptions(c),d=this.includeOptions(r,h);this.updateSharedOptions(h,r,c);for(let f=e;f<e+n;f++){const e=this.getParsed(f),n=i||drt(e[a.axis])?{base:s,head:s}:this._calculateBarValuePixels(f),c=this._calculateBarIndexPixels(f,u),p=(e._stacks||{})[a.axis],m={horizontal:l,base:n.base,enableBorderRadius:!p||qat(e._custom)||o===p._top||o===p._bottom,x:l?n.head:c.center,y:l?c.center:n.head,height:l?c.size:Math.abs(n.size),width:l?Math.abs(n.size):c.size};d&&(m.options=h||this.resolveDataElementOptions(f,t[f].active?"active":r));const g=m.options||t[f].options;Xat(m,g,p,o),Kat(m,g,u.ratio),this.updateElement(t[f],f,m,r)}}_getStacks(t,e){const n=this._cachedMeta.iScale,r=n.getMatchingVisibleMetas(this._type),i=n.options.stacked,o=r.length,a=[];let s,l;for(s=0;s<o;++s)if(l=r[s],l.controller.options.grouped){if("undefined"!==typeof e){const t=l.controller.getParsed(e)[l.controller._cachedMeta.vScale.axis];if(drt(t)||isNaN(t))continue}if((!1===i||-1===a.indexOf(l.stack)||void 0===i&&void 0===l.stack)&&a.push(l.stack),l.index===t)break}return a.length||a.push(void 0),a}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,n){const r=this._getStacks(t,n),i=void 0!==e?r.indexOf(e):-1;return-1===i?r.length-1:i}_getRuler(){const t=this.options,e=this._cachedMeta,n=e.iScale,r=[];let i,o;for(i=0,o=e.data.length;i<o;++i)r.push(n.getPixelForValue(this.getParsed(i)[n.axis],i));const a=t.barThickness;return{min:a||Fat(e),pixels:r,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:n},options:{base:r,minBarLength:i}}=this,o=r||0,a=this.getParsed(t),s=a._custom,l=qat(s);let u,c,h=a[e.axis],d=0,f=n?this.applyStack(e,a,n):h;f!==h&&(d=f-h,f=h),l&&(h=s.barStart,f=s.barEnd-s.barStart,0!==h&&Wrt(h)!==Wrt(s.barEnd)&&(d=0),d+=h);const p=drt(r)||l?d:r;let m=e.getPixelForValue(p);if(u=this.chart.getDataVisibility(t)?e.getPixelForValue(d+f):m,c=u-m,Math.abs(c)<i){c=function(t,e,n){return 0!==t?Wrt(t):(e.isHorizontal()?1:-1)*(e.min>=n?1:-1)}(c,e,o)*i,h===o&&(m-=c/2);const t=e.getPixelForDecimal(0),n=e.getPixelForDecimal(1),r=Math.min(t,n),a=Math.max(t,n);m=Math.max(Math.min(m,a),r),u=m+c}if(m===e.getPixelForValue(o)){const t=Wrt(c)*e.getLineWidthForValue(o)/2;m+=t,c-=t}return{size:c,base:m,head:u,center:u+c/2}}_calculateBarIndexPixels(t,e){const n=e.scale,r=this.options,i=r.skipNull,o=yrt(r.maxBarThickness,1/0);let a,s;if(e.grouped){const n=i?this._getStackCount(t):e.stackCount,l="flex"===r.barThickness?function(t,e,n,r){const i=e.pixels,o=i[t];let a=t>0?i[t-1]:null,s=t<i.length-1?i[t+1]:null;const l=n.categoryPercentage;null===a&&(a=o-(null===s?e.end-e.start:s-o)),null===s&&(s=o+o-a);const u=o-(o-Math.min(a,s))/2*l;return{chunk:Math.abs(s-a)/2*l/r,ratio:n.barPercentage,start:u}}(t,e,r,n):function(t,e,n,r){const i=n.barThickness;let o,a;return drt(i)?(o=e.min*n.categoryPercentage,a=n.barPercentage):(o=i*r,a=1),{chunk:o/r,ratio:a,start:e.pixels[t]-o/2}}(t,e,r,n),u=this._getStackIndex(this.index,this._cachedMeta.stack,i?t:void 0);a=l.start+l.chunk*u+l.chunk/2,s=Math.min(o,l.chunk*l.ratio)}else a=n.getPixelForValue(this.getParsed(t)[n.axis],t),s=Math.min(o,e.min*e.ratio);return{base:a-s/2,head:a+s/2,center:a,size:s}}draw(){const t=this._cachedMeta,e=t.vScale,n=t.data,r=n.length;let i=0;for(;i<r;++i)null!==this.getParsed(i)[e.axis]&&n[i].draw(this._ctx)}}Gat.id="bar",Gat.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}},Gat.overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};class Jat extends Dat{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,n,r){const i=super.parsePrimitiveData(t,e,n,r);for(let o=0;o<i.length;o++)i[o]._custom=this.resolveDataElementOptions(o+n).radius;return i}parseArrayData(t,e,n,r){const i=super.parseArrayData(t,e,n,r);for(let o=0;o<i.length;o++){const t=e[n+o];i[o]._custom=yrt(t[2],this.resolveDataElementOptions(o+n).radius)}return i}parseObjectData(t,e,n,r){const i=super.parseObjectData(t,e,n,r);for(let o=0;o<i.length;o++){const t=e[n+o];i[o]._custom=yrt(t&&t.r&&+t.r,this.resolveDataElementOptions(o+n).radius)}return i}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let n=t.length-1;n>=0;--n)e=Math.max(e,t[n].size(this.resolveDataElementOptions(n))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,{xScale:n,yScale:r}=e,i=this.getParsed(t),o=n.getLabelForValue(i.x),a=r.getLabelForValue(i.y),s=i._custom;return{label:e.label,value:"("+o+", "+a+(s?", "+s:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,n,r){const i="reset"===r,{iScale:o,vScale:a}=this._cachedMeta,s=this.resolveDataElementOptions(e,r),l=this.getSharedOptions(s),u=this.includeOptions(r,l),c=o.axis,h=a.axis;for(let d=e;d<e+n;d++){const e=t[d],n=!i&&this.getParsed(d),s={},l=s[c]=i?o.getPixelForDecimal(.5):o.getPixelForValue(n[c]),f=s[h]=i?a.getBasePixel():a.getPixelForValue(n[h]);s.skip=isNaN(l)||isNaN(f),u&&(s.options=this.resolveDataElementOptions(d,e.active?"active":r),i&&(s.options.radius=0)),this.updateElement(e,d,s,r)}this.updateSharedOptions(l,r,s)}resolveDataElementOptions(t,e){const n=this.getParsed(t);let r=super.resolveDataElementOptions(t,e);r.$shared&&(r=Object.assign({},r,{$shared:!1}));const i=r.radius;return"active"!==e&&(r.radius=0),r.radius+=yrt(n&&n._custom,i),r}}Jat.id="bubble",Jat.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}},Jat.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title:()=>""}}}};class Qat extends Dat{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const n=this.getDataset().data,r=this._cachedMeta;if(!1===this._parsing)r._parsed=n;else{let i,o,a=t=>+n[t];if(prt(n[t])){const{key:t="value"}=this._parsing;a=e=>+Nrt(n[e],t)}for(i=t,o=t+e;i<o;++i)r._parsed[i]=a(i)}}_getRotation(){return Krt(this.options.rotation-90)}_getCircumference(){return Krt(this.options.circumference)}_getRotationExtents(){let t=zrt,e=-zrt;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)){const r=this.chart.getDatasetMeta(n).controller,i=r._getRotation(),o=r._getCircumference();t=Math.min(t,i),e=Math.max(e,i+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:n}=e,r=this._cachedMeta,i=r.data,o=this.getMaxBorderWidth()+this.getMaxOffset(i)+this.options.spacing,a=Math.max((Math.min(n.width,n.height)-o)/2,0),s=Math.min(((t,e)=>"string"===typeof t&&t.endsWith("%")?parseFloat(t)/100:t/e)(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:u,rotation:c}=this._getRotationExtents(),{ratioX:h,ratioY:d,offsetX:f,offsetY:p}=function(t,e,n){let r=1,i=1,o=0,a=0;if(e<zrt){const s=t,l=s+e,u=Math.cos(s),c=Math.sin(s),h=Math.cos(l),d=Math.sin(l),f=(t,e,r)=>eit(t,s,l,!0)?1:Math.max(e,e*n,r,r*n),p=(t,e,r)=>eit(t,s,l,!0)?-1:Math.min(e,e*n,r,r*n),m=f(0,u,h),g=f(Brt,c,d),y=p(Irt,u,h),v=p(Irt+Brt,c,d);r=(m-y)/2,i=(g-v)/2,o=-(m+y)/2,a=-(g+v)/2}return{ratioX:r,ratioY:i,offsetX:o,offsetY:a}}(c,u,s),m=(n.width-o)/h,g=(n.height-o)/d,y=Math.max(Math.min(m,g)/2,0),v=vrt(this.options.radius,y),b=(v-Math.max(v*s,0))/this._getVisibleDatasetWeightTotal();this.offsetX=f*v,this.offsetY=p*v,r.total=this.calculateTotal(),this.outerRadius=v-b*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-b*l,0),this.updateElements(i,0,i.length,t)}_circumference(t,e){const n=this.options,r=this._cachedMeta,i=this._getCircumference();return e&&n.animation.animateRotate||!this.chart.getDataVisibility(t)||null===r._parsed[t]||r.data[t].hidden?0:this.calculateCircumference(r._parsed[t]*i/zrt)}updateElements(t,e,n,r){const i="reset"===r,o=this.chart,a=o.chartArea,s=o.options.animation,l=(a.left+a.right)/2,u=(a.top+a.bottom)/2,c=i&&s.animateScale,h=c?0:this.innerRadius,d=c?0:this.outerRadius,f=this.resolveDataElementOptions(e,r),p=this.getSharedOptions(f),m=this.includeOptions(r,p);let g,y=this._getRotation();for(g=0;g<e;++g)y+=this._circumference(g,i);for(g=e;g<e+n;++g){const e=this._circumference(g,i),n=t[g],o={x:l+this.offsetX,y:u+this.offsetY,startAngle:y,endAngle:y+e,circumference:e,outerRadius:d,innerRadius:h};m&&(o.options=p||this.resolveDataElementOptions(g,n.active?"active":r)),y+=e,this.updateElement(n,g,o,r)}this.updateSharedOptions(p,r,f)}calculateTotal(){const t=this._cachedMeta,e=t.data;let n,r=0;for(n=0;n<e.length;n++){const i=t._parsed[n];null===i||isNaN(i)||!this.chart.getDataVisibility(n)||e[n].hidden||(r+=Math.abs(i))}return r}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?zrt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,n=this.chart,r=n.data.labels||[],i=dat(e._parsed[t],n.options.locale);return{label:r[t]||"",value:i}}getMaxBorderWidth(t){let e=0;const n=this.chart;let r,i,o,a,s;if(!t)for(r=0,i=n.data.datasets.length;r<i;++r)if(n.isDatasetVisible(r)){o=n.getDatasetMeta(r),t=o.data,a=o.controller;break}if(!t)return 0;for(r=0,i=t.length;r<i;++r)s=a.resolveDataElementOptions(r),"inner"!==s.borderAlign&&(e=Math.max(e,s.borderWidth||0,s.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let n=0,r=t.length;n<r;++n){const t=this.resolveDataElementOptions(n);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let n=0;n<t;++n)this.chart.isDatasetVisible(n)&&(e+=this._getRingWeight(n));return e}_getRingWeight(t){return Math.max(yrt(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}Qat.id="doughnut",Qat.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"},Qat.descriptors={_scriptable:t=>"spacing"!==t,_indexable:t=>"spacing"!==t},Qat.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:n}}=t.legend.options;return e.labels.map(((e,r)=>{const i=t.getDatasetMeta(0).controller.getStyle(r);return{text:e,fillStyle:i.backgroundColor,strokeStyle:i.borderColor,lineWidth:i.borderWidth,pointStyle:n,hidden:!t.getDataVisibility(r),index:r}}))}return[]}},onClick(t,e,n){n.chart.toggleDataVisibility(e.index),n.chart.update()}},tooltip:{callbacks:{title:()=>"",label(t){let e=t.label;const n=": "+t.formattedValue;return frt(e)?(e=e.slice(),e[0]+=n):e+=n,e}}}}};class _at extends Dat{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:n,data:r=[],_dataset:i}=e,o=this.chart._animationsDisabled;let{start:a,count:s}=function(t,e,n){const r=e.length;let i=0,o=r;if(t._sorted){const{iScale:a,_parsed:s}=t,l=a.axis,{min:u,max:c,minDefined:h,maxDefined:d}=a.getUserBounds();h&&(i=nit(Math.min(Mot(s,a.axis,u).lo,n?r:Mot(e,l,a.getPixelForValue(u)).lo),0,r-1)),o=d?nit(Math.max(Mot(s,a.axis,c).hi+1,n?0:Mot(e,l,a.getPixelForValue(c)).hi+1),i,r)-i:r-i}return{start:i,count:o}}(e,r,o);this._drawStart=a,this._drawCount=s,function(t){const{xScale:e,yScale:n,_scaleRanges:r}=t,i={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!r)return t._scaleRanges=i,!0;const o=r.xmin!==e.min||r.xmax!==e.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),o}(e)&&(a=0,s=r.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!i._decimated,n.points=r;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(n,void 0,{animated:!o,options:l},t),this.updateElements(r,a,s,t)}updateElements(t,e,n,r){const i="reset"===r,{iScale:o,vScale:a,_stacked:s,_dataset:l}=this._cachedMeta,u=this.resolveDataElementOptions(e,r),c=this.getSharedOptions(u),h=this.includeOptions(r,c),d=o.axis,f=a.axis,{spanGaps:p,segment:m}=this.options,g=Xrt(p)?p:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||i||"none"===r;let v=e>0&&this.getParsed(e-1);for(let b=e;b<e+n;++b){const e=t[b],n=this.getParsed(b),u=y?e:{},p=drt(n[f]),w=u[d]=o.getPixelForValue(n[d],b),x=u[f]=i||p?a.getBasePixel():a.getPixelForValue(s?this.applyStack(a,n,s):n[f],b);u.skip=isNaN(w)||isNaN(x)||p,u.stop=b>0&&Math.abs(n[d]-v[d])>g,m&&(u.parsed=n,u.raw=l.data[b]),h&&(u.options=c||this.resolveDataElementOptions(b,e.active?"active":r)),y||this.updateElement(e,b,u,r),v=n}this.updateSharedOptions(c,r,u)}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,n=e.options&&e.options.borderWidth||0,r=t.data||[];if(!r.length)return n;const i=r[0].size(this.resolveDataElementOptions(0)),o=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(n,i,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}_at.id="line",_at.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1},_at.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};class $at extends Dat{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,n=this.chart,r=n.data.labels||[],i=dat(e._parsed[t].r,n.options.locale);return{label:r[t]||"",value:i}}parseObjectData(t,e,n,r){return Fot.bind(this)(t,e,n,r)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach(((t,n)=>{const r=this.getParsed(n).r;!isNaN(r)&&this.chart.getDataVisibility(n)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))})),e}_updateRadius(){const t=this.chart,e=t.chartArea,n=t.options,r=Math.min(e.right-e.left,e.bottom-e.top),i=Math.max(r/2,0),o=(i-Math.max(n.cutoutPercentage?i/100*n.cutoutPercentage:1,0))/t.getVisibleDatasetCount();this.outerRadius=i-o*this.index,this.innerRadius=this.outerRadius-o}updateElements(t,e,n,r){const i="reset"===r,o=this.chart,a=o.options.animation,s=this._cachedMeta.rScale,l=s.xCenter,u=s.yCenter,c=s.getIndexAngle(0)-.5*Irt;let h,d=c;const f=360/this.countVisibleElements();for(h=0;h<e;++h)d+=this._computeAngle(h,r,f);for(h=e;h<e+n;h++){const e=t[h];let n=d,p=d+this._computeAngle(h,r,f),m=o.getDataVisibility(h)?s.getDistanceFromCenterForValue(this.getParsed(h).r):0;d=p,i&&(a.animateScale&&(m=0),a.animateRotate&&(n=p=c));const g={x:l,y:u,innerRadius:0,outerRadius:m,startAngle:n,endAngle:p,options:this.resolveDataElementOptions(h,e.active?"active":r)};this.updateElement(e,h,g,r)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach(((t,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&e++})),e}_computeAngle(t,e,n){return this.chart.getDataVisibility(t)?Krt(this.resolveDataElementOptions(t,e).angle||n):0}}$at.id="polarArea",$at.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0},$at.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:n}}=t.legend.options;return e.labels.map(((e,r)=>{const i=t.getDatasetMeta(0).controller.getStyle(r);return{text:e,fillStyle:i.backgroundColor,strokeStyle:i.borderColor,lineWidth:i.borderWidth,pointStyle:n,hidden:!t.getDataVisibility(r),index:r}}))}return[]}},onClick(t,e,n){n.chart.toggleDataVisibility(e.index),n.chart.update()}},tooltip:{callbacks:{title:()=>"",label:t=>t.chart.data.labels[t.dataIndex]+": "+t.formattedValue}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};class tst extends Qat{}tst.id="pie",tst.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class est extends Dat{getLabelAndValue(t){const e=this._cachedMeta.vScale,n=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(n[e.axis])}}parseObjectData(t,e,n,r){return Fot.bind(this)(t,e,n,r)}update(t){const e=this._cachedMeta,n=e.dataset,r=e.data||[],i=e.iScale.getLabels();if(n.points=r,"resize"!==t){const e=this.resolveDatasetElementOptions(t);this.options.showLine||(e.borderWidth=0);const o={_loop:!0,_fullLoop:i.length===r.length,options:e};this.updateElement(n,void 0,o,t)}this.updateElements(r,0,r.length,t)}updateElements(t,e,n,r){const i=this._cachedMeta.rScale,o="reset"===r;for(let a=e;a<e+n;a++){const e=t[a],n=this.resolveDataElementOptions(a,e.active?"active":r),s=i.getPointPositionForValue(a,this.getParsed(a).r),l=o?i.xCenter:s.x,u=o?i.yCenter:s.y,c={x:l,y:u,angle:s.angle,skip:isNaN(l)||isNaN(u),options:n};this.updateElement(e,a,c,r)}}}est.id="radar",est.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}},est.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};class nst extends _at{}nst.id="scatter",nst.defaults={showLine:!1,fill:!1},nst.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title:()=>"",label:t=>"("+t.label+", "+t.formattedValue+")"}}},scales:{x:{type:"linear"},y:{type:"linear"}}};function rst(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class ist{constructor(t){this.options=t||{}}formats(){return rst()}parse(t,e){return rst()}format(t,e){return rst()}add(t,e,n){return rst()}diff(t,e,n){return rst()}startOf(t,e,n){return rst()}endOf(t,e){return rst()}}ist.override=function(t){Object.assign(ist.prototype,t)};var ost={_date:ist};function ast(t,e,n,r){const{controller:i,data:o,_sorted:a}=t,s=i._cachedMeta.iScale;if(s&&e===s.axis&&"r"!==e&&a&&o.length){const t=s._reversePixels?kot:Mot;if(!r)return t(o,e,n);if(i._sharedOptions){const r=o[0],i="function"===typeof r.getRange&&r.getRange(e);if(i){const r=t(o,e,n-i),a=t(o,e,n+i);return{lo:r.lo,hi:a.hi}}}}return{lo:0,hi:o.length-1}}function sst(t,e,n,r,i){const o=t.getSortedVisibleDatasetMetas(),a=n[e];for(let s=0,l=o.length;s<l;++s){const{index:t,data:n}=o[s],{lo:l,hi:u}=ast(o[s],e,a,i);for(let e=l;e<=u;++e){const i=n[e];i.skip||r(i,t,e)}}}function lst(t,e,n,r,i){const o=[];if(!i&&!t.isPointInArea(e))return o;return sst(t,n,e,(function(n,a,s){(i||eot(n,t.chartArea,0))&&n.inRange(e.x,e.y,r)&&o.push({element:n,datasetIndex:a,index:s})}),!0),o}function ust(t,e,n,r,i,o){let a=[];const s=function(t){const e=-1!==t.indexOf("x"),n=-1!==t.indexOf("y");return function(t,r){const i=e?Math.abs(t.x-r.x):0,o=n?Math.abs(t.y-r.y):0;return Math.sqrt(Math.pow(i,2)+Math.pow(o,2))}}(n);let l=Number.POSITIVE_INFINITY;return sst(t,n,e,(function(n,u,c){const h=n.inRange(e.x,e.y,i);if(r&&!h)return;const d=n.getCenterPoint(i);if(!(!!o||t.isPointInArea(d))&&!h)return;const f=s(e,d);f<l?(a=[{element:n,datasetIndex:u,index:c}],l=f):f===l&&a.push({element:n,datasetIndex:u,index:c})})),a}function cst(t,e,n,r,i,o){return o||t.isPointInArea(e)?"r"!==n||r?ust(t,e,n,r,i,o):function(t,e,n,r){let i=[];return sst(t,n,e,(function(t,n,o){const{startAngle:a,endAngle:s}=t.getProps(["startAngle","endAngle"],r),{angle:l}=Qrt(t,{x:e.x,y:e.y});eit(l,a,s)&&i.push({element:t,datasetIndex:n,index:o})})),i}(t,e,n,i):[]}function hst(t,e,n,r,i){const o=[],a="x"===n?"inXRange":"inYRange";let s=!1;return sst(t,n,e,((t,r,l)=>{t[a](e[n],i)&&(o.push({element:t,datasetIndex:r,index:l}),s=s||t.inRange(e.x,e.y,i))})),r&&!s?[]:o}var dst={evaluateInteractionItems:sst,modes:{index(t,e,n,r){const i=nat(e,t),o=n.axis||"x",a=n.includeInvisible||!1,s=n.intersect?lst(t,i,o,r,a):cst(t,i,o,!1,r,a),l=[];return s.length?(t.getSortedVisibleDatasetMetas().forEach((t=>{const e=s[0].index,n=t.data[e];n&&!n.skip&&l.push({element:n,datasetIndex:t.index,index:e})})),l):[]},dataset(t,e,n,r){const i=nat(e,t),o=n.axis||"xy",a=n.includeInvisible||!1;let s=n.intersect?lst(t,i,o,r,a):cst(t,i,o,!1,r,a);if(s.length>0){const e=s[0].datasetIndex,n=t.getDatasetMeta(e).data;s=[];for(let t=0;t<n.length;++t)s.push({element:n[t],datasetIndex:e,index:t})}return s},point:(t,e,n,r)=>lst(t,nat(e,t),n.axis||"xy",r,n.includeInvisible||!1),nearest(t,e,n,r){const i=nat(e,t),o=n.axis||"xy",a=n.includeInvisible||!1;return cst(t,i,o,n.intersect,r,a)},x:(t,e,n,r)=>hst(t,nat(e,t),"x",n.intersect,r),y:(t,e,n,r)=>hst(t,nat(e,t),"y",n.intersect,r)}};const fst=["left","top","right","bottom"];function pst(t,e){return t.filter((t=>t.pos===e))}function mst(t,e){return t.filter((t=>-1===fst.indexOf(t.pos)&&t.box.axis===e))}function gst(t,e){return t.sort(((t,n)=>{const r=e?n:t,i=e?t:n;return r.weight===i.weight?r.index-i.index:r.weight-i.weight}))}function yst(t,e){const n=function(t){const e={};for(const n of t){const{stack:t,pos:r,stackWeight:i}=n;if(!t||!fst.includes(r))continue;const o=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=i}return e}(t),{vBoxMaxWidth:r,hBoxMaxHeight:i}=e;let o,a,s;for(o=0,a=t.length;o<a;++o){s=t[o];const{fullSize:a}=s.box,l=n[s.stack],u=l&&s.stackWeight/l.weight;s.horizontal?(s.width=u?u*r:a&&e.availableWidth,s.height=i):(s.width=r,s.height=u?u*i:a&&e.availableHeight)}return n}function vst(t,e,n,r){return Math.max(t[n],e[n])+Math.max(t[r],e[r])}function bst(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function wst(t,e,n,r){const{pos:i,box:o}=n,a=t.maxPadding;if(!prt(i)){n.size&&(t[i]-=n.size);const e=r[n.stack]||{size:0,count:1};e.size=Math.max(e.size,n.horizontal?o.height:o.width),n.size=e.size/e.count,t[i]+=n.size}o.getPadding&&bst(a,o.getPadding());const s=Math.max(0,e.outerWidth-vst(a,t,"left","right")),l=Math.max(0,e.outerHeight-vst(a,t,"top","bottom")),u=s!==t.w,c=l!==t.h;return t.w=s,t.h=l,n.horizontal?{same:u,other:c}:{same:c,other:u}}function xst(t,e){const n=e.maxPadding;function r(t){const r={left:0,top:0,right:0,bottom:0};return t.forEach((t=>{r[t]=Math.max(e[t],n[t])})),r}return r(t?["left","right"]:["top","bottom"])}function Mst(t,e,n,r){const i=[];let o,a,s,l,u,c;for(o=0,a=t.length,u=0;o<a;++o){s=t[o],l=s.box,l.update(s.width||e.w,s.height||e.h,xst(s.horizontal,e));const{same:a,other:h}=wst(e,n,s,r);u|=a&&i.length,c=c||h,l.fullSize||i.push(s)}return u&&Mst(i,e,n,r)||c}function kst(t,e,n,r,i){t.top=n,t.left=e,t.right=e+r,t.bottom=n+i,t.width=r,t.height=i}function Sst(t,e,n,r){const i=n.padding;let{x:o,y:a}=e;for(const s of t){const t=s.box,l=r[s.stack]||{count:1,placed:0,weight:1},u=s.stackWeight/l.weight||1;if(s.horizontal){const r=e.w*u,o=l.size||t.height;jrt(l.start)&&(a=l.start),t.fullSize?kst(t,i.left,a,n.outerWidth-i.right-i.left,o):kst(t,e.left+l.placed,a,r,o),l.start=a,l.placed+=r,a=t.bottom}else{const r=e.h*u,a=l.size||t.width;jrt(l.start)&&(o=l.start),t.fullSize?kst(t,o,i.top,a,n.outerHeight-i.bottom-i.top):kst(t,o,e.top+l.placed,a,r),l.start=o,l.placed+=r,o=t.right}}e.x=o,e.y=a}Git.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}});var Cst={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;-1!==n&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,r){if(!t)return;const i=yot(t.options.layout.padding),o=Math.max(e-i.width,0),a=Math.max(n-i.height,0),s=function(t){const e=function(t){const e=[];let n,r,i,o,a,s;for(n=0,r=(t||[]).length;n<r;++n)i=t[n],({position:o,options:{stack:a,stackWeight:s=1}}=i),e.push({index:n,box:i,pos:o,horizontal:i.isHorizontal(),weight:i.weight,stack:a&&o+a,stackWeight:s});return e}(t),n=gst(e.filter((t=>t.box.fullSize)),!0),r=gst(pst(e,"left"),!0),i=gst(pst(e,"right")),o=gst(pst(e,"top"),!0),a=gst(pst(e,"bottom")),s=mst(e,"x"),l=mst(e,"y");return{fullSize:n,leftAndTop:r.concat(o),rightAndBottom:i.concat(l).concat(a).concat(s),chartArea:pst(e,"chartArea"),vertical:r.concat(i).concat(l),horizontal:o.concat(a).concat(s)}}(t.boxes),l=s.vertical,u=s.horizontal;wrt(t.boxes,(t=>{"function"===typeof t.beforeLayout&&t.beforeLayout()}));const c=l.reduce(((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1),0)||1,h=Object.freeze({outerWidth:e,outerHeight:n,padding:i,availableWidth:o,availableHeight:a,vBoxMaxWidth:o/2/c,hBoxMaxHeight:a/2}),d=Object.assign({},i);bst(d,yot(r));const f=Object.assign({maxPadding:d,w:o,h:a,x:i.left,y:i.top},i),p=yst(l.concat(u),h);Mst(s.fullSize,f,h,p),Mst(l,f,h,p),Mst(u,f,h,p)&&Mst(l,f,h,p),function(t){const e=t.maxPadding;function n(n){const r=Math.max(e[n]-t[n],0);return t[n]+=r,r}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}(f),Sst(s.leftAndTop,f,h,p),f.x+=f.w,f.y+=f.h,Sst(s.rightAndBottom,f,h,p),t.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},wrt(s.chartArea,(e=>{const n=e.box;Object.assign(n,t.chartArea),n.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})}))}};class Pst{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,n){}removeEventListener(t,e,n){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,n,r){return e=Math.max(0,e||t.width),n=n||t.height,{width:e,height:Math.max(0,r?Math.floor(e/r):n)}}isAttached(t){return!0}updateConfig(t){}}class Tst extends Pst{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Ast={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Nst=t=>null===t||""===t;const Ost=!!aat&&{passive:!0};function jst(t,e,n){t.canvas.removeEventListener(e,n,Ost)}function Vst(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function Est(t,e,n){const r=t.canvas,i=new MutationObserver((t=>{let e=!1;for(const n of t)e=e||Vst(n.addedNodes,r),e=e&&!Vst(n.removedNodes,r);e&&n()}));return i.observe(document,{childList:!0,subtree:!0}),i}function Ist(t,e,n){const r=t.canvas,i=new MutationObserver((t=>{let e=!1;for(const n of t)e=e||Vst(n.removedNodes,r),e=e&&!Vst(n.addedNodes,r);e&&n()}));return i.observe(document,{childList:!0,subtree:!0}),i}const zst=new Map;let Lst=0;function Rst(){const t=window.devicePixelRatio;t!==Lst&&(Lst=t,zst.forEach(((e,n)=>{n.currentDevicePixelRatio!==t&&e()})))}function Hst(t,e,n){const r=t.canvas,i=r&&Qot(r);if(!i)return;const o=srt(((t,e)=>{const r=i.clientWidth;n(t,e),r<i.clientWidth&&n()}),window),a=new ResizeObserver((t=>{const e=t[0],n=e.contentRect.width,r=e.contentRect.height;0===n&&0===r||o(n,r)}));return a.observe(i),function(t,e){zst.size||window.addEventListener("resize",Rst),zst.set(t,e)}(t,o),a}function Bst(t,e,n){n&&n.disconnect(),"resize"===e&&function(t){zst.delete(t),zst.size||window.removeEventListener("resize",Rst)}(t)}function Dst(t,e,n){const r=t.canvas,i=srt((e=>{null!==t.ctx&&n(function(t,e){const n=Ast[t.type]||t.type,{x:r,y:i}=nat(t,e);return{type:n,chart:e,native:t,x:void 0!==r?r:null,y:void 0!==i?i:null}}(e,t))}),t,(t=>{const e=t[0];return[e,e.offsetX,e.offsetY]}));return function(t,e,n){t.addEventListener(e,n,Ost)}(r,e,i),i}class Fst extends Pst{acquireContext(t,e){const n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(function(t,e){const n=t.style,r=t.getAttribute("height"),i=t.getAttribute("width");if(t.$chartjs={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",Nst(i)){const e=sat(t,"width");void 0!==e&&(t.width=e)}if(Nst(r))if(""===t.style.height)t.height=t.width/(e||2);else{const e=sat(t,"height");void 0!==e&&(t.height=e)}}(t,e),n):null}releaseContext(t){const e=t.canvas;if(!e.$chartjs)return!1;const n=e.$chartjs.initial;["height","width"].forEach((t=>{const r=n[t];drt(r)?e.removeAttribute(t):e.setAttribute(t,r)}));const r=n.style||{};return Object.keys(r).forEach((t=>{e.style[t]=r[t]})),e.width=e.width,delete e.$chartjs,!0}addEventListener(t,e,n){this.removeEventListener(t,e);const r=t.$proxies||(t.$proxies={}),i={attach:Est,detach:Ist,resize:Hst}[e]||Dst;r[e]=i(t,e,n)}removeEventListener(t,e){const n=t.$proxies||(t.$proxies={}),r=n[e];if(!r)return;({attach:Bst,detach:Bst,resize:Bst}[e]||jst)(t,e,r),n[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,n,r){return iat(t,e,n,r)}isAttached(t){const e=Qot(t);return!(!e||!e.isConnected)}}class Ust{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(t){const{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}hasValue(){return Xrt(this.x)&&Xrt(this.y)}getProps(t,e){const n=this.$animations;if(!e||!n)return this;const r={};return t.forEach((t=>{r[t]=n[t]&&n[t].active()?n[t]._to:this[t]})),r}}Ust.defaults={},Ust.defaultRoutes=void 0;const Wst={values:t=>frt(t)?t:""+t,numeric(t,e,n){if(0===t)return"0";const r=this.chart.options.locale;let i,o=t;if(n.length>1){const e=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(e<1e-4||e>1e15)&&(i="scientific"),o=function(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t));return n}(t,n)}const a=Urt(Math.abs(o)),s=Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:i,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(l,this.options.ticks.format),dat(t,r,l)},logarithmic(t,e,n){if(0===t)return"0";const r=t/Math.pow(10,Math.floor(Urt(t)));return 1===r||2===r||5===r?Wst.numeric.call(this,t,e,n):""}};var qst={formatters:Wst};function Xst(t,e){const n=t.options.ticks,r=n.maxTicksLimit||function(t){const e=t.options.offset,n=t._tickSize(),r=t._length/n+(e?0:1),i=t._maxLength/n;return Math.floor(Math.min(r,i))}(t),i=n.major.enabled?function(t){const e=[];let n,r;for(n=0,r=t.length;n<r;n++)t[n].major&&e.push(n);return e}(e):[],o=i.length,a=i[0],s=i[o-1],l=[];if(o>r)return function(t,e,n,r){let i,o=0,a=n[0];for(r=Math.ceil(r),i=0;i<t.length;i++)i===a&&(e.push(t[i]),o++,a=n[o*r])}(e,l,i,o/r),l;const u=function(t,e,n){const r=function(t){const e=t.length;let n,r;if(e<2)return!1;for(r=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==r)return!1;return r}(t),i=e.length/n;if(!r)return Math.max(i,1);const o=function(t){const e=[],n=Math.sqrt(t);let r;for(r=1;r<n;r++)t%r===0&&(e.push(r),e.push(t/r));return n===(0|n)&&e.push(n),e.sort(((t,e)=>t-e)).pop(),e}(r);for(let a=0,s=o.length-1;a<s;a++){const t=o[a];if(t>i)return t}return Math.max(i,1)}(i,e,r);if(o>0){let t,n;const r=o>1?Math.round((s-a)/(o-1)):null;for(Zst(e,l,u,drt(r)?0:a-r,a),t=0,n=o-1;t<n;t++)Zst(e,l,u,i[t],i[t+1]);return Zst(e,l,u,s,drt(r)?e.length:s+r),l}return Zst(e,l,u),l}function Zst(t,e,n,r,i){const o=yrt(r,0),a=Math.min(yrt(i,t.length),t.length);let s,l,u,c=0;for(n=Math.ceil(n),i&&(s=i-r,n=s/Math.floor(s/n)),u=o;u<0;)c++,u=Math.round(o+c*n);for(l=Math.max(o,0);l<a;l++)l===u&&(e.push(t[l]),c++,u=Math.round(o+c*n))}Git.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:qst.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),Git.route("scale.ticks","color","","color"),Git.route("scale.grid","color","","borderColor"),Git.route("scale.grid","borderColor","","borderColor"),Git.route("scale.title","color","","color"),Git.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t}),Git.describe("scales",{_fallback:"scale"}),Git.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t});const Yst=(t,e,n)=>"top"===e||"left"===e?t[e]+n:t[e]-n;function Kst(t,e){const n=[],r=t.length/e,i=t.length;let o=0;for(;o<i;o+=r)n.push(t[Math.floor(o)]);return n}function Gst(t,e,n){const r=t.ticks.length,i=Math.min(e,r-1),o=t._startPixel,a=t._endPixel,s=1e-6;let l,u=t.getPixelForTick(i);if(!(n&&(l=1===r?Math.max(u-o,a-u):0===e?(t.getPixelForTick(1)-u)/2:(u-t.getPixelForTick(i-1))/2,u+=i<e?l:-l,u<o-s||u>a+s)))return u}function Jst(t){return t.drawTicks?t.tickLength:0}function Qst(t,e){if(!t.display)return 0;const n=vot(t.font,e),r=yot(t.padding);return(frt(t.text)?t.text.length:1)*n.lineHeight+r.height}function _st(t,e,n){let r=lrt(t);return(n&&"right"!==e||!n&&"right"===e)&&(r=(t=>"left"===t?"right":"right"===t?"left":t)(r)),r}class $st extends Ust{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:n,_suggestedMax:r}=this;return t=grt(t,Number.POSITIVE_INFINITY),e=grt(e,Number.NEGATIVE_INFINITY),n=grt(n,Number.POSITIVE_INFINITY),r=grt(r,Number.NEGATIVE_INFINITY),{min:grt(t,n),max:grt(e,r),minDefined:mrt(t),maxDefined:mrt(e)}}getMinMax(t){let e,{min:n,max:r,minDefined:i,maxDefined:o}=this.getUserBounds();if(i&&o)return{min:n,max:r};const a=this.getMatchingVisibleMetas();for(let s=0,l=a.length;s<l;++s)e=a[s].controller.getMinMax(this,t),i||(n=Math.min(n,e.min)),o||(r=Math.max(r,e.max));return n=o&&n>r?r:n,r=i&&n>r?n:r,{min:grt(n,grt(r,n)),max:grt(r,grt(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){brt(this.options.beforeUpdate,[this])}update(t,e,n){const{beginAtZero:r,grace:i,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=function(t,e,n){const{min:r,max:i}=t,o=vrt(e,(i-r)/2),a=(t,e)=>n&&0===t?0:t+e;return{min:a(r,-Math.abs(o)),max:a(i,o)}}(this,i,r),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const s=a<this.ticks.length;this._convertTicksToLabels(s?Kst(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||"auto"===o.source)&&(this.ticks=Xst(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,n=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,n=!n),this._startPixel=t,this._endPixel=e,this._reversePixels=n,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){brt(this.options.afterUpdate,[this])}beforeSetDimensions(){brt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){brt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),brt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){brt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let n,r,i;for(n=0,r=t.length;n<r;n++)i=t[n],i.label=brt(e.callback,[i.value,n,t],this)}afterTickToLabelConversion(){brt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){brt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,n=this.ticks.length,r=e.minRotation||0,i=e.maxRotation;let o,a,s,l=r;if(!this._isVisible()||!e.display||r>=i||n<=1||!this.isHorizontal())return void(this.labelRotation=r);const u=this._getLabelSizes(),c=u.widest.width,h=u.highest.height,d=nit(this.chart.width-c,0,this.maxWidth);o=t.offset?this.maxWidth/n:d/(n-1),c+6>o&&(o=d/(n-(t.offset?.5:1)),a=this.maxHeight-Jst(t.grid)-e.padding-Qst(t.title,this.chart.options.font),s=Math.sqrt(c*c+h*h),l=Grt(Math.min(Math.asin(nit((u.highest.height+6)/o,-1,1)),Math.asin(nit(a/s,-1,1))-Math.asin(nit(h/s,-1,1)))),l=Math.max(r,Math.min(i,l))),this.labelRotation=l}afterCalculateLabelRotation(){brt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){brt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:n,title:r,grid:i}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const o=Qst(r,e.options.font);if(a?(t.width=this.maxWidth,t.height=Jst(i)+o):(t.height=this.maxHeight,t.width=Jst(i)+o),n.display&&this.ticks.length){const{first:e,last:r,widest:i,highest:o}=this._getLabelSizes(),s=2*n.padding,l=Krt(this.labelRotation),u=Math.cos(l),c=Math.sin(l);if(a){const e=n.mirror?0:c*i.width+u*o.height;t.height=Math.min(this.maxHeight,t.height+e+s)}else{const e=n.mirror?0:u*i.width+c*o.height;t.width=Math.min(this.maxWidth,t.width+e+s)}this._calculatePadding(e,r,c,u)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,n,r){const{ticks:{align:i,padding:o},position:a}=this.options,s=0!==this.labelRotation,l="top"!==a&&"x"===this.axis;if(this.isHorizontal()){const a=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1);let c=0,h=0;s?l?(c=r*t.width,h=n*e.height):(c=n*t.height,h=r*e.width):"start"===i?h=e.width:"end"===i?c=t.width:"inner"!==i&&(c=t.width/2,h=e.width/2),this.paddingLeft=Math.max((c-a+o)*this.width/(this.width-a),0),this.paddingRight=Math.max((h-u+o)*this.width/(this.width-u),0)}else{let n=e.height/2,r=t.height/2;"start"===i?(n=0,r=t.height):"end"===i&&(n=e.height,r=0),this.paddingTop=n+o,this.paddingBottom=r+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){brt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,n;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,n=t.length;e<n;e++)drt(t[e].label)&&(t.splice(e,1),n--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let n=this.ticks;e<n.length&&(n=Kst(n,e)),this._labelSizes=t=this._computeLabelSizes(n,n.length)}return t}_computeLabelSizes(t,e){const{ctx:n,_longestTextCache:r}=this,i=[],o=[];let a,s,l,u,c,h,d,f,p,m,g,y=0,v=0;for(a=0;a<e;++a){if(u=t[a].label,c=this._resolveTickFontOptions(a),n.font=h=c.string,d=r[h]=r[h]||{data:{},gc:[]},f=c.lineHeight,p=m=0,drt(u)||frt(u)){if(frt(u))for(s=0,l=u.length;s<l;++s)g=u[s],drt(g)||frt(g)||(p=Jit(n,d.data,d.gc,p,g),m+=f)}else p=Jit(n,d.data,d.gc,p,u),m=f;i.push(p),o.push(m),y=Math.max(p,y),v=Math.max(m,v)}!function(t,e){wrt(t,(t=>{const n=t.gc,r=n.length/2;let i;if(r>e){for(i=0;i<r;++i)delete t.data[n[i]];n.splice(0,r)}}))}(r,e);const b=i.indexOf(y),w=o.indexOf(v),x=t=>({width:i[t]||0,height:o[t]||0});return{first:x(0),last:x(e-1),widest:x(b),highest:x(w),widths:i,heights:o}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return function(t){return nit(t,-32768,32767)}(this._alignToPixels?_it(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const n=e[t];return n.$context||(n.$context=function(t,e,n){return wot(t,{tick:n,index:e,type:"tick"})}(this.getContext(),t,n))}return this.$context||(this.$context=function(t,e){return wot(t,{scale:e,type:"scale"})}(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Krt(this.labelRotation),n=Math.abs(Math.cos(e)),r=Math.abs(Math.sin(e)),i=this._getLabelSizes(),o=t.autoSkipPadding||0,a=i?i.widest.width+o:0,s=i?i.highest.height+o:0;return this.isHorizontal()?s*n>a*r?a/n:s/r:s*r<a*n?s/n:a/r}_isVisible(){const t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,n=this.chart,r=this.options,{grid:i,position:o}=r,a=i.offset,s=this.isHorizontal(),l=this.ticks.length+(a?1:0),u=Jst(i),c=[],h=i.setContext(this.getContext()),d=h.drawBorder?h.borderWidth:0,f=d/2,p=function(t){return _it(n,t,d)};let m,g,y,v,b,w,x,M,k,S,C,P;if("top"===o)m=p(this.bottom),w=this.bottom-u,M=m-f,S=p(t.top)+f,P=t.bottom;else if("bottom"===o)m=p(this.top),S=t.top,P=p(t.bottom)-f,w=m+f,M=this.top+u;else if("left"===o)m=p(this.right),b=this.right-u,x=m-f,k=p(t.left)+f,C=t.right;else if("right"===o)m=p(this.left),k=t.left,C=p(t.right)-f,b=m+f,x=this.left+u;else if("x"===e){if("center"===o)m=p((t.top+t.bottom)/2+.5);else if(prt(o)){const t=Object.keys(o)[0],e=o[t];m=p(this.chart.scales[t].getPixelForValue(e))}S=t.top,P=t.bottom,w=m+f,M=w+u}else if("y"===e){if("center"===o)m=p((t.left+t.right)/2);else if(prt(o)){const t=Object.keys(o)[0],e=o[t];m=p(this.chart.scales[t].getPixelForValue(e))}b=m-f,x=b-u,k=t.left,C=t.right}const T=yrt(r.ticks.maxTicksLimit,l),A=Math.max(1,Math.ceil(l/T));for(g=0;g<l;g+=A){const t=i.setContext(this.getContext(g)),e=t.lineWidth,r=t.color,o=i.borderDash||[],l=t.borderDashOffset,u=t.tickWidth,h=t.tickColor,d=t.tickBorderDash||[],f=t.tickBorderDashOffset;y=Gst(this,g,a),void 0!==y&&(v=_it(n,y,e),s?b=x=k=C=v:w=M=S=P=v,c.push({tx1:b,ty1:w,tx2:x,ty2:M,x1:k,y1:S,x2:C,y2:P,width:e,color:r,borderDash:o,borderDashOffset:l,tickWidth:u,tickColor:h,tickBorderDash:d,tickBorderDashOffset:f}))}return this._ticksLength=l,this._borderValue=m,c}_computeLabelItems(t){const e=this.axis,n=this.options,{position:r,ticks:i}=n,o=this.isHorizontal(),a=this.ticks,{align:s,crossAlign:l,padding:u,mirror:c}=i,h=Jst(n.grid),d=h+u,f=c?-u:d,p=-Krt(this.labelRotation),m=[];let g,y,v,b,w,x,M,k,S,C,P,T,A="middle";if("top"===r)x=this.bottom-f,M=this._getXAxisLabelAlignment();else if("bottom"===r)x=this.top+f,M=this._getXAxisLabelAlignment();else if("left"===r){const t=this._getYAxisLabelAlignment(h);M=t.textAlign,w=t.x}else if("right"===r){const t=this._getYAxisLabelAlignment(h);M=t.textAlign,w=t.x}else if("x"===e){if("center"===r)x=(t.top+t.bottom)/2+d;else if(prt(r)){const t=Object.keys(r)[0],e=r[t];x=this.chart.scales[t].getPixelForValue(e)+d}M=this._getXAxisLabelAlignment()}else if("y"===e){if("center"===r)w=(t.left+t.right)/2-d;else if(prt(r)){const t=Object.keys(r)[0],e=r[t];w=this.chart.scales[t].getPixelForValue(e)}M=this._getYAxisLabelAlignment(h).textAlign}"y"===e&&("start"===s?A="top":"end"===s&&(A="bottom"));const N=this._getLabelSizes();for(g=0,y=a.length;g<y;++g){v=a[g],b=v.label;const t=i.setContext(this.getContext(g));k=this.getPixelForTick(g)+i.labelOffset,S=this._resolveTickFontOptions(g),C=S.lineHeight,P=frt(b)?b.length:1;const e=P/2,n=t.color,s=t.textStrokeColor,u=t.textStrokeWidth;let h,d=M;if(o?(w=k,"inner"===M&&(d=g===y-1?this.options.reverse?"left":"right":0===g?this.options.reverse?"right":"left":"center"),T="top"===r?"near"===l||0!==p?-P*C+C/2:"center"===l?-N.highest.height/2-e*C+C:-N.highest.height+C/2:"near"===l||0!==p?C/2:"center"===l?N.highest.height/2-e*C:N.highest.height-P*C,c&&(T*=-1)):(x=k,T=(1-P)*C/2),t.showLabelBackdrop){const e=yot(t.backdropPadding),n=N.heights[g],r=N.widths[g];let i=x+T-e.top,o=w-e.left;switch(A){case"middle":i-=n/2;break;case"bottom":i-=n}switch(M){case"center":o-=r/2;break;case"right":o-=r}h={left:o,top:i,width:r+e.width,height:n+e.height,color:t.backdropColor}}m.push({rotation:p,label:b,font:S,color:n,strokeColor:s,strokeWidth:u,textOffset:T,textAlign:d,textBaseline:A,translation:[w,x],backdrop:h})}return m}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Krt(this.labelRotation))return"top"===t?"left":"right";let n="center";return"start"===e.align?n="left":"end"===e.align?n="right":"inner"===e.align&&(n="inner"),n}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:n,mirror:r,padding:i}}=this.options,o=t+i,a=this._getLabelSizes().widest.width;let s,l;return"left"===e?r?(l=this.right+i,"near"===n?s="left":"center"===n?(s="center",l+=a/2):(s="right",l+=a)):(l=this.right-o,"near"===n?s="right":"center"===n?(s="center",l-=a/2):(s="left",l=this.left)):"right"===e?r?(l=this.left+i,"near"===n?s="right":"center"===n?(s="center",l-=a/2):(s="left",l-=a)):(l=this.left+o,"near"===n?s="left":"center"===n?(s="center",l+=a/2):(s="right",l=this.right)):s="right",{textAlign:s,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:n,top:r,width:i,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(n,r,i,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const n=this.ticks.findIndex((e=>e.value===t));if(n>=0){return e.setContext(this.getContext(n)).lineWidth}return 0}drawGrid(t){const e=this.options.grid,n=this.ctx,r=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let i,o;const a=(t,e,r)=>{r.width&&r.color&&(n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.setLineDash(r.borderDash||[]),n.lineDashOffset=r.borderDashOffset,n.beginPath(),n.moveTo(t.x,t.y),n.lineTo(e.x,e.y),n.stroke(),n.restore())};if(e.display)for(i=0,o=r.length;i<o;++i){const t=r[i];e.drawOnChartArea&&a({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),e.drawTicks&&a({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{grid:n}}=this,r=n.setContext(this.getContext()),i=n.drawBorder?r.borderWidth:0;if(!i)return;const o=n.setContext(this.getContext(0)).lineWidth,a=this._borderValue;let s,l,u,c;this.isHorizontal()?(s=_it(t,this.left,i)-i/2,l=_it(t,this.right,o)+o/2,u=c=a):(u=_it(t,this.top,i)-i/2,c=_it(t,this.bottom,o)+o/2,s=l=a),e.save(),e.lineWidth=r.borderWidth,e.strokeStyle=r.borderColor,e.beginPath(),e.moveTo(s,u),e.lineTo(l,c),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const e=this.ctx,n=this._computeLabelArea();n&&not(e,n);const r=this._labelItems||(this._labelItems=this._computeLabelItems(t));let i,o;for(i=0,o=r.length;i<o;++i){const t=r[i],n=t.font,o=t.label;t.backdrop&&(e.fillStyle=t.backdrop.color,e.fillRect(t.backdrop.left,t.backdrop.top,t.backdrop.width,t.backdrop.height)),aot(e,o,0,t.textOffset,n,t)}n&&rot(e)}drawTitle(){const{ctx:t,options:{position:e,title:n,reverse:r}}=this;if(!n.display)return;const i=vot(n.font),o=yot(n.padding),a=n.align;let s=i.lineHeight/2;"bottom"===e||"center"===e||prt(e)?(s+=o.bottom,frt(n.text)&&(s+=i.lineHeight*(n.text.length-1))):s+=o.top;const{titleX:l,titleY:u,maxWidth:c,rotation:h}=function(t,e,n,r){const{top:i,left:o,bottom:a,right:s,chart:l}=t,{chartArea:u,scales:c}=l;let h,d,f,p=0;const m=a-i,g=s-o;if(t.isHorizontal()){if(d=urt(r,o,s),prt(n)){const t=Object.keys(n)[0],r=n[t];f=c[t].getPixelForValue(r)+m-e}else f="center"===n?(u.bottom+u.top)/2+m-e:Yst(t,n,e);h=s-o}else{if(prt(n)){const t=Object.keys(n)[0],r=n[t];d=c[t].getPixelForValue(r)-g+e}else d="center"===n?(u.left+u.right)/2-g+e:Yst(t,n,e);f=urt(r,a,i),p="left"===n?-Brt:Brt}return{titleX:d,titleY:f,maxWidth:h,rotation:p}}(this,s,e,a);aot(t,n.text,0,0,i,{color:n.color,maxWidth:c,rotation:h,textAlign:_st(a,e,r),textBaseline:"middle",translation:[l,u]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,n=yrt(t.grid&&t.grid.z,-1);return this._isVisible()&&this.draw===$st.prototype.draw?[{z:n,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:n+1,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",r=[];let i,o;for(i=0,o=e.length;i<o;++i){const o=e[i];o[n]!==this.id||t&&o.type!==t||r.push(o)}return r}_resolveTickFontOptions(t){return vot(this.options.ticks.setContext(this.getContext(t)).font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class tlt{constructor(t,e,n){this.type=t,this.scope=e,this.override=n,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let n;(function(t){return"id"in t&&"defaults"in t})(e)&&(n=this.register(e));const r=this.items,i=t.id,o=this.scope+"."+i;if(!i)throw new Error("class does not have id: "+t);return i in r||(r[i]=t,function(t,e,n){const r=Crt(Object.create(null),[n?Git.get(n):{},Git.get(e),t.defaults]);Git.set(e,r),t.defaultRoutes&&function(t,e){Object.keys(e).forEach((n=>{const r=n.split("."),i=r.pop(),o=[t].concat(r).join("."),a=e[n].split("."),s=a.pop(),l=a.join(".");Git.route(o,i,l,s)}))}(e,t.defaultRoutes);t.descriptors&&Git.describe(e,t.descriptors)}(t,o,n),this.override&&Git.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,n=t.id,r=this.scope;n in e&&delete e[n],r&&n in Git[r]&&(delete Git[r][n],this.override&&delete Xit[n])}}var elt=new class{constructor(){this.controllers=new tlt(Dat,"datasets",!0),this.elements=new tlt(Ust,"elements"),this.plugins=new tlt(Object,"plugins"),this.scales=new tlt($st,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("register",e)}remove(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("unregister",e)}addControllers(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("register",e,this.controllers)}addElements(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("register",e,this.elements)}addPlugins(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("register",e,this.plugins)}addScales(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("register",e,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("unregister",e,this.controllers)}removeElements(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("unregister",e,this.elements)}removePlugins(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("unregister",e,this.plugins)}removeScales(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this._each("unregister",e,this.scales)}_each(t,e,n){[...e].forEach((e=>{const r=n||this._getRegistryForType(e);n||r.isForType(e)||r===this.plugins&&e.id?this._exec(t,r,e):wrt(e,(e=>{const r=n||this._getRegistryForType(e);this._exec(t,r,e)}))}))}_exec(t,e,n){const r=Ort(t);brt(n["before"+r],[],n),e[t](n),brt(n["after"+r],[],n)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const n=this._typedRegistries[e];if(n.isForType(t))return n}return this.plugins}_get(t,e,n){const r=e.get(t);if(void 0===r)throw new Error('"'+t+'" is not a registered '+n+".");return r}};class nlt{constructor(){this._init=[]}notify(t,e,n,r){"beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const i=r?this._descriptors(t).filter(r):this._descriptors(t),o=this._notify(i,t,e,n);return"afterDestroy"===e&&(this._notify(i,t,"stop"),this._notify(this._init,t,"uninstall")),o}_notify(t,e,n,r){r=r||{};for(const i of t){const t=i.plugin;if(!1===brt(t[n],[e,r,i.options],t)&&r.cancelable)return!1}return!0}invalidate(){drt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const n=t&&t.config,r=yrt(n.options&&n.options.plugins,{}),i=function(t){const e=[],n=Object.keys(elt.plugins.items);for(let i=0;i<n.length;i++)e.push(elt.getPlugin(n[i]));const r=t.plugins||[];for(let i=0;i<r.length;i++){const t=r[i];-1===e.indexOf(t)&&e.push(t)}return e}(n);return!1!==r||e?function(t,e,n,r){const i=[],o=t.getContext();for(let a=0;a<e.length;a++){const s=e[a],l=rlt(n[s.id],r);null!==l&&i.push({plugin:s,options:ilt(t.config,s,l,o)})}return i}(t,i,r,e):[]}_notifyStateChanges(t){const e=this._oldCache||[],n=this._cache,r=(t,e)=>t.filter((t=>!e.some((e=>t.plugin.id===e.plugin.id))));this._notify(r(e,n),t,"stop"),this._notify(r(n,e),t,"start")}}function rlt(t,e){return e||!1!==t?!0===t?{}:t:null}function ilt(t,e,n,r){const i=t.pluginScopeKeys(e),o=t.getOptionScopes(n,i);return t.createResolver(o,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function olt(t,e){const n=Git.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function alt(t,e){return"x"===t||"y"===t?t:e.axis||("top"===(n=e.position)||"bottom"===n?"x":"left"===n||"right"===n?"y":void 0)||t.charAt(0).toLowerCase();var n}function slt(t){const e=t.options||(t.options={});e.plugins=yrt(e.plugins,{}),e.scales=function(t,e){const n=Xit[t.type]||{scales:{}},r=e.scales||{},i=olt(t.type,e),o=Object.create(null),a=Object.create(null);return Object.keys(r).forEach((t=>{const e=r[t];if(!prt(e))return console.error(`Invalid scale configuration for scale: ${t}`);if(e._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);const s=alt(t,e),l=function(t,e){return t===e?"_index_":"_value_"}(s,i),u=n.scales||{};o[s]=o[s]||t,a[t]=Prt(Object.create(null),[{axis:s},e,u[s],u[l]])})),t.data.datasets.forEach((n=>{const i=n.type||t.type,s=n.indexAxis||olt(i,e),l=(Xit[i]||{}).scales||{};Object.keys(l).forEach((t=>{const e=function(t,e){let n=t;return"_index_"===t?n=e:"_value_"===t&&(n="x"===e?"y":"x"),n}(t,s),i=n[e+"AxisID"]||o[e]||e;a[i]=a[i]||Object.create(null),Prt(a[i],[{axis:e},r[i],l[t]])}))})),Object.keys(a).forEach((t=>{const e=a[t];Prt(e,[Git.scales[e.type],Git.scale])})),a}(t,e)}function llt(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const ult=new Map,clt=new Set;function hlt(t,e){let n=ult.get(t);return n||(n=e(),ult.set(t,n),clt.add(n)),n}const dlt=(t,e,n)=>{const r=Nrt(e,n);void 0!==r&&t.add(r)};class flt{constructor(t){this._config=function(t){return(t=t||{}).data=llt(t.data),slt(t),t}(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=llt(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),slt(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return hlt(t,(()=>[[`datasets.${t}`,""]]))}datasetAnimationScopeKeys(t,e){return hlt(`${t}.transition.${e}`,(()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]]))}datasetElementScopeKeys(t,e){return hlt(`${t}-${e}`,(()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]]))}pluginScopeKeys(t){const e=t.id;return hlt(`${this.type}-plugin-${e}`,(()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]]))}_cachedScopes(t,e){const n=this._scopeCache;let r=n.get(t);return r&&!e||(r=new Map,n.set(t,r)),r}getOptionScopes(t,e,n){const{options:r,type:i}=this,o=this._cachedScopes(t,n),a=o.get(e);if(a)return a;const s=new Set;e.forEach((e=>{t&&(s.add(t),e.forEach((e=>dlt(s,t,e)))),e.forEach((t=>dlt(s,r,t))),e.forEach((t=>dlt(s,Xit[i]||{},t))),e.forEach((t=>dlt(s,Git,t))),e.forEach((t=>dlt(s,Zit,t)))}));const l=Array.from(s);return 0===l.length&&l.push(Object.create(null)),clt.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,Xit[e]||{},Git.datasets[e]||{},{type:e},Git,Zit]}resolveNamedOptions(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[""];const i={$shared:!0},{resolver:o,subPrefixes:a}=plt(this._resolverCache,t,r);let s=o;if(function(t,e){const{isScriptable:n,isIndexable:r}=Not(t);for(const i of e){const e=n(i),o=r(i),a=(o||e)&&t[i];if(e&&(Vrt(a)||mlt(a))||o&&frt(a))return!0}return!1}(o,e)){i.$shared=!1;s=Aot(o,n=Vrt(n)?n():n,this.createResolver(t,n,a))}for(const l of e)i[l]=s[l];return i}createResolver(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[""],r=arguments.length>3?arguments[3]:void 0;const{resolver:i}=plt(this._resolverCache,t,n);return prt(e)?Aot(i,e,void 0,r):i}}function plt(t,e,n){let r=t.get(e);r||(r=new Map,t.set(e,r));const i=n.join();let o=r.get(i);if(!o){o={resolver:Tot(e,n),subPrefixes:n.filter((t=>!t.toLowerCase().includes("hover")))},r.set(i,o)}return o}const mlt=t=>prt(t)&&Object.getOwnPropertyNames(t).reduce(((e,n)=>e||Vrt(t[n])),!1);const glt=["top","bottom","left","right","chartArea"];function ylt(t,e){return"top"===t||"bottom"===t||-1===glt.indexOf(t)&&"x"===e}function vlt(t,e){return function(n,r){return n[t]===r[t]?n[e]-r[e]:n[t]-r[t]}}function blt(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),brt(n&&n.onComplete,[t],e)}function wlt(t){const e=t.chart,n=e.options.animation;brt(n&&n.onProgress,[t],e)}function xlt(t){return Jot()&&"string"===typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Mlt={},klt=t=>{const e=xlt(t);return Object.values(Mlt).filter((t=>t.canvas===e)).pop()};function Slt(t,e,n){const r=Object.keys(t);for(const i of r){const r=+i;if(r>=e){const o=t[i];delete t[i],(n>0||r>e)&&(t[r+n]=o)}}}class Clt{constructor(t,e){const n=this.config=new flt(e),r=xlt(t),i=klt(r);if(i)throw new Error("Canvas is already in use. Chart with ID '"+i.id+"' must be destroyed before the canvas can be reused.");const o=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||function(t){return!Jot()||"undefined"!==typeof OffscreenCanvas&&t instanceof OffscreenCanvas?Tst:Fst}(r)),this.platform.updateConfig(n);const a=this.platform.acquireContext(r,o.aspectRatio),s=a&&a.canvas,l=s&&s.height,u=s&&s.width;this.id=hrt(),this.ctx=a,this.canvas=s,this.width=u,this.height=l,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new nlt,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=function(t,e){let n;return function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}((t=>this.update(t)),o.resizeDelay||0),this._dataChanges=[],Mlt[this.id]=this,a&&s?(kat.listen(this,"complete",blt),kat.listen(this,"progress",wlt),this._initialize(),this.attached&&this.update()):console.error("Failed to create chart: can't acquire context from the given item")}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:n,height:r,_aspectRatio:i}=this;return drt(t)?e&&i?i:r?n/r:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():oat(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return $it(this.canvas,this.ctx),this}stop(){return kat.stop(this),this}resize(t,e){kat.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const n=this.options,r=this.canvas,i=n.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(r,t,e,i),a=n.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,oat(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),brt(n.onResize,[this,o],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){wrt(this.options.scales||{},((t,e)=>{t.id=e}))}buildOrUpdateScales(){const t=this.options,e=t.scales,n=this.scales,r=Object.keys(n).reduce(((t,e)=>(t[e]=!1,t)),{});let i=[];e&&(i=i.concat(Object.keys(e).map((t=>{const n=e[t],r=alt(t,n),i="r"===r,o="x"===r;return{options:n,dposition:i?"chartArea":o?"bottom":"left",dtype:i?"radialLinear":o?"category":"linear"}})))),wrt(i,(e=>{const i=e.options,o=i.id,a=alt(o,i),s=yrt(i.type,e.dtype);void 0!==i.position&&ylt(i.position,a)===ylt(e.dposition)||(i.position=e.dposition),r[o]=!0;let l=null;if(o in n&&n[o].type===s)l=n[o];else{l=new(elt.getScale(s))({id:o,type:s,ctx:this.ctx,chart:this}),n[l.id]=l}l.init(i,t)})),wrt(r,((t,e)=>{t||delete n[e]})),wrt(n,(t=>{Cst.configure(this,t,t.options),Cst.addBox(this,t)}))}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,n=t.length;if(t.sort(((t,e)=>t.index-e.index)),n>e){for(let t=e;t<n;++t)this._destroyDatasetMeta(t);t.splice(e,n-e)}this._sortedMetasets=t.slice(0).sort(vlt("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach(((t,n)=>{0===e.filter((e=>e===t._dataset)).length&&this._destroyDatasetMeta(n)}))}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let n,r;for(this._removeUnreferencedMetasets(),n=0,r=e.length;n<r;n++){const r=e[n];let i=this.getDatasetMeta(n);const o=r.type||this.config.type;if(i.type&&i.type!==o&&(this._destroyDatasetMeta(n),i=this.getDatasetMeta(n)),i.type=o,i.indexAxis=r.indexAxis||olt(o,this.options),i.order=r.order||0,i.index=n,i.label=""+r.label,i.visible=this.isDatasetVisible(n),i.controller)i.controller.updateIndex(n),i.controller.linkScales();else{const e=elt.getController(o),{datasetElementType:r,dataElementType:a}=Git.datasets[o];Object.assign(e.prototype,{dataElementType:elt.getElement(a),datasetElementType:r&&elt.getElement(r)}),i.controller=new e(this,n),t.push(i.controller)}}return this._updateMetasets(),t}_resetElements(){wrt(this.data.datasets,((t,e)=>{this.getDatasetMeta(e).controller.reset()}),this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const n=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;const i=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let l=0,u=this.data.datasets.length;l<u;l++){const{controller:t}=this.getDatasetMeta(l),e=!r&&-1===i.indexOf(t);t.buildOrUpdateElements(e),o=Math.max(+t.getMaxOverflow(),o)}o=this._minPadding=n.layout.autoPadding?o:0,this._updateLayout(o),r||wrt(i,(t=>{t.reset()})),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(vlt("z","_idx"));const{_active:a,_lastEvent:s}=this;s?this._eventHandler(s,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){wrt(this.scales,(t=>{Cst.removeBox(this,t)})),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),n=new Set(t.events);Ert(e,n)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:n,start:r,count:i}of e){Slt(t,r,"_removeElements"===n?-i:i)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,n=e=>new Set(t.filter((t=>t[0]===e)).map(((t,e)=>e+","+t.splice(1).join(",")))),r=n(0);for(let i=1;i<e;i++)if(!Ert(r,n(i)))return;return Array.from(r).map((t=>t.split(","))).map((t=>({method:t[1],start:+t[2],count:+t[3]})))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;Cst.update(this,this.width,this.height,t);const e=this.chartArea,n=e.width<=0||e.height<=0;this._layers=[],wrt(this.boxes,(t=>{n&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))}),this),this._layers.forEach(((t,e)=>{t._idx=e})),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,n=this.data.datasets.length;e<n;++e)this._updateDataset(e,Vrt(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const n=this.getDatasetMeta(t),r={meta:n,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",r)&&(n.controller._update(e),r.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",r))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(kat.has(this)?this.attached&&!kat.running(this)&&kat.start(this):(this.draw(),blt({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:t,height:e}=this._resizeBeforeDraw;this._resize(t,e),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0)return;if(!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,n=[];let r,i;for(r=0,i=e.length;r<i;++r){const i=e[r];t&&!i.visible||n.push(i)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,n=t._clip,r=!n.disabled,i=this.chartArea,o={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",o)&&(r&&not(e,{left:!1===n.left?0:i.left-n.left,right:!1===n.right?this.width:i.right+n.right,top:!1===n.top?0:i.top-n.top,bottom:!1===n.bottom?this.height:i.bottom+n.bottom}),t.controller.draw(),r&&rot(e),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(t){return eot(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,n,r){const i=dst.modes[e];return"function"===typeof i?i(this,t,n,r):[]}getDatasetMeta(t){const e=this.data.datasets[t],n=this._metasets;let r=n.filter((t=>t&&t._dataset===e)).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},n.push(r)),r}getContext(){return this.$context||(this.$context=wot(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const n=this.getDatasetMeta(t);return"boolean"===typeof n.hidden?!n.hidden:!e.hidden}setDatasetVisibility(t,e){this.getDatasetMeta(t).hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,n){const r=n?"show":"hide",i=this.getDatasetMeta(t),o=i.controller._resolveAnimations(void 0,r);jrt(e)?(i.data[e].hidden=!n,this.update()):(this.setDatasetVisibility(t,n),o.update(i,{visible:n}),this.update((e=>e.datasetIndex===t?r:void 0)))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),kat.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),$it(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),this.notifyPlugins("destroy"),delete Mlt[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(){return this.canvas.toDataURL(...arguments)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,n=(n,r)=>{e.addEventListener(this,n,r),t[n]=r},r=(t,e,n)=>{t.offsetX=e,t.offsetY=n,this._eventHandler(t)};wrt(this.options.events,(t=>n(t,r)))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,n=(n,r)=>{e.addEventListener(this,n,r),t[n]=r},r=(n,r)=>{t[n]&&(e.removeEventListener(this,n,r),delete t[n])},i=(t,e)=>{this.canvas&&this.resize(t,e)};let o;const a=()=>{r("attach",a),this.attached=!0,this.resize(),n("resize",i),n("detach",o)};o=()=>{this.attached=!1,r("resize",i),this._stop(),this._resize(0,0),n("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){wrt(this._listeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._listeners={},wrt(this._responsiveListeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._responsiveListeners=void 0}updateHoverStyle(t,e,n){const r=n?"set":"remove";let i,o,a,s;for("dataset"===e&&(i=this.getDatasetMeta(t[0].datasetIndex),i.controller["_"+r+"DatasetHoverStyle"]()),a=0,s=t.length;a<s;++a){o=t[a];const e=o&&this.getDatasetMeta(o.datasetIndex).controller;e&&e[r+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],n=t.map((t=>{let{datasetIndex:e,index:n}=t;const r=this.getDatasetMeta(e);if(!r)throw new Error("No dataset found at index "+e);return{datasetIndex:e,element:r.data[n],index:n}}));!xrt(n,e)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,e))}notifyPlugins(t,e,n){return this._plugins.notify(this,t,e,n)}_updateHoverStyles(t,e,n){const r=this.options.hover,i=(t,e)=>t.filter((t=>!e.some((e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)))),o=i(e,t),a=n?t:i(t,e);o.length&&this.updateHoverStyle(o,r.mode,!1),a.length&&r.mode&&this.updateHoverStyle(a,r.mode,!0)}_eventHandler(t,e){const n={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},r=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",n,r))return;const i=this._handleEvent(t,e,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,r),(i||n.changed)&&this.render(),this}_handleEvent(t,e,n){const{_active:r=[],options:i}=this,o=e,a=this._getActiveElements(t,r,n,o),s=function(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}(t),l=function(t,e,n,r){return n&&"mouseout"!==t.type?r?e:t:null}(t,this._lastEvent,n,s);n&&(this._lastEvent=null,brt(i.onHover,[t,a,this],this),s&&brt(i.onClick,[t,a,this],this));const u=!xrt(a,r);return(u||e)&&(this._active=a,this._updateHoverStyles(a,r,e)),this._lastEvent=l,u}_getActiveElements(t,e,n,r){if("mouseout"===t.type)return[];if(!n)return e;const i=this.options.hover;return this.getElementsAtEventForMode(t,i.mode,i,r)}}const Plt=()=>wrt(Clt.instances,(t=>t._plugins.invalidate())),Tlt=!0;function Alt(t,e,n){const{startAngle:r,pixelMargin:i,x:o,y:a,outerRadius:s,innerRadius:l}=e;let u=i/s;t.beginPath(),t.arc(o,a,s,r-u,n+u),l>i?(u=i/l,t.arc(o,a,l,n+u,r-u,!0)):t.arc(o,a,i,n+Brt,r-Brt),t.closePath(),t.clip()}function Nlt(t,e,n,r){const i=function(t){return pot(t,["outerStart","outerEnd","innerStart","innerEnd"])}(t.options.borderRadius),o=(n-e)/2,a=Math.min(o,r*e/2),s=t=>{const e=(n-Math.min(o,t))*r/2;return nit(t,0,Math.min(o,e))};return{outerStart:s(i.outerStart),outerEnd:s(i.outerEnd),innerStart:nit(i.innerStart,0,a),innerEnd:nit(i.innerEnd,0,a)}}function Olt(t,e,n,r){return{x:n+t*Math.cos(e),y:r+t*Math.sin(e)}}function jlt(t,e,n,r,i){const{x:o,y:a,startAngle:s,pixelMargin:l,innerRadius:u}=e,c=Math.max(e.outerRadius+r+n-l,0),h=u>0?u+r+n+l:0;let d=0;const f=i-s;if(r){const t=((u>0?u-r:0)+(c>0?c-r:0))/2;d=(f-(0!==t?f*t/(t+r):f))/2}const p=(f-Math.max(.001,f*c-n/Irt)/c)/2,m=s+p+d,g=i-p-d,{outerStart:y,outerEnd:v,innerStart:b,innerEnd:w}=Nlt(e,h,c,g-m),x=c-y,M=c-v,k=m+y/x,S=g-v/M,C=h+b,P=h+w,T=m+b/C,A=g-w/P;if(t.beginPath(),t.arc(o,a,c,k,S),v>0){const e=Olt(M,S,o,a);t.arc(e.x,e.y,v,S,g+Brt)}const N=Olt(P,g,o,a);if(t.lineTo(N.x,N.y),w>0){const e=Olt(P,A,o,a);t.arc(e.x,e.y,w,g+Brt,A+Math.PI)}if(t.arc(o,a,h,g-w/h,m+b/h,!0),b>0){const e=Olt(C,T,o,a);t.arc(e.x,e.y,b,T+Math.PI,m-Brt)}const O=Olt(x,m,o,a);if(t.lineTo(O.x,O.y),y>0){const e=Olt(x,k,o,a);t.arc(e.x,e.y,y,m-Brt,k)}t.closePath()}function Vlt(t,e,n,r,i){const{options:o}=e,{borderWidth:a,borderJoinStyle:s}=o,l="inner"===o.borderAlign;a&&(l?(t.lineWidth=2*a,t.lineJoin=s||"round"):(t.lineWidth=a,t.lineJoin=s||"bevel"),e.fullCircles&&function(t,e,n){const{x:r,y:i,startAngle:o,pixelMargin:a,fullCircles:s}=e,l=Math.max(e.outerRadius-a,0),u=e.innerRadius+a;let c;for(n&&Alt(t,e,o+zrt),t.beginPath(),t.arc(r,i,u,o+zrt,o,!0),c=0;c<s;++c)t.stroke();for(t.beginPath(),t.arc(r,i,l,o,o+zrt),c=0;c<s;++c)t.stroke()}(t,e,l),l&&Alt(t,e,i),jlt(t,e,n,r,i),t.stroke())}Object.defineProperties(Clt,{defaults:{enumerable:Tlt,value:Git},instances:{enumerable:Tlt,value:Mlt},overrides:{enumerable:Tlt,value:Xit},registry:{enumerable:Tlt,value:elt},version:{enumerable:Tlt,value:"3.8.0"},getChart:{enumerable:Tlt,value:klt},register:{enumerable:Tlt,value:function(){elt.add(...arguments),Plt()}},unregister:{enumerable:Tlt,value:function(){elt.remove(...arguments),Plt()}}});class Elt extends Ust{constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,n){const r=this.getProps(["x","y"],n),{angle:i,distance:o}=Qrt(r,{x:t,y:e}),{startAngle:a,endAngle:s,innerRadius:l,outerRadius:u,circumference:c}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),h=this.options.spacing/2,d=yrt(c,s-a)>=zrt||eit(i,a,s),f=rit(o,l+h,u+h);return d&&f}getCenterPoint(t){const{x:e,y:n,startAngle:r,endAngle:i,innerRadius:o,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),{offset:s,spacing:l}=this.options,u=(r+i)/2,c=(o+a+l+s)/2;return{x:e+Math.cos(u)*c,y:n+Math.sin(u)*c}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:e,circumference:n}=this,r=(e.offset||0)/2,i=(e.spacing||0)/2;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=n>zrt?Math.floor(n/zrt):0,0===n||this.innerRadius<0||this.outerRadius<0)return;t.save();let o=0;if(r){o=r/2;const e=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(e)*o,Math.sin(e)*o),this.circumference>=Irt&&(o=r)}t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor;const a=function(t,e,n,r){const{fullCircles:i,startAngle:o,circumference:a}=e;let s=e.endAngle;if(i){jlt(t,e,n,r,o+zrt);for(let e=0;e<i;++e)t.fill();isNaN(a)||(s=o+a%zrt,a%zrt===0&&(s+=zrt))}return jlt(t,e,n,r,s),t.fill(),s}(t,this,o,i);Vlt(t,this,o,i,a),t.restore()}}function Ilt(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;t.lineCap=yrt(n.borderCapStyle,e.borderCapStyle),t.setLineDash(yrt(n.borderDash,e.borderDash)),t.lineDashOffset=yrt(n.borderDashOffset,e.borderDashOffset),t.lineJoin=yrt(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=yrt(n.borderWidth,e.borderWidth),t.strokeStyle=yrt(n.borderColor,e.borderColor)}function zlt(t,e,n){t.lineTo(n.x,n.y)}function Llt(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=t.length,{start:i=0,end:o=r-1}=n,{start:a,end:s}=e,l=Math.max(i,a),u=Math.min(o,s),c=i<a&&o<a||i>s&&o>s;return{count:r,start:l,loop:e.loop,ilen:u<l&&!c?r+u-l:u-l}}function Rlt(t,e,n,r){const{points:i,options:o}=e,{count:a,start:s,loop:l,ilen:u}=Llt(i,n,r),c=function(t){return t.stepped?iot:t.tension||"monotone"===t.cubicInterpolationMode?oot:zlt}(o);let h,d,f,{move:p=!0,reverse:m}=r||{};for(h=0;h<=u;++h)d=i[(s+(m?u-h:h))%a],d.skip||(p?(t.moveTo(d.x,d.y),p=!1):c(t,f,d,m,o.stepped),f=d);return l&&(d=i[(s+(m?u:0))%a],c(t,f,d,m,o.stepped)),!!l}function Hlt(t,e,n,r){const i=e.points,{count:o,start:a,ilen:s}=Llt(i,n,r),{move:l=!0,reverse:u}=r||{};let c,h,d,f,p,m,g=0,y=0;const v=t=>(a+(u?s-t:t))%o,b=()=>{f!==p&&(t.lineTo(g,p),t.lineTo(g,f),t.lineTo(g,m))};for(l&&(h=i[v(0)],t.moveTo(h.x,h.y)),c=0;c<=s;++c){if(h=i[v(c)],h.skip)continue;const e=h.x,n=h.y,r=0|e;r===d?(n<f?f=n:n>p&&(p=n),g=(y*g+e)/++y):(b(),t.lineTo(e,n),d=r,y=0,f=p=n),m=n}b()}function Blt(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&"monotone"!==e.cubicInterpolationMode&&!e.stepped&&!n?Hlt:Rlt}Elt.id="arc",Elt.defaults={borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0},Elt.defaultRoutes={backgroundColor:"backgroundColor"};const Dlt="function"===typeof Path2D;function Flt(t,e,n,r){Dlt&&!e.options.segment?function(t,e,n,r){let i=e._path;i||(i=e._path=new Path2D,e.path(i,n,r)&&i.closePath()),Ilt(t,e.options),t.stroke(i)}(t,e,n,r):function(t,e,n,r){const{segments:i,options:o}=e,a=Blt(e);for(const s of i)Ilt(t,o,s.style),t.beginPath(),a(t,e,s,{start:n,end:n+r-1})&&t.closePath(),t.stroke()}(t,e,n,r)}class Ult extends Ust{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const n=this.options;if((n.tension||"monotone"===n.cubicInterpolationMode)&&!n.stepped&&!this._pointsUpdated){const r=n.spanGaps?this._loop:this._fullLoop;Got(this._points,n,t,r,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=function(t,e){const n=t.points,r=t.options.spanGaps,i=n.length;if(!i)return[];const o=!!t._loop,{start:a,end:s}=function(t,e,n,r){let i=0,o=e-1;if(n&&!r)for(;i<e&&!t[i].skip;)i++;for(;i<e&&t[i].skip;)i++;for(i%=e,n&&(o+=i);o>i&&t[o%e].skip;)o--;return o%=e,{start:i,end:o}}(n,i,o,r);return wat(t,!0===r?[{start:a,end:s,loop:o}]:function(t,e,n,r){const i=t.length,o=[];let a,s=e,l=t[e];for(a=e+1;a<=n;++a){const n=t[a%i];n.skip||n.stop?l.skip||(r=!1,o.push({start:e%i,end:(a-1)%i,loop:r}),e=s=n.stop?a:null):(s=a,l.skip&&(e=a)),l=n}return null!==s&&o.push({start:e%i,end:s%i,loop:r}),o}(n,a,s<a?s+i:s,!!t._fullLoop&&0===a&&s===i-1),n,e)}(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,n=t.length;return n&&e[t[n-1].end]}interpolate(t,e){const n=this.options,r=t[e],i=this.points,o=bat(this,{property:e,start:r,end:r});if(!o.length)return;const a=[],s=function(t){return t.stepped?uat:t.tension||"monotone"===t.cubicInterpolationMode?cat:lat}(n);let l,u;for(l=0,u=o.length;l<u;++l){const{start:u,end:c}=o[l],h=i[u],d=i[c];if(h===d){a.push(h);continue}const f=s(h,d,Math.abs((r-h[e])/(d[e]-h[e])),n.stepped);f[e]=t[e],a.push(f)}return 1===a.length?a[0]:a}pathSegment(t,e,n){return Blt(this)(t,this,e,n)}path(t,e,n){const r=this.segments,i=Blt(this);let o=this._loop;e=e||0,n=n||this.points.length-e;for(const a of r)o&=i(t,this,a,{start:e,end:e+n-1});return!!o}draw(t,e,n,r){const i=this.options||{};(this.points||[]).length&&i.borderWidth&&(t.save(),Flt(t,this,n,r),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function Wlt(t,e,n,r){const i=t.options,{[n]:o}=t.getProps([n],r);return Math.abs(e-o)<i.radius+i.hitRadius}Ult.id="line",Ult.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0},Ult.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"},Ult.descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};class qlt extends Ust{constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,n){const r=this.options,{x:i,y:o}=this.getProps(["x","y"],n);return Math.pow(t-i,2)+Math.pow(e-o,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(t,e){return Wlt(this,t,"x",e)}inYRange(t,e){return Wlt(this,t,"y",e)}getCenterPoint(t){const{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}size(t){let e=(t=t||this.options||{}).radius||0;e=Math.max(e,e&&t.hoverRadius||0);return 2*(e+(e&&t.borderWidth||0))}draw(t,e){const n=this.options;this.skip||n.radius<.1||!eot(this,e,this.size(n)/2)||(t.strokeStyle=n.borderColor,t.lineWidth=n.borderWidth,t.fillStyle=n.backgroundColor,tot(t,n,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function Xlt(t,e){const{x:n,y:r,base:i,width:o,height:a}=t.getProps(["x","y","base","width","height"],e);let s,l,u,c,h;return t.horizontal?(h=a/2,s=Math.min(n,i),l=Math.max(n,i),u=r-h,c=r+h):(h=o/2,s=n-h,l=n+h,u=Math.min(r,i),c=Math.max(r,i)),{left:s,top:u,right:l,bottom:c}}function Zlt(t,e,n,r){return t?0:nit(e,n,r)}function Ylt(t){const e=Xlt(t),n=e.right-e.left,r=e.bottom-e.top,i=function(t,e,n){const r=t.options.borderWidth,i=t.borderSkipped,o=mot(r);return{t:Zlt(i.top,o.top,0,n),r:Zlt(i.right,o.right,0,e),b:Zlt(i.bottom,o.bottom,0,n),l:Zlt(i.left,o.left,0,e)}}(t,n/2,r/2),o=function(t,e,n){const{enableBorderRadius:r}=t.getProps(["enableBorderRadius"]),i=t.options.borderRadius,o=got(i),a=Math.min(e,n),s=t.borderSkipped,l=r||prt(i);return{topLeft:Zlt(!l||s.top||s.left,o.topLeft,0,a),topRight:Zlt(!l||s.top||s.right,o.topRight,0,a),bottomLeft:Zlt(!l||s.bottom||s.left,o.bottomLeft,0,a),bottomRight:Zlt(!l||s.bottom||s.right,o.bottomRight,0,a)}}(t,n/2,r/2);return{outer:{x:e.left,y:e.top,w:n,h:r,radius:o},inner:{x:e.left+i.l,y:e.top+i.t,w:n-i.l-i.r,h:r-i.t-i.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,o.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(i.b,i.r))}}}}function Klt(t,e,n,r){const i=null===e,o=null===n,a=t&&!(i&&o)&&Xlt(t,r);return a&&(i||rit(e,a.left,a.right))&&(o||rit(n,a.top,a.bottom))}function Glt(t,e){t.rect(e.x,e.y,e.w,e.h)}function Jlt(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=t.x!==n.x?-e:0,i=t.y!==n.y?-e:0,o=(t.x+t.w!==n.x+n.w?e:0)-r,a=(t.y+t.h!==n.y+n.h?e:0)-i;return{x:t.x+r,y:t.y+i,w:t.w+o,h:t.h+a,radius:t.radius}}qlt.id="point",qlt.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0},qlt.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};class Qlt extends Ust{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:n,backgroundColor:r}}=this,{inner:i,outer:o}=Ylt(this),a=(s=o.radius).topLeft||s.topRight||s.bottomLeft||s.bottomRight?uot:Glt;var s;t.save(),o.w===i.w&&o.h===i.h||(t.beginPath(),a(t,Jlt(o,e,i)),t.clip(),a(t,Jlt(i,-e,o)),t.fillStyle=n,t.fill("evenodd")),t.beginPath(),a(t,Jlt(i,e)),t.fillStyle=r,t.fill(),t.restore()}inRange(t,e,n){return Klt(this,t,e,n)}inXRange(t,e){return Klt(this,t,null,e)}inYRange(t,e){return Klt(this,null,t,e)}getCenterPoint(t){const{x:e,y:n,base:r,horizontal:i}=this.getProps(["x","y","base","horizontal"],t);return{x:i?(e+r)/2:e,y:i?n:(n+r)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}}Qlt.id="bar",Qlt.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0},Qlt.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};const _lt=(t,e)=>{let{boxHeight:n=e,boxWidth:r=e}=t;return t.usePointStyle&&(n=Math.min(n,e),r=Math.min(r,e)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(e,n)}};class $lt extends Ust{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,n){this.maxWidth=t,this.maxHeight=e,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=brt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter((e=>t.filter(e,this.chart.data)))),t.sort&&(e=e.sort(((e,n)=>t.sort(e,n,this.chart.data)))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display)return void(this.width=this.height=0);const n=t.labels,r=vot(n.font),i=r.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:s}=_lt(n,i);let l,u;e.font=r.string,this.isHorizontal()?(l=this.maxWidth,u=this._fitRows(o,i,a,s)+10):(u=this.maxHeight,l=this._fitCols(o,i,a,s)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(u,t.maxHeight||this.maxHeight)}_fitRows(t,e,n,r){const{ctx:i,maxWidth:o,options:{labels:{padding:a}}}=this,s=this.legendHitBoxes=[],l=this.lineWidths=[0],u=r+a;let c=t;i.textAlign="left",i.textBaseline="middle";let h=-1,d=-u;return this.legendItems.forEach(((t,f)=>{const p=n+e/2+i.measureText(t.text).width;(0===f||l[l.length-1]+p+2*a>o)&&(c+=u,l[l.length-(f>0?0:1)]=0,d+=u,h++),s[f]={left:0,top:d,row:h,width:p,height:r},l[l.length-1]+=p+a})),c}_fitCols(t,e,n,r){const{ctx:i,maxHeight:o,options:{labels:{padding:a}}}=this,s=this.legendHitBoxes=[],l=this.columnSizes=[],u=o-t;let c=a,h=0,d=0,f=0,p=0;return this.legendItems.forEach(((t,o)=>{const m=n+e/2+i.measureText(t.text).width;o>0&&d+r+2*a>u&&(c+=h+a,l.push({width:h,height:d}),f+=h+a,p++,h=d=0),s[o]={left:f,top:d,col:p,width:m,height:r},h=Math.max(h,m),d+=r+a})),c+=h,l.push({width:h,height:d}),c}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:n,labels:{padding:r},rtl:i}}=this,o=fat(i,this.left,this.width);if(this.isHorizontal()){let i=0,a=urt(n,this.left+r,this.right-this.lineWidths[i]);for(const s of e)i!==s.row&&(i=s.row,a=urt(n,this.left+r,this.right-this.lineWidths[i])),s.top+=this.top+t+r,s.left=o.leftForLtr(o.x(a),s.width),a+=s.width+r}else{let i=0,a=urt(n,this.top+t+r,this.bottom-this.columnSizes[i].height);for(const s of e)s.col!==i&&(i=s.col,a=urt(n,this.top+t+r,this.bottom-this.columnSizes[i].height)),s.top=a,s.left+=this.left+r,s.left=o.leftForLtr(o.x(s.left),s.width),a+=s.height+r}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){const t=this.ctx;not(t,this),this._draw(),rot(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:n,ctx:r}=this,{align:i,labels:o}=t,a=Git.color,s=fat(t.rtl,this.left,this.width),l=vot(o.font),{color:u,padding:c}=o,h=l.size,d=h/2;let f;this.drawTitle(),r.textAlign=s.textAlign("left"),r.textBaseline="middle",r.lineWidth=.5,r.font=l.string;const{boxWidth:p,boxHeight:m,itemHeight:g}=_lt(o,h),y=this.isHorizontal(),v=this._computeTitleHeight();f=y?{x:urt(i,this.left+c,this.right-n[0]),y:this.top+c+v,line:0}:{x:this.left+c,y:urt(i,this.top+v+c,this.bottom-e[0].height),line:0},pat(this.ctx,t.textDirection);const b=g+c;this.legendItems.forEach(((w,x)=>{r.strokeStyle=w.fontColor||u,r.fillStyle=w.fontColor||u;const M=r.measureText(w.text).width,k=s.textAlign(w.textAlign||(w.textAlign=o.textAlign)),S=p+d+M;let C=f.x,P=f.y;s.setWidth(this.width),y?x>0&&C+S+c>this.right&&(P=f.y+=b,f.line++,C=f.x=urt(i,this.left+c,this.right-n[f.line])):x>0&&P+b>this.bottom&&(C=f.x=C+e[f.line].width+c,f.line++,P=f.y=urt(i,this.top+v+c,this.bottom-e[f.line].height));!function(t,e,n){if(isNaN(p)||p<=0||isNaN(m)||m<0)return;r.save();const i=yrt(n.lineWidth,1);if(r.fillStyle=yrt(n.fillStyle,a),r.lineCap=yrt(n.lineCap,"butt"),r.lineDashOffset=yrt(n.lineDashOffset,0),r.lineJoin=yrt(n.lineJoin,"miter"),r.lineWidth=i,r.strokeStyle=yrt(n.strokeStyle,a),r.setLineDash(yrt(n.lineDash,[])),o.usePointStyle){const o={radius:p*Math.SQRT2/2,pointStyle:n.pointStyle,rotation:n.rotation,borderWidth:i},a=s.xPlus(t,p/2);tot(r,o,a,e+d)}else{const o=e+Math.max((h-m)/2,0),a=s.leftForLtr(t,p),l=got(n.borderRadius);r.beginPath(),Object.values(l).some((t=>0!==t))?uot(r,{x:a,y:o,w:p,h:m,radius:l}):r.rect(a,o,p,m),r.fill(),0!==i&&r.stroke()}r.restore()}(s.x(C),P,w),C=((t,e,n,r)=>t===(r?"left":"right")?n:"center"===t?(e+n)/2:e)(k,C+p+d,y?C+S:this.right,t.rtl),function(t,e,n){aot(r,n.text,t,e+g/2,l,{strikethrough:n.hidden,textAlign:s.textAlign(n.textAlign)})}(s.x(C),P,w),y?f.x+=S+c:f.y+=b})),mat(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,n=vot(e.font),r=yot(e.padding);if(!e.display)return;const i=fat(t.rtl,this.left,this.width),o=this.ctx,a=e.position,s=n.size/2,l=r.top+s;let u,c=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),u=this.top+l,c=urt(t.align,c,this.right-h);else{const e=this.columnSizes.reduce(((t,e)=>Math.max(t,e.height)),0);u=l+urt(t.align,this.top,this.bottom-e-t.labels.padding-this._computeTitleHeight())}const d=urt(a,c,c+h);o.textAlign=i.textAlign(lrt(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=n.string,aot(o,e.text,d,u,n)}_computeTitleHeight(){const t=this.options.title,e=vot(t.font),n=yot(t.padding);return t.display?e.lineHeight+n.height:0}_getLegendItemAt(t,e){let n,r,i;if(rit(t,this.left,this.right)&&rit(e,this.top,this.bottom))for(i=this.legendHitBoxes,n=0;n<i.length;++n)if(r=i[n],rit(t,r.left,r.left+r.width)&&rit(e,r.top,r.top+r.height))return this.legendItems[n];return null}handleEvent(t){const e=this.options;if(!function(t,e){if(("mousemove"===t||"mouseout"===t)&&(e.onHover||e.onLeave))return!0;if(e.onClick&&("click"===t||"mouseup"===t))return!0;return!1}(t.type,e))return;const n=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type||"mouseout"===t.type){const r=this._hoveredItem,i=((t,e)=>null!==t&&null!==e&&t.datasetIndex===e.datasetIndex&&t.index===e.index)(r,n);r&&!i&&brt(e.onLeave,[t,r,this],this),this._hoveredItem=n,n&&!i&&brt(e.onHover,[t,n,this],this)}else n&&brt(e.onClick,[t,n,this],this)}}var tut={id:"legend",_element:$lt,start(t,e,n){const r=t.legend=new $lt({ctx:t.ctx,options:n,chart:t});Cst.configure(t,r,n),Cst.addBox(t,r)},stop(t){Cst.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const r=t.legend;Cst.configure(t,r,n),r.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const r=e.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),e.hidden=!0):(i.show(r),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:o}}=t.legend.options;return t._getSortedDatasetMetas().map((t=>{const a=t.controller.getStyle(n?0:void 0),s=yot(a.borderWidth);return{text:e[t.index].label,fillStyle:a.backgroundColor,fontColor:o,hidden:!t.visible,lineCap:a.borderCapStyle,lineDash:a.borderDash,lineDashOffset:a.borderDashOffset,lineJoin:a.borderJoinStyle,lineWidth:(s.width+s.height)/4,strokeStyle:a.borderColor,pointStyle:r||a.pointStyle,rotation:a.rotation,textAlign:i||a.textAlign,borderRadius:0,datasetIndex:t.index}}),this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class eut extends Ust{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const n=this.options;if(this.left=0,this.top=0,!n.display)return void(this.width=this.height=this.right=this.bottom=0);this.width=this.right=t,this.height=this.bottom=e;const r=frt(n.text)?n.text.length:1;this._padding=yot(n.padding);const i=r*vot(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=i:this.width=i}isHorizontal(){const t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){const{top:e,left:n,bottom:r,right:i,options:o}=this,a=o.align;let s,l,u,c=0;return this.isHorizontal()?(l=urt(a,n,i),u=e+t,s=i-n):("left"===o.position?(l=n+t,u=urt(a,r,e),c=-.5*Irt):(l=i-t,u=urt(a,e,r),c=.5*Irt),s=r-e),{titleX:l,titleY:u,maxWidth:s,rotation:c}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const n=vot(e.font),r=n.lineHeight/2+this._padding.top,{titleX:i,titleY:o,maxWidth:a,rotation:s}=this._drawArgs(r);aot(t,e.text,0,0,n,{color:e.color,maxWidth:a,rotation:s,textAlign:lrt(e.align),textBaseline:"middle",translation:[i,o]})}}var nut={id:"title",_element:eut,start(t,e,n){!function(t,e){const n=new eut({ctx:t.ctx,options:e,chart:t});Cst.configure(t,n,e),Cst.addBox(t,n),t.titleBlock=n}(t,n)},stop(t){const e=t.titleBlock;Cst.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const r=t.titleBlock;Cst.configure(t,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};new WeakMap;const rut={average(t){if(!t.length)return!1;let e,n,r=0,i=0,o=0;for(e=0,n=t.length;e<n;++e){const n=t[e].element;if(n&&n.hasValue()){const t=n.tooltipPosition();r+=t.x,i+=t.y,++o}}return{x:r/o,y:i/o}},nearest(t,e){if(!t.length)return!1;let n,r,i,o=e.x,a=e.y,s=Number.POSITIVE_INFINITY;for(n=0,r=t.length;n<r;++n){const r=t[n].element;if(r&&r.hasValue()){const t=_rt(e,r.getCenterPoint());t<s&&(s=t,i=r)}}if(i){const t=i.tooltipPosition();o=t.x,a=t.y}return{x:o,y:a}}};function iut(t,e){return e&&(frt(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function out(t){return("string"===typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function aut(t,e){const{element:n,datasetIndex:r,index:i}=e,o=t.getDatasetMeta(r).controller,{label:a,value:s}=o.getLabelAndValue(i);return{chart:t,label:a,parsed:o.getParsed(i),raw:t.data.datasets[r].data[i],formattedValue:s,dataset:o.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function sut(t,e){const n=t.chart.ctx,{body:r,footer:i,title:o}=t,{boxWidth:a,boxHeight:s}=e,l=vot(e.bodyFont),u=vot(e.titleFont),c=vot(e.footerFont),h=o.length,d=i.length,f=r.length,p=yot(e.padding);let m=p.height,g=0,y=r.reduce(((t,e)=>t+e.before.length+e.lines.length+e.after.length),0);if(y+=t.beforeBody.length+t.afterBody.length,h&&(m+=h*u.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),y){m+=f*(e.displayColors?Math.max(s,l.lineHeight):l.lineHeight)+(y-f)*l.lineHeight+(y-1)*e.bodySpacing}d&&(m+=e.footerMarginTop+d*c.lineHeight+(d-1)*e.footerSpacing);let v=0;const b=function(t){g=Math.max(g,n.measureText(t).width+v)};return n.save(),n.font=u.string,wrt(t.title,b),n.font=l.string,wrt(t.beforeBody.concat(t.afterBody),b),v=e.displayColors?a+2+e.boxPadding:0,wrt(r,(t=>{wrt(t.before,b),wrt(t.lines,b),wrt(t.after,b)})),v=0,n.font=c.string,wrt(t.footer,b),n.restore(),g+=p.width,{width:g,height:m}}function lut(t,e,n,r){const{x:i,width:o}=n,{width:a,chartArea:{left:s,right:l}}=t;let u="center";return"center"===r?u=i<=(s+l)/2?"left":"right":i<=o/2?u="left":i>=a-o/2&&(u="right"),function(t,e,n,r){const{x:i,width:o}=r,a=n.caretSize+n.caretPadding;return"left"===t&&i+o+a>e.width||"right"===t&&i-o-a<0||void 0}(u,t,e,n)&&(u="center"),u}function uut(t,e,n){const r=n.yAlign||e.yAlign||function(t,e){const{y:n,height:r}=e;return n<r/2?"top":n>t.height-r/2?"bottom":"center"}(t,n);return{xAlign:n.xAlign||e.xAlign||lut(t,e,n,r),yAlign:r}}function cut(t,e,n,r){const{caretSize:i,caretPadding:o,cornerRadius:a}=t,{xAlign:s,yAlign:l}=n,u=i+o,{topLeft:c,topRight:h,bottomLeft:d,bottomRight:f}=got(a);let p=function(t,e){let{x:n,width:r}=t;return"right"===e?n-=r:"center"===e&&(n-=r/2),n}(e,s);const m=function(t,e,n){let{y:r,height:i}=t;return"top"===e?r+=n:r-="bottom"===e?i+n:i/2,r}(e,l,u);return"center"===l?"left"===s?p+=u:"right"===s&&(p-=u):"left"===s?p-=Math.max(c,d)+i:"right"===s&&(p+=Math.max(h,f)+i),{x:nit(p,0,r.width-e.width),y:nit(m,0,r.height-e.height)}}function hut(t,e,n){const r=yot(n.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-r.right:t.x+r.left}function dut(t){return iut([],out(t))}function fut(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}class put extends Ust{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart||t._chart,this._chart=this.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,n=this.options.setContext(this.getContext()),r=n.enabled&&e.options.animation&&n.animations,i=new Aat(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||(this.$context=(t=this.chart.getContext(),e=this,n=this._tooltipItems,wot(t,{tooltip:e,tooltipItems:n,type:"tooltip"})));var t,e,n}getTitle(t,e){const{callbacks:n}=e,r=n.beforeTitle.apply(this,[t]),i=n.title.apply(this,[t]),o=n.afterTitle.apply(this,[t]);let a=[];return a=iut(a,out(r)),a=iut(a,out(i)),a=iut(a,out(o)),a}getBeforeBody(t,e){return dut(e.callbacks.beforeBody.apply(this,[t]))}getBody(t,e){const{callbacks:n}=e,r=[];return wrt(t,(t=>{const e={before:[],lines:[],after:[]},i=fut(n,t);iut(e.before,out(i.beforeLabel.call(this,t))),iut(e.lines,i.label.call(this,t)),iut(e.after,out(i.afterLabel.call(this,t))),r.push(e)})),r}getAfterBody(t,e){return dut(e.callbacks.afterBody.apply(this,[t]))}getFooter(t,e){const{callbacks:n}=e,r=n.beforeFooter.apply(this,[t]),i=n.footer.apply(this,[t]),o=n.afterFooter.apply(this,[t]);let a=[];return a=iut(a,out(r)),a=iut(a,out(i)),a=iut(a,out(o)),a}_createItems(t){const e=this._active,n=this.chart.data,r=[],i=[],o=[];let a,s,l=[];for(a=0,s=e.length;a<s;++a)l.push(aut(this.chart,e[a]));return t.filter&&(l=l.filter(((e,r,i)=>t.filter(e,r,i,n)))),t.itemSort&&(l=l.sort(((e,r)=>t.itemSort(e,r,n)))),wrt(l,(e=>{const n=fut(t.callbacks,e);r.push(n.labelColor.call(this,e)),i.push(n.labelPointStyle.call(this,e)),o.push(n.labelTextColor.call(this,e))})),this.labelColors=r,this.labelPointStyles=i,this.labelTextColors=o,this.dataPoints=l,l}update(t,e){const n=this.options.setContext(this.getContext()),r=this._active;let i,o=[];if(r.length){const t=rut[n.position].call(this,r,this._eventPosition);o=this._createItems(n),this.title=this.getTitle(o,n),this.beforeBody=this.getBeforeBody(o,n),this.body=this.getBody(o,n),this.afterBody=this.getAfterBody(o,n),this.footer=this.getFooter(o,n);const e=this._size=sut(this,n),a=Object.assign({},t,e),s=uut(this.chart,n,a),l=cut(n,a,s,this.chart);this.xAlign=s.xAlign,this.yAlign=s.yAlign,i={opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(i={opacity:0});this._tooltipItems=o,this.$context=void 0,i&&this._resolveAnimations().update(this,i),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,n,r){const i=this.getCaretPosition(t,n,r);e.lineTo(i.x1,i.y1),e.lineTo(i.x2,i.y2),e.lineTo(i.x3,i.y3)}getCaretPosition(t,e,n){const{xAlign:r,yAlign:i}=this,{caretSize:o,cornerRadius:a}=n,{topLeft:s,topRight:l,bottomLeft:u,bottomRight:c}=got(a),{x:h,y:d}=t,{width:f,height:p}=e;let m,g,y,v,b,w;return"center"===i?(b=d+p/2,"left"===r?(m=h,g=m-o,v=b+o,w=b-o):(m=h+f,g=m+o,v=b-o,w=b+o),y=m):(g="left"===r?h+Math.max(s,u)+o:"right"===r?h+f-Math.max(l,c)-o:this.caretX,"top"===i?(v=d,b=v-o,m=g-o,y=g+o):(v=d+p,b=v+o,m=g+o,y=g-o),w=v),{x1:m,x2:g,x3:y,y1:v,y2:b,y3:w}}drawTitle(t,e,n){const r=this.title,i=r.length;let o,a,s;if(i){const l=fat(n.rtl,this.x,this.width);for(t.x=hut(this,n.titleAlign,n),e.textAlign=l.textAlign(n.titleAlign),e.textBaseline="middle",o=vot(n.titleFont),a=n.titleSpacing,e.fillStyle=n.titleColor,e.font=o.string,s=0;s<i;++s)e.fillText(r[s],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,s+1===i&&(t.y+=n.titleMarginBottom-a)}}_drawColorBox(t,e,n,r,i){const o=this.labelColors[n],a=this.labelPointStyles[n],{boxHeight:s,boxWidth:l,boxPadding:u}=i,c=vot(i.bodyFont),h=hut(this,"left",i),d=r.x(h),f=s<c.lineHeight?(c.lineHeight-s)/2:0,p=e.y+f;if(i.usePointStyle){const e={radius:Math.min(l,s)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},n=r.leftForLtr(d,l)+l/2,u=p+s/2;t.strokeStyle=i.multiKeyBackground,t.fillStyle=i.multiKeyBackground,tot(t,e,n,u),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,tot(t,e,n,u)}else{t.lineWidth=o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const e=r.leftForLtr(d,l-u),n=r.leftForLtr(r.xPlus(d,1),l-u-2),a=got(o.borderRadius);Object.values(a).some((t=>0!==t))?(t.beginPath(),t.fillStyle=i.multiKeyBackground,uot(t,{x:e,y:p,w:l,h:s,radius:a}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),uot(t,{x:n,y:p+1,w:l-2,h:s-2,radius:a}),t.fill()):(t.fillStyle=i.multiKeyBackground,t.fillRect(e,p,l,s),t.strokeRect(e,p,l,s),t.fillStyle=o.backgroundColor,t.fillRect(n,p+1,l-2,s-2))}t.fillStyle=this.labelTextColors[n]}drawBody(t,e,n){const{body:r}=this,{bodySpacing:i,bodyAlign:o,displayColors:a,boxHeight:s,boxWidth:l,boxPadding:u}=n,c=vot(n.bodyFont);let h=c.lineHeight,d=0;const f=fat(n.rtl,this.x,this.width),p=function(n){e.fillText(n,f.x(t.x+d),t.y+h/2),t.y+=h+i},m=f.textAlign(o);let g,y,v,b,w,x,M;for(e.textAlign=o,e.textBaseline="middle",e.font=c.string,t.x=hut(this,m,n),e.fillStyle=n.bodyColor,wrt(this.beforeBody,p),d=a&&"right"!==m?"center"===o?l/2+u:l+2+u:0,b=0,x=r.length;b<x;++b){for(g=r[b],y=this.labelTextColors[b],e.fillStyle=y,wrt(g.before,p),v=g.lines,a&&v.length&&(this._drawColorBox(e,t,b,f,n),h=Math.max(c.lineHeight,s)),w=0,M=v.length;w<M;++w)p(v[w]),h=c.lineHeight;wrt(g.after,p)}d=0,h=c.lineHeight,wrt(this.afterBody,p),t.y-=i}drawFooter(t,e,n){const r=this.footer,i=r.length;let o,a;if(i){const s=fat(n.rtl,this.x,this.width);for(t.x=hut(this,n.footerAlign,n),t.y+=n.footerMarginTop,e.textAlign=s.textAlign(n.footerAlign),e.textBaseline="middle",o=vot(n.footerFont),e.fillStyle=n.footerColor,e.font=o.string,a=0;a<i;++a)e.fillText(r[a],s.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+n.footerSpacing}}drawBackground(t,e,n,r){const{xAlign:i,yAlign:o}=this,{x:a,y:s}=t,{width:l,height:u}=n,{topLeft:c,topRight:h,bottomLeft:d,bottomRight:f}=got(r.cornerRadius);e.fillStyle=r.backgroundColor,e.strokeStyle=r.borderColor,e.lineWidth=r.borderWidth,e.beginPath(),e.moveTo(a+c,s),"top"===o&&this.drawCaret(t,e,n,r),e.lineTo(a+l-h,s),e.quadraticCurveTo(a+l,s,a+l,s+h),"center"===o&&"right"===i&&this.drawCaret(t,e,n,r),e.lineTo(a+l,s+u-f),e.quadraticCurveTo(a+l,s+u,a+l-f,s+u),"bottom"===o&&this.drawCaret(t,e,n,r),e.lineTo(a+d,s+u),e.quadraticCurveTo(a,s+u,a,s+u-d),"center"===o&&"left"===i&&this.drawCaret(t,e,n,r),e.lineTo(a,s+c),e.quadraticCurveTo(a,s,a+c,s),e.closePath(),e.fill(),r.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,n=this.$animations,r=n&&n.x,i=n&&n.y;if(r||i){const n=rut[t.position].call(this,this._active,this._eventPosition);if(!n)return;const o=this._size=sut(this,t),a=Object.assign({},n,this._size),s=uut(e,t,a),l=cut(t,a,s,e);r._to===l.x&&i._to===l.y||(this.xAlign=s.xAlign,this.yAlign=s.yAlign,this.width=o.width,this.height=o.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,l))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let n=this.opacity;if(!n)return;this._updateAnimationTarget(e);const r={width:this.width,height:this.height},i={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;const o=yot(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=n,this.drawBackground(i,t,r,e),pat(t,e.textDirection),i.y+=o.top,this.drawTitle(i,t,e),this.drawBody(i,t,e),this.drawFooter(i,t,e),mat(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const n=this._active,r=t.map((t=>{let{datasetIndex:e,index:n}=t;const r=this.chart.getDatasetMeta(e);if(!r)throw new Error("Cannot find a dataset at index "+e);return{datasetIndex:e,element:r.data[n],index:n}})),i=!xrt(n,r),o=this._positionChanged(r,e);(i||o)&&(this._active=r,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const r=this.options,i=this._active||[],o=this._getActiveElements(t,i,e,n),a=this._positionChanged(o,t),s=e||!xrt(o,i)||a;return s&&(this._active=o,(r.enabled||r.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),s}_getActiveElements(t,e,n,r){const i=this.options;if("mouseout"===t.type)return[];if(!r)return e;const o=this.chart.getElementsAtEventForMode(t,i.mode,i,n);return i.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:n,caretY:r,options:i}=this,o=rut[i.position].call(this,t,e);return!1!==o&&(n!==o.x||r!==o.y)}}put.positioners=rut;var mut={id:"tooltip",_element:put,positioners:rut,afterInit(t,e,n){n&&(t.tooltip=new put({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(!1===t.notifyPlugins("beforeTooltipDraw",n))return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:{beforeTitle:crt,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,r=n?n.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(r>0&&e.dataIndex<r)return n[e.dataIndex]}return""},afterTitle:crt,beforeBody:crt,beforeLabel:crt,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return drt(n)||(e+=n),e},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:crt,afterBody:crt,beforeFooter:crt,footer:crt,afterFooter:crt}},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};function gut(t,e,n,r){const i=t.indexOf(e);if(-1===i)return((t,e,n,r)=>("string"===typeof e?(n=t.push(e)-1,r.unshift({index:n,label:e})):isNaN(e)&&(n=null),n))(t,e,n,r);return i!==t.lastIndexOf(e)?n:i}class yut extends $st{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const t=this.getLabels();for(const{index:n,label:r}of e)t[n]===r&&t.splice(n,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(drt(t))return null;const n=this.getLabels();return((t,e)=>null===t?null:nit(Math.round(t),0,e))(e=isFinite(e)&&n[e]===t?e:gut(n,t,yrt(e,t),this._addedLabels),n.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:n,max:r}=this.getMinMax(!0);"ticks"===this.options.bounds&&(t||(n=0),e||(r=this.getLabels().length-1)),this.min=n,this.max=r}buildTicks(){const t=this.min,e=this.max,n=this.options.offset,r=[];let i=this.getLabels();i=0===t&&e===i.length-1?i:i.slice(t,e+1),this._valueRange=Math.max(i.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let o=t;o<=e;o++)r.push({value:o});return r}getLabelForValue(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!==typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function vut(t,e){const n=[],{bounds:r,step:i,min:o,max:a,precision:s,count:l,maxTicks:u,maxDigits:c,includeBounds:h}=t,d=i||1,f=u-1,{min:p,max:m}=e,g=!drt(o),y=!drt(a),v=!drt(l),b=(m-p)/(c+1);let w,x,M,k,S=qrt((m-p)/f/d)*d;if(S<1e-14&&!g&&!y)return[{value:p},{value:m}];k=Math.ceil(m/S)-Math.floor(p/S),k>f&&(S=qrt(k*S/f/d)*d),drt(s)||(w=Math.pow(10,s),S=Math.ceil(S*w)/w),"ticks"===r?(x=Math.floor(p/S)*S,M=Math.ceil(m/S)*S):(x=p,M=m),g&&y&&i&&function(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}((a-o)/i,S/1e3)?(k=Math.round(Math.min((a-o)/S,u)),S=(a-o)/k,x=o,M=a):v?(x=g?o:x,M=y?a:M,k=l-1,S=(M-x)/k):(k=(M-x)/S,k=Zrt(k,Math.round(k),S/1e3)?Math.round(k):Math.ceil(k));const C=Math.max(Jrt(S),Jrt(x));w=Math.pow(10,drt(s)?C:s),x=Math.round(x*w)/w,M=Math.round(M*w)/w;let P=0;for(g&&(h&&x!==o?(n.push({value:o}),x<o&&P++,Zrt(Math.round((x+P*S)*w)/w,o,but(o,b,t))&&P++):x<o&&P++);P<k;++P)n.push({value:Math.round((x+P*S)*w)/w});return y&&h&&M!==a?n.length&&Zrt(n[n.length-1].value,a,but(a,b,t))?n[n.length-1].value=a:n.push({value:a}):y&&M!==a||n.push({value:M}),n}function but(t,e,n){let{horizontal:r,minRotation:i}=n;const o=Krt(i),a=(r?Math.sin(o):Math.cos(o))||.001,s=.75*e*(""+t).length;return Math.min(e/a,s)}yut.id="category",yut.defaults={ticks:{callback:yut.prototype.getLabelForValue}};class wut extends $st{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return drt(t)||("number"===typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:r,max:i}=this;const o=t=>r=e?r:t,a=t=>i=n?i:t;if(t){const t=Wrt(r),e=Wrt(i);t<0&&e<0?a(0):t>0&&e>0&&o(0)}if(r===i){let e=1;(i>=Number.MAX_SAFE_INTEGER||r<=Number.MIN_SAFE_INTEGER)&&(e=Math.abs(.05*i)),a(i+e),t||o(r-e)}this.min=r,this.max=i}getTickLimit(){const t=this.options.ticks;let e,{maxTicksLimit:n,stepSize:r}=t;return r?(e=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,e>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${e} ticks. Limiting to 1000.`),e=1e3)):(e=this.computeTickLimit(),n=n||11),n&&(e=Math.min(n,e)),e}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let n=this.getTickLimit();n=Math.max(2,n);const r=vut({maxTicks:n,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},this._range||this);return"ticks"===t.bounds&&Yrt(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){const t=this.ticks;let e=this.min,n=this.max;if(super.configure(),this.options.offset&&t.length){const r=(n-e)/Math.max(t.length-1,1)/2;e-=r,n+=r}this._startValue=e,this._endValue=n,this._valueRange=n-e}getLabelForValue(t){return dat(t,this.chart.options.locale,this.options.ticks.format)}}class xut extends wut{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=mrt(t)?t:0,this.max=mrt(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,n=Krt(this.options.ticks.minRotation),r=(t?Math.sin(n):Math.cos(n))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,i.lineHeight/r))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}function Mut(t){return 1===t/Math.pow(10,Math.floor(Urt(t)))}xut.id="linear",xut.defaults={ticks:{callback:qst.formatters.numeric}};class kut extends $st{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const n=wut.prototype.parse.apply(this,[t,e]);if(0!==n)return mrt(n)&&n>0?n:null;this._zero=!0}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=mrt(t)?Math.max(0,t):null,this.max=mrt(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let n=this.min,r=this.max;const i=e=>n=t?n:e,o=t=>r=e?r:t,a=(t,e)=>Math.pow(10,Math.floor(Urt(t))+e);n===r&&(n<=0?(i(1),o(10)):(i(a(n,-1)),o(a(r,1)))),n<=0&&i(a(r,-1)),r<=0&&o(a(n,1)),this._zero&&this.min!==this._suggestedMin&&n===a(this.min,0)&&i(a(n,-1)),this.min=n,this.max=r}buildTicks(){const t=this.options,e=function(t,e){const n=Math.floor(Urt(e.max)),r=Math.ceil(e.max/Math.pow(10,n)),i=[];let o=grt(t.min,Math.pow(10,Math.floor(Urt(e.min)))),a=Math.floor(Urt(o)),s=Math.floor(o/Math.pow(10,a)),l=a<0?Math.pow(10,Math.abs(a)):1;do{i.push({value:o,major:Mut(o)}),++s,10===s&&(s=1,++a,l=a>=0?1:l),o=Math.round(s*Math.pow(10,a)*l)/l}while(a<n||a===n&&s<r);const u=grt(t.max,o);return i.push({value:u,major:Mut(o)}),i}({min:this._userMin,max:this._userMax},this);return"ticks"===t.bounds&&Yrt(e,this,"value"),t.reverse?(e.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),e}getLabelForValue(t){return void 0===t?"0":dat(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Urt(t),this._valueRange=Urt(this.max)-Urt(t)}getPixelForValue(t){return void 0!==t&&0!==t||(t=this.min),null===t||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Urt(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function Sut(t){const e=t.ticks;if(e.display&&t.display){const t=yot(e.backdropPadding);return yrt(e.font&&e.font.size,Git.font.size)+t.height}return 0}function Cut(t,e,n,r,i){return t===r||t===i?{start:e-n/2,end:e+n/2}:t<r||t>i?{start:e-n,end:e}:{start:e,end:e+n}}function Put(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},n=Object.assign({},e),r=[],i=[],o=t._pointLabels.length,a=t.options.pointLabels,s=a.centerPointLabels?Irt/o:0;for(let h=0;h<o;h++){const o=a.setContext(t.getPointLabelContext(h));i[h]=o.padding;const d=t.getPointPosition(h,t.drawingArea+i[h],s),f=vot(o.font),p=(l=t.ctx,u=f,c=frt(c=t._pointLabels[h])?c:[c],{w:Qit(l,u.string,c),h:c.length*u.lineHeight});r[h]=p;const m=tit(t.getIndexAngle(h)+s),g=Math.round(Grt(m));Tut(n,e,m,Cut(g,d.x,p.w,0,180),Cut(g,d.y,p.h,90,270))}var l,u,c;t.setCenterPoint(e.l-n.l,n.r-e.r,e.t-n.t,n.b-e.b),t._pointLabelItems=function(t,e,n){const r=[],i=t._pointLabels.length,o=t.options,a=Sut(o)/2,s=t.drawingArea,l=o.pointLabels.centerPointLabels?Irt/i:0;for(let u=0;u<i;u++){const i=t.getPointPosition(u,s+a+n[u],l),o=Math.round(Grt(tit(i.angle+Brt))),c=e[u],h=Out(i.y,c.h,o),d=Aut(o),f=Nut(i.x,c.w,d);r.push({x:i.x,y:h,textAlign:d,left:f,top:h,right:f+c.w,bottom:h+c.h})}return r}(t,r,i)}function Tut(t,e,n,r,i){const o=Math.abs(Math.sin(n)),a=Math.abs(Math.cos(n));let s=0,l=0;r.start<e.l?(s=(e.l-r.start)/o,t.l=Math.min(t.l,e.l-s)):r.end>e.r&&(s=(r.end-e.r)/o,t.r=Math.max(t.r,e.r+s)),i.start<e.t?(l=(e.t-i.start)/a,t.t=Math.min(t.t,e.t-l)):i.end>e.b&&(l=(i.end-e.b)/a,t.b=Math.max(t.b,e.b+l))}function Aut(t){return 0===t||180===t?"center":t<180?"left":"right"}function Nut(t,e,n){return"right"===n?t-=e:"center"===n&&(t-=e/2),t}function Out(t,e,n){return 90===n||270===n?t-=e/2:(n>270||n<90)&&(t-=e),t}function jut(t,e,n,r){const{ctx:i}=t;if(n)i.arc(t.xCenter,t.yCenter,e,0,zrt);else{let n=t.getPointPosition(0,e);i.moveTo(n.x,n.y);for(let o=1;o<r;o++)n=t.getPointPosition(o,e),i.lineTo(n.x,n.y)}}kut.id="logarithmic",kut.defaults={ticks:{callback:qst.formatters.logarithmic,major:{enabled:!0}}};class Vut extends wut{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=yot(Sut(this.options)/2),e=this.width=this.maxWidth-t.width,n=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+n/2+t.top),this.drawingArea=Math.floor(Math.min(e,n)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=mrt(t)&&!isNaN(t)?t:0,this.max=mrt(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Sut(this.options))}generateTickLabels(t){wut.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map(((t,e)=>{const n=brt(this.options.pointLabels.callback,[t,e],this);return n||0===n?n:""})).filter(((t,e)=>this.chart.getDataVisibility(e)))}fit(){const t=this.options;t.display&&t.pointLabels.display?Put(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,n,r){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((n-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,n,r))}getIndexAngle(t){return tit(t*(zrt/(this._pointLabels.length||1))+Krt(this.options.startAngle||0))}getDistanceFromCenterForValue(t){if(drt(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(drt(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const n=e[t];return function(t,e,n){return wot(t,{label:n,index:e,type:"pointLabel"})}(this.getContext(),t,n)}}getPointPosition(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=this.getIndexAngle(t)-Brt+n;return{x:Math.cos(r)*e+this.xCenter,y:Math.sin(r)*e+this.yCenter,angle:r}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:n,right:r,bottom:i}=this._pointLabelItems[t];return{left:e,top:n,right:r,bottom:i}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const n=this.ctx;n.save(),n.beginPath(),jut(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),n.closePath(),n.fillStyle=t,n.fill(),n.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:n,grid:r}=e,i=this._pointLabels.length;let o,a,s;if(e.pointLabels.display&&function(t,e){const{ctx:n,options:{pointLabels:r}}=t;for(let i=e-1;i>=0;i--){const e=r.setContext(t.getPointLabelContext(i)),o=vot(e.font),{x:a,y:s,textAlign:l,left:u,top:c,right:h,bottom:d}=t._pointLabelItems[i],{backdropColor:f}=e;if(!drt(f)){const t=got(e.borderRadius),r=yot(e.backdropPadding);n.fillStyle=f;const i=u-r.left,o=c-r.top,a=h-u+r.width,s=d-c+r.height;Object.values(t).some((t=>0!==t))?(n.beginPath(),uot(n,{x:i,y:o,w:a,h:s,radius:t}),n.fill()):n.fillRect(i,o,a,s)}aot(n,t._pointLabels[i],a,s+o.lineHeight/2,o,{color:e.color,textAlign:l,textBaseline:"middle"})}}(this,i),r.display&&this.ticks.forEach(((t,e)=>{if(0!==e){a=this.getDistanceFromCenterForValue(t.value);!function(t,e,n,r){const i=t.ctx,o=e.circular,{color:a,lineWidth:s}=e;!o&&!r||!a||!s||n<0||(i.save(),i.strokeStyle=a,i.lineWidth=s,i.setLineDash(e.borderDash),i.lineDashOffset=e.borderDashOffset,i.beginPath(),jut(t,n,o,r),i.closePath(),i.stroke(),i.restore())}(this,r.setContext(this.getContext(e-1)),a,i)}})),n.display){for(t.save(),o=i-1;o>=0;o--){const r=n.setContext(this.getPointLabelContext(o)),{color:i,lineWidth:l}=r;l&&i&&(t.lineWidth=l,t.strokeStyle=i,t.setLineDash(r.borderDash),t.lineDashOffset=r.borderDashOffset,a=this.getDistanceFromCenterForValue(e.ticks.reverse?this.min:this.max),s=this.getPointPosition(o,a),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(s.x,s.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,n=e.ticks;if(!n.display)return;const r=this.getIndexAngle(0);let i,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(r),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach(((r,a)=>{if(0===a&&!e.reverse)return;const s=n.setContext(this.getContext(a)),l=vot(s.font);if(i=this.getDistanceFromCenterForValue(this.ticks[a].value),s.showLabelBackdrop){t.font=l.string,o=t.measureText(r.label).width,t.fillStyle=s.backdropColor;const e=yot(s.backdropPadding);t.fillRect(-o/2-e.left,-i-l.size/2-e.top,o+e.width,l.size+e.height)}aot(t,r.label,0,-i,l,{color:s.color})})),t.restore()}drawTitle(){}}Vut.id="radialLinear",Vut.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:qst.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback:t=>t,padding:5,centerPointLabels:!1}},Vut.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"},Vut.descriptors={angleLines:{_fallback:"grid"}};const Eut={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Iut=Object.keys(Eut);function zut(t,e){return t-e}function Lut(t,e){if(drt(e))return null;const n=t._adapter,{parser:r,round:i,isoWeekday:o}=t._parseOpts;let a=e;return"function"===typeof r&&(a=r(a)),mrt(a)||(a="string"===typeof r?n.parse(a,r):n.parse(a)),null===a?null:(i&&(a="week"!==i||!Xrt(o)&&!0!==o?n.startOf(a,i):n.startOf(a,"isoWeek",o)),+a)}function Rut(t,e,n,r){const i=Iut.length;for(let o=Iut.indexOf(t);o<i-1;++o){const t=Eut[Iut[o]],i=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((n-e)/(i*t.size))<=r)return Iut[o]}return Iut[i-1]}function Hut(t,e,n){if(n){if(n.length){const{lo:r,hi:i}=xot(n,e);t[n[r]>=e?n[r]:n[i]]=!0}}else t[e]=!0}function But(t,e,n){const r=[],i={},o=e.length;let a,s;for(a=0;a<o;++a)s=e[a],i[s]=a,r.push({value:s,major:!1});return 0!==o&&n?function(t,e,n,r){const i=t._adapter,o=+i.startOf(e[0].value,r),a=e[e.length-1].value;let s,l;for(s=o;s<=a;s=+i.add(s,1,r))l=n[s],l>=0&&(e[l].major=!0);return e}(t,r,i,n):r}class Dut extends $st{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e){const n=t.time||(t.time={}),r=this._adapter=new ost._date(t.adapters.date);Prt(n.displayFormats,r.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:Lut(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,n=t.time.unit||"day";let{min:r,max:i,minDefined:o,maxDefined:a}=this.getUserBounds();function s(t){o||isNaN(t.min)||(r=Math.min(r,t.min)),a||isNaN(t.max)||(i=Math.max(i,t.max))}o&&a||(s(this._getLabelBounds()),"ticks"===t.bounds&&"labels"===t.ticks.source||s(this.getMinMax(!1))),r=mrt(r)&&!isNaN(r)?r:+e.startOf(Date.now(),n),i=mrt(i)&&!isNaN(i)?i:+e.endOf(Date.now(),n)+1,this.min=Math.min(r,i-1),this.max=Math.max(r+1,i)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],n=t[t.length-1]),{min:e,max:n}}buildTicks(){const t=this.options,e=t.time,n=t.ticks,r="labels"===n.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);const i=this.min,o=function(t,e,n){let r=0,i=t.length;for(;r<i&&t[r]<e;)r++;for(;i>r&&t[i-1]>n;)i--;return r>0||i<t.length?t.slice(r,i):t}(r,i,this.max);return this._unit=e.unit||(n.autoSkip?Rut(e.minUnit,this.min,this.max,this._getLabelCapacity(i)):function(t,e,n,r,i){for(let o=Iut.length-1;o>=Iut.indexOf(n);o--){const n=Iut[o];if(Eut[n].common&&t._adapter.diff(i,r,n)>=e-1)return n}return Iut[n?Iut.indexOf(n):0]}(this,o.length,e.minUnit,this.min,this.max)),this._majorUnit=n.major.enabled&&"year"!==this._unit?function(t){for(let e=Iut.indexOf(t)+1,n=Iut.length;e<n;++e)if(Eut[Iut[e]].common)return Iut[e]}(this._unit):void 0,this.initOffsets(r),t.reverse&&o.reverse(),But(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map((t=>+t.value)))}initOffsets(t){let e,n,r=0,i=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),r=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,n=this.getDecimalForValue(t[t.length-1]),i=1===t.length?n:(n-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;r=nit(r,0,o),i=nit(i,0,o),this._offsets={start:r,end:i,factor:1/(r+1+i)}}_generate(){const t=this._adapter,e=this.min,n=this.max,r=this.options,i=r.time,o=i.unit||Rut(i.minUnit,e,n,this._getLabelCapacity(e)),a=yrt(i.stepSize,1),s="week"===o&&i.isoWeekday,l=Xrt(s)||!0===s,u={};let c,h,d=e;if(l&&(d=+t.startOf(d,"isoWeek",s)),d=+t.startOf(d,l?"day":o),t.diff(n,e,o)>1e5*a)throw new Error(e+" and "+n+" are too far apart with stepSize of "+a+" "+o);const f="data"===r.ticks.source&&this.getDataTimestamps();for(c=d,h=0;c<n;c=+t.add(c,a,o),h++)Hut(u,c,f);return c!==n&&"ticks"!==r.bounds&&1!==h||Hut(u,c,f),Object.keys(u).sort(((t,e)=>t-e)).map((t=>+t))}getLabelForValue(t){const e=this._adapter,n=this.options.time;return n.tooltipFormat?e.format(t,n.tooltipFormat):e.format(t,n.displayFormats.datetime)}_tickFormatFunction(t,e,n,r){const i=this.options,o=i.time.displayFormats,a=this._unit,s=this._majorUnit,l=a&&o[a],u=s&&o[s],c=n[e],h=s&&u&&c&&c.major,d=this._adapter.format(t,r||(h?u:l)),f=i.ticks.callback;return f?brt(f,[d,e,n],this):d}generateTickLabels(t){let e,n,r;for(e=0,n=t.length;e<n;++e)r=t[e],r.label=this._tickFormatFunction(r.value,e,t)}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,n=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+n)*e.factor)}getValueForPixel(t){const e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+n*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,n=this.ctx.measureText(t).width,r=Krt(this.isHorizontal()?e.maxRotation:e.minRotation),i=Math.cos(r),o=Math.sin(r),a=this._resolveTickFontOptions(0).size;return{w:n*i+a*o,h:n*o+a*i}}_getLabelCapacity(t){const e=this.options.time,n=e.displayFormats,r=n[e.unit]||n.millisecond,i=this._tickFormatFunction(t,0,But(this,[t],this._majorUnit),r),o=this._getLabelSize(i),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t,e,n=this._cache.data||[];if(n.length)return n;const r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(t=0,e=r.length;t<e;++t)n=n.concat(r[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(n)}getLabelTimestamps(){const t=this._cache.labels||[];let e,n;if(t.length)return t;const r=this.getLabels();for(e=0,n=r.length;e<n;++e)t.push(Lut(this,r[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Pot(t.sort(zut))}}function Fut(t,e,n){let r,i,o,a,s=0,l=t.length-1;n?(e>=t[s].pos&&e<=t[l].pos&&({lo:s,hi:l}=Mot(t,"pos",e)),({pos:r,time:o}=t[s]),({pos:i,time:a}=t[l])):(e>=t[s].time&&e<=t[l].time&&({lo:s,hi:l}=Mot(t,"time",e)),({time:r,pos:o}=t[s]),({time:i,pos:a}=t[l]));const u=i-r;return u?o+(a-o)*(e-r)/u:o}Dut.id="time",Dut.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};class Uut extends Dut{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Fut(e,this.min),this._tableRange=Fut(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:n}=this,r=[],i=[];let o,a,s,l,u;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=n&&r.push(l);if(r.length<2)return[{time:e,pos:0},{time:n,pos:1}];for(o=0,a=r.length;o<a;++o)u=r[o+1],s=r[o-1],l=r[o],Math.round((u+s)/2)!==l&&i.push({time:l,pos:o/(a-1)});return i}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),n=this.getLabelTimestamps();return t=e.length&&n.length?this.normalize(e.concat(n)):e.length?e:n,t=this._cache.all=t,t}getDecimalForValue(t){return(Fut(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return Fut(this._table,n*this._tableRange+this._minPos,!0)}}Uut.id="timeseries",Uut.defaults=Dut.defaults;const Wut="label";function qut(t,e){"function"===typeof t?t(e):t&&(t.current=e)}function Xut(t,e){t.labels=e}function Zut(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Wut;const r=[];t.datasets=e.map((e=>{const i=t.datasets.find((t=>t[n]===e[n]));return i&&e.data&&!r.includes(i)?(r.push(i),Object.assign(i,e),i):{...e}}))}function Yut(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Wut;const n={labels:[],datasets:[]};return Xut(n,t.labels),Zut(n,t.datasets,e),n}function Kut(t,e){let{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:o,type:a,data:s,options:l,plugins:u=[],fallbackContent:c,updateMode:h,...d}=t;const f=(0,k.useRef)(null),p=(0,k.useRef)(),m=()=>{f.current&&(p.current=new Clt(f.current,{type:a,data:Yut(s,o),options:l,plugins:u}),qut(e,p.current))},g=()=>{qut(e,null),p.current&&(p.current.destroy(),p.current=null)};return(0,k.useEffect)((()=>{var t,e;!i&&p.current&&l&&(t=p.current,e=l,t.options={...e})}),[i,l]),(0,k.useEffect)((()=>{!i&&p.current&&Xut(p.current.config.data,s.labels)}),[i,s.labels]),(0,k.useEffect)((()=>{!i&&p.current&&s.datasets&&Zut(p.current.config.data,s.datasets,o)}),[i,s.datasets]),(0,k.useEffect)((()=>{p.current&&(i?(g(),setTimeout(m)):p.current.update(h))}),[i,l,s.labels,s.datasets,h]),(0,k.useEffect)((()=>(m(),()=>g())),[]),k.createElement("canvas",Object.assign({ref:f,role:"img",height:n,width:r},d),c)}const Gut=(0,k.forwardRef)(Kut);function Jut(t,e){return Clt.register(e),(0,k.forwardRef)(((e,n)=>k.createElement(Gut,Object.assign({},e,{ref:n,type:t}))))}const Qut=Jut("line",_at),_ut=Jut("bar",Gat),$ut=Jut("doughnut",Qat),tct=Jut("pie",tst);Clt.register(Elt,mut);const ect=t=>{let{value:e,value2:n}=t;const r=!e&&!e;r&&(e=1,n=0);const{mode:i}=yf(),o=r?Xu.buttons.toggle.background[i]:[Xu.text.secondary[i],Xu.transparent[i]],a=r?Xu.buttons.toggle.background[i]:Xu.transparent[i],s={borderColor:o,hoverBorderColor:o,backgroundColor:a,hoverBackgroundColor:a,responsive:!0,maintainAspectRatio:!1,spacing:0,plugins:{legend:{display:!1},tooltip:{enabled:!1}}},l={datasets:[{data:[e,n],backgroundColor:a,borderWidth:1.25}]};return(0,Wd.jsx)("div",{className:"graph",style:{width:36,height:36},children:(0,Wd.jsx)(tct,{options:s,data:l})})},nct=t=>{var e,n,r;const{label:i,value:o,unit:a,assistant:s}=t,l=void 0!==s,u=null!==(e=null===s||void 0===s?void 0:s.page)&&void 0!==e?e:"",c=null!==(n=null===s||void 0===s?void 0:s.key)&&void 0!==n?n:"",h=null!==(r=t.currency)&&void 0!==r?r:"";return(0,Wd.jsx)(ict,{children:(0,Wd.jsx)("div",{className:"content chart",children:(0,Wd.jsxs)("div",{className:"labels",children:[(0,Wd.jsxs)("h2",{children:[(0,Wd.jsx)(Gnt.Z,{ease:"quintInOut",precision:2,speed:250,trail:!1,value:o,useLocaleString:!0,currency:h}),a&&(0,Wd.jsxs)(Wd.Fragment,{children:["\xa0",a]})]}),(0,Wd.jsxs)("h4",{children:[i,l&&(0,Wd.jsx)(ort,{page:u,title:c})]})]})})})},rct=t=>{var e,n;const{label:r,value:i,assistant:o}=t,a=void 0!==o,s=null!==(e=null===o||void 0===o?void 0:o.page)&&void 0!==e?e:"",l=null!==(n=null===o||void 0===o?void 0:o.key)&&void 0!==n?n:"";return(0,Wd.jsx)(ict,{children:(0,Wd.jsx)("div",{className:"content chart",children:(0,Wd.jsxs)("div",{className:"labels",children:[(0,Wd.jsx)("h2",{children:i}),(0,Wd.jsxs)("h4",{children:[r,a&&(0,Wd.jsx)(ort,{page:s,title:l})]})]})})})},ict=t=>{let{children:e}=t;return(0,Wd.jsx)(vv,{whileHover:{scale:1.02},transition:{duration:.5,type:"spring",bounce:.4},children:e})},oct=t=>{var e,n;const{label:r,stat:i,graph:o,tooltip:a,assistant:s}=t,l=void 0!==s,u=null!==(e=null===s||void 0===s?void 0:s.page)&&void 0!==e?e:"",c=null!==(n=null===s||void 0===s?void 0:s.key)&&void 0!==n?n:"",h=0!==(null===i||void 0===i?void 0:i.value)||0===(null===i||void 0===i?void 0:i.total),d=!(null===i||void 0===i||!i.total);return(0,Wd.jsx)(ict,{children:(0,Wd.jsxs)("div",{className:"content chart",children:[(0,Wd.jsxs)("div",{className:"chart",children:[(0,Wd.jsx)(ect,{value:null===o||void 0===o?void 0:o.value1,value2:null===o||void 0===o?void 0:o.value2}),a&&(0,Wd.jsx)("div",{className:"tooltip",children:(0,Wd.jsx)("p",{children:a})})]}),(0,Wd.jsxs)("div",{className:"labels",children:[(0,Wd.jsx)("h2",{children:h?(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Gnt.Z,{ease:"quintInOut",precision:2,speed:250,trail:!1,value:null===i||void 0===i?void 0:i.value,useLocaleString:!0}),(null===i||void 0===i?void 0:i.unit)&&(0,Wd.jsxs)(Wd.Fragment,{children:["\xa0",null===i||void 0===i?void 0:i.unit]}),d&&(0,Wd.jsxs)("span",{className:"total",children:["/"," ",(0,Wd.jsx)(Gnt.Z,{ease:"quintInOut",precision:2,speed:250,trail:!1,value:null===i||void 0===i?void 0:i.total,useLocaleString:!0}),(null===i||void 0===i?void 0:i.unit)&&(0,Wd.jsxs)(Wd.Fragment,{children:["\xa0",null===i||void 0===i?void 0:i.unit]})]})]}):(0,Wd.jsx)(Wd.Fragment,{children:"0"})}),(0,Wd.jsxs)("h4",{children:[r,l&&(0,Wd.jsx)(ort,{page:u,title:c})]})]})]})})},act=()=>{const{staking:t}=btt(),{totalNominators:e,maxNominatorsCount:n}=t;let r=0;n.gt(new($d())(0))&&(r=e.div(n.div(new($d())(100))).toNumber());const i={label:"Total Nominators",stat:{value:e.toNumber(),total:n,unit:""},graph:{value1:e.toNumber(),value2:n.sub(e).toNumber()},tooltip:`${r.toFixed(2)}%`,assistant:{page:"overview",key:"Nominators"}};return(0,Wd.jsx)(oct,{...i})},sct=()=>{const{network:t}=IJ(),{units:e}=t,{metrics:n}=att(),{totalIssuance:r}=n,{staking:i}=btt(),{lastTotalStake:o}=i;let a=0;r.gt(new($d())(0))&&(a=o.div(r.div(new($d())(100))).toNumber());const s=o.div(new($d())(10**e)),l=r.div(new($d())(10**e)),u={label:"Supply Staked",stat:{value:s.toNumber(),unit:t.unit},graph:{value1:s.toNumber(),value2:l.sub(s).toNumber()},tooltip:`${a.toFixed(2)}%`,assistant:{page:"overview",key:"Supply Staked"}};return(0,Wd.jsx)(oct,{...u})},lct=()=>{const{consts:t}=IJ(),{maxElectingVoters:e}=t,{eraStakers:n}=btt(),{activeNominators:r}=n;let i=0;e>0&&(i=r/new($d())(e).div(new($d())(100)).toNumber());const o={label:"Active Nominators",stat:{value:r,total:e,unit:""},graph:{value1:r,value2:e-r},tooltip:`${i.toFixed(2)}%`,assistant:{page:"overview",key:"Active Nominators"}};return(0,Wd.jsx)(oct,{...o})};var uct=function(){return uct=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},uct.apply(this,arguments)};var cct=function(t){var e=t.animate,n=t.animateBegin,r=t.backgroundColor,i=t.backgroundOpacity,o=t.baseUrl,a=t.children,s=t.foregroundColor,l=t.foregroundOpacity,u=t.gradientRatio,c=t.gradientDirection,h=t.uniqueKey,d=t.interval,f=t.rtl,p=t.speed,m=t.style,g=t.title,y=t.beforeMask,v=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(t,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),b=h||Math.random().toString(36).substring(6),w=b+"-diff",x=b+"-animated-diff",M=b+"-aria",S=f?{transform:"scaleX(-1)"}:null,C="0; "+d+"; 1",P=p+"s",T="top-bottom"===c?"rotate(90)":void 0;return(0,k.createElement)("svg",uct({"aria-labelledby":M,role:"img",style:uct(uct({},m),S)},v),g?(0,k.createElement)("title",{id:M},g):null,y&&(0,k.isValidElement)(y)?y:null,(0,k.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+o+"#"+w+")",style:{fill:"url("+o+"#"+x+")"}}),(0,k.createElement)("defs",null,(0,k.createElement)("clipPath",{id:w},a),(0,k.createElement)("linearGradient",{id:x,gradientTransform:T},(0,k.createElement)("stop",{offset:"0%",stopColor:r,stopOpacity:i},e&&(0,k.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:C,dur:P,repeatCount:"indefinite",begin:n})),(0,k.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:l},e&&(0,k.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:C,dur:P,repeatCount:"indefinite",begin:n})),(0,k.createElement)("stop",{offset:"100%",stopColor:r,stopOpacity:i},e&&(0,k.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:C,dur:P,repeatCount:"indefinite",begin:n})))))};cct.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var hct=function(t){return t.children?(0,k.createElement)(cct,uct({},t)):(0,k.createElement)(dct,uct({},t))},dct=function(t){return(0,k.createElement)(hct,uct({viewBox:"0 0 476 124"},t),(0,k.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,k.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,k.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,k.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,k.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,k.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const fct=hct,pct=()=>{const{mode:t}=yf();return(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(fct,{height:90,width:"100%",backgroundColor:Xu.loader.background[t],foregroundColor:Xu.loader.foreground[t],opacity:.2,style:{marginTop:"0.75rem",marginBottom:"0.75rem"},children:(0,Wd.jsx)("rect",{x:"0",y:"0",rx:"0.5rem",ry:"0.5rem",width:"100%",height:"100%"})}),(0,Wd.jsx)(fct,{height:90,width:"100%",backgroundColor:Xu.loader.background[t],foregroundColor:Xu.loader.foreground[t],opacity:.2,children:(0,Wd.jsx)("rect",{x:"0",y:"0",rx:"0.5rem",ry:"0.5rem",width:"100%",height:"100%"})})]})},mct=ln.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`,gct=ln(Fu.div)`
  list-style: none;
  flex: 1;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 1rem;
  border-bottom: 1px solid ${yc};

  h3 {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin: 0 0 0.5rem;
    padding: 0.2rem 0;

    &.neutral {
      color: ${Ac};
    }
    &.danger {
      color: #d2545d;
    }
    &.warning {
      color: #b5a200;
    }
    &.pools {
      color: ${Nc};
    }
  }

  p {
    margin: 0;
    color: ${_u};
    line-height: 1.2rem;
    font-variation-settings: 'wght' 490;
  }
`,yct=()=>{const{isSyncing:t}=Rtt(),{network:e}=IJ(),{units:n}=e,{staking:r}=btt(),{minNominatorBond:i,totalNominators:o,maxNominatorsCount:a}=r,{bondedPools:s}=Ntt(),l={hidden:{opacity:0},show:{opacity:1}},u=a.eq(o);let c=new($d())(0);a.gt(new($d())(0))&&o.gt(new($d())(0))&&(c=o.div(a.div(new($d())(100))));const h=i.div(new($d())(10**n)),d=[];return u&&d.push({class:"danger",title:"Nominator Limit Has Been Reached.",subtitle:"The maximum allowed nominators have been reached on the network. Please wait for available slots if you wish to nominate."}),c.toNumber()>=90&&d.push({class:"warning",title:`${c.toNumber().toFixed(2)}% of Nominator Limit Reached.`,subtitle:`The maximum amount of nominators has almost been reached. The nominator cap is currently ${sf(a.toNumber())}.`}),s.length&&d.push({class:"pools",title:`${s.length} nomination pools are active.`,subtitle:`Nomination pools are available to join on the ${e.name} network.`}),d.push({class:"neutral",title:`The minimum nominator bond is now ${h} ${e.unit}.`,subtitle:`The minimum bonding amount to start nominating on ${e.name} is now ${rf(i,n)} ${e.unit}.`}),d.push({class:"neutral",title:`The maximum nominator cap is now ${sf(a.toNumber())}.`,subtitle:`A total of ${sf(a.toNumber())} nominators can now join the ${e.name} network.`}),(0,Wd.jsxs)(xv,{children:[(0,Wd.jsx)(wv,{children:(0,Wd.jsxs)("h2",{children:["Announcements",(0,Wd.jsx)(ort,{page:"overview",title:"Announcements"})]})}),(0,Wd.jsx)(mct,{children:(0,Wd.jsx)(Fu.div,{variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.25}}},initial:"hidden",animate:"show",style:{width:"100%"},children:t?(0,Wd.jsx)(pct,{}):d.map(((t,e)=>(0,Wd.jsxs)(gct,{variants:l,children:[(0,Wd.jsxs)("h3",{className:t.class,children:[(0,Wd.jsx)(Fg,{icon:Yg,style:{marginRight:"0.6rem"}}),t.title]}),(0,Wd.jsx)("p",{children:t.subtitle})]},`announcement_${e}`)))})})]})},vct=()=>{const{network:t,fetchDotPrice:e}=IJ(),{services:n}=Rtt(),[r,i]=(0,k.useState)((()=>{const e=localStorage.getItem(`${t.name}_prices`);return null===e?{lastPrice:0,change:0}:JSON.parse(e)})()),o=(0,k.useRef)(r),a=e=>{localStorage.setItem(`${t.name}_prices`,JSON.stringify(e)),o.current={...o.current,...e},i({...o.current,...e})},s=async()=>{const t=await e();a(t),null===l&&u()};let l=null;const u=async()=>{l=setInterval((async()=>{const t=await e();a(t)}),3e4)};return(0,k.useEffect)((()=>(s(),()=>{null!==l&&clearInterval(l)})),[]),(0,k.useEffect)((()=>{null!==l&&clearInterval(l),s()}),[t]),(0,k.useEffect)((()=>{n.includes("binance_spot")?null===l&&s():null!==l&&clearInterval(l)}),[n]),o.current};Clt.register(Elt,mut,tut);const bct=()=>{const{mode:t}=yf(),{network:e}=IJ(),{units:n,features:r}=e,{activeAccount:i}=rtt(),{getAccountBalance:o,getBondOptions:a}=ftt(),s=o(i),{services:l}=Rtt(),u=vct(),{freeToStake:c,freeToUnbond:h,totalUnlocking:d,totalUnlocked:f}=a(i)||{},{getPoolBondOptions:p}=Ett(),m=p(i),g=m.totalUnlocking.add(m.totalUnlocked).add(f).add(d),{free:y}=s,v=rf(y,n),b=Number(v*u.lastPrice).toFixed(2);let w=rf(h,n),x=rf(c,n),M=rf(m.active,n),S=rf(g,n),C=!1;0===w&&0===x&&0===S&&0===M&&(w=-1,S=-1,x=-1,M=-1,C=!0);const P={responsive:!0,maintainAspectRatio:!1,spacing:C?0:5,plugins:{legend:{display:!0,padding:{right:10},position:"left",align:"center",labels:{padding:20,color:Xu.text.primary[t],font:{size:14,weight:"500"}}},tooltip:{displayColors:!1,backgroundColor:Xu.graphs.tooltip[t],bodyColor:Xu.text.invert[t],callbacks:{label:t=>`${t.label}: ${-1===t.parsed?0:t.parsed} ${e.unit}`}}},cutout:"75%"};let T,A=["Available","Unlocking","Staking","In Pool"],N=[x,S,w,M],O=C?[Xu.graphs.colors[1][t],Xu.graphs.inactive2[t],Xu.graphs.inactive2[t],Xu.graphs.inactive[t]]:[Xu.graphs.colors[1][t],Xu.graphs.colors[0][t],Ku[`${e.name}-${t}`],Gu[`${e.name}-${t}`]];N=r.pools?N:N.slice(0,3),O=r.pools?O:O.slice(0,3),A=r.pools?A:A.slice(0,3),T={label:e.unit,data:N,backgroundColor:O,borderWidth:0};const j={labels:A,datasets:[T]},V=k.useRef(),E=Ztt(V.current),{width:I,height:z,minHeight:L}=Ytt(E,220);return(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsxs)("div",{className:"head",style:{paddingTop:"0"},children:[(0,Wd.jsxs)("h4",{children:["Balance",(0,Wd.jsx)(ort,{page:"overview",title:"Your Balance"})]}),(0,Wd.jsxs)("h2",{children:[(0,Wd.jsx)("span",{className:"amount",children:v}),"\xa0",e.unit,(0,Wd.jsx)("span",{className:"fiat",children:l.includes("binance_spot")&&(0,Wd.jsxs)(Wd.Fragment,{children:["\xa0",af.format(Number(b))]})})]})]}),(0,Wd.jsx)("div",{style:{paddingTop:"20px"}}),(0,Wd.jsx)("div",{className:"inner",ref:V,style:{minHeight:L},children:(0,Wd.jsx)("div",{className:"graph",style:{height:`${z}px`,width:`${I}px`,position:"absolute"},children:(0,Wd.jsx)($ut,{options:P,data:j})})}),(0,Wd.jsx)("div",{style:{paddingTop:"25px"}})]})};Clt.register(yut,xut,qlt,Ult,nut,mut,tut);const wct=t=>{const{mode:e}=yf(),{network:n}=IJ(),{payouts:r,height:i,background:o}=t,a={responsive:!0,maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1,maxTicksLimit:30,autoSkip:!0}},y:{ticks:{display:!1,beginAtZero:!1},grid:{drawBorder:!1,color:Xu.graphs.grid[e],borderColor:Xu.transparent[e]}}},plugins:{legend:{display:!1},title:{display:!1,text:`${n.unit} Payouts`},tooltip:{displayColors:!1,backgroundColor:Xu.graphs.tooltip[e],bodyColor:Xu.text.invert[e],callbacks:{title:()=>[],label:t=>`${t.parsed.y} ${n.unit}`},intersect:!1,interaction:{mode:"nearest"}}}},s={labels:r.map(((t,e)=>"")),datasets:[{label:"Price",data:r.map(((t,e)=>t.amount)),borderColor:Ku[`${n.name}-${e}`],backgroundColor:Xu.graphs.colors[1][e],pointStyle:void 0,pointRadius:0,borderWidth:2}]};return(0,Wd.jsx)("div",{className:"graph_line",style:{height:void 0===i?"auto":i,background:void 0===o?"none":o},children:(0,Wd.jsx)(Qut,{options:a,data:s})})};Clt.register(yut,xut,qlt,Ult,Qlt,nut,mut,tut);const xct=t=>{const{mode:e}=yf(),{network:n}=IJ(),{payouts:r,height:i}=t,o={labels:r.map(((t,e)=>mv().unix(t.block_timestamp).format("Do MMM"))),datasets:[{label:"Price",data:r.map(((t,e)=>t.amount)),borderColor:Ku[`${n.name}-${e}`],backgroundColor:Ku[`${n.name}-${e}`],pointRadius:0,borderRadius:3}]},a={responsive:!0,maintainAspectRatio:!1,barPercentage:.4,maxBarThickness:11,scales:{x:{grid:{display:!1,drawBorder:!0},ticks:{font:{size:10},autoSkip:!0}},y:{ticks:{font:{size:10}},grid:{color:Xu.graphs.grid[e],borderColor:Xu.transparent[e]}}},plugins:{legend:{display:!1},title:{display:!1},tooltip:{displayColors:!1,backgroundColor:Xu.graphs.tooltip[e],bodyColor:Xu.text.invert[e],callbacks:{title:()=>[],label:t=>`${t.parsed.y} ${n.unit}`}}}};return(0,Wd.jsx)("div",{style:{height:void 0===i?"auto":i},children:(0,Wd.jsx)(_ut,{options:a,data:o})})},Mct=ln.div`
  position: absolute;
  top: ${t=>t.topOffset?t.topOffset:"50%"};
  left: 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  z-index: 2;

  > div {
    background: ${sc};
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
`,kct=t=>{var e,n,r;const i=null!==(e=t.status)&&void 0!==e?e:"sync_or_setup",o=null!==(n=t.statusFor)&&void 0!==n&&n,{isSyncing:a,services:s}=Rtt(),{inSetup:l}=btt();if("sync_or_setup"===i&&(a||!l()))return(0,Wd.jsx)(Wd.Fragment,{});if("active_service"===i&&s.includes(o))return(0,Wd.jsx)(Wd.Fragment,{});const{title:u}=t,c=null!==(r=t.topOffset)&&void 0!==r?r:"40%";return(0,Wd.jsx)(Mct,{topOffset:c,children:(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("h3",{children:[(0,Wd.jsx)(Fg,{icon:Wy,transform:"grow-1"}),"\xa0",u]})})})},Sct=t=>{const{payouts:e}=t,{services:n}=Rtt(),r=k.useRef(),i=Ztt(r.current),{width:o,height:a,minHeight:s}=Ytt(i,306);return(0,Wd.jsxs)("div",{className:"inner",ref:r,style:{minHeight:s},children:[n.includes("subscan")?(0,Wd.jsx)(kct,{status:"sync_or_setup",title:"Not Staking"}):(0,Wd.jsx)(kct,{status:"active_service",statusFor:"subscan",title:"Subscan Disabled"}),(0,Wd.jsxs)("div",{className:"graph",style:{height:`${a}px`,width:`${o}px`,position:"absolute"},children:[(0,Wd.jsx)(xct,{payouts:e,height:"170px"}),(0,Wd.jsx)("div",{style:{marginTop:"1rem"},children:(0,Wd.jsx)(wct,{payouts:e,height:"70px"})})]})]})};class Cct extends k.Component{shouldComponentUpdate(t,e){const n=t.account!==this.props.account,r=t.payouts!==this.props.payouts;return n||r}render(){return(0,Wd.jsx)(Sct,{...this.props})}}const Pct=Cct,Tct=()=>{var t;const{network:e}=IJ(),{units:n}=e,{activeAccount:r}=rtt(),{payouts:i}=Btt();let o=Gtt(Ktt(i,21,n),21);o=o.reverse();const a=null!==(t=i.find((t=>new($d())(t.amount).gt(new($d())(0)))))&&void 0!==t?t:null;return(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Utt,{title:"Overview"}),(0,Wd.jsxs)(bv,{children:[(0,Wd.jsx)(sct,{}),(0,Wd.jsx)(act,{}),(0,Wd.jsx)(lct,{})]}),(0,Wd.jsxs)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:[(0,Wd.jsx)(Bc,{hOrder:0,vOrder:0,children:(0,Wd.jsxs)(Mv,{style:{minHeight:390},flex:!0,children:[(0,Wd.jsx)(Knt,{}),(0,Wd.jsx)(bct,{})]})}),(0,Wd.jsx)(Hc,{hOrder:1,vOrder:1,children:(0,Wd.jsxs)(Mv,{style:{minHeight:390},flex:!0,children:[(0,Wd.jsx)(Ftt,{}),(0,Wd.jsxs)("div",{className:"head",children:[(0,Wd.jsx)("h4",{children:"Recent Payouts"}),(0,Wd.jsxs)("h2",{children:[null===a?0:rf(new($d())(a.amount),n),"\xa0",e.unit,"\xa0",(0,Wd.jsx)("span",{className:"fiat",children:null===a?"":mv().unix(a.block_timestamp).fromNow()})]})]}),(0,Wd.jsx)(Pct,{account:r,payouts:o})]})})]}),(0,Wd.jsx)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Wd.jsx)(yct,{})})]})},Act=ln.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;

  h3 {
    margin-bottom: 0;
  }
`,Nct=ln.div`
  border-bottom: 1px solid ${yc};
  padding-bottom: 1rem;
  width: 100%;
  margin-top: 1rem;
`,Oct=(ln.div`
  margin-bottom: ${t=>!0===t.last?"none":"1rem"};
  display: flex;
  flex-flow: row wrap;
  h4 {
    color: ${_u};
  }
`,ln.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  > section {
    color: ${_u};
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  > section:last-child {
    flex: 1;
    justify-content: flex-end;

    .progress {
      color: ${_u};
      opacity: 0.5;
    }

    .complete {
      margin: 0;
      color: ${Ac};
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
`),jct=ln.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0.25rem;
  margin-top: 1rem;
`,Vct=(ln.div`
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
`,ln.div`
  width: 100%;
  height: 1px;
  margin: 0.75rem 0;
`),Ect=ln.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,Ict=ln(Fu.div)`
  display: inline-block;
  margin: ${t=>t.margin};

  > button {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    background: ${t=>"invert-primary"===t.type?Ac:"invert-secondary"===t.type?Nc:fc};
    color: ${t=>"invert-primary"===t.type||"invert-secondary"===t.type?"white":_u};

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
`,zct=t=>{var e;let{transform:n}=t;const{primary:r,secondary:i,icon:o,title:a,disabled:s,small:l,inline:u}=t,{onClick:c}=t;n=null!==(e=n)&&void 0!==e?e:"shrink-1";const h=r?"invert-primary":i?"invert-secondary":"default";return(0,Wd.jsx)(Ict,{whileHover:{scale:s?1:1.02},whileTap:{scale:s?1:.98},type:h,margin:u?"0":"0 0.5rem",padding:l?"0.36rem 0.8rem":"0.45rem 1.2rem",fontSize:l?"0.95rem":"1.05rem",children:(0,Wd.jsxs)("button",{type:"button",disabled:s,onClick:()=>void 0!==c&&c(),children:[o&&(0,Wd.jsx)(Fg,{icon:o,className:a?"space":void 0,transform:n}),a&&a]})})},Lct=zct,Rct="ConnectAccounts",Hct=k.createContext({status:0,setStatus:t=>{},openModalWith:(t,e,n)=>{},setModalHeight:t=>{},setResize:()=>{},modal:Rct,config:{},size:"large",height:0,resize:0}),Bct=()=>k.useContext(Hct),Dct=ln.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: ${t=>"nomination"===t.format?"5.6rem":"3.2rem"};
  position: relative;
  margin: 0.5rem;

  > .inner {
    background: ${ac};
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
      color: ${_u};

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
        color: ${_u};
        &:hover {
          opacity: 0.75;
        }
        &.active {
          color: ${Ac};
        }
      }
    }
  }
`,Fct=ln.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  flex: 1 1 100%;
  padding: 0 0 0 0.25rem;
`,Uct=ln(Fu.div)`
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
`,Wct=ln.div`
  margin-right: 0.35rem;
  padding: 0 0.5rem;

  h5 {
    color: ${t=>"active"===t.status?"green":_u};
    opacity: ${t=>"active"===t.status?1:.5};
    margin: 0;
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,qct=ln.div`
  margin: 0 0.75rem 0 0.25rem;
  overflow: hidden;
  display: block;
  background: ${wc};
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
`,Xct=ln.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${yc};
`,Zct=ln.div`
  position: absolute;
  top: -10px;
  right: 10px;
  width: 0;
  height: 0;
  opacity: 0;
`,Yct=(t,e)=>{var n,r,i,o,a,s,l,u,c,h,d;let f=null!==(n=null===t||void 0===t||null===(r=t.info)||void 0===r||null===(i=r.display)||void 0===i?void 0:i.Raw)&&void 0!==n?n:null;f=null===f?null!==(o=null===t||void 0===t||null===(a=t.info)||void 0===a?void 0:a.legal.Raw)&&void 0!==o?o:null:f;const p=lQ(A1(f));if(""!==p)return p;if(null!==f)return f;const m=null!==(s=null===e||void 0===e?void 0:e.identity)&&void 0!==s?s:null;f=null!==(l=null===m||void 0===m||null===(u=m.info)||void 0===u||null===(c=u.display)||void 0===c?void 0:c.Raw)&&void 0!==l?l:null,f=null===f?null!==(h=null===m||void 0===m||null===(d=m.info)||void 0===d?void 0:d.legal.Raw)&&void 0!==h?h:null:f;const g=lQ(A1(f));return""!==g?g:f},Kct=t=>{const{addNotification:e}=Xnt(),{favourites:n,addFavourite:r,removeFavourite:i}=ztt(),{address:o}=t,a=n.includes(o)?{title:"Favourite Validator Removed",subtitle:o}:{title:"Favourite Validator Added",subtitle:o};return(0,Wd.jsx)("div",{className:"label",children:(0,Wd.jsx)("button",{type:"button",className:n.includes(o)?"active":void 0,onClick:()=>{n.includes(o)?i(o):r(o),e(a)},children:(0,Wd.jsx)(Fg,{icon:Fy,transform:"shrink-1"})})})},Gct=t=>{var e,n,r,i,o,a,s,l,u;const{meta:c}=ztt(),{validator:h,batchIndex:d,batchKey:f}=t,p=null!==(e=null===(n=c[f])||void 0===n?void 0:n.identities)&&void 0!==e?e:[],m=null!==(r=null===(i=c[f])||void 0===i?void 0:i.supers)&&void 0!==r?r:[],g=null!==(o=null===(a=c[f])||void 0===a?void 0:a.stake)&&void 0!==o?o:[],y=null!==(s=p.length>0)&&void 0!==s&&s,v=null!==(l=m.length>0)&&void 0!==l&&l,b=y&&v,{address:w}=(u=g.length>0,h),x=Yct(p[d],m[d]);return(0,Wd.jsxs)(Uct,{className:"identity",initial:{opacity:.5},animate:{opacity:1},transition:{duration:.3},children:[(0,Wd.jsx)(Wnt,{value:w,size:26}),b&&null!==x?(0,Wd.jsx)("h4",{children:x}):(0,Wd.jsx)("h4",{children:tf(w)})]})},Jct=t=>{var e,n,r,i,o,a,s,l,u,c,h;const{consts:d,network:f}=IJ(),{meta:p}=ztt(),{batchIndex:m,batchKey:g}=t,y=null!==(e=null===(n=p[g])||void 0===n?void 0:n.identities)&&void 0!==e?e:[],v=null!==(r=null===(i=p[g])||void 0===i?void 0:i.supers)&&void 0!==r?r:[],b=null!==(o=null===(a=p[g])||void 0===a?void 0:a.stake)&&void 0!==o?o:[],w=null!==(s=y.length>0)&&void 0!==s&&s,x=null!==(l=v.length>0)&&void 0!==l&&l,M={identities:w&&x,stake:null!==(u=b.length>0)&&void 0!==u&&u},k=b[m],S=null!==(c=null===k||void 0===k?void 0:k.total_nominations)&&void 0!==c?c:0,C=null!==(h=null===k||void 0===k?void 0:k.lowestReward)&&void 0!==h?h:0,P=M.stake&&S>=d.maxNominatorRewardedPerValidator;return(0,Wd.jsx)(Wd.Fragment,{children:P&&(0,Wd.jsx)(Fu.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.1},children:(0,Wd.jsxs)("div",{className:"label warning",children:[(0,Wd.jsx)(Fg,{icon:Wy,transform:"shrink-2"}),"\xa0",C," ",f.unit]})})})},Qct=t=>{var e;const{prefs:n}=t,r=null!==(e=null===n||void 0===n?void 0:n.blocked)&&void 0!==e?e:null;return(0,Wd.jsx)(Wd.Fragment,{children:r&&(0,Wd.jsx)("div",{className:"label",children:(0,Wd.jsx)(Fg,{icon:_y,color:"#d2545d",transform:"shrink-1"})})})};function _ct(){return _ct=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_ct.apply(this,arguments)}var $ct=["borderColor","borderRadius","borderStyle","borderWidth","checkbox","className","checked","disabled","containerClassName","containerStyle","label","labelClassName","labelStyle","name","onChange","reference","right","size","style","value","icon","tabIndex"],tht=function(t){var e=t.borderColor,n=t.borderRadius,r=t.borderStyle,i=t.borderWidth,o=t.checkbox,a=t.className,s=t.checked,l=t.disabled,u=t.containerClassName,c=t.containerStyle,h=t.label,d=t.labelClassName,f=t.labelStyle,p=t.name,m=t.onChange,g=t.reference,y=t.right,v=t.size,b=t.style,w=t.value,x=t.icon,M=t.tabIndex,S=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,$ct),C=(0,k.useState)(s),P=C[0],T=C[1],A=function(t){if(t.preventDefault(),l)return null;T(!P),m&&m(!P)};return(0,k.useEffect)((function(){T(s)}),[s]),k.createElement("label",{style:_ct({},c,{display:"flex",alignItems:"center"}),className:u,onClick:function(t){return A(t)}},y&&h&&k.createElement("span",{className:d,style:f},h)||null,o||k.createElement("span",null,k.createElement("div",{style:_ct({},b,{height:v,width:v,borderWidth:i,borderColor:e,borderStyle:r,borderRadius:n,display:"flex",alignItems:"center",justifyContent:"center",cursor:l?"not-allowed":""}),tabIndex:M,onKeyDown:function(t){"Enter"!==t.key&&" "!==t.key&&"Spacebar"!==t.key||A(t)},className:a},P&&x||null,k.createElement("input",_ct({},S,{ref:g,type:"checkbox",name:p,checked:P,value:w,onChange:A,disabled:l,hidden:!0})))),!y&&h&&k.createElement("span",{className:d,style:f},h)||null)};tht.defaultProps={borderColor:"#D7C629",borderStyle:"solid",borderWidth:2,borderRadius:5,checked:!1,disabled:!1,right:!1,name:"",size:18,style:{},className:"",labelStyle:{marginLeft:5},labelClassName:"",containerStyle:{},containerClassName:"",value:"",onChange:null,icon:k.createElement("div",{style:{backgroundColor:"#D7C629",borderRadius:5,padding:5}})};const eht=tht,nht=k.createContext({setSelectable:t=>{},addToSelected:t=>{},removeFromSelected:t=>{},resetSelected:()=>{},setListFormat:t=>{},selected:[],selectable:!1,listFormat:"col",selectToggleable:!0}),rht=()=>k.useContext(nht),iht=t=>{var e,n;const r=null===(e=t.selectToggleable)||void 0===e||e,[i,o]=(0,k.useState)([]),[a,s]=(0,k.useState)(null!==(n=t.selectActive)&&void 0!==n&&n),[l,u]=(0,k.useState)("col"),c=()=>{o([])};return(0,Wd.jsx)(nht.Provider,{value:{setSelectActive:t=>{s(t),!1===t&&c()},addToSelected:t=>{o([...i].concat(t))},removeFromSelected:t=>{o([...i].filter((e=>!t.includes(e))))},resetSelected:c,setListFormat:t=>{u(t)},selected:i,selectActive:a,listFormat:l,selectToggleable:r},children:t.children})},oht=t=>{const{validator:e}=t,{mode:n}=(0,k.useContext)(nn),{addToSelected:r,removeFromSelected:i,selected:o}=rht();return(0,Wd.jsx)(qct,{children:(0,Wd.jsx)(eht,{onChange:()=>{o.includes(e)?i([e]):r(e)},icon:(0,Wd.jsx)(Fg,{icon:Gg,transform:"shrink-2",color:Xu.text.secondary[n]}),borderColor:"rgba(0,0,0,0)",style:{overflow:"hidden",cursor:"pointer"},size:18})})},aht=t=>{var e,n,r,i,o;const{validator:a,toggleFavourites:s,batchIndex:l,batchKey:u,showStatus:c,showMenu:h}=t,{openModalWith:d}=Bct(),{addNotification:f}=Xnt(),{setMenuPosition:p,setMenuItems:m,open:g}=Xd(),{meta:y}=ztt(),{selectActive:v}=rht(),b=null!==(e=null===(n=y[u])||void 0===n?void 0:n.identities)&&void 0!==e?e:[],w=null!==(r=null===(i=y[u])||void 0===i?void 0:i.supers)&&void 0!==r?r:[],{address:x,prefs:M}=a,S=null!==(o=null===M||void 0===M?void 0:M.commission)&&void 0!==o?o:null,C=(0,k.useRef)(null),P=Yct(b[l],w[l]),T=null==x?{}:{title:"Address Copied to Clipboard",subtitle:x},A=[{icon:(0,Wd.jsx)(Fg,{icon:Kg}),wrap:null,title:"View Metrics",cb:()=>{d("ValidatorMetrics",{address:x,identity:P},"large")}},{icon:(0,Wd.jsx)(Fg,{icon:sv}),wrap:null,title:"Copy Address",cb:()=>{navigator.clipboard.writeText(x),f(T)}}];return(0,Wd.jsx)(Dct,{showStatus:c,children:(0,Wd.jsxs)("div",{className:"inner",children:[(0,Wd.jsx)(Zct,{ref:C}),(0,Wd.jsxs)("div",{className:"row",children:[v&&(0,Wd.jsx)(oht,{validator:a}),(0,Wd.jsx)(Gct,{validator:a,batchIndex:l,batchKey:u}),(0,Wd.jsx)("div",{children:(0,Wd.jsxs)(Fct,{children:[(0,Wd.jsx)(Jct,{batchIndex:l,batchKey:u}),(0,Wd.jsx)(Qct,{prefs:M}),(0,Wd.jsxs)("div",{className:"label comm",children:[S,"%"]}),s&&(0,Wd.jsx)(Kct,{address:x}),h&&(0,Wd.jsx)("button",{type:"button",className:"label",onClick:()=>{g||(m(A),p(C))},children:(0,Wd.jsx)(Fg,{icon:Xg})})]})})]})]})})},sht=t=>{const{openModalWith:e}=Bct(),{display:n,address:r}=t;return(0,Wd.jsx)("div",{className:"label",children:(0,Wd.jsx)("button",{type:"button",onClick:()=>e("ValidatorMetrics",{address:r,identity:n},"large"),children:(0,Wd.jsx)(Fg,{icon:Kg})})})},lht=t=>{const{addNotification:e}=Xnt(),{validator:n}=t,{address:r}=n,i=null==r?{}:{title:"Address Copied to Clipboard",subtitle:r};return(0,Wd.jsx)("div",{className:"label",children:(0,Wd.jsx)("button",{type:"button",onClick:()=>{e(i),navigator.clipboard.writeText(r)},children:(0,Wd.jsx)(Fg,{icon:sv})})})},uht=t=>{var e,n;const{getNominationsStatus:r,eraStakers:i,erasStakersSyncing:o}=btt(),{getNominationsStatus:a}=Ett(),{network:{unit:s}}=IJ(),{ownStake:l}=i,{address:u,bondType:c}=t;let h;h="pool"===c?a():r();const d=h[u],f="active"===d&&null!==(e=null===l||void 0===l||null===(n=l.find((t=>t.address)))||void 0===n?void 0:n.value)&&void 0!==e?e:0;return(0,Wd.jsx)(Wct,{status:d,children:(0,Wd.jsxs)("h5",{children:[(p=null!==d&&void 0!==d?d:"",p.charAt(0).toUpperCase()+p.slice(1)),f>0&&" / "+(o?"...":`${f} ${s}`)]})});var p},cht=t=>{var e,n,r,i,o;const{meta:a}=ztt(),{selectActive:s}=rht(),{validator:l,toggleFavourites:u,batchIndex:c,batchKey:h,bondType:d}=t,f=null!==(e=null===(n=a[h])||void 0===n?void 0:n.identities)&&void 0!==e?e:[],p=null!==(r=null===(i=a[h])||void 0===i?void 0:i.supers)&&void 0!==r?r:[],{address:m,prefs:g}=l,y=null!==(o=null===g||void 0===g?void 0:g.commission)&&void 0!==o?o:null;return(0,Wd.jsx)(Dct,{format:"nomination",children:(0,Wd.jsxs)("div",{className:"inner",children:[(0,Wd.jsxs)("div",{className:"row",children:[s&&(0,Wd.jsx)(oht,{validator:l}),(0,Wd.jsx)(Gct,{validator:l,batchIndex:c,batchKey:h}),(0,Wd.jsx)("div",{children:(0,Wd.jsxs)(Fct,{children:[(0,Wd.jsx)(lht,{validator:l}),u&&(0,Wd.jsx)(Kct,{address:m})]})})]}),(0,Wd.jsx)(Xct,{}),(0,Wd.jsxs)("div",{className:"row status",children:[(0,Wd.jsx)(uht,{address:m,bondType:d}),(0,Wd.jsxs)(Fct,{children:[(0,Wd.jsx)(Jct,{batchIndex:c,batchKey:h}),(0,Wd.jsx)(Qct,{prefs:g}),(0,Wd.jsxs)("div",{className:"label",children:[y,"%"]}),(0,Wd.jsx)(sht,{address:m,display:Yct(f[c],p[c])})]})]})]})})},hht=t=>{const{format:e}=t;return"nomination"===e?(0,Wd.jsx)(cht,{...t}):(0,Wd.jsx)(aht,{...t})};class dht extends k.Component{shouldComponentUpdate(t){return this.props.validator.address!==t.validator.address||this.props.batchIndex!==t.batchIndex||this.props.batchKey!==t.batchKey}render(){return(0,Wd.jsx)(hht,{...this.props})}}const fht=ln.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
`,pht=ln.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  padding: 0 0.25rem 0.5rem 0.25rem;
  flex: 1;
  border-bottom: 1px solid ${yc};

  h4 {
    margin: 0;
    color: ${_u};
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
      color: ${_u};

      &:hover {
        opacity: 0.9;
      }
    }
  }
`,mht=ln.div`
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
        color: ${t=>t.next?Ac:_u};
        cursor: ${t=>t.next?"pointer":"default"};
      }
      &.prev {
        color: ${t=>t.prev?Ac:_u};
        cursor: ${t=>t.prev?"pointer":"default"};
      }
    }
  }
`,ght=ln.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem;

  > button {
    color: ${_u};
    background: ${fc};
    border-radius: 0.5rem;
    padding: 0.36rem 0.8rem;
    margin-right: 0.5rem;

    &:disabled {
      opacity: 0.5;
    }

    &:hover {
      color: ${Qu};
    }
  }
`,yht=ln.div`
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
`,vht=ln.div`
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
          color: ${_u};
          display: flex;
          flex-flow: row wrap;
          align-items: center;

          > button {
            font-size: 0.88rem;
            background: ${fc};
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
`,bht=ln.div`
  border: 1px solid ${t=>t.active?Ac:yc};
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
    color: ${t=>t.active?Ac:_u};
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin-right: 0.75rem;
  }
  p {
    color: ${t=>t.active?Ac:_u};
    font-size: 0.9rem;
    margin: 0;
    text-align: left;
    padding-top: 0.15rem;
    line-height: 0.95rem;
  }
`,wht=t=>{let{children:e}=t;return(0,Wd.jsx)(vht,{children:(0,Wd.jsx)("div",{className:"hide-scrollbar",children:(0,Wd.jsx)("div",{children:e})})})},xht=t=>{var e;const{title:n}=t,r=null!==(e=t.buttons)&&void 0!==e?e:[];return(0,Wd.jsxs)("div",{className:"category",children:[(0,Wd.jsxs)("div",{className:"head",children:[n,r.map(((t,e)=>(0,Wd.jsx)("button",{type:"button",onClick:()=>t.onClick(),disabled:t.disabled,children:t.title},`category_${n}_${e}`)))]}),(0,Wd.jsx)("div",{className:"items",children:t.children})]})},Mht=t=>{var e,n;const{icon:r,label:i,transform:o,onClick:a}=t,s=null!==(e=t.disabled)&&void 0!==e&&e;return(0,Wd.jsx)(Fu.button,{disabled:s,whileHover:{scale:1.02},whileTap:{scale:.99},transition:{duration:.3},onClick:()=>{a()},style:{opacity:s?.5:1},children:(0,Wd.jsxs)(bht,{active:t.active,style:{width:null!==(n=t.width)&&void 0!==n?n:180},children:[(0,Wd.jsx)("div",{className:"icon",children:(0,Wd.jsx)(Fg,{icon:r,transform:o,opacity:t.active?1:.7})}),(0,Wd.jsx)("p",{children:i})]})})},kht=()=>{var t,e,n,r,i;const{validatorOrder:o,validatorFilters:a,orderValidators:s,toggleFilterValidators:l,toggleAllValidatorFilters:u}=Rtt(),c=(t,e)=>{t(e)};return(0,k.useEffect)((()=>{window.scrollTo(0,0)}),[a]),(0,Wd.jsxs)(wht,{children:[(0,Wd.jsx)(xht,{title:"Order",children:(0,Wd.jsx)(Mht,{label:"lowest commission",icon:Ay,transform:"grow-4",active:"commission"===o,onClick:()=>c(s,"commission"),width:175})}),(0,Wd.jsxs)(xht,{title:"Exclude:",buttons:[{title:"All",onClick:()=>u(1)},{title:"Clear",onClick:()=>u(0),disabled:!a.length}],children:[(0,Wd.jsx)(Mht,{label:"inactive validators",icon:hy,transform:"grow-4",active:null!==(t=null===a||void 0===a?void 0:a.includes("inactive"))&&void 0!==t&&t,onClick:()=>{c(l,"inactive")},width:170}),(0,Wd.jsx)(Mht,{label:"over subscribed",icon:Wy,transform:"grow-4",active:null!==(e=null===a||void 0===a?void 0:a.includes("over_subscribed"))&&void 0!==e&&e,onClick:()=>{c(l,"over_subscribed")},width:155}),(0,Wd.jsx)(Mht,{label:"100% commission",icon:Ry,transform:"grow-2",active:null!==(n=null===a||void 0===a?void 0:a.includes("all_commission"))&&void 0!==n&&n,onClick:()=>{c(l,"all_commission")},width:170}),(0,Wd.jsx)(Mht,{label:"blocked nominations",icon:_y,transform:"grow-1",active:null!==(r=null===a||void 0===a?void 0:a.includes("blocked_nominations"))&&void 0!==r&&r,onClick:()=>{c(l,"blocked_nominations")},width:190}),(0,Wd.jsx)(Mht,{label:"missing identity",icon:$y,transform:"grow-2",active:null!==(i=null===a||void 0===a?void 0:a.includes("missing_identity"))&&void 0!==i&&i,onClick:()=>{c(l,"missing_identity")},width:160})]})]})},Sht=t=>{var e,n,r,i;const{mode:o}=yf(),{isReady:a,network:s}=IJ(),{activeAccount:l}=rtt(),{metrics:u}=att(),{fetchValidatorMetaBatch:c}=ztt(),h=rht(),d=Bct(),{selectActive:f,setSelectActive:p,selected:m,listFormat:g,setListFormat:y,selectToggleable:v}=h,{validatorFilters:b,validatorOrder:w,applyValidatorFilters:x,applyValidatorOrder:M,isSyncing:S}=Rtt(),{batchKey:C,allowMoreCols:P,allowFilters:T,toggleFavourites:A,pagination:N,title:O,format:j,selectable:V,bondType:E}=t,I=null!==(e=t.actions)&&void 0!==e?e:[],z=null===(n=t.showMenu)||void 0===n||n,L=null!==(r=t.inModal)&&void 0!==r&&r,R=[...I].filter((t=>!t.onSelected)),H=[...I].filter((t=>t.onSelected)),B=null!==(i=t.disableThrottle)&&void 0!==i&&i,D=void 0!==t.refetchOnListUpdate&&t.refetchOnListUpdate,[F,U]=(0,k.useState)(1),[W,q]=(0,k.useState)(1),[X,Z]=(0,k.useState)(t.validators),[Y,K]=(0,k.useState)(t.validators),[G,J]=(0,k.useState)(!1),Q=(0,k.useRef)(W),_=t=>{Q.current=t,q(t)},$=Math.ceil(Y.length/Pt),tt=F+1>$?$:F+1,et=F-1<1?1:F-1,nt=F*Pt-1,rt=nt-49,it=30*W-1;(0,k.useEffect)((()=>{t.validators!==X&&J(!1)}),[t.validators,l]),(0,k.useEffect)((()=>{a&&0!==u.activeEra.index&&!G&&ot()}),[a,u.activeEra.index,G]),(0,k.useEffect)((()=>{it>=nt||B||setTimeout((()=>{_(Q.current+1)}),50)}),[Q.current]),(0,k.useEffect)((()=>{t.onSelected&&t.onSelected(h)}),[m]),(0,k.useEffect)((()=>{T&&G&&at()}),[b,w,S]),(0,k.useEffect)((()=>{lt()}),[g,W,Y,F]);const ot=()=>{Z(t.validators),K(t.validators),J(!0),c(C,t.validators,D)},at=()=>{if(T){let t=Object.assign(X);"default"!==w&&(t=M(t,w)),t=x(t,C),K(t),U(1),_(1)}};let st=[];st=B?Y:Y.slice(rt).slice(0,it);const lt=()=>{L&&d.setResize()};return Y.length?(0,Wd.jsxs)(fht,{children:[(0,Wd.jsxs)(pht,{children:[(0,Wd.jsx)("div",{children:(0,Wd.jsx)("h4",{children:O||`Dispalying ${Y.length} Validator${1===Y.length?"":"s"}`})}),(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)("button",{type:"button",onClick:()=>y("row"),children:(0,Wd.jsx)(Fg,{icon:Xg,color:"row"===g?Ku[`${s.name}-${o}`]:"inherit"})}),(0,Wd.jsx)("button",{type:"button",onClick:()=>y("col"),children:(0,Wd.jsx)(Fg,{icon:wy,color:"col"===g?Ku[`${s.name}-${o}`]:"inherit"})})]})]}),(0,Wd.jsxs)(yht,{flexBasisLarge:P?"33.33%":"50%",children:[T&&(0,Wd.jsx)(kht,{}),N&&(0,Wd.jsxs)(mht,{prev:1!==F,next:F!==$,children:[(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("h4",{children:["Page ",F," of ",$]})}),(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)("button",{type:"button",className:"prev",onClick:()=>{U(et)},children:"Prev"}),(0,Wd.jsx)("button",{type:"button",className:"next",onClick:()=>{U(tt)},children:"Next"})]})]}),V&&(0,Wd.jsxs)(ght,{children:[R.map(((t,e)=>{var n;return(0,Wd.jsx)("button",{disabled:null!==(n=t.disabled)&&void 0!==n&&n,type:"button",onClick:()=>t.onClick(h),children:t.title},`a_all_${e}`)})),!0===v&&(0,Wd.jsx)("button",{type:"button",onClick:()=>{p(!f)},children:f?"Cancel Selection":"Select"}),m.length>0&&(0,Wd.jsx)(Wd.Fragment,{children:H.map(((t,e)=>{var n;return(0,Wd.jsx)("button",{disabled:null!==(n=t.disabled)&&void 0!==n&&n,type:"button",onClick:()=>t.onClick(h),children:t.title},`a_selected_${e}`)}))})]}),(0,Wd.jsx)(Fu.div,{className:"transition",initial:"hidden",animate:"show",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.01}}},children:st.map(((t,e)=>{const n=X.indexOf(t);return(0,Wd.jsx)(Fu.div,{className:"item "+("row"===g?"row":"col"),variants:{hidden:{y:15,opacity:0},show:{y:0,opacity:1}},children:(0,Wd.jsx)(dht,{validator:t,toggleFavourites:A,batchIndex:n,batchKey:C,format:j,showMenu:z,bondType:E})},`nomination_${e}`)}))})]})]}):(0,Wd.jsx)(Wd.Fragment,{})},Cht=t=>{const{selectActive:e,selectToggleable:n}=t;return(0,Wd.jsx)(iht,{selectActive:e,selectToggleable:n,children:(0,Wd.jsx)(Pht,{...t})})};class Pht extends k.Component{shouldComponentUpdate(t,e){return this.props.validators!==t.validators}render(){return(0,Wd.jsx)(Sht,{...this.props})}}Pht.contextType=vtt;const Tht=ln.div`
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
`,Aht=t=>{let{bondType:e}=t;const{openModalWith:n}=Bct(),{isReady:r}=IJ(),{inSetup:i}=btt(),{isSyncing:o}=Rtt(),{activeAccount:a}=rtt(),{getAccountNominations:s}=ftt(),{nominated:l,poolNominated:u}=ztt();let{favouritesList:c}=ztt();null===c&&(c=[]);const{poolNominations:h,isNominator:d}=Ett(),f="pool"===e,p=f?h.targets:s(a),m=f?u:l,g=f?"pool_nominations":"stake_nominations";return(0,Wd.jsxs)(Tht,{children:[(0,Wd.jsxs)(wv,{withAction:!0,children:[(0,Wd.jsxs)("h2",{children:[f?"Pool Nominations":"Nominations",(0,Wd.jsx)(ort,{page:"stake",title:"Nominations"})]}),(0,Wd.jsx)("div",{children:!f&&p.length?(0,Wd.jsx)("div",{children:(0,Wd.jsx)(zct,{small:!0,icon:ay,transform:"grow-1",inline:!0,primary:!0,title:"Stop",disabled:!f&&i()||o,onClick:()=>n("ChangeNominations",{nominations:[],bondType:e},"small")})}):(0,Wd.jsx)(Wd.Fragment,{})})]}),a?null===m||o?(0,Wd.jsx)("div",{className:"head",children:(0,Wd.jsx)("h3",{children:"Syncing nominations..."})}):(0,Wd.jsx)(Wd.Fragment,{children:r&&(0,Wd.jsx)(Wd.Fragment,{children:m.length>0?(0,Wd.jsx)("div",{style:{marginTop:"1rem"},children:(0,Wd.jsx)(Cht,{validators:m,batchKey:g,title:"Your Nominations",format:"nomination",bondType:f?"pool":"stake",selectable:!f||d(),actions:[{title:"Stop Nominating Selected",onClick:t=>{const{selected:r}=t,i=[...p].filter((t=>!r.map((t=>t.address)).includes(t)));n("ChangeNominations",{nominations:i,provider:t,bondType:e},"small")},onSelected:!0},{disabled:!c.length,title:"Add From Favourites",onClick:t=>{let{setSelectActive:r}=t;r(!1),n("NominateFromFavourites",{nominations:p,bondType:e},"large")},onSelected:!1}],refetchOnListUpdate:!0,allowMoreCols:!0,disableThrottle:!0})}):(0,Wd.jsx)("div",{className:"head",children:(0,Wd.jsx)("h3",{children:"Not Nominating."})})})}):(0,Wd.jsx)("div",{className:"head",children:(0,Wd.jsx)("h3",{children:"Not Nominating."})})]})},Nht=Aht;Clt.register(Elt,mut,tut);const Oht=t=>{const{mode:e}=yf(),{network:n}=IJ(),{active:r,unlocking:i,unlocked:o,inactive:a}=t,{free:s}=t;let l=r,u=i+o,c=s,h=!1;0===l&&0===u&&0===c&&(l=-1,u=-1,c=-1,h=!0);const d={responsive:!0,maintainAspectRatio:!1,spacing:h?0:2,plugins:{legend:{padding:{right:20},display:!0,position:"left",align:"center",labels:{padding:20,color:Xu.text.primary[e],font:{size:14,weight:"500"}}},tooltip:{displayColors:!1,backgroundColor:Xu.graphs.tooltip[e],bodyColor:Xu.text.invert[e],callbacks:{label:t=>a?"Inactive":`${t.label}: ${-1===t.parsed?0:t.parsed} ${n.unit}`}}},cutout:"75%"},f=h?[Xu.graphs.colors[1][e],Xu.graphs.inactive2[e],Xu.graphs.inactive[e]]:[Ku[`${n.name}-${e}`],Xu.graphs.colors[0][e],Xu.graphs.colors[1][e]],p={labels:["Active","Unlocking","Free"],datasets:[{label:n.unit,data:[l,u,c],backgroundColor:f,borderWidth:0}]};return(0,Wd.jsx)(Mv,{transparent:!0,noMargin:!0,style:{border:"none",boxShadow:"none"},children:(0,Wd.jsx)("div",{className:"graph",style:{flex:0,paddingRight:"1rem",height:160},children:(0,Wd.jsx)($ut,{options:d,data:p})})})},jht=()=>{const{network:t}=IJ(),{units:e}=t,{openModalWith:n}=Bct(),{activeAccount:r}=rtt(),{getLedgerForStash:i,getBondOptions:o}=ftt(),{inSetup:a}=btt(),{isSyncing:s}=Rtt(),l=i(r),{active:u}=l,{freeToBond:c,totalUnlocking:h,totalUnlocked:d,totalUnlockChuncks:f}=o(r);return(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsxs)(wv,{children:[(0,Wd.jsxs)("h4",{children:["Bonded Funds",(0,Wd.jsx)(ort,{page:"stake",title:"Bonding"})]}),(0,Wd.jsxs)("h2",{children:[rf(u,e),"\xa0",t.unit]}),(0,Wd.jsxs)(Ect,{children:[(0,Wd.jsx)(zct,{small:!0,primary:!0,inline:!0,title:"+",disabled:a()||s,onClick:()=>n("UpdateBond",{fn:"add",bondType:"stake"},"small")}),(0,Wd.jsx)(zct,{small:!0,primary:!0,title:"-",disabled:a()||s,onClick:()=>n("UpdateBond",{fn:"remove",bondType:"stake"},"small")}),(0,Wd.jsx)(zct,{small:!0,inline:!0,primary:!0,icon:ky,title:String(null!==f&&void 0!==f?f:0),disabled:a()||s,onClick:()=>n("UnlockChunks",{bondType:"stake"},"small")})]})]}),(0,Wd.jsx)(Oht,{active:rf(u,e),unlocking:rf(h,e),unlocked:rf(d,e),free:rf(c,e),inactive:a()})]})},Vht=t=>{var e;const n=null!==(e=t.setters)&&void 0!==e?e:[],r=t.nominations,{batchKey:i}=t,{openModalWith:o}=Bct(),{isReady:a}=IJ(),{activeAccount:s}=rtt(),{removeValidatorMetaBatch:l,validators:u,meta:c}=ztt(),{applyValidatorOrder:h,applyValidatorFilters:d}=Rtt();let{favouritesList:f}=ztt();null===f&&(f=[]);const[p,m]=(0,k.useState)(null),[g,y]=(0,k.useState)(!1),[v,b]=(0,k.useState)(r),w="validators_browse";(0,k.useEffect)((()=>{b(r)}),[s,r]);(0,k.useEffect)((()=>{if(!a||!u.length)return;const t=c[w];if(void 0===t)return;if(void 0===t.stake)return;let e;if(g){switch(p){case"Favourites":e=(()=>{let t=[];return f.length&&(t=f.slice(0,16)),t})();break;case"Most Profitable":e=(()=>{let t=Object.assign(u);return t=d(t,w,["all_commission","blocked_nominations","over_subscribed","inactive","missing_identity"]),t=h(t,"commission"),t.length&&(t=t.slice(0,16)),t})();break;default:return}b(e),y(!1);for(const t of n)t.set({...t.current,nominations:e})}}));return(0,Wd.jsxs)(mct,{children:[(0,Wd.jsx)("div",{children:!v.length&&(0,Wd.jsx)(Wd.Fragment,{children:(0,Wd.jsx)(wht,{children:(0,Wd.jsxs)(xht,{title:"Generate Method",children:[(0,Wd.jsx)(Mht,{label:"Most Profitable",icon:Dy,transform:"grow-2",active:!1,onClick:()=>{m("Most Profitable"),l(i),b([]),y(!0)},width:175}),(0,Wd.jsx)(Mht,{label:"From Favourites",icon:Fy,transform:"grow-2",disabled:!f.length,active:!1,onClick:()=>{m("Favourites"),l(i),b([]),y(!0)},width:175})]})})})}),g?(0,Wd.jsx)(Wd.Fragment,{}):(0,Wd.jsx)(Wd.Fragment,{children:a&&v.length>0&&(0,Wd.jsx)("div",{style:{marginTop:"1rem"},children:(0,Wd.jsx)(Cht,{validators:v,batchKey:i,selectable:!0,actions:[{title:"Start Again",onClick:t=>{let{resetSelected:e}=t;m(null),l(i),b([]);for(const r of n)r.set({...r.current,nominations:[]});e()},onSelected:!1},{disabled:!f.length,title:"Add From Favourites",onClick:t=>{let{setSelectActive:e}=t;e(!1);o("SelectFavourites",{nominations:v,callback:t=>{m(null),l(i),b(t);for(const e of n)e.set({...e.current,nominations:t})}},"large")},onSelected:!1},{title:"Remove Selected",onClick:t=>{let{selected:e,resetSelected:r,setSelectActive:o}=t;m("From List"),l(i);const a=[...v].filter((t=>!e.map((t=>t.address)).includes(t.address)));b(a);for(const i of n)i.set({...i.current,nominations:a});o(!1),r()},onSelected:!0}],allowMoreCols:!0})})})]})},Eht=()=>{var t;const{getNominationsStatus:e}=btt(),n=e(),r=Object.values(n).length,i=null!==(t=Object.values(n).filter((t=>"active"===t)).length)&&void 0!==t?t:0,o={label:"Active Nominations",stat:{value:i,total:r,unit:""},graph:{value1:i,value2:i?0:1},tooltip:i?"Active":void 0,assistant:{page:"stake",key:"Nominations"}};return(0,Wd.jsx)(oct,{...o})},Iht=()=>{const{network:t}=IJ(),{eraStakers:e}=btt(),{minActiveBond:n}=e,r={label:"Minimum Active Bond",value:n,unit:t.unit,assistant:{page:"stake",key:"Bonding"}};return(0,Wd.jsx)(nct,{...r})},zht={eraLength:0,eraProgress:0,sessionLength:0,sessionProgress:0,sessionsPerEra:0,unsub:void 0},Lht=k.createContext({getEraTimeLeft:()=>0,sessionEra:{}}),Rht=()=>k.useContext(Lht),Hht=()=>{const{sessionEra:t,getEraTimeLeft:e}=Rht(),[n,r]=(0,k.useState)(0),i=(0,k.useRef)(n),o=t=>{r(t),i.current=t};let a;return(0,k.useEffect)((()=>(o(e()),a=setInterval((()=>{o(i.current-1)}),1e3),()=>{clearInterval(a)})),[t]),i.current},Bht=()=>{const{metrics:t}=att(),{sessionEra:e}=Rht(),n=Hht(),r=mv().duration(1e3*n,"milliseconds"),i=`${r.hours()}:${r.minutes()}:${r.seconds()}`,o={label:"Active Era",stat:{value:t.activeEra.index,unit:""},graph:{value1:e.eraProgress,value2:e.eraLength-e.eraProgress},tooltip:i,assistant:{page:"validators",key:"Era"}};return(0,Wd.jsx)(oct,{...o})},Dht=()=>{const{openModalWith:t}=Bct(),{isSyncing:e}=Rtt(),{getControllerNotImported:n}=btt(),{activeAccount:r}=rtt(),{getBondedAccount:i}=ftt(),o=i(r);return(0,Wd.jsx)(Wd.Fragment,{children:n(o)&&!e&&(0,Wd.jsx)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Wd.jsxs)(xv,{style:{border:"2px solid rgba(242, 185, 27,0.25)"},children:[(0,Wd.jsx)(wv,{children:(0,Wd.jsx)("h4",{children:"You have not imported your controller account. If you have lost access to your controller account, set a new one now. Otherwise, import the controller into one of your active extensions."})}),(0,Wd.jsx)(zct,{small:!0,primary:!0,inline:!0,title:"Set New Controller",onClick:()=>t("UpdateController",{},"large")})]})})})},Fht=ln.div`
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
`,Uht=t=>{const{label:e,stat:n,buttons:r,assistant:i,icon:o}=t;return(0,Wd.jsxs)(Fht,{children:[(0,Wd.jsxs)("h4",{children:[e,i.length&&(0,Wd.jsx)(ort,{page:i[0],title:i[1]})]}),(0,Wd.jsxs)("h2",{children:[o&&(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Fg,{icon:o,transform:"shrink-4"}),"\xa0"]}),n,r&&(0,Wd.jsxs)("span",{children:["\xa0\xa0",r.map(((t,e)=>{var n,r,i,o;return(0,Wd.jsxs)(k.Fragment,{children:[(0,Wd.jsx)(zct,{primary:!0,inline:!0,title:t.title,small:null!==(n=t.small)&&void 0!==n?n:void 0,icon:null!==(r=t.icon)&&void 0!==r?r:void 0,transform:null!==(i=t.transform)&&void 0!==i?i:void 0,disabled:null!==(o=t.disabled)&&void 0!==o&&o,onClick:()=>t.onClick()},`btn_${e}_${Math.random()}`),"\xa0\xa0"]},`stat_${e}`)}))]})]})]})},Wht=Uht,qht=()=>{var t;const{isReady:e}=IJ(),{setOnSetup:n,getSetupProgressPercent:r}=Rtt(),{openModalWith:i}=Bct(),{activeAccount:o}=rtt(),{isSyncing:a}=Rtt(),{getNominationsStatus:s,staking:l,inSetup:u}=btt(),{getAccountNominations:c}=ftt(),{payee:h}=l,d=c(o),f=s(),p=Object.values(f).filter((t=>"active"===t)).length,m=xt.find((t=>t.key===h));let g="Start Staking";if(u()){const t=r(o);t>0&&(g+=`: ${t}%`)}return(0,Wd.jsxs)(xv,{height:300,children:[(0,Wd.jsx)(Wht,{label:"Status",assistant:["stake","Staking Status"],stat:u()||a?"Not Staking":d.length?p?"Actively Nominating with Bonded Funds":"Waiting for Active Nominations":"Inactive: Not Nominating",buttons:u()?[{title:g,icon:ty,transform:"grow-1",disabled:!e,onClick:()=>n(!0)}]:[]}),(0,Wd.jsx)(Dc,{}),(0,Wd.jsx)(Wht,{label:"Reward Destination",assistant:["stake","Reward Destination"],icon:null===h?av:"Staked"===h?zy:"None"===h?av:ev,stat:u()?"Not Assigned":null!==(t=null===m||void 0===m?void 0:m.name)&&void 0!==t?t:"Not Assigned",buttons:m?[{title:"Update",icon:ev,small:!0,disabled:u()||a,onClick:()=>i("UpdatePayee",{},"small")}]:[]})]})},Xht=t=>{let{title:e}=t;const{openModalWith:n}=Bct(),{activeAccount:r}=rtt(),{isSyncing:i}=Rtt(),{targets:o,setTargets:a,inSetup:s}=btt(),{getAccountNominations:l}=ftt(),u=l(r);return(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Utt,{title:e}),(0,Wd.jsxs)(bv,{children:[(0,Wd.jsx)(Eht,{}),(0,Wd.jsx)(Iht,{}),(0,Wd.jsx)(Bht,{})]}),(0,Wd.jsx)(Dht,{}),(0,Wd.jsxs)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:[(0,Wd.jsx)(Hc,{hOrder:1,vOrder:0,children:(0,Wd.jsx)(qht,{})}),(0,Wd.jsx)(Bc,{hOrder:0,vOrder:1,children:(0,Wd.jsx)(xv,{height:300,children:(0,Wd.jsx)(jht,{})})})]}),(0,Wd.jsx)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Wd.jsx)(xv,{children:u.length||s()||i?(0,Wd.jsx)(Aht,{bondType:"stake"}):(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsxs)(wv,{withAction:!0,children:[(0,Wd.jsxs)("h2",{children:["Start Nominating",(0,Wd.jsx)(ort,{page:"stake",title:"Nominations"})]}),(0,Wd.jsx)("div",{children:(0,Wd.jsx)(zct,{small:!0,inline:!0,primary:!0,title:"Nominate",icon:ty,transform:"grow-1",disabled:0===o.length||s()||i,onClick:()=>n("Nominate",{},"small")})})]}),(0,Wd.jsx)(Vht,{batchKey:"generate_nominations_active",setters:[{set:a,current:o}],nominations:o.nominations})]})})})]})};var Zht=__webpack_require__(5667);const Yht=t=>{const{activeAccount:e}=rtt(),{getSetupProgress:n,setActiveAccountSetupSection:r}=Rtt(),i=n(e),{title:o,assistantPage:a,assistantKey:s,complete:l,thisSection:u}=t;return(0,Wd.jsxs)(Oct,{children:[(0,Wd.jsx)("section",{children:(0,Wd.jsxs)("h2",{children:[o,void 0!==a&&void 0!==s&&(0,Wd.jsx)(ort,{page:a,title:s})]})}),(0,Wd.jsx)("section",{children:l&&(0,Wd.jsxs)(Wd.Fragment,{children:[i.section!==u&&u<i.section&&(0,Wd.jsx)("span",{children:(0,Wd.jsx)(zct,{inline:!0,small:!0,title:"Update",onClick:()=>{r(u)}})}),(0,Wd.jsx)("h4",{className:"complete",children:"Complete"})]})})]})},Kht=t=>{const{activeAccount:e}=rtt(),{getSetupProgress:n,setActiveAccountSetupSection:r}=Rtt(),i=n(e),{complete:o}=t;return(0,Wd.jsx)(jct,{children:(0,Wd.jsx)("section",{children:o?(0,Wd.jsx)(zct,{inline:!0,primary:!0,title:"Continue",onClick:()=>r(i.section+1)}):(0,Wd.jsx)("div",{style:{opacity:.5},children:(0,Wd.jsx)(zct,{inline:!0,title:"Continue",disabled:!0})})})})},Ght=t=>{let{thisSection:e,activeSection:n,children:r}=t;const i=e===n?"visible":"hidden";return(0,Wd.jsx)(Fu.div,{initial:!1,style:{overflow:"hidden",width:"100%"},variants:{hidden:{height:"0px"},visible:{height:"auto"}},animate:i,transition:{duration:.5,type:"spring",bounce:.2},children:r})},Jht=t=>{const{consts:e}=IJ(),{section:n}=t,{activeAccount:r}=rtt(),{getSetupProgress:i,setActiveAccountSetup:o}=Rtt(),a=i(r),{maxNominations:s}=e;return(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Yht,{thisSection:n,complete:a.nominations.length>0,title:"Nominate",assistantPage:"stake",assistantKey:"Nominating"}),(0,Wd.jsxs)(Ght,{thisSection:n,activeSection:a.section,children:[(0,Wd.jsxs)("div",{style:{marginTop:"0.5rem"},children:[(0,Wd.jsxs)("h4",{children:["Choose up to ",s," validators to nominate. Generate your nominations automatically or add a selection from your favourites."]}),(0,Wd.jsx)(Vht,{batchKey:"generate_nominations_inactive",setters:[{set:o,current:a}],nominations:a.nominations,setSetup:o})]}),(0,Wd.jsx)(Kht,{complete:a.nominations.length>0})]})]})};function Qht(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}__webpack_require__(419);function _ht(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function $ht(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function tdt(t,e){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var n=getComputedStyle(t,null);return $ht(n.overflowY,e)||$ht(n.overflowX,e)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function edt(t,e,n,r,i,o,a,s){return o<t&&a>e||o>t&&a<e?0:o<=t&&s<=n||a>=e&&s>=n?o-t-r:a>e&&s<n||o<t&&s>n?a-e+i:0}var ndt=0;function rdt(){}function idt(t,e){if(t){var n=function(t,e){var n=window,r=e.scrollMode,i=e.block,o=e.inline,a=e.boundary,s=e.skipOverflowHiddenElements,l="function"==typeof a?a:function(t){return t!==a};if(!_ht(t))throw new TypeError("Invalid target");for(var u=document.scrollingElement||document.documentElement,c=[],h=t;_ht(h)&&l(h);){if((h=h.parentElement)===u){c.push(h);break}null!=h&&h===document.body&&tdt(h)&&!tdt(document.documentElement)||null!=h&&tdt(h,s)&&c.push(h)}for(var d=n.visualViewport?n.visualViewport.width:innerWidth,f=n.visualViewport?n.visualViewport.height:innerHeight,p=window.scrollX||pageXOffset,m=window.scrollY||pageYOffset,g=t.getBoundingClientRect(),y=g.height,v=g.width,b=g.top,w=g.right,x=g.bottom,M=g.left,k="start"===i||"nearest"===i?b:"end"===i?x:b+y/2,S="center"===o?M+v/2:"end"===o?w:M,C=[],P=0;P<c.length;P++){var T=c[P],A=T.getBoundingClientRect(),N=A.height,O=A.width,j=A.top,V=A.right,E=A.bottom,I=A.left;if("if-needed"===r&&b>=0&&M>=0&&x<=f&&w<=d&&b>=j&&x<=E&&M>=I&&w<=V)return C;var z=getComputedStyle(T),L=parseInt(z.borderLeftWidth,10),R=parseInt(z.borderTopWidth,10),H=parseInt(z.borderRightWidth,10),B=parseInt(z.borderBottomWidth,10),D=0,F=0,U="offsetWidth"in T?T.offsetWidth-T.clientWidth-L-H:0,W="offsetHeight"in T?T.offsetHeight-T.clientHeight-R-B:0;if(u===T)D="start"===i?k:"end"===i?k-f:"nearest"===i?edt(m,m+f,f,R,B,m+k,m+k+y,y):k-f/2,F="start"===o?S:"center"===o?S-d/2:"end"===o?S-d:edt(p,p+d,d,L,H,p+S,p+S+v,v),D=Math.max(0,D+m),F=Math.max(0,F+p);else{D="start"===i?k-j-R:"end"===i?k-E+B+W:"nearest"===i?edt(j,E,N,R,B+W,k,k+y,y):k-(j+N/2)+W/2,F="start"===o?S-I-L:"center"===o?S-(I+O/2)+U/2:"end"===o?S-V+H+U:edt(I,V,O,L,H+U,S,S+v,v);var q=T.scrollLeft,X=T.scrollTop;k+=X-(D=Math.max(0,Math.min(X+D,T.scrollHeight-N+W))),S+=q-(F=Math.max(0,Math.min(q+F,T.scrollWidth-O+U)))}C.push({el:T,top:D,left:F})}return C}(t,{boundary:e,block:"nearest",scrollMode:"if-needed"});n.forEach((function(t){var e=t.el,n=t.top,r=t.left;e.scrollTop=n,e.scrollLeft=r}))}}function odt(t,e,n){return t===e||e instanceof n.Node&&t.contains&&t.contains(e)}function adt(t,e){var n;function r(){n&&clearTimeout(n)}function i(){for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];r(),n=setTimeout((function(){n=null,t.apply(void 0,o)}),e)}return i.cancel=r,i}function sdt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return e.some((function(e){return e&&e.apply(void 0,[t].concat(r)),t.preventDownshiftDefault||t.hasOwnProperty("nativeEvent")&&t.nativeEvent.preventDownshiftDefault}))}}function ldt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){e.forEach((function(e){"function"===typeof e?e(t):e&&(e.current=t)}))}}function udt(){return String(ndt++)}function cdt(t){var e=t.isOpen,n=t.resultCount,r=t.previousResultCount;return e?n?n!==r?n+" result"+(1===n?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function hdt(t,e){return Object.keys(t).reduce((function(n,r){return n[r]=ddt(e,r)?e[r]:t[r],n}),{})}function ddt(t,e){return void 0!==t[e]}function fdt(t){var e=t.key,n=t.keyCode;return n>=37&&n<=40&&0!==e.indexOf("Arrow")?"Arrow"+e:e}function pdt(t,e,n,r,i){if(void 0===i&&(i=!0),0===n)return-1;var o=n-1;("number"!==typeof e||e<0||e>=n)&&(e=t>0?-1:o+1);var a=e+t;a<0?a=i?o:0:a>o&&(a=i?0:o);var s=mdt(t,a,n,r,i);return-1===s?e>=n?-1:e:s}function mdt(t,e,n,r,i){var o=r(e);if(!o||!o.hasAttribute("disabled"))return e;if(t>0){for(var a=e+1;a<n;a++)if(!r(a).hasAttribute("disabled"))return a}else for(var s=e-1;s>=0;s--)if(!r(s).hasAttribute("disabled"))return s;return i?t>0?mdt(1,0,n,r,!1):mdt(-1,n-1,n,r,!1):-1}function gdt(t,e,n,r){return void 0===r&&(r=!0),e.some((function(e){return e&&(odt(e,t,n)||r&&odt(e,n.document.activeElement,n))}))}var ydt=adt((function(t){bdt(t).textContent=""}),500);function vdt(t,e){var n=bdt(e);t&&(n.textContent=t,ydt(e))}function bdt(t){void 0===t&&(t=document);var e=t.getElementById("a11y-status-message");return e||((e=t.createElement("div")).setAttribute("id","a11y-status-message"),e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.setAttribute("aria-relevant","additions text"),Object.assign(e.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),t.body.appendChild(e),e)}var wdt=["isInitialMount","highlightedIndex","items","environment"],xdt={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function Mdt(t,e,n){var r=t.props,i=t.type,o={};Object.keys(e).forEach((function(r){!function(t,e,n,r){var i=e.props,o=e.type,a="on"+Tdt(t)+"Change";i[a]&&void 0!==r[t]&&r[t]!==n[t]&&i[a](Fc({type:o},r))}(r,t,e,n),n[r]!==e[r]&&(o[r]=n[r])})),r.onStateChange&&Object.keys(o).length&&r.onStateChange(Fc({type:i},o))}var kdt=adt((function(t,e){vdt(t(),e)}),200),Sdt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?k.useLayoutEffect:k.useEffect;function Cdt(t){var e=t.id,n=void 0===e?"downshift-"+udt():e,r=t.labelId,i=t.menuId,o=t.getItemId,a=t.toggleButtonId,s=t.inputId,l=(0,k.useRef)({labelId:r||n+"-label",menuId:i||n+"-menu",getItemId:o||function(t){return n+"-item-"+t},toggleButtonId:a||n+"-toggle-button",inputId:s||n+"-input"});return l.current}function Pdt(t,e,n){return void 0!==t?t:0===n.length?-1:n.indexOf(e)}function Tdt(t){return""+t.slice(0,1).toUpperCase()+t.slice(1)}function Adt(t){var e=(0,k.useRef)(t);return e.current=t,e}function Ndt(t,e,n){var r=(0,k.useRef)(),i=(0,k.useRef)(),o=(0,k.useCallback)((function(e,n){i.current=n,e=hdt(e,n.props);var r=t(e,n);return n.props.stateReducer(e,Fc({},n,{changes:r}))}),[t]),a=(0,k.useReducer)(o,e),s=a[0],l=a[1],u=Adt(n),c=(0,k.useCallback)((function(t){return l(Fc({props:u.current},t))}),[u]),h=i.current;return(0,k.useEffect)((function(){h&&r.current&&r.current!==s&&Mdt(h,hdt(r.current,h.props),s),r.current=s}),[s,n,h]),[s,c]}var Odt={itemToString:function(t){return t?String(t):""},stateReducer:function(t,e){return e.changes},getA11ySelectionMessage:function(t){var e=t.selectedItem,n=t.itemToString;return e?n(e)+" has been selected.":""},scrollIntoView:idt,circularNavigation:!1,environment:"undefined"===typeof window?{}:window};function jdt(t,e,n){void 0===n&&(n=xdt);var r="default"+Tdt(e);return r in t?t[r]:n[e]}function Vdt(t,e,n){if(void 0===n&&(n=xdt),e in t)return t[e];var r="initial"+Tdt(e);return r in t?t[r]:jdt(t,e,n)}function Edt(t){var e=Vdt(t,"selectedItem"),n=Vdt(t,"isOpen"),r=Vdt(t,"highlightedIndex"),i=Vdt(t,"inputValue");return{highlightedIndex:r<0&&e&&n?t.items.indexOf(e):r,isOpen:n,selectedItem:e,inputValue:i}}function Idt(t,e,n,r){var i=t.items,o=t.initialHighlightedIndex,a=t.defaultHighlightedIndex,s=e.selectedItem,l=e.highlightedIndex;return 0===i.length?-1:void 0!==o&&l===o?o:void 0!==a?a:s?0===n?i.indexOf(s):pdt(n,i.indexOf(s),i.length,r,!1):0===n?-1:n<0?i.length-1:0}function zdt(t,e,n,r){var i=(0,k.useRef)({isMouseDown:!1,isTouchMove:!1});return(0,k.useEffect)((function(){var o=function(){i.current.isMouseDown=!0},a=function(o){i.current.isMouseDown=!1,t&&!gdt(o.target,e.map((function(t){return t.current})),n)&&r()},s=function(){i.current.isTouchMove=!1},l=function(){i.current.isTouchMove=!0},u=function(o){!t||i.current.isTouchMove||gdt(o.target,e.map((function(t){return t.current})),n,!1)||r()};return n.addEventListener("mousedown",o),n.addEventListener("mouseup",a),n.addEventListener("touchstart",s),n.addEventListener("touchmove",l),n.addEventListener("touchend",u),function(){n.removeEventListener("mousedown",o),n.removeEventListener("mouseup",a),n.removeEventListener("touchstart",s),n.removeEventListener("touchmove",l),n.removeEventListener("touchend",u)}}),[t,n]),i}var Ldt=function(){return rdt};function Rdt(t,e,n){var r=n.isInitialMount,i=n.highlightedIndex,o=n.items,a=n.environment,s=Qht(n,wdt);(0,k.useEffect)((function(){r||kdt((function(){return t(Fc({highlightedIndex:i,highlightedItem:o[i],resultCount:o.length},s))}),a.document)}),e)}function Hdt(t){var e=t.highlightedIndex,n=t.isOpen,r=t.itemRefs,i=t.getItemNodeFromIndex,o=t.menuElement,a=t.scrollIntoView,s=(0,k.useRef)(!0);return Sdt((function(){e<0||!n||!Object.keys(r.current).length||(!1===s.current?s.current=!0:a(i(e),o))}),[e]),s}var Bdt=rdt;function Ddt(t,e,n){var r,i=e.type,o=e.props;switch(i){case n.ItemMouseMove:r={highlightedIndex:e.index};break;case n.MenuMouseLeave:r={highlightedIndex:-1};break;case n.ToggleButtonClick:case n.FunctionToggleMenu:r={isOpen:!t.isOpen,highlightedIndex:t.isOpen?-1:Idt(o,t,0)};break;case n.FunctionOpenMenu:r={isOpen:!0,highlightedIndex:Idt(o,t,0)};break;case n.FunctionCloseMenu:r={isOpen:!1};break;case n.FunctionSetHighlightedIndex:r={highlightedIndex:e.highlightedIndex};break;case n.FunctionSetInputValue:r={inputValue:e.inputValue};break;case n.FunctionReset:r={highlightedIndex:jdt(o,"highlightedIndex"),isOpen:jdt(o,"isOpen"),selectedItem:jdt(o,"selectedItem"),inputValue:jdt(o,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return Fc({},t,r)}Rh().array.isRequired,Rh().func,Rh().func,Rh().func,Rh().bool,Rh().number,Rh().number,Rh().number,Rh().bool,Rh().bool,Rh().bool,Rh().any,Rh().any,Rh().any,Rh().string,Rh().string,Rh().string,Rh().func,Rh().string,Rh().func,Rh().func,Rh().func,Rh().func,Rh().func,Rh().shape({addEventListener:Rh().func,removeEventListener:Rh().func,document:Rh().shape({getElementById:Rh().func,activeElement:Rh().any,body:Rh().any})});hn(hn({},Odt),{getA11yStatusMessage:function(t){var e=t.isOpen,n=t.resultCount,r=t.previousResultCount;return e?n?n!==r?n+" result"+(1===n?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.":"":"No results are available.":""}});var Fdt=Object.freeze({__proto__:null,InputKeyDownArrowDown:0,InputKeyDownArrowUp:1,InputKeyDownEscape:2,InputKeyDownHome:3,InputKeyDownEnd:4,InputKeyDownEnter:5,InputChange:6,InputBlur:7,MenuMouseLeave:8,ItemMouseMove:9,ItemClick:10,ToggleButtonClick:11,FunctionToggleMenu:12,FunctionOpenMenu:13,FunctionCloseMenu:14,FunctionSetHighlightedIndex:15,FunctionSelectItem:16,FunctionSetInputValue:17,FunctionReset:18,ControlledPropUpdatedSelectedItem:19});Rh().array.isRequired,Rh().func,Rh().func,Rh().func,Rh().bool,Rh().number,Rh().number,Rh().number,Rh().bool,Rh().bool,Rh().bool,Rh().any,Rh().any,Rh().any,Rh().string,Rh().string,Rh().string,Rh().string,Rh().string,Rh().string,Rh().func,Rh().string,Rh().string,Rh().func,Rh().func,Rh().func,Rh().func,Rh().func,Rh().func,Rh().shape({addEventListener:Rh().func,removeEventListener:Rh().func,document:Rh().shape({getElementById:Rh().func,activeElement:Rh().any,body:Rh().any})});var Udt=rdt;var Wdt=Fc({},Odt,{getA11yStatusMessage:cdt,circularNavigation:!0});function qdt(t,e){var n,r=e.type,i=e.props,o=e.shiftKey;switch(r){case 10:n={isOpen:jdt(i,"isOpen"),highlightedIndex:jdt(i,"highlightedIndex"),selectedItem:i.items[e.index],inputValue:i.itemToString(i.items[e.index])};break;case 0:n=t.isOpen?{highlightedIndex:pdt(o?5:1,t.highlightedIndex,i.items.length,e.getItemNodeFromIndex,i.circularNavigation)}:{highlightedIndex:Idt(i,t,1,e.getItemNodeFromIndex),isOpen:i.items.length>=0};break;case 1:n=t.isOpen?{highlightedIndex:pdt(o?-5:-1,t.highlightedIndex,i.items.length,e.getItemNodeFromIndex,i.circularNavigation)}:{highlightedIndex:Idt(i,t,-1,e.getItemNodeFromIndex),isOpen:i.items.length>=0};break;case 5:n=Fc({},t.isOpen&&t.highlightedIndex>=0&&{selectedItem:i.items[t.highlightedIndex],isOpen:jdt(i,"isOpen"),highlightedIndex:jdt(i,"highlightedIndex"),inputValue:i.itemToString(i.items[t.highlightedIndex])});break;case 2:n=Fc({isOpen:!1,highlightedIndex:-1},!t.isOpen&&{selectedItem:null,inputValue:""});break;case 3:n={highlightedIndex:mdt(1,0,i.items.length,e.getItemNodeFromIndex,!1)};break;case 4:n={highlightedIndex:mdt(-1,i.items.length-1,i.items.length,e.getItemNodeFromIndex,!1)};break;case 7:n=Fc({isOpen:!1,highlightedIndex:-1},t.highlightedIndex>=0&&e.selectItem&&{selectedItem:i.items[t.highlightedIndex],inputValue:i.itemToString(i.items[t.highlightedIndex])});break;case 6:n={isOpen:!0,highlightedIndex:jdt(i,"highlightedIndex"),inputValue:e.inputValue};break;case 16:n={selectedItem:e.selectedItem,inputValue:i.itemToString(e.selectedItem)};break;case 19:n={inputValue:e.inputValue};break;default:return Ddt(t,e,Fdt)}return Fc({},t,n)}var Xdt=["onMouseLeave","refKey","ref"],Zdt=["item","index","refKey","ref","onMouseMove","onClick","onPress"],Ydt=["onClick","onPress","refKey","ref"],Kdt=["onKeyDown","onChange","onInput","onBlur","onChangeText","refKey","ref"],Gdt=["refKey","ref"];function Jdt(t){void 0===t&&(t={}),Udt(t,Jdt);var e=Fc({},Wdt,t),n=e.initialIsOpen,r=e.defaultIsOpen,i=e.items,o=e.scrollIntoView,a=e.environment,s=e.getA11yStatusMessage,l=e.getA11ySelectionMessage,u=e.itemToString,c=function(t){var e=Edt(t),n=e.selectedItem,r=e.inputValue;return""===r&&n&&void 0===t.defaultInputValue&&void 0===t.initialInputValue&&void 0===t.inputValue&&(r=t.itemToString(n)),Fc({},e,{inputValue:r})}(e),h=function(t,e,n){var r=(0,k.useRef)(),i=Ndt(t,e,n),o=i[0],a=i[1];return(0,k.useEffect)((function(){ddt(n,"selectedItem")&&(r.current!==n.selectedItem&&a({type:19,inputValue:n.itemToString(n.selectedItem)}),r.current=o.selectedItem===r.current?n.selectedItem:o.selectedItem)})),[hdt(o,n),a]}(qdt,c,e),d=h[0],f=h[1],p=d.isOpen,m=d.highlightedIndex,g=d.selectedItem,y=d.inputValue,v=(0,k.useRef)(null),b=(0,k.useRef)({}),w=(0,k.useRef)(null),x=(0,k.useRef)(null),M=(0,k.useRef)(null),S=(0,k.useRef)(!0),C=Cdt(e),P=(0,k.useRef)(),T=Adt({state:d,props:e}),A=(0,k.useCallback)((function(t){return b.current[C.getItemId(t)]}),[C]);Rdt(s,[p,m,y,i],Fc({isInitialMount:S.current,previousResultCount:P.current,items:i,environment:a,itemToString:u},d)),Rdt(l,[g],Fc({isInitialMount:S.current,previousResultCount:P.current,items:i,environment:a,itemToString:u},d));var N=Hdt({menuElement:v.current,highlightedIndex:m,isOpen:p,itemRefs:b,scrollIntoView:o,getItemNodeFromIndex:A});Bdt({isInitialMount:S.current,props:e,state:d}),(0,k.useEffect)((function(){(n||r||p)&&w.current&&w.current.focus()}),[]),(0,k.useEffect)((function(){S.current||(P.current=i.length)}));var O=zdt(p,[M,v,x],a,(function(){f({type:7,selectItem:!1})})),j=Ldt();(0,k.useEffect)((function(){S.current=!1}),[]),(0,k.useEffect)((function(){p||(b.current={})}),[p]);var V=(0,k.useMemo)((function(){return{ArrowDown:function(t){t.preventDefault(),f({type:0,shiftKey:t.shiftKey,getItemNodeFromIndex:A})},ArrowUp:function(t){t.preventDefault(),f({type:1,shiftKey:t.shiftKey,getItemNodeFromIndex:A})},Home:function(t){T.current.state.isOpen&&(t.preventDefault(),f({type:3,getItemNodeFromIndex:A}))},End:function(t){T.current.state.isOpen&&(t.preventDefault(),f({type:4,getItemNodeFromIndex:A}))},Escape:function(){var t=T.current.state;(t.isOpen||t.inputValue||t.selectedItem||t.highlightedIndex>-1)&&f({type:2})},Enter:function(t){var e=T.current.state;!e.isOpen||e.highlightedIndex<0||229===t.which||(t.preventDefault(),f({type:5,getItemNodeFromIndex:A}))}}}),[f,T,A]),E=(0,k.useCallback)((function(t){return Fc({id:C.labelId,htmlFor:C.inputId},t)}),[C]),I=(0,k.useCallback)((function(t,e){var n,r=void 0===t?{}:t,i=r.onMouseLeave,o=r.refKey,a=void 0===o?"ref":o,s=r.ref,l=Qht(r,Xdt),u=(void 0===e?{}:e).suppressRefError;return j("getMenuProps",void 0!==u&&u,a,v),Fc(((n={})[a]=ldt(s,(function(t){v.current=t})),n.id=C.menuId,n.role="listbox",n["aria-labelledby"]=C.labelId,n.onMouseLeave=sdt(i,(function(){f({type:8})})),n),l)}),[f,j,C]),z=(0,k.useCallback)((function(t){var e,n,r=void 0===t?{}:t,i=r.item,o=r.index,a=r.refKey,s=void 0===a?"ref":a,l=r.ref,u=r.onMouseMove,c=r.onClick;r.onPress;var h=Qht(r,Zdt),d=T.current,p=d.props,m=d.state,g=Pdt(o,i,p.items);if(g<0)throw new Error("Pass either item or item index in getItemProps!");var y=c;return Fc(((e={})[s]=ldt(l,(function(t){t&&(b.current[C.getItemId(g)]=t)})),e.role="option",e["aria-selected"]=""+(g===m.highlightedIndex),e.id=C.getItemId(g),e),!h.disabled&&((n={onMouseMove:sdt(u,(function(){o!==m.highlightedIndex&&(N.current=!1,f({type:9,index:o}))}))}).onClick=sdt(y,(function(){f({type:10,index:o}),w.current&&w.current.focus()})),n),h)}),[f,T,N,C]),L=(0,k.useCallback)((function(t){var e,n=void 0===t?{}:t,r=n.onClick;n.onPress;var i=n.refKey,o=void 0===i?"ref":i,a=n.ref,s=Qht(n,Ydt);return Fc(((e={})[o]=ldt(a,(function(t){x.current=t})),e.id=C.toggleButtonId,e.tabIndex=-1,e),!s.disabled&&Fc({},{onClick:sdt(r,(function(){f({type:11}),!T.current.state.isOpen&&w.current&&w.current.focus()}))}),s)}),[f,T,C]),R=(0,k.useCallback)((function(t,e){var n,r=void 0===t?{}:t,i=r.onKeyDown,o=r.onChange,a=r.onInput,s=r.onBlur;r.onChangeText;var l=r.refKey,u=void 0===l?"ref":l,c=r.ref,h=Qht(r,Kdt),d=(void 0===e?{}:e).suppressRefError;j("getInputProps",void 0!==d&&d,u,w);var p,m=T.current.state,g={};h.disabled||((p={}).onChange=sdt(o,a,(function(t){f({type:6,inputValue:t.target.value})})),p.onKeyDown=sdt(i,(function(t){var e=fdt(t);e&&V[e]&&V[e](t)})),p.onBlur=sdt(s,(function(){m.isOpen&&!O.current.isMouseDown&&f({type:7,selectItem:!0})})),g=p);return Fc(((n={})[u]=ldt(c,(function(t){w.current=t})),n.id=C.inputId,n["aria-autocomplete"]="list",n["aria-controls"]=C.menuId,n),m.isOpen&&m.highlightedIndex>-1&&{"aria-activedescendant":C.getItemId(m.highlightedIndex)},{"aria-labelledby":C.labelId,autoComplete:"off",value:m.inputValue},g,h)}),[f,V,T,O,j,C]),H=(0,k.useCallback)((function(t,e){var n,r=void 0===t?{}:t,i=r.refKey,o=void 0===i?"ref":i,a=r.ref,s=Qht(r,Gdt),l=(void 0===e?{}:e).suppressRefError;return j("getComboboxProps",void 0!==l&&l,o,M),Fc(((n={})[o]=ldt(a,(function(t){M.current=t})),n.role="combobox",n["aria-haspopup"]="listbox",n["aria-owns"]=C.menuId,n["aria-expanded"]=T.current.state.isOpen,n),s)}),[T,j,C]),B=(0,k.useCallback)((function(){f({type:12})}),[f]),D=(0,k.useCallback)((function(){f({type:14})}),[f]),F=(0,k.useCallback)((function(){f({type:13})}),[f]),U=(0,k.useCallback)((function(t){f({type:15,highlightedIndex:t})}),[f]),W=(0,k.useCallback)((function(t){f({type:16,selectedItem:t})}),[f]);return{getItemProps:z,getLabelProps:E,getMenuProps:I,getInputProps:R,getComboboxProps:H,getToggleButtonProps:L,toggleMenu:B,openMenu:F,closeMenu:D,setHighlightedIndex:U,setInputValue:(0,k.useCallback)((function(t){f({type:17,inputValue:t})}),[f]),selectItem:W,reset:(0,k.useCallback)((function(){f({type:18})}),[f]),highlightedIndex:m,isOpen:p,selectedItem:g,inputValue:y}}Jdt.stateChangeTypes=Fdt;Rh().array,Rh().array,Rh().array,Rh().func,Rh().func,Rh().func,Rh().number,Rh().number,Rh().number,Rh().func,Rh().func,Rh().string,Rh().string,Rh().shape({addEventListener:Rh().func,removeEventListener:Rh().func,document:Rh().shape({getElementById:Rh().func,activeElement:Rh().any,body:Rh().any})});const Qdt=ln.div`
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
    border: 1px solid ${yc};
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
`,_dt=ln.button`
  color: ${Qu};
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
`,$dt=ln.div`
  border: 1px solid ${yc};
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
      background: ${pc};
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
        color: ${Qu};
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
`,tft=t=>{var e;const{items:n,onChange:r,placeholder:i,value:o}=t,[a,s]=(0,k.useState)(n);(0,k.useEffect)((()=>{s(n)}),[n]);const l=Jdt({items:a,itemToString:t=>t?t.name:"",onSelectedItemChange:r,initialSelectedItem:o,onInputValueChange:t=>{let{inputValue:e}=t;s(n.filter((t=>t.name.toLowerCase().startsWith(e.toLowerCase()))))}});return(0,Wd.jsx)(Qdt,{children:(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("div",{style:{position:"relative"},children:[(0,Wd.jsxs)("div",{className:"input-wrap",...l.getComboboxProps(),children:[null!==o&&(0,Wd.jsx)(Wnt,{value:null!==(e=null===o||void 0===o?void 0:o.address)&&void 0!==e?e:"",size:ef("2rem")}),(0,Wd.jsx)("input",{...l.getInputProps({placeholder:i}),className:"input"})]}),l.selectedItem&&(0,Wd.jsx)(_dt,{onClick:()=>l.selectItem(null),"aria-label":"clear selection",children:(0,Wd.jsx)(Fg,{transform:"grow-2",icon:rv})}),(0,Wd.jsx)($dt,{...l.getMenuProps(),children:a.map(((t,e)=>(0,Wd.jsx)(eft,{c:l,item:t,index:e},`controller_acc_${e}`)))})]})})})},eft=t=>{var e,n;let{c:r,item:i,index:o}=t;const{network:a}=IJ(),{mode:s}=yf(),l=i.active?r.getItemProps({index:o,item:i}):{},u=(null===(e=r.selectedItem)||void 0===e?void 0:e.address)===(null===i||void 0===i?void 0:i.address)?Ku[`${a.name}-${s}`]:Xu.text.primary[s],c=(null===(n=r.selectedItem)||void 0===n?void 0:n.address)===(null===i||void 0===i?void 0:i.address)?`2px solid ${Ku[`${a.name}-${s}`]}`:`2px solid ${Xu.transparent[s]}`,h=i.active?1:.1;return(0,Wd.jsxs)("div",{className:"wrapper",...l,children:[!i.active&&(0,Wd.jsx)(kct,{status:"sync_or_setup",title:i.alert,topOffset:"40%"}),(0,Wd.jsxs)("div",{className:"item",style:{color:u,border:c,opacity:h},children:[(0,Wd.jsx)("div",{className:"icon",children:(0,Wd.jsx)(Wnt,{value:i.address,size:40})}),(0,Wd.jsx)("div",{className:"title",children:(0,Wd.jsx)("h3",{style:{color:u},children:i.name})}),(0,Wd.jsx)("p",{children:tf(i.address)})]})]},i.name)},nft=t=>{const{section:e}=t,{network:n}=IJ(),{units:r}=n,{activeAccount:i,accounts:o,getAccount:a}=rtt(),{getAccountBalance:s,minReserve:l,isController:u}=ftt(),{getSetupProgress:c,setActiveAccountSetup:h}=Rtt(),d=c(i),f=null!==d.controller?d.controller:null,[p,m]=(0,k.useState)(a(f));(0,k.useEffect)((()=>{const t=a(null!==d.controller?d.controller:null);m(t)}),[i,o]);let g=o.filter((t=>!u(t.address)));return g=g.filter((t=>t.address!==i)),g=g.map((t=>{const e=s(t.address);return{...t,balance:e,active:nf(e.free.toNumber(),r)>=nf(l.toNumber(),r),alert:`Not Enough ${n.unit}`}})),g=g.sort(((t,e)=>e.balance.free.sub(t.balance.free).toNumber())),(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Yht,{thisSection:e,title:"Set Controller Account",assistantPage:"stake",assistantKey:"Stash and Controller Accounts",complete:null!==d.controller}),(0,Wd.jsxs)(Ght,{thisSection:e,activeSection:d.section,children:[(0,Wd.jsx)(Vct,{}),(0,Wd.jsx)(tft,{items:g,onChange:t=>{var e;let{selectedItem:n}=t;m(n),h({...d,controller:null!==(e=null===n||void 0===n?void 0:n.address)&&void 0!==e?e:null})},placeholder:"Search Account",value:p}),(0,Wd.jsx)(Kht,{complete:null!==d.controller})]})]})},rft=ln.div`
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
`,ift=ln.div`
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
      background: ${sc};
      border-radius: 0.75rem;
      padding: 0.75rem;
    }
  }
`,oft=t=>{var e,n,r;const i=null!==(e=t.setters)&&void 0!==e?e:[],{disabled:o,freeToBond:a,freeToUnbondToMin:s}=t,l=null!==(n=t.task)&&void 0!==n?n:"bond",u=null!==(r=t.value)&&void 0!==r?r:null,{network:c}=IJ(),{activeAccount:h}=rtt(),[d,f]=(0,k.useState)(u),p=t=>{for(const e of i)e.set({...e.current,bond:t})};return(0,k.useEffect)((()=>{var e;f(null!==(e=t.defaultValue)&&void 0!==e?e:0)}),[h]),(0,Wd.jsxs)(rft,{children:[(0,Wd.jsx)("div",{children:(0,Wd.jsx)(ift,{children:(0,Wd.jsxs)("section",{style:{opacity:o?.5:1},children:[(0,Wd.jsxs)("h3",{children:["unbond"===l?"Unbond":"Bond"," ",c.unit,":"]}),(0,Wd.jsx)("input",{type:"text",placeholder:`0 ${c.unit}`,value:d,onChange:t=>{"bond"===l?(t=>{const{value:e}=t.target;(ff(e)||""===e)&&(f(e),p(e))})(t):(t=>{if(!t)return;const e=t.currentTarget.value;(ff(e)||""===e)&&(f(e),p(e))})(t)},disabled:o})]})})}),(0,Wd.jsx)("div",{children:(0,Wd.jsx)("div",{children:(0,Wd.jsx)(zct,{inline:!0,small:!0,title:"Max",onClick:()=>{const t="bond"===l?a:s;f(t),p(t)}})})})]})},aft=ln.div`
  width: 100%;
  height: 1px;
  margin: 0.75rem 0;
`,sft=ln.div`
  background: ${sc};
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
`,lft=t=>{const{text:e}=t;return(0,Wd.jsx)(sft,{children:(0,Wd.jsxs)("h4",{children:[(0,Wd.jsx)(Fg,{icon:Wy,transform:"shrink-2",className:"icon"}),e]})})},uft=t=>{var e,n,r,i;const{bondType:o,defaultBond:a,unbond:s}=t,l=null!==(e=t.nominating)&&void 0!==e&&e,u=null!==(n=t.warnings)&&void 0!==n?n:[],c=null!==(r=t.setters)&&void 0!==r?r:[],h=null!==(i=t.listenIsValid)&&void 0!==i?i:()=>{},{network:d}=IJ(),{activeAccount:f}=rtt(),{staking:p,getControllerNotImported:m}=btt(),{getLedgerForStash:g,getBondedAccount:y,getBondOptions:v}=ftt(),{getPoolBondOptions:b}=Ett(),{stats:w}=Ttt(),{minJoinBond:x}=w,{units:M}=d,S=y(f),C=g(f),{active:P}=C,{minNominatorBond:T}=p,A="pool"===o?b(f):v(f),{freeToBond:N,freeToUnbond:O,active:j}=A,V=rf(N,M),E=rf("pool"===o?x:T,M),I=rf("pool"===o?$d().max(O.sub(x),new($d())(0)):$d().max(O.sub(T),new($d())(0)),M),z=rf("pool"===o?j:P,M),[L,R]=(0,k.useState)([]),[H,B]=(0,k.useState)({bond:a}),[D,F]=(0,k.useState)(!1);c.push({set:B,current:H}),(0,k.useEffect)((()=>{B({bond:a})}),[f]),(0,k.useEffect)((()=>{U()}),[H]);const U=()=>{let t=!1;const e=u;s||(0===V&&(t=!0,e.push(`You have no free ${d.unit} to bond.`)),""!==H.bond&&H.bond>V&&e.push("Bond amount is more than your free balance."),l&&(V<E&&(t=!0,e.push(`You do not meet the minimum bond of ${E} ${d.unit}.`)),""!==H.bond&&H.bond<E&&e.push(`Bond amount must be at least ${E} ${d.unit}.`))),s&&(""!==H.bond&&H.bond>z&&e.push("Unbond amount is more than your bonded balance."),"stake"===o&&m(S)&&e.push("You must have your controller account imported to unbond."),""!==H.bond&&H.bond>I&&e.push(`A minimum bond of ${E} ${d.unit} is required when ${"stake"===o?"actively nominating":"in your pool"}.`));const n=!e.length&&""!==H.bond;F(t),h(n),R(e)};return(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(wv,{children:(0,Wd.jsxs)("h4",{children:[s?"Bonded":"Available",":"," ",sf(s?z:V)," ",d.unit]})}),L.map(((t,e)=>(0,Wd.jsx)(lft,{text:t},`setup_error_${e}`))),(0,Wd.jsx)(aft,{}),(0,Wd.jsx)(oft,{task:s?"unbond":"bond",value:H.bond,defaultValue:a,disabled:D,setters:c,freeToBond:V,freeToUnbondToMin:I})]})},cft=ln.div`
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
        color: ${_u};
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
        background: ${sc};
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
          color: ${Ac};
        }
        h5 {
          opacity: 1;
          color: white;
        }
        .bar {
          background: ${Ac};
        }
      }
    }
  }
`,hft=t=>{const{value:e}=t,{network:n}=IJ(),{staking:r,eraStakers:i}=btt(),{isSyncing:o}=Rtt(),{unit:a,units:s}=n,{minNominatorBond:l}=r,{minActiveBond:u}=i,c=l.div(new($d())(10**s)).toNumber(),h=e>=c,d=e>=u;return(0,Wd.jsx)(cft,{children:(0,Wd.jsxs)("div",{className:"bars",children:[(0,Wd.jsxs)("section",{className:h&&!o?"invert":"",children:[(0,Wd.jsx)("h4",{children:"\xa0"}),(0,Wd.jsx)("div",{className:"bar",children:(0,Wd.jsx)("h5",{children:"Inactive"})})]}),(0,Wd.jsxs)("section",{className:h&&!o?"invert":"",children:[(0,Wd.jsxs)("h4",{children:[(0,Wd.jsx)(Fg,{icon:lv,transform:"shrink-4"}),"\xa0 Nominate \xa0",(0,Wd.jsx)(ort,{page:"stake",title:"Nominating"})]}),(0,Wd.jsx)("div",{className:"bar",children:(0,Wd.jsxs)("h5",{children:[c," ",a]})})]}),(0,Wd.jsxs)("section",{className:d&&!o?"invert":"",children:[(0,Wd.jsxs)("h4",{children:[(0,Wd.jsx)(Fg,{icon:lv,transform:"shrink-4"}),"\xa0Active \xa0",(0,Wd.jsx)(ort,{page:"stake",title:"Active Bond Threshold"})]}),(0,Wd.jsx)("div",{className:"bar",children:(0,Wd.jsx)("h5",{children:o?"...":`${u} ${a}`})})]})]})})},dft=t=>{const{network:e}=IJ(),{units:n}=e,{section:r}=t,{activeAccount:i}=rtt(),{getBondOptions:o}=ftt(),{getSetupProgress:a,setActiveAccountSetup:s}=Rtt(),{freeToBond:l}=o(i),u=a(i),c=0===u.bond?rf(l,n):u.bond,[h,d]=(0,k.useState)({bond:c}),[f,p]=(0,k.useState)(!1);return(0,k.useEffect)((()=>{d({bond:c})}),[i]),(0,k.useEffect)((()=>{4===u.section&&s({...u,bond:c})}),[u.section]),(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Yht,{thisSection:r,complete:0!==u.bond,title:"Bond",assistantPage:"stake",assistantKey:"Bonding"}),(0,Wd.jsxs)(Ght,{thisSection:r,activeSection:u.section,children:[(0,Wd.jsx)(uft,{bondType:"stake",nominating:!0,unbond:!1,listenIsValid:p,defaultBond:c,setters:[{set:s,current:u},{set:d,current:h}]}),(0,Wd.jsx)(hft,{value:h.bond}),(0,Wd.jsx)(Kht,{complete:f})]})]})},fft=ln.div`
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
`,pft=ln.button`
  background: ${pc};
  border: 2px solid
    ${t=>t.selected?Ac:pc};
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
    color: ${t=>t.selected?Ac:Qu};
    font-size: 1.2rem;
  }
  &:first-child {
    margin-left: 0rem;
  }
  &:last-child {
    margin-right: 0rem;
  }
  p {
    color: ${_u};
    margin-top: 0.4rem;
    text-align: left;
  }
`,mft=t=>{const{section:e}=t,{activeAccount:n}=rtt(),{getSetupProgress:r,setActiveAccountSetup:i}=Rtt(),o=r(n),a=["Staked","Stash","Controller"],[s,l]=(0,k.useState)(o.payee);(0,k.useEffect)((()=>{l(o.payee)}),[n]);return(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Yht,{thisSection:e,complete:null!==o.payee,title:"Reward Destination",assistantPage:"stake",assistantKey:"Reward Destination"}),(0,Wd.jsxs)(Ght,{thisSection:e,activeSection:o.section,children:[(0,Wd.jsx)(Vct,{}),(0,Wd.jsx)(fft,{children:[{title:"Back to Staking",subtitle:"Payouts are automatically bonded to your existing bonded balance.",index:0},{title:"To Stash",subtitle:"Payouts will be sent to your stash account as free balance.",index:1},{title:"To Controller",subtitle:"Payouts will be sent to your controller account as free balance.",index:2}].map(((t,e)=>(0,Wd.jsxs)(pft,{selected:s===a[t.index],onClick:()=>{return e=t.index,void(ff(e)&&(e>=a.length||(l(a[e]),i({...o,payee:a[e]}))));var e},children:[(0,Wd.jsx)("h3",{children:t.title}),(0,Wd.jsx)("div",{children:(0,Wd.jsx)("p",{children:t.subtitle})})]},`payee_option_${e}`)))}),(0,Wd.jsx)(Kht,{complete:null!==o.payee})]})]})},gft=k.createContext({addPending:t=>{},removePending:t=>{},pending:[]}),yft=()=>k.useContext(gft),vft=t=>{var e;const{tx:n,shouldSubmit:r,callbackSubmit:i,callbackInBlock:o}=t;let{from:a}=t;a=null!==(e=a)&&void 0!==e?e:"";const{api:s}=IJ(),{addNotification:l}=Xnt(),{addPending:u,removePending:c}=yft(),{getAccount:h}=rtt(),[d,f]=(0,k.useState)(!1),[p,m]=(0,k.useState)(null);(0,k.useEffect)((()=>{g()}),[t]);const g=async()=>{if(null===n)return;const t=await n.paymentInfo(a);m(t.partialFee.toHuman())};return{submitTx:async()=>{if(d||!r||!s)return;const t=h(a);if(null===t)return;const e=await s.rpc.system.accountNextIndex(a),{signer:p,source:m}=t,g=ett(m);if(void 0===g)throw new Error("wallet not found");await g.enable(ft),f(!0);try{const t=await n.signAndSend(a,{signer:p},(n=>{let{status:r,nonce:a,events:s=[]}=n;r.isReady&&(u(e),l({title:"Pending",subtitle:"Transaction was initiated."}),i()),r.isInBlock&&(f(!1),c(e),l({title:"In Block",subtitle:"Transaction in block"}),o()),r.isFinalized&&s.forEach((n=>{let{phase:r,event:{data:i,method:o,section:a}}=n;"ExtrinsicSuccess"===o?(l({title:"Finalized",subtitle:"Transaction successful"}),t()):"ExtrinsicFailed"===o&&(l({title:"Failed",subtitle:"Error with transaction"}),f(!1),c(e),t())}))}))}catch($ht){f(!1),c(e),l({title:"Cancelled",subtitle:"Transaction was cancelled"})}},estimatedFee:p,submitting:d}},bft=ln.div`
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
    border-bottom: 1px solid ${yc};
    margin-top: 1rem;
    padding: 0.5rem 0 0.75rem 0;

    > div:first-child {
      width: 200px;
      display: flex;
      flex-flow: row wrap;
      align-items: flex-end;

      svg {
        color: ${Ac};
      }
    }

    > div:last-child {
      flex-grow: 1;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
  }
`,wft=t=>{const{section:e}=t,{api:n,network:r}=IJ(),{units:i}=r,{activeAccount:o,accountHasSigner:a}=rtt(),{getSetupProgress:s}=Rtt(),l=s(o),{controller:u,bond:c,nominations:h,payee:d}=l,{submitTx:f,estimatedFee:p,submitting:m}=vft({tx:(()=>{if(!o||!n)return null;const t={Id:o},e=c*10**i,r=h.map((t=>({Id:t.address}))),a={Id:u},s=[n.tx.staking.bond(t,e,d),n.tx.staking.nominate(r),n.tx.staking.setController(a)];return n.tx.utility.batch(s)})(),from:o,shouldSubmit:!0,callbackSubmit:()=>{},callbackInBlock:()=>{}});return(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Yht,{thisSection:e,complete:null,title:"Summary"}),(0,Wd.jsxs)(Ght,{thisSection:e,activeSection:l.section,children:[!a(o)&&(0,Wd.jsx)(lft,{text:"Your account is read only, and cannot sign transactions."}),(0,Wd.jsxs)(bft,{children:[(0,Wd.jsxs)("section",{children:[(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)(Fg,{icon:ov,transform:"grow-1"})," ","\xa0 Controller:"]}),(0,Wd.jsx)("div",{children:u})]}),(0,Wd.jsxs)("section",{children:[(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)(Fg,{icon:ov,transform:"grow-1"})," ","\xa0 Reward Destination:"]}),(0,Wd.jsx)("div",{children:d})]}),(0,Wd.jsxs)("section",{children:[(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)(Fg,{icon:ov,transform:"grow-1"})," ","\xa0 Nominations:"]}),(0,Wd.jsx)("div",{children:h.length})]}),(0,Wd.jsxs)("section",{children:[(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)(Fg,{icon:ov,transform:"grow-1"})," ","\xa0 Bond Amount:"]}),(0,Wd.jsxs)("div",{children:[sf(c)," ",r.unit]})]}),(0,Wd.jsxs)("section",{children:[(0,Wd.jsx)("div",{children:"Estimated Tx Fee:"}),(0,Wd.jsx)("div",{children:null===p?"...":`${p}`})]})]}),(0,Wd.jsx)("div",{style:{flex:1,flexDirection:"row",width:"100%",display:"flex",justifyContent:"end"},children:(0,Wd.jsx)(zct,{onClick:()=>f(),disabled:m||!a(o),title:"Start Staking",primary:!0})})]})]})},xft=t=>{let{title:e}=t;const{setOnSetup:n}=Rtt();return(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Utt,{title:`${e} Setup`}),(0,Wd.jsx)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Wd.jsx)(Nct,{children:(0,Wd.jsx)(zct,{inline:!0,title:"Go Back",icon:Jg,transform:"shrink-3",onClick:()=>n(0)})})}),(0,Wd.jsx)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Wd.jsxs)(xv,{children:[(0,Wd.jsx)(Zht.W_,{name:"controller",style:{position:"absolute"}}),(0,Wd.jsx)(nft,{section:1})]})}),(0,Wd.jsx)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Wd.jsxs)(xv,{children:[(0,Wd.jsx)(Zht.W_,{name:"payee",style:{position:"absolute"}}),(0,Wd.jsx)(mft,{section:2})]})}),(0,Wd.jsx)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Wd.jsxs)(xv,{children:[(0,Wd.jsx)(Zht.W_,{name:"nominate",style:{position:"absolute"}}),(0,Wd.jsx)(Jht,{section:3})]})}),(0,Wd.jsx)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Wd.jsxs)(xv,{children:[(0,Wd.jsx)(Zht.W_,{name:"bond",style:{position:"absolute"}}),(0,Wd.jsx)(dft,{section:4})]})}),(0,Wd.jsx)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Wd.jsxs)(xv,{children:[(0,Wd.jsx)(Zht.W_,{name:"summary",style:{position:"absolute"}}),(0,Wd.jsx)(wft,{section:5})]})})]})},Mft=t=>{const{page:e}=t,{title:n}=e,{onSetup:r,setOnSetup:i}=Rtt();return(0,Wd.jsx)(Act,{children:r?(0,Wd.jsx)(xft,{title:n,setOnSetup:i}):(0,Wd.jsx)(Xht,{title:n,setOnSetup:i})})},kft=k.createContext({setActiveTab:t=>{},activeTab:0}),Sft=()=>k.useContext(kft),Cft=t=>{let{children:e}=t;const[n,r]=(0,k.useState)(0);return(0,Wd.jsx)(kft.Provider,{value:{activeTab:n,setActiveTab:t=>{r(t)}},children:e})},Pft=ln(Fu.div)`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 3.2rem;
  position: relative;
  padding: 0.5rem;
  margin: 0.5rem;

  > div {
    background: ${ac};
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
      border-right: 1px solid ${vc};
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
        color: ${Ac};
      }

      .label {
        color: ${_u};
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
          color: ${_u};
          &:hover {
            opacity: 0.75;
          }
          &.active {
            color: ${Ac};
          }
        }
      }
    }

    svg {
      margin: 0;
    }
  }
`,Tft=t=>{var e,n,r,i;const{pool:o,batchKey:a,batchIndex:s}=t,{memberCounter:l,addresses:u,id:c}=o,{openModalWith:h}=Bct(),{meta:d}=Ntt(),{isBonding:f}=Ett(),{setActiveTab:p}=Sft(),m=null!==(e=null===(n=d[a])||void 0===n?void 0:n.metadata)&&void 0!==e?e:[],g=null!==(r=m.length>0)&&void 0!==r&&r,y=tf(u.stash);let v=null!==(i=m[s])&&void 0!==i?i:y;const b=lQ(A1(v));return""!==b&&(v=b),""===v&&(v=y),(0,Wd.jsx)(Pft,{children:(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)(Wnt,{value:u.stash,size:26}),g?(0,Wd.jsx)(Fu.div,{className:"identity",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:(0,Wd.jsx)("h4",{children:v})}):(0,Wd.jsx)(Fu.div,{className:"identity",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:(0,Wd.jsx)("h4",{children:tf(u.stash)})}),(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("div",{className:"labels",children:[(0,Wd.jsxs)("div",{className:"label stat",children:[(0,Wd.jsx)(Fg,{icon:xy}),"\xa0",c]}),(0,Wd.jsx)(Fu.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.1},children:(0,Wd.jsxs)("div",{className:"label",children:[(0,Wd.jsx)(Fg,{icon:tv,className:"icon"}),l]})}),!f()&&(0,Wd.jsx)("div",{className:"label",children:(0,Wd.jsx)("button",{type:"button",onClick:()=>h("JoinPool",{id:c,setActiveTab:p},"small"),children:(0,Wd.jsx)(Fg,{icon:iy,transform:"grow-4",className:"join"})})})]})})]})})},Aft=k.createContext({setListFormat:t=>{},listFormat:"col"}),Nft=()=>k.useContext(Aft),Oft=t=>{let{children:e}=t;const[n,r]=(0,k.useState)("col");return(0,Wd.jsx)(Aft.Provider,{value:{setListFormat:t=>{r(t)},listFormat:n},children:e})},jft=t=>{var e;const{allowMoreCols:n,pagination:r,batchKey:i}=t,o=null!==(e=t.disableThrottle)&&void 0!==e&&e,a=void 0!==t.refetchOnListUpdate&&t.refetchOnListUpdate,{mode:s}=yf(),{isReady:l,network:u}=IJ(),{metrics:c}=att(),{fetchPoolsMetaBatch:h}=Ntt(),{listFormat:d,setListFormat:f}=Nft(),[p,m]=(0,k.useState)(1),[g,y]=(0,k.useState)(1),[v,b]=(0,k.useState)(t.pools),[w,x]=(0,k.useState)(t.pools),[M,S]=(0,k.useState)(!1),C=(0,k.useRef)(g),P=Math.ceil(w.length/Pt),T=p+1>P?P:p+1,A=p-1<1?1:p-1,N=p*Pt-1,O=N-49,j=30*g-1;(0,k.useEffect)((()=>{t.pools!==v&&S(!1)}),[t.pools]),(0,k.useEffect)((()=>{l&&0!==c.activeEra.index&&!M&&V()}),[l,M,c.activeEra.index]);const V=()=>{b(t.pools),x(t.pools),S(!0),h(i,t.pools,a)};(0,k.useEffect)((()=>{j>=N||o||setTimeout((()=>{var t;t=C.current+1,C.current=t,y(t)}),500)}),[C.current]);let E=[];return E=o?w:w.slice(O).slice(0,Pt),w.length?(0,Wd.jsxs)(fht,{children:[(0,Wd.jsxs)(pht,{children:[(0,Wd.jsx)("div",{children:(0,Wd.jsx)("h4",{children:t.title})}),(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)("button",{type:"button",onClick:()=>f("row"),children:(0,Wd.jsx)(Fg,{icon:Xg,color:"row"===d?Ku[`${u.name}-${s}`]:"inherit"})}),(0,Wd.jsx)("button",{type:"button",onClick:()=>f("col"),children:(0,Wd.jsx)(Fg,{icon:wy,color:"col"===d?Ku[`${u.name}-${s}`]:"inherit"})})]})]}),(0,Wd.jsxs)(yht,{flexBasisLarge:n?"33.33%":"50%",children:[r&&(0,Wd.jsxs)(mht,{prev:1!==p,next:p!==P,children:[(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("h4",{children:["Page",p," of ",P]})}),(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)("button",{type:"button",className:"prev",onClick:()=>{m(A)},children:"Prev"}),(0,Wd.jsx)("button",{type:"button",className:"next",onClick:()=>{m(T)},children:"Next"})]})]}),(0,Wd.jsx)(Fu.div,{className:"transition",initial:"hidden",animate:"show",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.01}}},children:E.map(((t,e)=>{const n=v.indexOf(t);return(0,Wd.jsx)(Fu.div,{className:"item "+("row"===d?"row":"col"),variants:{hidden:{y:15,opacity:0},show:{y:0,opacity:1}},children:(0,Wd.jsx)(Tft,{pool:t,batchKey:i,batchIndex:n})},`nomination_${e}`)}))})]})]}):(0,Wd.jsx)(Wd.Fragment,{})},Vft=t=>(0,Wd.jsx)(Oft,{children:(0,Wd.jsx)(Eft,{...t})});class Eft extends k.Component{shouldComponentUpdate(t,e){return this.props.pools!==t.pools}render(){return(0,Wd.jsx)(jft,{...this.props})}}Eft.contextType=vtt;const Ift=()=>{const{stats:t}=Ttt(),e={label:"Active Pools",value:t.counterForBondedPools.toNumber(),unit:"",assistant:{page:"pools",key:"Nomination Pools"}};return(0,Wd.jsx)(nct,{...e})},zft=()=>{const{network:t}=IJ(),{units:e}=t,{stats:n}=Ttt(),r={label:"Minimum Join Bond",value:rf(n.minJoinBond,e),unit:t.unit,assistant:{page:"pools",key:"Minimum Join Bond"}};return(0,Wd.jsx)(nct,{...r})},Lft=()=>{const{membership:t}=jtt(),{isOwner:e}=Ett(),n={label:"Pool Membership",value:null===t?"Not in Pool":e()?`Owner of Pool ${t.poolId}`:`In Pool ${t.poolId}`,unit:"",assistant:{page:"pools",key:"Nomination Pools"}};return(0,Wd.jsx)(rct,{...n})},Rft=()=>{const{network:t}=IJ(),{units:e}=t,{stats:n}=Ttt(),r={label:"Minimum Create Bond",value:rf(n.minCreateBond,e),unit:t.unit,assistant:{page:"pools",key:"Minimum Create Bond"}};return(0,Wd.jsx)(nct,{...r})};let Hft;!function(t){t.Open="Open",t.Block="Blocked",t.Destroy="Destroying"}(Hft||(Hft={}));const Bft=()=>{var t,e,n;const{network:r,isReady:i}=IJ(),{activeAccount:o}=rtt(),{units:a,unit:s}=r,{isSyncing:l}=Rtt(),{membership:u}=jtt(),{setActiveTab:c}=Sft(),{activeBondedPool:h,poolNominations:d,isOwner:f,getNominationsStatus:p,getPoolBondOptions:m}=Ett(),{openModalWith:g}=Bct(),{active:y}=m(o),v=p(),b=Object.values(v).filter((t=>"active"===t)).length,w=!(null===d||void 0===d||null===(t=d.targets)||void 0===t||!t.length),{label:x,buttons:M}=(()=>{let t,e;const n={title:"Create Pool",icon:iy,transform:"grow-1",disabled:!i,onClick:()=>g("CreatePool",{bondType:"pool"},"small")},r={title:"Join Pool",icon:Qy,transform:"grow-1",disabled:!i,onClick:()=>c(1)},o={title:"Leave Pool",icon:jy,disabled:!i,small:!0,onClick:()=>g("LeavePool",{bondType:"pool"},"small")},a={title:"Destroy Pool",icon:cy,transform:"grow-1",disabled:!i,small:!0,onClick:()=>g("ChangePoolState",{bondType:"pool",state:Hft.Destroy},"small")},s={title:"Lock Pool",icon:My,transform:"grow-1",disabled:!i,small:!0,onClick:()=>g("ChangePoolState",{bondType:"pool",state:Hft.Block},"small")},l={title:"Unlock Pool",icon:ky,transform:"grow-1",disabled:!i,small:!0,onClick:()=>g("ChangePoolState",{bondType:"pool",state:Hft.Open},"small")};if(u)if(f())switch(t=`Owner of Pool ${u.poolId}`,null===h||void 0===h?void 0:h.state){case Hft.Open:e=[a,s];break;case Hft.Block:e=[a,l];break;default:e=[]}else null!==y&&void 0!==y&&y.gtn(0)?(t=`Active in Pool ${u.poolId}`,e=[o]):t=`Leaving Pool ${u.poolId}`;else t="Not in a Pool",e=[n,r];return{label:t,buttons:e}})(),k=x;let{unclaimedReward:S}=h||{};S=null!==(e=S)&&void 0!==e?e:new($d())(0);const C=`${rf(S,a)} ${s}`,P=S.gtn(0)?[{title:"Claim",icon:Py,disabled:!i,small:!0,onClick:()=>g("ClaimReward",{bondType:"pool"},"small")}]:void 0,T=null!==(n=null===h||void 0===h?void 0:h.state)&&void 0!==n?n:null;let A;switch(T){case Hft.Block:A=My;break;case Hft.Destroy:A=Wy;break;default:A=void 0}const N=T===Hft.Block?"Blocked / ":T===Hft.Destroy?"Destroying / ":"",O=l?"Inactive: Not Nominating":w?b?"Actively Nominating with Pool Funds":"Waiting for Active Nominations":"Inactive: Not Nominating";return(0,Wd.jsxs)(xv,{height:"300",children:[(0,Wd.jsx)(Uht,{label:"Membership",assistant:["pools","Pool Status"],stat:k,buttons:l?[]:M}),(0,Wd.jsx)(Dc,{}),(0,Wd.jsx)(Uht,{label:"Unclaimed Rewards",assistant:["pools","Pool Rewards"],stat:C,buttons:l?[]:P}),u&&(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Dc,{}),(0,Wd.jsx)(Uht,{icon:l?void 0:A,label:"Pool Status",assistant:["stake","Staking Status"],stat:`${N}${O}`})]})]})},Dft=()=>{const{network:t}=IJ(),{units:e}=t,{openModalWith:n}=Bct(),{activeAccount:r}=rtt(),{isSyncing:i}=Rtt(),{getPoolBondOptions:o,isBonding:a}=Ett(),{active:s,freeToBond:l,totalUnlocking:u,totalUnlocked:c,totalUnlockChuncks:h}=o(r);return(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsxs)(wv,{children:[(0,Wd.jsxs)("h4",{children:["Bonded Funds",(0,Wd.jsx)(ort,{page:"pools",title:"Bonded in Pool"})]}),(0,Wd.jsxs)("h2",{children:[rf(s,e),"\xa0",t.unit]}),(0,Wd.jsxs)(Ect,{children:[(0,Wd.jsx)(zct,{small:!0,primary:!0,inline:!0,title:"+",disabled:i||!a(),onClick:()=>n("UpdateBond",{fn:"add",bondType:"pool"},"small")}),(0,Wd.jsx)(zct,{small:!0,primary:!0,title:"-",disabled:i||!a(),onClick:()=>n("UpdateBond",{fn:"remove",bondType:"pool"},"small")}),(0,Wd.jsx)(zct,{small:!0,inline:!0,primary:!0,icon:ky,title:String(null!==h&&void 0!==h?h:0),disabled:i||!a(),onClick:()=>n("UnlockChunks",{bondType:"pool"},"small")})]})]}),(0,Wd.jsx)(Oht,{active:rf(s,e),unlocking:rf(u,e),unlocked:rf(c,e),free:rf(l,e),inactive:!a()})]})},Fft=()=>{var t;const{isNominator:e,setTargets:n,targets:r,poolNominations:i}=Ett(),{openModalWith:o}=Bct(),a=!(null===i||void 0===i||null===(t=i.targets)||void 0===t||!t.length);return(0,Wd.jsx)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Wd.jsx)(xv,{children:e()&&!a?(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsxs)(wv,{withAction:!0,children:[(0,Wd.jsxs)("h3",{children:["Generate Nominations",(0,Wd.jsx)(ort,{page:"stake",title:"Nominations"})]}),(0,Wd.jsx)("div",{children:(0,Wd.jsx)(zct,{small:!0,inline:!0,primary:!0,icon:ty,transform:"grow-1",title:"Nominate",disabled:!e(),onClick:()=>o("NominatePool",{},"small")})})]}),(0,Wd.jsx)(Vht,{batchKey:"generate_pool_nominations",nominations:r.nominations,setters:[{set:n,current:r}]})]}):(0,Wd.jsx)(Nht,{bondType:"pool"})})})},Uft=k.createContext({fetchAccountMetaBatch:(t,e,n)=>{},removeAccountMetaBatch:t=>{},meta:{}}),Wft=()=>k.useContext(Uft),qft=ln.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  padding-bottom: 0.5rem;

  .account {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: 0;

    button {
      color: ${Qu};
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
        color: ${_u};
        opacity: 0.5;
        cursor: pointer;
        transition: opacity 0.1s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`,Xft=t=>{var e,n,r,i,o,a;const{address:s,last:l,batchKey:u,batchIndex:c}=t,{addNotification:h}=Xnt(),{meta:d}=Wft(),f=null!==(e=null===(n=d[u])||void 0===n?void 0:n.identities)&&void 0!==e?e:[],p=null!==(r=null===(i=d[u])||void 0===i?void 0:i.supers)&&void 0!==r?r:[],m=null!==(o=f.length>0)&&void 0!==o&&o,g=null!==(a=p.length>0)&&void 0!==a&&a,y=m&&g,v=Yct(f[c],p[c]);let b={};return null!==s&&(b={title:"Address Copied to Clipboard",subtitle:s}),(0,Wd.jsx)(qft,{last:l,children:(0,Wd.jsxs)(Fu.div,{className:"account",initial:{opacity:.5},animate:{opacity:1},transition:{duration:.3},children:[null===s?(0,Wd.jsx)("h4",{children:"Not in a Pool"}):y&&null!==v?(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)("div",{className:"icon",children:(0,Wd.jsx)(Unt,{value:s,size:"1.6rem"})}),(0,Wd.jsx)("h4",{children:v})]}):(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)("div",{className:"icon",children:(0,Wd.jsx)(Unt,{value:s,size:"1.6rem"})}),(0,Wd.jsx)("h4",{children:tf(s)})]}),(0,Wd.jsx)("div",{children:(0,Wd.jsx)(Fu.div,{className:"copy",whileHover:{scale:1.02},whileTap:{scale:.97},children:null!==s&&(0,Wd.jsx)("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(s),h(b)},children:(0,Wd.jsx)(Fg,{icon:sv,transform:"grow-1"})})})})]})})},Zft=ln.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin-top: 0.25rem;

  > section {
    box-sizing: border-box;
    flex: 1 1 25%;
    padding: 0 0.5rem;
    border-right: 1px solid ${yc};

    @media (max-width: ${kt}px) {
      flex-basis: 100%;
      border-right: none;
      border-bottom: 1px solid ${yc};
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

      @media (max-width: ${kt}px) {
        padding: 0;
      }

      > h3 {
        display: flex;
        align-items: center;
        margin-bottom: 0.75rem;

        > .assistant-icon {
          margin-left: 0.5rem;
        }
      }
    }
  }
`,Yft=()=>{var t,e,n,r;const{isReady:i}=IJ(),{activeAccount:o}=rtt(),{fetchAccountMetaBatch:a}=Wft(),{activeBondedPool:s}=Ett(),l=s,{roles:u}=l||{},c="pool_roles",h=[u.root,u.depositor,u.nominator,u.stateToggler],[d,f]=(0,k.useState)(h),[p,m]=(0,k.useState)(!1);return(0,k.useEffect)((()=>{f(h),m(!1)}),[o]),(0,k.useEffect)((()=>{i&&!p&&(m(!0),a(c,h,!1))}),[i,p]),(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(wv,{children:(0,Wd.jsx)("h2",{children:"Roles"})}),(0,Wd.jsxs)(Zft,{children:[(0,Wd.jsx)("section",{children:(0,Wd.jsxs)("div",{className:"inner",children:[(0,Wd.jsxs)("h3",{children:["Root",(0,Wd.jsx)(ort,{page:"pools",title:"Joined Pool"})]}),(0,Wd.jsx)(Xft,{address:null!==(t=u.root)&&void 0!==t?t:null,batchIndex:d.indexOf(u.root),batchKey:c})]})}),(0,Wd.jsx)("section",{children:(0,Wd.jsxs)("div",{className:"inner",children:[(0,Wd.jsxs)("h3",{children:["Depositor ",(0,Wd.jsx)(ort,{page:"pools",title:"Joined Pool"})]}),(0,Wd.jsx)(Xft,{address:null!==(e=u.depositor)&&void 0!==e?e:null,batchIndex:d.indexOf(u.depositor),batchKey:c})]})}),(0,Wd.jsx)("section",{children:(0,Wd.jsxs)("div",{className:"inner",children:[(0,Wd.jsxs)("h3",{children:["Nominator ",(0,Wd.jsx)(ort,{page:"pools",title:"Joined Pool"})]}),(0,Wd.jsx)(Xft,{address:null!==(n=u.nominator)&&void 0!==n?n:null,batchIndex:d.indexOf(u.nominator),batchKey:c})]})}),(0,Wd.jsx)("section",{children:(0,Wd.jsxs)("div",{className:"inner",children:[(0,Wd.jsxs)("h3",{children:["State Toggler",(0,Wd.jsx)(ort,{page:"pools",title:"Joined Pool"})]}),(0,Wd.jsx)(Xft,{address:null!==(r=u.stateToggler)&&void 0!==r?r:null,batchIndex:d.indexOf(u.stateToggler),batchKey:c,last:!0})]})})]})]})},Kft=t=>{const{page:e}=t,{title:n}=e,{network:r}=IJ(),i=vh(),{bondedPools:o}=Ntt(),{isBonding:a}=Ett(),{activeTab:s,setActiveTab:l}=Sft();return(0,k.useEffect)((()=>{r.features.pools||i("/#/overview",{replace:!0})}),[r]),(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Utt,{title:n,tabs:[{title:"Overview",active:0===s,onClick:()=>l(0)},{title:"All Pools",active:1===s,onClick:()=>l(1)}]}),0===s&&(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsxs)(bv,{children:[(0,Wd.jsx)(Ift,{}),(0,Wd.jsx)(zft,{}),(0,Wd.jsx)(Rft,{})]}),(0,Wd.jsxs)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:[(0,Wd.jsx)(Hc,{hOrder:1,vOrder:0,children:(0,Wd.jsx)(Bft,{})}),(0,Wd.jsx)(Bc,{hOrder:0,vOrder:1,children:(0,Wd.jsx)(xv,{height:300,children:(0,Wd.jsx)(Dft,{})})})]}),a()&&(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Fft,{}),(0,Wd.jsx)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Wd.jsx)(xv,{children:(0,Wd.jsx)(Yft,{})})})]})]}),1===s&&(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsxs)(bv,{children:[(0,Wd.jsx)(Lft,{}),(0,Wd.jsx)(Ift,{}),(0,Wd.jsx)(zft,{})]}),(0,Wd.jsx)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Wd.jsxs)(xv,{children:[(0,Wd.jsx)(wv,{children:(0,Wd.jsxs)("h2",{children:["All Pools",(0,Wd.jsx)(ort,{page:"pools",title:"Nomination Pools"})]})}),(0,Wd.jsx)(Vft,{pools:o,title:"Active Pools",allowMoreCols:!0,pagination:!0})]})})]})]})},Gft=t=>(0,Wd.jsx)(Cft,{children:(0,Wd.jsx)(Kft,{...t})}),Jft=()=>{const{staking:t}=btt(),{totalValidators:e,maxValidatorsCount:n}=t;let r=0;n.gt(new($d())(0))&&(r=e.div(n.div(new($d())(100))).toNumber());const i={label:"Total Validators",stat:{value:e.toNumber(),total:n.toNumber(),unit:""},graph:{value1:e.toNumber(),value2:n.sub(e).toNumber()},tooltip:`${r.toFixed(2)}%`,assistant:{page:"validators",key:"Validator"}};return(0,Wd.jsx)(oct,{...i})},Qft=()=>{const{staking:t,eraStakers:e}=btt(),{validatorCount:n}=t,{activeValidators:r}=e;let i=0;n.gt(new($d())(0))&&(i=r/(.01*n.toNumber()));const o={label:"Active Validators",stat:{value:r,total:n.toNumber(),unit:""},graph:{value1:r,value2:n.sub(new($d())(r)).toNumber()},tooltip:`${i.toFixed(2)}%`,assistant:{page:"validators",key:"Active Validator"}};return(0,Wd.jsx)(oct,{...o})},_ft=t=>{const{page:e}=t,{title:n}=e,{isReady:r}=IJ(),{validators:i}=ztt();return(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Utt,{title:n}),(0,Wd.jsxs)(bv,{children:[(0,Wd.jsx)(Jft,{}),(0,Wd.jsx)(Qft,{}),(0,Wd.jsx)(Bht,{})]}),(0,Wd.jsx)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Wd.jsx)(xv,{children:r?(0,Wd.jsxs)(Wd.Fragment,{children:[0===i.length&&(0,Wd.jsx)("div",{className:"item",children:(0,Wd.jsx)("h3",{children:"Fetching validators..."})}),i.length>0&&(0,Wd.jsx)(Cht,{validators:i,batchKey:"validators_browse",title:"Network Validators",selectable:!1,allowMoreCols:!0,allowFilters:!0,pagination:!0,toggleFavourites:!0})]}):(0,Wd.jsx)("div",{className:"item",children:(0,Wd.jsx)("h3",{children:"Connecting..."})})})})]})},$ft=t=>{const{isReady:e}=IJ(),{page:n}=t,{title:r}=n,{favouritesList:i}=ztt();return(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Utt,{title:r}),(0,Wd.jsx)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Wd.jsx)(xv,{children:null===i?(0,Wd.jsx)("h3",{children:"Fetching favourite validators..."}):(0,Wd.jsx)(Wd.Fragment,{children:e&&(0,Wd.jsx)(Wd.Fragment,{children:i.length>0?(0,Wd.jsx)(Cht,{validators:i,batchKey:"favourite_validators",title:"Favourite Validators",selectable:!1,refetchOnListUpdate:!0,allowMoreCols:!0,toggleFavourites:!0}):(0,Wd.jsx)("h3",{children:"No Favourites."})})})})})]})},tpt=ln(Fu.div)`
  padding: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;

  > div {
    padding: 0.75rem 0.5rem;
    flex: 1;
    background: ${ac};
    border-radius: 0.75rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    max-width: 100%;

    h4 {
      margin: 0 0.75rem;
      color: ${_u};

      &.reward {
        color: ${Ac};
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
        color: ${_u};
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
        color: ${_u};
        opacity: 0.8;
      }
    }
  }
`,ept=k.createContext({setListFormat:t=>{},listFormat:"col"}),npt=t=>{let{children:e}=t;const[n,r]=(0,k.useState)("col");return(0,Wd.jsx)(ept.Provider,{value:{setListFormat:t=>{r(t)},listFormat:n},children:e})},rpt=t=>{var e;const{allowMoreCols:n,pagination:r}=t,{mode:i}=yf(),{isReady:o,network:a}=IJ(),{units:s}=a,{metrics:l}=att(),{listFormat:u,setListFormat:c}=Nft(),h=null!==(e=t.disableThrottle)&&void 0!==e&&e,[d,f]=(0,k.useState)(1),[p,m]=(0,k.useState)(1),[g,y]=(0,k.useState)(t.payouts),[v,b]=(0,k.useState)(t.payouts),[w,x]=(0,k.useState)(!0),[M,S]=(0,k.useState)(!1),C=(0,k.useRef)(p),P=Math.ceil(v.length/Pt),T=d+1>P?P:d+1,A=d-1<1?1:d-1,N=d*Pt-1,O=N-49,j=30*p-1;(0,k.useEffect)((()=>{S(!1)}),[t.payouts]),(0,k.useEffect)((()=>{o&&0!==l.activeEra.index&&!M&&(y(t.payouts),b(t.payouts),x(!0),S(!0))}),[o,M,l.activeEra.index]),(0,k.useEffect)((()=>{j>=N||h||setTimeout((()=>{var t;t=C.current+1,C.current=t,m(t)}),500)}),[C.current]);let V=[];return V=h?v:v.slice(O).slice(0,Pt),v.length?(0,Wd.jsxs)(fht,{children:[(0,Wd.jsxs)(pht,{children:[(0,Wd.jsx)("div",{children:(0,Wd.jsx)("h3",{children:t.title})}),(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)("button",{type:"button",onClick:()=>c("row"),children:(0,Wd.jsx)(Fg,{icon:Xg,color:"row"===u?Ku[`${a.name}-${i}`]:"inherit"})}),(0,Wd.jsx)("button",{type:"button",onClick:()=>c("col"),children:(0,Wd.jsx)(Fg,{icon:wy,color:"col"===u?Ku[`${a.name}-${i}`]:"inherit"})})]})]}),(0,Wd.jsxs)(yht,{flexBasisLarge:n?"33.33%":"50%",children:[r&&(0,Wd.jsxs)(mht,{prev:1!==d,next:d!==P,children:[(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("h4",{children:["Page ",d," of ",P]})}),(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)("button",{type:"button",className:"prev",onClick:()=>{f(A),x(!1)},children:"Prev"}),(0,Wd.jsx)("button",{type:"button",className:"next",onClick:()=>{f(T),x(!1)},children:"Next"})]})]}),(0,Wd.jsx)(Fu.div,{className:"transition",initial:"hidden",animate:"show",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.01}}},children:V.map(((t,e)=>{const{amount:n,block_timestamp:r,event_id:i}=t;return(0,Wd.jsx)(Fu.div,{className:"item "+("row"===u?"row":"col"),variants:{hidden:{y:15,opacity:0},show:{y:0,opacity:1}},children:(0,Wd.jsx)(tpt,{children:(0,Wd.jsxs)("div",{children:[(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)("span",{className:i.toLowerCase(),children:(0,Wd.jsx)("h4",{children:i})}),(0,Wd.jsxs)("h4",{className:i.toLowerCase(),children:["Reward"===i?"+":"-",nf(n,s)," ",a.unit]})]}),(0,Wd.jsx)("div",{children:(0,Wd.jsx)("h4",{children:mv().unix(r).fromNow()})})]})})},`nomination_${e}`)}))})]})]}):(0,Wd.jsx)(Wd.Fragment,{})},ipt=t=>(0,Wd.jsx)(npt,{children:(0,Wd.jsx)(opt,{...t})});class opt extends k.Component{render(){return(0,Wd.jsx)(rpt,{...this.props})}}opt.contextType=vtt;const apt=()=>{const{network:t}=IJ(),{staking:e}=btt(),{unit:n,units:r}=t,{lastReward:i}=e,o={label:"Last Era Payout",value:i.div(new($d())(10**r)).toNumber(),unit:n,assistant:{page:"payouts",key:"Last Era Payout"}};return(0,Wd.jsx)(nct,{...o})},spt=t=>{const{network:e}=IJ(),{payouts:n}=Btt(),{services:r}=Rtt(),{units:i}=e,{page:o}=t,{title:a}=o,s=k.useRef(),l=Ztt(s.current),{width:u,height:c,minHeight:h}=Ytt(l,250);let d=Gtt(Ktt(n,60,i),60);d=d.reverse();const f=[...n.filter((t=>t.amount>0))].slice(0,60);return(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Utt,{title:a}),(0,Wd.jsx)(bv,{children:(0,Wd.jsx)(apt,{})}),(0,Wd.jsx)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Wd.jsxs)(Mv,{children:[(0,Wd.jsx)(Ftt,{}),(0,Wd.jsxs)(wv,{padded:!0,children:[(0,Wd.jsxs)("h4",{children:["Payout History",(0,Wd.jsx)(ort,{page:"payouts",title:"Payout History"})]}),(0,Wd.jsx)("h2",{children:n.length?(0,Wd.jsxs)(Wd.Fragment,{children:[mv().unix(n[0].block_timestamp).format("Do MMMM"),"\xa0-\xa0",mv().unix(n[n.length-1].block_timestamp).format("Do MMMM")]}):"None"})]}),(0,Wd.jsxs)("div",{className:"inner",ref:s,style:{minHeight:h},children:[r.includes("subscan")?(0,Wd.jsx)(kct,{status:"sync_or_setup",title:"Not Staking"}):(0,Wd.jsx)(kct,{status:"active_service",statusFor:"subscan",title:"Subscan Disabled"}),(0,Wd.jsxs)("div",{className:"graph",style:{height:`${c}px`,width:`${u}px`,position:"absolute"},children:[(0,Wd.jsx)(xct,{payouts:d,height:"120px"}),(0,Wd.jsx)(wct,{payouts:d,height:"70px"})]})]})]})}),f.length?(0,Wd.jsx)(Rc,{className:"page-padding",noVerticalSpacer:!0,children:(0,Wd.jsx)(xv,{children:(0,Wd.jsx)(ipt,{title:"Recent Payouts",payouts:f,pagination:!0})})}):(0,Wd.jsx)(Wd.Fragment,{})]})},lpt=ln.div`
  h2 {
    color: ${_u};
    margin-top: 2rem;
  }
`,upt=ln(Fu.div)`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`,cpt=ln(Fu.button)`
  width: 200px;
  height: 200px;
  background: rgba(0, 0, 0, 0.03);
  color: ${_u};
  margin: 1rem 2rem 1rem 0;
  border-radius: 0.75rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`,hpt=t=>{const{page:e}=t,{title:n}=e;return(0,k.useEffect)((()=>{!function(t,e,n,r){function i(){if(!e.getElementById("canny-jssdk")){var t=e.getElementsByTagName(r)[0],n=e.createElement(r);n.type="text/javascript",n.async=!0,n.src="https://canny.io/sdk.js",t.parentNode.insertBefore(n,t)}}if("function"!=typeof t.Canny){var o=function(){o.q.push(arguments)};o.q=[],t.Canny=o,"complete"===e.readyState?i():t.attachEvent?t.attachEvent("onload",i):t.addEventListener("load",i,!1)}}(window,document,0,"script"),Canny("render",{boardToken:"2dda48aa-e149-da7b-f016-98e22279df1e",basePath:null,ssoToken:null})}),[]),(0,Wd.jsxs)(lpt,{children:[(0,Wd.jsx)(Utt,{title:n}),(0,Wd.jsx)(Rc,{className:"page-padding",children:(0,Wd.jsx)("div",{"data-canny":!0,style:{width:"100%"}})})]})},dpt=[{_id:1,title:"default"},{_id:2,title:"Staking"},{_id:3,title:"Validators"},{_id:4,title:"Explore"},{_id:5,title:"Feedback"}],fpt=[{category:1,title:"Overview",uri:`${dt}/`,hash:"/overview",Entry:Tct,icon:Zg},{category:2,title:"Stake",uri:`${dt}/stake`,hash:"/stake",Entry:Mft,icon:Kg},{category:2,title:"Pools",uri:`${dt}/pools`,hash:"/pools",Entry:Gft,icon:tv},{category:2,title:"Payouts",uri:`${dt}/payouts`,hash:"/payouts",Entry:spt,icon:Dy},{category:3,title:"Validators",uri:`${dt}/validators`,hash:"/validators",Entry:_ft,icon:Hy},{category:3,title:"Favourites",uri:`${dt}/favourites`,hash:"/favourites",Entry:$ft,icon:Fy},{category:4,title:"Community",uri:`${dt}/community`,hash:"/community",Entry:t=>{const{page:e}=t,{title:n}=e,r={hidden:{opacity:0},show:{opacity:1,transition:{duration:1,staggerChildren:.25}}},i={hidden:{opacity:0,y:50,transition:{duration:.5}},show:{opacity:1,y:0,transition:{duration:.5}}};return(0,Wd.jsxs)(lpt,{children:[(0,Wd.jsx)(Utt,{title:n}),(0,Wd.jsx)(Rc,{className:"page-padding",children:(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)("h2",{children:"Validator Programs"}),(0,Wd.jsx)(upt,{variants:r,initial:"hidden",animate:"show",children:(0,Wd.jsx)(cpt,{whileHover:{scale:1.02},whileTap:{scale:.98},variants:i,children:"cool icon here"})}),(0,Wd.jsx)("h2",{children:"Staking in the Polkadot Ecosystem"}),(0,Wd.jsxs)(upt,{variants:r,initial:"hidden",animate:"show",children:[(0,Wd.jsx)(cpt,{whileHover:{scale:1.02},whileTap:{scale:.98},variants:i,children:"cool icon here"}),(0,Wd.jsx)(cpt,{whileHover:{scale:1.02},whileTap:{scale:.98},variants:i,children:"cool icon here"})]})]})})]})},icon:Jy},{category:5,title:"Feedback",uri:`${dt}/feedback`,hash:"/feedback",Entry:hpt,icon:dy}],ppt=ln(Fu.div)`
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
  background: ${ic};
  z-index: 6;
  backdrop-filter: blur(4px);
  position: relative;
  @media (min-width: ${1176}px) {
    position: fixed;
  }
`,mpt=ln.div`
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
    color: ${_u};

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
        color: ${_u};
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
`,gpt=ln(Fu.div)`
  width: 100%;
  background: ${Ac};
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
`,ypt=ln.div`
  border-left: 1px solid ${_u};
  opacity: 0.2;
  margin: 0 0.3rem;
  width: 1px;
  height: 1rem;
`,vpt=ln.div`
  width: 10px;
  height: 10px;
  background: ${t=>t.color};
  border-radius: 50%;
  margin: 0 0.7rem;
`,bpt=t=>(0,Wd.jsx)(Fu.div,{animate:{opacity:[.5,1]},transition:{duration:.5},children:t.block});class wpt extends k.Component{constructor(t){super(t),this.stateRef=void 0,this.initiateBlockSubscription=async()=>{const{api:t,isReady:e}=this.context;if(e){const e=await t.rpc.chain.subscribeNewHeads((t=>{void 0!==t&&this._setState({...this.stateRef.current,block:`#${t.number.toHuman()}`})}));this._setState({...this.stateRef.current,unsub:e})}},this.state={block:0,unsub:null},this.stateRef=k.createRef(),this.stateRef.current=this.state}componentDidMount(){this.initiateBlockSubscription()}componentDidUpdate(){null===this.state.unsub&&this.initiateBlockSubscription()}componentWillUnmount(){const{unsub:t}=this.state;null!==t&&t()}_setState(t){this.stateRef.current=t,this.setState(t)}render(){return(0,Wd.jsx)(bpt,{...this.props,block:this.state.block})}}wpt.contextType=EJ;const xpt=()=>{const{status:t}=IJ();return(0,Wd.jsxs)(Wd.Fragment,{children:[t===NJ.Disconnected&&(0,Wd.jsx)(Fu.p,{animate:{opacity:[0,1]},transition:{duration:.3},children:"Disconnected"}),t===NJ.Connecting&&(0,Wd.jsx)(Fu.p,{animate:{opacity:[0,1]},transition:{duration:.3},children:"Connecting..."}),t===NJ.Connected&&(0,Wd.jsx)(Fu.p,{animate:{opacity:[0,1]},transition:{duration:.3},children:"Connected to Network"})]})},Mpt=()=>{const{services:t}=Rtt(),{status:e,switchNetwork:n,network:r}=IJ(),i=vct(),[o,a]=(0,k.useState)(!1),s=e===NJ.Connecting?bt:e===NJ.Connected?wt:vt,l=o?"maximised":"minimised",u=(0,k.useRef)(null);return Zd(u,(()=>{a(!1)}),["igignore-network-info-toggle"]),(0,Wd.jsxs)(ppt,{ref:u,initial:!1,animate:l,transition:{duration:.4,type:"spring",bounce:.25},variants:{minimised:{height:"2.5rem"},maximised:{height:"155px"}},children:[(0,Wd.jsxs)(mpt,{children:[(0,Wd.jsxs)("section",{children:[(0,Wd.jsx)(r.icon,{className:"network_icon"}),(0,Wd.jsxs)("div",{className:"hide-small",children:[(0,Wd.jsx)("p",{children:r.name}),(0,Wd.jsx)(ypt,{}),(0,Wd.jsx)(xpt,{})]})]}),(0,Wd.jsxs)("section",{children:[(0,Wd.jsx)("button",{type:"button",className:"ignore-network-info-toggle",onClick:()=>{a(!o)},children:o?"Collapse":"Switch Network"}),(0,Wd.jsxs)("div",{className:"stat",style:{marginRight:0},children:[e===NJ.Connected&&(0,Wd.jsx)(wpt,{}),(0,Wd.jsx)(vpt,{color:s})]}),t.includes("binance_spot")&&(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(ypt,{}),(0,Wd.jsx)("div",{className:"stat",children:(0,Wd.jsxs)("span",{className:"change"+(i.change<0?" neg":i.change>0?" pos":""),children:[i.change<0?"":i.change>0?"+":"",i.change,"%"]})}),(0,Wd.jsxs)("div",{className:"stat",children:["1 ",r.api.unit," / ",i.lastPrice," USD"]})]})]})]}),(0,Wd.jsxs)(gpt,{children:[(0,Wd.jsx)("div",{className:"row",children:(0,Wd.jsx)("h2",{children:"Switch Network"})}),(0,Wd.jsx)("div",{className:"row",children:Object.entries(yt).map(((t,e)=>{let[i,o]=t;return(0,Wd.jsx)("button",{type:"button",onClick:()=>{r.name.toLowerCase()!==i&&(n(i),a(!1))},children:(0,Wd.jsx)("h3",{children:o.name})},`switch_network_${e}`)}))})]})]})};function kpt(){var t=!1,e=[],n=new Set,r={subscribe:function(t){return n.add(t),function(){n.delete(t)}},start:function(r,i){if(t){var o=[];return n.forEach((function(t){o.push(jl(t,r,{transitionOverride:i}))})),Promise.all(o)}return new Promise((function(t){e.push({animation:[r,i],resolve:t})}))},set:function(t){return n.forEach((function(e){!function(t,e){Array.isArray(e)?Nl(t,e):"string"===typeof e?Nl(t,[e]):Al(t,e)}(e,t)}))},stop:function(){n.forEach((function(t){!function(t){t.forEachValue((function(t){return t.stop()}))}(t)}))},mount:function(){return t=!0,e.forEach((function(t){var e=t.animation,n=t.resolve;r.start.apply(r,yn([],gn(e),!1)).then(n)})),function(){t=!1,r.stop()}}};return r}const Spt=ln(Fu.div)`
  background: ${bc};
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
`,Cpt=ln.div`
  transition: height 0.6s cubic-bezier(0.1, 1, 0.2, 1);
  box-sizing: border-box;
  width: 100%;
  max-width: ${t=>"large"===t.size?"800px":"600px"};
  max-height: 100%;
  border-radius: 0.75rem;
  z-index: 9;
  position: relative;
`,Ppt=ln.div`
  box-sizing: border-box;
  background: ${wc};
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
      color: ${_u};
    }
  }
`,Tpt=ln.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: ${t=>t.verticalOnly?"1rem 0":"1rem"};
`,Apt=ln.h3`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 0.25rem;
  padding: ${t=>t.noPadding?"0":"0 1rem"};
  color: ${_u};
  flex: 1;

  > svg {
    margin-right: 0.75rem;
  }
`,Npt=ln.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  h3 {
    color: ${_u};
    opacity: 0.5;
    margin: 0;
    &.active {
      opacity: 1;
      color: ${Ac};
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
    color: ${Ac};
    border: 1px solid ${Ac};

    &:disabled {
      opacity: 0.25;
    }
    svg {
      margin-right: 0.5rem;
    }
  }
`,Opt=ln.div`
  border-top: 1px solid ${_u};
  width: 100%;
  opacity: 0.1;
  margin: 0.75rem 0rem;
`,jpt=ln.div`
  width: 100%;
  padding: 1rem 0;
  > p {
    color: ${_u};
  }
`,Vpt=ln(Fu.div)`
  box-sizing: border-box;
  width: 200%;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  position: relative;
`,Ept=ln.div`
  box-sizing: border-box;
  border-radius: 1rem;
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 50%;
  height: auto;
  padding: 0 1rem 1rem 1rem;
`,Ipt=ln.div`
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
    color: ${Qu};
    border-bottom: 1px solid ${yc};
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
`,zpt=ln.div`
  box-sizing: border-box;
  padding: 1rem 0 0.5rem 0rem;
  height: auto;
`,Lpt=ln(Fu.button)`
  box-sizing: border-box;
  border-radius: 1rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  background: ${dc};
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
        border: 1px solid ${wc};
        margin: 0;
      }
    }
  }

  &:hover {
    background: ${pc};
    > section > div {
      > button,
      > div {
        background: ${pc};
      }
    }
  }
`,Rpt=ln.div`
  width: 100%;
  margin: 0.5rem 0;

  > button {
    &:hover {
      background: ${pc};
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
    background: ${dc};
    transition: background 0.15s;
    color: ${Qu};
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
          color: ${_u};
          opacity: 0.75;
        }
      }
      &.danger {
        h5 {
          color: ${tc};
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
          fill: ${$u};
        }
        .dark {
          fill: ${_u};
        }
      }
    }
  }
`,Hpt=ln.button`
  box-sizing: border-box;
  width: 100%;
  margin: 1rem 0;
  padding: 1rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: ${dc};
  transition: background 0.15s;
  color: ${Qu};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  min-height: 3.5rem;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
  &:hover {
    background: ${pc};
  }

  > div {
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0 1rem;

    &:first-child {
      flex-shrink: 1;
      overflow: hidden;

      > span {
        margin-right: 1rem;
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
    }

    &:last-child {
      flex-grow: 1;
      justify-content: flex-end;

      &.neutral {
        color: ${_u};
        opacity: 0.75;
      }
      &.danger {
        color: ${tc};
      }
      .icon {
        margin-left: 1rem;
      }
    }

    /* svg theming */
    svg {
      .light {
        fill: ${$u};
      }
      .dark {
        fill: ${_u};
      }
    }
  }
`;ln.div`
  border-top: 1px solid ${_u};
  width: 100%;
  opacity: 0.1;
  margin: 1.5rem 0rem;
`;var Bpt,Dpt,Fpt;function Upt(){return Upt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Upt.apply(this,arguments)}function Wpt(t,e){let{title:n,titleId:r,...i}=t;return k.createElement("svg",Upt({viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"logo",ref:e,"aria-labelledby":r},i),n?k.createElement("title",{id:r},n):null,Bpt||(Bpt=k.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.058 17.832c.304.662 1.2.896 1.714.38l.945-.944a2.5 2.5 0 0 1 3.536 3.535l-7.636 7.636A9.979 9.979 0 0 1 15.965 32a9.983 9.983 0 0 1-7.883-3.847l-7.35-7.35a2.5 2.5 0 1 1 3.536-3.535l.93.93c.504.504 1.379.277 1.677-.37a.97.97 0 0 0 .09-.406V6a2.5 2.5 0 0 1 5 0v5.778c0 .497.51.835.984.685a.727.727 0 0 0 .516-.682V2.5a2.5 2.5 0 0 1 5 0v9.28c0 .315.217.588.517.683.474.15.983-.188.983-.685V6a2.5 2.5 0 0 1 5 0v11.418a.99.99 0 0 0 .093.414Z",className:"dark"})),Dpt||(Dpt=k.createElement("path",{className:"light",d:"M23.965 23s-3.581 5-8 5c-4.418 0-8-5-8-5s3.582-5 8-5c4.419 0 8 5 8 5Z"})),Fpt||(Fpt=k.createElement("path",{d:"M18.731 23a2.766 2.766 0 1 1-5.531 0 2.766 2.766 0 0 1 5.531 0Z",className:"dark",stroke:"currentColor",strokeWidth:.469})))}const qpt=k.forwardRef(Wpt);__webpack_require__.p;var Xpt,Zpt,Ypt;function Kpt(){return Kpt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kpt.apply(this,arguments)}function Gpt(t,e){let{title:n,titleId:r,...i}=t;return k.createElement("svg",Kpt({id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 372.78 498.62",ref:e,"aria-labelledby":r},i),n?k.createElement("title",{id:r},n):null,Xpt||(Xpt=k.createElement("defs",null,k.createElement("style",null,".cls-2{fill:#e6007a;}"))),Zpt||(Zpt=k.createElement("path",{className:"dark",d:"M260.4,6.38C156.25,6.8,71.92,91.12,71.51,195.27a193.86,193.86,0,0,0,10,61.36,27,27,0,0,0,33.23,16.55,26.88,26.88,0,0,0,16-33.11,124.53,124.53,0,0,1-7.35-48.15A136.26,136.26,0,1,1,267.87,332s-26.51,1.61-39.7,3.23a134.73,134.73,0,0,0-14.45,2.87,1.75,1.75,0,0,1-2.47,0l0,0a1.77,1.77,0,0,1,0-2.12l4.11-22.39,24.9-112a25.89,25.89,0,0,0-50.64-10.84s-59.23,274.13-59.23,276.63a24.9,24.9,0,0,0,18,30.26,3.48,3.48,0,0,0,.44.1h1.38a24.89,24.89,0,0,0,30.32-17.87,6.77,6.77,0,0,0,.16-.68,6.42,6.42,0,0,1,0-1.24c.73-3.22,8.2-39.7,8.2-39.7a67.19,67.19,0,0,1,55.62-52.89c5.72-.88,29.75-2.49,29.75-2.49C378,372.57,453.7,280.08,443.34,176.33A188.78,188.78,0,0,0,260.4,6.38Z",transform:"translate(-71.51 -6.38)"})),Ypt||(Ypt=k.createElement("path",{className:"cls-2",d:"M271.85,441.92a31.47,31.47,0,0,0-37.23,24.4c0,.16-.06.32-.1.48a31.36,31.36,0,0,0,24,37.31.07.07,0,0,1,.06,0h.87a30.86,30.86,0,0,0,37.24-22.75c0-.12.06-.26.1-.38v-1.73A32.64,32.64,0,0,0,271.85,441.92Z",transform:"translate(-71.51 -6.38)"})))}const Jpt=k.forwardRef(Gpt),Qpt=(__webpack_require__.p,t=>{const{meta:e,setSection:n,flag:r}=t,{extensionName:i,title:o}=e,{extensionsStatus:a,connectExtensionAccounts:s,accounts:l}=rtt(),u=a[i],[c,h]=(0,k.useState)(0),d=l.filter((t=>t.source===i));let f;switch(u){case"connected":f=`${d.length} Account${1!==d.length?"s":""} Imported`;break;case"not_authenticated":f="Not Authenticated. Authenticate and Try Again";break;case"not_found":f="Not Found. Install and Refresh";break;default:f="no_accounts"===u?"No Accounts Imported":"Not Connected"}const p="2rem";return(0,Wd.jsxs)(Hpt,{onClick:()=>{(async()=>{"connected"===u?n(1):(async()=>{await s(i),h(c+1)})()})()},children:[(0,Wd.jsxs)("div",{children:["talisman"===i&&(0,Wd.jsx)(qpt,{width:p,height:p}),"polkadot-js"===i&&(0,Wd.jsx)(Jpt,{width:p,height:p}),(0,Wd.jsxs)("span",{className:"name",children:["\xa0 ",o]}),(0,Wd.jsx)("span",{className:"message",children:f})]}),(0,Wd.jsxs)("div",{className:"neutral",children:[r&&r,(0,Wd.jsx)(Fg,{icon:"connected"===u?qg:Ny,transform:"shrink-0",className:"icon"})]})]},`wallet_${i}`)}),_pt=(0,k.forwardRef)(((t,e)=>{const{setSection:n}=t,{extensions:r}=rtt();return(0,Wd.jsx)(Ept,{children:(0,Wd.jsxs)(zpt,{ref:e,children:[(0,Wd.jsx)("div",{className:"head",children:(0,Wd.jsx)("h1",{children:"Extensions"})}),r.map(((t,e)=>(0,Wd.jsx)(Qpt,{meta:t,setSection:n},`active_extension_${e}`)))]})})})),$pt=t=>(0,Wd.jsx)(Rpt,{children:(0,Wd.jsx)("div",{children:(0,Wd.jsx)(emt,{...t})})}),tmt=t=>{var e;const{meta:n}=t,r=null!==(e=t.disconnect)&&void 0!==e&&e,{connectToAccount:i,disconnectFromAccount:o}=rtt(),{setStatus:a}=Bct(),s=null!==n;return(0,Wd.jsx)(Rpt,{children:(0,Wd.jsx)("button",{type:"button",disabled:!r&&!s,onClick:()=>{s&&(r?o():(i(n),a(0)))},children:(0,Wd.jsx)(emt,{...t})})})},emt=t=>{var e,n,r;const{address:i,meta:o}=t,a=null!==(e=t.label)&&void 0!==e?e:null,s=null!==(n=null===o||void 0===o?void 0:o.source)&&void 0!==n?n:null,l=null!==o&&"external"!==s;return(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)(Wnt,{value:null!==i&&void 0!==i?i:"",size:26}),(0,Wd.jsxs)("span",{className:"name",children:["\xa0 ",null!==(r=null===o||void 0===o?void 0:o.name)&&void 0!==r?r:tf(null!==i&&void 0!==i?i:"")]})]}),!l&&(0,Wd.jsx)("div",{className:"label warning",style:{color:"#a17703",paddingLeft:"0.5rem"},children:"Read Only"}),(0,Wd.jsxs)("div",{className:null===a?"":a[0],children:[null!==a&&(0,Wd.jsx)("h5",{children:a[1]}),"talisman"===s&&(0,Wd.jsx)(qpt,{className:"icon"}),"polkadot-js"===s&&(0,Wd.jsx)(Jpt,{className:"icon"}),!l&&(0,Wd.jsx)(Fg,{icon:by,className:"icon",style:{opacity:.7}})]})]})},nmt=(0,k.forwardRef)(((t,e)=>{const{setSection:n}=t,{isReady:r}=IJ(),{getAccount:i,activeAccount:o}=rtt(),{getLedgerForController:a,getAccountLocks:s,getBondedAccount:l,ledgers:u}=ftt(),{connectToAccount:c}=rtt(),{setStatus:h}=Bct(),{accounts:d}=rtt(),{memberships:f}=jtt(),p=[],m=[],[g,y]=(0,k.useState)([]),[v,b]=(0,k.useState)([]),[w,x]=(0,k.useState)([]);(0,k.useEffect)((()=>{M()}),[r,u,d]);const M=()=>{for(const r of d){const t=s(r.address).find((t=>{const{id:e}=t;return"staking"===e.trim()}));void 0!==t&&m.push({address:r.address,controller:l(r.address)})}for(const r of d){const t=a(r.address);t&&p.push({address:r.address,ledger:t})}const t=[],e=[],n=[];for(const r of d){const i=m.find((t=>t.address===r.address)),o=p.find((t=>t.address===r.address)),a=f.find((t=>t.address===r.address));if(i){const e=void 0!==t.find((t=>t.stash===r.address));if(!e){const e={stash:r.address,controller:i.controller,stashImported:!0,controllerImported:void 0!==d.find((t=>t.address===i.controller))};t.push(e)}}if(o){const e=void 0!==t.find((t=>t.controller===r.address));if(!e){const e={stash:o.ledger.stash,controller:o.address,stashImported:void 0!==d.find((t=>t.address===o.ledger.stash)),controllerImported:!0};t.push(e)}}a&&e.push(a),i||o||a||n.push(r.address)}y(t),b(e),x(n)};return(0,Wd.jsx)(Ept,{children:(0,Wd.jsxs)(zpt,{ref:e,children:[(0,Wd.jsxs)("div",{className:"head",children:[(0,Wd.jsx)("div",{children:(0,Wd.jsx)("h1",{children:"Accounts"})}),(0,Wd.jsx)("div",{children:(0,Wd.jsx)(Lct,{title:"Extensions",inline:!0,icon:vy,transform:"shrink-2",onClick:()=>n(0)})})]}),o?(0,Wd.jsx)(tmt,{address:o,meta:i(o),label:["danger","Disconnect"],disconnect:!0}):(0,Wd.jsx)(Rpt,{children:(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)("div",{children:(0,Wd.jsx)("h3",{children:"No Account Connected"})}),(0,Wd.jsx)("div",{})]})}),g.length>0&&(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsxs)("h2",{children:[(0,Wd.jsx)(Fg,{icon:Kg,transform:"shrink-4"})," ","Actively Staking"]}),g.map(((t,e)=>{const{stash:n,controller:r}=t,o=i(n),a=i(r);return(0,Wd.jsxs)(Lpt,{onClick:()=>{o&&(c(o),h(0))},children:[(0,Wd.jsx)("section",{children:(0,Wd.jsx)($pt,{address:n,meta:o,label:["neutral","Stash"],asElement:!0})}),(0,Wd.jsx)("section",{children:(0,Wd.jsx)($pt,{address:r,meta:a,label:["neutral","Controller"],asElement:!0})})]},`active_staking_${e}`)}))]}),v.length>0&&(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsxs)("h2",{children:[(0,Wd.jsx)(Fg,{icon:tv,transform:"shrink-4"})," In Pool"]}),v.map(((t,e)=>{const{address:n}=t,r=i(n);return(0,Wd.jsx)(tmt,{address:n,meta:r},`active_pool_${e}`)}))]}),w.length>0&&(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)("h2",{children:"Not Staking"}),w.map(((t,e)=>{const n=i(t),{address:r}=n;return(0,Wd.jsx)(tmt,{address:r,meta:n},`not_staking_${e}`)}))]})]})})})),rmt=()=>{var t;const e=Bct(),{activeAccount:n,extensions:r}=rtt();let{accounts:i}=rtt();const{config:o}=e,a=null!==(t=null===o||void 0===o?void 0:o.section)&&void 0!==t?t:null,[s,l]=(0,k.useState)(null!==a?a:null!==n?1:0),u=(0,k.useRef)(null),c=(0,k.useRef)(null);return(0,k.useEffect)((()=>{(()=>{let t=0;var n,r;if(0===s)t=null!==(n=null===(r=u.current)||void 0===r?void 0:r.clientHeight)&&void 0!==n?n:0;else if(1===s){var i,o;t=null!==(i=null===(o=c.current)||void 0===o?void 0:o.clientHeight)&&void 0!==i?i:0}e.setModalHeight(t)})()}),[s,n,i,r,e.height]),i=i.filter((t=>t.address!==n)),(0,Wd.jsx)(Ipt,{children:(0,Wd.jsxs)(Vpt,{animate:0===s?"home":"next",initial:!1,transition:{duration:.5,type:"spring",bounce:.1},variants:{home:{left:0},next:{left:"-100%"}},children:[(0,Wd.jsx)(_pt,{setSection:l,ref:u}),(0,Wd.jsx)(nmt,{setSection:l,ref:c})]})})};Clt.register(yut,xut,qlt,Ult,nut,mut,tut);const imt=t=>{const{mode:e}=yf(),{network:n}=IJ();let{items:r}=t;const{height:i}=t;r=void 0===r?[]:r;const o={responsive:!0,maintainAspectRatio:!1,scales:{x:{grid:{drawBorder:!1,color:Xu.transparent[e],borderColor:Xu.transparent[e]},ticks:{display:!0,maxTicksLimit:30,autoSkip:!0},title:{display:!0,text:"Era",font:{size:14}}},y:{ticks:{display:!0,beginAtZero:!1},grid:{drawBorder:!1,color:Xu.graphs.grid[e],borderColor:Xu.transparent[e]}}},plugins:{legend:{display:!1},title:{display:!1,text:"Era Points"},tooltip:{displayColors:!1,backgroundColor:Xu.graphs.tooltip[e],bodyColor:Xu.text.invert[e],callbacks:{title:()=>[],label:t=>`${t.parsed.y}`},intersect:!1,interaction:{mode:"nearest"}}}},a={labels:r.map(((t,e)=>t.era)),datasets:[{label:"Points",data:r.map(((t,e)=>t.reward_point)),borderColor:Ku[`${n.name}-${e}`],backgroundColor:Ku[`${n.name}-${e}`],pointStyle:void 0,pointRadius:0,borderWidth:2}]};return(0,Wd.jsx)("div",{style:{height:void 0===i?"auto":i},children:(0,Wd.jsx)(Qut,{options:o,data:a})})},omt=()=>{const{config:t}=Bct(),{address:e,identity:n}=t,{fetchEraPoints:r}=Btt(),{metrics:i}=att(),[o,a]=(0,k.useState)([]),s=k.useRef(),l=Ztt(s.current),{width:u,height:c,minHeight:h}=Ytt(l,300);return(0,k.useEffect)((()=>{(async()=>{const t=await r(e,i.activeEra.index);a(t)})()}),[]),(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Ftt,{}),(0,Wd.jsxs)("div",{className:"header",children:[(0,Wd.jsx)(Wnt,{value:e,size:40}),(0,Wd.jsxs)("h1",{children:["\xa0",null===n?tf(e):n]})]}),(0,Wd.jsx)("div",{className:"body",children:(0,Wd.jsxs)(Mv,{style:{margin:"0 0.5rem",height:275,border:"none",boxShadow:"none"},flex:!0,children:[(0,Wd.jsx)("h4",{children:"Recent Era Points"}),(0,Wd.jsxs)("div",{className:"inner",ref:s,style:{minHeight:h},children:[(0,Wd.jsx)(kct,{status:"active_service",statusFor:"subscan",title:"Subscan Disabled"}),(0,Wd.jsx)("div",{className:"graph",style:{height:`${c}px`,width:`${u}px`,position:"absolute",left:"-1rem"},children:(0,Wd.jsx)(imt,{items:o,height:200})})]})]})})]})},amt=ln.div`
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
      color: ${_u};
      opacity: 0.5;
    }
  }

  /* input element of dropdown */
  .input-wrap {
    border-bottom: 1px solid ${yc};
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    box-sizing: border-box;
    padding: 0.25rem 0 0 0;
    margin: 0.25rem 0.7rem 0 0.7rem;
    flex: 1;

    &.selected {
      border: 1px solid ${yc};
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
`,smt=ln.button`
  color: ${Qu};
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
`,lmt=ln.div`
  background: ${oc};
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
        color: ${Qu};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        flex: 1;
      }
    }
  }
`,umt=t=>{var e,n,r,i;const{items:o,onChange:a,placeholder:s,value:l,current:u,height:c}=t,[h,d]=(0,k.useState)(o),f=Jdt({items:h,itemToString:t=>t?t.name:"",onSelectedItemChange:a,initialSelectedItem:l,onInputValueChange:t=>{let{inputValue:e}=t;d(o.filter((t=>t.name.toLowerCase().startsWith(e.toLowerCase()))))}});return(0,Wd.jsx)(amt,{children:(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)("div",{className:"label",...f.getLabelProps(),children:"Currently Selected:"}),(0,Wd.jsxs)("div",{children:[(0,Wd.jsxs)("div",{className:"current",children:[(0,Wd.jsxs)("div",{className:"input-wrap selected",children:[null!==u&&(0,Wd.jsx)(Wnt,{value:null!==(e=null===u||void 0===u?void 0:u.address)&&void 0!==e?e:"",size:ef("2rem")}),(0,Wd.jsx)("input",{className:"input",disabled:!0,value:null!==(n=null===u||void 0===u?void 0:u.name)&&void 0!==n?n:""})]}),(0,Wd.jsx)("span",{children:(0,Wd.jsx)(Fg,{icon:Wg})}),(0,Wd.jsxs)("div",{className:"input-wrap selected",children:[null!==l&&(0,Wd.jsx)(Wnt,{value:null!==(r=null===l||void 0===l?void 0:l.address)&&void 0!==r?r:"",size:ef("2rem")}),(0,Wd.jsx)("input",{className:"input",disabled:!0,value:null!==(i=null===l||void 0===l?void 0:l.name)&&void 0!==i?i:"..."})]})]}),(0,Wd.jsxs)(lmt,{...f.getMenuProps(),height:c,children:[(0,Wd.jsx)("div",{className:"input-wrap",...f.getComboboxProps(),children:(0,Wd.jsx)("input",{...f.getInputProps({placeholder:s}),className:"input"})}),(0,Wd.jsxs)("div",{className:"items",children:[f.selectedItem&&(0,Wd.jsx)(smt,{onClick:()=>f.selectItem(null),"aria-label":"clear selection",children:(0,Wd.jsx)(Fg,{transform:"grow-2",icon:rv})}),h.map(((t,e)=>(0,Wd.jsx)(cmt,{c:f,item:t,index:e},`controller_acc_${e}`)))]})]})]})]})})},cmt=t=>{let{c:e,item:n,index:r}=t;const{network:i}=IJ(),{mode:o}=yf();let a,s;return e.selectedItem===n?(a=Ku[`${i.name}-${o}`],s=`2px solid ${Ku[`${i.name}-${o}`]}`):(a=Xu.text.primary[o],s=`2px solid ${Xu.transparent[o]}`),(0,Wd.jsxs)("div",{className:"item",...e.getItemProps({key:n.name,index:r,item:n}),style:{color:a,border:s},children:[(0,Wd.jsx)("div",{className:"icon",children:(0,Wd.jsx)(Wnt,{value:n.address,size:26})}),(0,Wd.jsx)("p",{children:n.name})]})},hmt=ln.div`
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
`,dmt=()=>{const{api:t}=IJ(),{setStatus:e}=Bct(),{accounts:n,activeAccount:r,getAccount:i,accountHasSigner:o}=rtt(),{getBondedAccount:a,isController:s}=ftt(),l=i(a(r)),[u,c]=(0,k.useState)(null);(0,k.useEffect)((()=>{c(null)}),[r]);const{submitTx:h,estimatedFee:d,submitting:f}=vft({tx:(()=>{var e;let n=null;if(!u||!t)return n;const r={Id:null!==(e=null===u||void 0===u?void 0:u.address)&&void 0!==e?e:""};return n=t.tx.staking.setController(r),n})(),from:r,shouldSubmit:!0,callbackSubmit:()=>{e(0)},callbackInBlock:()=>{}}),p=n.filter((t=>t.address!==r&&!s(t.address)));return(0,Wd.jsxs)(hmt,{children:[(0,Wd.jsxs)(Apt,{children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:Ey}),"Change Controller Account"]}),(0,Wd.jsxs)("div",{style:{padding:"0 1rem",width:"100%",boxSizing:"border-box"},children:[(0,Wd.jsx)("div",{style:{marginBottom:"1.5rem"},children:!o(r)&&(0,Wd.jsx)(lft,{text:"Your stash account is read only and cannot sign transactions."})}),(0,Wd.jsx)(umt,{items:p.filter((t=>t.address!==r)),onChange:t=>{let{selectedItem:e}=t;c(e)},placeholder:"Search Account",current:l,value:u,height:"17rem"}),(0,Wd.jsx)(jpt,{children:(0,Wd.jsxs)("p",{children:["Estimated Tx Fee:"," ",null===d?"...":`${d}`]})}),(0,Wd.jsx)(Npt,{children:(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("button",{type:"button",className:"submit",onClick:()=>h(),disabled:null===u||f||!o(r),children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:iv}),"Submit"]})})})]})]})},fmt=ln.button`
  width: 100%;
  flex: 1;
  padding: 1rem 0.75rem;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  display: flex;
  flex-flow: row-reverse wrap;
  align-items: center;
  background: ${dc};
  transition: all 0.15s;
  color: ${Qu};

  > section:last-child {
    color: ${_u};
    padding-left: 0.25rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    flex: 1;
    font-variation-settings: 'wght' 420;
  }

  &:hover {
    > section {
      color: ${Qu};
    }
  }
`,pmt=t=>{const{checked:e,label:n,onClick:r}=t;return(0,Wd.jsxs)(fmt,{onClick:()=>{void 0!==r&&r()},children:[(0,Wd.jsx)("section",{className:e?"checked":void 0,children:(0,Wd.jsx)(Fg,{icon:e?Gg:av,transform:"shrink-3"})}),(0,Wd.jsx)("section",{children:n})]})},mmt=()=>{const{services:t,toggleService:e}=Rtt();return(0,Wd.jsxs)(Tpt,{children:[(0,Wd.jsx)("h2",{children:"Toggle Services"}),(0,Wd.jsx)(pmt,{checked:t.includes("subscan"),label:"Subscan API",onClick:()=>{e("subscan")}}),(0,Wd.jsx)(pmt,{checked:t.includes("binance_spot"),label:"Binance Spot API",onClick:()=>{e("binance_spot")}})]})},gmt=ln.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
`,ymt=ln.div`
  padding-top: 1rem;
  box-sizing: border-box;
  flex-basis: 50%;
`,vmt=ln(Fu.div)`
  box-sizing: border-box;
  width: 200%;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  position: relative;
`,bmt=ln.div`
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
      background: ${dc};
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
        background: ${pc};
      }
      .icon {
        margin-right: 0.5rem;
      }
      p {
        color: ${Qu};
        font-size: 1rem;
      }
    }
  }
`,wmt=(0,k.forwardRef)(((t,e)=>{const{setSection:n,setTask:r}=t,{network:i}=IJ(),{config:o}=Bct(),{fn:a}=o;return(0,Wd.jsx)(bmt,{children:(0,Wd.jsxs)("div",{className:"items",ref:e,children:["add"===a&&(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsxs)("button",{type:"button",className:"action-button",onClick:()=>{n(1),r("bond_some")},children:[(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)("h3",{children:"Bond Extra"}),(0,Wd.jsxs)("p",{children:["Bond more ",i.unit,"."]})]}),(0,Wd.jsx)("div",{children:(0,Wd.jsx)(Fg,{transform:"shrink-2",icon:Qg})})]}),(0,Wd.jsxs)("button",{type:"button",className:"action-button",onClick:()=>{n(1),r("bond_all")},children:[(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)("h3",{children:"Bond All"}),(0,Wd.jsxs)("p",{children:["Bond all available ",i.unit,"."]})]}),(0,Wd.jsx)("div",{children:(0,Wd.jsx)(Fg,{transform:"shrink-2",icon:Qg})})]})]}),"remove"===a&&(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsxs)("button",{type:"button",className:"action-button",onClick:()=>{n(1),r("unbond_some")},children:[(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)("h3",{children:"Unbond"}),(0,Wd.jsxs)("p",{children:["Unbond some of your ",i.unit,"."]})]}),(0,Wd.jsx)("div",{children:(0,Wd.jsx)(Fg,{transform:"shrink-2",icon:Qg})})]}),(0,Wd.jsxs)("button",{type:"button",className:"action-button",onClick:()=>{n(1),r("unbond_all")},children:[(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)("h3",{children:"Unbond All"}),(0,Wd.jsx)("p",{children:"Exit your staking position."})]}),(0,Wd.jsx)("div",{children:(0,Wd.jsx)(Fg,{transform:"shrink-2",icon:Qg})})]})]})]})})})),xmt=t=>{let{setSection:e,submitTx:n,submitting:r,isValid:i}=t;const o=void 0!==e;return(0,Wd.jsxs)(Npt,{children:[(0,Wd.jsx)("div",{children:o&&(0,Wd.jsxs)("button",{type:"button",className:"submit",onClick:()=>{o&&e(0)},children:[(0,Wd.jsx)(Fg,{transform:"shrink-2",icon:Jg}),"Back"]})}),(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("button",{type:"button",className:"submit",onClick:()=>n(),disabled:r||!i,children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:iv}),"Submit",r&&"ting"]})})]})},Mmt=t=>{const{setSection:e}=t,{api:n,network:r}=IJ(),{units:i}=r,{setStatus:o,setResize:a,config:s}=Bct(),{activeAccount:l,accountHasSigner:u}=rtt(),{getBondOptions:c}=ftt(),{bondType:h}=s,{getPoolBondOptions:d}=Ett(),f=c(l),p=d(l),m="stake"===h,g="pool"===h,{freeToBond:y}=g?p:f,v=rf(y,i),[b,w]=(0,k.useState)({bond:v}),[x,M]=(0,k.useState)(!1);(0,k.useEffect)((()=>{w({bond:v})}),[v]),(0,k.useEffect)((()=>{a()}),[b]);const{submitTx:S,estimatedFee:C,submitting:P}=vft({tx:(()=>{let t=null;if(!x||!n||!l)return t;const e=of(b.bond,i);return g?t=n.tx.nominationPools.bondExtra({FreeBalance:e}):m&&(t=n.tx.staking.bondExtra(e)),t})(),from:l,shouldSubmit:x,callbackSubmit:()=>{o(0)},callbackInBlock:()=>{}}),T=(0,Wd.jsxs)("p",{children:["Estimated Tx Fee: ",null===C?"...":`${C}`]}),A=[];return u(l)||A.push("Your account is read only, and cannot sign transactions."),(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)("div",{className:"items",children:(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(uft,{bondType:h,unbond:!1,listenIsValid:M,defaultBond:v,setters:[{set:w,current:b}],warnings:A}),(0,Wd.jsx)(jpt,{children:T})]})}),(0,Wd.jsx)(xmt,{setSection:e,submitTx:S,submitting:P,isValid:x&&u(l)})]})},kmt=t=>{const{setSection:e}=t,{api:n,network:r}=IJ(),{units:i}=r,{setStatus:o,setResize:a,config:s}=Bct(),{activeAccount:l,accountHasSigner:u}=rtt(),{getBondOptions:c}=ftt(),{bondType:h}=s,{getPoolBondOptions:d}=Ett(),f=c(l),p=d(l),m="stake"===h,g="pool"===h,{freeToBond:y}=g?p:f,{totalPossibleBond:v}=g?p:f,b=rf(y,i),w=rf(v,i),[x,M]=(0,k.useState)({bond:b}),[S,C]=(0,k.useState)(!1);(0,k.useEffect)((()=>{const t=b;M({bond:t}),C(t>0)}),[b]),(0,k.useEffect)((()=>{a()}),[x]);const{submitTx:P,estimatedFee:T,submitting:A}=vft({tx:(()=>{let t=null;if(!S||!n||!l)return t;const e=of(x.bond,i);return g?t=n.tx.nominationPools.bondExtra({FreeBalance:e}):m&&(t=n.tx.staking.bondExtra(e)),t})(),from:l,shouldSubmit:S,callbackSubmit:()=>{o(0)},callbackInBlock:()=>{}}),N=(0,Wd.jsxs)("p",{children:["Estimated Tx Fee: ",null===T?"...":`${T}`]});return(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)("div",{className:"items",children:(0,Wd.jsxs)(Wd.Fragment,{children:[!u(l)&&(0,Wd.jsx)(lft,{text:"Your account is read only, and cannot sign transactions."}),0===b&&(0,Wd.jsx)(lft,{text:`You have no free ${r.unit} to bond.`}),(0,Wd.jsx)("h4",{children:"Amount to bond:"}),(0,Wd.jsxs)("h2",{children:[b," ",r.unit]}),(0,Wd.jsxs)("p",{children:["This amount of ",r.unit," will be added to your current bonded funds."]}),(0,Wd.jsx)(Opt,{}),(0,Wd.jsx)("h4",{children:"New total bond:"}),(0,Wd.jsxs)("h2",{children:[w," ",r.unit]}),(0,Wd.jsx)(jpt,{children:N})]})}),(0,Wd.jsx)(xmt,{setSection:e,submitTx:P,submitting:A,isValid:S&&u(l)})]})},Smt=t=>{const{setSection:e}=t,{api:n,network:r}=IJ(),{units:i}=r,{setStatus:o,setResize:a,config:s}=Bct(),{activeAccount:l,accountHasSigner:u}=rtt(),{staking:c,getControllerNotImported:h}=btt(),{getBondOptions:d,getBondedAccount:f}=ftt(),{bondType:p}=s,{stats:m}=Ttt(),{getPoolBondOptions:g}=Ett(),y=f(l),v=h(y),{minNominatorBond:b}=c,w=d(l),x=g(l),M="stake"===p,S="pool"===p,{minJoinBond:C}=m,{freeToUnbond:P}=S?x:w,T=rf(P,i),A=rf(C,i),N=rf(b,i),[O,j]=(0,k.useState)({bond:T}),[V,E]=(0,k.useState)(!1),I=S?Math.max(T-A,0):Math.max(T-N,0),z=!!S||!v;(0,k.useEffect)((()=>{j({bond:I}),E(z)}),[I,z]),(0,k.useEffect)((()=>{a()}),[O]);const L=S?l:y,{submitTx:R,estimatedFee:H,submitting:B}=vft({tx:(()=>{let t=null;if(!V||!n||!l)return t;if(M&&v)return t;const e=of(O.bond,i);return S?t=n.tx.nominationPools.unbond(l,e):M&&(t=n.tx.staking.unbond(e)),t})(),from:L,shouldSubmit:V,callbackSubmit:()=>{o(0)},callbackInBlock:()=>{}}),D=(0,Wd.jsxs)("p",{children:["Estimated Tx Fee: ",null===H?"...":`${H}`]}),F=[];return u(l)||F.push("Your account is read only, and cannot sign transactions."),(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)("div",{className:"items",children:(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(uft,{bondType:p,unbond:!0,listenIsValid:E,defaultBond:I,setters:[{set:j,current:O}],warnings:F}),(0,Wd.jsxs)(jpt,{children:[(0,Wd.jsx)("p",{children:"Once unbonding, you must wait 28 days for your funds to become available."}),D]})]})}),(0,Wd.jsx)(xmt,{setSection:e,submitTx:R,submitting:B,isValid:V&&u(L)})]})},Cmt=t=>{const{setSection:e}=t,{api:n,network:r}=IJ(),{units:i}=r,{setStatus:o,setResize:a,config:s}=Bct(),{activeAccount:l,accountHasSigner:u}=rtt(),{getControllerNotImported:c}=btt(),{getBondOptions:h,getBondedAccount:d,getAccountNominations:f}=ftt(),{bondType:p}=s,{getPoolBondOptions:m}=Ett(),g=d(l),y=f(l),v=c(g),b=h(l),w=m(l),x="stake"===p,M="pool"===p,{freeToUnbond:S}=M?w:b,C=rf(S,i),[P,T]=(0,k.useState)({bond:C}),[A,N]=(0,k.useState)(!1),O=(()=>{let t=!1;return t=M?C>0:C>0&&0===y.length&&!v,t})();(0,k.useEffect)((()=>{T({bond:C}),N(O)}),[C,O]),(0,k.useEffect)((()=>{a()}),[P]);const j=M?l:g,{submitTx:V,estimatedFee:E,submitting:I}=vft({tx:(()=>{let t=null;if(!A||!n||!l)return t;if(x&&v)return t;const e=of(P.bond,i);return M?t=n.tx.nominationPools.unbond(l,e):x&&(t=n.tx.staking.unbond(e)),t})(),from:j,shouldSubmit:A,callbackSubmit:()=>{o(0)},callbackInBlock:()=>{}}),z=(0,Wd.jsxs)("p",{children:["Estimated Tx Fee: ",null===E?"...":`${E}`]});return(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)("div",{className:"items",children:(0,Wd.jsxs)(Wd.Fragment,{children:[!u(j)&&(0,Wd.jsx)(lft,{text:"Your account is read only, and cannot sign transactions."}),x&&v?(0,Wd.jsx)(lft,{text:"You must have your controller account imported to unbond."}):(0,Wd.jsx)(Wd.Fragment,{}),x&&y.length?(0,Wd.jsx)(lft,{text:"Stop nominating before unbonding all funds."}):(0,Wd.jsx)(Wd.Fragment,{}),(0,Wd.jsx)("h4",{children:"Amount to unbond:"}),(0,Wd.jsxs)("h2",{children:[C," ",r.unit]}),(0,Wd.jsx)(Opt,{}),(0,Wd.jsxs)(jpt,{children:[(0,Wd.jsx)("p",{children:"Once unbonding, you must wait 28 days for your funds to become available."}),A&&z]})]})}),(0,Wd.jsx)(xmt,{setSection:e,submitTx:V,submitting:I,isValid:A&&u(j)})]})},Pmt=(0,k.forwardRef)(((t,e)=>{const{task:n}=t;return(0,Wd.jsxs)(bmt,{ref:e,children:["bond_some"===n&&(0,Wd.jsx)(Mmt,{...t}),"bond_all"===n&&(0,Wd.jsx)(kmt,{...t}),"unbond_some"===n&&(0,Wd.jsx)(Smt,{...t}),"unbond_all"===n&&(0,Wd.jsx)(Cmt,{...t})]})})),Tmt=()=>{const{config:t,setModalHeight:e}=Bct(),{fn:n,bondType:r}=t,[i,o]=(0,k.useState)(null),[a,s]=(0,k.useState)(0),l=(0,k.useRef)(null),u=(0,k.useRef)(null),c=(0,k.useRef)(null);return(0,k.useEffect)((()=>{var t,n;let r=null!==(t=null===(n=l.current)||void 0===n?void 0:n.clientHeight)&&void 0!==t?t:0;var i,o,s,h;0===a?r+=null!==(i=null===(o=u.current)||void 0===o?void 0:o.clientHeight)&&void 0!==i?i:0:r+=null!==(s=null===(h=c.current)||void 0===h?void 0:h.clientHeight)&&void 0!==s?s:0;e(r)}),[a,i]),(0,Wd.jsxs)(gmt,{children:[(0,Wd.jsx)(ymt,{ref:l,children:(0,Wd.jsxs)(Apt,{children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:"add"===n?Ny:Sy}),"add"===n?"Add To":"Remove"," Bond"]})}),(0,Wd.jsxs)(vmt,{animate:0===a?"home":"next",transition:{duration:.5,type:"spring",bounce:.1},variants:{home:{left:0},next:{left:"-100%"}},children:[(0,Wd.jsx)(wmt,{setSection:s,setTask:o,ref:u}),(0,Wd.jsx)(Pmt,{setSection:s,task:i,ref:c,bondType:r})]})]})},Amt=t=>{var e,n;const{items:r,onChange:i,label:o,placeholder:a,value:s,current:l}=t,[u,c]=(0,k.useState)(r),h=Jdt({items:u,itemToString:t=>{var e;return null!==(e=null===t||void 0===t?void 0:t.name)&&void 0!==e?e:""},onSelectedItemChange:i,initialSelectedItem:s,onInputValueChange:t=>{let{inputValue:e}=t;c(r)}});return(0,Wd.jsx)(amt,{children:(0,Wd.jsxs)("div",{children:[o&&(0,Wd.jsx)("div",{className:"label",...h.getLabelProps(),children:o}),(0,Wd.jsxs)("div",{style:{position:"relative"},children:[(0,Wd.jsxs)("div",{className:"current",children:[(0,Wd.jsx)("div",{className:"input-wrap selected",children:(0,Wd.jsx)("input",{className:"input",disabled:!0,value:null!==(e=null===l||void 0===l?void 0:l.name)&&void 0!==e?e:""})}),(0,Wd.jsx)("span",{children:(0,Wd.jsx)(Fg,{icon:Wg})}),(0,Wd.jsx)("div",{className:"input-wrap selected",...h.getComboboxProps(),children:(0,Wd.jsx)("input",{className:"input",disabled:!0,...h.getInputProps({placeholder:a}),value:null!==(n=null===s||void 0===s?void 0:s.name)&&void 0!==n?n:"..."})})]}),(0,Wd.jsx)(lmt,{...h.getMenuProps(),children:(0,Wd.jsx)("div",{className:"items",children:u.map(((t,e)=>(0,Wd.jsx)(Nmt,{c:h,item:t,index:e},`controller_acc_${e}`)))})})]})]})})},Nmt=t=>{var e,n;let{c:r,item:i,index:o}=t;const{network:a}=IJ(),{mode:s}=yf(),l=(null===(e=r.selectedItem)||void 0===e?void 0:e.key)===i.key?Ku[`${a.name}-${s}`]:Xu.text.primary[s],u=(null===(n=r.selectedItem)||void 0===n?void 0:n.key)===i.key?`2px solid ${Ku[`${a.name}-${s}`]}`:`2px solid ${Xu.transparent[s]}`;return(0,Wd.jsx)("div",{className:"item",...r.getItemProps({key:i.name,index:o,item:i}),style:{color:l,border:u},children:(0,Wd.jsx)("p",{children:i.name})})},Omt=()=>{const{api:t}=IJ(),{activeAccount:e}=rtt(),{getBondedAccount:n}=ftt(),{setStatus:r}=Bct(),i=n(e),{staking:o,getControllerNotImported:a}=btt(),{payee:s}=o,l=xt.find((t=>t.key===s)),[u,c]=(0,k.useState)(null);(0,k.useEffect)((()=>{c(null)}),[e]),(0,k.useEffect)((()=>{const t=xt.find((t=>t.key===(null===u||void 0===u?void 0:u.key)));d(void 0!==t)}),[u]);const[h,d]=(0,k.useState)(!1),{submitTx:f,estimatedFee:p,submitting:m}=vft({tx:(()=>{let e=null;return t&&h?(e=t.tx.staking.setPayee(u.key),e):e})(),from:i,shouldSubmit:h,callbackSubmit:()=>{r(0)},callbackInBlock:()=>{}}),g=xt.filter((t=>t.key!==l.key));return(0,Wd.jsxs)(Tpt,{verticalOnly:!0,children:[(0,Wd.jsxs)(Apt,{children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:ev}),"Update Reward Destination"]}),(0,Wd.jsxs)("div",{style:{padding:"0 1rem",width:"100%",boxSizing:"border-box"},children:[a(i)&&(0,Wd.jsx)(lft,{text:"You must have your controller account imported to update your reward destination"}),(0,Wd.jsx)(Amt,{items:g,onChange:t=>{let{selectedItem:e}=t;c(e)},placeholder:"Reward Destination",value:u,current:l,height:"17rem"}),(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("p",{children:["Estimated Tx Fee:"," ",null===p?"...":`${p}`]})}),(0,Wd.jsx)(Npt,{children:(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("button",{type:"button",className:"submit",onClick:()=>f(),disabled:!h||m||a(i),children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:iv}),"Submit"]})})})]})]})},jmt=()=>{const{api:t}=IJ(),{activeAccount:e,accountHasSigner:n}=rtt(),{getBondedAccount:r,getAccountNominations:i}=ftt(),{setStatus:o,config:a}=Bct(),{membership:s}=jtt(),{poolNominations:l,isNominator:u}=Ett(),{nominations:c,provider:h,bondType:d}=a,f="pool"===d,p="stake"===d,m=r(e),g=f?e:m,y=!0===f?l.targets:i(e),v=y.length-c.length,b=c.length,[w,x]=(0,k.useState)(!1);(0,k.useEffect)((()=>{x(y.length>0)}),[y]);let M=y.length>0;f&&(M=s&&u()&&c.length>0),(0,k.useEffect)((()=>{x(M)}),[M]);const{submitTx:S,estimatedFee:C,submitting:P}=vft({tx:(()=>{let e=null;if(!w||!t)return e;const n=c.map((t=>f?null===t||void 0===t?void 0:t.address:{Id:t}));return f&&0!==b?e=t.tx.nominationPools.nominate(s.poolId,n):p&&0!==b?e=t.tx.staking.nominate(n):p&&0===b&&(e=t.tx.staking.chill()),e})(),from:g,shouldSubmit:w,callbackSubmit:()=>{o(0),h&&(h.setSelectActive(!1),h.resetSelected())},callbackInBlock:()=>{}});return(0,Wd.jsxs)(Tpt,{verticalOnly:!0,children:[(0,Wd.jsxs)(Apt,{children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:ay}),"Stop Nominating"]}),(0,Wd.jsxs)("div",{style:{padding:"0 1rem",width:"100%",boxSizing:"border-box"},children:[!y.length&&(0,Wd.jsx)(lft,{text:"You have no nominations set."}),f&&!c.length&&(0,Wd.jsx)(lft,{text:"A pool needs to have at least one nomination. If the intention is to delete the pool, the pool owner can destroy it."}),!n(g)&&(0,Wd.jsx)(lft,{text:`You must have your${"stake"===d?" controller":" "}account imported to stop nominating.`}),(0,Wd.jsxs)("h2",{children:["Stop ",b?`${v} Nomination`:"All Nomination",1===b?"":"s"]}),(0,Wd.jsx)(Opt,{}),(0,Wd.jsxs)(jpt,{children:[(0,Wd.jsx)("p",{children:"Once submitted, your nominations will be removed from your dashboard immediately, and will not be nominated from the start of the next era."}),(0,Wd.jsxs)("p",{children:["Estimated Tx Fee:"," ",null===C?"...":`${C}`]})]}),(0,Wd.jsx)(Npt,{children:(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("button",{type:"button",className:"submit",onClick:()=>S(),disabled:!w||P||!n(g),children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:iv}),"Submit"]})})})]})]})},Vmt=()=>{const{api:t,network:e}=IJ(),{activeAccount:n}=rtt(),{targets:r,staking:i,getControllerNotImported:o}=btt(),{getBondedAccount:a,getLedgerForStash:s}=ftt(),{setStatus:l}=Bct(),{units:u}=e,{minNominatorBond:c}=i,h=a(n),{nominations:d}=r,f=s(n),{active:p}=f,m=rf(p,u),g=rf(c,u),[y,v]=(0,k.useState)(!1);(0,k.useEffect)((()=>{v(d.length>0&&m>=g)}),[r]);const{submitTx:b,estimatedFee:w,submitting:x}=vft({tx:(()=>{let e=null;if(!y||!t)return e;const n=d.map((t=>({Id:t.address})));return e=t.tx.staking.nominate(n),e})(),from:h,shouldSubmit:y,callbackSubmit:()=>{l(0)},callbackInBlock:()=>{}}),M=[];return o(h)&&M.push("You must have your controller account imported to start nominating"),d.length||M.push("You have no nominations set."),m<g&&M.push(`You do not meet the minimum nominator bond of ${g} ${e.unit}. Please bond some funds before nominating.`),(0,Wd.jsxs)(Tpt,{verticalOnly:!0,children:[(0,Wd.jsxs)(Apt,{children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:ny}),"Nominate"]}),(0,Wd.jsxs)("div",{style:{padding:"0 1rem",width:"100%",boxSizing:"border-box"},children:[M.map(((t,e)=>(0,Wd.jsx)(lft,{text:t}))),(0,Wd.jsxs)("h2",{children:["You Have ",d.length," Nomination",1===d.length?"":"s"]}),(0,Wd.jsx)(Opt,{}),(0,Wd.jsxs)(jpt,{children:[(0,Wd.jsx)("p",{children:"Once submitted, you will start nominating your chosen validators."}),(0,Wd.jsxs)("p",{children:["Estimated Tx Fee:"," ",null===w?"...":`${w}`]})]}),(0,Wd.jsx)(Npt,{children:(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("button",{type:"button",className:"submit",onClick:()=>b(),disabled:!y||x||M.length,children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:iv}),"Submit"]})})})]})]})},Emt=ln.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
`,Imt=ln.div`
  box-sizing: border-box;
  padding-top: 1rem;
  flex-basis: 50%;
`,zmt=ln(Fu.div)`
  box-sizing: border-box;
  width: 200%;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
  height: 100%;
`,Lmt=ln.div`
  box-sizing: border-box;
  border-radius: 1rem;
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 50%;
  flex: 1;
  padding: 0 1rem;
`,Rmt=ln.div`
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
    color: ${_u};
    margin: 1rem 0 0 0;
  }
  h4 {
    background: ${t=>t.noFill?"none":dc};
    padding: ${t=>t.noFill?"0 0.5rem":"0.5rem"};
    color: ${_u};
    box-sizing: border-box;
    margin: 0;
    width: 100%;
    border-radius: 0.75rem;
  }
`,Hmt=(0,k.forwardRef)(((t,e)=>{let{unlocking:n,bondType:r,setSection:i,setUnlock:o,setTask:a}=t;const{network:s,consts:l}=IJ(),{metrics:u}=att(),{bondDuration:c}=l,{units:h}=s,{activeEra:d}=u,f="stake"===r;let p=new($d())(0);for(const m of n){const{era:t,value:e}=m;t-d.index<=0&&(p=p.add(e))}return(0,Wd.jsxs)(Lmt,{ref:e,children:[p.toNumber()>0&&(0,Wd.jsx)(Wd.Fragment,{children:(0,Wd.jsxs)(Rmt,{noFill:!0,children:[(0,Wd.jsx)("h4",{children:"Available to Withdraw"}),(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)("section",{children:(0,Wd.jsxs)("h2",{children:[rf(p,h)," ",s.unit]})}),(0,Wd.jsx)("section",{children:(0,Wd.jsx)("div",{children:(0,Wd.jsx)(Lct,{small:!0,inline:!0,primary:!0,title:"Withdraw",onClick:()=>{a("withdraw"),o({era:0,value:p}),i(1)}})})})]})]})}),0===n.length&&(0,Wd.jsx)("h2",{children:"No Unlocks"}),n.map(((t,e)=>{const{era:n,value:r}=t,l=n-d.index;return(0,Wd.jsxs)(Rmt,{children:[(0,Wd.jsx)("h4",{children:l<=0?"Unlocked":`Unlocks after era ${n}`}),(0,Wd.jsxs)("div",{children:[(0,Wd.jsxs)("section",{children:[(0,Wd.jsxs)("h2",{children:[rf(r,h)," ",s.unit]}),l>0?(0,Wd.jsxs)("h3",{children:[l," era",1!==l&&"s"," remaining before withdraw."]}):(0,Wd.jsx)("h3",{children:"Available to withdraw"})]}),f&&(0,Wd.jsx)("section",{children:(0,Wd.jsx)("div",{children:(0,Wd.jsx)(Lct,{small:!0,inline:!0,primary:!0,title:"Rebond",onClick:()=>{a("rebond"),o(t),i(1)}})})})]}),(0,Wd.jsx)(Opt,{})]},`unlock_chunk_${e}`)})),(0,Wd.jsx)(jpt,{children:(0,Wd.jsxs)("p",{children:["Unlocks take ",c," eras before they can be withdrawn. You can rebond unlocks at any time in this period, or withdraw them to your free balance thereafter."]})})]})})),Bmt=(0,k.forwardRef)(((t,e)=>{var n,r,i;let{setSection:o,unlock:a,task:s}=t;const{api:l,network:u}=IJ(),{activeAccount:c,accountHasSigner:h}=rtt(),{staking:d}=btt(),{activeBondedPool:f}=Ett(),{setStatus:p,config:m}=Bct(),{bondType:g}=m||{},{getBondedAccount:y}=ftt(),{historyDepth:v}=d,{units:b}=u,w=y(c),x="stake"===g,M="pool"===g,[S,C]=(0,k.useState)(null!==(n=(null===a||void 0===a||null===(r=a.value)||void 0===r?void 0:r.toNumber())>0)&&void 0!==n&&n);(0,k.useEffect)((()=>{var t,e;C(null!==(t=(null===a||void 0===a||null===(e=a.value)||void 0===e?void 0:e.toNumber())>0)&&void 0!==t&&t)}),[a]);const P=x?w:c,{submitTx:T,estimatedFee:A,submitting:N}=vft({tx:(()=>{let t=null;return S&&l?("rebond"===s&&x?t=l.tx.staking.rebond(a.value.toNumber()):"withdraw"===s&&x?t=l.tx.staking.withdrawUnbonded(v):"withdraw"===s&&M&&f&&(t=l.tx.nominationPools.withdrawUnbonded(c,null===f||void 0===f?void 0:f.slashingSpansCount)),t):t})(),from:P,shouldSubmit:S,callbackSubmit:()=>{p(0)},callbackInBlock:()=>{}}),O=null!==(i=null===a||void 0===a?void 0:a.value)&&void 0!==i?i:new($d())(0);return(0,Wd.jsx)(Lmt,{children:(0,Wd.jsxs)("div",{ref:e,style:{paddingBottom:"1rem"},children:[(0,Wd.jsxs)("div",{children:[!h(P)&&(0,Wd.jsx)(lft,{text:"Your account is read only, and cannot sign transactions."}),"rebond"===s&&(0,Wd.jsxs)("h2",{children:["Rebond ",rf(O,b)," ",u.unit]}),"withdraw"===s&&(0,Wd.jsxs)("h2",{children:["Withdraw ",rf(O,b)," ",u.unit]}),(0,Wd.jsx)(Opt,{}),(0,Wd.jsx)(jpt,{children:(0,Wd.jsxs)("p",{children:["Estimated Tx Fee:"," ",null===A?"...":`${A}`]})})]}),(0,Wd.jsxs)(Npt,{children:[(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("button",{type:"button",className:"submit",onClick:()=>o(0),children:[(0,Wd.jsx)(Fg,{transform:"shrink-2",icon:Jg}),"Back"]})}),(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("button",{type:"button",className:"submit",onClick:()=>T(),disabled:!S||N||!h(P),children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:iv}),"Submit"]})})]})]})})})),Dmt=()=>{const{activeAccount:t}=rtt(),{config:e,setModalHeight:n}=Bct(),{bondType:r}=e||{},{getLedgerForStash:i}=ftt(),{getPoolUnlocking:o}=Ett(),a=(()=>{let e,n=[];switch(r){case"stake":e=i(t),n=e.unlocking;break;case"pool":n=o();break;default:console.error(`unlocking modal bond-type ${r} is not defined.`)}return n})(),[s,l]=(0,k.useState)(0),[u,c]=(0,k.useState)(null),[h,d]=(0,k.useState)(null),f=(0,k.useRef)(null),p=(0,k.useRef)(null),m=(0,k.useRef)(null);return(0,k.useEffect)((()=>{var t,e;let r=null!==(t=null===(e=f.current)||void 0===e?void 0:e.clientHeight)&&void 0!==t?t:0;var i,o,a,l;0===s?r+=null!==(i=null===(o=p.current)||void 0===o?void 0:o.clientHeight)&&void 0!==i?i:0:r+=null!==(a=null===(l=m.current)||void 0===l?void 0:l.clientHeight)&&void 0!==a?a:0;n(r)}),[u,s]),(0,Wd.jsxs)(Emt,{children:[(0,Wd.jsx)(Imt,{ref:f,children:(0,Wd.jsxs)(Apt,{children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:ky}),a.length>0&&`${a.length} `,"Unlock",1===a.length?"":"s"]})}),(0,Wd.jsxs)(zmt,{animate:0===s?"home":"next",transition:{duration:.5,type:"spring",bounce:.1},variants:{home:{left:0},next:{left:"-100%"}},children:[(0,Wd.jsx)(Hmt,{unlocking:a,bondType:r,setSection:l,setUnlock:d,setTask:c,ref:p}),(0,Wd.jsx)(Bmt,{setSection:l,unlock:h,task:u,ref:m})]})]})},Fmt=ln.div`
  width: 100%;
  box-sizing: border-box;
`,Umt=()=>{const{api:t,network:e}=IJ(),{units:n}=e,{setStatus:r,setResize:i}=Bct(),{activeAccount:o,accountHasSigner:a}=rtt(),{getBondOptions:s}=ftt(),{freeToBond:l}=s(o),[u,c]=(0,k.useState)({bond:rf(l,n)}),[h,d]=(0,k.useState)(!0);(0,k.useEffect)((()=>{i()}),[u]);const{submitTx:f,estimatedFee:p,submitting:m}=vft({tx:(()=>{let e=null;if(!h||!o)return e;const r=of(u.bond,n);return e=t.tx.nominationPools.create(r,o,o,o),e})(),from:o,shouldSubmit:h,callbackSubmit:()=>{r(0)},callbackInBlock:()=>{}}),g=(0,Wd.jsxs)("p",{children:["Estimated Tx Fee: ",null===p?"...":`${p}`]}),y=[];return a(o)||y.push("Your account is read only, and cannot sign transactions."),(0,Wd.jsxs)(Fmt,{children:[(0,Wd.jsx)("div",{children:(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(uft,{bondType:"pool",unbond:!1,listenIsValid:d,defaultBond:rf(l,n),setters:[{set:c,current:u}],warnings:y}),(0,Wd.jsx)(jpt,{children:g})]})}),(0,Wd.jsx)(Npt,{children:(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("button",{type:"button",className:"submit",onClick:()=>f(),disabled:m||!h||!a(o),children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:iv}),"Submit",m&&"ting"]})})})]})},Wmt=()=>(0,Wd.jsxs)(Tpt,{children:[(0,Wd.jsxs)(Apt,{children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:Ny}),"Create Pool"]}),(0,Wd.jsx)(Umt,{})]}),qmt=()=>{const{api:t}=IJ(),{setStatus:e}=Bct(),{activeAccount:n,accountHasSigner:r}=rtt(),{membership:i}=jtt(),{isNominator:o,targets:a}=Ett(),{nominations:s}=a,l=null===i||void 0===i?void 0:i.poolId,[u,c]=(0,k.useState)(!1),h=i&&o()&&s.length>0;(0,k.useEffect)((()=>{c(h)}),[h]);const{submitTx:d,estimatedFee:f,submitting:p}=vft({tx:(()=>{let e=null;if(!u)return e;const n=s.map((t=>t.address));return e=t.tx.nominationPools.nominate(l,n),e})(),from:n,shouldSubmit:u,callbackSubmit:()=>{e(0)},callbackInBlock:()=>{}}),m=[];return r(n)||m.push("Your account is read only, and cannot sign transactions."),s.length||m.push("You have no nominations set."),i&&o()||m.push("You do not have a nominator role in any pools."),(0,Wd.jsxs)(Tpt,{verticalOnly:!0,children:[(0,Wd.jsxs)(Apt,{children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:ny}),"Nominate"]}),(0,Wd.jsxs)("div",{style:{padding:"0 1rem",width:"100%",boxSizing:"border-box"},children:[m.map(((t,e)=>(0,Wd.jsx)(lft,{text:t},`warning_${e}`))),(0,Wd.jsxs)("h2",{children:["You Have ",s.length," Nomination",1===s.length?"":"s"]}),(0,Wd.jsx)(Opt,{}),(0,Wd.jsxs)(jpt,{children:[(0,Wd.jsx)("p",{children:"Once submitted, you will start nominating your chosen validators."}),(0,Wd.jsxs)("p",{children:["Estimated Tx Fee:"," ",null===f?"...":`${f}`]})]}),(0,Wd.jsx)(Npt,{children:(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("button",{type:"button",className:"submit",onClick:()=>d(),disabled:!u||p||m.length||!r(n),children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:iv}),"Submit"]})})})]})]})},Xmt=ln.div`
  width: 100%;
  box-sizing: border-box;
`,Zmt=()=>{const{api:t,network:e}=IJ(),{units:n}=e,{setStatus:r,config:i,setResize:o}=Bct(),{id:a,setActiveTab:s}=i,{activeAccount:l,accountHasSigner:u}=rtt(),{getBondOptions:c}=ftt(),{freeToBond:h}=c(l),[d,f]=(0,k.useState)({bond:rf(h,n)}),[p,m]=(0,k.useState)(!0);(0,k.useEffect)((()=>{o()}),[d]);const{submitTx:g,estimatedFee:y,submitting:v}=vft({tx:(()=>{let e=null;if(!p)return e;const r=of(d.bond,n);return e=t.tx.nominationPools.join(r,a),e})(),from:l,shouldSubmit:p,callbackSubmit:()=>{r(0),s(0)},callbackInBlock:()=>{}}),b=(0,Wd.jsxs)("p",{children:["Estimated Tx Fee: ",null===y?"...":`${y}`]}),w=[];return u(l)||w.push("Your account is read only, and cannot sign transactions."),(0,Wd.jsxs)(Xmt,{children:[(0,Wd.jsx)("div",{children:(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(uft,{bondType:"pool",unbond:!1,listenIsValid:m,defaultBond:rf(h,n),setters:[{set:f,current:d}],warnings:w}),(0,Wd.jsx)(jpt,{children:b})]})}),(0,Wd.jsx)(Npt,{children:(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("button",{type:"button",className:"submit",onClick:()=>g(),disabled:v||!p||!u(l),children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:iv}),"Submit",v&&"ting"]})})})]})},Ymt=()=>(0,Wd.jsxs)(Tpt,{children:[(0,Wd.jsxs)(Apt,{children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:Ny}),"Join Pool"]}),(0,Wd.jsx)(Zmt,{})]}),Kmt=()=>(0,Wd.jsxs)(Tpt,{children:[(0,Wd.jsxs)(Apt,{noPadding:!0,children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:Ny}),"Leave Pool"]}),(0,Wd.jsx)(Cmt,{})]}),Gmt=ln.div`
  width: 100%;
  box-sizing: border-box;
`,Jmt=()=>{const{api:t}=IJ(),{setStatus:e,config:n}=Bct(),{state:r}=n,{activeAccount:i,accountHasSigner:o}=rtt(),{membership:a}=jtt(),{isOwner:s}=Ett(),l=null===a||void 0===a?void 0:a.poolId,[u,c]=(0,k.useState)(!1),h=a&&s();(0,k.useEffect)((()=>{c(h)}),[h]);const d=(()=>{let t,e;switch(r){case Hft.Destroy:t=(0,Wd.jsx)("h2",{children:"Destroying a Pool is Irreversible"}),e=(0,Wd.jsx)("p",{children:"Once you Destroy the pool, all members can be permissionlessly unbonded, and the pool can never be reopened."});break;case Hft.Open:t=(0,Wd.jsx)("h2",{children:"Submit Pool Unlock"}),e=(0,Wd.jsx)("p",{children:"Once you Unlock the pool new people can join the pool."});break;case Hft.Block:t=(0,Wd.jsx)("h2",{children:"Submit Pool Lock"}),e=(0,Wd.jsx)("p",{children:"Once you Lock the pool no one else can join the pool."});break;default:t=null,e=null}return{title:t,message:e}})(),{submitTx:f,estimatedFee:p,submitting:m}=vft({tx:(()=>{let e=null;if(!u)return e;switch(r){case Hft.Destroy:e=t.tx.nominationPools.setState(l,Hft.Destroy);break;case Hft.Open:e=t.tx.nominationPools.setState(l,Hft.Open);break;case Hft.Block:e=t.tx.nominationPools.setState(l,Hft.Block);break;default:e=null}return e})(),from:i,shouldSubmit:!0,callbackSubmit:()=>{e(0)},callbackInBlock:()=>{}}),g=(0,Wd.jsxs)("p",{children:["Estimated Tx Fee: ",null===p?"...":`${p}`]});return(0,Wd.jsxs)(Gmt,{children:[!o(i)&&(0,Wd.jsx)(lft,{text:"Your account is read only, and cannot sign transactions."}),(0,Wd.jsx)("div",{children:(0,Wd.jsxs)(Wd.Fragment,{children:[d.title,(0,Wd.jsx)(Dc,{}),(0,Wd.jsxs)(jpt,{children:[d.message,g]})]})}),(0,Wd.jsxs)(Npt,{children:[(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("button",{type:"button",className:"submit",onClick:()=>e(0),disabled:m,children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:cv}),"Cancel"]})}),(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("button",{type:"button",className:"submit",onClick:()=>f(),disabled:m||!o(i),children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:iv}),"Submit",m&&"ting"]})})]})]})},Qmt=()=>{const{config:t}=Bct(),{state:e}=t;let n,r;switch(e){case Hft.Open:n="Unlock Pool",r=qy;break;case Hft.Block:n="Lock Pool",r=My;break;default:n="Destroy Pool",r=cv}return(0,Wd.jsxs)(Tpt,{children:[(0,Wd.jsxs)(Apt,{noPadding:!0,children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:r}),n]}),(0,Wd.jsx)(Jmt,{})]})},_mt=new RegExp("(\\d+?)(?=(\\d{3})+(?!\\d)|$)","g");function $mt(t){const e=t[0].startsWith("-"),n=e?t.substring(1).match(_mt):t.match(_mt);return n?`${e?"-":""}${n.join(",")}`:t}const tgt=[{power:-24,text:"yocto",value:"y"},{power:-21,text:"zepto",value:"z"},{power:-18,text:"atto",value:"a"},{power:-15,text:"femto",value:"f"},{power:-12,text:"pico",value:"p"},{power:-9,text:"nano",value:"n"},{power:-6,text:"micro",value:"\xb5"},{power:-3,text:"milli",value:"m"},{power:0,text:"Unit",value:"-"},{power:3,text:"Kilo",value:"k"},{power:6,text:"Mill",value:"M"},{power:9,text:"Bill",value:"B"},{power:12,text:"Tril",value:"T"},{power:15,text:"Peta",value:"P"},{power:18,text:"Exa",value:"E"},{power:21,text:"Zeta",value:"Z"},{power:24,text:"Yotta",value:"Y"}];function egt(t){for(let e=0;e<tgt.length;e++)if(tgt[e].value===t)return tgt[e];return tgt[8]}function ngt(t,e,n){if(n)return egt(n);const r=7+Math.ceil((t.length-e)/3);return tgt[r]||tgt[r<0?0:tgt.length-1]}const rgt=tgt[8].text;let igt=0,ogt=rgt;function agt(t,e,n,r){const i=h$(r)?tgt[8].text:r;return e||n?"-"===t.value?r?` ${i}`:"":` ${n?`${t.text}${r?" ":""}`:t.value}${r?i:""}`:""}function sgt(t,e,n){const r=ngt(t,e,n),i=t.length-(e+r.power);return[r,t.substring(0,i)||"0",`${`${new Array((i<0?0-i:0)+1).join("0")}${t}`.substring(i<0?0:i)}0000`.substring(0,4)]}const lgt=function(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:igt,r=y$(t).toString();if(0===r.length||"0"===r)return"0";const{decimals:i=n,forceUnit:o,withSi:a=!0,withSiFull:s=!1,withUnit:l=!0}=h$(e)?{withSi:e}:e;let u="";r[0].startsWith("-")&&(u="-",r=r.substring(1));const[c,h,d]=sgt(r,i,o),f=agt(c,a,s,l);return`${u}${$mt(h)}.${d}${f}`};lgt.calcSi=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:igt;return ngt(t,e)},lgt.findSi=egt,lgt.getDefaults=()=>({decimals:igt,unit:ogt}),lgt.getOptions=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:igt;return tgt.filter((e=>{let{power:n}=e;return!(n<0)||t+n>=0}))},lgt.setDefaults=t=>{let{decimals:e,unit:n}=t;igt=HJ(e)?igt:Array.isArray(e)?e[0]:e,ogt=HJ(n)?ogt:Array.isArray(n)?n[0]:n,tgt[8].text=ogt};const ugt=()=>{const{api:t,network:e}=IJ(),{setStatus:n}=Bct(),{activeBondedPool:r}=Ett(),{activeAccount:i,accountHasSigner:o}=rtt(),{units:a,unit:s}=e,{unclaimedReward:l}=r||{};(0,k.useEffect)((()=>{null!==l&&void 0!==l&&l.gtn(0)?c(!0):c(!1)}),[r]);const[u,c]=(0,k.useState)(!1),{submitTx:h,estimatedFee:d,submitting:f}=vft({tx:(()=>{let e=null;return t?(e=t.tx.nominationPools.claimPayout(),e):e})(),from:i,shouldSubmit:u,callbackSubmit:()=>{n(0)},callbackInBlock:()=>{}});return(0,Wd.jsxs)(Tpt,{verticalOnly:!0,children:[(0,Wd.jsxs)(Apt,{children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:ev}),"Claim Payout"]}),(0,Wd.jsxs)("div",{style:{padding:"0 1rem",width:"100%",boxSizing:"border-box"},children:[!o(i)&&(0,Wd.jsx)(lft,{text:"Your account is read only, and cannot sign transactions."}),!(null!==l&&void 0!==l&&l.gtn(0))&&(0,Wd.jsx)(lft,{text:"You have no rewards to claim."}),(0,Wd.jsx)("h2",{children:lgt(l,{decimals:a,withSiFull:!0,withUnit:s})}),(0,Wd.jsx)(Opt,{}),(0,Wd.jsx)("div",{className:"notes",children:(0,Wd.jsxs)("p",{children:["Estimated Tx Fee:"," ",null===d?"...":`${d}`]})}),(0,Wd.jsx)(Npt,{children:(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("button",{type:"button",className:"submit",onClick:()=>h(),disabled:!u||f||!o(i),children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:iv}),"Submit"]})})})]})]})},cgt=ln.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;

  > div {
    width: 100%;
  }
`,hgt=ln.div`
  position: relative;
  bottom: 0px;
  left: 0px;
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  button {
    font-size: 1.2rem;
    color: ${Ac};

    &:disabled {
      opacity: 0.5;
      color: ${_u};
    }
  }
`,dgt=()=>{const{consts:t}=IJ(),{config:e,setStatus:n,setResize:r}=Bct(),{favouritesList:i}=ztt(),{maxNominations:o}=t,{nominations:a,callback:s}=e,[l,u]=(0,k.useState)([]),[c,h]=(0,k.useState)([]);(0,k.useEffect)((()=>{const t=i.filter((t=>!a.find((e=>e.address===t.address))&&!t.prefs.blocked));u(t)}),[]),(0,k.useEffect)((()=>{r()}),[c]);const d=a.length+c.length>o;return(0,Wd.jsxs)(Tpt,{children:[(0,Wd.jsx)("h2",{children:"Add From Favourites"}),(0,Wd.jsx)(cgt,{children:l.length>0?(0,Wd.jsx)(Cht,{validators:l,batchKey:"favourite_validators",title:"Favourite Validators",selectable:!0,selectActive:!0,selectToggleable:!1,onSelected:t=>{const{selected:e}=t;h(e)},refetchOnListUpdate:!0,showMenu:!1,inModal:!0}):(0,Wd.jsx)("h3",{children:"No Favourites Available."})}),(0,Wd.jsx)(hgt,{children:(0,Wd.jsx)("button",{type:"button",disabled:!c.length||d,onClick:()=>(()=>{if(!c.length)return;const t=[...a].concat(...c);s(t),n(0)})(),children:c.length>0?d?`Adding this many favourites will surpass ${o} nominations.`:`Add ${c.length} Favourite${1!==c.length?"s":""} to Nominations`:"No Favourites Selected"})})]})},fgt=ln.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;

  > div {
    width: 100%;
  }
`,pgt=(ln.div`
  position: relative;
  bottom: 0px;
  left: 0px;
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  button {
    font-size: 1.2rem;
    color: ${Ac};

    &:disabled {
      opacity: 0.5;
      color: ${_u};
    }
  }
`,()=>{const{consts:t,api:e}=IJ(),{activeAccount:n,accountHasSigner:r}=rtt(),{getBondedAccount:i}=ftt(),{config:o,setStatus:a,setResize:s}=Bct(),{favouritesList:l}=ztt(),{isNominator:u,isOwner:c}=Ett(),h=i(n),{membership:d}=jtt(),{maxNominations:f}=t,{bondType:p,nominations:m}=o,g="pool"===p?n:h,[y,v]=(0,k.useState)([]),[b,w]=(0,k.useState)([]);(0,k.useEffect)((()=>{const t=l.filter((t=>!m.find((e=>e===t.address))&&!t.prefs.blocked));v(t)}),[]);const x=m.concat(b.map((t=>t.address))),[M,S]=(0,k.useState)(!1);(0,k.useEffect)((()=>{s()}),[b]),(0,k.useEffect)((()=>{S(x.length>0&&x.length<=f&&b.length>0)}),[b]);const C=m.length+b.length>f,{submitTx:P,estimatedFee:T,submitting:A}=vft({tx:(()=>{let t=null;if(!M||!e)return t;const n=x.map((t=>"pool"===p?t:{Id:t}));return t="pool"===p?e.tx.nominationPools.nominate(null===d||void 0===d?void 0:d.poolId,n):e.tx.staking.nominate(n),t})(),from:g,shouldSubmit:M,callbackSubmit:()=>{a(0)},callbackInBlock:()=>{}});return(0,Wd.jsxs)(Tpt,{children:[(0,Wd.jsx)("h2",{children:"Nominate From Favourites"}),(0,Wd.jsx)("div",{style:{marginBottom:"1rem"},children:!r(g)&&(0,Wd.jsx)(lft,{text:`You must have your${"stake"===p?" controller":" "}account imported to add nominations.`})}),(0,Wd.jsx)(fgt,{children:y.length>0?(0,Wd.jsx)(Cht,{validators:y,batchKey:"nominate_from_favourites",title:"Favourite Validators / Not Nominated",selectable:!0,selectActive:!0,selectToggleable:!1,onSelected:t=>{const{selected:e}=t;w(e)},refetchOnListUpdate:!0,showMenu:!1,inModal:!0}):(0,Wd.jsx)("h3",{children:"No Favourites Available."})}),(0,Wd.jsx)(jpt,{style:{paddingBottom:0},children:(0,Wd.jsxs)("p",{style:{textAlign:"right"},children:["Estimated Tx Fee: ",null===T?"...":`${T}`]})}),(0,Wd.jsxs)(Npt,{children:[(0,Wd.jsx)("h3",{className:0===b.length||x.length>f?"":"active",children:b.length>0?C?`Adding this many favourites will surpass ${f} nominations.`:`Adding ${b.length} Nomination${1!==b.length?"s":""}`:"No Favourites Selected"}),(0,Wd.jsx)("div",{children:(0,Wd.jsxs)("button",{type:"button",className:"submit",onClick:()=>P(),disabled:!M||A||"pool"===p&&!u()&&!c()||!r(g),children:[(0,Wd.jsx)(Fg,{transform:"grow-2",icon:ly}),"Submit"]})})]})]})}),mgt=()=>{const{setModalHeight:t,setStatus:e,status:n,modal:r,size:i,height:o,resize:a}=Bct(),s=function(){var t=qn(kpt);return(0,k.useEffect)(t.mount,[]),t}(),l=.8*window.innerHeight,u=async()=>{await s.start("hidden"),e(0)};(0,k.useEffect)((()=>{1===n&&(async()=>{await s.start("visible")})(),2===n&&u()}),[n]);const c=(0,k.useRef)(null);(0,k.useEffect)((()=>{h()}),[a]);const h=()=>{var e;let n=null===(e=c.current)||void 0===e?void 0:e.clientHeight;n=n>l?l:n,t(n)};return 0===n?(0,Wd.jsx)(Wd.Fragment,{}):(0,Wd.jsx)(Spt,{initial:{opacity:0},animate:s,transition:{duration:.15},variants:{hidden:{opacity:0},visible:{opacity:1}},children:(0,Wd.jsxs)("div",{className:"content_wrapper",children:[(0,Wd.jsx)(Cpt,{size:i,style:{height:o,overflow:o>=l?"scroll":"hidden"},children:(0,Wd.jsxs)(Ppt,{ref:c,children:["ConnectAccounts"===r&&(0,Wd.jsx)(rmt,{}),"ValidatorMetrics"===r&&(0,Wd.jsx)(omt,{}),"Settings"===r&&(0,Wd.jsx)(mmt,{}),"UpdateController"===r&&(0,Wd.jsx)(dmt,{}),"UpdateBond"===r&&(0,Wd.jsx)(Tmt,{}),"UpdatePayee"===r&&(0,Wd.jsx)(Omt,{}),"ChangeNominations"===r&&(0,Wd.jsx)(jmt,{}),"Nominate"===r&&(0,Wd.jsx)(Vmt,{}),"UnlockChunks"===r&&(0,Wd.jsx)(Dmt,{}),"CreatePool"===r&&(0,Wd.jsx)(Wmt,{}),"NominatePool"===r&&(0,Wd.jsx)(qmt,{}),"JoinPool"===r&&(0,Wd.jsx)(Ymt,{}),"LeavePool"===r&&(0,Wd.jsx)(Kmt,{}),"ChangePoolState"===r&&(0,Wd.jsx)(Qmt,{}),"ClaimReward"===r&&(0,Wd.jsx)(ugt,{}),"SelectFavourites"===r&&(0,Wd.jsx)(dgt,{}),"NominateFromFavourites"===r&&(0,Wd.jsx)(pgt,{})]})}),(0,Wd.jsx)("button",{type:"button",className:"close",onClick:()=>{u()},children:"\xa0"})]})})},ggt=k.createContext({openSideBar:()=>{},closeSideBar:()=>{},open:0}),ygt=()=>k.useContext(ggt),vgt=ln(Fu.div)`
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
`,bgt=ln.div`
  background: ${xc};
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
`,wgt=ln.div`
  display: flex;
  margin-left: 1rem;

  @media (min-width: ${1001}px) {
    display: none;
  }
`,xgt=t=>{let{children:e}=t;const{closeSideBar:n,open:r}=ygt(),i=(0,k.useRef)(null);Zd(i,(()=>{n()}),["ignore-toggle-side-bar"]),(0,k.useEffect)((()=>(window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)})),[]);const o=qtt()((()=>{window.innerWidth>=St&&n()}),200,{trailing:!0,leading:!1}),a=r?"visible":"hidden";return(0,Wd.jsx)(vgt,{ref:i,initial:!1,animate:a,transition:{duration:.5,type:"spring",bounce:.2},variants:{hidden:{opacity:1,right:"-600px"},visible:{opacity:1,right:"0px"}},children:(0,Wd.jsx)(bgt,{children:e})})},Mgt=ln.div`
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
    background: ${ec};
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
`,kgt=()=>(0,Wd.jsx)(Mgt,{}),Sgt=ln.div`
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
    @media (max-width: ${Mt}px) {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;
      flex-grow: 1;
    }
  }
`,Cgt=ln.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  margin-left: 0.75rem;

  /* accounts dropdown */
  .accounts {
    background: ${oc};
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
`,Pgt=ln(Fu.button)`
  background: ${fc};
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
    border: 0.125rem solid ${Ac};
    border-radius: 0.8rem;
    color: ${Ac};
    font-size: 0.85rem;
    font-variation-settings: 'wght' 525;
    margin-right: 0.6rem;
    padding: 0.1rem 0.5rem;
  }

  > span {
    color: ${Qu};
    line-height: 2.2rem;
  }
  &.connect {
    background: ${Ac};
    > span {
      color: ${$u};
      svg {
        color: white;
      }
    }
    .icon {
      margin-right: 0.4rem;
      path {
        fill: ${$u};
      }
    }
  }
  path {
    fill: ${Qu};
  }
`,Tgt=(ln(Fu.div)`
  flex-grow: 1;
  padding: 0 1rem;
  border-radius: 1rem;
  background: ${fc};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-variation-settings: 'wght' 540;
  font-size: 1rem;

  > span {
    color: ${Qu};
    line-height: 2.2rem;
  }
`,ln.div`
  display: flex;
  @media (max-width: ${St}px) {
    display: none;
  }
`);var Agt,Ngt;function Ogt(){return Ogt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ogt.apply(this,arguments)}function jgt(t,e){let{title:n,titleId:r,...i}=t;return k.createElement("svg",Ogt({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 508.043 508.043",width:"100%",height:"100%",ref:e,"aria-labelledby":r},i),n?k.createElement("title",{id:r},n):null,Agt||(Agt=k.createElement("path",{d:"M465.771 110.943h-18.5v-96.8c0-4.4-2.1-8.6-5.6-11.3s-8.1-3.5-12.4-2.3l-391.2 110.6c-21.3 2.2-38 20.2-38 42.1v312.4c0 23.4 19 42.4 42.3 42.4h423.3c23.3 0 42.3-19 42.3-42.3v-312.5c.1-23.3-18.9-42.3-42.2-42.3zm-46.7-78.1v78.1h-276.4l276.4-78.1zm60.7 432.8c.1 7.8-6.3 14.2-14 14.2h-423.4c-7.8 0-14.1-6.3-14.1-14.1v-115.5h25.2c7.8 0 14.1-6.3 14.1-14.1s-6.3-14.1-14.1-14.1h-25.2v-25.1h58.5c7.8 0 14.1-6.3 14.1-14.1s-6.3-14.1-14.1-14.1h-58.5v-115.5c0-7.8 6.3-14.1 14.1-14.1h423.3c7.8 0 14.1 6.3 14.1 14.1v88.8h-66.6c-37.2 0-67.4 30.2-67.4 67.4s30.2 67.4 67.4 67.4h66.6v88.8zm.1-116.9h-66.6c-21.6 0-39.2-17.6-39.2-39.2s17.6-39.2 39.2-39.2h66.6v78.4z"})),Ngt||(Ngt=k.createElement("path",{d:"M409.071 295.343h-1.4c-7.8 0-14.1 6.3-14.1 14.1s6.3 14.1 14.1 14.1h1.4c7.8 0 14.1-6.3 14.1-14.1s-6.3-14.1-14.1-14.1z"})))}const Vgt=k.forwardRef(jgt),Egt=(__webpack_require__.p,()=>{const{activeAccount:t}=rtt(),{openSideBar:e,open:n}=ygt(),r={flex:0},i=(0,Wd.jsx)("div",{style:{width:"1rem",height:"1rem",padding:"0.6rem 0",marginRight:"0.75rem"},children:(0,Wd.jsx)(Vgt,{})});return(0,Wd.jsxs)(wgt,{children:[!n&&t&&(0,Wd.jsxs)(Pgt,{style:r,onClick:()=>{e()},whileHover:{scale:"1.01"},children:[i," Wallet"]}),n?(0,Wd.jsxs)(Pgt,{style:r,children:[i," Wallet"]}):(0,Wd.jsx)(Wd.Fragment,{})]})}),Igt=()=>{const{openModalWith:t}=Bct(),{activeAccount:e,accounts:n}=rtt();return(0,Wd.jsx)(Wd.Fragment,{children:!e&&(0,Wd.jsx)(Cgt,{children:(0,Wd.jsxs)(Pgt,{className:"connect",onClick:()=>{t("ConnectAccounts",{section:n.length?1:0},"large")},whileHover:{scale:1.02},children:[(0,Wd.jsx)(Fg,{icon:ev,className:"icon"}),(0,Wd.jsx)("span",{children:"Connect"})]})})})},zgt=ln(Fu.button)`
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
    border-right: 1px solid ${vc};
    color: ${_u};
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
    color: ${Qu};
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
      color: ${_u};
      opacity: 0.45;
    }
  }

  .wallet {
    width: 1em;
    height: 1em;
    margin-left: 0.8rem;
    opacity: 0.8;

    path {
      fill: ${Qu};
    }
  }
`,Lgt=t=>{var e,n,r,i;const{mode:o}=yf(),{isReady:a}=IJ(),{activeAccount:s}=rtt(),{fetchPoolsMetaBatch:l,meta:u}=Ntt(),{label:c}=t,[h,d]=(0,k.useState)(!1),f="pool_header";(0,k.useEffect)((()=>{d(!1)}),[s,t.pool]),(0,k.useEffect)((()=>{a&&(d(!0),h||p())}),[a,h]);const p=()=>{const e=[{id:t.pool.id}];l(f,e,!0)},m=null!==(e=t.filled)&&void 0!==e&&e,g=null!==(n=t.fontSize)&&void 0!==n?n:"0.95rem",y=null!==(r=t.wallet)&&void 0!==r&&r,{canClick:v}=t,b=u[f],w=null===b||void 0===b||null===(i=b.metadata)||void 0===i?void 0:i[0],x=void 0===w,M=tf(t.pool.addresses.stash);let S=x?"Syncing...":null!==w&&void 0!==w?w:M;const C=lQ(A1(S));return""!==C&&(S=C),""===S&&(S=M),(0,Wd.jsxs)(zgt,{whileHover:{scale:1.01},onClick:t.onClick,cursor:v?"pointer":"default",fill:m?Xu.buttons.secondary.background[o]:"none",fontSize:g,children:[void 0!==c&&(0,Wd.jsx)("div",{className:"account-label",children:c}),(0,Wd.jsx)("span",{className:"identicon",children:(0,Wd.jsx)(Wnt,{value:t.pool.addresses.stash,size:1.45*ef(g)})}),(0,Wd.jsx)("span",{className:"title"+(!0===x?" syncing":""),children:S}),y&&(0,Wd.jsx)("div",{className:"wallet",children:(0,Wd.jsx)(Vgt,{})})]})},Rgt=ln(Fu.button)`
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
    border-right: 1px solid ${vc};
    color: ${_u};
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
      color: ${_u};
    }
  }

  .title {
    color: ${Qu};
    margin-left: 0.25rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 2.2rem;
    flex: 1;
    /* flex-grow: 1; */
    /* flex-shrink: 1; */

    &.unassigned {
      color: ${_u};
      opacity: 0.45;
    }
  }

  .wallet {
    width: 1em;
    height: 1em;
    margin-left: 0.8rem;
    opacity: 0.8;

    path {
      fill: ${Qu};
    }
  }
`,Hgt=t=>{var e,n,r;const{mode:i}=yf(),{getAccount:o}=rtt(),{value:a,label:s,readOnly:l}=t,{format:u}=t,c=null!==(e=t.filled)&&void 0!==e&&e,h=null!==(n=t.fontSize)&&void 0!==n?n:"0.95rem",d=null!==(r=t.wallet)&&void 0!==r&&r,{canClick:f}=t,p=null===a||void 0===a||!a.length;let m;switch(u){case"name":var g;if(""!==a)m=null===(g=o(a))||void 0===g?void 0:g.name;else m=tf(a);break;case"text":m=a;break;default:a&&(m=tf(a))}return void 0!==t.title&&(m=t.title),(0,Wd.jsxs)(Rgt,{whileHover:{scale:1.01},onClick:t.onClick,cursor:f?"pointer":"default",fill:c?Xu.buttons.secondary.background[i]:"none",fontSize:h,children:[void 0!==s&&(0,Wd.jsxs)("div",{className:"account-label",children:[s," ",l&&(0,Wd.jsxs)(Wd.Fragment,{children:["\xa0",(0,Wd.jsx)(Fg,{icon:by})]})]}),p?(0,Wd.jsx)("span",{className:"title unassigned",children:"Not Staking"}):(0,Wd.jsxs)(Wd.Fragment,{children:["text"!==u&&(0,Wd.jsx)("span",{className:"identicon",children:(0,Wd.jsx)(Wnt,{value:a,size:1.45*ef(h)})}),(0,Wd.jsx)("span",{className:"title",children:m||tf(a)})]}),d&&(0,Wd.jsx)("div",{className:"wallet",children:(0,Wd.jsx)(Vgt,{})})]})},Bgt=()=>{const{activeAccount:t,accounts:e,accountHasSigner:n}=rtt(),{openModalWith:r}=Bct(),{hasController:i,getControllerNotImported:o}=btt(),{getBondedAccount:a}=ftt(),s=a(t),{activeBondedPool:l}=Ett(),{isSyncing:u}=Rtt();let c="";if(void 0!==l){const{addresses:t}=l;c=t.stash}const h=u?void 0:i()?"Stash":void 0;return(0,Wd.jsx)(Wd.Fragment,{children:t&&(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(Cgt,{children:(0,Wd.jsx)(Hgt,{canClick:!0,onClick:()=>{r("ConnectAccounts",{section:e.length?1:0},"large")},value:t,readOnly:!n(t),label:h,format:"name",filled:!0,wallet:!0})}),i()&&!u&&(0,Wd.jsx)(Cgt,{children:(0,Wd.jsx)(Hgt,{value:null!==s&&void 0!==s?s:"",readOnly:!n(s),title:o(s)?s?tf(s):"Not Imported":void 0,format:"name",label:"Controller",canClick:i(),onClick:()=>{i()&&r("UpdateController",{},"large")},filled:!0})}),void 0!==l&&!u&&(0,Wd.jsx)(Cgt,{children:(0,Wd.jsx)(Lgt,{value:c,pool:l,label:"Pool",canClick:!1,onClick:()=>{},filled:!0})})]})})},Dgt=()=>{const{setSideMenu:t,sideMenuOpen:e}=Rtt();return(0,Wd.jsx)("div",{className:"menu",children:(0,Wd.jsx)(Pgt,{style:{width:"50px",flex:0},onClick:()=>{t(e?0:1)},children:(0,Wd.jsx)("span",{children:(0,Wd.jsx)(Fg,{icon:Xg,style:{cursor:"pointer"}})})})})},Fgt=()=>{const{pathname:t}=yh(),e=_nt(),{activeAccount:n}=rtt(),{validators:r}=ztt(),{pending:i}=yft(),{isSyncing:o}=Rtt();let a=o;return"validators"===hf(t)&&(r.length||(a=!0)),(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(xgt,{children:(0,Wd.jsx)(Bgt,{})}),(0,Wd.jsxs)(Sgt,{children:[(0,Wd.jsx)(Dgt,{}),a||i.length>0?(0,Wd.jsx)(kgt,{}):(0,Wd.jsx)(Wd.Fragment,{}),(0,Wd.jsx)(Egt,{}),(0,Wd.jsx)(Tgt,{children:(0,Wd.jsx)(Bgt,{})}),(0,Wd.jsx)(Igt,{}),(0,Wd.jsx)(Cgt,{children:(0,Wd.jsxs)(Pgt,{onClick:()=>{e.toggle()},whileHover:{scale:1.02},children:[!n&&(0,Wd.jsx)("div",{className:"label",children:"1"}),(0,Wd.jsx)("span",{children:"Assistant"})]})})]})]})};var Ugt;function Wgt(){return Wgt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wgt.apply(this,arguments)}function qgt(t,e){let{title:n,titleId:r,...i}=t;return k.createElement("svg",Wgt({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:e,"aria-labelledby":r},i),void 0===n?k.createElement("title",{id:r},"Cog"):n?k.createElement("title",{id:r},n):null,Ugt||(Ugt=k.createElement("path",{d:"M456.7 242.27l-26.08-4.2a8 8 0 01-6.6-6.82c-.5-3.2-1-6.41-1.7-9.51a8.08 8.08 0 013.9-8.62l23.09-12.82a8.05 8.05 0 003.9-9.92l-4-11a7.94 7.94 0 00-9.4-5l-25.89 5a8 8 0 01-8.59-4.11q-2.25-4.2-4.8-8.41a8.16 8.16 0 01.7-9.52l17.29-19.94a8 8 0 00.3-10.62l-7.49-9a7.88 7.88 0 00-10.5-1.51l-22.69 13.63a8 8 0 01-9.39-.9c-2.4-2.11-4.9-4.21-7.4-6.22a8 8 0 01-2.5-9.11l9.4-24.75A8 8 0 00365 78.77l-10.2-5.91a8 8 0 00-10.39 2.21l-16.64 20.84a7.15 7.15 0 01-8.5 2.5s-5.6-2.3-9.8-3.71A8 8 0 01304 87l.4-26.45a8.07 8.07 0 00-6.6-8.42l-11.59-2a8.07 8.07 0 00-9.1 5.61l-8.6 25.05a8 8 0 01-7.79 5.41h-9.8a8.07 8.07 0 01-7.79-5.41l-8.6-25.05a8.07 8.07 0 00-9.1-5.61l-11.59 2a8.07 8.07 0 00-6.6 8.42l.4 26.45a8 8 0 01-5.49 7.71c-2.3.9-7.3 2.81-9.7 3.71-2.8 1-6.1.2-8.8-2.91l-16.51-20.34A8 8 0 00156.75 73l-10.2 5.91a7.94 7.94 0 00-3.3 10.09l9.4 24.75a8.06 8.06 0 01-2.5 9.11c-2.5 2-5 4.11-7.4 6.22a8 8 0 01-9.39.9L111 116.14a8 8 0 00-10.5 1.51l-7.49 9a8 8 0 00.3 10.62l17.29 19.94a8 8 0 01.7 9.52q-2.55 4-4.8 8.41a8.11 8.11 0 01-8.59 4.11l-25.89-5a8 8 0 00-9.4 5l-4 11a8.05 8.05 0 003.9 9.92L85.58 213a7.94 7.94 0 013.9 8.62c-.6 3.2-1.2 6.31-1.7 9.51a8.08 8.08 0 01-6.6 6.82l-26.08 4.2a8.09 8.09 0 00-7.1 7.92v11.72a7.86 7.86 0 007.1 7.92l26.08 4.2a8 8 0 016.6 6.82c.5 3.2 1 6.41 1.7 9.51a8.08 8.08 0 01-3.9 8.62L62.49 311.7a8.05 8.05 0 00-3.9 9.92l4 11a7.94 7.94 0 009.4 5l25.89-5a8 8 0 018.59 4.11q2.25 4.2 4.8 8.41a8.16 8.16 0 01-.7 9.52l-17.29 19.96a8 8 0 00-.3 10.62l7.49 9a7.88 7.88 0 0010.5 1.51l22.69-13.63a8 8 0 019.39.9c2.4 2.11 4.9 4.21 7.4 6.22a8 8 0 012.5 9.11l-9.4 24.75a8 8 0 003.3 10.12l10.2 5.91a8 8 0 0010.39-2.21l16.79-20.64c2.1-2.6 5.5-3.7 8.2-2.6 3.4 1.4 5.7 2.2 9.9 3.61a8 8 0 015.49 7.71l-.4 26.45a8.07 8.07 0 006.6 8.42l11.59 2a8.07 8.07 0 009.1-5.61l8.6-25a8 8 0 017.79-5.41h9.8a8.07 8.07 0 017.79 5.41l8.6 25a8.07 8.07 0 009.1 5.61l11.59-2a8.07 8.07 0 006.6-8.42l-.4-26.45a8 8 0 015.49-7.71c4.2-1.41 7-2.51 9.6-3.51s5.8-1 8.3 2.1l17 20.94A8 8 0 00355 439l10.2-5.91a7.93 7.93 0 003.3-10.12l-9.4-24.75a8.08 8.08 0 012.5-9.12c2.5-2 5-4.1 7.4-6.21a8 8 0 019.39-.9L401 395.66a8 8 0 0010.5-1.51l7.49-9a8 8 0 00-.3-10.62l-17.29-19.94a8 8 0 01-.7-9.52q2.55-4.05 4.8-8.41a8.11 8.11 0 018.59-4.11l25.89 5a8 8 0 009.4-5l4-11a8.05 8.05 0 00-3.9-9.92l-23.09-12.82a7.94 7.94 0 01-3.9-8.62c.6-3.2 1.2-6.31 1.7-9.51a8.08 8.08 0 016.6-6.82l26.08-4.2a8.09 8.09 0 007.1-7.92V250a8.25 8.25 0 00-7.27-7.73zM256 112a143.82 143.82 0 01139.38 108.12A16 16 0 01379.85 240H274.61a16 16 0 01-13.91-8.09l-52.1-91.71a16 16 0 019.85-23.39A146.94 146.94 0 01256 112zM112 256a144 144 0 0143.65-103.41 16 16 0 0125.17 3.47L233.06 248a16 16 0 010 15.87l-52.67 91.7a16 16 0 01-25.18 3.36A143.94 143.94 0 01112 256zm144 144a146.9 146.9 0 01-38.19-4.95 16 16 0 01-9.76-23.44l52.58-91.55a16 16 0 0113.88-8H379.9a16 16 0 0115.52 19.88A143.84 143.84 0 01256 400z"})))}const Xgt=k.forwardRef(qgt);__webpack_require__.p;var Zgt;function Ygt(){return Ygt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ygt.apply(this,arguments)}function Kgt(t,e){let{title:n,titleId:r,...i}=t;return k.createElement("svg",Ygt({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:e,"aria-labelledby":r},i),void 0===n?k.createElement("title",{id:r},"Logo Github"):n?k.createElement("title",{id:r},n):null,Zgt||(Zgt=k.createElement("path",{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"})))}const Ggt=k.forwardRef(Kgt),Jgt=(__webpack_require__.p,ln.div`
  background: none;
  border-radius: 0.7rem;
  padding: 1rem 0.5rem;
  overflow: auto;
  flex-grow: 1;
  margin: 0.75rem 0 3.35rem 1rem;
  display: flex;
  flex-flow: column nowrap;
  backdrop-filter: blur(4px);

  @media (max-width: ${Mt}px) {
    background: ${uc};
    transition: all 0.2s;
  }

  .close-menu {
    color: ${Qu};
    display: none;
    @media (max-width: ${Mt}px) {
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
        color: ${_u};
        transition: color 0.2s;
        margin-right: ${t=>t.minimised?0:"0.1rem"};
        margin-top: ${t=>t.minimised?"1.25rem":0};
        opacity: 0.75;

        path {
          fill: ${_u};
        }
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`),Qgt=ln(Fu.button)`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${t=>t.minimised?"center":"flex-start"};
  width: 100%;
  height: 2.4rem;
  padding: ${t=>t.minimised?"0":"0.4rem 0.5rem"};
  margin-bottom: ${t=>t.minimised?"1.5rem":"1rem"};

  ellipse {
    fill: ${Ac};
  }
`,_gt=ln.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${t=>t.minimised?"center":"flex-start"};
  opacity: ${t=>t.minimised?.5:1};
  align-items: center;

  h5 {
    color: ${_u};
    margin: 1.1rem 0 0.2rem 0;
    padding: 0 0.5rem;
    opacity: 0.7;
  }
`,$gt=ln(Fu.div)`
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
    background: ${cc};
  }
  &.inactive:hover {
    background: ${hc};
  }
`,tyt=ln(Fu.div)`
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
    background: ${cc};
  }
  &.inactive:hover {
    background: ${hc};
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
`,eyt=ln.div`
  position: absolute;
  right: 10px;
  top: -150px;
`,nyt=t=>{const{setSideMenu:e}=Rtt(),{name:n,active:r,to:i,icon:o,action:a,minimised:s}=t,l=s?tyt:$gt;return(0,Wd.jsx)(Oh,{to:i,onClick:()=>e(0),children:(0,Wd.jsxs)(l,{className:r?"active":"inactive",whileHover:{scale:1.02},whileTap:{scale:.98},transition:{duration:.1},children:[(0,Wd.jsx)("div",{className:"icon",children:o}),!s&&(0,Wd.jsx)("h3",{className:"name",children:n}),a&&(0,Wd.jsx)("div",{className:"action"+(s?" minimised":""),children:(0,Wd.jsx)(Fg,{icon:_g,color:"rgba(242, 185, 27,0.75)",transform:"shrink-3"})})]})})},ryt=t=>{const{title:e,minimised:n}=t;return(0,Wd.jsx)(_gt,{minimised:n,children:n?(0,Wd.jsx)("h5",{children:"\u2022"}):(0,Wd.jsx)("h5",{children:e})})},iyt=()=>{const{network:t}=IJ(),{openModalWith:e}=Bct(),{activeAccount:n,accounts:r}=rtt(),{pathname:i}=yh(),{getBondedAccount:o}=ftt(),{getControllerNotImported:a}=btt(),{setPalettePosition:s,open:l}=Qd(),u=o(n),{isSyncing:c,setSideMenu:h,sideMenuOpen:d,sideMenuMinimised:f,userSideMenuMinimised:p,setUserSideMenuMinimised:m}=Rtt(),g=a(u),[y,v]=(0,k.useState)({categories:Object.assign(dpt),pages:Object.assign(fpt)});(0,k.useEffect)((()=>(window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]);const b=qtt()((()=>{window.innerWidth>=Mt&&h(0)}),200,{trailing:!0,leading:!1});(0,k.useEffect)((()=>{if(r.length){const t=Object.assign(y.pages);for(let e=0;e<t.length;e++){const{uri:n}=t[e];n===`${dt}/stake`&&(t[e].action=!c&&g)}v({categories:y.categories,pages:t})}}),[t,n,r,g,c]);const w=(0,k.useRef)(null);Zd(w,(()=>{h(0)}));let x=Object.values(y.pages);t.features.pools||(x=x.filter((t=>"/pools"!==t.hash)));const M=(0,k.useRef)(null);return(0,Wd.jsxs)(Jgt,{ref:w,minimised:f,children:[(0,Wd.jsxs)("section",{children:[(0,Wd.jsx)("button",{type:"button",className:"close-menu",style:{fontVariationSettings:"'wght' 450",margin:"0.2rem 0 1rem 0",opacity:.7},onClick:()=>{h(d?0:1)},children:"Close"}),(0,Wd.jsx)(Qgt,{onClick:()=>{window.open("https://polkadot.network","_blank")},whileHover:{scale:1.02},whileTap:{scale:.98},minimised:f,children:f?(0,Wd.jsx)(t.icon,{style:{maxHeight:"100%",width:"2rem"}}):(0,Wd.jsx)(t.logo,{style:{maxHeight:"100%",height:"100%",width:"7rem"}})}),y.categories.map(((t,e)=>(0,Wd.jsxs)(k.Fragment,{children:["default"!==t.title&&(0,Wd.jsx)(ryt,{title:t.title,minimised:f}),x.map(((e,n)=>(0,Wd.jsx)(k.Fragment,{children:e.category===t._id&&(0,Wd.jsx)(nyt,{name:e.title,to:e.hash,active:e.hash===i,icon:(0,Wd.jsx)(Fg,{icon:e.icon}),action:e.action,minimised:f})},`sidemenu_page_${n}`)))]},`sidemenu_category_${e}`)))]}),(0,Wd.jsxs)("section",{children:[(0,Wd.jsx)("button",{type:"button",onClick:()=>m(p?0:1),children:(0,Wd.jsx)(Fg,{icon:p?Zy:gy,transform:"grow-3"})}),(0,Wd.jsx)("button",{type:"button",onClick:()=>window.open("https://github.com/rossbulat/polkadot-staking-experience","_blank"),children:(0,Wd.jsx)(Ggt,{width:"1.45rem",height:"1.45rem"})}),(0,Wd.jsx)("button",{type:"button",onClick:()=>e("Settings",{},"small"),children:(0,Wd.jsx)(Xgt,{width:"1.65rem",height:"1.65rem"})}),(0,Wd.jsxs)("button",{type:"button",onClick:()=>{l||s(M)},children:[(0,Wd.jsx)(eyt,{ref:M}),(0,Wd.jsx)(Fg,{icon:Cy,transform:"grow-5"})]})]})]})},oyt=ln(Fu.div)`
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
`,ayt=ln(Fu.div)`
  width: 200%;
  display: flex;
  flex-flow: row nowrap;
  overflow: auto;
  position: relative;
  flex: 1;
`,syt=ln.div`
  background: ${xc};
  backdrop-filter: blur(4px);
  border-radius: 1rem;
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 100%;
  margin: 0.75rem;
  overflow: hidden;
  max-height: 100%;
`,lyt=ln.div`
  transition: ${t=>t.transition?"height 0.4s cubic-bezier(0.1, 1, 0.2, 1)":"none"};
  width: 100%;
  max-height: 100%;
  overflow: auto;
  overflow-x: hidden;
`,uyt=ln(Fu.div)`
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 100%;
`,cyt=ln.div`
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
    color: ${Qu};
    font-size: 1rem;
    font-variation-settings: 'wght' 575;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;

    &.close {
      border: 1px solid ${Qu};
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
`,hyt=ln(Fu.div)`
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
    color: ${Qu};
  }
  h2 {
    color: ${Qu};
    padding: 0 0.75rem;
    margin: 0.5rem 0;
    width: 100%;
  }
  p {
    color: ${Qu};
  }
  .definition {
    color: ${Qu};
    padding: 0.75rem;
    line-height: 1.4rem;
    margin: 0;
  }
`,dyt=ln.div`
  width: 100%;
  padding: 0 0.6rem;
  > h4 {
    margin: 0.5rem 0 0;
    padding: 0.5rem 0;
    font-variation-settings: 'wght' 575;
    color: ${_u};
  }
`,fyt=ln(Fu.div)`
  width: 100%;
  display: flex;

  > button {
    background: ${Mc};
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
        color: ${Qu};
        font-size: 1rem;
        margin: 0;
        text-align: left;
      }
      > p {
        color: ${Qu};
        font-variation-settings: 'wght' 420;
        margin: 0.5rem 0 0 0;
        text-align: left;
      }
    }

    p.icon {
      opacity: 0.5;
    }
  }
`,pyt=ln(Fu.div)`
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
    background: ${Mc};
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
      color: ${Qu};
      font-weight: normal;
      margin: 0.65rem 0;
      text-transform: uppercase;
      font-size: 0.7rem;
    }
    > h3 {
      color: ${Qu};
      margin: 0;
      text-align: left;
    }

    > p {
      color: ${Qu};
      font-variation-settings: 'wght' 420;
      text-align: left;
    }

    .ext {
      position: absolute;
      bottom: 0.7rem;
      right: 0.7rem;
    }

    &.action {
      background: ${Ac};
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
`,myt=t=>{const{title:e}=t;return(0,Wd.jsx)(dyt,{children:(0,Wd.jsx)("h4",{children:e})})},gyt=t=>{const{onClick:e,title:n,description:r}=t,i=r[0].length>50?`${r[0].substring(0,50)}...`:r[0];return(0,Wd.jsx)(fyt,{children:(0,Wd.jsxs)(Fu.button,{className:"item",whileHover:{scale:1.01},whileTap:{scale:.99},transition:{duration:.5,type:"spring",bounce:.4},onClick:e,children:[(0,Wd.jsxs)("div",{children:[(0,Wd.jsx)("h3",{children:n}),(0,Wd.jsx)("p",{children:i})]}),(0,Wd.jsx)("div",{children:(0,Wd.jsx)("p",{className:"icon",children:(0,Wd.jsx)(Fg,{icon:Qg})})})]})})},yyt=t=>{const{width:e,height:n,subtitle:r,label:i,title:o,url:a}=t;return(0,Wd.jsx)(pyt,{width:`${e}%`,height:n||"auto",children:(0,Wd.jsxs)(Fu.button,{className:"item",whileHover:{scale:1.015},whileTap:{scale:.99},transition:{duration:.5,type:"spring",bounce:.4},onClick:()=>{window.open(a,"_blank")},children:[(0,Wd.jsx)("h4",{children:i}),(0,Wd.jsx)("h3",{children:o}),e>50&&(0,Wd.jsx)("p",{children:r}),(0,Wd.jsx)("p",{className:"icon",children:(0,Wd.jsx)(Fg,{icon:Ky,className:"ext"})})]})})},vyt=t=>{const{height:e,subtitle:n,label:r,title:i,onClick:o}=t;return(0,Wd.jsx)(pyt,{width:"100%",height:e,children:(0,Wd.jsxs)(Fu.button,{className:"item action",whileHover:{scale:1.015},whileTap:{scale:.99},transition:{duration:.5,type:"spring",bounce:.4},onClick:o,children:[(0,Wd.jsx)("h4",{children:r}),(0,Wd.jsx)("h3",{children:i}),(0,Wd.jsx)("p",{children:n})]})})},byt=t=>{var e,n;let{pageMeta:r}=t;const{openModalWith:i}=Bct(),{network:o}=IJ(),{activeAccount:a,accounts:s}=rtt(),{pathname:l}=yh(),u=_nt(),c=null!==(e=null===r||void 0===r?void 0:r.definitions)&&void 0!==e?e:[],h=null!==(n=null===r||void 0===r?void 0:r.external)&&void 0!==n?n:[];let d=0;const f=[66,34,100,50,50],p=u.innerDefinition,m=(0,k.useRef)(null),g=(0,k.useRef)(null);return(0,k.useEffect)((()=>{u.setAssistantHeight(0===u.activeSection?m.current.clientHeight:g.current.clientHeight)}),[u.activeSection,u.open,u.innerDefinition]),(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsxs)(uyt,{ref:m,style:{height:0===u.activeSection?"auto":0},children:[(0,Wd.jsx)(cyt,{children:(0,Wd.jsxs)("div",{className:"hold",children:[(0,Wd.jsxs)("h3",{children:[df(l,fpt)," Resources"]}),(0,Wd.jsx)("span",{children:(0,Wd.jsx)("button",{type:"button",className:"close",onClick:()=>{u.closeAssistant()},children:"Close"})})]})}),(0,Wd.jsxs)(hyt,{children:[!a&&(0,Wd.jsx)(vyt,{height:"120px",label:"next step",title:"Connect Wallet",subtitle:`Connect your ${o.name} accounts to start staking.`,onClick:()=>{u.toggle(),i("ConnectAccounts",{section:s.length?1:0},"large")}}),c.length>0&&(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(myt,{title:"Definitions"}),c.map(((t,e)=>(0,Wd.jsx)(gyt,{onClick:()=>{u.setInnerDefinition(t),u.setActiveSection(1)},title:t.title,description:t.description},`def_${e}`)))]}),h.length>0&&(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(myt,{title:"Articles"}),h.map(((t,e)=>{const n=(0,Wd.jsx)(yyt,{width:f[d],label:t.label,title:t.title,subtitle:t.subtitle,url:t.url},`ext_${e}`);return d=d>f.length-1?0:d+1,n}))]})]})]}),(0,Wd.jsxs)(uyt,{ref:g,style:{height:1===u.activeSection?"auto":0},children:[(0,Wd.jsx)(cyt,{children:(0,Wd.jsxs)("div",{className:"hold",children:[(0,Wd.jsxs)("button",{type:"button",onClick:()=>u.setActiveSection(0),children:[(0,Wd.jsx)(Fg,{icon:Jg,transform:"shrink-4",style:{cursor:"pointer",marginRight:"0.3rem"}})," ","Back"]}),(0,Wd.jsx)("span",{children:(0,Wd.jsx)("button",{type:"button",className:"close",onClick:()=>{u.closeAssistant()},children:"Close"})})]})}),(0,Wd.jsxs)(hyt,{children:[(0,Wd.jsx)("h2",{children:null===p||void 0===p?void 0:p.title}),null===p||void 0===p?void 0:p.description.map(((t,e)=>(0,Wd.jsx)("p",{className:"definition",children:t},`inner_def_${e}`)))]})]})]})},wyt=()=>{const t=_nt(),{pathname:e}=yh(),n=(0,k.useCallback)((()=>{t.setPage(hf(e))}),[e]);(0,k.useEffect)((()=>n()),[n]);const r=t.open===jJ.Open?"visible":"hidden",i=0===t.activeSection?"home":"item",o=Object.values(Jnt).find((e=>e.key===t.page)),a=(0,k.useRef)(null);return Zd(a,(()=>{t.closeAssistant()}),["ignore-assistant-outside-alerter"]),(0,Wd.jsx)(oyt,{ref:a,initial:!1,animate:r,transition:{duration:.5,type:"spring",bounce:.2},variants:{hidden:{opacity:1,right:"-600px"},visible:{opacity:1,right:"0px"}},children:(0,Wd.jsx)(syt,{children:(0,Wd.jsx)(lyt,{style:{height:t.height},transition:t.transition,children:(0,Wd.jsx)(ayt,{animate:i,transition:{duration:.5,type:"spring",bounce:.1},variants:{home:{left:0},item:{left:"-100%"}},children:(0,Wd.jsx)(byt,{pageMeta:o})})})})})},xyt=ln.ul`
  position: fixed;
  bottom: 20px;
  right: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: flex-end;
  z-index: 10;

  li {
    background: ${ec};
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
      color: ${Ac};
      box-sizing: border-box;
      margin: 0 0 0.5rem;
      font-variation-settings: 'wght' 500;
      flex: 1;
    }
    h5 {
      color: ${_u};
      box-sizing: border-box;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      flex: 1;
      max-width: 100%;
    }
  }
`,Myt=()=>{const{notifications:t,removeNotification:e}=Xnt();return(0,Wd.jsx)(xyt,{children:(0,Wd.jsx)(zh,{initial:!1,children:t.length>0&&t.map(((t,n)=>{const{item:r}=t;return(0,Wd.jsxs)(Fu.li,{layout:!0,initial:{opacity:0,y:50,scale:.3},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,scale:.5,y:50,transition:{duration:.2}},whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>e(r),children:[r.title&&(0,Wd.jsx)("h3",{children:r.title}),r.subtitle&&(0,Wd.jsx)("h5",{children:r.subtitle})]},`notification_${n}`)}))})})},kyt=()=>{const{network:t}=IJ(),{pathname:e}=yh(),{sideMenuOpen:n,sideMenuMinimised:r}=Rtt();return(0,k.useEffect)((()=>{window.scrollTo(0,0)}),[e,t]),(0,Wd.jsxs)(Wd.Fragment,{children:[(0,Wd.jsx)(mgt,{}),(0,Wd.jsxs)(jc,{children:[(0,Wd.jsx)(wyt,{}),(0,Wd.jsx)(Gd,{}),(0,Wd.jsx)(fv,{}),(0,Wd.jsx)(Vc,{open:n,minimised:r,children:(0,Wd.jsx)(iyt,{})}),(0,Wd.jsxs)(Ec,{children:[(0,Wd.jsx)(Fgt,{}),(0,Wd.jsx)(zh,{children:(0,Wd.jsxs)(Sh,{children:[fpt.map(((t,e)=>{const{Entry:n}=t;return(0,Wd.jsx)(Mh,{path:t.hash,element:(0,Wd.jsxs)(Ic,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.2},children:[(0,Wd.jsx)(Ud,{children:(0,Wd.jsx)("title",{children:`${t.title} : Polkadot Staking Dashboard`})}),(0,Wd.jsx)(n,{page:t})]},`main_interface_key__${e}`)},`main_interface_page_${e}`)})),(0,Wd.jsx)(Mh,{path:"*",element:(0,Wd.jsx)(xh,{to:"/overview"})},"main_interface_navigate")]})})]})]}),(0,Wd.jsx)(Mpt,{}),(0,Wd.jsx)(Myt,{})]})},Syt=()=>(0,Wd.jsx)(Nh,{basename:"/",children:(0,Wd.jsx)(kyt,{})}),Cyt=k.createContext({messages:[],setMessage:(t,e)=>{},removeMessage:t=>{},setMessages:t=>{},getMessage:t=>{}}),Pyt=()=>(0,Wd.jsx)(Oc,{children:(0,Wd.jsx)(Syt,{})}),Tyt=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return t=>n=>e.reduceRight(((t,e)=>{let n=e;return Array.isArray(e)?(n=e[0],(0,Wd.jsx)(n,{...e[1],children:t})):(0,Wd.jsx)(n,{children:t})}),(0,Wd.jsx)(t,{...n}))}((t=>{var e;let{children:n}=t;const[r,i]=(0,k.useState)(null),[o,a]=(0,k.useState)(null),s=null!==(e=localStorage.getItem("network"))&&void 0!==e?e:OJ.Polkadot,[l,u]=(0,k.useState)({name:s,meta:yt[localStorage.getItem("network")]}),[c,h]=(0,k.useState)(VJ),[d,f]=(0,k.useState)(NJ.Disconnected);(0,k.useEffect)((()=>{const t=localStorage.getItem("network");m(t)}),[]),(0,k.useEffect)((()=>{null!==r&&(r.on("connected",(()=>{f(NJ.Connected)})),r.on("error",(()=>{f(NJ.Disconnected)})),p(r))}),[r]);const p=async t=>{const e=new AJ({provider:t});await e.isReady,localStorage.setItem("network",String(l.name));const n=[e.consts.staking.bondingDuration,e.consts.staking.maxNominations,e.consts.staking.sessionsPerEra,e.consts.staking.maxNominatorRewardedPerValidator,e.consts.electionProviderMultiPhase.maxElectingVoters,e.consts.babe.expectedBlockTime,e.consts.balances.existentialDeposit];l.meta.features.pools&&n.push(e.consts.nominationPools.palletId);const r=await Promise.all(n),i=r[0]?Number(r[0].toString()):28,o=r[1]?Number(r[1].toString()):16,s=r[2]?Number(r[2].toString()):6,u=r[3]?Number(r[3].toString()):256,c=r[4]?Number(r[4].toString()):22500,d=r[5]?Number(r[5].toString()):6e3,f=r[6]?new($d())(r[6].toString()):new($d())(0),p=r[7]?r[7].toU8a():new Uint8Array(0);a(e),h({bondDuration:i,maxNominations:o,sessionsPerEra:s,maxNominatorRewardedPerValidator:u,maxElectingVoters:c,expectedBlockTime:d,poolsPalletId:p,existentialDeposit:f})},m=async t=>{const e=new vK(yt[t].endpoint);u({name:t,meta:yt[t]}),i(e)};return(0,Wd.jsx)(EJ.Provider,{value:{connect:m,fetchDotPrice:async()=>{const t=[`${At}${yt[l.name].api.priceTicker}`],e=await Promise.all(t.map((t=>fetch(t,{method:"GET"})))),n=(await Promise.all(e.map((t=>t.json()))))[0];if(void 0!==n.lastPrice&&void 0!==n.priceChangePercent){return{lastPrice:(Math.ceil(100*n.lastPrice)/100).toFixed(2),change:(Math.round(100*n.priceChangePercent)/100).toFixed(2)}}return null},switchNetwork:async t=>{null!==o&&(await o.disconnect(),a(null),f(NJ.Connecting),m(t))},api:o,consts:c,isReady:d===NJ.Connected&&null!==o,network:l.meta,status:d},children:n})}),(t=>{let{children:e}=t;const[n,r]=(0,k.useState)({status:0,modal:Rct,config:{},size:"large",height:0,resize:0});(0,k.useEffect)((()=>{i()}),[n.status]);const i=()=>{r({...n,resize:n.resize+1})};return(0,Wd.jsx)(Hct.Provider,{value:{status:n.status,setStatus:t=>{const e={...n,status:t,resize:n.resize+1,height:0===t?0:n.height};r(e)},openModalWith:function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"large";r({...n,modal:t,status:1,config:e,size:i,resize:n.resize+1})},setModalHeight:t=>{if(0===n.status)return;const e=.8*window.innerHeight;t=t>e?e:t,r({...n,height:t})},setResize:i,modal:n.modal,config:n.config,size:n.size,height:n.height,resize:n.resize},children:e})}),(t=>{let{children:e}=t;const{network:n}=IJ(),[r,i]=(0,k.useState)([]),o=(0,k.useRef)(r),[a,s]=(0,k.useState)(null),l=(0,k.useRef)(a),[u,c]=(0,k.useState)(null),h=(0,k.useRef)(u),[d,f]=(0,k.useState)(!1),[p,m]=(0,k.useState)([]),[g,y]=(0,k.useState)({}),v=(0,k.useRef)(g),[b,w]=(0,k.useState)([]),x=(0,k.useRef)(b);(0,k.useEffect)((()=>(p.length||m(ttt),()=>{const t=x.current;for(const e of t)e()}))),(0,k.useEffect)((()=>{const t=mf("active_extensions",[],!0);x.current.forEach((t=>{t()})),pf(null,s,l),pf([],i,o),pf(null,c,h),f(!1),p.length&&t.length?setTimeout((()=>S()),200):f(!0)}),[p,n]),(0,k.useEffect)((()=>{d&&M()}),[d]);const M=()=>{let t=V(!0);if(t.length){var e;const n=j(),r=null!==(e=t.find((t=>t.address===n)))&&void 0!==e?e:null;t=t.filter((t=>o.current.find((e=>e.address===t.address)))),r&&T(r);const a=[...o.current].concat(t);pf(a,i,o)}},S=async()=>{const t=new S2;t.setSS58Format(n.ss58);const e=j();let r=0;const a=p.length;let s=null;p.forEach((async n=>{r++;const{extensionName:u}=n,c=mf("active_extensions",[],!0);let h=!1;if(Array.isArray(c)&&(h=void 0!==c.find((t=>t===u))),h)try{const n=ett(u);if(void 0!==n){await n.enable(ft);const c=await n.subscribeAccounts((n=>{if(A(u,"connected"),N(u),void 0!==n&&n.length){var c;n.forEach((async e=>{const{address:n}=t.addFromAddress(e.address);return e.address=n,e}));const h=null!==(c=n.find((t=>t.address===e)))&&void 0!==c?c:null;null!==h&&(s=h),r===a&&null===l.current&&T(s);let d=[...o.current].filter((t=>(null===t||void 0===t?void 0:t.source)!==u));d=d.concat(n),pf(d,i,o)}}));pf([...x.current].concat(c),w,x)}}catch(d){C(u,String(d))}r===a&&f(!0)}))},C=(t,e)=>{"AuthError"===e.substring(0,9)&&(O(t),A(t,"not_authenticated")),"NotInstalledError"===e.substring(0,17)&&(O(t),A(t,"not_found")),"Error"===e.substring(0,5)&&A(t,"no_accounts")},P=t=>{null===t?localStorage.removeItem(`${n.name.toLowerCase()}_active_account`):localStorage.setItem(`${n.name.toLowerCase()}_active_account`,t),pf(t,s,l)},T=t=>{var e;P(null!==(e=null===t||void 0===t?void 0:t.address)&&void 0!==e?e:null),pf(t,c,h)},A=(t,e)=>{pf(Object.assign(v.current,{[t]:e}),y,v)},N=t=>{const e=mf("active_extensions",[],!0);Array.isArray(e)&&(e.includes(t)||(e.push(t),localStorage.setItem("active_extensions",JSON.stringify(e))))},O=t=>{let e=mf("active_extensions",[],!0);Array.isArray(e)&&(e=e.filter((e=>e!==t)),localStorage.setItem("active_extensions",JSON.stringify(e)))},j=()=>{const t=new S2;t.setSS58Format(n.ss58);let e=mf(`${n.name.toLowerCase()}_active_account`,null);return null!==e&&(e=t.addFromAddress(e).address),e},V=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=mf("external_accounts",[],!0);return t&&(e=e.filter((t=>t.network===n.name))),e};return(0,Wd.jsx)(ntt.Provider,{value:{connectExtensionAccounts:async t=>{const e=new S2;e.setSS58Format(n.ss58);const r=j();try{const n=ett(t);if(void 0!==n){await n.enable(ft);const a=await n.subscribeAccounts((n=>{if(A(t,"connected"),N(t),void 0!==n&&n.length){var a;n.forEach((async t=>{const{address:n}=e.addFromAddress(t.address);return t.address=n,t}));const s=null!==(a=n.find((t=>t.address===r)))&&void 0!==a?a:null;null!==s&&T(s);let l=[...o.current].filter((e=>(null===e||void 0===e?void 0:e.source)!==t));l=l.concat(n),pf(l,i,o)}}));pf([...x.current].concat(a),w,x)}}catch(a){C(t,String(a))}},getAccount:t=>{const e=o.current.filter((e=>(null===e||void 0===e?void 0:e.address)===t));return e.length?e[0]:null},connectToAccount:T,disconnectFromAccount:()=>{localStorage.removeItem(`${n.name.toLowerCase()}_active_account`),P(null),pf(null,c,h)},addExternalAccount:t=>{const e={address:t,network:n.name,name:tf(t),source:"external"},r=V(!1),a=r.find((e=>e.address===t&&e.network===n.name));if(!a){const t=r.concat(e);localStorage.setItem("external_accounts",JSON.stringify(t))}pf([...o.current].concat(e),i,o)},getActiveAccount:()=>l.current,accountHasSigner:t=>{const e=void 0!==o.current.find((e=>e.address===t&&"external"!==e.source));return e},extensions:p,extensionsStatus:v.current,accounts:o.current,activeAccount:l.current,activeAccountMeta:h.current},children:e})}),$nt,(t=>{let{children:e}=t;const[n,r]=(0,k.useState)(0);return(0,Wd.jsx)(ggt.Provider,{value:{openSideBar:()=>{n||r(1)},closeSideBar:()=>{r(0)},open:n},children:e})}),(t=>{let{children:e}=t;const{isReady:n,api:r,status:i}=IJ();(0,k.useEffect)((()=>{"connecting"===i&&a(itt)}),[i]);const[o,a]=(0,k.useState)(itt);(0,k.useEffect)((()=>(s(),()=>{void 0!==o.unsub&&o.unsub()})),[n]);const s=async()=>{if(r&&n){const t=await r.queryMulti([r.query.staking.activeEra,r.query.balances.totalIssuance],(e=>{let[n,r]=e,i=n.unwrapOrDefault({index:0,start:0}).toString();i=JSON.parse(i);const o={activeEra:i,totalIssuance:r.toBn(),unsub:t};a(o)}));return t}};return(0,Wd.jsx)(ott.Provider,{value:{metrics:{activeEra:o.activeEra,totalIssuance:o.totalIssuance}},children:e})}),(t=>{let{children:e}=t;const{isReady:n,api:r}=IJ(),[i,o]=(0,k.useState)({}),a=(0,k.useRef)(i),[s,l]=(0,k.useState)({}),u=(0,k.useRef)(s);(0,k.useEffect)((()=>()=>{Object.values(u.current).map((t=>Object.entries(t).map((t=>{let[e,n]=t;return n()}))))}),[]);const c=(t,e)=>{var n;const r=u.current,i=null!==(n=r[t])&&void 0!==n?n:[];i.push(...e),r[t]=i,pf(r,l,u)};return(0,Wd.jsx)(Uft.Provider,{value:{fetchAccountMetaBatch:async function(t,e){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!n||!r)return;if(!e.length)return;if(s){if(delete i[t],delete a.current[t],void 0!==u.current[t])for(const n of u.current[t])n()}else if(void 0!==a.current[t])return;const l=Object.assign(a.current);l[t]={},l[t].addresses=e,pf({...l},o,a);const h=async e=>await r.query.identity.identityOf.multi(e,(e=>{const n=[];for(let t=0;t<e.length;t++)n.push(e[t].toHuman());const r=Object.assign(a.current);r[t].identities=n,pf({...r},o,a)})),d=async e=>{const n=await r.query.identity.superOf.multi(e,(async e=>{const n=[],i=[];for(let t=0;t<e.length;t++){const r=e[t].toHuman();n.push(r),null!==r&&i.push(t)}const s=n.filter((t=>null!==t)).map((t=>t[0])),l=await r.query.identity.identityOf.multi(s,(t=>{for(let e=0;e<t.length;e++){const r=t[e].toHuman();n[i[e]].identity=r}}));l();const u=Object.assign(a.current);u[t].supers=n,pf({...u},o,a)}));return n};await Promise.all([h(e),d(e)]).then((e=>{c(t,e)}))},removeAccountMetaBatch:t=>{if(void 0!==u.current[t]){for(const e of u.current[t])e();delete i[t],delete a.current[t]}},meta:a.current},children:e})}),(t=>{let{children:e}=t;const{api:n,isReady:r,network:i,consts:o}=IJ(),{metrics:a}=att(),{accounts:s,addExternalAccount:l}=rtt(),{activeEra:u}=a,c=o.existentialDeposit,h=c.div(new($d())(2)).add(c),[d,f]=(0,k.useState)([]),p=(0,k.useRef)(d),[m,g]=(0,k.useState)([]),y=(0,k.useRef)(m),[v,b]=(0,k.useState)([]),w=(0,k.useRef)(v),[x,M]=(0,k.useState)([]),S=(0,k.useRef)(x);(0,k.useEffect)((()=>{r&&(pf([],f,p),pf([],b,w),C(),P(),T())}),[s,i,r]),(0,k.useEffect)((()=>()=>{C()}),[]);const C=()=>{Object.values(y.current).forEach((async t=>{t()})),Object.values(S.current).forEach((async t=>{t()}))},P=async()=>{Promise.all(s.map((t=>A(t.address))))},T=async()=>{Promise.all(s.map((t=>N(t.address))))},A=async t=>{if(!n)return;const e=await n.queryMulti([[n.query.system.account,t],[n.query.balances.locks,t],[n.query.staking.bonded,t],[n.query.staking.nominators,t]],(async e=>{let[{data:n},r,i,o]=e;const a={address:t},{free:s,reserved:l,miscFrozen:u,feeFrozen:c}=n;let d=new($d())(s).sub(h);d=d.lt(new($d())(0))?new($d())(0):d,a.balance={free:s.toBn(),reserved:l.toBn(),miscFrozen:u.toBn(),feeFrozen:c.toBn(),freeAfterReserve:d};const m=r.toHuman();for(let t=0;t<m.length;t++)m[t].amount=new($d())(lf(m[t].amount));a.locks=m;let g=i.unwrapOr(null);g=null===g?null:g.toHuman(),a.bonded=g;let y=o.unwrapOr(null);y=null===y?htt:{targets:y.targets.toHuman(),submittedIn:y.submittedIn.toHuman()},a.nominations=y;let v=Object.values(p.current);v=v.filter((e=>e.address!==t)).concat(a),pf(v,f,p)})),r=y.current.concat(e);return pf(r,g,y),e},N=async t=>{if(!n)return;const e=await n.query.staking.ledger(t,(e=>{let n;const r=e.unwrapOr(null);if(null!==r){const{stash:e,total:i,active:o,unlocking:a}=r,u=[];for(const t of a.toHuman()){const e=lf(t.era),n=lf(t.value);u.push({era:Number(e),value:new($d())(n)})}s.find((t=>t.address===e.toHuman()))||l(e.toHuman()),n={address:t,stash:e.toHuman(),active:o.toBn(),total:i.toBn(),unlocking:u};let c=Object.values(w.current);c=c.filter((t=>t.stash!==n.stash)).concat(n),pf(c,b,w)}})),r=S.current.concat(e);return pf(r,M,S),e},O=t=>{const e=p.current.find((e=>e.address===t));if(void 0===e)return ltt;const{balance:n}=e;return void 0===(null===n||void 0===n?void 0:n.free)?ltt:n},j=t=>{const e=w.current.find((e=>e.stash===t));return void 0===e||void 0===e.stash?utt:e},V=t=>{const e=p.current.find((e=>e.address===t));return void 0===e?null:e};return(0,Wd.jsx)(dtt.Provider,{value:{getAccount:V,getAccountBalance:O,getLedgerForStash:j,getLedgerForController:t=>{const e=w.current.find((e=>e.address===t));return void 0===e||void 0===e.address?null:e},getAccountLocks:t=>{var e;const n=p.current.find((e=>e.address===t));if(void 0===n)return[];return null!==(e=n.locks)&&void 0!==e?e:[]},getBondedAccount:t=>{var e;const n=p.current.find((e=>e.address===t));if(void 0===n)return null;return null!==(e=n.bonded)&&void 0!==e?e:null},getAccountNominations:t=>{var e;const n=p.current.find((e=>e.address===t));if(void 0===n)return[];const r=n.nominations;if(void 0===r)return[];return null!==(e=r.targets)&&void 0!==e?e:[]},getBondOptions:t=>{if(null===V(t))return ctt;const e=O(t),n=j(t),{freeAfterReserve:r}=e,{active:i,unlocking:o}=n,a=i;let s=new($d())(0),l=new($d())(0);for(const c of o){const{value:t,era:e}=c;u.index>e?l=l.add(t):s=s.add(t)}return{freeToBond:$d().max(r.sub(i).sub(s).sub(l),new($d())(0)),freeToUnbond:a,totalUnlocking:s,totalUnlocked:l,totalPossibleBond:$d().max(r.sub(s).sub(l),new($d())(0)),freeToStake:$d().max(r.sub(i).sub(s).sub(l),new($d())(0)),totalUnlockChuncks:o.length}},isController:t=>{const e=p.current.filter((e=>((null===e||void 0===e?void 0:e.bonded)||"")===t));return e.length>0},accounts:p.current,minReserve:h,ledgers:w.current},children:e})}),(t=>{var e;let{children:n}=t;const{activeAccount:r,accounts:i,getActiveAccount:o}=rtt(),{isReady:a,api:s,consts:l,status:u,network:c}=IJ(),{metrics:h}=att(),{accounts:d,getBondedAccount:f,getLedgerForStash:p,getAccountNominations:m}=ftt(),{maxNominatorRewardedPerValidator:g}=l,[y,v]=(0,k.useState)(ptt),[b,w]=(0,k.useState)(mtt),x=(0,k.useRef)(b),[M,S]=(0,k.useState)(!1),C=(0,k.useRef)(M),[P,T]=(0,k.useState)(mf(`${null!==r&&void 0!==r?r:""}_targets`,gtt,!0)),A=new stt;A.onmessage=t=>{if(t){const{data:e}=t,{stakers:n,activeNominators:r,activeValidators:i,minActiveBond:a,ownStake:s,_activeAccount:l}=e;pf(!1,S,C),o()===l&&pf({...x.current,stakers:n,activeNominators:r,activeValidators:i,minActiveBond:a,ownStake:s},w,x)}};(0,k.useEffect)((()=>{"connecting"===u&&(pf(mtt,w,x),v(ptt))}),[u]),(0,k.useEffect)((()=>(a&&(async()=>{if(null!==s&&a&&0!==h.activeEra.index){const t=h.activeEra.index-1,e=await s.queryMulti([s.query.staking.counterForNominators,s.query.staking.counterForValidators,s.query.staking.maxNominatorsCount,s.query.staking.maxValidatorsCount,s.query.staking.validatorCount,[s.query.staking.erasValidatorReward,t],[s.query.staking.erasTotalStake,t],s.query.staking.minNominatorBond,s.query.staking.historyDepth,[s.query.staking.payee,r]],(t=>{let[e,n,r,i,o,a,s,l,u,c]=t;v({...y,payee:Object.keys(c.toHuman())[0],historyDepth:u.toBn(),lastTotalStake:s.toBn(),validatorCount:o.toBn(),totalNominators:e.toBn(),totalValidators:n.toBn(),minNominatorBond:l.toBn(),lastReward:a.unwrapOrDefault(new($d())(0)),maxValidatorsCount:new($d())(i.toString()),maxNominatorsCount:new($d())(r.toString())})}));v({...y,unsub:e})}})(),()=>{null!==y.unsub&&y.unsub()})),[a,h.activeEra]),(0,k.useEffect)((()=>{a&&(async()=>{if(!a||0===h.activeEra.index||!s)return;const t=await s.query.staking.erasStakers.entries(h.activeEra.index);pf(!0,S,C);const e=t.map((t=>{let[e,n]=t;return{keys:e.toHuman(),val:n.toHuman()}}));A.postMessage({activeAccount:r,units:c.units,exposures:e,maxNominatorRewardedPerValidator:g})})()}),[a,h.activeEra.index,r]),(0,k.useEffect)((()=>{if(r){var t,e;let n=new($d())(0);const i=null!==(t=null===(e=x.current)||void 0===e?void 0:e.stakers)&&void 0!==t?t:null,o=m(r);if(o.length&&null!==i)for(const t of o){const e=i.find((e=>e.address===t));if(void 0!==e){let{others:t}=e;if(t=t.sort(((t,e)=>{const n=new($d())(lf(t.value));return new($d())(lf(e.value)).sub(n)})),t.length){const e=new($d())(lf(t[0].value.toString()));(e.lt(n)||n!==new($d())(0))&&(n=e)}}}const a=n.div(new($d())(10**c.units)).toNumber();pf({...x.current,minStakingActiveBond:a},w,x),T(mf(`${r}_targets`,gtt,!0))}}),[a,d,r,null===(e=x.current)||void 0===e?void 0:e.stakers]);const N=()=>!!r&&null!==f(r),O=()=>{if(!N()||!r)return!1;return p(r).active.gt(new($d())(0))},j=()=>{if(!r)return!1;return m(r).length>0},V=()=>!r||!N()&&!O()&&!j()&&!(N()&&r&&p(r).unlocking.length);return(0,Wd.jsx)(vtt.Provider,{value:{getNominationsStatus:()=>{if(V())return ytt;if(!r)return ytt;const t=m(r),e={};for(const i of t){var n;const t=x.current.stakers.find((t=>t.address===i));if(void 0===t){e[i]="waiting";continue}void 0!==(null!==(n=t.others)&&void 0!==n?n:[]).find((t=>t.who===r))?e[i]="active":e[i]="inactive"}return e},setTargets:t=>(localStorage.setItem(`${r}_targets`,JSON.stringify(t)),T(t),[]),hasController:N,getControllerNotImported:t=>{if(null===t||!r)return!1;return!i.find((e=>e.address===t))},isBonding:O,isNominating:j,inSetup:V,staking:y,eraStakers:x.current,erasStakersSyncing:C.current,targets:P},children:n})}),(t=>{let{children:e}=t;const{api:n,network:r,isReady:i}=IJ(),{features:o}=r,[a,s]=(0,k.useState)(0),[l,u]=(0,k.useState)({stats:xtt,unsub:null});(0,k.useEffect)((()=>{o.pools?s(1):(s(0),c())}),[r]),(0,k.useEffect)((()=>(i&&a&&h(),()=>{c()})),[r,i,a]);const c=()=>{null!==l.unsub&&l.unsub()},h=async()=>{if(!n)return;const t=await n.queryMulti([n.query.nominationPools.counterForPoolMembers,n.query.nominationPools.counterForBondedPools,n.query.nominationPools.counterForRewardPools,n.query.nominationPools.maxPoolMembers,n.query.nominationPools.maxPoolMembersPerPool,n.query.nominationPools.maxPools,n.query.nominationPools.minCreateBond,n.query.nominationPools.minJoinBond],(t=>{let[e,n,r,i,o,a,s,c]=t;i=i.toHuman(),null!==i&&(i=new($d())(lf(i))),o=o.toHuman(),null!==o&&(o=new($d())(lf(o))),a=a.toHuman(),null!==a&&(a=new($d())(lf(a))),u({...l,stats:{counterForPoolMembers:e.toBn(),counterForBondedPools:n.toBn(),counterForRewardPools:r.toBn(),maxPoolMembers:i,maxPoolMembersPerPool:o,maxPools:a,minCreateBond:s.toBn(),minJoinBond:c.toBn()}})}));u({...l,unsub:t})};return(0,Wd.jsx)(Ptt.Provider,{value:{enabled:a,stats:l.stats},children:e})}),(t=>{let{children:e}=t;const{api:n,network:r,isReady:i,consts:o}=IJ(),{enabled:a}=Ttt(),{poolsPalletId:s}=o,[l,u]=(0,k.useState)({}),c=(0,k.useRef)(l),[h,d]=(0,k.useState)({}),f=(0,k.useRef)(h),[p,m]=(0,k.useState)([]);(0,k.useEffect)((()=>(i&&a&&y(),()=>{g()})),[r,i,a]);const g=()=>{Object.values(f.current).map(((t,e)=>Object.entries(t).map((t=>{let[e,n]=t;return n()})))),m([])},y=async()=>{if(!n)return;const t=(await n.query.nominationPools.bondedPools.entries()).map((t=>{let[e,n]=t;const r=e.toHuman()[0],i=n.toHuman();return b(r,i)}));m(t)},v=(t,e)=>{var n;const r=f.current,i=null!==(n=r[t])&&void 0!==n?n:[];i.push(...e),r[t]=i,pf(r,d,f)},b=(t,e)=>({...e,id:t,addresses:w(t)}),w=t=>{const e=new($d())(t);return{stash:x(e,0),reward:x(e,1)}},x=(t,e)=>n?n.registry.createType("AccountId32",D_(mt,s,new Uint8Array([e]),b$(t,gt),pt)).toString():"";return(0,Wd.jsx)(Att.Provider,{value:{fetchPoolsMetaBatch:async function(t,e){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!i||!n)return;if(!e.length)return;if(r){if(delete l[t],delete c.current[t],void 0!==f.current[t])for(const n of f.current[t])n()}else if(void 0!==c.current[t])return;const o=[];for(const n of e)o.push(Number(n.id));const a=Object.assign(c.current);a[t]={},a[t].ids=o,pf({...a},u,c);const s=async e=>{const r=await n.query.nominationPools.metadata.multi(e,(e=>{const n=[];for(let t=0;t<e.length;t++)n.push(e[t].toHuman());const r=Object.assign(c.current);r[t].metadata=n,pf({...r},u,c)}));return r};await Promise.all([s(o)]).then((e=>{v(t,e)}))},createAccounts:w,getBondedPool:t=>{var e;const n=null!==(e=p.find((e=>e.id===t)))&&void 0!==e?e:null;return n},bondedPools:p,meta:c.current},children:e})}),(t=>{let{children:e}=t;const{api:n,network:r,isReady:i}=IJ(),{accounts:o,activeAccount:a}=rtt(),{enabled:s}=Ttt(),[l,u]=(0,k.useState)([]),c=(0,k.useRef)(l),[h,d]=(0,k.useState)([]),f=(0,k.useRef)(h);(0,k.useEffect)((()=>{i&&s&&(async()=>{pf([],u,c),await m(),p()})()}),[r,i,o,s]);const p=async()=>{Promise.all(o.map((t=>g(t.address))))};(0,k.useEffect)((()=>()=>{m()}),[]);const m=async()=>{Object.values(f.current).forEach((async t=>{await t()}))},g=async t=>{if(!n)return;const e=await n.query.nominationPools.poolMembers(t,(async e=>{var n;let r=null===e||void 0===e||null===(n=e.unwrapOr(void 0))||void 0===n?void 0:n.toHuman();if(r){const e=r.unbondingEras,n=[];for(const[t,r]of Object.entries(e||{})){const e=lf(t),i=lf(r);n.push({era:Number(e),value:new($d())(i)})}r.points=r.points?lf(r.points):"0",r={address:t,...r,unlocking:n};let i=Object.values(c.current);i=i.filter((e=>e.address!==t)).concat(r),pf(i,u,c)}})),r=f.current.concat(e);return pf(r,d,f),e};return(0,Wd.jsx)(Ott.Provider,{value:{membership:(()=>{if(!a)return null;const t=c.current.find((t=>t.address===a));return void 0===t?null:t})(),memberships:c.current},children:e})}),(t=>{var e,n;let{children:r}=t;const{api:i,network:o,isReady:a,consts:s}=IJ(),{metrics:l}=att(),{eraStakers:u}=btt(),{activeAccount:c}=rtt(),{getAccountBalance:h}=ftt(),{enabled:d}=Ttt(),{membership:f}=jtt(),{createAccounts:p}=Ntt(),{activeEra:m}=l,{existentialDeposit:g}=s,[y,v]=(0,k.useState)({pool:void 0,unsub:null}),[b,w]=(0,k.useState)({noominations:ktt,unsub:null}),[x,M]=(0,k.useState)(Mtt);(0,k.useEffect)((()=>()=>{S()}),[o,a,d]);const S=()=>{null!==y.unsub&&y.unsub(),null!==b.unsub&&b.unsub()};(0,k.useEffect)((()=>(a&&d&&f&&A(),()=>{C()})),[o,a,d,f]);const C=()=>{null!==y&&void 0!==y&&y.unsub&&(null===y||void 0===y||y.unsub()),v({membership:void 0,unsub:null})},P=null===(e=y.pool)||void 0===e||null===(n=e.addresses)||void 0===n?void 0:n.stash;(0,k.useEffect)((()=>(a&&d&&P&&N(P),()=>{T()})),[o,a,P,d]);const T=()=>{null!==b&&void 0!==b&&b.unsub&&b.unsub(),w({nominations:ktt,unsub:null})},A=async()=>{if(!i||!f)return;const{poolId:t}=f,e=p(t),n=await i.queryMulti([[i.query.nominationPools.bondedPools,t],[i.query.nominationPools.rewardPools,t],[i.query.staking.slashingSpans,e.stash],[i.query.system.account,e.reward]],(r=>{var i,o,a,s;let[l,u,c,{data:h}]=r;if(l=null===(i=l)||void 0===i||null===(o=i.unwrapOr(void 0))||void 0===o?void 0:o.toHuman(),u=null===(a=u)||void 0===a||null===(s=a.unwrapOr(void 0))||void 0===s?void 0:s.toHuman(),u&&l){const r=c.isNone?0:c.unwrap().prior.length+1,i=((t,e,n)=>{const r=$d().max(new($d())(0),new($d())(n).sub(g)),i=new($d())(lf(e.balance));let o=new($d())(lf(e.totalEarnings));const a=new($d())(lf(e.points)),s=new($d())(lf(t.points)),l=new($d())(lf(f.points)),u=new($d())(lf(f.rewardPoolTotalEarnings)),c=$d().max(new($d())(0),r.sub(i));o=o.add(c);const h=s.mul(c),d=a.add(h),p=$d().max(new($d())(0),o.sub(u)),m=l.mul(p);return d.isZero()?new($d())(0):m.mul(r).div(d)})(l,u,null===h||void 0===h?void 0:h.free),o={...l,id:t,slashingSpansCount:r,unclaimedReward:i,addresses:e};v({pool:o,unsub:n}),null!==e&&void 0!==e&&e.stash&&M(mf(`${null===e||void 0===e?void 0:e.stash}_pool_targets`,Mtt,!0))}}));return n},N=async t=>{if(!i)return;const e=await i.query.staking.nominators(t,(t=>{let n=t.unwrapOr(null);n=null===n?ktt:{targets:n.targets.toHuman(),submittedIn:n.submittedIn.toHuman()},w({nominations:n,unsub:e})}));return e},O=()=>{var t,e;return null===(t=y.pool)||void 0===t||null===(e=t.addresses)||void 0===e?void 0:e.stash};return(0,Wd.jsx)(Vtt.Provider,{value:{isNominator:()=>{var t;const e=null===y||void 0===y||null===(t=y.pool)||void 0===t?void 0:t.roles;if(!c||!e)return!1;return c===(null===e||void 0===e?void 0:e.root)||c===(null===e||void 0===e?void 0:e.nominator)},isOwner:()=>{var t;const e=null===(t=y.pool)||void 0===t?void 0:t.roles;if(!c||!e)return!1;return c===(null===e||void 0===e?void 0:e.root)||c===(null===e||void 0===e?void 0:e.stateToggler)},isDepositor:()=>{var t;const e=null===(t=y.pool)||void 0===t?void 0:t.roles;if(!c||!e)return!1;return c===(null===e||void 0===e?void 0:e.depositor)},isBonding:()=>!(null===y||void 0===y||!y.pool),getPoolBondedAccount:O,getPoolBondOptions:t=>{if(!t)return Stt;const{freeAfterReserve:e,miscFrozen:n}=h(t),r=(null===f||void 0===f?void 0:f.unlocking)||[],i=null===f||void 0===f?void 0:f.points,o=i?new($d())(i):new($d())(0),a=o;let s=new($d())(0),l=new($d())(0);for(const u of r){const{value:t,era:e}=u;m.index>e?l=l.add(t):s=s.add(t)}return{active:o,freeToBond:$d().max(e.sub(n).sub(s).sub(l),new($d())(0)),freeToUnbond:a,totalUnlocking:s,totalUnlocked:l,totalPossibleBond:$d().max(e.sub(s).sub(l),new($d())(0)),totalUnlockChuncks:r.length}},getPoolUnlocking:()=>(null===f||void 0===f?void 0:f.unlocking)||[],setTargets:t=>{const e=O();e&&(localStorage.setItem(`${e}_pool_targets`,JSON.stringify(t)),M(t))},getNominationsStatus:()=>{var t;if(!b)return Ctt;const e=(null===b||void 0===b||null===(t=b.nominations)||void 0===t?void 0:t.targets)||[],n={};for(const i of e){var r;const t=u.stakers.find((t=>t.address===i));if(void 0===t){n[i]="waiting";continue}void 0!==(null!==(r=t.others)&&void 0!==r?r:[]).find((t=>t.who===c))?n[i]="active":n[i]="inactive"}return n},activeBondedPool:y.pool,targets:x,poolNominations:b.nominations},children:r})}),(t=>{let{children:e}=t;const{isReady:n,api:r,network:i,consts:o}=IJ(),{activeAccount:a}=rtt(),{metrics:s}=att(),{accounts:l,getAccountNominations:u}=ftt(),{poolNominations:c}=Ett(),{maxNominatorRewardedPerValidator:h}=o,[d,f]=(0,k.useState)([]),[p,m]=(0,k.useState)(!1),[g,y]=(0,k.useState)(wtt),[v,b]=(0,k.useState)({}),w=(0,k.useRef)(v),[x,M]=(0,k.useState)({}),S=(0,k.useRef)(x),C=()=>{const t=localStorage.getItem(`${i.name.toLowerCase()}_favourites`);return null!==t?JSON.parse(t):[]},[P,T]=(0,k.useState)(C()),[A,N]=(0,k.useState)(null),[O,j]=(0,k.useState)(null),[V,E]=(0,k.useState)(null);(0,k.useEffect)((()=>{m(!1),y(wtt),U("validators_browse"),f([])}),[i]),(0,k.useEffect)((()=>(n&&(R(),H(r)),()=>{Object.values(S.current).map(((t,e)=>Object.entries(t).map((t=>{let[e,n]=t;return n()}))))})),[n,s.activeEra]),(0,k.useEffect)((()=>{d.length>0&&D("validators_browse",d,!0)}),[n,d]),(0,k.useEffect)((()=>{n&&a&&I()}),[n,a,l]);const I=async()=>{if(!a)return;const t=u(a).map((t=>({address:t}))),e=await B(t);N(e||[])};(0,k.useEffect)((()=>{n&&c&&z()}),[n,c]);const z=async()=>{let t=c.targets;t=t.map(((t,e)=>({address:t})));const e=await B(t);j(e||[])};(0,k.useEffect)((()=>{T(C())}),[i]),(0,k.useEffect)((()=>{n&&L()}),[n,P]);const L=async()=>{const t=[...P].map(((t,e)=>({address:t}))),e=await B(t);E(e||[])},R=async()=>{if(!n||!r)return;if(p)return;const t=[];(await r.query.staking.validators.entries()).forEach((e=>{let[n,r]=e;const i=n.args[0].toHuman(),o=r.toHuman(),a=cf(o.commission);t.push({address:i,prefs:{commission:parseFloat(a.toFixed(2)),blocked:o.blocked}})})),m(!0),f(t)},H=async t=>{if(n){const e=await t.query.session.validators((t=>{y({...g,list:t.toHuman()})}));y({...g,unsub:e})}},B=async t=>{if(!t.length||!r)return!1;const e=[];for(const r of t)e.push(r.address);const n=await r.query.staking.validators.multi(e),i=[];let o=0;for(const r of n){const t=r.toHuman(),n=cf(t.commission);i.push({address:e[o],prefs:{commission:n,blocked:t.blocked}}),o++}return i},D=async function(t,e){let o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!n||!r)return;if(!e.length)return;if(o){if(delete v[t],delete w.current[t],void 0!==S.current[t])for(const n of S.current[t])n()}else if(void 0!==w.current[t])return;const a=[];for(const n of e)a.push(n.address);const l=Object.assign(w.current);l[t]={},l[t].addresses=a,pf({...l},b,w);const u=async e=>await r.query.identity.identityOf.multi(e,(e=>{const n=[];for(let t=0;t<e.length;t++)n.push(e[t].toHuman());const r=Object.assign(w.current);r[t].identities=n,pf({...r},b,w)})),c=async e=>{const n=await r.query.identity.superOf.multi(e,(async e=>{const n=[],i=[];for(let t=0;t<e.length;t++){const r=e[t].toHuman();n.push(r),null!==r&&i.push(t)}const o=n.filter((t=>null!==t)).map((t=>t[0])),a=await r.query.identity.identityOf.multi(o,(t=>{for(let e=0;e<t.length;e++){const r=t[e].toHuman();n[i[e]].identity=r}}));a();const s=Object.assign(w.current);s[t].supers=n,pf({...s},b,w)}));return n};await Promise.all([u(a),c(a)]).then((e=>{F(t,e)})),await uf(250);const d=[];for(let n=0;n<e.length;n++)d.push([s.activeEra.index,e[n].address]);const f=await r.query.staking.erasStakers.multi(d,(e=>{const n=[];for(let t of e){var r,o;t=t.toHuman();let e=null!==(r=t.others)&&void 0!==r?r:[];const a=e.length+1;e=e.sort(((t,e)=>{const n=new($d())(lf(t.value)),r=new($d())(lf(e.value));return n.sub(r)}));const s=e.length>0?new($d())(lf(e[0].value)).div(new($d())(10**i.units)).toNumber():0,l=Math.max(e.length-h,0),u=e.length>0?new($d())(lf(null===(o=e[l])||void 0===o?void 0:o.value)).div(new($d())(10**i.units)).toNumber():0;n.push({total:t.total,own:t.own,total_nominations:a,lowest:s,lowestReward:u})}const a=Object.assign(w.current);a[t].stake=n,pf({...a},b,w)}));F(t,[f])},F=(t,e)=>{var n;const r=S.current,i=null!==(n=r[t])&&void 0!==n?n:[];i.push(...e),r[t]=i,pf(r,M,S)},U=t=>{if(void 0!==S.current[t]){for(const e of S.current[t])e();delete v[t],delete w.current[t]}};return(0,Wd.jsx)(Itt.Provider,{value:{fetchValidatorMetaBatch:D,removeValidatorMetaBatch:U,fetchValidatorPrefs:B,addFavourite:t=>{const e=Object.assign(P);e.includes(t)||e.push(t),localStorage.setItem(`${i.name.toLowerCase()}_favourites`,JSON.stringify(e)),T([...e])},removeFavourite:t=>{let e=Object.assign(P);e=e.filter((e=>e!==t)),localStorage.setItem(`${i.name.toLowerCase()}_favourites`,JSON.stringify(e)),T([...e])},getMinRewardBond:t=>{const e=w.current.validators_browse;let n=null;for(const r of t){const t=e.addresses.indexOf(r),i=e.stake[t];(null===n||i.lowest<n)&&(n=i.lowest)}return n},validators:d,meta:w.current,session:g,favourites:P,nominated:A,poolNominated:O,favouritesList:V},children:e})}),(t=>{let{children:e}=t;const{isReady:n,consts:r,network:i}=IJ(),{accounts:o,activeAccount:a}=rtt(),{staking:s,eraStakers:l,inSetup:u}=btt(),{meta:c,session:h}=ztt(),{maxNominatorRewardedPerValidator:d}=r,{metrics:f}=att(),{accounts:p}=ftt(),[m,g]=(0,k.useState)(!1),y=mf("services",Ct,!0),v=Number(mf("side_menu_minimised",0)),[b,w]=(0,k.useState)(0),[x,M]=(0,k.useState)(v),S=(0,k.useRef)(x),[C,P]=(0,k.useState)(window.innerWidth<=Mt?1:S.current),[T,A]=(0,k.useState)(0),[N,O]=(0,k.useState)(y),j=(0,k.useRef)(N),[V,E]=(0,k.useState)([]),[I,z]=(0,k.useState)("default"),[L,R]=(0,k.useState)([]),H=()=>{window.innerWidth<=Mt?P(0):P(S.current)};(0,k.useEffect)((()=>{u()||A(0)}),[u(),i]),(0,k.useEffect)((()=>(window.addEventListener("resize",H),()=>{window.removeEventListener("resize",H)})),[]),(0,k.useEffect)((()=>{H()}),[x]),(0,k.useEffect)((()=>{if(o.length){const t=Y();R(t)}}),[a,i,o]),(0,k.useEffect)((()=>{let t=!1;n||(t=!0),s.lastReward===new($d())(0)&&(t=!0),0===f.activeEra.index&&(t=!0);const e=o.filter((t=>"external"!==t.source));p.length<e.length&&(t=!0),l.activeNominators||(t=!0),g(t)}),[n,s,f,p,l]);const B=t=>{E(t)},D=(t,e)=>{if(void 0===c[e])return t;const n=[];for(const d of t){var r,i,o,a,s,l,u,h;const t=null!==(r=null===(i=c[e].addresses)||void 0===i?void 0:i.indexOf(d.address))&&void 0!==r?r:-1;if(-1===t){n.push(d);continue}const f=null!==(o=null===(a=c[e])||void 0===a?void 0:a.identities)&&void 0!==o?o:[],p=null!==(s=null===(l=c[e])||void 0===l?void 0:l.supers)&&void 0!==s?s:[];f.length&&p.length||n.push(d);const m=null!==(u=f[t])&&void 0!==u?u:null,g=null!==(h=p[t])&&void 0!==h?h:null;null===m&&null===g||n.push(d)}return n},F=(t,e)=>{if(void 0===c[e])return t;const n=[];for(const l of t){var r,i,o,a,s;const t=null!==(r=null===(i=c[e].addresses)||void 0===i?void 0:i.indexOf(l.address))&&void 0!==r?r:-1;if(-1===t){n.push(l);continue}const u=null!==(o=null===(a=c[e])||void 0===a?void 0:a.stake)&&void 0!==o&&o;if(!u){n.push(l);continue}(null!==(s=u[t].total_nominations)&&void 0!==s?s:0)<d&&n.push(l)}return n},U=t=>t=t.filter((t=>{var e;return 100!==(null===t||void 0===t||null===(e=t.prefs)||void 0===e?void 0:e.commission)})),W=t=>t=t.filter((t=>{var e;return!0!==(null===t||void 0===t||null===(e=t.prefs)||void 0===e?void 0:e.blocked)})),q=t=>0===h.list.length?t:t=t.filter((t=>h.list.includes(t.address))),X=t=>{const e=[...t].sort(((t,e)=>t.prefs.commission-e.prefs.commission));return e},Z={controller:null,payee:null,nominations:[],bond:0,section:1},Y=()=>{const t=o.map((t=>{const e=localStorage.getItem(`${i.name.toLowerCase()}_stake_setup_${t.address}`),n=null!==e?JSON.parse(e):Z;return{address:t.address,progress:n}}));return t},K=t=>{const e=L.find((e=>e.address===t));return void 0===e?Z:e.progress};return(0,Wd.jsx)(Ltt.Provider,{value:{setSideMenu:t=>{w(t)},setUserSideMenuMinimised:t=>{localStorage.setItem("side_menu_minimised",String(t)),pf(t,M,S)},orderValidators:t=>{(t=>{z(t)})(I===t?"default":t)},applyValidatorOrder:(t,e)=>"commission"===e?X(t):t,applyValidatorFilters:function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:V;return n.includes("all_commission")&&(t=U(t)),n.includes("blocked_nominations")&&(t=W(t)),n.includes("over_subscribed")&&(t=F(t,e)),n.includes("missing_identity")&&(t=D(t,e)),n.includes("inactive")&&(t=q(t)),t},resetValidatorFilters:()=>{E([]),z("default")},toggleFilterValidators:t=>{const e=[...V];if("remove"===(e.includes(t)?"remove":"push")){const n=e.indexOf(t);e.splice(n,1)}else e.push(t);B(e)},toggleAllValidatorFilters:t=>{t?B(["all_commission","blocked_nominations","over_subscribed","missing_identity","inactive"]):E([])},toggleService:t=>{let e=[...N];e.find((e=>e===t))?e=e.filter((e=>e!==t)):e.push(t),localStorage.setItem("services",JSON.stringify(e)),pf(e,O,j)},getSetupProgress:K,getSetupProgressPercent:t=>{const e=K(t);let n=0;return e.bond>0&&(n+=25),null!==e.controller&&(n+=25),e.nominations.length&&(n+=25),null!==e.payee&&(n+=25),n},setActiveAccountSetup:t=>{if(!a)return;localStorage.setItem(`${i.name.toLowerCase()}_stake_setup_${a}`,JSON.stringify(t));const e=L.map((e=>e.address===a?{...e,progress:t}:e));R(e)},setActiveAccountSetupSection:t=>{if(!a)return;const e=[...L].find((t=>t.address===a));if(null===e)return;e.progress.section=t;const n=L.map((t=>t.address===a?e:t));localStorage.setItem(`${i.name.toLowerCase()}_stake_setup_${a}`,JSON.stringify(e.progress)),R(n)},getServices:()=>j.current,setOnSetup:A,sideMenuOpen:b,userSideMenuMinimised:S.current,sideMenuMinimised:C,validatorFilters:V,validatorOrder:I,services:j.current,onSetup:T,isSyncing:m},children:e})}),(t=>{let{children:e}=t;const[n,r]=(0,k.useState)([]);return(0,Wd.jsx)(Cyt.Provider,{value:{messages:n,setMessage:(t,e)=>{const i=n.filter((e=>e.key!==t));i.push({key:t,msg:e}),r(i)},setMessages:t=>{const e=n;let i=[];for(let n=0;n<t.length;n++)i=Object.values(e.filter((e=>t[n].key!==e.key))),i.push({key:t[n].key,msg:t[n].msg});r(i)},removeMessage:t=>{const e=n.filter((e=>e.key!==t));r(e)},getMessage:t=>{const e=n.filter((e=>e.key===t));return 0===e.length?null:e[0].msg}},children:e})}),(t=>{let{children:e}=t;const{network:n,isReady:r}=IJ(),{services:i,getServices:o}=Rtt(),{activeAccount:a}=rtt(),[s,l]=(0,k.useState)([]);(0,k.useEffect)((()=>{l([])}),[n]),(0,k.useEffect)((()=>{r&&u()}),[r,n,a]),(0,k.useEffect)((()=>{u()}),[i]);const u=async()=>{if(null===a||!i.includes("subscan"))return void l([]);let t=await fetch(n.subscanEndpoint+Nt,{headers:{"Content-Type":"application/json","X-API-Key":Tt},body:JSON.stringify({row:60,page:0,address:a}),method:"POST"});t=await t.json(),"Success"===t.message&&o().includes("subscan")&&(null!==t.data.list?l(t.data.list):l([]))};return(0,Wd.jsx)(Htt.Provider,{value:{fetchEraPoints:async(t,e)=>{if(""===t||!i.includes("subscan"))return[];let r=await fetch(n.subscanEndpoint+Ot,{headers:{"Content-Type":"application/json","X-API-Key":Tt},body:JSON.stringify({row:60,page:0,address:t}),method:"POST"});if(r=await r.json(),"Success"===r.message&&o().includes("subscan")){var a;if(null!==(null===(a=r.data)||void 0===a?void 0:a.list)){const t=[];for(let n=e;n>e-60;n--){var s,l;t.push({era:n,reward_point:null!==(s=null===(l=r.data.list.find((t=>t.era===n)))||void 0===l?void 0:l.reward_point)&&void 0!==s?s:0})}return t.reverse().splice(0,t.length-1)}return[]}return[]},payouts:s},children:e})}),(t=>{let{children:e}=t;const[n,r]=(0,k.useState)(0),[i,o]=(0,k.useState)(0),[a,s]=(0,k.useState)([]),[l,u]=(0,k.useState)([0,0]),c=()=>{n||r(1)};return(0,Wd.jsx)(qd.Provider,{value:{openMenu:c,closeMenu:()=>{o(0),setTimeout((()=>{r(0)}),100)},setMenuPosition:t=>{if(n)return;const e=document.body.getBoundingClientRect(),r=t.current.getBoundingClientRect(),i=r.left-e.left,o=r.top-e.top;u([i,o]),c()},checkMenuPosition:t=>{const e=document.body.getBoundingClientRect(),n=t.current.getBoundingClientRect();let r=n.left-e.left,i=n.top-e.top;const a=n.right,s=n.bottom;i-=10;a>e.right&&(r=e.right-t.current.offsetWidth-20),s>e.bottom&&(i=e.bottom-t.current.offsetHeight-20),u([r,i]),o(1)},setMenuItems:t=>{s(t)},open:n,show:i,position:l,items:a},children:e})}),(t=>{let{children:e}=t;const[n,r]=(0,k.useState)(0),[i,o]=(0,k.useState)(0),[a,s]=(0,k.useState)([0,0]),l=()=>{n||r(1)};return(0,Wd.jsx)(Jd.Provider,{value:{openPalette:l,closePalette:()=>{o(0),setTimeout((()=>{r(0)}),100)},setPalettePosition:t=>{if(n)return;const e=document.body.getBoundingClientRect(),r=t.current.getBoundingClientRect(),i=r.left-e.left,o=r.top-e.top;s([i,o]),l()},checkPalettePosition:t=>{const e=document.body.getBoundingClientRect(),n=t.current.getBoundingClientRect();let r=n.left-e.left,i=n.top-e.top;const a=n.right,l=n.bottom;a>e.right&&(r=e.right-t.current.offsetWidth-20),l>e.bottom&&(i=e.bottom-t.current.offsetHeight-20),s([r,i]),o(1)},open:n,show:i,position:a},children:e})}),(t=>{let{children:e}=t;const[n,r]=(0,k.useState)(0),[i,o]=(0,k.useState)([]),a=(0,k.useRef)(n),s=(0,k.useRef)(i),l=t=>{const e=s.current.filter((e=>e.index!==t));pf(e,o,s)};return(0,Wd.jsx)(qnt.Provider,{value:{addNotification:t=>{const e=[...s.current],n=a.current+1,i={...t,index:n};var u;return e.push({index:n,item:i}),u=n,a.current=u,r(u),pf(e,o,s),setTimeout((()=>{l(n)}),3e3),n},removeNotification:l,notifications:s.current},children:e})}),(t=>{let{children:e}=t;const[n,r]=(0,k.useState)([]),i=(0,k.useRef)(n);return(0,Wd.jsx)(gft.Provider,{value:{addPending:t=>{const e=[...i.current].concat(t);pf(e,r,i)},removePending:t=>{const e=i.current.filter((e=>e!==t));pf(e,r,i)},pending:i.current},children:e})}),(t=>{let{children:e}=t;const{isReady:n,api:r,status:i,consts:o}=IJ(),{expectedBlockTime:a}=o;(0,k.useEffect)((()=>{"connecting"===i&&l(zht)}),[i]);const[s,l]=(0,k.useState)(zht);(0,k.useEffect)((()=>(u(),()=>{void 0!==s.unsub&&s.unsub()})),[n]);const u=async()=>{if(n&&null!==r){const t=await r.derive.session.progress((e=>{const n={eraLength:e.eraLength.toNumber(),eraProgress:e.eraProgress.toNumber(),sessionLength:e.sessionLength.toNumber(),sessionProgress:e.sessionProgress.toNumber(),sessionsPerEra:e.sessionsPerEra.toNumber(),unsub:t};l(n)}));return t}};return(0,Wd.jsx)(Lht.Provider,{value:{getEraTimeLeft:()=>{const t=(s.eraLength-s.eraProgress)*(.001*a);return mv()().unix()+t-mv()().unix()},sessionEra:{eraLength:s.eraLength,eraProgress:s.eraProgress,sessionLength:s.sessionLength,sessionProgress:s.sessionProgress,sessionsPerEra:s.sessionsPerEra}},children:e})}))((()=>{const{mode:t,card:e}=yf(),{network:n}=IJ();return(0,Wd.jsx)(rn,{theme:{mode:t,card:e,network:`${n.name}-${t}`},children:(0,Wd.jsx)(Pyt,{})})})),Ayt=()=>{let t=localStorage.getItem("network");return null===t&&(t="polkadot",localStorage.setItem("network",t)),(0,Wd.jsx)(vf,{children:(0,Wd.jsx)(Tyt,{})})},Nyt=t=>{t&&t instanceof Function&&__webpack_require__.e(787).then(__webpack_require__.bind(__webpack_require__,787)).then((e=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:o,getTTFB:a}=e;n(t),r(t),i(t),o(t),a(t)}))},Oyt=document.getElementById("root");if(!Oyt)throw new Error("Failed to find the root element");(0,M.s)(Oyt).render((0,Wd.jsx)(Ayt,{})),Nyt()})()})();
//# sourceMappingURL=main.34271b65.js.map