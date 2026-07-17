import LegalPage from './LegalPage'

const SECTIONS = [
  {
    heading: '',
    intro:
      'Welcome to the official website of Naturals Thanjavur. By accessing or using this website, you agree to comply with these Terms & Conditions.',
  },
  {
    heading: '1. Acceptance',
    intro: 'By using this website or booking our services, you agree to these Terms & Conditions.',
  },
  {
    heading: '2. Appointment Booking',
    items: [
      'Appointments are subject to availability.',
      'We recommend arriving at least 10 minutes before your scheduled appointment.',
      'Late arrival may result in reduced service time or appointment rescheduling.',
      'Appointment confirmation may be provided through phone, SMS, WhatsApp, or email.',
    ],
  },
  {
    heading: '3. Cancellation & Rescheduling',
    intro:
      'Please inform us as early as possible if you wish to cancel or reschedule your appointment. Repeated last-minute cancellations or no-shows may affect future booking availability.',
  },
  {
    heading: '4. Service Pricing',
    intro:
      'Prices displayed on the website are subject to change without prior notice. Final charges depend on the actual services provided at the salon.',
  },
  {
    heading: '5. Payments',
    intro:
      'Payment can be made using the payment methods accepted at the salon. Applicable taxes will be charged as per government regulations.',
  },
  {
    heading: '6. Promotions & Offers',
    items: [
      'Promotional offers are valid only during the specified period.',
      'Offers cannot be combined unless explicitly mentioned.',
      'Naturals Thanjavur reserves the right to modify or withdraw offers without prior notice.',
    ],
  },
  {
    heading: '7. Health & Safety',
    intro: 'Customers are requested to inform our staff about:',
    items: ['Allergies', 'Skin sensitivities', 'Medical conditions', 'Pregnancy (where applicable)'],
  },
  {
    heading: '',
    intro: 'This helps us recommend suitable treatments.',
  },
  {
    heading: '8. Customer Responsibility',
    intro:
      'Customers are responsible for providing accurate booking information. Naturals Thanjavur shall not be responsible for delays caused by incorrect contact details or missed appointments.',
  },
  {
    heading: '9. Intellectual Property',
    intro: 'All content on this website, including:',
    items: ['Logo', 'Images', 'Graphics', 'Text', 'Design', 'Branding'],
  },
  {
    heading: '',
    intro: 'is the property of Naturals Thanjavur and may not be copied or reproduced without written permission.',
  },
  {
    heading: '10. Limitation of Liability',
    intro: 'While we strive to provide high-quality services, Naturals Thanjavur shall not be liable for:',
    items: [
      'Allergic reactions caused by undisclosed medical conditions',
      'Delays due to unforeseen circumstances',
      'Temporary website interruptions',
      'Third-party service failures',
    ],
  },
  {
    heading: '11. Website Usage',
    intro: 'Users agree not to:',
    items: ['Misuse the website', 'Attempt unauthorized access', 'Upload malicious software', 'Interfere with website functionality'],
  },
  {
    heading: '12. Governing Law',
    intro:
      'These Terms & Conditions shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Thanjavur, Tamil Nadu.',
  },
]

export default function TermsConditions() {
  return <LegalPage title="Terms & Conditions" effectiveDate="17 July 2026" sections={SECTIONS} />
}
