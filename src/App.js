import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Icon,
  Image,
  Grid,
  Divider,
  Header,
  List,
  Container,
  Reveal
} from "semantic-ui-react";

import o from "./o.jpg";

function App() {
  return (
    <Container>
      <br />
      <div>
  <Header size='huge'>Alice Archive</Header>

        <Container left>
          <Header as="h3"> </Header>
          <p>
            <List>
              <List.Item>
                <List.Icon name="student" />
                <List.Content>Hongik University</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="marker" />
                <List.Content>Seoul, Korea</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="mail" />
                <List.Content>
                  <a href="tldhselwkdls@gmail.com">tldhselwkdls@gmail.com</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="linkify" />
                <List.Content>
                  <a href="http://www.semantic-ui.com">semantic-ui.com</a>
                </List.Content>
              </List.Item>
            </List>
          </p>

        </Container>

        <br />

        <Image src={o} centered />
        <Reveal animated='move'>
           <Reveal.Content visible>
             <Image src='https://m.media-amazon.com/images/M/MV5BOWU1ZjE3ZTQtZTQ5ZS00ZWFkLWFhNjEtODFhZDczOTRjYzNlXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX1500_CR0,0,1500,999_AL_.jpg'/>
           </Reveal.Content>
           <Reveal.Content hidden>
             <Image src='https://m.media-amazon.com/images/M/MV5BY2YwZmFlZjktYWYyYy00NDJhLWJkNzItMDczNDRlY2VjMjZiXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX1500_CR0,0,1500,999_AL_.jpg' />
           </Reveal.Content>
         </Reveal>

        <Divider horizontal>
          <Header as="h4">contact me</Header>
        </Divider>

        <Container centered>
          <Grid centered>
            <div>
              <br />
              <Button
                circular
                color="facebook"
                icon="facebook"
                onClick={() =>
                  window.open("https://blog.naver.com/tldhselwkdls")
                }
              />
              <Button circular color="twitter" icon="twitter" />
              <Button circular color="linkedin" icon="linkedin" />
              <Button circular color="google plus" icon="google plus" />
            </div>
          </Grid>
        </Container>
      </div>
    </Container>
  );
}

export default App;
