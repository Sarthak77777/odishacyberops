export type ThreatMetric = {
  id: string;
  label: string;
  value: string;
  detail: string;
  trend: string;
};

export type AdvisoryCard = {
  title: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  category: string;
  vendors: string[];
  status: string;
  mitigation: string;
  references: string[];
  attackChain: string[];
};

export type IncidentPlaybook = {
  title: string;
  level: string;
  summary: string;
  steps: string[];
};

export type ThreatActor = {
  name: string;
  aliases: string[];
  region: string;
  tactics: string[];
  sectors: string[];
  recentCampaign: string;
  iocs: string[];
};

export type AwarenessCard = {
  title: string;
  description: string;
  action: string;
  language: "en" | "or";
};

export type EmergencyResource = {
  label: string;
  description: string;
  link: string;
  icon: string;
};

export type ThreatTickerItem = {
  message: string;
  category: string;
  href: string;
};

export const liveMetrics: ThreatMetric[] = [
  {
    id: "active-threats",
    label: "Active threats tracked",
    value: "162",
    detail: "Focused on Odisha and India-facing campaigns",
    trend: "+12% week",
  },
  {
    id: "critical-advisories",
    label: "Critical advisories",
    value: "24",
    detail: "Vendor and CERT-In alerts prioritized",
    trend: "+6% week",
  },
  {
    id: "ransomware-campaigns",
    label: "Ransomware campaigns",
    value: "18",
    detail: "Ongoing threat actor activity monitored",
    trend: "Stable",
  },
  {
    id: "threat-actors",
    label: "Threat actors monitored",
    value: "42",
    detail: "APT and criminal groups under watch",
    trend: "+3% month",
  },
  {
    id: "ioc-feeds",
    label: "IOC feeds processed",
    value: "8,400+",
    detail: "Cross-correlated across open and private sources",
    trend: "+21% week",
  },
];

export const quickActions = [
  {
    label: "Report Cyber Fraud",
    href: "/contacts",
  },
  {
    label: "IOC Analysis",
    href: "/intel",
  },
  {
    label: "Phishing Investigation",
    href: "/contacts",
  },
  {
    label: "Malware Triage",
    href: "/intel",
  },
  {
    label: "Contact Analyst",
    href: "/contacts",
  },
  {
    label: "Emergency Response Guidance",
    href: "/contacts",
  },
];

export const advisoryBanners: ThreatTickerItem[] = [
  {
    message: "CERT-In advisory: active phishing clusters targeting Odisha financial institutions.",
    category: "Phishing",
    href: "/advisories",
  },
  {
    message: "Microsoft Exchange exploitation alerts updated with new detection signatures.",
    category: "Detection",
    href: "/detection",
  },
  {
    message: "CISA KEV list includes critical kernel privilege escalation vulnerabilities.",
    category: "KEV",
    href: "/cves",
  },
  {
    message: "Palo Alto Unit 42 highlights new Linux supply chain campaign.",
    category: "Threat research",
    href: "/threat-tracker",
  },
];

export const recentCves = [
  {
    id: "CVE-2025-4501",
    title: "Windows Print Spooler Elevation of Privilege",
    score: "9.8",
    status: "Active exploitation",
    products: ["Microsoft Windows Server", "Windows 11"],
  },
  {
    id: "CVE-2025-3721",
    title: "Apache HTTP Server Remote Code Execution",
    score: "9.6",
    status: "KEV listed",
    products: ["Apache HTTP Server"],
  },
  {
    id: "CVE-2025-5192",
    title: "Linux Kernel Memory Corruption",
    score: "8.9",
    status: "Exploit proof-of-concept",
    products: ["Linux Kernel"],
  },
];

export const exploitationAlerts = [
  {
    title: "Public-facing VPN appliances under active probing",
    severity: "Critical",
    target: "Remote access infrastructure",
    action: "Restrict management access, patch edge devices, and review successful VPN logins.",
  },
  {
    title: "Credential phishing against Microsoft 365 tenants",
    severity: "High",
    target: "Cloud identity",
    action: "Enforce MFA, revoke suspicious sessions, and review risky sign-ins.",
  },
  {
    title: "Ransomware affiliates abusing exposed RDP",
    severity: "High",
    target: "Windows servers",
    action: "Disable public RDP, require VPN access, and monitor brute-force attempts.",
  },
];

export const emergencyContacts: EmergencyResource[] = [
  {
    label: "CERT-In Emergency Desk",
    description: "Report national cyber incidents and request coordination.",
    link: "https://www.cert-in.org.in",
    icon: "shield-alert",
  },
  {
    label: "National Cyber Crime Portal",
    description: "File phishing, fraud, ransomware, and UPI scam complaints.",
    link: "https://cybercrime.gov.in",
    icon: "shield-check",
  },
  {
    label: "Odisha Cyber Crime Cell",
    description: "Local incident triage and law enforcement liaison.",
    link: "https://www.odishapolice.gov.in",
    icon: "map-pin",
  },
  {
    label: "Preserve Evidence Checklist",
    description: "Secure devices, network logs, and account snapshots.",
    link: "/resources/checklist.pdf",
    icon: "archive",
  },
];

