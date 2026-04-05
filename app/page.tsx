import Image from 'next/image';
import { ShieldCheck, ArrowUpRight, AlertTriangle, CreditCard, ShieldAlert, Route, Mic, ArrowRight } from 'lucide-react';
import DataGridCanvas from '@/components/DataGridCanvas';
import SysTime from '@/components/SysTime';
import RevealObserver from '@/components/RevealObserver';

export default function Page() {
  return (
    <RevealObserver>
      <DataGridCanvas />

      {/* Top System Bar */}
      <div className="fixed top-0 w-full h-8 bg-black border-b border-[#1A1A1A] z-[60] flex items-center justify-between px-6 font-mono text-xs uppercase tracking-widest text-[#737373]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#E5FF00] rounded-full animate-pulse"></span> API.ONLINE
          </span>
          <span className="hidden md:inline">LATENCY: 12ms</span>
          <span className="hidden md:inline">NODE: PAY-11</span>
        </div>
        <div className="flex items-center gap-4">
          <SysTime />
          <span className="text-white data-bracket">AUTH</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#1A1A1A] transition-all duration-300">
        <div className="max-w-[1800px] mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="group flex items-center gap-3">
            <span className="font-sans font-normal text-lg tracking-tight text-white uppercase">PayCore</span>
            <span className="font-mono text-xs tracking-widest text-[#404040] border border-[#1A1A1A] px-1">T-OS</span>
          </a>

          <div className="hidden md:flex items-center space-x-12">
            <a href="#architecture" className="group flex flex-col">
              <span className="font-mono text-xs text-[#404040] tracking-widest mb-0.5 group-hover:text-[#E5FF00] transition-colors">01</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#737373] group-hover:text-white transition-colors">Architecture</span>
            </a>
            <a href="#terminal" className="group flex flex-col">
              <span className="font-mono text-xs text-[#404040] tracking-widest mb-0.5 group-hover:text-[#E5FF00] transition-colors">02</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#737373] group-hover:text-white transition-colors">API</span>
            </a>
            <a href="#data-hub" className="group flex flex-col">
              <span className="font-mono text-xs text-[#404040] tracking-widest mb-0.5 group-hover:text-[#E5FF00] transition-colors">03</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#737373] group-hover:text-white transition-colors">Ledger</span>
            </a>
          </div>

          <button className="btn-swiss text-xs">Get API Keys</button>
        </div>
      </nav>

      <main className="pt-24 md:pt-32 overflow-hidden relative z-10">
        {/* /01/ HERO */}
        <section className="max-w-[1800px] mx-auto px-6 min-h-[85vh] flex items-center relative">
          <div className="absolute inset-0 border-l border-r border-[#1A1A1A] opacity-30 pointer-events-none hidden md:block" style={{ left: '1.5rem', right: '1.5rem' }}></div>
          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#1A1A1A] opacity-30 pointer-events-none hidden lg:block"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 w-full relative z-10">
            <div className="lg:col-span-6 flex flex-col items-start justify-center pr-0 lg:pr-12 pb-16 lg:pb-0 reveal">
              <div className="mb-8 border border-[#1A1A1A] bg-[#050505] px-3 py-1 font-mono text-xs text-[#E5FF00] tracking-widest uppercase flex items-center gap-3">
                <ShieldCheck strokeWidth={1.5} size={16} />
                API V4 Executing
              </div>

              <h1 className="font-sans text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-white font-normal mb-8 uppercase">
                Payments<br />
                <span className="text-[#737373] font-serif italic font-light tracking-tight lowercase ml-2 md:ml-4 text-5xl md:text-7xl lg:text-8xl">engineered.</span>
              </h1>

              <div className="flex gap-4 items-stretch border-l-2 border-[#E5FF00] pl-6 mb-12">
                <p className="font-mono text-xs md:text-sm text-[#737373] max-w-md leading-relaxed tracking-wide">
                  Bypass legacy banking rails. Synthesize global payment methods into a single programmable API. Settle instantly on resilient, institutional-grade infrastructure.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button className="w-full sm:w-auto btn-swiss group text-xs">
                  <span className="relative z-10 flex items-center gap-2">
                    Initialize Sandbox <ArrowUpRight className="text-lg" strokeWidth={1.5} size={18} />
                  </span>
                </button>
                <button className="w-full sm:w-auto btn-swiss-alt text-xs">Read API Docs</button>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[600px] flex items-center justify-center reveal delay-200" id="terminal">
              <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[#1A1A1A] opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-[#1A1A1A] opacity-50"></div>

              <div className="w-full h-full bg-[#030303] border border-[#1A1A1A] flex flex-col relative overflow-hidden group shadow-2xl">
                <div className="h-8 border-b border-[#1A1A1A] bg-black flex items-center justify-between px-3 shrink-0">
                  <div className="flex items-center gap-4 font-mono text-xs text-[#404040] tracking-widest uppercase">
                    <span className="text-white">PayOS_v4.2</span>
                    <span>PID: 11492</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 border border-[#1A1A1A]"></div>
                    <div className="w-2 h-2 border border-[#1A1A1A]"></div>
                    <div className="w-2 h-2 bg-[#E5FF00] border border-[#E5FF00]"></div>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-[1px] bg-[#1A1A1A] p-[1px]">
                  <div className="bg-[#030303] row-span-2 col-span-2 p-4 flex flex-col relative overflow-hidden">
                    <div className="reg-mark reg-mark-tr"></div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="font-mono text-xs text-[#737373] tracking-widest uppercase">Transactions / Sec</div>
                      <div className="font-mono text-xs text-[#E5FF00]">14,291 TPS</div>
                    </div>

                    <div className="flex-1 w-full relative">
                      <div className="absolute inset-0 border-t border-b border-[#1A1A1A] opacity-10 flex flex-col justify-between">
                        <div className="border-b border-[#1A1A1A]/30 w-full h-1/3"></div>
                        <div className="border-b border-[#1A1A1A]/30 w-full h-1/3"></div>
                      </div>
                      <svg className="w-full h-full absolute inset-0 preserve-aspect-ratio=none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,80 L10,60 L20,70 L30,40 L40,50 L50,20 L60,30 L70,10 L80,40 L90,20 L100,5" fill="none" stroke="rgba(229, 255, 0, 0.2)" strokeWidth="1"></path>
                        <path d="M0,80 L10,60 L20,70 L30,40 L40,50 L50,20 L60,30 L70,10 L80,40 L90,20 L100,5" fill="none" stroke="#E5FF00" strokeWidth="2" className="sparkline"></path>
                      </svg>
                    </div>
                    <div className="mt-4 flex justify-between font-mono text-xs text-[#404040] border-t border-[#1A1A1A] pt-2">
                      <span>T-00:15</span><span>T-00:10</span><span>T-00:05</span><span>NOW</span>
                    </div>
                  </div>

                  <div className="bg-[#030303] p-4 flex flex-col justify-between">
                    <div className="font-mono text-xs text-[#737373] tracking-widest uppercase">Daily Volume</div>
                    <div>
                      <div className="font-sans text-2xl tracking-tight font-normal text-white group-hover:text-[#E5FF00] transition-colors">$2.42B</div>
                      <div className="font-mono text-xs text-[#737373] mt-1">Δ +14% (24H)</div>
                    </div>
                  </div>

                  <div className="bg-[#030303] p-4 flex flex-col justify-between">
                    <div className="font-mono text-xs text-[#737373] tracking-widest uppercase">Primary Route</div>
                    <div>
                      <div className="font-sans text-sm font-normal text-white uppercase tracking-tight">VISA_DIRECT_01</div>
                      <div className="w-full h-1 bg-[#050505] mt-2 border border-[#1A1A1A]"><div className="h-full bg-[#E5FF00] w-[82%]"></div></div>
                    </div>
                  </div>

                  <div className="bg-[#030303] col-span-3 p-4 flex flex-col font-mono text-xs">
                    <div className="text-[#737373] tracking-widest uppercase mb-3 border-b border-[#1A1A1A] pb-2 flex justify-between">
                      <span>Webhooks Log</span>
                      <span className="text-[#E5FF00] animate-pulse">STREAM...</span>
                    </div>
                    <div className="space-y-2 overflow-hidden flex-1 relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030303] z-10"></div>
                      <div className="flex justify-between text-[#737373] hover:text-white transition-colors cursor-crosshair">
                        <span>[req_9f...4a] AUTH_CAPTURE</span>
                        <span>$45.00</span>
                        <span className="text-[#E5FF00]">SUCCESS</span>
                      </div>
                      <div className="flex justify-between text-[#737373] hover:text-white transition-colors cursor-crosshair">
                        <span>[req_11...9c] PAYOUT_ACH</span>
                        <span>$1,240.00</span>
                        <span className="text-[#E5FF00]">SUCCESS</span>
                      </div>
                      <div className="flex justify-between text-[#737373] hover:text-white transition-colors cursor-crosshair">
                        <span>[req_3b...2f] FX_SETTLE</span>
                        <span>€142.50</span>
                        <span className="text-white">PENDING</span>
                      </div>
                      <div className="flex justify-between text-[#737373]">
                        <span>[req_7a...11] FRAUD_CHECK</span>
                        <span>-</span>
                        <span className="text-[#E5FF00]">PASS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /02/ DATA TICKER */}
        <section className="border-y border-[#1A1A1A] bg-black py-2 relative z-10 flex overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

          <div className="flex items-center bg-[#E5FF00] text-black font-mono text-xs uppercase tracking-widest px-4 font-medium shrink-0 z-20">
            ROUTING STATUS
          </div>

          <div className="animate-marquee flex items-center font-mono text-xs uppercase tracking-widest text-[#737373] whitespace-nowrap min-w-full gap-8 pl-8">
            <span>[SYS_CHK] VISA DIRECT: <span className="text-white">ONLINE</span></span>
            <span className="w-1 h-1 bg-[#1A1A1A] rounded-full"></span>
            <span>[SYS_CHK] MASTERCARD SEND: <span className="text-white">ONLINE</span></span>
            <span className="w-1 h-1 bg-[#1A1A1A] rounded-full"></span>
            <span>[SYS_CHK] SEPA INSTANT: <span className="text-white">ONLINE</span></span>
            <span className="w-1 h-1 bg-[#1A1A1A] rounded-full"></span>
            <span>[SYS_CHK] SWIFT GPI: <span className="text-white">ONLINE</span></span>
            <span className="w-1 h-1 bg-[#1A1A1A] rounded-full"></span>
            <span>[SYS_CHK] FEDNOW: <span className="text-white">ONLINE</span></span>
            <span className="w-1 h-1 bg-[#1A1A1A] rounded-full"></span>
            {/* Loop */}
            <span>[SYS_CHK] VISA DIRECT: <span className="text-white">ONLINE</span></span>
            <span className="w-1 h-1 bg-[#1A1A1A] rounded-full"></span>
            <span>[SYS_CHK] MASTERCARD SEND: <span className="text-white">ONLINE</span></span>
          </div>
        </section>

        {/* /03/ THE STAKES */}
        <section className="max-w-[1200px] mx-auto px-6 py-32 relative z-10 reveal border-x border-[#1A1A1A]">
          <div className="flex flex-col items-center text-center">
            <div className="border border-[#1A1A1A] p-2 mb-8 bg-[#050505] inline-flex">
              <AlertTriangle className="text-2xl text-[#737373]" strokeWidth={1.5} size={24} />
            </div>
            <h2 className="font-sans text-3xl md:text-5xl tracking-tight text-white font-normal mb-8 leading-[1.1] max-w-3xl">
              Legacy infrastructure bottlenecks global money movement. <span className="text-[#737373]">We engineer absolute payment velocity.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1A1A1A] max-w-4xl w-full">
              <div className="bg-black p-6 flex flex-col items-center">
                <span className="font-mono text-xs text-[#FF3333] mb-2">ERR_01</span>
                <span className="font-mono text-xs text-[#737373] uppercase tracking-widest">High Failure Rates</span>
              </div>
              <div className="bg-black p-6 flex flex-col items-center">
                <span className="font-mono text-xs text-[#FF3333] mb-2">ERR_02</span>
                <span className="font-mono text-xs text-[#737373] uppercase tracking-widest">Reconciliation Hell</span>
              </div>
              <div className="bg-black p-6 flex flex-col items-center">
                <span className="font-mono text-xs text-[#FF3333] mb-2">ERR_03</span>
                <span className="font-mono text-xs text-[#737373] uppercase tracking-widest">Fragmented Providers</span>
              </div>
            </div>
          </div>
        </section>

        {/* /04/ BENTO ENGINE */}
        <section id="architecture" className="max-w-[1800px] mx-auto px-6 py-24 relative z-10">
          <div className="flex justify-between items-end border-b border-[#1A1A1A] pb-4 mb-12 reveal">
            <h2 className="font-sans text-3xl tracking-tight text-white font-normal uppercase">Core Architecture</h2>
            <div className="font-mono text-xs text-[#737373] tracking-widest data-bracket hidden md:block">MODULAR. ROBUST.</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-[1px] bg-[#1A1A1A] border border-[#1A1A1A]">
            <div className="bg-[#050505] md:col-span-8 p-10 relative group reveal overflow-hidden min-h-[400px]">
              <div className="reg-mark reg-mark-tl"></div><div className="reg-mark reg-mark-br"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs text-[#E5FF00] uppercase tracking-widest bg-black border border-[#1A1A1A] px-2 py-1">API.01</span>
                  <CreditCard className="text-2xl text-[#737373] group-hover:text-white transition-colors" strokeWidth={1.5} size={24} />
                </div>
                <div className="mt-24">
                  <h3 className="font-sans text-4xl tracking-tight text-white font-normal mb-4 uppercase tech-reveal"><span className="invisible group-hover:visible absolute">Global Acquiring</span>Global Acquiring</h3>
                  <p className="font-mono text-xs text-[#737373] leading-relaxed max-w-lg">
                    Process 150+ currencies and local payment methods globally. Automated conversion with embedded FX logic. Seamlessly scale into new geographic markets without changing integrations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#050505] md:col-span-4 p-10 relative group reveal delay-100">
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-xs text-[#737373] uppercase tracking-widest border border-[#1A1A1A] px-2 py-1">API.02</span>
                </div>
                <div>
                  <ShieldAlert className="text-2xl text-[#737373] mb-6 group-hover:text-[#E5FF00] transition-colors" strokeWidth={1.5} size={24} />
                  <h3 className="font-sans text-2xl tracking-tight text-white font-normal mb-3 uppercase">Fraud Engine</h3>
                  <p className="font-mono text-xs text-[#737373] leading-relaxed">
                    Machine learning risk evaluation embedded at the transaction level. Stop chargebacks instantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#050505] md:col-span-4 p-10 relative group reveal">
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-xs text-[#737373] uppercase tracking-widest border border-[#1A1A1A] px-2 py-1">API.03</span>
                </div>
                <div>
                  <Route className="text-2xl text-[#737373] mb-6 group-hover:text-[#E5FF00] transition-colors" strokeWidth={1.5} size={24} />
                  <h3 className="font-sans text-2xl tracking-tight text-white font-normal mb-3 uppercase">Smart Routing</h3>
                  <p className="font-mono text-xs text-[#737373] leading-relaxed">
                    Dynamic fallback routing across multiple acquiring banks. Maximize authorization rates dynamically.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black md:col-span-8 p-10 relative group reveal delay-100 overflow-hidden">
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 tech-mask">
                <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" alt="Server Infrastructure" fill className="object-cover filter grayscale contrast-125 mix-blend-luminosity" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs text-[#737373] uppercase tracking-widest border border-[#1A1A1A] bg-black px-2 py-1">API.04</span>
                  <div className="font-mono text-xs text-[#E5FF00] text-right opacity-0 group-hover:opacity-100 transition-opacity">
                    <div>POST /api/v1/payouts</div>
                    <div>STATUS: 200 OK</div>
                  </div>
                </div>
                <div className="mt-24 max-w-md">
                  <h3 className="font-sans text-4xl tracking-tight text-white font-normal mb-4 uppercase">Ledger API</h3>
                  <p className="font-mono text-xs text-[#737373] leading-relaxed mb-6">
                    Automate multi-party payouts and platform reconciliation with our double-entry ledger database. Push funds to bank accounts, cards, or digital wallets globally.
                  </p>
                  <a href="#" className="font-mono text-xs text-white uppercase tracking-widest border-b border-white hover:text-[#E5FF00] hover:border-[#E5FF00] transition-colors pb-1">View Documentation</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /05/ PROCESS / TIMELINE */}
        <section className="py-24 relative z-10 overflow-hidden">
          <div className="max-w-[1800px] mx-auto px-6">
            <div className="flex items-center gap-4 mb-16 reveal">
              <div className="h-px bg-[#1A1A1A] flex-1"></div>
              <h2 className="font-mono text-xs tracking-widest text-[#737373] uppercase data-bracket">Execution Pathway</h2>
              <div className="h-px bg-[#1A1A1A] flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 group reveal delay-100">
              <div className="relative h-[400px] border border-[#1A1A1A] group/step overflow-hidden bg-[#050505]">
                <div className="absolute inset-0 z-0 opacity-10 group-hover/step:opacity-30 transition-opacity duration-500">
                  <Image src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop" alt="Checkout" fill className="object-cover grayscale mix-blend-screen" referrerPolicy="no-referrer" />
                </div>
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="font-mono text-4xl text-white/10 font-medium mb-auto tracking-tight">01</div>
                  <div className="bg-black/80 backdrop-blur-sm p-4 border border-[#1A1A1A] transform translate-y-4 group-hover/step:translate-y-0 transition-transform">
                    <h4 className="font-mono text-xs uppercase text-white mb-2 tracking-widest">Authorization</h4>
                    <p className="font-sans text-sm font-light text-[#737373] leading-relaxed">Customer initiates checkout. Rigorous fraud scoring and seamless 3DS verification.</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] border border-[#1A1A1A] group/step overflow-hidden bg-[#050505]">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="font-mono text-4xl text-white/10 font-medium mb-auto tracking-tight">02</div>
                  <div className="bg-black/80 backdrop-blur-sm p-4 border border-[#1A1A1A] transform translate-y-4 group-hover/step:translate-y-0 transition-transform">
                    <h4 className="font-mono text-xs uppercase text-white mb-2 tracking-widest">Capture & Route</h4>
                    <p className="font-sans text-sm font-light text-[#737373] leading-relaxed">Transaction is captured and intelligently routed to the optimal geographic acquirer.</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] border border-[#1A1A1A] group/step overflow-hidden bg-[#050505]">
                <div className="absolute inset-0 z-0 opacity-10 flex flex-col justify-around pointer-events-none">
                  <div className="w-full h-px bg-white"></div><div className="w-full h-px bg-white"></div><div className="w-full h-px bg-white"></div>
                </div>
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="font-mono text-4xl text-white/10 font-medium mb-auto tracking-tight">03</div>
                  <div className="bg-black/80 backdrop-blur-sm p-4 border border-[#1A1A1A] transform translate-y-4 group-hover/step:translate-y-0 transition-transform">
                    <h4 className="font-mono text-xs uppercase text-white mb-2 tracking-widest">Settlement</h4>
                    <p className="font-sans text-sm font-light text-[#737373] leading-relaxed">Funds are cleared and settled systematically into the merchant&apos;s master ledger balance.</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] border border-[#E5FF00]/30 bg-[#E5FF00]/5 group/step overflow-hidden shadow-[inset_0_0_50px_rgba(229,255,0,0.05)]">
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="font-mono text-4xl text-[#E5FF00]/30 font-medium mb-auto tracking-tight">04</div>
                  <div className="bg-black/90 backdrop-blur-sm p-4 border border-[#E5FF00] transform translate-y-4 group-hover/step:translate-y-0 transition-transform shadow-[0_0_15px_rgba(229,255,0,0.1)]">
                    <h4 className="font-mono text-xs uppercase text-[#E5FF00] mb-2 tracking-widest flex justify-between items-center">
                      Disbursement <span className="w-1.5 h-1.5 bg-[#E5FF00] rounded-full animate-ping"></span>
                    </h4>
                    <p className="font-sans text-sm font-light text-[#737373] leading-relaxed">Automated programmatic payouts to sellers, vendors, or multi-currency bank accounts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /06/ AGGRESSIVE METRICS */}
        <section id="data-hub" className="py-24 border-y border-[#1A1A1A] relative z-10 bg-[#020202] reveal">
          <div className="max-w-[1800px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1A1A1A] p-px">
              <div className="bg-black p-8 flex flex-col">
                <span className="font-mono text-xs text-[#737373] mb-4 uppercase tracking-widest border-b border-[#1A1A1A] pb-2 inline-block">Volume Processed</span>
                <span className="font-mono text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-tight mt-auto">2.4<span className="text-[#737373] text-2xl">B</span></span>
              </div>
              <div className="bg-black p-8 flex flex-col">
                <span className="font-mono text-xs text-[#737373] mb-4 uppercase tracking-widest border-b border-[#1A1A1A] pb-2 inline-block">Payment Methods</span>
                <span className="font-mono text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-tight mt-auto">150<span className="text-[#737373] text-2xl">+</span></span>
              </div>
              <div className="bg-black p-8 flex flex-col">
                <span className="font-mono text-xs text-[#737373] mb-4 uppercase tracking-widest border-b border-[#1A1A1A] pb-2 inline-block">API Latency</span>
                <span className="font-mono text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-tight mt-auto">12<span className="text-[#737373] text-2xl">ms</span></span>
              </div>
              <div className="bg-black p-8 flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-[#E5FF00]/5"></div>
                <span className="font-mono text-xs text-[#E5FF00] mb-4 uppercase tracking-widest border-b border-[#E5FF00]/30 pb-2 inline-block relative z-10">Uptime Reliability</span>
                <span className="font-mono text-4xl md:text-5xl lg:text-6xl text-[#E5FF00] font-normal tracking-tight mt-auto relative z-10 drop-shadow-[0_0_8px_rgba(229,255,0,0.5)]">99.999%</span>
              </div>
            </div>
          </div>
        </section>

        {/* /07/ SOCIAL PROOF / DASHBOARD LIST */}
        <section className="max-w-[1800px] mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10 border-x border-[#1A1A1A]">
          <div className="relative reveal border border-[#1A1A1A] bg-[#050505] p-1">
            <div className="bg-black p-6 flex flex-col">
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#1A1A1A]">
                <h4 className="font-mono text-xs uppercase text-white tracking-widest">Live Webhook Stream</h4>
                <div className="font-mono text-xs text-[#E5FF00] flex items-center gap-2">
                  [SYNC_ACTIVE]
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full font-mono text-xs text-[#737373] uppercase tracking-widest border-b border-[#1A1A1A] pb-2 mb-2">
                  <div className="w-1/2">Merchant ID</div>
                  <div className="w-1/4 text-right">Volume</div>
                  <div className="w-1/4 text-right">Auth Rate</div>
                </div>

                <div className="space-y-1 font-mono text-xs">
                  <div className="flex w-full py-3 hover:bg-[#050505] transition-colors cursor-crosshair border-b border-[#1A1A1A]/50">
                    <div className="w-1/2 flex flex-col">
                      <span className="text-white">Platform A (Marketplace)</span>
                      <span className="text-xs text-[#737373] mt-1">MERCH-UK-0492</span>
                    </div>
                    <div className="w-1/4 text-right flex items-center justify-end text-white">$125.0M</div>
                    <div className="w-1/4 text-right flex items-center justify-end text-[#E5FF00]">99.9%</div>
                  </div>

                  <div className="flex w-full py-3 hover:bg-[#050505] transition-colors cursor-crosshair border-b border-[#1A1A1A]/50">
                    <div className="w-1/2 flex flex-col">
                      <span className="text-white">SaaS Provider B</span>
                      <span className="text-xs text-[#737373] mt-1">MERCH-US-9912</span>
                    </div>
                    <div className="w-1/4 text-right flex items-center justify-end text-white">$50.0M</div>
                    <div className="w-1/4 text-right flex items-center justify-end text-[#E5FF00]">99.8%</div>
                  </div>

                  <div className="flex w-full py-3 hover:bg-[#050505] transition-colors cursor-crosshair">
                    <div className="w-1/2 flex flex-col">
                      <span className="text-white">Creator Economy C</span>
                      <span className="text-xs text-[#737373] mt-1">MERCH-EU-1102</span>
                    </div>
                    <div className="w-1/4 text-right flex items-center justify-end text-white">$310.5M</div>
                    <div className="w-1/4 text-right flex items-center justify-end text-[#E5FF00]">99.9%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal delay-200">
            <div className="font-mono text-xs text-[#737373] tracking-widest uppercase mb-6 flex items-center gap-2">
              <Mic strokeWidth={1.5} size={16} /> Transmission Intercepted
            </div>

            <h3 className="font-sans text-2xl md:text-4xl leading-tight text-white mb-8 border-l-2 border-[#E5FF00] pl-6 py-2 uppercase tracking-tight">
              &quot;PayCore&apos;s routing engine increased our authorization rates globally. <span className="text-[#737373]">It&apos;s the ultimate API for modern commerce.</span>&quot;
            </h3>

            <div className="flex flex-col gap-1 pl-6">
              <div className="font-mono text-sm text-white uppercase">Head of Payments</div>
              <div className="font-mono text-xs text-[#737373] tracking-widest uppercase data-bracket">Tier-1 Marketplace</div>
            </div>
          </div>
        </section>

        {/* /08/ ECONOMICS */}
        <section className="border-y border-[#1A1A1A] bg-black py-24 relative z-10">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex justify-between items-end border-b border-[#1A1A1A] pb-4 mb-12 reveal">
              <h2 className="font-sans text-3xl tracking-tight text-white font-normal uppercase">API Usage Tiers</h2>
              <div className="font-mono text-xs text-[#737373] tracking-widest data-bracket hidden md:block">FEE STRUCTURE</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-x border-[#1A1A1A]">
              <div className="p-8 border-b md:border-b-0 md:border-r border-[#1A1A1A] hover:bg-[#050505] transition-colors flex flex-col reveal delay-100">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#737373] mb-2">Gateway</h3>
                <div className="font-sans text-2xl text-white uppercase tracking-tight mb-6 pb-6 border-b border-[#1A1A1A]">Per Auth</div>

                <ul className="space-y-3 mb-12 flex-grow font-mono text-xs text-white uppercase tracking-wide">
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#1A1A1A]"></span> Standard Processing</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#1A1A1A]"></span> Card Storage</li>
                </ul>
                <button className="font-mono text-xs text-[#737373] uppercase tracking-widest border border-[#1A1A1A] py-3 hover:text-white hover:border-white transition-colors">Select Tier</button>
              </div>

              <div className="p-8 border-b md:border-b-0 md:border-r border-[#1A1A1A] bg-[#050505] relative flex flex-col reveal delay-200 shadow-[inset_0_0_0_1px_#E5FF00]">
                <div className="absolute top-0 right-0 bg-[#E5FF00] text-black font-mono text-xs px-2 py-1 uppercase tracking-widest">Growth</div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#E5FF00] mb-2">Processing</h3>
                <div className="font-sans text-2xl text-white uppercase tracking-tight mb-6 pb-6 border-b border-[#1A1A1A]">Basis Points</div>

                <ul className="space-y-3 mb-12 flex-grow font-mono text-xs text-white uppercase tracking-wide">
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#E5FF00]"></span> Everything in Gateway</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#E5FF00]"></span> Advanced Routing</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#E5FF00]"></span> Fraud Engine Logic</li>
                </ul>
                <button className="btn-swiss w-full text-xs">Contact Sales</button>
              </div>

              <div className="p-8 flex flex-col hover:bg-[#050505] transition-colors reveal delay-300">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#737373] mb-2">Enterprise</h3>
                <div className="font-sans text-2xl text-white uppercase tracking-tight mb-6 pb-6 border-b border-[#1A1A1A]">Custom</div>

                <ul className="space-y-3 mb-12 flex-grow font-mono text-xs text-white uppercase tracking-wide">
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#1A1A1A]"></span> Dedicated Infrastructure</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-[#1A1A1A]"></span> Custom SLA Terms</li>
                </ul>
                <button className="font-mono text-xs text-[#737373] uppercase tracking-widest border border-[#1A1A1A] py-3 hover:text-white hover:border-white transition-colors">Book Strategy</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* /09/ FOOTER */}
      <footer className="bg-black pt-32 pb-8 relative z-10 border-t border-[#1A1A1A] overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="font-sans text-3xl md:text-5xl tracking-tight text-white font-normal mb-8 uppercase">System Ready.<br /><span className="text-[#737373]">Initiate Integration.</span></h2>
              <button className="btn-swiss text-xs">
                Deploy API <ArrowRight strokeWidth={1.5} size={16} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8 md:justify-items-end text-left md:text-right">
              <div>
                <h4 className="font-mono text-xs text-[#737373] mb-6 uppercase tracking-widest border-b border-[#1A1A1A] inline-block pb-1">Architecture</h4>
                <ul className="space-y-3 font-mono text-xs uppercase">
                  <li><a href="#" className="text-white hover:text-[#E5FF00] transition-colors">API Auth</a></li>
                  <li><a href="#" className="text-white hover:text-[#E5FF00] transition-colors">Webhooks</a></li>
                  <li><a href="#" className="text-white hover:text-[#E5FF00] transition-colors">Docs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs text-[#737373] mb-6 uppercase tracking-widest border-b border-[#1A1A1A] inline-block pb-1">Legal</h4>
                <ul className="space-y-3 font-mono text-xs uppercase">
                  <li><a href="#" className="text-white hover:text-[#E5FF00] transition-colors">PCI Compliance</a></li>
                  <li><a href="#" className="text-white hover:text-[#E5FF00] transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-white hover:text-[#E5FF00] transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-[#1A1A1A] pt-8 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex h-6 items-end gap-[2px] opacity-50 grayscale mix-blend-screen">
                <div className="w-1 h-full bg-white"></div><div className="w-0.5 h-full bg-white"></div><div className="w-2 h-full bg-white"></div><div className="w-0.5 h-full bg-white"></div><div className="w-1 h-full bg-white"></div><div className="w-1 h-5 bg-white"></div><div className="w-3 h-full bg-white"></div><div className="w-0.5 h-full bg-white"></div><div className="w-1 h-full bg-white"></div><div className="w-2 h-4 bg-white"></div><div className="w-1 h-full bg-white"></div><div className="w-0.5 h-full bg-white"></div>
              </div>
              <div className="font-mono text-xs text-[#737373] tracking-widest uppercase">ID: PAY-SYS-2024</div>
            </div>

            <h1 className="font-sans text-6xl md:text-9xl leading-[0.7] tracking-tighter text-white font-normal uppercase m-0">
              PayCore
            </h1>
          </div>
        </div>
      </footer>
    </RevealObserver>
  );
}
