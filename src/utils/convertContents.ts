import { Lang } from '@/types/common';

export const convertContents = (
  contents: { contents: string }[],
  lang: Lang,
) => {
  const [krContents, enContents] = contents;

  return lang === 'kr'
    ? krContents.contents.replaceAll('\n', ' ')
    : enContents.contents.replaceAll('\n', ' ');
};
