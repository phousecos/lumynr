import Link from 'next/link'
import Image from 'next/image'
import { GraduationCap, Video, BookOpen, Users, ArrowRight, CheckCircle } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: GraduationCap,
      title: 'Curated Learning Paths',
      description:
        "Skip the endless scrolling. Our learning paths are designed specifically for where you are in your career—whether you're building technical skills, preparing for leadership, or pivoting into a new specialty. Learn with intention.",
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
      icon: Users,
      title: 'Your People, Your Space',
      description:
        'Discussion forums, accountability groups, and a community that gets it. No code-switching required. Ask questions, share wins, vent frustrations, and build relationships with women who understand your journey.',
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
        "Once approved, you'll receive your personal invitation with everything you need to join. Founding members get their first three months free.",
    },
    {
      number: '03',
      title: 'Step Into the Sisterhood',
      description:
        "Complete your membership and dive into learning paths, live webinars, book club, and a community that's been waiting for you.",
    },
  ]

  return (
    <div className="bg-navy-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                The Sisterhood That Fuels Your{' '}
                <span className="gradient-text">Next Chapter</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                A private community where Black women in IT learn, connect, and rise
                together. Whether you're relaunching your career, stepping into
                leadership, or finding your people in tech—you belong here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/membership" className="btn-primary text-lg">
                  Have Your Invitation? Let's Go
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/request-invitation"
                  className="btn-outline-light text-lg"
                >
                  Request an Invitation
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* Placeholder for hero image */}
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-gray-400 text-sm">Hero Image Placeholder</p>
                  <p className="text-gray-500 text-xs mt-1">
                    Black women in tech environments
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Everything You Need to Thrive
            </h2>
            <p className="text-gray-600 text-lg">
              Resources and community designed specifically for Black women navigating
              careers in IT.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
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
      <section className="section-padding bg-navy-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/founder.jpg"
                  alt="Dr. Jerri Bland, Founder of Lumynr"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-2xl -z-10" />
            </div>
            <div>
              <p className="text-primary font-semibold mb-4">Meet Our Founder</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Dr. Jerri Bland
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Lumynr was born from a simple truth: Black women in IT are often the
                only ones in the room. Dr. Jerri Bland built this community so we
                never have to navigate our careers alone.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
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
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Join Us in Three Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 mx-auto md:mx-0">
                    <span className="text-navy-900 font-bold text-xl">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3 text-center md:text-left">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center md:text-left">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Members Are Saying
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Be one of our founding members and help shape the future of Lumynr.
            </p>
            {/* Placeholder testimonial cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="card-dark text-center opacity-60"
                >
                  <div className="w-16 h-16 rounded-full bg-navy-700 mx-auto mb-4" />
                  <p className="text-gray-500 italic mb-4">
                    "Testimonial coming soon..."
                  </p>
                  <p className="text-gray-600 text-sm">— Founding Member</p>
                </div>
              ))}
            </div>
            <p className="text-primary font-semibold mt-8">
              Your seat at the table is waiting.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-navy-900 to-secondary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Your Next Chapter Starts Here
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Lumynr isn't just another membership. It's a movement of Black women in
              IT who refuse to navigate this industry alone. We learn together. We
              rise together. And we're saving a seat for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership" className="btn-primary text-lg">
                Have Your Invitation? Let's Go
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/request-invitation" className="btn-outline-light text-lg">
                Request an Invitation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
