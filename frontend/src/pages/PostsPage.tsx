import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Skeleton } from '../components/ui/skeleton';
import Layout from '../components/Layout';

interface Post {
  id: number;
  title: string;
  content: string;
}

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts'); // Ensure this URL is correct
        const data = Array.isArray(response.data) ? response.data : [];
        setPosts(data);
      } catch (err: any) {
        console.error('Failed to fetch posts:', err);
        setError(err.message || 'An error occurred while fetching posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Posts Page</h1>

        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <Card key={index} className="w-full max-w-2xl mx-auto">
                <CardHeader>
                  <Skeleton className="h-6 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4 mt-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : posts.length > 0 ? (
          <ul className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="w-full max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{post.content}</p>
                </CardContent>
              </Card>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No posts available.</p>
        )}
      </div>
    </Layout>
  );
};

export default PostsPage;