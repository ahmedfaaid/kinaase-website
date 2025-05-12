import { Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email,
          subject: data.subject,
          message: {
            text: `From: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
            html: `
              <div>
                <p>From: <strong>${data.name}</strong></p>
                <p>Email: <strong>${data.email}</strong></p>
                <br>
                <p>${data.message}</p>
                <br>
              </div>
            `
          }
        })
      });

      const _result = await response.json();
      if (response.ok) {
        toast.success('Message sent successfully!');
        setIsSubmitting(false);
        reset();
      }
    } catch (_error) {
      toast.error('Failed to send message. Please try again later.');
      setIsSubmitting(false);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Your Name
          </label>
          <input
            id='name'
            {...register('name', { required: 'Name is required' })}
            className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all'
            placeholder='John Doe'
          />
          {errors.name && (
            <p className='mt-1 text-sm text-red-600'>{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Email Address
          </label>
          <input
            id='email'
            type='email'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all'
            placeholder='john@example.com'
          />
          {errors.email && (
            <p className='mt-1 text-sm text-red-600'>{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor='subject'
          className='block text-sm font-medium text-gray-700 mb-1'
        >
          Subject
        </label>
        <input
          id='subject'
          {...register('subject', { required: 'Subject is required' })}
          className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all'
          placeholder='How can we help you?'
        />
        {errors.subject && (
          <p className='mt-1 text-sm text-red-600'>{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor='message'
          className='block text-sm font-medium text-gray-700 mb-1'
        >
          Message
        </label>
        <textarea
          id='message'
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message should be at least 10 characters'
            }
          })}
          rows={5}
          className='w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all'
          placeholder='Tell us about your inquiry...'
        />
        {errors.message && (
          <p className='mt-1 text-sm text-red-600'>{errors.message.message}</p>
        )}
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
        className='w-full md:w-auto btn-primary flex items-center justify-center disabled:opacity-70'
      >
        {isSubmitting ? (
          <>
            <Loader2 className='animate-spin mr-2 h-5 w-5' />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className='ml-2 h-4 w-4' />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
