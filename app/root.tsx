import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import { Header } from "~/components/Header";
import tailWindStyles from "./styles/app.css";
import headerStyles from "~/components/Header/styles.css";
import footerStyles from "~/components/Footer/styles.css";
import { NotFoundPage } from "./pages/ErrorPage/NotFound";

export const meta: MetaFunction = () => {
    return {
        charset: "utf-8",
        viewport: "width=device-width,initial-scale=1",
        title: "百越工程",
        description: "能讓BIM引以為傲的工程才是真實的BIM",
        // OG Meta Tag
        "og:title": "百越工程",
        "og:description": "能讓BIM引以為傲的工程才是真實的BIM",
        "og:type": "website",
        //Twitter Card Meta Tag
        "twitter:card": "summary_large_image",
        "twitter:title": "百越工程",
        "twitter:description": "能讓BIM引以為傲的工程才是真實的BIM",
    };
};

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: tailWindStyles },
        { rel: "stylesheet", href: headerStyles },
        { rel: "stylesheet", href: footerStyles },
    ];
};

export default function App() {
    const location = useLocation();
    return (
        <html lang="en">
            <head>
                <title>百越工程</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
                <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
                {/*<!-- iOS Favicon -->*/}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                {/*<!-- Android Favicon -->*/}
                <link rel="icon" sizes="192x192" href="/android-chrome-192x192.png" />
                <link rel="icon" sizes="512x512" href="/android-chrome-512x512.png" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Gafata&family=Noto+Sans+TC:wght@100;400&display=swap"
                    rel="stylesheet"
                />
                <meta name="google-site-verification" content="IydkeHTepahaue7-XAHaNT1IVoOdarWLTcRuGJ8h8oU" />
                <meta />
                <Meta />
                <Links />
            </head>
            <body className="bg-grayscale-iron">
                <Header />
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <Outlet />
                </motion.div>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
export function ErrorBoundary() {
    return (
        <html lang="en">
            <head>
                <title>無法找到此頁面</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />{" "}
                <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
                <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
                {/*<!-- iOS Favicon -->*/}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                {/*<!-- Android Favicon -->*/}
                <link rel="icon" sizes="192x192" href="/android-chrome-192x192.png" />
                <link rel="icon" sizes="512x512" href="/android-chrome-512x512.png" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Gafata&family=Noto+Sans+TC:wght@100;400&display=swap"
                    rel="stylesheet"
                />
                <Meta />
                <Links />
            </head>
            <body className="bg-grayscale-iron">
                <Header />
                <NotFoundPage />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
