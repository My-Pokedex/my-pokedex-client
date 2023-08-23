import { twMerge } from 'tailwind-merge';
import { DefaultProps } from '@/types/common';

type ButtonSize = 'small' | 'large';

interface CatchButtonProps extends DefaultProps {
  size: ButtonSize;
  isCatched: boolean;
}

export default function CatchButton({
  size,
  isCatched,
  className,
}: CatchButtonProps) {
  return (
    <button
      type="button"
      title={`${isCatched ? '놓아주기' : '잡기'}`}
      className={twMerge(
        `absolute bg-no-repeat ${
          isCatched
            ? `${CATCH_BUTTON_SIZE[size].release} ${CATCH_BUTTON_BG[size].release}`
            : `${CATCH_BUTTON_SIZE[size].catch} ${CATCH_BUTTON_BG[size].catch}`
        }`,
        className,
      )}
    />
  );
}

const CATCH_BUTTON_SIZE = {
  small: {
    catch: 'w-8 h-8',
    release: 'w-8 h-[2.625rem]',
  },
  large: {
    catch: 'w-12 h-12',
    release: 'w-12 h-16',
  },
} as const;

const CATCH_BUTTON_BG = {
  small: {
    catch: `bg-[url('/assets/img/catch.svg')]`,
    release: `bg-[url('/assets/img/release.svg')]`,
  },
  large: {
    catch: `bg-[url('/assets/img/catch.svg')] bg-cover`,
    release: `bg-[url('/assets/img/release.svg')] bg-cover`,
  },
} as const;
