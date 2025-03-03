"use client";

import Link from 'next/link';
import React from 'react';
import AgentPulse from './AgentPulse';

function Header() {
  return (
    <header className="sticky top-0 z-50 left-0 right-0">
      <div>
        {/* Left */}
        <div>
          <Link href="/"className='flex items-center gap-4'>
            <AgentPulse size="small" color='blue'/>
            <h1>AgentTube</h1>
          </Link>
        </div>
        {/* RIGHT */}
        <div></div>
      </div>
    </header>
  );
}

export default Header;
