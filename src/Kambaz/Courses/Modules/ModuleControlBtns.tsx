import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { HiOutlinePlus } from "react-icons/hi2";
import { FaTrashCan } from "react-icons/fa6";
import { TiPencil } from "react-icons/ti";

export default function ModuleControlBtns({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (id: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end">
      <TiPencil
        className="text-primary me-2 fs-5"
        onClick={() => editModule(moduleId)}
      />
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
