import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getFilmBannerAPI } from "../../../API/filmBannerAPI";
import { Carousel } from "flowbite-react";

const Banner = () => {
  const query = useQuery({
    queryKey: ["getFilmBanner"],
    queryFn: getFilmBannerAPI,
    staleTime: 5000,
    gcTime: 100000,
  });

  if (query.isLoading) {
    return <div>Loading....</div>;
  } else if (query.error) {
    return <div>Lỗi: {query.error.message}</div>;
  }

  return (
    <div className="w-full h-56 md:h-96 my-10">
      <Carousel slideInterval={3000} pauseOnHover>
        {query.data?.map((item, index) => (
          <img
            key={`${item.maBanner}-${index}`}
            src={item.hinhAnh}
            alt={`banner-${item.maBanner}`}
            className="w-full h-full object-fill"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
