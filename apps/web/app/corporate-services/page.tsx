'use client';

import BusinessAvisory from '../../components/sections/corporate-services/business-advisory';
import BusinessRegistrationIncorporation from '../../components/sections/corporate-services/business-registration-incorporation';
import CompanySecretarial from '../../components/sections/corporate-services/company-secretarial';
import CorporateCta from '../../components/sections/corporate-services/corporate-cta';
import RegulatoryCompliance from '../../components/sections/corporate-services/regulatory-compliance';
import Services from '../../components/sections/corporate-services/services';
import TaxAccountingSupport from '../../components/sections/corporate-services/tax-accounting-support';
import WorkResidencyPermits from '../../components/sections/corporate-services/work-residency-permits';
import Hero from '../../components/sections/hero';
import PageTransition from '../../components/ui/PageTransition';

export default function CorporateServices() {
  return (
    <PageTransition>
      <main className='min-h-screen'>
        <Hero
          title="Corporate <span class='text-primary-softer'>Services</span>"
          subtitle='Establish effective governance structures, develop robust corporate frameworks, and enhance board effectiveness with our comprehensive corporate services.'
          smallHero={true}
          imageUrl='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        />

        {/* Services Overview */}
        <Services />

        {/* Business Registration & Incorporation */}
        <BusinessRegistrationIncorporation />

        {/* Tax Accounting & Support */}
        <TaxAccountingSupport />

        {/* Work & Residency Permits */}
        <WorkResidencyPermits />

        {/* Corporate Compliance */}
        <RegulatoryCompliance />

        {/* Company Secretarial */}
        <CompanySecretarial />

        {/* Business Advisory */}
        <BusinessAvisory />

        {/* CTA Section */}
        <CorporateCta />
      </main>
    </PageTransition>
  );
}
