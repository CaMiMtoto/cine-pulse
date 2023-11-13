import {AnchorHTMLAttributes, ReactNode} from "react";
import Link from "next/link";

export default function NavLink({href, children}: { href: string, children: ReactNode }) {
    return (
        <Link href={href} className="font-normal py-2 tracking-wide leading-loose text-white hover:text-primary hover:border-b-4 hover:border-primary">
            {children}
        </Link>
    )
}