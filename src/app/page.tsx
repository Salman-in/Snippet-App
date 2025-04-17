import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  // Resets the table ids to 0 when the db is empty (Use only  when needed) 
  // await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'Snippet'`;
  // await prisma.$executeRaw`UPDATE sqlite_sequence SET seq = 0 WHERE name = 'Snippet'`;
  // console.log("Resetting the database...");

  // await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay (To display loading state)
  
  const allSnippets = await prisma.snippet.findMany();
  console.log(allSnippets);


  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">Snippets</h1>
        <Link href={"/snippet/new"}><Button className="cursor-pointer p-6">Add New</Button></Link>
      </div>
      <div className="mt-8">
        {
          allSnippets.map((snippet) => (
            <div key={snippet.id} className=" flex justify-between border p-4 my-4 rounded-lg bg-gray-200">
              <h1 className="font-bold text-xl">{snippet.title}</h1>
              <Link href={`/snippet/${snippet.id}`}>
                <Button variant={'link'} className="cursor-pointer">View</Button>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
