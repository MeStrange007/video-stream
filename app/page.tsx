
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import File from './Components/File'

import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div>Hello World</div> */}
      {/* <File/> */}
      <Link href="/broadcaster">Brodacaster</Link>
      <Link href="/receiver">Receiver</Link>
    </main>
  )
}
