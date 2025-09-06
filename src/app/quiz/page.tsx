export default function QuizPage() {
  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Hedefini Belirle</h1>
      <p className="text-sm text-gray-500 mb-6">Kısa sorularla sana uygun planı çıkaralım.</p>
      {/* TODO: çok adımlı form – zod + useState ile */}
      <form className="space-y-4">
        <label className="block">
          <span className="text-sm">Hedef</span>
          <select className="border rounded w-full p-2">
            <option>Yağ Kaybı</option>
            <option>Kas Artışı</option>
            <option>Güç</option>
          </select>
        </label>
        <button type="submit" className="px-4 py-2 rounded bg-black text-white">Devam</button>
      </form>
    </main>
  )
}
