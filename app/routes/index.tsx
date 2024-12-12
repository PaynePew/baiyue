import type { PartnerData } from "~/types/PartnerTypes";
import { useMemo } from "react";
import { useLoaderData } from "react-router";
import { client } from "~/contentful.server";
import { LandingPage } from "~/pages/LandingPage";

export { links } from "~/pages/LandingPage";

export const loader = async () => {
    const entries = await client.getEntries({ content_type: "partners" });
    if (!entries) {
        throw new Response("Not Found", { status: 404 });
    }
    return entries.items;
};

export default function LandingPageIndex() {
    const partnersData = useLoaderData() as PartnerData[];
    const sortedPartnersData = useMemo(() => {
        if (Array.isArray(partnersData) && partnersData.length > 0) {
            return [...partnersData].sort((a, b) => b.fields.order - a.fields.order);
        }
        return [];
    }, [partnersData]);
    return <LandingPage partnersData={sortedPartnersData} />;
}
