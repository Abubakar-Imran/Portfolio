'use client';

import dynamic from 'next/dynamic';

const ShowLottieComponent = dynamic(
  () => import('./ShowLottie'),
  {
    ssr: false,
  }
);

type Props = {
  path: any;
  className?: string;
};

const ShowLottieWrapper = ({ path, className = '' }: Props) => {
  return <ShowLottieComponent path={path} className={className} />;
};

export default ShowLottieWrapper;
