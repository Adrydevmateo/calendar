/**
 * * Creates a li element and append it to an unordered list element
 * @param collection
 * @param listElement
 */
export function CreateListItems(
  collection: Array<string>,
  listElement: HTMLUListElement
) {
  collection.forEach((element) => {
    const newListItem: HTMLLIElement = document.createElement("li");
    newListItem.innerText = element;

    listElement.appendChild(newListItem);
  });
}
