import "./product.css";

const Product = ({project}) => {
  
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-cercle"></div>
        <div className="p-cercle"></div>
        <div className="p-cercle"></div>
      </div>
      <a href={project.link} target="_blank" rel="noreferrer">
        <img src={project.img.p1} alt="" className="p-img"/>
      </a>
    </div>
  )
}

export default Product