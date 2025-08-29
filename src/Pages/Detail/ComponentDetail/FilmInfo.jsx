import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getFilmDetailbyIDActionThunk } from "../../../redux/reducers/FilmReducer";

const FilmInfo = () => {
  const param = useParams();

  const { filmDetail } = useSelector((state) => state.FilmReducer);

  const dispatch = useDispatch();

  const getFilmbyID = async () => {
    const actionThunk = getFilmDetailbyIDActionThunk(param.maPhim);
    dispatch(actionThunk);
  };

  useEffect(() => {
    getFilmbyID();
  }, [param.maPhim]);

  return (
    <div className="max-w-6xl mx-auto p-6 pt-18">
      {/* Banner + Poster */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Poster */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={filmDetail.hinhAnh}
            alt={filmDetail.tenPhim}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-3">{filmDetail.tenPhim}</h1>
            <p className="text-gray-600 mb-4">{filmDetail.moTa}</p>

            {/* Tags */}
            <div className="flex gap-3 mb-4">
              {filmDetail.hot && (
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Hot
                </span>
              )}
              {filmDetail.dangChieu && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Đang chiếu
                </span>
              )}
              {filmDetail.sapChieu && (
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                  Sắp chiếu
                </span>
              )}
            </div>

            {/* Extra Info */}
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Ngày khởi chiếu:</span>{" "}
                {new Date(filmDetail.ngayKhoiChieu).toLocaleDateString("vi-VN")}
              </p>
              <p>
                <span className="font-semibold">Đánh giá:</span>{" "}
                <span className="text-yellow-500">
                  ⭐ {filmDetail.danhGia}/10
                </span>
              </p>
            </div>

            <div>
              <div className="mt-50">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mr-5"
                >
                  <NavLink to={`${filmDetail.trailer}`}>Xem trailer</NavLink>
                </button>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Mua vé ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmInfo;
