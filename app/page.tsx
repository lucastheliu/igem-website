import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="px-8 py-4 m-auto w-11/12">
      <div className="min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center gap-16 w-4/6 m-auto py-16">
          <div>
            <h1 className="text-7xl font-bold">iGEM Project Name</h1>
            <div className="py-8">
              <h3 className="font-bold italic text-lg py-2">Title About</h3>
              <p>
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </p>
            </div>
          </div>
          <img src="https://picsum.photos/500/400?grayscale"></img>
        </div>
      </div>
      <article className="min-h-screen py-16">
        <h2 className="text-3xl font-bold text-center py-4">How it Works</h2>
        <div>
          <p className="leading-7">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </div>
      </article>
      <footer>
        <p className="text-center italic">
          Copyright © 2024 LeRosey iGEM Team. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
