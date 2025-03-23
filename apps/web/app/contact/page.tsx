'use client';

import ContactInfoForm from '../../components/sections/contact/contact-info-form';
import Map from '../../components/sections/contact/map';
import Hero from '../../components/sections/hero';
import PageTransition from '../../components/ui/PageTransition';

export default function Contact() {
  return (
    <PageTransition>
      <main className='min-h-screen'>
        <Hero
          title="Get in <span class='text-primary-softer'>Touch</span>"
          subtitle='Contact our team to learn more about our services or to discuss how we can help with your specific needs.'
          smallHero={true}
          imageUrl='https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        />

        {/* Contact Information and Form */}
        <ContactInfoForm />

        {/* Map Section */}
        <Map />
      </main>
    </PageTransition>
  );
}
