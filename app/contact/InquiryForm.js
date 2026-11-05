'use client';
import InquiryFields, {inquiryAction} from '../components/InquiryFields';
export default function InquiryForm(){
 return <form className="contact-form" action={inquiryAction} method="POST">
 <InquiryFields source="Contact"/>
 <div className="contact-form-heading"><h3>Tell us about your project</h3><p>Start with what you know. We can discuss the details together.</p></div>
 <label>Your name *<input name="name" autoComplete="name" required maxLength={100} placeholder="Full name"/></label>
 <label>Work email *<input name="email" type="email" autoComplete="email" required maxLength={150} placeholder="you@company.com"/></label>
 <label>Company<input name="company" autoComplete="organization" maxLength={150} placeholder="Company or brand name"/></label>
 <label>How can we help?<select name="type"><option>Product quotation</option><option>Sample request</option><option>Custom packaging</option><option>Office visit</option><option>Other inquiry</option></select></label>
 <label className="contact-wide">Product & estimated quantity<input name="product" maxLength={200} placeholder="e.g. 30 ml airless bottle, 5,000 units"/></label>
 <label className="contact-wide">Project details *<textarea name="message" required maxLength={3000} rows={5} placeholder="Tell us about capacity, material, decoration, destination and target timeline."/></label>
 <div className="contact-wide contact-submit"><button className="button" type="submit">Send Inquiry ↗</button><p>Your details are sent securely via FormSubmit to XUMIN to respond to your inquiry.</p></div>

 </form>;
}
