import PlaylistHeader from "./Content/PlaylistHeader";
import Playlist from "./Content/Playlist";
import PlaylistFooter from "./Content/PlaylistFooter";

import { 
  redColorScheme, 
  greenColorScheme, 
  yellowColorScheme, 
  blueColorScheme  
} from '@/components/Global';

const grandient_color = `from-${blueColorScheme}`;

export default function Content() {
    return (
      <div className="w-full flex flex-col justify-between bg-neutral-800">

          < PlaylistHeader className={grandient_color} />

          < Playlist />

          < PlaylistFooter className={grandient_color} />

      </div>
    );
}