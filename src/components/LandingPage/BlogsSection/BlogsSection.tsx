import EyeBrowSection from "@/shared/EyeBrowSection.tsx";
import BlogCard from "./BlogCard";
import Container from "@/components/layouts/Container";

const BLOG_CONTENT = [
  {
    authorImage: "/assets/images/blogs/author-image.svg",
    authorName: "Doman Smith",
    image: "/assets/images/blogs/blog-content-image.svg",
    date: "03 Sep",
    title: "A place where start new life with adventure travel",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ..",
  },
  {
    authorImage: "/assets/images/blogs/author-image.svg",
    authorName: "Doman Smith",
    image: "/assets/images/blogs/blog-content-image-two.svg",
    date: "03 Sep",
    title: "A place where start new life with adventure travel",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ..",
  },
  {
    authorImage: "/assets/images/blogs/author-image.svg",
    authorName: "Doman Smith",
    image: "/assets/images/blogs/blog-content-image-three.svg",
    date: "03 Sep",
    title: "A place where start new life with adventure travel",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ..",
  },
];

const BlogsSection = () => {
  return (
    <section className="mb-[80px]">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <EyeBrowSection eyebrowTitle="Blogs" className="" />
          <h3 className="text-4xl small-caps">News & Updates</h3>
        </div>
        <div className="flex gap-6">
          {BLOG_CONTENT.map((blogItem, blogIndex) => (
            <BlogCard blogItem={blogItem} key={blogIndex} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogsSection;
