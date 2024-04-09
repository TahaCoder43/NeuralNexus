export interface PriceText {
    price: string;
    fainted: null | string;
    description: string;
    duration: string;
    discount: null | string;
}

export interface DetailsText {
    [key: string]: {
        heading: string;
        content: string;
    };
}

export interface OffersTextStore {
    heading: string;
    pricing: PriceText;
    details: DetailsText;
    premium: null | string;
}
