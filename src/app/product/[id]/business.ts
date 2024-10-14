import * as productOperations from '@/contexts/GlobalState/product/operations';
import { IProductDisplay } from '@/entities/ProductDisplay';
import { getStaticFileUrl } from '@/utils';

async function getProductDisplay(id: number) {
  try {
    const { productDisplay } = await productOperations.getProductDisplay(id);

    return productDisplay;
  } catch (error) {
    console.log(error);
    return;
  }
}

function getPageDJson(productDisplay: IProductDisplay) {
  const imageFile = productDisplay.summary?.images[0];
  const mainImage = imageFile ? getStaticFileUrl(imageFile) : undefined;
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: productDisplay?.summary?.title ?? '',
    image: mainImage,
    description: productDisplay?.summary?.title,
    offers: {
      '@type': 'Offer',
      url: `/product/${productDisplay.id}`,
      priceCurrency: 'UYU',
      price: productDisplay?.summary?.price,
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock'
    }
  };
}


export { getProductDisplay, getPageDJson };