export const threatActors: ThreatActor[] = [
  {
    name: "Nightshade Collective",
    aliases: ["Night Hawk", "Black Lotus"],
    region: "South Asia",
    tactics: ["Phishing", "Credential Theft", "Ransomware"],
    sectors: ["Finance", "Manufacturing", "Healthcare"],
    recentCampaign: "Banking sector credential harvest across Odisha.",
    iocs: ["192.168.1.23", "malicious-domain[.]in", "5d1c3f..."],
  },
  {
    name: "Saffron Hydra",
    aliases: ["APT45", "Saffron Broker"],
    region: "India-focused targeting",
    tactics: ["Supply Chain", "Web Shell", "Data Exfiltration"],
    sectors: ["Energy", "Government", "Telecom"],
    recentCampaign: "Web shell deployment against regional utility provider.",
    iocs: ["hxxp://secure-update[.]in", "md5:3f2e9a..."],
  },
];

export const awarenessCards: AwarenessCard[] = [
  {
    title: "UPI Fraud Awareness",
    description: "Learn how UPI scams trick users with fake payment requests and fraud apps.",
    action: "Verify before sending money.",
    language: "en",
  },
  {
    title: "ଫେକ୍ ଲୋନ୍ ଆପ୍ସ ପ୍ରତି ସଚେତନତା",
    description: "ଏହି ଲୋନ୍ ଆପ୍ସ ତଥା ଗୋପନୀୟତା ପ୍ରଶ୍ନକୁ ନଜର ଦିଅନ୍ତୁ ।",
    action: "ନିଜ ବ୍ୟାଙ୍କ ଅପ୍ଲିକେସନ୍ ବ୍ୟବହାର କରନ୍ତୁ ।",
    language: "or",
  },
  {
    title: "Phishing Detection",
    description: "Spot suspicious links, typos, and urgent payment demands in emails.",
    action: "Report phishing to your SOC.",
    language: "en",
  },
];

export const advisories: AdvisoryCard[] = [
  {
    title: "Linux SSH RCE via third-party VPN appliance",
    severity: "Critical",
    category: "Linux Threats",
    vendors: ["Fortinet", "Ubuntu"],
    status: "Active exploitation",
    mitigation: "Apply vendor patches and restrict SSH from untrusted networks.",
    references: ["https://unit42.paloaltonetworks.com", "https://cisa.gov/kev"],
    attackChain: ["Initial Access", "Lateral Movement", "Data Exfiltration"],
  },
  {
    title: "Microsoft O365 phishing campaign targeting state agencies",
    severity: "High",
    category: "Cloud Threats",
    vendors: ["Microsoft"],
    status: "Credential theft",
    mitigation: "Enable MFA, block malicious senders, and train personnel.",
    references: ["https://portal.msrc.microsoft.com", "https://cert-in.org.in"],
    attackChain: ["Execution", "Persistence", "Credential Access"],
  },
];

export const detectionRules = [
  {
    name: "Suspicious PowerShell Child Process",
    type: "Sigma",
    description:
      "Detect PowerShell spawning cmd.exe or wscript.exe with obfuscated command-line arguments.",
    query: `title: Suspicious PowerShell Child Process\ndetection:\n  selection:\n    EventID: 4688\n    NewProcessName|contains: ['cmd.exe','wscript.exe']\n  condition: selection\n`,
  },
  {
    name: "Linux SSH Brute Force",
    type: "YARA",
    description:
      "Identify repeated SSH login attempts from unusual source IPs.",
    query: `rule odisha_ssh_bruteforce {\n  meta: \n    author = "ODISACYBEROPS"\n    description = "SSH brute force pattern through public keys"\n  strings: \n    $x = /Failed password for .* from/\n  condition: \n    $x at least 5 in 1m\n}`,
  },
];

export const incidentPlaybooks: IncidentPlaybook[] = [
  {
    title: "Ransomware Response",
    level: "Critical",
    summary: "Contain, preserve evidence, and activate recovery workflows.",
    steps: [
      "Isolate infected systems from the network.",
      "Preserve volatile evidence and backup logs.",
      "Validate restore points and check backups.",
      "Notify stakeholders and law enforcement.",
    ],
  },
  {
    title: "Phishing Compromise",
    level: "High",
    summary: "Disconnect impacted accounts and verify lateral movement.",
    steps: [
      "Reset affected credentials and revoke sessions.",
      "Monitor related accounts for abnormal access.",
      "Malware scan endpoints and mailboxes.",
      "Update detection rules for the phishing indicators.",
    ],
  },
];

export const threatMapPoints = [
  { name: "Mumbai", count: 52, coords: [72.8777, 19.07598] },
  { name: "Bengaluru", count: 34, coords: [77.5946, 12.9716] },
  { name: "Odisha", count: 21, coords: [85.0985, 20.9517] },
  { name: "Chennai", count: 18, coords: [80.2707, 13.0827] },
  { name: "Singapore", count: 42, coords: [103.8198, 1.3521] },
];

export const radarSeries = [
  { name: "Exploit Activity", value: [80, 65, 90, 70, 55, 75] },
  { name: "KEV Pressure", value: [70, 58, 82, 60, 48, 68] },
];

export const attackTrend = [
  { day: "Mon", incidents: 38 },
  { day: "Tue", incidents: 44 },
  { day: "Wed", incidents: 53 },
  { day: "Thu", incidents: 47 },
  { day: "Fri", incidents: 59 },
  { day: "Sat", incidents: 50 },
  { day: "Sun", incidents: 42 },
];
