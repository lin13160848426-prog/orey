'use client';
import InquiryFormShell from '../components/InquiryFormShell';
import InquiryFields from '../components/InquiryFields';
export default function InquiryForm(){
 return <InquiryFormShell className="contact-form">
 <InquiryFields source="Contact"/>
 <div className="contact-form-heading"><h3>Tell us about your project</h3><p>Start with what you know. We can discuss the details together.</p></div>
 <label className="contact-wide">Work email *<input name="email" type="email" autoComplete="email" required maxLength={150} placeholder="you@company.com"/></label>
 <label className="contact-wide">Project details *<textarea name="message" required maxLength={3000} rows={5} placeholder="Tell us about capacity, material, decoration, destination and target timeline."/></label>
 <div className="contact-wide contact-submit"><button className="button" type="submit">Send Inquiry ↗</button><p>Your details are sent securely via FormSubmit to XUMIN to respond to your inquiry.</p></div>

 </InquiryFormShell>;
}
