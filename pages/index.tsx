import { FC, useEffect, useRef } from 'react';
import Image from 'next/image';
import lottie from 'lottie-web';

const Home: FC = () => {
  const lottieContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainerRef.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/749a1bce-d4b0-45db-92c5-4b4e6e542bf1/I7l9HHipFK.json',
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Header */}
      <div className='animate-tracking-in-expand'>
      <header className="w-full h-96 flex flex-col items-start justify-center bg-cover bg-center text-white" style={{ backgroundImage: 'url(/hero-image.jpg)' }}>
        <h1 className="text-5xl font-bold text-black ml-6">It’s time for reset.</h1>
        <p className="text-2xl mt-4 text-black ml-6">手放して自由になろう</p>
      </header>
      </div>

      {/* Main Content */}
      <main className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        {/* Statement Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Statement</h2>
          <p className="text-gray-700 mb-2">～空き家にリセットという選択肢～</p>
          <p className="text-gray-700 mb-2">日本の空き屋は、すでに300万戸を超えて、増加傾向は止まりません。</p>
          <p className="text-gray-700 mb-2">
            自治体や民間で利用が推進されていますが、残念ながらすべての空き屋を利用するのは困難です。
          </p>
          <p className="text-gray-700 mb-2">私たちは、相続などで取得した空き屋を手放すお手伝いをします。</p>
        </section>

        {/* Services Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Reset Service */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-black">Reset Service</h3>
              <Image
                src="/Resetlogo340.png" // Replace with actual reset logo image path
                alt="Reset Logo"
                width={400}
                height={250}
                className="mb-4"
              />
              <ul className="list-disc list-inside text-gray-700">
                <li>空き家解体にかかわる手続きを一括対応</li>
                <li>解体費用融資、解体業者、整理業者の紹介</li>
                <li>確定申告や行政手続きサポート</li>
              </ul>
            </div>

            {/* Memory of House */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-black">Memory Service</h3>
              <Image
                src="/album.png" // Replace with actual album image path
                alt="Memory Album"
                width={400}
                height={250}
                className="mb-4"
              />
              <ul className="list-disc list-inside text-gray-700">
                <li>大切な家の想い出をアルバム化</li>
                <li>お客様と一緒に紙のアルバムを作成し</li>
                <li>家の記憶を永遠に残します</li>
              </ul>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">About</h2>
          <div className="flex items-center gap-4 justify-center">
            <div>
              <p className="text-gray-700 mb-2">社名：XXXX株式会社</p>
              <p className="text-gray-700 mb-2">住所：XXXX</p>
            </div>
            {/* SDG Image */}
            <div>
              <Image
                src="/sdgs11.png" // Replace with actual SDG logo image path
                alt="SDG Goals"
                width={100}
                height={100}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Floating Footer Call to Action */}
      <footer className="fixed bottom-4 right-4">
        <div ref={lottieContainerRef} className="w-20 h-20 mb-2"></div>
        <button className="bg-blue-500 text-white font-bold py-2 px-10 rounded-lg hover:bg-blue-600 shadow-lg">
          相談を始める
        </button>
      </footer>
    </div>
  );
};

export default Home;
