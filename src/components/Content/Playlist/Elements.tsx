import { twMerge } from "tailwind-merge";

interface ElementsProps {
    children?: React.ReactNode;
    className?: string;
}

const Elements: React.FC<ElementsProps> = ({
    children,
    className
}) => {
    return (        
        <div className={twMerge( `w-full h-[50px] bg-neutral-50 text-black`, className )}>
            
            Element
            
        </div>
    );
};

export default Elements;