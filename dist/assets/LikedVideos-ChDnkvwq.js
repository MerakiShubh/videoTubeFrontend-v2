import{W as d,j as s,L as r,X as c}from"./index-QFptoyZp.js";import{V as n}from"./VideolistCardSkeleton-D2Wn8jTl.js";function f(){const{data:e,isLoading:x,isFetched:t}=d();return x?s.jsx("section",{className:"w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0",children:s.jsx("div",{className:"flex flex-col gap-4 p-4",children:Array(5).fill().map((l,i)=>s.jsx(n,{},i))})}):(console.log(e),e.length===0&&t?s.jsxs("section",{className:"w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0",children:[s.jsx("h1",{className:"text-3xl font-bold my-2 ml-4",children:"Liked Videos"}),s.jsx("div",{className:" ml-4 text-2xl",children:"Your Liked Videos will appear here"})]}):s.jsxs("section",{className:"w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0",children:[s.jsx("h1",{className:"text-3xl font-bold my-2 ml-4",children:"Liked Videos"}),s.jsx("div",{className:"flex flex-col gap-4 p-4",children:e&&e.map(l=>{var i,a,m;return s.jsx(r,{to:`/video/${(i=l==null?void 0:l.likedVideo)==null?void 0:i._id}`,children:s.jsx(c,{video:l==null?void 0:l.likedVideo},(a=l==null?void 0:l.likedVideo)==null?void 0:a._id)},(m=l==null?void 0:l.likedVideo)==null?void 0:m._id)})})]}))}export{f as default};
