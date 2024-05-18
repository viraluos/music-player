import Box from "@/components/Box";
import Player from "@/components/Player";

interface SidebarProps {
    children?: React.ReactNode;
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({}) => {
    return (
      <div className="min-w-[400px] w-full md:w-fit">
        <Box className="mb-4">
          <Player />
        </Box>
      </div>
    );
}

export default Sidebar;