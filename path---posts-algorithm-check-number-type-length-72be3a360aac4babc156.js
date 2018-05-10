webpackJsonp([0x9bb132001a38],{448:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/BeomyeonaAndrewKim.github.io/src/pages/articles/2018-03-16--Level1. 문자열 다루기 기본(Number타입 및 길이 확인)/index.md absPath of file >>> MarkdownRemark",html:'<p>[Algorithm JavaScript] Level1.문자열 다루기 기본(Number 타입 및 길이 확인)</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/99">https://programmers.co.kr/learn/challenge_codes/99</a></h4>\n<blockquote>\n<p>alpha_string46 함수는 문자열 s 를 매개변수로 입력받습니다.\ns 의 길이가 4 혹은 6 이고, 숫자로만 구성되있는지 확인해주는 함수를 완성하세요.\n예를들어 s 가 a234 이면 False 를 리턴하고 1234 라면 True 를 리턴하면 됩니다</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">alpha_string46</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token comment">// 함수를 완성하세요</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">||</span> s<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">alpha_string46</span><span class="token punctuation">(</span><span class="token string">\'a234\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>전체적으로 나쁘진 않은 접근이었지만 조건문에 내에 <code class="language-text">&amp;&amp;</code> 연산자 다음이 다소 불필요하게 길었다.</p>\n<p>숫자인지 확인시켜주기 위해 문자열을 parseInt 를 활용했고 연산 후 문자열이 발견될시 NaN 을 반환한다는 점을 활용했다. <code class="language-text">NaN</code> 을 판별하는 것은 <code class="language-text">isNaN</code> 이면 더욱 간결하게 만들 수 있다. <code class="language-text">Object.is</code> 가 비교 연산자 처럼 활용할 수 있다는 점을 착안했던 알고리즘이었다.</p>\n<h4>Other Solutions</h4>\n<h4>Best of Best</h4>\n<blockquote>\n<p>잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,‘80 일간의 세계 일주’ 중에서</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">alpha_string46</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> regex <span class="token operator">=</span> <span class="token regex">/^\\d{6}$|^\\d{4}$/</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> regex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">alpha_string46</span><span class="token punctuation">(</span><span class="token string">\'a234\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Javasciript 정규식이 활용되었다. 정규식은 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D" title="요기">요기</a> 참조. 아직 배우지 않은 부분이지만 비교 연산시 유용하게 활용 할 것 같다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">alpha_string46</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> s<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">||</span> s<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">6</span> <span class="token operator">?</span> <span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>간단한 조건문은 삼항연산자를 활용하는게 효율적이다. <code class="language-text">true</code> 자리에 두번째 조건을 넣으면서 <code class="language-text">?</code> 이전이 길지 않도록 한 점이 인상적이다.</p>\n<p>아직 나에겐 익숙하지 않은 <code class="language-text">map</code>을 활용하셨다. 그것도 중첩으로!</p>\n<p>요즘 읽고 있는 ‘훌륭한 프로그래머 되는 법’ 이라는 책에서도 삼항연산자 등을 활용해 코드를 간략하게 만드는 방법을 언급하고 그것은 찬양(!)한다. 삼항연산자나 short-circuit evaluation(<code class="language-text">&amp;&amp;</code>,<code class="language-text">||</code> 를 활용), <code class="language-text">map</code> <code class="language-text">forEach</code> 등 코드를 효율적으로 만들 수 있는 메소드드들을 잘 기억해둬야 할 것 같다.</p>\n<p>앞으로 React, Node.js 등 Javascript 를 활용한 웹관련 라이브러리, 엔진등을 활용할 때 <code class="language-text">map</code></p>\n<p><code class="language-text">reduce</code> 등 배열 내에 값을 처리하는 메소드들이 많이 활용된다고 했다. 이 점을 유념해야겠다.</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/java-script/","/tags/자바스크립트/","/tags/number타입-및-길이-확인/"]},frontmatter:{title:"[Algorithm JavaScript] Level1.문자열 다루기 기본(Number타입 및 길이 확인)",tags:["Algorithm","알고리즘","JavaScript","자바스크립트","Number타입 및 길이 확인"],date:"2018-03-16T22:12:03.284Z",description:"alpha_string46함수는 문자열 s를 매개변수로 입력받습니다. s의 길이가 4혹은 6이고, 숫자로만 구성되있는지 확인해주는 함수를 완성하세요. 예를들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다"}}},pathContext:{slug:"/posts/algorithm/check-number-type-length"}}}});
//# sourceMappingURL=path---posts-algorithm-check-number-type-length-72be3a360aac4babc156.js.map