// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('post').title('Articoli'),
      S.documentTypeListItem('strategy').title('Strategie'),
      S.divider(),
      ...S.documentTypeListItems().filter(  
        (item) => item.getId() && !['post', 'strategy'].includes(item.getId()),
      ),
    ])
