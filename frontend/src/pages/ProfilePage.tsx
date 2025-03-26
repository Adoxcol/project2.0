import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import Layout from '../components/Layout';

interface Profile {
  email: string;
  bio?: string;
}

const ProfilePage = () => {
  const { token } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
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

    if (token) {
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, [token]);

  if (loading) return <p>Loading profile...</p>;

  if (!token) {
    return <p>You are not logged in. Please log in to view your profile.</p>;
  }

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Profile Page</h1>
        {profile ? (
          <div className="space-y-4">
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Bio:</strong> {profile.bio || 'No bio available'}</p>
          </div>
        ) : (
          <p>No profile data available.</p>
        )}
      </div>
    </Layout>
  );
};

export default ProfilePage;