# -*- coding: utf-8 -*-
path = r"C:\PRANAV\VS Code\Boostmysites\New Subscribers\dilli - linkai\src\content\ourServices.js"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()

replacements = [
    (
        'subHeading: "Custom sites. Seamless experiences. Built around your brand.",',
        'subHeading: "Fast, secure websites that turn visitors into customers.",',
    ),
    (
        'desc: "From sleek landing pages to powerful e-commerce platforms, we build websites that load fast, look great, and convert — all aligned with your vision.",',
        'desc: "Marketing sites, e-commerce stores, and custom web apps—built with modern frameworks, tuned for SEO, and integrated with the tools you already use.",',
    ),
    (
        'heading: "Why Choose LinkAI for Website development?",',
        'heading: "Why LinkAI for Website Development?",',
    ),
    (
        'title: "Future-Ready Solutions",\n            desc: "We integrate the latest technologies, including React, Vue.js, Angular, Next.js, and WebAssembly, ensuring your web applications are scalable, secure, and future-proof.",',
        'title: "Modern, Proven Stack",\n            desc: "React, Next.js, and headless CMS options chosen for performance, maintainability, and long-term support.",',
    ),
    (
        'title: "Tailored to Your Vision",\n            desc: "Our client-first approach ensures your website reflects your brand identity while achieving your business objectives.",',
        'title: "Brand-Aligned Design",\n            desc: "Layouts, content structure, and interactions shaped around your audience and conversion goals.",',
    ),
    (
        'title: "Seamless Performance",\n            desc: "We prioritize fast load times, mobile responsiveness, and bug-free functionality to enhance user satisfaction.",',
        'title: "Speed and Reliability",\n            desc: "Core Web Vitals, responsive layouts, and QA across browsers and devices before launch.",',
    ),
    (
        'title: "End-to-End Support",\n            desc: "From concept to launch and beyond, our comprehensive support ensures your web application remains high-performing and up-to-date.",',
        'title: "Launch and Beyond",\n            desc: "Deployment, analytics, training, and ongoing maintenance so your site stays secure and current.",',
    ),
    (
        'title: "Progressive Web Apps (PWAs)",\n          list: [\n            "Secure payment gateways, AI-driven recommendations, and AR-powered shopping experiences",\n            "Technologies include Shopify, WooCommerce, and Magento.",',
        'title: "Progressive Web Apps (PWAs)",\n          list: [\n            "App-like experience in the browser with offline support and push notifications.",\n            "Ideal when you want reach without forcing an app store download.",',
    ),
    (
        'heading: "Revolutionize Your Business with Website development Solutions",',
        'heading: "Real-World Website Outcomes",',
    ),
    (
        'subHeading: "Apps that move with your users — and your goals.",',
        'subHeading: "Native and cross-platform apps people actually keep using.",',
    ),
    (
        'desc: "Whether Android or iOS, we create intuitive, feature-rich mobile apps tailored to your business logic, user flow, and long-term growth.",',
        'desc: "iOS, Android, and cross-platform builds with solid UX, secure APIs, and release support—from MVP to scale.",',
    ),
    (
        'heading: "Why Choose LinkAI for Application development?",',
        'heading: "Why LinkAI for Application Development?",',
    ),
    (
        'image: require("../assets/images/services/ai/expertise2.jpeg"),\n    desc: "We design and deploy',
        'image: require("../assets/images/services/ai1.png"),\n    desc: "We design and deploy',
    ),
    (
        'subHeading: "Custom AI software built around your business logic.",',
        'subHeading: "Practical AI that automates work and improves decisions.",',
    ),
    (
        'desc: "We build custom AI software—automation, predictive models, NLP, and computer vision—tailored to optimize your workflows and business decisions.",',
        'desc: "Custom models and integrations for forecasting, document processing, vision, and workflow automation—deployed where your team already works.",',
    ),
    (
        'heading: "Revolutionize Your Business with AI software development",',
        'heading: "Where AI Software Creates Value",',
    ),
    (
        'subHeading: "Intelligent conversations that work around the clock.",',
        'subHeading: "Always-on assistants for support, sales, and operations.",',
    ),
    (
        'desc: "We design and deploy AI chatbots and virtual assistants that handle support, sales, and internal workflows—integrated with your website, apps, and CRM.",',
        'desc: "AI chatbots for your website, app, WhatsApp, and internal teams—trained on your content, connected to your systems, and improved with real conversation data.",',
    ),
    (
        'heading: "Transform Engagement with Chatbot Solutions",',
        'heading: "Chatbots in Action",',
    ),
]

for old, new in replacements:
    if old not in c:
        print("MISSING:", old[:60])
    else:
        c = c.replace(old, new, 1)

# Replace app expertise block (trim to 6 focused items)
start = c.find('      ourExpertiseContent: [\n        {\n          img: require("../assets/images/services/app-dev/expertise1.jpeg")')
end = c.find('      ],\n      developmentProcess: [\n        {\n          img: require("../assets/images/services/app-dev/process1.jpeg")')
if start != -1 and end != -1:
    new_block = '''      ourExpertiseContent: [
        {
          img: require("../assets/images/services/app-dev/expertise1.jpeg"),
          title: "Native iOS and Android",
          list: [
            "Platform-optimized performance with Swift, Kotlin, and native SDKs.",
            "Full access to device features: camera, biometrics, push, and offline storage.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/expertise2.jpeg"),
          title: "Cross-Platform Apps",
          list: [
            "Single codebase with Flutter or React Native for faster delivery.",
            "Consistent UX across iOS and Android without doubling effort.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/expertise3.jpeg"),
          title: "Progressive Web Apps",
          list: [
            "Installable web experiences with offline support and notifications.",
            "Lower friction for users who prefer not to visit the app store.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/expertise4.png"),
          title: "AI-Enabled Features",
          list: [
            "On-device or cloud AI for recommendations, search, and automation.",
            "Integrate with models you host or third-party AI APIs.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/expertise10.jpeg"),
          title: "Industry Apps",
          list: [
            "Real-estate listings, education portals, retail apps, and patient tools.",
            "Compliance-aware flows for regulated sectors when required.",
          ],
        },
        {
          img: require("../assets/images/services/app-dev/expertise13.jpeg"),
          title: "Enterprise Mobility",
          list: [
            "Field apps, internal dashboards, and workflow tools for teams.",
            "SSO, role-based access, and integration with ERP/CRM systems.",
          ],
        },
'''
    c = c[:start] + new_block + c[end:]
    print("App expertise trimmed")
else:
    print("App expertise block not found")

c = c.replace(
    'title: "End-to-End Support",\n            desc: "We\u2019re with you at every step, offering development, deployment, and post-launch maintenance to ensure your app thrives in the long term.",',
    'title: "Store-Ready Delivery",\n            desc: "Build, test, submit, and maintain\u2014plus analytics to guide what you ship next.",',
    1,
)

with open(path, "w", encoding="utf-8") as f:
    f.write(c)
print("Done")
