export function CreateListItems(collection: Array<string>) {
  collection.forEach((element) => {
    const newListItem: HTMLLIElement = document.createElement("li");
    newListItem.innerText = element;
  });
}
