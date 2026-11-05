import styles from './GoogleLocationMap.module.css';

export const COMPANY_ADDRESS = '2F West, Building 4, Phase IV, Zhongheng Commercial Plaza, Huadu District, Guangzhou, Guangdong, China';

/** Use a verified Google Place ID when available. Browser API keys require referrer restrictions. */
export default function GoogleLocationMap({
  address = COMPANY_ADDRESS,
  companyName = 'Guangzhou Xumin Packaging Products Co., Ltd.',
  placeId = '',
  zoom = 15,
  apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY,
}) {
  const params = new URLSearchParams({
    key: apiKey || '', q: placeId ? `place_id:${placeId}` : address,
    zoom: String(Math.min(21, Math.max(0, Number(zoom) || 15))),
    maptype: 'roadmap', language: 'en',
  });
  const search = new URLSearchParams({api: '1', query: address});
  if (placeId) search.set('query_place_id', placeId);
  const mapUrl = `https://www.google.com/maps/search/?${search}`;

  return <section className={styles.card} aria-label={`${companyName} location map`}>
    <div className={styles.header}>
      <div><span className={styles.eyebrow}>XUMIN / GUANGZHOU</span><h3>Find our office</h3></div>
      <a className={styles.button} href={mapUrl} target="_blank" rel="noopener noreferrer">View on Google Maps <span aria-hidden="true">↗</span></a>
    </div>
    <div className={styles.viewport}>
      {apiKey ? <iframe
        title={`Google Maps — ${companyName}`}
        src={`https://www.google.com/maps/embed/v1/place?${params}`}
        loading="lazy" allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      /> : <div className={styles.unavailable}>
        <span className={styles.symbol} aria-hidden="true">＋</span>
        <h4>Explore our location</h4>
        <p>The embedded map is not configured yet. Open Google Maps to search the address.</p>
        <a href={mapUrl} target="_blank" rel="noopener noreferrer">Open Google Maps ↗</a>
      </div>}
    </div>
    <div className={styles.footer}><address>{address}</address><p>Please confirm Building 4 and the entrance before travelling. Address search results have not yet been verified.</p></div>
  </section>;
}
