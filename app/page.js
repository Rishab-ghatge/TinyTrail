// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="bg-violet-100">
//       <section className="grid grid-cols-2 h-[50vh] flex-wrap">
//         <div className="flex flex-col gap-4 items-center justify-center">
//           <p className="text-3xl font-extrabold">Your Go-To URL Shortener</p>
//           <p className="text-lg font-medium px-20 text-center">
//             Simple, fast, and reliable — shorten your links instantly, with no
//             sign-up or login required.
//           </p>
//           <div className="flex gap-2 justify-start">
//             <Link href={"/shorten"}>
//               <button className="bg-violet-500 text-white p-4 py-1 font-bold shadow-lg rounded-xl">
//                 Try Now
//               </button>
//             </Link>
//           </div>
//         </div>
//         <div className="flex justify-start relative">
//           <Image
//             alt="Illustration of URL shortening concept"
//             src={"/vector2.svg"}
//             fill="true"
//           />
//         </div>
//       </section>
//     </main>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-violet-100">
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center p-6">
          <p className="text-2xl md:text-3xl font-extrabold text-center">Your Go-To URL Shortener</p>
          <p className="text-base md:text-lg font-medium text-center md:px-20">
            Simple, fast, and reliable — shorten your links instantly, with no
            sign-up or login required.
          </p>
          <div className="flex gap-2 justify-center">
            <Link href={"/shorten"}>
              <button className="bg-violet-500 text-white px-4 py-2 font-bold shadow-lg rounded-xl">
                Try Now
              </button>
            </Link>
          </div>
        </div>
        <div className="relative w-full h-64 md:h-auto">
          <Image
            alt="Illustration of URL shortening concept"
            src={"/vector2.svg"}
            fill
            className="object-contain"
          />
        </div>
      </section>
    </main>
  );
}

