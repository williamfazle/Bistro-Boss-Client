import Banner from "../Banner/Banner"
import Catagory from "../Catagory/Catagory"
import Featured from "../Featured/Featured"
import PopularMenu from "../PopularMenu/PopularMenu"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Catagory></Catagory>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
    </div>
  )
}

export default Home
