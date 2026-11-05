 'use client';
import {useEffect,useRef,useState} from 'react';
import InquiryFormShell from './InquiryFormShell';
import InquiryFields from './InquiryFields';
import styles from './InquiryPopup.module.css';
export function openInquiry(request='Quotation') {window.dispatchEvent(new CustomEvent('xumin:inquiry',{detail:request}));}
export default function InquiryPopup(){
 const dialog=useRef(null),previous=useRef(null),shown=useRef(false);
 const [mode,setMode]=useState('Quotation');
 useEffect(()=>{
  let ready=false;
  const timer=setTimeout(()=>{ready=true},15000);
  function show(value){
   if(dialog.current.open)return;
   previous.current=document.activeElement;setMode(value);shown.current=true;
   try{sessionStorage.setItem('xumin-inquiry-seen','1')}catch{}
   dialog.current.showModal();
  }
  const manual=e=>show(e.detail || 'Quotation');
  function exit(e){
   if(!ready || shown.current || e.clientY>0 || !matchMedia('(hover: hover) and (pointer: fine)').matches)return;
   if(document.querySelector('input:focus,textarea:focus,select:focus,dialog[open],[role="dialog"]'))return;
   try{if(sessionStorage.getItem('xumin-inquiry-seen'))return}catch{}
   show('Before you go');
  }
  window.addEventListener('xumin:inquiry',manual);document.documentElement.addEventListener('mouseleave',exit);
  return()=>{clearTimeout(timer);window.removeEventListener('xumin:inquiry',manual);document.documentElement.removeEventListener('mouseleave',exit)};
 },[]);
 const close=()=>dialog.current.close();
 return <dialog ref={dialog} className={styles.dialog} aria-labelledby="inquiry-popup-title" onClose={()=>previous.current?.focus()} onClick={e=>{if(e.target===dialog.current){const r=dialog.current.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close()}}}>
 <button type="button" className={styles.close} aria-label="Close inquiry" onClick={close}>×</button>
 <div className={styles.intro}><span className={styles.kicker}>XUMIN · LET’S TALK PACKAGING</span><h2 id="inquiry-popup-title">{mode==='Before you go'?'Still finding the right fit?':mode==='Sample request'?'Start with a sample.':'Your next idea starts here.'}</h2><p>{mode==='Before you go'?'Tell us what you’re looking for. We can help you explore the options.':'Share a few details. Let’s find the right packaging for your project.'}</p><div className={styles.tags}><span>Product selection</span><span>Samples</span><span>Customization</span></div></div>
 <div className={styles.body}><InquiryFormShell className={styles.form}><InquiryFields source="Inquiry popup" request={mode}/><label>Email address<input autoFocus type="email" name="email" autoComplete="email" placeholder="you@company.com" required maxLength={150}/></label><label>What are you looking for?<textarea name="message" placeholder="Product, capacity and quantity — or simply tell us your idea." rows={3} required maxLength={3000}/></label><button className={styles.send} type="submit">Send Inquiry <span aria-hidden="true">↗</span></button></InquiryFormShell><p className={styles.note}>Your details are used to respond to your inquiry.</p><div className={styles.direct}><span>Prefer a quick chat?</span><a href="https://wa.me/8615323353697" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a><a href="mailto:xuminpackaging@gmail.com">Email us ↗</a></div><button className={styles.later} type="button" onClick={close}>Continue browsing</button></div>
 </dialog>;
}
