'use client'
import { useAnimation } from '@/hooks/useAnimation';
import classNames from 'classnames';
import React, { HTMLProps, useEffect, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { MultiOptionsProvider, useMultiOptions } from './MultiOptions.context';
import { NumberUtils } from '@/utils';


interface IAction {
  id?: number;
  icon: React.ReactNode,
  onClick: () => void;
  className?: string;
}

interface IMultiOptionsButtonProps {
  className?: string;
  openClassName?: string;
  triggerClassName?: string;
  actions: IAction[];
  children: React.ReactNode;
  width: number;
  height: number;
  id?: number;
  actionsZIndex?: number;
  triggerProps?: HTMLProps<HTMLDivElement>;
}

const MultiOptionsButton: React.FC<IMultiOptionsButtonProps> = ({
  className, actions, openClassName,
  triggerClassName, children,
  width, height, id, actionsZIndex = 100, triggerProps ={}
}) => {
  const { activeId, setActiveId } = useMultiOptions();
  const [open, setOpen] = useState<boolean>(false);
  const uniqueId = useRef<number>(id ?? NumberUtils.random());
  const { animate, animating } = useAnimation(200);
  const [allowedPositions, setAllowedPositions] = useState<number[][]>([]);

  const openAndAnimated = useMemo(() => open && !animating, [open, animating]);


  const activeMultiButton =  activeId === undefined ? true : activeId === uniqueId.current

  function calculatePositions() {
    if (!actions.length) return;
    const numberOfCircles = actions.length;
    const center = { x: 0, y: 0 };
    const positions = [];
    const angleIncrement = (2 * Math.PI) / numberOfCircles;
    const adjustRadius = width + 10;

    for (let i = 0; i < numberOfCircles; i++) {
      const angle = i * angleIncrement;
      const x = center.x + adjustRadius * Math.cos(angle);
      const y = center.y + adjustRadius * Math.sin(angle);
      positions.push([x * -1, y]);
    }

    setAllowedPositions(positions);
  }

  function handleToggle(value?: boolean) {
    console.log('handleToggle', { uniqueId: uniqueId.current, activeId})
    setActiveId(open ? undefined : uniqueId.current);
    setOpen((prev) => value !== undefined ? value : !prev);
    animate();
  }

  function handleClose(event: React.FocusEvent<HTMLDivElement, Element>) {
    if (!event.relatedTarget?.classList.contains('action-button')) {
      setActiveId(undefined);
      handleToggle(false);
    }
  }
  function getPosition(index: number, type: 'x' | 'y') {
    const position = allowedPositions[index];
    if (position) {
      return type === 'x' ? position[0] : position[1]
    }
  }

  function handleClickAction(event: React.MouseEvent<HTMLDivElement, MouseEvent>, action: IAction) {
    event.stopPropagation();
    action.onClick()
  }

  useEffect(() => {
    calculatePositions();
  }, [])

  return (
    <div tabIndex={0} onBlur={handleClose} className={twMerge(classNames(className, 'transition-all', 'duration-300', 'action-button'), open ? openClassName : '')}>
      <div className={classNames('relative')}>
        <div
          {...triggerProps}
          onClick={() => handleToggle()}
          style={{ width, height, ...(triggerProps?.style ?? {}) }}
          className={twMerge(classNames(
            'cursor-pointer', 'rounded-full', 'z-[100]',
             'text-white',
            'flex', 'justify-center', 'items-center',
            'text-center', 'action-button',

          ), triggerClassName)}

        >
          {children}
        </div>

        <>
          {
            !animating && !open ? null :
              actions.map((action, index) => (
                <div 
                key={`multioptionbtn-${index}-${action.id}`}
                className={classNames(
                  'top-0', 'left-0', 'absolute',
                  'transition-all', 'duration-300',
                  {'opacity-30': activeId === undefined ? false : !(activeMultiButton || action?.id == activeId)}

                )} style={{
                  width,
                  height,
                  zIndex: openAndAnimated ? actionsZIndex : -1,
                  transform: openAndAnimated ? `translate(${getPosition(index, 'x')}px, ${getPosition(index, 'y')}px)` : 'translate(0px, 0px)',
                }}>
                  <div 
                    role="button" 
                    onClick={(event) => handleClickAction(event, action)}
                    style={{
                      width,
                      height,
                    }}
                    className={twMerge(
                      classNames(
                        'transition-all', 
                        'duration-300',
                        'ease-in-out',
                        'rounded-full',
                        'bg-black',
                        'text-white',
                        'hover:scale-125',
                        'flex', 'justify-center', 'items-center',
                        'text-center',
                        'action-button'
                      ), action.className)}
                  >
                    {action.icon}
                  </div>
                </div>
              ))
          }
        </>



      </div>
    </div>
  );
}

export { MultiOptionsProvider, MultiOptionsButton }