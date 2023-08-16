import Pokedex from '@components/Pokedex';
import AuthButton from '@components/AuthButton';

export default function Signin() {
  return (
    <Pokedex className="mb-[5rem]">
      <AuthButton type="kakao" />
      <AuthButton type="naver" />
      <AuthButton type="google" />
    </Pokedex>
  );
}
