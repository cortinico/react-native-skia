"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9514,4608],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},643:function(e,t,n){n.r(t),n.d(t,{default:function(){return ce}});var a=n(7294),r=n(3905),o=n(8790),l=n(2773),c=n(6010),i=n(8653),s=n(5537),u=n(3117);function d(e){return a.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var m=n(5999),p=n(102),f=n(9960),b=n(3919),h=n(541),v="menuHtmlItem_fVIQ",E=n(2389),g=["item"],y=["item","onItemClick","activePath","level","index"],k=["item","onItemClick","activePath","level","index"];function Z(e){var t=e.item,n=(0,p.Z)(e,g);switch(t.type){case"category":return a.createElement(C,(0,u.Z)({item:t},n));case"html":return a.createElement(_,(0,u.Z)({item:t},n));default:return a.createElement(S,(0,u.Z)({item:t},n))}}function C(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=e.level,l=e.index,s=(0,p.Z)(e,y),d=t.items,b=t.label,h=t.collapsible,v=t.className,g=t.href,k=function(e){var t=(0,E.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0}),[e,t])}(t),Z=(0,i._F)(t,r),C=(0,i.Mg)(g,r),_=(0,i.uR)({initialState:function(){return!!h&&(!Z&&t.collapsed)}}),S=_.collapsed,T=_.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,i.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n,r])}({isActive:Z,collapsed:S,setCollapsed:T});var N=(0,i.fP)(),x=N.expandedItem,O=N.setExpandedItem;function w(e){void 0===e&&(e=!S),O(e?null:l),T(e)}var A=(0,i.LU)().autoCollapseSidebarCategories;return(0,a.useEffect)((function(){h&&x&&x!==l&&A&&T(!0)}),[h,x,l,T,A]),a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":S},v)},a.createElement("div",{className:(0,c.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":C})},a.createElement(f.Z,(0,u.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":h&&!g,"menu__link--active":Z}),onClick:h?function(e){null==n||n(t),g?w(!1):(e.preventDefault(),w())}:function(){null==n||n(t)},"aria-current":C?"page":void 0,href:h?null!=k?k:"#":k},s),b),g&&h&&a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:b}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),w()}})),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},a.createElement(I,{items:d,tabIndex:S?-1:0,onItemClick:n,activePath:r,level:o+1})))}function _(e){var t=e.item,n=e.level,r=e.index,o=t.value,l=t.defaultStyle,s=t.className;return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(n),l&&v+" menu__list-item",s),key:r,dangerouslySetInnerHTML:{__html:o}})}function S(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=e.level,l=(e.index,(0,p.Z)(e,k)),s=t.href,d=t.label,m=t.className,v=(0,i._F)(t,r);return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:d},a.createElement(f.Z,(0,u.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":v}),"aria-current":v?"page":void 0,to:s},(0,b.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},l),(0,b.Z)(s)?d:a.createElement("span",null,d,a.createElement(h.Z,null))))}var T=["items"];function N(e){var t=e.items,n=(0,p.Z)(e,T);return a.createElement(i.D_,null,t.map((function(e,t){return a.createElement(Z,(0,u.Z)({key:t,item:e,index:t},n))})))}var I=(0,a.memo)(N),x="sidebar_CW9Y",O="sidebarWithHideableNavbar_FoYL",w="sidebarHidden_D64r",A="sidebarLogo_FJUI",M="menu_SkdO",P="menuWithAnnouncementBar_x19h",L="collapseSidebarButton_cwdi",j="collapseSidebarButtonIcon_xORG";function R(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",L),onClick:t},a.createElement(d,{className:j}))}function B(e){var t,n,r=e.path,o=e.sidebar,l=e.onCollapse,u=e.isHidden,d=function(){var e=(0,i.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,i.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),m=(0,i.LU)(),p=m.navbar.hideOnScroll,f=m.hideableSidebar;return a.createElement("div",{className:(0,c.Z)(x,(t={},t[O]=p,t[w]=u,t))},p&&a.createElement(s.Z,{tabIndex:-1,className:A}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",M,(n={},n[P]=d,n))},a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(I,{items:o,activePath:r,level:1}))),f&&a.createElement(R,{onClick:l}))}var D=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(I,{items:n,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function F(e){return a.createElement(i.Cv,{component:D,props:e})}var H=a.memo(B),W=a.memo(F);function V(e){var t=(0,i.iP)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(H,e),r&&a.createElement(W,e))}var Y=["children"],q=function(e){var t=e.children,n=(0,p.Z)(e,Y),r=(0,a.useRef)(null),o=(0,a.useState)(!1),l=o[0],c=o[1];return a.createElement("pre",(0,u.Z)({},n,{ref:r}),t,a.createElement("button",{type:"button","aria-label":(0,m.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:"copy-button",onClick:function(){r.current&&function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}r.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(Array.from(r.current.querySelectorAll("code div.line")).map((function(e){return e.textContent})).join("\n")),c(!0),setTimeout((function(){return c(!1)}),2e3)}},l?a.createElement(m.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(m.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy")))},z=n(5742),U=n(9649),X="details_BAp3";function G(e){var t=Object.assign({},e);return a.createElement(i.PO,(0,u.Z)({},t,{className:(0,c.Z)("alert alert--info",X,t.className)}))}var K=["mdxType","originalType"];var Q={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,o=(r.mdxType,r.originalType,(0,p.Z)(r,K));return a.createElement(e.props.originalType,o)}return e}(e)}));return a.createElement(z.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||a.isValidElement(e)&&t.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(q,e)},a:function(e){return a.createElement(f.Z,e)},pre:function(e){var t;return a.createElement(q,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(G,(0,u.Z)({},e,{summary:n}),r)},h1:function(e){return a.createElement(U.Z,(0,u.Z)({as:"h1"},e))},h2:function(e){return a.createElement(U.Z,(0,u.Z)({as:"h2"},e))},h3:function(e){return a.createElement(U.Z,(0,u.Z)({as:"h3"},e))},h4:function(e){return a.createElement(U.Z,(0,u.Z)({as:"h4"},e))},h5:function(e){return a.createElement(U.Z,(0,u.Z)({as:"h5"},e))},h6:function(e){return a.createElement(U.Z,(0,u.Z)({as:"h6"},e))}},J=Object.assign({},Q,{div:function(e){return"shiki-twoslash-fragment"===e.className?a.createElement(a.Fragment,null,e.children):a.createElement("div",e)},pre:function(e){return a.createElement(q,e)},code:function(e){return a.createElement("code",e)}}),$=n(4608),ee="backToTopButton_RiI4",te="backToTopButtonShow_ssHd";function ne(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}function ae(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],o=(0,a.useRef)(!1),l=ne(),s=l.smoothScrollTop,u=l.cancelScrollToTop;return(0,i.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(o.current)o.current=!1;else{var l=n<a;if(l||u(),n<300)r(!1);else if(l){var c=document.documentElement.scrollHeight;n+window.innerHeight<c&&r(!0)}else r(!1)}})),(0,i.SL)((function(e){e.location.hash&&(o.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,ee,(e={},e[te]=n,e)),type:"button",onClick:function(){return s()}})}var re=n(6775),oe={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"};function le(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,p=e.children,f=e.sidebarName,b=(0,i.Vq)(),h=u.pluginId,v=u.version,E=(0,a.useState)(!1),g=E[0],y=E[1],k=(0,a.useState)(!1),Z=k[0],C=k[1],_=(0,a.useCallback)((function(){Z&&C(!1),y((function(e){return!e}))}),[Z]);return a.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:v,tag:(0,i.os)(h,v)}},a.createElement("div",{className:oe.docPage},a.createElement(ae,null),b&&a.createElement("aside",{className:(0,c.Z)(i.kM.docs.docSidebarContainer,oe.docSidebarContainer,(t={},t[oe.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(oe.docSidebarContainer)&&g&&C(!0)}},a.createElement(V,{key:f,sidebar:b,path:s.path,onCollapse:_,isHidden:Z}),Z&&a.createElement("div",{className:oe.collapsedDocSidebar,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},a.createElement(d,{className:oe.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(oe.docMainContainer,(n={},n[oe.docMainContainerEnhanced]=g||!b,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",oe.docItemWrapper,(o={},o[oe.docItemWrapperEnhanced]=g,o))},a.createElement(r.Zo,{components:J},p)))))}function ce(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,re.LX)(r.pathname,e)}));if(!l)return a.createElement($.default,null);var c=l.sidebar,s=c?n.docsSidebars[c]:null;return a.createElement(a.Fragment,null,a.createElement(z.Z,null,a.createElement("html",{className:n.className})),a.createElement(i.qu,{version:n},a.createElement(i.bT,{sidebar:s},a.createElement(le,{currentDocRoute:l,versionMetadata:n,sidebarName:c},(0,o.H)(t,{versionMetadata:n})))))}},9649:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(3117),r=n(102),o=n(7294),l=n(6010),c=n(5999),i=n(8653),s="anchorWithStickyNavbar_mojV",u="anchorWithHideOnScrollNavbar_R0VQ",d=["as","id"],m=["as"];function p(e){var t,n=e.as,m=e.id,p=(0,r.Z)(e,d),f=(0,i.LU)().navbar.hideOnScroll;return m?o.createElement(n,(0,a.Z)({},p,{className:(0,l.Z)("anchor",(t={},t[u]=f,t[s]=!f,t)),id:m}),p.children,o.createElement("a",{className:"hash-link",href:"#"+m,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(n,p)}function f(e){var t=e.as,n=(0,r.Z)(e,m);return"h1"===t?o.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children):o.createElement(p,(0,a.Z)({as:t},n))}},4608:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var a=n(7294),r=n(2773),o=n(5999);function l(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);