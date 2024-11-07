'use client';
import Link from 'next/link';
import React from 'react';

export default function Settings() {
  return <div className='text-slate-500 flex-col items-left gap-2 flex'>
    This route is not defined yet, go to
    <Link href='/dashboard/settings/general-information'>
      <code>/dashboard/settings/general-information</code>
    </Link>
    <Link href='/dashboard/settings/payment-methods'>
      <code>/dashboard/settings/payment-methods</code>
    </Link>
    <Link href='/dashboard/settings/profile'>
      <code>/dashboard/settings/profile</code>
    </Link>
  </div>
}