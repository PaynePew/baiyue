import { client } from "~/contentful.server";
import { useLoaderData } from "react-router";
import { InsightsPage } from "~/pages/InsightsPage";
export { links } from "~/pages/InsightsPage";

export const loader = async () => {
    const entries = await client.getEntries({ content_type: "insights" });
    if (!entries) {
        throw new Response("Not Found", { status: 404 });
    }
    return entries.items;
};

export default function Index() {
    const insightsData = useLoaderData();
    return <InsightsPage insightsData={insightsData} />;
}
