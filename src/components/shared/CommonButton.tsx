import { twMerge } from 'tailwind-merge';
import { DefaultProps, Lang } from '@/types/common';
import { COMMON_BUTTON_CONTENTS } from '@/constants/contents';

type CommonButtonUsage =
  | 'area'
  | 'viewAll'
  | 'move'
  | 'viewCompatibility'
  | 'newCombination'
  | 'share';

interface CommonButtonProps extends DefaultProps {
  type: CommonButtonUsage;
  lang: Lang;
}

export default function CommonButton({
  type,
  lang,
  className,
}: CommonButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        `w-max px-[1.5625rem] py-4 border-[.1875rem] border-black-50 rounded-full text-xl font-bold shadow-inner/top/white drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)] hover:scale-105 transition-all ease-in-out ${COMMON_BUTTON_BG[type]}`,
        type === 'viewAll' && 'px-[1.3125rem] py-3 text-[1.125rem]',
        className,
      )}>
      {COMMON_BUTTON_CONTENTS[lang][type]}
    </button>
  );
}

const COMMON_BUTTON_BG = {
  area: 'bg-yellow-50',
  viewAll: 'bg-yellow-50',
  move: 'bg-blue-10',
  viewCompatibility: 'bg-yellow-50',
  newCombination: 'bg-red-30',
  share: 'bg-yellow-50',
} as const;
