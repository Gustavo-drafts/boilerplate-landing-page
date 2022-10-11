import { MainContent } from "./Content";




export function Main() {

  return (
    <div className="flex flex-col items-center h-full p-2">
      <div className="flex  w-full h-full justify-center">
        <MainContent />
      </div>
    </div>
  )
}