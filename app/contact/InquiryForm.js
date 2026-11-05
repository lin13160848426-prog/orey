'use client';
import {useState} from 'react';
export default function InquiryForm(){
 const [ready,setReady]=useState('');
 function prepare(e){e.preventDefault();const d=new FormData(e.currentTarget);const body=[`Name: ${d.get('name')}`,`Email: ${d.get('email')}`,`Company: ${d.get('company')||'Not specified'}`,`Inquiry: ${d.get('type')}`,`Product / quantity: ${d.get('product')||'To discuss'}`,'',d.get('message')].join('\n');setReady(`mailto:xuminpackaging@gmail.com?subject=${encodeURIComponent('Packaging inquiry — '+d.get('type'))}&body=${encodeURIComponent(body)}`);}
 return <form className="contact-form" onSubmit={prepare} onChange={()=>setReady('')}>
 <div className="contact-form-heading"><h3>Tell us about your project</h3><p>Start with what you know. We can discuss the details together.</p></div>
 <label>Your name *<input name="name" autoComplete="name" required maxLength={100} placeholder="Full name"/></label>
 <label>Work email *<input name="email" type="email" autoComplete="email" required maxLength={150} placeholder="you@company.com"/></label>
 <label>Company<input name="company" autoComplete="organization" maxLength={150} placeholder="Company or brand name"/></label>
 <label>How can we help?<select name="type"><option>Product quotation</option><option>Sample request</option><option>Custom packaging</option><option>Office visit</option><option>Other inquiry</option></select></label>
 <label className="contact-wide">Product & estimated quantity<input name="product" maxLength={200} placeholder="e.g. 30 ml airless bottle, 5,000 units"/></label>
 <label className="contact-wide">Project details *<textarea name="message" required maxLength={3000} rows={5} placeholder="Tell us about capacity, material, decoration, destination and target timeline."/></label>
 <div className="contact-wide contact-submit"><button className="button" type="submit">Prepare inquiry email ↗</button><p>This prepares an email on your device. Nothing is sent automatically.</p></div>
 {ready&&<div className="contact-wide contact-prepared" role="status"><strong>Your inquiry is ready to review.</strong><p>Open your email app, check the details and send it to our team. You can attach reference images there.</p><a className="button" href={ready}>Open email app ↗</a><p>No email app configured? Email xuminpackaging@gmail.com directly.</p></div>}
 </form>;
}
