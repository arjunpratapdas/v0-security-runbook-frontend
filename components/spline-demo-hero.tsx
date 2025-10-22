"use client"

import { SplineScene } from "@/components/ui/spline-scene"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineDemoHero() {
  return (
    <Card className="w-full h-[600px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden border-slate-800">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Security Runbook
              </span>
              <span className="text-white"> Agent</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-md leading-relaxed">
              Automate security incident response with intelligent threat enrichment, severity classification, and
              human-in-the-loop approval workflows.
            </p>
            <div className="flex gap-3 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Real-time enrichment
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                Automated response
              </div>
            </div>
          </div>
        </div>

        {/* Right content - 3D Scene (kept intact) */}
        <div className="flex-1 relative hidden md:block">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </div>
      </div>
    </Card>
  )
}
