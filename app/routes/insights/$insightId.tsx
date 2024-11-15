import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { client } from "~/contentful.server";
import { InsightDetail } from "~/pages/InsightsPage/InsightDetail";

export { links } from "~/pages/InsightsPage/InsightDetail";

export async function loader({ params }: LoaderArgs) {
    const slug = params.insightId;
    const response = await client.getEntries({ content_type: "insights", "fields.slug": slug });
    const [entry] = response.items;

    if (!entry) {
        throw new Response("Not Found", { status: 404 });
    }
    return entry.fields;
}

export default function InsightDetailRoute() {
    const insightData = useLoaderData();
    return <InsightDetail insightData={insightData} />;
}
