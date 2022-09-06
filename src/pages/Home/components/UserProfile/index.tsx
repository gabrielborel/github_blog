import { useEffect, useState } from 'react';
import { api } from '../../../../libs/api';
import { ProfileContainer, ProfileData } from './styles';
import { GithubLogo, Buildings, Users, ArrowSquareOut } from 'phosphor-react';

interface UserProfileData {
  avatar_url: string;
  name: string;
  html_url: string;
  bio: string;
  followers: number;
  company: string;
  login: string;
}

export const UserProfile = () => {
  const [userProfileData, setUserProfileData] = useState<UserProfileData>();

  const loadGithubData = async () => {
    const { data } = await api.get(`/users/gabrielborel`);
    setUserProfileData(data);
  };

  useEffect(() => {
    loadGithubData();
  }, []);

  return (
    <ProfileContainer>
      <img src={userProfileData?.avatar_url} alt='' />

      <ProfileData>
        <strong>{userProfileData?.name}</strong>
        <p>{userProfileData?.bio}</p>

        <div>
          <span>
            <GithubLogo size={20} weight='fill' /> {userProfileData?.login}
          </span>
          <span>
            <Buildings size={20} weight='fill' />{' '}
            {userProfileData?.company || 'No company'}
          </span>
          <span>
            <Users size={20} weight='fill' /> {userProfileData?.followers}{' '}
            followers
          </span>
        </div>

        <a href={userProfileData?.html_url}>
          Github
          <ArrowSquareOut weight='bold' size={14} />
        </a>
      </ProfileData>
    </ProfileContainer>
  );
};
