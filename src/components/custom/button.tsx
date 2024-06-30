import React from 'react'
import Link from 'next/link'
const button = () => {
  return (
    <div className="flex justify-center pb-10 bg-black">
      <Link href="/chimp" legacyBehavior>
        <a className="bg-lightred hover:bg-red-700 text-white font-semibold py-3 px-6 rounded shadow-md transition-transform transform hover:scale-105">
          View our Campaigns
        </a>
      </Link>
    </div>
  )
}

export default button