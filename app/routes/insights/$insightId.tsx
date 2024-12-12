import type { MetaFunction, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useMemo } from "react";
import { client } from "~/contentful.server";
import { InsightDetail } from "~/pages/InsightsPage/InsightDetail";

export { links } from "~/pages/InsightsPage/InsightDetail";

interface Post {
    slug: string;
}

interface PostAll {
    fields: {
        slug: string;
    };
}
function getRecommendedPosts(currentPost: Post, allPosts: PostAll[]) {
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

export const meta: MetaFunction = ({ data }) => {
    return {
        charset: "utf-8",
        viewport: "width=device-width,initial-scale=1",
        title: data[0].title,
        description: data[0].subtitle,
        // OG Meta Tag
        "og:title": data[0].title,
        "og:description": data[0].subtitle,
        "og:type": "website",
        // Twitter Card Meta Tag
        "twitter:card": "summary_large_image",
        "twitter:title": data[0].title,
        "twitter:description": data[0].subtitle,
    };
};

export default function InsightDetailRoute() {
    const insightData = useLoaderData()[0];
    const insightsData = useLoaderData()[1];
    const recommendedInsights = useMemo(() => {
        return getRecommendedPosts(insightData, insightsData);
    }, [insightData, insightsData]);
    const jsonLdData = {
        "@type": "BlogPosting",
        headline: insightData.title,
        description: insightData.content.content,
        datePublished: insightData.publishDate,
        image: `https:${insightData.thumbnail.fields.file.url}`,
    };
    return (
        <>
            <InsightDetail insightData={insightData} recommendedInsights={recommendedInsights} />
            <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
        </>
    );
}
