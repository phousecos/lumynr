import Link from 'next/link'
import Image from 'next/image'
import { GraduationCap, Video, BookOpen, Users, ArrowRight } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: GraduationCap,
      title: 'Curated Learning Paths',
      description:
        "Skip the endless scrolling. Our learning paths are designed specifically for where you are in your career—whether you're building technical skills, preparing for leadership, or pivoting into a new specialty.",
    },
    {
      icon: Video,
      title: 'Weekly Live Webinars',
      description:
        "Every week, connect with industry leaders, subject matter experts, and women who've navigated the paths you're walking. Real talk, real strategies, real community.",
    },
    {
      icon: BookOpen,
      title: 'Illuminate Book Club',
      description:
        'Monthly selections celebrating Black women authors on leadership, career growth, and personal development. Read together, discuss together, grow together.',
    },
    {
      icon: Users,
      title: 'Your People, Your Space',
      description:
        'Discussion forums, accountability groups, and a community that gets it. No code-switching required. Build relationships with women who understand your journey.',
    },
  ]

  const steps = [
    {
      number: '01',
      title: 'Request Your Invitation',
      description:
        'Tell us a little about yourself. We review every request personally because this community is built on intention.',
    },
    {
      number: '02',
      title: 'Get Your Welcome',
      description:
        "Once approved, you'll receive your personal invitation. Founding members get their first three months free.",
    },
    {
      number: '03',
      title: 'Step Into the Sisterhood',
      description:
        "Complete your membership and dive into learning paths, live webinars, book club, and community.",
    },
  ]

  return (
    <div className="bg-[#091929]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#091929] via-[#091929] to-[#0d2235]" />

        {/* Flame Mark - Large decorative element */}
        <div
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60vw] h-[180vh] pointer-events-none
                     opacity-30 md:opacity-40
                     animate-flame-glow"
          style={{
            filter: 'drop-shadow(0 0 80px rgba(245, 158, 11, 0.4)) drop-shadow(0 0 120px rgba(245, 158, 11, 0.2))',
          }}
        >
          <Image
            src="/images/flame-mark.svg"
            alt=""
            fill
            className="object-contain object-right"
            priority
          />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-primary-400 font-semibold mb-6 tracking-wide uppercase text-sm md:text-base">
              The Career Community for Black Women in IT
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
              The Sisterhood That Fuels Your{' '}
              <span className="text-primary-400">Next Chapter</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              A private community where Black women in IT learn, connect, and rise
              together. Whether you're relaunching your career, stepping into
              leadership, or finding your people in tech—you belong here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/membership" className="btn-primary text-base md:text-lg">
                Have Your Invitation? Let's Go
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/request-invitation"
                className="btn-outline-light text-base md:text-lg"
              >
                Request an Invitation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary-600 font-semibold mb-3 tracking-wide uppercase text-sm">
              Everything You Need
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Resources Designed for Your Success
            </h2>
            <p className="text-gray-600 text-lg">
              Resources and community designed specifically for Black women navigating
              careers in IT.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="feature-card group"
              >
                <div className="icon-container mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-[#091929] relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/5 to-transparent" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative">
                <Image
                  src="/images/founder.jpg"
                  alt="Dr. Jerri Bland, Founder of Lumynr"
                  fill
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#091929]/40 to-transparent" />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary-500/30 rounded-3xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary-400 font-semibold mb-4 tracking-wide uppercase text-sm">
                Meet Our Founder
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Dr. Jerri Bland
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Lumynr was born from a simple truth: Black women in IT are often the
                only ones in the room. Dr. Jerri Bland built this community so we
                never have to navigate our careers alone.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                With 25+ years in technology leadership, she's creating the space she
                wished existed—a sisterhood where Black women in IT can learn,
                connect, and rise together.
              </p>
              <Link href="/about" className="btn-primary">
                Read My Full Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary-600 font-semibold mb-3 tracking-wide uppercase text-sm">
              Simple Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
              Join Us in Three Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-primary-500/50 to-primary-500/10" />
                )}
                <div className="relative text-center md:text-left">
                  <div className="step-badge mx-auto md:mx-0 mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-padding bg-[#091929] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(245,158,11,0.08),transparent)]" />

        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-primary-400 font-semibold mb-3 tracking-wide uppercase text-sm">
              Join the Movement
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Members Are Saying
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Be one of our founding members and help shape the future of Lumynr.
            </p>

            {/* Placeholder testimonial cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="card-dark text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-navy-700/50 mx-auto mb-4 border border-navy-600/50" />
                  <p className="text-gray-500 italic mb-4">
                    "Testimonial coming soon..."
                  </p>
                  <p className="text-gray-600 text-sm">— Founding Member</p>
                </div>
              ))}
            </div>

            <p className="text-primary-400 font-semibold mt-12 text-lg">
              Your seat at the table is waiting.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-[#050d15] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,rgba(245,158,11,0.15),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Your Next Chapter Starts Here
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              Lumynr isn't just another membership. It's a movement of Black women in
              IT who refuse to navigate this industry alone. We learn together. We
              rise together. And we're saving a seat for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership" className="btn-primary text-base">
                Have Your Invitation? Let's Go
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/request-invitation" className="btn-outline-light text-base">
                Request an Invitation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
