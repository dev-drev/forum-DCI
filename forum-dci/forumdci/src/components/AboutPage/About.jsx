import React from "react";

const About = () => {
    return (
        <div className="bg-white">
            <div className=" min-h-screen p-10">
                <div className="grid md:grid-cols-3 gap-y-6 justify-center items-center">
                    <div className=" md:col-span-3 md:row-start-1 lg:col-span-2">
                        <h2 className="text-2xl font-bold">What is AVAZ?</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatibus obcaecati dolorum accusamus, similique eum
                            consectetur. Repellat, vero laboriosam voluptas at perspiciatis
                            earum dolore soluta vitae! Tempora dignissimos ipsam facere neque
                            in? Porro impedit beatae dicta vitae laboriosam debitis. Excepturi
                            enim eos quisquam, voluptatibus at, temporibus vero, nulla fugit
                            quas dicta reprehenderit magnam totam doloribus atque. Enim eaque
                            inventore quisquam sit. Animi quis nobis impedit dignissimos ipsam
                            consequuntur velit alias deleniti suscipit pariatur dolores,
                            molestiae maxime exercitationem eius placeat voluptas quibusdam
                            iste error praesentium, enim quo vel dolor saepe. Recusandae
                            corrupti ipsam iure ad amet debitis molestiae molestias aliquam,
                            vitae nemo.
                        </p>
                    </div>

                    <div className=" md:col-span-3 lg:col-span-1">
                        <h2 className="text-2xl font-bold">Features</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                            voluptate repellendus minima repellat quis, aliquid at nam magnam
                            minus hic, ex et nihil consequuntur obcaecati soluta eius
                            corporis? Dolore doloremque, cupiditate at sunt dolores ad facilis
                            error possimus, nemo provident rem accusantium tempora eius
                            quisquam beatae, hic neque aut a assumenda! Molestias quo quaerat
                            nobis doloremque aspernatur, modi libero pariatur harum itaque
                            repellat exercitationem labore debitis ea ipsam corrupti vitae!
                            Quas provident vitae sed iusto, eligendi optio incidunt. Ut,
                            sequi?
                        </p>
                    </div>

                    <div className="bg-white md:col-span-3 md:col-start-1 lg:col-span-1 lg:col-start-3">
                        <div className="flex flex-row flex-wrap justify-center">
                            <img
                                className="m-5 w-16 h-12"
                                src="/assets/icons/javaScript.png"
                                alt="logo-javaScript"
                            />
                            <img
                                className="m-5 w-16 h-12"
                                src="/assets/icons/html5.png"
                                alt="logo-html5"
                            />
                            <img
                                className="m-5 w-16 h-12"
                                src="/assets/icons/node.png"
                                alt="logo-node"
                            />
                            <img
                                className="m-5 w-16 h-12"
                                src="/assets/icons/react.png"
                                alt="logo-react"
                            />
                            <img
                                className="m-5 w-16 h-12"
                                src="/assets/icons/css.png"
                                alt="logo-css"
                            />
                            <img
                                className="m-5 w-16 h-12"
                                src="/assets/icons/bootstrap.png"
                                alt="logo-bootstrap"
                            />
                            <img
                                className="m-5 w-16 h-12"
                                src="/assets/icons/mongoDB.png"
                                alt="logo-mongoDB"
                            />
                            <img
                                className="m-5 w-16 h-12"
                                src="/assets/icons/tailwindcss.png"
                                alt="logo-tailwindcss"
                            />
                            <img
                                className="m-5 w-10 h-8"
                                src="/assets/icons/expressjs.png"
                                alt="logo-expressjs"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col w-90 md:col-span-3 md:row-start-4 lg:col-span-2 lg:row-start-3">
                        <div className="bg-white">
                            <h2 className="text-2xl font-bold">Our Team</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                                excepturi, similique dolorem dignissimos ea non eius iure, vitae
                                iusto ad facere amet soluta accusantium illum eum, deleniti hic
                                deserunt quos.
                            </p>
                        </div>

                        <div className="flex flex-wrap grow sm:col-span-2 sm:row-start-5 justify-center gap-4 w-fit mt-5">
                            <div className="flex flex-wrap flex-col gap-2">
                                <img
                                    className="w-40 h-46 "
                                    src="/assets/images/alcione.jpeg"
                                    alt="profile Alcione"
                                />
                                <h2 className="w-40 text-center font-bold">ALCIONE</h2>
                            </div>

                            <div className="flex flex-col flex-wrap gap-5">
                                <img
                                    className="w-40 h-46"
                                    src="/assets/images/andrea.jpeg"
                                    alt="profile Andrea"
                                />
                                <h2 className="w-40 text-center font-bold">ANDREA </h2>
                            </div>

                            <div className="flex flex-col flex-wrap gap-5">
                                <img
                                    className="w-40 h-46"
                                    src="/assets/images/zhino.jpeg"
                                    alt="profile Zhino"
                                />
                                <h2 className="w-40 text-center font-bold">ZHINO</h2>
                            </div>

                            <div className="flex flex-col flex-wrap gap-5">
                                <img
                                    className="w-40 h-46"
                                    src="/assets/images/viviana.jpeg"
                                    alt="profile Viviana"
                                />
                                <h2 className="w-40 text-center font-bold">VIVIANA </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;