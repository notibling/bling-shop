'use client';
import Link from 'next/link';
import React from 'react';

export default function Settings() {
  return <div>
    This route is not defined yet, go to
    <Link href="/dashboard/settings/checkout">
      <code>/dashboard/settings/checkout</code>
    </Link>
    <Link href="/dashboard/settings/general-information">
      <code>/dashboard/settings/general-information</code>
    </Link>
    <Link href="/dashboard/settings/initial-steps">
      <code>/dashboard/settings/initial-steps</code>
    </Link>
    <Link href="/dashboard/settings/payment-methods">
      <code>/dashboard/settings/payment-methods</code>
    </Link>
    <Link href="/dashboard/settings/profile">
      <code>/dashboard/settings/profile</code>
    </Link>
    <Link href="/dashboard/settings/shop">
      <code>/dashboard/settings/shop</code>
    </Link>
  </div>;
}