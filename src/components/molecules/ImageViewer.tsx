'use client';
import React, { useState, useRef, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

interface Props {
    imageUrls: string[];
}

const ImageViewer = ({ imageUrls }: Props) => {
  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const boundingRect = imageContainerRef.current?.getBoundingClientRect();
    if (boundingRect) {
      setMousePosition({ x: e.pageX - boundingRect.left, y: e.pageY - boundingRect.top });
    }
  };

  return (
    <div className="w-full h-auto flex flex-row flex-grow ">
      <div className="h-full flex flex-col overflow-hidden ">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className="w-[80px] hidden lg:flex aspect-square box-border cursor-pointer !focus:border-slate-900 border-2 border-transparent flex-row overflow-hidden rounded-md"
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image unoptimized src={imageUrl} className="w-full h-full bg-contain flex flex-row overflow-hidden" alt={`Product Image ${index + 1}`} width={80} height={80} />
          </div>
        ))}
      </div>
      <div className="w-full lg:aspect-square aspect-[5/6] flex-1  flex flex-row  relative" ref={imageContainerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
        <div className="w-full h-full overflow-hidden rounded-md  " style={{ position: 'relative' }}>
          <Image
            unoptimized
            src={selectedImage}
            alt="Main Image"
            className="w-full h-full bg-contain cursor-none flex flex-row overflow-hidden"
            layout="fill"
            objectFit="cover"
            style={{
              transform: `scale(${isHovered ? 2 : 1})`,
              transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
            }}
          />
          {isHovered && (
            <div
              className="absolute"
              style={{
                top: `${mousePosition.y}px`,
                left: `${mousePosition.x}px`,
                transform: 'translate(0%, 0%)',
                width: '100px',
                height: '100px',
                zoom: '3',
                borderRadius: '50%',
                border: '1px rgba(255, 255, 255, 0.5) solid',
                pointerEvents: 'none',
                cursor: 'none',
                overflow: 'hidden',
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

ImageViewer.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { ImageViewer };

