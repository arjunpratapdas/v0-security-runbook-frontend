"use client"

import { Suspense, lazy } from "react"
const Spline = lazy(() => import("@splinetool/react-spline"))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-slate-400 border-t-blue-500 rounded-full animate-spin"></div>
            <span className="text-sm text-slate-400">Loading 3D scene...</span>
          </div>
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}
