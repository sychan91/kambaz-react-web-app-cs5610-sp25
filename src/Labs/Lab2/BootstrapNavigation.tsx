import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Tab,
  Tabs,
} from "react-bootstrap";

export default function BootstrapNavigation() {
  return (
    <div id="wd-css-navigating-with-tabs">
      <h2>Tabs</h2>
      <Tabs defaultActiveKey="active" className="mb-3">
        <Tab eventKey="active" title="Active"></Tab>
        <Tab eventKey="link1" title="Link"></Tab>
        <Tab eventKey="link2" title="Link"></Tab>
        <Tab eventKey="link3" title="Disabled" disabled></Tab>
      </Tabs>
      <div id="wd-css-navigating-with-cards" className="mb-3">
        <h2>Cards</h2>
        <Card style={{ width: "18rem" }}>
          <CardImg variant="top" src="images/stacked.jpg" />
          <CardBody>
            <CardTitle>Stacking Starship</CardTitle>
            <CardText>
              Stacking the most powerful rocket in history. Mars or Bust!
            </CardText>
            <Button variant="primary" href="#">
              Boldly Go
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
