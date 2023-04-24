import { createContext, useState } from "react";

export const VideoContext = createContext()

export function VideoContextsProvider({children}) {
  // const [] = useState()

  return (
    <VideoContext.Provider value={""}>
      {children}
    </VideoContext.Provider>
  )
}