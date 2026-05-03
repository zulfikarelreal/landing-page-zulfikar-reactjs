import './Marquee.css'

const items = [
  'Branding', '✦', 'UI/UX Design', '✦', 'Web Dev', '✦',
  'Motion', '✦', 'Strategy', '✦', 'Content', '✦',
  'Branding', '✦', 'UI/UX Design', '✦', 'Web Dev', '✦',
  'Motion', '✦', 'Strategy', '✦', 'Content', '✦',
]

export default function Marquee() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className={item === '✦' ? 'marquee-dot' : 'marquee-item'}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
