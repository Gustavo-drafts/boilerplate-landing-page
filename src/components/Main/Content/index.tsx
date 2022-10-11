import { Card } from "../Card";

export function MainContent() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8 p-4">
        <section className="flex flex-col text-center items-center gap-6 mb-6 max-w-full">
          <Card />
          <Card />
        </section>

        <section className="flex flex-col items-center gap-6 mb-6 max-w-full">
          <Card />
          <div className="max-w-full max-h-full ">
            <img src='https://picsum.photos/id/1/800/600' className="shadow-md shadow-black rounded-lg" />
          </div>
          <Card />
          <Card />
        </section>
      </div>
    </div>
  )
}