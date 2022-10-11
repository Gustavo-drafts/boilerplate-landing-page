import { Cake } from 'phosphor-react';


export function Footer() {
  return (
    <div className="bg-zinc-900 h-14 w-full sticky inset-x-0">
      <div className="flex flex-row justify-between p-3">
        <a href="#" className="flex flex-row gap-2 hover:text-white">
          Exemplo 1
          <Cake size={20} />
        </a>
        <a href="#" className="flex flex-row gap-2 hover:text-white">
          Exemplo 2
          <Cake size={20} />
        </a>
        <a href="#" className="flex flex-row gap-2 hover:text-white">
          Exemplo 3
          <Cake size={20} />
        </a>
      </div>
    </div>
  )
}