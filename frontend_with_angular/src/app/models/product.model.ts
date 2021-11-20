import { Category } from "./category.model";

export class Product {
    constructor(
        public id?: string,
        public category?: Category,
        public name?: string,
        public quantity?: number,
        public price?: number,
        public image?:string,
        public url?: string
    ) { }
}