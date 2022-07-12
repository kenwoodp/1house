import Head from 'next/head';
import { ReactNode } from 'react';

type LayoutProps = {
    title?: string;
    contentPage?: boolean;
    pageDescription?: string;
    children?: ReactNode;
}

const Layout = ({ children, title, contentPage = false, pageDescription }: LayoutProps) => (
    <div className="root">
        <Head>
            // TODO: Update title and default description
            <title>Your Details{title ? ' - ' : ''}{title}</title>
            {/* <meta name='description' content={ pageDescription || 'Generic site description' } /> */}
            {/* <meta name='theme-color' content='#002A56' /> */}

            {/* <meta property="og:title" content="What's Your Sour? Vodka Cruiser" /> */}
            {/* <meta property="og:type" content="website" /> */}
            {/* <meta property="og:description" content="Tell us what your favorite sour is to enter the draw to win a $500 Liquorland or First Choice Voucher!" /> */}
            
            {/* TODO: Update Open Graph image for social sharing. Should be 1200×630px */}
            <meta property="og:image" content="/images/social/opengraphtile.jpg" />
            
            {/* TODO: Update favicons */}
            <link rel="icon" href="/icons/favicon32.png" sizes="32x32" />
            <link rel="icon" href="/icons/favicon57.png" sizes="57x57" />
            <link rel="icon" href="/icons/favicon76.png" sizes="76x76" />
            <link rel="icon" href="/icons/favicon96.png" sizes="96x96" />
            <link rel="icon" href="/icons/favicon128.png" sizes="128x128" />
            <link rel="icon" href="/icons/favicon192.png" sizes="192x192" />
            <link rel="icon" href="/icons/favicon228.png" sizes="228x228" />

            {/* Android */}
            <link rel="shortcut icon" sizes="196x196" href="/icons/favicon196.png" />

            {/* iOS */}
            <link rel="apple-touch-icon" href="/icons/favicon120.png" sizes="120x120" />
            <link rel="apple-touch-icon" href="path/to/favicon152.png" sizes="152x152" />
            <link rel="apple-touch-icon" href="path/to/favicon180.png" sizes="180x180" />

            {/* Windows 8 IE 10 */}
            <meta name="msapplication-TileColor" content="#FFFFFF" />
            <meta name="msapplication-TileImage" content="/icons/favicon144.png"></meta>  
        </Head>
        <div className="content">
            {children}
        </div>
    </div>
)

export default Layout;