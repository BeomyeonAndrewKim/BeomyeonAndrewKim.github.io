webpackJsonp([0xd39d4a61c0aa],{436:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/BeomyeonaAndrewKim.github.io/src/pages/articles/2018-03-17--Level2. 최솟값 만들기/index.md absPath of file >>> MarkdownRemark",html:'<p>[Daily Algorithm_JavaScript] Level2. 최솟값 만들기</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/181">https://programmers.co.kr/learn/challenge_codes/181</a></h4>\n<blockquote>\n<p>자연수로 이루어진 길이가 같은 수열 A,B가 있습니다. 최솟값 만들기는 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱한 값을 누적하여 더합니다. 이러한 과정을 수열의 길이만큼 반복하여 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다.</p>\n<p>예를 들어 A = <code class="language-text">[1, 2]</code> , B = <code class="language-text">[3, 4]</code> 라면</p>\n<ol>\n<li>A에서 1, B에서 4를 뽑아 곱하여 더합니다.</li>\n<li>A에서 2, B에서 3을 뽑아 곱하여 더합니다.</li>\n</ol>\n<p>수열의 길이만큼 반복하여 최솟값 <strong>10</strong>을 얻을 수 있으며, 이 <strong>10</strong>이 최솟값이 됩니다.\n수열 A,B가 주어질 때, 최솟값을 반환해주는 getMinSum 함수를 완성하세요.</p>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">getMinSum</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span>B<span class="token punctuation">)</span><span class="token punctuation">{</span>\n<span class="token keyword">let</span> answer<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>\nA<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">(</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nB<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">(</span>b<span class="token operator">-</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>A<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> answer<span class="token operator">+=</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">*</span>B<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">return</span> answer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//아래 코드는 테스트를 위한 출력 코드 입니다.</span>\n<span class="token keyword">var</span> tA <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\ttB <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getMinSum</span><span class="token punctuation">(</span>tA<span class="token punctuation">,</span>tB<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>문제가 이해하기 까다로운 편이다. 길이가 같은 배열에서 각 요소 중 하나씩 빼서 곱한 후를 누적한 값이 최솟값이 되는 알고리즘을 만드는 문제다. 각 배열에서 요소는 하나씩, 한 번씩 활용 가능하다. </p>\n<p>문제에 제시되어 있는 로직을 그대로 활용했다. 길이가 같은 배열 A,B가 있다면 A배열에서 가장 숫자가 작은 요소와 B배열에서 가장 큰 숫자를 곱한다. 그리고 A의 두번째로 작은 수와 B의 두번째로 큰 수를 곱하고 이전에 곱한 값에 더한다. 이런식으로 배열 끝까지 더해나가면 그 값이 위 문제에서 원하는 최솟값이 된다.</p>\n<p>그래서 <code class="language-text">sort</code>메소드를 활용해 배열 A는 오름차순으로 나열되도록, 배열 B는 내림차순으로 나열되도록 만들었다. 그리고 0부터 배열의 길이 -1만큼의 index값 루프를 돌려 두 배열의 각 항을 곱한 후 0이 대입되어 있는 변수 <code class="language-text">answer</code>에 더했다. 그럼 만약 배열의 길이가 3이라면 아래와 같이 반복문이 돌아간다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">A<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> B<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span>\n<span class="token punctuation">(</span>A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">*</span>B<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token punctuation">(</span>A<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">*</span>A<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token punctuation">(</span>A<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">*</span>B<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><code class="language-text">sort</code>메소드를 통해 곱해야하는 배열의 요소들 순서를 맞췄다. 그 후 공통된 index값을 활용해 필요한 연산을 했다. </p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/javascript/","/tags/자바스크립트/","/tags/최솟값-만들기/"]},frontmatter:{title:"[Daily Algorithm_JavaScript] Level1. 최솟값 만들기",tags:["Algorithm","알고리즘","Javascript","자바스크립트","최솟값 만들기"],date:"2018-03-16T22:12:03.284Z",description:"자연수로 이루어진 길이가 같은 수열 A,B가 있습니다. 최솟값 만들기는 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱한 값을 누적하여 더합니다. 이러한 과정을 수열의 길이만큼 반복하여 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다."}}},pathContext:{slug:"/posts/algorithm/make-minimun"}}}});
//# sourceMappingURL=path---posts-algorithm-make-minimun-97d9de4f7609457918d0.js.map