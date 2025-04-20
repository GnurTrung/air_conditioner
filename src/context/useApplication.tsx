import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const ApplicationContext = createContext([] as any);
export const useApplication = () => useContext(ApplicationContext);

export const ApplicationProvider = ({ children }: any) => {
  const [openWallet, setOpenWallet] = useState<any>(false);
  const [openModalRarity, setOpenModalRarity] = useState<any>(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const value = useMemo(
    () => ({
      openWallet,
      setOpenWallet,
      openModalRarity,
      setOpenModalRarity,
    }),
    [openWallet, setOpenWallet, openModalRarity, setOpenModalRarity]
  );

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};
