"use client";

import { useEffect, useState, useRef } from "react";

import Box from "@/components/Box";
import Player from "@/components/Player";
import Playlists from "@/components/Playlists";

interface SidebarProps {
    children?: React.ReactNode;
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({}) => {
    const [minWidth, maxWidth, defaultWidth] = [200, 1600, 400];
    const sidebarwidth = parseInt(localStorage.getItem("sidebarWidth") || defaultWidth.toString())

    const [width, setWidth] = useState( sidebarwidth  );
    const isResized = useRef(false);

    useEffect(() => {
      window.addEventListener("mousemove", (e) => {
        if (!isResized.current) {
          return;
        }

        setWidth((previousWidth) => {
          const newWidth = previousWidth + e.movementX;
          const isWidthInRange = newWidth >= minWidth && newWidth <= maxWidth;
          return isWidthInRange ? newWidth : previousWidth;
        });
      });

      window.addEventListener("mouseup", () => {
        isResized.current = false;
      });
    }, []);

    useEffect(() => {
      localStorage.setItem("sidebarWidth", width.toString());
    }, [width]);

    return (
      <div style={{ width: `${width}px` }} className="w-full md:flex resize-x lg:w-fit">

      <div className="flex flex-col w-full">

        <Box className="mb-2">
          
          <Player />

        </Box>

        <Box className="mb-2">

          <Playlists />

        </Box>
        
      </div>

        <div 
          className="w-2 h-full cursor-col-resize"
          onMouseDown={() => {
            isResized.current = true;
          }}
        />

      </div>
    );
}

export default Sidebar;