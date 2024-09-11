'use client';
import { useState } from 'react';
import classNames from 'classnames';
import { UserGuardNonBlocking } from '@/guards/UserGuard';
import SectionLateralPanel from './SectionLateralPanel';
import { Logo, Button, Section, Icon, LightBar } from '@/components/atoms';
import { MobileMenu, UserButton } from '@/components/organisms/';
import { Banner, FooterComponent, SearchBar } from '@/components/molecules';
import { FloatingMultipleButtons } from './FloatingMultipleButtons';
import { useLightBar } from '@/hooks/useLightBar';

function Dashboard({ children }: { children: React.ReactNode }) {
  const [isWide, setIsWide] = useState(true);
  const [isHover, setHover] = useState(false);
  const togglePanelWidth = () => {
    setIsWide(!isWide);
  };

  const {
    showLightBar,
    lightBarPosition,
    lightLevel,
    toggleLightBar,
    setPosition,
    changeLightLevel, 
  } = useLightBar();

  const handleLightLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeLightLevel(Number(e.target.value));
  };

  return (
    <>
      <UserGuardNonBlocking />
      <Section Empty={true} className="!flex-row !p-0 bling-light-bg-1 !m-0 min-h-[100dvh] h-auto relative max-w-[100dvw]">
        <LightBar show={showLightBar} position={lightBarPosition} lightLevel={lightLevel} />
        <div className="w-full z-[1] items-stretch grid h-auto min-h-[100dvh] grid-cols-12 grid-flow-row-dense">
          <div
            className={classNames('relative hidden lg:flex z-[10] !justify-start transition-all ease-in-out duration-500 min-h-screen gap-1 self-stretch flex-col prevent-select box-border', {
              'col-span-3': isWide,
              'col-span-1': !isWide,
            })}
          >
            <div className="w-[30px] prevent-select absolute inset-y-0 right-[-25px] ">
              <Button
                icon={<Icon frozen={false} name={isWide ? 'AltArrowLeft' : 'AltArrowRight'} size={isHover ? 25 : 20} className={'transition-all ease-in-out duration-150 '} />}
                onClick={togglePanelWidth}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="fixed m-auto top-0 bottom-0 w-[15px] transition-all ease-in-out z-[99] duration-150 h-[60px] rounded-r-md rounded-l-none hover:w-[30px] text-xs hover:text-md bg-yellow-400 "
              />
            </div>

            <SectionLateralPanel isWide={isWide} className="!z-20"/>
          </div>

          <div
            className={classNames('h-auto box-border z-[1] flex p-0 lg:p-2 flex-col items-start justify-start', {
              'col-span-12 lg:col-span-9': isWide,
              'col-span-12 lg:col-span-11': !isWide,
            })}
          >
            <div className="w-full h-auto min-h-[70px] flex-shrink-0 z-[2] border bling-light-border dark:bling-dark-border rounded-md">
              <div className={classNames('w-full', 'rounded-md', 'h-auto', 'lg:h-24', 'flex', 'lg:px-4', 'items-center', 'rounded-sm', 'flex-row', 'flex-wrap', 'justify-between', 'rounded-xl', 'p-5', 'lg:rounded-none')}>
                <div className={classNames('w-1/3', 'lg:hidden', 'h-auto', 'flex', 'flex-row', 'order-1')}>
                  <Logo />
                </div>
                <div className={classNames('w-full', 'lg:w-1/3', 'h-auto', 'flex', 'lg:pt-0', 'pt-5', 'flex-row', 'order-4', 'lg:order-1')}>
                  <SearchBar className={classNames('w-full')} placeholder="Buscar sección" />
                </div>
                <div className={classNames('lg:w-52', 'w-1/3', 'h-10', 'rounded-md', 'p-1', 'flex', 'flex-row', 'shadow-inset', 'order-2', 'dark:bling-dark-bg-3', 'bling-light-bg-1', 'lg:order-2')}>
                  <Button
                    text="Control"
                    className={classNames('w-1/2', 'h-full', 'dark:bg-transparent', 'bg-transparent', 'dark:focus:bling-dark', 'dark:active:bling-dark', 'focus:shadow-md', 'active:shadow-md', 'rounded-2x1', 'focus:bling-light', 'active:bling-light')}
                  />
                  <Button
                    text="Tienda"
                    className={classNames('w-1/2', 'h-full', 'dark:bg-transparent', 'bg-transparent', 'dark:focus:bling-dark', 'dark:active:bling-dark', 'focus:shadow-md', 'active:shadow-md', 'rounded-2x1', 'focus:bling-light', 'active:bling-light')}
                  />
                </div>
                <div className={classNames('w-1/3', 'lg:w-1/3', 'h-12', 'order-3', 'flex', 'justify-end')}>
                  <UserButton
                    showName
                    image="/images/webp/user/woman.webp"
                    showLightBar={showLightBar}
                    lightBarPosition={lightBarPosition}
                    onToggleLightBar={toggleLightBar}
                    onChangePosition={setPosition}
                    lightLevel={lightLevel}
                    onLightLevelChange={handleLightLevelChange}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex-col z-[1] py-2 flex-grow shrink h-auto items-start justify-start flex overflow-auto overflow-visible">
              <div className="w-full self-start">{children}</div>
            </div>
            <Section Empty={true} className="lg:flex-row h-auto flex-col items-start justify-start p-0 m-0 flex gap-4 !bg-transparent rounded-md">
              <Banner
                image='/images/avif/fondo-banner.avif'
                title={"Más formas de pago<br/> más clientes."}
                titleClassName={classNames('@xs:text-4xl', 'bling-text-shadow')}
                colOneClassName={classNames('w-full')}
                className="w-full max-h-[200px] p-5 !m-0 justify-center items-center gap-2"
                description='Conocé más formas de pago para tu negocio.'
              />
              <Banner
                image='/images/avif/fondo-banner.avif'
                title={"Actualizá tu negocio<br/> aumentá tus ventas."}
                titleClassName={classNames('@xs:text-4xl', 'bling-text-shadow')}
                colOneClassName={classNames('w-full')}
                className="w-full max-h-[200px] p-5 !m-0 justify-center items-center gap-2"
                description='Crea tu tienda online y aumenta tus ventas.'
              />
            </Section>
          </div>
        </div>
      </Section>
      <FooterComponent className="lg:mb-0 mb-14" brandFooter />
      <FloatingMultipleButtons />
      <MobileMenu />
    </>
  );
}

export default Dashboard;
