const todoSelector = (store) => store.todo;

export const todoIdsSelector = (store) => todoSelector(store)?.allIds || [];

export const todoByIdSelector = (store, id) => {
  const todoStore = todoSelector(store);

  if (!todoStore) {
    return {};
  }

  const todoItem = todoStore.byIds[id];

  return {
    ...todoItem,
    id,
  };
};

export const todosSelector = (store) =>
todoIdsSelector(store).map((id) => todoByIdSelector(store, id));

export const todoCompletedSelector = (store) => todoSelector(store)?.completed || [];

export const todoFiltersSelector = (store) => todoSelector(store)?.filters || [];