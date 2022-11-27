/**
 * * Creates a li element and append it to an unordered list element
 * @param collection
 * @param listElement
 */
export function CreateListItems(collection, listElement) {
    collection.forEach((element) => {
        const newListItem = document.createElement("li");
        newListItem.innerText = element;
        listElement.appendChild(newListItem);
    });
}
