import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Target, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Lumynr',
  description:
    "Meet Dr. Jerri Bland and learn why she built Lumynr—the career community for Black women in IT.",
}

export default function AboutPage() {
  return (
    <div className="bg-navy-900 min-h-screen pt-20">
      {/* Founder Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image Column */}
            <div className="relative">
              <div className="sticky top-32">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/founder.jpg"
                    alt="Dr. Jerri Bland, Founder of Lumynr"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Content Column */}
            <div>
              <p className="text-primary font-semibold mb-4 text-lg">
                Meet Our Founder
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Dr. Jerri Bland
              </h1>

              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  After 25+ years in IT leadership, I've been the only Black woman in
                  the room more times than I can count. I've navigated the politics,
                  proven my expertise over and over, and built a career I'm proud of.
                  But I've also felt the isolation that comes with being "the only."
                </p>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I started looking for communities where Black women in IT could
                  connect, learn, and support each other. What I found was either too
                  broad, too corporate, or simply didn't exist.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  So I built it.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Lumynr is the community I wish I'd had throughout my career. A place
                  where Black women in IT can show up fully, learn from each other,
                  and build the careers we deserve—without code-switching, without
                  explaining ourselves, without navigating alone.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  This isn't just a membership platform to me. It's a movement. And
                  I'd be honored to have you be part of it.
                </p>

                <p className="text-primary font-semibold text-xl">
                  — Dr. Jerri Bland, Ed.D.
                  <br />
                  <span className="text-gray-400 font-normal">Founder, Lumynr</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-navy-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-navy-900 rounded-2xl p-8 md:p-10 border border-navy-700">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                Lumynr exists to ensure no Black woman in IT ever has to navigate her
                career alone. We provide the learning, community, and support to help
                our members thrive—on their own terms.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-navy-900 rounded-2xl p-8 md:p-10 border border-navy-700">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                A world where Black women are not just represented in IT, but leading
                it. Where our expertise is recognized, our voices are heard, and our
                community lifts each other higher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-navy-900 to-secondary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Be Part of Something Special?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              We're building Lumynr with intention, and we'd love for you to be part
              of it from the beginning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-invitation" className="btn-primary text-lg">
                Request Your Invitation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/membership" className="btn-outline-light text-lg">
                Already have an invitation? Join now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
