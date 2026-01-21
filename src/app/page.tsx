import Link from 'next/link'
import Image from 'next/image'
import { GraduationCap, Video, BookOpen, Users, ArrowRight, Newspaper, Mic, CircleDot, UsersRound, MessageCircle } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: GraduationCap,
      title: 'Curated Learning Paths',
      description:
        "Skip the endless scrolling. Our learning paths are designed specifically for where you are in your career—whether you're building technical skills, preparing for certifications, or developing leadership capabilities. Learn with intention.",
    },
    {
      icon: Video,
      title: 'Weekly Live Webinars',
      description:
        "Every week, connect with industry leaders, subject matter experts, and women who've navigated the paths you're walking. Real talk, real strategies, real community—not another boring corporate presentation.",
    },
    {
      icon: BookOpen,
      title: 'Illuminate Book Club',
      description:
        'Monthly selections celebrating Black women authors on leadership, career growth, and personal development. Read together, discuss together, grow together. Because the best insights often come from our own voices.',
    },
    {
      icon: Newspaper,
      title: 'Amplify Monthly',
      description:
        'Our members-only publication featuring career insights, industry trends, member spotlights, and resources curated specifically for Black women in tech. Fresh perspectives delivered to your inbox every month.',
    },
    {
      icon: Mic,
      title: 'Interview Prep with Prept',
      description:
        'AI-powered practice for the conversations that matter most—from technical interviews to salary negotiations. Build confidence and sharpen your skills before the stakes are real.',
    },
    {
      icon: CircleDot,
      title: 'Mentoring Circles',
      description:
        "Structured small-group mentorship with senior IT leaders who've walked your path. Not random coffee chats—real guidance, accountability, and support designed to move your career forward.",
    },
    {
      icon: MessageCircle,
      title: 'Community Forums',
      description:
        "Your space to connect, network, and grow with other members. Share wins, ask questions, find accountability partners, and build genuine relationships with women who understand your journey. No code-switching required.",
    },
    {
      icon: UsersRound,
      title: 'Group Coaching',
      description:
        'Intensive sessions with experienced coaches focused on leadership, career strategy, and breaking through barriers. Small groups, big impact.',
      comingSoon: true,
    },
  ]

  const steps = [
    {
      number: '01',
      title: 'Request Your Invitation',
      description:
        'Tell us a little about yourself. We review every request personally because this community is built on intention, not algorithms.',
    },
    {
      number: '02',
      title: 'Get Your Welcome',
      description:
        "Once approved, you'll receive your personal invitation with everything you need to join.",
    },
    {
      number: '03',
      title: 'Start Your Free Trial',
      description:
        "Begin your 30-day free trial and dive into learning paths, live webinars, book club, and a community that's been waiting for you.",
    },
  ]

  return (
    <div className="bg-[#091929]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Base background */}
        <div className="absolute inset-0 bg-[#091929]" />

        {/* Gradient layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#091929] via-[#0a1f33] to-[#091929]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091929] via-transparent to-[#0d2235]/50" />

        {/* Subtle radial glow behind content */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px]" />

        {/* Top edge highlight */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] grain pointer-events-none" />

        {/* Flame Mark - Large decorative element */}
        <div
          className="absolute right-[-25%] md:right-[-20%] top-1/2 w-[80vw] md:w-[70vw] h-[200vh] pointer-events-none
                     opacity-25 md:opacity-35
                     animate-flame-drift"
        >
          <Image
            src="/images/flame-mark.svg"
            alt=""
            fill
            className="object-contain object-right animate-flame-glow"
            priority
          />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-24 md:py-32 lg:py-40">
          <div className="max-w-5xl">
            <p className="text-primary-400 font-semibold mb-6 tracking-widest uppercase text-sm md:text-base drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              The Career Community for Black Women in IT
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-8 drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
              The Sisterhood That Fuels Your{' '}
              <span className="text-primary-400 drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]">Next Chapter</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
              A private community where Black women in IT learn, connect, and rise
              together. Whether you're relaunching your career, stepping into
              leadership, or finding your people in tech—you belong here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/membership" className="btn-primary text-base md:text-lg shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                Have Your Invitation? Let's Go
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/request-invitation"
                className="btn-outline-light text-base md:text-lg backdrop-blur-sm"
              >
                Request an Invitation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#091929] to-transparent" />
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #091929 1px, transparent 0)', backgroundSize: '40px 40px'}} />

        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary-600 font-semibold mb-3 tracking-wide uppercase text-sm">
              What's Included
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Everything You Need to Thrive
            </h2>
            <p className="text-gray-600 text-lg">
              Resources and community designed specifically for Black women navigating
              careers in IT.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl p-8 border border-gray-100
                           shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                           hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]
                           hover:border-primary-200/50 hover:-translate-y-1
                           transition-all duration-300 relative overflow-hidden"
              >
                {'comingSoon' in feature && feature.comingSoon && (
                  <div className="absolute top-4 right-4 bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Coming Soon
                  </div>
                )}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50
                                flex items-center justify-center mb-6
                                group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-500/20
                                transition-all duration-300 border border-primary-200/50">
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
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#091929] via-[#0a1c2e] to-[#091929]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/8 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[100px]" />

        {/* Top edge */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700/50 to-transparent" />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.02] grain pointer-events-none" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-2xl shadow-black/30">
                <Image
                  src="/images/founder.jpg"
                  alt="Dr. Jerri Bland, Founder of Lumynr"
                  fill
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#091929]/60 via-transparent to-transparent" />
                {/* Inner border glow */}
                <div className="absolute inset-0 rounded-3xl border border-white/10" />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary-500/30 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary-500/15 rounded-full blur-2xl" />
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
      <section className="section-padding bg-[#091929] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#091929] via-[#0a1c2e] to-[#091929]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(245,158,11,0.06),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700/50 to-transparent" />
        <div className="absolute inset-0 opacity-[0.02] grain pointer-events-none" />

        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary-400 font-semibold mb-3 tracking-wide uppercase text-sm">
              Simple Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Join Us in Three Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                <div className="bg-gradient-to-b from-navy-800/60 to-navy-800/30 backdrop-blur-sm
                                rounded-2xl p-8 h-full
                                border border-navy-700/50
                                shadow-lg shadow-black/20
                                hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/10
                                transition-all duration-300">
                  {/* Step number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500
                                    flex items-center justify-center
                                    text-navy-900 font-bold text-lg
                                    shadow-lg shadow-primary-500/30
                                    group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary-500/50 to-transparent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
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
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1c2e] via-[#091929] to-[#091929]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_40%,rgba(245,158,11,0.08),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-700/50 to-transparent" />
        <div className="absolute inset-0 opacity-[0.015] grain pointer-events-none" />

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
                  className="bg-gradient-to-b from-navy-800/80 to-navy-800/40 backdrop-blur-sm
                             rounded-2xl p-8 text-center
                             border border-navy-700/50
                             shadow-lg shadow-black/20
                             hover:border-navy-600/50 hover:shadow-xl hover:shadow-black/30
                             transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-navy-700 to-navy-800 mx-auto mb-4
                                  border border-navy-600/50 shadow-inner" />
                  <p className="text-gray-400 italic mb-4">
                    "Testimonial coming soon..."
                  </p>
                  <p className="text-gray-500 text-sm">— Founding Member</p>
                </div>
              ))}
            </div>

            <p className="text-primary-400 font-semibold mt-12 text-lg drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              Your seat at the table is waiting.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-[#050d15] relative overflow-hidden">
        {/* Layered background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#091929] to-[#050d15]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(245,158,11,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_0%,rgba(245,158,11,0.05),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
        <div className="absolute inset-0 opacity-[0.02] grain pointer-events-none" />

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
              Your Next Chapter Starts Here
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              Lumynr isn't just another membership. It's a movement of Black women in
              IT who refuse to navigate this industry alone. We learn together. We
              rise together. And we're saving a seat for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership" className="btn-primary text-base shadow-[0_0_40px_rgba(245,158,11,0.25)]">
                Have Your Invitation? Let's Go
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/request-invitation" className="btn-outline-light text-base backdrop-blur-sm">
                Request an Invitation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
