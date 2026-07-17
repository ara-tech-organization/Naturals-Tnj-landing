import LegalPage from './LegalPage'

const SECTIONS = [
  {
    heading: '1. Information We Collect',
    intro: 'When you use our website or book an appointment, we may collect:',
    items: [
      'Full Name',
      'Mobile Number',
      'Email Address (if provided)',
      'Appointment Date & Time',
      'Preferred Service',
      'Branch Details',
      'Messages or Special Requests',
      'IP Address and Browser Information',
      'Website Usage Data through Cookies',
    ],
  },
  {
    heading: '2. How We Use Your Information',
    intro: 'We use your information to:',
    items: [
      'Schedule and manage appointments',
      'Contact you regarding your booking',
      'Respond to enquiries',
      'Improve our website and services',
      'Send appointment confirmations and reminders',
      'Share promotional offers (only where permitted)',
    ],
  },
  {
    heading: '3. Information Sharing',
    intro: 'We do not sell or rent your personal information. Your information may be shared only with:',
    items: [
      'Our authorized salon staff',
      'Technology providers who help operate our website or booking system',
      'Government authorities when required by law',
    ],
  },
  {
    heading: '4. Cookies',
    intro: 'Our website may use cookies to:',
    items: [
      'Improve website performance',
      'Remember user preferences',
      'Analyse visitor traffic',
      'Enhance user experience',
    ],
  },
  {
    heading: '',
    intro:
      'You may disable cookies through your browser settings, although some features may not function properly.',
  },
  {
    heading: '5. Data Security',
    intro:
      'We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, misuse, alteration, or disclosure. However, no method of internet transmission or electronic storage is completely secure.',
  },
  {
    heading: '6. Third-Party Services',
    intro:
      'Our website may contain links to third-party websites or booking platforms. We are not responsible for the privacy practices or content of those third-party services.',
  },
  {
    heading: '7. Your Rights',
    intro: 'You may request to:',
    items: [
      'Access your personal information',
      'Correct inaccurate information',
      'Delete your personal data where legally permitted',
      'Withdraw consent for promotional communications',
    ],
  },
  {
    heading: "8. Children's Privacy",
    intro: 'Our website is not intended for children under the age of 18 without parental or guardian supervision.',
  },
  {
    heading: '9. Changes to this Policy',
    intro: 'We may update this Privacy Policy periodically. The latest version will always be available on this page.',
  },
]

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="17 July 2026"
      sections={[
        {
          heading: '',
          intro:
            'Welcome to Naturals Thanjavur ("we", "our", "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website or use our services.',
        },
        ...SECTIONS,
      ]}
    />
  )
}
