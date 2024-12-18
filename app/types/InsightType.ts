import type { Document } from "@contentful/rich-text-types";
export type InsightData = {
    metadata: {
        tags: string[];
        concepts: string[];
    };
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
    };
    fields: {
        title: string;
        order: number;
        subtitle: string;
        slug: string;
        thumbnail: {
            sys: {
                id: string;
                type: string;
            };
            fields: {
                title: string;
                file: {
                    url: string;
                    fileName: string;
                    contentType: string;
                    details: {
                        size: number;
                        image: {
                            width: number;
                            height: number;
                        };
                    };
                };
            };
        };
        featuredImage: {
            sys: {
                id: string;
                type: string;
            };
            fields: {
                title: string;
                file: {
                    url: string;
                    fileName: string;
                    contentType: string;
                };
            };
        };
        content: {
            nodeType: string;
            content: {
                nodeType: string;
                content: {
                    nodeType: string;
                    value: string;
                }[];
            }[];
        };
        publishDate: string;
    };
};

export type ArticleData = {
    title: string;
    order: number;
    subtitle: string;
    slug: string;
    thumbnail: AssetData;
    featuredImage: AssetData;
    content: Document;
    publishDate: string;
};

export type AssetData = {
    metadata: {
        tags: string[];
        concepts: string[];
    };
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
    };
    fields: {
        title: string;
        file: {
            url: string;
            fileName: string;
            contentType: string;
            details: {
                size: number;
                image?: {
                    width: number;
                    height: number;
                };
            };
        };
    };
};
