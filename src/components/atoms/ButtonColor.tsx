"use client";
import classNames from "classnames";
import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";
import { SmallLoading } from "../icon/SmallLoading";

enum ButtonColorSize {
  xs = "text-xs h-6",
  small = "text-sm h-8",
  md = "text-md h-10",
  base = "text-base h-12",
  lg = "text-lg h-14",
  xl = "text-xl h-16",
  xxl = "text-2xl h-18",
  xxxl = "text-3xl h-20",
}

interface IButtonColorProps extends Omit<HTMLProps<HTMLButtonElement>, "size"> {
  size?: ButtonColorSize;
  loading?: boolean;
  color?: string;
}const ButtonColor: React.FC<IButtonColorProps> = ({ className, children, type, size = ButtonColorSize.xs, loading, color = "#ffffff", ...rest }) => {
    return (
        <button
            className={twMerge(
                classNames(
                    "w-auto",
                    "h-auto",
                    "aspect-square",
                    "rounded-full",
                    "cursor-pointer",
                    'p-4',
                    "flex",
                    "justify-center",
                    "items-center",
                    "transition-all",
                    "duration-300",
                    'dark:bling-dark-border',
                    'bling-light-border',
                ),
                size,
                className
            )}
           
            {...rest}
        >
          
            <div className="h-[25px] aspect-square rounded-full" style={{ backgroundColor: color }}></div>
            {loading ? <SmallLoading /> : children}
        </button>
    );
};

  
  export { ButtonColor, ButtonColorSize };