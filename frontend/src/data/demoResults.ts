export const bankingScamResult = {
  detectedLanguage: "English",
  isRelevant: true,
  relevanceReason: "",
  riskScore: 95,
  riskLevel: "Critical",
  confidence: 100,
  category: "Phishing / Banking Scam",
  legitimacyAssessment: "NOT LEGITIMATE.",

  threatIndicators: [
    "Impersonation of a bank",
    "Suspicious login URL",
    "Urgency tactics detected",
    "Threat of account closure",
    "Credential harvesting attempt",
  ],

  explanation:
    "This message impersonates a legitimate bank and attempts to trick users into revealing credentials using urgency and fear.",

  simpleExplanation:
    "Someone is pretending to be your bank and trying to steal your login information.",

  recommendations: [
    "Do not click the link",
    "Block the sender",
    "Contact the bank directly",
    "Report the scam",
  ],
};

export const fakeJobResult = {
  detectedLanguage: "English",
  isRelevant: true,
  relevanceReason: "",
  riskScore: 88,
  riskLevel: "High",
  confidence: 98,
  category: "Fake Job Offer",

  legitimacyAssessment: "NOT LEGITIMATE.",

  threatIndicators: [
    "Upfront payment request",
    "Too-good-to-be-true salary",
    "Urgent recruitment tactics",
  ],

  explanation:
    "The offer requests money before employment, a common scam pattern.",

  simpleExplanation:
    "Real companies do not ask you to pay money to get hired.",

  recommendations: [
    "Do not send money",
    "Verify the company",
    "Block the sender",
  ],
};

export const lotteryResult = {
  detectedLanguage: "English",
  isRelevant: true,
  relevanceReason: "",
  riskScore: 90,
  riskLevel: "Critical",
  confidence: 99,
  category: "Lottery Scam",
  legitimacyAssessment: "NOT LEGITIMATE.",

  threatIndicators: [
    "Unexpected prize",
    "Claim deadline pressure",
    "Suspicious link",
  ],

  explanation:
    "The message falsely claims the recipient has won a large reward.",

  simpleExplanation:
    "Nobody gives away huge prizes to random strangers.",

  recommendations: [
    "Ignore the message",
    "Do not share personal details",
    "Report as spam",
  ],
};
export const deliveryResult = {
  detectedLanguage: "English",
  isRelevant: true,
  relevanceReason: "",

  riskScore: 82,
  riskLevel: "High",
  confidence: 96,
  category: "Delivery Scam",
  legitimacyAssessment: "NOT LEGITIMATE.",

  threatIndicators: [
    "Fake delivery notification",
    "Suspicious tracking link",
    "Urgent action required",
  ],

  explanation:
    "The message impersonates a delivery service and attempts to lure users to a fraudulent website.",

  simpleExplanation:
    "This pretends to be a package delivery update but is trying to get you to click a dangerous link.",

  recommendations: [
    "Do not click the tracking link",
    "Verify with the real delivery company",
    "Delete the message",
  ],
};