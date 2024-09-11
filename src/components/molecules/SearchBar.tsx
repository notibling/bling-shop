'use client';
import classNames from "classnames";
import { HTMLProps, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaSearch } from "react-icons/fa";
import { Button } from "../atoms";

enum SearchSize {
  xs = "text-xs W-6",
  small = "text-sm W-8",
  md = "text-md W-10",
  base = "text-base W-12",
  lg = "text-lg W-14",
  xl = "text-xl W-16",
  xxl = "text-2xl W-18",
  xxxl = "text-3xl W-20",
}

interface ISearchBarRef {
  setSearchValue(value: string): void;
  input: React.RefObject<HTMLInputElement>;
}

interface ISearchProps extends Omit<HTMLProps<HTMLDivElement>, "size" | 'onChange'> {
  size?: SearchSize;
  categorySelector?: boolean;
  onSearch?: (value: string) => void;
  onChange?: (value: string) => void;
}

const SearchBar = forwardRef<ISearchBarRef, ISearchProps>(({
  className,
  children,
  categorySelector,
  placeholder,
  type,
  size = SearchSize.base,
  onSearch,
  onChange,
  ...rest
}, ref) => {
  const [search, setSearch] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSearch(e?: any) {
    if (e) {
      e.preventDefault();
    }
    onSearch && onSearch(search);
  }

  useImperativeHandle(ref, () => ({
    setSearchValue(value: string) {
      setSearch(value);
    },
    input: inputRef
  }), [inputRef])


  useEffect(() => {
    onChange && onChange(search);
  }, [search])

  return (
    <div
      className={twMerge(
        classNames(
          "join",
          "rounded-full",
          "w-auto",
          "flex",
          "justify-center",
          "items-center",
          "bg-slate-100",
          "dark:bg-slate-900",
          "transition-all",
          "duration-300",
          "rounded-full",
          "border-2",
          "border-slate-100",
          "dark:border-slate-800",


          size
        ),
        className
      )}
      {...rest}
    >
      <div
        className={classNames("flex", "flex-row", "dark:bg-slate-950", "w-full", "bg-white")}
      >
        <div className={classNames("flex", "h-12", "w-full", "join-item")}>
          <form
            onSubmit={(e) => handleSearch(e)}
            className={classNames(
              "flex",
              "w-full",
              "join-item",

              "rounded-full",
              "justify-between",
              "items-center"
            )}
          >
            {categorySelector && (
              <select
                className={classNames(
                  "select",
                  "bg-slate-100",
                  "dark:bg-slate-90",
                  "text-xs",
                  "text-slate-800",
                  "hover:text-slate-500",
                  "hover:bg-slate-200",
                  "border-none",
                  "rounded-full",
                  "!outline-none"
                )}
              >
                <option
                  disabled
                  selected
                  className={classNames("!outline-none")}
                >
                  Categorías
                </option>
                <option>Sci-fi</option>
                <option>Drama</option>
                <option>Action</option>
              </select>
            )}
            <div className={classNames("w-full", "first-line:w-full", "flex")}>
              <input
                ref={inputRef}
                value={search}
                placeholder={placeholder}
                onChange={(e) => setSearch(e.target.value ?? '')}
                className={classNames(
                  "w-full",
                  "input",
                  "text-xs",
                  "rounded-l-full",
                  "rounded-r-2xl",
                  "focus:text-gray-500",
                  "text-gray-400",
                  "bg-white",
                  "dark:bg-slate-950",
                  "dark:text-slate-200",
                  "border-none",
                  "!outline-none",
                  'focus:shadow-inner',
                )}
              />
            </div>

            <div className={classNames("indicator", 'p-1', 'items-center', 'flex')}>
              <Button
                icon={<FaSearch className={classNames("bg-inherit")} />}
                aria-label="Press to Search"
                className={classNames(
                  'h-10',
                  "px-8",
                  "bg-white",
                  "dark:bg-slate-800",
                  "border-none",
                  'hover:drop-shadow-lg',
                  "text-lg",
                  "hover:bg-blue-500",
                  "dark:hover:bg-blue-500",
                  "hover:text-white",
                  "text-blue-500",
                  "dark:text-slate-700",
                  "dark:hover:text-white",
                  "rounded-full"
                )}
                onClick={() => handleSearch()}
              />

            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export { SearchBar };
