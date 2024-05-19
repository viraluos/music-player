import Box from "./Box";
import PlaylistHeader from "./Content/PlaylistHeader";

export default function Content() {
    return (
      <div className="w-full">

        <Box className="p-2">
          
          < PlaylistHeader />

          <div>
            single playlist
          </div>

        </Box>

      </div>
    );
}