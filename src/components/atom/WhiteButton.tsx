import type { ButtonProps } from "@base-ui/react/button";
import { Button } from "../ui/button";
import { cn } from "#/lib/utils";

interface WhiteButtonProps extends ButtonProps {
    className?: string
}

export default function WhiteButton({ children, className, ...props }: WhiteButtonProps) {
    return (
        <Button className={cn("p-4 rounded-full bg-white text-black hover:bg-gray-400 cursor-pointer shadow", className)} {...props}>
            {children}
        </Button>
    )
}
