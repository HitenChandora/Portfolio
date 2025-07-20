'use client';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Blog() {
    const blogPosts = [
        {
          title: 'Building Scalable React Applications',
          excerpt: 'Learn how to structure React applications for scale with proper state management, component architecture, and performance optimization.',
          date: '2024-01-15',
          readTime: '8 min read',
          category: 'React',
          image: '/api/placeholder/400/200'
        },
        {
          title: 'Next.js 14: New Features and Performance',
          excerpt: 'Exploring the latest features in Next.js 14 including server components, improved routing, and performance enhancements.',
          date: '2024-01-10',
          readTime: '6 min read',
          category: 'Next.js',
          image: '/api/placeholder/400/200'
        },
        {
          title: 'TypeScript Best Practices in 2024',
          excerpt: 'Advanced TypeScript patterns and best practices for building maintainable and type-safe applications.',
          date: '2024-01-05',
          readTime: '10 min read',
          category: 'TypeScript',
          image: '/api/placeholder/400/200'
        }
      ];
    return(
        <section id="blog" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Latest Blog Posts
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Sharing knowledge and insights about web development, technology trends, and best practices
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-black/50 border border-gray-800/50 rounded-xl overflow-hidden hover:border-green-500/50 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10"
              >
                <div className="h-48 bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-600/10"></div>
                  <BookOpen className="w-12 h-12 text-green-400 relative z-10" />
                </div>


                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>


                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>


                  <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>


                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <button className="text-green-400 hover:text-green-300 transition-colors font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>


          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 border border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-gray-950 transition-all duration-300">
              View All Posts
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    );
};