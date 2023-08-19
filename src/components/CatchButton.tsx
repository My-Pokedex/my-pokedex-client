import { DefaultProps } from '@/types/common';

interface CatchButtonProps extends DefaultProps {
  isCatched: boolean;
}

export default function CatchButton({ isCatched, ...props }: CatchButtonProps) {
  return (
    <button
      type="button"
      title={`${isCatched ? '놓아주기' : '잡기'}`}
      className={`absolute bg-no-repeat ${
        isCatched
          ? `${CATCH_BUTTON_SIZE.release} ${CATCH_BUTTON_BG.release}`
          : `${CATCH_BUTTON_SIZE.catch} ${CATCH_BUTTON_BG.catch}`
      }`}
    />
  );
}

const CATCH_BUTTON_SIZE = {
  catch: 'w-8 h-8',
  release: 'w-8 h-[2.625rem]',
} as const;

const CATCH_BUTTON_BG = {
  catch: `bg-[url('/assets/img/catch.svg')]`,
  release: `bg-[url('/assets/img/release.svg')]`,
} as const;
