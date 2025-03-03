import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { HiOutlinePlus } from "react-icons/hi2";
import { FaTrashCan } from "react-icons/fa6";

export default function ModuleControlBtns({
  moduleId,
  deleteModule,
}: {
  moduleId: string;
  deleteModule: (id: string) => void;
}) {
  return (
    <div className="float-end">
      <FaTrashCan
        className="text-danger me-2 mb-1 fs-6"
        onClick={() => deleteModule(moduleId)}
      />
      <GreenCheckmark />
      <HiOutlinePlus className="fs-5" />
      <IoEllipsisVertical className="fs-6" />
    </div>
  );
}
