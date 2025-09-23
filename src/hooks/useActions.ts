import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import * as cartActions from '../store/cartSlice';
import * as favouritesActions from '../store/favouritesSlice';

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(
    { ...cartActions, ...favouritesActions }, dispatch),
  [dispatch]);
};
