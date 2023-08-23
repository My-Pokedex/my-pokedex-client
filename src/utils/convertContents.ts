import { Lang } from '@/types/common';

export const convertContents = (
  contents: { contents: string }[],
  lang: Lang,
) => {
  const [koContents, enContents] = contents;

  return lang === 'ko'
    ? koContents.contents.replaceAll('\n', ' ')
    : enContents.contents.replaceAll('\n', ' ');
};
