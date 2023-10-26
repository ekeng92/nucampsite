import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const DisplayCardAnimated = ({ item }) => {
  const { image, name, description } = item;
  const [toggle, setToggle] = useState(false);

  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "scale(1,1)" : "scale(0,0)",
    config: { duration: 750 },
  });

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    <animated.div style={animatedStyle}>
      <Card>
        <CardImg src={image} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </animated.div>
  );
};

export default DisplayCardAnimated;
