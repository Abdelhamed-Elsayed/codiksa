import { Zap, Award, Users, Heart } from 'lucide-react'

const values = [
  { icon: Zap, title: 'Innovation', description: 'We embrace new technologies and creative solutions to solve complex problems.' },
  { icon: Award, title: 'Quality', description: 'We deliver excellence in every line of code and every user interaction.' },
  { icon: Users, title: 'Collaboration', description: 'We believe great products come from great teamwork and open communication.' },
  { icon: Heart, title: 'Integrity', description: 'We build trust through transparency, honesty, and ethical practices.' },
]

export default function CoreValues() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'transparent'  }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>Our Core Values</h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            These principles guide everything we do, from how we build software to how we treat our clients and each other.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col items-center text-center gap-4 p-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'var(--brand-gradient)' }}>
                <value.icon size={28} color="white" />
              </div>
              <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{value.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
