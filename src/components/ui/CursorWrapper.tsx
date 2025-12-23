'use client';

import dynamic from 'next/dynamic';

const Cursor = dynamic(() => import('./Cursor'), {
  ssr: false,
});

type Props = {
  className?: string;
};

const CursorWrapper = ({ className = '' }: Props) => {
  return <Cursor className={className} />;
};

export default CursorWrapper;
