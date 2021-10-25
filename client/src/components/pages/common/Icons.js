import { IconContext } from 'react-icons';
import { FaQuestion } from 'react-icons/fa';
import { MdOutlineMarkEmailRead, MdOutlineWork } from 'react-icons/md';
import { BiError } from 'react-icons/bi';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import {
  AiOutlineMail,
  AiFillTwitterCircle,
  AiOutlineEye,
  AiOutlinePlus,
  AiOutlineSend,
} from 'react-icons/ai';
import { HiOutlinePhone } from 'react-icons/hi';
import { VscLocation } from 'react-icons/vsc';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoCloseCircle } from 'react-icons/io5';
import '../../scss/index.scss';

const Icons = ({ icon, styles, className, sizes, bold, ...props }) => {
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
      case 'github':
        return <BsGithub />;
      case 'linkedin':
        return <BsLinkedin />;
      case 'twitter':
        return <AiFillTwitterCircle />;
      case 'live-preview':
        return <AiOutlineEye />;
      case 'close':
        return <IoCloseCircle />;
      case 'hire-me':
        return <MdOutlineWork />;
      case 'AiOutlinePlus':
        return <AiOutlinePlus />;
      case 'submit':
        return <AiOutlineSend />;
      case 'check':
        return <BsFillCheckCircleFill />;
      default:
        return <FaQuestion />;
    }
  };
  return (
    <>
      <IconContext.Provider
        value={{ className: [className], style: styles, size: sizes }}
      >
        {displayIcons()}
      </IconContext.Provider>
      {'  '}
      {props.children}
    </>
  );
};

export default Icons;
