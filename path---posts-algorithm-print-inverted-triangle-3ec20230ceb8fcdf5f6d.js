webpackJsonp([92611354532528],{429:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/BeomyeonaAndrewKim.github.io/src/pages/articles/2018-03-16--Level1. 역삼각형 출력하기/index.md absPath of file >>> MarkdownRemark",html:'<p>[Daily Algorithm_JavaScript] Level1. 역삼각형 출력하기</p>\n<h3>Question</h3>\n<h4>Source <a href="https://programmers.co.kr/learn/challenge_codes/113">https://programmers.co.kr/learn/challenge_codes/113</a></h4>\n<blockquote>\n<p>printReversedTriangle 메소드는 양의 정수 num을 매개변수로 입력받습니다.\n다음을 참고해 <code class="language-text">*</code>(별)로 높이가 num인 삼각형을 문자열로 리턴하는 printReversedTriangle 메소드를 완성하세요</p>\n<p>높이(num)가 3일때 다음과 같은 문자열을 리턴하면 됩니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">***\n**\n*</code></pre>\n      </div>\n</blockquote>\n<h3>My solution</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">printReversedTriangle</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">return</span> num<span class="token operator">&lt;</span><span class="token number">1</span><span class="token operator">?</span><span class="token string">\'\'</span><span class="token punctuation">:</span><span class="token string">\'*\'</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">\'\\n\'</span><span class="token operator">+</span><span class="token function">printReversedTriangle</span><span class="token punctuation">(</span>num<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"결과 : "</span> <span class="token operator">+</span><span class="token string">\'\\n\'</span><span class="token operator">+</span> <span class="token function">printReversedTriangle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>이전에 삼각형 출력하기의 Best of Best 답변이 바로 기억이나 활용했다. 삼항연산자의 조건으로 인자로 받은 Number값이 1보다 작을시 즉 0일때인지를 물었다. true일때는 빈 문자열 반환해 최종 return값에 영향이 없도록 했다. 그리고 false일때는 재귀함수가 실행되도록 했다. *를 인자로 받은 수 만큼 반복한 후 개행 문자를 추가한다. 그리고 해당 함수에 인자로 받은 Number값에 -1를 다시 인자를 준 함수가 실행되도록 했다.</p>\n<p>대충 그림으로 그린다면 아래와 같다.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/IMG_20180110_185110-a7b47a405b8802572726616833ef42d5-d95a8.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgP/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAAB3leotCZH/8QAFxABAQEBAAAAAAAAAAAAAAAAABIBIv/aAAgBAQABBQJer1TpT//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABoQAAICAwAAAAAAAAAAAAAAAAABEBEhQXH/2gAIAQEAAT8h0JCis8I5LH//2gAMAwEAAgADAAAAEDM//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAERIUH/2gAIAQMBAT8QvCWf/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAERIUH/2gAIAQIBAT8QrSEf/8QAHBABAAIBBQAAAAAAAAAAAAAAAQARYSExcYGR/9oACAEBAAE/EFTdKsIhiODyLKOJYuh2ku1Wf//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="그림"\n        title=""\n        src="/static/IMG_20180110_185110-a7b47a405b8802572726616833ef42d5-d564d.jpg"\n        srcset="/static/IMG_20180110_185110-a7b47a405b8802572726616833ef42d5-865fd.jpg 240w,\n/static/IMG_20180110_185110-a7b47a405b8802572726616833ef42d5-d40a0.jpg 480w,\n/static/IMG_20180110_185110-a7b47a405b8802572726616833ef42d5-d564d.jpg 960w,\n/static/IMG_20180110_185110-a7b47a405b8802572726616833ef42d5-c67c1.jpg 1440w,\n/static/IMG_20180110_185110-a7b47a405b8802572726616833ef42d5-667be.jpg 1920w,\n/static/IMG_20180110_185110-a7b47a405b8802572726616833ef42d5-d95a8.jpg 2400w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>javascript에서 재귀함수에 대한 설명과 예제가 잘 나와있는 <a href="http://webclub.tistory.com/72">링크</a>(출처: 웹클럽)</p>\n<h4>Other Solutions</h4>\n<h4>Best of Best</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">printReversedTriangle</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token string">\'\'</span>\n  <span class="token comment">// 함수를 완성하세요</span>\n  <span class="token keyword">while</span><span class="token punctuation">(</span>num<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>result<span class="token operator">+=</span><span class="token function">Array</span><span class="token punctuation">(</span>num<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">\'\\n\'</span><span class="token punctuation">;</span>num<span class="token operator">--</span><span class="token punctuation">}</span>\n  <span class="token keyword">return</span> result\n<span class="token punctuation">}</span>\n<span class="token comment">// 아래는 테스트로 출력해 보기 위한 코드입니다.</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"결과 : "</span> <span class="token operator">+</span><span class="token string">\'\\n\'</span><span class="token operator">+</span> <span class="token function">printReversedTriangle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>이해하는데 시간이 좀 걸린 풀이였다. 4개의 빈 항목이 들어있는 배열을 생성하고 join메소드를 활용해서 *를 기준으로 모든 항목을 합친 문자열을 반환하는 풀이다. 효율적인가에 대해서는 잘 모르겠지만 repeat말고도 반복하는 무언가를 반환하는 새로운 방법이란 생각이 든다.</p>',fields:{tagSlugs:["/tags/algorithm/","/tags/알고리즘/","/tags/javascript/","/tags/자바스크립트/","/tags/역삼각형-출력하기/"]},frontmatter:{title:"[Daily Algorithm_JavaScript] Level1. 역삼각형 출력하기",tags:["Algorithm","알고리즘","Javascript","자바스크립트","역삼각형 출력하기"],date:"2018-03-16T22:12:03.284Z",description:"printReversedTriangle 메소드는 양의 정수 num을 매개변수로 입력받습니다. 다음을 참고해 `*`(별)로 높이가 num인 삼각형을 문자열로 리턴하는 printReversedTriangle 메소드를 완성하세요"}}},pathContext:{slug:"/posts/algorithm/print-inverted-triangle"}}}});
//# sourceMappingURL=path---posts-algorithm-print-inverted-triangle-3ec20230ceb8fcdf5f6d.js.map