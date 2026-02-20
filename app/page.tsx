"use client"

import { useSidebar } from "@/components/ui/sidebar"


export default function Home() {
  const { toggleSidebar } = useSidebar()

  return (
    <main className="w-full p-8 my-3 mr-3 border border-[#F0F2EF] rounded-xl bg-white">
      <div>
        <h1 className="text-2xl">Hello</h1>
        {/* <button onClick={toggleSidebar}>Toggle Sidebar</button> */}
      </div>
    </main>
  );
}
