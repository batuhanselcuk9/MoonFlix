import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";

import * as Config from "../constants/Config";

const AppRoutes = () => {
    const homePath = `/${Config.HOME_PAGE}`;

    return (
        <Routes>
            {/* Tarayıcı / adresine gelince HOME_PAGE'e yönlendir */}
            <Route path="/" element={<Navigate to={homePath} replace />} />

            {/* Arama sayfası */}
            <Route
                path={`${homePath}/:category/search/:keyword`}
                element={<Catalog />}
            />

            {/* Detay sayfası */}
            <Route
                path={`${homePath}/:category/:id`}
                element={<Detail />}
            />

            {/* Kategori listesi */}
            <Route
                path={`${homePath}/:category`}
                element={<Catalog />}
            />

            {/* Ana sayfa */}
            <Route
                path={homePath}
                element={<Home />}
            />

            {/* Bilinmeyen tüm URL’leri ana sayfaya at */}
            <Route path="*" element={<Navigate to={homePath} replace />} />
        </Routes>
    );
};

export default AppRoutes;