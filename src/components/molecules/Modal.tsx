'use client';
import React from 'react';
import { Button, Title, Separator } from '../atoms';
import { FaTimes } from 'react-icons/fa';
import classNames from 'classnames';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  contentClassName?: string;
}

class Modal extends React.Component<ModalProps> {
  componentDidMount() {
    if (this.props.isOpen) {
      document.body.classList.add('no-scroll');
    }
  }

  componentDidUpdate(prevProps: ModalProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      if (this.props.isOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('no-scroll');
  }

  handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const {
      isOpen, onClose, title, description,
      content, footer, className, overlayClassName, contentClassName
    } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <div
        className={`fixed w-full  h-full !p-4 bg-slate-950 text-slate-700 bg-opacity-80 flex items-center justify-center overflow-hidden z-[999] left-0 top-0 bottom-0 right-0 m-auto ${overlayClassName}`}
        onClick={this.handleBackgroundClick}
      >
        <div className={`w-fit h-fit max-w-[95vw] bg-white dark:bg-slate-900 rounded-md shadow-lg ${className} max-h-[90vh] flex justify-stretch`}>
          <div className="flex flex-col w-full">
          {title && (<div className="flex items-center justify-between p-4">
              <Title title={title && title} description={description && description} level="h4" titleClassName="text-xl" />
            <Button icon={<FaTimes />} onClick={onClose} className="w-[25px] h-[25px] bling-btn-secondary   dark:bg-slate-800 dark:hover:bg-red-500 dark:hover:text-white text-md text-lg text-slate-700 font-bold" />

            </div> )}
           
            <div className={classNames("p-2 text-slate-700 h-auto  overflow-y-auto overflow-x-hidden ", contentClassName)}>
              {content}
            </div>
          
            {footer && <div className="flex flex-row items-center justify-end gap-2 p-4 flex-nowrap">{footer}</div>}
          </div>
        </div>
      </div>
    );
  }
}

export { Modal };
