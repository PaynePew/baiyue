import type { MetaFunction } from "@remix-run/node";
export { links } from "~/pages/AboutPage";
export { AboutPage as default } from "~/pages/AboutPage";

export const meta: MetaFunction = () => {
    return {
        charset: "utf-8",
        viewport: "width=device-width,initial-scale=1",
        title: "關於百越",
        description: "BIM的本質是融入工程提升工程",
        // OG Meta Tag
        "og:title": "關於百越",
        "og:description": "BIM的本質是融入工程提升工程",
        "og:type": "website",
        //Twitter Card Meta Tag
        "twitter:card": "summary_large_image",
        "twitter:title": "關於百越",
        "twitter:description": "BIM的本質是融入工程提升工程",
    };
};
