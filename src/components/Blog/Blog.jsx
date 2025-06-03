import React from 'react';
import ExperienceItem from '../ExperienceItem/ExperienceItem';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  // SVG images for the blog posts
  const spotifyImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120' fill='none'%3E%3Crect width='180' height='120' fill='%230a192f'/%3E%3Ccircle cx='90' cy='60' r='35' fill='%2364ffda' fill-opacity='0.1' stroke='%2364ffda' stroke-width='2'/%3E%3Cpath d='M105 55 A15 15 0 1 0 105 85 M75 55 A15 15 0 1 1 75 85' stroke='%2364ffda' stroke-width='2'/%3E%3C/svg%3E";

  const spotifyProfileImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120' fill='none'%3E%3Crect width='180' height='120' fill='%230a192f'/%3E%3Ccircle cx='90' cy='60' r='35' fill='%2364ffda' fill-opacity='0.1' stroke='%2364ffda' stroke-width='2'/%3E%3Cpath d='M75 65 L90 50 L105 65 M90 50 L90 85' stroke='%2364ffda' stroke-width='2'/%3E%3C/svg%3E";

  const halcyonImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120' fill='none'%3E%3Crect width='180' height='120' fill='%230a192f'/%3E%3Crect x='50' y='30' width='80' height='60' rx='3' stroke='%2364ffda' stroke-width='2'/%3E%3Cpath d='M60 45 H120 M60 60 H100 M60 75 H90' stroke='%2364ffda' stroke-width='2'/%3E%3C/svg%3E";

  const portfolioImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120' fill='none'%3E%3Crect width='180' height='120' fill='%230a192f'/%3E%3Crect x='40' y='30' width='100' height='60' rx='3' stroke='%2364ffda' stroke-width='2'/%3E%3Ccircle cx='60' cy='45' r='5' fill='%2364ffda' fill-opacity='0.3'/%3E%3Cpath d='M75 45 H120 M55 65 H125 M55 80 H100' stroke='%2364ffda' stroke-width='2'/%3E%3C/svg%3E";

  const blogPosts = [
    {
      year: '2024',
      title: 'Build a Spotify Connected App',
      image: spotifyImg,
      link: 'https://example.com/spotify-app'
    },
    {
      year: '2020',
      title: 'Spotify Profile',
      image: spotifyProfileImg,
      link: 'https://example.com/spotify-profile'
    },
    {
      year: '2019',
      title: 'Halcyon Theme',
      image: halcyonImg,
      link: 'https://example.com/halcyon-theme'
    },
    {
      year: '2018',
      title: 'brittanychiang.com (v4)',
      image: portfolioImg,
      link: 'https://brittanychiang.com'
    }
  ];

  return (
    <div id="blog" className="blog-container">
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <ExperienceItem key={index}>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-post-link"
            >
              {/* <div className="blog-post-content">
                <div className="blog-image-container">
                  <img src={post.image} alt={post.title} className="blog-image" />
                </div>
                
                <div className="blog-details">
                  <p className="blog-year">{post.year}</p>
                  <h3 className="blog-title">
                    {post.title}
                    <span className="arrow-icon">↗</span>
                  </h3>
                </div>
              </div> */}
            </a>
          </ExperienceItem>
        ))}
      </div>
    </div>
  );
};

export default Blog; 