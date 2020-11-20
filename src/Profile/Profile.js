import React, { useEffect, useState } from "react";
import { getUser, removeUserSession } from "../Utils/Common";
import "../App.css";
import { ProfileCard, LogColor } from "../Themes/globalStyles";

function Profile() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemsUserData, setItemsUserData] = useState([]);

  const user = getUser();

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://adaptive-question-api.herokuapp.com/userdata/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItemsUserData(result.UserData);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ProfileCard>
        <div className="mainProfile">
          <div>
            {itemsUserData.map((item) => (
              <div key={item.id}>
                {item.username === user.name && (
                  <div className="appQuiz">{item.section1}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </ProfileCard>
    );
  }
}

export default Profile;
