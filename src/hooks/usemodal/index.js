import { useContext, useMemo } from "react";
import { ModalContext } from "../../modal/context";

export const useModal = () => {
  const { hide, dispatch, ...state } = useContext(ModalContext);

  const show = ({ component }) => {
    dispatch({
      type: "SHOW_MODAL",
      payload: {
        component,
      },
    });
  };

  const close = () => hide();

  return useMemo(
    () => ({
      close,
      show,
    }),
    [state]
  );
};
