import { Accordion } from "flowbite-react";
import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <div className="container mx-auto px-2 sm:px-4 py-2.5 my-20 mt-10">
    <Helmet>
        <title>Blogs - chopwell</title>
    </Helmet>
      <Accordion>
        <Accordion.Panel>
          {blogs.map((blog) => {
            return (
              <React.Fragment key={blog._id}>
                <Accordion.Title>
                  <p>{blog.question}</p>
                </Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {blog.answer}
                  </p>
                </Accordion.Content>
              </React.Fragment>
            );
          })}
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blogs;
