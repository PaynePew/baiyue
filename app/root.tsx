import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { Header } from "~/components/Header";
import tailWindStyles from "./styles/app.css";
import headerStyles from "~/components/Header/styles.css";
import footerStyles from "~/components/Footer/styles.css";
import { NotFoundPage } from "./pages/ErrorPage/NotFound";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: tailWindStyles },
        { rel: "stylesheet", href: headerStyles },
        { rel: "stylesheet", href: footerStyles },
    ];
};

export default function App() {
    return (
        <html lang="en">
            <head>
                <title>百越工程</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Gafata&family=Noto+Sans+TC:wght@100;400&display=swap"
                    rel="stylesheet"
                />
                <Meta />
                <Links />
            </head>
            <body className="bg-grayscale-iron">
                <Header />
                <Outlet />
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
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
