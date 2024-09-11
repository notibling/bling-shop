import { Marquee } from "@/components/molecules/Marquee";
import classNames from "classnames";




export default function MarqueePage() {
  return <>
    <Marquee className={classNames('w-[600px]')} autoPlay>
      <h1> Lorem, i</h1>
    </Marquee>
  </>
}