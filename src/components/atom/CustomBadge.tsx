import { cn } from '#/lib/utils';
import { Badge } from '../ui/badge'

type CustomBadgeProps = {
    type: "light-green" | "light-green-black" | "green" | "gray" | "white"
    children: string,
    classname?: string
}

const badgeStyles: Record<string, string> = {
    "light-green": "bg-[#DDF7E7] text-[#33D373]",
    "light-green-black": "bg-[#DDF7E7] text-black",
    "green": "bg-[#00C950] text-white",
    "gray": "bg-[#F4F4F5] text-[#212123]"
};

export default function CustomBadge({ type, children, classname }: CustomBadgeProps) {
    return <Badge className={cn(badgeStyles[type], classname)}>{children}</Badge>
}
