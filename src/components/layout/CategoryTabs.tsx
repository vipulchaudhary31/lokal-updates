import React from 'react';

const categories = [
  { id: 1, name: 'माझी बातमी', active: true },
  { id: 2, name: 'अमरावती', active: false },
  { id: 3, name: 'गुन्हा', active: false },
  { id: 4, name: 'व्हिडिओ', active: false },
  { id: 5, name: 'मनोरंजन', active: false },
  { id: 6, name: 'जीवनशैली', active: false },
];

export const CategoryTabs = () => {
  return (
    <nav className="overflow-x-auto flex min-h-12 w-full items-center gap-3 pl-3 py-1.5">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`self-stretch min-h-9 text-sm text-white font-${
            category.active ? 'semibold' : 'normal'
          } whitespace-nowrap text-center leading-none my-auto pt-0.5 px-2 rounded-[61px]`}
        >
          {category.name}
        </button>
      ))}
      <button className="self-stretch flex min-h-9 items-center gap-1 justify-center my-auto pt-0.5 px-2 rounded-[61px]">
        <span className="text-white text-sm font-normal leading-none text-center self-stretch my-auto">
          सर्व श्रेणी
        </span>
        <div className="self-stretch flex flex-col overflow-hidden items-stretch justify-center w-3 my-auto px-0.5 py-1">
          <div className="bg-[rgba(255,255,255,0.8)] flex shrink-0 h-[5px]" />
        </div>
      </button>
    </nav>
  );
};
