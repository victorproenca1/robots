(this.webpackJsonprobots=this.webpackJsonprobots||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(3),a=n.n(i),c=(n(12),n(4)),o=n(5),s=n(7),l=n(6),b=n(0),h=function(e){var t=e.name,n=e.email,r=e.id;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})]})},d=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e,n){return Object(b.jsx)(h,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},m=function(e){e.searchfield;var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Procurar rob\xf4s",onChange:t})})},u=[{id:1,nome:"Mechanized First Aid Bot",username:"first-aid-bot",email:"firstaidbot@gmail.com"},{id:2,nome:"Artificial Encryption Juggernaut",username:"encryption",email:"encryption@gmail.com"},{id:3,nome:"Extra-Terrestrial Human Protection Cyborg",username:"cyborg",email:"cyborg@gmail.com"},{id:4,nome:"Compact Life Protection Device",username:"protection-device",email:"protectiondevice@gmail.com"}],j=(n(14),function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:u,searchfield:""},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.nome.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"RoboFinder"}),Object(b.jsx)(m,{searchChange:this.onSearchChange}),Object(b.jsx)(d,{robots:t})]})}}]),n}(r.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};n(15);a.a.render(Object(b.jsx)(j,{}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.a77c7887.chunk.js.map