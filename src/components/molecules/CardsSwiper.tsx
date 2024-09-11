"use client";
import React, { useImperativeHandle, useState } from "react";
import { Swiper, SwiperClass, SwiperProps, SwiperSlide, SwiperSlideProps } from "swiper/react";
import classNames from "classnames";
import { typeCast } from "@/utils/types";

interface ICardsSwiperProps extends SwiperProps {
    children: React.ReactNode | React.ReactNode[];
    id: string;
    swiperSlideProps?: Partial<SwiperSlideProps>;
}

const CardsSwiper = React.forwardRef<SwiperClass | null, ICardsSwiperProps>(({ children, id, className, swiperSlideProps = {}, ...props }, ref) => {
    const [swiper, setSwiper] = useState<SwiperClass>();
    const childrenToRender = React.Children.toArray(children);

    useImperativeHandle(ref, () => swiper ?? typeCast({}), [swiper])



    return (
        <>
            <Swiper onSwiper={(val) => setSwiper(val)} loop grabCursor={true} className={classNames(id, className)} {...props}>
                {childrenToRender.map((child, index) => (
                    <SwiperSlide {...swiperSlideProps} key={`${id}-${index}`}>
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
});

export { CardsSwiper };
