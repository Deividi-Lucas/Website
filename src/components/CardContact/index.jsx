import { CardContact } from './style'

export default function ContactCard({ link, img, alt, text }) {
  return (
    <CardContact>
      <a href={link}>
        <img src={img} alt={alt} />
        <span>{text}</span>
      </a>
    </CardContact>
  )
}
