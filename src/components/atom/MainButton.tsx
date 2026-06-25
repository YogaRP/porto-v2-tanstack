import type { ButtonProps } from "@base-ui/react/button";
import { Button } from "../ui/button";
import { cn } from "#/lib/utils";

interface MainButtonProps extends ButtonProps {
    className?: string
}

export default function MainButton({ children, className, ...props }: MainButtonProps) {
    return (
        <Button className={cn("p-4 rounded-full text-white bg-green-500 hover:bg-green-600 cursor-pointer", className)} {...props}>
            {children}
        </Button>
    )
}
