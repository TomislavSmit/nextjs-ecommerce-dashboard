import { Product } from './products'

export interface CategoryProducts {
    [category: string]: Product[]
}
