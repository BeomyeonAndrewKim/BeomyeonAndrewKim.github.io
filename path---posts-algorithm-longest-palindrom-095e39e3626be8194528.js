webpackJsonp([0xe4c504157273],{451:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/BeomyeonaAndrewKim.github.io/src/pages/articles/2018-03-29--Level2. 가장 긴 팰린드롬/index.md absPath of file >>> MarkdownRemark",html:'<p>[Daily Algorithm_JavaScript] Level2. 가장 긴 팰린드롬</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/84">https://programmers.co.kr/learn/challenge_codes/84</a></h4>\n<blockquote>\n<p>앞뒤를 뒤집어도 똑같은 문자열을 palindrome 이라고 합니다.\nlongest_palindrom 함수는 문자열 s 를 매개변수로 입력받습니다.\ns 의 부분문자열중 가장 긴 palindrom 의 길이를 리턴하는 함수를 완성하세요.\n예를들어 s 가 토마토맛토마토이면 7 을 리턴하고 토마토맛있어이면 3 을 리턴합니다.</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">longest_palindrom</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">let</span> arrayToCompare <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">let</span> a <span class="token operator">=</span> arrayToCompare<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">let</span> b <span class="token operator">=</span> arrayToCompare<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token keyword">return</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>이번 풀이 솔직히 별로 만족하지 못했습니다ㅠㅜ 이중 반복문을 썼고 <code class="language-text">String</code>을 <code class="language-text">Array</code>로 바꿨다가 다시 <code class="language-text">String</code>으로 바꾸는 등 성능적으로나 가독성 측면으로나 많이 허접했네요 ㅠ</p>\n<p>문자 전체부터 뒤집고 확인하고, 자릿수를 하나 줄이고 뒤집고 확인하는 식으로 짰습니다. 처음엔 <code class="language-text">String</code>인 상태로 <code class="language-text">slice</code> 메소드를 활용하려 했으나 인자로 받는 숫자를 어떻게 구성할 것인가에 대해 고민이 많았습니다. 어차피 팰린드롬을 판단하기 위해서는 문자를 뒤집어야 했기 때문에 <code class="language-text">Array</code>의 <code class="language-text">splice</code>메소드를 활용했습니다.</p>\n<p><code class="language-text">stringToCompare</code>라는 변수에 비교를 할 수 있도록 대상 <code class="language-text">String</code>을 <code class="language-text">Array</code>로 변경했습니다. 그리고 비교대상인 <code class="language-text">a</code>와 <code class="language-text">b</code>를 놓고 각각에 뒤집어 놓은 문자열과 그대로인 문자열을 대입했습니다. reverse 메소드가 새로운 <code class="language-text">Array</code>를 반환하는게 아니고 수정하는 메소드기 때문에 다시 <code class="language-text">reverse</code>메소드를 써야만 했습니다. 이 부분이 좀 아쉽네요 ㅠㅜ</p>\n<p>팰린드롬 문자열이 없다면 1 을 반환해야 했기 때문에 루프 바깥 <code class="language-text">return</code> 값으로 1 을 넣어줬습니다.</p>\n<h4>Other Solutions</h4>\n<h4>Best of Best</h4>\n<blockquote>\n<p>잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,‘80 일간의 세계 일주’ 중에서</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">longest_palindrom</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 함수를 완성하세요</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>\n    s <span class="token operator">===</span>\n    s\n      <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> A <span class="token operator">=</span> <span class="token function">longest_palindrom</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> B <span class="token operator">=</span> <span class="token function">longest_palindrom</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span> B<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">longest_palindrom</span><span class="token punctuation">(</span><span class="token string">\'토마토맛토마토\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">longest_palindrom</span><span class="token punctuation">(</span><span class="token string">\'토마토맛있어\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>재귀함수를 활용했다. 언제쯤 난 재귀함수를 여유롭게 사용할 수 있을까ㅠㅜ</p>\n<p><code class="language-text">if</code>절에서 뒤집어도 같은지에 대해서 확인을 하고 <code class="language-text">else</code>절에서 함수를 <code class="language-text">return</code>하는 식으로 재귀함수를 적용했다.</p>\n<p>여기서는 <code class="language-text">String</code>의 <code class="language-text">substring</code>메소드를 활용했다. slice 와 substring 메소드의 차이점은 <a href="https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring?utm_medium=organic&#x26;utm_source=google_rich_qa&#x26;utm_campaign=google_rich_qa">stackoverflow</a> 참고하시면 됩니다.</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/java-script/","/tags/자바스크립트/","/tags/가장-긴-팰린드롬/"]},frontmatter:{title:"[Algorithm JavaScript] Level2. 가장 긴 팰린드롬",tags:["Algorithm","알고리즘","JavaScript","자바스크립트","가장 긴 팰린드롬"],date:"2018-03-29T00:13:03.284Z",description:"앞뒤를 뒤집어도 똑같은 문자열을 palindrome이라고 합니다. longest_palindrom함수는 문자열 s를 매개변수로 입력받습니다. s의 부분문자열중 가장 긴 palindrom의 길이를 리턴하는 함수를 완성하세요."}}},pathContext:{slug:"/posts/algorithm/longest-palindrom"}}}});
//# sourceMappingURL=path---posts-algorithm-longest-palindrom-095e39e3626be8194528.js.map