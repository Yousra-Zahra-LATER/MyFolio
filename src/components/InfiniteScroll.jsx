import cn from "classnames";
import { ICONS } from "../constant/Data";
export default function Technologies() {
  const marquee = ICONS.map(({ classes, icon: Icon, label }, i) => (
    <Icon
      className={cn(
        "aspect-square h-14 w-auto opacity-70 transition duration-300 hover:!opacity-100 group-hover:opacity-30 ",
        classes
      )}
      title={label}
    />
  ));
  return (
    <>
      <div className="flex flex-col my-5 text-center gap-5">
        <h1 className="font-semibold text-4xl">Technologies</h1>
        <div className="text-center">
          The arsenal of technologies and tools that have accompanied me
          throughout my journey.
        </div>
        <div className="w-full border-t-2 border-purple-50 my-5"></div>
        <div className="relative overflow-hidden">
          <div className="group flex w-4/6 mx-auto shrink-0 gap-[--gap] px-2 py-2 [--gap:2rem] overflow-hidden relative group">
            <div className="flex shrink-0 animate-scroll items-center justify-around gap-[--gap] will-change-[transform,opacity] group-hover:paused">
              {marquee}
            </div>
            <div
              aria-hidde
              className="flex shrink-0 animate-scroll items-center justify-around gap-[--gap] will-change-[transform,opacity] group-hover:paused"
            >
              {marquee}
            </div>
            <div
              aria-hidden
              className="flex shrink-0 animate-scroll items-center justify-around gap-[--gap] will-change-[transform,opacity] group-hover:paused"
            >
              {marquee}
            </div>
          </div>
        </div>

        <div className="w-full border-t-2 border-purple-50 my-5"></div>
      </div>
    </>
  );
}
