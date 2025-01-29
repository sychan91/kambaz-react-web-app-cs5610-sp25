import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { MdDoNotDisturb } from "react-icons/md";

export default function ModulesControls() {
  // Define options with proper types
  const options: Record<string, { label: string; icon: JSX.Element }> = {
    "Publish All": { label: "Publish All", icon: <GreenCheckmark /> },
    "Publish all modules and items": {
      label: "Publish all modules and items",
      icon: <GreenCheckmark />,
    },
    "Publish modules only": {
      label: "Publish modules only",
      icon: <GreenCheckmark />,
    },
    "Unpublish all modules and items": {
      label: "Unpublish all modules and items",
      icon: <MdDoNotDisturb className="fs-5 me-1" />,
    },
    "Unpublish modules only": {
      label: "Unpublish modules only",
      icon: <MdDoNotDisturb className="fs-5 me-1" />,
    },
  };

  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState({
    label: "Publish All",
    icon: <GreenCheckmark />,
  });

  // Handle selection with type safety
  const handleSelect = (eventKey: string | null) => {
    if (!eventKey || !(eventKey in options)) {
      return; // Safeguard for invalid eventKey
    }
    setSelectedOption(options[eventKey]);
  };

  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button variant="danger" size="sm" className="me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>
      <Dropdown onSelect={handleSelect} className="float-end me-1">
        <Dropdown.Toggle variant="secondary" size="sm">
          {selectedOption.icon}
          {selectedOption.label}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="Publish All">
            <GreenCheckmark />
            Publish All
          </Dropdown.Item>
          <Dropdown.Item eventKey="Publish all modules and items">
            <GreenCheckmark />
            Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item eventKey="Publish modules only">
            <GreenCheckmark />
            Publish modules only
          </Dropdown.Item>
          <Dropdown.Item eventKey="Unpublish all modules and items">
            <MdDoNotDisturb className="fs-5 me-1" />
            Unpublish all modules and items
          </Dropdown.Item>
          <Dropdown.Item eventKey="Unpublish modules only">
            <MdDoNotDisturb className="fs-5 me-1" />
            Unpublish modules only
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button variant="secondary" size="sm" className="float-end me-1">
        View Progress
      </Button>
      <Button variant="secondary" size="sm" className="float-end me-1">
        Collapse All
      </Button>
    </div>
  );
}
