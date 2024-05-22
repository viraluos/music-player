"use client";

import { useEffect, useState, useRef } from "react";

import Box from "@/components/Box";
import Player from "@/components/Player";
import Playlists from "@/components/Playlists";
import useLocalStorage from "@/hooks/useLocalStorage";

interface SidebarProps {
    children?: React.ReactNode;
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({}) => {
    const [minWidth, maxWidth, defaultWidth] = [200, 1600, 400];
    const [value, setValue] = useLocalStorage("sidebarWidth", "");

    const [width, setWidth] = useState( value );
    const isResized = useRef(false);

    useEffect(() => {
      window.addEventListener("mousemove", (e) => {
        if (!isResized.current) {
          return;
        }

        setWidth((previousWidth: number) => {
          const newWidth = previousWidth + e.movementX;
          const isWidthInRange = newWidth >= minWidth && newWidth <= maxWidth;
          return isWidthInRange ? newWidth : previousWidth;
        });
      });

      window.addEventListener("mouseup", () => {
        isResized.current = false;
      });

      console.log("Storage Value: ", value)
      setWidth(value);
    }, []);

    useEffect(() => {
      setValue(width);
    }, [width]);

    if (!width)
      return(
        <></>
      )

    {
      // component con tutto questo e gli passo la width
    }

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