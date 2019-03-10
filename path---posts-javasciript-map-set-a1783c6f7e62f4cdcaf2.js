webpackJsonp([0x73d93a155d68],{492:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/beomyeonandrewkim.github.io/src/pages/articles/2018-04-09--[Javascript] Map, Set/index.md absPath of file >>> MarkdownRemark",html:'<h1>Map, Set</h1>\n<p>ES6 에서 새로 도입한 데이터 구조입니다.</p>\n<h2>1. Map</h2>\n<p><code class="language-text">map</code>은 키와 값을 연결하는 데이터 구조입니다.</p>\n<p>ES6 이전에는 키와 값을 연결하려면 객체를 사용해야 했습니다. 객체를 이러한 목적으로 사용하면 여러 단점이 발생했습니다.</p>\n<ul>\n<li>프로토타입 체인 떄문에 의도하지 않은 연결이 생길 수 있습니다.</li>\n<li>객체 안에 연결된 키와 값이 몇 개나 되는지 쉽게 알아낼 수 있는 방법이 없습니다.</li>\n<li>키는 반드시 문자열이나 심볼이어야 하므로 객체를 키로 써서 값과 연결할 수 없습니다.</li>\n<li>객체는 프로퍼티 순서를 전혀 보장하지 않습니다.</li>\n</ul>\n<p><code class="language-text">map</code>객체는 이러한 결함을 모두 해결했습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> u1 <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'Cynthia\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> u2 <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'Jackson\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> u3 <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'Olive\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> u4 <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'James\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> u5 <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'Andrew\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// new 키워드를 활용해 Map객체를 생성할 수 있습니다.</span>\n<span class="token keyword">const</span> userRoles <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// set 메서드를 활용해 키와 값을 할당합니다.++이미 존재하는 키에 쓰면 값이 교체 됩니다.</span>\nuserRoles<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span>u1<span class="token punctuation">,</span> <span class="token string">\'User\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nuserRoles<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span>u2<span class="token punctuation">,</span> <span class="token string">\'User\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nuserRoles<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span>u3<span class="token punctuation">,</span> <span class="token string">\'Admin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nuserRoles<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span>u4<span class="token punctuation">,</span> <span class="token string">\'Boss\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 체인으로도 연결할 수 있습니다.</span>\nuserRoles\n  <span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span>u1<span class="token punctuation">,</span> <span class="token string">\'User\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span>u2<span class="token punctuation">,</span> <span class="token string">\'User\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span>u3<span class="token punctuation">,</span> <span class="token string">\'Admin\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span>u4<span class="token punctuation">,</span> <span class="token string">\'Boss\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// get메서드를 통해 키의 값을 알 수 있습니다.</span>\nuserRoles<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>u2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\'User\'</span>\n\n<span class="token comment">// 생성자에 배열의 배열을 넘기는 형태로도 가능합니다.</span>\n<span class="token keyword">const</span> userRoles2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span>u1<span class="token punctuation">,</span> <span class="token string">\'User\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>u2<span class="token punctuation">,</span> <span class="token string">\'User\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>u3<span class="token punctuation">,</span> <span class="token string">\'Admin\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>u4<span class="token punctuation">,</span> <span class="token string">\'Boss\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//키가 존재하는지 확인하는 has메서드가 있습니다.</span>\nuserRoles<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>u1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>\nuserRoles<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>u5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>\n\n<span class="token comment">//size프로퍼티는 맵의 요소 숫자를 반환합니다.</span>\nuserRoles<span class="token punctuation">.</span>size<span class="token punctuation">;</span> <span class="token comment">//4</span>\n\n<span class="token comment">//요소를 지울 때는 delete 메서드를 사용합니다.</span>\nuserRoles<span class="token punctuation">.</span><span class="token keyword">delete</span><span class="token punctuation">(</span>u1<span class="token punctuation">)</span><span class="token punctuation">;</span>\nuserRoles<span class="token punctuation">.</span>size<span class="token punctuation">;</span> <span class="token comment">// 3</span>\n\n<span class="token comment">//clear 메서드를 활용해 맵의 요소를 모두 지울 수 있습니다.</span>\nuserRoles<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nuserRoles<span class="token punctuation">.</span>size<span class="token punctuation">;</span> <span class="token comment">// 0</span></code></pre>\n      </div>\n<p>객체와 마찬가지로 키를 배열로 반환하는<code class="language-text">keys</code>, 값을 배열로 반환하는 <code class="language-text">values</code>, 키와 값 쌍을 배열안에 배열로 반환하는 <code class="language-text">entries</code> 메서드를 활용해 <strong>이터러블 객체</strong>을 반환할 수 있습니다. <code class="language-text">for...of</code> 루프 역시 쓸 수 있습니다. 만약 배열로 반환하고 싶다면 <strong>스프레드 연산자</strong>를 활용하면 됩니다.</p>\n<p><code class="language-text">WeakMap</code>이라는 객체도 있습니다.</p>\n<ul>\n<li>키는 반드시 객체여야 합니다.</li>\n<li><code class="language-text">WeakMap</code>의 키는 가비지 콜렉션에 포함될 수 있습니다.</li>\n<li><code class="language-text">WeakMap</code>은 이터러블이 아니며 <code class="language-text">clear()</code>메서드도 없습니다.</li>\n</ul>\n<p>위 세가지를 제외하면 <code class="language-text">Map</code>객체와 동일합니다.</p>\n<h2>2. Set</h2>\n<p><code class="language-text">Set</code>은 중복을 허용하지 않는 데이터 집합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> roles <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//add 메서드를 사용해 데이터를 추가합니다.</span>\nroles<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">\'User\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Set {\'User\'}</span>\n\n<span class="token comment">//map과 마찬가지로 size 프로퍼티가 있습니다.</span>\nroles<span class="token punctuation">.</span>size<span class="token punctuation">;</span> <span class="token comment">// 1</span>\n\n<span class="token comment">//중복된 데이터를 추가하면 아무일도 일어나지 않습니다.</span>\nroles<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">\'User\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Set{\'User\'}</span>\n\n<span class="token comment">//역할을 제거할 때는 delete메서드를 호출합니다. 제거에 성공했다면, 즉 그런 역할이 셋에 존재했다면 true를 반환하고, 그렇지 않다면 false를 반환합니다.</span>\n\nroles<span class="token punctuation">.</span><span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token string">\'User\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>\nroles<span class="token punctuation">;</span> <span class="token comment">//Set{};</span></code></pre>\n      </div>\n<p><code class="language-text">Set</code>역시 <code class="language-text">WeakSet</code>이 있으며 마찬가지로 가비지 콜렉션의 대상이 됩니다. 이터러블 역시 아닙니다. 실제 용도는 주어진 객체가 셋 안에 존재하는지 아닌지를 알아보는 것뿐이라고 해도 과언이 아닙니다.</p>\n<p>Reference <a href="http://www.hanbit.co.kr/store/books/look.php?p_code=B2328850940">Learning JavaScript</a></p>',fields:{tagSlugs:["/tags/java-script/","/tags/자바스크립트/","/tags/es-2015/","/tags/map/","/tags/set/"]},frontmatter:{title:"[JavaScript] Map, Set",tags:["JavaScript","자바스크립트","ES2015","Map","Set"],date:"2018-04-08T18:15:03.284Z",description:"Map, Set ES6 에서 새로 도입한 데이터 구조입니다."}}},pathContext:{slug:"/posts/javasciript/map-set"}}}});
//# sourceMappingURL=path---posts-javasciript-map-set-a1783c6f7e62f4cdcaf2.js.map