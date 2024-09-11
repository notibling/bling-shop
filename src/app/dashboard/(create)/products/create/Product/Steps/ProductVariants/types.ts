import { IFile } from "@/entities/File";
import { IProductVariant, IProductVariantAttribute } from "@/entities/ProductVariant";

type PartialIProductVariant = Partial<Omit<IProductVariant, 'variantAttributes' | 'images'> & {
  images: IFile[];
  variantAttributes: Partial<IProductVariantAttribute>[];
}>

export { type PartialIProductVariant }