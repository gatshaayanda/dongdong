export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#F9A825] to-[#1F60C4] text-white mt-12 shadow-inner">
      <div className="text-center text-xs text-white/80 mb-4">
        🌍 Empowering the future. Verified with <strong>0.06g CO₂</strong> per visit.{' '}
        <a
          href="https://www.websitecarbon.com/website/adhubmvp-vercel-app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-green-200"
        >
          Website Carbon Badge
        </a>
      </div>
      <div className="container px-4 py-6 text-center text-sm space-y-1">
        <p>&copy; {new Date().getFullYear()} DGDC | Dongdong Global Development Council</p>
        <p className="opacity-90">
          Connecting African Developers to Real Opportunities.
        </p>
      </div>
    </footer>
  );
}
