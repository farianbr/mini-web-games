'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
    const router = useRouter()
    return (
        <div>
            This is Tic Tac Toe
            <button onClick={() => router.push('/tic-tac-toe/single-player')}>Single Player</button>
            <button onClick={() => router.push('/tic-tac-toe/multi-player')}>MultiPlayer</button>
            
        </div>
    );
};

export default page;