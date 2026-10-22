import ListArticles from "./ListArticles.jsx";

function App() {
    return (
        <div className="min-h-screen bg-rose-50 text-slate-800">

            <header className="bg-gradient-to-r from-fuchsia-800 via-purple-700 to-pink-600 text-white shadow-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

                    <div>
                        <h1 className="text-2xl font-extrabold tracking-wide md:text-3xl">
                            Stock<span className="text-pink-300">Flow</span>
                        </h1>

                        <p className="mt-1 text-sm text-purple-100">
                            Gestion intelligente de votre stock
                        </p>
                    </div>

                    <div className="hidden rounded-xl border border-white/20 bg-white/10 px-4 py-3 sm:block">
                        <p className="text-xs text-pink-100">
                            APPLICATION
                        </p>
                        <p className="font-semibold">
                            Gestion des articles
                        </p>
                    </div>

                </div>
            </header>

            <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

                <div className="mb-8">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fuchsia-600">
                        Tableau de bord
                    </p>

                    <h2 className="text-3xl font-extrabold text-slate-800">
                        Bonjour 👋
                    </h2>

                    <p className="mt-2 text-slate-500">
                        Gérez et consultez vos articles facilement.
                    </p>
                </div>

                <ListArticles />

            </main>


        </div>
    );
}

export default App;