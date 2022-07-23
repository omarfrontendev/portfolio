import {BsFillCheckCircleFill} from 'react-icons/bs'

const ExperianceCard = props => {
  return (
    <div className="experiance_card">
      <h3>{props.job}</h3>
      <div className="experiance_card-skills">
        {props.skills.map(skill => <div key={Math.random()}><BsFillCheckCircleFill className='experiance_icon'/> <div><h4>{skill}</h4><p>Experianced</p></div></div>)}
      </div>
    </div>
  )
};

export default ExperianceCard;