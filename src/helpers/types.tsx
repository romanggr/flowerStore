export interface IBlogItem {
    title: string;
    content: string;
    image: string;
}

export interface IProduct {
    name: string;
    inBasket: boolean;
    image: string;
    price: number;
    discount: number | null;
    description: string;
}

export interface IOrderCarousel {
    title: string;
    price: number;
    quantity: number;
    image: string
}

export interface IOrderItem {
    id: number;
    date: string;
    status: "processing" | "completed" | "canceled";
    products: {
        title: string;
        price: number;
        quantity: number;
        image: string;
    }[];
}