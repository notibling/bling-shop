import classNames from 'classnames';
import Head from 'next/head';

import { FooterComponent } from '@/components/molecules';
import { TopMenu, MobileMenu, RandomProducts } from '@/components/organisms';
import { MainInfo, BreadCrumb, BusinessZone, PaymentMethods } from './components';
import { getPageDJson, getProductDisplay } from './business';
import { getStaticFileUrl } from '@/utils';
import { Environment } from '@/common/Environment';
import { RatingAndAttributes } from './components/RatingAndAttributes';
import { SingleProductProvider } from './SingleProduct.context';


interface IProps {
  params: { id: string };
}

async function SinglePageProduct({ params: { id } }: IProps) {

  const productDisplay = await getProductDisplay(Number(id));
  if (!productDisplay) return (<h1>NOT FOUND</h1>)
  const DJSON = getPageDJson(productDisplay)


  const mainVariant = productDisplay.product?.variants[0];

  const stock = mainVariant?.stock ?? '0';


  const images = productDisplay.summary?.images?.map((image) =>
    getStaticFileUrl(image, Environment.getEnv('NEXT_BACKEND_API_URL'))
  ).filter((image) => image);

  const productData = {
    title: productDisplay.summary?.title ?? '',
    description: productDisplay.summary?.description ?? '',
    sizes: ['XS', 'SM', 'MD', 'LG', 'XL', 'XXL'],
    sku: productDisplay.product?.sku ?? '',
    upc: productDisplay.product?.upc ?? '',
    discount: 0,
    price: productDisplay.summary?.price ?? 0,
    priceBefore: 3988,
    stock: `+ ${stock} disponibles`,
    warranty: '2 años de fabrica',
    images: [...(images ?? [])].filter(img => img) as string[]
  };

  return (
    <>
      <Head>
        <title>Bling | {productDisplay.summary?.title}</title>
        <meta name='description' content={productDisplay.summary?.description} />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={productDisplay.summary?.title} />
        <meta property="og:description" content={productDisplay.summary?.description} />
        <meta property="og:image" content={DJSON.image} />
        <meta property="og:url" content={`/ product / ${productDisplay.id}`} />
        <meta property="og:type" content={productDisplay.entity} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={productDisplay.summary?.title} />
        <meta name="twitter:description" content={productDisplay.summary?.description} />
        <meta name="twitter:image" content={DJSON.image} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(DJSON) }}
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={classNames('h-auto', 'box-border', 'bg-cover', 'w-full', 'flex', 'justify-between', 'items-center', 'flex-col', 'box-border', 'bg-white')}>
        <SingleProductProvider productDisplay={productDisplay}>
          <>
            <TopMenu />

            <BreadCrumb />

            <MainInfo {...productData} />

            <RatingAndAttributes />

            <PaymentMethods />

            <BusinessZone />

            <RandomProducts lgCols={6} lgRows={3} smCols={2} smRows={2} />

            <FooterComponent className="lg:mb-0 mb-14" brandFooter></FooterComponent>

            <MobileMenu />
          </>
        </SingleProductProvider>
      </main>
    </>
  );
}

export default SinglePageProduct;
