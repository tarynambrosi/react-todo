import image from '../../assets/images/404.jpg'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="notFound">
        <img src={image} alt="Resource Not Found" />
        <h1>Resource Not Found</h1>
    </div>
  )
}