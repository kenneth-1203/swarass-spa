import Image from "next/image";
import Button from "@/components/button";
import TextReveal from "@/components/text-reveal";

const Home = ({
  selectTab,
}: {
  selectTab: (text: string) => void;
}) => {
  return (
    <section id={"Home"} className="relative flex h-dvh p-8">
      <Image
        src={"/images/bg.png"}
        alt="Background image"
        quality={100}
        className="-z-1 object-cover"
        sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
        loading="eager"
        fill
        priority
      />
      {/* <video className="object-cover" loop autoPlay muted playsInline>
            <source src="/bg-video.mp4" type="video/mp4" />
          </video> */}
      <div className="h-full w-full flex flex-col xl:px-20">
        <div className="relative flex mt-16">
          <div className="absolute right-0 top-0 bg-primary h-20 w-20 lg:h-30 lg:w-30 xl:w-32 xl:h-32 triangle-tr" />
          <div className="absolute right-0 top-0 max-[420px]:w-42 max-[420px]:h-42 mt-4 mr-4 xl:mr-10 xl:mt-10 border-[1.5rem] border-foreground h-28 w-28 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:w-48 xl:h-48 triangle-tr" />
        </div>
        <div className="h-full relative flex flex-col mb-12 justify-center sm:m-0">
          <div className="mt-20 sm:m-0">
            <h1 className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary">
              SWARASS
            </h1>
            <div className="text-3xl min-[420px]:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black">
              <TextReveal phrases={["PRODUCTIONS", "COMMUNICATIONS"]} />
            </div>
            <p className="text-md sm:text-xl md:text-3xl lg:text-4xl my-4 md:my-8 mb-8 max-w-xl">
              Orchestrating Memorable Events, Crafting Stunning Designs, and
              Delivering Interior Excellence.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => selectTab("services")}>
                Services
              </Button>
              <Button variant="outline" onClick={() => selectTab("activities")}>
                Activities
              </Button>
              <Button variant="outline" onClick={() => selectTab("contact")}>
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
