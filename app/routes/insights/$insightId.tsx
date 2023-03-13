import { useLoaderData, useParams } from "@remix-run/react";
import type { LoaderArgs, ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { InsightDetail } from "~/pages/InsightsPage/InsightDetail";

export { links } from "~/pages/InsightsPage/InsightDetail";

export async function loader({ params }: LoaderArgs) {
    return json({ insightId: params.insighttId });
}

export default function InsightDetailRoute() {
    // const params = useParams();
    // const id = params.projectId;
    // console.log("id", id);
    const { insightId } = useLoaderData();
    return <InsightDetail insightId={insightId} />;
}
