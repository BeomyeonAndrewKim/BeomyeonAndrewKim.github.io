webpackJsonp([0xa92715ebe641],{466:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/BeomyeonaAndrewKim.github.io/src/pages/articles/2018-03-29--[Javascript] 객체 프로퍼티 설정/index.md absPath of file >>> MarkdownRemark",html:'<h1>객체 프로퍼티 설정</h1>\n<h2>1. 접근자 프로퍼티 getter와 setter</h2>\n<p>접근자 프로퍼티를 사용하면 데이터나 변수의 부주의한 접근을 차단하고 자연스러운 문법으로 객채의 프로퍼티를 활용할 수 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> USER_EMAIL <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">{</span>\n <span class="token keyword">set</span> <span class="token function">email</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>\n   <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex">/@/</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Invalid email: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token keyword">this</span><span class="token punctuation">[</span>USER_EMAIL<span class="token punctuation">]</span><span class="token operator">=</span> value<span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n <span class="token keyword">get</span> <span class="token function">email</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n   <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>USER_EMAIL<span class="token punctuation">]</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> u <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">\'beom911@hanmail.net\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nu<span class="token punctuation">.</span>email<span class="token operator">=</span><span class="token string">\'beom911@gmail.com\'</span><span class="token punctuation">;</span> <span class="token comment">//beom911@gmail.com</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>email<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//beom911@gmail.com</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//User { [Symbol()]: \'beom911@gmail.com\' }</span>\n</code></pre>\n      </div>\n<p>위와 같이 <code class="language-text">get</code>,<code class="language-text">set</code> 키워드는 <code class="language-text">Symbol()</code> 프로퍼티의 각각 <code class="language-text">getter</code>, <code class="language-text">setter</code> 함수를 만들어 주는 역할을 합니다.</p>\n<h2>2. 객체 프로퍼티 속성</h2>\n<p>프로퍼티에는 자신이 속한 객체 안에서 어떻게 동작할지 결정하는 <strong>속성(attribute)</strong>이 있습니다.  속성을 확인할 때는 <code class="language-text">Object.getOwnPropertyDescriptor</code>메소드를 활용합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>foo<span class="token punctuation">:</span><span class="token string">\'bar\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\nObject<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">\'foo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//{ value: \'bar\', writable: true, enumerable: true, configurable: true }</span>\n</code></pre>\n      </div>\n<p>프로퍼티 속성엔 세 가지가 있습니다.</p>\n<ul>\n<li><code class="language-text">writable</code>(쓰기 가능한지): 프로퍼티 값을 바꿀 수 있는지 아닌지 판단합니다.</li>\n<li><code class="language-text">enumerable</code>(나열 가능한지): <code class="language-text">for…in</code> 문이나 <code class="language-text">Object.keys</code>, 확산 연산자에서 객체 프로퍼티를 나열할 때 해당 프로퍼티가 포함될지 아닌지 판단합니다.</li>\n<li><code class="language-text">configurable</code>(설정 가능한지): 프로퍼티를 객체에서 삭제하거나 속성을 수정할 수 있는지 아닌지 판단합니다.</li>\n</ul>\n<p><code class="language-text">Object.defineProperty</code>로는 프로퍼티 속성을 컨트롤하거나(설정 가능한 경우) 새 프로퍼티를 만들 수 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>foo<span class="token punctuation">:</span><span class="token string">\'bar\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\nObject<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">\'foo\'</span><span class="token punctuation">,</span><span class="token punctuation">{</span> writable<span class="token punctuation">:</span><span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nobj<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>  <span class="token comment">//3</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>foo<span class="token punctuation">)</span> <span class="token comment">// \'bar</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token string">\'use strict\'</span>\n\n<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>foo<span class="token punctuation">:</span><span class="token string">\'bar\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\nObject<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">\'foo\'</span><span class="token punctuation">,</span><span class="token punctuation">{</span> writable<span class="token punctuation">:</span><span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nobj<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>  \n<span class="token comment">//TypeError: Cannot assign to read only property \'foo\' of object \'#&lt;Object>\'</span>\n</code></pre>\n      </div>\n<p><code class="language-text">Object.defineProperty</code>를 써서 객체에 새 프로퍼티를 추가할 수도 있습니다. 일반적인 데이터 프로퍼티와 달리, 객체가 일단 생성된 뒤에는 접근자 프로퍼티를 추가할 다른 방법이 없고 <code class="language-text">Object.defineProperty</code>를 쓰는 방법뿐입니다. </p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">\'color\'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n    <span class="token keyword">get</span><span class="token punctuation">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_color <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">set</span><span class="token punctuation">:</span><span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_color <span class="token operator">=</span> value <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code class="language-text">Object.defineProperty</code>로 데이터 프로퍼티를 추가할 때는 <code class="language-text">value</code> 프로퍼티를 사용하면 됩니다. <code class="language-text">obj</code>에 <code class="language-text">name</code>과 <code class="language-text">greet</code>프로퍼티를 추가하는 예제입니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'Cynthia\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nObject<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">\'greet\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!`</span></span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code class="language-text">Object.defineProperty</code>는 배열 프로퍼티를 나열할 수 없게 만들 때 주로 사용합니다. 배열은 원래 프로퍼티를 사용하지 않도록 설계됐으므로 문자열이나 심볼 프로퍼티는 사용하지 않는 게 좋습니다. 이에 따라 배열에서 <code class="language-text">for...in</code>이나 <code class="language-text">Object.keys</code>를 사용하는 것 역시 권장하지 않지만 다른 개발자가 사용하는 것을 막을 수는 없습니다. 따라서 배열에 숫자형 프로퍼티가 아닌 프로퍼티를 추가한다면 다른 누군가가 그 배열에서 <code class="language-text">for...in</code> 이나 <code class="language-text">Object.keys</code>를 사용했을 때 노출되지 않도록, 나열할 수 없게 만들어야 합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5.2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\narr<span class="token punctuation">.</span><span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token operator">=></span> a<span class="token operator">+</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\narr<span class="token punctuation">.</span><span class="token function-variable function">avg</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token punctuation">}</span>\nObject<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token string">\'sum\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> enumerable<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nObject<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token string">\'avg\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> enumerable<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5.2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nObject<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token string">\'sum\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token operator">=></span> a<span class="token operator">+</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    enumerable<span class="token punctuation">:</span><span class="token boolean">false</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nObject<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token string">\'avg\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    enumerable<span class="token punctuation">:</span> <span class="token boolean">false</span>    \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><code class="language-text">Object.defineProperties</code>도 있습니다. 이 메소드는 객체 프로퍼티 이름과 프로퍼티 정의를 서로 연결합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5.2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nObject<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    sum<span class="token punctuation">:</span><span class="token punctuation">{</span>\n    \tvalue<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token operator">=></span> a<span class="token operator">+</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    \tenumerable<span class="token punctuation">:</span><span class="token boolean">false</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    avg<span class="token punctuation">:</span><span class="token punctuation">{</span>\n    \tvalue<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    \tenumerable<span class="token punctuation">:</span> <span class="token boolean">false</span>   \n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2>3. 객체 보호: 동결, 봉인, 확장 금지</h2>\n<p> 자바스크립트의 유연성은 매우 강력하기도 하지만, 그만큼 문제가 생길 소지도 많습니다. 어떤 코드든, 그 위치가 어디이든, 다른 객체를 쉽게 바꿀 수 있으므로 의도와 달리 위험한 코드를 만들 가능성이 항상 존재합니다. </p>\n<p> 자바스크립트에는 객체를 보호해서 의도하지 않은 수정을 막고 의도적인 공격은 더 어렵게 만드는 세 가지 메커니즘이 잇습니다. 동결(freezing), 봉인(sealing), 그리고 확장 금지(preventing extension)입니다.</p>\n<ol>\n<li><strong>동결(freezing)</strong></li>\n</ol>\n<p> 동결된 객체는 수정할 방법이 없습니다. 일단 객체를 동결하면 다음과 같은 작업이 불가능해집니다</p>\n<ul>\n<li>프로퍼티 값 수정 또는 할당</li>\n<li>프로퍼티 값을 수정하는 메소드 호출</li>\n<li>setter 호출</li>\n<li>새 프로퍼티 추가</li>\n<li>새 메소드 추가</li>\n<li>기존 프로퍼티나 메서드의 설정 변경</li>\n</ul>\n<p> 객체를 동결하면 그 객체는 문자열이나 숫자처럼 불변이 됩니다. 객체를 동결하면 상태를 바꾸는 메서드가 모두 쓸모 없어지므로 데이터만 들어있는 객체에서 가장 유용합니다.</p>\n<p> 객체를 동결할 때는 <code class="language-text">Object.freeze</code>를 사용하고, 객체가 동결됐는지 확인할 때는 <code class="language-text">Object.isFrozen</code>을 사용합니다.</p>\n<ol start="2">\n<li><strong>봉인(sealing)</strong></li>\n</ol>\n<p> 객체를 봉인하면 새 프로퍼티를 추가하거나 기존 프로퍼티를 변경, 삭제할 수 없습니다. 클래스의 인스턴스를 사용하면서, 인스턴스의 프로퍼티를 수정하는 메소드는 동작하도록 할 때 봉인을 사용할 수 있습니다. </p>\n<p> 객체를 봉인할 때는 <code class="language-text">Object.seal</code>를, 객체가 봉인됐는지 확인할 때는 <code class="language-text">Object.isSealed</code>를 사용합니다.</p>\n<ol start="3">\n<li><strong>확장 금지(preventing extension)</strong></li>\n</ol>\n<p> 확장 금지를 사용하면 객체에 새 프로퍼티를 추가하는 것만 금지됩니다. 프로퍼티에 값을 할당하거나, 삭제하거나, 속성을 변경하는 작업은 모두 허용됩니다. </p>\n<p> 확장을 금지할 때는 <code class="language-text">Object.preventExtentios</code>, 확장이 금지됐는지 확인할 때는 <code class="language-text">Object.isExtensible</code>을 활용합니다.</p>\n<table>\n<thead>\n<tr>\n<th align="left">동작</th>\n<th align="center">일반 객체</th>\n<th align="center">동결 객체</th>\n<th align="center">봉인 객체</th>\n<th align="center">확장 금지 객체</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left">프로퍼티 추가</td>\n<td align="center">O</td>\n<td align="center">X</td>\n<td align="center">X</td>\n<td align="center">X</td>\n</tr>\n<tr>\n<td align="left">프로퍼티 읽기</td>\n<td align="center">O</td>\n<td align="center">O</td>\n<td align="center">O</td>\n<td align="center">O</td>\n</tr>\n<tr>\n<td align="left">프로퍼티 값 설정</td>\n<td align="center">O</td>\n<td align="center">X</td>\n<td align="center">O</td>\n<td align="center">O</td>\n</tr>\n<tr>\n<td align="left">프로퍼티 속성 변경</td>\n<td align="center">O</td>\n<td align="center">X</td>\n<td align="center">X</td>\n<td align="center">O</td>\n</tr>\n<tr>\n<td align="left">프로퍼티 삭제</td>\n<td align="center">O</td>\n<td align="center">X</td>\n<td align="center">X</td>\n<td align="center">O</td>\n</tr>\n</tbody>\n</table>\n<p> Reference <a href="http://www.hanbit.co.kr/store/books/look.php?p_code=B2328850940">Learning JavaScript</a></p>',fields:{tagSlugs:["/tags/javascript/","/tags/자바스크립트/","/tags/es-2015/","/tags/객체-프로퍼티-설정/"]},frontmatter:{title:"[Javascript] 객체 프로퍼티 설정",tags:["Javascript","자바스크립트","ES2015","객체 프로퍼티 설정"],date:"2018-03-29T18:15:03.284Z",description:"객체 프로퍼티 설정 1. 접근자 프로퍼티 getter와 setter 접근자 프로퍼티를 사용하면 데이터나 변수의 부주의한 접근을 차단하고 자연스러운 문법으로 객채의 프로퍼티를 활용할 수 있습니다."}}},pathContext:{slug:"/posts/javasciript/set-object-attribute"}}}});
//# sourceMappingURL=path---posts-javasciript-set-object-attribute-8a2ab8287867342a8031.js.map