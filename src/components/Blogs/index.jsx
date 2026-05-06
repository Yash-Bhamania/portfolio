import React from "react";
import "./style.scss";
import Section from "../Shared/section";
import BlogCard from "./Blog-card";
import blog1 from "../../images/blogs/blog-thumb-1.jpg";
import blog2 from "../../images/blogs/blog-thumb-2.jpg";
import blog3 from "../../images/blogs/blog-thumb-3.jpg";

const Blogs = () => {
    return (
        <Section
            id="blog"
            title="Blogs & Articles"
            background="dark"
        >
            <div className="blog-content-wrapper">
                <BlogCard
                    user="Yash Bhamania"
                    date="jan 8 2024"
                    image={blog1}
                    title="Lorem Ipsum is simply dummy text  "
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
                />
                <BlogCard
                    user="Yash Bhamania"
                    date="jan 8 2024"
                    image={blog2}
                    title="Lorem Ipsum is simply dummy text  "
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
                />
                <BlogCard
                    user="Yash Bhamania"
                    date="jan 8 2024"
                    image={blog3}
                    title="Lorem Ipsum is simply dummy text  "
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
                />
            </div>
        </Section>
    );
};

export default Blogs;
