import { FaQuestion } from 'react-icons/fa';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { BiError } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlinePhone } from 'react-icons/hi';
import { VscLocation } from 'react-icons/vsc';

const Icons = ({ icon, ...props }) => {
  console.log(icon);
  const displayIcons = () => {
    switch (icon) {
      case 'emailSent':
        return <MdOutlineMarkEmailRead />;
      case 'lostFocus':
        return <BiError />;
      case 'email':
        return <AiOutlineMail />;
      case 'location':
        return <VscLocation />;
      case 'phone':
        return <HiOutlinePhone />;
      default:
        return <FaQuestion />;
    }
  };
  return (
    <>
      {displayIcons()} {props.children}
    </>
  );
};

export default Icons;
