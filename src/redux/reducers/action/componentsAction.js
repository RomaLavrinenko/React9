const componentsActionType = {
    SET_TODOS: 'SET_TODOS',
    SET_ALBUMS: 'SET_ALBUMS',
    SET_COMMENTS: 'SET_COMMENTS',
};

export  const todosAction = {
    setTodos : (todos) => ({type: componentsActionType.SET_TODOS, payload: todos})
};

export const albumsAction = {
    setAlbums : (albums) => ({type: componentsActionType.SET_ALBUMS, payload: albums})
};

export const commentsAction = {
    setComments : (comments) => ({type: componentsActionType.SET_COMMENTS, payload: comments})
};

export default componentsActionType;

