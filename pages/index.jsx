import { Carousel } from 'antd';
import Link from 'next/link';


export default function Home() {


  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-neon font-sans">
      <header className="p-6 border-b border-neon flex justify-between items-center sticky top-0 bg-black/80 backdrop-blur z-50">
        <h1 className="text-4xl font-extrabold tracking-wider">🚀 HABIBULLO</h1>
        <nav className="space-x-6 text-lg">
        <Link href="/">Bosh sahifa</Link>
<Link href="/projects">Loyihalar</Link>
<Link href="/about">Men haqimda</Link>

<h2 className="text-5xl font-bold neon-text mb-4 animate-fade-up">Xush kelibsiz!</h2>
          <a href="https://github.com/27502" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </header>

      <main className="p-8 animate-glow">
        <section className="text-center py-12">
          <h2 className="text-5xl font-bold neon-text mb-4 animate-fade-up">Xush kelibsiz!</h2>
          <p className="text-xl max-w-3xl mx-auto animate-fade-up delay-100">
            Men — Habibullo Raxmatullayev, Frontend Developer. 2+ yildan beri React, Next.js, Zustand, Redux kabi texnologiyalar bilan ishlayman.
            Figma'dan dizaynlarni kodga aylantirish, Web ilovalarni 0'dan professional darajada yaratish — mening ishim.
          </p>
        </section>

        <section className="my-16 animate-slide-in-left">
          <Carousel autoplay className="rounded-lg overflow-hidden shadow-xl">
            <div className="h-64 bg-gray-900 flex items-center justify-center text-2xl">🎨 Portfolio dizaynlari</div>
            <div className="h-64 bg-gray-800 flex items-center justify-center text-2xl">📱 Responsive veb-ilovalar</div>
            <div className="h-64 bg-gray-700 flex items-center justify-center text-2xl">⚡ Tez va zamonaviy UI</div>
          </Carousel>
        </section>

        <section className="grid lg:grid-cols-3 gap-6 animate-slide-in-right">
          <div className="bg-gray-850 p-6 rounded-2xl border border-neon hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-2">🌐 Texnologiyalar</h3>
            <p>React, Next.js, Tailwind CSS, Zustand, Redux Toolkit, Ant Design, SCSS, TypeScript — barcha asosiy frontend texnologiyalarni puxta bilaman.</p>
          </div>

          <div className="bg-gray-850 p-6 rounded-2xl border border-neon hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-2">🧠 Tajriba</h3>
            <p className="p">Najot Ta'lim markazida o'qiganman, 1 Million dasturchi loyihasi bitiruvchisiman. Bir nechta portfolio, CRUD ilovalar va sahifalarni yaratganman.</p>
          </div>

          <div className="bg-gray-850 p-6 rounded-2xl border border-neon hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-2">🚀 Maqsadlar</h3>
            <p>Dunyo darajasida ishlaydigan dasturchi bo'lish, har bir foydalanuvchi uchun qulay, tez va zamonaviy ilovalar yaratish, open-sourcega hissa qo'shish.</p>
          </div>
        </section>

        <section className="mt-20 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">📲  Ijtimoiy Tarmoqlar</h2>
          <div className="space-x-6">
            <a href="https://t.me/Natsu_nakamura" target="_blank" className="underline hover:text-blue-400">Telegram</a>
            <a href="https://www.instagram.com/imase_x077/" target="_blank" className="underline hover:text-pink-400">Instagram</a>
            <a href="https://github.com/yourusername" target="_blank" className="underline hover:text-gray-400">GitHub</a>
          </div>
        </section>
      </main>

      <footer className="p-6 border-t border-neon text-center text-sm mt-12 bg-black/70">
        <p>&copy; 2025 Habibullo Raxmatullayev. Vebsayt neon city dizaynida, Next.js bilan yaratilgan.</p>
      </footer>
    </div>
  );
}