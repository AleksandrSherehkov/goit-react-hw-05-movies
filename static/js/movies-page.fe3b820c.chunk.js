"use strict";(self.webpackChunkreact_project_template=self.webpackChunkreact_project_template||[]).push([[493],{69:function(e,n,t){t.d(n,{Z:function(){return A}});var r,o,i,c,a,s,u,p=t(7),l=t.n(p),f=t(504),d=t(871),v=t(889),h=t(168),x=t(499),g=t(624),b=x.Z.li(r||(r=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 10px;\n  width: calc((100% - 6 * 10px) / 3);\n"]))),m=x.Z.p(o||(o=(0,h.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n\n  color: ",";\n\n  width: 350px;\n  margin-bottom: 15px;\n"])),g.NN),j=x.Z.img(i||(i=(0,h.Z)(["\n  width: 350px;\n  margin-bottom: 15px;\n"]))),y=x.Z.div(c||(c=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 350px;\n"]))),Z=x.Z.p(a||(a=(0,h.Z)(["\n  color: ",";\n"])),g.Dq),w=x.Z.p(s||(s=(0,h.Z)(["\n  color: ",";\n"])),g.Dq),O=x.Z.span(u||(u=(0,h.Z)(["\n  font-weight: 700;\n"]))),P=t(184),k=function(e){var n=e.id,t=e.title,r=e.poster,o=e.voteAverage,i=e.voteCount,c=(0,d.TH)();return(0,P.jsx)(b,{children:(0,P.jsxs)(f.rU,{to:"/movies/".concat(n),state:{from:c},children:[(0,P.jsx)(m,{children:t||"Movie without a title"}),(0,P.jsx)(j,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):v,alt:t}),(0,P.jsxs)(y,{children:[(0,P.jsxs)(Z,{children:["Vote average: ",(0,P.jsx)(O,{children:o})]}),(0,P.jsxs)(w,{children:["Vote count:",(0,P.jsxs)(O,{children:[" ",i]})]})]})]})})};k.prototype={id:l().number,title:l().string,poster:l().string,voteAverage:l().number,voteCount:l().number};var _,q=k,C=x.Z.ul(_||(_=(0,h.Z)(["\n  min-width: 768px {\n    display: flex;\n    flex-wrap: wrap;\n    margin: -10px;\n  }\n"]))),D=function(e){var n=e.movies;return(0,P.jsx)(C,{children:n.map((function(e){var n=e.id,t=e.title,r=e.poster,o=e.voteAverage,i=e.voteCount;return(0,P.jsx)(q,{id:n,title:t,poster:r,voteAverage:o,voteCount:i},n)}))})};D.prototype={movies:l().arrayOf(l().shape({id:l().number,title:l().string,poster:l().string,voteAverage:l().number,voteCount:l().number})).isRequired};var A=D},313:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var r=t(152),o=t(791),i=t(871),c=t(861),a=t(757),s=t.n(a),u=function(){var e=(0,c.Z)(s().mark((function e(n){var t,r,o,i,c,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,r="https://api.themoviedb.org/3/search/movie",o="?api_key=".concat("32abbe5f20cc57659aefd6abb0b04352","&query=").concat(n,"&language=en-US&page=").concat(t,"&include_adult=false"),e.next=6,fetch("".concat(r).concat(o));case 6:return i=e.sent,e.next=9,i.json();case 9:return c=e.sent,e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=u;function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v,h,x,g=t(623),b=t(168),m=t(499),j=t(624),y=m.Z.form(v||(v=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),Z=m.Z.input(h||(h=(0,b.Z)(["\n  width: 500px;\n  height: 30px;\n\n  padding: 0 10px 0 10px;\n  margin-right: 15px;\n\n  border: 1px solid ",";\n  outline: none;\n"])),j.Et),w=m.Z.button(x||(x=(0,b.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 150px;\n  height: 30px;\n  margin-bottom: 30px;\n\n  font-size: 15px;\n  font-family: inherit;\n\n  background-color: ",";\n  color: ",";\n  border: none;\n\n  cursor: pointer;\n  transition: background-color ",", color ",";\n\n  :hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),j.Et,j.pU,j.Qo,j.Qo,j.Fd,j.pU),O=t(135),P=t(184),k=function(){var e=(0,i.TH)(),n=(0,i.s0)();return(0,P.jsx)(g.Z,{children:(0,P.jsxs)(y,{onSubmit:function(t){t.preventDefault();var r=t.target.elements.query.value;n(d(d({},e),{},{search:"query=".concat(r)}))},children:[(0,P.jsx)(Z,{type:"text",name:"query"}),(0,P.jsx)(w,{type:"submit",children:(0,P.jsx)(O.U41,{})})]})})},_=t(69),q=function(){var e,n=(0,i.TH)().search,t=null!==(e=new URLSearchParams(n).get("query"))&&void 0!==e?e:"",c=(0,o.useState)(null),a=(0,r.Z)(c,2),s=a[0],u=a[1];return(0,o.useEffect)((function(){""!==t&&p(t).then((function(e){var n=e.results,t=[];n.map((function(e){var n=e.id,r=e.original_title,o=e.poster_path,i=e.vote_average,c=e.vote_count,a={id:n,title:r,poster:o,voteAverage:null===i||void 0===i?void 0:i.toFixed(2),voteCount:c};return t.push(a)})),u(t)}))}),[t]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(k,{}),s&&(0,P.jsx)(g.Z,{isPadding:!0,children:(0,P.jsx)(_.Z,{movies:s})})]})}},889:function(e,n,t){e.exports=t.p+"static/media/poster.fff133b361a5be495cef.png"}}]);
//# sourceMappingURL=movies-page.fe3b820c.chunk.js.map