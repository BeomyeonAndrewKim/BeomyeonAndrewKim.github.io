webpackJsonp([0xd584a0776ce0],{461:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/beomyeonkim/Documents/dev/beomyeonandrewkim.github.io/src/pages/articles/2018-03-16--Level1. 문자열 내 p와 y의 개수/index.md absPath of file >>> MarkdownRemark",html:'<p>[Algorithm JavaScript] Level1. 문자열 내 p 와 y 의 개수</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/96">https://programmers.co.kr/learn/challenge_codes/96</a></h4>\n<blockquote>\n<p>numPY 함수는 대문자와 소문자가 섞여있는 문자열 s 를 매개변수로 입력받습니다.\ns 에 ‘p’의 개수와 ‘y’의 개수를 비교해 같으면 True, 다르면 False 를 리턴하도록 함수를 완성하세요. ‘p’, ‘y’ 모두 하나도 없는 경우는 항상 True 를 리턴합니다.\n예를들어 s 가 pPoooyY 면 True 를 리턴하고 Pyy 라면 False 를 리턴합니다.</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">numPY</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token keyword">var</span> answer<span class="token punctuation">;</span>\n<span class="token keyword">var</span> sLower<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> yArr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>Level1<span class="token punctuation">.</span> 문자열 내 p와 y의 개수\n<span class="token keyword">var</span> pArr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> sLower<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  item<span class="token operator">===</span><span class="token string">\'p\'</span><span class="token operator">?</span> pArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">:</span>item<span class="token operator">===</span><span class="token string">\'y\'</span><span class="token operator">?</span>yArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">:</span>answer<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\nyArr<span class="token punctuation">.</span>length<span class="token operator">===</span>pArr<span class="token punctuation">.</span>length<span class="token operator">?</span>answer<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">:</span> answer<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token keyword">return</span> answer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 실행을 위한 테스트코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"n이 3인 경우: "</span><span class="token operator">+</span> <span class="token function">waterMelon</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"n이 4인 경우: "</span><span class="token operator">+</span> <span class="token function">waterMelon</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>대문자와 소문자가 섞여있는 문자열에 대한 처리는 문자를 모두 소문자 혹은 대문자로 바꿔준다. true 혹은 false 만 반환하면 되는 상황이기 때문에 바꿔줘도 무방하다. <code class="language-text">toLowerCase</code> 나 <code class="language-text">toUpperCase</code>를 활용하면 된다.</p>\n<p>그리고 인자로 받은 문자열의 루프를 돌리고 p 혹은 y 가 있을때 각각 새로운 배열에 값을 추가했다. 상황을 일일히 <code class="language-text">if</code>를 활용한다면 코드가 길어지기에 삼항연산자를 이중으로 활용했다. p 와 y 가 없을 때도 <code class="language-text">false</code>를 반환해야하기 모두 해당 안될시엔 <code class="language-text">answer</code>라는 변수에 <code class="language-text">false</code>를 대입했다. 그리고 p 가 들어있는 배열과 y 가 들어있는 배열의 길이가 같을 때 true 를 변수 answer 에 대입했다.</p>\n<p>새로운 배열을 생성하고 대입하는 과정들, 그리고 <code class="language-text">answer</code>라는 변수를 선언해서 상황별로 <code class="language-text">true</code> 혹은 <code class="language-text">false</code>를 대입하는게 비효율적으로 느껴진다. 다른 풀이에서 효율적인 방법을 확인해보자.</p>\n<h4>Other Solutions</h4>\n<h4>Best of Best</h4>\n<blockquote>\n<p>잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,‘80 일간의 세계 일주’ 중에서</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">numPY</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">//함수를 완성하세요</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    s<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'P\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> s<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'Y\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">numPY</span><span class="token punctuation">(</span><span class="token string">\'pPoooyY\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">numPY</span><span class="token punctuation">(</span><span class="token string">\'Pyy\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>무려 한 줄로 처리가 됬다.</p>\n<p><code class="language-text">split</code>메소드의 기능은 인자로 들어간 값을 기준으로 문자를 쪼개 배열로 저장하는 것이다. 결국 인자로 받는 값의 개수에 따라 쪼개지는 베열의 요소 개수도 일정하다는 사실을 활용했다. 이는 문제에서 s 와 p 가 없을 때 <code class="language-text">true</code>를 반환하라는 조건에도 충족될 수 있다. 해당 문자가 없으면 하나의 값이 들어간 배열로 변환이 될 것이고 결국 길이는 같을 것이기 때문이다.</p>\n<p>정말 RESPECT 합니다!</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/java-script/","/tags/자바스크립트/","/tags/문자열-내-p와-y의-개수/"]},frontmatter:{title:"[Algorithm JavaScript] Level1. 문자열 내 p와 y의 개수",tags:["Algorithm","알고리즘","JavaScript","자바스크립트","문자열 내 p와 y의 개수"],date:"2018-03-16T22:12:03.284Z",description:"numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받습니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 리턴하도록 함수를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다."}}},pathContext:{slug:"/posts/algorithm/number-of-py-in-string"}}}});
//# sourceMappingURL=path---posts-algorithm-number-of-py-in-string-98f85bfebd67f8f46852.js.map