export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Us</h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Dizees is a digital products platform focused on practical guides for students and creators.
            We build simple, affordable resources that help you take action quickly.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our goal is to make high-value knowledge accessible in a clean and easy-to-use format, with
            instant access and a smooth buying experience.
          </p>

          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
            <h2 className="text-2xl font-semibold text-primary mb-2">Contact</h2>
            <p className="text-gray-700">
              For support or payment-related help, email us at{' '}
              <a href="mailto:bishtdevansh03@gmail.com" className="text-primary font-semibold hover:underline">
                bishtdevansh03@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}