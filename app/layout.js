import SiteHeader from './components/SiteHeader';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';
import './globals.css';
export const metadata={title:'XUMIN | Cosmetic Packaging',description:'Ready-stock and custom cosmetic packaging for beauty brands and wholesale buyers.'};
export default function Layout({children}){return <html lang="en"><body><SiteHeader/>{children}</body></html>}
