webpackJsonp([84651267158013],{455:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, fomer marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/BeomyeonaAndrewKim.github.io/src/pages/articles/2018-04-09--[Javascript] 캡쳐링과 버블링/index.md absPath of file >>> MarkdownRemark",html:'<h1>이벤트 버블링과 캡처링</h1>\n<p>HTML 은 계층적이므로 이벤트를 꼭 한 곳에서만 처리해야 하는 건 아닙니다. 여러 요소에서 이벤트를 처리할 수 있다면, 그 이벤트에 응답할 기회는 어떤 순서로 주어지는가 하는 의문이 생길 수 있습니다.</p>\n<p>기본적으로 두 가지 방법이 있습니다.</p>\n<ul>\n<li>캡처링(Capturing): 조상에서부터 시작하는 방법</li>\n<li>버블링(Bubbling): 이벤트가 일어난 요소에서 시작해 거슬러 올라가는 방법</li>\n</ul>\n<p><img src="https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg" alt="CapturingBubbling"></p>\n<p>​ <a href="https://www.w3.org/TR/DOM-Level-3-Events/#dom-event-architecture">출처:W3C</a></p>\n<p>HTML5 이벤트 모델에서는 두 방법을 모두 지원하기 위해 먼저 해당 요소의 가장 먼 조상에서 시작해 해당 요소까지 내려온 다음, 다시 해당 요소에서 시작해 가장 먼 조상까지 거슬라 올라가는 방법을 택했습니다.</p>\n<p>이벤트 핸들러에는 다른 핸들러가 어떻게 호출될지 영향을 주는 세 가지 방법이 잇습니다.</p>\n<ul>\n<li><code class="language-text">preventDefault</code>: 이벤트를 취소하는 메서드입니다. <code class="language-text">defaultPrevented</code> 프로퍼티가 <code class="language-text">true</code>로 바뀝니다. 브라우저의 이벤트 핸들러는 <code class="language-text">defaultPrevented</code> 프로퍼티가 <code class="language-text">true</code>로 바뀐 이벤트를 무시하고 아무 일도 하지 않습니다.</li>\n<li><code class="language-text">stopPropagation</code>: 이벤트를 현재 요소에서 끝내고 더는 전달되지 않게 막습니다. 해당 요소에 연결된 이벤트 핸들러는 동작하지만 다른 요소에 연결된 이벤트 핸들러는 동작하지 않습니다.</li>\n<li><code class="language-text">stopImmediatePropagation</code>: 다른 이벤트 핸들러, 심지어 현재 요소에 역녈된 이벤트 핸들러도 동작하지 않게 막습니다.</li>\n</ul>\n<p>Reference <a href="http://www.hanbit.co.kr/store/books/look.php?p_code=B2328850940">Learning JavaScript</a></p>',fields:{tagSlugs:["/tags/javascript/","/tags/자바스크립트/","/tags/es-2015/","/tags/버블링/","/tags/캡쳐링/"]},frontmatter:{title:"[Javascript] 버블링과 캡쳐링",tags:["Javascript","자바스크립트","ES2015","버블링","캡쳐링"],date:"2018-04-09T18:15:03.284Z",description:"버블링과 캡쳐링 HTML 은 계층적이므로 이벤트를 꼭 한 곳에서만 처리해야 하는 건 아닙니다. 여러 요소에서 이벤트를 처리할 수 있다면, 그 이벤트에 응답할 기회는 어떤 순서로 주어지는가 하는 의문이 생길 수 있습니다."}}},pathContext:{slug:"/posts/javasciript/bubbling-capturing"}}}});
//# sourceMappingURL=path---posts-javasciript-bubbling-capturing-75dbbf282adf44e2155e.js.map