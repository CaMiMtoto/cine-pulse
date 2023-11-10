import TopNav from "@/app/components/top-nav";
import {quando} from "@/app/ui/fonts";

export function HomeHero() {
    return (
        <section className="bg-cover h-screen bg-no-repeat justify-center  w-full"
                 style={{
                     backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(14, 82, 98, 0.8)), url("/posters/mission.jpg")',
                     backgroundPosition: 'top',
                 }}
        >
            <TopNav/>
            <div className="container mt-32 px-8 md:px-24 w-full  2xl:w-1/2">
                <div className="flex flex-col gap-3">
                    <h1 className={`text-7xl font-bold ${quando.className}`}>
                        Mission: Impossible - Dead Reckoning Part One
                    </h1>
                    <div className="flex gap-3 text-xl font-semibold my-2">
                        <span>16+</span>
                        <span>1 Season</span>
                        <span>2020</span>
                    </div>
                    {/*Genres*/}
                    <div className="flex gap-3 text-lg font-semibold my-2">
                        <span>Crime</span>
                        {/*separator*/}
                        <span className="text-primary-dark">•</span>
                        <span>Thriller</span>
                        {/*separator*/}
                        <span className="text-primary-dark">•</span>
                        <span>Mystery</span>
                    </div>
                    <div className="flex gap-3 my-6">
                        <button
                            className="inline-flex gap-2 justify-center text-sm xl:text-lg items-center bg-primary px-8 lg:px-10 py-4 font-semibold  tracking-wider hover:bg-primary-light">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="icon icon-tabler icon-tabler-player-play-filled" width="24" height="24"
                                 viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                                    strokeWidth="0" fill="currentColor"></path>
                            </svg>
                            Play
                        </button>
                        <button
                            className="inline-flex gap-2  justify-center text-sm xl:text-lg items-center bg-primary-dark hover:bg-primary-light hover:text-white px-8 lg:px-10 py-4 font-semibold  tracking-wider">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus"
                                 width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                 fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 5l0 14"></path>
                                <path d="M5 12l14 0"></path>
                            </svg>
                            My List
                        </button>
                    </div>
                    <p className="text-gray-100 tracking-wide leading-loose">
                        Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent
                        world
                        where people often prove more wicked than beasts.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ad aliquid amet aperiam distinctio
                        ex
                        expedita fugit illo maxime nostrum odit placeat quam quos repellendus tempora? Esse expedita
                        praesentium suscipit?

                    </p>
                </div>
            </div>
        </section>
    );
}