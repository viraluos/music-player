"use client"

import { twMerge } from "tailwind-merge";
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, useEffect, useState  } from "react";
import Link from "next/link";
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
            const { data: songs } = await supabase.from('songs').select('id, title, song_path, image_path')
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

    return songs.map((song: { id: Key | null; title: string; song_path: string; image_path: string;  }) => (
        <p key={song.id}>
            <div className={twMerge( `w-full h-[50px]  text-white p-4`, className )}>
                <div>
                    <Image
                        src={process.env.NEXT_PUBLIC_SUPABASE_URL + song.image_path + ".png"}
                        width={50}
                        height={50}
                        alt={song.title}
                    />
                    <div>
                        {song.title}
                    </div>
                </div>
            </div>
        </p>
    ));

    {
        // href={process.env.NEXT_PUBLIC_SUPABASE_URL + song.song_path}
    }
};

export const revalidate = 12;

export default Elements;