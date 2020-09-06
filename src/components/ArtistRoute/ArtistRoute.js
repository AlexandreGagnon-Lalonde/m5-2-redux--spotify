import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { fetchArtistProfile } from "../../helpers/api-helpers";
import { receiveArtistProfile } from "../../action";

let numeral = require('numeral');

const ArtistRoute = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.token);
  const currentArtist = useSelector((state) => state.artists.currentArtist);
  const artistId = useParams();

  React.useEffect(() => {
    if (!accessToken) {
      return;
    }
    fetchArtistProfile(accessToken, artistId.id).then((profile) => {
      dispatch(receiveArtistProfile(profile));
    });
  }, [accessToken]);

  if (!currentArtist) {
    return "Loading";
  } else {
    return (
      <StyledDiv>
        <Artist>
          <ArtistImage src={currentArtist.profile.images[2].url}></ArtistImage>
          <ArtistName>{currentArtist.profile.name}</ArtistName>
          <Follower>
            <FollowerNumber>
              {numeral(currentArtist.profile.followers.total).format('0.0a')}
            </FollowerNumber>{" "}
            Followers
          </Follower>
        </Artist>

        <GenreContainer>
          <TagTitle>Tags</TagTitle>
          <Tags>
            {currentArtist.profile.genres.map(genre => {
              if (genre) {
                return <Tag>{genre}</Tag>

              }
            })}
          </Tags>
        </GenreContainer>
      </StyledDiv>
    );
  }
};

const StyledDiv = styled.div`
  width: 400px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #0b0f14;
  margin: 50px auto;
`;
const GenreContainer = styled.div``;
const Tags = styled.div`
  display: flex;
  position: relative;
`;
const ArtistName = styled.h2`
  color: #fff;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.75), 0px 4px 4px rgba(0, 0, 0, 0.5),
    4px 8px 25px #000000;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
  position: absolute;
  width: 220px;
  bottom: 0;
  left: calc(50% - 110px);
`;
const TagTitle = styled.h3`
  color: #fff;
  text-align: center;
`;
const Tag = styled.p`
  color: #fff;
  background: rgba(75, 75, 75, 0.4);
  border-radius: 4px;
  padding: 8px 20px;
  margin: 0;

  &:before {
    content: "";
  position: absolute;
  top: 0;
  left: 0;
  border-width: 0 0 10px 10px;
  border-style: solid;
  border-color: #797F86 #0B0F14;
  }
`;
const FollowerNumber = styled.span`
  color: #ff4fd8;
`;
const Follower = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: lowercase;
`;
const ArtistImage = styled.img`
  border-radius: 50%;
`;
const Artist = styled.div`
  text-align: center;
  position: relative;
`;

export default ArtistRoute;
