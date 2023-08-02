import ImageProfile from "./Image.tsx";
import Socials from "./Socials/Socials.tsx";

const Card = () => {
    return(
        <>
    <div className="relative z-10" role="dialog" aria-modal="true">
  <div className=" bg-opacity-75 transition-opacity md:block"></div>
  <div className="inset-0 z-10 overflow-y-auto">
    <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
      <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <div className=" sm:col-span-4 lg:col-span-5">              
              <ImageProfile/>
            </div>
            <div className="overflow-hidden sm:col-span-8 lg:col-span-7">
            <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">I am Lautaro</h2>
              <p>I am presently engaged in contributing to various open source projects, including Deno, Fresh, and others. My expertise lies in JavaScript and TypeScript development, with a primary emphasis on front-end development.</p>
            <Socials/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Card;


