import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";

export default function Home() {
  return (
    <div className="flex-col md:flex-row w-full h-full flex p-2">
      
      < Sidebar />

      < Content />

    </div>
  );
}
