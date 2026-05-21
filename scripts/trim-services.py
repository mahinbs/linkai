import re

path = r"C:\PRANAV\VS Code\Boostmysites\New Subscribers\dilli - linkai\src\content\ourServices.js"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

content = re.sub(
    r'\n  \{\n    id: 3,\n    title: "Custom Software Development",.*?\n  \},\n  \{\n    id: 4,\n    title: "AI Solutions",',
    '\n  {\n    id: 3,\n    title: "AI software development",',
    content,
    count=1,
    flags=re.DOTALL,
)

content = re.sub(
    r'\n  \{\n    id: 5,\n    title: "Data Science & Analytics",.*?\n  \},\n\];',
    "\n];",
    content,
    count=1,
    flags=re.DOTALL,
)

content = content.replace(
    "Why Choose LinkAI for Artificial Intelligence?",
    "Why Choose LinkAI for AI software development?",
)
content = content.replace(
    "Revolutionize Your Business with AI Solutions",
    "Revolutionize Your Business with AI software development",
)
content = content.replace(
    'desc: "We integrate AI where it matters most : automation, predictions, chatbots, and beyond — customized to optimize your workflows and decisions.",',
    'desc: "We build custom AI software—automation, predictive models, NLP, and computer vision—tailored to optimize your workflows and business decisions.",',
)
content = content.replace(
    'subHeading: "Make your systems smarter — the way you need them.",',
    'subHeading: "Custom AI software built around your business logic.",',
)

content = re.sub(
    r"      ourExpertiseContent: \[\n        \{\n          img: require\(\"../assets/images/services/ai/expertise1\.jpeg\"\),\n          title: \"AI-Powered Chatbots & Virtual Assistants\",\n          list: \[\n            \"AI-driven customer support bots for real-time assistance\.\",\n            \"Voice-enabled AI agents for seamless interactions\.\",\n            \"Chatbots for healthcare, finance, e-commerce, and more\.\",\n          \],\n        \},\n",
    "      ourExpertiseContent: [\n",
    content,
    count=1,
)

chatbots = r"""
  {
    id: 4,
    title: "Chatbots",
    subHeading: "Intelligent conversations that work around the clock.",
    image: require("../assets/images/services/ai1.png"),
    desc: "We design and deploy AI chatbots and virtual assistants that handle support, sales, and internal workflows—integrated with your website, apps, and CRM.",
    serviceDetails: {
      banner: require("../assets/images/services/ai/banner.jpeg"),
      img1: require("../assets/images/services/ai/1.png"),
      img2: require("../assets/images/services/ai/2.jpeg"),
      whyChooseContent: {
        heading: "Why Choose LinkAI for Chatbots?",
        list: [
          {
            title: "Built for Your Use Case",
            desc: "Support bots, lead qualification, appointment booking, and internal assistants—configured for your industry and tone of voice.",
          },
          {
            title: "Omnichannel Deployment",
            desc: "Deploy on websites, mobile apps, WhatsApp, and messaging platforms with a unified knowledge base.",
          },
          {
            title: "Secure and Compliant",
            desc: "Enterprise-grade data handling, access controls, and audit trails for regulated industries.",
          },
          {
            title: "Continuous Improvement",
            desc: "Analytics, conversation review, and model updates keep responses accurate as your business evolves.",
          },
        ],
      },
      ourExpertiseContent: [
        {
          img: require("../assets/images/services/ai/expertise1.jpeg"),
          title: "Customer Support Chatbots",
          list: [
            "24/7 automated responses with seamless human handoff.",
            "FAQ automation, ticket creation, and order status lookups.",
            "Multilingual support for global audiences.",
          ],
        },
        {
          img: require("../assets/images/services/ai/expertise2.jpeg"),
          title: "Sales and Lead Qualification Bots",
          list: [
            "Qualify leads, schedule demos, and capture CRM-ready data.",
            "Product recommendations based on user intent.",
            "Follow-up sequences integrated with your marketing stack.",
          ],
        },
        {
          img: require("../assets/images/services/ai/expertise3.jpeg"),
          title: "Voice and Virtual Assistants",
          list: [
            "Voice-enabled agents for phone and smart devices.",
            "Natural language understanding for complex queries.",
            "Hands-free workflows for field and operations teams.",
          ],
        },
        {
          img: require("../assets/images/services/ai/expertise4.jpeg"),
          title: "Industry-Specific Chatbots",
          list: [
            "Healthcare: appointment scheduling and patient intake.",
            "Finance: account FAQs and secure authentication flows.",
            "E-commerce: cart assistance and post-purchase support.",
          ],
        },
      ],
      developmentProcess: [
        {
          img: require("../assets/images/services/ai/process1.jpeg"),
          title: "Discovery and Conversation Design",
          list: [
            "Map user journeys, intents, and escalation paths.",
            "Define knowledge sources and integration requirements.",
            "Prototype conversation flows and approval workflows.",
          ],
        },
        {
          img: require("../assets/images/services/ai/process2.jpeg"),
          title: "Build, Train and Test",
          list: [
            "Connect to your data, APIs, and business systems.",
            "Train on your content with guardrails and fallback handling.",
            "Test across scenarios, edge cases, and languages.",
          ],
        },
        {
          img: require("../assets/images/services/ai/process3.jpeg"),
          title: "Launch and Optimize",
          list: [
            "Deploy to web, app, and messaging channels.",
            "Monitor conversations, satisfaction, and resolution rates.",
            "Iterate with analytics-driven improvements.",
          ],
        },
      ],
      solutionUseCases: {
        heading: "Transform Engagement with Chatbot Solutions",
        contentArr: [
          {
            title: "Use Case 1: E-Commerce Support",
            list: [
              "Example: Order tracking and returns assistance.",
              "Features: Product search, cart recovery, and promo answers.",
              "Impact: Lower support costs and higher conversion rates.",
            ],
          },
          {
            title: "Use Case 2: Healthcare Front Desk",
            list: [
              "Example: Appointment booking and intake chatbots.",
              "Features: Symptom triage FAQs and provider routing.",
              "Impact: Reduced wait times and staff workload.",
            ],
          },
          {
            title: "Use Case 3: Internal HR and IT Helpdesk",
            list: [
              "Example: Employee self-service for policies and tickets.",
              "Features: PTO requests, password resets, and onboarding.",
              "Impact: Faster resolutions and improved employee experience.",
            ],
          },
        ],
      },
    },
  },
"""

if 'title: "Chatbots"' not in content:
    content = content.replace("\n];", chatbots + "\n];")

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

for t in [
    "Website development",
    "Application development",
    "AI software development",
    "Chatbots",
    "Custom Software",
    "Data Science",
    "Game Development",
    "UI/UX Design",
]:
    print(f"{t}: {content.count(t)}")
print("ids:", re.findall(r"^\s+id: (\d+),", content, re.M))
