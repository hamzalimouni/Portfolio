import "./productList.css";
import Product from "../product/Product";
import {projects} from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Hamza</h1>
        <p className="pl-desc">
          Hamza is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {
          projects.map((project) => {
            return <Product key={project.id} project={project}/>
          })
        }
      </div>
    </div>
  )
}

export default ProductList