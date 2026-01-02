import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "5 Smart Ways to Track Your Daily Expenses in 2025",
    excerpt: "Discover proven strategies to monitor your spending habits and build better financial awareness.",
    date: "January 2, 2025",
    category: "Financial Tips",
    readTime: "5 min read",
  },
  {
    title: "Understanding UPI: A Complete Guide for Indian Users",
    excerpt: "Everything you need to know about UPI payments and how to maximize its benefits.",
    date: "December 28, 2024",
    category: "Guides",
    readTime: "8 min read",
  },
  {
    title: "How AI is Revolutionizing Personal Finance Management",
    excerpt: "Explore how artificial intelligence is transforming the way we manage our money.",
    date: "December 20, 2024",
    category: "Technology",
    readTime: "6 min read",
  },
  {
    title: "Budget Planning for New Year: A Step-by-Step Guide",
    excerpt: "Start 2025 right with a comprehensive budget that aligns with your financial goals.",
    date: "December 15, 2024",
    category: "Financial Tips",
    readTime: "7 min read",
  },
  {
    title: "Insurance Policies Every Indian Family Should Have",
    excerpt: "Protect your loved ones with the right insurance coverage. Here is what you need.",
    date: "December 10, 2024",
    category: "Insurance",
    readTime: "10 min read",
  },
  {
    title: "Investment Options for Beginners in India",
    excerpt: "New to investing? Start your wealth-building journey with these beginner-friendly options.",
    date: "December 5, 2024",
    category: "Investments",
    readTime: "9 min read",
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | FINIORAA - Financial Insights & Tips</title>
        <meta name="description" content="Explore financial tips, guides, and insights from FINIORAA. Learn how to manage your money better." />
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-background pt-24">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 wave-bg opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Financial <span className="gradient-text">Insights</span> & Tips
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert advice and guides to help you make smarter financial decisions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
