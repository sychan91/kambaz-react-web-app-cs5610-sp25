import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { HiOutlinePlus } from "react-icons/hi2";

export default function ModuleControlBtns() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <HiOutlinePlus className="fs-5" />
      <IoEllipsisVertical className="fs-6" />
    </div>
  );
}
