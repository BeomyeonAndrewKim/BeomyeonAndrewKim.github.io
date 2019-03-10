webpackJsonp([0x7b65508699fd],{497:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Andrea's Devlog",subtitle:"I'm front-end web developer, former marketer, interested in Data Visualization and PWA. Also, passionate hiking lover.",copyright:"powerd by Gatsby, theme by lumen",author:{name:"Andrea",email:"beom911@gmail.com",instagram:"kim.andrea.by",linkedin:"beomyeon-kim-a9b453128",github:"beomyeonandrewkim",rss:"/rss.xml",facebook:"beom911"},disqusShortname:"beomyeonandrewkim",url:"https://beomyeonandrewkim.github.io"}},markdownRemark:{id:"/Users/andreakim/Documents/Dev/Blog/beomyeonandrewkim.github.io/src/pages/articles/2019-03-10--[React] Rules of Hooks/index.md absPath of file >>> MarkdownRemark",html:'<p><em>아래글은 <code class="language-text">ko.reactjs.org</code> 공식문서 번역 프로젝트의 일환으로 contribute한 번역글입니다.</em></p>\n<p><em>Hook</em>은 React 16.8에 새로 추가된 기능입니다. Hook은 class를 작성하지 않고도 state와 다른 React의 기능들을 사용할 수 있도록 해줍니다.</p>\n<p>Hook은 JavaScript 함수입니다. 하지만 Hook을 사용할 때는 두 가지 규칙을 준수해야 합니다. 우리는 이러한 규칙들을 자동으로 강제하기 위한 <a href="https://www.npmjs.com/package/eslint-plugin-react-hooks">linter 플러그인</a>을 제공하고 있습니다.</p>\n<h3>최상위(at the Top Level)에서만 Hook을 호출해야 합니다 {#only-call-hooks-at-the-top-level}</h3>\n<p><strong>반복문, 조건문 혹은 중첩된 함수 내에서 Hook을 호출하지 마세요.</strong> 대신 항상 React 함수의 최상위(at the top level)에서 Hook을 호출해야 합니다. 이 규칙을 따르면 컴포넌트가 렌더링 될 때마다 항상 동일한 순서로 Hook이 호출되는 것이 보장됩니다. 이러한 점은 React가 <code class="language-text">useState</code> 와 <code class="language-text">useEffect</code> 가 여러 번 호출되는 중에도 Hook의 상태를 올바르게 유지할 수 있도록 해줍니다. 이 점에 대해서 궁금하다면 <a href="#explanation">아래</a>에서 자세히 설명해 드리겠습니다.</p>\n<h3>오직 React 함수 내에서 Hook을 호출해야 합니다 {#only-call-hooks-from-react-functions}</h3>\n<p><strong>Hook을 일반적인 JavaScript 함수에서 호출하지 마세요.</strong> 대신 아래와 같이 호출할 수 있습니다.</p>\n<ul>\n<li>✅ React 함수 컴포넌트에서 Hook을 호출하세요.</li>\n<li>✅ Custom Hook에서 Hook을 호출하세요. (<a href="https://reactjs.orghttps://reactjs.org/docs/hooks-custom.html">다음 페이지</a>에서 이 부분을 살펴볼 예정입니다)</li>\n</ul>\n<p>이 규칙을 지키면 컴포넌트의 모든 상태 관련 로직을 소스코드에서 명확하게 보이도록 할 수 있습니다.</p>\n<h2>ESLint 플러그인 {#eslint-plugin}</h2>\n<p>우리는 이 두 가지 규칙을 강제하는 <a href="https://www.npmjs.com/package/eslint-plugin-react-hooks"><code class="language-text">eslint-plugin-react-hooks</code></a> 라는 ESLint 플러그인을 출시했습니다. 이 플러그인을 프로젝트에 추가할 수 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> eslint-plugin-react-hooks</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// ESLint 설정 파일</span>\n<span class="token punctuation">{</span>\n  <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// ...</span>\n    <span class="token string">"react-hooks"</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">"rules"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    <span class="token string">"react-hooks/rules-of-hooks"</span><span class="token punctuation">:</span> <span class="token string">"error"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>앞으로는 Create React App이나 다른 비슷한 개발 도구에 기본적으로 이 플러그인을 포함할 예정입니다.</p>\n<p><strong>어떻게 <a href="https://reactjs.org/docs/hooks-custom.html">나만의 Hook</a>을 작성할 수 있는지 설명하는 다음 장으로 지금 넘어가도 좋습니다.</strong> 이번 장에서는 계속해서 이러한 규칙들의 논리적 근거에 대해 설명할 예정입니다.</p>\n<h2>설명 {#explanation}</h2>\n<p><a href="/docs/hooks-state.html#tip-using-multiple-state-variables">이전에 배웠듯이</a> 한 컴포넌트에서 State나 Effect Hook을 여러 개 사용할 수도 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">Form</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 1. name이라는 state 변수를 사용하세요.</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'Mary\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 2. Effect를 사용해 폼 데이터를 저장하세요.</span>\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">persistForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">\'formData\'</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 3. surname이라는 state 변수를 사용하세요.</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>surname<span class="token punctuation">,</span> setSurname<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'Poppins\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 4. Effect를 사용해서 제목을 업데이트합니다.</span>\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">updateTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    document<span class="token punctuation">.</span>title <span class="token operator">=</span> name <span class="token operator">+</span> <span class="token string">\' \'</span> <span class="token operator">+</span> surname<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>그렇다면 React는 어떻게 특정 state가 어떤 <code class="language-text">useState</code> 호출에 해당하는지 알 수 있을까요? <strong>정답은 React가 Hook이 호출되는 순서에 의존한다는 것입니다.</strong> 모든 렌더링에서 Hook의 호출 순서는 같기 때문에 예시가 올바르게 동작할 수 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// ------------</span>\n<span class="token comment">// 첫 번째 렌더링</span>\n<span class="token comment">// ------------</span>\n<span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'Mary\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1. \'Mary\'라는 name state 변수를 선언합니다.</span>\n<span class="token function">useEffect</span><span class="token punctuation">(</span>persistForm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2. 폼 데이터를 저장하기 위한 effect를 추가합니다.</span>\n<span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'Poppins\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3. \'Poppins\'라는 surname state 변수를 선언합니다.</span>\n<span class="token function">useEffect</span><span class="token punctuation">(</span>updateTitle<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4. 제목을 업데이트하기 위한 effect를 추가합니다.</span>\n\n<span class="token comment">// -------------</span>\n<span class="token comment">// 두 번째 렌더링</span>\n<span class="token comment">// -------------</span>\n<span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'Mary\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1. name state 변수를 읽습니다.(인자는 무시됩니다)</span>\n<span class="token function">useEffect</span><span class="token punctuation">(</span>persistForm<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2. 폼 데이터를 저장하기 위한 effect가 대체됩니다.</span>\n<span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'Poppins\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3. surname state 변수를 읽습니다.(인자는 무시됩니다)</span>\n<span class="token function">useEffect</span><span class="token punctuation">(</span>updateTitle<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4. 제목을 업데이트하기 위한 effect가 대체됩니다.</span>\n\n<span class="token comment">// ...</span></code></pre>\n      </div>\n<p>Hook의 호출 순서가 렌더링 간에 동일하다면 React는 지역적인 state를 각 Hook에 연동시킬 수 있습니다. 하지만 만약에 Hook을 조건문 안에서(예를 들어 <code class="language-text">persistForm</code> effect) 호출한다면 어떤 일이 일어날까요?</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// 🔴 조건문에 Hook을 사용함으로써 첫 번째 규칙을 깼습니다</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">!==</span> <span class="token string">\'\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">persistForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">\'formData\'</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="language-text">name !== &#39;&#39;</code> 조건은 첫 번째 렌더링에서 <code class="language-text">true</code> 기 때문에 Hook은 동작합니다. 하지만 사용자가 그다음 렌더링에서 폼을 초기화하면서 조건을 <code class="language-text">false</code>로 만들 겁니다. 렌더링 간에 Hook을 건너뛰기 때문에 Hook 호출 순서는 달라지게 됩니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'Mary\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1. name state 변수를 읽습니다. (인자는 무시됩니다)</span>\n<span class="token comment">// useEffect(persistForm)  // 🔴 Hook을 건너뛰었습니다!</span>\n<span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'Poppins\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 🔴 2 (3이었던). surname state 변수를 읽는 데 실패했습니다.</span>\n<span class="token function">useEffect</span><span class="token punctuation">(</span>updateTitle<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 🔴 3 (4였던). 제목을 업데이트하기 위한 effect가 대체되는 데 실패했습니다.</span></code></pre>\n      </div>\n<p>React는 두 번째 <code class="language-text">useState</code> Hook 호출에 대해 무엇을 반환할지 몰랐습니다. React는 이전 렌더링 때처럼 컴포넌트 내에서 두 번째 Hook 호출이 <code class="language-text">persistForm</code> effect와 일치할 것이라 예상했지만 그렇지 않았습니다. 그 시점부터 건너뛴 Hook 다음에 호출되는 Hook이 순서가 하나씩 밀리면서 버그를 발생시키게 됩니다.</p>\n<p><strong>이것이 컴포넌트 최상위(the top of level)에서 Hook이 호출되어야만 하는 이유입니다.</strong> 만약에 조건부로 effect를 실행하기를 원한다면, 조건문을 Hook <em>내부에</em> 넣을 수 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">persistForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 👍 더 이상 첫 번째 규칙을 어기지 않습니다</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">!==</span> <span class="token string">\'\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">\'formData\'</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><strong><a href="https://www.npmjs.com/package/eslint-plugin-react-hooks">제공된 lint 규칙</a>을 활용한다면 이 문제에 대해 걱정할 필요는 없습니다.</strong> 그러나 이제 당신은 왜 Hook이 이런 식으로 동작하는지 그리고 이 규칙이 어떤 문제를 방지하는지 알고 있습니다.</p>\n<h2>다음 단계 {#next-steps}</h2>\n<p>마침내 <a href="https://reactjs.org/docs/hooks-custom.html">Custom Hook</a>을 작성하는 법을 배울 준비가 되었습니다! Custom Hook은 React에서 제공하는 Hook을 당신의 추상화된 로직으로 사용할 수 있도록 결합해주고 다른 컴포넌트 사이에서 공통의 상태 관련 로직을 재사용 할 수 있도록 해줍니다.</p>',fields:{tagSlugs:["/tags/frontend/","/tags/react/","/tags/hook/"]},frontmatter:{title:"[React 공식문서] Rules of Hooks",tags:["Frontend","React","Hook"],date:"2019-03-10T18:15:03.284Z",description:"아래글은 ko.reactjs.org 공식문서 번역 프로젝트의 일환으로 contribute한 번역글입니다."}}},pathContext:{slug:"/posts/react/rules-of-hooks"}}}});
//# sourceMappingURL=path---posts-react-rules-of-hooks-6111c1429ab1f5031e56.js.map