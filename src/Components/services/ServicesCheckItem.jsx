import {BsCheckLg} from 'react-icons/bs'

const ServicesCheckItem = props => {

  return (
    <li>
      <BsCheckLg className='service_icon'/>{props.item}
    </li>
  );
};

export default ServicesCheckItem;