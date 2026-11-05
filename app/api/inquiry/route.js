export const runtime = 'nodejs';
export const maxDuration = 30;
const error = (message, status) => Response.json({ok:false,message}, {status});
export async function POST(request) {
 const origin = request.headers.get('origin');
 if (!origin || origin !== new URL(request.url).origin) return error('Please submit from our website.',403);
 if (Number(request.headers.get('content-length') || 0) > 16000) return error('Your inquiry is too long.',413);
 let data;
 try { const raw = await request.text(); if (raw.length > 16000) return error('Your inquiry is too long.',413); data=JSON.parse(raw); } catch {return error('Invalid inquiry.',400);}
 if (!data || typeof data !== 'object' || data._honey) return error('Unable to submit this inquiry.',400);
 const allowed=['name','email','company','type','product','quantity','message','notes','capacity','request_type','source'];
 const fields={};
 for (const key of allowed) {
  if (data[key] !== undefined && (typeof data[key] !== 'string' || data[key].length > 3000)) return error('Please shorten your inquiry.',400);
  if (data[key]) fields[key]=data[key].trim();
 }
 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email || '') || !(fields.message || fields.notes || fields.product)) return error('Please enter your email and project details.',400);
 try {
  const result=await fetch('https://formsubmit.co/ajax/xuminpackaging@gmail.com', {
   method:'POST', headers:{'Content-Type':'application/json',Accept:'application/json'},
   body:JSON.stringify({...fields,_subject:'XUMIN website inquiry',_template:'table',_url:origin}),
   signal:AbortSignal.timeout(20000)
  });
  const reply=await result.json();
  if (!result.ok || !(reply.success === true || reply.success === 'true')) return error('The email service could not accept your inquiry. Your details are still here. Please try again or email us directly.',502);
  if (/activat|confirm.{0,30}email/i.test(reply.message || '')) return error('Our email connection is awaiting activation. Please email xuminpackaging@gmail.com directly.',503);
  return Response.json({ok:true,message:'Your inquiry has been accepted for delivery. Thank you for contacting XUMIN.'});
 } catch {return error('The email service is temporarily unavailable. Your details are still here. Please try again or email us directly.',502);}
}
