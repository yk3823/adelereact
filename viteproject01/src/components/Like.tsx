import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);
  const toggle = () => setStatus(!status);
  onClick();

  if (status) {
    return <AiFillHeart color="#ff6b81" size={50} onClick={toggle} />;
  }

  return <AiOutlineHeart size={50} onClick={toggle} />;
};

export default Like;
