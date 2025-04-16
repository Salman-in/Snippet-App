import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-bold text-3xl">Snippets</h1>
      <Link href={"/snippet/new"}><Button className="cursor-pointer p-6">Add New</Button></Link>
      
    </div>
  );
}
