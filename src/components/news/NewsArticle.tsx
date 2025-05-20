
import React from 'react';

interface NewsArticleProps {
  imageUrl: string;
  title: string;
  content: string;
  author: string;
  timeAgo: string;
}

export const NewsArticle: React.FC<NewsArticleProps> = ({
  imageUrl,
  title,
  content,
  author,
  timeAgo,
}) => {
  return (
    <article className="bg-white relative flex min-h-[626px] w-full flex-col overflow-hidden items-stretch">
      <div className="z-0 min-h-60 w-full overflow-hidden">
        <img src={imageUrl} className="aspect-[1.5] object-contain w-full flex-1" alt={title} />
      </div>
      <div className="bg-white self-center z-0 min-h-[386px] w-full overflow-hidden rounded-[20px_20px_0px_0px]">
        <div className="w-full flex-1 pt-[18px] pb-6 px-4">
          <div className="w-full flex-1">
            <h1 className="text-[#191919] text-lg font-semibold leading-[27px]">
              {title}
            </h1>
            <p className="text-[#666] text-base font-normal leading-6 flex-1 mt-2">
              {content}
            </p>
          </div>
        </div>
        <div className="flex w-full items-center gap-4 pb-[20px] px-4">
          <div className="self-stretch flex min-w-60 w-full items-center justify-between flex-1 shrink basis-[0%] my-auto">
            <div className="self-stretch flex min-w-60 flex-col items-stretch text-[13px] text-[#989898] font-normal leading-none justify-center flex-1 shrink basis-[0%] my-auto">
              <div className="flex max-w-full w-[248px] flex-col justify-center">
                <div className="text-[#989898] text-ellipsis w-[120px] max-w-full">
                  {author}
                </div>
              </div>
              <div className="text-[#989898] text-justify">
                {timeAgo}
              </div>
            </div>
            <div className="self-stretch flex items-center gap-4 my-auto">
              <button className="self-stretch flex items-center gap-3 w-6 my-auto">
                <div className="self-stretch flex w-6 flex-col items-center justify-center my-auto">
                  <div className="flex w-6 items-center gap-[5px]">
                    <img src="https://cdn.builder.io/api/v1/image/assets/8af8298d8b2744f5817fa7b6a5be0a71/d7c9ebee530cf9958e480e0e35e24a11cb458cce?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 self-stretch my-auto" alt="Share" />
                  </div>
                </div>
              </button>
              <button>
                <img src="https://cdn.builder.io/api/v1/image/assets/8af8298d8b2744f5817fa7b6a5be0a71/400f95c06fbe04e789b7897e95a7196af751b4ae?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto" alt="More" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white absolute z-0 overflow-hidden text-xs text-[#323232] font-bold tracking-[0.12px] leading-none px-[9px] py-[5px] rounded-2xl left-[9px] top-[227px]">
        <div className="flex items-center gap-[3px]">
          <img src="https://cdn.builder.io/api/v1/image/assets/8af8298d8b2744f5817fa7b6a5be0a71/7531c6042b9764c614291234224b572783ca933b?placeholderIfAbsent=true" className="aspect-[1.07] object-contain w-[15px] self-stretch shrink-0 my-auto" alt="Logo" />
          <div className="text-[#323232] self-stretch my-auto">
            Lokal
          </div>
        </div>
      </div>
    </article>
  );
};
