webpackJsonp([76642910402698],{421:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/BeomyeonaAndrewKim.github.io/src/pages/articles/2018-03-16--Level1. 행렬의 덧셈/index.md absPath of file >>> MarkdownRemark",html:'<p>[Daily Algorithm_JavaScript] Level1. 행렬의 덧셈</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/9">https://programmers.co.kr/learn/challenge_codes/9</a></h4>\n<blockquote>\n<p>행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬을 입력받는 sumMatrix 함수를 완성하여 행렬 덧셈의 결과를 반환해 주세요.</p>\n<p>예를 들어 2x2 행렬인 A = ((1, 2), (2, 3)), B = ((3, 4), (5, 6)) 가 주어지면, 같은 2x2 행렬인 ((4, 6), (7, 9))를 반환하면 됩니다.(어떠한 행렬에도 대응하는 함수를 완성해주세요.)</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">sumMatrix</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span>B<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">var</span> answer <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> C<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>A<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    C<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">+</span>B<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    answer<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>C<span class="token punctuation">)</span><span class="token punctuation">;</span>\n     C<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> answer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>코딩 초보자다운 코드이다.</p>\n<p>배열안에 배열은 만드는 문제이기 때문에 빈배열  <code class="language-text">C</code>라는 빈 배열을 만들어 <code class="language-text">answer</code>배열안에 넣는 식으로 해결했다. 중첩 반복문과 index를 활용해 각 배열 내 배열에 대한 연산을 했다.</p>\n<p>for의 가장 원시적인 형태를 활용했기에 코드가 굉장히 길다. 새 배열이 return값으로 나오는 새로운 배열외에 <code class="language-text">C</code>라는 새 배열은 활용했기에 효율성이 매우 떨어진다.</p>\n<h4>Other Solutions</h4>\n<h4>Best of Best</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">return</span> A<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>i<span class="token punctuation">)</span> <span class="token operator">=></span> a<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">=></span> b <span class="token operator">+</span> B<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,‘80일간의 세계 일주’ 중에서</p>\n</blockquote>\n<p>보아라 이 아름다운 코드를..</p>\n<p>아직 나에겐 익숙하지 않은 <code class="language-text">map</code>을 활용하셨다. 그것도 중첩으로!</p>\n<p>요즘 읽고 있는 ‘훌륭한 프로그래머 되는 법’ 이라는 책에서도 삼항연산자 등을 활용해 코드를 간략하게 만드는 방법을 언급하고 그것은 찬양(!)한다. 삼항연산자나 short-circuit evaluation(<code class="language-text">&amp;&amp;</code>,<code class="language-text">||</code> 를 활용),   <code class="language-text">map</code> <code class="language-text">forEach</code> 등 코드를 효율적으로 만들 수 있는 메소드드들을 잘 기억해둬야 할 것 같다.</p>\n<p>앞으로 React, Node.js등 Javascript를 활용한 웹관련 라이브러리, 엔진등을 활용할 때 <code class="language-text">map</code></p>\n<p><code class="language-text">reduce</code> 등 배열 내에 값을 처리하는 메소드들이 많이 활용된다고 했다. 이 점을 유념해야겠다.</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/javascript/","/tags/자바스크립트/","/tags/행렬의-덧셈/"]},frontmatter:{title:"[Daily Algorithm_JavaScript] Level1. 행렬의 덧셈",tags:["Algorithm","알고리즘","Javascript","자바스크립트","행렬의 덧셈"],date:"2018-03-16T22:12:03.284Z",description:"행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬을 입력받는 sumMatrix 함수를 완성하여 행렬 덧셈의 결과를 반환해 주세요."}}},pathContext:{slug:"/posts/algorithm/addition-of-matrix"}}}});
//# sourceMappingURL=path---posts-algorithm-addition-of-matrix-9e1bd3d3852849a63018.js.map