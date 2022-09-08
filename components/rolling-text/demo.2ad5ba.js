(self.webpackChunkysol=self.webpackChunkysol||[]).push([[545],{45020:(n,s,a)=>{n.exports={content:[["h2","介绍"],["p","文字滚动组件，用于展示多条需要滚动的信息，适用于 pc 端和移动端"],["h2","注意"],["p","需要保证容器的宽度小于内容的宽度，才能触发滚动"]],meta:{order:1,title:"文字滚动",filename:"components/rolling-text/demo/basic.md",id:"components-rolling-text-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#介绍",title:"介绍"},"介绍"]],["li",["a",{className:"bisheng-toc-h2",href:"#注意",title:"注意"},"注意"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> RollingText <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ysol"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> textData <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">"我是第一行滚动文字，第一行滚动文字，第一行滚动文字，第一行滚动文字"</span><span class="token punctuation">,</span>\n  <span class="token string">"我是第二行滚动文字，第二行滚动文字，第二行滚动文字，第二行滚动文字"</span><span class="token punctuation">,</span>\n  <span class="token string">"我是第三行滚动文字，第三行滚动文字，第三行滚动文字，第三行滚动文字"</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RollingText</span>\n      <span class="token attr-name">array</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>textData<span class="token punctuation">}</span></span>\n      <span class="token attr-name">behindfix</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lyx-website-rolling<span class="token punctuation">"</span></span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">"300px"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RollingText</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Component</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> <span class="token punctuation">{</span> RollingText <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ysol"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> textData <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">"我是第一行滚动文字，第一行滚动文字，第一行滚动文字，第一行滚动文字"</span><span class="token punctuation">,</span>\n  <span class="token string">"我是第二行滚动文字，第二行滚动文字，第二行滚动文字，第二行滚动文字"</span><span class="token punctuation">,</span>\n  <span class="token string">"我是第三行滚动文字，第三行滚动文字，第三行滚动文字，第三行滚动文字"</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Component</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RollingText</span></span>\n      <span class="token attr-name">array</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>textData<span class="token punctuation">}</span></span>\n      <span class="token attr-name">behindfix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lyx-website-rolling<span class="token punctuation">"</span></span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"300px"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RollingText</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Component</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Component</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n=a(67294),s=(a(73935),a(11330)),t=["我是第一行滚动文字，第一行滚动文字，第一行滚动文字，第一行滚动文字","我是第二行滚动文字，第二行滚动文字，第二行滚动文字，第二行滚动文字","我是第三行滚动文字，第三行滚动文字，第三行滚动文字，第三行滚动文字"],p=function(){return n.createElement(s.RollingText,{array:t,behindfix:"lyx-website-rolling",style:{width:"300px"}})};return n.createElement(p,null)}}},14874:(n,s,a)=>{n.exports={basic:a(45020)}}}]);