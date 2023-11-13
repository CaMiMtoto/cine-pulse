import Image from 'next/image'
import TopNav from "@/app/components/top-nav";
import {HomeHero} from "@/app/components/home-hero";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <HomeHero/>
        </main>
    )
}
