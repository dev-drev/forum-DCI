import React from "react";

const About = () => {
  return (
    <div>
      <div className=" min-h-screen p-10">
        <div className="grid md:grid-cols-3  gap-x-20 gap-y-6">
          <div className=" md:col-span-2">
            <h2 className="text-2xl font-bold">what is AVAZ?</h2>
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

          <div className="bg-white md:col-span-1 md:row-span-2">
            <h2 className="text-2xl font-bold">features</h2>
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

          <div className="bg-white md:col-span-1 md:col-start-3  md:row-start-3 ">
            <div className="flex flex-row justify-center">
              <img
                className="m-5 w-20 h-16"
                src="/assets/icons/javaScript.png"
                alt="logo-javaScript"
              />
              <img
                className="m-5 w-20 h-16"
                src="/assets/icons/html5.png"
                alt="logo-html5"
              />
              <img
                className="m-5 w-20 h-16"
                src="/assets/icons/node.png"
                alt="logo-node"
              />
              <img
                className="m-5 w-16 h-16"
                src="/assets/icons/react.png"
                alt="logo-react"
              />
              <img
                className="m-5 w-20 h-16"
                src="/assets/icons/css.png"
                alt="logo-css"
              />
            </div>
          </div>

          <div className="bg-white md:col-span-2 md:row-start-4">
            <h2 className="text-2xl font-bold">our team</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              excepturi, similique dolorem dignissimos ea non eius iure, vitae
              iusto ad facere amet soluta accusantium illum eum, deleniti hic
              deserunt quos.
            </p>
          </div>

          <div className="bg-white md:col-span-2 md:row-start-5">
            <div className="flex flex-col md:flex-row justify-around">
              <img
                className="w-40 h-46 "
                src="/assets/images/alcione.jpeg"
                alt="profile Alcione"
              />
              <img
                className="w-40 h-46"
                src="/assets/images/andrea.jpeg"
                alt="profile Andrea"
              />
              <img
                className="w-40 h-46"
                src="/assets/images/zhino.jpeg"
                alt="profile Zhino"
              />
              <img
                className="w-40 h-46"
                src="/assets/images/viviana.jpeg"
                alt="profile Viviana"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
