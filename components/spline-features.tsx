"use client"

import { Card } from "@/components/ui/card"

const features = [
  {
    title: "Real-time Threat Enrichment",
    description: "Lambda function automatically enriches alerts with threat intelligence data",
    icon: "🔍",
  },
  {
    title: "Intelligent Classification",
    description: "Automatic severity scoring (LOW, MEDIUM, HIGH, CRITICAL) for smart routing",
    icon: "⚡",
  },
  {
    title: "Human-in-the-Loop",
    description: "Critical alerts require security team approval via SNS email notifications",
    icon: "👥",
  },
  {
    title: "Automated Remediation",
    description: "Bedrock AgentCore executes browser-based remediation for approved threats",
    icon: "🛡️",
  },
  {
    title: "Complete Audit Trail",
    description: "All actions logged to CloudWatch with state persistence in DynamoDB",
    icon: "📋",
  },
  {
    title: "Minutes Not Hours",
    description: "Reduces incident response time from hours to minutes with automation",
    icon: "⏱️",
  },
]

export function SplineFeatures() {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-white">Key Features</h2>
        <p className="text-slate-400">Powerful capabilities for automated security response</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, idx) => (
          <Card key={idx} className="p-6 bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-colors">
            <div className="text-3xl mb-3">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-slate-400 text-sm">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
