export const mockResult = {
  riskScore: 94,
  riskLevel: "Critical",
  confidence: 96,
  category: "Banking Phishing",

  threatIndicators: [
    "Urgency language detected",
    "Suspicious banking request",
    "Potential impersonation",
  ],

  explanation:
    "The message uses urgency and authority tactics commonly found in phishing scams. The sender attempts to create panic and encourages immediate action.",

  simpleExplanation:
    "Someone is pretending to be your bank and trying to scare you into clicking a fake website.",

  recommendations: [
    "Do not click any links",
    "Contact your bank directly",
    "Block the sender",
    "Report the message",
  ],
};