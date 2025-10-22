"use client"

import { Card } from "@/components/ui/card"

const workflowSteps = [
  {
    step: "1",
    title: "Security Alert Arrives",
    description: "A security alert is triggered from your system or monitoring tool",
  },
  {
    step: "2",
    title: "Real-time Threat Enrichment",
    description: "Lambda function automatically enriches the alert with threat intelligence data",
  },
  {
    step: "3",
    title: "Intelligent Severity Classification",
    description: "Lambda analyzes the enriched data and assigns a severity score",
  },
  {
    step: "4",
    title: "Severity Check Decision Point",
    description: "System makes a routing decision based on severity level",
  },
  {
    step: "5A",
    title: "Immediate Remediation (Low/Medium)",
    description: "Automatically executes remediation via Bedrock AgentCore",
  },
  {
    step: "5B",
    title: "Human Review Required (High/Critical)",
    description: "Sends email approval notification to security team via SNS",
  },
  {
    step: "6",
    title: "Logging & Monitoring",
    description: "All actions logged to CloudWatch, state stored in DynamoDB",
  },
  {
    step: "7",
    title: "Completed",
    description: "Threat handled, incident resolved, full audit trail available",
  },
]

export function SplineShowcase() {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-white">How It Works</h2>
        <p className="text-slate-400">Complete security incident response workflow</p>
      </div>

      <div className="space-y-3">
        {workflowSteps.map((item, idx) => (
          <div key={idx}>
            <Card className="p-6 bg-slate-900/50 border-slate-800 hover:border-blue-600/50 transition-colors">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-semibold text-sm">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            </Card>
            {idx < workflowSteps.length - 1 && (
              <div className="flex justify-center py-2">
                <div className="text-slate-600 text-xl">↓</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
