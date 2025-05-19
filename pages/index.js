import Head from 'next/head';
import Image from 'next/image';
import '../styles/globals.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>James Kenyon | Corporate Illusionist</title>
        <meta name="description" content="Elite Corporate Entertainment by James Kenyon" />
      </Head>
      <main className="relative min-h-screen text-white font-sans">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/edit.png"
            alt="James Kenyon performing magic"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h2 className="text-lg uppercase tracking-widest text-gray-300">Elite Corporate Entertainment</h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-2">
            Captivate Your Audience with<br />Extraordinary Magic
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-200">
            Elevate your corporate events with sophisticated illusions and mind-reading experiences that will leave your guests talking for years to come.
          </p>
          <button className="mt-6 bg-white text-black font-semibold py-2 px-6 rounded hover:bg-gray-200 transition">
            Check Availability
          </button>
          <p className="mt-4 text-sm text-gray-300">✓ 10+ Years Experience ✓ Fortune 500 Clients ✓ International Performer</p>
        </div>
      </main>
    </>
  );
}
