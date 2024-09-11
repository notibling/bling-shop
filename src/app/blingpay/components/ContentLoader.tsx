import React, { Suspense, lazy } from 'react';

// Usa React.lazy para cargar los componentes de manera perezosa
const QRSolutions = lazy(() => import('../content/QRSolutions').then(module => ({ default: module.default })));
const WalletSolutions = lazy(() => import('../content/WalletSolutions').then(module => ({ default: module.default })));
const LinkSolutions = lazy(() => import('../content/LinkSolutions').then(module => ({ default: module.default })));
const SubscriptionsSolutions = lazy(() => import('../content/SubscriptionsSolutions').then(module => ({ default: module.default })));
const DonationSolutions = lazy(() => import('../content/DonationSolutions').then(module => ({ default: module.default })));

const DocsBlingPayButton = lazy(() => import('../content/DocsBlingPayButton ').then(module => ({ default: module.default })));


const ContentsToLoad: React.FC = () => {
  return (
    <>
    <Suspense fallback={<div>Cargando Documentación BlingPay Button...</div>}>
        <DocsBlingPayButton />
      </Suspense>
      {/*<Suspense fallback={<div>Cargando QR Solutions...</div>}>
        <QRSolutions />
      </Suspense>
      <Suspense fallback={<div>Cargando Wallet Solutions...</div>}>
        <WalletSolutions />
      </Suspense>
      <Suspense fallback={<div>Cargando Link Solutions...</div>}>
        <LinkSolutions />
      </Suspense>
      <Suspense fallback={<div>Cargando Link Solutions...</div>}>
        <SubscriptionsSolutions />
      </Suspense>
      <Suspense fallback={<div>Cargando Link Solutions...</div>}>
        <DonationSolutions />
  </Suspense>*/}
      {/* Agrega más componentes aquí si es necesario */}
    </>
  );
};

const ContentLoader: React.FC = () => {
  return <ContentsToLoad />;
};

export { ContentLoader };
