import { DefaultProps } from '@/types/common';
import { convertHW } from '@/utils/convertHW';

interface HWInfoProps extends DefaultProps {
  height: number;
  weight: number;
}

export default function HWInfo({ height, weight }: HWInfoProps) {
  return (
    <div className="flex justify-center gap-[3.75rem]">
      <section className="container-info gap-3">
        <h3 className="info-title">키</h3>
        <p className="info-desc">{convertHW(height, 'height')}</p>
      </section>
      <section className="container-info gap-3">
        <h3 className="info-title">몸무게</h3>
        <p className="info-desc">{convertHW(weight, 'weight')}</p>
      </section>
    </div>
  );
}
