import React from "react";

export default async function Page({ params }: { params: any }) {
  const { project } = params;
  console.log(params);

  // Fetch content from your
  const data = {
    title: "Hello World",
    body: "This is a simple example of a dynamic route.",
  };

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      {}
    </div>
  );
}
