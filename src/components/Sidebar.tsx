import Box from "@/components/Box";
import Player from "@/components/Player";
import Playlists from "@/components/Playlists";

interface SidebarProps {
    children?: React.ReactNode;
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({}) => {
    return (
      <div className="min-w-[400px] w-full lg:w-fit">
        
        <Box className="mb-2">
          <Player />
        </Box>

        <Box className="mb-2">
          <Playlists />
        </Box>

      </div>
    );
}

export default Sidebar;