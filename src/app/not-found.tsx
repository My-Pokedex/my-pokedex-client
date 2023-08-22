import { twMerge } from 'tailwind-merge';
import { Pokedex, Logo } from '@/components';

export default function NotFound() {
  return (
    <div className={twMerge('container-page', 'justify-center pb-14')}>
      <Pokedex className="w-[42.5rem] min-h-[29.875rem] mb-[5rem] font-bold text-white-10 bounce">
        <h2 className="absolute top-[9.3125rem] left-[3.3125rem] pt-[1.375rem] w-[13.25rem] h-[10.25rem] bg-[url('/assets/img/warning.svg')] bg-no-repeat bg-[center_bottom_18px] text-xl text-center">
          Not Found
        </h2>
        <p className="absolute top-[10.25rem] right-[3.375rem] w-[14.625rem] h-[3.3125rem] text-base text-center leading-[3.3125rem]">
          페이지를 못 찾았어요 : (
        </p>
        <Logo
          location="pokedex"
          className="absolute right-[5.5rem] bottom-[3.75rem]"
        />
      </Pokedex>
    </div>
  );
}
