'use client';
import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { Button, Title, Quantity} from '@/components/atoms';
import { FaHeart, FaShare, FaShoppingBasket } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa6';


interface ICardHorizontalProps {
  category?: string;
  imageClassName?: string;
  title: string;
  description?: string;
  badge?: string;
  content?: string;
  badgeCountry?: string;
  freeShipping?: boolean;
  priceBefore?: number;
  price: number;
  shareButton?: boolean;
  term?: string;
  imageAlt?: string;
  height?: string;
  className?: string;
  stock?: string;
  padding?: string;
  image?: string;
  addButton?: boolean;
  quantity?: number | boolean;
  actions?: boolean | ReactNode;
  deleteButton?: boolean;
  footer?: ReactNode;
}

const CardHorizontal: React.FC<ICardHorizontalProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const {
    category,
    imageClassName,
    deleteButton,
    title,
    quantity,
    description,
    addButton,
    badge,
    image,
    content,
    badgeCountry,
    freeShipping,
    priceBefore,
    price,
    shareButton = true,
    term,
    imageAlt,
    height,
    className,
    stock,
    footer,
    padding,
  } = props;

  return (
    <>
      <article
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={classNames('w-full', className, 'h-auto', 'relative', 'flex-row', 'duration-75', 'ease-in-out', {
          'z-[100] drop-shadow-md scale-105': isHovered,
        })}
        style={{ padding }}
      >
        <div
          style={{ height }}
          className={classNames('w-full', 'h-auto', 'relative', 'flex-row', 'flex', 'justify-center', 'items-stretch', 'bg-white', 'dark:bg-slate-800', 'rounded-md', { 'hovered z-[100] rounded-b-none': isHovered && shareButton })}
        >
          {image && (
            <div className={classNames('flex-shrink-0', 'aspect-square', 'max-h-[150px]', 'flex', 'box-border', 'overflow-hidden', 'm-2')}>
              <Image
                unoptimized
                src={image}
                alt={imageAlt ?? ''}
                width="100"
                height="100"
                className={classNames(imageClassName, 'flex', 'aspect-square', 'bg-contain', 'bg-center', 'bg-no-repeat', 'text-sm', 'w-full', 'h-full', 'rounded-xl')}
              />
            </div>
          )}

          {!content && (
            <div className={classNames('w-auto', 'transition-all', 'duration-300', 'w-auto', 'h-auto', 'flex', 'flex-grow', 'p-2', 'rounded', 'flex-col', 'gap-1', 'cursor-pointer', 'relative', 'box-border')}>
              {category && <p className={classNames('w-full', 'h-auto', 'flex', 'flex-grow', 'text-xs', 'text-slate-700')}>{category}</p>}
              <div className="flex flex-row w-full h-auto">
                <Title title={title && title} level="h6" titleClassName="text-sm line-clamp-2 dark:text-slate-300" descriptionClassName="text-xs line-clamp-1" description={description && description} />
                <div className="flex flex-row items-center justify-end w-auto h-auto gap-2">
                  {deleteButton && (
                    <div className="flex flex-row items-center justify-end w-auto flex-nowrap">
                      <div className="w-[30px] h-[30px] ">
                        <Button icon={<FaTrash />} className="w-[30px] h-[30px] bling-btn-primary dark:bling-btn-primary-dark rounded-full clickable" />
                      </div>{' '}
                    </div>
                  )}
                </div>
              </div>

              {freeShipping && <div className={classNames('w-full', 'h-auto', 'flex', 'flex-grow', 'text-xs', 'font-semibold', 'text-green-500')}>Llega hoy • Envío Grátis</div>}
              {stock && (
                <div className={classNames('w-full', 'h-auto', 'flex', 'flex-grow', 'text-sm', 'justify-between', 'items-center')}>
                  <span className={classNames('w-50', 'h-fit', 'flex', 'text-[10px]', 'overflow-hidden', 'text-slate-700')}>{stock}</span>
                </div>
              )}
              <div className={classNames('w-full', 'h-auto', 'flex', 'flex-grow', 'text-sm', 'justify-end', 'flex-row')}>
                <div className={classNames('w-full', 'h-auto', 'flex', 'justify-start', 'overflow-hidden', 'flex-col')}>
                  {priceBefore && (
                    <p className={classNames('w-full', 'h-auto', 'text-[10px]', 'font-bold', 'dark:text-slate-400', 'text-slate-700')}>
                      antes:
                      <s className='font-JetBrainsMono'>
                        {badge}
                        <span className={classNames('w-full', 'overflow-hidden','font-JetBrainsMono', 'text-balance')}>{priceBefore}</span>
                      </s>
                    </p>
                  )}
                  <div className="flex flex-row items-center justify-between w-full h-auto">
                    <div className={classNames('w-full', 'h-auto', 'text-xl', 'font-semibold', 'dark:text-slate-400', 'justify-center', 'items-center', 'hyphens-auto', 'truncate', 'flex', 'flex-row', 'text-slate-700', 'text-balance')}>
                      <span className={classNames('uppercase', 'text-nowrap', 'text-sm', 'self-center')}>{badge}</span>
                      <span className={classNames('w-full', 'text-nowrap', 'overflow-hidden')}>{price && price.length > 9 ? price.substring(1, 9) : price}</span>
                      <span className={classNames('uppercase', 'text-nowrap', 'text-sm', 'self-center')}>{badgeCountry}</span>

                      {term && <span className={classNames('uppercase', 'text-sm', 'self-center')}>{term}</span>}
                    </div>
                    {quantity && (
                      <div className="flex flex-row items-center justify-end w-auto flex-nowrap">
                        <Quantity />
                      </div>
                    )}
                    {addButton && (
                      <div className="flex flex-row items-center justify-end w-auto flex-nowrap">
                        <div className="w-[35px] h-[35px] ">
                          <Button icon={<FaShoppingBasket />} className="w-[35px] h-[35px] rounded-full clickable" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {!footer && shareButton && isHovered && (
            <div className={classNames('w-full', 'absolute', 'translate-y-[calc(100%-1px)]', 'left-0', 'bottom-0', 'z-10', 'rounded-b-brand', 'overflow-hidden')}>
              <div className={classNames('w-full', 'h-auto', 'flex', 'flex-grow', 'text-sm', 'justify-between', 'items-center', 'bling-light', 'dark:bling-dark', 'p-2')}>
                <Button text="Favoritos" icon={<FaHeart />} className={'btn-sm'} />
                <Button text="Compartir" icon={<FaShare />} className={'btn-sm'} />
              </div>
            </div>
          )}
          {footer && isHovered && (
            <div className={classNames('w-full', 'absolute', 'translate-y-[calc(100%-1px)]', 'left-0', 'bottom-0', 'z-10', 'rounded-b-brand', 'overflow-hidden')}>
              <div className={classNames('w-full', 'h-auto', 'flex', 'flex-grow', 'text-sm', 'justify-between', 'items-center', 'bling-light', 'dark:bling-dark', 'p-2')}>
                {footer}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export { CardHorizontal };
