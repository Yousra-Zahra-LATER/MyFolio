import cn from "classnames";
import { ICONS } from "../constant/Data";
export default function Technologies() {
  const marquee = ICONS.map(({ classes, icon: Icon, label }, i) => (
    <Icon
      key={i} // Ajout d'une clé unique pour chaque élément
      className={cn(
        "aspect-square h-14 w-auto opacity-70 transition duration-300 hover:!opacity-100 group-hover:opacity-30",
        classes
      )}
      title={label}
    />
  ));
  return (
    <>
      <div className="flex flex-col text-center dark:bg-gray-700 gap-6 py-5">
        <h1 className="font-semibold text-4xl  dark:text-white">Technologies</h1>
      
        <h2 className="text-gray-900 text-xl mb-3 font-medium text-center dark:text-gray-200 opacity-80">
        The arsenal of technologies and tools that have accompanied me
          throughout my journey.
    
            </h2>
        
        <div className="w-full border-t-2 border-purple-50 dark:opacity-15 "></div>
        <div className="relative overflow-hidden">
  <div className="relative group flex w-4/6 mx-auto shrink-0 gap-[--gap] px-2 py-2 [--gap:2rem] overflow-hidden">
    <div className="flex shrink-0 animate-scroll items-center justify-around gap-[--gap] will-change-[transform,opacity] group-hover:paused">
      {marquee}
    </div>
    <div
      aria-hidden
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
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-custom-pink dark:from-gray-700 to-transparent " />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-custom-pink dark:from-gray-700 to-transparent" />
    </div>
  </div>
</div>


        <div className="w-full border-t-2 border-purple-50 dark:opacity-15"></div>
      </div>
    </>
  );
}
