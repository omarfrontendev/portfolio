import ServicesCheckItem from "./ServicesCheckItem";


const ServicesCard = props => {

  return (
    <div className="services_card">
      <h3>{props.title}</h3>
      <ul className="services_check-items">
        {props.tasks.map(item => <ServicesCheckItem key={Math.random()} item={item} />)}
      </ul>
    </div>
  );
};

export default ServicesCard;