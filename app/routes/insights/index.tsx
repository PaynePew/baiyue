import type { MetaFunction } from "@remix-run/node";
import type { InsightData } from "~/types/InsightType";
import { client } from "~/contentful.server";
import { useLoaderData } from "react-router";
import { InsightsPage } from "~/pages/InsightsPage";
import { useMemo } from "react";
export { links } from "~/pages/InsightsPage";

export const meta: MetaFunction = () => {
    return {
        charset: "utf-8",
        viewport: "width=device-width,initial-scale=1",
        title: "百越觀點",
        description: "BIM的技術，離您生活如此貼近",
        // OG Meta Tag
        "og:title": "百越觀點",
        "og:description": "BIM的技術，離您生活如此貼近",
        "og:type": "website",
        //Twitter Card Meta Tag
        "twitter:card": "summary_large_image",
        "twitter:title": "百越觀點",
        "twitter:description": "BIM的技術，離您生活如此貼近",
    };
};

export const loader = async () => {
    const entries = await client.getEntries({ content_type: "insights" });
    if (!entries) {
        throw new Response("Not Found", { status: 404 });
    }
    return entries.items;
};

export default function Index() {
    const insightsData = useLoaderData() as InsightData[];
    const sortedInsightsData = useMemo(() => {
        return [...insightsData].sort((a, b) => b.fields.order - a.fields.order);
    }, [insightsData]);
    return <InsightsPage insightsData={sortedInsightsData} />;
}
