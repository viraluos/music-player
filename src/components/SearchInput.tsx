"use client";

import qs from "query-string";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import useDebounce from "@/hooks/useDebounce";

import Input from "./Input";
import { 
  redColorScheme, 
  greenColorScheme, 
  yellowColorScheme, 
  blueColorScheme  
} from '@/components/Global';

interface SearchInputProps {
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  className
}) => {
  const router = useRouter();
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: '/',
      query
    });

    router.push(url);
  }, [debouncedValue, router]);

  return ( 
    <Input 
      placeholder="CHE VUOI SENT&#205;?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`bg-${blueColorScheme}`}
    />
  );
}
 
export default SearchInput;