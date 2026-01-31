export default function App() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono flex items-center justify-center p-6">
      <div className="max-w-3xl w-full border border-green-900 bg-zinc-950 p-8 rounded-lg shadow-2xl shadow-green-900/20">

        {/* Terminal Header */}
        <div className="flex gap-2 mb-6 border-b border-green-900/30 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-900/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-900/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-900/50"></div>
          <span className="text-xs text-green-900 ml-2">portfolio_v0.1.sh</span>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-tighter">
            &gt; JIRAKORN <span className="animate-pulse">_</span>
          </h1>

          <p className="text-green-700 leading-relaxed">
            Computer Engineering student @ PSU.
            Currently exploring the world of software.
            From the pieces of code that run in embedded MCUs, to the large infrastructure that makes to world wide web.
          </p>

          <div className="pt-4 space-y-2">
            <p className="text-xs text-green-900 uppercase tracking-widest font-bold">Current Stack Trace:</p>
            <ul className="text-sm grid grid-cols-2 gap-2 text-green-600/80">
              <li>[✓] Robotics (ROS 2 / Isaac Sim)</li>
              <li>[✓] Embedded (C++ / Rust / Teensy 4.0)</li>
              <li>[✓] Web (NestJS / React / Vite)</li>
              <li>[⟳] Infrastructure (Docker / Cloudflare)</li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-green-900/30">
            <p className="text-xs text-green-800 italic">
              Status: Deployment in progress... (Hosting via Ubuntu 24.04 Server)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
