import { Tab, Tabs } from "react-bootstrap";

export default function BootstrapNavigation() {
  return (
    <div id="wd-css-navigating-with-tabs">
      <h2>Tabs</h2>
      <Tabs defaultActiveKey="active">
        <Tab eventKey="active" title="Active"></Tab>
        <Tab eventKey="link1" title="Link"></Tab>
        <Tab eventKey="link2" title="Link"></Tab>
        <Tab eventKey="link3" title="Disabled" disabled></Tab>
      </Tabs>
    </div>
  );
}
