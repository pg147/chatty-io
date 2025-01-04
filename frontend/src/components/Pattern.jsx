
export default function Pattern() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {Array.from({ length: 9 }).map((boxes, index) => (
        <div key={index} className={`size-28 rounded-2xl ${(index + 1) % 2 === 0 ? 'bg-primary/10 animate-pulse' : 'bg-white border-2 border-primary'}`}>

        </div>
      ))}
    </div>
  )
}
