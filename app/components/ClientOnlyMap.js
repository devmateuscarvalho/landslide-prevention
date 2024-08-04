"use client";
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./Map'), { ssr: false });

const ClientOnlyMap = () => {
  return <DynamicMap />;
};

export default ClientOnlyMap;