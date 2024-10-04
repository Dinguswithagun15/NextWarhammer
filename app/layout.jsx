'use client'
import React from "react";
import {useRouter} from 'next/navigation';
import './globals.css'
const Layout = ({children}) => {
  const router = useRouter();
  return (
    <html>
      <body>
        <div className="bg-gray font-main flex flex-row space-x-3 text-xl">
          <button className="text-white" type="button" onClick={() => router.push('/')}>
            Warhammer Datasheets
          </button>
          <button className="text-white underline" type="button" onClick={() => router.push('/datasheets')}>
            Datasheets
          </button>
          <button className="text-white underline" type="button" onClick={() => router.push('/listbuilder')}>
            List Builder
          </button>
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
export default Layout;