import{f as h,d as j,z as r,c as N,n as v,o as w,j as e,h as b,L as y,p as i,S,t as U,s as I}from"./index-QFptoyZp.js";function L(){const c=h(),o=j(),u=r.object({email:r.string().email(),username:r.string().min(4).refine(s=>!s.includes(" "),{message:"Username must not contain spaces"}).refine(s=>s===s.toLowerCase(),{message:"Username must be all lowercase"}),fullName:r.string().min(4),password:r.string().min(6),avatar:r.instanceof(FileList).refine(s=>s.length===1,{message:"Avatar is required"}),coverImage:r.instanceof(FileList).refine(s=>s.length===1,{message:"Cover Image is required"})}),{register:l,handleSubmit:d,formState:{errors:a,isSubmitting:x}}=N({resolver:U(u)}),{mutateAsync:p}=v(),{mutateAsync:g}=w(),f=async s=>{const t=new FormData;t.append("email",s.email),t.append("username",s.username),t.append("fullName",s.fullName),t.append("password",s.password),t.append("avatar",s.avatar[0]),t.append("coverImage",s.coverImage[0]);try{if(await p(t)){const m=await g({usernameOrEmail:s.email,password:s.password});m&&(c(I(m)),o("/"))}}catch(n){console.error("Signup failed:",n)}};return e.jsx("div",{className:"h-screen overflow-y-auto bg-[#0e0e0e] text-white flex justify-center items-center",children:e.jsxs("div",{className:"mx-auto my-8 flex w-full max-w-sm flex-col px-4",children:[e.jsx("div",{className:"w-full flex justify-center items-center",children:e.jsx(b,{className:"w-full text-center text-2xl font-semibold uppercase",inline:!0})}),e.jsxs("div",{className:"w-full flex flex-col items-center justify-center mb-6",children:[e.jsx("h1",{className:"text-2xl",children:"Signup"}),e.jsxs("span",{children:["Already have an account?"," ",e.jsx(y,{to:"/login",className:"text-blue-500 inline",children:"Login"})]})]}),e.jsxs("form",{onSubmit:d(f),className:"flex flex-col",children:[e.jsx(i,{label:"Email*",type:"email",placeholder:"you@example.com",id:"email",...l("email",{required:!0})}),a.email&&e.jsx("span",{className:"text-red-500 text-sm",children:a.email.message}),e.jsx(i,{label:"Username*",type:"text",placeholder:"username",id:"username",...l("username",{required:!0})}),a.username&&e.jsx("span",{className:"text-red-500 text-sm",children:a.username.message}),e.jsx(i,{label:"Full Name*",type:"text",placeholder:"John Doe",id:"fullName",...l("fullName",{required:!0})}),a.fullName&&e.jsx("span",{className:"text-red-500 text-sm",children:a.fullName.message}),e.jsx(i,{label:"Password*",type:"password",placeholder:"*******",id:"password",...l("password",{required:!0}),className:"mb-4"}),a.password&&e.jsx("span",{className:"text-red-500 text-sm",children:a.password.message}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Profile Picture*"}),e.jsx("input",{type:"file",...l("avatar",{required:!0}),className:"text-white mt-2"}),a.avatar&&e.jsx("span",{className:"text-red-500 text-sm",children:a.avatar.message})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Cover Image*"}),e.jsx("input",{type:"file",...l("coverImage",{required:!0}),className:"text-white mt-2"}),a.coverImage&&e.jsx("span",{className:"text-red-500 text-sm",children:a.coverImage.message})]}),e.jsx(S,{type:"submit",children:x?"Signing Up":"Signup"})]})]})})}export{L as default};
