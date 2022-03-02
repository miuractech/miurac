import { configureStore } from "@reduxjs/toolkit";

import { AdminAuthSlice } from "@miurac/admin-auth";
// import metaProductFamilyReducers from "../Midl/meta-products/store/meta-product.family.slice";
// import metaProductCategoryReducers from "../Midl/meta-products/store/meta-product.category.slice";
// import metaProductSubCategoryReducers from "../Midl/meta-products/store/meta-product.subcategory.slice";
// import staffRoleReducers from "../Midl/staff-role/store/staff-role.slice";

export const store = configureStore({
  reducer: {
    adminUser: AdminAuthSlice.Slice,
    // staffRole: staffRoleReducers,
    // metaProductFamily: metaProductFamilyReducers,
    // metaProductCategory: metaProductCategoryReducers,
    // metaProductSubCategory: metaProductSubCategoryReducers,
  },
  middleware: (middleware) =>
    middleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
