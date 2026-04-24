function Lists() {
  // const items = ["Item 1", "Item 2", "Item 3"];
  // const listItems = items.map((i) => <li>{i}</li>);

  const items = [
    { id: 1, name: "Item 1", number: 10 },
    { id: 2, name: "Item 2", number: 20 },
    { id: 3, name: "Item 3", number: 30 },
  ];

  const itemsList = items.map((item) => (
    <li key={item.id}>
      {item.name}: {item.number}
    </li>
  ));
  return <ol>{itemsList}</ol>;
}

export default Lists;
