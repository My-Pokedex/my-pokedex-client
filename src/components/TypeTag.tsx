import { DefaultProps, PokemonType } from '@/types/common';
import { TYPE_TAG_BG } from '@/constants/styles';
import { TYPE_TAG_CONTENTS } from '@/constants/contents';

type TagUsage = 'button' | 'info';

interface TypeTagProps extends DefaultProps {
  usage: TagUsage;
  type: PokemonType;
}

export default function TypeTag({ usage, type }: TypeTagProps) {
  return (
    <>
      {usage === 'button' && (
        <button
          type="button"
          className={`py-1 pl-[2.125rem] pr-[.625rem] rounded text-white-10 shadow-outer/down bg-[length:24px_24px] bg-[center_left_6px] bg-no-repeat ${TYPE_TAG_BG[type]}`}>
          {TYPE_TAG_CONTENTS[type]}
        </button>
      )}
      {usage === 'info' && (
        <p
          className={`py-[.1875rem] pl-[1.5625rem] pr-[.4375rem] rounded text-[.75rem] text-white-10 shadow-outer/down bg-[length:18px_18px] bg-[center_left_4px] bg-no-repeat ${TYPE_TAG_BG[type]}`}>
          {TYPE_TAG_CONTENTS[type]}
        </p>
      )}
    </>
  );
}
