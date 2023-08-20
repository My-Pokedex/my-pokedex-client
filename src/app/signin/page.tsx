import { Pokedex, AuthButton, Logo } from '@/components';

export default function Signin() {
  return (
    <Pokedex className="relative mb-[5rem]">
      <p className="absolute top-[10.9375rem] right-[6.375rem] text-lg font-bold text-white-10">
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
        className="absolute right-[5.0625rem] bottom-[3.5625rem]"
      />
    </Pokedex>
  );
}
