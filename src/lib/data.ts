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
  id: string;
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

export type CyberStory = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readingTime: string;
  category: string;
  backgroundImage: string;
  summary: string;
  story: string[];
  lessons: string[];
  references: Array<{
    label: string;
    url: string;
  }>;
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

export const cyberStories: CyberStory[] = [
  {
    id: "phishing-email-trap",
    title: "ଇମେଲ୍ ଜାଲରେ ଫସିଥିବା କାର୍ଯ୍ୟାଳୟ",
    subtitle: "ଏକ ଫିଶିଂ ଇମେଲ୍ କିପରି ଏକ ସଂସ୍ଥାର ଆକାଉଣ୍ଟକୁ ବିପଦରେ ପକାଇଲା",
    date: "2026-05-16",
    readingTime: "୬ ମିନିଟ୍",
    category: "Phishing",
    backgroundImage: "/stories/phishing-email-trap.svg",
    summary:
      "ଏହି କାହାଣୀଟି ବାସ୍ତବ ଜଗତର Microsoft 365 ଫିଶିଂ ଓ କ୍ରେଡେନ୍ସିଆଲ୍ ଚୋରି ଘଟଣାରୁ ପ୍ରେରିତ।",
    story: [
      "ସୋମବାର ସକାଳେ ଏକ ସରକାରୀ କାର୍ଯ୍ୟାଳୟର ଜଣେ କର୍ମଚାରୀଙ୍କ ପାଖକୁ ‘ଦରମା ତଥ୍ୟ ଅଦ୍ୟତନ’ ନାମରେ ଏକ ଇମେଲ୍ ଆସିଲା। ଇମେଲ୍ଟି ଦେଖିବାକୁ ଖୁବ ସାଧାରଣ ଲାଗୁଥିଲା, କିନ୍ତୁ ଲିଙ୍କଟି ଆସଲେ ଏକ ନକଲି ଲଗଇନ୍ ପେଜକୁ ନେଉଥିଲା।",
      "କିଛି ମିନିଟ୍ ମଧ୍ୟରେ ଆକ୍ରମଣକାରୀ ଆକାଉଣ୍ଟରେ ପ୍ରବେଶ କରି ମେଲ୍ ଫରୱାର୍ଡିଂ ନିୟମ ସୃଷ୍ଟି କଲା। ପରେ ସେହି ଆକାଉଣ୍ଟରୁ ଅନ୍ୟ କର୍ମଚାରୀଙ୍କୁ ମଧ୍ୟ ଏହି ପ୍ରକାର ଇମେଲ୍ ପଠାଯାଇଲା।",
      "SOC ଟିମ୍ ଅସାମାନ୍ୟ ଲଗଇନ୍, ନୂଆ ଇନବକ୍ସ ରୁଲ୍ ଓ ଅଜଣା IP ଚିହ୍ନଟ କରି ଆକାଉଣ୍ଟକୁ ତୁରନ୍ତ ବନ୍ଦ କଲା। ଘଟଣାଟି ଦେଖାଇଦେଲା ଯେ ଏକ ଲିଙ୍କ୍ ଉପରେ ଅତି ତ୍ୱରାନ୍ୱିତ କ୍ଲିକ୍ ସମଗ୍ର ସଂସ୍ଥାକୁ ବିପଦରେ ପକାଇପାରେ।",
    ],
    lessons: [
      "ଲିଙ୍କ୍ କ୍ଲିକ୍ କରିବା ପୂର୍ବରୁ ଡୋମେନ୍ ଯାଞ୍ଚ କରନ୍ତୁ।",
      "MFA ସକ୍ରିୟ କରନ୍ତୁ ଏବଂ ସନ୍ଦେହଜନକ ସେସନ୍ ବନ୍ଦ କରନ୍ତୁ।",
      "ଇନବକ୍ସ ଫରୱାର୍ଡିଂ ରୁଲ୍ ନିୟମିତ ଯାଞ୍ଚ କରନ୍ତୁ।",
    ],
    references: [
      {
        label: "Microsoft Security Blog - Phishing and identity protection",
        url: "https://www.microsoft.com/en-us/security/blog/",
      },
      {
        label: "CISA - Avoiding Social Engineering and Phishing Attacks",
        url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks",
      },
    ],
  },
  {
    id: "ransomware-night-shift",
    title: "ରାତିରେ ଆସିଥିବା ରାନସମୱେର",
    subtitle: "ବ୍ୟାକଅପ୍, ଲଗ୍ ଓ ତୁରନ୍ତ ପ୍ରତିକ୍ରିୟା କିପରି ଏକ ବଡ଼ କ୍ଷତିକୁ ରୋକିଲା",
    date: "2026-05-16",
    readingTime: "୭ ମିନିଟ୍",
    category: "Ransomware",
    backgroundImage: "/stories/ransomware-night-shift.svg",
    summary:
      "ଏହି କାହାଣୀଟି ବିଭିନ୍ନ ବାସ୍ତବ ରାନସମୱେର ଘଟଣାର ସାଧାରଣ ପ୍ୟାଟର୍ନ ଉପରେ ଆଧାରିତ।",
    story: [
      "ରାତି ୨ଟାରେ ମନିଟରିଂ ସିଷ୍ଟମ୍ ହଠାତ୍ ଅଧିକ ଫାଇଲ୍ ପରିବର୍ତ୍ତନ ଓ ଅସାମାନ୍ୟ PowerShell କମାଣ୍ଡ ଦେଖାଇଲା। କିଛି ସର୍ଭରରେ ଫାଇଲ୍ ଏକ୍ସଟେନ୍ସନ୍ ବଦଳିଯାଉଥିଲା।",
      "ଡ୍ୟୁଟି ଆନାଲିଷ୍ଟ୍ ତୁରନ୍ତ ପ୍ରଭାବିତ ସବନେଟ୍ ଅଲଗା କଲେ, ଆଡମିନ୍ ଆକାଉଣ୍ଟର ସେସନ୍ ବନ୍ଦ କଲେ ଏବଂ EDR ଟୁଲ୍ ଦ୍ୱାରା ସନ୍ଦେହଜନକ ପ୍ରୋସେସ୍ କିଲ୍ କଲେ।",
      "ପରବର୍ତ୍ତୀ ସକାଳେ ଟିମ୍ ବୁଝିଲା ଯେ ପୁରୁଣା RDP ଏକ୍ସପୋଜର୍ ଦ୍ୱାରା ଆକ୍ରମଣ ଆରମ୍ଭ ହୋଇଥିଲା। ଭଲ ବ୍ୟାକଅପ୍ ଓ ଦ୍ରୁତ ପ୍ରତିକ୍ରିୟା ଥିବାରୁ ସଂସ୍ଥା ପୁନରୁଦ୍ଧାର ହୋଇପାରିଲା।",
    ],
    lessons: [
      "RDP କୁ ସିଧାସଳଖ ଇଣ୍ଟରନେଟ୍ ଉପରେ ଖୋଲା ରଖନ୍ତୁ ନାହିଁ।",
      "ବ୍ୟାକଅପ୍ ରିଷ୍ଟୋର୍ ଟେଷ୍ଟ୍ ନିୟମିତ କରନ୍ତୁ।",
      "ଅସାମାନ୍ୟ ଫାଇଲ୍ ପରିବର୍ତ୍ତନ ଓ ସ୍କ୍ରିପ୍ଟିଂ କାର୍ଯ୍ୟକଳାପ ଉପରେ ଆଲର୍ଟ୍ ରଖନ୍ତୁ।",
    ],
    references: [
      {
        label: "CISA StopRansomware",
        url: "https://www.cisa.gov/stopransomware",
      },
      {
        label: "No More Ransom",
        url: "https://www.nomoreransom.org/",
      },
    ],
  },
  {
    id: "loan-app-digital-trap",
    title: "ଲୋନ୍ ଆପ୍‌ର ଡିଜିଟାଲ୍ ଫାନ୍ଦ",
    subtitle: "ଅନୁମତି, କନ୍ଟାକ୍ଟ ଲିଷ୍ଟ୍ ଓ ଭୟ ଦେଖାଇ ଠକେଇ କିପରି ହୁଏ",
    date: "2026-05-16",
    readingTime: "୫ ମିନିଟ୍",
    category: "Cyber Awareness",
    backgroundImage: "/stories/loan-app-digital-trap.svg",
    summary:
      "ଏହି କାହାଣୀଟି ଭାରତରେ ଦେଖାଯାଇଥିବା ଅନଧିକୃତ ଲୋନ୍ ଆପ୍ ଓ ଡିଜିଟାଲ୍ ହାରାସମେଣ୍ଟ୍ ପ୍ୟାଟର୍ନରୁ ପ୍ରେରିତ।",
    story: [
      "ଜଣେ ଯୁବକ ଆପତ୍କାଳୀନ ଟଙ୍କା ପାଇଁ ଏକ ଅଜଣା ଲୋନ୍ ଆପ୍ ଇନଷ୍ଟଲ୍ କଲେ। ଆପ୍ଟି କନ୍ଟାକ୍ଟ, ଫଟୋ, SMS ଓ ଫାଇଲ୍ ଆକ୍ସେସ୍ ଚାହିଲା।",
      "କିଛି ଦିନ ପରେ ଠକମାନେ ଅଧିକ ଟଙ୍କା ଦାବି କରି ପରିବାର ଓ ସଙ୍ଗମାନଙ୍କୁ ମେସେଜ୍ କରିବାକୁ ଧମକ ଦେଲେ। ଡିଜିଟାଲ୍ ଚାପ ଓ ଲଜ୍ଜାର ଭୟରେ ଭୋଗୀ ପୁନଃପୁନି ଟଙ୍କା ପଠାଇଲେ।",
      "ସାଇବର୍ ହେଲ୍ପଲାଇନ୍‌ରେ ଅଭିଯୋଗ ପରେ ଆକାଉଣ୍ଟ ଟ୍ରେଲ୍ ସଂଗ୍ରହ ହେଲା, ଆପ୍ ଅନଇନଷ୍ଟଲ୍ ହେଲା ଓ ଅନୁମତିଗୁଡିକ ବନ୍ଦ କରାଗଲା। ଏହା ଦେଖାଇଦେଲା ଯେ ସହଜ ଲୋନ୍ ଅଫର୍ ସବୁବେଳେ ସୁରକ୍ଷିତ ନୁହେଁ।",
    ],
    lessons: [
      "ଅଜଣା ଲୋନ୍ ଆପ୍‌କୁ କନ୍ଟାକ୍ଟ, ଫଟୋ, SMS ଆକ୍ସେସ୍ ଦିଅନ୍ତୁ ନାହିଁ।",
      "ଠକେଇ ହେଲେ 1930 କିମ୍ବା cybercrime.gov.in ରେ ଅଭିଯୋଗ କରନ୍ତୁ।",
      "କେବଳ ନିୟମିତ ବ୍ୟାଙ୍କ/NBFC ଆପ୍ ବ୍ୟବହାର କରନ୍ତୁ।",
    ],
    references: [
      {
        label: "National Cyber Crime Portal",
        url: "https://cybercrime.gov.in",
      },
      {
        label: "RBI Sachet Portal",
        url: "https://sachet.rbi.org.in",
      },
    ],
  },
];

