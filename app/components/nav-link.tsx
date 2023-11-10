import {AnchorHTMLAttributes, ReactNode} from "react";
import Link from "next/link";

export default function NavLink({href, children}: { href: string, children: ReactNode }) {
    return (
        <Link href={href} className="font-normal tracking-wide leading-loose">
            {children}
        </Link>
    )
}