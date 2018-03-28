webpackJsonp([0x7530b86e2286],{440:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/BeomyeonaAndrewKim.github.io/src/pages/articles/2018-03-16--Level1. 평균 구하기/index.md absPath of file >>> MarkdownRemark",html:'<p>[Algorithm JavaScript] Level1. 평균 구하기</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/126">https://programmers.co.kr/learn/challenge_codes/126</a></h4>\n<blockquote>\n<p>함수를 완성해서 매개변수 array의 평균값을 return하도록 만들어 보세요.\n어떠한 크기의 array가 와도 평균값을 구할 수 있어야 합니다.</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">average</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token comment">//함수를 완성하세요</span>\n<span class="token keyword">let</span> answer<span class="token operator">=</span>array<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span>el<span class="token punctuation">)</span><span class="token operator">=></span> sum<span class="token operator">+</span>el<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">/</span>array<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> answer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\n<span class="token keyword">var</span> testArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">]</span> \nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"평균값 : "</span> <span class="token operator">+</span> <span class="token function">average</span><span class="token punctuation">(</span>testArray<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>ES6를 최대한 활용하려고 노력했다. ES6에서 배열을 활용할 수 있는 유용한 메소드에는 <code class="language-text">map</code>, <code class="language-text">reduce</code>, <code class="language-text">every</code>, <code class="language-text">some</code>등이 있다.( <a href="http://gnujoow.github.io/dev/2016/10/14/Dev6-es6-array-helper/">ES6 배열 메소드들이 잘 소개되어 있는 김로그님의 포스팅</a> ) </p>\n<p>이 중 활용한 것은 <code class="language-text">reduce</code>다. 참고로 매개변수에는 첫번째 콜백함수를 받는다. 콜백함수의 매개변수는(누적값, 배열의 요소, 인덱스, 배열 을 받을 수 있다. 콜백함수 다음으로 초기값을 인자로 받을 수 있다. 지정안해주면 디폴트값으로 0으로 인식한다. 더 자세한 내용은 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce">MDN</a> 문서 참조.</p>\n<p>이 메소드만 알고 있다면 기본예제에 나와있는 수준으로 풀 수 있다. 이러한 ES6의 다양한 배열 메소드들은 반복문이나 조건문을 써야할 상황에 더욱 효율적인 코드를 만들 수 있게 해준다. </p>\n<p>배열안에 배열은 만드는 문제이기 때문에 빈배열  <code class="language-text">C</code>라는 빈 배열을 만들어 <code class="language-text">answer</code>배열안에 넣는 식으로 해결했다. 중첩 반복문과 index를 활용해 각 배열 내 배열에 대한 연산을 했다.</p>\n<p>for의 가장 원시적인 형태를 활용했기에 코드가 굉장히 길다. 새 배열이 return값으로 나오는 새로운 배열외에 <code class="language-text">C</code>라는 새 배열은 활용했기에 효율성이 매우 떨어진다.</p>\n<h4>Other Solutions</h4>\n<h4>처음 javascript를 배웠을때의 풀이</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">average</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">var</span> sum<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>array<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>\n  <span class="token punctuation">{</span>\n    sum <span class="token operator">=</span> sum <span class="token operator">+</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> sum<span class="token operator">/</span>array<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\n<span class="token keyword">var</span> testArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span> \nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"평균값 : "</span> <span class="token operator">+</span> <span class="token function">average</span><span class="token punctuation">(</span>testArray<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>반복문을 써도 사실 어렵지 않게 풀 수 있다. 다만 위의 코드와의 차이는 길이 즉 효율성이 차이다.</p>\n<p>사실 다른 아이디로 이걸 풀었다는 사실을 잊고 있었다. 좋지도 않은 코드인데 따봉이 4개나! ㅋㅋㅋㅋㅋㅋ.</p>\n<p>친절한 어느 분이 댓글로 첨삭도 해주셨다. 위의 <code class="language-text">sum=sum+array[i]</code> 는 사실 <code class="language-text">sum+=array[i]</code> 로 간편하게 빠꿀 수 있다. 처음엔 참 많이도 몰랐다.</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/javascript/","/tags/자바스크립트/","/tags/평균-구하기/"]},frontmatter:{title:"[Algorithm JavaScript] Level1. 평균 구하기",tags:["Algorithm","알고리즘","Javascript","자바스크립트","평균 구하기"],date:"2018-03-16T22:12:03.284Z",description:"함수를 완성해서 매개변수 array의 평균값을 return하도록 만들어 보세요. 어떠한 크기의 array가 와도 평균값을 구할 수 있어야 합니다."}}},pathContext:{slug:"/posts/algorithm/print-average"}}}});
//# sourceMappingURL=path---posts-algorithm-print-average-ac3a1e3ea284227e15e1.js.map