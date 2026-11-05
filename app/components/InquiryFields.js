export const inquiryAction = 'https://formsubmit.co/xuminpackaging@gmail.com';

export default function InquiryFields({source, product, capacity, request}) {
 return <>
  <input type="hidden" name="_subject" value={`XUMIN website inquiry — ${source}`}/>
  <input type="hidden" name="_template" value="table"/>
  <input type="hidden" name="source" value={source}/>
  <input type="text" name="_honey" style={{display:'none'}} tabIndex={-1} autoComplete="off" aria-hidden="true"/>
  {product && <input type="hidden" name="product" value={product}/>}
  {capacity && <input type="hidden" name="capacity" value={capacity}/>}
  {request && <input type="hidden" name="request_type" value={request}/>}
 </>;
}
