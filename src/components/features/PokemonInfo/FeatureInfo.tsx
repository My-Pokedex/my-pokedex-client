import { DefaultProps } from '@/types/common';

interface FeatureInfoProps extends DefaultProps {
  feature: string | null;
  description: string | null;
}

export default function FeatureInfo({
  feature,
  description,
}: FeatureInfoProps) {
  return (
    <>
      {feature && (
        <section className="container-info gap-3">
          <h3 className="sr-only">특징</h3>
          <p className="info-title">{feature}</p>
          <p className="leading-5 info-desc">{description}</p>
        </section>
      )}
    </>
  );
}
