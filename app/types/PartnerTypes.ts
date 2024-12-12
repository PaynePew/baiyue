export type PartnerData = {
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
        partner: {
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
        order: number;
    };
};
