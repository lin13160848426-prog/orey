 'use client';
import {useRef,useState} from 'react';
export default function InquiryFormShell({children,...props}) {
 const [status,setStatus]=useState(null),[pending,setPending]=useState(false);
 const busy=useRef(false);
 async function submit(event) {
  event.preventDefault(); if(busy.current)return;
  busy.current=true;setPending(true);setStatus(null);
  try {
   const response=await fetch('/api/inquiry',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))),signal:AbortSignal.timeout(25000)});
   const result=await response.json();
   setStatus({ok:response.ok && result.ok,message:result.message || 'Please try again or contact us by email.'});
  } catch {setStatus({ok:false,message:'Unable to connect. Your details are still here. Please try again or email us directly.'});}
  finally{busy.current=false;setPending(false);}
 }
 return <form {...props} onSubmit={submit} aria-busy={pending}>
 {children}
 <div style={{gridColumn:'1 / -1',fontSize:13,lineHeight:1.6}} role="status" aria-live="polite">
 {pending ? 'Sending your inquiry…' : status?.message}
 {status && !status.ok && <p><a href="mailto:xuminpackaging@gmail.com">Email xuminpackaging@gmail.com</a></p>}
 </div>
 </form>;
}
