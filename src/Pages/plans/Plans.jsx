import './plans.css'
import {plans} from '../../data'
import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_4.jpg"
import Card from "../../UI/Card"



const Plans = () => {
  return (
    <>
    <Header title="MemberShip Plans" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quo atque odit, laudantium ipsum quibusdam qui ratione, ab corporis veniam enim eos sunt aperiam ullam nam temporibus, numquam deserunt assumenda.
    </Header>
    <section className="plans">
      <div className="container plans__container">
        {
          plans.map(({id, name, desc, price, features})=>{
            return (<Card key={id} className="plan">
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1><h2>/mo</h2>
              <h4>features</h4>
              {
                features.map(({feature , available},index)=>{
                  return <p key={index} className></p>
                })
              }
            </Card>)

            
            
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans