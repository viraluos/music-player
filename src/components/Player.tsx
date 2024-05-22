import SongInfo from "@/components/Player/SongInfo";

const Player = () => {
    return (
        <div className="p-2">
            <SongInfo />
            <div>volume</div>
            <div>controls</div>
        </div>
    );
    {
        /*
            - image
            - song info
            - progress bar
            - volume bar
            - controls
        
        <Image
          src={current_image}
          width={350}
          height={350}
          alt="Main image"
        />
        
        <div>
            < SongInfo />
        </div>

        <div>
            < Volume />
        </div>

        <div>
            < Controls />
        </div>

        */
       
    }
};

export default Player;