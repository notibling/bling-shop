import classNames from "classnames";
import React from "react";

interface UruguayMap {
    className?: string | string[];
}

const Uruguay: React.FC<UruguayMap> = (props, className) => {

    const handleMouseEnter = (event: React.MouseEvent<SVGPathElement>) => {
        event.currentTarget.style.fill = '#ffcc00'; // Cambia el color al pasar el cursor
    };

    const handleMouseLeave = (event: React.MouseEvent<SVGPathElement>) => {
        event.currentTarget.style.fill = ''; // Restaura el color original
    };

    const handleClick = (event: React.MouseEvent<SVGPathElement>) => {
        const departmentId = event.currentTarget.id;
        console.log(`Departamento seleccionado: ${departmentId}`);
        // Lógica adicional para manejar la selección
    };
   

    
    return (
        
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 547.24 594.43"
        fill="currentColor"
        className={classNames('', className)}
      
        {...props}

        >

            <path
            
            className="country-state"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                id='UY-RN'
                d='M160.15 278.071l2.22-.13 2.57-.6 1.09.07 3.98.76 1.35.1 1-.07 1.27-.3.72-.04 1.78.23 5.62 1.74 1.09.66 5.63 4.77 1.4.93 3.28 1.75-.47 5.55-3.24 13.59-.43 1.8-2.04 2.42-1.02 1.82-.38 2.27v1.51l.26 2.42-1.02 4.09-1.78 3.64-.91 3.65-1.95-.64-1.87.64-1.16 1.49-2.02.92-3.04.11-1.8.8-1.39 1.31-.9.97-1.14 2.66.01.82.04 1.94-1.32.42-1.93-.34-1.76.49-.57 1.12.07 1.22.5 2.29-.43 1.39-1-.32-1.69-1.53-.55-.33-.7-.7-.87-.6-1.06-.04-1.19.87-.02 1.03.42.95.09.57-1.45.31-2.26.13-1.73.42.18 1.19 1.48 1.86-.01.85-1.27.25h-2.33l-2.01-.4-4.18-1.78-1.9-.4-1.77.47-1.86 1.17-1.72 1.48-1.33 1.44-.8.47-1.8.28-.52.54-.04 1.35.72.7 1.07.09.98-.47 2.23.91-.25 1.46.57 3.67v.73l-.9.33-2.57 1.6-4.6 2.05-1.13.2-1.22-.53-.56-1.31-.61-3.26-1.05 1.58-1.68 1.82-1.55.43-1.14-4.81-1.23-1.48-1.8-.97-4.19-1.41-1.06-.18-1.14.08-1.22.55-2.12 1.56-1.18.33-1.11-.51-.52-1.21-.15-1.52v-1.36l-.39-.93-.95-.77-4.5-2.39-2.29-.35-2.18.5-1.98 1.39-.78.35-3.43.94-.7.55-1.02 2.66-.76.97-1.98.43-3.93-1.61-3.08-.76-1.49-1.13-1.14-.27-1.22.16-2.15.64-1.25.03-1.59-.56-2.87-1.73-1.78-.29-1.88.54-1.21 1.1-1.06 1.36-1.46 1.33-1.53.65-3.05.79-1.02 1-.36 1.86.22 1.49-.43 1.03-2.3.56-1.73-.22-1.5-.57-1.47-.35-1.67.45-1.06.89-.04.86 1.1 2.44.04.83-.07 1.09.02.95.58.69 1.31 1.26.29.2.13 2.02-.42 2.02-.82 1.06-1.06-.92-.54-.08-1.75-1.68-1.21-.75-3.45 1.87-1.1 1.1-.3 1.24-.05 4.63-.47 2.08-1.16.54-2.93-.49h-4.9l-1.89 1.19-5.53 7.28-9.79 5.82-.02.01-2.16-1.83-.65-2.42.65-2.24 1.58-1.97 3.69-3.66 1.07-2.46.16-2.82-1.73-10.64-.09-5.19 1.6-3.93 4.21-1.57 9.54.57 4.4-.37 3.77-1.88 3.85-3.62 1.69-2.21.69-2.06.17-2.84.48-2.2 1.52-4.61.76-4.9-.89-3.66-2.06-2.92-4.44-4.71-1.06-2.03-.55-2.23-.16-2.56.19-5.5-.19-2.78-.76-2.12.76-.91-.87-3.13-1.13-8.51-1.22-1.74-.82-1.93-1.47-6.46h.01l3-.56 5.24-.31.87.16 1.14.49.67.42.47.4.33.39.02.03 2.78 3.29.45.4.49.35 2.24 1.23.44.4.34.48.55 1.07.64 2.1.13.26.28.38.81.35 1.23.29 2.44.26 2.14.62 1.02.71 1.25.28 8.99.92.54.33.76.16.93-.1 1.54-.71.73-.68.48-.66.36-2.45.17-.72.28-.6.33-.51.46-.39 17.83-2.69 1-.7.42-.45.74-.96.3-.57.67-1.74.04-.09.1-.24.49-.98.38-.47.46-.37.57-.25 2.42-.77.48-.27.95-.9.33-.44.81-.86.92-.74.53-.28 1.04-.09 1.36.06 3.68.64.98.06 2.67-.46 1.76-.64 1.57-.92.73-.11.88.08 2.2.99.97.31 1.03.1 1.85-.29.99-.3.78-.35 6.71-4.88 1.09-.54.96-.21 6.51-.08 1.33-.25.57-.24 1.03-.59 1.93-1.45 1.04-.57.53-.2 1.12.11 1.54.4 5.61 2.59 3.24 1.99 2.5.59 2.27.14z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-PA'
        d='M141.86 205.131l.99-.15 1.41-.52.79-.43.63-.45.44-.38.64-.21.78-.03 4.51 1.73 2.12.52 1.18-.05 8.87-1.94h1.23l1.74.26.98.3.73.36 2 1.36.63.23.71.13 4.28.04 1.14.16.85.25 5.18 3.31 1.31.42.71.12 5.29.18 7.28 2.22.66.08 1.11-.03 1.69-.3 1.35-.45.57-.43.49-.55.52-1.02.2-.58.29-1.35.64-.91 3.13-3.36.9-1.22.56-1.03.2-.68 1.54-1.16 5.41-1.42 3.36 4.05.49 1.06.44 1.19.04.79-.16 2.63.11 2.83.25.97.3.73 2.45 3.07.38.73.22.76-.08.86-.24.6-.37.36-.45.15-.87.15-1.09.39-.52.3-.46.37-.33.86-.24 1.22.04 5.15-.06.84-.01.02-.43 5.13-.68 2.53-.53 1.22-1.18 2.15-.49 1.42-2.95 13.48-.75 2.13-3.1 3.64-3.44 3.23-3.82 2.8-3.02 2.79-1.73 2.67-5.47 16.52-3.28-1.75-1.4-.93-5.63-4.77-1.09-.66-5.62-1.74-1.78-.23-.72.04-1.27.3-1 .07-1.35-.1-3.98-.76-1.09-.07-2.57.6-2.22.13-2.27-.14-2.5-.59-3.24-1.99-5.61-2.59-1.54-.4-1.12-.11-.53.2-1.04.57-1.93 1.45-1.03.59-.57.24-1.33.25-6.51.08-.96.21-1.09.54-6.71 4.88-.78.35-.99.3-1.85.29-1.03-.1-.97-.31-2.2-.99-.88-.08-.73.11-1.57.92-1.76.64-2.67.46-.98-.06-3.68-.64-1.36-.06-1.04.09-.53.28-.92.74-.81.86-.33.44-.95.9-.48.27-2.42.77-.57.25-.46.37-.38.47-.49.98-.1.24-.04.09-.67 1.74-.3.57-.74.96-.42.45-1 .7-17.83 2.69-.46.39-.33.51-.28.6-.17.72-.36 2.45-.48.66-.73.68-1.54.71-.93.1-.76-.16-.54-.33-8.99-.92-1.25-.28-1.02-.71-2.14-.62-2.44-.26-1.23-.29-.81-.35-.28-.38-.13-.26-.64-2.1-.55-1.07-.34-.48-.44-.4-2.24-1.23-.49-.35-.45-.4-2.78-3.29-.02-.03-.33-.39-.47-.4-.67-.42-1.14-.49-.87-.16-5.24.31-3 .56h-.01l-.61-2.68-.28-2.76.04-.29 1-1.32 2.57-5.4 6.5-9.49.52-3.69-1.07-3.53-7.01-9.43-1.16-2.57.58-2.48 2.27-3.74 1.07-4.68.31-5.45-.38-5.16-1-3.79-3.24-3.7-1.26-2.44.68-2.48 2.81-3.21 1.62-1.21 2.26-.99 4.86-.97 2.48-1 1.07-1.73 6.18-18.62.93-5.3-.75-5.38-2.72-3.43-2.63-2.05.33-.18 1.68-.86 1.54-.43 1.62.21 1.77.47 1.15-.04.52-.08.13-.1.02-.06.11-1.15.11-.64.33-.45.48-.3 3.79-.96.81-.02 1.06.18 2.7 1.04 6.79 3.84.89.79.36.45.29.52 1.31 4.24.23.56.29.52.38.46.47.37.52.31.74.28 15.1 3.31 7.33 3.79 3.45 2.46 1.1.63 2.45.96 2.48.35 2.9.1 1.89.45 1.07.43.49.5 2.24 3.49.75.88 1.39 1.12 2.32 1.13 8.14 2.35 1.12.59 3.79 2.94 1.19.32 8.67 1.06 1.32.39.92.01z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-FS'
        d='M145.04 372.431l5.55-.79 3.4.42 5.92 1.4 1.19.49.46.39.77.92.57 1.06.41 1.22.3 2.1.31.81.55.83 1.25 1.17.94.5.9.31 4 .19 3.41.83 5.69 2.24 1.09.68.36.47 2.03 3.75 6.34 7 .47.65.67.78.56.87.32.69.34 1.14.1.68.18 2.97.1.69.68 1.45 1.95 2.31 1.59 3.24 5.85 21.47 1.53 2.35 1.77 3.48.44 1.31.23 1.1-.57 11.51-.11.8-.2.71-.23.65-.29.59-.32.54-.36.49-.86.91-1.25 1.03-11.23-5.74-3.16-.77-4.15 3.44-2.11 1.25-2.35.94-7.04 1.77-.43.22-.3.2-1.71 1.48-4.26 5.21-.84.55-1.2.62-2.53 1-1.41.35-1.17.11-14.83-2.88-4.39-.26-.82-1.37-1.81-2.49-.29-.53-.23-.59-.38-1.27-.46-3.1-.24-.86-.26-.71-.41-1.43-.29-1.82-.19-.71-1.21-2.91-4.28-7.4-.17-.44-.11-.41.04-1.54 1.54-12.09.18-.71.22-.65.28-.55.22-.59.18-.66v-.73l-.32-.81-.51-.46-.6-.36-2.83-.75-.61-.26-1.03-.71-.89-.82-2.11-2.91-.42-.42-.39-.46-.34-.51-.21-.74-.14-.95-.05-1.45-.23-1.58-.12-.33-.01-.02-.02-.05-1.67-2.19-.28-.54-.21-.6-1.15-5.27-.25-.56-.31-.53-.4-.46-.46-.39-2.62-1.75-.41-.46-.31-.51-.23-.65-.11-.8.04-1.12 1.12-1.98 10.76-12.89 1.35-1.17 7.32-9.38.67-1.13 1.4-3.86 4.84 4.81 4.19 2.41 1.12.28z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-AR'
        d='M157.54 1.641l3.82-.66 3.89-.11 3.7 2.58 1.91 3.22.98 1.23 6.39 4.4 3.18 1.53 1.74 1.19 1.54 1.5.94 1.61.34 2.4-.32 1.24.11.78 1.64 1.03 1.04.27.99-.03 1 .14 1.11.7.55.66.91 1.49 3.8 4.37 1.28 1.03 1.72 1.59 5.46 3.5 1.71 1.76 2.48 4.21 1.49 2 1.37 1.21 4.73 2.67 6.01 5.1 3.37 1.7 2.05 1.97 3.24 3.89.58 1.31.28 1.25.44 1.16 1.15.98 1.98 1.29.89.85.68 1 3.4 6.66 1.54 1.94 6.72 5.48 1.65 3.29.65 3.59-.5 3.54-1.8 3.25-.42 2.6-.09 7.84-.62 5.47.02 2.59.53.85-.09-.07-3.83-2.99-.81-.83-1.03-1.43-.76-.86-2.62-2.25-1.18-1.41-1.54-2.5-.73-.91-2.11-1.83-1.68-1.03-.67-.26-16.29-3.6-5.7-2.09-.82-.2-1.02-.15-1.86.19-1.02.24-.73.36-.39.44-.36.48-.59 1.1-.75 1.79-.61 1.08-.37.48-.88.75-.46.26-2.31.96-1.02.61-.44.38-1.47 1.84-.44.37-.51.31-1.2.39-3.43.45-1.17.4-.96.6-6.02 5.06-.94.5-1.12.46-1.27.3-4.93.47-2.44.69-1.46-.07-11.64-2.12-2.46-.14-6.75.85-.68.26-.99.54-2.77 2.12-.55.25-.61.19-.67.1-1.03-.09-6.17-1.85-2.48-1.32-1.95-1.39-4.72-4.72-.05-.04-1.53-1.28-.8-.48-4.89-1.59-13.58-7.25-3.38-2.41-.62-.61-1.68-1.3-.83-.35-1.1-.31-2.1-.29-3.63.01-.91-.17-.95-.33-1.23-.79-.68-.58-.5-.55-1.7-2.37-.77-.87-1.72-1.58-6.66-5.02-1.41-.83-1.11-.36-2.81-.32-1.03.04-.71.5-.53.46-2.46 3.67-.01.01-.25-2.17-.7-3.1-.94-4.21-.86-2.67-2.29-4.98-1.51-2.3-2.31-4.62-.41-4.66 1.3-4.28 2.82-3.52 20.2-18.58 2.22-3.81.76-4.63-1.46-5.11-.46-2.61.87-1.13 2.28-.07 2.55 2.5 1.99 6.21 3.23 2.15 2.57.27 4.49-.81 2.47-.05 1.37.71 1.53 2.41 1.6.41 1.01-.51 2.34-2.1 1.31-.62 2 .08 1.29.85 1.11 1.01 1.49.6.8-.31 1.27-1.55.6-.3.82.41 1.27 1.4.51.35 3.33-.71 2.97-2.36 2.04-3.35.56-3.73.77-3.04 2.18-3.83 2.8-3.43 2.58-1.79 1.02.09 1.92.92 1.09.01 2.01-1.05.72-.27 3.76-.71 2.06-.08 4.94 1.39z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-SJ'
        d='M203.07 460.831l1.4 4.03 3.11 14.91.42 5.11-.06 1.36-.16 1.04-.24.65-2.23 3.95-.3.71-.26.94.02.75.17.65 1.88 4.78.5 1.85.11 1.2-.45 8.21-.22 1.18-.29.58-.37.48-.46.4-1.97 1.07-.56.39-.48.63-.43 1.06-.01.78.24.61 5.65 6.13.52.75.76 1.6-.05 2.34-.66 2.99-.01.91.07.54.35.61.38.85.48 1.69.01 1-.23.78-1.73 1.67-.77.97-.68 1.09-.38.49-.45.4-.49.34-1.23.6-.67.47-.74.95-.32.84-.12.85.56 3.48.15 3.42.21.9.35.65.48.39 3.32 1.96 3.68 3.24 1.56 1.87.75 1.23 1.01 4.44-.01.9-.18 1.05-.3.46-.57.58-1.18-1.35-2.01-.86-5.41-2.2-3.76-.59-3.63.16-2.2 1.53-1.65-.25-1.6-.76-3.84-2.44-1.8-.85-1.83-1.25-6.89-1.94-8.39-1.07-8.07-3.53-1.72-1.26-1.38-3.07-1.6-1.53-3.4-2.47-2.43-2.79-2.14-2.11-1.88-1.5-2.77-1.73-1.51-1.37.16-1.71-.67-.86-1.5-1.04-.63-.57-1.93-2.21-1.85-1.6-3.28-1.5-1.59-.33 6.31-5.5.4-.46.29-.85.13-1.17-.09-2.4.12-1.37.57-1.33.62-.75.51-.97.75-2.57.06-.86-.41-.7-2.03-2.41-.32-.53-.27-.57-.12-.82.05-1.02.41-1.64.4-.91.47-.64 2.46-1.78 1.63-.89 4.38-1.27.76-.38.46-.3 4.56-3.72.71-.87.21-.31.12-.35.02-.38-.07-.81-.58-1.31-3.79-6.04-3.34-3.98-.73-.56-1.74-.89-.52-.35-.49-.75-.46-1.08-.86-3.69-1.37-3.03 4.39.26 14.83 2.88 1.17-.11 1.41-.35 2.53-1 1.2-.62.84-.55 4.26-5.21 1.71-1.48.3-.2.43-.22 7.04-1.77 2.35-.94 2.11-1.25 4.15-3.44 3.16.77 11.23 5.74z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-CO'
        d='M47.78 456.201l1.83-.07 3.07-.56 8.02.25 1.03.29 1.4.72.74.57.55.54.21.34.17.23-.14-.15.67.84.48.46 1 .73 14 4.86 2.89.24 6.2-.61 17.69-4.83 1.89.53 2.21 1.03 1.94 1.17 1.75 1.66 1.94 1.51.56.31 2.9.39 8.48-.01 10.7 1.68 1.37 3.03.86 3.69.46 1.08.49.75.52.35 1.74.89.73.56 3.34 3.98 3.79 6.04.58 1.31.07.81-.02.38-.12.35-.21.31-.71.87-4.56 3.72-.46.3-.76.38-4.38 1.27-1.63.89-2.46 1.78-.47.64-.4.91-.41 1.64-.05 1.02.12.82.27.57.32.53 2.03 2.41.41.7-.06.86-.75 2.57-.51.97-.62.75-.57 1.33-.12 1.37.09 2.4-.13 1.17-.29.85-.4.46-6.31 5.5-3.66-.77-9.13-.22-5.62.39-1.88-1.62-4.74.13-2.62 1.63-1.25-1.62-2.62-.25-2.87 1.37-3.62 1.62-3.24-3.37-2.61-.13-3 .62-4.12 1.87-5.74 2.23-1.87-.26-2.63 1.62-2.99-.26-3 .36-3.37-.52 1-.99-.86-1.88-2.87-.89-1.87-3.01.27-5-2.58-2.81-2.05-3.41-7.61-9.09-3.38-1.62-1.19-1.9-1.6-4.06-1.8-1.76-2.55-1.07-2.72-.5-2.38-.14-2.78-.57-1.29-1.46-1.19-4.66-1.18-2.63-8.68-12.67-1.88-1.63-3.86-2.35-1.68-1.51-1.43-2.39-.75-2.54-.57-3.29h.01l.05-.01 3.28-.59 1.43-.42 9.24-3.88 9.58-6.67 1.65-.49 1.77.21 11.57 3 .55.57.64.85.28.52.51 1.15.38 1.23.25.59.6 1.05.34.44.38.33.27.2.46.25.8.21 1.05.14z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-RO'
        d='M505.87 434.641h2.1l1.83-.36 1.69.02 1.67 1.18.99 2.02.74 2.16 1.26 1.39 3.31-.19-1.77 1.22-1.9 1.71-3.7 4.58-2.27 4.08-1.29 4.29-2.05 10.26-1.96 6.2-.54 5.66-.98 1.77-3.59 2.51-1.72 1.58-5 6.47-5.5 4.23-1.79 2.12-3.66 7.27-.95 1.27-.24 1.35-2.22 7.14 1.67 4.53-.13 2.23-4.19 1.32-9.5 5.34-7.58 5.39-15.64 15.35-1.25 1.68-.42 2.13.04 1.92-.55 1.39-9.33 2.11-2.34.19.41-1.06.63-.81 1.76-1.61-.72-.63-.65-.77-.49-.94-.24-1.07.16-1.55 1.04-3.03.26-.53-1.51-1.52-2.78-1.2-2.93-.72-2.02-.05 1.16.85 3.82 1.71-.83 1.56-1.67 1.71-1.91 1.35-1.58.57-.63.83-.02 1.7.76 1.31 1.67-.28-.15-.97 1.53.33 1.89 1.61.94 2.75-.82 1.58-1.89 1.59-23.01 12.39-.03-.11-.49-1.33-.09-.68.05-.97.39-1.25.43-.73.79-1.07.26-.5.08-.58-.04-.69-1.36-4.62-.24-1.42-.24-4.99.29-2.74.85-3.29.36-.86 1.58-2.78.49-1.27.18-.72.1-.88-.06-1.03-.44-1.49-.44-.82-.87-1.08-.33-.52-.17-.92-.23-3.3-.21-1.11-.34-.78-.7-.99-.21-.9-.12-1.23.15-2.41.27-1.51.75-1.56.71-.34h.7l.58.23.56.12.45-.12.25-.21.26-.42.52-3.47.39-7.48-.23-2.84-.38-2.12-.25-7.63 1.05-6.84.19-.69.24-.64 1.16-2.38.22-.67.28-1.34.06-.61-2.18-20.92 2.49-4 3.12-3.6.43-.77.26-1.44.19-3.7.34-1.99.37-1.02.4-.75.66-.85 2.27-3.75.45-1.34.16-1.05-.97-7.03.46-2.55.96-1.91 2.19-2.45 8.24-4.82 3.86-3.5 2.2-7.61 1.82-.83 2.41-.04 2.46-.41.72-.37.59-.45.49-.58.44-.76 1.21-1.12 5.41-1.38 2.5-1.52 2.42-2 2.07-2.43 2.6-5.45 1.09-1.07 3.5-1.02 2.4-1.6 3.22-4.52 1.85-2.03 1.4-.83 2.46-1.07 1.08-1.14.54-1.3.31-1.41.49-1.41 1.09-1.33.57-.51 8.17-2.36 7.47-3.23 9.72-2.28.07-.01-1.66 5.62.07 9.05 2.27 18.45-2.34 20.29-.29 11.01 2.89 5.06z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-MO'
        d='M228.12 567.911l1.07-.41.54-.29.48-.37.43-.43.39-.49.71-1.09.68-.63.98-.56 2.04-.66.94.02.57.17.45.86.23.57.6 1.14.47.39.55.34.58.22.44.3.22.26.31.53.43.6.87.69.74.15.86-.08.86-.21 1.37-.06.62.36.31.6-.04.76-.4 1.36-1.08 2.57-.13.68-.09.8.01 2.38.35 2.34.37 1.24.75 1.15-3.2 1.9-3.65-.32-3.13 1.8-1.46.94-.64 2.61-2.17-3.11-1.77-.35-1.89-.73.85-1.13.12-1.4-1.14-.99-1.64-.23-.61 1.9-2.03 1.66-.97.01-2.28-.35-2.39.34-3.23-2.78-6.17-3.65-1.59-1.47-.24-1.85 1.74-1.52 1.74-1.77 2.62-.66-.34-.38.57-.58.3-.46.18-1.05.01-.9-1.01-4.44 3.39-2.02 1.87-.56.88.02 1.11.18.74.29.58.37.82.9.36.48 1.2 2.06.45.47.65.47 1.45.79.87.23.57.08z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-MA'
        d='M404.25 522.131l-.56-.12-.58-.23h-.7l-.71.34-.75 1.56-.27 1.51-.15 2.41.12 1.23.21.9.7.99.34.78.21 1.11.23 3.3.17.92.33.52.87 1.08.44.82.44 1.49.06 1.03-.1.88-.18.72-.49 1.27-1.58 2.78-.36.86-.85 3.29-.29 2.74.24 4.99.24 1.42 1.36 4.62.04.69-.08.58-.26.5-.79 1.07-.43.73-.39 1.25-.05.97.09.68.49 1.33.03.11-1.16.61-6.37 1.83-3.32 2.8-2.09.97-4.37 1.36-17.78 8.6-2.15.38-2.05.75-2.63 3.09-1.98.44.48-1.27.22-.79v-.51l-1.07-1.66-1.39-1.4-1.82-.94-4.06-.52-.25-.49.1-.8-.68-1.11-1.03-.78-.94-.45-2.23-.48-4.89.25-9.44 2.23-3.95-.77-2.69-2.67-5.32-7.19-3.64-1.99-.07-.96-.19-.95-.87-1.69-2.02-3-.76-.8-.38-.53-.3-.67-.07-1.04.06-.86.53-3.07-.22-.87-.51-.89-1.26-1.21-1.52-1.18-1.08-1.33-1.55-3.53 13.85-.78 2.68-.67 2.44-1.17.75-.49 11.64-9.89 1.25-.42.69-.12 1.51-.04 3.19.25 1.41-.21.63-.2 1.27-.97 5.63-5.38 1.89-1.4 1.4-.8 2.2-.24 1.25-.41 3.18-1.67 1.89-.31.86-.33.96-.61 1.54-1.3 1.83-.95.59-.41.46-.65.35-1.25.2-2.65.28-1.51 1.81-6.17.32-.75.54-.65.96-.69.67-.61.5-.77.37-1.24.32-2.53.19-.69.1-.7.01-.65-.06-.52-.09-.4-.27-.91-.05-.39.31-.98 2.2-3.82 1.52-3.42 2.97-4.52.45-1 .23-.67.62-.79.97-.9 2.18-1.43 1.23-.6 1.02-.36 5.04-.65 2.38-.94.73-.78.82-1.22 1.31-2.83.86-2.79.11-.77.17-.73 1.16-1.72 4.28-3.24 2.18 20.92-.06.61-.28 1.34-.22.67-1.16 2.38-.24.64-.19.69-1.05 6.84.25 7.63.38 2.12.23 2.84-.39 7.48-.52 3.47-.26.42-.25.21-.45.12z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-LA'
        d='M405.2 404.951l.94-.06 4.08-1.68.5-.33.46-.4.38-.46.35-.5.54-1.18.3-1.39.22-.65.35-.51.46-.41.56-.31 1.16-.51.54-.29 3.32-2.63.8-.35 3-.73 1.17-.05.95.11.58.26.47.38.33.5 1.04 2.28 1.53 2.63 1.59 1.74.89.77 2.19 1.25 3.71 1.51 2.7 1.76 2.54 1.24-.49.58-.59.45-.72.37-2.46.41-2.41.04-1.82.83-2.2 7.61-3.86 3.5-8.24 4.82-2.19 2.45-.96 1.91-.46 2.55.97 7.03-.16 1.05-.45 1.34-2.27 3.75-.66.85-.4.75-.37 1.02-.34 1.99-.19 3.7-.26 1.44-.43.77-3.12 3.6-2.49 4-4.28 3.24-1.16 1.72-.17.73-.11.77-.86 2.79-1.31 2.83-.82 1.22-.73.78-2.38.94-5.04.65-1.02.36-1.23.6-2.18 1.43-.97.9-.62.79-.23.67-.45 1-2.97 4.52-1.52 3.42-2.2 3.82-.31.98.05.39.27.91.09.4.06.52-.01.65-.1.7-.19.69-.32 2.53-.37 1.24-.5.77-.67.61-.96.69-.54.65-.32.75-1.81 6.17-.28 1.51-.2 2.65-.35 1.25-.46.65-.59.41-1.83.95-1.54 1.3-.96.61-.86.33-1.89.31-3.18 1.67-1.25.41-2.2.24-1.4.8-1.89 1.4-5.63 5.38-1.27.97-.63.2-1.41.21-3.19-.25-1.51.04-.69.12-1.25.42-11.64 9.89-.75.49-2.44 1.17-2.68.67-13.85.78.01-3.47-.57-1.82-1.69-3.24-4.24-5.2-.56-.97-.23-.51-.09-2.72.07-1.09 1.23-6.18.08-.8-.15-1.05-.39-1.15-4.27-8.01-1.37-4.06-2.79-11.25 2.99-4.3 2.87-3.04.72-1.01.45-.93.68-2.27.87-2.09.55-1.06.51-.79 1.21-1.36 4.97-4.32.65-.78.45-.74.2-.68.12-.74.03-.68-.04-.93-.01-.01.39-1.58.51-.83.7-.92 1.19-1.29 1.09-1.57 1.28-3.31.86-1.54.4-.46.92-.79 2.04-1.36 1.28-1.17.57-.89.33-.88.27-4.08.4-1.24 3.5-8.01.34-1.5.3-3.25.01-.75-.05-.74-.14-.68-.21-.62-.27-.55-2.58-4.12-.27-.55-.23-.59-.12-.88.03-1.11.37-1.93.4-.97.47-.68.49-.35 1.18-.48 3.24-.83 1.16-.49.64-.43.7-.59.99-1.05.51-.79 1.83-5.13.68-1.47.51-.85.23-.29.08-.07.04-.07.28-.26.86-.61 1.07-.59 3.51-1.28.56-.41.64-.65 1.23-1.53.51-1.05.31-.98.13-1.6-.1-2.26-.13-.68-.21-.63-.54-1.03-.66-.95 5.01-2.99 2-.89 5.34-.94.54-.03.31.11.98.55 2.02.6.57.3.45.4.69.44.9.38 1.78.28 1.02-.06.81-.2 4.6-2.36 2.62-1.01 1.02-.09.78.15 1.56.59 1.31.32.81.33.59.41 2.82 3.06 3.53 2.4 3.09.87 8.34 1.34.67.21.61.26 1.34 1.19.55.31 6.98 2.21 1.2.14z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-FD'
        d='M340.36 396.671l.66.95.54 1.03.21.63.13.68.1 2.26-.13 1.6-.31.98-.51 1.05-1.23 1.53-.64.65-.56.41-3.51 1.28-1.07.59-.86.61-.28.26-.04.07-.08.07-.23.29-.51.85-.68 1.47-1.83 5.13-.51.79-.99 1.05-.7.59-.64.43-1.16.49-3.24.83-1.18.48-.49.35-.47.68-.4.97-.37 1.93-.03 1.11.12.88.23.59.27.55 2.58 4.12.27.55.21.62.14.68.05.74-.01.75-.3 3.25-.34 1.5-3.5 8.01-.4 1.24-.27 4.08-.33.88-.57.89-1.28 1.17-2.04 1.36-.92.79-.4.46-.86 1.54-1.28 3.31-1.09 1.57-1.19 1.29-.7.92-.51.83-.39 1.58.01.01.04.93-.03.68-.12.74-.2.68-.45.74-.65.78-4.97 4.32-1.21 1.36-.51.79-.55 1.06-.87 2.09-.68 2.27-.45.93-.72 1.01-2.87 3.04-2.99 4.3-12.84 1.82-2.83.96-6.97 4.29-.88.34-1.17.32-2.32.31-1.19-.03-.84-.16-5.42-2.67-2.12-.63-1.37-.1-.99.1-9.17 6.06-.97.82-.63.72-.28.61-1.32 4.01-.9 1.73-.78.98-1.05.49-5.1 1.13-1.72.12-1.19-.13-4.53-2.54-1.17-.4-1.02-.17-1.5-.06-3.07.22-1.72.44-1.33.55-1.04.64-1.04 1.91-1.79 6.31-.76-1.6-.52-.75-5.65-6.13-.24-.61.01-.78.43-1.06.48-.63.56-.39 1.97-1.07.46-.4.37-.48.29-.58.22-1.18.45-8.21-.11-1.2-.5-1.85-1.88-4.78-.17-.65-.02-.75.26-.94.3-.71 2.23-3.95.24-.65.16-1.04.06-1.36-.42-5.11-3.11-14.91-1.4-4.03 1.25-1.03.86-.91.36-.49.32-.54.29-.59.23-.65.2-.71.11-.8.57-11.51-.23-1.1-.44-1.31-1.77-3.48-1.53-2.35-5.85-21.47-1.59-3.24 8.11.19.83-.21.95-.43 1.33-1.08.57-.83.25-.85-.06-3.08-.35-2.9-.03-.76.05-.72.3-.59.54-.3 1.03.2.61.39.89.91.46.39 1.55 1.04 1.21.54.69.19.75.08 4.78-.54.8-.01.67.18.5.35.4.44.32.52.24.57.77 2.48.28.54.36.49.45.39.57.31.66.23.73.12 5.82-.46 2.85.33 5 1.52.78-.07.76-.31.98-.9 2.13-1.6.59-.69.33-.75.26-1.41.25-.67.55-.47.95-.38 3.47-.3 5.38-1.07.75-.02.75.08.65.19 1.68.94.63.23.7.16 1.48.09.76-.11 3.44-1.09 6.3-2.89 2.7-1.76.98-.86.66-.75.35-.51.51-.49.73-.34 1.25-.17.93.04 3.8.68.75-.02 2.33-.94 19.59-11.14 2.03-2.64.87-.9 5.59-2.89 2.33-1.54 2.26-1.12.92.05.69.22 1.69.92.66.19.73.06 1.12-.54 1.39-1 5.64-5.4 1.74-1.2 5.21-2.87.94 6.67.1 4.24 1.01 5.54-.16 1.2-.38 1.56-1.15 2.94-.75 1.26-.69.83-1.52 1.03-.4.45-.36.52-.29.64-.18.78.15 1.26.24.82 2.05 2.6z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-CA'
        d='M304.58 550.161l1.55 3.53 1.08 1.33 1.52 1.18 1.26 1.21.51.89.22.87-.53 3.07-.06.86.07 1.04.3.67.38.53.76.8 2.02 3 .87 1.69.19.95.07.96-.32-.17-2.56-.19-6.81-.57-4.25.46-5.28-1.4-4.17-1.93-4.61 1.08-4.8-2.04-6.47 2.24-3.64-1.07-6.85 2.37-3.11 1.3-6.7 4.49-5.1 3.71-3.52 2.09-.75-1.15-.37-1.24-.35-2.34-.01-2.38.09-.8.13-.68 1.08-2.57.4-1.36.04-.76-.31-.6-.62-.36-1.37.06-.86.21-.86.08-.74-.15-.87-.69-.43-.6-.31-.53-.22-.26-.44-.3-.58-.22-.55-.34-.47-.39-.6-1.14-.23-.57-.45-.86-.57-.17-.94-.02-2.04.66-.98.56-.68.63-.71 1.09-.39.49-.43.43-.48.37-.54.29-1.07.41-.57-.08-.87-.23-1.45-.79-.65-.47-.45-.47-1.2-2.06-.36-.48-.82-.9-.58-.37-.74-.29-1.11-.18-.88-.02-1.87.56-3.39 2.02-.75-1.23-1.56-1.87-3.68-3.24-3.32-1.96-.48-.39-.35-.65-.21-.9-.15-3.42-.56-3.48.12-.85.32-.84.74-.95.67-.47 1.23-.6.49-.34.45-.4.38-.49.68-1.09.77-.97 1.73-1.67.23-.78-.01-1-.48-1.69-.38-.85-.35-.61-.07-.54.01-.91.66-2.99.05-2.34 1.79-6.31 1.04-1.91 1.04-.64 1.33-.55 1.72-.44 3.07-.22 1.5.06 1.02.17 1.17.4 4.53 2.54 1.19.13 1.72-.12 5.1-1.13 1.05-.49.78-.98.9-1.73 1.32-4.01.28-.61.63-.72.97-.82 9.17-6.06.99-.1 1.37.1 2.12.63 5.42 2.67.84.16 1.19.03 2.32-.31 1.17-.32.88-.34 6.97-4.29 2.83-.96 12.84-1.82 2.79 11.25 1.37 4.06 4.27 8.01.39 1.15.15 1.05-.08.8-1.23 6.18-.07 1.09.09 2.72.23.51.56.97 4.24 5.2 1.69 3.24.57 1.82-.01 3.47z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-TT'
        d='M472.78 321.261l17.12-1.37 3.66.68 2.46.1 11.04-1.33.51.13.47.24.47.35.41.44.7.96.69.33 1.03.17 1.95-.13 1.12.09.79.24 1.35 1.17.65.36.82.27 1.34.17.89-.06.82-.27 1.69-1.03 1.03-.21.83-.08 2.56.31 12.36 2.6.05.01-2.15 2.75-6.87 5.05-2.88 3.1-.84 2.21-.26 4.54-.69 2.24-1.13 1.34-12.5 8.37-3.51 3.09-2.89 3.91-.01.01v.02l-.93 3.13-.07.01-9.72 2.28-7.47 3.23-8.17 2.36-.57.51-1.09 1.33-.49 1.41-.31 1.41-.54 1.3-1.08 1.14-2.46 1.07-1.4.83-1.85 2.03-3.22 4.52-2.4 1.6-3.5 1.02-1.09 1.07-2.6 5.45-2.07 2.43-2.42 2-2.5 1.52-5.41 1.38-1.21 1.12-.44.76-2.54-1.24-2.7-1.76-3.71-1.51-2.19-1.25-.89-.77-1.59-1.74-1.53-2.63-1.04-2.28-.33-.5-.47-.38-.58-.26-.95-.11-1.17.05-3 .73-.8.35-3.32 2.63-.54.29-1.16.51-.56.31-.46.41-.35.51-.22.65-.3 1.39-.54 1.18-.35.5-.38.46-.46.4-.5.33-4.08 1.68-.94.06-1.2-.14-6.98-2.21-.55-.31-1.34-1.19-.61-.26-.67-.21-8.34-1.34-3.09-.87-3.53-2.4-2.82-3.06-.59-.41-.81-.33-1.31-.32-1.56-.59-.78-.15-1.02.09-2.62 1.01-4.6 2.36-.81.2-1.02.06-1.78-.28-.9-.38-.69-.44-.45-.4-.57-.3-2.02-.6-.98-.55-.31-.11-.54.03-5.34.94-2 .89-5.01 2.99-2.05-2.6-.24-.82-.15-1.26.18-.78.29-.64.36-.52.4-.45 1.52-1.03.69-.83.75-1.26 1.15-2.94.38-1.56.16-1.2-1.01-5.54-.1-4.24-.94-6.67.81-2.58.88-1.1 5.75-3.74.91-.78.73-.82.33-.49.96-1.91.02-2.22-.16-.84-1.49-2.6-.22-1.04.07-.89.36-.74.53-.87.64-.76.54-.43 2.28-1.33.63-.49.81-.84 1.21-.88 3.51-1.43.53-.31.89-.77 1.59-1.78 1.76-1.52 6.03-3.1 1.3-.33 2.89-.3 3.32.03 1.63-.35 4.76-1.97.93-.16 1.38.04 1.4.33 1.86.75.85.14.99.04 1.56-.31.83-.36.6-.49.72-.98.71-1.23.52-.7.57-.3h.64l.76.18.91.1 1.48-.24.77-.4.54-.51.26-.6.52-1.57.6-1 .66-.36.74-.07 1.45.22 5.75-.39 2.13-.67 5.09-2.88 1.52-.62 1.02-.1.49.36.86.82.48.36.57.28.66.2 3.89.52 2.11.72 2.87.34.6.27.98.7.53.32.68.19.73.11.77.03 2.17-.16.69.03.62.19.56.27 5.56 3.8.46.39.68.32.83.21 1.42-.1.59-.48.25-.65-.15-.63-.26-.58-.6-1.05-.24-.56-.13-.59.09-.63.29-.53.37-.46 2.22-1.98.67-.8.52-.42 2.85-1.66 1.17-.29.93-.04.63.25 1.06.62 6.51 5.32 1.06.67.58.28.82.19 1.03.1z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-TA'
        d='M291.32 204.761l.71-.03.66-.12 1.68-.72.67-.12.75.02 2.82.66 2.86.34 8.98-.62 2.56-.64 1.5-.08 2.97.32 10.01 2.52 6.34.51 4.23-.49 3.19.14 1.59.34 3.9 1.77 2.07.68 7.89.7 1.25.29 4.46 1.66 2.31 1.19.44.38.39.43 2.04 2.91.4.43 2.79 2.25 1.54 1.75 1.78 3.16 4.27 4.91 1.68 2.44 3.78 3.74 1.3 1.99 1.26 2.8.68 1.13 1.52 1.67-2.21.61-1.53.18-4.12-2.46-2.52-.87-1.12 1.26-.32 2.79-.82 1.64-2.37 2.68-.86 1.78-.38 1.21-.16 1.15.36 1.32.68 1.34.42 1.36-.41 1.33-1.45 2.44-2.18 4.99-1.69 2.21-1 .73-2.15 1.02-1.05.73-.94 1.26-.71 1.37-.85 1.08-3.65 1.1-1.57 1.6-2.08 3.55-2.17 2.48-2.7 2.09-3.16 1.46-3.6.54-3.5-.74-6.68-2.66-3.54.22-9.11 4.25-3.18.59-.82-.17-.45-.44-.42-.54-3.6-2.1-.74-.13-.61.1-.63-.09-.76-.71-.4-.66-.2-.65-.16-1.93h-.01l-.91-.85-1.78-.51-1.61.83-.93 1.28-.24 1.69-.53 1.78-.41 2.04-1.37 1.6-2.14.68-2.32.22-2.63-.28-2.34-.62-2.19-.96-1.63.19-1.3 1.71-1.36 3.52-1.67.81-1.88.15-1.68-1.2-2.2-1.9-2.01-.21-1.18.65-.22 1.46.83 2.24.06 1.69-1 1.12-.53 1.45-.5 2.04-1.66 1.59-2.2 1.55-2.77-.94-2.5-2.85-2.21.12-2.44 1.33-1.77 2-1.44 2.28-2.88 2.87-2.81 3.26-3.57.66-3.61.23-4.28 1.59-4.51.69-1.35 2.5-1.89 2.58-1.81 3.17-.63 3.59-3.31.19-3.93-.17-3.46-.74-3.33-.28-2.82 2.27-.73 1.21-1.08 2.17-2.23-.2-2.21-2.26-2.12-1.24-2.61-.21-2.61.36-1.77-.06-2.05.06-2.49.44-1.72.79-1.96 1.49-1.86.48-3.06-1.82.91-3.65 1.78-3.64 1.02-4.09-.26-2.42v-1.51l.38-2.27 1.02-1.82 2.04-2.42.43-1.8 3.24-13.59.47-5.55 5.47-16.52 1.73-2.67 3.02-2.79 3.82-2.8 3.44-3.23 3.1-3.64.75-2.13 2.95-13.48.49-1.42 1.18-2.15.53-1.22.68-2.53.43-5.13.01-.02.06-.84-.04-5.15.24-1.22.33-.86.46-.37.52-.3 1.09-.39.87-.15.45-.15.37-.36.24-.6.08-.86-.22-.76-.38-.73-2.45-3.07-.3-.73-.25-.97-.11-2.83.16-2.63-.04-.79-.44-1.19-.49-1.06-3.36-4.05.19-3.33-.2-1.66-.36-1.24-.24-1.32-.31-5.13-.23-1.35-.4-1.18-.59-1.05-.7-.95-.28-.52-.2-.55.29-1.24 3.04-8.44.49-.85 3.34-3.22.47-.7 1.74-3.67.54-.77.73-.47 1.91-.68.54-.27.63-.52.66-.73 1.01-1.4 1.25-1.3.48-.34.38-.82.31-1.19.77-4.56.93-2.07.6-2.25 2.45-3.79 1.3-1.2 1.73-.69.71-.15 1.94.01 1.5.39.56.29 8.39 6.71 4.9 2.78 7.42 3.13 1.73 1.34.53.56.41.55 1.06 2.17.42 1.18.16.63.09 1.47-.16 2.3.08.68 1.55 4.68.2.42.04.06.35.77.29.48.44.54 3.44 3.21.75.54.72.36 3.38 1.1 1.96.86.94.6.67.56.57 1.03.43 1.21.92 3.91.43 1.17.15.64-.02.73-.12.71-.85 2.57-.34 1.43-.12 1.57.04.74.14.65.25.55.61 1.02.23.55.1.64-.23 2.17.05.7.43 1.18.95 1.77 1.1 1.64.79.75.8.41.73.1z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-RV'
        d='M344.19 147.041l1.34-.75 1.34-1.88 1.93-3.88 1.33-.45 1.83 2.28 1.66 2.88 2.64 3.49 2.96 2.98 4.16 1.97 1.28 1.34 1.19 1.58 1.31 1.36 1.39.89 3.09 1.23 16.99 2.46 3.54-.01 1.55.5 1.34 1.35 1.81 3.78 1.18 1.62 5.4 4.38 1.51 1.6 1.21 2.21.43 2.11.17 4.9 1.04 2.67-.04.04-.5.66-1.4 2.88-.32.49-.73.47-.99 1.12-.92 1.36-.54 1.16-.12 2.91 1.79 5.34.49 2.92-.51 2.15-2.47 6.09-1.42 2.62-1.26 3.54-3.51 5.03 1.62 1.32 1.7.27 1.29.51.36 2.02-.63 1.54-2.61 2.04-1.03 1.46 1.04 1.91-.35 2.17-1.48 1.8-2.36.73-2.15.29-2.17.58-1.52-1.67-.68-1.13-1.26-2.8-1.3-1.99-3.78-3.74-1.68-2.44-4.27-4.91-1.78-3.16-1.54-1.75-2.79-2.25-.4-.43-2.04-2.91-.39-.43-.44-.38-2.31-1.19-4.46-1.66-1.25-.29-7.89-.7-2.07-.68-3.9-1.77-1.59-.34-3.19-.14-4.23.49-6.34-.51-10.01-2.52-2.97-.32-1.5.08-2.56.64-8.98.62-2.86-.34-2.82-.66-.75-.02-.67.12-1.68.72-.66.12-.71.03-.73-.1-.8-.41-.79-.75-1.1-1.64-.95-1.77-.43-1.18-.05-.7.23-2.17-.1-.64-.23-.55-.61-1.02-.25-.55-.14-.65-.04-.74.12-1.57.34-1.43.85-2.57.12-.71.02-.73-.15-.64-.43-1.17-.92-3.91-.43-1.21-.57-1.03-.67-.56-.94-.6-1.96-.86-3.38-1.1-.72-.36-.75-.54-3.44-3.21-.44-.54-.29-.48-.35-.77-.04-.06-.2-.42-1.55-4.68-.08-.68.16-2.3-.09-1.47-.16-.63-.42-1.18-1.06-2.17-.41-.55-.53-.56-1.73-1.34-7.42-3.13-4.9-2.78-8.39-6.71-.56-.29-1.5-.39-1.94-.01-.71.15-1.73.69-1.3 1.2-2.45 3.79-.9-1.21-1.59-1.74-.38-.63-.23-.72.03-.73.11-.69.42-.84.74-.94 1.45-1 1.37-.67 7.12-2.09 1.3-.79 1.05-1 1.27-2.51.7-1.75 2.74-9.4 2.53-.37 6.76.43 3.19-.66 2.46-.02.99-.26.82-.63.46-.65.38-.69.61-.77 5.57-3.75 1.5-1.43.83-1.86 1.09-4.11 1.33-1.58 1.96-.23 2.51.52 2.31.18 1.34-1.24.17-2.27-.36-4.93.51-2.13 1.6-1.59 2.17-.51 2.16.6 2.87 3.36 3.73 2.16 1.66 1.38 2.28 2.82 4.77 4.29 7.6 8.6 1.51 2.27.55 1.96.36 4.29.71 2.06 1.14 1.11 3.41 2.24 1.18 1.85 1.38 4.98.9 2.17 1.6 1.91 1.73 1.07 4.03 1.56 1.91 1.19 4.86 4.46 2.03 1.29 1.56.3z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-DU'
        d='M307.47 281.381h.01l.16 1.93.2.65.4.66.76.71.63.09.61-.1.74.13 3.6 2.1.42.54.45.44.82.17 3.18-.59 2.09 3.98.47 2.65.05 1.47-.1 1.51-1.47 6.4-1.38 3.84-.37 1.34-.02 1.47.18.71 2.64 6.19.14.74-.01.7-.18.65-.37.46-.55.25-1.35.26-.55.27-.45.39-.28.54-.17.63.18.91.47 1.01 1.72 2.61.4.81.16.63.06.7-.16 2.32-.58 2.89-.03.75.24 1.32.51 1.32 1.13 1.97 1.93 2.25 1.35 1.19 9.77 6.3.27.3.02.03.02.03 1.15 1.69.4.43 1.08.29 1.62.13 7.36-.3 5.28.77-.96 1.91-.33.49-.73.82-.91.78-5.75 3.74-.88 1.1-.81 2.58-5.21 2.87-1.74 1.2-5.64 5.4-1.39 1-1.12.54-.73-.06-.66-.19-1.69-.92-.69-.22-.92-.05-2.26 1.12-2.33 1.54-5.59 2.89-.87.9-2.03 2.64-19.59 11.14-2.33.94-.75.02-3.8-.68-.93-.04-1.25.17-.73.34-.51.49-.35.51-.66.75-.98.86-2.7 1.76-6.3 2.89-3.44 1.09-.76.11-1.48-.09-.7-.16-.63-.23-1.68-.94-.65-.19-.75-.08-.75.02-5.38 1.07-3.47.3-.95.38-.55.47-.25.67-.26 1.41-.33.75-.59.69-2.13 1.6-.98.9-.76.31-.78.07-5-1.52-2.85-.33-5.82.46-.73-.12-.66-.23-.57-.31-.45-.39-.36-.49-.28-.54-.77-2.48-.24-.57-.32-.52-.4-.44-.5-.35-.67-.18-.8.01-4.78.54-.75-.08-.69-.19-1.21-.54-1.55-1.04-.46-.39-.89-.91-.61-.39-1.03-.2-.54.3-.3.59-.05.72.03.76.35 2.9.06 3.08-.25.85-.57.83-1.33 1.08-.95.43-.83.21-8.11-.19-1.95-2.31-.68-1.45-.1-.69-.18-2.97-.1-.68-.34-1.14-.32-.69-.56-.87-.67-.78-.47-.65-6.34-7-2.03-3.75-.36-.47-1.09-.68-5.69-2.24-3.41-.83-4-.19-.9-.31-.94-.5-1.25-1.17-.55-.83-.31-.81-.3-2.1-.41-1.22-.57-1.06-.77-.92-.46-.39-1.19-.49-5.92-1.4-3.4-.42-5.55.79-1.12-.28-4.19-2.41-4.84-4.81v-.73l-.57-3.67.25-1.46-2.23-.91-.98.47-1.07-.09-.72-.7.04-1.35.52-.54 1.8-.28.8-.47 1.33-1.44 1.72-1.48 1.86-1.17 1.77-.47 1.9.4 4.18 1.78 2.01.4h2.33l1.27-.25.01-.85-1.48-1.86-.18-1.19 1.73-.42 2.26-.13 1.45-.31-.09-.57-.42-.95.02-1.03 1.19-.87 1.06.04.87.6.7.7.55.33 1.69 1.53 1 .32.43-1.39-.5-2.29-.07-1.22.57-1.12 1.76-.49 1.93.34 1.32-.42-.04-1.94-.01-.82 1.14-2.66.9-.97 1.39-1.31 1.8-.8 3.04-.11 2.02-.92 1.16-1.49 1.87-.64 1.95.64 3.06 1.82 1.86-.48 1.96-1.49 1.72-.79 2.49-.44 2.05-.06 1.77.06 2.61-.36 2.61.21 2.12 1.24 2.21 2.26 2.23.2 1.08-2.17.73-1.21 2.82-2.27 3.33.28 3.46.74 3.93.17 3.31-.19.63-3.59 1.81-3.17 1.89-2.58 1.35-2.5 4.51-.69 4.28-1.59 3.61-.23 3.57-.66 2.81-3.26 2.88-2.87 1.44-2.28 1.77-2 2.44-1.33 2.21-.12 2.5 2.85 2.77.94 2.2-1.55 1.66-1.59.5-2.04.53-1.45 1-1.12-.06-1.69-.83-2.24.22-1.46 1.18-.65 2.01.21 2.2 1.9 1.68 1.2 1.88-.15 1.67-.81 1.36-3.52 1.3-1.71 1.63-.19 2.19.96 2.34.62 2.63.28 2.32-.22 2.14-.68 1.37-1.6.41-2.04.53-1.78.24-1.69.93-1.28 1.61-.83 1.78.51.91.85z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-CL'
        d='M440.74 217.301l1.15-.11.98-1.27 1.87-1.76 1.93-.7 2.02.22 1.95.87 1.76 1.32.61.82.92 1.78.92.84 1.01.39 3.38.33 1.77.54 1.47.68 2.93 2.02 1.2 1.31.45 1.24.25 1.23.6 1.3 1.06 1.23 1.34 1.18 2.84 1.85 6.01 1.28 1.49.97.61 1.66.14 4.27 2.93 7.08 5.22 7.75 1.23 3.39.69 4.12.33 6.11.49 2.06.93 1.6 2.62 2.32 1.06 1.47 1.74 3.14 2.12 2.89 2.43 2.51 6.46 4.63 6.06 6.8 5.8 1.97 4.42 2.73 1.73.54 3.31.03 3.4 2.1 3.31 1.53 1.58 1.16 6.8 7.4.92 1.83-.33 2.21-1.31 1.74-3.72 2.92-2.03 2.58-.05-.01-12.36-2.6-2.56-.31-.83.08-1.03.21-1.69 1.03-.82.27-.89.06-1.34-.17-.82-.27-.65-.36-1.35-1.17-.79-.24-1.12-.09-1.95.13-1.03-.17-.69-.33-.7-.96-.41-.44-.47-.35-.47-.24-.51-.13-11.04 1.33-2.46-.1-3.66-.68-17.12 1.37-1.03-.1-.82-.19-.58-.28-1.06-.67-6.51-5.32-1.06-.62-.63-.25-.93.04-1.17.29-2.85 1.66-.52.42-.67.8-2.22 1.98-.37.46-.29.53-.09.63.13.59.24.56.6 1.05.26.58.15.63-.25.65-.59.48-1.42.1-.83-.21-.68-.32-.46-.39-5.56-3.8-.56-.27-.62-.19-.69-.03-2.17.16-.77-.03-.73-.11-.68-.19-.53-.32-.98-.7-.6-.27-2.87-.34-2.11-.72-3.89-.52-.66-.2-.57-.28-.48-.36-.86-.82-.49-.36-1.02.1-1.52.62-5.09 2.88-2.13.67-5.75.39-1.45-.22-.74.07-.66.36-.6 1-.52 1.57-.26.6-.54.51-.77.4-1.48.24-.91-.1-.76-.18h-.64l-.57.3-.52.7-.71 1.23-.72.98-.6.49-.83.36-1.56.31-.99-.04-.85-.14-1.86-.75-1.4-.33-1.38-.04-.93.16-4.76 1.97-1.63.35-3.32-.03-2.89.3-1.3.33-6.03 3.1-1.76 1.52-1.59 1.78-.89.77-.53.31-3.51 1.43-1.21.88-.81.84-.63.49-2.28 1.33-.54.43-.64.76-.53.87-.36.74-.07.89.22 1.04 1.49 2.6.16.84-.02 2.22-5.28-.77-7.36.3-1.62-.13-1.08-.29-.4-.43-1.15-1.69-.02-.03-.02-.03-.27-.3-9.77-6.3-1.35-1.19-1.93-2.25-1.13-1.97-.51-1.32-.24-1.32.03-.75.58-2.89.16-2.32-.06-.7-.16-.63-.4-.81-1.72-2.61-.47-1.01-.18-.91.17-.63.28-.54.45-.39.55-.27 1.35-.26.55-.25.37-.46.18-.65.01-.7-.14-.74-2.64-6.19-.18-.71.02-1.47.37-1.34 1.38-3.84 1.47-6.4.1-1.51-.05-1.47-.47-2.65-2.09-3.98 9.11-4.25 3.54-.22 6.68 2.66 3.5.74 3.6-.54 3.16-1.46 2.7-2.09 2.17-2.48 2.08-3.55 1.57-1.6 3.65-1.1.85-1.08.71-1.37.94-1.26 1.05-.73 2.15-1.02 1-.73 1.69-2.21 2.18-4.99 1.45-2.44.41-1.33-.42-1.36-.68-1.34-.36-1.32.16-1.15.38-1.21.86-1.78 2.37-2.68.82-1.64.32-2.79 1.12-1.26 2.52.87 4.12 2.46 1.53-.18 2.21-.61 2.17-.58 2.15-.29 2.36-.73 1.48-1.8.35-2.17-1.04-1.91 1.03-1.46 2.61-2.04.63-1.54-.36-2.02-1.29-.51-1.7-.27-1.62-1.32 3.51-5.03 1.26-3.54 1.42-2.62 2.47-6.09.51-2.15-.49-2.92-1.79-5.34.12-2.91.54-1.16.92-1.36.99-1.12.73-.47.32-.49 1.4-2.88.5-.66.04-.04.36.92 2.79 2.7 3.37 2.46 3.1 2.93 3.13 3.66 7.05 6.53 5.69 4.02 5.05 4.74 2.39 1.69z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-SO'
        d='M103.94 361.511l1.18-.33 2.12-1.56 1.22-.55 1.14-.08 1.06.18 4.19 1.41 1.8.97 1.23 1.48 1.14 4.81 1.55-.43 1.68-1.82 1.05-1.58.61 3.26.56 1.31 1.22.53 1.13-.2 4.6-2.05 2.57-1.6.9-.33-1.4 3.86-.67 1.13-7.32 9.38-1.35 1.17-10.76 12.89-1.12 1.98-.04 1.12.11.8.23.65.31.51.41.46 2.62 1.75.46.39.4.46.31.53.25.56 1.15 5.27.21.6.28.54 1.67 2.19.02.05.01.02.12.33.23 1.58.05 1.45.14.95.21.74.34.51.39.46.42.42 2.11 2.91.89.82 1.03.71.61.26 2.83.75.6.36.51.46.32.81v.73l-.18.66-.22.59-.28.55-.22.65-.18.71-1.54 12.09-.04 1.54.11.41.17.44 4.28 7.4 1.21 2.91.19.71.29 1.82.41 1.43.26.71.24.86.46 3.1.38 1.27.23.59.29.53 1.81 2.49.82 1.37-10.7-1.68-8.48.01-2.9-.39-.56-.31-1.94-1.51-1.75-1.66-1.94-1.17-2.21-1.03-1.89-.53-17.69 4.83-6.2.61-2.89-.24-14-4.86-1-.73-.48-.46-.67-.84.14.15-.17-.23-.21-.34-.55-.54-.74-.57-1.4-.72-1.03-.29-8.02-.25-3.07.56-1.83.07-1.05-.14-.8-.21-.46-.25-.27-.2-.38-.33-.34-.44-.6-1.05-.25-.59-.38-1.23-.51-1.15-.28-.52-.64-.85-.55-.57-11.57-3-1.77-.21-1.65.49-9.58 6.67-9.24 3.88-1.43.42-3.28.59-.05.01h-.01l-1.95-11.2-.49-10.67 1.4-10.55-.34-2.57-.62-2.42-.33-2.58.52-2.91 1.4-2.41 3.51-4.66.7-2.66-.65-2.41-.68-.57.02-.01 9.79-5.82 5.53-7.28 1.89-1.19h4.9l2.93.49 1.16-.54.47-2.08.05-4.63.3-1.24 1.1-1.1 3.45-1.87 1.21.75 1.75 1.68.54.08 1.06.92.82-1.06.42-2.02-.13-2.02-.29-.2-1.31-1.26-.58-.69-.02-.95.07-1.09-.04-.83-1.1-2.44.04-.86 1.06-.89 1.67-.45 1.47.35 1.5.57 1.73.22 2.3-.56.43-1.03-.22-1.49.36-1.86 1.02-1 3.05-.79 1.53-.65 1.46-1.33 1.06-1.36 1.21-1.1 1.88-.54 1.78.29 2.87 1.73 1.59.56 1.25-.03 2.15-.64 1.22-.16 1.14.27 1.49 1.13 3.08.76 3.93 1.61 1.98-.43.76-.97 1.02-2.66.7-.55 3.43-.94.78-.35 1.98-1.39 2.18-.5 2.29.35 4.5 2.39.95.77.39.93v1.36l.15 1.52.52 1.21 1.11.51z'
      ></path>
      <path
      
      className="country-state"
           onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} id='UY-SA'
        d='M91.1 92.011l3.63-.01 2.1.29 1.1.31.83.35 1.68 1.3.62.61 3.38 2.41 13.58 7.25 4.89 1.59.8.48 1.53 1.28.05.04 4.72 4.72 1.95 1.39 2.48 1.32 6.17 1.85 1.03.09.67-.1.61-.19.55-.25 2.77-2.12.99-.54.68-.26 6.75-.85 2.46.14 11.64 2.12 1.46.07 2.44-.69 4.93-.47 1.27-.3 1.12-.46.94-.5 6.02-5.06.96-.6 1.17-.4 3.43-.45 1.2-.39.51-.31.44-.37 1.47-1.84.44-.38 1.02-.61 2.31-.96.46-.26.88-.75.37-.48.61-1.08.75-1.79.59-1.1.36-.48.39-.44.73-.36 1.02-.24 1.86-.19 1.02.15.82.2 5.7 2.09 16.29 3.6.67.26 1.68 1.03 2.11 1.83.73.91 1.54 2.5 1.18 1.41 2.62 2.25.76.86 1.03 1.43.81.83 3.83 2.99.09.07.58.94.16-.02-2.74 9.4-.7 1.75-1.27 2.51-1.05 1-1.3.79-7.12 2.09-1.37.67-1.45 1-.74.94-.42.84-.11.69-.03.73.23.72.38.63 1.59 1.74.9 1.21-.6 2.25-.93 2.07-.77 4.56-.31 1.19-.38.82-.48.34-1.25 1.3-1.01 1.4-.66.73-.63.52-.54.27-1.91.68-.73.47-.54.77-1.74 3.67-.47.7-3.34 3.22-.49.85-3.04 8.44-.29 1.24.2.55.28.52.7.95.59 1.05.4 1.18.23 1.35.31 5.13.24 1.32.36 1.24.2 1.66-.19 3.33-5.41 1.42-1.54 1.16-.2.68-.56 1.03-.9 1.22-3.13 3.36-.64.91-.29 1.35-.2.58-.52 1.02-.49.55-.57.43-1.35.45-1.69.3-1.11.03-.66-.08-7.28-2.22-5.29-.18-.71-.12-1.31-.42-5.18-3.31-.85-.25-1.14-.16-4.28-.04-.71-.13-.63-.23-2-1.36-.73-.36-.98-.3-1.74-.26h-1.23l-8.87 1.94-1.18.05-2.12-.52-4.51-1.73-.78.03-.64.21-.44.38-.63.45-.79.43-1.41.52-.99.15-.92-.01-1.32-.39-8.67-1.06-1.19-.32-3.79-2.94-1.12-.59-8.14-2.35-2.32-1.13-1.39-1.12-.75-.88-2.24-3.49-.49-.5-1.07-.43-1.89-.45-2.9-.1-2.48-.35-2.45-.96-1.1-.63-3.45-2.46-7.33-3.79-15.1-3.31-.74-.28-.52-.31-.47-.37-.38-.46-.29-.52-.23-.56-1.31-4.24-.29-.52-.36-.45-.89-.79-6.79-3.84-2.7-1.04-1.06-.18-.81.02-3.79.96-.48.3-.33.45-.11.64-.11 1.15-.02.06-.13.1-.52.08-1.15.04-1.77-.47-1.62-.21-1.54.43-1.68.86-.33.18-1.21-.94-2.51-3.08 1.3-3.72 1.95-1.64 3.86-2.36 1.61-1.4 1-2.26.51-5.46.94-2.47.71-.79 1.69-1.34.76-.78 2.13-4.54 1-1.38.01-3.11-.69-5.33 1.3-5.3 2.6-4 1.89-4.08-.82-5.6-4.33-6.39-.64-1.37.79-2.12 1.92-1.3 4.36-1.15 2.38.29 1.27-.48.55-1.81.59-2.88.12-1.24-.11-4.99-.35-2.96.01-.01 2.46-3.67.53-.46.71-.5 1.03-.04 2.81.32 1.11.36 1.41.83 6.66 5.02 1.72 1.58.77.87 1.7 2.37.5.55.68.58 1.23.79.95.33.91.17z'
      ></path>
     </svg>
    );
};

export default Uruguay;