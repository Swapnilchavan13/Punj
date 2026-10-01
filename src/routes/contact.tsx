
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  const scrollToEnquiry = () => {
    document
      .getElementById("enquiry-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="bg-[#f7f4ed] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
            Get in Touch
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Contact Punj Foundation
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            We welcome your questions, suggestions, and enquiries. Reach out
            to us for more information about the Punj Foundation and our
            community initiatives.
          </p>
        </div>
      </section>

      {/* =========================================================
          CONTACT INFORMATION
      ========================================================= */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">

          {/* LOCATION */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f4ed] text-2xl">
              📍
            </div>

            <h2 className="text-xl font-semibold text-gray-900">
              Our Location
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Near Sita Samahit Sthal,
              <br />
              Sitamarhi, Jangigani,
              <br />
              Bhadohi, Uttar Pradesh
              <br />
              PIN - 221309
            </p>
          </div>

          {/* EMAIL */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f4ed] text-2xl">
              ✉️
            </div>

            <h2 className="text-xl font-semibold text-gray-900">
              Email Us
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              For enquiries and further information, you can contact us at:
            </p>

            <a
              href="mailto:pkldpfoundation@gmail.com"
              className="mt-3 inline-block break-all font-medium text-[#8b6f47] transition hover:underline"
            >
              pkldpfoundation@gmail.com
            </a>
          </div>

          {/* ENQUIRY */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f4ed] text-2xl">
              💬
            </div>

            <h2 className="text-xl font-semibold text-gray-900">
              Enquiries
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Have a question or want to know more about our initiatives?
              Send us an enquiry and our team will get back to you.
            </p>

            <button
              type="button"
              onClick={scrollToEnquiry}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Send an Enquiry
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENQUIRY FORM
      ========================================================= */}
      <section
        id="enquiry-form"
        className="scroll-mt-24 bg-[#f7f4ed] px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl">

          {/* FORM HEADING */}
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
              Enquiry
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Send Us an Enquiry
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Whether you have a question, suggestion, or would like to
              learn more about our work, please share your details below.
            </p>
          </div>

          {/* FORM CARD */}
          <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-2 shadow-sm md:p-4">

            <div className="overflow-hidden rounded-2xl bg-white">

              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSewsNzxBoygSHhWw6hjImx22gQ6ywSIWOsioZhrF_M1QQqXjg/viewform?embedded=true"
                title="Punj Foundation Enquiry Form"
                className="block h-[850px] w-full border-0"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
              >
                Loading…
              </iframe>

            </div>
          </div>

          {/* FORM NOTE */}
          <p className="mt-5 text-center text-sm leading-6 text-gray-500">
            Please provide accurate details so that our team can respond
            to your enquiry.
          </p>
        </div>
      </section>

      {/* =========================================================
          FINAL CONTACT SECTION
      ========================================================= */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
            Stay Connected
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            We Would Love to Hear From You
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Whether you would like to learn more about the Foundation,
            collaborate with us, or share an enquiry, please feel free to
            reach out.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

            {/* SCROLL TO FORM */}
            <button
              type="button"
              onClick={scrollToEnquiry}
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Contact Punj Foundation
            </button>

            {/* EMAIL */}
            {/* <a
              href="mailto:pkldpfoundation@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3 font-semibold text-gray-900 transition duration-300 hover:bg-gray-50"
            >
              Email Us
            </a> */}

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
