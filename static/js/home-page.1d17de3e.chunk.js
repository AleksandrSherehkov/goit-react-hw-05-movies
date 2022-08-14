"use strict";(self.webpackChunkreact_project_template=self.webpackChunkreact_project_template||[]).push([[223],{69:function(n,t,e){e.d(t,{Z:function(){return V}});var r,i,a,o,c,s,p,u=e(7),d=e.n(u),l=e(504),m=e(871),x=e(889),h=e(168),v=e(499),f=e(624),g=v.Z.li(r||(r=(0,h.Z)(["\n  @media (max-width: 767px) {\n    margin-bottom: 50px;\n  }\n\n  @media (min-width: 768px) {\n    display: flex;\n    justify-content: center;\n    width: calc((100% - 4 * 10px) / 2);\n    margin: 10px;\n  }\n\n  @media (min-width: 1440px) {\n    width: calc((100% - 6 * 10px) / 3);\n  }\n"]))),b=v.Z.p(i||(i=(0,h.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n\n  color: ",";\n\n  width: 300px;\n  margin-bottom: 15px;\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n"])),f.NN),w=v.Z.img(a||(a=(0,h.Z)(["\n  width: 300px;\n  margin-bottom: 15px;\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n"]))),Z=v.Z.div(o||(o=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 300px;\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n"]))),j=v.Z.p(c||(c=(0,h.Z)(["\n  color: ",";\n"])),f.Dq),y=v.Z.p(s||(s=(0,h.Z)(["\n  color: ",";\n"])),f.Dq),_=v.Z.span(p||(p=(0,h.Z)(["\n  font-weight: 700;\n"]))),C=e(184),k=function(n){var t=n.id,e=n.title,r=n.poster,i=n.voteAverage,a=n.voteCount,o=(0,m.TH)();return(0,C.jsx)(g,{children:(0,C.jsxs)(l.rU,{to:"/movies/".concat(t),state:{from:o},children:[(0,C.jsx)(b,{children:e||"Movie without a title"}),(0,C.jsx)(w,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):x,alt:e}),(0,C.jsxs)(Z,{children:[(0,C.jsxs)(j,{children:["Vote average: ",(0,C.jsx)(_,{children:i})]}),(0,C.jsxs)(y,{children:["Vote count:",(0,C.jsxs)(_,{children:[" ",a]})]})]})]})})};k.prototype={id:d().number,title:d().string,poster:d().string,voteAverage:d().number,voteCount:d().number};var A,q=k,D=v.Z.ul(A||(A=(0,h.Z)(["\n  @media (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    margin: -10px;\n  }\n"]))),N=function(n){var t=n.movies;return(0,C.jsx)(D,{children:t.map((function(n){var t=n.id,e=n.title,r=n.poster,i=n.voteAverage,a=n.voteCount;return(0,C.jsx)(q,{id:t,title:e,poster:r,voteAverage:i,voteCount:a},t)}))})};N.prototype={movies:d().arrayOf(d().shape({id:d().number,title:d().string,poster:d().string,voteAverage:d().number,voteCount:d().number})).isRequired};var V=N},590:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r=e(152),i=e(791),a=e(861),o=e(757),c=e.n(o),s=function(){var n=(0,a.Z)(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"32abbe5f20cc57659aefd6abb0b04352","https://api.themoviedb.org/3/trending/all/day",t="?api_key=".concat("32abbe5f20cc57659aefd6abb0b04352"),n.next=5,fetch("".concat("https://api.themoviedb.org/3/trending/all/day").concat(t));case 5:return e=n.sent,n.next=8,e.json();case 8:return r=n.sent,n.abrupt("return",r);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=s,u=e(623),d=e(69),l=e(184),m=function(){var n=(0,i.useState)(null),t=(0,r.Z)(n,2),e=t[0],a=t[1];return(0,i.useEffect)((function(){p().then((function(n){var t=n.results,e=[];t.map((function(n){var t={id:n.id,title:n.original_title,poster:n.poster_path,voteAverage:n.vote_average,voteCount:n.vote_count};return e.push(t)})),a(e)}))}),[]),e&&(0,l.jsx)(u.Z,{children:(0,l.jsx)(d.Z,{movies:e})})}},889:function(n,t,e){n.exports=e.p+"static/media/poster.fff133b361a5be495cef.png"}}]);
//# sourceMappingURL=home-page.1d17de3e.chunk.js.map