import { myBloogDetail } from "../../../public/lib/blog";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1>BLOG</h1>
      {
        myBloogDetail.map((data) => {
          return (
            <Link href={`/blog/${data.slug}`}>
              <div className="p-5 w-full m-4 bg-blue-500 rounded-md">
                <h1 className="font-bold">{data.title}</h1>
                <p>{data.desc}</p>
                <p>{data.createdAt.getDate()} / {data.createdAt.getMonth()+1} / {data.createdAt.getYear()}</p>

                
                
              </div>


            </Link>
          )
        })
      }

      <div className="flex my-10 mx-3 py-3 px-3 rounded-md bg-green-400">hamariweb</div>




    </main>
  )
}
