// import { useParams } from "next/navigation";

export default function BlogDetail({params}) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div>
        <h1>{params.id}</h1>
      </div>
      <div className="flex my-10 mx-3 py-3 px-3 rounded-md bg-green-400">hamariweb</div>
  
      </main>
    )
  }