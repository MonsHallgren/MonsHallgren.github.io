import{S as R,i as S,s as z,k as u,q as B,a as y,l as r,m as i,r as J,h as s,c as v,n as _,p as w,b as p,F as g,B as M}from"./index-7f8e18c5.js";function A(U){let e,x,f,o,k,j,m,c,q=`<code class="language-css">  <span class="token selector">.upgrade</span> <span class="token punctuation">&#123;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>203<span class="token punctuation">,</span> 219<span class="token punctuation">,</span> 252<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
    <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">place-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token selector">.worker</span> <span class="token punctuation">&#123;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>241<span class="token punctuation">,</span> 187<span class="token punctuation">,</span> 223<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">place-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span></code>`,b,l,D=`<code class="language-js"> <span class="token keyword">if</span> <span class="token punctuation">(</span>clicks <span class="token operator">>=</span> upgrade<span class="token punctuation">.</span>cost<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>upgrade<span class="token punctuation">.</span>multiplier<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
                multiplier <span class="token operator">=</span> multiplier <span class="token operator">*</span> upgrade<span class="token punctuation">.</span>multiplier<span class="token punctuation">;</span>
                upgrade<span class="token punctuation">.</span>cost <span class="token operator">*=</span> <span class="token number">2</span>
                clicks <span class="token operator">-=</span> upgrade<span class="token punctuation">.</span>cost<span class="token punctuation">;</span>
              <span class="token punctuation">&#125;</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>upgrade<span class="token punctuation">.</span>worker <span class="token operator">&amp;&amp;</span> clicks<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
                worker_multiplier <span class="token operator">=</span> worker_multiplier <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
                workers <span class="token operator">=</span> <span class="token punctuation">[</span>upgrade<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token operator">...</span>workers<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token comment">/* start "clicking" every 1000 ms */</span>
                <span class="token function">setInterval</span><span class="token punctuation">(</span>increment<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                clicks <span class="token operator">-=</span> upgrade<span class="token punctuation">.</span>cost<span class="token punctuation">;</span>
              <span class="token punctuation">&#125;</span>
            <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
              <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Not enough clicks"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span></code>`,h,t,d,E;return{c(){e=u("h3"),x=B("Måns:"),f=y(),o=u("div"),k=u("p"),j=B(`Under dagens lektion så har jag börjat med att andra på formen på clickern och jag har också tagit bort bakgrundsbilderna och ersatt det med enbart färg.
Jag har också ändrat så ju fler boosters man köper desto dyrare blir dem, samt sett hur man kan ändra hastigheten på workers.
Jag har även gjort några av lektionerna för att lära sig svelte.`),m=y(),c=u("pre"),b=y(),l=u("pre"),h=y(),t=u("a"),d=u("button"),E=B("Nästa Blogg"),this.h()},l(n){e=r(n,"H3",{});var a=i(e);x=J(a,"Måns:"),a.forEach(s),f=v(n),o=r(n,"DIV",{style:!0});var N=i(o);k=r(N,"P",{class:!0});var T=i(k);j=J(T,`Under dagens lektion så har jag börjat med att andra på formen på clickern och jag har också tagit bort bakgrundsbilderna och ersatt det med enbart färg.
Jag har också ändrat så ju fler boosters man köper desto dyrare blir dem, samt sett hur man kan ändra hastigheten på workers.
Jag har även gjort några av lektionerna för att lära sig svelte.`),T.forEach(s),N.forEach(s),m=v(n),c=r(n,"PRE",{class:!0});var I=i(c);I.forEach(s),b=v(n),l=r(n,"PRE",{class:!0});var L=i(l);L.forEach(s),h=v(n),t=r(n,"A",{href:!0,style:!0});var H=i(t);d=r(H,"BUTTON",{});var P=i(d);E=J(P,"Nästa Blogg"),P.forEach(s),H.forEach(s),this.h()},h(){_(k,"class","svelte-n71l5i"),w(o,"margin","20px"),_(c,"class","language-css"),_(l,"class","language-js"),_(t,"href","/devblog/blogg2"),w(t,"color","#ffffff"),w(t,"font-weight","bold"),w(t,"text-decoration","none")},m(n,a){p(n,e,a),g(e,x),p(n,f,a),p(n,o,a),g(o,k),g(k,j),p(n,m,a),p(n,c,a),c.innerHTML=q,p(n,b,a),p(n,l,a),l.innerHTML=D,p(n,h,a),p(n,t,a),g(t,d),g(d,E)},p:M,i:M,o:M,d(n){n&&s(e),n&&s(f),n&&s(o),n&&s(m),n&&s(c),n&&s(b),n&&s(l),n&&s(h),n&&s(t)}}}const F={title:"Det första arbetet med hemsidan"};class O extends R{constructor(e){super(),S(this,e,null,A,z,{})}}export{O as default,F as metadata};
