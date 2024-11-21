import { useLoaderData } from "@remix-run/react";
import { useMemo } from "react";
import type { LoaderArgs } from "@remix-run/node";
import { client } from "~/contentful.server";
import { InsightDetail } from "~/pages/InsightsPage/InsightDetail";

export { links } from "~/pages/InsightsPage/InsightDetail";

function getRecommendedPosts(currentPost, allPosts) {
    const { slug } = currentPost;
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
    return [entry.fields, entries.items];
}

export default function InsightDetailRoute() {
    const insightData = useLoaderData()[0];
    const insightsData = useLoaderData()[1];
    const recommendedInsights = useMemo(() => {
        return getRecommendedPosts(insightData, insightsData);
    }, [insightData, insightsData]);
    return <InsightDetail insightData={insightData} recommendedInsights={recommendedInsights} />;
}
