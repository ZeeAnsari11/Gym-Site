import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import { GiCutDiamond } from 'react-icons/gi'
import { values } from '../data';
import Card from '../UI/Card';

const Values = () => {
    return (
        <div>
            <section className='values'>
                <div className="cantainer values__container">
                    <div className="values__left">
                        <div className="values__image">
                            <img src={Image} alt="values Image" />
                        </div>
                    </div>
                    <div className="values__right">
                        <SectionHead icon={<GiCutDiamond />} title="Values" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eius itaque quae quam eos harum quod, similique nihil libero necessitatibus a, maxime quas est non officia consequuntur? Cumque, ab quis!</p>
                        <div className="values__wrapper">
                            {
                                values.map(({ id, icon, title, desc }) => {
                                    return (
                                        <Card className="values__value" key={id}>
                                            <span>{icon}</span>
                                            <h4>{title}</h4>
                                            <small>{desc}</small>
                                        </Card>
                                    )

                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Values
