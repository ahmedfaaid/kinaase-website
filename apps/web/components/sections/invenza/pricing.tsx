import { Check } from 'lucide-react';
import { invenzaUrl } from '../../../lib/constants';
import CtaBtn from './cta-btn';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: 'per month',
    description: 'Perfect for very small warehouses just getting started',
    features: [
      'Up to 500 products',
      'Up to 3 team members',
      'Basic order tracking',
      'Email support',
      'Mobile app access'
    ],
    buttonText: 'Get Started',
    isPopular: false
  },
  {
    name: 'Professional',
    price: '$49',
    period: 'per month',
    description: 'Ideal for growing small warehouse businesses',
    features: [
      'Up to 2,000 products',
      'Up to 10 team members',
      'Advanced order tracking',
      'Email & chat support',
      'Mobile app access',
      'Analytics dashboard',
      'API access'
    ],
    buttonText: 'Get Started',
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'per month',
    description: 'For established warehouses with higher volume needs',
    features: [
      'Unlimited products',
      'Unlimited team members',
      'Advanced order tracking',
      'Priority support',
      'Mobile app access',
      'Advanced analytics',
      'API access',
      'Custom integrations',
      'Dedicated account manager'
    ],
    buttonText: 'Contact Sales',
    isPopular: false
  }
];

export default function Pricing() {
  return (
    <section id='pricing' className='py-20'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold font-display mb-4'>
            Affordable pricing for every warehouse
          </h2>
          <p className='text-lg text-gray-600'>
            Choose the plan that works best for your business needs and budget.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-primary-50 to-white border-2 border-primary-200 shadow-lg transform md:-translate-y-4'
                  : 'bg-white border border-gray-200 hover:shadow-md'
              }`}
            >
              {plan.isPopular && (
                <span className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full'>
                  Most Popular
                </span>
              )}

              <h3 className='text-xl font-bold mb-2'>{plan.name}</h3>
              <div className='flex items-baseline mb-4'>
                <span className='text-4xl font-display font-bold'>
                  {plan.price}
                </span>
                <span className='text-gray-500 ml-2'>{plan.period}</span>
              </div>
              <p className='text-gray-600 mb-6'>{plan.description}</p>

              <ul className='space-y-3 mb-8'>
                {plan.features.map((feature, i) => (
                  <li key={i} className='flex items-start'>
                    <Check className='h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5' />
                    <span className='text-gray-600'>{feature}</span>
                  </li>
                ))}
              </ul>

              <CtaBtn
                href={`${invenzaUrl}/register`}
                className={`w-full ${!plan.isPopular && 'bg-white border border-primary-600 text-primary-600 hover:bg-primary-50'}`}
                variant={plan.isPopular ? 'default' : 'outline'}
              >
                {plan.buttonText}
              </CtaBtn>
            </div>
          ))}
        </div>

        <div className='mt-12 text-center text-gray-500'>
          <p>All plans include a 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  );
}
