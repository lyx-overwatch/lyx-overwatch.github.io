(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1018:function(n,s,a){n.exports={content:[["h2","介绍"],["p","基于 ScrollList 组件封装的城市列表组件；用于选择城市，国家等等，是很常用的业务组件，适用于 pc 端和移动端。"]],meta:{order:1,title:"城市列表选择器",filename:"components/city-list/demo/basic.md",id:"components-city-list-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#介绍",title:"介绍"},"介绍"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> CityList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ysol"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defaultCountryData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/components/CityList/constant"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>defaultCountryData<span class="token punctuation">,</span> <span class="token string">"defaultCountryData"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CityList</span> <span class="token attr-name">listData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>defaultCountryData<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CityList</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Component</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> CityList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ysol"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defaultCountryData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/components/CityList/constant"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Component</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>defaultCountryData<span class="token punctuation">,</span> <span class="token string">"defaultCountryData"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CityList</span></span> <span class="token attr-name">listData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>defaultCountryData<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">CityList</span></span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Component</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Component</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){a(0),a(8);function n(s){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(s)}var s=function(s,a){if(!a&&s&&s.__esModule)return s;if(null===s||"object"!==n(s)&&"function"!=typeof s)return{default:s};var t=o(a);if(t&&t.has(s))return t.get(s);var p={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in s)if("default"!==e&&Object.prototype.hasOwnProperty.call(s,e)){var u=c?Object.getOwnPropertyDescriptor(s,e):null;u&&(u.get||u.set)?Object.defineProperty(p,e,u):p[e]=s[e]}p.default=s,t&&t.set(s,p);return p}(a(0)),t=a(885),p=a(220);function o(n){if("function"!=typeof WeakMap)return null;var s=new WeakMap,a=new WeakMap;return(o=function(n){return n?a:s})(n)}var c=function(){return(0,s.useEffect)((function(){console.log(p.defaultCountryData,"defaultCountryData")}),[]),s.default.createElement(t.CityList,{listData:p.defaultCountryData})};return s.default.createElement(c,null)}}},857:function(n,s,a){n.exports={basic:a(1018)}}}]);