export const recentCves = [
 {
    id: "CVE-2026-3055",
    title: "Citrix NetScaler Memory Overread (CitrixBleed 3)",
    score: "9.4",
    status: "Active exploitation",
    products: ["Citrix NetScaler ADC", "NetScaler Gateway"],
    link: "https://nvd.nist.gov/vuln/detail/CVE-2026-3055",
    vendor: "Citrix",
    kev: true,
  },
  {
    id: "CVE-2026-35616",
    title: "Fortinet FortiClient EMS Improper Access Control",
    score: "9.8",
    status: "KEV listed",
    products: ["FortiClient EMS 7.4.x"],
    link: "https://nvd.nist.gov/vuln/detail/CVE-2026-35616",
    vendor: "Fortinet",
    kev: true,
  },
  {
    id: "CVE-2026-34197",
    title: "Apache ActiveMQ Classic Remote Code Execution",
    score: "9.8",
    status: "Public exploit available",
    products: ["Apache ActiveMQ Classic"],
    link: "https://nvd.nist.gov/vuln/detail/CVE-2026-34197",
    vendor: "Apache",
    kev: false,
  },
  {
    id: "CVE-2026-5281",
    title: "Google Chrome Dawn Use-After-Free Zero-Day",
    score: "8.8",
    status: "Actively exploited in the wild",
    products: ["Google Chrome", "Chromium-based Browsers"],
    link: "https://nvd.nist.gov/vuln/detail/CVE-2026-5281",
    vendor: "Google",
    kev: false,
  },
  {
    id: "CVE-2026-31431",
    title: "Linux Kernel Copy Fail Privilege Escalation",
    score: "8.5",
    status: "Exploit proof-of-concept",
    products: ["Linux Kernel", "Cloud Linux Environments"],
    link: "https://nvd.nist.gov/vuln/detail/CVE-2026-31431",
    vendor: "Linux Kernel",
    kev: false,
  },
];

