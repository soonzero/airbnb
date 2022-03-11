import React from "react";

export default function GetUserProfile(props) {
  const [imageURL, setImageURL] = React.useState("");
  const { Kakao } = window;

  React.useEffect(() => {
    Kakao.API.request({
      url: "/v2/user/me",
      success: ({ kakao_account }) => {
        const { profile } = kakao_account;
        setImageURL({
          url: profile.profile_image_url,
        });
      },
      fail: (error) => {
        console.log(error);
      },
    });
  }, [props.login]);

  return <img src={imageURL.url} alt="profile_img" />;
}
