(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1307:function(n,s,a){n.exports={content:[["h2","介绍"],["p","虚拟列表组件，用于展示多条数据，适用于 pc 端和移动端"]],meta:{order:1,title:"虚拟列表",filename:"components/virtual-list/demo/basic.md",id:"components-virtual-list-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#介绍",title:"介绍"},"介绍"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> VirtualList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ysol"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VirtualList</span>\n      <span class="token attr-name">itemSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Array<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> length<span class="token punctuation">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span><span class="token punctuation">(</span>item<span class="token punctuation">:</span> number<span class="token punctuation">,</span> index<span class="token punctuation">:</span> number<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n            <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              height<span class="token punctuation">:</span> <span class="token string">"40px"</span><span class="token punctuation">,</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">"rgb(80, 80, 80)"</span><span class="token punctuation">,</span>\n              color<span class="token punctuation">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>\n              borderBottom<span class="token punctuation">:</span> <span class="token string">"1px solid rgb(153 153 153)"</span><span class="token punctuation">,</span>\n              display<span class="token punctuation">:</span> <span class="token string">"flex"</span><span class="token punctuation">,</span>\n              alignItems<span class="token punctuation">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>\n              justifyContent<span class="token punctuation">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>item<span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VirtualList</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Component</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> <span class="token punctuation">{</span> VirtualList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ysol"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Component</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">VirtualList</span></span>\n      <span class="token attr-name">itemSize</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">index</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n            <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">"40px"</span><span class="token punctuation">,</span>\n              <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">"rgb(80, 80, 80)"</span><span class="token punctuation">,</span>\n              <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>\n              <span class="token literal-property property">borderBottom</span><span class="token operator">:</span> <span class="token string">"1px solid rgb(153 153 153)"</span><span class="token punctuation">,</span>\n              <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">"flex"</span><span class="token punctuation">,</span>\n              <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>\n              <span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>item<span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">VirtualList</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Component</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Component</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n=a(0),s=(a(8),a(885)),t=function(){return n.createElement(s.VirtualList,{itemSize:10,data:Array.from({length:100}).map((function(n,s){return s+1}))},(function(s,a){return n.createElement("div",{key:a,style:{height:"40px",backgroundColor:"rgb(80, 80, 80)",color:"white",borderBottom:"1px solid rgb(153 153 153)",display:"flex",alignItems:"center",justifyContent:"center"}},s)}))};return n.createElement(t,null)}}},873:function(n,s,a){n.exports={basic:a(1307)}}}]);