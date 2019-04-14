webpackJsonp([1278349916489],{478:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/beomyeonandrewkim.github.io/src/pages/articles/2018-03-16--Level1. 최대공약수와 최소공배수/index.md absPath of file >>> MarkdownRemark",html:'<p>[Algorithm JavaScript] Level1.최대공약수와 최소공배수</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/12">https://programmers.co.kr/learn/challenge_codes/12</a></h4>\n<blockquote>\n<p>두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환해주는 gcdlcm 함수를 완성해 보세요. 배열의 맨 앞에 최대공약수, 그 다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 gcdlcm(3,12) 가 입력되면, [3, 12]를 반환해주면 됩니다.</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">gcdlcm</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> answer <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> sNum <span class="token operator">=</span> a <span class="token operator">&lt;</span> b <span class="token operator">?</span> a <span class="token punctuation">:</span> b<span class="token punctuation">;</span>\n  <span class="token keyword">let</span> bNum <span class="token operator">=</span> a <span class="token operator">></span> b <span class="token operator">?</span> a <span class="token punctuation">:</span> b<span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> sNum<span class="token punctuation">;</span> i <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>sNum <span class="token operator">%</span> i <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> bNum <span class="token operator">%</span> i <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      answer<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> bNum<span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> bNum <span class="token operator">*</span> sNum<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">%</span> sNum <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">%</span> bNum <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      answer<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      j <span class="token operator">=</span> bNum <span class="token operator">*</span> sNum<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> answer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">gcdlcm</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>먼저 내 오징어 코드다.</p>\n<p>삼항 연산자를 통해 큰,작은 수를 먼저 지정한다. 그 후 반복문 내에 조건문을 통해 최대 공약수, 최소 공배수 각각 을 새로운 배열에 집어넣는 알고리즘이다.</p>\n<p>이 코드의 좋은 점은 문제가 풀렸다는 것…말곤 없다.</p>\n<p>단점은 명확하다.</p>\n<p>반복분이 두번 쓰임/반복문 내에서 답을 찾은 후 i,j 변수를 억지로 재대입 등등..</p>\n<h4>Other Solutions</h4>\n<h4>Best of Best</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">greatestCommonDivisor</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> b <span class="token operator">?</span> <span class="token function">greatestCommonDivisor</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a <span class="token operator">%</span> b<span class="token punctuation">)</span> <span class="token punctuation">:</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">leastCommonMultipleOfTwo</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> a <span class="token operator">*</span> b <span class="token operator">/</span> <span class="token function">greatestCommonDivisor</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">gcdlcm</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token function">greatestCommonDivisor</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">leastCommonMultipleOfTwo</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,‘80 일간의 세계 일주’ 중에서</p>\n</blockquote>\n<p>처음에 이 함수를 봤을때 멍했다. 사실 지금도 머리속으로는 잘 그려지지 않는다.</p>\n<p>최소공배수를 두 수를 곱한 수를 최소공약수로 나누는 것은 사실 간단한 내용인데 수학이랑 건널 수 없는 강을 건넌 나는 보는 순간 기억이 떠올랐다.</p>\n<p>이 코드의 아름다움은 첫번째 최소공약수를 구하는 삼항연사자를 통한 재귀함수식이다.</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/java-script/","/tags/자바스크립트/","/tags/최대공약수와-최소공배수/"]},frontmatter:{title:"[Algorithm JavaScript] Level1. 최대공약수와 최소공배수",tags:["Algorithm","알고리즘","JavaScript","자바스크립트","최대공약수와 최소공배수"],date:"2018-03-16T22:12:03.284Z",description:"두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환해주는 gcdlcm 함수를 완성해 보세요. 배열의 맨 앞에 최대공약수, 그 다음 최소공배수를 넣어 반환하면 됩니다."}}},pathContext:{slug:"/posts/algorithm/greatest-least-common"}}}});
//# sourceMappingURL=path---posts-algorithm-greatest-least-common-a8fb74e9124772d4d886.js.map