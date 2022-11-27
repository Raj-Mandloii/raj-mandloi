import React from 'react'

export const GitStates = () => {
    return (
        <main id="technologies" className="container mx-auto max-width pb-20">

            <section className="items-center">

                {/* <h4 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                    GitHub States
                </h4> */}
                <div className='flex justify-center'>

                    <img className='place-content-center'
                        src="https://github-readme-stats.vercel.app/api?username=raj-mandloii&show_icons=true&&countprivate=true&theme=react&hide_title=true"
                        alt="GitHub stats"
                    />
                </div>


            </section>

        </main>
    )
}
