import { Lang } from '@/types/common';

export const convertName = (
  enName: string,
  krName: { name: string }[],
  lang: Lang,
) => (lang === 'kr' ? krName[0].name : enName);
