import{d as j,a as w,r as m,aw as N,j as s,N as g,P as v}from"./index-QFptoyZp.js";import{D as P}from"./DeletePopup-BnIn5GXc.js";import{d as C}from"./default-cover-photo-BgWz7UIz.js";function F({playlist:e,isEditAndDelete:r=!1}){var d;const i=j(),n=w(o=>o.auth.user),t=(n==null?void 0:n._id)===((d=e==null?void 0:e.owner)==null?void 0:d._id),[x,h]=m.useState(!1),[u,a]=m.useState(!1),c=()=>{h(o=>!o)},{mutateAsync:l,isPending:f}=N(),b=async()=>{await l(e._id)&&i(`/channel/${n==null?void 0:n.username}/playlist`)};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"w-full",children:[s.jsx("div",{className:"relative mb-2 w-full pt-[56%]",children:s.jsxs("div",{className:"absolute inset-0",children:[s.jsx("img",{src:(e==null?void 0:e.coverImage)||C,alt:e==null?void 0:e.name,className:"h-full w-full"}),s.jsx("div",{className:"absolute inset-x-0 bottom-0",children:s.jsx("div",{className:"relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40",children:s.jsxs("div",{className:"relative z-[1]",children:[s.jsxs("p",{className:"flex justify-between",children:[s.jsx("span",{className:"inline-block",children:"Playlist"}),s.jsxs("span",{className:"inline-block",children:[e==null?void 0:e.totalVideos," videos"]})]}),s.jsxs("p",{className:"text-sm text-gray-200",children:[e==null?void 0:e.totalViews," Views ·",g(e==null?void 0:e.updatedAt)]})]})})})]})}),s.jsxs("div",{className:"w-full flex justify-between",children:[s.jsxs("div",{children:[s.jsx("h6",{className:"mb-1 font-semibold",children:e==null?void 0:e.name}),s.jsx("p",{className:"flex text-sm text-gray-200",children:e==null?void 0:e.description})]}),r&&t&&s.jsxs("div",{className:"flex gap-x-2",children:[s.jsx("button",{onClick:c,className:"text-white w-[6rem] bg-blue-500 px-3 py-1.5 rounded-lg",children:"Edit"}),s.jsx("button",{onClick:()=>a(!0),className:"text-white w-[6rem] bg-red-500 px-3 py-1.5 rounded-lg",children:"Delete"})]})]})]}),r&&t&&x&&s.jsx(v,{onClose:c,playlist:e,isEdit:!0}),r&&t&&u&&s.jsx(P,{type:"playlist",isDeleting:f,onDeleteConfirm:b,onCancel:()=>a(!1)})]})}export{F as P};
