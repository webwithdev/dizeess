import Link from 'next/link';

export default function AccessPage() {
  const downloadUrl = '/downloads/2025%20Productivity%20Blueprint.rar';

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary text-white flex items-center justify-center text-4xl shadow-lg">
            ✅
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
            Payment Successful!
          </h1>

          <p className="text-lg md:text-xl text-black font-semibold mb-2">
            Thank you for purchasing the Productivity Toolkit 🚀
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-1">
            Your access is being processed.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-8">
            You will receive your product shortly.
          </p>

          <div className="mt-2 p-5 rounded-2xl bg-gray-50 border border-gray-200 text-left">
            <p className="text-gray-700 leading-relaxed">
              If you don’t receive it within a few minutes, please contact us with your payment details at{' '}
              <a href="mailto:bishtdevansh03@gmail.com" className="text-primary font-semibold hover:underline">
                bishtdevansh03@gmail.com
              </a>
              .
            </p>
          </div>

          <div className="mt-10  flex justify-between gap-4">
            <a
              href={downloadUrl}
              download
              className="inline-flex items-center justify-center rounded-2xl mx-auto bg-primary text-white px-7 py-3.5 font-semibold shadow-md hover:opacity-95 transition"
            >
              Download Your File
            </a>
           
          </div>

          <p className="mt-4 text-sm text-gray-500 break-all">
            Direct file link: <a href={downloadUrl} className="text-primary hover:underline">{downloadUrl}</a>
          </p>
        </div>
      </div>
    </main>
  );
}