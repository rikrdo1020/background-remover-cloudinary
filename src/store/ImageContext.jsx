import { createContext, useState } from "react";
import { ImageStatus } from "./types";

export const ImageContext = createContext();

const dataFixed = {
    imageStatus: ImageStatus.READY,
    originalImage: null,
    modifiedImage: null
}
export const DataProvider = ({ children }) => {
    const [data, setData] = useState( dataFixed )
  return (
    <ImageContext.Provider value={{data, setData}}>
        { children }
    </ImageContext.Provider>
  )
}
