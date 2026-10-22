import { useSelector, useDispatch } from "react-redux";
import { deleteArticleAction } from "./redux/actions/articlesActions";

function ListArticles() {
    const list_article = useSelector((state) => state.articles);
    const dispatch = useDispatch();

    return (
        <section>

            {/* En-tête de la liste */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                    <h2 className="text-2xl font-bold text-fuchsia-900">
                        Mes articles
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Consultez et gérez vos produits.
                    </p>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-pink-100 bg-white px-4 py-3 shadow-sm">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-fuchsia-100 font-bold text-fuchsia-700">
                        {list_article.length}
                    </span>

                    <span className="text-sm font-semibold text-slate-600">
                        Articles enregistrés
                    </span>
                </div>

            </div>

            {/* Liste des articles */}
            {list_article.length === 0 ? (

                <div className="rounded-2xl border border-dashed border-pink-300 bg-white px-6 py-16 text-center shadow-sm">

                    <div className="mb-4 text-5xl">📦</div>

                    <h3 className="text-xl font-bold text-slate-700">
                        Aucun article disponible
                    </h3>

                    <p className="mt-2 text-slate-500">
                        La liste de vos articles est actuellement vide.
                    </p>

                </div>

            ) : (

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

                    {list_article.map((article) => (

                        <article
                            key={article.id}
                            className="group rounded-2xl border border-pink-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-fuchsia-200 hover:shadow-xl"
                        >

                            {/* Informations */}
                            <div className="mb-5 flex items-start justify-between gap-3">

                                <div className="flex items-start gap-4">

                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-100 to-pink-100 text-2xl">
                                        📦
                                    </div>

                                    <div>
                                        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-fuchsia-500">
                                            Article #{article.id}
                                        </p>

                                        <h3 className="text-lg font-bold text-slate-800 transition group-hover:text-fuchsia-700">
                                            {article.designation}
                                        </h3>

                                        <p className="mt-2 text-sm text-slate-500">
                                            Famille :{" "}
                                            <span className="font-medium text-slate-700">
                                                {article.famille}
                                            </span>
                                        </p>
                                    </div>

                                </div>

                                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                    Disponible
                                </span>

                            </div>

                            {/* Séparateur */}
                            <div className="mb-5 border-t border-slate-100"></div>

                            {/* Boutons */}
                            <div className="flex flex-wrap gap-3">

                                <button
                                    type="button"
                                    onClick={() =>
                                        alert("La fonction de modification sera ajoutée.")
                                    }
                                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-fuchsia-100 px-4 py-3 font-semibold text-fuchsia-800 transition duration-200 hover:bg-fuchsia-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
                                >
                                    <span>✏️</span>
                                    Éditer
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        const confirmation = window.confirm(
                                            `Voulez-vous supprimer ${article.designation} ?`
                                        );

                                        if (confirmation) {
                                            dispatch(
                                                deleteArticleAction(article.id)
                                            );
                                        }
                                    }}
                                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-rose-50 px-4 py-3 font-semibold text-rose-600 transition duration-200 hover:bg-rose-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-rose-300"
                                >
                                    <span>🗑️</span>
                                    Supprimer
                                </button>

                            </div>

                        </article>

                    ))}

                </div>

            )}

        </section>
    );
}

export default ListArticles;