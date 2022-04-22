import { useEffect, useState } from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './cssCode/AppCss.css'
import Item from"./component/Item"


function App() {
  const [avatarURL, setAvatarURL] = useState();
  const [githubUsername, setGitHubusername] = useState();
  const [repoData, setRepoData] = useState();

  async function repoDataURL() {
    await fetch("https://api.github.com/users/tony3502/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          const list = result.map((item) => {
            return (
              <Item project={item}/>
            );
          });
          setRepoData(list);
          console.log(repoData);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  useEffect(() => {
    fetch("https://api.github.com/users/tony3502")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setAvatarURL(result.avatar_url);
          setGitHubusername(result.login);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={avatarURL} />
        <Card.Body>
          <Card.Title>{githubUsername}</Card.Title>
          <Card.Text>
            你好，我是tony，歡迎來到我的介紹卡，點擊按鈕查看我的repos。
          </Card.Text>
          <Button variant="primary" onClick={repoDataURL}>
            List my public repos
          </Button>
        </Card.Body>
      </Card>
      {repoData}
    </div>
  );
}

export default App;
