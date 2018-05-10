webpackJsonp([79847234168122],{450:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/BeomyeonaAndrewKim.github.io/src/pages/articles/2018-03-17--Level2. 콜라츠 추측/index.md absPath of file >>> MarkdownRemark",html:'<p>[Algorithm JavaScript] Level2. 콜라츠 추측</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/15">https://programmers.co.kr/learn/challenge_codes/15</a></h4>\n<blockquote>\n<p>1937 년 Collatz 란 사람에 의해 제기된 이 추측은, 입력된 수가 짝수라면 2 로 나누고, 홀수라면 3 을 곱하고 1 을 더한 다음, 결과로 나온 수에 같은 작업을 1 이 될 때까지 반복할 경우 모든 수가 1 이 된다는 추측입니다. 예를 들어, 입력된 수가 6 이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8 번 만에 1 이 됩니다. collatz 함수를 만들어 입력된 수가 몇 번 만에 1 이 되는지 반환해 주세요. 단, 500 번을 반복해도 1 이 되지 않는다면 –1 을 반환해 주세요.</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">collatz</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">500</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> i<span class="token punctuation">;</span>\n    <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      num <span class="token operator">=</span> num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> num <span class="token operator">/</span> <span class="token number">2</span> <span class="token punctuation">:</span> num <span class="token operator">*</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">collatz</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>먼저 500 번을 반복해도 1 이 되지 않는다면 -1 을 반환해야하기 때문에 500 번 도는 반복문을 만들었습니다. 그 이후에 <code class="language-text">num</code>이 1 이 된다면 반복문에서 반복횟수로 선언한 <code class="language-text">i</code>가 반환되도록 했습니다. 그리고 1 이 아니라면 collatz 추측대로 짝수일 땐 0 을 나누고, 홀 수 일 땐 3 을 곱한 후 1 을 더해 그것을 <code class="language-text">num</code>매개 변수에 재대입했습니다. 이 루프에서 500 번까지 1 이 안된다면 루프가 끝나고 함수내에 반복문 바깥에 -1 이 반환되도록 했습니다.</p>\n<p>반복문을 쓰고 그 안에 삼항연산자, <code class="language-text">if</code>문을 쓰는 건 어렵진 않으나 사실 좀 뻔한 패턴이라 생각해서 다른 삼항연산자를 물고 물어 쓰려고 했으나 실패했습니다. 아래 그렇게 푼 분이 계셔서 또 놀랐습니다! 추가적으로 매개 변수가 재대입이 된다는 사실을 이번 풀이 과정에서 처음 알게 되었습니다.</p>\n<h4>Other Solutions</h4>\n<h4>Best of Best</h4>\n<blockquote>\n<p>잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,‘80 일간의 세계 일주’ 중에서</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">collatz</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> num <span class="token operator">==</span> <span class="token number">1</span>\n    <span class="token operator">?</span> count <span class="token operator">>=</span> <span class="token number">500</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">:</span> count\n    <span class="token punctuation">:</span> <span class="token function">collatz</span><span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> num <span class="token operator">/</span> <span class="token number">2</span> <span class="token punctuation">:</span> num <span class="token operator">*</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">++</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>원래 처음에 풀어보고 싶은 스타일이었던 삼항연산자를 물고 물리는 스타일로 푸셨습니다. 그리고 <code class="language-text">collatz</code>함수 내에서 <code class="language-text">collatz</code>함수를 재활용하셨는데 음 역시 제 머리론 시간을 많이 투자해도 이런식으로는 못했을것 같네요 ㅠ <code class="language-text">collatz</code>함수를 선언함과 동시에 매개변수에 <code class="language-text">count</code> 변수를 선언후 0 으로 초기화했습니다. 그리고 <code class="language-text">collatz</code>함수 내에 있는 <code class="language-text">collatz</code>함수를 호출할 때는 매개 변수 내에서 <code class="language-text">count</code>를 늘리는 식으로 하셨네요. 굉장히 닮고 싶은 베스트 솔루션이었습니다.</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/java-script/","/tags/자바스크립트/","/tags/콜라츠-추측/"]},frontmatter:{title:"[Algorithm JavaScript] Level2. 콜라츠 추측",tags:["Algorithm","알고리즘","JavaScript","자바스크립트","콜라츠 추측"],date:"2018-03-16T22:12:03.284Z",description:"1937년 Collatz란 사람에 의해 제기된 이 추측은, 입력된 수가 짝수라면 2로 나누고, 홀수라면 3을 곱하고 1을 더한 다음, 결과로 나온 수에 같은 작업을 1이 될 때까지 반복할 경우 모든 수가 1이 된다는 추측입니다."}}},pathContext:{slug:"/posts/algorithm/collatz"}}}});
//# sourceMappingURL=path---posts-algorithm-collatz-e2cc3e7f3bd36d016a5c.js.map