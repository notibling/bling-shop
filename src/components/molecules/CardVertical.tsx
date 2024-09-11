"use client";
import React, { useState } from "react";
import { Button, Icon } from "@/components/atoms";
import classNames from "classnames";
import { FaHeart, FaShare} from "react-icons/fa";
import Image from "next/image";
import { Cart3 } from "@/icons/tsx";
import { VerticalSwiper } from "@/components/molecules";


export interface CardVerticalProps {
  category: string;
  title: string;
  badge?: string;
  badgeCountry?: string;
  freeShipping?: boolean;
  basketButton?: boolean;
  image?: string;
  stars?: number;
  price?: string;
  quantity?: number;
  className?: string;
  imageClassName?: string;
  shareButton?: boolean;
  priceBefore?: string;
  term?: string;
  imageAlt?: string;
  height?: string;
  stock?: string;
  padding?: string;
}
function CardVertical(props: any) {
  const [isHovered, setIsHovered] = useState(false);

  const {
    category,
    title,
    badge,
    badgeCountry,
    freeShipping,
    basketButton = true,
    shareButton = true,
    priceBefore,
    price,
    term,
    imageAlt,
    rate,
    image,
    discount,
    condition,
    height,
    className,
    stock,
    padding,
    imageClassName

  } = props;

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={classNames(className, "h-auto", "relative", 'duration-100', 'ease-in-out', {
        "z-[3] drop-shadow-md scale-105 ": isHovered,
      })}
      style={{ padding }}
    >
      <div
        style={{ height }}
        className={classNames(
          "w-full",
          "relative",
          "flex",
          "justify-center",
          'items-stretch',
          'overflow-hidden'
        )}
      >
        <div
          className={classNames(
            "w-full",
            "@container",
            "container",
            "transition-all",
            "duration-150",
            { "hovered z-[3] rounded-b-none": isHovered && shareButton },
            "w-1/4",
            "h-auto",
            "flex",
            "bg-white",
            "dark:bling-dark",
            "justify-between",
            'items-stretch',
            'lg:p-1',
            'p-1',
            'rounded-xl',
            "flex-col",
            "cursor-pointer",
            "relative",
            "box-border"
          )}
        >
          <div
            className={classNames(
              "w-full",
              "h-auto",
              "flex",
              "text-sm",
              'box-border',
              'overflow-hidden',
              "aspect-square",
              'relative',
              imageClassName,

            )}
          >
            <Image
              unoptimized
              src={image === 'true' || !image ? "/images/webp/banners/tshirts.webp" : image}
              alt={imageAlt ?? ''}
              width="100"
              height="100"
              className={classNames(
                imageClassName,
                "flex",
                "bg-contain",
                "bg-center",
                "bg-no-repeat",
                "text-sm",
                'w-full',
                'h-full',
                'rounded-md',
                "aspect-square",

              )}
            />
           
            {discount && (
              <p
                className={classNames(
                  'w-auto',
                  "h-auto",
                  "flex",
                  "text-xs",
                  "text-white",
                  'dark:text-slate-400',
                  'px-1',
                  'absolute',
                  'mx-2',
                  'right-0',
                  'top-2',
                  'p-[3px]',
                  'px-2',
                  'rounded-full',
                  'bg-slate-700',
                  'font-black',
                )}
              >
                -{discount}OFF
              </p>
            )}
          </div>

          <div className={classNames('flex', 'justify-between', 'my-[4px]', 'flex-col', 'lg:flex-row',)}>
            {category && (
              <p
                className={classNames(
                  'text-[10px]',
                  'text-slate-700',
                  'px-1',
                  'p-[2px]',
                  'px-2',
                  'rounded-full',
                  'bg-bling-yellow',
                  'font-black',
                )}
              >
                {category}
              </p>
            )}
            {(rate || stock || condition || freeShipping) && (
            <VerticalSwiper  height="25px">
  
  {rate && (
              <div
                className={classNames(
                  'text-[10px]',
                  'text-slate-700',
                  'px-1',
                  'p-[2px]',
                  'w-full',
                  'lg:w-auto',
                  'rounded-full',
                  'bling-light-text','dark:text-white',
                  'items-center',
                  'flex',
                  'flex-row',
                  'justify-center'
                )}
              >
                <div className={classNames('flex', 'items-center', 'w-full', 'lg:w-auto', 'gap-1', 'self-center')}>
                  <svg className="w-3 h-3 text-yellow-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg className="w-3 h-3 text-yellow-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg className="w-3 h-3 text-yellow-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg className="w-3 h-3 text-yellow-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg className="w-3 h-3 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <span className="px-1">Total: 4,5</span>
              </div>
            )}

{stock && (
            <div
              className={classNames(
                "w-fit",
                "h-auto",
                "flex",
                "text-xs",
                "justify-between",
                "items-center",
                'bg-bling-red',
                'rounded-md',
              )}
            >
              <span
                className={classNames(
                  "w-50",
                  "h-auto",
                  "flex",
                  "text-[10px]",
                  "overflow-hidden",
                  "p-[2px]",
                  'px-2',
                  'text-slate-100',
                )}
              >
                {stock}
              </span>

            </div>)}
            {condition && (
             <div
             className={classNames(
               "w-fit",
               "h-auto",
               "flex",
               "text-[10px]",
               "justify-between",
               "items-center",
               'bg-bling-blue',
               'rounded-md',
             )}
           >
             <span
               className={classNames(
                 "w-50",
                 "h-auto",
                 "flex",
                 "text-[10px]",
                 "overflow-hidden",
                 "p-[2px]",
                 'px-2',
                 'text-slate-100',
               )}
             >
                {condition}
                </span>

            </div>)}


            {freeShipping  && (
             <div
             className={classNames(
              "w-fit",
               "h-auto",
               "flex",
               "text-[10px]",
               "justify-between",
               "items-center",
               'bg-bling-green',
               'rounded-md',
             )}
           >
             <span
               className={classNames(
                 "w-50",
                 "h-auto",
                 "flex",
                 "text-[10px]",
                 "overflow-hidden",
                 "p-[2px]",
                 'px-2',
                 'text-slate-100',
               )}
             >
                    Llega hoy • Envío Grátis
                </span>

            </div>)}


</VerticalSwiper>
            )}
          </div>
          {title && (
            <p
              className={classNames(
                "w-full",
                "h-auto",
                'px-1',
                "overflow-hidden",
                "text-ellipsis",
                "text-sm",
                "font-semibold",
                "text-slate-700",
                'dark:text-slate-100',
                "line-clamp-2",
                'mb-1'
              )}
            >
              {title}
            </p>
          )}
    
         
          <div
            className={classNames(
              "w-full",
              "h-auto",
              "flex",
              "text-sm",
              "flex-row",
              'px-1',
            )}
          >
            <div
              className={classNames(
                isHovered ? "w-3/4" : "w-full",
                "h-auto",
                "flex",
                "justify-between",
                "overflow-hidden",
                "flex-col",
                'mt-1'

              )}
            >
              {priceBefore && (
                <p
                  className={classNames(
                    "w-full",
                    "h-auto",
                    "text-xs",
                    "text-slate-700",
                    'dark:text-slate-400',
                    "text-nowrap",
                    'font-JetBrainsMono',
                  )}
                >
                  antes:
                  
                    <span
                      className={classNames(
                        "w-full",
                        "overflow-hidden",
                        "text-balance",
                        'font-JetBrainsMono',
                        'dark:text-slate-400',
                        "text-nowrap",)}
                    >{badge}<s>{priceBefore}</s>
                    </span>
                
                </p>)}

              {price && (
                <p
                  className={classNames(
                    "w-full",
                    "h-auto",
                    "text-xl",
                    "font-semibold",
                    "hyphens-auto",
                    "truncate",
                    "text-slate-700",
                    'dark:text-slate-100',
                    'font-JetBrainsMono',
                    "text-balance"
                  )}
                >
                  <span
                    className={classNames("uppercase", "text-sm", "self-center")}
                  >
                    {badge}
                  </span>
                  <span className={classNames("w-full", "overflow-hidden")}>
                    {price && price.length > 9 ? price.substring(1, 9) : price}
                  </span>
                  <span
                    className={classNames("uppercase", "text-sm", "self-center")}
                  >
                    {badgeCountry}
                  </span>

                  {term && (
                    <span
                      className={classNames(
                        "uppercase",
                        "text-sm",
                        "self-center",

                      )}
                    >
                      {badgeCountry} {term}
                    </span>
                  )}
                </p>)}
            </div>

            {basketButton && isHovered && (
              <div
                className={classNames(
                  "w-1/4",
                  "h-auto",
                  "flex",
                  "overflow-hidden",
                  "justify-end",
                  "box-border",
                  "items-center"
                )}
              >
                <Button
                  icon={<Icon name={Cart3} size={20} />}
               
                  className={classNames(
                    "w-10",
                    "h-10",
                    "bg-slate-700",
                    'hover:bg-bling-yellow',
                    'hover:text-white',
                    'dark:text-slate-400',
                    'text-slate-200',
                    'dark:hover:text-white',
                    "rounded-full",
                    "p-3",
                    "overflow-hidden",
                    "items-center",
                    "flex",
                    "box-border"
                  )}
                />

              </div>
            )}  </div>

          {shareButton && isHovered && (
            <div
              className={classNames(
                "w-full",
                "absolute",
                "translate-y-[calc(100%-1px)]",
                "left-0",
                "bottom-0",
                "z-3",
                "rounded-b-brand",
                "overflow-hidden",


              )}
            >
              <div
                className={classNames(
                  "w-full",
                  "h-auto",
                  "flex",
                  "text-sm",
                  "justify-between",
                  "items-center",
                  "bg-white",
                  'px-2'
                )}
              >
                <span
                  className={classNames(
                    "w-50",
                    "h-auto",
                    "flex",
                    "text-xs",
                    "overflow-hidden",
                    "p-1",
                    "text-slate-700",
                    "items-center"
                  )}
                >
                  <FaHeart></FaHeart>
                  <span className={classNames("p-1")}>Favoritos</span>
                </span>
                <span
                  className={classNames(
                    "w-50",
                    "h-auto",
                    "flex",
                    "text-xs",
                    "overflow-hidden",
                    "p-1",
                    "text-slate-700",
                    "items-center"
                  )}
                >
                  <FaShare></FaShare>
                  <span className={classNames("p-1")}>Compartir</span>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
export { CardVertical };
