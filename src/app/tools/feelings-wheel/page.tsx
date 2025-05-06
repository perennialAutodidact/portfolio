'use client';
import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic';

const FeelingsWheel = dynamic(
    async () => await import('./FeelingsWheel'),
    { ssr: false }
)

export default function Page() {

    return (
        <div>
            <FeelingsWheel />
        </div>
    )
}
