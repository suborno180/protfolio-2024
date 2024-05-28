import React from "react";

const PageTitle = ({title}: {title: string}) => {
  return (
    <>
      <section className="w-full flex items-center justify-between">
        <div className="container mx-auto px-4 lg:px-10 mb-10">
          <h1 className="text-3xl md:text-5xl border-b border-success pb-2">
            {title}
          </h1>
        </div>
      </section>
    </>
  );
};

export default PageTitle;
