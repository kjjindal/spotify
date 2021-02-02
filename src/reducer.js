export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // token:"BQBmOdoL4f-vN2EhqBonyT3PJjdNKIaGapdKuabtyFQyP-al1kuR-h6rj1-LykO75F0wbDnyMmR7v4rJPpcSHIyiBY8m_4_lDAKm5EJs5ITnW-oNQAL_w-ajjJDOjOBNlXkQ8n3ZsMGS4_CdwfgJXuNvJtJMbRX-QcPgcmaPoXXLg2Tn"
};

const reducer=(state,action)=>{
    console.log(action);

    switch(action.type){
        case 'SET_USER':

        return {
            ...state,user:action.user
        }

        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token

            }

            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists:action.playlists
    
                }  
                
                case 'SET_DISCOVER_WEEKLY':
                    return {
                        ...state,
                        discover_weekly:action.discover_weekly
        
                    }      

        default:
            return state;

    }

}

export default reducer;