import { Lang } from '@/types/common';

export const convertName = (
  enName: string,
  koName: { name: string }[],
  lang: Lang,
) => (lang === 'ko' ? koName[0].name : enName);
