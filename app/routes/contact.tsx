import type { MetaFunction } from "@remix-run/react/dist/routeModules";
export { links } from "~/pages/ContactPage";
export { ContactPage as default } from "~/pages/ContactPage";

export const meta: MetaFunction = () => {
    return {
        charset: "utf-8",
        viewport: "width=device-width,initial-scale=1",
        title: "聯絡我們",
        description: "桃園市大園區大成路一段2號6樓",
        // OG Meta Tag
        "og:title": "聯絡我們",
        "og:description": "桃園市大園區大成路一段2號6樓",
        "og:type": "website",
        //Twitter Card Meta Tag
        "twitter:card": "summary_large_image",
        "twitter:title": "聯絡我們",
        "twitter:description": "桃園市大園區大成路一段2號6樓",
    };
};
