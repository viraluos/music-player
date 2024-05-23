"use client"

import { twMerge } from "tailwind-merge";
import { Key, useEffect, useState  } from "react";
// import Link from "next/link";
import Image from "next/image";

import supabase from "@/utils/supabase";

interface ElementsProps {
    children?: React.ReactNode;
    className?: string;
}

const Elements: React.FC<ElementsProps> = ({
    children,
    className
}) => {
    const [songs, setSongs] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data: songs } = await supabase.from('songs').select('id, title, author, song_path, image_path, webp_path').order("id");
            setSongs(songs);
        }
        fetchData();

        const intervalId = setInterval(() => {
            fetchData();
        }, 1000 * 60 * 60 * revalidate);

        return () => clearInterval(intervalId);
    }, []);

    if(!songs)
        return <p>No songs found.</p>

    return songs.map((song: { id: Key | null; title: string; author: string; song_path: string; image_path: string; webp_path: string; }) => (
        <div key={song.id}>
            <div className={twMerge( `hover:bg-neutral-700 transition cursor-pointer w-full h-[60px] text-white p-2 `, className )}>
                <div className="flex select-none">
                    <Image
                        src={ process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL + song.webp_path }
                        width={50}
                        height={50}
                        alt={song.title}
                        className="w-[40px] h-[40px] object-cover rounded-lg"
                    />
                    <div className="grid justify-start items-center px-2">
                        <div>  {song.title}   </div>
                        <div className="text-gray-400">  {song.author}  </div>
                    </div>
                </div>
            </div>
        </div>
    ));

    {
        // href={process.env.NEXT_PUBLIC_SUPABASE_URL + song.song_path}
    }
};

export const revalidate = 12;

export default Elements;