'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <p style={{ color: 'white', textAlign: 'center', padding: '2rem' }}>Loading map...</p>,
});

export const MapWrapper = () => {
  return <DynamicMap />;
};
