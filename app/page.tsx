import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="md:h-screen pt-8">
        <div className="md:h-full flex flex-col-reverse md:grid grid-cols-2 items-center">
          <div className="h-full flex flex-col items-center md:items-start justify-center mb-16">
            <Image src="/logo.svg" alt="logo" width={364} height={151} priority className="mt-8 w-[80vw] md:w-[45vw]" />
            <div className="mt-6 text-xl">Bridging the digital divide for a more inclusive future.</div>
          </div>
          <div className="place-self-center relative grid grid-cols-2">
            <div className="size-[25vh] md:size-[40vh] rounded-full col-span-2 row-span-2 bg-cover bg-center bg-primary flex items-center justify-center" style={{ backgroundImage: "url('/box.jpeg')" }}></div>
            {/* <div></div>
            <div></div>
            <div className="size-[30vh] rounded-full bg-cover bg-center bg-primary flex items-center justify-center" style={{ backgroundImage: "url('/box.jpeg')" }}></div> */}
          </div>
        </div>
      </div>
      <div className="p-4 md:p-8 rounded bg-primary/30">
      <div className="text-4xl font-bold">2.7 billion people, or one-third of the world&apos;s population, do not have internet access.</div>
      <div className="mb-4">However, not everyone is up-to-speed with digital literacy nowadays.</div>
      <div className="flex flex-col md:grid grid-cols-3 gap-6">
        <div className="p-4 border-2 bg-white border-black rounded-md">
          <div className="text-5xl font-bold text-primary">25% of US citizens</div>
          <div className="text-xl"> have <span className="font-bold">&quot;very low&quot;</span> digital skills.</div>
        </div>
        <div className="p-4 border-2 bg-white border-black rounded-md">
          <div className="text-5xl font-bold text-primary">6.8 million people</div>
          <div className="text-xl">have <span className="font-bold">&quot;ultra-low digital skills&quot;</span>. That&apos;s 13% of the population!</div>
        </div>
        <div className="p-4 border-2 bg-white border-black rounded-md">
          <div className="text-5xl font-bold text-primary">60%</div>
          <div className="text-xl">of people without digital literacy skills stay there- indicating it is <span className="font-bold">very hard for people with the lowest digital skills to improves</span></div>
        </div>
      </div>
      </div>
      <div className="mt-4 min-h-screen flex flex-col justify-center">
        <div className="text-6xl">But we are here to <span className="font-bold">break the division</span>.</div>
        <div className="text-4xl mt-4">We provide resources to help you be proficient in digital literacy, and access free local WiFi.</div>
        <div className="mt-20 text-4xl">Ready to <a href="/digital-literacy" className="underline underline-offset-4 decoration-primary hover:text-primary transition">get started</a>? Start with our Google Suite videos!</div>
        <div className="flex flex-col md:grid grid-cols-3 gap-6 mt-6">
          <div className="bg-primary/20 p-4 rounded-lg flex flex-col justify-between">
            <div>
              <div className="text-2xl font-bold">Google Classroom</div>
              <div className="text-lg">Google Classroom basics: How to find your assignments, turn in work, and keep up with your class.</div>
            </div>
            <video src="/gclassroom.mov" controls></video>
          </div>
          <div className="bg-primary/20 p-4 rounded-lg flex flex-col justify-between">
            <div>
              <div className="text-3xl font-bold">Google Drive</div>
              <div className="text-lg">Get started with Google Drive! Learn how to upload, organize, and share your files easily.</div>
            </div>
            <video src="/gdrive.mov" controls></video>
          </div>
          <div className="bg-primary/20 p-4 rounded-lg flex flex-col justify-between">
            <div>
              <div className="text-3xl font-bold">Google Slides</div>
              <div className="text-lg">New to Google Slides? Here&apos;s a simple walkthrough on making and sharing your first presentation.</div>
            </div>
            <video src="/gslides.mov" controls></video>
          </div>
        </div>
      </div>
    </>
  );
}
