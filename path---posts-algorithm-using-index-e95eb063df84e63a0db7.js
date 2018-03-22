webpackJsonp([0xda850f99f525],{439:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/BeomyeonaAndrewKim.github.io/src/pages/articles/2018-03-16--Level1. 서울에서 김서방 찾기(index 활용하기)/index.md absPath of file >>> MarkdownRemark",html:'<p>[Daily Algorithm_JavaScript] Level1. 서울에서 김서방 찾기(index 활용하기)</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/110">https://programmers.co.kr/learn/challenge_codes/110</a></h4>\n<blockquote>\n<p>findKim 함수(메소드)는 String형 배열 seoul을 매개변수로 받습니다.</p>\n<p>seoul의 element중 Kim의 위치 x를 찾아, 김서방은 x에 있다는 String을 반환하세요.\nseoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">findKim</span><span class="token punctuation">(</span>seoul<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">var</span> idx<span class="token punctuation">;</span>\n  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> seoul<span class="token punctuation">)</span> <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token operator">===</span><span class="token string">\'Kim\'</span><span class="token punctuation">)</span> idx<span class="token operator">=</span>seoul<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token string">"김서방은 "</span> <span class="token operator">+</span> idx <span class="token operator">+</span> <span class="token string">"에 있다"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 실행을 위한 테스트코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">findKim</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"Queen"</span><span class="token punctuation">,</span> <span class="token string">"Tod"</span><span class="token punctuation">,</span> <span class="token string">"Kim"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Array의 index를 활용해서 푸는 문제다. seoul 배열의 <code class="language-text">for</code> 루프를 돌아 “Kim”을 찾고 해당 인덱스를 idx라는 변수에 대입한 후 리턴 값에 해당 변수를 활용해 닶을 구했다. </p>\n<p>이전에 활용했던 <code class="language-text">for</code>루프 <code class="language-text">if</code>조건문의 블록 스코프의 내용이 한 줄일 경우 {}를 생략해도 된다는 점을 활용해 코드를 보기 깔끔하고 간결하게 짤 수 있었다.  Array의 프로토타입 메소드인 <code class="language-text">indexOf</code>에 대한 설명은 이 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf">링크</a>를 참고하자.</p>\n<h4>Other Solutions</h4>\n<h4>Best of Best</h4>\n<blockquote>\n<p>잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,‘80일간의 세계 일주’ 중에서</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">findKim</span><span class="token punctuation">(</span>seoul<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`김서방은 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>seoul<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">"Kim"</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">에 있다`</span></span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 실행을 위한 테스트코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">findKim</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"Queen"</span><span class="token punctuation">,</span> <span class="token string">"Tod"</span><span class="token punctuation">,</span> <span class="token string">"Kim"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>템플릿 코드<code class="language-text">&#39;&#39;</code>(백틱)를 활용해서 보다 간결하게 만들 수 있다. 사실 이 문제에서는 궂이 루프를 돌 필요가 없었다. “Kim”이라고 문제에 친절하게 위치를 찾을 문자열을 제시해 줬다. 때문에 위와 같이 바로 return값을 템플릿코드로 <code class="language-text">indexOf</code>를 활용해서 반환하면 깔끔하게 풀린다.</p>\n<p>템플릿 코드를 바로 return값에 활용한다는 점이 신선했다.  </p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/javascript/","/tags/자바스크립트/","/tags/index-활용하기/","/tags/서울에서-김서방-찾기/"]},frontmatter:{title:"[Daily Algorithm_JavaScript] Level1. 서울에서 김서방 찾기(index 활용하기)",tags:["Algorithm","알고리즘","Javascript","자바스크립트","index 활용하기","서울에서 김서방 찾기"],date:"2018-03-16T22:12:03.284Z",description:"findKim 함수(메소드)는 String형 배열 seoul을 매개변수로 받습니다. seoul의 element중 Kim의 위치 x를 찾아, 김서방은 x에 있다는 String을 반환하세요. Seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다."}}},pathContext:{slug:"/posts/algorithm/using-index"}}}});
//# sourceMappingURL=path---posts-algorithm-using-index-e95eb063df84e63a0db7.js.map