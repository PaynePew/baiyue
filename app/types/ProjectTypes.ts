import type { Document } from "@contentful/rich-text-types";
export interface ContentfulImage {
    metadata: {
        tags: string[];
        concepts: any[];
    };
    sys: {
        space: {
            sys: {
                type: string;
                linkType: string;
                id: string;
            };
        };
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: {
            sys: {
                id: string;
                type: string;
                linkType: string;
            };
        };
        publishedVersion: number;
        revision: number;
        locale: string;
    };
    fields: {
        title: string;
        file: {
            url: string;
            details: {
                size: number;
                image?: {
                    width: number;
                    height: number;
                };
            };
            fileName: string;
            contentType: string;
        };
    };
}

export interface Project {
    fields: {
        title: string;
        order: number;
        slug: string;
        category: string[];
        thumbnail: ContentfulImage;
        featuredImage: ContentfulImage;
        type: string;
        partner: string;
        description: string;
        introduce: string[];
        flow: string[];
        contentLeft: Document;
        imageRight: ContentfulImage;
        contentRight: Document;
        imageLeft: ContentfulImage;
        gallery: ContentfulImage[];
        galleryLong: ContentfulImage[];
        extraContentLeft: Document;
        extraImageRight: ContentfulImage;
        extraContentRight: Document;
        extraImageLeft: ContentfulImage;
    };
    tag: string;
}

export interface ProjectDetailType {
    title: string;
    order: number;
    slug: string;
    category: string[];
    thumbnail: ContentfulImage;
    featuredImage: ContentfulImage;
    type: string;
    partner: string;
    description: string;
    introduce: string[];
    flow: string[];
    contentLeft: Document;
    imageRight: ContentfulImage;
    contentRight: Document;
    imageLeft: ContentfulImage;
    gallery: ContentfulImage[];
    galleryLong: ContentfulImage[];
    extraContentLeft: Document;
    extraImageRight: ContentfulImage;
    extraContentRight: Document;
    extraImageLeft: ContentfulImage;
}
