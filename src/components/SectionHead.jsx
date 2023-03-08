

const SectionHead = ({icon, title }) => {
  return (
    <div className="section__head">
                <span>
                    {icon}
                    <h2>{title}</h2>
                </span>
       </div>         
  )
}

export default SectionHead
