import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Icon, Image, Grid, Divider, Header } from "semantic-ui-react";

import o from "./o.jpg";

function App() {
  return (
    <Grid centered>
      <br />
      <div>
        <Grid.Row>
          <p> 안녕하세요 ! </p>
        </Grid.Row>
        <Button Primary> hi </Button>
        <Grid.Row>
          <br />
          <Image src={o} centered />
        </Grid.Row>

        <Divider horizontal>
          <Header as="h4">contact me</Header>
        </Divider>

        <div>
          <Button
            circular
            color="facebook"
            icon="facebook"
            onClick={() => window.open("https://blog.naver.com/tldhselwkdls")}
          />
          <Button circular color="twitter" icon="twitter" />
          <Button circular color="linkedin" icon="linkedin" />
          <Button circular color="google plus" icon="google plus" />
        </div>
      </div>
    </Grid>
  );
}

export default App;
