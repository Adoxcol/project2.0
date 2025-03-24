// src/pages/ProfilePage.tsx
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const ProfilePage = () => {
  const { token } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  if (loading) return <p>Loading profile...</p>;

  return (
    <div>
      <h1>Profile Page</h1>
      {profile ? (
        <div>
          <p>Email: {profile.email}</p>
          <p>Bio: {profile.bio || 'No bio available'}</p>
        </div>
      ) : (
        <p>No profile data available.</p>
      )}
    </div>
  );
};

export default ProfilePage;