import { useLoaderData } from "@remix-run/react";
import { useMemo } from "react";
import type { MetaFunction, LoaderArgs } from "@remix-run/node";
import { client } from "~/contentful.server";
import { ProjectDetail } from "~/pages/ProjectPage/ProjectDetail";
export { links } from "~/pages/ProjectPage/ProjectDetail";

const projectTab = [
    { title: "住宅", tag: "residence" },
    { title: "辦公", tag: "office" },
    { title: "教育", tag: "education" },
    { title: "工業", tag: "industry" },
    { title: "停車場", tag: "parking" },
    { title: "營區", tag: "military" },
    { title: "其他", tag: "others" },
];

function getRecommendedProjects(currentProject, allProjects) {
    const { slug, category } = currentProject;
    //篩選相關文章，以資料庫最新文章推薦
    const recommended = allProjects.filter(
        project =>
            project.fields.slug !== slug && project.fields.category.some(_category => _category.includes(category)),
    );
    //如果同類型文章少於兩篇，則隨機推薦文章
    if (recommended.length < 2) {
        const shuffled = [...allProjects].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 2);
    }
    //隨機打亂並限制數量
    return recommended.sort(() => Math.random() - 0.5).slice(0, 2);
}

export const loader = async ({ params }: LoaderArgs) => {
    const { categoryId, projectId } = params;
    const [filterTab] = projectTab.filter(_tab => _tab.tag === categoryId);

    if (!filterTab) {
        throw new Response("Not Found", { status: 404 });
    }

    const response = await client.getEntries({ content_type: "projects", "fields.slug": projectId });
    const [entry] = response.items;
    const entries = await client.getEntries({ content_type: "projects" });

    if (!entry || !entries) {
        throw new Response("Not Found", { status: 404 });
    }

    const updatedEntries = entries.items.map(_project => {
        const matchingTitleProject = projectTab.find(_tab => _tab.title === _project.fields.category[0]);
        return matchingTitleProject ? { ..._project, tag: matchingTitleProject.tag } : { ..._project };
    });

    return [entry.fields, updatedEntries];
};

export const meta: MetaFunction = ({ data }) => {
    return {
        charset: "utf-8",
        viewport: "width=device-width,initial-scale=1",
        title: data[0].title,
        description: data[0].type,
        // OG Meta Tag
        "og:title": data[0].title,
        "og:description": data[0].type,
        "og:type": "website",
        // Twitter Card Meta Tag
        "twitter:card": "summary_large_image",
        "twitter:title": data[0].title,
        "twitter:description": data[0].type,
    };
};

export default function ProjectDetailIndex() {
    const projectDetailData = useLoaderData()[0];
    const projectsData = useLoaderData()[1];
    console.log(projectDetailData);
    const jsonLdData = {
        "@type": "BlogPosting",
        headline: projectDetailData.title,
        description: projectDetailData.type,
        image: `https:${projectDetailData.thumbnail.fields.file.url}`,
    };
    const recommendedProjects = useMemo(() => {
        return getRecommendedProjects(projectDetailData, projectsData);
    }, [projectDetailData, projectsData]);

    return (
        <>
            <ProjectDetail projectDetailData={projectDetailData} recommendedProjects={recommendedProjects} />
            <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
        </>
    );
}
