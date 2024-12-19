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

export interface ContentfulDocument {
    data: Record<string, unknown>;
    content: Array<{
        data: Record<string, unknown>;
        content: Array<{
            data: Record<string, unknown>;
            marks: unknown[];
            value: string;
            nodeType: string;
        }>;
        nodeType: string;
    }>;
    nodeType: string;
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
        contentLeft: ContentfulDocument;
        imageRight: ContentfulImage;
        contentRight: ContentfulDocument;
        imageLeft: ContentfulImage;
        gallery: ContentfulImage[];
        galleryLong: ContentfulImage[];
        extraContentLeft: ContentfulDocument;
        extraImageRight: ContentfulImage;
        extraContentRight: ContentfulDocument;
        extraImageLeft: ContentfulImage;
    };
    tag: string;
}
