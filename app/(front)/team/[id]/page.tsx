import React from "react";

type PageProps = {
  params: {
    id: string;
  };
};
const Page = ({ params }: PageProps) => {
  return <div>{params.id}</div>;
};

export default Page;
