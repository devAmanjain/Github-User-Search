"use client"

import Image from 'next/image'
import { Search } from '@/components'
export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
     <Search />
    </main>
  )
}
