import { useNavigate } from "react-router-dom";
import Button from "./Button"

const Banner = ({bannerImage, mainTitle, subTitle, description, buttonText, routeUrl, disableCustomClick = false}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routeUrl);
  }

  return <div className='banner primary-background'>
  <div className="container">
    <div className='banner-content'>
      <h1 className='primary-font main-title'>{mainTitle}</h1>
      {subTitle && <p className="primary-font main-subtitle">{subTitle}</p>}
      <p className="main-description">{description}</p>
      {buttonText && <Button btnClass='primary-button banner-button' clickProp={handleClick}>{buttonText}</Button>}
    </div>
    <div className='banner-img'>
      <img src={bannerImage} alt="Little lemon"/>
    </div>
  </div>
</div>
}

export default Banner;