export const exploitationAlerts = [
  {
    title: "Ivanti VPN appliances under active exploitation",
    severity: "Critical",
    target: "Remote access infrastructure",
    action:
      "Patch Ivanti appliances immediately, restrict external management access, and hunt for web shell indicators.",
    reference:
      "https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-060a",
  },
  {
    title: "Credential phishing campaigns targeting Microsoft 365 tenants",
    severity: "High",
    target: "Cloud identity and enterprise email",
    action:
      "Enforce phishing-resistant MFA, revoke suspicious sessions, and review risky sign-ins and OAuth app consent grants.",
    reference:
      "https://www.microsoft.com/en-us/security/blog/",
  },
  {
    title: "Ransomware affiliates exploiting exposed RDP services",
    severity: "High",
    target: "Windows servers and enterprise endpoints",
    action:
      "Disable public RDP exposure, enforce VPN-only access, enable account lockout policies, and monitor brute-force activity.",
    reference:
      "https://www.cisa.gov/stopransomware",
  },
  {
    title: "Active exploitation of edge firewall and gateway devices",
    severity: "Critical",
    target: "Perimeter security appliances",
    action:
      "Patch internet-facing devices, review administrative logins, rotate credentials, and validate firmware integrity.",
    reference:
      "https://unit42.paloaltonetworks.com/",
  },
  {
    title: "Infostealer malware campaigns targeting browser credentials",
    severity: "High",
    target: "Corporate workstations and user credentials",
    action:
      "Reset compromised credentials, enable endpoint detection, monitor browser credential theft alerts, and enforce MFA.",
    reference:
      "https://www.crowdstrike.com/en-us/blog/",
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
    id: "upi-fraud-awareness",
    title: "UPI Fraud Awareness",
    description: "Learn how UPI scams trick users with fake payment requests and fraud apps.",
    action: "Verify before sending money.",
    language: "en",
  },
  {
    title: "ଫେକ୍ ଲୋନ୍ ଆପ୍ସ ପ୍ରତି ସଚେତନତା",
    description: "ଏହି ଲୋନ୍ ଆପ୍ସ ତଥା ଗୋପନୀୟତା ପ୍ରଶ୍ନକୁ ନଜର ଦିଅନ୍ତୁ ।",
    action: "ନିଜ ବ୍ୟାଙ୍କ ଅପ୍ଲିକେସନ୍ ବ୍ୟବହାର କରନ୍ତୁ ।",
    id: "fake-loan-apps-odia",
    language: "or",
  },
  {
    id: "phishing-detection",
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

export const globalCyberSignals = [
  {
    id: "cisa-kev",
    source: "CISA KEV",
    origin: "Global exploited vulnerabilities",
    target: "India / Odisha enterprise exposure",
    category: "Known exploited vulnerabilities",
    severity: "Critical",
    volume: 86,
    from: { x: 18, y: 34 },
    to: { x: 71, y: 54 },
    reference: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
    summary: "Confirmed exploitation signals used to prioritize patching for internet-facing systems.",
  },
  {
    id: "cert-in",
    source: "CERT-In",
    origin: "India national advisory stream",
    target: "Odisha public sector and citizens",
    category: "Advisories and fraud awareness",
    severity: "High",
    volume: 72,
    from: { x: 68, y: 53 },
    to: { x: 72, y: 56 },
    reference: "https://www.cert-in.org.in",
    summary: "India-focused advisory and cyber safety signals for regional response and awareness.",
  },
  {
    id: "microsoft-identity",
    source: "Microsoft Threat Intelligence",
    origin: "Global phishing and identity attacks",
    target: "India cloud identity tenants",
    category: "Phishing / AiTM / identity",
    severity: "High",
    volume: 79,
    from: { x: 25, y: 38 },
    to: { x: 71, y: 54 },
    reference: "https://blogs.microsoft.com/on-the-issues/2026/01/14/microsoft-disrupts-cybercrime/",
    summary: "Microsoft reported India among impacted countries in global phishing infrastructure disruption.",
  },
  {
    id: "edge-exposure",
    source: "Vendor and edge-device advisories",
    origin: "Internet-facing exploit activity",
    target: "Indian remote access and perimeter systems",
    category: "VPN / edge appliance exploitation",
    severity: "Critical",
    volume: 68,
    from: { x: 83, y: 41 },
    to: { x: 71, y: 54 },
    reference: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
    summary: "Edge-device exploitation is modeled as a high-priority exposure path for SOC triage.",
  },
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
