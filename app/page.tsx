import { SplineDemoHero } from "@/components/spline-demo-hero"
import { SplineFeatures } from "@/components/spline-features"
import { SplineShowcase } from "@/components/spline-showcase"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500"></div>
            <span className="font-semibold text-white">Security Runbook Agent</span>
          </div>
          <div className="text-sm text-slate-400">Automated Incident Response</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <SplineDemoHero />
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SplineFeatures />
      </section>

      {/* Workflow Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SplineShowcase />
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-8 md:p-12 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Automate Your Security Response</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Reduce incident response time from hours to minutes with intelligent threat enrichment and automated
            remediation.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
              Get Started
            </button>
            <button className="px-6 py-2 border border-slate-600 hover:border-slate-500 text-slate-300 rounded-lg font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/50 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-slate-400 text-sm">
          <p>Security Runbook Agent - Powered by AWS Bedrock, Lambda, and SNS</p>
        </div>
      </footer>
    </main>
  )
}
