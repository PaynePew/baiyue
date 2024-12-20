import type { MetaFunction, LoaderArgs } from "@remix-run/node";
import type { InsightData } from "~/types/InsightType";
import { useLoaderData } from "@remix-run/react";
import { useMemo } from "react";
import { client } from "~/contentful.server";
import { InsightDetail } from "~/pages/InsightsPage/InsightDetail";

export { links } from "~/pages/InsightsPage/InsightDetail";

function getRecommendedPosts(currentPost: InsightData, allPosts: InsightData[]) {
    const { slug } = currentPost.fields;
    //隨機推薦兩篇文章
    const filterPosts = allPosts.filter(post => {
        return post.fields.slug !== slug;
    });

    const shuffled = [...filterPosts].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
}

export async function loader({ params }: LoaderArgs) {
    const slug = params.insightId;
    const response = await client.getEntries({ content_type: "insights", "fields.slug": slug });
    const [entry] = response.items;
    const entries = await client.getEntries({ content_type: "insights" });

    if (!entry || !entries) {
        throw new Response("Not Found", { status: 404 });
    }
    return [entry, entries.items];
}

export const meta: MetaFunction = ({ data }) => {
    return {
        charset: "utf-8",
        viewport: "width=device-width,initial-scale=1",
        title: data[0].fields.title,
        description: data[0].fields.subtitle,
        // OG Meta Tag
        "og:title": data[0].fields.title,
        "og:description": data[0].fields.subtitle,
        "og:type": "website",
        // Twitter Card Meta Tag
        "twitter:card": "summary_large_image",
        "twitter:title": data[0].fields.title,
        "twitter:description": data[0].fields.subtitle,
    };
};

export default function InsightDetailRoute() {
    const [insightData, insightsData] = useLoaderData();
    const recommendedInsights = useMemo(() => {
        return getRecommendedPosts(insightData, insightsData);
    }, [insightData, insightsData]);
    const jsonLdData = {
        "@type": "BlogPosting",
        headline: insightData.fields.title,
        description: insightData.fields.content.content,
        datePublished: insightData.fields.publishDate,
        image: `https:${insightData.fields.thumbnail.fields.file.url}`,
    };
    return (
        <>
            <InsightDetail insightData={insightData} recommendedInsights={recommendedInsights} />
            <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
        </>
    );
}
