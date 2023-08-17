import TypeTag from '@components/TypeTag';
import CommonButton from '@components/CommonButton';

export default function SearchResult() {
  return (
    <>
      <TypeTag usage="button" type="fighting" />
      <TypeTag usage="button" type="dragon" />
      <TypeTag usage="info" type="psychic" />
      <TypeTag usage="info" type="dark" />
      <CommonButton type="viewAll" />
      <CommonButton type="viewCompatibility" />
      <CommonButton type="move" />
    </>
  );
}
