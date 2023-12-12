"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[152],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>N});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),k=r,N=c["".concat(i,".").concat(k)]||c[k]||m[k]||o;return t?n.createElement(N,s(s({ref:a},d),{},{components:t})):n.createElement(N,s({ref:a},d))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=k;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},681:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const o={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/getting-started/installation"},s=void 0,l={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"React Native Skia brings the Skia Graphics Library to React Native.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/react-native-skia/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/shopify/react-native-skia/edit/main/docs/docs/getting-started/installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/getting-started/installation"},sidebar:"tutorialSidebar",next:{title:"Hello World",permalink:"/react-native-skia/docs/getting-started/hello-world"}},i={},p=[{value:"Bundle Size",id:"bundle-size",level:3},{value:"iOS",id:"ios",level:2},{value:"Android",id:"android",level:2},{value:"Proguard",id:"proguard",level:3},{value:"TroubleShooting",id:"troubleshooting",level:3},{value:"Web",id:"web",level:2},{value:"Playground",id:"playground",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Testing with Jest",id:"testing-with-jest",level:2},{value:"ESM Setup",id:"esm-setup",level:3},{value:"CommonJS Setup",id:"commonjs-setup",level:3}],d={toc:p},c="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"React Native Skia brings the ",(0,r.kt)("a",{parentName:"p",href:"https://skia.org/"},"Skia Graphics Library")," to React Native.\nSkia serves as the graphics engine for Google Chrome and Chrome OS, Android, Flutter, Mozilla Firefox, Firefox OS, and many other products."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Version compatibility:"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"react-native@>=0.66")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"react@>=18")," are required.\nIn addition you should make sure you're on at least ",(0,r.kt)("inlineCode",{parentName:"p"},"iOS 13")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Android API level 16")," or above.\nTo use React Native Skia with the new architecture, ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native@>=0.72")," is required.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install the library using yarn:")),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"yarn add @shopify/react-native-skia"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"yarn add @shopify/react-native-skia")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Or using npm:")),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"npm install @shopify/react-native-skia"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"npm install @shopify/react-native-skia")))))),(0,r.kt)("h3",{id:"bundle-size"},"Bundle Size"),(0,r.kt)("p",null,"Below is the app size increase to be expected when adding React Native Skia to your project (",(0,r.kt)("a",{parentName:"p",href:"bundle-size"},"learn more"),")."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"iOS"),(0,r.kt)("th",{parentName:"tr",align:null},"Android"),(0,r.kt)("th",{parentName:"tr",align:null},"Web"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"4 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"2.9 MB")))),(0,r.kt)("h2",{id:"ios"},"iOS"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"ios/")," directory."),(0,r.kt)("h2",{id:"android"},"Android"),(0,r.kt)("p",null,"Currently, you will need Android NDK to be installed.\nIf you have Android Studio installed, make sure ",(0,r.kt)("inlineCode",{parentName:"p"},"$ANDROID_NDK")," is available.\n",(0,r.kt)("inlineCode",{parentName:"p"},"ANDROID_NDK=/Users/username/Library/Android/sdk/ndk/<version>")," for instance."),(0,r.kt)("p",null,"If the NDK is not installed, you can install it via Android Studio by going to the menu ",(0,r.kt)("em",{parentName:"p"},"File > Project Structure")),(0,r.kt)("p",null,"And then the ",(0,r.kt)("em",{parentName:"p"},"SDK Location")," section. It will show you the NDK path, or the option to download it if you don't have it installed."),(0,r.kt)("h3",{id:"proguard"},"Proguard"),(0,r.kt)("p",null,"If you're using Proguard, make sure to add the following rule at ",(0,r.kt)("inlineCode",{parentName:"p"},"proguard-rules.pro"),":"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"-keep class com.shopify.reactnative.skia.** { *; }"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"-keep class com.shopify.reactnative.skia.** { *; }")))))),(0,r.kt)("h3",{id:"troubleshooting"},"TroubleShooting"),(0,r.kt)("p",null,"For error ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"CMake 'X.X.X' was not found in SDK, PATH, or by cmake.dir property."))),(0,r.kt)("p",null,"open ",(0,r.kt)("em",{parentName:"p"},"Tools > SDK Manager"),", switch to the ",(0,r.kt)("em",{parentName:"p"},"SDK Tools")," tab.\nFind ",(0,r.kt)("inlineCode",{parentName:"p"},"CMake")," and click ",(0,r.kt)("em",{parentName:"p"},"Show Package Details")," and download compatiable version ",(0,r.kt)("strong",{parentName:"p"},"'X.X.X'"),", and apply to install."),(0,r.kt)("h2",{id:"web"},"Web"),(0,r.kt)("p",null,"To use this library in the browser, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/web"},"these instructions"),"."),(0,r.kt)("h2",{id:"playground"},"Playground"),(0,r.kt)("p",null,"We have an example project you can play with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Shopify/react-native-skia/tree/main/example"},"here"),"."),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"yarn bootstrap")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"cd"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," example "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"&&"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," yarn start"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"sh"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"yarn bootstrap")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"cd"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," example "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"&&"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," yarn start")))))),(0,r.kt)("p",null,"To run the example project on iOS, you will need to run ",(0,r.kt)("inlineCode",{parentName:"p"},"pod install"),", and on Android, you will also need Android NDK to be installed (",(0,r.kt)("a",{parentName:"p",href:"#android"},"see here"),")."),(0,r.kt)("h2",{id:"debugging"},"Debugging"),(0,r.kt)("p",null,"As the library uses JSI for synchronous native methods access, remote debugging is no longer possible. You can use ",(0,r.kt)("a",{parentName:"p",href:"https://fbflipper.com"},"Flipper")," for debugging your JS code, however, connecting the debugger to the JS context.\nThere is also an ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native#debugging-react-native-applications"},"React Native VSCode extension")," that can provide a great debugging experience when using React Native Skia."),(0,r.kt)("h2",{id:"testing-with-jest"},"Testing with Jest"),(0,r.kt)("p",null,"React Native Skia test mocks use a web implementation that depends on loading CanvasKit."),(0,r.kt)("p",null,"The very first step is to make sure that your Skia files are not being transformed by jest, for instance, we can add it the ",(0,r.kt)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," directive:"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"transformIgnorePatterns"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},": [")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"node_modules/(?!(react-native|react-native.*|@react-native.*|@?react-navigation.*|@shopify/react-native-skia)/)"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"]"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"transformIgnorePatterns"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": [")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"node_modules/(?!(react-native|react-native.*|@react-native.*|@?react-navigation.*|@shopify/react-native-skia)/)"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]")))))),(0,r.kt)("p",null,"Next, we recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/ecmascript-modules"},"ESM"),". To enable ESM support, you need to update your ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")," command to ",(0,r.kt)("inlineCode",{parentName:"p"},"node --experimental-vm-modules node_modules/.bin/jest"),".\nBut we also support ",(0,r.kt)("a",{parentName:"p",href:"#commonjs-setup"},"CommonJS"),"."),(0,r.kt)("h3",{id:"esm-setup"},"ESM Setup"),(0,r.kt)("p",null,"To load CanvasKit and subsequently the React Native Skia mock, add the following setup file to your Jest configuration:"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// notice the extension: .mjs")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"setupFiles"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},": ["),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia/jestSetup.mjs"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"]"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// notice the extension: .mjs")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"setupFiles"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": ["),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia/jestSetup.mjs"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]")))))),(0,r.kt)("h3",{id:"commonjs-setup"},"CommonJS Setup"),(0,r.kt)("p",null,"We also offer a version of the setup file without ECMAScript modules support. To use this version, add the following setup file to your Jest configuration:"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// notice the extension: .js")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"setupFiles"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},": ["),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@shopify/react-native-skia/jestSetup.js"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"]"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}},"// notice the extension: .js")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"setupFiles"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": ["),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@shopify/react-native-skia/jestSetup.js"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]")))))),(0,r.kt)("p",null,"With this setup, you need to load the Skia environment in your test. Include the following at the top of your test file:"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"/**")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}}," * @jest-environment @shopify/react-native-skia/jestEnv.mjs")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}}," */"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}},"/**")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}}," * @jest-environment @shopify/react-native-skia/jestEnv.mjs")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}}," */")))))),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"/**")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}}," * @jest-environment @shopify/react-native-skia/jestEnv.mjs")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}}," */")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"react-native"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," React "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"react"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," { cleanup"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," render } "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"@testing-library/react-native"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," App "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"./App"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"it"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"renders correctly"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"render"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(<"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"App"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," />);")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"});")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"afterEach"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(cleanup);"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}},"/**")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}}," * @jest-environment @shopify/react-native-skia/jestEnv.mjs")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#616E88"}}," */")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"react-native"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"React"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"react"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"cleanup"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"render"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@testing-library/react-native"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"App"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"./App"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"it"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"renders correctly"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"()"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"render"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"App"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"afterEach"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"cleanup"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,r.kt)("p",null,"With this configuration, you will have properly set up Jest to work with React Native Skia mocks using either ECMAScript Modules or CommonJS."))}m.isMDXComponent=!0}}]);