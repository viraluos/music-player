import PlaylistHeader from "./Content/PlaylistHeader";
import Playlist from "./Content/Playlist";
import PlaylistFooter from "./Content/PlaylistFooter";

const grandient_color = "from-yellow-700";

export default function Content() {
    return (
      <div className="w-full flex flex-col justify-between bg-neutral-800">
          
          < PlaylistHeader className={grandient_color} />

          < Playlist />

          < PlaylistFooter className={grandient_color} />

      </div>
    );
}