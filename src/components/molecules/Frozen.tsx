import { useMemo } from "react";

interface IFrozenProps {
  children: React.ReactNode,
  deps?: any[]
}
const Frozen: React.FC<IFrozenProps> = ({ children, deps = [] }) => {
  return useMemo(() => {
    return <>{children}</>;
  }, [...deps])
}

export { Frozen };