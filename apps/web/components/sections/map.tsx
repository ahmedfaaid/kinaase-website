export default function Map() {
  return (
    <section className='pb-16 md:pb-24'>
      <div className='container-custom'>
        <div className='rounded-lg overflow-hidden shadow-soft h-[400px]'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254382.67491184773!2d-0.2606897018072838!3d5.594515740486612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1625164811700!5m2!1sen!2sus'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            title='Kinaase office location'
          ></iframe>
        </div>
      </div>
    </section>
  );
}
