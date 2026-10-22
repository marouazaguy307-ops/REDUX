const initialState ={
        user:{id:1,username:"amine"},
        articles:[{id:2,disignation:"Mouse",famille:"keybrod"},{id:3,disignation:"keyboard",famille:"CONSOMABLE"},{id:4,disignation:"Mouse",famille:"hello"},{id:5,disignation:"Mouse",famille:"salut"}] ,
        categories :[],
        fournisseurs :[]
}

function articlesReducer(state=initialState ,action){
        switch(action.type){
                case "AJOUTER_ARTICLE":
                        //ajouter le code de l'ajout
                        return{...state ,articles:[...state.articles,action.payload]}

                case "MODIFIER_ARTICLES":
                        //ajouter le code de la modification 
                        const updatearticles= state.articles.map(function(article){
                                if(article.id === parseInt(action.payload.id)){
                                        return action.payload
                                }
                                return article
                        })
                        return {...state,articles:updatearticles}
                case"SUPPRIMER_ARTICLE":
                        // ajouter le code de la suppression 
                        const newarticles=[...state.articles.filter(function(item){
                                return item.id !== action.payload
                        })]
                        return{...state,articles:newarticles}
                default :
                        return state
                
        }
}
export default articlesReducer;