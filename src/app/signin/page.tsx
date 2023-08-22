import { Pokedex, AuthButton, Logo } from '@/components';

export default function Signin() {
  return (
    <Pokedex className="w-[42.5rem] min-h-[29.875rem] mb-[5rem]">
      <p className="absolute top-[11.25rem] right-[6.375rem] text-lg font-bold text-white-10">
        환영합니다 : )
      </p>
      <ul className="absolute top-[10.125rem] left-[4.8125rem] flex flex-col space-y-[.375rem] w-min">
        <li>
          <AuthButton type="kakao" />
        </li>
        <li>
          <AuthButton type="naver" />
        </li>
        <li>
          <AuthButton type="google" />
        </li>
      </ul>
      <Logo
        location="pokedex"
        className="absolute right-[5.5rem] bottom-[3.5625rem]"
      />
    </Pokedex>
  );
}
