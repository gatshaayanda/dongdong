'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Users, Globe2, ArrowRightCircle } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const keys = useRef<string[]>([]);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [greeting, setGreeting] = useState('');
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening');
    setEmoji(hour < 12 ? '🌞' : hour < 18 ? '☀️' : '🌙');

    const onKey = (e: KeyboardEvent) => {
      keys.current.push(e.key.toLowerCase());
      if (keys.current.length > 5) keys.current.shift();
      if (keys.current.join('') === 'admin') router.push('/login-secret-login-for-admins97F4B2NXQ');
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [router]);

  const longPress = {
    onTouchStart: () => setTouchStart(Date.now()),
    onTouchEnd: () => {
      if (touchStart && Date.now() - touchStart > 600) router.push('/login-secret-login-for-admins97F4B2NXQ');
      setTouchStart(null);
    },
  };

  return (
    <>
      {/* Hero */}
      <section
        {...longPress}
        className="flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 bg-gradient-to-br from-[#F9A825] to-[#1F60C4] text-white"
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-3xl mb-4 drop-shadow-lg">
          {greeting} {emoji}, welcome to DGDC
        </h1>
        <p className="mt-2 max-w-xl text-lg text-white/90 mb-6">
          Empowering Young African Talent for the Digital World.
        </p>
        <Link
          href="#program"
          className="inline-flex items-center gap-2 bg-white text-[#1F60C4] rounded-full px-7 py-3 font-semibold hover:brightness-110 transition"
        >
          🌍 Learn How We Work
        </Link>
      </section>

      {/* Global Challenge Section */}
      <section className="py-20 bg-white text-center px-6">
        <div className="container mx-auto max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold text-[#1F60C4]">🌐 Why DGDC Exists</h2>
          <p className="text-[#4F5F7A]">
            Korea has thousands of unfilled tech jobs. Africa has millions of capable, hungry young minds.
            DGDC builds the bridge — training developers in Africa and connecting them with real work from Korea and beyond.
          </p>
        </div>
      </section>

      {/* Training Program */}
      <section id="program" className="py-20 bg-[#F1F1F1] text-center px-6">
        <div className="container mx-auto grid gap-10 md:grid-cols-3 text-left">
          {[
            {
              icon: <BookOpen size={36} className="text-[#00A859]" />,
              title: 'Modern Curriculum',
              body: 'Web & app development, GitHub, teamwork, AI-assisted coding — taught by professionals.',
            },
            {
              icon: <Users size={36} className="text-[#00A859]" />,
              title: 'Mentorship & Support',
              body: 'Local and international mentors guide each student’s progress from intro to advanced.',
            },
            {
              icon: <Globe2 size={36} className="text-[#00A859]" />,
              title: 'Real Projects',
              body: 'Students contribute to real-world client projects like Texas Papa to build their portfolio.',
            },
          ].map(({ icon, title, body }) => (
            <div key={title} className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition">
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-[#1F60C4] mb-2">{title}</h3>
              <p className="text-sm text-[#4F5F7A]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Projects Preview */}
      <section className="py-20 bg-white text-center px-6">
        <div className="container mx-auto space-y-6 max-w-3xl">
          <h2 className="text-2xl font-bold text-[#1F60C4]">🧑🏾‍💻 Student Work in Action</h2>
          <p className="text-[#4F5F7A]">Each student contributes to real portfolio projects — websites, apps, and more.</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#ffebca] text-[#0F264B] rounded-full px-6 py-2 font-semibold hover:brightness-110 transition"
          >
            See Portfolio <ArrowRightCircle size={20} />
          </Link>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 bg-[#F9FAFB] text-center px-6">
        <div className="container mx-auto space-y-4 max-w-4xl">
          <h2 className="text-xl font-bold text-[#1F60C4]">💼 Our Sponsors & Partners</h2>
          <p className="text-[#4F5F7A] text-sm">
            Thanks to generous partners, we can provide access to devices, mentors, and opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-6 items-center pt-6">
            {['Dongdong F&B', 'AdminHub', 'YDF 2025'].map((name) => (
              <div key={name} className="text-[#1F60C4] font-bold bg-white px-4 py-2 rounded shadow-sm">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white text-center px-6">
        <div className="container mx-auto max-w-xl space-y-6">
          <h2 className="text-2xl font-bold text-[#1F60C4]">🚀 Get Involved</h2>
          <p className="text-[#4F5F7A]">
            DGDC is a movement. Whether you’re a student, sponsor, or school — we’d love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/client/login"
              className="bg-[#1F60C4] text-white px-6 py-3 rounded-full font-semibold hover:brightness-110"
            >
              🔐 Student Login
            </Link>
            <Link
              href="/contact"
              className="bg-[#fff5e6] text-[#0F264B] px-6 py-3 rounded-full font-semibold hover:brightness-110"
            >
              ✉️ Become a Sponsor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
