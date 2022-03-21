"use strict";(self.webpackChunkgatsby_field_office_start=self.webpackChunkgatsby_field_office_start||[]).push([[212],{3753:function(t,e,n){n.d(e,{Z:function(){return mt}});var r=n(7294),i=n(7462),a=n(4427),o=n(1652);var c=n(5987),u=n(7643),f=["xs","sm","md","lg","xl"];function d(t){var e=t.values,n=void 0===e?{xs:0,sm:600,md:960,lg:1280,xl:1920}:e,r=t.unit,a=void 0===r?"px":r,o=t.step,u=void 0===o?5:o,d=(0,c.Z)(t,["values","unit","step"]);function l(t){var e="number"==typeof n[t]?n[t]:t;return"@media (min-width:".concat(e).concat(a,")")}function s(t,e){var r=f.indexOf(e);return r===f.length-1?l(t):"@media (min-width:".concat("number"==typeof n[t]?n[t]:t).concat(a,") and ")+"(max-width:".concat((-1!==r&&"number"==typeof n[f[r+1]]?n[f[r+1]]:e)-u/100).concat(a,")")}return(0,i.Z)({keys:f,values:n,up:l,down:function(t){var e=f.indexOf(t)+1,r=n[f[e]];return e===f.length?l("xs"):"@media (max-width:".concat(("number"==typeof r&&e>0?r:t)-u/100).concat(a,")")},between:s,only:function(t){return s(t,t)},width:function(t){return n[t]}},d)}var l=n(3);function s(t,e,n){var r;return(0,i.Z)({gutters:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return console.warn(["Material-UI: theme.mixins.gutters() is deprecated.","You can use the source of the mixin directly:","\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join("\n")),(0,i.Z)({paddingLeft:e(2),paddingRight:e(2)},n,(0,l.Z)({},t.up("sm"),(0,i.Z)({paddingLeft:e(3),paddingRight:e(3)},n[t.up("sm")])))},toolbar:(r={minHeight:56},(0,l.Z)(r,"".concat(t.up("xs")," and (orientation: landscape)"),{minHeight:48}),(0,l.Z)(r,t.up("sm"),{minHeight:64}),r)},n)}function p(t){for(var e="https://material-ui.com/production-error/?code="+t,n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified Material-UI error #"+t+"; visit "+e+" for the full message."}var h={black:"#000",white:"#fff"},g={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"},m={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},v={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"},b={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},y={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},x={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},w={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function A(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(e,t),n)}function k(t){if(t.type)return t;if("#"===t.charAt(0))return k(function(t){t=t.substr(1);var e=new RegExp(".{1,".concat(t.length>=6?2:1,"}"),"g"),n=t.match(e);return n&&1===n[0].length&&(n=n.map((function(t){return t+t}))),n?"rgb".concat(4===n.length?"a":"","(").concat(n.map((function(t,e){return e<3?parseInt(t,16):Math.round(parseInt(t,16)/255*1e3)/1e3})).join(", "),")"):""}(t));var e=t.indexOf("("),n=t.substring(0,e);if(-1===["rgb","rgba","hsl","hsla"].indexOf(n))throw new Error(p(3,t));var r=t.substring(e+1,t.length-1).split(",");return{type:n,values:r=r.map((function(t){return parseFloat(t)}))}}function Z(t){var e=t.type,n=t.values;return-1!==e.indexOf("rgb")?n=n.map((function(t,e){return e<3?parseInt(t,10):t})):-1!==e.indexOf("hsl")&&(n[1]="".concat(n[1],"%"),n[2]="".concat(n[2],"%")),"".concat(e,"(").concat(n.join(", "),")")}function M(t){var e="hsl"===(t=k(t)).type?k(function(t){var e=(t=k(t)).values,n=e[0],r=e[1]/100,i=e[2]/100,a=r*Math.min(i,1-i),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(t+n/30)%12;return i-a*Math.max(Math.min(e-3,9-e,1),-1)},c="rgb",u=[Math.round(255*o(0)),Math.round(255*o(8)),Math.round(255*o(4))];return"hsla"===t.type&&(c+="a",u.push(e[3])),Z({type:c,values:u})}(t)).values:t.values;return e=e.map((function(t){return(t/=255)<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)})),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function O(t,e){if(t=k(t),e=A(e),-1!==t.type.indexOf("hsl"))t.values[2]*=1-e;else if(-1!==t.type.indexOf("rgb"))for(var n=0;n<3;n+=1)t.values[n]*=1-e;return Z(t)}function C(t,e){if(t=k(t),e=A(e),-1!==t.type.indexOf("hsl"))t.values[2]+=(100-t.values[2])*e;else if(-1!==t.type.indexOf("rgb"))for(var n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;return Z(t)}var T={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:h.white,default:g[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},R={text:{primary:h.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:g[800],default:"#303030"},action:{active:h.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function S(t,e,n,r){var i=r.light||r,a=r.dark||1.5*r;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:"light"===e?t.light=C(t.main,i):"dark"===e&&(t.dark=O(t.main,a)))}function L(t){var e=t.primary,n=void 0===e?{light:m[300],main:m[500],dark:m[700]}:e,r=t.secondary,a=void 0===r?{light:v.A200,main:v.A400,dark:v.A700}:r,o=t.error,f=void 0===o?{light:b[300],main:b[500],dark:b[700]}:o,d=t.warning,l=void 0===d?{light:y[300],main:y[500],dark:y[700]}:d,s=t.info,A=void 0===s?{light:x[300],main:x[500],dark:x[700]}:s,k=t.success,Z=void 0===k?{light:w[300],main:w[500],dark:w[700]}:k,O=t.type,C=void 0===O?"light":O,L=t.contrastThreshold,z=void 0===L?3:L,I=t.tonalOffset,_=void 0===I?.2:I,E=(0,c.Z)(t,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function B(t){var e=function(t,e){var n=M(t),r=M(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}(t,R.text.primary)>=z?R.text.primary:T.text.primary;return e}var W=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:700;if(!(t=(0,i.Z)({},t)).main&&t[e]&&(t.main=t[e]),!t.main)throw new Error(p(4,e));if("string"!=typeof t.main)throw new Error(p(5,JSON.stringify(t.main)));return S(t,"light",n,_),S(t,"dark",r,_),t.contrastText||(t.contrastText=B(t.main)),t},j={dark:R,light:T};return(0,u.Z)((0,i.Z)({common:h,type:C,primary:W(n),secondary:W(a,"A400","A200","A700"),error:W(f),warning:W(l),info:W(A),success:W(Z),grey:g,contrastThreshold:z,getContrastText:B,augmentColor:W,tonalOffset:_},j[C]),E)}function z(t){return Math.round(1e5*t)/1e5}function I(t){return z(t)}var _={textTransform:"uppercase"},E='"Roboto", "Helvetica", "Arial", sans-serif';function B(t,e){var n="function"==typeof e?e(t):e,r=n.fontFamily,a=void 0===r?E:r,o=n.fontSize,f=void 0===o?14:o,d=n.fontWeightLight,l=void 0===d?300:d,s=n.fontWeightRegular,p=void 0===s?400:s,h=n.fontWeightMedium,g=void 0===h?500:h,m=n.fontWeightBold,v=void 0===m?700:m,b=n.htmlFontSize,y=void 0===b?16:b,x=n.allVariants,w=n.pxToRem,A=(0,c.Z)(n,["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"]);var k=f/14,Z=w||function(t){return"".concat(t/y*k,"rem")},M=function(t,e,n,r,o){return(0,i.Z)({fontFamily:a,fontWeight:t,fontSize:Z(e),lineHeight:n},a===E?{letterSpacing:"".concat(z(r/e),"em")}:{},o,x)},O={h1:M(l,96,1.167,-1.5),h2:M(l,60,1.2,-.5),h3:M(p,48,1.167,0),h4:M(p,34,1.235,.25),h5:M(p,24,1.334,0),h6:M(g,20,1.6,.15),subtitle1:M(p,16,1.75,.15),subtitle2:M(g,14,1.57,.1),body1:M(p,16,1.5,.15),body2:M(p,14,1.43,.15),button:M(g,14,1.75,.4,_),caption:M(p,12,1.66,.4),overline:M(p,12,2.66,1,_)};return(0,u.Z)((0,i.Z)({htmlFontSize:y,pxToRem:Z,round:I,fontFamily:a,fontSize:f,fontWeightLight:l,fontWeightRegular:p,fontWeightMedium:g,fontWeightBold:v},O),A,{clone:!1})}function W(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(.2,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(.14,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat(.12,")")].join(",")}var j=["none",W(0,2,1,-1,0,1,1,0,0,1,3,0),W(0,3,1,-2,0,2,2,0,0,1,5,0),W(0,3,3,-2,0,3,4,0,0,1,8,0),W(0,2,4,-1,0,4,5,0,0,1,10,0),W(0,3,5,-1,0,5,8,0,0,1,14,0),W(0,3,5,-1,0,6,10,0,0,1,18,0),W(0,4,5,-2,0,7,10,1,0,2,16,1),W(0,5,5,-3,0,8,10,1,0,3,14,2),W(0,5,6,-3,0,9,12,1,0,3,16,2),W(0,6,6,-3,0,10,14,1,0,4,18,3),W(0,6,7,-4,0,11,15,1,0,4,20,3),W(0,7,8,-4,0,12,17,2,0,5,22,4),W(0,7,8,-4,0,13,19,2,0,5,24,4),W(0,7,9,-4,0,14,21,2,0,5,26,4),W(0,8,9,-5,0,15,22,2,0,6,28,5),W(0,8,10,-5,0,16,24,2,0,6,30,5),W(0,8,11,-5,0,17,26,2,0,6,32,5),W(0,9,11,-5,0,18,28,2,0,7,34,6),W(0,9,12,-6,0,19,29,2,0,7,36,6),W(0,10,13,-6,0,20,31,3,0,8,38,7),W(0,10,13,-6,0,21,33,3,0,8,40,7),W(0,10,14,-6,0,22,35,3,0,8,42,7),W(0,11,14,-7,0,23,36,3,0,9,44,8),W(0,11,15,-7,0,24,38,3,0,9,46,8)],F={borderRadius:4},H=n(885),N=n(1002),Y={xs:0,sm:600,md:960,lg:1280,xl:1920},P={keys:["xs","sm","md","lg","xl"],up:function(t){return"@media (min-width:".concat(Y[t],"px)")}};var U=function(t,e){return e?(0,u.Z)(t,e,{clone:!1}):t};var X,D,Q={m:"margin",p:"padding"},V={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},J={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},q=(X=function(t){if(t.length>2){if(!J[t])return[t];t=J[t]}var e=t.split(""),n=(0,H.Z)(e,2),r=n[0],i=n[1],a=Q[r],o=V[i]||"";return Array.isArray(o)?o.map((function(t){return a+t})):[a+o]},D={},function(t){return void 0===D[t]&&(D[t]=X(t)),D[t]}),G=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function K(t){var e=t.spacing||8;return"number"==typeof e?function(t){return e*t}:Array.isArray(e)?function(t){return e[t]}:"function"==typeof e?e:function(){}}function $(t,e){return function(n){return t.reduce((function(t,r){return t[r]=function(t,e){if("string"==typeof e||null==e)return e;var n=t(Math.abs(e));return e>=0?n:"number"==typeof n?-n:"-".concat(n)}(e,n),t}),{})}}function tt(t){var e=K(t.theme);return Object.keys(t).map((function(n){if(-1===G.indexOf(n))return null;var r=$(q(n),e),i=t[n];return function(t,e,n){if(Array.isArray(e)){var r=t.theme.breakpoints||P;return e.reduce((function(t,i,a){return t[r.up(r.keys[a])]=n(e[a]),t}),{})}if("object"===(0,N.Z)(e)){var i=t.theme.breakpoints||P;return Object.keys(e).reduce((function(t,r){return t[i.up(r)]=n(e[r]),t}),{})}return n(e)}(t,i,r)})).reduce(U,{})}tt.propTypes={},tt.filterProps=G;function et(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;if(t.mui)return t;var e=K({spacing:t}),n=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return 0===n.length?e(1):1===n.length?e(n[0]):n.map((function(t){if("string"==typeof t)return t;var n=e(t);return"number"==typeof n?"".concat(n,"px"):n})).join(" ")};return Object.defineProperty(n,"unit",{get:function(){return t}}),n.mui=!0,n}var nt={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},rt={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function it(t){return"".concat(Math.round(t),"ms")}var at={easing:nt,duration:rt,create:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.duration,r=void 0===n?rt.standard:n,i=e.easing,a=void 0===i?nt.easeInOut:i,o=e.delay,u=void 0===o?0:o;(0,c.Z)(e,["duration","easing","delay"]);return(Array.isArray(t)?t:[t]).map((function(t){return"".concat(t," ").concat("string"==typeof r?r:it(r)," ").concat(a," ").concat("string"==typeof u?u:it(u))})).join(",")},getAutoHeightDuration:function(t){if(!t)return 0;var e=t/36;return Math.round(10*(4+15*Math.pow(e,.25)+e/5))}},ot={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function ct(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.breakpoints,n=void 0===e?{}:e,r=t.mixins,i=void 0===r?{}:r,a=t.palette,o=void 0===a?{}:a,f=t.spacing,l=t.typography,p=void 0===l?{}:l,h=(0,c.Z)(t,["breakpoints","mixins","palette","spacing","typography"]),g=L(o),m=d(n),v=et(f),b=(0,u.Z)({breakpoints:m,direction:"ltr",mixins:s(m,v,i),overrides:{},palette:g,props:{},shadows:j,typography:B(g,p),spacing:v,shape:F,transitions:at,zIndex:ot},h),y=arguments.length,x=new Array(y>1?y-1:0),w=1;w<y;w++)x[w-1]=arguments[w];return b=x.reduce((function(t,e){return(0,u.Z)(t,e)}),b)}var ut=ct();var ft=n(4119),dt=n(2743),lt=ft.default.section.withConfig({displayName:"styles__ResolutionCheckerContainer",componentId:"sc-1lntmtn-0"})(["width:100%;position:relative;background:",";min-height:100vh;"],(function(t){return t.theme.colors.primary})),st=ft.default.div.withConfig({displayName:"styles__ResolutionCheckerContent",componentId:"sc-1lntmtn-1"})(["max-width:450px;padding:260px 20px 135px;margin:0 auto;text-align:center;@media (max-width:","){padding:160px 20px 35px;}"],(function(t){return t.theme.breakpoints.s})),pt=(0,ft.default)(dt.Z).withConfig({displayName:"styles__HeaderCaptionTypography",componentId:"sc-1lntmtn-2"})(["position:absolute;top:25px;left:25px;color:",";font-size:24px !important;@media (max-width:","){font-size:18px !important;}"],(function(t){return t.theme.colors.blue}),(function(t){return t.theme.breakpoints.s})),ht=(0,ft.default)(dt.Z).withConfig({displayName:"styles__TitleTypography",componentId:"sc-1lntmtn-3"})(["margin:40px auto 275px;color:",";font-size:32px !important;@media (max-width:","){font-size:26px !important;margin:40px auto 150px;line-height:1.2;}"],(function(t){return t.theme.colors.blue}),(function(t){return t.theme.breakpoints.s})),gt=(0,ft.default)(dt.Z).withConfig({displayName:"styles__BodyTypography",componentId:"sc-1lntmtn-4"})(["color:",";line-height:1.4 !important;"],(function(t){return t.theme.colors.dark_grey})),mt=function(t){var e=t.children,n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,a.Z)(),c=(0,o.Z)({theme:n,name:"MuiUseMediaQuery",props:{}}),u="function"==typeof t?t(n):t;u=u.replace(/^@media( ?)/m,"");var f="undefined"!=typeof window&&void 0!==window.matchMedia,d=(0,i.Z)({},c,e),l=d.defaultMatches,s=void 0!==l&&l,p=d.matchMedia,h=void 0===p?f?window.matchMedia:null:p,g=d.noSsr,m=void 0!==g&&g,v=d.ssrMatchMedia,b=void 0===v?null:v,y=r.useState((function(){return m&&f?h(u).matches:b?b(u).matches:s})),x=y[0],w=y[1];return r.useEffect((function(){var t=!0;if(f){var e=h(u),n=function(){t&&w(e.matches)};return n(),e.addListener(n),function(){t=!1,e.removeListener(n)}}}),[u,h,f]),x}(((0,a.Z)()||ut).breakpoints.down("1000"));return n?r.createElement(lt,null,r.createElement(pt,null,"Les Lignes du temps du Québec"),r.createElement(st,null,r.createElement("div",null,r.createElement("svg",{width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("circle",{cx:"35",cy:"35",r:"35",fill:"#7E8BC3"}),r.createElement("path",{d:"M36.8809 39.459H33.207L32.8027 21.4062H37.3027L36.8809 39.459ZM32.6797 44.9785C32.6797 44.3105 32.8965 43.7598 33.3301 43.3262C33.7637 42.8809 34.3555 42.6582 35.1055 42.6582C35.8555 42.6582 36.4473 42.8809 36.8809 43.3262C37.3145 43.7598 37.5312 44.3105 37.5312 44.9785C37.5312 45.623 37.3203 46.1621 36.8984 46.5957C36.4766 47.0293 35.8789 47.2461 35.1055 47.2461C34.332 47.2461 33.7344 47.0293 33.3125 46.5957C32.8906 46.1621 32.6797 45.623 32.6797 44.9785Z",fill:"black"}))),r.createElement(ht,null,"La résolution de cette écran est malheureusement insuffisante pour profiter de l'expérience."),r.createElement(gt,{elementTheme:"h5"},"Si vous êtes sur une tablette, vous pouvez essayer de la pivoter. Sinon, merci de réessayer avec un ordinateur."))):e}},3:function(t,e,n){function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return r}})},885:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(181);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a=[],o=!0,c=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);o=!0);}catch(u){c=!0,i=u}finally{try{o||null==n.return||n.return()}finally{if(c)throw i}}return a}}(t,e)||(0,r.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=02871f6521d1e5e9d3cd4ae5ae599bb64a581147-bd96eff5afe7e6d31db0.js.map