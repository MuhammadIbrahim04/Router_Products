'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {

  const router = useRouter()
  const handleuserouter = () => {
    router.push('/about')
  }

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">

      <div>
        <h1 className="flex my-10 mx-3 py-3 px-3 rounded-md bg-red-400 cursor-pointer">HOME PAGE</h1>
      </div>

      <div className="flex">

        <div className="flex my-10 mx-3 py-3 px-3 rounded-md bg-green-400 cursor-pointer" onClick={handleuserouter}>ABOUT</div>
        <div className="flex my-10 mx-3 py-3 px-3 rounded-md bg-green-400 cursor-pointer"> <Link href={'/contact'}>CONTACT</Link></div>
        <div className="flex my-10 mx-3 py-3 px-3 rounded-md bg-green-400 cursor-pointer" onClick={() => { router.push('/blog') }}>BLOG</div>


      </div>


    </main>
  )
}
